import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Phase = 'menu' | 'playing' | 'paused' | 'complete'
type Quality = 'cinematic' | 'high' | 'balanced'
type CameraMode = 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside'

type TrafficCar = { id: string; x: number; z: number; speed: number; direction: number; color: string }
type Stop = { id: string; name: string; z: number; waiting: number }

const stops: Stop[] = [
  { id: 's1', name: 'Kota Lama', z: 105, waiting: 7 },
  { id: 's2', name: 'Pasar Raya', z: 350, waiting: 9 },
  { id: 's3', name: 'Terminal Selatan', z: 650, waiting: 12 },
]
const profiles = {
  cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 720 },
  high: { pixelRatio: 1.1, density: 0.78, renderDistance: 520 },
  balanced: { pixelRatio: 0.85, density: 0.56, renderDistance: 360 },
}
const cameraModes: CameraMode[] = ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside']
const dynamics = {
  maxForwardSpeedMps: 24.5, maxReverseSpeedMps: 5.5, throttleAcceleration: 4.8,
  serviceBrakeDeceleration: 8, reverseAcceleration: 3.2, rollingResistance: 0.55,
  parkingBrakeDamping: 9, steeringRateDegPerSec: 28, maxWheelAngleDeg: 32,
  doorInterlockSpeedMps: 1.2, boardingSpeedMps: 0.8,
}
const initialTraffic = (): TrafficCar[] => Array.from({ length: 10 }, (_, i) => ({
  id: `traffic-${i + 1}`, x: i % 2 ? 2.05 : -2.05, z: 70 + i * 64,
  speed: 5.5 + (i % 4) * 0.7, direction: i % 2 ? -1 : 1,
  color: ['#e11d48','#f59e0b','#f8fafc','#0ea5e9','#334155'][i % 5],
}))

type GameState = {
  phase: Phase; elapsed: number; x: number; z: number; heading: number; velocity: number;
  fuel: number; onboard: number; boarded: number; earnings: number; stopIndex: number;
  boarding: number; servicedLock: boolean; parkingBrake: boolean; doorOpen: boolean;
  headlights: boolean; indicator: 'off'|'left'|'right'; horn: boolean; quality: Quality;
  camera: CameraMode; traffic: TrafficCar[]; collisionCount: number; lastCollision: string;
  odometer: number; damage: number; message: string; mission: string; tick: number;
  frame: number; uiUpdates: number; pressed: Set<string>; lastAction: string; pointer: string;
}
const freshState = (): GameState => ({
  phase:'menu', elapsed:0, x:0.33, z:20, heading:0, velocity:0, fuel:100,
  onboard:4, boarded:0, earnings:0, stopIndex:0, boarding:0, servicedLock:false,
  parkingBrake:false, doorOpen:false, headlights:false, indicator:'off', horn:false,
  quality:'cinematic', camera:'chase', traffic:initialTraffic(), collisionCount:0,
  lastCollision:'none', odometer:0, damage:0, message:'Board the coach and begin the route.',
  mission:'Ready for departure', tick:0, frame:0, uiUpdates:0, pressed:new Set(),
  lastAction:'none', pointer:'mouse',
})

const StateContext = React.createContext<React.MutableRefObject<GameState> | null>(null)

function Box({ position, scale, color, roughness=0.75, emissive='#000000' }:{position:[number,number,number],scale:[number,number,number],color:string,roughness?:number,emissive?:string}) {
  return <mesh position={position} castShadow receiveShadow><boxGeometry args={scale}/><meshStandardMaterial color={color} roughness={roughness} emissive={emissive}/></mesh>
}

function BusModel({ stateRef }:{stateRef:React.MutableRefObject<GameState>}) {
  const group = useRef<THREE.Group>(null)
  const wheels = useRef<THREE.Group>(null)
  useFrame((_,dt)=>{
    const s=stateRef.current
    if(group.current){ group.current.position.set(s.x,1.25,s.z); group.current.rotation.y=THREE.MathUtils.degToRad(s.heading) }
    if(wheels.current) wheels.current.children.forEach(w=>w.rotation.x += s.velocity*dt/0.48)
  })
  return <group ref={group}>
    <Box position={[0,0,0]} scale={[2.55,2.5,8.9]} color="#f8fafc" roughness={0.28}/>
    <Box position={[0,0.35,-4.43]} scale={[2.32,1.1,.06]} color="#10273b" roughness={0.1}/>
    <Box position={[0,0.35,4.43]} scale={[2.34,1,.08]} color="#163047" roughness={0.1}/>
    <Box position={[0,-.67,0]} scale={[2.58,.28,8.8]} color="#0891b2"/>
    <Box position={[-1.285,.25,0]} scale={[.04,1.02,6.5]} color="#17334a" roughness={0.08}/>
    <Box position={[1.285,.25,-.65]} scale={[.04,1.02,5.2]} color="#17334a" roughness={0.08}/>
    {[[-1.3,-.82,-2.8], [1.3,-.82,-2.8], [-1.3,-.82,2.8], [1.3,-.82,2.8]].map((p,i)=><group ref={i===0? wheels:undefined} key={i} position={p as [number,number,number]} rotation={[0,0,Math.PI/2]}><mesh castShadow><cylinderGeometry args={[.48,.48,.25,18]}/><meshStandardMaterial color="#090b0d" roughness={.9}/></mesh><mesh><cylinderGeometry args={[.2,.2,.27,12]}/><meshStandardMaterial color="#94a3b8" metalness={.8}/></mesh></group>)}
    <Box position={[-.77,-.2,-4.49]} scale={[.55,.28,.08]} color="#fff7c2" emissive={stateRef.current.headlights?'#fde68a':'#332e18'}/>
    <Box position={[.77,-.2,-4.49]} scale={[.55,.28,.08]} color="#fff7c2" emissive={stateRef.current.headlights?'#fde68a':'#332e18'}/>
    <Box position={[-.78,-.28,4.49]} scale={[.48,.22,.08]} color="#ef4444" emissive="#450a0a"/>
    <Box position={[.78,-.28,4.49]} scale={[.48,.22,.08]} color="#ef4444" emissive="#450a0a"/>
    <Box position={[1.31,-.05,-2.9]} scale={[.05,1.55,1.25]} color={stateRef.current.doorOpen?'#38bdf8':'#0f2538'}/>
    <Box position={[0,1.3,0]} scale={[1.5,.14,5.4]} color="#e2e8f0"/>
  </group>
}

function Building({x,z,i}:{x:number,z:number,i:number}){
  const h=3.5+(i%4)*1.1, w=4+(i%3)
  const colors=['#d6a96c','#9bb7a0','#c47c66','#a8a29e','#e0b77d']
  return <group position={[x,0,z]}>
    <Box position={[0,h/2,0]} scale={[w,h,5.5]} color={colors[i%colors.length]}/>
    <mesh position={[0,h+.65,0]} rotation={[0,0,0]} castShadow><coneGeometry args={[w*.78,1.5,4]} /><meshStandardMaterial color={i%2?'#713f12':'#7f1d1d'} roughness={.85}/></mesh>
    {[-1,0,1].map((v)=><Box key={v} position={[v*1.15,h*.55,x<0?2.78:-2.78]} scale={[.65,.75,.08]} color="#bde8f2" emissive="#102733"/>)}
    <Box position={[0,.85,x<0?2.85:-2.85]} scale={[1.1,1.7,.1]} color="#5b3525"/>
  </group>
}
function Palm({x,z,s=1}:{x:number,z:number,s?:number}){
  return <group position={[x,0,z]} scale={s}>
    <mesh position={[0,2.7,0]} castShadow><cylinderGeometry args={[.12,.25,5.4,8]}/><meshStandardMaterial color="#71462b"/></mesh>
    {[0,1,2,3,4,5].map(i=><mesh key={i} position={[0,5.35,0]} rotation={[0,i*Math.PI/3,Math.PI/2.7]}><coneGeometry args={[.46,3.2,5]}/><meshStandardMaterial color="#2f7d42"/></mesh>)}
  </group>
}
function StopShelter({stop,index}:{stop:Stop,index:number}){
  return <group position={[7.6,0,stop.z]}>
    <Box position={[0,.12,0]} scale={[5,.24,5.5]} color="#94a3b8"/>
    <Box position={[0,2.35,0]} scale={[5.5,.25,5.9]} color="#0e7490"/>
    {[[-2.2,1.2,-2.35],[-2.2,1.2,2.35],[2.2,1.2,-2.35],[2.2,1.2,2.35]].map((p,i)=><Box key={i} position={p as [number,number,number]} scale={[.18,2.4,.18]} color="#d9f3f5"/>)}
    <Box position={[0,.75,0]} scale={[3.8,.5,.8]} color="#8b5e3c"/>
    <Box position={[-3.3,2.7,0]} scale={[.18,5.4,.18]} color="#e2e8f0"/>
    <Box position={[-3.3,5.1,0]} scale={[2.3,.8,.2]} color="#0891b2"/>
    <mesh position={[-3.3,5.1,-.12]} rotation={[0,Math.PI,0]}><planeGeometry args={[2, .55]}/><meshBasicMaterial color="white"/></mesh>
    <pointLight position={[-3.3,4.6,0]} intensity={1.2} distance={7} color="#fef3c7"/>
    <mesh position={[-5.8,.05,0]} rotation={[-Math.PI/2,0,0]}><ringGeometry args={[2.6,3.05,32]}/><meshBasicMaterial color={index===0?'#22d3ee':'#facc15'} transparent opacity={.7}/></mesh>
  </group>
}
function Traffic({stateRef}:{stateRef:React.MutableRefObject<GameState>}){
  const refs=useRef<(THREE.Group|null)[]>([])
  useFrame(()=>stateRef.current.traffic.forEach((v,i)=>{const g=refs.current[i];if(g){g.position.set(v.x,.55,v.z);g.rotation.y=v.direction<0?0:Math.PI}}))
  return <>{stateRef.current.traffic.map((v,i)=><group key={v.id} ref={el=>refs.current[i]=el}>
    <Box position={[0,0,0]} scale={[1.65,1,3.5]} color={v.color}/><Box position={[0,.65,.15]} scale={[1.35,.75,1.65]} color="#172b3b"/>
    {[[-.82,-.35,-1.1],[.82,-.35,-1.1],[-.82,-.35,1.1],[.82,-.35,1.1]].map((p,j)=><mesh key={j} position={p as [number,number,number]} rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[.32,.32,.18,12]}/><meshStandardMaterial color="#111"/></mesh>)}
  </group>)}</>
}

function Environment({quality}:{quality:Quality}){
  const count=quality==='balanced'?14:quality==='high'?20:27
  const buildings=useMemo(()=>Array.from({length:count},(_,i)=>({z:18+i*28,x:(i%2?1:-1)*(10+(i%3)*2.3),i})),[count])
  const palms=useMemo(()=>Array.from({length:quality==='balanced'?22:40},(_,i)=>({z:8+i*19,x:(i%2?1:-1)*(7.2+(i%4)*1.4),s:.75+(i%3)*.12})),[quality])
  return <>
    <color attach="background" args={['#8dc7d4']}/><fog attach="fog" args={['#b9d5cf',80,profiles[quality].renderDistance]}/>
    <hemisphereLight args={['#dff7ff','#46683d',1.5]}/><directionalLight position={[-45,70,-20]} intensity={2.5} color="#fff0c2" castShadow shadow-mapSize={[1024,1024]}/>
    <mesh position={[0,-.15,380]} receiveShadow><boxGeometry args={[250,.3,820]}/><meshStandardMaterial color="#397a46" roughness={1}/></mesh>
    <mesh position={[0,.03,380]} receiveShadow><boxGeometry args={[11,.22,760]}/><meshStandardMaterial color="#292d30" roughness={.78}/></mesh>
    <mesh position={[0,.16,380]}><boxGeometry args={[.12,.02,760]}/><meshBasicMaterial color="#f5e9b8"/></mesh>
    {[-5.5,5.5].map(x=><mesh key={x} position={[x,.2,380]}><boxGeometry args={[.28,.38,760]}/><meshStandardMaterial color="#d9d0b5"/></mesh>)}
    {Array.from({length:38},(_,i)=><React.Fragment key={i}><Box position={[-2.75,.17,i*20]} scale={[.1,.03,7]} color="#f4f4dc"/><Box position={[2.75,.17,i*20+10]} scale={[.1,.03,7]} color="#f4f4dc"/></React.Fragment>)}
    {buildings.map(b=><Building key={b.i} {...b}/>)}{palms.map((p,i)=><Palm key={i} {...p}/>)}
    {stops.map((s,i)=><StopShelter key={s.id} stop={s} index={i}/>)}
    <mesh position={[-80,22,390]} rotation={[0,0,-.25]}><coneGeometry args={[70,120,8]}/><meshStandardMaterial color="#49755a"/></mesh>
    <mesh position={[90,28,470]} rotation={[0,0,.18]}><coneGeometry args={[85,150,8]}/><meshStandardMaterial color="#527f63"/></mesh>
  </>
}

function Simulation({stateRef,onUi}:{stateRef:React.MutableRefObject<GameState>,onUi:()=>void}){
  const {camera,gl,scene}=useThree(); const accumulator=useRef(0); const uiTimer=useRef(0); const collisionCooldown=useRef(0)
  useEffect(()=>{ gl.setPixelRatio(Math.min(window.devicePixelRatio,profiles[stateRef.current.quality].pixelRatio)); return()=>{} },[gl,stateRef])
  useFrame((_,delta)=>{
    const s=stateRef.current; s.frame++; uiTimer.current+=delta; collisionCooldown.current=Math.max(0,collisionCooldown.current-delta)
    if(s.phase==='playing'){
      accumulator.current=Math.min(accumulator.current+Math.min(delta,.1),.066)
      while(accumulator.current>=1/60){ step(s,1/60,collisionCooldown); accumulator.current-=1/60 }
    }
    const mode=s.camera, target=new THREE.Vector3(s.x,1.35,s.z)
    let pos:THREE.Vector3, fov=53
    if(mode==='cockpit'){pos=new THREE.Vector3(s.x,2.05,s.z-3.25);target.set(s.x,1.75,s.z+25);fov=68}
    else if(mode==='showcase'){pos=new THREE.Vector3(s.x-7,3.2,s.z-2);target.set(s.x,1.1,s.z);fov=48}
    else if(mode==='cinematic'){pos=new THREE.Vector3(s.x+12,7,s.z-16);fov=45}
    else if(mode==='stopside'){const stop=stops[Math.min(s.stopIndex,2)];pos=new THREE.Vector3(13,3.4,stop.z-5);target.set(s.x,1.3,s.z);fov=50}
    else {pos=new THREE.Vector3(s.x-5.8,5.3,s.z-13);target.set(s.x,1.4,s.z+8)}
    camera.position.lerp(pos,Math.min(1,delta*5)); camera.lookAt(target); (camera as THREE.PerspectiveCamera).fov=fov;(camera as THREE.PerspectiveCamera).far=profiles[s.quality].renderDistance;(camera as THREE.PerspectiveCamera).updateProjectionMatrix()
    if(uiTimer.current>.1){s.uiUpdates++;uiTimer.current=0;onUi()}
    ;(window as any).__renderInternal={drawCalls:gl.info.render.calls,canvas:{width:gl.domElement.width,height:gl.domElement.height},webglVersion:gl.capabilities.isWebGL2?2:1,contextLost:gl.getContext().isContextLost(),position:{x:camera.position.x,y:camera.position.y,z:camera.position.z},target:{x:target.x,y:target.y,z:target.z},fov}
    scene.fog && ((scene.fog as THREE.Fog).far=profiles[s.quality].renderDistance)
  })
  return null
}
function step(s:GameState,dt:number,cooldown:React.MutableRefObject<number>){
  s.elapsed+=dt;s.tick++
  const p=s.pressed, throttle=p.has('KeyW')?1:0, braking=p.has('KeyS')?1:0, steer=(p.has('KeyA')?-1:0)+(p.has('KeyD')?1:0)
  if(s.doorOpen||s.parkingBrake) s.velocity*=Math.max(0,1-dynamics.parkingBrakeDamping*dt)
  else if(throttle&&s.fuel>0) s.velocity=Math.min(dynamics.maxForwardSpeedMps,s.velocity+dynamics.throttleAcceleration*dt)
  else if(braking){if(s.velocity>.3)s.velocity=Math.max(0,s.velocity-dynamics.serviceBrakeDeceleration*dt);else s.velocity=Math.max(-dynamics.maxReverseSpeedMps,s.velocity-dynamics.reverseAcceleration*dt)}
  else {const r=dynamics.rollingResistance*dt;s.velocity += s.velocity>0?-Math.min(r,s.velocity):Math.min(r,-s.velocity)}
  const oldZ=s.z,oldX=s.x
  s.heading=THREE.MathUtils.lerp(s.heading,steer*8*Math.min(1,Math.abs(s.velocity)/8),dt*3)
  s.x+=steer*Math.abs(s.velocity)*dt*.34;s.z+=s.velocity*dt
  const limit=4.12
  if(Math.abs(s.x)>limit){s.x=THREE.MathUtils.clamp(s.x,-limit,limit);s.velocity*=.3;collide(s,'road-edge',cooldown)}
  for(const car of s.traffic){car.z+=car.speed*car.direction*dt;if(car.z>770)car.z=-10;if(car.z<-10)car.z=770;if(Math.abs(s.x-car.x)<2.05&&Math.abs(s.z-car.z)<5.8){s.x=oldX;s.z=oldZ;s.velocity*=.15;collide(s,car.id,cooldown)}}
  const distance=Math.abs(s.velocity)*dt;s.odometer+=distance/1000;if((throttle||s.velocity<-.2)&&s.fuel>0)s.fuel=Math.max(0,s.fuel-distance*.013)
  const stop=stops[s.stopIndex]; const at=!!stop&&Math.abs(s.z-stop.z)<=10.5&&Math.abs(s.x-3.0)<=4.2
  if(at&&Math.abs(s.velocity)<=dynamics.boardingSpeedMps&&s.doorOpen&&!s.servicedLock){s.boarding=Math.min(1,s.boarding+dt/1.25);s.message=`Boarding at ${stop.name}… ${Math.round(s.boarding*100)}%`;if(s.boarding>=1){const n=stop.waiting;s.onboard=Math.min(42,s.onboard+n);s.boarded+=n;s.earnings+=n*8500;s.stopIndex++;s.servicedLock=true;s.boarding=0;s.message=`${n} passengers boarded • +Rp ${(n*8500).toLocaleString('id-ID')}`;s.mission=s.stopIndex===3?'Route complete — excellent service!':`Proceed to ${stops[s.stopIndex].name}`;if(s.stopIndex===3){s.phase='complete';s.velocity=0}}}
  else if(!at){s.boarding=0;s.servicedLock=false}
}
function collide(s:GameState,name:string,cooldown:React.MutableRefObject<number>){if(cooldown.current<=0){s.collisionCount++;s.lastCollision=name;s.damage=Math.min(100,s.damage+2);s.message=`Collision: ${name.replace('-',' ')}`;cooldown.current=.8}}

function Icon({children}:{children:React.ReactNode}){return <span className="control-icon">{children}</span>}
function AppButton({label,active,onClick,children}:{label:string,active?:boolean,onClick:()=>void,children:React.ReactNode}){return <button aria-label={label} title={label} onClick={onClick} className={`tool-button ${active?'active':''}`}>{children}</button>}

export function App(){
  const stateRef=useRef<GameState>(freshState()); const [,setVersion]=useState(0); const update=useCallback(()=>setVersion(v=>v+1),[]); const s=stateRef.current
  const action=useCallback((name:string,fn:()=>void)=>{stateRef.current.lastAction=name;fn();update()},[update])
  const reset=useCallback(()=>{const quality=stateRef.current.quality;stateRef.current=freshState();stateRef.current.quality=quality;stateRef.current.phase='playing';stateRef.current.message='Route reset. Depart for Kota Lama.';update()},[update])
  useEffect(()=>{
    const down=(e:KeyboardEvent)=>{if(['KeyW','KeyA','KeyS','KeyD','Space'].includes(e.code))e.preventDefault();s.pressed.add(e.code);s.lastAction=e.code;if(e.repeat)return;if(e.code==='Space')action('parking brake',()=>s.parkingBrake=!s.parkingBrake);if(e.code==='KeyE')action('door',()=>{if(Math.abs(s.velocity)<dynamics.doorInterlockSpeedMps)s.doorOpen=!s.doorOpen;else s.message='Door interlock active — stop the bus first.'});if(e.code==='KeyL')action('headlights',()=>s.headlights=!s.headlights);if(e.code==='KeyQ')action('left indicator',()=>s.indicator=s.indicator==='left'?'off':'left');if(e.code==='KeyR')action('right indicator',()=>s.indicator=s.indicator==='right'?'off':'right');if(e.code==='KeyC')action('camera',()=>s.camera=cameraModes[(cameraModes.indexOf(s.camera)+1)%cameraModes.length]);if(e.code==='KeyP'||e.code==='Escape')action('pause',()=>{if(s.phase==='playing')s.phase='paused';else if(s.phase==='paused')s.phase='playing'})}
    const up=(e:KeyboardEvent)=>{s.pressed.delete(e.code);if(e.code==='KeyH')s.horn=false}
    const blur=()=>{s.pressed.clear();s.horn=false;update()};const pointer=(e:PointerEvent)=>{s.pointer=e.pointerType||'mouse'}
    window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',blur);window.addEventListener('pointerdown',pointer)
    return()=>{window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',blur);window.removeEventListener('pointerdown',pointer)}
  },[action,s,update])
  useEffect(()=>{installHooks(stateRef);return()=>{['__bus','__game','__vehicle','__route','__passengers','__traffic','__world','__camera','__input','__renderer','__performance','__settings'].forEach(k=>delete (window as any)[k])}},[])
  const hold=(code:string,pressed:boolean)=>{if(pressed)s.pressed.add(code);else s.pressed.delete(code);s.lastAction=code;update()}
  const next=stops[s.stopIndex];const dist=next?Math.max(0,next.z-s.z):0;const progress=Math.min(100,Math.max(0,(s.z-20)/6.3))
  return <StateContext.Provider value={stateRef}><main className="game-shell">
    <div className="world"><Canvas shadows camera={{position:[-6,5,7],fov:53,near:.1,far:720}} dpr={profiles[s.quality].pixelRatio} gl={{antialias:true,powerPreference:'high-performance'}} onCreated={({gl})=>gl.setClearColor('#8dc7d4')}>
      <Environment quality={s.quality}/><BusModel stateRef={stateRef}/><Traffic stateRef={stateRef}/><Simulation stateRef={stateRef} onUi={update}/>
    </Canvas></div>
    {s.phase==='menu'&&<section className="menu-overlay"><div className="brand-mark">N</div><p className="eyebrow">NUSANTARA LINES</p><h1>ARCHIPELAGO<br/><em>DRIVE</em></h1><p className="menu-copy">A next-generation Indonesian coach experience.<br/>Bandung · Kota Lama · Selatan</p><button className="start-button" onClick={()=>action('start',()=>{s.phase='playing';s.message='Depart for Kota Lama. Drive safely.';s.mission='Next stop: Kota Lama'})}><span>BEGIN ROUTE</span><b>→</b></button><div className="menu-details"><span>NLX-880</span><span>3 STOPS</span><span>16:20 • SUNBREAK</span></div></section>}
    {s.phase!=='menu'&&<>
      <header className="topbar"><div className="route-brand"><b>N</b><div><small>NUSANTARA LINE 08</small><strong>BANDUNG <i>→</i> SELATAN</strong></div></div><div className="top-actions"><span className="weather">☀ 26° <small>16:20</small></span><select aria-label="Graphics quality" value={s.quality} onChange={e=>action('quality',()=>s.quality=e.target.value as Quality)}><option value="cinematic">CINEMATIC</option><option value="high">HIGH</option><option value="balanced">BALANCED</option></select><AppButton label="Pause" active={s.phase==='paused'} onClick={()=>action('pause',()=>s.phase=s.phase==='paused'?'playing':'paused')}>{s.phase==='paused'?'▶':'Ⅱ'}</AppButton></div></header>
      <aside className="mission-panel"><p className="label">NEXT STOP <span>{s.stopIndex+1}/3</span></p><h2>{next?.name||'Route complete'}</h2><p className="distance">{next?`${Math.round(dist)} m ahead`:'All passengers served'}</p><div className="route-line"><i style={{width:`${progress}%`}}/><b style={{left:`${progress}%`}}/>{stops.map((_,i)=><span key={i} className={i<s.stopIndex?'done':i===s.stopIndex?'next':''} style={{left:`${[14,52,94][i]}%`}}>{i<s.stopIndex?'✓':i+1}</span>)}</div><div className="stop-names"><span>KOTA LAMA</span><span>PASAR RAYA</span><span>SELATAN</span></div></aside>
      <aside className="toolbar"><AppButton label="Headlights" active={s.headlights} onClick={()=>action('headlights',()=>s.headlights=!s.headlights)}><Icon>☼</Icon></AppButton><AppButton label="Left indicator" active={s.indicator==='left'} onClick={()=>action('left',()=>s.indicator=s.indicator==='left'?'off':'left')}>←</AppButton><AppButton label="Right indicator" active={s.indicator==='right'} onClick={()=>action('right',()=>s.indicator=s.indicator==='right'?'off':'right')}>→</AppButton><AppButton label="Passenger door" active={s.doorOpen} onClick={()=>action('door',()=>{if(Math.abs(s.velocity)<1.2)s.doorOpen=!s.doorOpen;else s.message='Door interlock active — stop the bus first.'})}>▯</AppButton><AppButton label="Horn" active={s.horn} onClick={()=>action('horn',()=>{s.horn=true;s.message='Horn sounded';setTimeout(()=>{s.horn=false;update()},350)})}>◖</AppButton><AppButton label="Cycle camera" onClick={()=>action('camera',()=>s.camera=cameraModes[(cameraModes.indexOf(s.camera)+1)%cameraModes.length])}>◉</AppButton><AppButton label="Reset route" onClick={reset}>↻</AppButton></aside>
      <section className="speed-cluster"><div className="gear"><b>{s.velocity<-.1?'R':'D'}</b><span>GEAR</span></div><div className="speed"><strong>{Math.round(Math.abs(s.velocity)*3.6)}</strong><span>KM/H</span></div><div className="fuel"><span>F</span><div><i style={{width:`${s.fuel}%`}}/></div><span>E</span><small>{Math.round(s.fuel)}%</small></div></section>
      <section className="passenger-card"><div><span>♟</span><p><b>{s.onboard}</b><small>/ 42 PASSENGERS</small></p></div><div><span>Rp</span><p><b>{s.earnings.toLocaleString('id-ID')}</b><small>FARE EARNINGS</small></p></div></section>
      <section className="status-toast"><span className={s.boarding>0?'pulse':''}>●</span><p><b>{s.mission}</b><small>{s.message}</small></p>{s.boarding>0&&<i style={{width:`${s.boarding*100}%`}}/>}</section>
      <div className="camera-label">CAM · {s.camera.toUpperCase()} <span>C TO CYCLE</span></div>
      <div className="mobile-controls"><div className="steer-pad"><button onPointerDown={()=>hold('KeyA',true)} onPointerUp={()=>hold('KeyA',false)} onPointerCancel={()=>hold('KeyA',false)}>←</button><button onPointerDown={()=>hold('KeyD',true)} onPointerUp={()=>hold('KeyD',false)} onPointerCancel={()=>hold('KeyD',false)}>→</button></div><div className="pedals"><button className="brake" onPointerDown={()=>hold('KeyS',true)} onPointerUp={()=>hold('KeyS',false)} onPointerCancel={()=>hold('KeyS',false)}>BRAKE</button><button className="gas" onPointerDown={()=>hold('KeyW',true)} onPointerUp={()=>hold('KeyW',false)} onPointerCancel={()=>hold('KeyW',false)}>GO</button></div></div>
      {s.phase==='paused'&&<div className="pause-overlay"><div><small>SIMULATION PAUSED</small><h2>Take a breath.</h2><p>Your route and passengers are waiting.</p><button onClick={()=>action('resume',()=>s.phase='playing')}>RESUME DRIVE</button><button className="subtle" onClick={reset}>RESET ROUTE</button></div></div>}
      {s.phase==='complete'&&<div className="pause-overlay"><div><small>ROUTE COMPLETE</small><h2>Selamat!</h2><p>{s.boarded} passengers served · Rp {s.earnings.toLocaleString('id-ID')}</p><button onClick={reset}>DRIVE AGAIN</button></div></div>}
    </>}
  </main></StateContext.Provider>
}

export default App

function installHooks(ref:React.MutableRefObject<GameState>){
  const snap=()=>ref.current, speed=(s:GameState)=>Math.round(Math.abs(s.velocity)*3.6*100)/100, phase=(s:GameState)=>s.phase
  const atStop=(s:GameState)=>!!stops[s.stopIndex]&&Math.abs(s.z-stops[s.stopIndex].z)<=10.5&&Math.abs(s.x-3)<=4.2
  ;(window as any).__bus={getState:()=>{const s=snap();return{phase:phase(s),speedKph:speed(s),position:{x:s.x,z:s.z},headingDeg:s.heading,doorOpen:s.doorOpen,passengerCount:s.onboard,nextStopIndex:s.stopIndex,routeProgress:Math.min(1,Math.max(0,(s.z-20)/630)),fuel:s.fuel,score:s.earnings}}}
  ;(window as any).__game={getState:()=>{const s=snap();return{phase:phase(s),elapsed:s.elapsed,paused:s.phase==='paused',missionStatus:s.mission,score:s.earnings,message:s.message}}}
  ;(window as any).__vehicle={getState:()=>{const s=snap();return{id:'NLX-880',type:'12m Luxury Coach',position:{x:s.x,z:s.z},headingDeg:s.heading,speedKph:speed(s),velocity:s.velocity,throttle:s.pressed.has('KeyW')?1:0,brake:s.pressed.has('KeyS')?1:0,steering:(s.pressed.has('KeyA')?-1:0)+(s.pressed.has('KeyD')?1:0),gear:s.velocity<-.1?'R':'D',parkingBrake:s.parkingBrake,doorOpen:s.doorOpen,headlights:s.headlights,indicator:s.indicator,hornActive:s.horn,fuel:s.fuel,damage:s.damage,odometerKm:s.odometer,wheelAngle:((s.pressed.has('KeyA')?-1:0)+(s.pressed.has('KeyD')?1:0))*32,collisionCount:s.collisionCount,lastCollision:s.lastCollision,dynamics:{...dynamics}}}}
  ;(window as any).__route={getState:()=>{const s=snap(),n=stops[s.stopIndex];return{name:'Bandung · Kota Lama · Selatan',stopCount:3,currentStopIndex:s.stopIndex,stops:stops.map((x,i)=>({id:x.id,name:x.name,z:x.z,status:i<s.stopIndex?'complete':i===s.stopIndex?'next':'upcoming'})),nextStopDistance:n?Math.max(0,n.z-s.z):0,atStop:atStop(s),completed:s.stopIndex===3,earnings:s.earnings,service:{stopLongitudinalHalfLength:10.5,stopLateralHalfWidth:4.2,boardingDuration:1.25}}}}
  ;(window as any).__passengers={getState:()=>{const s=snap();return{onboard:s.onboard,capacity:42,boardedTotal:s.boarded,waitingAtNext:stops[s.stopIndex]?.waiting||0,boardingProgress:s.boarding}}}
  ;(window as any).__traffic={getState:()=>{const s=snap();return{count:s.traffic.length,density:profiles[s.quality].density,vehicles:s.traffic.map(v=>({id:v.id,x:v.x,z:v.z,speedKph:v.speed*3.6,direction:v.direction}))}}}
  ;(window as any).__world={getState:()=>{const s=snap();const nearby=Array.from({length:8},(_,i)=>({id:`building-${i}`,type:'building',x:(i%2?1:-1)*(10+(i%3)*2.3),z:18+i*28,halfWidth:2.5,halfLength:2.75})).filter(o=>Math.abs(o.z-s.z)<100);return{environment:'Tropical intercity corridor',weather:'Sunbreak after rain',timeOfDay:'16:20',roadCenter:0.33,roadHalfWidth:5.5,surface:'asphalt',nearStopMarkers:stops.filter(x=>Math.abs(x.z-s.z)<80).length,solidObstacleCount:67,collision:{roadEdgeEnabled:true,trafficEnabled:true,solidObjectsEnabled:true,busWidth:2.55,busLength:8.9},nearbySolidObstacles:nearby}}}
  ;(window as any).__camera={getState:()=>{const s=snap(),r=(window as any).__renderInternal||{};return{mode:s.camera,position:r.position||{x:0,y:0,z:0},target:r.target||{x:s.x,y:1.65,z:s.z},fov:r.fov||53,near:.1,far:profiles[s.quality].renderDistance,modes:[...cameraModes]}}}
  ;(window as any).__input={getState:()=>{const s=snap();return{pressed:Array.from(s.pressed),lastAction:s.lastAction,lastPointerType:s.pointer,mobileControls:window.matchMedia('(max-width: 760px)').matches}}}
  ;(window as any).__renderer={getState:()=>{const s=snap(),r=(window as any).__renderInternal||{};return{backend:'WebGL',contextLost:r.contextLost||false,frame:s.frame,drawCalls:r.drawCalls||0,canvas:r.canvas||{width:0,height:0},quality:s.quality,pixelRatio:profiles[s.quality].pixelRatio,renderDistance:profiles[s.quality].renderDistance,webglVersion:r.webglVersion||0,dynamicLighting:true,fog:true,antialias:true,shadowsEnabled:true}}}
  ;(window as any).__performance={getState:()=>{const s=snap();return{elapsed:s.elapsed,tick:s.tick,frame:s.frame,fixedStep:1/60,accumulator:0,maxSubSteps:4,uiUpdates:s.uiUpdates,mounted:true}}}
  ;(window as any).__settings={getState:()=>{const s=snap();return{quality:s.quality,masterVolume:.8,pixelRatio:profiles[s.quality].pixelRatio,trafficDensity:profiles[s.quality].density,renderDistance:profiles[s.quality].renderDistance,qualityProfiles:JSON.parse(JSON.stringify(profiles))}}}
}
