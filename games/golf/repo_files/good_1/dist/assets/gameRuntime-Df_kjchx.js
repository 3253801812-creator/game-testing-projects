import{c as cl,j as N,r as Gi}from"./index-iqpYqTVH.js";const xa="179",ul=0,La=1,dl=2,Do=1,hl=2,wn=3,Vn=0,Xt=1,An=2,kn=0,Pi=1,Ia=2,Ua=3,Na=4,fl=5,si=100,pl=101,ml=102,gl=103,_l=104,xl=200,vl=201,yl=202,Sl=203,Ds=204,Ls=205,Ml=206,El=207,bl=208,Tl=209,wl=210,Al=211,Rl=212,Cl=213,Pl=214,Is=0,Us=1,Ns=2,Ii=3,Fs=4,Os=5,zs=6,Bs=7,Lo=0,Dl=1,Ll=2,Hn=0,Il=1,Ul=2,Nl=3,Fl=4,Ol=5,zl=6,Bl=7,Io=300,Ui=301,Ni=302,ks=303,Hs=304,Yr=306,Vs=1e3,oi=1001,Gs=1002,ln=1003,kl=1004,gr=1005,fn=1006,Qr=1007,li=1008,_n=1009,Uo=1010,No=1011,Zi=1012,va=1013,ci=1014,Rn=1015,er=1016,ya=1017,Sa=1018,Ki=1020,Fo=35902,Oo=1021,zo=1022,on=1023,Ji=1026,Qi=1027,Bo=1028,Ma=1029,ko=1030,Ea=1031,ba=1033,zr=33776,Br=33777,kr=33778,Hr=33779,Ws=35840,Xs=35841,js=35842,qs=35843,Ys=36196,$s=37492,Zs=37496,Ks=37808,Js=37809,Qs=37810,ea=37811,ta=37812,na=37813,ia=37814,ra=37815,sa=37816,aa=37817,oa=37818,la=37819,ca=37820,ua=37821,Vr=36492,da=36494,ha=36495,Ho=36283,fa=36284,pa=36285,ma=36286,Hl=3200,Vl=3201,Vo=0,Gl=1,Bn="",en="srgb",Fi="srgb-linear",Wr="linear",vt="srgb",pi=7680,Fa=519,Wl=512,Xl=513,jl=514,Go=515,ql=516,Yl=517,$l=518,Zl=519,Oa=35044,za="300 es",pn=2e3,Xr=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],es=Math.PI/180,ga=180/Math.PI;function tr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function Kl(r,e){return(r%e+e)%e}function ts(r,e,t){return(1-t)*r+t*e}function Wi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*s+e.x,this.y=a*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,o,l){let i=n[s+0],u=n[s+1],f=n[s+2],p=n[s+3];const m=a[o+0],g=a[o+1],M=a[o+2],S=a[o+3];if(l===0){e[t+0]=i,e[t+1]=u,e[t+2]=f,e[t+3]=p;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=M,e[t+3]=S;return}if(p!==S||i!==m||u!==g||f!==M){let _=1-l;const d=i*m+u*g+f*M+p*S,I=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const U=Math.sqrt(A),L=Math.atan2(U,d*I);_=Math.sin(_*L)/U,l=Math.sin(l*L)/U}const T=l*I;if(i=i*_+m*T,u=u*_+g*T,f=f*_+M*T,p=p*_+S*T,_===1-l){const U=1/Math.sqrt(i*i+u*u+f*f+p*p);i*=U,u*=U,f*=U,p*=U}}e[t]=i,e[t+1]=u,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,o){const l=n[s],i=n[s+1],u=n[s+2],f=n[s+3],p=a[o],m=a[o+1],g=a[o+2],M=a[o+3];return e[t]=l*M+f*p+i*g-u*m,e[t+1]=i*M+f*m+u*p-l*g,e[t+2]=u*M+f*g+l*m-i*p,e[t+3]=f*M-l*p-i*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,o=e._order,l=Math.cos,i=Math.sin,u=l(n/2),f=l(s/2),p=l(a/2),m=i(n/2),g=i(s/2),M=i(a/2);switch(o){case"XYZ":this._x=m*f*p+u*g*M,this._y=u*g*p-m*f*M,this._z=u*f*M+m*g*p,this._w=u*f*p-m*g*M;break;case"YXZ":this._x=m*f*p+u*g*M,this._y=u*g*p-m*f*M,this._z=u*f*M-m*g*p,this._w=u*f*p+m*g*M;break;case"ZXY":this._x=m*f*p-u*g*M,this._y=u*g*p+m*f*M,this._z=u*f*M+m*g*p,this._w=u*f*p-m*g*M;break;case"ZYX":this._x=m*f*p-u*g*M,this._y=u*g*p+m*f*M,this._z=u*f*M-m*g*p,this._w=u*f*p+m*g*M;break;case"YZX":this._x=m*f*p+u*g*M,this._y=u*g*p+m*f*M,this._z=u*f*M-m*g*p,this._w=u*f*p-m*g*M;break;case"XZY":this._x=m*f*p-u*g*M,this._y=u*g*p-m*f*M,this._z=u*f*M+m*g*p,this._w=u*f*p+m*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],o=t[1],l=t[5],i=t[9],u=t[2],f=t[6],p=t[10],m=n+l+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-i)*g,this._y=(a-u)*g,this._z=(o-s)*g}else if(n>l&&n>p){const g=2*Math.sqrt(1+n-l-p);this._w=(f-i)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(a+u)/g}else if(l>p){const g=2*Math.sqrt(1+l-n-p);this._w=(a-u)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(i+f)/g}else{const g=2*Math.sqrt(1+p-n-l);this._w=(o-s)/g,this._x=(a+u)/g,this._y=(i+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,o=e._w,l=t._x,i=t._y,u=t._z,f=t._w;return this._x=n*f+o*l+s*u-a*i,this._y=s*f+o*i+a*l-n*u,this._z=a*f+o*u+n*i-s*l,this._w=o*f-n*l-s*i-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,o=this._w;let l=o*e._w+n*e._x+s*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const i=1-l*l;if(i<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const u=Math.sqrt(i),f=Math.atan2(u,l),p=Math.sin((1-t)*f)/u,m=Math.sin(t*f)/u;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=a*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,o=e.y,l=e.z,i=e.w,u=2*(o*s-l*n),f=2*(l*t-a*s),p=2*(a*n-o*t);return this.x=t+i*u+o*p-l*f,this.y=n+i*f+l*u-a*p,this.z=s+i*p+a*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,o=t.x,l=t.y,i=t.z;return this.x=s*i-a*l,this.y=a*o-n*i,this.z=n*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ns=new G,Ba=new nr;class nt{constructor(e,t,n,s,a,o,l,i,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,l,i,u)}set(e,t,n,s,a,o,l,i,u){const f=this.elements;return f[0]=e,f[1]=s,f[2]=l,f[3]=t,f[4]=a,f[5]=i,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],l=n[3],i=n[6],u=n[1],f=n[4],p=n[7],m=n[2],g=n[5],M=n[8],S=s[0],_=s[3],d=s[6],I=s[1],A=s[4],T=s[7],U=s[2],L=s[5],O=s[8];return a[0]=o*S+l*I+i*U,a[3]=o*_+l*A+i*L,a[6]=o*d+l*T+i*O,a[1]=u*S+f*I+p*U,a[4]=u*_+f*A+p*L,a[7]=u*d+f*T+p*O,a[2]=m*S+g*I+M*U,a[5]=m*_+g*A+M*L,a[8]=m*d+g*T+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],l=e[5],i=e[6],u=e[7],f=e[8];return t*o*f-t*l*u-n*a*f+n*l*i+s*a*u-s*o*i}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],l=e[5],i=e[6],u=e[7],f=e[8],p=f*o-l*u,m=l*i-f*a,g=u*a-o*i,M=t*p+n*m+s*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=p*S,e[1]=(s*u-f*n)*S,e[2]=(l*n-s*o)*S,e[3]=m*S,e[4]=(f*t-s*i)*S,e[5]=(s*a-l*t)*S,e[6]=g*S,e[7]=(n*i-u*t)*S,e[8]=(o*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,o,l){const i=Math.cos(a),u=Math.sin(a);return this.set(n*i,n*u,-n*(i*o+u*l)+o+e,-s*u,s*i,-s*(-u*o+i*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(is.makeScale(e,t)),this}rotate(e){return this.premultiply(is.makeRotation(-e)),this}translate(e,t){return this.premultiply(is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const is=new nt;function Wo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jl(){const r=jr("canvas");return r.style.display="block",r}const ka={};function Di(r){r in ka||(ka[r]=!0,console.warn(r))}function Ql(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Ha=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ec(){const r={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(s,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===vt&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Wr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,o){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Di("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Di("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fi]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),r}const ft=ec();function Cn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Li(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mi;class tc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=jr("canvas")),mi.width=e.width,mi.height=e.height;const s=mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Cn(a[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nc=0;class Ta{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?a.push(rs(s[o].image)):a.push(rs(s[o]))}else a=rs(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function rs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ic=0;const ss=new G;class jt extends zi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=oi,s=oi,a=fn,o=li,l=on,i=_n,u=jt.DEFAULT_ANISOTROPY,f=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=tr(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=i,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ss).x}get height(){return this.source.getSize(ss).y}get depth(){return this.source.getSize(ss).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Io)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Io;jt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const i=e.elements,u=i[0],f=i[4],p=i[8],m=i[1],g=i[5],M=i[9],S=i[2],_=i[6],d=i[10];if(Math.abs(f-m)<.01&&Math.abs(p-S)<.01&&Math.abs(M-_)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+S)<.1&&Math.abs(M+_)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,T=(g+1)/2,U=(d+1)/2,L=(f+m)/4,O=(p+S)/4,C=(M+_)/4;return A>T&&A>U?A<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(A),s=L/n,a=O/n):T>U?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=L/s,a=C/s):U<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(U),n=O/a,s=C/a),this.set(n,s,a,t),this}let I=Math.sqrt((_-M)*(_-M)+(p-S)*(p-S)+(m-f)*(m-f));return Math.abs(I)<.001&&(I=1),this.x=(_-M)/I,this.y=(p-S)/I,this.z=(m-f)/I,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rc extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:n.depth},a=new jt(s);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ta(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends rc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xo extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sc extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(a,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),xr.subVectors(this.max,Xi),gi.subVectors(e.a,Xi),_i.subVectors(e.b,Xi),xi.subVectors(e.c,Xi),Ln.subVectors(_i,gi),In.subVectors(xi,_i),Kn.subVectors(gi,xi);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!as(t,gi,_i,xi,xr)||(t=[1,0,0,0,1,0,0,0,1],!as(t,gi,_i,xi,xr))?!1:(vr.crossVectors(Ln,In),t=[vr.x,vr.y,vr.z],as(t,gi,_i,xi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new G,new G,new G,new G,new G,new G,new G,new G],nn=new G,_r=new ir,gi=new G,_i=new G,xi=new G,Ln=new G,In=new G,Kn=new G,Xi=new G,xr=new G,vr=new G,Jn=new G;function as(r,e,t,n,s){for(let a=0,o=r.length-3;a<=o;a+=3){Jn.fromArray(r,a);const l=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),i=e.dot(Jn),u=t.dot(Jn),f=n.dot(Jn);if(Math.max(-Math.max(i,u,f),Math.min(i,u,f))>l)return!1}return!0}const ac=new ir,ji=new G,os=new G;class wa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ac.setFromPoints(e).getCenter(n);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(os)),this.expandByPoint(ji.copy(e.center).sub(os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new G,ls=new G,yr=new G,Un=new G,cs=new G,Sr=new G,us=new G;class oc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ls.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(ls);const a=e.distanceTo(t)*.5,o=-this.direction.dot(yr),l=Un.dot(this.direction),i=-Un.dot(yr),u=Un.lengthSq(),f=Math.abs(1-o*o);let p,m,g,M;if(f>0)if(p=o*i-l,m=o*l-i,M=a*f,p>=0)if(m>=-M)if(m<=M){const S=1/f;p*=S,m*=S,g=p*(p+o*m+2*l)+m*(o*p+m+2*i)+u}else m=a,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*i)+u;else m=-a,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*i)+u;else m<=-M?(p=Math.max(0,-(-o*a+l)),m=p>0?-a:Math.min(Math.max(-a,-i),a),g=-p*p+m*(m+2*i)+u):m<=M?(p=0,m=Math.min(Math.max(-a,-i),a),g=m*(m+2*i)+u):(p=Math.max(0,-(o*a+l)),m=p>0?a:Math.min(Math.max(-a,-i),a),g=-p*p+m*(m+2*i)+u);else m=o>0?-a:a,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*i)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ls).addScaledVector(yr,m),g}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,a=e.radius*e.radius;if(s>a)return null;const o=Math.sqrt(a-s),l=n-o,i=n+o;return i<0?null:l<0?this.at(i,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,o,l,i;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),f>=0?(a=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(a=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,i=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,i=(e.min.z-m.z)*p),n>i||l>s)||((l>n||n!==n)&&(n=l),(i<s||s!==s)&&(s=i),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,a){cs.subVectors(t,e),Sr.subVectors(n,e),us.crossVectors(cs,Sr);let o=this.direction.dot(us),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Un.subVectors(this.origin,e);const i=l*this.direction.dot(Sr.crossVectors(Un,Sr));if(i<0)return null;const u=l*this.direction.dot(cs.cross(Un));if(u<0||i+u>o)return null;const f=-l*Un.dot(us);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,s,a,o,l,i,u,f,p,m,g,M,S,_){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,l,i,u,f,p,m,g,M,S,_)}set(e,t,n,s,a,o,l,i,u,f,p,m,g,M,S,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=a,d[5]=o,d[9]=l,d[13]=i,d[2]=u,d[6]=f,d[10]=p,d[14]=m,d[3]=g,d[7]=M,d[11]=S,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),a=1/vi.setFromMatrixColumn(e,1).length(),o=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,o=Math.cos(n),l=Math.sin(n),i=Math.cos(s),u=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const m=o*f,g=o*p,M=l*f,S=l*p;t[0]=i*f,t[4]=-i*p,t[8]=u,t[1]=g+M*u,t[5]=m-S*u,t[9]=-l*i,t[2]=S-m*u,t[6]=M+g*u,t[10]=o*i}else if(e.order==="YXZ"){const m=i*f,g=i*p,M=u*f,S=u*p;t[0]=m+S*l,t[4]=M*l-g,t[8]=o*u,t[1]=o*p,t[5]=o*f,t[9]=-l,t[2]=g*l-M,t[6]=S+m*l,t[10]=o*i}else if(e.order==="ZXY"){const m=i*f,g=i*p,M=u*f,S=u*p;t[0]=m-S*l,t[4]=-o*p,t[8]=M+g*l,t[1]=g+M*l,t[5]=o*f,t[9]=S-m*l,t[2]=-o*u,t[6]=l,t[10]=o*i}else if(e.order==="ZYX"){const m=o*f,g=o*p,M=l*f,S=l*p;t[0]=i*f,t[4]=M*u-g,t[8]=m*u+S,t[1]=i*p,t[5]=S*u+m,t[9]=g*u-M,t[2]=-u,t[6]=l*i,t[10]=o*i}else if(e.order==="YZX"){const m=o*i,g=o*u,M=l*i,S=l*u;t[0]=i*f,t[4]=S-m*p,t[8]=M*p+g,t[1]=p,t[5]=o*f,t[9]=-l*f,t[2]=-u*f,t[6]=g*p+M,t[10]=m-S*p}else if(e.order==="XZY"){const m=o*i,g=o*u,M=l*i,S=l*u;t[0]=i*f,t[4]=-p,t[8]=u*f,t[1]=m*p+S,t[5]=o*f,t[9]=g*p-M,t[2]=M*p-g,t[6]=l*f,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lc,e,cc)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Nn.crossVectors(n,Yt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Nn.crossVectors(n,Yt)),Nn.normalize(),Mr.crossVectors(Yt,Nn),s[0]=Nn.x,s[4]=Mr.x,s[8]=Yt.x,s[1]=Nn.y,s[5]=Mr.y,s[9]=Yt.y,s[2]=Nn.z,s[6]=Mr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],l=n[4],i=n[8],u=n[12],f=n[1],p=n[5],m=n[9],g=n[13],M=n[2],S=n[6],_=n[10],d=n[14],I=n[3],A=n[7],T=n[11],U=n[15],L=s[0],O=s[4],C=s[8],E=s[12],b=s[1],R=s[5],Y=s[9],q=s[13],$=s[2],ae=s[6],j=s[10],fe=s[14],Z=s[3],ye=s[7],Se=s[11],Be=s[15];return a[0]=o*L+l*b+i*$+u*Z,a[4]=o*O+l*R+i*ae+u*ye,a[8]=o*C+l*Y+i*j+u*Se,a[12]=o*E+l*q+i*fe+u*Be,a[1]=f*L+p*b+m*$+g*Z,a[5]=f*O+p*R+m*ae+g*ye,a[9]=f*C+p*Y+m*j+g*Se,a[13]=f*E+p*q+m*fe+g*Be,a[2]=M*L+S*b+_*$+d*Z,a[6]=M*O+S*R+_*ae+d*ye,a[10]=M*C+S*Y+_*j+d*Se,a[14]=M*E+S*q+_*fe+d*Be,a[3]=I*L+A*b+T*$+U*Z,a[7]=I*O+A*R+T*ae+U*ye,a[11]=I*C+A*Y+T*j+U*Se,a[15]=I*E+A*q+T*fe+U*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],o=e[1],l=e[5],i=e[9],u=e[13],f=e[2],p=e[6],m=e[10],g=e[14],M=e[3],S=e[7],_=e[11],d=e[15];return M*(+a*i*p-s*u*p-a*l*m+n*u*m+s*l*g-n*i*g)+S*(+t*i*g-t*u*m+a*o*m-s*o*g+s*u*f-a*i*f)+_*(+t*u*p-t*l*g-a*o*p+n*o*g+a*l*f-n*u*f)+d*(-s*l*f-t*i*p+t*l*m+s*o*p-n*o*m+n*i*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],l=e[5],i=e[6],u=e[7],f=e[8],p=e[9],m=e[10],g=e[11],M=e[12],S=e[13],_=e[14],d=e[15],I=p*_*u-S*m*u+S*i*g-l*_*g-p*i*d+l*m*d,A=M*m*u-f*_*u-M*i*g+o*_*g+f*i*d-o*m*d,T=f*S*u-M*p*u+M*l*g-o*S*g-f*l*d+o*p*d,U=M*p*i-f*S*i-M*l*m+o*S*m+f*l*_-o*p*_,L=t*I+n*A+s*T+a*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=I*O,e[1]=(S*m*a-p*_*a-S*s*g+n*_*g+p*s*d-n*m*d)*O,e[2]=(l*_*a-S*i*a+S*s*u-n*_*u-l*s*d+n*i*d)*O,e[3]=(p*i*a-l*m*a-p*s*u+n*m*u+l*s*g-n*i*g)*O,e[4]=A*O,e[5]=(f*_*a-M*m*a+M*s*g-t*_*g-f*s*d+t*m*d)*O,e[6]=(M*i*a-o*_*a-M*s*u+t*_*u+o*s*d-t*i*d)*O,e[7]=(o*m*a-f*i*a+f*s*u-t*m*u-o*s*g+t*i*g)*O,e[8]=T*O,e[9]=(M*p*a-f*S*a-M*n*g+t*S*g+f*n*d-t*p*d)*O,e[10]=(o*S*a-M*l*a+M*n*u-t*S*u-o*n*d+t*l*d)*O,e[11]=(f*l*a-o*p*a-f*n*u+t*p*u+o*n*g-t*l*g)*O,e[12]=U*O,e[13]=(f*S*s-M*p*s+M*n*m-t*S*m-f*n*_+t*p*_)*O,e[14]=(M*l*s-o*S*s-M*n*i+t*S*i+o*n*_-t*l*_)*O,e[15]=(o*p*s-f*l*s+f*n*i-t*p*i-o*n*m+t*l*m)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,o=e.x,l=e.y,i=e.z,u=a*o,f=a*l;return this.set(u*o+n,u*l-s*i,u*i+s*l,0,u*l+s*i,f*l+n,f*i-s*o,0,u*i-s*l,f*i+s*o,a*i*i+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,o){return this.set(1,n,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,o=t._y,l=t._z,i=t._w,u=a+a,f=o+o,p=l+l,m=a*u,g=a*f,M=a*p,S=o*f,_=o*p,d=l*p,I=i*u,A=i*f,T=i*p,U=n.x,L=n.y,O=n.z;return s[0]=(1-(S+d))*U,s[1]=(g+T)*U,s[2]=(M-A)*U,s[3]=0,s[4]=(g-T)*L,s[5]=(1-(m+d))*L,s[6]=(_+I)*L,s[7]=0,s[8]=(M+A)*O,s[9]=(_-I)*O,s[10]=(1-(m+S))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),l=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);const u=1/a,f=1/o,p=1/l;return rn.elements[0]*=u,rn.elements[1]*=u,rn.elements[2]*=u,rn.elements[4]*=f,rn.elements[5]*=f,rn.elements[6]*=f,rn.elements[8]*=p,rn.elements[9]*=p,rn.elements[10]*=p,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,o,l=pn,i=!1){const u=this.elements,f=2*a/(t-e),p=2*a/(n-s),m=(t+e)/(t-e),g=(n+s)/(n-s);let M,S;if(i)M=a/(o-a),S=o*a/(o-a);else if(l===pn)M=-(o+a)/(o-a),S=-2*o*a/(o-a);else if(l===Xr)M=-o/(o-a),S=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,a,o,l=pn,i=!1){const u=this.elements,f=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),g=-(n+s)/(n-s);let M,S;if(i)M=1/(o-a),S=o/(o-a);else if(l===pn)M=-2/(o-a),S=-(o+a)/(o-a);else if(l===Xr)M=-1/(o-a),S=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=M,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new G,rn=new Rt,lc=new G(0,0,0),cc=new G(1,1,1),Nn=new G,Mr=new G,Yt=new G,Ga=new Rt,Wa=new nr;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],o=s[4],l=s[8],i=s[1],u=s[5],f=s[9],p=s[2],m=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(i,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ot(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(i,a));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(i,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ot(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uc=0;const Xa=new G,yi=new nr,En=new Rt,Er=new G,qi=new G,dc=new G,hc=new nr,ja=new G(1,0,0),qa=new G(0,1,0),Ya=new G(0,0,1),$a={type:"added"},fc={type:"removed"},Si={type:"childadded",child:null},ds={type:"childremoved",child:null};class Ot extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new G,t=new xn,n=new nr,s=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new nt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(ja,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Xa.copy(e).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ja,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(qi,Er,this.up):En.lookAt(Er,qi,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(En),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($a),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fc),ds.child=e,this.dispatchEvent(ds),ds.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($a),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,hc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,i){return l[i.uuid]===void 0&&(l[i.uuid]=i.toJSON(e)),i.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const i=l.shapes;if(Array.isArray(i))for(let u=0,f=i.length;u<f;u++){const p=i[u];a(e.shapes,p)}else a(e.shapes,i)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let i=0,u=this.material.length;i<u;i++)l.push(a(e.materials,this.material[i]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const i=this.animations[l];s.animations.push(a(e.animations,i))}}if(t){const l=o(e.geometries),i=o(e.materials),u=o(e.textures),f=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),M=o(e.nodes);l.length>0&&(n.geometries=l),i.length>0&&(n.materials=i),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),M.length>0&&(n.nodes=M)}return n.object=s,n;function o(l){const i=[];for(const u in l){const f=l[u];delete f.metadata,i.push(f)}return i}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new G(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new G,bn=new G,hs=new G,Tn=new G,Mi=new G,Ei=new G,Za=new G,fs=new G,ps=new G,ms=new G,gs=new wt,_s=new wt,xs=new wt;class an{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){sn.subVectors(s,t),bn.subVectors(n,t),hs.subVectors(e,t);const o=sn.dot(sn),l=sn.dot(bn),i=sn.dot(hs),u=bn.dot(bn),f=bn.dot(hs),p=o*u-l*l;if(p===0)return a.set(0,0,0),null;const m=1/p,g=(u*i-l*f)*m,M=(o*f-l*i)*m;return a.set(1-g-M,M,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,a,o,l,i){return this.getBarycoord(e,t,n,s,Tn)===null?(i.x=0,i.y=0,"z"in i&&(i.z=0),"w"in i&&(i.w=0),null):(i.setScalar(0),i.addScaledVector(a,Tn.x),i.addScaledVector(o,Tn.y),i.addScaledVector(l,Tn.z),i)}static getInterpolatedAttribute(e,t,n,s,a,o){return gs.setScalar(0),_s.setScalar(0),xs.setScalar(0),gs.fromBufferAttribute(e,t),_s.fromBufferAttribute(e,n),xs.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(gs,a.x),o.addScaledVector(_s,a.y),o.addScaledVector(xs,a.z),o}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),bn.subVectors(e,t),sn.cross(bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let o,l;Mi.subVectors(s,n),Ei.subVectors(a,n),fs.subVectors(e,n);const i=Mi.dot(fs),u=Ei.dot(fs);if(i<=0&&u<=0)return t.copy(n);ps.subVectors(e,s);const f=Mi.dot(ps),p=Ei.dot(ps);if(f>=0&&p<=f)return t.copy(s);const m=i*p-f*u;if(m<=0&&i>=0&&f<=0)return o=i/(i-f),t.copy(n).addScaledVector(Mi,o);ms.subVectors(e,a);const g=Mi.dot(ms),M=Ei.dot(ms);if(M>=0&&g<=M)return t.copy(a);const S=g*u-i*M;if(S<=0&&u>=0&&M<=0)return l=u/(u-M),t.copy(n).addScaledVector(Ei,l);const _=f*M-g*p;if(_<=0&&p-f>=0&&g-M>=0)return Za.subVectors(a,s),l=(p-f)/(p-f+(g-M)),t.copy(s).addScaledVector(Za,l);const d=1/(_+S+m);return o=S*d,l=m*d,t.copy(n).addScaledVector(Mi,o).addScaledVector(Ei,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},br={h:0,s:0,l:0};function vs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Kl(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=vs(o,a,e+1/3),this.g=vs(o,a,e),this.b=vs(o,a,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=qo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ft.workingToColorSpace(kt.copy(this),e),Math.round(ot(kt.r*255,0,255))*65536+Math.round(ot(kt.g*255,0,255))*256+Math.round(ot(kt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,a=kt.b,o=Math.max(n,s,a),l=Math.min(n,s,a);let i,u;const f=(l+o)/2;if(l===o)i=0,u=0;else{const p=o-l;switch(u=f<=.5?p/(o+l):p/(2-o-l),o){case n:i=(s-a)/p+(s<a?6:0);break;case s:i=(a-n)/p+2;break;case a:i=(n-s)/p+4;break}i/=6}return e.h=i,e.s=u,e.l=f,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=en){ft.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(br);const n=ts(Fn.h,br.h,t),s=ts(Fn.s,br.s,t),a=ts(Fn.l,br.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new lt;lt.NAMES=qo;let pc=0;class rr extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Pi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Ls,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ds&&(n.blendSrc=this.blendSrc),this.blendDst!==Ls&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const l in a){const i=a[l];delete i.metadata,o.push(i)}return o}if(t){const a=s(e.textures),o=s(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zn extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new G,Tr=new dt;let mc=0;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),a=Gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}}class Yo extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $o extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gc=0;const Qt=new Rt,ys=new Ot,bi=new G,$t=new ir,Yi=new ir,Ut=new G;class vn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wo(e)?$o:Yo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new nt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ys.lookAt(e),ys.updateMatrix(),this.applyMatrix4(ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Ut.addVectors($t.min,Yi.min),$t.expandByPoint(Ut),Ut.addVectors($t.max,Yi.max),$t.expandByPoint(Ut)):($t.expandByPoint(Yi.min),$t.expandByPoint(Yi.max))}$t.getCenter(n);let s=0;for(let a=0,o=e.count;a<o;a++)Ut.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],i=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)Ut.fromBufferAttribute(l,u),i&&(bi.fromBufferAttribute(e,u),Ut.add(bi)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],i=[];for(let C=0;C<n.count;C++)l[C]=new G,i[C]=new G;const u=new G,f=new G,p=new G,m=new dt,g=new dt,M=new dt,S=new G,_=new G;function d(C,E,b){u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,E),p.fromBufferAttribute(n,b),m.fromBufferAttribute(a,C),g.fromBufferAttribute(a,E),M.fromBufferAttribute(a,b),f.sub(u),p.sub(u),g.sub(m),M.sub(m);const R=1/(g.x*M.y-M.x*g.y);isFinite(R)&&(S.copy(f).multiplyScalar(M.y).addScaledVector(p,-g.y).multiplyScalar(R),_.copy(p).multiplyScalar(g.x).addScaledVector(f,-M.x).multiplyScalar(R),l[C].add(S),l[E].add(S),l[b].add(S),i[C].add(_),i[E].add(_),i[b].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let C=0,E=I.length;C<E;++C){const b=I[C],R=b.start,Y=b.count;for(let q=R,$=R+Y;q<$;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const A=new G,T=new G,U=new G,L=new G;function O(C){U.fromBufferAttribute(s,C),L.copy(U);const E=l[C];A.copy(E),A.sub(U.multiplyScalar(U.dot(E))).normalize(),T.crossVectors(L,E);const R=T.dot(i[C])<0?-1:1;o.setXYZW(C,A.x,A.y,A.z,R)}for(let C=0,E=I.length;C<E;++C){const b=I[C],R=b.start,Y=b.count;for(let q=R,$=R+Y;q<$;q+=3)O(e.getX(q+0)),O(e.getX(q+1)),O(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const s=new G,a=new G,o=new G,l=new G,i=new G,u=new G,f=new G,p=new G;if(e)for(let m=0,g=e.count;m<g;m+=3){const M=e.getX(m+0),S=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,S),o.fromBufferAttribute(t,_),f.subVectors(o,a),p.subVectors(s,a),f.cross(p),l.fromBufferAttribute(n,M),i.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),l.add(f),i.add(f),u.add(f),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(S,i.x,i.y,i.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let m=0,g=t.count;m<g;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,a),p.subVectors(s,a),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(l,i){const u=l.array,f=l.itemSize,p=l.normalized,m=new u.constructor(i.length*f);let g=0,M=0;for(let S=0,_=i.length;S<_;S++){l.isInterleavedBufferAttribute?g=i[S]*l.data.stride+l.offset:g=i[S]*f;for(let d=0;d<f;d++)m[M++]=u[g++]}return new gn(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,s=this.attributes;for(const l in s){const i=s[l],u=e(i,n);t.setAttribute(l,u)}const a=this.morphAttributes;for(const l in a){const i=[],u=a[l];for(let f=0,p=u.length;f<p;f++){const m=u[f],g=e(m,n);i.push(g)}t.morphAttributes[l]=i}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,i=o.length;l<i;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const i=this.parameters;for(const u in i)i[u]!==void 0&&(e[u]=i[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const i in n){const u=n[i];e.data.attributes[i]=u.toJSON(e.data)}const s={};let a=!1;for(const i in this.morphAttributes){const u=this.morphAttributes[i],f=[];for(let p=0,m=u.length;p<m;p++){const g=u[p];f.push(g.toJSON(e.data))}f.length>0&&(s[i]=f,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(t))}const a=e.morphAttributes;for(const u in a){const f=[],p=a[u];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const i=e.boundingSphere;return i!==null&&(this.boundingSphere=i.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new Rt,Qn=new oc,wr=new wa,Ja=new G,Ar=new G,Rr=new G,Cr=new G,Ss=new G,Pr=new G,Qa=new G,Dr=new G;class mn extends Ot{constructor(e=new vn,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){Pr.set(0,0,0);for(let i=0,u=a.length;i<u;i++){const f=l[i],p=a[i];f!==0&&(Ss.fromBufferAttribute(p,e),o?Pr.addScaledVector(Ss,f):Pr.addScaledVector(Ss.sub(t),f))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(a),Qn.copy(e.ray).recast(e.near),!(wr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(wr,Ja)===null||Qn.origin.distanceToSquared(Ja)>(e.far-e.near)**2))&&(Ka.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,o=this.material,l=a.index,i=a.attributes.position,u=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,m=a.groups,g=a.drawRange;if(l!==null)if(Array.isArray(o))for(let M=0,S=m.length;M<S;M++){const _=m[M],d=o[_.materialIndex],I=Math.max(_.start,g.start),A=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let T=I,U=A;T<U;T+=3){const L=l.getX(T),O=l.getX(T+1),C=l.getX(T+2);s=Lr(this,d,e,n,u,f,p,L,O,C),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const M=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let _=M,d=S;_<d;_+=3){const I=l.getX(_),A=l.getX(_+1),T=l.getX(_+2);s=Lr(this,o,e,n,u,f,p,I,A,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(i!==void 0)if(Array.isArray(o))for(let M=0,S=m.length;M<S;M++){const _=m[M],d=o[_.materialIndex],I=Math.max(_.start,g.start),A=Math.min(i.count,Math.min(_.start+_.count,g.start+g.count));for(let T=I,U=A;T<U;T+=3){const L=T,O=T+1,C=T+2;s=Lr(this,d,e,n,u,f,p,L,O,C),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const M=Math.max(0,g.start),S=Math.min(i.count,g.start+g.count);for(let _=M,d=S;_<d;_+=3){const I=_,A=_+1,T=_+2;s=Lr(this,o,e,n,u,f,p,I,A,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function _c(r,e,t,n,s,a,o,l){let i;if(e.side===Xt?i=n.intersectTriangle(o,a,s,!0,l):i=n.intersectTriangle(s,a,o,e.side===Vn,l),i===null)return null;Dr.copy(l),Dr.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Dr);return u<t.near||u>t.far?null:{distance:u,point:Dr.clone(),object:r}}function Lr(r,e,t,n,s,a,o,l,i,u){r.getVertexPosition(l,Ar),r.getVertexPosition(i,Rr),r.getVertexPosition(u,Cr);const f=_c(r,e,t,n,Ar,Rr,Cr,Qa);if(f){const p=new G;an.getBarycoord(Qa,Ar,Rr,Cr,p),s&&(f.uv=an.getInterpolatedAttribute(s,l,i,u,p,new dt)),a&&(f.uv1=an.getInterpolatedAttribute(a,l,i,u,p,new dt)),o&&(f.normal=an.getInterpolatedAttribute(o,l,i,u,p,new G),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:l,b:i,c:u,normal:new G,materialIndex:0};an.getNormal(Ar,Rr,Cr,m.normal),f.face=m,f.barycoord=p}return f}class Wt extends vn{constructor(e=1,t=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const l=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const i=[],u=[],f=[],p=[];let m=0,g=0;M("z","y","x",-1,-1,n,t,e,o,a,0),M("z","y","x",1,-1,n,t,-e,o,a,1),M("x","z","y",1,1,e,n,t,s,o,2),M("x","z","y",1,-1,e,n,-t,s,o,3),M("x","y","z",1,-1,e,t,n,s,a,4),M("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(i),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function M(S,_,d,I,A,T,U,L,O,C,E){const b=T/O,R=U/C,Y=T/2,q=U/2,$=L/2,ae=O+1,j=C+1;let fe=0,Z=0;const ye=new G;for(let Se=0;Se<j;Se++){const Be=Se*R-q;for(let $e=0;$e<ae;$e++){const at=$e*b-Y;ye[S]=at*I,ye[_]=Be*A,ye[d]=$,u.push(ye.x,ye.y,ye.z),ye[S]=0,ye[_]=0,ye[d]=L>0?1:-1,f.push(ye.x,ye.y,ye.z),p.push($e/O),p.push(1-Se/C),fe+=1}}for(let Se=0;Se<C;Se++)for(let Be=0;Be<O;Be++){const $e=m+Be+ae*Se,at=m+Be+ae*(Se+1),ct=m+(Be+1)+ae*(Se+1),te=m+(Be+1)+ae*Se;i.push($e,at,te),i.push(at,ct,te),Z+=6}l.addGroup(g,Z,E),g+=Z,m+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=Oi(r[t]);for(const s in n)e[s]=n[s]}return e}function xc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Zo(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const vc={clone:Oi,merge:Vt};var yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yc,this.fragmentShader=Sc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=xc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ko extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new G,eo=new dt,to=new dt;class Zt extends Ko{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,eo,to),t.subVectors(to,eo)}setViewOffset(e,t,n,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const i=o.fullWidth,u=o.fullHeight;a+=o.offsetX*s/i,t-=o.offsetY*n/u,s*=o.width/i,n*=o.height/u}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,wi=1;class Mc extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(Ti,wi,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Ti,wi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Ti,wi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Ti,wi,e,t);l.layers=this.layers,this.add(l);const i=new Zt(Ti,wi,e,t);i.layers=this.layers,this.add(i);const u=new Zt(Ti,wi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,o,l,i]=t;for(const u of t)this.remove(u);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),i.up.set(0,1,0),i.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),i.up.set(0,-1,0),i.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,i,u,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,i),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Jo extends jt{constructor(e=[],t=Ui,n,s,a,o,l,i,u,f){super(e,t,n,s,a,o,l,i,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ec extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),a=new Gn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:kn});a.uniforms.tEquirect.value=t;const o=new mn(s,a),l=t.minFilter;return t.minFilter===li&&(t.minFilter=fn),new Mc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(a)}}class Ir extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bc={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,o=null;const l=this._targetRay,i=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const _=t.getJointPose(S,n),d=this._getHandJoint(u,S);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,M=.005;u.inputState.pinching&&m>g+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else i!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(i.matrix.fromArray(a.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,a.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(a.linearVelocity)):i.hasLinearVelocity=!1,a.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(a.angularVelocity)):i.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(bc)))}return l!==null&&(l.visible=s!==null),i!==null&&(i.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Aa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=t}clone(){return new Aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class no extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Es=new G,Tc=new G,wc=new nt;class ii{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Es.subVectors(n,t).cross(Tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Es),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wc.getNormalMatrix(e),s=this.coplanarPoint(Es).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new wa,Ac=new dt(.5,.5),Ur=new G;class Ra{constructor(e=new ii,t=new ii,n=new ii,s=new ii,a=new ii,o=new ii){this.planes=[e,t,n,s,a,o]}set(e,t,n,s,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){const s=this.planes,a=e.elements,o=a[0],l=a[1],i=a[2],u=a[3],f=a[4],p=a[5],m=a[6],g=a[7],M=a[8],S=a[9],_=a[10],d=a[11],I=a[12],A=a[13],T=a[14],U=a[15];if(s[0].setComponents(u-o,g-f,d-M,U-I).normalize(),s[1].setComponents(u+o,g+f,d+M,U+I).normalize(),s[2].setComponents(u+l,g+p,d+S,U+A).normalize(),s[3].setComponents(u-l,g-p,d-S,U-A).normalize(),n)s[4].setComponents(i,m,_,T).normalize(),s[5].setComponents(u-i,g-m,d-_,U-T).normalize();else if(s[4].setComponents(u-i,g-m,d-_,U-T).normalize(),t===pn)s[5].setComponents(u+i,g+m,d+_,U+T).normalize();else if(t===Xr)s[5].setComponents(i,m,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=Ac.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ur.x=s.normal.x>0?e.max.x:e.min.x,Ur.y=s.normal.y>0?e.max.y:e.min.y,Ur.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qo extends jt{constructor(e,t,n=ci,s,a,o,l=ln,i=ln,u,f=Ji,p=1){if(f!==Ji&&f!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:p};super(m,s,a,o,l,i,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ta(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qr extends vn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],o=[],l=[],i=[],u=new G,f=new dt;o.push(0,0,0),l.push(0,0,1),i.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*s;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,i.push(f.x,f.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(i,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nt extends vn{constructor(e=1,t=1,n=1,s=32,a=1,o=!1,l=0,i=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:i};const u=this;s=Math.floor(s),a=Math.floor(a);const f=[],p=[],m=[],g=[];let M=0;const S=[],_=n/2;let d=0;I(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(g,2));function I(){const T=new G,U=new G;let L=0;const O=(t-e)/n;for(let C=0;C<=a;C++){const E=[],b=C/a,R=b*(t-e)+e;for(let Y=0;Y<=s;Y++){const q=Y/s,$=q*i+l,ae=Math.sin($),j=Math.cos($);U.x=R*ae,U.y=-b*n+_,U.z=R*j,p.push(U.x,U.y,U.z),T.set(ae,O,j).normalize(),m.push(T.x,T.y,T.z),g.push(q,1-b),E.push(M++)}S.push(E)}for(let C=0;C<s;C++)for(let E=0;E<a;E++){const b=S[E][C],R=S[E+1][C],Y=S[E+1][C+1],q=S[E][C+1];(e>0||E!==0)&&(f.push(b,R,q),L+=3),(t>0||E!==a-1)&&(f.push(R,Y,q),L+=3)}u.addGroup(d,L,0),d+=L}function A(T){const U=M,L=new dt,O=new G;let C=0;const E=T===!0?e:t,b=T===!0?1:-1;for(let Y=1;Y<=s;Y++)p.push(0,_*b,0),m.push(0,b,0),g.push(.5,.5),M++;const R=M;for(let Y=0;Y<=s;Y++){const $=Y/s*i+l,ae=Math.cos($),j=Math.sin($);O.x=E*j,O.y=_*b,O.z=E*ae,p.push(O.x,O.y,O.z),m.push(0,b,0),L.x=ae*.5+.5,L.y=j*.5*b+.5,g.push(L.x,L.y),M++}for(let Y=0;Y<s;Y++){const q=U+Y,$=R+Y;T===!0?f.push($,$+1,q):f.push($+1,$,q),C+=3}u.addGroup(d,C,T===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ri extends Nt{constructor(e=1,t=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,a,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l}}static fromJSON(e){return new Ri(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,o=t/2,l=Math.floor(n),i=Math.floor(s),u=l+1,f=i+1,p=e/l,m=t/i,g=[],M=[],S=[],_=[];for(let d=0;d<f;d++){const I=d*m-o;for(let A=0;A<u;A++){const T=A*p-a;M.push(T,-I,0),S.push(0,0,1),_.push(A/l),_.push(1-d/i)}}for(let d=0;d<i;d++)for(let I=0;I<l;I++){const A=I+u*d,T=I+u*(d+1),U=I+1+u*(d+1),L=I+1+u*d;g.push(A,T,L),g.push(T,U,L)}this.setIndex(g),this.setAttribute("position",new Ht(M,3)),this.setAttribute("normal",new Ht(S,3)),this.setAttribute("uv",new Ht(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class dn extends vn{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const i=Math.min(o+l,Math.PI);let u=0;const f=[],p=new G,m=new G,g=[],M=[],S=[],_=[];for(let d=0;d<=n;d++){const I=[],A=d/n;let T=0;d===0&&o===0?T=.5/t:d===n&&i===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){const L=U/t;p.x=-e*Math.cos(s+L*a)*Math.sin(o+A*l),p.y=e*Math.cos(o+A*l),p.z=e*Math.sin(s+L*a)*Math.sin(o+A*l),M.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),_.push(L+T,1-A),I.push(u++)}f.push(I)}for(let d=0;d<n;d++)for(let I=0;I<t;I++){const A=f[d][I+1],T=f[d][I],U=f[d+1][I],L=f[d+1][I+1];(d!==0||o>0)&&g.push(A,T,L),(d!==n-1||i<Math.PI)&&g.push(T,U,L)}this.setIndex(g),this.setAttribute("position",new Ht(M,3)),this.setAttribute("normal",new Ht(S,3)),this.setAttribute("uv",new Ht(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mt extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rc extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cc extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class el extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pc extends el{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bs=new Rt,io=new G,ro=new G;class Dc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;io.setFromMatrixPosition(e.matrixWorld),t.position.copy(io),ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ro),t.updateMatrixWorld(),bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tl extends Ko{constructor(e=-1,t=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,o=n+e,l=s+t,i=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,l-=f*this.view.offsetY,i=l-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,i,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lc extends Dc{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ic extends el{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Lc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uc extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function so(r,e,t,n){const s=Nc(n);switch(t){case Oo:return r*e;case Bo:return r*e/s.components*s.byteLength;case Ma:return r*e/s.components*s.byteLength;case ko:return r*e*2/s.components*s.byteLength;case Ea:return r*e*2/s.components*s.byteLength;case zo:return r*e*3/s.components*s.byteLength;case on:return r*e*4/s.components*s.byteLength;case ba:return r*e*4/s.components*s.byteLength;case zr:case Br:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kr:case Hr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xs:case qs:return Math.max(r,16)*Math.max(e,8)/4;case Ws:case js:return Math.max(r,8)*Math.max(e,8)/2;case Ys:case $s:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ea:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ta:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case na:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ia:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case aa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case oa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vr:case da:case ha:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ho:case fa:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pa:case ma:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nc(r){switch(r){case _n:case Uo:return{byteLength:1,components:1};case Zi:case No:case er:return{byteLength:2,components:1};case ya:case Sa:return{byteLength:2,components:4};case ci:case va:case Rn:return{byteLength:4,components:1};case Fo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);function nl(){let r=null,e=!1,t=null,n=null;function s(a,o){t(a,o),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Fc(r){const e=new WeakMap;function t(l,i){const u=l.array,f=l.usage,p=u.byteLength,m=r.createBuffer();r.bindBuffer(i,m),r.bufferData(i,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=r.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,i,u){const f=i.array,p=i.updateRanges;if(r.bindBuffer(u,l),p.length===0)r.bufferSubData(u,0,f);else{p.sort((g,M)=>g.start-M.start);let m=0;for(let g=1;g<p.length;g++){const M=p[m],S=p[g];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++m,p[m]=S)}p.length=m+1;for(let g=0,M=p.length;g<M;g++){const S=p[g];r.bufferSubData(u,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}i.clearUpdateRanges()}i.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const i=e.get(l);i&&(r.deleteBuffer(i.buffer),e.delete(l))}function o(l,i){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,i));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,i),u.version=l.version}}return{get:s,remove:a,update:o}}var Oc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zc=`#ifdef USE_ALPHAHASH
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
#endif`,Bc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gc=`#ifdef USE_AOMAP
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
#endif`,Wc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xc=`#ifdef USE_BATCHING
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
#endif`,jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$c=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zc=`#ifdef USE_IRIDESCENCE
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
#endif`,Kc=`#ifdef USE_BUMPMAP
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
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
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
#endif`,au=`#define PI 3.141592653589793
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
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lu=`vec3 transformedNormal = objectNormal;
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
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
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
}`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
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
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
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
#endif`,Nu=`struct PhysicalMaterial {
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
}`,Fu=`
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
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ju=`#if defined( USE_POINTS_UV )
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
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
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
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sd=`float getShadowMask() {
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
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
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
}`,Gd=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`#define DISTANCE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Zd=`#include <common>
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define LAMBERT
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
}`,eh=`#define MATCAP
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
}`,th=`#define MATCAP
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
}`,nh=`#define NORMAL
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
}`,ih=`#define NORMAL
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
}`,rh=`#define PHONG
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
}`,sh=`#define PHONG
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
}`,ah=`#define STANDARD
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
}`,oh=`#define STANDARD
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
}`,lh=`#define TOON
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
}`,ch=`#define TOON
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
}`,uh=`uniform float size;
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
}`,dh=`uniform vec3 diffuse;
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
}`,hh=`#include <common>
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
}`,fh=`uniform vec3 color;
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
}`,ph=`uniform float rotation;
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
}`,mh=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Oc,alphahash_pars_fragment:zc,alphamap_fragment:Bc,alphamap_pars_fragment:kc,alphatest_fragment:Hc,alphatest_pars_fragment:Vc,aomap_fragment:Gc,aomap_pars_fragment:Wc,batching_pars_vertex:Xc,batching_vertex:jc,begin_vertex:qc,beginnormal_vertex:Yc,bsdfs:$c,iridescence_fragment:Zc,bumpmap_pars_fragment:Kc,clipping_planes_fragment:Jc,clipping_planes_pars_fragment:Qc,clipping_planes_pars_vertex:eu,clipping_planes_vertex:tu,color_fragment:nu,color_pars_fragment:iu,color_pars_vertex:ru,color_vertex:su,common:au,cube_uv_reflection_fragment:ou,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:hu,colorspace_fragment:fu,colorspace_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Cu,envmap_vertex:vu,fog_vertex:yu,fog_pars_vertex:Su,fog_fragment:Mu,fog_pars_fragment:Eu,gradientmap_pars_fragment:bu,lightmap_pars_fragment:Tu,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Au,lights_pars_begin:Ru,lights_toon_fragment:Pu,lights_toon_pars_fragment:Du,lights_phong_fragment:Lu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Uu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:zu,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Vu,map_fragment:Gu,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:ju,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Yu,morphinstance_vertex:$u,morphcolor_vertex:Zu,morphnormal_vertex:Ku,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:rd,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:hd,project_vertex:fd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:vd,shadowmap_vertex:yd,shadowmask_pars_fragment:Sd,skinbase_vertex:Md,skinning_pars_vertex:Ed,skinning_vertex:bd,skinnormal_vertex:Td,specularmap_fragment:wd,specularmap_pars_fragment:Ad,tonemapping_fragment:Rd,tonemapping_pars_fragment:Cd,transmission_fragment:Pd,transmission_pars_fragment:Dd,uv_pars_fragment:Ld,uv_pars_vertex:Id,uv_vertex:Ud,worldpos_vertex:Nd,background_vert:Fd,background_frag:Od,backgroundCube_vert:zd,backgroundCube_frag:Bd,cube_vert:kd,cube_frag:Hd,depth_vert:Vd,depth_frag:Gd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:jd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:$d,meshbasic_vert:Zd,meshbasic_frag:Kd,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:eh,meshmatcap_frag:th,meshnormal_vert:nh,meshnormal_frag:ih,meshphong_vert:rh,meshphong_frag:sh,meshphysical_vert:ah,meshphysical_frag:oh,meshtoon_vert:lh,meshtoon_frag:ch,points_vert:uh,points_frag:dh,shadow_vert:hh,shadow_frag:fh,sprite_vert:ph,sprite_frag:mh},Ee={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},hn={basic:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Vt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Vt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Vt([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Vt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Vt([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Vt([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Vt([Ee.common,Ee.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Vt([Ee.lights,Ee.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};hn.physical={uniforms:Vt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Nr={r:0,b:0,g:0},ti=new xn,gh=new Rt;function _h(r,e,t,n,s,a,o){const l=new lt(0);let i=a===!0?0:1,u,f,p=null,m=0,g=null;function M(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function S(A){let T=!1;const U=M(A);U===null?d(l,i):U&&U.isColor&&(d(U,1),T=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(A,T){const U=M(T);U&&(U.isCubeTexture||U.mapping===Yr)?(f===void 0&&(f=new mn(new Wt(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Oi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,O,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ti.copy(T.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),f.material.uniforms.envMap.value=U,f.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(gh.makeRotationFromEuler(ti)),f.material.toneMapped=ft.getTransfer(U.colorSpace)!==vt,(p!==U||m!==U.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=U,m=U.version,g=r.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):U&&U.isTexture&&(u===void 0&&(u=new mn(new sr(2,2),new Gn({name:"BackgroundMaterial",uniforms:Oi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=U,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=ft.getTransfer(U.colorSpace)!==vt,U.matrixAutoUpdate===!0&&U.updateMatrix(),u.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||m!==U.version||g!==r.toneMapping)&&(u.material.needsUpdate=!0,p=U,m=U.version,g=r.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,T){A.getRGB(Nr,Zo(r)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,T,o)}function I(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(A,T=1){l.set(A),i=T,d(l,i)},getClearAlpha:function(){return i},setClearAlpha:function(A){i=A,d(l,i)},render:S,addToRenderList:_,dispose:I}}function xh(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=m(null);let a=s,o=!1;function l(b,R,Y,q,$){let ae=!1;const j=p(q,Y,R);a!==j&&(a=j,u(a.object)),ae=g(b,q,Y,$),ae&&M(b,q,Y,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,T(b,R,Y,q),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function i(){return r.createVertexArray()}function u(b){return r.bindVertexArray(b)}function f(b){return r.deleteVertexArray(b)}function p(b,R,Y){const q=Y.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let ae=$[R.id];ae===void 0&&(ae={},$[R.id]=ae);let j=ae[q];return j===void 0&&(j=m(i()),ae[q]=j),j}function m(b){const R=[],Y=[],q=[];for(let $=0;$<t;$++)R[$]=0,Y[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:q,object:b,attributes:{},index:null}}function g(b,R,Y,q){const $=a.attributes,ae=R.attributes;let j=0;const fe=Y.getAttributes();for(const Z in fe)if(fe[Z].location>=0){const Se=$[Z];let Be=ae[Z];if(Be===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Be=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Be=b.instanceColor)),Se===void 0||Se.attribute!==Be||Be&&Se.data!==Be.data)return!0;j++}return a.attributesNum!==j||a.index!==q}function M(b,R,Y,q){const $={},ae=R.attributes;let j=0;const fe=Y.getAttributes();for(const Z in fe)if(fe[Z].location>=0){let Se=ae[Z];Se===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor));const Be={};Be.attribute=Se,Se&&Se.data&&(Be.data=Se.data),$[Z]=Be,j++}a.attributes=$,a.attributesNum=j,a.index=q}function S(){const b=a.newAttributes;for(let R=0,Y=b.length;R<Y;R++)b[R]=0}function _(b){d(b,0)}function d(b,R){const Y=a.newAttributes,q=a.enabledAttributes,$=a.attributeDivisors;Y[b]=1,q[b]===0&&(r.enableVertexAttribArray(b),q[b]=1),$[b]!==R&&(r.vertexAttribDivisor(b,R),$[b]=R)}function I(){const b=a.newAttributes,R=a.enabledAttributes;for(let Y=0,q=R.length;Y<q;Y++)R[Y]!==b[Y]&&(r.disableVertexAttribArray(Y),R[Y]=0)}function A(b,R,Y,q,$,ae,j){j===!0?r.vertexAttribIPointer(b,R,Y,$,ae):r.vertexAttribPointer(b,R,Y,q,$,ae)}function T(b,R,Y,q){S();const $=q.attributes,ae=Y.getAttributes(),j=R.defaultAttributeValues;for(const fe in ae){const Z=ae[fe];if(Z.location>=0){let ye=$[fe];if(ye===void 0&&(fe==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),fe==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),ye!==void 0){const Se=ye.normalized,Be=ye.itemSize,$e=e.get(ye);if($e===void 0)continue;const at=$e.buffer,ct=$e.type,te=$e.bytesPerElement,ge=ct===r.INT||ct===r.UNSIGNED_INT||ye.gpuType===va;if(ye.isInterleavedBufferAttribute){const xe=ye.data,Xe=xe.stride,Ve=ye.offset;if(xe.isInstancedInterleavedBuffer){for(let Je=0;Je<Z.locationSize;Je++)d(Z.location+Je,xe.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Je=0;Je<Z.locationSize;Je++)_(Z.location+Je);r.bindBuffer(r.ARRAY_BUFFER,at);for(let Je=0;Je<Z.locationSize;Je++)A(Z.location+Je,Be/Z.locationSize,ct,Se,Xe*te,(Ve+Be/Z.locationSize*Je)*te,ge)}else{if(ye.isInstancedBufferAttribute){for(let xe=0;xe<Z.locationSize;xe++)d(Z.location+xe,ye.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let xe=0;xe<Z.locationSize;xe++)_(Z.location+xe);r.bindBuffer(r.ARRAY_BUFFER,at);for(let xe=0;xe<Z.locationSize;xe++)A(Z.location+xe,Be/Z.locationSize,ct,Se,Be*te,Be/Z.locationSize*xe*te,ge)}}else if(j!==void 0){const Se=j[fe];if(Se!==void 0)switch(Se.length){case 2:r.vertexAttrib2fv(Z.location,Se);break;case 3:r.vertexAttrib3fv(Z.location,Se);break;case 4:r.vertexAttrib4fv(Z.location,Se);break;default:r.vertexAttrib1fv(Z.location,Se)}}}}I()}function U(){C();for(const b in n){const R=n[b];for(const Y in R){const q=R[Y];for(const $ in q)f(q[$].object),delete q[$];delete R[Y]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const Y in R){const q=R[Y];for(const $ in q)f(q[$].object),delete q[$];delete R[Y]}delete n[b.id]}function O(b){for(const R in n){const Y=n[R];if(Y[b.id]===void 0)continue;const q=Y[b.id];for(const $ in q)f(q[$].object),delete q[$];delete Y[b.id]}}function C(){E(),o=!0,a!==s&&(a=s,u(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:C,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:S,enableAttribute:_,disableUnusedAttributes:I}}function vh(r,e,t){let n;function s(u){n=u}function a(u,f){r.drawArrays(n,u,f),t.update(f,n,1)}function o(u,f,p){p!==0&&(r.drawArraysInstanced(n,u,f,p),t.update(f,n,p))}function l(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,p);let g=0;for(let M=0;M<p;M++)g+=f[M];t.update(g,n,1)}function i(u,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<u.length;M++)o(u[M],f[M],m[M]);else{g.multiDrawArraysInstancedWEBGL(n,u,0,f,0,m,0,p);let M=0;for(let S=0;S<p;S++)M+=f[S]*m[S];t.update(M,n,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=i}function yh(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==on&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const C=O===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==_n&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Rn&&!C)}function i(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=i(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:i,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:I,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:U,maxSamples:L}}function Sh(r){const e=this;let t=null,n=0,s=!1,a=!1;const o=new ii,l=new nt,i={value:null,needsUpdate:!1};this.uniform=i,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||s;return s=m,n=p.length,g},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const M=p.clippingPlanes,S=p.clipIntersection,_=p.clipShadows,d=r.get(p);if(!s||M===null||M.length===0||a&&!_)a?f(null):u();else{const I=a?0:n,A=I*4;let T=d.clippingState||null;i.value=T,T=f(M,m,A,g);for(let U=0;U!==A;++U)T[U]=t[U];d.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=I}};function u(){i.value!==t&&(i.value=t,i.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,M){const S=p!==null?p.length:0;let _=null;if(S!==0){if(_=i.value,M!==!0||_===null){const d=g+S*4,I=m.matrixWorldInverse;l.getNormalMatrix(I),(_===null||_.length<d)&&(_=new Float32Array(d));for(let A=0,T=g;A!==S;++A,T+=4)o.copy(p[A]).applyMatrix4(I,l),o.normal.toArray(_,T),_[T+3]=o.constant}i.value=_,i.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}function Mh(r){let e=new WeakMap;function t(o,l){return l===ks?o.mapping=Ui:l===Hs&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===ks||l===Hs)if(e.has(o)){const i=e.get(o).texture;return t(i,o.mapping)}else{const i=o.image;if(i&&i.height>0){const u=new Ec(i.height);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const i=e.get(l);i!==void 0&&(e.delete(l),i.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Ci=4,ao=[.125,.215,.35,.446,.526,.582],ai=20,Ts=new tl,oo=new lt;let ws=null,As=0,Rs=0,Cs=!1;const ri=(1+Math.sqrt(5))/2,Ai=1/ri,lo=[new G(-ri,Ai,0),new G(ri,Ai,0),new G(-Ai,0,ri),new G(Ai,0,ri),new G(0,ri,-Ai),new G(0,ri,Ai),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Eh=new G;class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:o=256,position:l=Eh}=a;ws=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,s,i,l),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ws,As,Rs),this._renderer.xr.enabled=Cs,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ws=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:er,format:on,colorSpace:Fi,depthBuffer:!1},s=uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bh(a)),this._blurMaterial=Th(a,e,t)}return s}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,s,a){const i=new Zt(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(oo),p.toneMapping=Hn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const S=new zn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new mn(new Wt,S);let d=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,d=!0):(S.color.copy(oo),d=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(i.up.set(0,u[A],0),i.position.set(a.x,a.y,a.z),i.lookAt(a.x+f[A],a.y,a.z)):T===1?(i.up.set(0,0,u[A]),i.position.set(a.x,a.y,a.z),i.lookAt(a.x,a.y+f[A],a.z)):(i.up.set(0,u[A],0),i.position.set(a.x,a.y,a.z),i.lookAt(a.x,a.y,a.z+f[A]));const U=this._cubeSize;Fr(s,T*U,A>2?U:0,U,U),p.setRenderTarget(s),d&&p.render(_,i),p.render(e,i)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=I}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ui||e.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const i=this._cubeSize;Fr(t,0,0,3*i,2*i),n.setRenderTarget(t),n.render(o,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=lo[(s-a-1)%lo.length];this._blur(e,a-1,a,o,l)}t.autoClear=n}_blur(e,t,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",a),this._halfBlur(o,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,o,l){const i=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new mn(this._lodPlanes[s],u),m=u.uniforms,g=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*ai-1),S=a/M,_=isFinite(a)?1+Math.floor(f*S):ai;_>ai&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ai}`);const d=[];let I=0;for(let O=0;O<ai;++O){const C=O/S,E=Math.exp(-C*C/2);d.push(E),O===0?I+=E:O<_&&(I+=2*E)}for(let O=0;O<d.length;O++)d[O]=d[O]/I;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=d,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:A}=this;m.dTheta.value=M,m.mipInt.value=A-n;const T=this._sizeLods[s],U=3*T*(s>A-Ci?s-A+Ci:0),L=4*(this._cubeSize-T);Fr(t,U,L,3*T,2*T),i.setRenderTarget(t),i.render(p,Ts)}}function bh(r){const e=[],t=[],n=[];let s=r;const a=r-Ci+1+ao.length;for(let o=0;o<a;o++){const l=Math.pow(2,s);t.push(l);let i=1/l;o>r-Ci?i=ao[o-r+Ci-1]:o===0&&(i=0),n.push(i);const u=1/(l-2),f=-u,p=1+u,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,M=6,S=3,_=2,d=1,I=new Float32Array(S*M*g),A=new Float32Array(_*M*g),T=new Float32Array(d*M*g);for(let L=0;L<g;L++){const O=L%3*2/3-1,C=L>2?0:-1,E=[O,C,0,O+2/3,C,0,O+2/3,C+1,0,O,C,0,O+2/3,C+1,0,O,C+1,0];I.set(E,S*M*L),A.set(m,_*M*L);const b=[L,L,L,L,L,L];T.set(b,d*M*L)}const U=new vn;U.setAttribute("position",new gn(I,S)),U.setAttribute("uv",new gn(A,_)),U.setAttribute("faceIndex",new gn(T,d)),e.push(U),s>Ci&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uo(r,e,t){const n=new ui(r,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function Th(r,e,t){const n=new Float32Array(ai),s=new G(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ho(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fo(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function wh(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const i=l.mapping,u=i===ks||i===Hs,f=i===Ui||i===Ni;if(u||f){let p=e.get(l);const m=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new co(r)),p=u?t.fromEquirectangular(l,p):t.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const g=l.image;return u&&g&&g.height>0||f&&g&&s(g)?(t===null&&(t=new co(r)),p=u?t.fromEquirectangular(l):t.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",a),p.texture):null}}}return l}function s(l){let i=0;const u=6;for(let f=0;f<u;f++)l[f]!==void 0&&i++;return i===u}function a(l){const i=l.target;i.removeEventListener("dispose",a);const u=e.get(i);u!==void 0&&(e.delete(i),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ah(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Di("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rh(r,e,t,n){const s={},a=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",o),delete s[m.id];const g=a.get(m);g&&(e.remove(g),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function i(p){const m=p.attributes;for(const g in m)e.update(m[g],r.ARRAY_BUFFER)}function u(p){const m=[],g=p.index,M=p.attributes.position;let S=0;if(g!==null){const I=g.array;S=g.version;for(let A=0,T=I.length;A<T;A+=3){const U=I[A+0],L=I[A+1],O=I[A+2];m.push(U,L,L,O,O,U)}}else if(M!==void 0){const I=M.array;S=M.version;for(let A=0,T=I.length/3-1;A<T;A+=3){const U=A+0,L=A+1,O=A+2;m.push(U,L,L,O,O,U)}}else return;const _=new(Wo(m)?$o:Yo)(m,1);_.version=S;const d=a.get(p);d&&e.remove(d),a.set(p,_)}function f(p){const m=a.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&u(p)}else u(p);return a.get(p)}return{get:l,update:i,getWireframeAttribute:f}}function Ch(r,e,t){let n;function s(m){n=m}let a,o;function l(m){a=m.type,o=m.bytesPerElement}function i(m,g){r.drawElements(n,g,a,m*o),t.update(g,n,1)}function u(m,g,M){M!==0&&(r.drawElementsInstanced(n,g,a,m*o,M),t.update(g,n,M))}function f(m,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,m,0,M);let _=0;for(let d=0;d<M;d++)_+=g[d];t.update(_,n,1)}function p(m,g,M,S){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<m.length;d++)u(m[d]/o,g[d],S[d]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,a,m,0,S,0,M);let d=0;for(let I=0;I<M;I++)d+=g[I]*S[I];t.update(d,n,1)}}this.setMode=s,this.setIndex=l,this.render=i,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Ph(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(a/3);break;case r.LINES:t.lines+=l*(a/2);break;case r.LINE_STRIP:t.lines+=l*(a-1);break;case r.LINE_LOOP:t.lines+=l*a;break;case r.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dh(r,e,t){const n=new WeakMap,s=new wt;function a(o,l,i){const u=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(l);if(m===void 0||m.count!==p){let E=function(){O.dispose(),n.delete(l),l.removeEventListener("dispose",E)};m!==void 0&&m.texture.dispose();const g=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],I=l.morphAttributes.color||[];let A=0;g===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let T=l.attributes.position.count*A,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*U*4*p),O=new Xo(L,T,U,p);O.type=Rn,O.needsUpdate=!0;const C=A*4;for(let b=0;b<p;b++){const R=_[b],Y=d[b],q=I[b],$=T*U*4*b;for(let ae=0;ae<R.count;ae++){const j=ae*C;g===!0&&(s.fromBufferAttribute(R,ae),L[$+j+0]=s.x,L[$+j+1]=s.y,L[$+j+2]=s.z,L[$+j+3]=0),M===!0&&(s.fromBufferAttribute(Y,ae),L[$+j+4]=s.x,L[$+j+5]=s.y,L[$+j+6]=s.z,L[$+j+7]=0),S===!0&&(s.fromBufferAttribute(q,ae),L[$+j+8]=s.x,L[$+j+9]=s.y,L[$+j+10]=s.z,L[$+j+11]=q.itemSize===4?s.w:1)}}m={count:p,texture:O,size:new dt(T,U)},n.set(l,m),l.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)i.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let S=0;S<u.length;S++)g+=u[S];const M=l.morphTargetsRelative?1:1-g;i.getUniforms().setValue(r,"morphTargetBaseInfluence",M),i.getUniforms().setValue(r,"morphTargetInfluences",u)}i.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),i.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:a}}function Lh(r,e,t,n){let s=new WeakMap;function a(i){const u=n.render.frame,f=i.geometry,p=e.get(i,f);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),i.isInstancedMesh&&(i.hasEventListener("dispose",l)===!1&&i.addEventListener("dispose",l),s.get(i)!==u&&(t.update(i.instanceMatrix,r.ARRAY_BUFFER),i.instanceColor!==null&&t.update(i.instanceColor,r.ARRAY_BUFFER),s.set(i,u))),i.isSkinnedMesh){const m=i.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return p}function o(){s=new WeakMap}function l(i){const u=i.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const il=new jt,po=new Qo(1,1),rl=new Xo,sl=new sc,al=new Jo,mo=[],go=[],_o=new Float32Array(16),xo=new Float32Array(9),vo=new Float32Array(4);function Bi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=mo[s];if(a===void 0&&(a=new Float32Array(s),mo[s]=a),e!==0){n.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(a,l)}return a}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $r(r,e){let t=go[e];t===void 0&&(t=new Int32Array(e),go[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ih(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Uh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function Nh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function Fh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function Oh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;vo.set(n),r.uniformMatrix2fv(this.addr,!1,vo),Lt(t,n)}}function zh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;xo.set(n),r.uniformMatrix3fv(this.addr,!1,xo),Lt(t,n)}}function Bh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;_o.set(n),r.uniformMatrix4fv(this.addr,!1,_o),Lt(t,n)}}function kh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function Vh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function Gh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function Wh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function Yh(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(po.compareFunction=Go,a=po):a=il,t.setTexture2D(e||a,s)}function $h(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sl,s)}function Zh(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||al,s)}function Kh(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rl,s)}function Jh(r){switch(r){case 5126:return Ih;case 35664:return Uh;case 35665:return Nh;case 35666:return Fh;case 35674:return Oh;case 35675:return zh;case 35676:return Bh;case 5124:case 35670:return kh;case 35667:case 35671:return Hh;case 35668:case 35672:return Vh;case 35669:case 35673:return Gh;case 5125:return Wh;case 36294:return Xh;case 36295:return jh;case 36296:return qh;case 35678:case 36198:case 36298:case 36306:case 35682:return Yh;case 35679:case 36299:case 36307:return $h;case 35680:case 36300:case 36308:case 36293:return Zh;case 36289:case 36303:case 36311:case 36292:return Kh}}function Qh(r,e){r.uniform1fv(this.addr,e)}function ef(r,e){const t=Bi(e,this.size,2);r.uniform2fv(this.addr,t)}function tf(r,e){const t=Bi(e,this.size,3);r.uniform3fv(this.addr,t)}function nf(r,e){const t=Bi(e,this.size,4);r.uniform4fv(this.addr,t)}function rf(r,e){const t=Bi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sf(r,e){const t=Bi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function af(r,e){const t=Bi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function of(r,e){r.uniform1iv(this.addr,e)}function lf(r,e){r.uniform2iv(this.addr,e)}function cf(r,e){r.uniform3iv(this.addr,e)}function uf(r,e){r.uniform4iv(this.addr,e)}function df(r,e){r.uniform1uiv(this.addr,e)}function hf(r,e){r.uniform2uiv(this.addr,e)}function ff(r,e){r.uniform3uiv(this.addr,e)}function pf(r,e){r.uniform4uiv(this.addr,e)}function mf(r,e,t){const n=this.cache,s=e.length,a=$r(t,s);Dt(n,a)||(r.uniform1iv(this.addr,a),Lt(n,a));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||il,a[o])}function gf(r,e,t){const n=this.cache,s=e.length,a=$r(t,s);Dt(n,a)||(r.uniform1iv(this.addr,a),Lt(n,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sl,a[o])}function _f(r,e,t){const n=this.cache,s=e.length,a=$r(t,s);Dt(n,a)||(r.uniform1iv(this.addr,a),Lt(n,a));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||al,a[o])}function xf(r,e,t){const n=this.cache,s=e.length,a=$r(t,s);Dt(n,a)||(r.uniform1iv(this.addr,a),Lt(n,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rl,a[o])}function vf(r){switch(r){case 5126:return Qh;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return rf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return hf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return xf}}class yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jh(t.type)}}class Sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vf(t.type)}}class Mf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const l=s[a];l.setValue(e,t[l.id],n)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function yo(r,e){r.seq.push(e),r.map[e.id]=e}function Ef(r,e,t){const n=r.name,s=n.length;for(Ps.lastIndex=0;;){const a=Ps.exec(n),o=Ps.lastIndex;let l=a[1];const i=a[2]==="]",u=a[3];if(i&&(l=l|0),u===void 0||u==="["&&o+2===s){yo(t,u===void 0?new yf(l,r,e):new Sf(l,r,e));break}else{let p=t.map[l];p===void 0&&(p=new Mf(l),yo(t,p)),t=p}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);Ef(a,o,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,o=t.length;a!==o;++a){const l=t[a],i=n[l.id];i.needsUpdate!==!1&&l.setValue(e,i.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function So(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const bf=37297;let Tf=0;function wf(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Mo=new nt;function Af(r){ft._getMatrix(Mo,ft.workingColorSpace,r);const e=`mat3( ${Mo.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case Wr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Eo(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),a=(r.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+wf(r.getShaderSource(e),l)}else return a}function Rf(r,e){const t=Af(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cf(r,e){let t;switch(e){case Il:t="Linear";break;case Ul:t="Reinhard";break;case Nl:t="Cineon";break;case Fl:t="ACESFilmic";break;case zl:t="AgX";break;case Bl:t="Neutral";break;case Ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Or=new G;function Pf(){ft.getLuminanceCoefficients(Or);const r=Or.x.toFixed(4),e=Or.y.toFixed(4),t=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Df(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function Lf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function If(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),o=a.name;let l=1;a.type===r.FLOAT_MAT2&&(l=2),a.type===r.FLOAT_MAT3&&(l=3),a.type===r.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function $i(r){return r!==""}function bo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function To(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(r){return r.replace(Uf,Ff)}const Nf=new Map;function Ff(r,e){let t=it[e];if(t===void 0){const n=Nf.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const Of=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(r){return r.replace(Of,zf)}function zf(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ao(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Do?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function kf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hf(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ni&&(e="ENVMAP_MODE_REFRACTION"),e}function Vf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Lo:e="ENVMAP_BLENDING_MULTIPLY";break;case Dl:e="ENVMAP_BLENDING_MIX";break;case Ll:e="ENVMAP_BLENDING_ADD";break}return e}function Gf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wf(r,e,t,n){const s=r.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const i=Bf(t),u=kf(t),f=Hf(t),p=Vf(t),m=Gf(t),g=Df(t),M=Lf(a),S=s.createProgram();let _,d,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($i).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($i).join(`
`),d.length>0&&(d+=`
`)):(_=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+i:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),d=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+i:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?it.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Rf("linearToOutputTexel",t.outputColorSpace),Pf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),o=_a(o),o=bo(o,t),o=To(o,t),l=_a(l),l=bo(l,t),l=To(l,t),o=wo(o),l=wo(l),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=I+_+o,T=I+d+l,U=So(s,s.VERTEX_SHADER,A),L=So(s,s.FRAGMENT_SHADER,T);s.attachShader(S,U),s.attachShader(S,L),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function O(R){if(r.debug.checkShaderErrors){const Y=s.getProgramInfoLog(S)||"",q=s.getShaderInfoLog(U)||"",$=s.getShaderInfoLog(L)||"",ae=Y.trim(),j=q.trim(),fe=$.trim();let Z=!0,ye=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,S,U,L);else{const Se=Eo(s,U,"vertex"),Be=Eo(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+ae+`
`+Se+`
`+Be)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(j===""||fe==="")&&(ye=!1);ye&&(R.diagnostics={runnable:Z,programLog:ae,vertexShader:{log:j,prefix:_},fragmentShader:{log:fe,prefix:d}})}s.deleteShader(U),s.deleteShader(L),C=new Gr(s,S),E=If(s,S)}let C;this.getUniforms=function(){return C===void 0&&O(this),C};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,bf)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tf++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=L,this}let Xf=0;class jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qf(e),t.set(e,n)),n}}class qf{constructor(e){this.id=Xf++,this.code=e,this.usedTimes=0}}function Yf(r,e,t,n,s,a,o){const l=new jo,i=new jf,u=new Set,f=[],p=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return u.add(E),E===0?"uv":`uv${E}`}function _(E,b,R,Y,q){const $=Y.fog,ae=q.geometry,j=E.isMeshStandardMaterial?Y.environment:null,fe=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),Z=fe&&fe.mapping===Yr?fe.image.height:null,ye=M[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const Se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Be=Se!==void 0?Se.length:0;let $e=0;ae.morphAttributes.position!==void 0&&($e=1),ae.morphAttributes.normal!==void 0&&($e=2),ae.morphAttributes.color!==void 0&&($e=3);let at,ct,te,ge;if(ye){const ht=hn[ye];at=ht.vertexShader,ct=ht.fragmentShader}else at=E.vertexShader,ct=E.fragmentShader,i.update(E),te=i.getVertexShaderID(E),ge=i.getFragmentShaderID(E);const xe=r.getRenderTarget(),Xe=r.state.buffers.depth.getReversed(),Ve=q.isInstancedMesh===!0,Je=q.isBatchedMesh===!0,Et=!!E.map,st=!!E.matcap,P=!!fe,pt=!!E.aoMap,Ge=!!E.lightMap,ut=!!E.bumpMap,Fe=!!E.normalMap,yt=!!E.displacementMap,Ae=!!E.emissiveMap,tt=!!E.metalnessMap,bt=!!E.roughnessMap,St=E.anisotropy>0,w=E.clearcoat>0,x=E.dispersion>0,H=E.iridescence>0,Q=E.sheen>0,oe=E.transmission>0,ee=St&&!!E.anisotropyMap,Oe=w&&!!E.clearcoatMap,_e=w&&!!E.clearcoatNormalMap,Ue=w&&!!E.clearcoatRoughnessMap,Ce=H&&!!E.iridescenceMap,pe=H&&!!E.iridescenceThicknessMap,be=Q&&!!E.sheenColorMap,We=Q&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Me=!!E.specularColorMap,et=!!E.specularIntensityMap,F=oe&&!!E.transmissionMap,me=oe&&!!E.thicknessMap,ve=!!E.gradientMap,Re=!!E.alphaMap,de=E.alphaTest>0,se=!!E.alphaHash,Ie=!!E.extensions;let Qe=Hn;E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const mt={shaderID:ye,shaderType:E.type,shaderName:E.name,vertexShader:at,fragmentShader:ct,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Je,batchingColor:Je&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Fi,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:st,envMap:P,envMapMode:P&&fe.mapping,envMapCubeUVHeight:Z,aoMap:pt,lightMap:Ge,bumpMap:ut,normalMap:Fe,displacementMap:m&&yt,emissiveMap:Ae,normalMapObjectSpace:Fe&&E.normalMapType===Gl,normalMapTangentSpace:Fe&&E.normalMapType===Vo,metalnessMap:tt,roughnessMap:bt,anisotropy:St,anisotropyMap:ee,clearcoat:w,clearcoatMap:Oe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ue,dispersion:x,iridescence:H,iridescenceMap:Ce,iridescenceThicknessMap:pe,sheen:Q,sheenColorMap:be,sheenRoughnessMap:We,specularMap:Le,specularColorMap:Me,specularIntensityMap:et,transmission:oe,transmissionMap:F,thicknessMap:me,gradientMap:ve,opaque:E.transparent===!1&&E.blending===Pi&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:se,combine:E.combine,mapUv:Et&&S(E.map.channel),aoMapUv:pt&&S(E.aoMap.channel),lightMapUv:Ge&&S(E.lightMap.channel),bumpMapUv:ut&&S(E.bumpMap.channel),normalMapUv:Fe&&S(E.normalMap.channel),displacementMapUv:yt&&S(E.displacementMap.channel),emissiveMapUv:Ae&&S(E.emissiveMap.channel),metalnessMapUv:tt&&S(E.metalnessMap.channel),roughnessMapUv:bt&&S(E.roughnessMap.channel),anisotropyMapUv:ee&&S(E.anisotropyMap.channel),clearcoatMapUv:Oe&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:_e&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:We&&S(E.sheenRoughnessMap.channel),specularMapUv:Le&&S(E.specularMap.channel),specularColorMapUv:Me&&S(E.specularColorMap.channel),specularIntensityMapUv:et&&S(E.specularIntensityMap.channel),transmissionMapUv:F&&S(E.transmissionMap.channel),thicknessMapUv:me&&S(E.thicknessMap.channel),alphaMapUv:Re&&S(E.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Fe||St),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ae.attributes.uv&&(Et||Re),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Xe,skinning:q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:$e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===vt,decodeVideoTextureEmissive:Ae&&E.emissiveMap.isVideoTexture===!0&&ft.getTransfer(E.emissiveMap.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===Xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=u.has(1),mt.vertexUv2s=u.has(2),mt.vertexUv3s=u.has(3),u.clear(),mt}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)b.push(R),b.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(I(b,E),A(b,E),b.push(r.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function I(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function A(E,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),b.gradientMap&&l.enable(22),E.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.reversedDepthBuffer&&l.enable(4),b.skinning&&l.enable(5),b.morphTargets&&l.enable(6),b.morphNormals&&l.enable(7),b.morphColors&&l.enable(8),b.premultipliedAlpha&&l.enable(9),b.shadowMapEnabled&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),b.decodeVideoTextureEmissive&&l.enable(20),b.alphaToCoverage&&l.enable(21),E.push(l.mask)}function T(E){const b=M[E.type];let R;if(b){const Y=hn[b];R=vc.clone(Y.uniforms)}else R=E.uniforms;return R}function U(E,b){let R;for(let Y=0,q=f.length;Y<q;Y++){const $=f[Y];if($.cacheKey===b){R=$,++R.usedTimes;break}}return R===void 0&&(R=new Wf(r,b,E,a),f.push(R)),R}function L(E){if(--E.usedTimes===0){const b=f.indexOf(E);f[b]=f[f.length-1],f.pop(),E.destroy()}}function O(E){i.remove(E)}function C(){i.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:T,acquireProgram:U,releaseProgram:L,releaseShaderCache:O,programs:f,dispose:C}}function $f(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function s(o,l,i){r.get(o)[l]=i}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Zf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ro(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Co(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function o(p,m,g,M,S,_){let d=r[e];return d===void 0?(d={id:p.id,object:p,geometry:m,material:g,groupOrder:M,renderOrder:p.renderOrder,z:S,group:_},r[e]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=g,d.groupOrder=M,d.renderOrder=p.renderOrder,d.z=S,d.group=_),e++,d}function l(p,m,g,M,S,_){const d=o(p,m,g,M,S,_);g.transmission>0?n.push(d):g.transparent===!0?s.push(d):t.push(d)}function i(p,m,g,M,S,_){const d=o(p,m,g,M,S,_);g.transmission>0?n.unshift(d):g.transparent===!0?s.unshift(d):t.unshift(d)}function u(p,m){t.length>1&&t.sort(p||Zf),n.length>1&&n.sort(m||Ro),s.length>1&&s.sort(m||Ro)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:i,finish:f,sort:u}}function Kf(){let r=new WeakMap;function e(n,s){const a=r.get(n);let o;return a===void 0?(o=new Co,r.set(n,[o])):s>=a.length?(o=new Co,a.push(o)):o=a[s],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new lt};break;case"SpotLight":t={position:new G,direction:new G,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function Qf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ep=0;function tp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function np(r){const e=new Jf,t=Qf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);const s=new G,a=new Rt,o=new Rt;function l(u){let f=0,p=0,m=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let g=0,M=0,S=0,_=0,d=0,I=0,A=0,T=0,U=0,L=0,O=0;u.sort(tp);for(let E=0,b=u.length;E<b;E++){const R=u[E],Y=R.color,q=R.intensity,$=R.distance,ae=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=Y.r*q,p+=Y.g*q,m+=Y.b*q;else if(R.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(R.sh.coefficients[j],q);O++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const fe=R.shadow,Z=t.get(R);Z.shadowIntensity=fe.intensity,Z.shadowBias=fe.bias,Z.shadowNormalBias=fe.normalBias,Z.shadowRadius=fe.radius,Z.shadowMapSize=fe.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=R.shadow.matrix,I++}n.directional[g]=j,g++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(Y).multiplyScalar(q),j.distance=$,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,n.spot[S]=j;const fe=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,fe.updateMatrices(R),R.castShadow&&L++),n.spotLightMatrix[S]=fe.matrix,R.castShadow){const Z=t.get(R);Z.shadowIntensity=fe.intensity,Z.shadowBias=fe.bias,Z.shadowNormalBias=fe.normalBias,Z.shadowRadius=fe.radius,Z.shadowMapSize=fe.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=ae,T++}S++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(Y).multiplyScalar(q),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=j,_++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){const fe=R.shadow,Z=t.get(R);Z.shadowIntensity=fe.intensity,Z.shadowBias=fe.bias,Z.shadowNormalBias=fe.normalBias,Z.shadowRadius=fe.radius,Z.shadowMapSize=fe.mapSize,Z.shadowCameraNear=fe.camera.near,Z.shadowCameraFar=fe.camera.far,n.pointShadow[M]=Z,n.pointShadowMap[M]=ae,n.pointShadowMatrix[M]=R.shadow.matrix,A++}n.point[M]=j,M++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(q),j.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[d]=j,d++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const C=n.hash;(C.directionalLength!==g||C.pointLength!==M||C.spotLength!==S||C.rectAreaLength!==_||C.hemiLength!==d||C.numDirectionalShadows!==I||C.numPointShadows!==A||C.numSpotShadows!==T||C.numSpotMaps!==U||C.numLightProbes!==O)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=_,n.point.length=M,n.hemi.length=d,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=T+U-L,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=O,C.directionalLength=g,C.pointLength=M,C.spotLength=S,C.rectAreaLength=_,C.hemiLength=d,C.numDirectionalShadows=I,C.numPointShadows=A,C.numSpotShadows=T,C.numSpotMaps=U,C.numLightProbes=O,n.version=ep++)}function i(u,f){let p=0,m=0,g=0,M=0,S=0;const _=f.matrixWorldInverse;for(let d=0,I=u.length;d<I;d++){const A=u[d];if(A.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),p++}else if(A.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),g++}else if(A.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(_),o.identity(),a.copy(A.matrixWorld),a.premultiply(_),o.extractRotation(a),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(_),m++}else if(A.isHemisphereLight){const T=n.hemi[S];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(_),S++}}}return{setup:l,setupView:i,state:n}}function Po(r){const e=new np(r),t=[],n=[];function s(f){u.camera=f,t.length=0,n.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(){e.setup(t)}function i(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:l,setupLightsView:i,pushLight:a,pushShadow:o}}function ip(r){let e=new WeakMap;function t(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Po(r),e.set(s,[l])):a>=o.length?(l=new Po(r),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
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
}`;function ap(r,e,t){let n=new Ra;const s=new dt,a=new dt,o=new wt,l=new Rc({depthPacking:Vl}),i=new Cc,u={},f=t.maxTextureSize,p={[Vn]:Xt,[Xt]:Vn,[An]:An},m=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:rp,fragmentShader:sp}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const M=new vn;M.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new mn(M,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let d=this.type;this.render=function(L,O,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const E=r.getRenderTarget(),b=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(kn),Y.buffers.depth.getReversed()?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=d!==wn&&this.type===wn,$=d===wn&&this.type!==wn;for(let ae=0,j=L.length;ae<j;ae++){const fe=L[ae],Z=fe.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const ye=Z.getFrameExtents();if(s.multiply(ye),a.copy(Z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/ye.x),s.x=a.x*ye.x,Z.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/ye.y),s.y=a.y*ye.y,Z.mapSize.y=a.y)),Z.map===null||q===!0||$===!0){const Be=this.type!==wn?{minFilter:ln,magFilter:ln}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ui(s.x,s.y,Be),Z.map.texture.name=fe.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const Se=Z.getViewportCount();for(let Be=0;Be<Se;Be++){const $e=Z.getViewport(Be);o.set(a.x*$e.x,a.y*$e.y,a.x*$e.z,a.y*$e.w),Y.viewport(o),Z.updateMatrices(fe,Be),n=Z.getFrustum(),T(O,C,Z.camera,fe,this.type)}Z.isPointLightShadow!==!0&&this.type===wn&&I(Z,C),Z.needsUpdate=!1}d=this.type,_.needsUpdate=!1,r.setRenderTarget(E,b,R)};function I(L,O){const C=e.update(S);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ui(s.x,s.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(O,null,C,m,S,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(O,null,C,g,S,null)}function A(L,O,C,E){let b=null;const R=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)b=R;else if(b=C.isPointLight===!0?i:l,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=b.uuid,q=O.uuid;let $=u[Y];$===void 0&&($={},u[Y]=$);let ae=$[q];ae===void 0&&(ae=b.clone(),$[q]=ae,O.addEventListener("dispose",U)),b=ae}if(b.visible=O.visible,b.wireframe=O.wireframe,E===wn?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:p[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=r.properties.get(b);Y.light=C}return b}function T(L,O,C,E,b){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===wn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);const q=e.update(L),$=L.material;if(Array.isArray($)){const ae=q.groups;for(let j=0,fe=ae.length;j<fe;j++){const Z=ae[j],ye=$[Z.materialIndex];if(ye&&ye.visible){const Se=A(L,ye,E,b);L.onBeforeShadow(r,L,O,C,q,Se,Z),r.renderBufferDirect(C,null,q,Se,L,Z),L.onAfterShadow(r,L,O,C,q,Se,Z)}}}else if($.visible){const ae=A(L,$,E,b);L.onBeforeShadow(r,L,O,C,q,ae,null),r.renderBufferDirect(C,null,q,ae,L,null),L.onAfterShadow(r,L,O,C,q,ae,null)}}const Y=L.children;for(let q=0,$=Y.length;q<$;q++)T(Y[q],O,C,E,b)}function U(L){L.target.removeEventListener("dispose",U);for(const C in u){const E=u[C],b=L.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const op={[Is]:Us,[Ns]:zs,[Fs]:Bs,[Ii]:Os,[Us]:Is,[zs]:Ns,[Bs]:Fs,[Os]:Ii};function lp(r,e){function t(){let F=!1;const me=new wt;let ve=null;const Re=new wt(0,0,0,0);return{setMask:function(de){ve!==de&&!F&&(r.colorMask(de,de,de,de),ve=de)},setLocked:function(de){F=de},setClear:function(de,se,Ie,Qe,mt){mt===!0&&(de*=Qe,se*=Qe,Ie*=Qe),me.set(de,se,Ie,Qe),Re.equals(me)===!1&&(r.clearColor(de,se,Ie,Qe),Re.copy(me))},reset:function(){F=!1,ve=null,Re.set(-1,0,0,0)}}}function n(){let F=!1,me=!1,ve=null,Re=null,de=null;return{setReversed:function(se){if(me!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),me=se;const Qe=de;de=null,this.setClear(Qe)}},getReversed:function(){return me},setTest:function(se){se?xe(r.DEPTH_TEST):Xe(r.DEPTH_TEST)},setMask:function(se){ve!==se&&!F&&(r.depthMask(se),ve=se)},setFunc:function(se){if(me&&(se=op[se]),Re!==se){switch(se){case Is:r.depthFunc(r.NEVER);break;case Us:r.depthFunc(r.ALWAYS);break;case Ns:r.depthFunc(r.LESS);break;case Ii:r.depthFunc(r.LEQUAL);break;case Fs:r.depthFunc(r.EQUAL);break;case Os:r.depthFunc(r.GEQUAL);break;case zs:r.depthFunc(r.GREATER);break;case Bs:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=se}},setLocked:function(se){F=se},setClear:function(se){de!==se&&(me&&(se=1-se),r.clearDepth(se),de=se)},reset:function(){F=!1,ve=null,Re=null,de=null,me=!1}}}function s(){let F=!1,me=null,ve=null,Re=null,de=null,se=null,Ie=null,Qe=null,mt=null;return{setTest:function(ht){F||(ht?xe(r.STENCIL_TEST):Xe(r.STENCIL_TEST))},setMask:function(ht){me!==ht&&!F&&(r.stencilMask(ht),me=ht)},setFunc:function(ht,tn,Kt){(ve!==ht||Re!==tn||de!==Kt)&&(r.stencilFunc(ht,tn,Kt),ve=ht,Re=tn,de=Kt)},setOp:function(ht,tn,Kt){(se!==ht||Ie!==tn||Qe!==Kt)&&(r.stencilOp(ht,tn,Kt),se=ht,Ie=tn,Qe=Kt)},setLocked:function(ht){F=ht},setClear:function(ht){mt!==ht&&(r.clearStencil(ht),mt=ht)},reset:function(){F=!1,me=null,ve=null,Re=null,de=null,se=null,Ie=null,Qe=null,mt=null}}}const a=new t,o=new n,l=new s,i=new WeakMap,u=new WeakMap;let f={},p={},m=new WeakMap,g=[],M=null,S=!1,_=null,d=null,I=null,A=null,T=null,U=null,L=null,O=new lt(0,0,0),C=0,E=!1,b=null,R=null,Y=null,q=null,$=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,fe=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=fe>=1):Z.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=fe>=2);let ye=null,Se={};const Be=r.getParameter(r.SCISSOR_BOX),$e=r.getParameter(r.VIEWPORT),at=new wt().fromArray(Be),ct=new wt().fromArray($e);function te(F,me,ve,Re){const de=new Uint8Array(4),se=r.createTexture();r.bindTexture(F,se),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<ve;Ie++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(me+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return se}const ge={};ge[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),xe(r.DEPTH_TEST),o.setFunc(Ii),ut(!1),Fe(La),xe(r.CULL_FACE),pt(kn);function xe(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function Xe(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function Ve(F,me){return p[F]!==me?(r.bindFramebuffer(F,me),p[F]=me,F===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=me),F===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Je(F,me){let ve=g,Re=!1;if(F){ve=m.get(me),ve===void 0&&(ve=[],m.set(me,ve));const de=F.textures;if(ve.length!==de.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let se=0,Ie=de.length;se<Ie;se++)ve[se]=r.COLOR_ATTACHMENT0+se;ve.length=de.length,Re=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Re=!0);Re&&r.drawBuffers(ve)}function Et(F){return M!==F?(r.useProgram(F),M=F,!0):!1}const st={[si]:r.FUNC_ADD,[pl]:r.FUNC_SUBTRACT,[ml]:r.FUNC_REVERSE_SUBTRACT};st[gl]=r.MIN,st[_l]=r.MAX;const P={[xl]:r.ZERO,[vl]:r.ONE,[yl]:r.SRC_COLOR,[Ds]:r.SRC_ALPHA,[wl]:r.SRC_ALPHA_SATURATE,[bl]:r.DST_COLOR,[Ml]:r.DST_ALPHA,[Sl]:r.ONE_MINUS_SRC_COLOR,[Ls]:r.ONE_MINUS_SRC_ALPHA,[Tl]:r.ONE_MINUS_DST_COLOR,[El]:r.ONE_MINUS_DST_ALPHA,[Al]:r.CONSTANT_COLOR,[Rl]:r.ONE_MINUS_CONSTANT_COLOR,[Cl]:r.CONSTANT_ALPHA,[Pl]:r.ONE_MINUS_CONSTANT_ALPHA};function pt(F,me,ve,Re,de,se,Ie,Qe,mt,ht){if(F===kn){S===!0&&(Xe(r.BLEND),S=!1);return}if(S===!1&&(xe(r.BLEND),S=!0),F!==fl){if(F!==_||ht!==E){if((d!==si||T!==si)&&(r.blendEquation(r.FUNC_ADD),d=si,T=si),ht)switch(F){case Pi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.ONE,r.ONE);break;case Ua:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Na:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Pi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ua:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Na:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}I=null,A=null,U=null,L=null,O.set(0,0,0),C=0,_=F,E=ht}return}de=de||me,se=se||ve,Ie=Ie||Re,(me!==d||de!==T)&&(r.blendEquationSeparate(st[me],st[de]),d=me,T=de),(ve!==I||Re!==A||se!==U||Ie!==L)&&(r.blendFuncSeparate(P[ve],P[Re],P[se],P[Ie]),I=ve,A=Re,U=se,L=Ie),(Qe.equals(O)===!1||mt!==C)&&(r.blendColor(Qe.r,Qe.g,Qe.b,mt),O.copy(Qe),C=mt),_=F,E=!1}function Ge(F,me){F.side===An?Xe(r.CULL_FACE):xe(r.CULL_FACE);let ve=F.side===Xt;me&&(ve=!ve),ut(ve),F.blending===Pi&&F.transparent===!1?pt(kn):pt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),a.setMask(F.colorWrite);const Re=F.stencilWrite;l.setTest(Re),Re&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):Xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(F){b!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),b=F)}function Fe(F){F!==ul?(xe(r.CULL_FACE),F!==R&&(F===La?r.cullFace(r.BACK):F===dl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Xe(r.CULL_FACE),R=F}function yt(F){F!==Y&&(j&&r.lineWidth(F),Y=F)}function Ae(F,me,ve){F?(xe(r.POLYGON_OFFSET_FILL),(q!==me||$!==ve)&&(r.polygonOffset(me,ve),q=me,$=ve)):Xe(r.POLYGON_OFFSET_FILL)}function tt(F){F?xe(r.SCISSOR_TEST):Xe(r.SCISSOR_TEST)}function bt(F){F===void 0&&(F=r.TEXTURE0+ae-1),ye!==F&&(r.activeTexture(F),ye=F)}function St(F,me,ve){ve===void 0&&(ye===null?ve=r.TEXTURE0+ae-1:ve=ye);let Re=Se[ve];Re===void 0&&(Re={type:void 0,texture:void 0},Se[ve]=Re),(Re.type!==F||Re.texture!==me)&&(ye!==ve&&(r.activeTexture(ve),ye=ve),r.bindTexture(F,me||ge[F]),Re.type=F,Re.texture=me)}function w(){const F=Se[ye];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(F){at.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),at.copy(F))}function We(F){ct.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),ct.copy(F))}function Le(F,me){let ve=u.get(me);ve===void 0&&(ve=new WeakMap,u.set(me,ve));let Re=ve.get(F);Re===void 0&&(Re=r.getUniformBlockIndex(me,F.name),ve.set(F,Re))}function Me(F,me){const Re=u.get(me).get(F);i.get(me)!==Re&&(r.uniformBlockBinding(me,Re,F.__bindingPointIndex),i.set(me,Re))}function et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ye=null,Se={},p={},m=new WeakMap,g=[],M=null,S=!1,_=null,d=null,I=null,A=null,T=null,U=null,L=null,O=new lt(0,0,0),C=0,E=!1,b=null,R=null,Y=null,q=null,$=null,at.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:xe,disable:Xe,bindFramebuffer:Ve,drawBuffers:Je,useProgram:Et,setBlending:pt,setMaterial:Ge,setFlipSided:ut,setCullFace:Fe,setLineWidth:yt,setPolygonOffset:Ae,setScissorTest:tt,activeTexture:bt,bindTexture:St,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:Ce,texImage3D:pe,updateUBOMapping:Le,uniformBlockBinding:Me,texStorage2D:_e,texStorage3D:Ue,texSubImage2D:Q,texSubImage3D:oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:Oe,scissor:be,viewport:We,reset:et}}function cp(r,e,t,n,s,a,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,i=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,x){return g?new OffscreenCanvas(w,x):jr("canvas")}function S(w,x,H){let Q=1;const oe=St(w);if((oe.width>H||oe.height>H)&&(Q=H/Math.max(oe.width,oe.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ee=Math.floor(Q*oe.width),Oe=Math.floor(Q*oe.height);p===void 0&&(p=M(ee,Oe));const _e=x?M(ee,Oe):p;return _e.width=ee,_e.height=Oe,_e.getContext("2d").drawImage(w,0,0,ee,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ee+"x"+Oe+")."),_e}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),w;return w}function _(w){return w.generateMipmaps}function d(w){r.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(w,x,H,Q,oe=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=x;if(x===r.RED&&(H===r.FLOAT&&(ee=r.R32F),H===r.HALF_FLOAT&&(ee=r.R16F),H===r.UNSIGNED_BYTE&&(ee=r.R8)),x===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.R8UI),H===r.UNSIGNED_SHORT&&(ee=r.R16UI),H===r.UNSIGNED_INT&&(ee=r.R32UI),H===r.BYTE&&(ee=r.R8I),H===r.SHORT&&(ee=r.R16I),H===r.INT&&(ee=r.R32I)),x===r.RG&&(H===r.FLOAT&&(ee=r.RG32F),H===r.HALF_FLOAT&&(ee=r.RG16F),H===r.UNSIGNED_BYTE&&(ee=r.RG8)),x===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.RG8UI),H===r.UNSIGNED_SHORT&&(ee=r.RG16UI),H===r.UNSIGNED_INT&&(ee=r.RG32UI),H===r.BYTE&&(ee=r.RG8I),H===r.SHORT&&(ee=r.RG16I),H===r.INT&&(ee=r.RG32I)),x===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),H===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),H===r.UNSIGNED_INT&&(ee=r.RGB32UI),H===r.BYTE&&(ee=r.RGB8I),H===r.SHORT&&(ee=r.RGB16I),H===r.INT&&(ee=r.RGB32I)),x===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),H===r.UNSIGNED_INT&&(ee=r.RGBA32UI),H===r.BYTE&&(ee=r.RGBA8I),H===r.SHORT&&(ee=r.RGBA16I),H===r.INT&&(ee=r.RGBA32I)),x===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),x===r.RGBA){const Oe=oe?Wr:ft.getTransfer(Q);H===r.FLOAT&&(ee=r.RGBA32F),H===r.HALF_FLOAT&&(ee=r.RGBA16F),H===r.UNSIGNED_BYTE&&(ee=Oe===vt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(w,x){let H;return w?x===null||x===ci||x===Ki?H=r.DEPTH24_STENCIL8:x===Rn?H=r.DEPTH32F_STENCIL8:x===Zi&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ci||x===Ki?H=r.DEPTH_COMPONENT24:x===Rn?H=r.DEPTH_COMPONENT32F:x===Zi&&(H=r.DEPTH_COMPONENT16),H}function U(w,x){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==ln&&w.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function L(w){const x=w.target;x.removeEventListener("dispose",L),C(x),x.isVideoTexture&&f.delete(x)}function O(w){const x=w.target;x.removeEventListener("dispose",O),b(x)}function C(w){const x=n.get(w);if(x.__webglInit===void 0)return;const H=w.source,Q=m.get(H);if(Q){const oe=Q[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(w),Object.keys(Q).length===0&&m.delete(H)}n.remove(w)}function E(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const H=w.source,Q=m.get(H);delete Q[x.__cacheKey],o.memory.textures--}function b(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let oe=0;oe<x.__webglFramebuffer[Q].length;oe++)r.deleteFramebuffer(x.__webglFramebuffer[Q][oe]);else r.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)r.deleteFramebuffer(x.__webglFramebuffer[Q]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=w.textures;for(let Q=0,oe=H.length;Q<oe;Q++){const ee=n.get(H[Q]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(w)}let R=0;function Y(){R=0}function q(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function $(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ae(w,x){const H=n.get(w);if(w.isVideoTexture&&tt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,w,x);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+x)}function j(w,x){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ge(H,w,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+x)}function fe(w,x){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ge(H,w,x);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+x)}function Z(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){xe(H,w,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+x)}const ye={[Vs]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Gs]:r.MIRRORED_REPEAT},Se={[ln]:r.NEAREST,[kl]:r.NEAREST_MIPMAP_NEAREST,[gr]:r.NEAREST_MIPMAP_LINEAR,[fn]:r.LINEAR,[Qr]:r.LINEAR_MIPMAP_NEAREST,[li]:r.LINEAR_MIPMAP_LINEAR},Be={[Wl]:r.NEVER,[Zl]:r.ALWAYS,[Xl]:r.LESS,[Go]:r.LEQUAL,[jl]:r.EQUAL,[$l]:r.GEQUAL,[ql]:r.GREATER,[Yl]:r.NOTEQUAL};function $e(w,x){if(x.type===Rn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===Qr||x.magFilter===gr||x.magFilter===li||x.minFilter===fn||x.minFilter===Qr||x.minFilter===gr||x.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ye[x.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ye[x.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ye[x.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Se[x.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Se[x.minFilter]),x.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==gr&&x.minFilter!==li||x.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function at(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",L));const Q=x.source;let oe=m.get(Q);oe===void 0&&(oe={},m.set(Q,oe));const ee=$(x);if(ee!==w.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[ee].usedTimes++;const Oe=oe[w.__cacheKey];Oe!==void 0&&(oe[w.__cacheKey].usedTimes--,Oe.usedTimes===0&&E(x)),w.__cacheKey=ee,w.__webglTexture=oe[ee].texture}return H}function ct(w,x,H){return Math.floor(Math.floor(w/H)/x)}function te(w,x,H,Q){const ee=w.updateRanges;if(ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,H,Q,x.data);else{ee.sort((pe,be)=>pe.start-be.start);let Oe=0;for(let pe=1;pe<ee.length;pe++){const be=ee[Oe],We=ee[pe],Le=be.start+be.count,Me=ct(We.start,x.width,4),et=ct(be.start,x.width,4);We.start<=Le+1&&Me===et&&ct(We.start+We.count-1,x.width,4)===Me?be.count=Math.max(be.count,We.start+We.count-be.start):(++Oe,ee[Oe]=We)}ee.length=Oe+1;const _e=r.getParameter(r.UNPACK_ROW_LENGTH),Ue=r.getParameter(r.UNPACK_SKIP_PIXELS),Ce=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let pe=0,be=ee.length;pe<be;pe++){const We=ee[pe],Le=Math.floor(We.start/4),Me=Math.ceil(We.count/4),et=Le%x.width,F=Math.floor(Le/x.width),me=Me,ve=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,et),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,et,F,me,ve,H,Q,x.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,_e),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function ge(w,x,H){let Q=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=r.TEXTURE_3D);const oe=at(w,x),ee=x.source;t.bindTexture(Q,w.__webglTexture,r.TEXTURE0+H);const Oe=n.get(ee);if(ee.version!==Oe.__version||oe===!0){t.activeTexture(r.TEXTURE0+H);const _e=ft.getPrimaries(ft.workingColorSpace),Ue=x.colorSpace===Bn?null:ft.getPrimaries(x.colorSpace),Ce=x.colorSpace===Bn||_e===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let pe=S(x.image,!1,s.maxTextureSize);pe=bt(x,pe);const be=a.convert(x.format,x.colorSpace),We=a.convert(x.type);let Le=A(x.internalFormat,be,We,x.colorSpace,x.isVideoTexture);$e(Q,x);let Me;const et=x.mipmaps,F=x.isVideoTexture!==!0,me=Oe.__version===void 0||oe===!0,ve=ee.dataReady,Re=U(x,pe);if(x.isDepthTexture)Le=T(x.format===Qi,x.type),me&&(F?t.texStorage2D(r.TEXTURE_2D,1,Le,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Le,pe.width,pe.height,0,be,We,null));else if(x.isDataTexture)if(et.length>0){F&&me&&t.texStorage2D(r.TEXTURE_2D,Re,Le,et[0].width,et[0].height);for(let de=0,se=et.length;de<se;de++)Me=et[de],F?ve&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,be,We,Me.data):t.texImage2D(r.TEXTURE_2D,de,Le,Me.width,Me.height,0,be,We,Me.data);x.generateMipmaps=!1}else F?(me&&t.texStorage2D(r.TEXTURE_2D,Re,Le,pe.width,pe.height),ve&&te(x,pe,be,We)):t.texImage2D(r.TEXTURE_2D,0,Le,pe.width,pe.height,0,be,We,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Le,et[0].width,et[0].height,pe.depth);for(let de=0,se=et.length;de<se;de++)if(Me=et[de],x.format!==on)if(be!==null)if(F){if(ve)if(x.layerUpdates.size>0){const Ie=so(Me.width,Me.height,x.format,x.type);for(const Qe of x.layerUpdates){const mt=Me.data.subarray(Qe*Ie/Me.data.BYTES_PER_ELEMENT,(Qe+1)*Ie/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Qe,Me.width,Me.height,1,be,mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,pe.depth,be,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Le,Me.width,Me.height,pe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,pe.depth,be,We,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,Le,Me.width,Me.height,pe.depth,0,be,We,Me.data)}else{F&&me&&t.texStorage2D(r.TEXTURE_2D,Re,Le,et[0].width,et[0].height);for(let de=0,se=et.length;de<se;de++)Me=et[de],x.format!==on?be!==null?F?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,be,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,de,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ve&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Me.width,Me.height,be,We,Me.data):t.texImage2D(r.TEXTURE_2D,de,Le,Me.width,Me.height,0,be,We,Me.data)}else if(x.isDataArrayTexture)if(F){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Le,pe.width,pe.height,pe.depth),ve)if(x.layerUpdates.size>0){const de=so(pe.width,pe.height,x.format,x.type);for(const se of x.layerUpdates){const Ie=pe.data.subarray(se*de/pe.data.BYTES_PER_ELEMENT,(se+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,se,pe.width,pe.height,1,be,We,Ie)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,be,We,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,be,We,pe.data);else if(x.isData3DTexture)F?(me&&t.texStorage3D(r.TEXTURE_3D,Re,Le,pe.width,pe.height,pe.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,be,We,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,be,We,pe.data);else if(x.isFramebufferTexture){if(me)if(F)t.texStorage2D(r.TEXTURE_2D,Re,Le,pe.width,pe.height);else{let de=pe.width,se=pe.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,Le,de,se,0,be,We,null),de>>=1,se>>=1}}else if(et.length>0){if(F&&me){const de=St(et[0]);t.texStorage2D(r.TEXTURE_2D,Re,Le,de.width,de.height)}for(let de=0,se=et.length;de<se;de++)Me=et[de],F?ve&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,be,We,Me):t.texImage2D(r.TEXTURE_2D,de,Le,be,We,Me);x.generateMipmaps=!1}else if(F){if(me){const de=St(pe);t.texStorage2D(r.TEXTURE_2D,Re,Le,de.width,de.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,We,pe)}else t.texImage2D(r.TEXTURE_2D,0,Le,be,We,pe);_(x)&&d(Q),Oe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function xe(w,x,H){if(x.image.length!==6)return;const Q=at(w,x),oe=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+H);const ee=n.get(oe);if(oe.version!==ee.__version||Q===!0){t.activeTexture(r.TEXTURE0+H);const Oe=ft.getPrimaries(ft.workingColorSpace),_e=x.colorSpace===Bn?null:ft.getPrimaries(x.colorSpace),Ue=x.colorSpace===Bn||Oe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!Ce&&!pe?be[se]=S(x.image[se],!0,s.maxCubemapSize):be[se]=pe?x.image[se].image:x.image[se],be[se]=bt(x,be[se]);const We=be[0],Le=a.convert(x.format,x.colorSpace),Me=a.convert(x.type),et=A(x.internalFormat,Le,Me,x.colorSpace),F=x.isVideoTexture!==!0,me=ee.__version===void 0||Q===!0,ve=oe.dataReady;let Re=U(x,We);$e(r.TEXTURE_CUBE_MAP,x);let de;if(Ce){F&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,et,We.width,We.height);for(let se=0;se<6;se++){de=be[se].mipmaps;for(let Ie=0;Ie<de.length;Ie++){const Qe=de[Ie];x.format!==on?Le!==null?F?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Qe.width,Qe.height,Le,Qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,et,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Qe.width,Qe.height,Le,Me,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,et,Qe.width,Qe.height,0,Le,Me,Qe.data)}}}else{if(de=x.mipmaps,F&&me){de.length>0&&Re++;const se=St(be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,et,se.width,se.height)}for(let se=0;se<6;se++)if(pe){F?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Le,Me,be[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,et,be[se].width,be[se].height,0,Le,Me,be[se].data);for(let Ie=0;Ie<de.length;Ie++){const mt=de[Ie].image[se].image;F?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,mt.width,mt.height,Le,Me,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,et,mt.width,mt.height,0,Le,Me,mt.data)}}else{F?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Me,be[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,et,Le,Me,be[se]);for(let Ie=0;Ie<de.length;Ie++){const Qe=de[Ie];F?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Le,Me,Qe.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,et,Le,Me,Qe.image[se])}}}_(x)&&d(r.TEXTURE_CUBE_MAP),ee.__version=oe.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Xe(w,x,H,Q,oe,ee){const Oe=a.convert(H.format,H.colorSpace),_e=a.convert(H.type),Ue=A(H.internalFormat,Oe,_e,H.colorSpace),Ce=n.get(x),pe=n.get(H);if(pe.__renderTarget=x,!Ce.__hasExternalTextures){const be=Math.max(1,x.width>>ee),We=Math.max(1,x.height>>ee);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,Ue,be,We,x.depth,0,Oe,_e,null):t.texImage2D(oe,ee,Ue,be,We,0,Oe,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Ae(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,oe,pe.__webglTexture,0,yt(x)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,oe,pe.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(w,x,H){if(r.bindRenderbuffer(r.RENDERBUFFER,w),x.depthBuffer){const Q=x.depthTexture,oe=Q&&Q.isDepthTexture?Q.type:null,ee=T(x.stencilBuffer,oe),Oe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=yt(x);Ae(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,ee,x.width,x.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,ee,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ee,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,w)}else{const Q=x.textures;for(let oe=0;oe<Q.length;oe++){const ee=Q[oe],Oe=a.convert(ee.format,ee.colorSpace),_e=a.convert(ee.type),Ue=A(ee.internalFormat,Oe,_e,ee.colorSpace),Ce=yt(x);H&&Ae(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,Ue,x.width,x.height):Ae(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,Ue,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Je(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const oe=Q.__webglTexture,ee=yt(x);if(x.depthTexture.format===Ji)Ae(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(x.depthTexture.format===Qi)Ae(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Et(w){const x=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",oe)};Q.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=Q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Q=w.texture.mipmaps;Q&&Q.length>0?Je(x.__webglFramebuffer[0],w):Je(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ve(x.__webglDepthbuffer[Q],w,!1);else{const oe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ee)}}else{const Q=w.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ve(x.__webglDepthbuffer,w,!1);else{const oe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function st(w,x,H){const Q=n.get(w);x!==void 0&&Xe(Q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Et(w)}function P(w){const x=w.texture,H=n.get(w),Q=n.get(x);w.addEventListener("dispose",O);const oe=w.textures,ee=w.isWebGLCubeRenderTarget===!0,Oe=oe.length>1;if(Oe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=x.version,o.memory.textures++),ee){H.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[_e]=[];for(let Ue=0;Ue<x.mipmaps.length;Ue++)H.__webglFramebuffer[_e][Ue]=r.createFramebuffer()}else H.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)H.__webglFramebuffer[_e]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let _e=0,Ue=oe.length;_e<Ue;_e++){const Ce=n.get(oe[_e]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&Ae(w)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<oe.length;_e++){const Ue=oe[_e];H.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const Ce=a.convert(Ue.format,Ue.colorSpace),pe=a.convert(Ue.type),be=A(Ue.internalFormat,Ce,pe,Ue.colorSpace,w.isXRRenderTarget===!0),We=yt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,We,be,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),$e(r.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ue=0;Ue<x.mipmaps.length;Ue++)Xe(H.__webglFramebuffer[_e][Ue],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue);else Xe(H.__webglFramebuffer[_e],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(x)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let _e=0,Ue=oe.length;_e<Ue;_e++){const Ce=oe[_e],pe=n.get(Ce);let be=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,pe.__webglTexture),$e(be,Ce),Xe(H.__webglFramebuffer,w,Ce,r.COLOR_ATTACHMENT0+_e,be,0),_(Ce)&&d(be)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,Q.__webglTexture),$e(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let Ue=0;Ue<x.mipmaps.length;Ue++)Xe(H.__webglFramebuffer[Ue],w,x,r.COLOR_ATTACHMENT0,_e,Ue);else Xe(H.__webglFramebuffer,w,x,r.COLOR_ATTACHMENT0,_e,0);_(x)&&d(_e),t.unbindTexture()}w.depthBuffer&&Et(w)}function pt(w){const x=w.textures;for(let H=0,Q=x.length;H<Q;H++){const oe=x[H];if(_(oe)){const ee=I(w),Oe=n.get(oe).__webglTexture;t.bindTexture(ee,Oe),d(ee),t.unbindTexture()}}}const Ge=[],ut=[];function Fe(w){if(w.samples>0){if(Ae(w)===!1){const x=w.textures,H=w.width,Q=w.height;let oe=r.COLOR_BUFFER_BIT;const ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(w),_e=x.length>1;if(_e)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ue=w.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(oe|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ce]);const pe=n.get(x[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pe,0)}r.blitFramebuffer(0,0,H,Q,0,0,H,Q,oe,r.NEAREST),i===!0&&(Ge.length=0,ut.length=0,Ge.push(r.COLOR_ATTACHMENT0+Ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ge.push(ee),ut.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ce]);const pe=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&i){const x=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function yt(w){return Math.min(s.maxSamples,w.samples)}function Ae(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function tt(w){const x=o.render.frame;f.get(w)!==x&&(f.set(w,x),w.update())}function bt(w,x){const H=w.colorSpace,Q=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Fi&&H!==Bn&&(ft.getTransfer(H)===vt?(Q!==on||oe!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=ae,this.setTexture2DArray=j,this.setTexture3D=fe,this.setTextureCube=Z,this.rebindTextures=st,this.setupRenderTarget=P,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=Ae}function up(r,e){function t(n,s=Bn){let a;const o=ft.getTransfer(s);if(n===_n)return r.UNSIGNED_BYTE;if(n===ya)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fo)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Uo)return r.BYTE;if(n===No)return r.SHORT;if(n===Zi)return r.UNSIGNED_SHORT;if(n===va)return r.INT;if(n===ci)return r.UNSIGNED_INT;if(n===Rn)return r.FLOAT;if(n===er)return r.HALF_FLOAT;if(n===Oo)return r.ALPHA;if(n===zo)return r.RGB;if(n===on)return r.RGBA;if(n===Ji)return r.DEPTH_COMPONENT;if(n===Qi)return r.DEPTH_STENCIL;if(n===Bo)return r.RED;if(n===Ma)return r.RED_INTEGER;if(n===ko)return r.RG;if(n===Ea)return r.RG_INTEGER;if(n===ba)return r.RGBA_INTEGER;if(n===zr||n===Br||n===kr||n===Hr)if(o===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ws||n===Xs||n===js||n===qs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ws)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===js)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ys||n===$s||n===Zs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ys||n===$s)return o===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Zs)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ks||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===ua)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ks)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Js)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qs)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ta)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===aa)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===da||n===ha)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vr)return o===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===fa||n===pa||n===ma)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class ol extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const dp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hp=`
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

}`;class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gn({vertexShader:dp,fragmentShader:hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pp extends zi{constructor(e,t){super();const n=this;let s=null,a=1,o=null,l="local-floor",i=1,u=null,f=null,p=null,m=null,g=null,M=null;const S=new fp,_={},d=t.getContextAttributes();let I=null,A=null;const T=[],U=[],L=new dt;let O=null;const C=new Zt;C.viewport=new wt;const E=new Zt;E.viewport=new wt;const b=[C,E],R=new Uc;let Y=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=T[te];return ge===void 0&&(ge=new Ms,T[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=T[te];return ge===void 0&&(ge=new Ms,T[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=T[te];return ge===void 0&&(ge=new Ms,T[te]=ge),ge.getHandSpace()};function $(te){const ge=U.indexOf(te.inputSource);if(ge===-1)return;const xe=T[ge];xe!==void 0&&(xe.update(te.inputSource,te.frame,u||o),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function ae(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",j);for(let te=0;te<T.length;te++){const ge=U[te];ge!==null&&(U[te]=null,T[te].disconnect(ge))}Y=null,q=null,S.reset();for(const te in _)delete _[te];e.setRenderTarget(I),g=null,m=null,p=null,s=null,A=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(p=new XRWebGLBinding(s,t)),p!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Xe=null,Ve=null;d.depth&&(Ve=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=d.stencil?Qi:Ji,Xe=d.stencil?Ki:ci);const Je={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:a};m=p.createProjectionLayer(Je),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new ui(m.textureWidth,m.textureHeight,{format:on,type:_n,depthTexture:new Qo(m.textureWidth,m.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const xe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new ui(g.framebufferWidth,g.framebufferHeight,{format:on,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(i),u=null,o=await s.requestReferenceSpace(l),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function j(te){for(let ge=0;ge<te.removed.length;ge++){const xe=te.removed[ge],Xe=U.indexOf(xe);Xe>=0&&(U[Xe]=null,T[Xe].disconnect(xe))}for(let ge=0;ge<te.added.length;ge++){const xe=te.added[ge];let Xe=U.indexOf(xe);if(Xe===-1){for(let Je=0;Je<T.length;Je++)if(Je>=U.length){U.push(xe),Xe=Je;break}else if(U[Je]===null){U[Je]=xe,Xe=Je;break}if(Xe===-1)break}const Ve=T[Xe];Ve&&Ve.connect(xe)}}const fe=new G,Z=new G;function ye(te,ge,xe){fe.setFromMatrixPosition(ge.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);const Xe=fe.distanceTo(Z),Ve=ge.projectionMatrix.elements,Je=xe.projectionMatrix.elements,Et=Ve[14]/(Ve[10]-1),st=Ve[14]/(Ve[10]+1),P=(Ve[9]+1)/Ve[5],pt=(Ve[9]-1)/Ve[5],Ge=(Ve[8]-1)/Ve[0],ut=(Je[8]+1)/Je[0],Fe=Et*Ge,yt=Et*ut,Ae=Xe/(-Ge+ut),tt=Ae*-Ge;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(tt),te.translateZ(Ae),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ve[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const bt=Et+Ae,St=st+Ae,w=Fe-tt,x=yt+(Xe-tt),H=P*st/St*bt,Q=pt*st/St*bt;te.projectionMatrix.makePerspective(w,x,H,Q,bt,St),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Se(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ge=te.near,xe=te.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),R.near=E.near=C.near=ge,R.far=E.far=C.far=xe,(Y!==R.near||q!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),Y=R.near,q=R.far),R.layers.mask=te.layers.mask|6,C.layers.mask=R.layers.mask&3,E.layers.mask=R.layers.mask&5;const Xe=te.parent,Ve=R.cameras;Se(R,Xe);for(let Je=0;Je<Ve.length;Je++)Se(Ve[Je],Xe);Ve.length===2?ye(R,C,E):R.projectionMatrix.copy(C.projectionMatrix),Be(te,R,Xe)};function Be(te,ge,xe){xe===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ga*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(m===null&&g===null))return i},this.setFoveation=function(te){i=te,m!==null&&(m.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(R)},this.getCameraTexture=function(te){return _[te]};let $e=null;function at(te,ge){if(f=ge.getViewerPose(u||o),M=ge,f!==null){const xe=f.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let Xe=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,Xe=!0);for(let st=0;st<xe.length;st++){const P=xe[st];let pt=null;if(g!==null)pt=g.getViewport(P);else{const ut=p.getViewSubImage(m,P);pt=ut.viewport,st===0&&(e.setRenderTargetTextures(A,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(A))}let Ge=b[st];Ge===void 0&&(Ge=new Zt,Ge.layers.enable(st),Ge.viewport=new wt,b[st]=Ge),Ge.matrix.fromArray(P.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(P.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(pt.x,pt.y,pt.width,pt.height),st===0&&(R.matrix.copy(Ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Xe===!0&&R.cameras.push(Ge)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){const st=p.getDepthInformation(xe[0]);st&&st.isValid&&st.texture&&S.init(st,s.renderState)}if(Ve&&Ve.includes("camera-access")&&(e.state.unbindTexture(),p))for(let st=0;st<xe.length;st++){const P=xe[st].camera;if(P){let pt=_[P];pt||(pt=new ol,_[P]=pt);const Ge=p.getCameraImage(P);pt.sourceTexture=Ge}}}for(let xe=0;xe<T.length;xe++){const Xe=U[xe],Ve=T[xe];Xe!==null&&Ve!==void 0&&Ve.update(Xe,ge,u||o)}$e&&$e(te,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),M=null}const ct=new nl;ct.setAnimationLoop(at),this.setAnimationLoop=function(te){$e=te},this.dispose=function(){}}}const ni=new xn,mp=new Rt;function gp(r,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Zo(r)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function s(_,d,I,A,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(_,d):d.isMeshToonMaterial?(a(_,d),p(_,d)):d.isMeshPhongMaterial?(a(_,d),f(_,d)):d.isMeshStandardMaterial?(a(_,d),m(_,d),d.isMeshPhysicalMaterial&&g(_,d,T)):d.isMeshMatcapMaterial?(a(_,d),M(_,d)):d.isMeshDepthMaterial?a(_,d):d.isMeshDistanceMaterial?(a(_,d),S(_,d)):d.isMeshNormalMaterial?a(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&l(_,d)):d.isPointsMaterial?i(_,d,I,A):d.isSpriteMaterial?u(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Xt&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Xt&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const I=e.get(d),A=I.envMap,T=I.envMapRotation;A&&(_.envMap.value=A,ni.copy(T),ni.x*=-1,ni.y*=-1,ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),_.envMapRotation.value.setFromMatrix4(mp.makeRotationFromEuler(ni)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function l(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function i(_,d,I,A){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*I,_.scale.value=A*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function f(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function p(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function m(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function g(_,d,I){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,d){d.matcap&&(_.matcap.value=d.matcap)}function S(_,d){const I=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _p(r,e,t,n){let s={},a={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function i(I,A){const T=A.program;n.uniformBlockBinding(I,T)}function u(I,A){let T=s[I.id];T===void 0&&(M(I),T=f(I),s[I.id]=T,I.addEventListener("dispose",_));const U=A.program;n.updateUBOMapping(I,U);const L=e.render.frame;a[I.id]!==L&&(m(I),a[I.id]=L)}function f(I){const A=p();I.__bindingPointIndex=A;const T=r.createBuffer(),U=I.__size,L=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,U,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,T),T}function p(){for(let I=0;I<l;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(I){const A=s[I.id],T=I.uniforms,U=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let L=0,O=T.length;L<O;L++){const C=Array.isArray(T[L])?T[L]:[T[L]];for(let E=0,b=C.length;E<b;E++){const R=C[E];if(g(R,L,E,U)===!0){const Y=R.__offset,q=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let ae=0;ae<q.length;ae++){const j=q[ae],fe=S(j);typeof j=="number"||typeof j=="boolean"?(R.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,Y+$,R.__data)):j.isMatrix3?(R.__data[0]=j.elements[0],R.__data[1]=j.elements[1],R.__data[2]=j.elements[2],R.__data[3]=0,R.__data[4]=j.elements[3],R.__data[5]=j.elements[4],R.__data[6]=j.elements[5],R.__data[7]=0,R.__data[8]=j.elements[6],R.__data[9]=j.elements[7],R.__data[10]=j.elements[8],R.__data[11]=0):(j.toArray(R.__data,$),$+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(I,A,T,U){const L=I.value,O=A+"_"+T;if(U[O]===void 0)return typeof L=="number"||typeof L=="boolean"?U[O]=L:U[O]=L.clone(),!0;{const C=U[O];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return U[O]=L,!0}else if(C.equals(L)===!1)return C.copy(L),!0}return!1}function M(I){const A=I.uniforms;let T=0;const U=16;for(let O=0,C=A.length;O<C;O++){const E=Array.isArray(A[O])?A[O]:[A[O]];for(let b=0,R=E.length;b<R;b++){const Y=E[b],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,ae=q.length;$<ae;$++){const j=q[$],fe=S(j),Z=T%U,ye=Z%fe.boundary,Se=Z+ye;T+=ye,Se!==0&&U-Se<fe.storage&&(T+=U-Se),Y.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=fe.storage}}}const L=T%U;return L>0&&(T+=U-L),I.__size=T,I.__cache={},this}function S(I){const A={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(A.boundary=4,A.storage=4):I.isVector2?(A.boundary=8,A.storage=8):I.isVector3||I.isColor?(A.boundary=16,A.storage=12):I.isVector4?(A.boundary=16,A.storage=16):I.isMatrix3?(A.boundary=48,A.storage=48):I.isMatrix4?(A.boundary=64,A.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),A}function _(I){const A=I.target;A.removeEventListener("dispose",_);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function d(){for(const I in s)r.deleteBuffer(s[I]);o=[],s={},a={}}return{bind:i,update:u,dispose:d}}class xp{constructor(e={}){const{canvas:t=Jl(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:i=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const M=new Uint32Array(4),S=new Int32Array(4);let _=null,d=null;const I=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=en;let L=0,O=0,C=null,E=-1,b=null;const R=new wt,Y=new wt;let q=null;const $=new lt(0);let ae=0,j=t.width,fe=t.height,Z=1,ye=null,Se=null;const Be=new wt(0,0,j,fe),$e=new wt(0,0,j,fe);let at=!1;const ct=new Ra;let te=!1,ge=!1;const xe=new Rt,Xe=new G,Ve=new wt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function st(){return C===null?Z:1}let P=n;function pt(y,B){return t.getContext(y,B)}try{const y={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:i,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",de,!1),P===null){const B="webgl2";if(P=pt(B,y),P===null)throw pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ge,ut,Fe,yt,Ae,tt,bt,St,w,x,H,Q,oe,ee,Oe,_e,Ue,Ce,pe,be,We,Le,Me,et;function F(){Ge=new Ah(P),Ge.init(),Le=new up(P,Ge),ut=new yh(P,Ge,e,Le),Fe=new lp(P,Ge),ut.reversedDepthBuffer&&m&&Fe.buffers.depth.setReversed(!0),yt=new Ph(P),Ae=new $f,tt=new cp(P,Ge,Fe,Ae,ut,Le,yt),bt=new Mh(T),St=new wh(T),w=new Fc(P),Me=new xh(P,w),x=new Rh(P,w,yt,Me),H=new Lh(P,x,w,yt),pe=new Dh(P,ut,tt),_e=new Sh(Ae),Q=new Yf(T,bt,St,Ge,ut,Me,_e),oe=new gp(T,Ae),ee=new Kf,Oe=new ip(Ge),Ce=new _h(T,bt,St,Fe,H,g,i),Ue=new ap(T,H,ut),et=new _p(P,yt,ut,Fe),be=new vh(P,Ge,yt),We=new Ch(P,Ge,yt),yt.programs=Q.programs,T.capabilities=ut,T.extensions=Ge,T.properties=Ae,T.renderLists=ee,T.shadowMap=Ue,T.state=Fe,T.info=yt}F();const me=new pp(T,P);this.xr=me,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ge.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ge.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(j,fe,!1))},this.getSize=function(y){return y.set(j,fe)},this.setSize=function(y,B,W=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,fe=B,t.width=Math.floor(y*Z),t.height=Math.floor(B*Z),W===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(j*Z,fe*Z).floor()},this.setDrawingBufferSize=function(y,B,W){j=y,fe=B,Z=W,t.width=Math.floor(y*W),t.height=Math.floor(B*W),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Be)},this.setViewport=function(y,B,W,X){y.isVector4?Be.set(y.x,y.y,y.z,y.w):Be.set(y,B,W,X),Fe.viewport(R.copy(Be).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,B,W,X){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,B,W,X),Fe.scissor(Y.copy($e).multiplyScalar(Z).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(y){Fe.setScissorTest(at=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){Se=y},this.getClearColor=function(y){return y.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,W=!0){let X=0;if(y){let k=!1;if(C!==null){const he=C.texture.format;k=he===ba||he===Ea||he===Ma}if(k){const he=C.texture.type,Te=he===_n||he===ci||he===Zi||he===Ki||he===ya||he===Sa,De=Ce.getClearColor(),h=Ce.getClearAlpha(),c=De.r,v=De.g,D=De.b;Te?(M[0]=c,M[1]=v,M[2]=D,M[3]=h,P.clearBufferuiv(P.COLOR,0,M)):(S[0]=c,S[1]=v,S[2]=D,S[3]=h,P.clearBufferiv(P.COLOR,0,S))}else X|=P.COLOR_BUFFER_BIT}B&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ce.dispose(),ee.dispose(),Oe.dispose(),Ae.dispose(),bt.dispose(),St.dispose(),H.dispose(),Me.dispose(),et.dispose(),Q.dispose(),me.dispose(),me.removeEventListener("sessionstart",Kt),me.removeEventListener("sessionend",ar),yn.stop()};function ve(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const y=yt.autoReset,B=Ue.enabled,W=Ue.autoUpdate,X=Ue.needsUpdate,k=Ue.type;F(),yt.autoReset=y,Ue.enabled=B,Ue.autoUpdate=W,Ue.needsUpdate=X,Ue.type=k}function de(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){const B=y.target;B.removeEventListener("dispose",se),Ie(B)}function Ie(y){Qe(y),Ae.remove(y)}function Qe(y){const B=Ae.get(y).programs;B!==void 0&&(B.forEach(function(W){Q.releaseProgram(W)}),y.isShaderMaterial&&Q.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,W,X,k,he){B===null&&(B=Je);const Te=k.isMesh&&k.matrixWorld.determinant()<0,De=Zr(y,B,W,X,k);Fe.setMaterial(X,Te);let h=W.index,c=1;if(X.wireframe===!0){if(h=x.getWireframeAttribute(W),h===void 0)return;c=2}const v=W.drawRange,D=W.attributes.position;let z=v.start*c,V=(v.start+v.count)*c;he!==null&&(z=Math.max(z,he.start*c),V=Math.min(V,(he.start+he.count)*c)),h!==null?(z=Math.max(z,0),V=Math.min(V,h.count)):D!=null&&(z=Math.max(z,0),V=Math.min(V,D.count));const J=V-z;if(J<0||J===1/0)return;Me.setup(k,X,De,W,h);let ne,le=be;if(h!==null&&(ne=w.get(h),le=We,le.setIndex(ne)),k.isMesh)X.wireframe===!0?(Fe.setLineWidth(X.wireframeLinewidth*st()),le.setMode(P.LINES)):le.setMode(P.TRIANGLES);else if(k.isLine){let re=X.linewidth;re===void 0&&(re=1),Fe.setLineWidth(re*st()),k.isLineSegments?le.setMode(P.LINES):k.isLineLoop?le.setMode(P.LINE_LOOP):le.setMode(P.LINE_STRIP)}else k.isPoints?le.setMode(P.POINTS):k.isSprite&&le.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Di("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const re=k._multiDrawStarts,Pe=k._multiDrawCounts,ce=k._multiDrawCount,Ne=h?w.get(h).bytesPerElement:1,K=Ae.get(X).currentProgram.getUniforms();for(let ze=0;ze<ce;ze++)K.setValue(P,"_gl_DrawID",ze),le.render(re[ze]/Ne,Pe[ze])}else if(k.isInstancedMesh)le.renderInstances(z,J,k.count);else if(W.isInstancedBufferGeometry){const re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pe=Math.min(W.instanceCount,re);le.renderInstances(z,J,Pe)}else le.render(z,J)};function mt(y,B,W){y.transparent===!0&&y.side===An&&y.forceSinglePass===!1?(y.side=Xt,y.needsUpdate=!0,Pn(y,B,W),y.side=Vn,y.needsUpdate=!0,Pn(y,B,W),y.side=An):Pn(y,B,W)}this.compile=function(y,B,W=null){W===null&&(W=y),d=Oe.get(W),d.init(B),A.push(d),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const X=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let Te=0;Te<he.length;Te++){const De=he[Te];mt(De,W,k),X.add(De)}else mt(he,W,k),X.add(he)}),d=A.pop(),X},this.compileAsync=function(y,B,W=null){const X=this.compile(y,B,W);return new Promise(k=>{function he(){if(X.forEach(function(Te){Ae.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){k(y);return}setTimeout(he,10)}Ge.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ht=null;function tn(y){ht&&ht(y)}function Kt(){yn.stop()}function ar(){yn.start()}const yn=new nl;yn.setAnimationLoop(tn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(y){ht=y,me.setAnimationLoop(y),y===null?yn.stop():yn.start()},me.addEventListener("sessionstart",Kt),me.addEventListener("sessionend",ar),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(B),B=me.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,B,C),d=Oe.get(y,A.length),d.init(B),A.push(d),xe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ct.setFromProjectionMatrix(xe,pn,B.reversedDepth),ge=this.localClippingEnabled,te=_e.init(this.clippingPlanes,ge),_=ee.get(y,I.length),_.init(),I.push(_),me.enabled===!0&&me.isPresenting===!0){const he=T.xr.getDepthSensingMesh();he!==null&&ki(he,B,-1/0,T.sortObjects)}ki(y,B,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(ye,Se),Et=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Et&&Ce.addToRenderList(_,y),this.info.render.frame++,te===!0&&_e.beginShadows();const W=d.state.shadowsArray;Ue.render(W,y,B),te===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,k=_.transmissive;if(d.setupLights(),B.isArrayCamera){const he=B.cameras;if(k.length>0)for(let Te=0,De=he.length;Te<De;Te++){const h=he[Te];lr(X,k,y,h)}Et&&Ce.render(y);for(let Te=0,De=he.length;Te<De;Te++){const h=he[Te];or(_,y,h,h.viewport)}}else k.length>0&&lr(X,k,y,B),Et&&Ce.render(y),or(_,y,B);C!==null&&O===0&&(tt.updateMultisampleRenderTarget(C),tt.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(T,y,B),Me.resetDefaultState(),E=-1,b=null,A.pop(),A.length>0?(d=A[A.length-1],te===!0&&_e.setGlobalState(T.clippingPlanes,d.state.camera)):d=null,I.pop(),I.length>0?_=I[I.length-1]:_=null};function ki(y,B,W,X){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ct.intersectsSprite(y)){X&&Ve.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xe);const Te=H.update(y),De=y.material;De.visible&&_.push(y,Te,De,W,Ve.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ct.intersectsObject(y))){const Te=H.update(y),De=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ve.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ve.copy(Te.boundingSphere.center)),Ve.applyMatrix4(y.matrixWorld).applyMatrix4(xe)),Array.isArray(De)){const h=Te.groups;for(let c=0,v=h.length;c<v;c++){const D=h[c],z=De[D.materialIndex];z&&z.visible&&_.push(y,Te,z,W,Ve.z,D)}}else De.visible&&_.push(y,Te,De,W,Ve.z,null)}}const he=y.children;for(let Te=0,De=he.length;Te<De;Te++)ki(he[Te],B,W,X)}function or(y,B,W,X){const k=y.opaque,he=y.transmissive,Te=y.transparent;d.setupLightsView(W),te===!0&&_e.setGlobalState(T.clippingPlanes,W),X&&Fe.viewport(R.copy(X)),k.length>0&&Wn(k,B,W),he.length>0&&Wn(he,B,W),Te.length>0&&Wn(Te,B,W),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function lr(y,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new ui(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?er:_n,minFilter:li,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const he=d.state.transmissionRenderTarget[X.id],Te=X.viewport||R;he.setSize(Te.z*T.transmissionResolutionScale,Te.w*T.transmissionResolutionScale);const De=T.getRenderTarget(),h=T.getActiveCubeFace(),c=T.getActiveMipmapLevel();T.setRenderTarget(he),T.getClearColor($),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),Et&&Ce.render(W);const v=T.toneMapping;T.toneMapping=Hn;const D=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),te===!0&&_e.setGlobalState(T.clippingPlanes,X),Wn(y,W,X),tt.updateMultisampleRenderTarget(he),tt.updateRenderTargetMipmap(he),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let z=!1;for(let V=0,J=B.length;V<J;V++){const ne=B[V],le=ne.object,re=ne.geometry,Pe=ne.material,ce=ne.group;if(Pe.side===An&&le.layers.test(X.layers)){const Ne=Pe.side;Pe.side=Xt,Pe.needsUpdate=!0,cr(le,W,X,re,Pe,ce),Pe.side=Ne,Pe.needsUpdate=!0,z=!0}}z===!0&&(tt.updateMultisampleRenderTarget(he),tt.updateRenderTargetMipmap(he))}T.setRenderTarget(De,h,c),T.setClearColor($,ae),D!==void 0&&(X.viewport=D),T.toneMapping=v}function Wn(y,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,he=y.length;k<he;k++){const Te=y[k],De=Te.object,h=Te.geometry,c=Te.group;let v=Te.material;v.allowOverride===!0&&X!==null&&(v=X),De.layers.test(W.layers)&&cr(De,B,W,h,v,c)}}function cr(y,B,W,X,k,he){y.onBeforeRender(T,B,W,X,k,he),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(T,B,W,X,y,he),k.transparent===!0&&k.side===An&&k.forceSinglePass===!1?(k.side=Xt,k.needsUpdate=!0,T.renderBufferDirect(W,B,X,k,y,he),k.side=Vn,k.needsUpdate=!0,T.renderBufferDirect(W,B,X,k,y,he),k.side=An):T.renderBufferDirect(W,B,X,k,y,he),y.onAfterRender(T,B,W,X,k,he)}function Pn(y,B,W){B.isScene!==!0&&(B=Je);const X=Ae.get(y),k=d.state.lights,he=d.state.shadowsArray,Te=k.state.version,De=Q.getParameters(y,k.state,he,B,W),h=Q.getProgramCacheKey(De);let c=X.programs;X.environment=y.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(y.isMeshStandardMaterial?St:bt).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,c===void 0&&(y.addEventListener("dispose",se),c=new Map,X.programs=c);let v=c.get(h);if(v!==void 0){if(X.currentProgram===v&&X.lightsStateVersion===Te)return ur(y,De),v}else De.uniforms=Q.getUniforms(y),y.onBeforeCompile(De,T),v=Q.acquireProgram(De,h),c.set(h,v),X.uniforms=De.uniforms;const D=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(D.clippingPlanes=_e.uniform),ur(y,De),X.needsLights=dr(y),X.lightsStateVersion=Te,X.needsLights&&(D.ambientLightColor.value=k.state.ambient,D.lightProbe.value=k.state.probe,D.directionalLights.value=k.state.directional,D.directionalLightShadows.value=k.state.directionalShadow,D.spotLights.value=k.state.spot,D.spotLightShadows.value=k.state.spotShadow,D.rectAreaLights.value=k.state.rectArea,D.ltc_1.value=k.state.rectAreaLTC1,D.ltc_2.value=k.state.rectAreaLTC2,D.pointLights.value=k.state.point,D.pointLightShadows.value=k.state.pointShadow,D.hemisphereLights.value=k.state.hemi,D.directionalShadowMap.value=k.state.directionalShadowMap,D.directionalShadowMatrix.value=k.state.directionalShadowMatrix,D.spotShadowMap.value=k.state.spotShadowMap,D.spotLightMatrix.value=k.state.spotLightMatrix,D.spotLightMap.value=k.state.spotLightMap,D.pointShadowMap.value=k.state.pointShadowMap,D.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=v,X.uniformsList=null,v}function di(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Gr.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function ur(y,B){const W=Ae.get(y);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Zr(y,B,W,X,k){B.isScene!==!0&&(B=Je),tt.resetTextureUnits();const he=B.fog,Te=X.isMeshStandardMaterial?B.environment:null,De=C===null?T.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fi,h=(X.isMeshStandardMaterial?St:bt).get(X.envMap||Te),c=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,v=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),D=!!W.morphAttributes.position,z=!!W.morphAttributes.normal,V=!!W.morphAttributes.color;let J=Hn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(J=T.toneMapping);const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=ne!==void 0?ne.length:0,re=Ae.get(X),Pe=d.state.lights;if(te===!0&&(ge===!0||y!==b)){const je=y===b&&X.id===E;_e.setState(X,y,je)}let ce=!1;X.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Pe.state.version||re.outputColorSpace!==De||k.isBatchedMesh&&re.batching===!1||!k.isBatchedMesh&&re.batching===!0||k.isBatchedMesh&&re.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&re.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&re.instancing===!1||!k.isInstancedMesh&&re.instancing===!0||k.isSkinnedMesh&&re.skinning===!1||!k.isSkinnedMesh&&re.skinning===!0||k.isInstancedMesh&&re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&re.instancingMorph===!1&&k.morphTexture!==null||re.envMap!==h||X.fog===!0&&re.fog!==he||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==_e.numPlanes||re.numIntersection!==_e.numIntersection)||re.vertexAlphas!==c||re.vertexTangents!==v||re.morphTargets!==D||re.morphNormals!==z||re.morphColors!==V||re.toneMapping!==J||re.morphTargetsCount!==le)&&(ce=!0):(ce=!0,re.__version=X.version);let Ne=re.currentProgram;ce===!0&&(Ne=Pn(X,B,k));let K=!1,ze=!1,Ke=!1;const He=Ne.getUniforms(),ke=re.uniforms;if(Fe.useProgram(Ne.program)&&(K=!0,ze=!0,Ke=!0),X.id!==E&&(E=X.id,ze=!0),K||b!==y){Fe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),He.setValue(P,"projectionMatrix",y.projectionMatrix),He.setValue(P,"viewMatrix",y.matrixWorldInverse);const qe=He.map.cameraPosition;qe!==void 0&&qe.setValue(P,Xe.setFromMatrixPosition(y.matrixWorld)),ut.logarithmicDepthBuffer&&He.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&He.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,ze=!0,Ke=!0)}if(k.isSkinnedMesh){He.setOptional(P,k,"bindMatrix"),He.setOptional(P,k,"bindMatrixInverse");const je=k.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),He.setValue(P,"boneTexture",je.boneTexture,tt))}k.isBatchedMesh&&(He.setOptional(P,k,"batchingTexture"),He.setValue(P,"batchingTexture",k._matricesTexture,tt),He.setOptional(P,k,"batchingIdTexture"),He.setValue(P,"batchingIdTexture",k._indirectTexture,tt),He.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&He.setValue(P,"batchingColorTexture",k._colorsTexture,tt));const ue=W.morphAttributes;if((ue.position!==void 0||ue.normal!==void 0||ue.color!==void 0)&&pe.update(k,W,Ne),(ze||re.receiveShadow!==k.receiveShadow)&&(re.receiveShadow=k.receiveShadow,He.setValue(P,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ke.envMap.value=h,ke.flipEnvMap.value=h.isCubeTexture&&h.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(ke.envMapIntensity.value=B.environmentIntensity),ze&&(He.setValue(P,"toneMappingExposure",T.toneMappingExposure),re.needsLights&&Kr(ke,Ke),he&&X.fog===!0&&oe.refreshFogUniforms(ke,he),oe.refreshMaterialUniforms(ke,X,Z,fe,d.state.transmissionRenderTarget[y.id]),Gr.upload(P,di(re),ke,tt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gr.upload(P,di(re),ke,tt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&He.setValue(P,"center",k.center),He.setValue(P,"modelViewMatrix",k.modelViewMatrix),He.setValue(P,"normalMatrix",k.normalMatrix),He.setValue(P,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const je=X.uniformsGroups;for(let qe=0,gt=je.length;qe<gt;qe++){const _t=je[qe];et.update(_t,Ne),et.bind(_t,Ne)}}return Ne}function Kr(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function dr(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,B,W){const X=Ae.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ae.get(y.texture).__webglTexture=B,Ae.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const W=Ae.get(y);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Jr=P.createFramebuffer();this.setRenderTarget=function(y,B=0,W=0){C=y,L=B,O=W;let X=!0,k=null,he=!1,Te=!1;if(y){const h=Ae.get(y);if(h.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(h.__webglFramebuffer===void 0)tt.setupRenderTarget(y);else if(h.__hasExternalTextures)tt.rebindTextures(y,Ae.get(y.texture).__webglTexture,Ae.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const D=y.depthTexture;if(h.__boundDepthTexture!==D){if(D!==null&&Ae.has(D)&&(y.width!==D.image.width||y.height!==D.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(y)}}const c=y.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(Te=!0);const v=Ae.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(v[B])?k=v[B][W]:k=v[B],he=!0):y.samples>0&&tt.useMultisampledRTT(y)===!1?k=Ae.get(y).__webglMultisampledFramebuffer:Array.isArray(v)?k=v[W]:k=v,R.copy(y.viewport),Y.copy(y.scissor),q=y.scissorTest}else R.copy(Be).multiplyScalar(Z).floor(),Y.copy($e).multiplyScalar(Z).floor(),q=at;if(W!==0&&(k=Jr),Fe.bindFramebuffer(P.FRAMEBUFFER,k)&&X&&Fe.drawBuffers(y,k),Fe.viewport(R),Fe.scissor(Y),Fe.setScissorTest(q),he){const h=Ae.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,h.__webglTexture,W)}else if(Te){const h=B;for(let c=0;c<y.textures.length;c++){const v=Ae.get(y.textures[c]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+c,v.__webglTexture,W,h)}}else if(y!==null&&W!==0){const h=Ae.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,h.__webglTexture,W)}E=-1},this.readRenderTargetPixels=function(y,B,W,X,k,he,Te,De=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let h=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(h=h[Te]),h){Fe.bindFramebuffer(P.FRAMEBUFFER,h);try{const c=y.textures[De],v=c.format,D=c.type;if(!ut.textureFormatReadable(v)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(D)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-X&&W>=0&&W<=y.height-k&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+De),P.readPixels(B,W,X,k,Le.convert(v),Le.convert(D),he))}finally{const c=C!==null?Ae.get(C).__webglFramebuffer:null;Fe.bindFramebuffer(P.FRAMEBUFFER,c)}}},this.readRenderTargetPixelsAsync=async function(y,B,W,X,k,he,Te,De=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let h=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(h=h[Te]),h)if(B>=0&&B<=y.width-X&&W>=0&&W<=y.height-k){Fe.bindFramebuffer(P.FRAMEBUFFER,h);const c=y.textures[De],v=c.format,D=c.type;if(!ut.textureFormatReadable(v))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(D))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const z=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,z),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+De),P.readPixels(B,W,X,k,Le.convert(v),Le.convert(D),0);const V=C!==null?Ae.get(C).__webglFramebuffer:null;Fe.bindFramebuffer(P.FRAMEBUFFER,V);const J=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ql(P,J,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,z),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(z),P.deleteSync(J),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,W=0){const X=Math.pow(2,-W),k=Math.floor(y.image.width*X),he=Math.floor(y.image.height*X),Te=B!==null?B.x:0,De=B!==null?B.y:0;tt.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Te,De,k,he),Fe.unbindTexture()};const hr=P.createFramebuffer(),fr=P.createFramebuffer();this.copyTextureToTexture=function(y,B,W=null,X=null,k=0,he=null){he===null&&(k!==0?(Di("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=k,k=0):he=0);let Te,De,h,c,v,D,z,V,J;const ne=y.isCompressedTexture?y.mipmaps[he]:y.image;if(W!==null)Te=W.max.x-W.min.x,De=W.max.y-W.min.y,h=W.isBox3?W.max.z-W.min.z:1,c=W.min.x,v=W.min.y,D=W.isBox3?W.min.z:0;else{const ue=Math.pow(2,-k);Te=Math.floor(ne.width*ue),De=Math.floor(ne.height*ue),y.isDataArrayTexture?h=ne.depth:y.isData3DTexture?h=Math.floor(ne.depth*ue):h=1,c=0,v=0,D=0}X!==null?(z=X.x,V=X.y,J=X.z):(z=0,V=0,J=0);const le=Le.convert(B.format),re=Le.convert(B.type);let Pe;B.isData3DTexture?(tt.setTexture3D(B,0),Pe=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(tt.setTexture2DArray(B,0),Pe=P.TEXTURE_2D_ARRAY):(tt.setTexture2D(B,0),Pe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const ce=P.getParameter(P.UNPACK_ROW_LENGTH),Ne=P.getParameter(P.UNPACK_IMAGE_HEIGHT),K=P.getParameter(P.UNPACK_SKIP_PIXELS),ze=P.getParameter(P.UNPACK_SKIP_ROWS),Ke=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ne.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ne.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,c),P.pixelStorei(P.UNPACK_SKIP_ROWS,v),P.pixelStorei(P.UNPACK_SKIP_IMAGES,D);const He=y.isDataArrayTexture||y.isData3DTexture,ke=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const ue=Ae.get(y),je=Ae.get(B),qe=Ae.get(ue.__renderTarget),gt=Ae.get(je.__renderTarget);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,qe.__webglFramebuffer),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let _t=0;_t<h;_t++)He&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(y).__webglTexture,k,D+_t),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(B).__webglTexture,he,J+_t)),P.blitFramebuffer(c,v,Te,De,z,V,Te,De,P.DEPTH_BUFFER_BIT,P.NEAREST);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Ae.has(y)){const ue=Ae.get(y),je=Ae.get(B);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,hr),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,fr);for(let qe=0;qe<h;qe++)He?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.__webglTexture,k,D+qe):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,k),ke?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,je.__webglTexture,he,J+qe):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,je.__webglTexture,he),k!==0?P.blitFramebuffer(c,v,Te,De,z,V,Te,De,P.COLOR_BUFFER_BIT,P.NEAREST):ke?P.copyTexSubImage3D(Pe,he,z,V,J+qe,c,v,Te,De):P.copyTexSubImage2D(Pe,he,z,V,c,v,Te,De);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ke?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Pe,he,z,V,J,Te,De,h,le,re,ne.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,he,z,V,J,Te,De,h,le,ne.data):P.texSubImage3D(Pe,he,z,V,J,Te,De,h,le,re,ne):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,z,V,Te,De,le,re,ne.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,z,V,ne.width,ne.height,le,ne.data):P.texSubImage2D(P.TEXTURE_2D,he,z,V,Te,De,le,re,ne);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ne),P.pixelStorei(P.UNPACK_SKIP_PIXELS,K),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ke),he===0&&B.generateMipmaps&&P.generateMipmap(Pe),Fe.unbindTexture()},this.copyTextureToTexture3D=function(y,B,W=null,X=null,k=0){return Di('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,B,W,X,k)},this.initRenderTarget=function(y){Ae.get(y).__webglFramebuffer===void 0&&tt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?tt.setTextureCube(y,0):y.isData3DTexture?tt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?tt.setTexture2DArray(y,0):tt.setTexture2D(y,0),Fe.unbindTexture()},this.resetState=function(){L=0,O=0,C=null,Fe.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}(()=>{const r=(h,c,v)=>Math.max(c,Math.min(v,h)),e=h=>JSON.parse(JSON.stringify(h)),t=h=>({x:h.x,y:h.y,z:h.z}),n=(h,c=0)=>Number.isFinite(h)?h:c,s={forest:{id:"forest",name:"森林回声",theme:"forest",par:4,accent:12255095,ground:3105597,fairway:4950613,sky:1457973,spawn:{x:-9,y:.28,z:0},hole:{x:9,y:.08,z:0,radius:.55,captureSpeed:2.15},description:"树影包围的经典球道，沙坑与缓坡考验落点。",difficulty:"均衡",cameraAngle:.68,fieldEffect:"森林球场规则",fieldDetail:"草地为标准滚速；沙坑会明显减速；北侧斜坡会将球推向下坡方向。"},desert:{id:"desert",name:"日蚀沙海",theme:"desert",par:5,accent:16765806,ground:12025925,fairway:13215594,sky:14919535,spawn:{x:-9,y:.28,z:-2},hole:{x:8.5,y:.08,z:2,radius:.55,captureSpeed:2.15},description:"热浪中的狭长线路，岩柱与沙区迫使你精确控力。",difficulty:"进阶",cameraAngle:.78,fieldEffect:"沙海地形效果",fieldDetail:"沙面阻力最高；沙丘会按坡度真实加速或减速，高速越过坡顶可能腾空；蓝色玻璃道更滑；岩柱碰撞会弹起并改变方向。"},snow:{id:"snow",name:"极光冰原",theme:"snow",par:4,accent:9235711,ground:14216946,fairway:12575711,sky:3496330,spawn:{x:-9,y:.28,z:2},hole:{x:8.5,y:.08,z:-2,radius:.55,captureSpeed:2.15},description:"低摩擦冰道延长滚动距离，越轻的推杆越难掌握。",difficulty:"技巧",cameraAngle:.58,fieldEffect:"冰雪球场规则",fieldDetail:"冰面会长距离滑行；粉雪会快速减速；冰晶碰撞会产生弹跳与碎冰特效。"}},a={forest:{surfaces:[{id:"forest-grass",type:"grass",friction:1.2,center:{x:-8,y:0,z:-4},bounds:{minX:-11,maxX:11,minZ:-7,maxZ:7}},{id:"forest-sand",type:"sand",friction:5,center:{x:-2,y:.015,z:2.5},bounds:{minX:-4.2,maxX:.2,minZ:.9,maxZ:4.4}},{id:"forest-ice",type:"ice",friction:.1,center:{x:4.7,y:.02,z:-2.4},bounds:{minX:2.2,maxX:7.2,minZ:-4.1,maxZ:-.8}}],obstacles:[{id:"forest-stone-a",type:"stone",x:-2.7,z:-2.15,radius:.76,solid:!0,modelType:"clustered-rock",collider:{shape:"cylinder",radius:.76,height:1.2}},{id:"forest-stone-b",type:"stone",x:2.05,z:2.65,radius:.7,solid:!0,modelType:"clustered-rock",collider:{shape:"cylinder",radius:.7,height:1.2}},{id:"forest-stone-c",type:"stone",x:6.05,z:1.75,radius:.62,solid:!0,modelType:"clustered-rock",collider:{shape:"cylinder",radius:.62,height:1.2}},{id:"forest-stone-d",type:"stone",x:-5.65,z:4.55,radius:.62,solid:!0,modelType:"clustered-rock",collider:{shape:"cylinder",radius:.62,height:1.2}}],powerups:[{id:"forest-bounce",type:"bounce_pad",position:{x:-5.45,y:.08,z:-3.25},active:!0,collected:!1,direction:{x:.9,z:.25},placed:!1},{id:"forest-boost",type:"speed_boost",position:{x:-.35,y:.08,z:-.75},active:!0,collected:!1,direction:{x:.99,z:.12},placed:!1},{id:"forest-hio",type:"hole_in_one",position:{x:-5.9,y:.32,z:1.55},active:!0,collected:!1,direction:{x:1,z:0},placed:!1}]},desert:{surfaces:[{id:"desert-fairway",type:"grass",friction:1.25,center:{x:-8,y:0,z:-4},bounds:{minX:-11,maxX:11,minZ:-7,maxZ:7}},{id:"desert-sand",type:"sand",friction:5.4,center:{x:.4,y:.015,z:-1.6},bounds:{minX:-2.8,maxX:3.6,minZ:-3.7,maxZ:.4}},{id:"desert-glass",type:"ice",friction:.11,center:{x:5.2,y:.02,z:3.6},bounds:{minX:3.1,maxX:7.4,minZ:2.2,maxZ:5}}],obstacles:[{id:"desert-pillar-a",type:"pillar",x:-4.65,z:1.95,radius:.7,solid:!0,modelType:"capped-column",collider:{shape:"cylinder",radius:.7,height:1.7}},{id:"desert-pillar-b",type:"pillar",x:-1,z:-4.75,radius:.78,solid:!0,modelType:"capped-column",collider:{shape:"cylinder",radius:.78,height:1.7}},{id:"desert-pillar-c",type:"pillar",x:3.75,z:-1.45,radius:.68,solid:!0,modelType:"capped-column",collider:{shape:"cylinder",radius:.68,height:1.7}},{id:"desert-pillar-d",type:"pillar",x:6.55,z:4.9,radius:.64,solid:!0,modelType:"capped-column",collider:{shape:"cylinder",radius:.64,height:1.7}},{id:"desert-gate-post-0",type:"gate-post",x:-7.8,z:5.4,radius:.5,solid:!0,modelType:"capped-column",collider:{shape:"cylinder",radius:.5,height:1.5}},{id:"desert-gate-post-1",type:"gate-post",x:7.8,z:-5.4,radius:.5,solid:!0,modelType:"capped-column",collider:{shape:"cylinder",radius:.5,height:1.5}}],powerups:[{id:"desert-bounce",type:"bounce_pad",position:{x:-6.35,y:.08,z:-3.05},active:!0,collected:!1,direction:{x:.72,z:.7},placed:!1},{id:"desert-boost",type:"speed_boost",position:{x:1.55,y:.08,z:.7},active:!0,collected:!1,direction:{x:.96,z:.28},placed:!1},{id:"desert-hio",type:"hole_in_one",position:{x:6.35,y:.32,z:-4.45},active:!0,collected:!1,direction:{x:1,z:0},placed:!1}]},snow:{surfaces:[{id:"snow-fairway",type:"grass",friction:1.1,center:{x:-8,y:0,z:-4},bounds:{minX:-11,maxX:11,minZ:-7,maxZ:7}},{id:"snow-powder",type:"sand",friction:4.8,center:{x:-4.5,y:.015,z:-2},bounds:{minX:-7.2,maxX:-2,minZ:-3.5,maxZ:-.5}},{id:"snow-ice",type:"ice",friction:.09,center:{x:-1,y:.02,z:1.8},bounds:{minX:-5.5,maxX:3.5,minZ:.2,maxZ:3.4}}],obstacles:[{id:"snow-crystal-a",type:"crystal",x:-5.75,z:4.25,radius:.64,solid:!0,modelType:"crystal-cluster",collider:{shape:"cylinder",radius:.64,height:1.8}},{id:"snow-crystal-b",type:"crystal",x:-1.55,z:-4.15,radius:.75,solid:!0,modelType:"crystal-cluster",collider:{shape:"cylinder",radius:.75,height:1.8}},{id:"snow-crystal-c",type:"crystal",x:4.15,z:4.65,radius:.68,solid:!0,modelType:"crystal-cluster",collider:{shape:"cylinder",radius:.68,height:1.8}},{id:"snow-crystal-d",type:"crystal",x:6.45,z:-4.2,radius:.68,solid:!0,modelType:"crystal-cluster",collider:{shape:"cylinder",radius:.68,height:1.8}},{id:"snow-ice-spike-0",type:"ice-spike",x:-8.6,z:4.8,radius:.55,solid:!0,modelType:"crystal-cluster",collider:{shape:"cylinder",radius:.55,height:1.65}},{id:"snow-ice-spike-1",type:"ice-spike",x:8.1,z:-4.8,radius:.55,solid:!0,modelType:"crystal-cluster",collider:{shape:"cylinder",radius:.55,height:1.65}},{id:"snow-ice-spike-2",type:"ice-spike",x:9,z:4.8,radius:.55,solid:!0,modelType:"crystal-cluster",collider:{shape:"cylinder",radius:.55,height:1.65}}],powerups:[{id:"snow-bounce",type:"bounce_pad",position:{x:-3.9,y:.08,z:4.45},active:!0,collected:!1,direction:{x:.9,z:-.44},placed:!1},{id:"snow-boost",type:"speed_boost",position:{x:1.15,y:.08,z:.85},active:!0,collected:!1,direction:{x:.96,z:-.28},placed:!1},{id:"snow-hio",type:"hole_in_one",position:{x:6.2,y:.32,z:4.25},active:!0,collected:!1,direction:{x:1,z:0},placed:!1}]}},o=()=>({position:{x:-9,y:.28,z:0},velocity:{x:0,y:0,z:0},speed:0,radius:.28,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:"grass",friction:1.2,lastCollision:null,lastImpactAt:0,lastSafePosition:{x:-9,y:.28,z:0},lowSpeedTime:0}),l=()=>[{type:"hole_in_one",count:0},{type:"bounce_pad",count:1},{type:"speed_boost",count:1}],i={ready:!1,renderError:"",screen:"menu",mode:"single",level:null,elapsed:0,strokes:0,lastCompletedStrokes:0,totalStrokes:0,currentScore:0,totalScore:0,holeComplete:!1,startedAt:performance.now(),tournamentScores:{},tournamentPoints:{},toast:"",toastUntil:0,ball:o(),shot:{dragging:!1,canShoot:!0,startScreen:null,currentScreen:null,direction:{x:1,y:0,z:0},power:0,minPower:.06,maxPower:1,strokeCount:0},camera:{mode:"follow",position:{x:-9,y:8,z:12},target:{x:-9,y:.28,z:0},distance:12,minDistance:7,maxDistance:20,zoom:1,angle:.68,pitch:.62,freeAngle:.68,dragging:!1,dragStart:null,startAngle:.68,startPitch:.62},multiplayer:{enabled:!1,mode:"local",status:"setup",playerCount:0,currentPlayerId:null,turnIndex:0,round:1,revision:0,players:[],winnerId:null,tiedPlayerIds:[]},powerups:{items:[],inventory:l(),activeEffect:null,armedType:null,lastTriggeredId:null,placingType:null,placementScreen:null,placementStart:null,placementAnchor:null,placementDirection:null,selectedPlacedId:null,lastPlacedId:null},ui:{showDirection:!0,showField:!0,showSkills:!0,showTips:!0,compactHud:!1,collapseStats:!1,collapseField:!1,collapsePower:!1,collapseSkills:!1},skillFeedback:null,effects:[],holeCaptureTime:0,fastHoleHintUntil:0,lastTrailAt:0,ballRollAngle:0,renderer:null,scene:null,camera3d:null,ballMesh:null,raf:0,accumulator:0,lastFrame:performance.now(),lastUiPulse:0,pendingLevel:"forest",testPhysicsPaused:!1,physics:{fixedTimeStep:1/120,maxSubSteps:7,gravity:{x:0,y:-9.81,z:0},stopSpeed:.035,maxBallSpeed:18},runtime:{simulationTick:0,renderFrame:0,reactCommitCount:0,logicLoopCount:0,runtimeMountCount:0,runtimeCleanupCount:0,engineGeneration:0}},u=()=>a[i.level?.id||i.pendingLevel||"forest"]||a.forest,f=h=>i.powerups.inventory.find(c=>c.type===h),p=()=>u().obstacles,m=()=>u().surfaces,g=new Set;let M=0;const S=()=>{M+=1,g.forEach(h=>h())},_=()=>{M+=1,g.forEach(h=>h())},d=h=>(g.add(h),()=>g.delete(h)),I=()=>M,A=(h,c=1800)=>{i.toast=h,i.toastUntil=performance.now()+c,S()},T=h=>{i.screen=h,i.shot.dragging=!1,i.shot.startScreen=null,i.shot.currentScreen=null,h==="local_setup"&&(Object.assign(i.multiplayer,{enabled:!1,mode:"local",status:"setup",playerCount:0,currentPlayerId:null,turnIndex:0,round:1,revision:0,players:[],winnerId:null,tiedPlayerIds:[]}),i.mode="single"),S()},U=(h,c)=>{const v=m(),D=v.find(V=>V.type==="sand")||v[1];if(D&&h>=D.bounds.minX&&h<=D.bounds.maxX&&c>=D.bounds.minZ&&c<=D.bounds.maxZ)return D;const z=v.find(V=>V.type==="ice")||v[2];return z&&h>=z.bounds.minX&&h<=z.bounds.maxX&&c>=z.bounds.minZ&&c<=z.bounds.maxZ?z:v.find(V=>V.type==="grass")||v[0]},L=h=>{h.traverse?.(c=>{c.geometry?.dispose?.(),(Array.isArray(c.material)?c.material:c.material?[c.material]:[]).forEach(D=>{Object.values(D).forEach(z=>z?.isTexture&&z.dispose?.()),D.dispose?.()})})},O=()=>{if(!i.scene)return;[...i.scene.children].forEach(c=>{L(c),i.scene.remove(c)})},C=(h,c,v,D,z,V)=>{const J=new mn(h,c);return J.name=v,J.position.set(D,z,V),J.castShadow=!1,J.receiveShadow=!0,i.scene.add(J),J},E=(h,c,v)=>(h.userData.powerupId=c.id,h.userData.powerupType=c.type,h.userData.powerupPart=v,h),b=h=>{if(!i.scene||!h)return;const c=[];i.scene.traverse(v=>{v.userData?.powerupId===h.id&&c.push(v)}),c.forEach(v=>{v.visible=!1,v.parent&&(L(v),v.parent.remove(v))})},R=h=>{const c=n(h?.x,1),v=n(h?.z,0),D=Math.hypot(c,v)||1;return{x:c/D,z:v/D}},Y=[{id:"dune-north",x:-1.75,z:4.25,radiusX:2.15,radiusZ:1.3,height:.64},{id:"dune-south",x:4.75,z:-4.05,radiusX:1.85,radiusZ:1.15,height:.52}],q=(h,c)=>{const v=i.ball?.radius||.28;if(!(h>=-1-v&&h<=4+v&&c>=3.9-v&&c<=5.9+v))return{active:!1,kind:"flat",height:0,slopeX:0,slopeZ:0,downhillX:0,downhillZ:-1};const z=r((c-3.9)/2,0,1),V=r(Math.min((h+1+v)/v,(4+v-h)/v,1),0,1),J=r(Math.min((c-3.9+v)/v,(5.9+v-c)/v,1),0,1),ne=Math.min(V,J);return{active:!0,kind:"ramp",height:(.012+z*.255)*ne,slopeX:0,slopeZ:.1275*ne,downhillX:0,downhillZ:-1}},$=(h,c)=>{if((i.level?.theme||i.pendingLevel)!=="desert")return{active:!1,kind:"flat",height:0,slopeX:0,slopeZ:0,downhillX:0,downhillZ:0};let v=null;for(const D of Y){const z=(h-D.x)/D.radiusX,V=(c-D.z)/D.radiusZ,J=Math.hypot(z,V);if(J>=1)continue;const ne=D.height*.5*(1+Math.cos(Math.PI*J)),le=Math.max(J,1e-4),re=-D.height*Math.PI*.5*Math.sin(Math.PI*J),Pe=re*z/(le*D.radiusX),ce=re*V/(le*D.radiusZ),Ne=Math.hypot(Pe,ce)||1,K={active:!0,kind:"dune",id:D.id,height:ne,slopeX:Pe,slopeZ:ce,downhillX:-Pe/Ne,downhillZ:-ce/Ne};(!v||K.height>v.height)&&(v=K)}return v||{active:!1,kind:"flat",height:0,slopeX:0,slopeZ:0,downhillX:0,downhillZ:0}},ae=(h,c)=>{const v=q(h,c),D=$(h,c);return D.height>v.height?D:v},j=(h,c)=>ae(h,c).height,fe=h=>{const c=i.ball,v=5.9,D=.267,z=v+c.radius+.024,V=c.position.x>=-1-c.radius&&c.position.x<=4+c.radius,J=h.z>=v&&c.position.z<z,ne=c.velocity.z<0,le=Math.min(h.y,c.position.y)-c.radius<D+.055;return!V||!J||!ne||!le?!1:(c.position.z=z,c.position.y=Math.max(c.radius,c.position.y),c.velocity.z=Math.max(.45,Math.abs(c.velocity.z)*.74),c.velocity.x*=.94,c.velocity.y=0,c.airborne=!1,c.moving=!0,c.sleeping=!1,c.lastCollision="slope-rear-wall",$e({x:c.position.x,y:c.position.y,z:v}),!0)},Z=h=>{h?.parent&&(L(h),h.parent.remove(h))},ye=(h,c=i.ball.position)=>{if(!i.scene||!c)return;const v={bounce_pad:16736167,speed_boost:3270911,hole_in_one:16768103,placed:12255095,impact:16765322,slowdown:9235711},D=v[h]||v.placed,z=`fx-${Date.now().toString(36)}-${Math.floor(Math.random()*9999)}`,V=C(new Nt(.58,.58,.035,28),new zn({color:D,transparent:!0,opacity:.72,depthWrite:!1}),`${z}-ring`,c.x,j(c.x,c.z)+.055,c.z);V.scale.z=.72;const J=[];for(let ne=0;ne<6;ne+=1){const le=ne/6*Math.PI*2,re=C(new dn(.055,8,6),new zn({color:D,transparent:!0,opacity:.86,depthWrite:!1}),`${z}-particle-${ne}`,c.x,.16,c.z);re.userData.fxAngle=le,J.push(re)}i.effects.push({id:z,type:h,startedAt:performance.now(),duration:720,ring:V,particles:J,origin:{x:c.x,y:j(c.x,c.z),z:c.z}})},Se=(h,c,v=i.ball.position)=>{i.skillFeedback={type:h,message:c,until:performance.now()+1250},ye(h,v),A(c,1500)},Be=(h=i.ball.position,c=i.ball.currentSurface)=>{if(!i.scene||!h||i.effects.length>24)return;const v=c==="ice"?12121599:c==="sand"?15188347:13234872,D=[];for(let z=0;z<2;z+=1){const V=C(new dn(.035+z*.012,6,5),new zn({color:v,transparent:!0,opacity:.58,depthWrite:!1}),`trail-${Date.now()}-${z}`,h.x,h.y-.18,h.z);V.userData.driftX=(Math.random()-.5)*.35,V.userData.driftZ=(Math.random()-.5)*.35,D.push(V)}i.effects.push({kind:"trail",startedAt:performance.now(),duration:360,ring:null,particles:D,origin:e(h)})},$e=(h=i.ball.position)=>{performance.now()-n(i.ball.lastImpactAt)<110||(i.ball.lastImpactAt=performance.now(),ye("impact",h))},at=h=>{!h||!i.level||(b(h),Ve(h,i.level))},ct=(h,c)=>{const v=i.powerups.items.find(J=>J.id===h&&J.placed&&J.active&&!J.collected);if(!v)return!1;const D=R(v.direction),z=Math.cos(c),V=Math.sin(c);return v.direction=R({x:D.x*z-D.z*V,z:D.x*V+D.z*z}),i.powerups.selectedPlacedId=v.id,at(v),Se("placed",`方向已调整 · ${Math.round(Math.atan2(v.direction.z,v.direction.x)*180/Math.PI)}°`,v.position),S(),!0},te=h=>{const c=i.powerups.items.find(v=>v.id===h&&v.placed&&v.active&&!v.collected);i.powerups.selectedPlacedId=c?.id||null,S()},ge=h=>{if(h in i.ui){i.ui[h]=!i.ui[h];try{localStorage.setItem("parall-ui-v1",JSON.stringify(i.ui))}catch{}S()}};try{const h=JSON.parse(localStorage.getItem("parall-ui-v1")||"null");h&&typeof h=="object"&&Object.keys(i.ui).forEach(c=>{typeof h[c]=="boolean"&&(i.ui[c]=h[c])})}catch{}const xe=h=>{const c=h.theme,v=[[-9.6,-8.35],[-6.4,-8.42],[-3.2,-8.38],[0,-8.45],[3.2,-8.38],[6.4,-8.42],[9.6,-8.35],[-9.6,8.35],[-6.4,8.42],[-3.2,8.38],[0,8.45],[3.2,8.38],[6.4,8.42],[9.6,8.35],[-12.92,-4.7],[-12.94,-.9],[-12.92,3.1],[12.92,-4.7],[12.94,-.9],[12.92,3.1]],D=c==="snow"?6583693:5978663,z=c==="snow"?12578802:2252085;v.forEach(([V,J],ne)=>{if(c==="desert"){const le=C(new Nt(.15,.22,1.9+ne%3*.18,8),new Mt({color:5212754,roughness:.92}),`cactus-${ne}`,V,1,J);le.rotation.z=ne%2?.025:-.025;const re=C(new Nt(.08,.12,.62,7),new Mt({color:5212754,roughness:.9}),`cactus-arm-${ne}`,V+(ne%2?.22:-.22),1.18,J);re.rotation.z=Math.PI/2}else{C(new Nt(.1,.15,1.45,8),new Mt({color:D,roughness:.96}),`trunk-${ne}`,V,.72,J);const le=C(new Ri(c==="snow"?.62:.7,c==="snow"?1.86:1.68,10),new Mt({color:z,roughness:.9}),`tree-${ne}`,V,1.85,J);if(c==="snow"){le.scale.set(1,1.16,1);const re=C(new Ri(.47,1.28,10),new Mt({color:15924223,roughness:.96}),`snow-cap-${ne}`,V,2.35,J);re.scale.y=.7}}})},Xe=h=>{if(h.theme==="forest"){[[-7.4,-4.8,2.6,1.25],[-.2,5.8,3.4,.95],[7.4,-5.5,2.3,1.1]].forEach(([v,D,z,V],J)=>{C(new dn(.8,16,10),new Mt({color:J%2?3632962:2775609,roughness:1}),`forest-moss-${J}`,v,-.02,D).scale.set(z,.18,V)});const c=C(new qr(1.3,28),new Mt({color:2583672,roughness:.3,metalness:.08,transparent:!0,opacity:.82,depthWrite:!1}),"forest-pond",7.8,.015,5.65);c.rotation.x=-Math.PI/2}else h.theme==="desert"?([-7.8,7.8].forEach((c,v)=>{C(new Wt(.55,2.6,.75),new Mt({color:9133374,roughness:.95}),`desert-gate-${v}-a`,c,1.05,v?-5.4:5.4),C(new Wt(2.5,.48,.75),new Mt({color:10250566,roughness:.95}),`desert-gate-${v}-b`,c,2.25,v?-5.4:5.4)}),Y.forEach((c,v)=>{C(new dn(1,28,16,0,Math.PI*2,0,Math.PI/2),new Mt({color:v?14265704:14793079,roughness:1}),`desert-course-dune-${v}`,c.x,0,c.z).scale.set(c.radiusX,c.height,c.radiusZ)})):[[-8.6,4.8],[8.1,-4.8],[9,4.8]].forEach(([c,v],D)=>{const z=C(new Ri(.55,1.7,5),new Mt({color:7988991,roughness:.22,metalness:.18,transparent:!0,opacity:.86,depthWrite:!1}),`ice-crystal-${D}`,c,.82,v);z.rotation.z=D%2?.18:-.14})},Ve=(h,c)=>{const v=h.direction||{x:1,z:0},D=Math.hypot(v.x,v.z)||1,z=v.x/D,V=v.z/D,J=-Math.atan2(V,z);if(h.type==="bounce_pad"){const ne=E(C(new Nt(1.12,1.12,.22,32),new Mt({color:16732058,emissive:8000063,metalness:.3}),`powerup-${h.id}-base`,h.position.x,j(h.position.x,h.position.z)+.11,h.position.z),h,"base");ne.scale.z=.62,ne.rotation.y=J;const le=E(C(new Nt(.72,.72,.18,28),new Mt({color:16765414,emissive:12131940}),`powerup-${h.id}-core`,h.position.x,j(h.position.x,h.position.z)+.27,h.position.z),h,"core");le.scale.z=.62,le.rotation.y=J}else if(h.type==="speed_boost"){const ne=E(C(new Wt(3.6,.14,1.38),new Mt({color:2941183,emissive:754330,metalness:.38}),`powerup-${h.id}-strip`,h.position.x,j(h.position.x,h.position.z)+.085,h.position.z),h,"strip");ne.rotation.y=J;for(let re=-1;re<=1;re+=1){const Pe=h.position.x+re*.72*z,ce=h.position.z+re*.72*V;[-1,1].forEach(Ne=>{const K=E(C(new Wt(.48,.045,.12),new zn({color:15269375,transparent:!0,opacity:.96}),`powerup-${h.id}-arrow-${re}-${Ne}`,Pe-z*.08+-V*Ne*.1,j(Pe,ce)+.11,ce-V*.08+z*Ne*.1),h,"arrow");K.rotation.y=J+Ne*.62})}const le=E(C(new Ri(.28,.78,3),new Mt({color:16777215,emissive:5629695,roughness:.28}),`powerup-${h.id}-direction-tip`,h.position.x+z*1.52,j(h.position.x,h.position.z)+.3,h.position.z+V*1.52),h,"direction-tip");le.rotation.z=Math.PI/2,le.rotation.y=J}else if(h.type==="hole_in_one"){const ne=E(C(new dn(.35,24,18),new Mt({color:16769137,emissive:9067008,metalness:.65,roughness:.18}),`powerup-${h.id}-orb`,h.position.x,h.position.y,h.position.z),h,"orb");ne.userData.floatBase=h.position.y;const le=E(C(new Nt(.55,.55,.05,28),new zn({color:c.accent,transparent:!0,opacity:.68}),`powerup-${h.id}-halo`,h.position.x,j(h.position.x,h.position.z)+.05,h.position.z),h,"halo");le.scale.z=.46}},Je=h=>{i.powerups.items.filter(c=>c.active&&!c.collected).forEach(c=>Ve(c,h))},Et=()=>{i.scene&&[...i.scene.children].filter(h=>h.userData?.powerupId).forEach(h=>{L(h),i.scene.remove(h)})},st=()=>({items:e(i.powerups.items),inventory:e(i.powerups.inventory),activeEffect:i.powerups.activeEffect,armedType:i.powerups.armedType,lastTriggeredId:i.powerups.lastTriggeredId,selectedPlacedId:i.powerups.selectedPlacedId,lastPlacedId:i.powerups.lastPlacedId}),P=h=>{if(!i.level)return!1;const c=h||{items:e(u().powerups),inventory:l()};return Et(),i.powerups.items=e(c.items||u().powerups),i.powerups.inventory=e(c.inventory||l()),i.powerups.activeEffect=c.activeEffect||null,i.powerups.armedType=c.armedType||null,i.powerups.lastTriggeredId=c.lastTriggeredId||null,i.powerups.selectedPlacedId=c.selectedPlacedId||null,i.powerups.lastPlacedId=c.lastPlacedId||null,i.powerups.placingType=null,i.powerups.placementScreen=null,i.powerups.placementStart=null,i.powerups.placementAnchor=null,i.powerups.placementDirection=null,Je(i.level),!0},pt=h=>{if(!i.scene)return i.pendingLevel=h,!1;const c=s[h]||s.forest;O(),i.level=c,i.pendingLevel=c.id;const v=u();i.scene.background=new lt(c.sky),i.scene.fog=new Aa(c.sky,c.theme==="desert"?.018:.024),i.scene.add(new Pc(16777215,c.theme==="desert"?9134904:1588526,2.2));const D=new Ic(16777215,c.theme==="snow"?2.8:2.4);D.position.set(-8,16,9),D.castShadow=!0,i.scene.add(D),C(new Wt(26,.32,18),new Mt({color:c.ground,roughness:.96}),"theme-ground",0,-.23,0),C(new Wt(23,.18,14),new Mt({color:c.fairway,roughness:.9}),"grass-surface",0,-.09,0);const z=v.surfaces.find(ue=>ue.type==="sand"),V=z.bounds.maxX-z.bounds.minX,J=z.bounds.maxZ-z.bounds.minZ,ne=Math.max(V,J)/2,le=C(new qr(ne,32),new Mt({color:c.theme==="desert"?14989425:c.theme==="snow"?15267062:14202218,roughness:1}),"sand-trap",z.center.x,.015,z.center.z);le.rotation.x=-Math.PI/2,le.scale.x=V/(ne*2),le.scale.y=J/(ne*2);const re=v.surfaces.find(ue=>ue.type==="ice"),Pe=re.bounds.maxX-re.bounds.minX,ce=re.bounds.maxZ-re.bounds.minZ,Ne=C(new Wt(Pe,.045,ce),new Mt({color:c.theme==="desert"?8378332:10348799,roughness:.2,metalness:.12,transparent:!0,opacity:.84,depthWrite:!1}),"ice-lane",re.center.x,.02,re.center.z);Ne.rotation.y=c.theme==="snow"?.08:-.05;const K=new Mt({color:c.theme==="snow"?15399167:c.theme==="desert"?9265215:1523500,roughness:.85});[[0,-7.35,24,.65],[0,7.35,24,.65],[-11.7,0,.65,15],[11.7,0,.65,15]].forEach(([ue,je,qe,gt],_t)=>{C(new Wt(qe,1.2,gt),K.clone(),`boundary-${_t}`,ue,.5,je)});const ze=C(new Wt(5,.28,2),new Mt({color:c.fairway,roughness:.82,metalness:.02}),"slope-ramp",1.5,-.01,4.9);ze.rotation.x=-.13,v.obstacles.forEach((ue,je)=>{const qe=ue.type||(c.theme==="desert"?"pillar":c.theme==="snow"?"crystal":"stone"),gt=c.theme==="snow"?7838136:c.theme==="desert"?8804413:3365189,_t=new Mt({color:gt,roughness:c.theme==="snow"?.55:.9,metalness:c.theme==="snow"?.08:.01});let ie;if(qe==="stone")ie=C(new dn(ue.radius,18,12),_t,`obstacle-${ue.id}`,ue.x,ue.radius*.7,ue.z),ie.scale.set(1.08,.72,.94),C(new dn(ue.radius*.38,12,8),_t,`obstacle-${ue.id}-chip`,ue.x+ue.radius*.34,ue.radius*1.02,ue.z-ue.radius*.18).scale.set(1,.72,.86);else if(qe==="crystal"||qe==="ice-spike"){ie=C(new Nt(0,ue.radius*.72,1.75,6),_t,`obstacle-${ue.id}`,ue.x,.875,ue.z),ie.rotation.y=je*.7;const rt=C(new Nt(0,ue.radius*.34,1,5),_t,`obstacle-${ue.id}-shard-a`,ue.x-ue.radius*.42,.5,ue.z+ue.radius*.12);rt.rotation.z=-.24;const Ye=C(new Nt(0,ue.radius*.3,.82,5),_t,`obstacle-${ue.id}-shard-b`,ue.x+ue.radius*.42,.41,ue.z-ue.radius*.14);Ye.rotation.z=.28}else ie=C(new Nt(ue.radius*.68,ue.radius,1.52+je*.025,8),_t,`obstacle-${ue.id}`,ue.x,.76,ue.z),C(new Nt(ue.radius*.92,ue.radius*.92,.16,8),_t,`obstacle-${ue.id}-base`,ue.x,.08,ue.z),C(new Nt(ue.radius*.82,ue.radius*.82,.14,8),_t,`obstacle-${ue.id}-cap`,ue.x,1.53,ue.z);ie.userData.solid=!0,ie.userData.colliderRadius=ue.collider?.radius||ue.radius,ie.userData.modelType=ue.modelType||"compound-obstacle",ie.castShadow=!0,ie.receiveShadow=!0});const Ke=C(new Nt(c.hole.radius,c.hole.radius,.07,40),new Mt({color:397836,roughness:1}),"hole",c.hole.x,.015,c.hole.z);Ke.userData.role="hole",Ke.rotation.x=0,C(new Nt(.035,.035,3,12),new Mt({color:16382454,roughness:.55}),"flag-pole",c.hole.x,1.5,c.hole.z);const He=C(new sr(1.15,.62),new zn({color:c.accent,side:2}),"flag",c.hole.x,2.55,c.hole.z+.57);He.rotation.y=Math.PI/2;const ke=C(new dn(.28,20,14),new Mt({color:16777215,roughness:.36,metalness:.05}),"golf-ball",c.spawn.x,c.spawn.y,c.spawn.z);return ke.userData.role="ball",i.ballMesh=ke,ke.castShadow=!0,Xe(c),xe(c),i.powerups.items=e(v.powerups),i.powerups.activeEffect=null,i.powerups.armedType=null,i.powerups.lastTriggeredId=null,i.powerups.placingType=null,i.powerups.placementScreen=null,i.powerups.placementStart=null,i.powerups.placementAnchor=null,i.powerups.placementDirection=null,i.powerups.selectedPlacedId=null,i.powerups.lastPlacedId=null,i.effects=[],i.skillFeedback=null,i.holeCaptureTime=0,i.powerups.inventory=l(),Je(c),i.camera.mode="follow",i.camera.angle=c.cameraAngle,i.camera.freeAngle=c.cameraAngle,i.camera.pitch=.62,i.camera.dragging=!1,i.camera.dragStart=null,i.renderer?.domElement&&(i.renderer.domElement.style.cursor="crosshair"),Ge(!1),S(),!0},Ge=(h=!1)=>{const c=i.level||s[i.pendingLevel]||s.forest,v=U(c.spawn.x,c.spawn.z),D={x:c.spawn.x,y:i.ball.radius+j(c.spawn.x,c.spawn.z),z:c.spawn.z};i.ball.position=e(D),i.ball.velocity={x:0,y:0,z:0},i.ball.speed=0,i.ball.moving=!1,i.ball.sleeping=!0,i.ball.airborne=!1,i.ball.inHole=!1,i.holeCaptureTime=0,h||(i.ball.outOfBounds=!1),i.ball.currentSurface=v.type,i.ball.friction=v.friction,i.ball.lastCollision=null,i.ball.lastImpactAt=0,i.ball.lowSpeedTime=0,i.ball.lastSafePosition=e(D),i.shot.dragging=!1,i.shot.canShoot=!0,i.shot.startScreen=null,i.shot.currentScreen=null,i.shot.direction={x:1,y:0,z:0},i.shot.power=0,i.powerups.lastTriggeredId=null,i.fastHoleHintUntil=0,i.ballMesh&&i.ballMesh.position.set(D.x,D.y,D.z),S()},ut=()=>{if(!i.level||i.screen!=="playing")return!1;const h={x:n(i.level.spawn.x,-9),y:i.ball.radius+j(n(i.level.spawn.x,-9),n(i.level.spawn.z,0)),z:n(i.level.spawn.z,0)};return i.ball.position=e(h),i.ball.velocity={x:0,y:0,z:0},i.ball.speed=0,i.ball.moving=!1,i.ball.sleeping=!0,i.ball.airborne=!1,i.ball.inHole=!1,i.ball.outOfBounds=!1,i.ball.currentSurface=U(h.x,h.z).type,i.ball.friction=U(h.x,h.z).friction,i.ball.lastCollision="manual-reset-to-spawn",i.ball.lastImpactAt=0,i.ball.lowSpeedTime=0,i.ball.lastSafePosition=e(h),i.holeCaptureTime=0,i.fastHoleHintUntil=0,i.shot.dragging=!1,i.shot.canShoot=!0,i.shot.startScreen=null,i.shot.currentScreen=null,i.shot.direction={x:1,y:0,z:0},i.shot.power=0,i.powerups.placingType=null,i.powerups.placementScreen=null,i.powerups.placementStart=null,i.powerups.placementAnchor=null,i.powerups.placementDirection=null,i.powerups.activeEffect=null,i.accumulator=0,i.lastFrame=performance.now(),i.ballMesh&&(i.ballMesh.position.set(h.x,h.y,h.z),i.ballMesh.rotation.set(0,0,0)),Se("placed","已回到本洞初始位置，可以继续击球",h),A("球位已重置 · 可重新击球"),S(),!0},Fe=(h,c=!1)=>{const v=s[h]||s.forest;if(c||(i.totalStrokes=0,i.totalScore=0,i.tournamentScores={},i.tournamentPoints={}),i.mode=i.multiplayer.enabled?"local_multiplayer":"single",i.multiplayer.enabled&&(i.multiplayer.status="playing",i.multiplayer.winnerId=null,i.multiplayer.tiedPlayerIds=[],i.multiplayer.players.forEach(D=>{D.finished=!1,D.holeStrokes=0})),i.level=v,i.screen="playing",i.holeComplete=!1,i.strokes=0,i.lastCompletedStrokes=0,i.currentScore=0,i.shot.strokeCount=0,i.startedAt=performance.now(),i.elapsed=0,pt(v.id),i.multiplayer.enabled){const D=st();i.multiplayer.players.forEach(z=>{z.powerupState=e(D)})}A(`${v.name} · PAR ${v.par}`,1400),S()},yt=(h,c,v=i.elapsed)=>{const D=Math.max(1,Math.floor(n(h,1))),z=Math.max(1,Math.floor(n(c,4))),V=(D-1)*1600,J=Math.min(900,Math.max(0,Math.floor(n(v)*4))),ne=Math.max(0,z-D)*180;return Math.max(100,12e3-V-J+ne)},Ae=(h,c)=>{const v=h-c;return h===1?"ACE":v<=-3?"ALBATROSS":v===-2?"EAGLE":v===-1?"BIRDIE":v===0?"PAR":v===1?"BOGEY":"KEEP SWINGING"},tt="parall-leaderboard-v4",bt=()=>({version:4,levelBest:{forest:[],desert:[],snow:[]},overall:[]});let St=bt(),w=!1;const x=h=>Number.isFinite(h)&&h>=1,H=h=>(Array.isArray(h)?h:[]).filter(c=>c&&x(c.strokes)).map(c=>({playerId:String(c.playerId||(c.player==="本地球手"?"local-player":"remote-player")),playerName:String(c.playerName||c.player||"球手"),strokes:Math.floor(c.strokes),rank:0,par:Number.isFinite(c.par)?c.par:0,relativeToPar:Number.isFinite(c.relativeToPar)?c.relativeToPar:Math.floor(c.strokes)-(Number.isFinite(c.par)?c.par:0),achievedAt:Number.isFinite(c.achievedAt)?c.achievedAt:0})).sort((c,v)=>c.strokes-v.strokes||c.achievedAt-v.achievedAt||c.playerId.localeCompare(v.playerId)).map((c,v)=>({...c,rank:v+1})),Q=h=>(Array.isArray(h)?h:[]).filter(c=>c&&x(c.totalStrokes)&&c.levelStrokes&&["forest","desert","snow"].every(v=>x(c.levelStrokes[v]))).map(c=>({playerId:String(c.playerId||(c.player==="本地球手"?"local-player":"remote-player")),playerName:String(c.playerName||c.player||"球手"),levelStrokes:{forest:Math.floor(c.levelStrokes.forest),desert:Math.floor(c.levelStrokes.desert),snow:Math.floor(c.levelStrokes.snow)},totalStrokes:Math.floor(c.totalStrokes),rank:0,achievedAt:Number.isFinite(c.achievedAt)?c.achievedAt:0})).sort((c,v)=>c.totalStrokes-v.totalStrokes||c.achievedAt-v.achievedAt||c.playerId.localeCompare(v.playerId)).map((c,v)=>({...c,rank:v+1})),oe=()=>{try{const h=JSON.parse(localStorage.getItem(tt)||"null");if(h&&typeof h=="object"){const c=bt();for(const v of["forest","desert","snow"])c.levelBest[v]=H(h.levelBest?.[v]);return c.overall=Q(h.overall),St=e(c),w=!0,c}}catch{}return w||(St=bt(),w=!0),e(St)},ee=h=>{const c=bt();for(const v of["forest","desert","snow"])c.levelBest[v]=H(h.levelBest?.[v]);c.overall=Q(h.overall),St=e(c),w=!0;try{return localStorage.setItem(tt,JSON.stringify(c)),!0}catch{return!1}},Oe=(h=null)=>{const c=h?.levelId||i.level?.id,v=h?.strokes??i.strokes,D=h?.par??i.level?.par;if(!["forest","desert","snow"].includes(c)||!x(v)||!Number.isFinite(D))return!1;const z=oe(),V=h?.playerId||(i.multiplayer.enabled?i.multiplayer.currentPlayerId||"local-match-player":"local-player"),J=h?.playerName||(i.multiplayer.enabled?Ce(i.multiplayer.currentPlayerId)?.name||"本地对战球手":"本地球手"),ne={playerId:V,playerName:J,strokes:Math.floor(v),rank:0,par:Math.floor(D),relativeToPar:Math.floor(v)-Math.floor(D),achievedAt:Date.now()},le=H(z.levelBest[c]),re=le.find(K=>K.playerId===V),Pe=le.filter(K=>K.playerId!==V);!re||ne.strokes<re.strokes?Pe.push(ne):Pe.push(re),z.levelBest[c]=H(Pe).slice(0,8);const ce=["forest","desert","snow"],Ne=Object.fromEntries(ce.map(K=>{const ze=H(z.levelBest[K]).find(Ke=>Ke.playerId===V);return[K,ze?.strokes]}));if(ce.every(K=>x(Ne[K]))){const K=Object.fromEntries(ce.map(je=>[je,Math.floor(Ne[je])])),ze=ce.reduce((je,qe)=>je+K[qe],0),Ke={playerId:V,playerName:J,totalStrokes:ze,levelStrokes:K,rank:0,achievedAt:Date.now()},He=Q(z.overall),ke=He.find(je=>je.playerId===V),ue=He.filter(je=>je.playerId!==V);!ke||Ke.totalStrokes<ke.totalStrokes?ue.push(Ke):ue.push(ke),z.overall=Q(ue).slice(0,8)}return ee(z)},_e=()=>{const h=["forest","desert","snow"];if(!h.every(Pe=>x(i.tournamentScores[Pe])))return!1;const c=oe(),v=i.multiplayer.enabled?i.multiplayer.currentPlayerId||"local-match-player":"local-player",D=i.multiplayer.enabled?Ce(i.multiplayer.currentPlayerId)?.name||"本地对战球手":"本地球手",z=Object.fromEntries(h.map(Pe=>[Pe,Math.floor(i.tournamentScores[Pe])])),V=h.reduce((Pe,ce)=>Pe+z[ce],0),J={playerId:v,playerName:D,totalStrokes:V,levelStrokes:z,rank:0,achievedAt:Date.now()},ne=Q(c.overall),le=ne.find(Pe=>Pe.playerId===v),re=ne.filter(Pe=>Pe.playerId!==v);return!le||J.totalStrokes<le.totalStrokes?re.push(J):re.push(le),c.overall=Q(re).slice(0,8),ee(c)},Ue=()=>{const h=oe();let c=!1;try{const v=`${tt}-probe`;localStorage.setItem(v,"1"),c=localStorage.getItem(v)==="1",localStorage.removeItem(v)}catch{}return{...e(h),persisted:c}},Ce=h=>i.multiplayer.players.find(c=>c.id===h)||null,pe=()=>{if(!i.multiplayer.enabled)return null;const h=Ce(i.multiplayer.currentPlayerId);return h?(h.holeStrokes=Math.max(0,Math.floor(n(i.strokes))),h.ballPosition=e(i.ball.position),h.ballVelocity=e(i.ball.velocity),h.powerupState=st(),h):null},be=h=>{if(!h||!i.level)return!1;P(h.powerupState);const c=h.ballPosition||i.level.spawn;return i.strokes=Math.max(0,Math.floor(n(h.holeStrokes))),i.shot.strokeCount=i.strokes,i.ball.position=e(c),i.ball.velocity=e(h.ballVelocity||{x:0,y:0,z:0}),i.ball.speed=Math.hypot(i.ball.velocity.x,i.ball.velocity.z),i.ball.moving=i.ball.speed>i.physics.stopSpeed||Math.abs(i.ball.velocity.y)>.01,i.ball.sleeping=!i.ball.moving,i.ball.airborne=Math.abs(i.ball.velocity.y)>.01,i.ball.inHole=!1,i.ball.outOfBounds=!1,i.ball.lastSafePosition=e(c),i.shot.canShoot=!i.ball.moving,i.ballMesh&&i.ballMesh.position.set(i.ball.position.x,i.ball.position.y,i.ball.position.z),fr(),!0},We=h=>{const c=r(Math.floor(n(h,2)),2,4),v=e(s.forest.spawn);Object.assign(i.multiplayer,{enabled:!0,mode:"local",status:"playing",playerCount:c,currentPlayerId:"local-player-1",turnIndex:0,round:1,revision:1,winnerId:null,tiedPlayerIds:[],players:Array.from({length:c},(z,V)=>({id:`local-player-${V+1}`,name:`玩家 ${V+1}`,holeStrokes:0,strokes:0,totalStrokes:0,finished:!1,ballPosition:e(v),ballVelocity:{x:0,y:0,z:0},powerupState:null}))}),i.mode="local_multiplayer",Fe("forest",!1);const D=e(i.level.spawn);return i.multiplayer.players.forEach(z=>{z.ballPosition=e(D),z.ballVelocity={x:0,y:0,z:0}}),i.multiplayer.status="playing",i.multiplayer.currentPlayerId=i.multiplayer.players[0].id,be(i.multiplayer.players[0]),A(`${c} 人本地对战 · 玩家 1 开球`),S(),!0},Le=()=>(Object.assign(i.multiplayer,{enabled:!1,mode:"local",status:"setup",playerCount:0,currentPlayerId:null,turnIndex:0,round:1,revision:0,players:[],winnerId:null,tiedPlayerIds:[]}),i.mode="single",T("menu"),!0),Me=(h,c)=>{const v=i.renderer?.domElement;if(!v||!i.camera3d)return null;const D=v.getBoundingClientRect();if(h<D.left||h>D.right||c<D.top||c>D.bottom)return null;const z=new G((h-D.left)/D.width*2-1,-((c-D.top)/D.height)*2+1,.35);z.unproject(i.camera3d);const V=z.sub(i.camera3d.position).normalize();if(!Number.isFinite(V.y)||Math.abs(V.y)<1e-4)return null;const J=(.08-i.camera3d.position.y)/V.y;return!Number.isFinite(J)||J<=0?null:{x:i.camera3d.position.x+V.x*J,y:j(i.camera3d.position.x+V.x*J,i.camera3d.position.z+V.z*J)+.08,z:i.camera3d.position.z+V.z*J}},et=(h,c)=>!c||!Number.isFinite(c.x)||!Number.isFinite(c.z)?"无法识别放置位置":c.x<-10.2||c.x>10.2||c.z<-6.2||c.z>6.2?"道具必须放在球场边界内":Math.hypot(c.x-i.ball.position.x,c.z-i.ball.position.z)<1.15?"请离高尔夫球远一点放置":Math.hypot(c.x-i.level.hole.x,c.z-i.level.hole.z)<1.45?"不能堵住球洞":Math.hypot(c.x-i.level.spawn.x,c.z-i.level.spawn.z)<1.15?"不能覆盖开球点":p().some(z=>Math.hypot(c.x-z.x,c.z-z.z)<z.radius+1.05)?"此处靠障碍物太近":i.powerups.items.some(z=>z.active&&!z.collected&&Math.hypot(c.x-z.position.x,c.z-z.position.z)<(h==="speed_boost"?2:1.35))?"此处已有其他道具":"",F=h=>{const c=i.level.hole.x-h.x,v=i.level.hole.z-h.z,D=Math.hypot(c,v)||1;return{x:c/D,z:v/D}},me=h=>{const c=F(i.ball.position),v=Math.hypot(i.shot.direction.x,i.shot.direction.z)>.5?i.shot.direction:c,D={x:-v.z,z:v.x},z=[2.7,3.7,1.8,4.7],V=[0,1.45,-1.45,2.7,-2.7];for(const J of z)for(const ne of V){const le={x:r(i.ball.position.x+v.x*J+D.x*ne,-10.1,10.1),y:.08,z:r(i.ball.position.z+v.z*J+D.z*ne,-6.1,6.1)};if(!et(h,le))return le}return null},ve=(h,c,v=null)=>{if(i.screen!=="playing"||!i.level)return!1;if(i.ball.moving)return A("请等球停稳后再放置道具"),!1;const D=f(h);if(!D||D.count<=0)return A("该道具已用完"),!1;const z=c||me(h),V=et(h,z);if(V)return A(V),!1;const J={id:`placed-${h}-${Date.now().toString(36)}-${Math.floor(Math.random()*999)}`,type:h,position:{x:z.x,y:.08,z:z.z},active:!0,collected:!1,direction:R(v||F(z)),placed:!0,singleUse:!0};return i.powerups.items.push(J),i.powerups.lastPlacedId=J.id,i.powerups.selectedPlacedId=J.id,D.count-=1,Ve(J,i.level),i.powerups.activeEffect=null,Se("placed",h==="speed_boost"?"加速带已放置 · 可在技能面板调整方向":"反弹垫已放置 · 可在技能面板调整方向",J.position),S(),!0},Re=()=>{const h=f("hole_in_one");return!h||h.count<=0?(A("先拾取发光的一杆入洞道具球"),!1):i.powerups.armedType==="hole_in_one"?(i.powerups.armedType=null,i.powerups.activeEffect==="hole_in_one"&&(i.powerups.activeEffect=null),Se("placed","一杆入洞已取消 · 下一杆恢复手动瞄准",i.ball.position),S(),!0):(i.powerups.armedType="hole_in_one",i.powerups.activeEffect="hole_in_one",Se("hole_in_one","一杆入洞已启用 · 再次点击可取消",i.ball.position),S(),!0)},de=(h,c)=>{if(i.screen==="playing"){if(h.preventDefault(),h.stopPropagation(),i.ball.moving){A("请等球停稳后再放置道具");return}if((f(c)?.count||0)<=0){A("该道具已用完");return}i.powerups.placingType=c,i.powerups.placementStart={x:h.clientX,y:h.clientY},i.powerups.placementScreen={x:h.clientX,y:h.clientY},i.powerups.placementAnchor=null,i.powerups.placementDirection=null,S()}},se=h=>{if(!i.powerups.placingType)return!1;const c=i.powerups.placementScreen;i.powerups.placementScreen={x:h.clientX,y:h.clientY};const v=Me(h.clientX,h.clientY);if(v){i.powerups.placementAnchor||(i.powerups.placementAnchor=v);const D=i.powerups.placementAnchor,z=v.x-D.x,V=v.z-D.z;Math.hypot(z,V)>.45&&(i.powerups.placementDirection=R({x:z,z:V}))}return(!c||Math.hypot(c.x-h.clientX,c.y-h.clientY)>2)&&S(),!0},Ie=h=>{const c=i.powerups.placingType;if(!c)return!1;const v=i.powerups.placementStart,z=(v?Math.hypot(h.clientX-v.x,h.clientY-v.y)>8:!1)?Me(h.clientX,h.clientY):null;i.powerups.placingType=null,i.powerups.placementScreen=null,i.powerups.placementStart=null;const V=i.powerups.placementDirection;return i.powerups.placementAnchor=null,i.powerups.placementDirection=null,ve(c,z||me(c),V),S(),!0},Qe=()=>{if(!i.multiplayer.enabled)return;const h=pe();h&&(h.strokes=h.holeStrokes,h.finished=!!h.finished)},mt=()=>{const h=i.multiplayer;if(!h.enabled||h.players.length<2||h.status!=="playing")return!1;pe();const c=Math.max(0,h.players.findIndex(D=>D.id===h.currentPlayerId));let v=null;for(let D=1;D<=h.players.length;D+=1){const z=h.players[(c+D)%h.players.length];if(!z.finished){v=z;break}}return v?(h.turnIndex+=1,h.turnIndex%h.players.length===0&&(h.round+=1),h.currentPlayerId=v.id,h.revision+=1,be(v),A(`${v.name} 的回合`),S(),!0):!1},ht=()=>{const h=i.ball;for(const v of i.powerups.items){if(!v.active||v.collected)continue;const D=h.position.x-v.position.x,z=h.position.z-v.position.z,V=Math.hypot(D,z),J=v.type==="speed_boost"?1.35:v.type==="hole_in_one"?1.18:.92;if(!(V>J||i.powerups.lastTriggeredId===v.id)){if(i.powerups.lastTriggeredId=v.id,i.powerups.activeEffect=v.type,v.type==="bounce_pad"){const ne=R(v.direction||{x:1,z:0}),le=Math.max(4.2,Math.hypot(h.velocity.x,h.velocity.z)*1.14);h.velocity.x=ne.x*le,h.velocity.z=ne.z*le,h.lastCollision=v.id,Se("bounce_pad","反弹垫触发 · 线路已改变",v.position)}else if(v.type==="speed_boost"){const ne=v.direction||{x:1,z:0},le=Math.hypot(ne.x,ne.z)||1;h.velocity.x+=ne.x/le*3.8,h.velocity.z+=ne.z/le*3.8;const re=Math.hypot(h.velocity.x,h.velocity.z);re>i.physics.maxBallSpeed&&(h.velocity.x*=i.physics.maxBallSpeed/re,h.velocity.z*=i.physics.maxBallSpeed/re),h.lastCollision=v.id,Se("speed_boost","加速带触发 · 速度提升",v.position)}else v.type==="hole_in_one"&&(v.collected=!0,v.active=!1,f("hole_in_one").count+=1,h.lastCollision=`powerup:${v.id}`,i.powerups.armedType=null,i.powerups.activeEffect==="hole_in_one"&&(i.powerups.activeEffect=null),b(v),Se("hole_in_one","道具球已拾取 · 点击星标启用",v.position),S());v.placed&&v.singleUse&&v.type!=="hole_in_one"&&v.type!=="speed_boost"&&v.type!=="bounce_pad"&&(v.collected=!0,v.active=!1,b(v),i.powerups.selectedPlacedId===v.id&&(i.powerups.selectedPlacedId=null));break}}const c=i.powerups.items.find(v=>v.id===i.powerups.lastTriggeredId);(!c||!c.active||Math.hypot(h.position.x-c.position.x,h.position.z-c.position.z)>1.55)&&(i.powerups.lastTriggeredId=null,i.powerups.activeEffect!=="hole_in_one"&&(i.powerups.activeEffect=null))},tn=(h,c)=>{const v=i.ball,z=n(h.collider?.radius,h.radius)+v.radius,V=n(c?.x,v.position.x),J=n(c?.z,v.position.z),ne=v.position.x,le=v.position.z,re=ne-V,Pe=le-J,ce=re*re+Pe*Pe,Ne=V-h.x,K=J-h.z,ze=Ne*Ne+K*K-z*z;let Ke=null;if(ze<=0)Ke=0;else if(ce>1e-10){const Ye=2*(Ne*re+K*Pe),qt=Ye*Ye-4*ce*ze;if(qt>=0){const Jt=Math.sqrt(qt),Ze=(-Ye-Jt)/(2*ce),Pt=(-Ye+Jt)/(2*ce);Ze>=0&&Ze<=1?Ke=Ze:Pt>=0&&Pt<=1&&(Ke=Pt)}}const He=ne-h.x,ke=le-h.z;if(Ke===null&&He*He+ke*ke>=z*z)return!1;const ue=Ke===null?ne:V+re*Ke,je=Ke===null?le:J+Pe*Ke;let qe=ue-h.x,gt=je-h.z,_t=Math.hypot(qe,gt);if(_t<1e-6){const Ye=Math.hypot(v.velocity.x,v.velocity.z)||1;qe=-v.velocity.x/Ye,gt=-v.velocity.z/Ye,_t=1}qe/=_t,gt/=_t,v.position.x=h.x+qe*(z+.016),v.position.z=h.z+gt*(z+.016);const ie=v.velocity.x*qe+v.velocity.z*gt,rt=Math.hypot(v.velocity.x,v.velocity.z);if(ie<0){v.velocity.x-=(1+.72)*ie*qe,v.velocity.z-=(1+.72)*ie*gt;const qt=-gt,Jt=qe,Ze=v.velocity.x*qt+v.velocity.z*Jt;v.velocity.x-=qt*Ze*.035,v.velocity.z-=Jt*Ze*.035}return rt>1.15&&(v.velocity.y=Math.max(v.velocity.y,Math.min(3.1,.7+rt*.14)),v.airborne=!0,v.sleeping=!1,$e({x:v.position.x,y:v.position.y,z:v.position.z})),v.lastCollision=`obstacle:${h.id}`,!0},Kt=()=>{if(i.holeComplete||!i.level)return!1;if(i.ball.inHole=!0,i.ball.moving=!1,i.ball.sleeping=!0,i.ball.speed=0,i.ball.velocity={x:0,y:0,z:0},i.shot.canShoot=!1,i.holeComplete=!0,i.currentScore=yt(i.strokes,i.level.par,i.elapsed),i.multiplayer.enabled){const c=Ce(i.multiplayer.currentPlayerId);if(!c)return!1;if(c.holeStrokes=Math.max(1,Math.floor(n(i.strokes,1))),c.strokes=c.holeStrokes,c.totalStrokes=Math.max(0,Math.floor(n(c.totalStrokes)))+c.holeStrokes,c.ballPosition=e(i.ball.position),c.ballVelocity={x:0,y:0,z:0},c.powerupState=st(),c.finished=!0,i.multiplayer.revision+=1,i.multiplayer.players.filter(V=>!V.finished).length)return i.holeComplete=!1,i.ball.inHole=!1,i.shot.canShoot=!0,mt(),i.screen="playing",S(),!0;const D=Math.min(...i.multiplayer.players.map(V=>V.totalStrokes)),z=i.multiplayer.players.filter(V=>V.totalStrokes===D).map(V=>V.id);return i.multiplayer.tiedPlayerIds=z.length>1?z:[],i.multiplayer.winnerId=z.length===1?z[0]:null,i.multiplayer.currentPlayerId=null,i.totalStrokes=i.multiplayer.players.reduce((V,J)=>V+J.totalStrokes,0),i.totalScore=i.multiplayer.players.reduce((V,J)=>V+yt(J.totalStrokes,i.level.par,i.elapsed),0),i.screen="local_leaderboard",i.multiplayer.status="complete",i.toast=z.length===1?`${i.multiplayer.players.find(V=>V.id===z[0])?.name} 获胜`:"本地对战平局 · 已展示排行榜",i.toastUntil=performance.now()+1800,_(),!0}const h={levelId:i.level.id,par:i.level.par,strokes:Math.max(1,Math.floor(i.strokes))};return i.lastCompletedStrokes=h.strokes,i.totalScore+=i.currentScore,i.totalStrokes+=h.strokes,i.tournamentScores[h.levelId]=h.strokes,i.tournamentPoints[h.levelId]=i.currentScore,Oe({...h,playerId:"local-player",playerName:"本地球手"}),i.screen="hole_complete",A(`${Ae(h.strokes,i.level.par)} · ${i.currentScore} 分`),S(),!0},ar=(h,c,v,D,z,V)=>{const J=v-h,ne=D-c,le=J*J+ne*ne;if(!le)return Math.hypot(z-h,V-c);const re=r(((z-h)*J+(V-c)*ne)/le,0,1);return Math.hypot(z-(h+J*re),V-(c+ne*re))},yn=h=>{if(i.screen!=="playing"||!i.level||i.ball.inHole)return;i.runtime.simulationTick+=1;const c=i.ball;c.velocity.x=n(c.velocity.x),c.velocity.y=n(c.velocity.y),c.velocity.z=n(c.velocity.z);const v={x:c.position.x,y:c.position.y,z:c.position.z},D=c.currentSurface,z=U(c.position.x,c.position.z);c.currentSurface=z.type,c.friction=z.friction,z.type!==D&&c.moving&&(z.type==="sand"?A(`进入沙坑 · 高摩擦 μ ${z.friction.toFixed(3)} · 球速快速衰减`):z.type==="ice"?A(`进入冰面 · 低摩擦 μ ${z.friction.toFixed(3)} · 球持续滑行`):(D==="sand"||D==="ice")&&A("回到草地 · 恢复标准滚速"),S());const V=ae(c.position.x,c.position.z);if(V.active&&!c.airborne){const Ze=Math.hypot(V.slopeX,V.slopeZ),Pt=9.81*Ze/(1+Ze*Ze);if(!(Math.hypot(c.velocity.x,c.velocity.z)<=.09&&Pt<=z.friction*1.08)){const cn=9.81/(1+V.slopeX*V.slopeX+V.slopeZ*V.slopeZ);c.velocity.x+=-V.slopeX*cn*h,c.velocity.z+=-V.slopeZ*cn*h,c.moving=!0,c.sleeping=!1}}let J=Math.hypot(c.velocity.x,c.velocity.z);if(J>i.physics.maxBallSpeed){const Ze=i.physics.maxBallSpeed/J;c.velocity.x*=Ze,c.velocity.z*=Ze,J=i.physics.maxBallSpeed}if(J>0&&!c.airborne){const Ze=Math.max(0,J-z.friction*h),Pt=J?Ze/J:0;c.velocity.x*=Pt,c.velocity.z*=Pt}c.position.x+=c.velocity.x*h,c.position.z+=c.velocity.z*h,fe(v);const ne=ae(c.position.x,c.position.z),le=c.radius+ne.height,re=Math.hypot(c.velocity.x,c.velocity.z),Pe=re||1,ce=c.velocity.x/Pe,Ne=c.velocity.z/Pe,K=V.slopeX*ce+V.slopeZ*Ne,ze=ne.slopeX*ce+ne.slopeZ*Ne;if(!c.airborne&&(V.kind==="dune"||V.kind==="ramp")&&re>5.6&&V.height>.16&&K>.055&&ze<K-.075&&(c.airborne=!0,c.position.y=Math.max(c.position.y,c.radius+V.height),c.velocity.y=r(.45+K*re*.72,.7,4.1),$e({x:c.position.x,y:c.position.y,z:c.position.z})),c.airborne||c.position.y>le+.015||Math.abs(c.velocity.y)>.01){if(c.airborne=!0,c.velocity.y+=i.physics.gravity.y*h,c.position.y+=c.velocity.y*h,c.position.y<=le){const Ze=Math.abs(c.velocity.y);c.position.y=le,Ze>1.25?(c.velocity.y=Ze*.23,c.airborne=!0,$e(c.position)):(c.velocity.y=0,c.airborne=!1)}}else c.position.y=le,c.velocity.y=0,c.airborne=!1;if(Math.abs(c.position.x)>13||Math.abs(c.position.z)>9||c.position.y<-2){c.outOfBounds=!0;const Ze=e(c.lastSafePosition||i.level.spawn);Ze.y=c.radius+j(Ze.x,Ze.z),c.position=Ze,c.velocity={x:0,y:0,z:0},c.speed=0,c.moving=!1,c.sleeping=!0,c.airborne=!1,i.shot.canShoot=!0,i.shot.power=0,i.ballMesh&&i.ballMesh.position.set(Ze.x,Ze.y,Ze.z),A("越界 · 已回到最后安全位置");return}const He=-11+c.radius,ke=11-c.radius,ue=-7+c.radius,je=7-c.radius;if(c.position.x<He||c.position.x>ke){const Ze=c.position.x<He;c.position.x=r(c.position.x,He,ke),c.velocity.x*=-.72,c.lastCollision=Ze?"boundary-minX":"boundary-maxX",$e(c.position)}if(c.position.z<ue||c.position.z>je){const Ze=c.position.z<ue;c.position.z=r(c.position.z,ue,je),c.velocity.z*=-.72,c.lastCollision=Ze?"boundary-minZ":"boundary-maxZ",$e(c.position)}p().forEach(Ze=>tn(Ze,v)),p().forEach(Ze=>{const Pt=n(Ze.collider?.radius,Ze.radius)+c.radius;let Xn=c.position.x-Ze.x,jn=c.position.z-Ze.z,cn=Math.hypot(Xn,jn);if(cn>=Pt-.002)return;if(cn<1e-6){const qn=Math.hypot(c.velocity.x,c.velocity.z)||1;Xn=-c.velocity.x/qn,jn=-c.velocity.z/qn,cn=1}const Hi=Xn/cn,zt=jn/cn;c.position.x=Ze.x+Hi*(Pt+.018),c.position.z=Ze.z+zt*(Pt+.018);const Ft=c.velocity.x*Hi+c.velocity.z*zt;Ft<0&&(c.velocity.x-=Ft*Hi,c.velocity.z-=Ft*zt),c.lastCollision=`obstacle:${Ze.id}`}),ht(),J=Math.hypot(c.velocity.x,c.velocity.z),c.speed=n(J);const qe=i.level.hole;Math.hypot(c.position.x-qe.x,c.position.z-qe.z);const gt=Math.max(.08,qe.radius+c.radius*.12);if(ar(v.x,v.z,c.position.x,c.position.z,qe.x,qe.z)<=gt){i.holeCaptureTime=0,Kt();return}const ie=Math.hypot(ne.slopeX,ne.slopeZ),rt=9.81*ie/(1+ie*ie),Ye=!ne.active||ne.height<.008||rt<=z.friction*1.08,qt=c.speed<=Math.max(.065,i.physics.stopSpeed*1.8)&&Math.abs(c.velocity.y)<=.035&&!c.airborne;c.lowSpeedTime=qt?n(c.lowSpeedTime)+h:0;const Jt=c.lowSpeedTime>=.38&&rt<=z.friction*1.3;if(!c.airborne&&(c.speed<=i.physics.stopSpeed&&Ye||Jt)){const Ze=c.moving;c.position.y=le,c.velocity.x=0,c.velocity.y=0,c.velocity.z=0,c.speed=0,c.moving=!1,c.sleeping=!0,c.airborne=!1,c.lowSpeedTime=0,i.shot.canShoot=!0,i.shot.dragging||(i.shot.power=0),Ze&&(S(),Qe(),i.multiplayer.enabled&&mt())}else c.moving=!0,c.sleeping=!1,i.shot.canShoot=!1,!c.airborne&&Math.abs(c.position.x)<=10.8&&Math.abs(c.position.z)<=6.8&&p().every(Pt=>Math.hypot(c.position.x-Pt.x,c.position.z-Pt.z)>Pt.radius+c.radius+.12)&&ne.height<.62&&(c.lastSafePosition=e(c.position));i.ballMesh&&i.ballMesh.position.set(c.position.x,c.position.y,c.position.z)},ki=(h,c,v)=>{if(i.screen!=="playing"||!i.level||!i.shot.canShoot||i.ball.inHole||i.multiplayer.enabled&&!Ce(i.multiplayer.currentPlayerId))return!1;const D=r(n(v),0,i.shot.maxPower),z=n(h),V=n(c);if(!Math.hypot(z,V)||D<i.shot.minPower)return!1;let ne=D,le=z,re=V;const Pe=f("hole_in_one");i.powerups.armedType==="hole_in_one"&&Pe?.count>0&&(le=i.level.hole.x-i.ball.position.x,re=i.level.hole.z-i.ball.position.z,ne=Math.min(.86,Math.max(.25,Math.hypot(le,re)/18)),Pe.count-=1,i.powerups.armedType=null,i.powerups.activeEffect="hole_in_one",Se("hole_in_one","一杆入洞辅助启动 · 球洞已锁定",i.ball.position));const ce=Math.hypot(le,re);if(!ce)return!1;const Ne=le/ce,K=re/ce;i.shot.direction={x:Ne,y:0,z:K},i.shot.power=ne;const ze=Math.min(i.physics.maxBallSpeed,ne*14);return i.ball.velocity.x=Ne*ze,i.ball.velocity.y=0,i.ball.velocity.z=K*ze,i.ball.airborne=!1,i.ball.moving=!0,i.ball.sleeping=!1,i.ball.outOfBounds=!1,i.shot.canShoot=!1,i.strokes+=1,i.shot.strokeCount=i.strokes,Qe(),S(),!0},or=(h,c)=>{const v=h.x-c.x,D=c.y-h.y,z=i.camera.angle,V={x:Math.sin(z),z:-Math.cos(z)},J={x:Math.cos(z),z:Math.sin(z)},ne=J.x*v+V.x*D,le=J.z*v+V.z*D,re=Math.hypot(ne,le)||1;return{x:ne/re,y:0,z:le/re}},lr=h=>{i.powerups.placingType||i.screen!=="playing"||!i.shot.canShoot||i.ball.inHole||h.button!==void 0&&h.button!==0||(h.preventDefault(),h.currentTarget?.setPointerCapture?.(h.pointerId),i.shot.dragging=!0,i.shot.startScreen={x:h.clientX,y:h.clientY},i.shot.currentScreen={x:h.clientX,y:h.clientY},i.shot.power=0,S())},Wn=h=>{if(!i.shot.dragging||!i.shot.startScreen)return;i.shot.currentScreen={x:h.clientX,y:h.clientY};const c=i.shot.startScreen;i.shot.power=r(Math.hypot(h.clientX-c.x,h.clientY-c.y)/190,0,1),i.shot.direction=or(c,i.shot.currentScreen),S()},cr=h=>{if(!i.shot.dragging)return;h?.clientX!==void 0&&Wn(h);const c=e(i.shot.direction),v=i.shot.power;i.shot.dragging=!1,i.shot.startScreen=null,i.shot.currentScreen=null,ki(c.x,c.z,v)||(i.shot.power=0,S())},Pn=()=>{i.shot.dragging&&(i.shot.dragging=!1,i.shot.startScreen=null,i.shot.currentScreen=null,i.shot.power=0,S())},di=h=>{i.camera.distance=r(i.camera.distance+h,i.camera.minDistance,i.camera.maxDistance),S()},ur=h=>{const c=h==="free";i.camera.dragging=!1,i.camera.dragStart=null,c?(Pn(),i.camera.mode="free",i.camera.freeAngle=n(i.camera.angle,i.level?.cameraAngle||.68),i.camera.pitch=r(n(i.camera.pitch,.62),.28,1.12),i.renderer?.domElement&&(i.renderer.domElement.style.cursor="grab"),A("自由视角：拖动球场旋转，滚轮缩放")):(i.camera.angle=n(i.camera.freeAngle,i.camera.angle),i.camera.freeAngle=i.camera.angle,i.camera.pitch=r(n(i.camera.pitch,.62),.28,1.12),i.camera.mode="follow",i.renderer?.domElement&&(i.renderer.domElement.style.cursor="crosshair"),A("固定视角：已保存当前角度，可以正常击球")),S()},Zr=()=>ur(i.camera.mode==="free"?"follow":"free"),Kr=h=>i.screen!=="playing"||i.camera.mode!=="free"||h.button!==void 0&&h.button!==0?!1:(h.preventDefault(),h.currentTarget?.setPointerCapture?.(h.pointerId),i.camera.dragging=!0,i.camera.dragStart={x:h.clientX,y:h.clientY},i.camera.startAngle=n(i.camera.freeAngle,i.camera.angle),i.camera.startPitch=n(i.camera.pitch,.62),i.renderer?.domElement&&(i.renderer.domElement.style.cursor="grabbing"),S(),!0),dr=h=>{if(!i.camera.dragging||!i.camera.dragStart||i.camera.mode!=="free")return!1;h.preventDefault();const c=h.clientX-i.camera.dragStart.x,v=h.clientY-i.camera.dragStart.y;return i.camera.freeAngle=i.camera.startAngle-c*.0065,i.camera.pitch=r(i.camera.startPitch+v*.0048,.28,1.12),S(),!0},Jr=h=>i.camera.dragging?(h?.clientX!==void 0&&dr(h),i.camera.dragging=!1,i.camera.dragStart=null,i.renderer?.domElement&&(i.renderer.domElement.style.cursor=i.camera.mode==="free"?"grab":"crosshair"),S(),!0):!1,hr=()=>{i.camera.dragging&&(i.camera.dragging=!1,i.camera.dragStart=null,i.renderer?.domElement&&(i.renderer.domElement.style.cursor=i.camera.mode==="free"?"grab":"crosshair"),S())},fr=()=>{if(!i.camera3d||!i.level)return;const h=i.ball.position;i.camera.target=e(h);const c=i.camera.distance;if(i.camera.mode==="free"){const v=n(i.camera.freeAngle,i.camera.angle),D=r(n(i.camera.pitch,.62),.28,1.12),z=c*Math.cos(D),V=h.x-Math.sin(v)*z,J=h.z+Math.cos(v)*z,ne=h.y+1.2+c*Math.sin(D);i.camera3d.position.set(V,ne,J),i.camera3d.lookAt(h.x,h.y+.12,h.z)}else{const v=n(i.camera.angle,i.level?.cameraAngle||.68),D=r(n(i.camera.pitch,.62),.28,1.12),z=c*Math.cos(D),V=h.x-Math.sin(v)*z,J=h.z+Math.cos(v)*z,ne=h.y+1.2+c*Math.sin(D);i.camera3d.position.set(V,ne,J),i.camera3d.lookAt(h.x,h.y+.12,h.z)}i.camera.position=t(i.camera3d.position),i.camera.zoom=i.camera3d.zoom},y=h=>{if(!i.renderer||!i.camera3d||!h)return;const c=Math.max(1,h.clientWidth||innerWidth),v=Math.max(1,h.clientHeight||innerHeight);i.renderer.setPixelRatio(1);const D=c*v>7e5?.76:c*v>42e4?.84:.92;i.renderer.setSize(Math.ceil(c*D),Math.ceil(v*D),!1),i.camera3d.aspect=c/v,i.camera3d.updateProjectionMatrix()},B=h=>{if(!h)return()=>{};i.runtime.runtimeMountCount+=1,i.runtime.engineGeneration+=1;let c;try{const ce=document.createElement("canvas");if(!(ce.getContext("webgl2")||ce.getContext("webgl")||ce.getContext("experimental-webgl")))throw new Error("WebGL context unavailable");c=new xp({antialias:!1,alpha:!1,powerPreference:"high-performance",precision:"mediump"}),c.shadowMap.enabled=!1,c.domElement.setAttribute("aria-label","3D 迷你高尔夫球场"),c.domElement.style.touchAction="none",h.replaceChildren(c.domElement),i.renderer=c,i.scene=new no,i.camera3d=new Zt(48,1,.1,140),window.__THREE_SCENE__=i.scene,window.__THREE_RENDERER__=c,y(h),pt(i.pendingLevel),i.ready=!0,i.renderError="",i.screen="menu",S()}catch(ce){console.warn("WebGL renderer unavailable; using the interactive Canvas 3D fallback.",ce?.message||ce);const Ne=document.createElement("canvas"),K=Ne.getContext("2d");Ne.setAttribute("aria-label","3D 迷你高尔夫球场（兼容渲染）"),Ne.style.touchAction="none",Ne.style.width="100%",Ne.style.height="100%",h.replaceChildren(Ne);const ze=(ke,ue=1)=>{let je=String(ke||"#ffffff").replace("#","");je.length===3&&(je=je.split("").map(gt=>gt+gt).join(""));const qe=parseInt(je,16)||0;return`rgba(${qe>>16&255},${qe>>8&255},${qe&255},${ue})`},Ke=ke=>({forest:{sky:"#9cc7d0",horizon:"#d8eee8",ground:"#4d925e",edge:"#27583c",sand:"#d7b675",ice:"#9bd9e3",accent:"#ff685e",object:"#6d4d35",glow:"#e6fff3"},desert:{sky:"#f0b878",horizon:"#ffe5b1",ground:"#c98a48",edge:"#6f4328",sand:"#e8c078",ice:"#8edce8",accent:"#49c6c7",object:"#9f593d",glow:"#fff0b7"},snow:{sky:"#b6dce8",horizon:"#edf9ff",ground:"#dceff1",edge:"#668994",sand:"#b6a28f",ice:"#76c9dd",accent:"#f36c65",object:"#7aa2aa",glow:"#ffffff"}})[ke]||{sky:"#9cc7d0",horizon:"#d8eee8",ground:"#4d925e",edge:"#27583c",sand:"#d7b675",ice:"#9bd9e3",accent:"#ff685e",object:"#6d4d35",glow:"#e6fff3"},He=()=>{if(!K||!i.level)return;const ke=Ne.clientWidth||Ne.width||1,ue=Ne.clientHeight||Ne.height||1,je=Math.min(2,devicePixelRatio||1),qe=Math.max(1,Math.round(ke*je)),gt=Math.max(1,Math.round(ue*je));(Ne.width!==qe||Ne.height!==gt)&&(Ne.width=qe,Ne.height=gt),K.setTransform(je,0,0,je,0,0),K.clearRect(0,0,ke,ue);const _t=window.__course?.getState?.(),ie=_t?.loaded?_t:i.level,rt=ie.bounds||{minX:-12,maxX:12,minZ:-8,maxZ:8},Ye=Ke(ie.theme||ie.id),qt=i.camera.target||i.ball.position,Jt={x:(rt.minX+rt.maxX)/2,z:(rt.minZ+rt.maxZ)/2},Ze={x:n(qt.x)*.58+Jt.x*.42,z:n(qt.z)*.58+Jt.z*.42},Pt=n(i.camera.angle,.68),Xn=Math.cos(Pt),jn=Math.sin(Pt),cn=Math.max(8,rt.maxX-rt.minX),Hi=Math.max(6,rt.maxZ-rt.minZ),zt=Math.min(ke/(cn*1.28),ue/(Hi*.78+7)),Ft=we=>{const Tt=n(we?.x)-Ze.x,xt=n(we?.z)-Ze.z,At=Tt*Xn-xt*jn,It=Tt*jn+xt*Xn;return{x:ke*.5+At*zt,y:ue*.56+It*zt*.48-n(we?.y)*zt*.9,depth:It}},qn=(we,Tt,xt,At=1.5)=>{K.beginPath(),we.forEach((It,un)=>un?K.lineTo(It.x,It.y):K.moveTo(It.x,It.y)),K.closePath(),Tt&&(K.fillStyle=Tt,K.fill()),xt&&(K.strokeStyle=xt,K.lineWidth=At,K.stroke())},Vi=(we,Tt,xt,At,It,un=1.5)=>{const Zn=Ft(we);K.beginPath(),K.ellipse(Zn.x,Zn.y,Math.max(1,Tt*zt),Math.max(1,xt*zt*.48),0,0,Math.PI*2),At&&(K.fillStyle=At,K.fill()),It&&(K.strokeStyle=It,K.lineWidth=un,K.stroke())},pr=K.createLinearGradient(0,0,0,ue);pr.addColorStop(0,Ye.sky),pr.addColorStop(.62,Ye.horizon),pr.addColorStop(1,ze(Ye.ground,.92)),K.fillStyle=pr,K.fillRect(0,0,ke,ue);const ll=[{x:rt.minX,y:0,z:rt.minZ},{x:rt.maxX,y:0,z:rt.minZ},{x:rt.maxX,y:0,z:rt.maxZ},{x:rt.minX,y:0,z:rt.maxZ}].map(Ft);K.save(),K.shadowColor=ze(Ye.edge,.48),K.shadowBlur=20,qn(ll,Ye.ground,Ye.edge,3),K.restore(),(ie.surfaces||[]).forEach(we=>{if(we.type==="grass")return;const Tt=we.type==="sand"?Ye.sand:Ye.ice;we.bounds?qn([{x:we.bounds.minX,y:.02,z:we.bounds.minZ},{x:we.bounds.maxX,y:.02,z:we.bounds.minZ},{x:we.bounds.maxX,y:.02,z:we.bounds.maxZ},{x:we.bounds.minX,y:.02,z:we.bounds.maxZ}].map(Ft),Tt,ze(Ye.edge,.65)):Vi({x:we.center.x,y:.02,z:we.center.z},we.radius||1.6,(we.radius||1.6)*.86,Tt,ze(Ye.edge,.62))}),(ie.terrainFeatures||[]).forEach(we=>{we.type==="dune"&&(Vi({x:we.center.x,y:.05,z:we.center.z},we.radiusX||2,we.radiusZ||1.5,ze(Ye.sand,.95),Ye.edge,2),Vi({x:we.center.x,y:.34,z:we.center.z},(we.radiusX||2)*.66,(we.radiusZ||1.5)*.48,ze(Ye.glow,.2),null)),we.type==="slope"&&we.bounds&&qn([{x:we.bounds.minX,y:.02,z:we.bounds.minZ},{x:we.bounds.maxX,y:.02,z:we.bounds.minZ},{x:we.bounds.maxX,y:we.heightRange?.[1]||we.heightRange?.max||1,z:we.bounds.maxZ},{x:we.bounds.minX,y:we.heightRange?.[1]||we.heightRange?.max||1,z:we.bounds.maxZ}].map(Ft),ze(Ye.ground,.78),Ye.edge,2)}),[...(ie.decor||[]).slice(0,20),...ie.obstacles||[]].sort((we,Tt)=>Ft(we.position).depth-Ft(Tt.position).depth).forEach(we=>{const Tt=we.position||{},xt=Ft({x:Tt.x,y:0,z:Tt.z}),At=Math.max(.22,n(we.collider?.radius||we.radius||.55))*zt,It=Math.max(.55,n(we.collider?.height||1.3))*zt*.7,un=xt.y-It;K.globalAlpha=.25,Vi({x:Tt.x+.12,y:0,z:Tt.z+.12},(we.radius||.55)*1.15,(we.radius||.55)*.72,"#000",null),K.globalAlpha=1;const Zn=K.createLinearGradient(xt.x-At,0,xt.x+At,0);Zn.addColorStop(0,Ye.edge),Zn.addColorStop(.5,we.solid===!1?ze(Ye.object,.72):Ye.object),Zn.addColorStop(1,ze(Ye.edge,.82)),K.fillStyle=Zn,K.fillRect(xt.x-At,un,At*2,It),K.beginPath(),K.ellipse(xt.x,un,At,At*.35,0,0,Math.PI*2),K.fill(),K.strokeStyle=Ye.edge,K.lineWidth=1.5,K.stroke(),K.fillStyle=ze(Ye.glow,.45),K.fillRect(xt.x-At*.08,un+3,At*.16,Math.max(2,It-6)),K.beginPath(),K.ellipse(xt.x,xt.y,At,At*.35,0,0,Math.PI*2),K.fillStyle=Ye.edge,K.fill()}),(i.powerups.items||[]).filter(we=>we.active&&!we.collected).forEach(we=>{const Tt=Ft(we.position),xt=zt*.42;K.save(),K.translate(Tt.x,Tt.y),K.rotate(Math.PI/4),K.fillStyle=we.type==="bounce_pad"?"#ff4fbf":we.type==="speed_boost"?"#4cf4f2":Ye.accent,K.shadowColor=Ye.glow,K.shadowBlur=13,K.fillRect(-xt,-xt*.42,xt*2,xt*.84),K.strokeStyle=Ye.edge,K.lineWidth=2,K.strokeRect(-xt,-xt*.42,xt*2,xt*.84),K.restore()});const Yn=ie.hole,Pa=Ft(Yn),$n=Ft({x:Yn.x,y:2.7,z:Yn.z});Vi({x:Yn.x,y:.01,z:Yn.z},Yn.radius||.5,Yn.radius||.5,"#142019",ze(Ye.edge,.8)),K.strokeStyle="#ffffff",K.lineWidth=3,K.beginPath(),K.moveTo(Pa.x,Pa.y),K.lineTo($n.x,$n.y),K.stroke(),qn([$n,{x:$n.x+zt*.9,y:$n.y+zt*.18},{x:$n.x,y:$n.y+zt*.4}],Ye.accent,Ye.edge);const hi=i.ball.position,Dn=Ft(hi),Da=Ft({x:hi.x,y:n(i.ball.groundY),z:hi.z}),fi=Math.max(6,i.ball.radius*zt);K.globalAlpha=.26,K.beginPath(),K.ellipse(Da.x+3,Da.y+4,fi*1.35,fi*.5,0,0,Math.PI*2),K.fillStyle="#000",K.fill(),K.globalAlpha=1;const mr=K.createRadialGradient(Dn.x-fi*.35,Dn.y-fi*.45,1,Dn.x,Dn.y,fi);if(mr.addColorStop(0,"#ffffff"),mr.addColorStop(.32,"#f4fff8"),mr.addColorStop(1,Ye.edge),K.fillStyle=mr,K.shadowColor=Ye.glow,K.shadowBlur=18,K.beginPath(),K.arc(Dn.x,Dn.y,fi,0,Math.PI*2),K.fill(),K.shadowBlur=0,K.strokeStyle=Ye.edge,K.lineWidth=2,K.stroke(),i.shot.dragging||i.powerups.armedType==="hole_in_one"){const we=i.shot.direction||{x:1,z:0},Tt=i.powerups.armedType==="hole_in_one"?Math.max(.68,i.shot.power):i.shot.power,xt=2.6+Tt*5.5;K.strokeStyle=Ye.accent,K.lineWidth=3,K.setLineDash([8,7]),K.beginPath(),K.moveTo(Dn.x,Dn.y);for(let At=1;At<=12;At+=1){const It=At/12,un=Ft({x:hi.x+we.x*xt*It,y:hi.y+Math.sin(Math.PI*It)*Tt*.85,z:hi.z+we.z*xt*It});K.lineTo(un.x,un.y)}K.stroke(),K.setLineDash([])}};c={isWebGLRenderer:!0,domElement:Ne,shadowMap:{enabled:!1},info:{memory:{geometries:0,textures:0},programs:[]},_camera:null,setPixelRatio(){},getPixelRatio:()=>Math.min(2,devicePixelRatio||1),setSize(ke,ue){Ne.width=Math.max(1,Math.round(ke)),Ne.height=Math.max(1,Math.round(ue)),Ne.style.width="100%",Ne.style.height="100%"},render(ke,ue){this._camera=ue,He()},getContext:()=>null,dispose(){}},i.renderer=c,i.scene=new no,i.camera3d=new Zt(48,1,.1,140),window.__THREE_SCENE__=i.scene,window.__THREE_RENDERER__=c,y(h),pt(i.pendingLevel),i.ready=!0,i.renderError="",i.screen="menu",S()}const v=c.domElement;v.style.cursor=i.camera.mode==="free"?"grab":"crosshair";const D=ce=>{i.camera.mode==="free"?Kr(ce):lr(ce)},z=ce=>{se(ce)||(i.camera.dragging?dr(ce):Wn(ce))},V=ce=>{Ie(ce)||(i.camera.dragging?Jr(ce):cr(ce))},J=()=>{hr(),Pn()},ne=ce=>{i.screen==="playing"&&(ce.preventDefault(),di(ce.deltaY>0?1:-1))},le=()=>y(h),re=()=>{hr(),Pn()};v.addEventListener("pointerdown",D),window.addEventListener("pointermove",z,{passive:!1}),window.addEventListener("pointerup",V,{passive:!1}),window.addEventListener("pointercancel",J),v.addEventListener("wheel",ne,{passive:!1}),window.addEventListener("resize",le),window.addEventListener("blur",re),i.lastFrame=performance.now();const Pe=ce=>{i.runtime.renderFrame+=1,i.runtime.logicLoopCount+=1;const Ne=Math.max(0,(ce-i.lastFrame)/1e3),K=Math.min(Ne,.05);if(i.lastFrame=ce,i.screen==="playing"){i.elapsed=(ce-i.startedAt)/1e3,i.accumulator=Math.min(i.accumulator+K,i.physics.fixedTimeStep*i.physics.maxSubSteps);let ze=0;for(;i.accumulator>=i.physics.fixedTimeStep&&ze<i.physics.maxSubSteps;)yn(i.physics.fixedTimeStep),i.accumulator-=i.physics.fixedTimeStep,ze+=1}else i.accumulator=0;if(fr(),i.ballMesh&&i.ball.moving&&i.ball.speed>.08){const ze=i.ball.speed*K/Math.max(.12,i.ball.radius),Ke=n(i.ball.velocity.z)/Math.max(.001,i.ball.speed),He=-n(i.ball.velocity.x)/Math.max(.001,i.ball.speed);i.ballMesh.rotateOnWorldAxis(new G(Ke,0,He),ze),!i.ball.airborne&&i.ball.speed>1.2&&ce-i.lastTrailAt>95&&(i.lastTrailAt=ce,Be(i.ball.position,i.ball.currentSurface))}i.powerups.items.forEach(ze=>{if(!ze.active||ze.collected)return;const Ke=i.scene?.getObjectByName?.(`powerup-${ze.id}-orb`);Ke&&(Ke.position.y=(Ke.userData.floatBase||.32)+Math.sin(ce*.003+ze.position.x)*.11,Ke.rotation.y+=K*1.4)});for(let ze=i.effects.length-1;ze>=0;ze-=1){const Ke=i.effects[ze],He=r((ce-Ke.startedAt)/Ke.duration,0,1);if(Ke.ring){const ke=1+He*2.25;Ke.ring.scale.set(ke,1,ke*.72),Ke.ring.material.opacity=.72*(1-He)}Ke.particles.forEach((ke,ue)=>{if(Ke.kind==="trail")ke.position.x+=n(ke.userData.driftX)*K,ke.position.z+=n(ke.userData.driftZ)*K,ke.position.y+=K*(.22+ue*.08),ke.scale.setScalar(1+He*.7),ke.material.opacity=.58*(1-He);else{const je=n(ke.userData.fxAngle)+He*.65,qe=.28+He*1.05;ke.position.set(Ke.origin.x+Math.cos(je)*qe,Ke.origin.y+.16+Math.sin(He*Math.PI)*(.52+ue*.025),Ke.origin.z+Math.sin(je)*qe),ke.material.opacity=.86*(1-He)}}),He>=1&&(Z(Ke.ring),Ke.particles.forEach(Z),i.effects.splice(ze,1))}i.ball.inHole&&i.ballMesh&&(i.ballMesh.position.y+=(-.28-i.ballMesh.position.y)*.12),c.render(i.scene,i.camera3d),ce-i.lastUiPulse>180&&(i.lastUiPulse=ce,i.toast&&ce>i.toastUntil&&(i.toast=""),i.skillFeedback&&ce>i.skillFeedback.until&&(i.skillFeedback=null),S()),i.raf=requestAnimationFrame(Pe)};return i.raf=requestAnimationFrame(Pe),()=>{cancelAnimationFrame(i.raf),v.removeEventListener("pointerdown",D),window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",V),window.removeEventListener("pointercancel",J),v.removeEventListener("wheel",ne),window.removeEventListener("resize",le),window.removeEventListener("blur",re),O(),c.dispose(),h.replaceChildren(),i.ready=!1,i.runtime.runtimeCleanupCount+=1}},W=()=>{const h=i.ballMesh;if(!h)return null;h.updateMatrixWorld?.(!0);const c=h.matrixWorld?.elements;return c&&c.length>=16&&[c[12],c[13],c[14]].every(Number.isFinite)?{x:c[12],y:c[13],z:c[14]}:h.position?t(h.position):null},X=()=>{const h=e(i.ball),c=W();return c&&(h.position=c),h};(()=>{window.__game={getState:()=>({ready:i.ready,gameState:i.screen==="local_leaderboard"?"local_result":i.screen,mode:i.mode,currentLevel:i.level?{id:i.level.id,name:i.level.name,theme:i.level.theme,par:i.level.par}:null,currentHoleStrokes:i.strokes,totalStrokes:i.totalStrokes,currentScore:i.currentScore,totalScore:i.totalScore,holeComplete:i.holeComplete,elapsedTime:i.elapsed})},window.__ball={getState:X},window.__shot={getState:()=>e(i.shot)},window.__course={getState:()=>{const c=i.level||s[i.pendingLevel]||s.forest;return{levelId:c.id,name:c.name,theme:c.theme,par:c.par,bounds:{minX:-11,maxX:11,minZ:-7,maxZ:7},spawn:e(c.spawn),hole:e(c.hole),surfaces:e(m()),obstacles:e(p().map(v=>({id:v.id,type:v.type||"solid",position:{x:v.x,y:j(v.x,v.z),z:v.z},radius:v.collider?.radius||v.radius,solid:!0,modelType:v.modelType||"compound-obstacle",collider:v.collider||{shape:"cylinder",radius:v.radius,height:1.2}}))),terrainFeatures:e([{id:"shared-ramp",type:"slope",bounds:{minX:-1,maxX:4,minZ:3.9,maxZ:5.9},lowEdge:{x:1.5,y:.012,z:3.9},highEdge:{x:1.5,y:.267,z:5.9},downhill:{x:0,z:-1},rearNormal:{x:0,z:1},heightRange:{min:.012,max:.267}},...c.theme==="desert"?Y.map(v=>({id:v.id,type:"dune",center:{x:v.x,y:0,z:v.z},radiusX:v.radiusX,radiusZ:v.radiusZ,height:v.height})):[]]),obstacleCount:p().length,sceneObjectCount:i.scene?.children.length||0,loaded:!!(i.scene&&i.ballMesh&&i.level)}}},window.__multiplayer={getState:()=>({enabled:!!i.multiplayer.enabled,mode:"local",status:i.multiplayer.status,playerCount:i.multiplayer.players.length,currentPlayerId:i.multiplayer.currentPlayerId,turnIndex:i.multiplayer.turnIndex,round:i.multiplayer.round,revision:i.multiplayer.revision,players:i.multiplayer.players.map(c=>({id:c.id,name:c.name,holeStrokes:Math.max(0,Math.floor(n(c.holeStrokes))),totalStrokes:Math.max(0,Math.floor(n(c.totalStrokes))),finished:!!c.finished,ballPosition:e(c.ballPosition||i.level?.spawn||s.forest.spawn),powerupInventory:e(c.powerupState?.inventory||l()),armedPowerup:c.powerupState?.armedType||null})),winnerId:i.multiplayer.winnerId,tiedPlayerIds:[...i.multiplayer.tiedPlayerIds||[]]})},window.__powerups={getState:()=>e(i.powerups)},window.__camera={getState:()=>e(i.camera)},window.__leaderboard={getState:Ue},window.__performance={getState:()=>{let c=0;i.scene?.traverse?.(D=>{D?.isMesh&&(c+=1)});const v=i.effects.reduce((D,z)=>D+(z.particles?.length||0),0);return{fixedStep:i.physics.fixedTimeStep,accumulator:i.accumulator,simulationTick:i.runtime.simulationTick,renderFrame:i.runtime.renderFrame,reactCommitCount:i.runtime.reactCommitCount,logicLoopCount:i.runtime.logicLoopCount,listenerCount:7+g.size,runtimeMountCount:i.runtime.runtimeMountCount,runtimeCleanupCount:i.runtime.runtimeCleanupCount,engineGeneration:i.runtime.engineGeneration,poolStats:{meshes:{capacity:c,createdTotal:c,reused:0},particles:{capacity:v,createdTotal:v,reused:0},effects:{capacity:i.effects.length,createdTotal:i.effects.length,reused:0}}}}};const h=["__contract","__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"];window.__contract={getState:()=>({version:"mini-golf-eval-2.1",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:h.filter(c=>c!=="__contract").every(c=>!!window[c]&&typeof window[c].getState=="function"),hookNames:[...h],buildId:"par-all-local-solid-v9-resolution-sync"})}})();const he=({level:h})=>N.jsxs("button",{className:`level ${h.theme}`,"data-testid":`level-${h.id}`,onClick:()=>Fe(h.id,!1),children:[N.jsxs("div",{className:"level-meta",children:[N.jsx("small",{children:`PAR ${h.par}`}),N.jsx("span",{children:h.difficulty})]}),N.jsx("strong",{children:h.name}),N.jsx("p",{children:h.description}),N.jsxs("span",{className:"level-enter",children:["进入球场",N.jsx("b",{children:"→"})]})]}),Te=({nextLevel:h,replayCurrentLevel:c})=>{const v=i.level||s.forest,D=i.screen==="tournament_complete",z=i.multiplayer.enabled&&i.multiplayer.status==="complete",V=i.multiplayer.players.find(le=>le.id===i.multiplayer.winnerId),J=z&&!i.multiplayer.winnerId,ne=Math.max(1,Math.floor(n(i.lastCompletedStrokes||i.tournamentScores[v.id]||i.strokes,1)));return N.jsxs("div",{className:"panel result-panel",children:[N.jsx("div",{className:"eyebrow",children:z?"LOCAL MATCH COMPLETE":D?"TOUR COMPLETE":Ae(ne,v.par)}),N.jsx("h2",{children:z?J?"本地对战平局":`${V?.name||"玩家"} 获胜`:D?"巡回赛完成":"漂亮进洞"}),N.jsx("div",{className:"result-score","data-testid":"result-score","data-score":z?"":String(D?i.totalScore:i.currentScore),children:z?J?"平局":"胜利":D?`${i.totalScore} 分`:`${i.currentScore} 分`}),N.jsxs("div",{className:"result-stats",children:z?i.multiplayer.players.map(le=>N.jsxs("div",{children:[N.jsx("small",{children:le.name}),N.jsx("b",{children:`${le.totalStrokes} 杆`})]},le.id)):[N.jsxs("div",{children:[N.jsx("small",{children:"本洞"}),N.jsx("b",{children:`${ne} 杆`})]}),N.jsxs("div",{children:[N.jsx("small",{children:"标准杆"}),N.jsx("b",{children:v.par})]}),N.jsxs("div",{children:[N.jsx("small",{children:"巡回积分"}),N.jsx("b",{children:`${i.totalScore} 分`})]})]}),N.jsxs("div",{className:"actions",children:z?[N.jsx("button",{className:"btn","data-testid":"result-next",onClick:()=>We(i.multiplayer.playerCount||2),children:"再来一局"}),N.jsx("button",{className:"btn secondary",onClick:Le,children:"返回主菜单"})]:[!D&&N.jsx("button",{className:"btn","data-testid":"result-next",onClick:h,children:"下一关"}),N.jsx("button",{className:"btn secondary",onClick:c,children:"重玩本洞"}),N.jsx("button",{className:"btn secondary",onClick:()=>T("menu"),children:"返回主菜单"})]})]})};function De(){Gi.useSyncExternalStore(d,I,I),Gi.useLayoutEffect(()=>{i.runtime.reactCommitCount+=1});const h=Gi.useRef(null),[c,v]=Gi.useState(2);Gi.useLayoutEffect(()=>B(h.current),[]);const D=i.level||s.forest,z=()=>{const ie=["forest","desert","snow"],rt=ie.indexOf(D.id);rt>=ie.length-1?(_e(),i.screen="tournament_complete",S()):Fe(ie[rt+1],!0)},V=()=>We(c),J=()=>Le(),ne=()=>{i.holeComplete&&i.level&&Number.isFinite(i.tournamentScores[i.level.id])&&(i.totalStrokes=Math.max(0,i.totalStrokes-i.tournamentScores[i.level.id]),i.totalScore=Math.max(0,i.totalScore-n(i.tournamentPoints[i.level.id])),delete i.tournamentScores[i.level.id],delete i.tournamentPoints[i.level.id]),Fe(D.id,!0)},le=Ue(),re=[...i.multiplayer.players].sort((ie,rt)=>n(ie.totalStrokes)-n(rt.totalStrokes)||String(ie.id).localeCompare(String(rt.id)));let Pe=null,ce=0;const Ne=re.map((ie,rt)=>{const Ye=Math.max(0,Math.floor(n(ie.totalStrokes))),qt=Pe===Ye?ce:rt+1;Pe=Ye,ce=qt;const Jt=re.filter(Ze=>Math.max(0,Math.floor(n(Ze.totalStrokes)))===Ye).length>1;return{...ie,strokes:Ye,rank:qt,tiedAtScore:Jt}}),K=i.multiplayer.enabled&&i.multiplayer.status==="complete",ze=K&&i.multiplayer.tiedPlayerIds.length>1,Ke=K?i.multiplayer.players.find(ie=>ie.id===i.multiplayer.winnerId):null,He={grass:"草地",sand:"沙坑",ice:"冰面",boost:"加速带"}[i.ball.currentSurface]||"球道",ke=f("hole_in_one")?.count||0,ue=f("bounce_pad")?.count||0,je=f("speed_boost")?.count||0,qe=i.powerups.items.filter(ie=>ie.placed&&ie.active&&!ie.collected),gt=qe.find(ie=>ie.id===i.powerups.selectedPlacedId)||qe.at(-1)||null,_t=i.powerups.armedType==="hole_in_one"?"一杆入洞已启用 · 再次点击取消":i.powerups.activeEffect==="bounce_pad"?"反弹垫触发":i.powerups.activeEffect==="speed_boost"?"加速带触发":"点击放置 · 拖到球场";return N.jsxs("div",{className:"app",children:[N.jsx("div",{id:"gameScreen",className:i.screen==="playing"?"":"hidden","aria-hidden":i.screen==="playing"?"false":"true",ref:h}),i.renderError&&N.jsx("div",{className:"render-alert",role:"alert",children:i.renderError}),i.toast&&N.jsx("div",{className:"toast",role:"status",children:i.toast}),i.screen==="playing"&&N.jsx("div",{className:`field-atmosphere ${D.theme}`,"aria-hidden":"true"}),i.skillFeedback&&i.screen==="playing"&&N.jsxs("div",{className:`skill-feedback ${i.skillFeedback.type}`,role:"status",children:[N.jsx("b",{children:i.skillFeedback.type==="speed_boost"?"⚡":i.skillFeedback.type==="bounce_pad"?"↗":i.skillFeedback.type==="hole_in_one"?"★":i.skillFeedback.type==="slowdown"?"◌":"✓"}),N.jsx("span",{children:i.skillFeedback.message})]}),N.jsxs("div",{className:`hud ${i.ui.compactHud?"compact":""}`,style:{display:i.screen==="playing"&&i.ui.showHUD!==!1?"flex":"none"},children:[N.jsxs("div",{className:"collapsed-module-tabs",children:[i.ui.collapseStats&&N.jsx("button",{className:"collapsed-tab collapsed-stats",title:"展开比赛信息",onClick:ie=>{ie.stopPropagation(),ge("collapseStats")},children:"⌄ 比赛信息"}),i.ui.showField&&i.ui.collapseField&&N.jsx("button",{className:"collapsed-tab collapsed-field",title:"展开场地规则",onClick:ie=>{ie.stopPropagation(),ge("collapseField")},children:"场地规则 ›"}),i.ui.collapsePower&&N.jsx("button",{className:"collapsed-tab collapsed-power",title:"展开蓄力面板",onClick:ie=>{ie.stopPropagation(),ge("collapsePower")},children:"蓄力面板 ›"}),i.ui.showSkills&&i.ui.collapseSkills&&N.jsx("button",{className:"collapsed-tab collapsed-skills",title:"展开技能面板",onClick:ie=>{ie.stopPropagation(),ge("collapseSkills")},children:"技能面板 ⌃"})]}),i.ui.showField&&!i.ui.collapseField&&N.jsxs("div",{className:`field-effect-panel ${D.theme} foldable-module`,children:[N.jsx("button",{className:"module-fold module-fold-right",title:"收起场地规则",onClick:ie=>{ie.stopPropagation(),ge("collapseField")},children:"‹"}),N.jsx("small",{children:"当前场地规则"}),N.jsxs("strong",{children:[N.jsx("i",{className:"field-dot"}),D.fieldEffect]}),N.jsx("span",{className:"field-rule",children:D.fieldDetail}),N.jsxs("span",{className:"field-current",children:["当前地面：",N.jsx("b",{children:He}),` · 摩擦系数 μ ${i.ball.friction.toFixed(3)} · 实时速度 ${i.ball.speed.toFixed(1)} m/s`]})]}),!i.ui.collapseStats&&N.jsxs("div",{className:"topbar foldable-module",children:[N.jsx("button",{className:"module-fold module-fold-bottom",title:"收起比赛信息",onClick:ie=>{ie.stopPropagation(),ge("collapseStats")},children:"⌃"}),N.jsxs("div",{className:"chip course-chip",children:[N.jsx("span",{children:D.name}),N.jsxs("b",{"data-testid":"stroke-count","data-strokes":String(i.strokes),children:[i.strokes," 杆 · PAR ",D.par]})]}),N.jsxs("div",{className:"chip",children:[N.jsx("span",{"data-testid":"current-player",children:i.multiplayer.enabled?`${Ce(i.multiplayer.currentPlayerId)?.name||"等待"} 回合`:"单人巡回赛"}),N.jsxs("b",{children:[He," · 摩擦系数 μ ",i.ball.friction.toFixed(3)," · ",i.ball.speed.toFixed(1)," m/s",i.ball.airborne?" · 腾空":""]})]}),N.jsxs("div",{className:"chip total-chip",children:[N.jsx("span",{children:"巡回累计"}),N.jsxs("b",{children:[i.totalStrokes," 杆"]})]})]}),N.jsxs("div",{className:"live-physics-telemetry",role:"status",children:[N.jsxs("span",{"data-testid":"surface-friction",children:[He," · μ ",i.ball.friction.toFixed(3)," · ",i.ball.speed.toFixed(1)," m/s"]}),N.jsx("span",{"data-testid":"physics-motion",children:i.ball.airborne?"腾空 · 重力下落":i.ball.moving?"滚动中 · 物理计算":"已停稳 · 可击球"}),N.jsx("span",{"data-testid":"physics-contact",children:i.shot.dragging?"方向与力度实时预览":i.ball.moving?`${i.ball.lastCollision?`${String(i.ball.lastCollision).replace("obstacle:","实体碰撞 · ").replace("powerup:","道具接触 · ").replace("boundary-","边界反弹 · ")} · `:""}当前表面 · ${He}`:`已停稳 · 当前表面 · ${He}`})]}),N.jsxs("div",{className:"bottombar",children:[!i.ui.collapsePower&&N.jsxs("div",{className:"chip power-wrap foldable-module",children:[N.jsx("button",{className:"module-fold module-fold-right",title:"收起蓄力面板",onClick:ie=>{ie.stopPropagation(),ge("collapsePower")},children:"›"}),N.jsxs("div",{className:"power-label",children:[N.jsx("span",{children:i.shot.canShoot?"拖动蓄力":i.ball.airborne?"小球腾空中":"等待球停下"}),N.jsx("b",{children:`${Math.round(i.shot.power*100)}%`})]}),N.jsx("div",{className:"power-track","data-testid":"shot-power",children:N.jsx("div",{className:"power-fill",style:{width:`${i.shot.power*100}%`}})}),N.jsx("span",{className:"controls",children:i.camera.mode==="free"?"自由视角中 · 拖动旋转 · 滚轮缩放 · 固定后保留当前视角":"按住球场向后拖动 · 松开发射 · 滚轮缩放"})]}),i.ui.showSkills&&!i.ui.collapseSkills&&N.jsxs("div",{className:"chip powerup-dock foldable-module","data-testid":"powerup-status",children:[N.jsx("button",{className:"module-fold module-fold-right",title:"收起技能面板",onClick:ie=>{ie.stopPropagation(),ge("collapseSkills")},children:"›"}),N.jsxs("div",{className:"powerup-dock-heading",children:[N.jsx("span",{className:"powerup-dock-title",children:"技能与场地道具"}),N.jsx("small",{children:_t})]}),N.jsxs("div",{className:"powerup-tools",children:[N.jsxs("button",{className:`powerup-tool bounce ${i.powerups.placingType==="bounce_pad"?"dragging":""}`,disabled:ue<=0,onPointerDown:ie=>de(ie,"bounce_pad"),"aria-label":"放置反弹垫",title:"放置反弹垫：拖到球场后可调整方向",children:[N.jsx("b",{children:"↗"}),N.jsx("small",{children:"反弹垫"}),N.jsx("i",{children:ue})]}),N.jsxs("button",{className:`powerup-tool boost ${i.powerups.placingType==="speed_boost"?"dragging":""}`,disabled:je<=0,onPointerDown:ie=>de(ie,"speed_boost"),"aria-label":"放置加速带",title:"放置加速带：拖到球场后可调整方向",children:[N.jsx("b",{children:"➤"}),N.jsx("small",{children:"加速带"}),N.jsx("i",{children:je})]}),N.jsxs("button",{className:`powerup-tool hio ${i.powerups.armedType==="hole_in_one"?"armed":""}`,"data-testid":"powerup-hio",disabled:ke<=0,onClick:ie=>{ie.stopPropagation(),Re()},"aria-label":i.powerups.armedType==="hole_in_one"?"取消一杆入洞":"使用一杆入洞",title:i.powerups.armedType==="hole_in_one"?"取消一杆入洞：恢复手动瞄准且不消耗道具":"使用一杆入洞：下一杆自动瞄准球洞",children:[N.jsx("b",{children:"★"}),N.jsx("small",{children:i.powerups.armedType==="hole_in_one"?"取消技能":"一杆入洞"}),N.jsx("i",{children:ke})]})]}),gt&&N.jsxs("div",{className:"direction-editor",children:[N.jsx("label",{children:"调整道具方向"}),N.jsx("select",{value:gt.id,onChange:ie=>te(ie.target.value),"aria-label":"选择已放置道具",children:qe.map((ie,rt)=>N.jsx("option",{value:ie.id,children:`${ie.type==="speed_boost"?"加速带":"反弹垫"} ${rt+1}`},ie.id))}),N.jsx("button",{title:"向左旋转",onClick:ie=>{ie.stopPropagation(),ct(gt.id,-Math.PI/12)},children:"↺ 15°"}),N.jsx("button",{title:"反向",onClick:ie=>{ie.stopPropagation(),ct(gt.id,Math.PI)},children:"翻转"}),N.jsx("button",{title:"向右旋转",onClick:ie=>{ie.stopPropagation(),ct(gt.id,Math.PI/12)},children:"15° ↻"})]})]}),i.powerups.placingType&&i.powerups.placementScreen&&N.jsx("div",{className:`powerup-drag-ghost ${i.powerups.placingType}`,style:{left:`${i.powerups.placementScreen.x}px`,top:`${i.powerups.placementScreen.y}px`},children:i.powerups.placingType==="speed_boost"?"➤":"↗"}),N.jsxs("div",{className:"zoom",children:[N.jsx("button",{"data-testid":"zoom-in","aria-label":"放大",title:"放大视角",onClick:ie=>{ie.stopPropagation(),di(-1)},children:"+"}),N.jsx("button",{"data-testid":"zoom-out","aria-label":"缩小",title:"缩小视角",onClick:ie=>{ie.stopPropagation(),di(1)},children:"−"}),N.jsx("button",{className:`camera-mini ${i.camera.mode==="free"?"active":""}`,"data-testid":"camera-mode","aria-label":i.camera.mode==="free"?"固定视角":"改变视角",title:i.camera.mode==="free"?"固定视角：回到正常游戏与击球模式":"改变视角：拖动球场自由旋转视角",onClick:ie=>{ie.stopPropagation(),Zr()},children:i.camera.mode==="free"?"固定视角":"改变视角"}),N.jsx("button",{className:"recover-mini","data-testid":"reset-position","aria-label":"重置球位",title:"重置球位：回到本洞初始位置并恢复击球",onClick:ie=>{ie.stopPropagation(),ut()},children:"↻"}),N.jsx("button",{className:"menu-mini","aria-label":"回到菜单",title:"回到菜单",onClick:ie=>{ie.stopPropagation(),i.multiplayer.enabled?Le():T("menu")},children:"☰"})]})]})]}),N.jsx("div",{id:"menu",className:`screen ${i.screen==="menu"?"":"hidden"}`,children:N.jsxs("div",{className:"panel hero-panel",children:[N.jsxs("div",{className:"hero-status",children:[N.jsx("span",{className:"live-dot"}),N.jsx("span",{children:i.ready?"3D ENGINE ONLINE":"3D ENGINE STARTING"})]}),N.jsx("div",{className:"eyebrow",children:"REALTIME 3D MINI GOLF"}),N.jsxs("h1",{className:"brand",children:["PAR",N.jsx("span",{children:"//"}),"ALL"]}),N.jsx("p",{className:"lead",children:"读懂地表、掌握力度，在森林、沙海与极光冰原完成一场三洞巡回赛。每一杆都由真实物理推动。"}),N.jsxs("div",{className:"feature-strip",children:[N.jsxs("span",{children:[N.jsx("b",{children:"3"})," 主题球场"]}),N.jsxs("span",{children:[N.jsx("b",{children:"3"})," 战术道具"]}),N.jsxs("span",{children:[N.jsx("b",{children:"120Hz"})," 固定物理"]})]}),N.jsxs("div",{className:"actions",children:[N.jsx("button",{className:"btn primary-cta","data-testid":"start-btn",onClick:()=>T("level_select"),children:"开始巡回赛"}),N.jsx("button",{className:"btn secondary","data-testid":"multiplayer-btn",onClick:()=>T("local_setup"),children:"本地对战"}),N.jsx("button",{className:"btn secondary","data-testid":"leaderboard-btn",onClick:()=>T("leaderboard"),children:"本地排行榜"})]})]})}),N.jsx("div",{id:"levelSelect",className:`screen ${i.screen==="level_select"?"":"hidden"}`,children:N.jsxs("div",{className:"panel level-panel",children:[N.jsx("div",{className:"eyebrow",children:"SELECT A COURSE"}),N.jsx("h2",{children:"三座球场，一张总成绩单"}),N.jsx("p",{className:"section-copy",children:"先选择起点。完成一洞后可以直接进入下一主题，巡回累计杆数会持续保留。"}),N.jsx("div",{className:"level-grid",children:Object.values(s).map(ie=>N.jsx(he,{level:ie},ie.id))}),N.jsx("div",{className:"actions",children:N.jsx("button",{className:"btn secondary",onClick:()=>T("menu"),children:"返回主菜单"})})]})}),N.jsx("div",{id:"multiplayerLobby",className:`screen ${i.screen==="local_setup"?"":"hidden"}`,children:N.jsxs("div",{className:"panel lobby-panel",children:[N.jsx("div",{className:"eyebrow",children:"LOCAL HOT-SEAT MATCH"}),N.jsx("h2",{children:"同设备轮流击球"}),N.jsx("p",{className:"section-copy",children:"选择 2–4 名玩家。每位玩家拥有独立球位和杆数，球停稳后自动交给下一位玩家。"}),N.jsxs("div",{className:"room",children:[N.jsx("label",{htmlFor:"localPlayerCount",children:"玩家人数"}),N.jsx("select",{id:"localPlayerCount","data-testid":"local-player-count",value:c,onChange:ie=>v(Number(ie.target.value)),children:[2,3,4].map(ie=>N.jsx("option",{value:ie,children:`${ie} 人`},ie))})]}),N.jsxs("div",{className:"actions",children:[N.jsx("button",{className:"btn","data-testid":"local-start-btn",onClick:V,children:"开始本地比赛"}),N.jsx("button",{className:"btn secondary","data-testid":"local-exit-btn",onClick:J,children:"返回"})]}),N.jsx("div",{className:"players",children:Array.from({length:c},(ie,rt)=>N.jsxs("div",{className:"player",children:[N.jsx("span",{children:`玩家 ${rt+1}`}),N.jsx("b",{children:"0 杆"})]},rt))})]})}),N.jsx("div",{id:"leaderboardScreen",className:`screen ${i.screen==="leaderboard"?"":"hidden"}`,children:N.jsxs("div",{className:"panel leaderboard-panel",children:[N.jsx("div",{className:"eyebrow",children:"LOCAL RECORDS"}),N.jsx("h2",{children:"最佳杆数"}),N.jsx("p",{className:"section-copy",children:"每座球场只把更少杆数排在前面；完成三洞巡回赛后，总杆数也会写入本地记录。"}),N.jsxs("table",{className:"leaderboard",children:[N.jsx("thead",{children:N.jsxs("tr",{children:[N.jsx("th",{children:"球场"}),N.jsx("th",{children:"PAR"}),N.jsx("th",{children:"最佳"})]})}),N.jsx("tbody",{children:Object.values(s).map(ie=>N.jsxs("tr",{children:[N.jsx("td",{children:ie.name}),N.jsx("td",{children:ie.par}),N.jsx("td",{children:le.levelBest[ie.id]?.[0]?.strokes??"—"})]},ie.id))})]}),N.jsxs("div",{className:"overall-card",children:[N.jsx("span",{children:"巡回赛最佳总杆"}),N.jsx("b",{children:le.overall?.[0]?.totalStrokes??"—"})]}),N.jsx("div",{className:"actions",children:N.jsx("button",{className:"btn secondary",onClick:()=>T("menu"),children:"返回主菜单"})})]})}),N.jsx("div",{id:"localLeaderboardScreen",className:`screen ${i.screen==="local_leaderboard"?"":"hidden"}`,"aria-hidden":i.screen==="local_leaderboard"?"false":"true",children:N.jsxs("div",{className:"panel leaderboard-panel","data-testid":"local-match-leaderboard",children:[N.jsx("div",{className:"eyebrow",children:"LOCAL MATCH LEADERBOARD"}),N.jsx("h2",{children:ze?"本地对战平局":`${Ke?.name||"玩家"} 获胜`}),N.jsx("p",{className:"section-copy",children:ze?"最低总杆相同，本局并列。下方列出全部玩家的最终杆数。":"最低总杆玩家获胜。下方列出全部玩家的最终杆数。"}),N.jsxs("table",{className:"leaderboard",children:[N.jsx("thead",{children:N.jsxs("tr",{children:[N.jsx("th",{children:"排名"}),N.jsx("th",{children:"玩家"}),N.jsx("th",{children:"总杆数"}),N.jsx("th",{children:"结果"})]})}),N.jsx("tbody",{children:Ne.map(ie=>N.jsxs("tr",{children:[N.jsx("td",{children:ie.tiedAtScore?`并列 ${ie.rank}`:ie.rank}),N.jsx("td",{children:ie.name}),N.jsx("td",{children:`${ie.strokes} 杆`}),N.jsx("td",{children:ze&&i.multiplayer.tiedPlayerIds.includes(ie.id)?"并列":ie.id===i.multiplayer.winnerId?"胜者":"完赛"})]},ie.id))})]}),N.jsxs("div",{className:"actions",children:[N.jsx("button",{className:"btn","data-testid":"local-result-next",onClick:()=>We(i.multiplayer.playerCount||2),children:"再来一局"}),N.jsx("button",{className:"btn secondary","data-testid":"local-result-exit-btn",onClick:Le,children:"返回主菜单"})]})]})}),N.jsx("div",{id:"resultScreen",className:`screen ${i.screen==="hole_complete"||i.screen==="tournament_complete"||i.screen==="local_result"?"":"hidden"}`,"aria-hidden":i.screen==="hole_complete"||i.screen==="tournament_complete"||i.screen==="local_result"?"false":"true",children:N.jsx(Te,{nextLevel:z,replayCurrentLevel:ne})})]})}cl.createRoot(document.getElementById("game-root")).render(N.jsx(De,{}))})();await(async()=>{const r={grass:"草地 · 标准摩擦",sand:"沙坑 · 高摩擦",ice:"冰面 · 低摩擦"},e={bounce_pad:"反弹垫已触发",speed_boost:"加速带已触发",hole_in_one:"一杆入洞道具就绪"};let t=!0;const n=(l,i)=>{const u=Math.atan2(-i,l);return["→","↗","↑","↖","←","↙","↓","↘"][(Math.round(u/(Math.PI/4))+8)%8]};function s(){if(document.getElementById("playAssist"))return;const l=document.createElement("div");l.id="playAssist",l.innerHTML='<svg id="aimVector" data-testid="aim-feedback" aria-hidden="true"><defs><marker id="aimArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path class="aim-head" d="M0,0 L10,5 L0,10 z"/></marker></defs><line class="aim-shadow"/><line class="aim-core" marker-end="url(#aimArrow)"/><g class="aim-dots"><circle class="aim-dot"/><circle class="aim-dot"/><circle class="aim-dot"/><circle class="aim-dot"/><circle class="aim-dot"/></g></svg><div class="assist-card foldable-module"><button class="assist-fold" title="收起球洞方向">›</button><div class="assist-arrow">→</div><div class="assist-copy"><small>Hole finder</small><strong>球洞方向</strong></div><div class="assist-distance">-- m</div></div><button class="assist-tab" title="展开球洞方向">‹ 球洞方向</button><div class="shot-readout"><b>0%</b><span>松开发射<br><em>方向已锁定</em></span></div><div class="surface-pill" data-surface="grass"><i class="surface-dot"></i><span class="surface-name">草地 · 标准摩擦</span><span class="surface-friction">μ 1.200</span><span class="surface-speed">0.0 m/s</span></div><div class="physics-readout"><span class="physics-motion">已停稳</span><span class="physics-contact">等待击球</span></div><div class="play-tip">按住并向后拖动 · 箭头指向出球方向 · 松开发射</div>',document.body.appendChild(l),l.querySelector(".assist-fold")?.addEventListener("click",i=>{i.stopPropagation(),t=!1,l.classList.add("hide-direction")}),l.querySelector(".assist-tab")?.addEventListener("click",i=>{i.stopPropagation(),t=!0,l.classList.remove("hide-direction")})}let a=0;function o(l=performance.now()){if(l-a<50){requestAnimationFrame(o);return}a=l,s();const i=window.__game?.getState?.(),u=window.__ball?.getState?.(),f=window.__shot?.getState?.(),p=window.__course?.getState?.(),m=window.__powerups?.getState?.(),g=document.getElementById("playAssist");if(!g||!i||!u||!f||!p){requestAnimationFrame(o);return}g.classList.toggle("playing",i.gameState==="playing"),g.classList.toggle("hide-direction",!t);const M=p.hole||{x:0,z:0},S=M.x-u.position.x,_=M.z-u.position.z,d=Math.hypot(S,_);g.querySelector(".assist-arrow").textContent=n(S,_),g.querySelector(".assist-distance").textContent=d.toFixed(1)+" m";const I=u.currentSurface||"grass",A=g.querySelector(".surface-pill");A.dataset.surface=I,g.querySelector(".surface-name").textContent=r[I]||I;const T=g.querySelector(".surface-friction");T&&(T.textContent="摩擦系数 μ "+Number(u.friction||0).toFixed(3)),g.querySelector(".surface-speed").textContent=(u.speed||0).toFixed(1)+" m/s";const U=g.querySelector(".physics-motion"),L=g.querySelector(".physics-contact");if(U&&(U.textContent=u.airborne?"腾空 / 重力下落":u.moving?"滚动中 · 物理计算":"已停稳 · 可击球"),L){const Y=r[I]||I,q=u.lastCollision?String(u.lastCollision).replace("obstacle:","实体碰撞 · ").replace("powerup:","道具接触 · ").replace("boundary-","边界反弹 · "):"";L.textContent=f.dragging?"方向与力度实时预览":u.moving?`${q?q+" · ":""}当前表面 · ${Y}`:`已停稳 · 当前表面 · ${Y}`}const O=g.querySelector("#aimVector"),C=g.querySelector(".shot-readout"),E=f.startScreen,b=f.currentScreen,R=!!(f.dragging&&E&&b);if(O.classList.toggle("active",R),C.classList.toggle("active",R),R){let Y=E.x-b.x,q=E.y-b.y,$=Math.hypot(Y,q)||1,ae=Math.min(230,56+$*.78),j=E.x,fe=E.y,Z=j+Y/$*ae,ye=fe+q/$*ae;const Se=O.querySelectorAll("line");for(const at of Se)at.setAttribute("x1",j),at.setAttribute("y1",fe),at.setAttribute("x2",Z),at.setAttribute("y2",ye);O.querySelectorAll(".aim-dot").forEach((at,ct)=>{const te=ct+1,ge=te/6;at.setAttribute("cx",j+(Z-j)*ge),at.setAttribute("cy",fe+(ye-fe)*ge),at.setAttribute("r",String(2+te*.35))}),C.querySelector("b").textContent=Math.round((f.power||0)*100)+"%";const $e=m?.activeEffect;C.querySelector("em").textContent=e[$e]||((f.power||0)>.82?"强力击球":(f.power||0)>.42?"稳定击球":"轻推球")}requestAnimationFrame(o)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>requestAnimationFrame(o),{once:!0}):requestAnimationFrame(o)})();
