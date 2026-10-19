const CFG = {
  title: 'Dustline Rally',
  subtitle: 'CANYON TIME TRIAL',
  accent: '#ffb547',
  accent2: '#ff6b35',
  sky: [0.145, 0.205, 0.225, 1],
  vehicles: [
    {
      id: 'dune-scout', name: 'Dune Scout', owned: true, price: 0,
      color: [0.96, 0.42, 0.12], trim: [0.10, 0.12, 0.13],
      mass: 1420, power: 228, braking: 8.0, steering: 1.58,
      grip: 1.04, maxSpeed: 31, suspension: 7.2, shape: 'buggy',
      blurb: 'Light, eager and forgiving over broken ground.'
    },
    {
      id: 'rock-bison', name: 'Rock Bison', owned: false, price: 520,
      color: [0.10, 0.66, 0.72], trim: [0.08, 0.15, 0.17],
      mass: 1820, power: 305, braking: 8.8, steering: 1.28,
      grip: 1.18, maxSpeed: 34, suspension: 8.8, shape: 'truck',
      blurb: 'Heavy torque, planted grip and long-travel suspension.'
    }
  ],
  maps: [
    {
      id: 'red-canyon', name: 'Red Canyon Run', difficulty: 'TECHNICAL',
      desc: 'Thread sandstone gates, cross loose shelves and keep momentum through the canyon floor.',
      spawn: [0, 0, -48], finish: [8, 0, 48],
      checkpoints: [[-16,0,-28],[-13,0,-8],[-8,0,10],[0,0,27],[6,0,40]],
      surface: ['sand','rock','hardpack'], seed: 1, terrain: 'canyon', trackWidth: 7.2,
      obstacles: [[16,-43,1.6],[27,-2,1.7],[-27,18,1.9],[25,35,1.5],[29,16,1.7]]
    },
    {
      id: 'mesa-loop', name: 'Mesa Switchback', difficulty: 'FAST / OFF-CAMBER',
      desc: 'A longer high-speed hardpack route with muddy cuts, exposed ridges and sweeping switchbacks.',
      spawn: [-35,0,-36], finish: [36,0,38],
      checkpoints: [[-12,0,-26],[15,0,-28],[30,0,-8],[16,0,12],[-8,0,24],[10,0,36]],
      surface: ['hardpack','mud','stone'], seed: 2, terrain: 'mesa', trackWidth: 8.0,
      obstacles: [[0,-43,1.6],[39,-18,2.0],[31,15,1.5],[-7,38,1.8],[-31,31,1.6]]
    }
  ]
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const expLerp = (a, b, rate, dt) => lerp(a, b, 1 - Math.exp(-rate * dt));
const rad = d => d * Math.PI / 180;
const vec3 = (x=0,y=0,z=0) => ({x,y,z});
const copy3 = v => ({x:v.x,y:v.y,z:v.z});
const normalize = v => { const l=Math.hypot(v.x,v.y,v.z)||1; return {x:v.x/l,y:v.y/l,z:v.z/l}; };
const dot = (a,b) => a.x*b.x+a.y*b.y+a.z*b.z;
const cross = (a,b) => ({x:a.y*b.z-a.z*b.y,y:a.z*b.x-a.x*b.z,z:a.x*b.y-a.y*b.x});
const distance2D = (a,b) => Math.hypot(a.x-b.x,a.z-b.z);
const fmt = t => { const m=Math.floor(t/60), s=t-m*60; return `${String(m).padStart(2,'0')}:${s.toFixed(2).padStart(5,'0')}`; };
const rgbCss = c => `rgb(${c.map(v=>Math.round(v*255)).join(',')})`;

function mat4Identity(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);}
function mat4Multiply(a,b){const o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)o[c*4+r]=a[r]*b[c*4]+a[4+r]*b[c*4+1]+a[8+r]*b[c*4+2]+a[12+r]*b[c*4+3];return o;}
function mat4Translate(x,y,z){const m=mat4Identity();m[12]=x;m[13]=y;m[14]=z;return m;}
function mat4Scale(x,y,z){const m=mat4Identity();m[0]=x;m[5]=y;m[10]=z;return m;}
function mat4RotX(a){const c=Math.cos(a),s=Math.sin(a),m=mat4Identity();m[5]=c;m[6]=s;m[9]=-s;m[10]=c;return m;}
function mat4RotY(a){const c=Math.cos(a),s=Math.sin(a),m=mat4Identity();m[0]=c;m[2]=-s;m[8]=s;m[10]=c;return m;}
function mat4RotZ(a){const c=Math.cos(a),s=Math.sin(a),m=mat4Identity();m[0]=c;m[1]=s;m[4]=-s;m[5]=c;return m;}
function mat4Perspective(fov,aspect,near,far){const f=1/Math.tan(fov/2),nf=1/(near-far),m=new Float32Array(16);m[0]=f/aspect;m[5]=f;m[10]=(far+near)*nf;m[11]=-1;m[14]=2*far*near*nf;return m;}
function mat4LookAt(eye,target,up={x:0,y:1,z:0}){const z=normalize({x:eye.x-target.x,y:eye.y-target.y,z:eye.z-target.z}),x=normalize(cross(up,z)),y=cross(z,x),m=mat4Identity();m[0]=x.x;m[1]=y.x;m[2]=z.x;m[4]=x.y;m[5]=y.y;m[6]=z.y;m[8]=x.z;m[9]=y.z;m[10]=z.z;m[12]=-dot(x,eye);m[13]=-dot(y,eye);m[14]=-dot(z,eye);return m;}
function modelMatrix(p,s,r={x:0,y:0,z:0}){let m=mat4Translate(p.x,p.y,p.z);m=mat4Multiply(m,mat4RotY(r.y||0));m=mat4Multiply(m,mat4RotX(r.x||0));m=mat4Multiply(m,mat4RotZ(r.z||0));return mat4Multiply(m,mat4Scale(s.x,s.y,s.z));}

class Renderer3D {
  constructor(canvas){
    this.canvas=canvas;
    this.gl=canvas.getContext('webgl',{antialias:true,alpha:false,preserveDrawingBuffer:false});
    if(!this.gl) throw new Error('WebGL unavailable');
    const gl=this.gl;
    const vs=`attribute vec3 aPos;attribute vec3 aNormal;uniform mat4 uMVP;uniform mat4 uModel;varying vec3 vN;varying vec3 vW;void main(){vec4 w=uModel*vec4(aPos,1.0);vW=w.xyz;vN=mat3(uModel)*aNormal;gl_Position=uMVP*vec4(aPos,1.0);}`;
    const fs=`precision mediump float;uniform vec3 uColor;uniform vec3 uLight;uniform float uFog;uniform float uGlow;varying vec3 vN;varying vec3 vW;void main(){float d=max(dot(normalize(vN),normalize(uLight)),0.0);float rim=pow(1.0-max(dot(normalize(vN),normalize(vec3(.15,.78,.42))),0.0),2.0)*.08;float l=.48+d*.60+rim;vec3 c=uColor*(l+uGlow);float fog=clamp((length(vW.xz)-52.0)/92.0,0.0,1.0)*uFog;vec3 fogc=vec3(${CFG.sky[0]},${CFG.sky[1]},${CFG.sky[2]});gl_FragColor=vec4(mix(c,fogc,fog),1.0);}`;
    this.program=this.makeProgram(vs,fs);
    this.loc={pos:gl.getAttribLocation(this.program,'aPos'),normal:gl.getAttribLocation(this.program,'aNormal'),mvp:gl.getUniformLocation(this.program,'uMVP'),model:gl.getUniformLocation(this.program,'uModel'),color:gl.getUniformLocation(this.program,'uColor'),light:gl.getUniformLocation(this.program,'uLight'),fog:gl.getUniformLocation(this.program,'uFog'),glow:gl.getUniformLocation(this.program,'uGlow')};
    this.cube=this.makeCube();
    this.cyl=this.makeCylinder(20);
    this.terrain=null;
    this.frame=0;
    this.fov=58;
    gl.enable(gl.DEPTH_TEST); gl.enable(gl.CULL_FACE); gl.cullFace(gl.BACK);
  }
  shader(type,src){const s=this.gl.createShader(type);this.gl.shaderSource(s,src);this.gl.compileShader(s);if(!this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS))throw new Error(this.gl.getShaderInfoLog(s));return s;}
  makeProgram(v,f){const gl=this.gl,p=gl.createProgram();gl.attachShader(p,this.shader(gl.VERTEX_SHADER,v));gl.attachShader(p,this.shader(gl.FRAGMENT_SHADER,f));gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(p));return p;}
  makeMesh(data){const gl=this.gl,b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);return {b,count:data.length/6};}
  makeCube(){const d=[];const face=(n,a,b,c,e)=>[a,b,c,a,c,e].forEach(p=>d.push(...p,...n));face([0,0,1],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]);face([0,0,-1],[.5,-.5,-.5],[-.5,-.5,-.5],[-.5,.5,-.5],[.5,.5,-.5]);face([1,0,0],[.5,-.5,.5],[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5]);face([-1,0,0],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5],[-.5,.5,-.5]);face([0,1,0],[-.5,.5,.5],[.5,.5,.5],[.5,.5,-.5],[-.5,.5,-.5]);face([0,-1,0],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]);return this.makeMesh(d);}
  makeCylinder(seg){const d=[];for(let i=0;i<seg;i++){const a=i/seg*Math.PI*2,b=(i+1)/seg*Math.PI*2,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);const p1=[-.5,ca*.5,sa*.5],p2=[.5,ca*.5,sa*.5],p3=[.5,cb*.5,sb*.5],p4=[-.5,cb*.5,sb*.5];[p1,p2,p3,p1,p3,p4].forEach((p,k)=>{const n=k===0||k===1||k===3?[0,ca,sa]:[0,cb,sb];d.push(...p,...n)});[[[-.5,0,0],p4,p1],[[.5,0,0],p2,p3]].forEach((tr,t)=>tr.forEach(p=>d.push(...p,t===0?-1:1,0,0)));}return this.makeMesh(d);}
  makeTerrain(heightFn,size=116,steps=32){if(this.terrain?.b&&this.gl.deleteBuffer)this.gl.deleteBuffer(this.terrain.b);const d=[],cell=size/steps;const normalAt=(x,z)=>normalize({x:heightFn(x-.45,z)-heightFn(x+.45,z),y:.9,z:heightFn(x,z-.45)-heightFn(x,z+.45)});for(let iz=0;iz<steps;iz++)for(let ix=0;ix<steps;ix++){const x0=-size/2+ix*cell,x1=x0+cell,z0=-size/2+iz*cell,z1=z0+cell,pts=[[x0,heightFn(x0,z0),z0],[x1,heightFn(x1,z0),z0],[x1,heightFn(x1,z1),z1],[x0,heightFn(x0,z1),z1]];[[0,2,1],[0,3,2]].forEach(t=>t.forEach(j=>{const p=pts[j],n=normalAt(p[0],p[2]);d.push(...p,n.x,n.y,n.z);}));}this.terrain=this.makeMesh(d);}
  resize(){const dpr=Math.min(devicePixelRatio||1,1.8),w=Math.max(2,Math.floor(this.canvas.clientWidth*dpr)),h=Math.max(2,Math.floor(this.canvas.clientHeight*dpr));if(this.canvas.width!==w||this.canvas.height!==h){this.canvas.width=w;this.canvas.height=h;this.gl.viewport(0,0,w,h);}}
  begin(camera,fov=58){this.resize();this.fov=expLerp(this.fov,fov,6,.016);const gl=this.gl;gl.clearColor(...CFG.sky);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(this.program);gl.uniform3f(this.loc.light,-.42,.94,.34);gl.uniform1f(this.loc.fog,.68);this.viewProj=mat4Multiply(mat4Perspective(rad(this.fov),this.canvas.width/this.canvas.height,.1,270),mat4LookAt(camera.position,camera.target));this.frame++;}
  draw(mesh,p,s,color,r={x:0,y:0,z:0},glow=0){const gl=this.gl,m=modelMatrix(p,s,r),mvp=mat4Multiply(this.viewProj,m);gl.bindBuffer(gl.ARRAY_BUFFER,mesh.b);gl.enableVertexAttribArray(this.loc.pos);gl.vertexAttribPointer(this.loc.pos,3,gl.FLOAT,false,24,0);gl.enableVertexAttribArray(this.loc.normal);gl.vertexAttribPointer(this.loc.normal,3,gl.FLOAT,false,24,12);gl.uniformMatrix4fv(this.loc.mvp,false,mvp);gl.uniformMatrix4fv(this.loc.model,false,m);gl.uniform3fv(this.loc.color,color);gl.uniform1f(this.loc.glow,glow);gl.drawArrays(gl.TRIANGLES,0,mesh.count);}
}

function routePoints(map){return [map.spawn,...map.checkpoints,map.finish].map(p=>({x:p[0],z:p[2]}));}
function pointSegmentDistance(x,z,a,b){const vx=b.x-a.x,vz=b.z-a.z,wx=x-a.x,wz=z-a.z,c2=vx*vx+vz*vz||1,t=clamp((wx*vx+wz*vz)/c2,0,1),px=a.x+vx*t,pz=a.z+vz*t;return {distance:Math.hypot(x-px,z-pz),t,px,pz};}
function nearestRouteInfo(map,x,z){const pts=routePoints(map);let best={distance:Infinity,segment:0,t:0,px:0,pz:0};for(let i=0;i<pts.length-1;i++){const q=pointSegmentDistance(x,z,pts[i],pts[i+1]);if(q.distance<best.distance)best={...q,segment:i};}return best;}

function terrainHeight(type,x,z){
  if(type==='canyon'){
    const floor=Math.sin(z*.105)*.48+Math.sin((x+z)*.19)*.24+Math.cos(x*.16)*.28;
    const shelves=Math.max(0,Math.abs(x)-25)*.18 + Math.max(0,Math.abs(x)-38)*.18;
    const ridges=Math.sin((x-6)*.095)*Math.sin(z*.065)*.65;
    return floor+shelves+ridges;
  }
  const rolling=Math.sin((x+8)*.085)*.74+Math.cos((z-4)*.072)*.70+Math.sin((x-z)*.16)*.26;
  const terrace=Math.tanh(Math.sin(z*.045+x*.025)*1.7)*.72;
  const crown=Math.sin(z*.038)*.78;
  return rolling*.78+terrace+crown;
}

function surfaceAt(map,x,z){
  const route=nearestRouteInfo(map,x,z);
  if(map.id==='red-canyon'){
    if(route.distance<map.trackWidth*.42) return 'hardpack';
    const rough=Math.sin(x*.23)+Math.cos(z*.19);
    return rough>.62?'rock':'sand';
  }
  const mudPocket=(Math.hypot(x-7,z-13)<8)||(Math.hypot(x+13,z-24)<7);
  if(mudPocket) return 'mud';
  if(route.distance<map.trackWidth*.48) return 'hardpack';
  return Math.sin(x*.18-z*.12)>.25?'stone':'hardpack';
}
function surfacePhysics(s){
  if(s==='mud') return {grip:.70,drag:.24,power:.76};
  if(s==='sand') return {grip:.82,drag:.18,power:.86};
  if(s==='rock'||s==='stone') return {grip:1.04,drag:.12,power:.98};
  return {grip:.96,drag:.10,power:1};
}

function createRouteSegments(map){const pts=routePoints(map),out=[];for(let i=0;i<pts.length-1;i++){const a=pts[i],b=pts[i+1],len=Math.hypot(b.x-a.x,b.z-a.z),steps=Math.max(2,Math.ceil(len/5.2));for(let s=0;s<steps;s++){const t=(s+.5)/steps,x=lerp(a.x,b.x,t),z=lerp(a.z,b.z,t),yaw=Math.atan2(b.x-a.x,b.z-a.z);out.push({x,z,yaw,length:len/steps,width:map.trackWidth*.72});}}return out;}
function createEnvironment(map){const props=[];for(let i=0;i<12;i++){const a=i*2.399+map.seed*.7,r=36+(i%7)*3.0,x=Math.sin(a)*r,z=Math.cos(a)*r;const route=nearestRouteInfo(map,x,z);if(route.distance<map.trackWidth+4) continue;props.push({id:`prop-${i}`,x,z,scale:.7+(i%5)*.22,kind:map.terrain==='canyon'?(i%4===0?'pillar':'rock'):(i%5===0?'marker':'rock'),yaw:a});}return props;}
function createTrackMesh(renderer,map,segments){
  const d=[];
  for(const seg of segments){
    const forward={x:Math.sin(seg.yaw),z:Math.cos(seg.yaw)},right={x:Math.cos(seg.yaw),z:-Math.sin(seg.yaw)};
    for(const lane of [-1.18,1.18]){
      const cx=seg.x+right.x*lane,cz=seg.z+right.z*lane,halfW=.22,halfL=seg.length*.57;
      const pts=[
        {x:cx-right.x*halfW-forward.x*halfL,z:cz-right.z*halfW-forward.z*halfL},
        {x:cx-right.x*halfW+forward.x*halfL,z:cz-right.z*halfW+forward.z*halfL},
        {x:cx+right.x*halfW+forward.x*halfL,z:cz+right.z*halfW+forward.z*halfL},
        {x:cx+right.x*halfW-forward.x*halfL,z:cz+right.z*halfW-forward.z*halfL}
      ];
      for(const q of pts)q.y=terrainHeight(map.terrain,q.x,q.z)+.035;
      [[0,1,2],[0,2,3]].forEach(tr=>tr.forEach(i=>{const q=pts[i];d.push(q.x,q.y,q.z,0,1,0);}));
    }
  }
  return renderer.makeMesh(d);
}
function courseForward(map){const a={x:map.spawn[0],z:map.spawn[2]},b={x:map.checkpoints[0][0],z:map.checkpoints[0][2]},v=normalize({x:b.x-a.x,y:0,z:b.z-a.z});return v;}

export function mountGame(root){
  root.innerHTML=`<div class="game-app"><canvas data-testid="game-canvas" class="game-canvas"></canvas><div class="vignette"></div><div class="screen-layer" id="ui-layer"></div><div id="toast" class="toast"></div></div>`;
  const canvas=root.querySelector('canvas'),ui=root.querySelector('#ui-layer'),toast=root.querySelector('#toast');
  const renderer=new Renderer3D(canvas);
  const garage={
    credits:850,
    selectedVehicleId:CFG.vehicles.find(v=>v.owned).id,
    vehicles:CFG.vehicles.map(v=>({...v,upgrades:[
      {id:'engine',name:'Torque tune',level:0,cost:150,affectedStat:'power',desc:'Stronger acceleration out of slow sections.'},
      {id:'suspension',name:'Long-travel kit',level:0,cost:900,affectedStat:'suspension',desc:'More wheel travel and calmer body control.'},
      {id:'tires',name:'All-terrain tires',level:0,cost:170,affectedStat:'grip',desc:'More lateral grip on loose surfaces.'}
    ]}))
  };

  let state='menu',selectedMapId=null,race=null,currentMap=null,vehicle=null,keys={},raf=0,last=performance.now(),loadingTimer=0;
  let currentTerrainBounds={minHeight:0,maxHeight:0},visibleMapObjectCount=0,routeSegments=[],trackMesh=null,environment=[];
  const camera={mode:'third_person',position:vec3(0,5,-9),target:vec3(),forward:vec3(0,-.3,1),followedVehicleId:null,vehicleVisible:false};

  const vehicleById=id=>garage.vehicles.find(v=>v.id===id);
  const mapById=id=>CFG.maps.find(m=>m.id===id);
  const say=msg=>{toast.textContent=msg;toast.classList.remove('show');void toast.offsetWidth;toast.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>toast.classList.remove('show'),1900);};
  const appliedStats=v=>{
    const engine=v.upgrades.find(u=>u.id==='engine').level;
    const suspension=v.upgrades.find(u=>u.id==='suspension').level;
    const tires=v.upgrades.find(u=>u.id==='tires').level;
    return {mass:v.mass,power:v.power*(1+engine*.11),braking:v.braking,steering:v.steering,grip:v.grip*(1+tires*.065),maxSpeed:v.maxSpeed,suspension:v.suspension*(1+suspension*.10)};
  };
  const creditsSpan=()=>`<span class="credit-chip"><span class="coin-dot"></span><span data-testid="credits-value">${garage.credits}</span><small>CR</small></span>`;
  const screen=html=>{ui.innerHTML=html;bindUI();};
  const setCanvasVisible=visible=>{canvas.style.visibility=visible?'visible':'hidden';root.querySelector('.vignette').style.visibility=visible?'visible':'hidden';};

  function performanceBars(st){
    const rows=[['POWER',st.power/340],['GRIP',st.grip/1.35],['SUSPENSION',st.suspension/11],['TOP SPEED',st.maxSpeed/38]];
    return `<div class="performance-bars">${rows.map(([k,v])=>`<div><span>${k}</span><i><b style="width:${clamp(v*100,8,100)}%"></b></i></div>`).join('')}</div>`;
  }

  function showMenu(){
    state='menu';keys={};race=null;currentMap=null;vehicle=null;routeSegments=[];if(trackMesh?.b&&renderer.gl.deleteBuffer)renderer.gl.deleteBuffer(trackMesh.b);trackMesh=null;environment=[];camera.followedVehicleId=null;camera.vehicleVisible=false;setCanvasVisible(false);
    screen(`<section id="main-menu" class="panel hero">
      <div class="hero-stripe"></div><div class="eyebrow">${CFG.subtitle}</div><h1>${CFG.title}</h1>
      <p class="lead">A focused 3D offroad time trial. Read the line, let the suspension work and carry speed across loose terrain.</p>
      <div class="feature-row"><span>2 VEHICLES</span><span>2 ROUTES</span><span>4-WHEEL SUSPENSION</span></div>
      <div class="hero-actions"><button data-testid="start-race-btn" class="primary big">Start time trial <b>→</b></button><button data-testid="garage-btn">Garage & upgrades</button></div>
      <div class="menu-meta">${creditsSpan()}<span><kbd>WASD</kbd> / arrows · third-person 3D</span></div>
    </section>`);
  }

  function showVehicleSelect(){
    state='vehicle_select';setCanvasVisible(false);
    screen(`<section id="vehicle-select" class="panel wide"><header><div><div class="eyebrow">STEP 01 · VEHICLE</div><h2>Choose your rig</h2><p class="section-copy">Different mass, torque, grip and suspension change the way each vehicle attacks the same terrain.</p></div>${creditsSpan()}</header>
      <div class="cards">${garage.vehicles.map(v=>{const st=appliedStats(v),selected=garage.selectedVehicleId===v.id;return `<article class="card vehicle-card ${selected?'selected':''}" data-testid="vehicle-card" data-vehicle-id="${v.id}">
        <div class="vehicle-swatch ${v.shape}" style="--sw:${rgbCss(v.color)}"><div class="swatch-grid"></div><span>${v.shape.toUpperCase()}</span></div>
        <div class="card-title"><div><h3>${v.name}</h3><p>${v.blurb}</p></div><div class="tag ${v.owned?'owned':'locked'}">${v.owned?'OWNED':`${v.price} CR`}</div></div>
        ${performanceBars(st)}
        <button data-testid="select-vehicle-btn" data-vehicle-id="${v.id}" ${v.owned?'':'disabled'} class="${selected?'selected-btn':''}">${selected?'✓ Selected':v.owned?'Select vehicle':'Buy in garage'}</button>
      </article>`}).join('')}</div>
      <footer><button data-testid="vehicle-select-back-btn">← Main menu</button><button data-testid="vehicle-continue-btn" class="primary">Continue to maps →</button></footer></section>`);
  }

  function mapPreview(m){
    const pts=routePoints(m);const minX=-48,maxX=48,minZ=-52,maxZ=52;const pos=p=>({l:8+(p.x-minX)/(maxX-minX)*84,t:8+(p.z-minZ)/(maxZ-minZ)*84});
    let lines='';for(let i=0;i<pts.length-1;i++){const a=pos(pts[i]),b=pos(pts[i+1]),dx=b.l-a.l,dy=b.t-a.t,len=Math.hypot(dx,dy),ang=Math.atan2(dy,dx)*180/Math.PI;lines+=`<i class="route-line" style="left:${a.l}%;top:${a.t}%;width:${len}%;transform:rotate(${ang}deg)"></i>`;}
    const nodes=pts.map((p,i)=>{const q=pos(p);const cls=i===0?'start':i===pts.length-1?'finish':'cp';return `<b class="route-node ${cls}" style="left:${q.l}%;top:${q.t}%">${i===0?'S':i===pts.length-1?'F':i}</b>`}).join('');
    return `<div class="route-mini ${m.terrain}">${lines}${nodes}<span class="contour c1"></span><span class="contour c2"></span></div>`;
  }

  function showMapSelect(){
    state='map_select';setCanvasVisible(false);
    screen(`<section id="map-select" class="panel wide"><header><div><div class="eyebrow">STEP 02 · ROUTE</div><h2>Choose the stage</h2><p class="section-copy">Every route has a different line, terrain profile, obstacle layout and surface mix.</p></div>${creditsSpan()}</header>
      <div class="cards mapcards">${CFG.maps.map(m=>`<article class="card map-card ${selectedMapId===m.id?'selected':''}" data-testid="map-card" data-map-id="${m.id}">
        ${mapPreview(m)}<div class="card-title"><div><h3>${m.name}</h3><p>${m.desc}</p></div><div class="tag">${m.difficulty}</div></div>
        <div class="map-facts"><span><b>${m.checkpoints.length}</b> checkpoints</span><span><b>${m.surface.length}</b> surfaces</span><span><b>${m.obstacles.length}</b> solid obstacles</span></div>
        <div class="surface-list">${m.surface.map(s=>`<span>${s}</span>`).join('')}</div>
        <button data-testid="select-map-btn" data-map-id="${m.id}" class="${selectedMapId===m.id?'selected-btn':''}">${selectedMapId===m.id?'✓ Route selected':'Select route'}</button>
      </article>`).join('')}</div>
      <footer><button data-testid="map-select-back-btn">← Vehicles</button><button data-testid="start-time-trial-btn" class="primary" ${selectedMapId?'':'disabled'}>Load time trial →</button></footer></section>`);
  }

  function showGarage(){
    state='garage';setCanvasVisible(false);
    screen(`<section id="garage" class="panel wide garage"><header><div><div class="eyebrow">WORKSHOP</div><h2>Garage</h2><p class="section-copy">Buy a second rig or improve the vehicle you already own. Upgrades feed directly into the driving physics.</p></div>${creditsSpan()}</header>
      <div class="cards">${garage.vehicles.map(v=>{const st=appliedStats(v);return `<article class="card garage-card" data-testid="vehicle-card" data-vehicle-id="${v.id}">
        <div class="garage-head"><div><div class="tag ${v.owned?'owned':'locked'}">${v.owned?'OWNED':`PRICE ${v.price} CR`}</div><h3>${v.name}</h3><p>${v.blurb}</p></div><div class="vehicle-icon" style="--sw:${rgbCss(v.color)}"></div></div>
        <div class="stats"><span>Mass <b>${st.mass} kg</b></span><span>Power <b>${Math.round(st.power)}</b></span><span>Braking <b>${st.braking.toFixed(1)}</b></span><span>Steering <b>${st.steering.toFixed(2)}</b></span><span>Grip <b>${st.grip.toFixed(2)}</b></span><span>Top speed <b>${Math.round(st.maxSpeed*3.6)} km/h</b></span><span>Suspension <b>${st.suspension.toFixed(1)}</b></span></div>
        ${v.owned?`<div class="upgrades">${v.upgrades.map(u=>`<button data-testid="upgrade-btn" data-vehicle-id="${v.id}" data-upgrade-id="${u.id}" ${garage.credits<u.cost||u.level>=3?'disabled':''}><span><strong>${u.name}</strong><small>${u.desc} · Lv ${u.level}/3</small></span><b>${u.level>=3?'MAX':`${u.cost} CR`}</b></button>`).join('')}</div>`:`<button data-testid="buy-vehicle-btn" data-vehicle-id="${v.id}" class="primary buy" ${garage.credits<v.price?'disabled':''}>Buy ${v.name} · ${v.price} CR</button>`}
      </article>`}).join('')}</div><footer><button data-testid="garage-back-btn">← Back to menu</button></footer></section>`);
  }

  function prepareRace(){
    keys={};clearTimeout(loadingTimer);
    const m=mapById(selectedMapId),base=vehicleById(garage.selectedVehicleId),st=appliedStats(base),forward=courseForward(m),yaw=Math.atan2(forward.x,forward.z);
    currentMap=m;routeSegments=createRouteSegments(m);if(trackMesh?.b&&renderer.gl.deleteBuffer)renderer.gl.deleteBuffer(trackMesh.b);trackMesh=createTrackMesh(renderer,m,routeSegments);environment=createEnvironment(m);
    let tmin=Infinity,tmax=-Infinity;for(let x=-58;x<=58;x+=3)for(let z=-58;z<=58;z+=3){const h=terrainHeight(m.terrain,x,z);tmin=Math.min(tmin,h);tmax=Math.max(tmax,h);}currentTerrainBounds={minHeight:tmin,maxHeight:tmax};
    const sy=terrainHeight(m.terrain,m.spawn[0],m.spawn[2]);
    vehicle={
      id:base.id,position:vec3(m.spawn[0],sy+1.12,m.spawn[2]),rotation:vec3(0,yaw,0),forward:copy3(forward),velocity:vec3(),speed:0,lateralSpeed:0,verticalVelocity:0,
      throttle:0,brake:0,steering:0,grounded:true,surfaceType:surfaceAt(m,m.spawn[0],m.spawn[2]),collision:{active:false,objectId:null},
      chassis:{height:1.12,pitch:0,roll:0},wheels:[],appliedStats:st,wheelSpin:0,bodyVelY:0,pitchVel:0,rollVel:0,collisionHold:0
    };
    updateSuspension(.016,true);
    race={raceId:`dustline-${Date.now()}-${Math.floor(Math.random()*100000)}`,mode:'time_trial',phase:'loading',playerCount:1,competitorCount:0,vehicleId:base.id,mapId:m.id,elapsedTime:0,finalTime:null,finished:false,currentCheckpointIndex:0,passedCheckpointIds:[],finishEligible:false,reward:0,rewardGranted:false,startAt:0};
    renderer.makeTerrain((x,z)=>terrainHeight(m.terrain,x,z));
    camera.position=vec3(vehicle.position.x-forward.x*8.6,vehicle.position.y+4.6,vehicle.position.z-forward.z*8.6);camera.target={x:vehicle.position.x+forward.x*2.5,y:vehicle.position.y+.25,z:vehicle.position.z+forward.z*2.5};camera.forward=normalize({x:camera.target.x-camera.position.x,y:camera.target.y-camera.position.y,z:camera.target.z-camera.position.z});camera.followedVehicleId=base.id;camera.vehicleVisible=true;
    visibleMapObjectCount=2+environment.length+m.obstacles.length+(m.checkpoints.length+1)*3+Math.ceil(routeSegments.length/2)*2;
    showLoading(3);
    const tick=count=>{if(!race||race.phase!=='loading')return;if(count<=0){race.phase='running';race.startAt=performance.now();state='racing';showRaceHUD();say('GO!');return;}showLoading(count);loadingTimer=setTimeout(()=>tick(count-1),520);};
    loadingTimer=setTimeout(()=>tick(2),520);
  }

  function showLoading(count){
    state='loading';setCanvasVisible(true);
    screen(`<section class="loading-overlay"><div class="countdown">${count}</div><div class="eyebrow">${mapById(selectedMapId).name}</div><h2>Settle the suspension</h2><p>Timer starts on GO. Follow the amber gates in order.</p><div class="loading-track"><i></i></div></section>`);
  }

  function showRaceHUD(){
    setCanvasVisible(true);
    screen(`<section id="race-screen" class="race-ui">
      <div class="race-top"><div class="timer-block"><span>STAGE TIME</span><b data-testid="race-timer">00:00.00</b></div><div class="route-block"><span>ROUTE</span><b id="cp-hud">0 / ${currentMap.checkpoints.length}</b><i class="stage-progress"><b id="stage-progress-fill"></b></i></div><div class="distance-block"><span>NEXT GATE</span><b id="distance-hud">-- m</b></div><button data-testid="race-exit-btn" class="danger">Exit stage</button></div>
      <div class="race-bottom"><div class="speed-tile"><span>SPEED</span><b id="speed-hud">0</b><small>km/h</small></div><div><span>SURFACE</span><b id="surface-hud">${vehicle.surfaceType}</b><small id="grip-hud">grip 100%</small></div><div class="suspension-widget"><span>SUSPENSION</span><div class="wheel-bars" id="wheel-bars">${['FL','FR','RL','RR'].map(x=>`<i><b></b><em>${x}</em></i>`).join('')}</div></div><div class="controls"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><span>drive</span></div></div>
      <div id="next-gate" class="gate-note"><b>CHECKPOINT 1</b><span>Stay on line</span></div>
    </section>`);
  }

  function finishRace(){
    if(!race||race.finished)return;
    race.finished=true;race.phase='finished';race.finalTime=race.elapsedTime;race.reward=220+currentMap.checkpoints.length*20;race.rewardGranted=true;garage.credits+=race.reward;vehicle.throttle=vehicle.brake=vehicle.steering=0;keys={};state='result';showResult();
  }

  function showResult(){
    const v=vehicleById(race.vehicleId),m=mapById(race.mapId);setCanvasVisible(true);
    screen(`<section id="result-screen" class="panel result"><div class="finish-badge">FINISH</div><div class="eyebrow">STAGE COMPLETE</div><h2>${m.name}</h2><p class="section-copy">All ${m.checkpoints.length} checkpoints cleared in order.</p><div class="result-time"><span>FINAL TIME</span><b data-testid="final-time">${fmt(race.finalTime)}</b></div><div class="result-grid"><span>Vehicle<b>${v.name}</b></span><span>Reward<b data-testid="result-reward">+${race.reward} CR</b></span><span>Balance<b>${garage.credits} CR</b></span></div><div class="hero-actions"><button data-testid="result-menu-btn">Main menu</button><button data-testid="result-retry-btn" class="primary">Race again →</button></div></section>`);
  }

  function bindUI(){
    ui.querySelector('[data-testid="start-race-btn"]')?.addEventListener('click',showVehicleSelect);
    ui.querySelector('[data-testid="garage-btn"]')?.addEventListener('click',showGarage);
    ui.querySelector('[data-testid="vehicle-select-back-btn"]')?.addEventListener('click',showMenu);
    ui.querySelector('[data-testid="garage-back-btn"]')?.addEventListener('click',showMenu);
    ui.querySelectorAll('[data-testid="select-vehicle-btn"]').forEach(b=>b.addEventListener('click',()=>{const v=vehicleById(b.dataset.vehicleId);if(!v.owned){say('Purchase this vehicle in the garage first');return;}garage.selectedVehicleId=v.id;showVehicleSelect();}));
    ui.querySelector('[data-testid="vehicle-continue-btn"]')?.addEventListener('click',()=>{if(vehicleById(garage.selectedVehicleId)?.owned)showMapSelect();});
    ui.querySelector('[data-testid="map-select-back-btn"]')?.addEventListener('click',showVehicleSelect);
    ui.querySelectorAll('[data-testid="select-map-btn"]').forEach(b=>b.addEventListener('click',()=>{selectedMapId=b.dataset.mapId;showMapSelect();}));
    ui.querySelector('[data-testid="start-time-trial-btn"]')?.addEventListener('click',()=>{if(selectedMapId)prepareRace();});
    ui.querySelectorAll('[data-testid="buy-vehicle-btn"]').forEach(b=>b.addEventListener('click',()=>{const v=vehicleById(b.dataset.vehicleId);if(v.owned){say('Already owned');return;}if(garage.credits<v.price){say('Not enough credits');return;}garage.credits-=v.price;v.owned=true;say(`${v.name} purchased`);showGarage();}));
    ui.querySelectorAll('[data-testid="upgrade-btn"]').forEach(b=>b.addEventListener('click',()=>{const v=vehicleById(b.dataset.vehicleId),u=v?.upgrades.find(x=>x.id===b.dataset.upgradeId);if(!v?.owned||!u||u.level>=3)return;if(garage.credits<u.cost){say('Not enough credits');return;}garage.credits-=u.cost;u.level++;say(`${u.name} upgraded to level ${u.level}`);showGarage();}));
    ui.querySelector('[data-testid="race-exit-btn"]')?.addEventListener('click',()=>{keys={};showMenu();});
    ui.querySelector('[data-testid="result-menu-btn"]')?.addEventListener('click',showMenu);
    ui.querySelector('[data-testid="result-retry-btn"]')?.addEventListener('click',prepareRace);
  }

  function updateSuspension(dt,instant=false){
    if(!vehicle||!currentMap)return;
    const st=vehicle.appliedStats,yaw=vehicle.rotation.y,c=Math.cos(yaw),s=Math.sin(yaw),travel=.42+(st.suspension-7)*.036,rest=.60+(st.suspension-7)*.018,wheelRadius=.39;
    const offsets=[[-.94,1.38],[.94,1.38],[-.94,-1.34],[.94,-1.34]],grounds=[];
    for(const [ox,oz] of offsets){const wx=vehicle.position.x+ox*c+oz*s,wz=vehicle.position.z-ox*s+oz*c,gy=terrainHeight(currentMap.terrain,wx,wz);grounds.push({x:wx,z:wz,y:gy});}
    const front=(grounds[0].y+grounds[1].y)/2,rear=(grounds[2].y+grounds[3].y)/2,left=(grounds[0].y+grounds[2].y)/2,right=(grounds[1].y+grounds[3].y)/2,avg=grounds.reduce((a,g)=>a+g.y,0)/4;
    const desiredY=avg+1.06+(st.suspension-7)*.018;
    const desiredPitch=clamp(Math.atan2(rear-front,2.72),-.34,.34);
    const turnLean=clamp(-vehicle.steering*Math.abs(vehicle.speed)/st.maxSpeed*.075,-.07,.07);
    const desiredRoll=clamp(Math.atan2(left-right,1.88)+turnLean,-.30,.30);
    if(instant){vehicle.position.y=desiredY;vehicle.rotation.x=desiredPitch;vehicle.rotation.z=desiredRoll;}
    else{
      const spring=10.5+st.suspension*.45,damping=6.8+st.suspension*.23;
      vehicle.bodyVelY+=(desiredY-vehicle.position.y)*spring*dt;vehicle.bodyVelY*=Math.exp(-damping*dt);vehicle.position.y+=vehicle.bodyVelY*dt;
      vehicle.pitchVel+=(desiredPitch-vehicle.rotation.x)*12*dt;vehicle.pitchVel*=Math.exp(-7.2*dt);vehicle.rotation.x+=vehicle.pitchVel*dt;
      vehicle.rollVel+=(desiredRoll-vehicle.rotation.z)*11*dt;vehicle.rollVel*=Math.exp(-7.4*dt);vehicle.rotation.z+=vehicle.rollVel*dt;
    }
    vehicle.chassis.height=vehicle.position.y-avg;vehicle.chassis.pitch=vehicle.rotation.x;vehicle.chassis.roll=vehicle.rotation.z;
    vehicle.wheels=grounds.map((g,i)=>{
      const anchorY=vehicle.position.y-.26 + (i<2?-vehicle.rotation.x*.80:vehicle.rotation.x*.80) + (i%2===0?vehicle.rotation.z*.54:-vehicle.rotation.z*.54);
      const extension=anchorY-g.y-wheelRadius;
      const grounded=extension<=rest+travel+.08;
      const compression=clamp(1-(extension-(rest-travel*.55))/(travel*1.55),0,1);
      const wy=grounded?g.y+wheelRadius:anchorY-(rest+travel);
      return {id:['front-left','front-right','rear-left','rear-right'][i],position:{x:g.x,y:wy,z:g.z},contactPoint:grounded?{x:g.x,y:g.y,z:g.z}:null,grounded,suspensionCompression:compression,suspensionTravel:travel};
    });
    vehicle.grounded=vehicle.wheels.filter(w=>w.grounded).length>=2;
  }

  function resolveCollisions(dt){
    vehicle.collisionHold=Math.max(0,(vehicle.collisionHold||0)-dt);
    if(vehicle.collisionHold<=0)vehicle.collision={active:false,objectId:null};
    const limit=54.5;
    if(vehicle.position.x<-limit){vehicle.position.x=-limit;vehicle.collision={active:true,objectId:'course-west-edge'};vehicle.collisionHold=.22;vehicle.speed*=-.12;}
    else if(vehicle.position.x>limit){vehicle.position.x=limit;vehicle.collision={active:true,objectId:'course-east-edge'};vehicle.collisionHold=.22;vehicle.speed*=-.12;}
    if(vehicle.position.z<-limit){vehicle.position.z=-limit;vehicle.collision={active:true,objectId:'course-south-edge'};vehicle.collisionHold=.22;vehicle.speed*=-.12;}
    else if(vehicle.position.z>limit){vehicle.position.z=limit;vehicle.collision={active:true,objectId:'course-north-edge'};vehicle.collisionHold=.22;vehicle.speed*=-.12;}
    for(let i=0;i<currentMap.obstacles.length;i++){
      const o=currentMap.obstacles[i],dx=vehicle.position.x-o[0],dz=vehicle.position.z-o[1],dist=Math.hypot(dx,dz),min=1.20+o[2];
      if(dist<min){const nx=dx/(dist||1),nz=dz/(dist||1);vehicle.position.x=o[0]+nx*min;vehicle.position.z=o[1]+nz*min;const impact=Math.abs(vehicle.speed);vehicle.speed*=-clamp(.08+impact*.007,.10,.25);vehicle.lateralSpeed*=.25;vehicle.collision={active:true,objectId:`obstacle-${i}`};vehicle.collisionHold=.24;break;}
    }
  }

  function updateVehicle(dt){
    if(!race||race.phase!=='running'||!vehicle)return;
    const st=vehicle.appliedStats,forwardInput=(keys.KeyW||keys.ArrowUp)?1:0,backInput=(keys.KeyS||keys.ArrowDown)?1:0,steerInput=((keys.KeyD||keys.ArrowRight)?1:0)-((keys.KeyA||keys.ArrowLeft)?1:0);
    vehicle.steering=expLerp(vehicle.steering,steerInput,9.5,dt);
    let drive=0,brake=0;if(forwardInput)drive=1;if(backInput){if(vehicle.speed>1.3)brake=1;else drive=-1;}
    vehicle.throttle=expLerp(vehicle.throttle,drive,7.2,dt);vehicle.brake=expLerp(vehicle.brake,brake,10,dt);
    vehicle.surfaceType=surfaceAt(currentMap,vehicle.position.x,vehicle.position.z);const surface=surfacePhysics(vehicle.surfaceType),grip=st.grip*surface.grip;
    const fx=Math.sin(vehicle.rotation.y),fz=Math.cos(vehicle.rotation.y),frontH=terrainHeight(currentMap.terrain,vehicle.position.x+fx*1.7,vehicle.position.z+fz*1.7),rearH=terrainHeight(currentMap.terrain,vehicle.position.x-fx*1.7,vehicle.position.z-fz*1.7),slope=(frontH-rearH)/3.4;
    const engineAcc=(st.power/st.mass)*66*surface.power*(1-clamp(Math.abs(vehicle.speed)/st.maxSpeed,0,1)*.55);
    let longitudinal=vehicle.throttle*engineAcc;
    if(vehicle.brake>0)longitudinal-=Math.sign(vehicle.speed||1)*st.braking*vehicle.brake;
    longitudinal-=Math.sin(Math.atan(slope))*3.8;
    longitudinal-=vehicle.speed*(surface.drag+.035*Math.abs(vehicle.speed)/st.maxSpeed);
    vehicle.speed=clamp(vehicle.speed+longitudinal*dt,-st.maxSpeed*.34,st.maxSpeed);const cornerRatio=clamp(Math.abs(vehicle.speed)/st.maxSpeed,0,1);vehicle.speed*=Math.exp(-Math.abs(vehicle.steering)*(.14+.30*cornerRatio)*dt);
    if(Math.abs(vehicle.speed)<.04&&!drive)vehicle.speed=0;
    const speedRatio=clamp(Math.abs(vehicle.speed)/st.maxSpeed,0,1),steerAuthority=(.22+.78*clamp(Math.abs(vehicle.speed)/11,0,1))*grip;
    const motionSteer=clamp(Math.abs(vehicle.speed)/2.4,0,1);const yawRate=vehicle.steering*st.steering*steerAuthority*(1-.06*speedRatio)*motionSteer*Math.sign(vehicle.speed||1);
    vehicle.rotation.y+=yawRate*dt;
    const desiredLateral=-vehicle.steering*Math.abs(vehicle.speed)*(.05+.10*(1-clamp(grip,0,1.2)));
    vehicle.lateralSpeed=expLerp(vehicle.lateralSpeed,desiredLateral,4.6*grip+1.1,dt);
    vehicle.forward.x=Math.sin(vehicle.rotation.y);vehicle.forward.z=Math.cos(vehicle.rotation.y);
    const rightX=vehicle.forward.z,rightZ=-vehicle.forward.x;
    vehicle.velocity.x=vehicle.forward.x*vehicle.speed+rightX*vehicle.lateralSpeed;vehicle.velocity.z=vehicle.forward.z*vehicle.speed+rightZ*vehicle.lateralSpeed;
    vehicle.position.x+=vehicle.velocity.x*dt;vehicle.position.z+=vehicle.velocity.z*dt;
    resolveCollisions(dt);updateSuspension(dt);
    vehicle.velocity.y=vehicle.bodyVelY;vehicle.wheelSpin+=vehicle.speed*dt*2.5;
    const next=currentMap.checkpoints[race.currentCheckpointIndex];
    if(next&&Math.hypot(vehicle.position.x-next[0],vehicle.position.z-next[2])<14.0){const id=`cp-${race.currentCheckpointIndex}`;if(!race.passedCheckpointIds.includes(id)){race.passedCheckpointIds.push(id);race.currentCheckpointIndex++;race.finishEligible=race.currentCheckpointIndex>=currentMap.checkpoints.length;say(race.finishEligible?'Finish unlocked!':`Checkpoint ${race.currentCheckpointIndex} cleared`);}}
    if(race.currentCheckpointIndex>=currentMap.checkpoints.length)race.finishEligible=true;
    if(race.finishEligible&&Math.hypot(vehicle.position.x-currentMap.finish[0],vehicle.position.z-currentMap.finish[2])<13.0)finishRace();
  }

  function updateCamera(dt){
    if(!vehicle)return;const f=vehicle.forward,speedRatio=clamp(Math.abs(vehicle.speed)/vehicle.appliedStats.maxSpeed,0,1),distance=8.0+speedRatio*2.1,height=4.15+speedRatio*.55,side=-vehicle.steering*speedRatio*.72;
    let desired={x:vehicle.position.x-f.x*distance+f.z*side,y:vehicle.position.y+height,z:vehicle.position.z-f.z*distance-f.x*side};
    const ground=terrainHeight(currentMap.terrain,desired.x,desired.z);desired.y=Math.max(desired.y,ground+1.3);
    camera.position.x=expLerp(camera.position.x,desired.x,4.4,dt);camera.position.y=expLerp(camera.position.y,desired.y,3.2,dt);camera.position.z=expLerp(camera.position.z,desired.z,4.4,dt);
    const target={x:vehicle.position.x+f.x*(2.4+speedRatio*1.2),y:vehicle.position.y+.25,z:vehicle.position.z+f.z*(2.4+speedRatio*1.2)};
    camera.target.x=expLerp(camera.target.x,target.x,7,dt);camera.target.y=expLerp(camera.target.y,target.y,7,dt);camera.target.z=expLerp(camera.target.z,target.z,7,dt);camera.forward=normalize({x:camera.target.x-camera.position.x,y:camera.target.y-camera.position.y,z:camera.target.z-camera.position.z});
  }

  function drawBeamBetween(a,b,width,color,glow=0){const dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,len=Math.hypot(dx,dy,dz),yaw=Math.atan2(dx,dz),pitch=-Math.atan2(dy,Math.hypot(dx,dz));renderer.draw(renderer.cube,{x:(a.x+b.x)/2,y:(a.y+b.y)/2,z:(a.z+b.z)/2},{x:width,y:width,z:len},color,{x:pitch,y:yaw,z:0},glow);}
  function gateHeading(index,finish=false){const pts=routePoints(currentMap),j=finish?pts.length-1:index+1,prev=pts[Math.max(0,j-1)],next=pts[Math.min(pts.length-1,j+1)];return Math.atan2(next.x-prev.x,next.z-prev.z);}
  function drawGate(x,z,y,color,scale=1,active=false,yaw=0){const span=2.35*scale,rx=Math.cos(yaw),rz=-Math.sin(yaw),left={x:x-rx*span,y:y+.95,z:z-rz*span},right={x:x+rx*span,y:y+.95,z:z+rz*span},rot={x:0,y:yaw,z:0};renderer.draw(renderer.cube,left,{x:.16,y:1.9,z:.16},color,rot,active?.25:0);renderer.draw(renderer.cube,right,{x:.16,y:1.9,z:.16},color,rot,active?.25:0);renderer.draw(renderer.cube,{x,y:y+1.9,z},{x:4.85*scale,y:.14,z:.14},color,rot,active?.3:0);renderer.draw(renderer.cube,{x:left.x,y:y+.18,z:left.z},{x:.46,y:.12,z:.46},[.10,.10,.10],rot);renderer.draw(renderer.cube,{x:right.x,y:y+.18,z:right.z},{x:.46,y:.12,z:.46},[.10,.10,.10],rot);if(active){const fx=Math.sin(yaw),fz=Math.cos(yaw);for(const side of [-1,1])renderer.draw(renderer.cube,{x:x+rx*side*1.05-fx*.10,y:y+.38,z:z+rz*side*1.05-fz*.10},{x:.32,y:.06,z:.48},[1,.70,.18],rot,.32);}}

  function drawVehicle(){
    const base=vehicle.position,r=vehicle.rotation,v=vehicleById(vehicle.id),c=v.color,t=v.trim;
    renderer.draw(renderer.cube,{x:base.x,y:base.y-.05,z:base.z},{x:v.shape==='truck'?2.12:1.88,y:.42,z:v.shape==='truck'?3.42:2.86},c,r);
    if(v.shape==='buggy'){
      renderer.draw(renderer.cube,{x:base.x,y:base.y+.43,z:base.z-.14},{x:1.30,y:.18,z:1.46},t,r);
      renderer.draw(renderer.cube,{x:base.x,y:base.y+.78,z:base.z-.18},{x:1.18,y:.12,z:1.20},[.18,.20,.21],r);
      renderer.draw(renderer.cube,{x:base.x,y:base.y+.64,z:base.z+.48},{x:1.02,y:.46,z:.08},t,r);
      renderer.draw(renderer.cube,{x:base.x,y:base.y-.20,z:base.z+1.52},{x:1.72,y:.18,z:.20},t,r);
    }else{
      renderer.draw(renderer.cube,{x:base.x,y:base.y+.58,z:base.z+.38},{x:1.62,y:.82,z:1.38},c.map(x=>x*.78),r);
      renderer.draw(renderer.cube,{x:base.x,y:base.y+.76,z:base.z+.45},{x:1.36,y:.40,z:1.00},[.055,.105,.12],r);
      renderer.draw(renderer.cube,{x:base.x,y:base.y+.38,z:base.z-1.12},{x:1.72,y:.24,z:.86},t,r);
      renderer.draw(renderer.cube,{x:base.x,y:base.y-.10,z:base.z+1.78},{x:1.88,y:.22,z:.18},t,r);
    }
    const bodyAnchors=[[-.82,.10,1.20],[.82,.10,1.20],[-.82,.10,-1.18],[.82,.10,-1.18]];
    vehicle.wheels.forEach((w,i)=>{
      const [ox,oy,oz]=bodyAnchors[i],cy=Math.cos(r.y),sy=Math.sin(r.y),anchor={x:base.x+ox*cy+oz*sy,y:base.y+oy,z:base.z-ox*sy+oz*cy};drawBeamBetween(anchor,w.position,.055,[.38,.40,.40]);
      renderer.draw(renderer.cyl,w.position,{x:.50,y:.84,z:.84},[.045,.048,.05],{x:0,y:r.y+(i<2?vehicle.steering*.40:0),z:vehicle.wheelSpin});
      renderer.draw(renderer.cyl,w.position,{x:.515,y:.34,z:.34},[.35,.36,.34],{x:0,y:r.y+(i<2?vehicle.steering*.40:0),z:vehicle.wheelSpin});
    });
    renderer.draw(renderer.cube,{x:base.x,y:base.y-.48,z:base.z},{x:1.56,y:.08,z:2.48},[.11,.11,.10],r);
    const headY=base.y+.14,frontZ=1.46,fx=Math.sin(r.y),fz=Math.cos(r.y),rx=Math.cos(r.y),rz=-Math.sin(r.y);
    for(const side of [-.62,.62])renderer.draw(renderer.cube,{x:base.x+fx*frontZ+rx*side,y:headY,z:base.z+fz*frontZ+rz*side},{x:.18,y:.13,z:.08},[1,.70,.28],r,.55);
  }

  function renderWorld(){
    if(!currentMap||!vehicle||!race)return;const speedRatio=clamp(Math.abs(vehicle.speed)/vehicle.appliedStats.maxSpeed,0,1);renderer.begin(camera,58+speedRatio*7);
    const terrainColor=currentMap.terrain==='canyon'?[.72,.43,.22]:[.62,.50,.29];renderer.draw(renderer.terrain,vec3(),{x:1,y:1,z:1},terrainColor);
    const rutColor=currentMap.terrain==='canyon'?[.24,.145,.075]:[.23,.19,.12];if(trackMesh)renderer.draw(trackMesh,vec3(),{x:1,y:1,z:1},rutColor);
    for(let i=0;i<routeSegments.length;i+=2){const seg=routeSegments[i],rx=Math.cos(seg.yaw),rz=-Math.sin(seg.yaw),edge=seg.width*.64;for(const side of [-1,1]){const mx=seg.x+rx*edge*side,mz=seg.z+rz*edge*side,mh=terrainHeight(currentMap.terrain,mx,mz);renderer.draw(renderer.cube,{x:mx,y:mh+.16,z:mz},{x:.10,y:.16,z:.28},i%4===0?[.95,.48,.14]:[.62,.42,.19],{x:0,y:seg.yaw,z:0},.08);}}
    for(const p of environment){const h=terrainHeight(currentMap.terrain,p.x,p.z);if(p.kind==='pillar'){renderer.draw(renderer.cube,{x:p.x,y:h+2.0*p.scale,z:p.z},{x:1.0*p.scale,y:4.0*p.scale,z:1.1*p.scale},[.48,.27,.15],{x:.06,y:p.yaw,z:.04});}
      else if(p.kind==='marker'){renderer.draw(renderer.cube,{x:p.x,y:h+1.05,z:p.z},{x:.12,y:2.1,z:.12},[.18,.17,.15]);renderer.draw(renderer.cube,{x:p.x+.34,y:h+1.65,z:p.z},{x:.65,y:.34,z:.05},[.90,.46,.12],{x:0,y:p.yaw,z:0});}
      else{renderer.draw(renderer.cube,{x:p.x,y:h+.55*p.scale,z:p.z},{x:1.4*p.scale,y:1.1*p.scale,z:1.15*p.scale},currentMap.terrain==='canyon'?[.44,.29,.18]:[.40,.34,.24],{x:.14,y:p.yaw,z:.10});}}
    currentMap.obstacles.forEach((o,i)=>{const h=terrainHeight(currentMap.terrain,o[0],o[1]),col=i%2?[.20,.16,.14]:[.29,.23,.18];renderer.draw(renderer.cube,{x:o[0],y:h+o[2]*.72,z:o[1]},{x:o[2]*1.1,y:o[2]*1.45,z:o[2]},col,{x:.12+(i%3)*.08,y:.4*i,z:.08});});
    currentMap.checkpoints.forEach((p,i)=>{const h=terrainHeight(currentMap.terrain,p[0],p[2]),done=i<race.currentCheckpointIndex,active=i===race.currentCheckpointIndex;drawGate(p[0],p[2],h,done?[.22,.65,.38]:active?[1,.62,.12]:[.45,.34,.19],1.28,active,gateHeading(i));});
    const f=currentMap.finish,fh=terrainHeight(currentMap.terrain,f[0],f[2]);drawGate(f[0],f[2],fh,race.finishEligible?[.23,.92,.52]:[.27,.28,.27],1.34,race.finishEligible,gateHeading(currentMap.checkpoints.length,true));
    drawVehicle();
  }

  function updateHUD(){
    if(!race||race.phase!=='running')return;
    const timer=ui.querySelector('[data-testid="race-timer"]');if(timer)timer.textContent=fmt(race.elapsedTime);
    const cp=ui.querySelector('#cp-hud');if(cp)cp.textContent=`${race.currentCheckpointIndex} / ${currentMap.checkpoints.length}`;const prog=ui.querySelector('#stage-progress-fill');if(prog){const total=currentMap.checkpoints.length+1,base=race.currentCheckpointIndex/total;const target=race.finishEligible?{x:currentMap.finish[0],z:currentMap.finish[2]}:{x:currentMap.checkpoints[race.currentCheckpointIndex][0],z:currentMap.checkpoints[race.currentCheckpointIndex][2]};const prev=race.currentCheckpointIndex===0?{x:currentMap.spawn[0],z:currentMap.spawn[2]}:{x:currentMap.checkpoints[race.currentCheckpointIndex-1][0],z:currentMap.checkpoints[race.currentCheckpointIndex-1][2]};const leg=Math.max(1,distance2D(prev,target)),legRemain=clamp(distance2D(vehicle.position,target)/leg,0,1);prog.style.width=`${clamp((base+(1-legRemain)/total)*100,0,100)}%`; }
    const sp=ui.querySelector('#speed-hud');if(sp)sp.textContent=Math.round(Math.abs(vehicle.speed)*3.6);
    const sf=ui.querySelector('#surface-hud');if(sf)sf.textContent=vehicle.surfaceType;
    const grip=ui.querySelector('#grip-hud');if(grip)grip.textContent=`grip ${Math.round(surfacePhysics(vehicle.surfaceType).grip*100)}%`;
    const target=race.finishEligible?{x:currentMap.finish[0],z:currentMap.finish[2]}:{x:currentMap.checkpoints[race.currentCheckpointIndex][0],z:currentMap.checkpoints[race.currentCheckpointIndex][2]};
    const dist=ui.querySelector('#distance-hud');if(dist)dist.textContent=`${Math.round(distance2D(vehicle.position,target))} m`;
    const note=ui.querySelector('#next-gate');if(note)note.innerHTML=race.finishEligible?'<b>FINISH UNLOCKED</b><span>Bring it home</span>':`<b>CHECKPOINT ${race.currentCheckpointIndex+1}</b><span>${Math.round(distance2D(vehicle.position,target))} m</span>`;
    ui.querySelectorAll('#wheel-bars i b').forEach((b,i)=>{b.style.height=`${Math.round((vehicle.wheels[i]?.suspensionCompression||0)*100)}%`;});
  }

  function loop(now){
    const rawDt=Math.min(.35,Math.max(.001,(now-last)/1000||.016));last=now;
    if(race&&race.phase==='running'){
      race.elapsedTime=Math.max(0,(now-race.startAt)/1000);
      let remaining=rawDt;
      while(remaining>0){const step=Math.min(1/60,remaining);updateVehicle(step);updateCamera(step);remaining-=step;}
      updateHUD();
    }else if(vehicle&&currentMap&&(state==='loading'||state==='result'))updateCamera(Math.min(rawDt,.08));
    if(currentMap&&vehicle&&race&&(state==='loading'||state==='racing'||state==='result'))renderWorld();
    raf=requestAnimationFrame(loop);
  }

  const keydown=e=>{if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){keys[e.code]=true;e.preventDefault();}};
  const keyup=e=>{keys[e.code]=false;};
  const loseFocus=()=>{keys={};if(vehicle){vehicle.throttle=0;vehicle.brake=0;vehicle.steering=0;}};
  window.addEventListener('keydown',keydown,{passive:false});window.addEventListener('keyup',keyup);window.addEventListener('blur',loseFocus);

  window.__game={getState:()=>({ready:true,gameState:state,credits:garage.credits,selectedVehicleId:garage.selectedVehicleId,selectedMapId,currentRaceId:race?.raceId||null,result:state==='result'&&race?{raceId:race.raceId,vehicleId:race.vehicleId,mapId:race.mapId,finalTime:race.finalTime,reward:race.reward}:null})};
  window.__garage={getState:()=>({credits:garage.credits,selectedVehicleId:garage.selectedVehicleId,vehicles:garage.vehicles.map(v=>({id:v.id,name:v.name,owned:v.owned,selected:garage.selectedVehicleId===v.id,price:v.price,stats:appliedStats(v),upgrades:v.upgrades.map(u=>({id:u.id,name:u.name,level:u.level,cost:u.cost,affectedStat:u.affectedStat}))}))})};
  window.__world={getState:()=>({maps:CFG.maps.map(m=>({id:m.id,name:m.name})),currentMap:currentMap?{id:currentMap.id,name:currentMap.name,spawn:{position:{x:currentMap.spawn[0],y:terrainHeight(currentMap.terrain,currentMap.spawn[0],currentMap.spawn[2])+1.12,z:currentMap.spawn[2]},forward:courseForward(currentMap)},finish:{position:{x:currentMap.finish[0],y:terrainHeight(currentMap.terrain,currentMap.finish[0],currentMap.finish[2]),z:currentMap.finish[2]},radius:12.0},checkpoints:currentMap.checkpoints.map((p,i)=>({id:`cp-${i}`,index:i,position:{x:p[0],y:terrainHeight(currentMap.terrain,p[0],p[2]),z:p[2]},radius:13.0})),terrain:{minHeight:currentTerrainBounds.minHeight,maxHeight:currentTerrainBounds.maxHeight,surfaceTypes:[...currentMap.surface]},obstacles:currentMap.obstacles.map((o,i)=>({id:`obstacle-${i}`,position:{x:o[0],y:terrainHeight(currentMap.terrain,o[0],o[1]),z:o[1]},radius:o[2]})),obstacleCount:currentMap.obstacles.length}:null,visibleMapObjectCount,renderFrame:renderer.frame})};
  window.__race={getState:()=>race?{raceId:race.raceId,mode:'time_trial',phase:race.phase,playerCount:1,competitorCount:0,vehicleId:race.vehicleId,mapId:race.mapId,elapsedTime:race.elapsedTime,finalTime:race.finalTime,finished:race.finished,currentCheckpointIndex:race.currentCheckpointIndex,passedCheckpointIds:[...race.passedCheckpointIds],finishEligible:race.finishEligible,reward:race.reward,rewardGranted:race.rewardGranted}:{raceId:null,mode:'time_trial',phase:'idle',playerCount:1,competitorCount:0,vehicleId:null,mapId:null,elapsedTime:0,finalTime:null,finished:false,currentCheckpointIndex:0,passedCheckpointIds:[],finishEligible:false,reward:0,rewardGranted:false}};
  window.__vehicle={getState:()=>vehicle?{id:vehicle.id,position:copy3(vehicle.position),rotation:copy3(vehicle.rotation),forward:copy3(vehicle.forward),velocity:copy3(vehicle.velocity),speed:vehicle.speed,throttle:vehicle.throttle,brake:vehicle.brake,steering:vehicle.steering,grounded:vehicle.grounded,surfaceType:vehicle.surfaceType,collision:{...vehicle.collision},chassis:{...vehicle.chassis},wheels:vehicle.wheels.map(w=>({...w,position:copy3(w.position),contactPoint:w.contactPoint?copy3(w.contactPoint):null})),appliedStats:{...vehicle.appliedStats}}:{id:null,position:vec3(),rotation:vec3(),forward:vec3(0,0,1),velocity:vec3(),speed:0,throttle:0,brake:0,steering:0,grounded:false,surfaceType:'none',collision:{active:false,objectId:null},chassis:{height:0,pitch:0,roll:0},wheels:[],appliedStats:{mass:0,power:0,braking:0,steering:0,grip:0,maxSpeed:0,suspension:0}}};
  window.__camera={getState:()=>({mode:'third_person',position:copy3(camera.position),target:copy3(camera.target),forward:copy3(camera.forward),followedVehicleId:camera.followedVehicleId,vehicleVisible:camera.vehicleVisible})};
  window.__scene={getState:()=>({renderer:'webgl',canvasVisible:canvas.style.visibility!=='hidden',canvasWidth:canvas.width,canvasHeight:canvas.height,renderFrame:renderer.frame,visibleVehicleIds:vehicle&&canvas.style.visibility!=='hidden'?[vehicle.id]:[],visibleWheelCount:vehicle&&canvas.style.visibility!=='hidden'?vehicle.wheels.length:0,visibleTerrain:!!currentMap&&canvas.style.visibility!=='hidden'})};

  showMenu();raf=requestAnimationFrame(loop);
  return()=>{clearTimeout(loadingTimer);cancelAnimationFrame(raf);clearTimeout(toast._t);window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',loseFocus);if(trackMesh?.b&&renderer.gl.deleteBuffer)renderer.gl.deleteBuffer(trackMesh.b);if(renderer.terrain?.b&&renderer.gl.deleteBuffer)renderer.gl.deleteBuffer(renderer.terrain.b);['__game','__garage','__world','__race','__vehicle','__camera','__scene'].forEach(k=>delete window[k]);};
}
