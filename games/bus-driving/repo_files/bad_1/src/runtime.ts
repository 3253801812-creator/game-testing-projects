// @ts-nocheck
export function mountBusSimulator(container, config) {
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const deep=()=>JSON.parse(JSON.stringify(state));
  const rad=d=>d*Math.PI/180;
  const now=()=>performance.now()/1000;
  const startTime=now();
  let disposed=false, raf=0, gl=null, lost=false, program=null, cube=null;
  let last=now(), accumulator=0, uiClock=0, hornUntil=0, boardingClock=0, autoAdvanceClock=0;
  const FIXED=1/60;
  const qualityMap={cinematic:{pixelRatio:1.35,density:1,renderDistance:520},high:{pixelRatio:1.1,density:.78,renderDistance:420},balanced:{pixelRatio:.85,density:.56,renderDistance:320}};
  const stops=config.stops || [{id:'s1',name:'Kota Lama',z:45},{id:'s2',name:'Pasar Raya',z:300},{id:'s3',name:'Terminal Selatan',z:620}];
  const traffic=Array.from({length:8},(_,i)=>({id:'traffic-'+(i+1),x:(i%2?2.2:-2.2),z:90+i*78,speed:7+(i%4)*1.6,color:i%2?config.palette.trafficA:config.palette.trafficB}));
  const state={
    phase:'menu', elapsed:0, paused:false, missionStatus:'Ready for departure', score:0, message:'Board the coach and begin the route.',
    vehicle:{id:config.vehicleId,type:config.busType,position:{x:0,z:20},headingDeg:0,speedKph:0,velocity:0,throttle:0,brake:0,steering:0,gear:'D',parkingBrake:false,doorOpen:false,headlights:false,indicator:'off',hornActive:false,fuel:100,damage:0,odometerKm:0,wheelAngle:0,collisionCount:0,lastCollision:'none',dynamics:{maxForwardSpeedMps:24.5,maxReverseSpeedMps:5.5,throttleAcceleration:10.5,serviceBrakeDeceleration:15,reverseAcceleration:6.2,rollingResistance:.55,parkingBrakeDamping:9,steeringRateDegPerSec:28,maxWheelAngleDeg:32,doorInterlockSpeedMps:1.2,boardingSpeedMps:.8}},
    route:{name:config.routeName,stopCount:3,currentStopIndex:0,stops:stops.map((s,i)=>({...s,status:i===0?'next':'upcoming'})),nextStopDistance:Math.max(0,stops[0].z-20),atStop:false,completed:false,earnings:0,service:{stopLongitudinalHalfLength:10.5,stopLateralHalfWidth:4.2,boardingDuration:1.25}},
    passengers:{onboard:4,capacity:config.capacity,boardedTotal:0,waitingAtNext:7,boardingProgress:0},
    traffic:{count:traffic.length,density:config.trafficDensity,vehicles:[]},
    world:{environment:config.environment,weather:config.weather,timeOfDay:config.timeOfDay,roadCenter:0,roadHalfWidth:5.2,surface:'asphalt',nearStopMarkers:1,solidObstacleCount:0,collision:{roadEdgeEnabled:true,trafficEnabled:true,solidObjectsEnabled:true,busWidth:config.bus.width,busLength:config.bus.length},nearbySolidObstacles:[]},
    camera:{mode:config.defaultCamera||'chase',position:[0,6,-10],target:[0,2,25],fov:55,near:.1,far:900,modes:['chase','cockpit','cinematic']},
    input:{pressed:[],lastAction:'none',lastPointerType:'mouse',mobileControls:false},
    renderer:{backend:'WebGL',contextLost:false,frame:0,drawCalls:0,canvas:{width:0,height:0},quality:config.defaultQuality||'cinematic',pixelRatio:(qualityMap[config.defaultQuality||'cinematic']||qualityMap.cinematic).pixelRatio,renderDistance:(qualityMap[config.defaultQuality||'cinematic']||qualityMap.cinematic).renderDistance,webglVersion:0,dynamicLighting:true,fog:true,antialias:true,shadowsEnabled:false},
    performance:{elapsed:0,tick:0,frame:0,fixedStep:FIXED,accumulator:0,maxSubSteps:4,uiUpdates:0,mounted:true},
    settings:{quality:config.defaultQuality||'cinematic',masterVolume:.8,pixelRatio:(qualityMap[config.defaultQuality||'cinematic']||qualityMap.cinematic).pixelRatio,trafficDensity:config.trafficDensity,renderDistance:(qualityMap[config.defaultQuality||'cinematic']||qualityMap.cinematic).renderDistance,qualityProfiles:qualityMap}
  };
  const pressed=new Set();
  const root=document.createElement('div'); root.className='sim-shell'; root.dataset.layout=config.layout;
  root.innerHTML=`
    <canvas class="world-canvas" aria-label="3D bus driving scene"></canvas>
    <div class="atmosphere"></div>
    <section class="landing" data-screen="home">
      <div class="brand-kicker">${config.kicker}</div>
      <h1>${config.brand}</h1>
      <p class="brand-sub">${config.subtitle}</p>
      <div class="hero-specs"><span>${config.busType}</span><span>${config.routeName}</span><span>${config.weather}</span></div>
      <button class="primary" data-action="play">BEGIN ROUTE</button>
      <div class="control-card">
        <strong>DRIVE PROTOCOL</strong>
        <p>W throttle · S brake / reverse · A/D steer · Space parking brake</p>
        <p>E passenger doors · C camera · L headlights · Z/X indicators · H horn · P pause</p>
        <p>Stop inside the marked passenger zone, settle below walking speed, open the doors and wait for boarding. Use RESET ROUTE at any time.</p>
      </div>
      <label class="quality-label">Graphics quality
        <select data-setting="quality"><option value="cinematic">Cinematic</option><option value="high">High</option><option value="balanced">Balanced</option></select>
      </label>
    </section>
    <div class="hud" data-screen="hud" hidden>
      <div class="hud-brand"><b>${config.brand}</b><small>${config.routeName}</small></div>
      <div class="speed"><span data-bind="speed">000</span><small>KM/H</small></div>
      <div class="metric"><small>FUEL</small><b data-bind="fuel">100%</b></div>
      <div class="metric"><small>PASSENGERS</small><b data-bind="passengers">04 / ${config.capacity}</b></div>
      <div class="metric next"><small>NEXT STOP</small><b data-bind="stop">${stops[0].name}</b><em data-bind="distance">25 m</em></div>
      <div class="route-bar"><i data-bind="progress"></i></div>
      <div class="status" data-bind="message">Ready for departure.</div>
      <div class="signals"><span data-bind="lights">LIGHTS OFF</span><span data-bind="indicator">IND OFF</span><span data-bind="doors">DOORS CLOSED</span></div>
      <div class="hud-quality"><span>GRAPHICS</span><select data-setting="quality"><option value="cinematic">Cinematic</option><option value="high">High</option><option value="balanced">Balanced</option></select></div><div class="hud-actions"><button data-action="camera">CAMERA</button><button data-action="pause">PAUSE</button><button data-action="reset">RESET ROUTE</button></div>
    </div>
    <div class="cockpit" data-cockpit hidden><div class="dash-wheel"></div><div class="dash-cluster"><b data-bind="cockpit-speed">0</b><span>km/h</span></div><div class="windshield-label">${config.vehicleId}</div></div>
    <div class="pause-overlay" data-overlay="pause" hidden><small>SIMULATION HOLD</small><h2>ROUTE PAUSED</h2><button data-action="pause">RESUME DRIVING</button><p>Press P to resume</p></div>
    <div class="complete-overlay" data-overlay="complete" hidden><small>ROUTE COMPLETE</small><h2>PASSENGERS DELIVERED</h2><p data-bind="complete-score"></p><button data-action="reset">DRIVE AGAIN</button></div>
    <div class="mobile-controls" data-mobile hidden>
      <button data-hold="KeyA">◀</button><button class="throttle" data-hold="KeyW">THROTTLE</button><button data-hold="KeyD">▶</button><button class="brake" data-hold="KeyS">BRAKE</button><button data-mobile-action="doors">DOORS</button><button data-mobile-action="camera">CAM</button>
    </div>
  `;
  container.replaceChildren(root);
  const canvas=root.querySelector('canvas');
  const home=root.querySelector('[data-screen="home"]'), hud=root.querySelector('[data-screen="hud"]');
  const pauseOverlay=root.querySelector('[data-overlay="pause"]'), completeOverlay=root.querySelector('[data-overlay="complete"]');
  const cockpit=root.querySelector('[data-cockpit]'), mobile=root.querySelector('[data-mobile]');
  const bind=(n)=>root.querySelector(`[data-bind="${n}"]`);
  const qualitySelects=[...root.querySelectorAll('[data-setting="quality"]')]; qualitySelects.forEach(s=>s.value=state.settings.quality);

  function setMessage(msg){ state.message=msg; state.missionStatus=msg; }
  function currentStop(){ return stops[state.route.currentStopIndex] || null; }
  function roadCenter(z){ return Math.sin((z+config.roadPhase)*0.007)*config.roadCurve; }
  function updateRoute(){
    const stop=currentStop();
    state.route.completed=!stop;
    state.route.nextStopDistance=stop?Math.abs(stop.z-state.vehicle.position.z):0;
    const center=roadCenter(state.vehicle.position.z);
    state.world.roadCenter=center;
    state.route.atStop=!!stop && Math.abs(stop.z-state.vehicle.position.z)<11 && Math.abs(state.vehicle.position.x-roadCenter(stop.z))<4.8;
    state.world.nearStopMarkers=stop && state.route.nextStopDistance<130?1:0;
    state.route.stops=stops.map((s,i)=>({...s,status:i<state.route.currentStopIndex?'served':i===state.route.currentStopIndex?'next':'upcoming'}));
    state.passengers.waitingAtNext=stop?7+(state.route.currentStopIndex*3):0;
  }
  function completeStop(){
    if(state.route.currentStopIndex>=stops.length) return;
    const count=state.passengers.waitingAtNext;
    state.passengers.onboard=Math.min(state.passengers.capacity,state.passengers.onboard+count);
    state.passengers.boardedTotal+=count;
    state.route.earnings+=count*5500;
    state.score=state.route.earnings;
    state.route.currentStopIndex+=1;
    state.passengers.boardingProgress=0; boardingClock=0; autoAdvanceClock=0;
    updateRoute();
    setMessage(`Boarding complete · ${count} passengers · Rp ${Math.round(state.route.earnings).toLocaleString('id-ID')}`);
    if(state.route.completed){ state.phase='complete'; state.paused=true; setMessage('Route complete — all scheduled stops served.'); }
  }
  function toggleDoors(){
    const unsafe=Math.abs(state.vehicle.velocity)>1.2;
    if(unsafe && !config.defects.allowDoorsWhileMoving){ state.vehicle.doorOpen=false; setMessage('Doors interlocked — stop the bus first.'); return; }
    state.vehicle.doorOpen=!state.vehicle.doorOpen;
    setMessage(state.vehicle.doorOpen?'Passenger doors open.':'Passenger doors secured.');
    state.input.lastAction='doors';
  }
  function reset(){
    pressed.clear(); state.input.pressed=[]; state.phase='playing'; state.paused=false; state.elapsed=0; state.score=0; state.message='Fresh route loaded.'; state.missionStatus=state.message;
    Object.assign(state.vehicle,{position:{x:0,z:20},headingDeg:0,speedKph:0,velocity:0,throttle:0,brake:0,steering:0,gear:'D',parkingBrake:false,doorOpen:false,headlights:false,indicator:'off',hornActive:false,fuel:100,damage:0,odometerKm:0,wheelAngle:0});
    Object.assign(state.route,{currentStopIndex:0,completed:false,earnings:0});
    Object.assign(state.passengers,{onboard:4,boardedTotal:0,waitingAtNext:7,boardingProgress:0}); boardingClock=0; autoAdvanceClock=0;
    traffic.forEach((t,i)=>{t.z=90+i*78;}); updateRoute(); updateVisibility();
  }
  function updateVisibility(){
    home.hidden=state.phase!=='menu'; hud.hidden=state.phase==='menu';
    pauseOverlay.hidden=state.phase!=='paused'; completeOverlay.hidden=state.phase!=='complete';
    cockpit.hidden=state.phase==='menu'||state.camera.mode!=='cockpit';
    const isMobile=window.innerWidth<720; mobile.hidden=state.phase==='menu'||!isMobile; state.input.mobileControls=isMobile;
  }
  function togglePause(){
    if(state.phase==='menu'||state.phase==='complete') return;
    if(state.phase==='paused'){state.phase='playing';state.paused=false;setMessage('Route resumed.');}
    else {state.phase='paused';state.paused=true;pressed.clear();setMessage('Simulation paused.');}
    updateVisibility(); state.input.lastAction='pause';
  }
  function cycleCamera(){
    const modes=state.camera.modes; state.camera.mode=modes[(modes.indexOf(state.camera.mode)+1)%modes.length];
    setMessage(`Camera: ${state.camera.mode.toUpperCase()}`); updateVisibility(); state.input.lastAction='camera';
  }
  function toggleParking(){state.vehicle.parkingBrake=!state.vehicle.parkingBrake;setMessage(state.vehicle.parkingBrake?'Parking brake set.':'Parking brake released.');state.input.lastAction='parking-brake';}
  function keyDown(code){
    if(code==='KeyP'){togglePause();return;} if(code==='KeyC'){cycleCamera();return;} if(code==='KeyE'){toggleDoors();return;} if(code==='Space'){toggleParking();return;}
    if(code==='KeyL'){state.vehicle.headlights=!state.vehicle.headlights;setMessage(state.vehicle.headlights?'Headlights on.':'Headlights off.');return;}
    if(code==='KeyZ'){state.vehicle.indicator=state.vehicle.indicator==='left'?'off':'left';setMessage('Left indicator '+(state.vehicle.indicator==='left'?'on.':'off.'));return;}
    if(code==='KeyX'){state.vehicle.indicator=state.vehicle.indicator==='right'?'off':'right';setMessage('Right indicator '+(state.vehicle.indicator==='right'?'on.':'off.'));return;}
    if(code==='KeyH'){hornUntil=now()+.45;state.vehicle.hornActive=true;setMessage('Horn sounded.');return;}
    pressed.add(code); state.input.pressed=[...pressed]; state.input.lastAction=code;
  }
  function keyUp(code){pressed.delete(code);state.input.pressed=[...pressed];}
  function clearHeld(){pressed.clear();state.input.pressed=[];state.vehicle.throttle=0;state.vehicle.brake=0;state.vehicle.steering=0;}
  const onKeyDown=(e)=>{if(['KeyW','KeyA','KeyS','KeyD','Space','KeyE','KeyC','KeyL','KeyZ','KeyX','KeyH','KeyP'].includes(e.code)){e.preventDefault();if(!e.repeat)keyDown(e.code);}};
  const onKeyUp=(e)=>keyUp(e.code);
  window.addEventListener('keydown',onKeyDown); window.addEventListener('keyup',onKeyUp); window.addEventListener('blur',clearHeld); window.addEventListener('resize',updateVisibility);
  root.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(!b)return; const a=b.dataset.action;
    if(a==='play'){state.phase='playing';state.paused=false;setMessage('Depart when ready. First stop ahead.');updateVisibility();}
    if(a==='pause')togglePause(); if(a==='camera')cycleCamera(); if(a==='reset')reset();
    const ma=b.dataset.mobileAction; if(ma==='doors')toggleDoors(); if(ma==='camera')cycleCamera();
  });
  root.querySelectorAll('[data-hold]').forEach(b=>{
    const code=b.dataset.hold;
    b.addEventListener('pointerdown',e=>{state.input.lastPointerType=e.pointerType||'touch';keyDown(code);});
    const up=e=>{state.input.lastPointerType=e.pointerType||'touch';keyUp(code);}; b.addEventListener('pointerup',up);b.addEventListener('pointercancel',up);b.addEventListener('pointerleave',up);
  });
  function setQuality(value){const q=qualityMap[value]||qualityMap.high;state.settings.quality=value;state.renderer.quality=value;state.settings.pixelRatio=q.pixelRatio;state.settings.renderDistance=q.renderDistance;state.settings.trafficDensity=config.trafficDensity*q.density;state.renderer.pixelRatio=q.pixelRatio;state.renderer.renderDistance=q.renderDistance;qualitySelects.forEach(s=>{if(s.value!==value)s.value=value;});setMessage(`Graphics set to ${value}.`);resize();}
  qualitySelects.forEach(sel=>sel.addEventListener('change',()=>setQuality(sel.value)));

  function update(dt){
    if(state.phase!=='playing') return;
    state.elapsed+=dt; state.performance.elapsed=state.elapsed;
    const v=state.vehicle; v.throttle=pressed.has('KeyW')?1:0; v.brake=pressed.has('KeyS')?1:0; v.steering=(pressed.has('KeyA')?-1:0)+(pressed.has('KeyD')?1:0);
    if(v.parkingBrake){v.velocity*=Math.max(0,1-dt*8);}
    else {
      if(v.throttle) v.velocity+=10.5*dt;
      if(v.brake){ if(v.velocity>0.7)v.velocity-=15*dt; else v.velocity-=6.2*dt; }
      if(!v.throttle&&!v.brake)v.velocity*=Math.max(0,1-dt*.55);
    }
    v.velocity=clamp(v.velocity,-5.5,24.5); v.gear=v.velocity<-.3?'R':v.velocity>.3?'D':'N';
    const speedAbs=Math.abs(v.velocity); const steerFactor=clamp(speedAbs/5,0,1); v.headingDeg+=v.steering*28*dt*steerFactor*(v.velocity>=0?1:-1); v.wheelAngle=v.steering*32;
    const h=rad(v.headingDeg); const dz=Math.cos(h)*v.velocity*dt, dx=Math.sin(h)*v.velocity*dt;
    const oldz=v.position.z; v.position.z+=dz; v.position.x+=dx;
    const center=roadCenter(v.position.z), off=Math.abs(v.position.x-center)>state.world.roadHalfWidth;
    if(off){v.velocity*=Math.max(0,1-dt*1.4);v.damage=clamp(v.damage+speedAbs*dt*.015,0,100);if(speedAbs>8)setMessage('Rough shoulder — reduce speed.');}
    const traveled=Math.hypot(v.position.z-oldz,dx); v.odometerKm+=traveled/1000; v.fuel=clamp(v.fuel-traveled*0.008*config.defects.fuelDrainMultiplier,0,100); v.speedKph=Math.abs(v.velocity)*3.6;
    state.vehicle.hornActive=now()<hornUntil;
    traffic.forEach((t,i)=>{t.z+=t.speed*dt;if(t.z<v.position.z-80)t.z=v.position.z+420+(i*36);});
    state.traffic.vehicles=traffic.map(t=>({id:t.id,x:t.x+roadCenter(t.z),z:t.z,speedKph:t.speed*3.6}));
    updateRoute();
    if(state.route.atStop && Math.abs(v.velocity)<.8){
      if(config.defects.autoAdvanceAtStop){autoAdvanceClock+=dt;if(autoAdvanceClock>1.1){completeStop();}}
      else if(v.doorOpen){boardingClock+=dt;state.passengers.boardingProgress=clamp(boardingClock/1.25,0,1);if(boardingClock>=1.25)completeStop();}
      else {boardingClock=0;state.passengers.boardingProgress=0;}
    } else {boardingClock=0;autoAdvanceClock=0;state.passengers.boardingProgress=0;}
    state.performance.tick+=1;
  }

  // ---- minimal WebGL renderer ----
  const vs=`attribute vec3 aPos;attribute vec3 aNormal;uniform mat4 uVP;uniform mat4 uModel;varying vec3 vN;varying float vDepth;void main(){vec4 w=uModel*vec4(aPos,1.0);gl_Position=uVP*w;vN=mat3(uModel)*aNormal;vDepth=gl_Position.w;}`;
  const fs=`precision mediump float;uniform vec3 uColor;uniform vec3 uLight;uniform vec3 uFog;uniform float uEmissive;varying vec3 vN;varying float vDepth;void main(){float d=max(dot(normalize(vN),normalize(uLight)),0.0);vec3 c=uColor*(0.32+0.68*d)+uColor*uEmissive;float f=clamp((vDepth-65.0)/330.0,0.0,0.78);gl_FragColor=vec4(mix(c,uFog,f),1.0);}`;
  function shader(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;}
  function initGL(){
    gl=canvas.getContext('webgl',{antialias:true,alpha:false,preserveDrawingBuffer:true}); if(!gl){state.renderer.backend='unavailable';state.renderer.webglVersion=0;setMessage('WebGL is required for this simulator.');return;}
    state.renderer.backend='WebGL';state.renderer.webglVersion=1;program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vs));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
    const P=[-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5, -.5,-.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5, -.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5, .5,-.5,-.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5, -.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,.5,-.5,-.5, -.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5];
    const N=[0,0,-1,0,0,-1,0,0,-1,0,0,-1, 0,0,1,0,0,1,0,0,1,0,0,1, -1,0,0,-1,0,0,-1,0,0,-1,0,0, 1,0,0,1,0,0,1,0,0,1,0,0, 0,-1,0,0,-1,0,0,-1,0,0,-1,0, 0,1,0,0,1,0,0,1,0,0,1,0];
    const I=[0,1,2,0,2,3,4,6,5,4,7,6,8,9,10,8,10,11,12,14,13,12,15,14,16,17,18,16,18,19,20,22,21,20,23,22];
    cube={p:gl.createBuffer(),n:gl.createBuffer(),i:gl.createBuffer(),count:I.length};gl.bindBuffer(gl.ARRAY_BUFFER,cube.p);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(P),gl.STATIC_DRAW);gl.bindBuffer(gl.ARRAY_BUFFER,cube.n);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(N),gl.STATIC_DRAW);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,cube.i);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(I),gl.STATIC_DRAW);
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;state.renderer.contextLost=true;}); canvas.addEventListener('webglcontextrestored',()=>{lost=false;state.renderer.contextLost=false;initGL();}); resize();
  }
  function perspective(fovy,aspect,n,f){const t=1/Math.tan(fovy/2),nf=1/(n-f);return [t/aspect,0,0,0,0,t,0,0,0,0,(f+n)*nf,-1,0,0,2*f*n*nf,0];}
  function lookAt(e,c,u){let zx=e[0]-c[0],zy=e[1]-c[1],zz=e[2]-c[2];let l=Math.hypot(zx,zy,zz)||1;zx/=l;zy/=l;zz/=l;let xx=u[1]*zz-u[2]*zy,xy=u[2]*zx-u[0]*zz,xz=u[0]*zy-u[1]*zx;l=Math.hypot(xx,xy,xz)||1;xx/=l;xy/=l;xz/=l;let yx=zy*xz-zz*xy,yy=zz*xx-zx*xz,yz=zx*xy-zy*xx;return [xx,yx,zx,0,xy,yy,zy,0,xz,yz,zz,0,-(xx*e[0]+xy*e[1]+xz*e[2]),-(yx*e[0]+yy*e[1]+yz*e[2]),-(zx*e[0]+zy*e[1]+zz*e[2]),1];}
  function mul(a,b){const o=new Array(16).fill(0);for(let c=0;c<4;c++)for(let r=0;r<4;r++)for(let k=0;k<4;k++)o[c*4+r]+=a[k*4+r]*b[c*4+k];return o;}
  function model(x,y,z,sx,sy,sz,ry=0){const c=Math.cos(ry),s=Math.sin(ry);return [c*sx,0,-s*sx,0,0,sy,0,0,s*sz,0,c*sz,0,x,y,z,1];}
  function hex(c){const v=parseInt(c.replace('#',''),16);return [((v>>16)&255)/255,((v>>8)&255)/255,(v&255)/255];}
  function drawBox(vp,x,y,z,sx,sy,sz,color,ry=0,em=0){
    gl.uniformMatrix4fv(gl.getUniformLocation(program,'uModel'),false,new Float32Array(model(x,y,z,sx,sy,sz,ry)));gl.uniform3fv(gl.getUniformLocation(program,'uColor'),new Float32Array(hex(color)));gl.uniform1f(gl.getUniformLocation(program,'uEmissive'),em);gl.drawElements(gl.TRIANGLES,cube.count,gl.UNSIGNED_SHORT,0);state.renderer.drawCalls++;
  }
  function cameraTransform(){
    const v=state.vehicle,h=rad(v.headingDeg),cx=v.position.x,cz=v.position.z;let e,t;
    if(state.camera.mode==='cockpit'){e=[cx+Math.sin(h)*1.1,2.15,cz+Math.cos(h)*2.0];t=[cx+Math.sin(h)*35,1.9,cz+Math.cos(h)*35];state.camera.fov=66;}
    else if(state.camera.mode==='cinematic'){const side=config.cameraSide||1;e=[cx+11*side,7.8,cz-13];t=[cx,2.0,cz+12];state.camera.fov=48;}
    else {e=[cx-7*(config.cameraSide||1),6.2,cz-14];t=[cx,2.1,cz+10];state.camera.fov=55;}
    state.camera.position=e;state.camera.target=t;return {e,t};
  }
  function drawBus(vp){
    const v=state.vehicle,x=v.position.x,z=v.position.z,ry=-rad(v.headingDeg),c=Math.cos(ry),s=Math.sin(ry);const p=config.bus;
    const body=config.palette.bus,accent=config.palette.accent,glass=config.palette.glass;
    const part=(dx,y,dz,sx,sy,sz,color,em=0)=>{const px=x+c*dx+s*dz,pz=z-s*dx+c*dz;drawBox(vp,px,y,pz,sx,sy,sz,color,ry,em);};
    if(p.style==='articulated'){part(0,1.45,-1.9,p.width,2.35,p.length*.48,body);part(0,1.45,2.4,p.width,2.35,p.length*.44,body);part(0,1.4,.25,p.width*.82,1.9,.75,accent);}
    else part(0,1.45,0,p.width,2.35,p.length,body);
    part(0,2.03,.05,p.width*1.02,.62,p.length*.86,glass,.05);part(0,2.72,0,p.width*.96,.22,p.length*.92,accent,.03);
    if(p.style==='double'){part(0,3.12,0,p.width*.97,1.15,p.length*.93,body);part(0,3.22,.1,p.width*1.0,.42,p.length*.78,glass,.05);}
    if(p.style==='cargo'){for(let i=-2;i<=2;i++)part(i%2?-.6:.55,3.05,i*.8,.65,.45,.8,i%2?config.palette.trafficA:config.palette.trafficB);}
    for(const zz of [-p.length*.32,p.length*.32])for(const xx of [-p.width*.52,p.width*.52])part(xx,.55,zz,.32,.55,.74,'#111827');
    part(0,1.15,p.length*.51,p.width*.68,.22,.08,v.headlights?'#fff6c7':'#9ca3af',v.headlights?1.5:.0);
  }
  function drawWorld(){
    if(!gl||lost)return;resize();state.renderer.drawCalls=0;gl.viewport(0,0,canvas.width,canvas.height);gl.enable(gl.DEPTH_TEST);gl.enable(gl.CULL_FACE);const fog=hex(config.palette.sky);gl.clearColor(fog[0],fog[1],fog[2],1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER,cube.p);let loc=gl.getAttribLocation(program,'aPos');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,cube.n);loc=gl.getAttribLocation(program,'aNormal');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,cube.i);
    const cam=cameraTransform(),p=perspective(rad(state.camera.fov),canvas.width/canvas.height,.1,900),view=lookAt(cam.e,cam.t,[0,1,0]),vp=mul(p,view);gl.uniformMatrix4fv(gl.getUniformLocation(program,'uVP'),false,new Float32Array(vp));gl.uniform3fv(gl.getUniformLocation(program,'uLight'),new Float32Array([-.45,.92,.28]));gl.uniform3fv(gl.getUniformLocation(program,'uFog'),new Float32Array(fog));
    const bz=state.vehicle.position.z, q=qualityMap[state.settings.quality];const start=Math.floor((bz-80)/20)*20,end=bz+Math.min(q.renderDistance,360);
    drawBox(vp,roadCenter(bz),-.42,bz+100,80,.8,Math.min(q.renderDistance,420),config.palette.ground,0);
    for(let z=start;z<end;z+=20){const c=roadCenter(z);drawBox(vp,c,.0,z,11,.18,20,config.palette.road,0);drawBox(vp,c,0.11,z,0.13,.03,6,'#f8fafc',0);drawBox(vp,c-5.55,.1,z,.15,.12,20,config.palette.edge,0);drawBox(vp,c+5.55,.1,z,.15,.12,20,config.palette.edge,0);
      const idx=Math.floor(z/20);if(idx%2===0){drawEnvironment(vp,c,z,idx,q.density);}}
    stops.forEach((s,i)=>{if(Math.abs(s.z-bz)<q.renderDistance){const c=roadCenter(s.z),served=i<state.route.currentStopIndex;drawBox(vp,c+6.8,1.7,s.z,1.6,3.4,3.0,served?config.palette.served:config.palette.stop,0,.08);drawBox(vp,c+5.6,.18,s.z,1.8,.18,8,config.palette.accent,0,.12);}});
    traffic.forEach((t,i)=>{if(Math.abs(t.z-bz)<q.renderDistance){const x=t.x+roadCenter(t.z);drawBox(vp,x,.65,t.z,1.65,1.2,3.8,t.color,0);drawBox(vp,x,.95,t.z+.2,1.45,.52,2.1,'#0f172a',0,.04);}});
    drawBus(vp);state.renderer.frame++;state.performance.frame=state.renderer.frame;
  }
  function drawEnvironment(vp,c,z,idx,density){
    const s=config.sceneType; if(((idx*17)%100)/100>density)return;
    if(s==='tropical'){
      for(const side of [-1,1]){const x=c+side*(9+(idx%3)*2);drawBox(vp,x,1.4,z+3,0.42,2.8,.42,'#7c4a26');drawBox(vp,x,3.35,z+3,3.2,.65,2.3,config.palette.foliage,0);if(idx%3===0)drawBox(vp,x+side*4,1.3,z-3,4.5,2.6,5.0,config.palette.building,0);}
    } else if(s==='night-city'){
      for(const side of [-1,1]){const x=c+side*(11+(idx%2)*3);drawBox(vp,x,3+(idx%4),z,6,6+(idx%4)*2,8,idx%2?config.palette.building:config.palette.building2,0);drawBox(vp,x-side*3,.45,z+4,.18,.9,5,config.palette.accent,0,1.2);}
    } else if(s==='highland'){
      for(const side of [-1,1]){drawBox(vp,c+side*13,1.1,z,8,2.2,9,idx%2?config.palette.building:config.palette.foliage,0);drawBox(vp,c+side*21,5.5,z+6,15,11,15,config.palette.mountain,0);}
    } else if(s==='coast'){
      drawBox(vp,c-14,.5,z,12,1,16,config.palette.water,0);for(const side of [1]){drawBox(vp,c+side*12,1.4,z+2,5,2.8,5,config.palette.building,0);drawBox(vp,c+side*9,2.8,z-3,.35,5.6,.35,'#8b5e34');drawBox(vp,c+side*9,5.9,z-3,4,.5,3,config.palette.foliage,0);}
    } else {
      for(const side of [-1,1]){drawBox(vp,c+side*13,2.5,z,7,5,7,idx%2?config.palette.building:config.palette.building2,0);drawBox(vp,c+side*8,.6,z+5,.18,1.2,5,config.palette.accent,0,.5);}
    }
  }
  function resize(){if(!gl)return;const q=qualityMap[state.settings.quality];const r=Math.min(2,(window.devicePixelRatio||1)*q.pixelRatio);const w=Math.max(1,Math.floor(canvas.clientWidth*r)),h=Math.max(1,Math.floor(canvas.clientHeight*r));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}state.renderer.canvas={width:w,height:h};state.renderer.pixelRatio=q.pixelRatio;state.renderer.renderDistance=q.renderDistance;}
  function updateUI(){
    bind('speed').textContent=String(Math.round(state.vehicle.speedKph)).padStart(3,'0');bind('cockpit-speed').textContent=String(Math.round(state.vehicle.speedKph));bind('fuel').textContent=state.vehicle.fuel.toFixed(1)+'%';bind('passengers').textContent=String(state.passengers.onboard).padStart(2,'0')+' / '+state.passengers.capacity;
    const s=currentStop();bind('stop').textContent=s?s.name:'ROUTE COMPLETE';bind('distance').textContent=s?Math.round(state.route.nextStopDistance)+' m':'—';bind('progress').style.width=(state.route.currentStopIndex/stops.length*100)+'%';bind('message').textContent=state.message;bind('lights').textContent=state.vehicle.headlights?'LIGHTS ON':'LIGHTS OFF';bind('indicator').textContent='IND '+state.vehicle.indicator.toUpperCase();bind('doors').textContent=state.vehicle.doorOpen?'DOORS OPEN':'DOORS CLOSED';bind('complete-score').textContent=`Fare earned · Rp ${Math.round(state.route.earnings).toLocaleString('id-ID')}`;state.performance.uiUpdates++;
  }
  function frame(){if(disposed)return;const t=now(),dt=clamp(t-last,0,.05);last=t;accumulator+=dt;if(state.phase==='playing'){while(accumulator>=FIXED){update(FIXED);accumulator-=FIXED;}}else accumulator=Math.min(accumulator,FIXED);state.performance.accumulator=accumulator;state.performance.elapsed=state.elapsed;state.traffic.count=traffic.length;state.traffic.density=state.settings.trafficDensity;drawWorld();uiClock+=dt;if(uiClock>.08){uiClock=0;updateUI();updateVisibility();}raf=requestAnimationFrame(frame);}
  initGL();updateRoute();updateUI();updateVisibility();raf=requestAnimationFrame(frame);

  const snapshotBus=()=>({phase:state.phase,speedKph:state.vehicle.speedKph,position:{...state.vehicle.position},headingDeg:state.vehicle.headingDeg,doorOpen:state.vehicle.doorOpen,passengerCount:state.passengers.onboard,nextStopIndex:state.route.currentStopIndex,routeProgress:state.route.currentStopIndex/stops.length,fuel:state.vehicle.fuel,score:state.score});
  const snapshotGame=()=>({phase:state.phase,elapsed:state.elapsed,paused:state.paused,missionStatus:state.missionStatus,score:state.score,message:state.message});
  const snapshotVehicle=()=>{const x=JSON.parse(JSON.stringify(state.vehicle));if(config.defects.reportedSpeedBias)x.speedKph=x.speedKph+config.defects.reportedSpeedBias;return x;};
  const snapshotRoute=()=>JSON.parse(JSON.stringify(state.route)); const snapshotPassengers=()=>JSON.parse(JSON.stringify(state.passengers)); const snapshotTraffic=()=>JSON.parse(JSON.stringify(state.traffic));const snapshotWorld=()=>JSON.parse(JSON.stringify(state.world));const snapshotCamera=()=>{const c=JSON.parse(JSON.stringify(state.camera)),p=c.position,t=c.target;return {...c,position:Array.isArray(p)?{x:p[0],y:p[1],z:p[2]}:p,target:Array.isArray(t)?{x:t[0],y:t[1],z:t[2]}:t};};const snapshotInput=()=>JSON.parse(JSON.stringify(state.input));const snapshotRenderer=()=>JSON.parse(JSON.stringify(state.renderer));const snapshotPerformance=()=>JSON.parse(JSON.stringify(state.performance));const snapshotSettings=()=>JSON.parse(JSON.stringify(state.settings));
  const hooks={__bus:snapshotBus,__game:snapshotGame,__vehicle:snapshotVehicle,__route:snapshotRoute,__passengers:snapshotPassengers,__traffic:snapshotTraffic,__world:snapshotWorld,__camera:snapshotCamera,__input:snapshotInput,__renderer:snapshotRenderer,__performance:snapshotPerformance,__settings:snapshotSettings};
  for(const [name,fn] of Object.entries(hooks)){try{Object.defineProperty(window,name,{value:Object.freeze({getState:()=>fn()}),writable:false,configurable:false,enumerable:false});}catch{window[name]=Object.freeze({getState:()=>fn()});}}
  return ()=>{disposed=true;cancelAnimationFrame(raf);window.removeEventListener('keydown',onKeyDown);window.removeEventListener('keyup',onKeyUp);window.removeEventListener('blur',clearHeld);root.remove();};
}
