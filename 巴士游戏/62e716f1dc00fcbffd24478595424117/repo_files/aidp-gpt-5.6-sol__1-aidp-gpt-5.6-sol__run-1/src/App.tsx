import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type Phase = 'menu' | 'playing' | 'paused' | 'complete'
type Quality = 'cinematic' | 'high' | 'balanced'
type CameraMode = 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside'
type Indicator = 'off' | 'left' | 'right'

const profiles = {
  cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
  high: { pixelRatio: 1.1, density: .78, renderDistance: 420 },
  balanced: { pixelRatio: .85, density: .56, renderDistance: 320 },
}
const stops = [
  { id:'s1', name:'Kota Lama', z:95, waiting:7 },
  { id:'s2', name:'Pasar Raya', z:355, waiting:9 },
  { id:'s3', name:'Terminal Selatan', z:670, waiting:5 },
]
const dynamics = { maxForwardSpeedMps:24.5, maxReverseSpeedMps:5.5, throttleAcceleration:6.5, serviceBrakeDeceleration:10, reverseAcceleration:4.2, rollingResistance:.55, parkingBrakeDamping:9, steeringRateDegPerSec:28, maxWheelAngleDeg:32, doorInterlockSpeedMps:1.2, boardingSpeedMps:.8 }
const cameraModes:CameraMode[] = ['chase','showcase','cockpit','cinematic','stopside']

type Traffic = { id:string;x:number;z:number;speed:number;direction:number;mesh?:THREE.Group }
type Solid = {id:string;type:string;x:number;z:number;halfWidth:number;halfLength:number}
type Runtime = ReturnType<typeof freshRuntime>
function freshRuntime(){
  return {
    phase:'menu' as Phase, elapsed:0, message:'Board the coach and begin the route.', missionStatus:'Ready for departure',
    x:.33,z:20,heading:0,velocity:0,throttle:0,brake:0,steering:0,gear:'D',parkingBrake:false,doorOpen:false,headlights:false,indicator:'off' as Indicator,hornActive:false,
    fuel:100,damage:0,odo:0,wheelAngle:0,collisionCount:0,lastCollision:'none', passengerCount:4,boardedTotal:0,nextStop:0,boarding:0,score:0,
    camera:'chase' as CameraMode, quality:'cinematic' as Quality, pressed:new Set<string>(),lastAction:'none',lastPointerType:'mouse',
    tick:0,frame:0,uiUpdates:0,accumulator:0,lastTime:0,drawCalls:0,canvasW:0,canvasH:0,contextLost:false,webglVersion:0,
  }
}

function mat(color:number, rough=.7, metal=.05){ return new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal}) }
function mesh(geo:THREE.BufferGeometry, material:THREE.Material, x=0,y=0,z=0){ const m=new THREE.Mesh(geo,material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;return m }

function buildBus(){
  const g=new THREE.Group(); g.name='Nusantara Coach NLX-880'
  const white=mat(0xe8eee9,.34,.18), dark=mat(0x071313,.25,.3), green=mat(0x087f60,.35,.16), chrome=mat(0xc4d2cd,.18,.85)
  g.add(mesh(new THREE.BoxGeometry(2.55,2.7,8.9),white,0,1.65,0))
  g.add(mesh(new THREE.BoxGeometry(2.59,.38,7.6),green,0,.72,.15))
  g.add(mesh(new THREE.BoxGeometry(2.6,.12,8.7),chrome,0,.45,0))
  const windows=mesh(new THREE.BoxGeometry(2.61,1.12,6.6),dark,0,2.15,-.15);g.add(windows)
  g.add(mesh(new THREE.BoxGeometry(2.61,1.15,.18),dark,0,2.12,4.44))
  g.add(mesh(new THREE.BoxGeometry(2.66,.12,6.8),green,0,1.52,-.1))
  // split windows and pillars create readable depth
  for(let z=-3.1;z<=2.9;z+=1.25){ g.add(mesh(new THREE.BoxGeometry(2.68,1.18,.07),chrome,0,2.14,z)) }
  const wheelGeo=new THREE.CylinderGeometry(.48,.48,.32,20), tire=mat(0x050606,.8,.05)
  for(const x of [-1.33,1.33]) for(const z of [-2.8,2.9]){ const w=mesh(wheelGeo,tire,x,.57,z);w.rotation.z=Math.PI/2;w.name='wheel';g.add(w) }
  for(const x of [-.78,.78]) { const lamp=mesh(new THREE.BoxGeometry(.48,.24,.12),mat(0xfff4ca,.2,.15),x,1.08,4.5);lamp.name='headlamp';g.add(lamp) }
  for(const x of [-1.02,1.02]) g.add(mesh(new THREE.BoxGeometry(.2,.18,.13),mat(0xffa313),x,1.05,4.52))
  const door=mesh(new THREE.BoxGeometry(.08,1.7,1.25),dark,-1.31,1.42,2.65);door.name='door';g.add(door)
  const sign=mesh(new THREE.BoxGeometry(1.45,.28,.05),mat(0x17201e),0,2.97,4.51);g.add(sign)
  return g
}
function buildCar(color:number){
  const g=new THREE.Group(); const body=mat(color,.4,.2)
  g.add(mesh(new THREE.BoxGeometry(1.75,.75,3.8),body,0,.62,0));g.add(mesh(new THREE.BoxGeometry(1.55,.62,1.9),mat(0x172728,.3,.25),0,1.15,-.15))
  for(const x of [-.92,.92]) for(const z of [-1.25,1.25]){const w=mesh(new THREE.CylinderGeometry(.3,.3,.18,14),mat(0x080909),x,.38,z);w.rotation.z=Math.PI/2;g.add(w)}
  return g
}

function Icon({name}:{name:string}){
  const icons:Record<string,string>={play:'M8 5v14l11-7z',pause:'M8 5h3v14H8zm5 0h3v14h-3z',camera:'M4 8h3l2-3h6l2 3h3v11H4z M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6',light:'M9 18h6 M10 22h4 M8 14c-1.3-1.1-2-2.7-2-4.4a6 6 0 1 1 12 0c0 1.7-.7 3.3-2 4.4-.7.6-1 1.3-1 2H9c0-.7-.3-1.4-1-2z',door:'M6 3h12v18H6z M9 6h6v15H9z M12 13h1',reset:'M4 12a8 8 0 1 0 2.3-5.7L4 8 M4 3v5h5',horn:'M4 10h4l6-5v14l-6-5H4z M17 9c1 1 1 5 0 6 M19 6c3 3 3 9 0 12'}
  return <svg viewBox="0 0 24 24" width="19" height="19" fill={name==='play'?'currentColor':'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icons[name]||icons.play}/></svg>
}

export function App(){
  const canvasRef=useRef<HTMLCanvasElement>(null), runtime=useRef<Runtime>(freshRuntime()), apiRef=useRef<any>({})
  const [ui,setUi]=useState(()=>snapshotUI(runtime.current)), [menu,setMenu]=useState(true)
  const sync=useCallback(()=>{runtime.current.uiUpdates++;setUi(snapshotUI(runtime.current))},[])

  const action=useCallback((name:string,value?:any)=>{
    const r=runtime.current;r.lastAction=name
    if(name==='start'){r.phase='playing';r.message='Follow the green route. First stop: Kota Lama';r.missionStatus='IN SERVICE';setMenu(false)}
    if(name==='pause' && r.phase!=='menu' && r.phase!=='complete'){r.phase=r.phase==='paused'?'playing':'paused';r.message=r.phase==='paused'?'Simulation paused':'Route resumed'}
    if(name==='reset'){const q=r.quality;const fresh=freshRuntime();Object.assign(r,fresh,{quality:q,phase:'playing',message:'Route reset. Depart for Kota Lama.',missionStatus:'IN SERVICE'});setMenu(false);apiRef.current.resetVisual?.()}
    if(name==='door'){if(Math.abs(r.velocity)<=dynamics.doorInterlockSpeedMps){r.doorOpen=!r.doorOpen;r.message=r.doorOpen?'Passenger doors open':'Passenger doors secured'}else r.message='DOOR INTERLOCK · Slow below 4 km/h'}
    if(name==='parking'){r.parkingBrake=!r.parkingBrake;r.message=r.parkingBrake?'Parking brake applied':'Parking brake released'}
    if(name==='lights')r.headlights=!r.headlights
    if(name==='indicator'){r.indicator=r.indicator===value?'off':value}
    if(name==='camera'){r.camera=cameraModes[(cameraModes.indexOf(r.camera)+1)%cameraModes.length];r.message=`Camera · ${r.camera.toUpperCase()}`}
    if(name==='quality'){r.quality=value;apiRef.current.applyQuality?.();r.message=`Graphics · ${String(value).toUpperCase()}`}
    if(name==='horn'){r.hornActive=!!value; if(value) apiRef.current.beep?.()}
    sync()
  },[sync])

  const hold=useCallback((code:string,on:boolean,pointer='touch')=>{const r=runtime.current;r.lastPointerType=pointer;if(on)r.pressed.add(code);else r.pressed.delete(code);r.lastAction=on?code:`${code}:up`},[])

  useEffect(()=>{
    const canvas=canvasRef.current!;const r=runtime.current
    const scene=new THREE.Scene();scene.background=new THREE.Color(0xacc9c3);scene.fog=new THREE.Fog(0xacc9c3,75,profiles[r.quality].renderDistance)
    const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05
    r.webglVersion=renderer.capabilities.isWebGL2?2:1
    canvas.addEventListener('webglcontextlost',()=>r.contextLost=true);canvas.addEventListener('webglcontextrestored',()=>r.contextLost=false)
    const camera=new THREE.PerspectiveCamera(53,1,.1,520)
    scene.add(new THREE.HemisphereLight(0xd9f4ed,0x31513b,2.2));const sun=new THREE.DirectionalLight(0xffecc8,3.1);sun.position.set(-45,65,-30);scene.add(sun)
    const roadMat=mat(0x2c3433,.88), grass=mat(0x456d46,.95), concrete=mat(0x9fa79d,.9)
    const ground=mesh(new THREE.PlaneGeometry(90,900),grass,0,-.08,400);ground.rotation.x=-Math.PI/2;scene.add(ground)
    const road=mesh(new THREE.PlaneGeometry(10.4,820),roadMat,.33,0,400);road.rotation.x=-Math.PI/2;scene.add(road)
    for(const x of [-5.12,5.78]){const curb=mesh(new THREE.BoxGeometry(.22,.2,820),concrete,x,.06,400);scene.add(curb)}
    for(let z=8;z<805;z+=13){const line=mesh(new THREE.BoxGeometry(.11,.025,6),mat(0xe9e4c8),.33,.025,z);scene.add(line)}
    const solids:Solid[]=[]
    // terrain layers
    for(let z=20,i=0;z<800;z+=22,i++){
      for(const side of [-1,1]){
        if(i%4!==0){const x=side*(10.5+(i%3)*2.7)+.33;const w=4+(i%3),d=7+(i%2)*2,h=3.2+(i%4)*.8
          const building=mesh(new THREE.BoxGeometry(w,h,d),mat([0xc88457,0xd2c49c,0x8eaa9a,0xb46350][i%4]),x,h/2,z);scene.add(building)
          building.add(mesh(new THREE.BoxGeometry(w+.5,.32,d+.6),mat(i%2?0x70443b:0x3b5d53),0,h/2+.18,0))
          for(let wy=1.1;wy<h;wy+=1.4)for(let wx=-w/3;wx<=w/3;wx+=w/1.5){const win=mesh(new THREE.BoxGeometry(.7,.65,.05),mat(0x29494c,.25),wx,wy-h/2,side<0?d/2+.03:-d/2-.03);building.add(win)}
          solids.push({id:`building-${i}-${side}`,type:'building',x,z,halfWidth:w/2,halfLength:d/2})
        }
        const tx=side*(7.7+(i%2)*1.1)+.33;const trunk=mesh(new THREE.CylinderGeometry(.13,.19,2.4,8),mat(0x73533c),tx,1.2,z+8);scene.add(trunk)
        const crown=mesh(new THREE.SphereGeometry(1.15+(i%3)*.2,10,8),mat(i%2?0x276642:0x3c7a4b),tx,2.8,z+8);scene.add(crown)
      }
    }
    // distant mountain silhouettes
    for(const x of [-34,-18,20,37]){const m=mesh(new THREE.ConeGeometry(18,25,5),mat(0x5c776a,.95),x,10,460+Math.abs(x)*4);m.rotation.y=.4;scene.add(m)}
    // shelters: physically multipart and solid
    stops.forEach((s,i)=>{const x=7.8;const roof=mesh(new THREE.BoxGeometry(5,.25,3.3),mat(0x176f5b,.35,.3),x,3,s.z);scene.add(roof)
      for(const px of [-2.2,2.2])for(const pz of [-1.35,1.35])scene.add(mesh(new THREE.BoxGeometry(.16,3,.16),mat(0xc7d0c7,.3,.65),x+px,1.5,s.z+pz))
      scene.add(mesh(new THREE.BoxGeometry(4.5,.16,.55),mat(0x835a35),x,1,s.z+.9));scene.add(mesh(new THREE.BoxGeometry(4.7,1.25,.1),mat(0x365c5b,.25),x,2.15,s.z+1.42))
      const marker=mesh(new THREE.CylinderGeometry(.13,.13,3.7,10),mat(0xe8e6d3),5.95,1.85,s.z-3);scene.add(marker);marker.add(mesh(new THREE.BoxGeometry(.85,.85,.12),mat(i===0?0x29bb83:0x386358),0,1.35,0))
      solids.push({id:`shelter-${i+1}`,type:'shelter',x,z:s.z,halfWidth:2.5,halfLength:1.8})
      const zone=mesh(new THREE.PlaneGeometry(3.4,21),new THREE.MeshBasicMaterial({color:0x35e0a2,transparent:true,opacity:.12,side:THREE.DoubleSide}),3.65,.035,s.z);zone.rotation.x=-Math.PI/2;zone.name=`stopzone-${i}`;scene.add(zone)
    })
    // lamps, bollards, furniture
    for(let z=35;z<790;z+=48)for(const x of [-6.25,6.91]){const p=mesh(new THREE.CylinderGeometry(.07,.1,4.5,8),mat(0x354743,.45,.5),x,2.25,z);scene.add(p);p.add(mesh(new THREE.BoxGeometry(.7,.12,.15),mat(0x303c39),x<0?.3:-.3,2.15,0))}
    const bus=buildBus();scene.add(bus)
    const traffic:Traffic[]=Array.from({length:10},(_,i)=>({id:`traffic-${i+1}`,x:i%2?2.7:-2.05,z:135+i*61,speed:5.2+(i%4)*.8,direction:i%2?-1:1}))
    const colors=[0xe2a12b,0xc74339,0x315d7b,0xe0e3de,0x348e67]
    traffic.forEach((t,i)=>{t.mesh=buildCar(colors[i%colors.length]);t.mesh.position.set(t.x,0,t.z);t.mesh.rotation.y=t.direction<0?Math.PI:0;scene.add(t.mesh)})
    const headL=new THREE.SpotLight(0xfff1c1,0,45,.45,.5,1.2),headR=headL.clone();scene.add(headL,headR,headL.target,headR.target)
    let doorMesh=bus.getObjectByName('door') as THREE.Mesh
    const camPos=new THREE.Vector3(),target=new THREE.Vector3(),clockLast=performance.now(), worldCam={position:{x:0,y:0,z:0},target:{x:0,y:0,z:0},fov:53}

    function applyQuality(){const p=profiles[r.quality];renderer.setPixelRatio(Math.min(devicePixelRatio,p.pixelRatio));camera.far=p.renderDistance;scene.fog=new THREE.Fog(0xacc9c3,70,p.renderDistance);camera.updateProjectionMatrix();resize()}
    function resize(){const rect=canvas.getBoundingClientRect();renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/Math.max(1,rect.height);camera.updateProjectionMatrix();r.canvasW=canvas.width;r.canvasH=canvas.height}
    function resetVisual(){bus.position.set(r.x,0,r.z);bus.rotation.y=r.heading;traffic.forEach((t,i)=>{t.z=135+i*61;t.mesh!.position.z=t.z})}
    function beep(){try{const C=(window.AudioContext||(window as any).webkitAudioContext);const ac=new C(),o=ac.createOscillator(),g=ac.createGain();o.frequency.value=190;g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.18);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.18)}catch{}}
    apiRef.current={applyQuality,resetVisual,beep,traffic,solids,worldCam,renderer,camera};applyQuality();window.addEventListener('resize',resize)

    const nearbyCollision=(nx:number,nz:number)=>{
      if(Math.abs(nx-.33)>3.9)return 'road edge barrier'
      for(const t of traffic)if(Math.abs(nx-t.x)<2.05&&Math.abs(nz-t.z)<6.1)return t.id
      for(const o of solids)if(Math.abs(nx-o.x)<o.halfWidth+1.25&&Math.abs(nz-o.z)<o.halfLength+4.4)return o.id
      return ''
    }
    function simulate(dt:number){
      if(r.phase!=='playing')return;r.elapsed+=dt;r.tick++
      const W=r.pressed.has('KeyW')||r.pressed.has('ArrowUp'),S=r.pressed.has('KeyS')||r.pressed.has('ArrowDown'),A=r.pressed.has('KeyA')||r.pressed.has('ArrowLeft'),D=r.pressed.has('KeyD')||r.pressed.has('ArrowRight')
      r.throttle=W?1:0;r.brake=S&&r.velocity>1?1:0;r.steering=(D?1:0)-(A?1:0)
      if(r.doorOpen&&Math.abs(r.velocity)>.15)r.velocity*=Math.max(0,1-dt*7)
      else if(r.parkingBrake)r.velocity*=Math.max(0,1-dt*dynamics.parkingBrakeDamping)
      else if(W&&r.fuel>0)r.velocity+=dynamics.throttleAcceleration*dt*(1-Math.max(0,r.velocity)/dynamics.maxForwardSpeedMps)
      else if(S){if(r.velocity>.3)r.velocity-=dynamics.serviceBrakeDeceleration*dt;else{r.velocity-=dynamics.reverseAcceleration*dt;r.gear='R'}}
      else {r.velocity-=Math.sign(r.velocity)*Math.min(Math.abs(r.velocity),dynamics.rollingResistance*dt);if(Math.abs(r.velocity)<.1)r.gear='D'}
      r.velocity=THREE.MathUtils.clamp(r.velocity,-dynamics.maxReverseSpeedMps,dynamics.maxForwardSpeedMps)
      const steerFactor=Math.min(1,Math.abs(r.velocity)/4);r.wheelAngle=r.steering*dynamics.maxWheelAngleDeg*steerFactor
      r.heading+=r.steering*THREE.MathUtils.degToRad(dynamics.steeringRateDegPerSec)*dt*steerFactor*(r.velocity<0?-1:1)
      r.heading=THREE.MathUtils.clamp(r.heading,-.6,.6)
      const nx=r.x+Math.sin(r.heading)*r.velocity*dt,nz=r.z+Math.cos(r.heading)*r.velocity*dt
      const hit=nearbyCollision(nx,nz)
      if(hit){if(Math.abs(r.velocity)>1){r.collisionCount++;r.damage=Math.min(100,r.damage+Math.abs(r.velocity)*.15);r.lastCollision=hit;r.message=`Collision · ${hit.replace(/-/g,' ')}`}r.velocity*=-.08}
      else{r.x=nx;r.z=nz;r.odo+=Math.abs(r.velocity)*dt/1000;if(r.throttle)r.fuel=Math.max(0,r.fuel-Math.abs(r.velocity)*dt*.0018)}
      for(const t of traffic){t.z+=t.speed*t.direction*dt;if(t.z>815)t.z=8;if(t.z<5)t.z=810}
      const stop=stops[r.nextStop];if(stop){const at=Math.abs(r.z-stop.z)<=10.5&&Math.abs(r.x-3.2)<=4.2
        if(at&&Math.abs(r.velocity)<=dynamics.boardingSpeedMps&&r.doorOpen){r.boarding=Math.min(1,r.boarding+dt/1.25);r.message=`Boarding at ${stop.name} · ${Math.round(r.boarding*100)}%`
          if(r.boarding>=1){const n=stop.waiting;r.passengerCount=Math.min(42,r.passengerCount+n);r.boardedTotal+=n;r.score+=n*18000;r.nextStop++;r.boarding=0;r.doorOpen=false;r.message=`${n} passengers boarded · +Rp ${(n*18000).toLocaleString('id-ID')}`;r.missionStatus=r.nextStop===3?'ROUTE COMPLETE':'STOP SERVED';if(r.nextStop===3){r.phase='complete';r.message='Route complete — excellent service!'}}
        }else if(!at||!r.doorOpen)r.boarding=0
      }
    }
    function updateVisual(now:number){
      bus.position.set(r.x,0,r.z);bus.rotation.y=r.heading;doorMesh.position.x=r.doorOpen?-1.72:-1.31;doorMesh.rotation.y=r.doorOpen?-.65:0
      bus.children.filter(x=>x.name==='wheel').forEach(w=>w.rotation.x+=r.velocity*.012)
      traffic.forEach(t=>{t.mesh!.position.set(t.x,0,t.z)})
      const blink=Math.floor(now/450)%2===0;bus.children.forEach((o:any)=>{if(o.material&&o.geometry?.type==='BoxGeometry'&&o.position.z>4.5&&Math.abs(o.position.x)>.9)o.material.emissive?.setHex((r.indicator!=='off'&&blink)?0xff6a00:0)})
      headL.intensity=r.headlights?70:0;headR.intensity=r.headlights?70:0
      for(const [l,x] of [[headL,-.75],[headR,.75]] as const){l.position.set(r.x+x,1.2,r.z+4.3);l.target.position.set(r.x+x,0,r.z+35)}
      const forward=new THREE.Vector3(Math.sin(r.heading),0,Math.cos(r.heading)),right=new THREE.Vector3(Math.cos(r.heading),0,-Math.sin(r.heading))
      if(r.camera==='chase'){camPos.copy(new THREE.Vector3(r.x,4.7,r.z)).addScaledVector(forward,-12).addScaledVector(right,-.9);target.set(r.x,1.6,r.z).addScaledVector(forward,11);camera.fov=53}
      if(r.camera==='showcase'){camPos.copy(new THREE.Vector3(r.x,2.6,r.z)).addScaledVector(forward,-7).addScaledVector(right,7);target.set(r.x,1.5,r.z+1);camera.fov=48}
      if(r.camera==='cockpit'){camPos.set(r.x,2.28,r.z).addScaledVector(forward,3.55).addScaledVector(right,-.42);target.copy(camPos).addScaledVector(forward,25);camera.fov=66}
      if(r.camera==='cinematic'){const a=now*.00012;camPos.set(r.x+Math.cos(a)*13,5.3,r.z+Math.sin(a)*13);target.set(r.x,1.5,r.z);camera.fov=47}
      if(r.camera==='stopside'){const s=stops[Math.min(r.nextStop,2)];camPos.set(10,3.7,Math.abs(r.z-s.z)<70?s.z-7:r.z-6);target.set(r.x,1.5,r.z);camera.fov=52}
      camera.position.lerp(camPos,.08);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,worldCam.fov,.01);camera.updateProjectionMatrix()
      worldCam.position={x:+camera.position.x.toFixed(2),y:+camera.position.y.toFixed(2),z:+camera.position.z.toFixed(2)};worldCam.target={x:+target.x.toFixed(2),y:+target.y.toFixed(2),z:+target.z.toFixed(2)};worldCam.fov=camera.fov
    }
    let last=clockLast,acc=0,uiTimer=0,raf=0
    function loop(now:number){const delta=Math.min(.1,(now-last)/1000);last=now;if(r.phase==='playing')acc=Math.min(acc+delta,.0667);while(acc>=1/60){simulate(1/60);acc-=1/60}r.accumulator=acc;updateVisual(now);renderer.render(scene,camera);r.frame++;r.drawCalls=renderer.info.render.calls;uiTimer+=delta;if(uiTimer>.1){uiTimer=0;sync()}raf=requestAnimationFrame(loop)}
    raf=requestAnimationFrame(loop)
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize);renderer.dispose();scene.traverse((o:any)=>{o.geometry?.dispose?.();if(Array.isArray(o.material))o.material.forEach((m:any)=>m.dispose());else o.material?.dispose?.()})}
  },[sync])

  useEffect(()=>{
    const down=(e:KeyboardEvent)=>{if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){e.preventDefault();hold(e.code,true,'mouse')}if(e.repeat)return;if(e.code==='Space')action('parking');if(e.code==='KeyE')action('door');if(e.code==='KeyL')action('lights');if(e.code==='KeyC')action('camera');if(e.code==='KeyP'||e.code==='Escape')action('pause');if(e.code==='KeyQ')action('indicator','left');if(e.code==='KeyR')action('indicator','right');if(e.code==='KeyH')action('horn',true)}
    const up=(e:KeyboardEvent)=>{hold(e.code,false,'mouse');if(e.code==='KeyH')action('horn',false)}
    const clear=()=>{runtime.current.pressed.clear();runtime.current.throttle=0;runtime.current.brake=0;runtime.current.steering=0;runtime.current.hornActive=false}
    window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear)
    return()=>{window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear)}
  },[action,hold])

  useEffect(()=>{
    const get=()=>runtime.current
    const stopStates=()=>stops.map((s,i)=>({...s,status:i<get().nextStop?'complete':i===get().nextStop?'next':'upcoming'}))
    const nearSolids=()=>((apiRef.current.solids||[]) as Solid[]).filter(o=>Math.abs(o.z-get().z)<90).slice(0,12)
    const atStop=()=>get().nextStop<3&&Math.abs(get().z-stops[get().nextStop].z)<=10.5&&Math.abs(get().x-3.2)<=4.2
    const baseVehicle=()=>({id:'NLX-880',type:'12m Luxury Coach',position:{x:get().x,z:get().z},headingDeg:THREE.MathUtils.radToDeg(get().heading),speedKph:Math.abs(get().velocity)*3.6,velocity:get().velocity,throttle:get().throttle,brake:get().brake,steering:get().steering,gear:get().gear,parkingBrake:get().parkingBrake,doorOpen:get().doorOpen,headlights:get().headlights,indicator:get().indicator,hornActive:get().hornActive,fuel:get().fuel,damage:get().damage,odometerKm:get().odo,wheelAngle:get().wheelAngle,collisionCount:get().collisionCount,lastCollision:get().lastCollision,dynamics})
    ;(window as any).__bus={getState:()=>({phase:get().phase,speedKph:Math.abs(get().velocity)*3.6,position:{x:get().x,z:get().z},headingDeg:THREE.MathUtils.radToDeg(get().heading),doorOpen:get().doorOpen,passengerCount:get().passengerCount,nextStopIndex:get().nextStop,routeProgress:Math.min(1,(get().z-20)/650),fuel:get().fuel,score:get().score})}
    ;(window as any).__game={getState:()=>({phase:get().phase,elapsed:get().elapsed,paused:get().phase==='paused',missionStatus:get().missionStatus,score:get().score,message:get().message})}
    ;(window as any).__vehicle={getState:baseVehicle}
    ;(window as any).__route={getState:()=>({name:'Bandung · Kota Lama · Selatan',stopCount:3,currentStopIndex:get().nextStop,stops:stopStates().map(({waiting,...s})=>s),nextStopDistance:get().nextStop<3?Math.max(0,stops[get().nextStop].z-get().z):0,atStop:atStop(),completed:get().nextStop===3,earnings:get().score,service:{stopLongitudinalHalfLength:10.5,stopLateralHalfWidth:4.2,boardingDuration:1.25}})}
    ;(window as any).__passengers={getState:()=>({onboard:get().passengerCount,capacity:42,boardedTotal:get().boardedTotal,waitingAtNext:get().nextStop<3?stops[get().nextStop].waiting:0,boardingProgress:get().boarding})}
    ;(window as any).__traffic={getState:()=>({count:(apiRef.current.traffic||[]).length,density:profiles[get().quality].density,vehicles:(apiRef.current.traffic||[]).map((t:Traffic)=>({id:t.id,x:t.x,z:t.z,speedKph:t.speed*3.6,direction:t.direction}))})}
    ;(window as any).__world={getState:()=>({environment:'Tropical intercity corridor',weather:'Sunbreak after rain',timeOfDay:'16:20',roadCenter:.33,roadHalfWidth:5.2,surface:'asphalt',nearStopMarkers:stops.filter(s=>Math.abs(s.z-get().z)<90).length,solidObstacleCount:(apiRef.current.solids||[]).length,collision:{roadEdgeEnabled:true,trafficEnabled:true,solidObjectsEnabled:true,busWidth:2.55,busLength:8.9},nearbySolidObstacles:nearSolids()})}
    ;(window as any).__camera={getState:()=>({mode:get().camera,...(apiRef.current.worldCam||{position:{x:0,y:0,z:0},target:{x:0,y:0,z:0},fov:53}),near:.1,far:profiles[get().quality].renderDistance,modes:cameraModes})}
    ;(window as any).__input={getState:()=>({pressed:Array.from(get().pressed),lastAction:get().lastAction,lastPointerType:get().lastPointerType,mobileControls:innerWidth<=720})}
    ;(window as any).__renderer={getState:()=>({backend:'WebGL',contextLost:get().contextLost,frame:get().frame,drawCalls:get().drawCalls,canvas:{width:get().canvasW,height:get().canvasH},quality:get().quality,pixelRatio:profiles[get().quality].pixelRatio,renderDistance:profiles[get().quality].renderDistance,webglVersion:get().webglVersion,dynamicLighting:true,fog:true,antialias:true,shadowsEnabled:false})}
    ;(window as any).__performance={getState:()=>({elapsed:get().elapsed,tick:get().tick,frame:get().frame,fixedStep:1/60,accumulator:get().accumulator,maxSubSteps:4,uiUpdates:get().uiUpdates,mounted:true})}
    ;(window as any).__settings={getState:()=>({quality:get().quality,masterVolume:.8,pixelRatio:profiles[get().quality].pixelRatio,trafficDensity:profiles[get().quality].density,renderDistance:profiles[get().quality].renderDistance,qualityProfiles:profiles})}
    return()=>{['__bus','__game','__vehicle','__route','__passengers','__traffic','__world','__camera','__input','__renderer','__performance','__settings'].forEach(k=>delete (window as any)[k])}
  },[])

  const next=stops[ui.nextStop]
  return <main className="relative h-full w-full overflow-hidden bg-[#07110f] select-none">
    <canvas ref={canvasRef} className="game-canvas" />
    <div className="pointer-events-none absolute inset-0 fade-top h-28"/><div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 fade-bottom"/>
    {!menu && <>
      <header className="absolute left-0 right-0 top-0 flex items-start justify-between gap-2 p-3 md:p-5 pointer-events-none">
        <div className="glass rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-emerald-500/15 border border-emerald-300/25 flex items-center justify-center text-emerald-300 condensed font-extrabold">NL</div>
          <div><div className="condensed text-[11px] tracking-[.22em] text-emerald-300/80">NUSANTARA LINES</div><div className="text-xs md:text-sm font-semibold">Bandung Selatan <span className="text-white/40 mx-1">/</span> NLX-880</div></div>
        </div>
        <div className="flex gap-2 pointer-events-auto">
          <button className="control-btn h-11 w-11 rounded-xl" aria-label="Cycle camera" onClick={()=>action('camera')}><Icon name="camera"/></button>
          <button className="control-btn h-11 w-11 rounded-xl" aria-label="Pause" onClick={()=>action('pause')}><Icon name={ui.phase==='paused'?'play':'pause'}/></button>
        </div>
      </header>
      <aside className="absolute left-3 top-[82px] md:left-5 md:top-28 w-[178px] md:w-[220px] glass rounded-xl overflow-hidden pointer-events-none">
        <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between"><span className="condensed text-[10px] tracking-[.2em] text-white/50">ROUTE SERVICE</span><span className="text-[9px] px-2 py-1 rounded bg-emerald-400/15 text-emerald-300">{ui.missionStatus}</span></div>
        <div className="p-3"><div className="text-[10px] text-white/45">NEXT STOP · {Math.max(0,Math.round(ui.nextDistance))}m</div><div className="condensed text-xl font-bold">{next?.name||'Route complete'}</div>
          <div className="mt-3 flex gap-1">{stops.map((s,i)=><div key={s.id} className={`h-1.5 flex-1 rounded-full ${i<ui.nextStop?'bg-emerald-400':i===ui.nextStop?'bg-amber-300 pulse-ring':'bg-white/15'}`}/>)}</div>
          <div className="mt-2 text-[9px] flex justify-between text-white/40"><span>DEPOT</span><span>{ui.nextStop}/3 SERVED</span></div>
          {ui.boarding>0&&<div className="mt-3"><div className="flex justify-between text-[10px] text-emerald-200"><span>BOARDING</span><span>{Math.round(ui.boarding*100)}%</span></div><div className="h-1 mt-1 bg-white/10"><div className="h-full bg-emerald-400" style={{width:`${ui.boarding*100}%`}}/></div></div>}
        </div>
      </aside>
      <div className="absolute right-3 top-[82px] md:right-5 md:top-28 glass rounded-xl px-3 py-2 md:px-4 pointer-events-none text-right">
        <div className="text-[9px] tracking-widest text-white/45">PASSENGERS</div><div className="condensed text-xl font-bold">{ui.passengerCount}<span className="text-sm text-white/30"> / 42</span></div><div className="text-[10px] text-emerald-300">Rp {ui.score.toLocaleString('id-ID')}</div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[min(92vw,560px)] pointer-events-none">
        <div className="mb-2 mx-auto w-fit rounded-full glass px-4 py-1.5 text-[10px] md:text-xs text-center hud-shadow">{ui.message}</div>
        <div className="glass rounded-2xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between gap-4 meter-grid">
          <div className="min-w-[74px]"><div className="condensed text-4xl md:text-5xl leading-none font-bold tabular-nums">{Math.round(ui.speedKph)}</div><div className="text-[9px] tracking-[.2em] text-white/45">KM/H · {ui.gear}</div></div>
          <div className="flex-1 max-w-[230px]"><div className="flex justify-between text-[9px] tracking-wider"><span>FUEL</span><span>{Math.round(ui.fuel)}%</span></div><div className="h-1.5 mt-1.5 bg-black/30 rounded-full overflow-hidden"><div className={`h-full ${ui.fuel<20?'bg-rose-400':'bg-emerald-400'}`} style={{width:`${ui.fuel}%`}}/></div><div className="mt-2 flex gap-2 text-[9px] text-white/50"><span className={ui.doorOpen?'text-amber-300':''}>DOOR {ui.doorOpen?'OPEN':'LOCK'}</span><span className={ui.parkingBrake?'text-rose-300':''}>PARK {ui.parkingBrake?'ON':'OFF'}</span><span>{ui.camera.toUpperCase()}</span></div></div>
          <div className="text-right hidden sm:block"><div className="text-[9px] text-white/40">TRIP</div><div className="condensed text-lg font-semibold">{ui.odo.toFixed(1)} km</div></div>
        </div>
      </div>
      <div className="desktop-only absolute right-5 bottom-28 flex gap-2 pointer-events-auto">
        <button onClick={()=>action('indicator','left')} className={`control-btn rounded-xl h-10 w-10 ${ui.indicator==='left'?'active':''}`}>←</button><button onClick={()=>action('lights')} className={`control-btn rounded-xl h-10 w-10 ${ui.headlights?'active':''}`}><Icon name="light"/></button><button onClick={()=>action('door')} className={`control-btn rounded-xl h-10 w-10 ${ui.doorOpen?'active':''}`}><Icon name="door"/></button><button onClick={()=>action('parking')} className={`control-btn rounded-xl h-10 w-10 ${ui.parkingBrake?'active':''}`}>P</button><button onClick={()=>action('indicator','right')} className={`control-btn rounded-xl h-10 w-10 ${ui.indicator==='right'?'active':''}`}>→</button>
      </div>
      <div className="mobile-only absolute inset-x-3 bottom-28 flex justify-between items-end pointer-events-none">
        <div className="grid grid-cols-3 gap-2 pointer-events-auto"><div/><HoldButton label="▲" code="KeyW" hold={hold}/><div/><HoldButton label="◀" code="KeyA" hold={hold}/><HoldButton label="▼" code="KeyS" hold={hold}/><HoldButton label="▶" code="KeyD" hold={hold}/></div>
        <div className="grid grid-cols-2 gap-2 pointer-events-auto"><button onClick={()=>action('door')} className={`control-btn rounded-full h-12 w-12 ${ui.doorOpen?'active':''}`}><Icon name="door"/></button><button onPointerDown={()=>action('horn',true)} onPointerUp={()=>action('horn',false)} className="control-btn rounded-full h-12 w-12"><Icon name="horn"/></button><button onClick={()=>action('parking')} className={`control-btn rounded-full h-12 w-12 font-bold ${ui.parkingBrake?'active':''}`}>P</button><button onClick={()=>action('lights')} className={`control-btn rounded-full h-12 w-12 ${ui.headlights?'active':''}`}><Icon name="light"/></button></div>
      </div>
    </>}
    {menu&&<div className="absolute inset-0 bg-gradient-to-r from-[#05110f]/95 via-[#071512]/72 to-transparent flex items-center">
      <div className="w-full max-w-xl px-7 md:pl-16 md:pr-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] tracking-[.24em] text-emerald-200">INDONESIAN INTERCITY EXPERIENCE</div>
        <h1 className="condensed mt-5 text-6xl md:text-8xl font-extrabold leading-[.78] tracking-tight">NUSANTARA<br/><span className="text-emerald-400">LINES</span></h1>
        <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/65">Command the NLX-880 luxury coach through a living tropical corridor. Serve three stops from Kota Lama to Terminal Selatan.</p>
        <div className="mt-7 grid grid-cols-3 gap-2 max-w-md"><Feature n="03" l="PASSENGER STOPS"/><Feature n="5" l="CAMERA MODES"/><Feature n="42" l="SEAT CAPACITY"/></div>
        <button onClick={()=>action('start')} className="mt-8 group h-14 px-7 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#052018] font-bold flex items-center gap-4 shadow-2xl shadow-emerald-950/60 transition"><span className="h-8 w-8 rounded-full bg-black/10 flex items-center justify-center"><Icon name="play"/></span>START SERVICE <span className="text-xs opacity-50">BANDUNG → SELATAN</span></button>
        <div className="mt-5 text-[10px] text-white/40 tracking-wider hidden md:block">WASD DRIVE · E DOOR · SPACE PARK · C CAMERA · L LIGHTS · P PAUSE</div>
      </div>
    </div>}
    {(ui.phase==='paused'||ui.phase==='complete')&&!menu&&<div className="absolute inset-0 bg-[#03100d]/70 backdrop-blur-sm flex items-center justify-center p-5">
      <div className="glass rounded-2xl p-7 w-full max-w-sm text-center"><div className="text-[10px] tracking-[.3em] text-emerald-300">{ui.phase==='complete'?'SERVICE REPORT':'SIMULATION'}</div><h2 className="condensed text-4xl font-bold mt-2">{ui.phase==='complete'?'ROUTE COMPLETE':'PAUSED'}</h2><p className="text-sm text-white/55 mt-2">{ui.message}</p>
        <div className="grid grid-cols-3 gap-2 my-6"><Feature n={`${ui.nextStop}/3`} l="STOPS"/><Feature n={`${ui.passengerCount}`} l="ONBOARD"/><Feature n={`${Math.round(ui.score/1000)}K`} l="RUPIAH"/></div>
        {ui.phase==='paused'&&<button onClick={()=>action('pause')} className="w-full py-3 rounded-xl bg-emerald-400 text-[#052018] font-bold">RESUME SERVICE</button>}
        <button onClick={()=>action('reset')} className="mt-2 w-full py-3 rounded-xl border border-white/15 hover:bg-white/5 text-sm">RESET ROUTE</button>
        <label className="mt-5 flex items-center justify-between text-xs text-white/50"><span>GRAPHICS QUALITY</span><select value={ui.quality} onChange={e=>action('quality',e.target.value)} className="bg-[#10231e] border border-white/15 rounded-lg px-2 py-1.5 text-white"><option value="cinematic">Cinematic</option><option value="high">High</option><option value="balanced">Balanced</option></select></label>
      </div>
    </div>}
  </main>
}

function snapshotUI(r:Runtime){return {phase:r.phase,message:r.message,missionStatus:r.missionStatus,speedKph:Math.abs(r.velocity)*3.6,fuel:r.fuel,passengerCount:r.passengerCount,nextStop:r.nextStop,nextDistance:r.nextStop<3?stops[r.nextStop].z-r.z:0,boarding:r.boarding,score:r.score,gear:r.gear,doorOpen:r.doorOpen,parkingBrake:r.parkingBrake,indicator:r.indicator,headlights:r.headlights,camera:r.camera,odo:r.odo,quality:r.quality}}
function Feature({n,l}:{n:string,l:string}){return <div className="rounded-lg border border-white/10 bg-white/[.04] p-2.5"><div className="condensed text-xl font-bold text-white">{n}</div><div className="text-[8px] tracking-wider text-white/40">{l}</div></div>}
function HoldButton({label,code,hold}:{label:string,code:string,hold:(c:string,on:boolean,p?:string)=>void}){return <button className="control-btn rounded-xl h-12 w-12 text-lg" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);hold(code,true,e.pointerType)}} onPointerUp={e=>hold(code,false,e.pointerType)} onPointerCancel={e=>hold(code,false,e.pointerType)}>{label}</button>}
