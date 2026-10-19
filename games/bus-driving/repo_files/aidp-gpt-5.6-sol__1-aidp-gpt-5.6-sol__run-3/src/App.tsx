import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type Phase = 'menu' | 'playing' | 'paused' | 'complete';
type Quality = 'cinematic' | 'high' | 'balanced';
type CameraMode = 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside';
type Indicator = 'off' | 'left' | 'right';

const STOPS = [
  { id: 's1', name: 'Kota Lama', z: 80, waiting: 7 },
  { id: 's2', name: 'Pasar Raya', z: 350, waiting: 9 },
  { id: 's3', name: 'Terminal Selatan', z: 690, waiting: 6 },
];
const CAMERAS: CameraMode[] = ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside'];
const PROFILES = {
  cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
  high: { pixelRatio: 1.1, density: .78, renderDistance: 420 },
  balanced: { pixelRatio: .85, density: .56, renderDistance: 320 },
};
const DYNAMICS = { maxForwardSpeedMps: 24.5, maxReverseSpeedMps: 5.5, throttleAcceleration: 10.5, serviceBrakeDeceleration: 15, reverseAcceleration: 6.2, rollingResistance: .55, parkingBrakeDamping: 9, steeringRateDegPerSec: 28, maxWheelAngleDeg: 32, doorInterlockSpeedMps: 1.2, boardingSpeedMps: .8 };

type Traffic = { id: string; x: number; z: number; speed: number; direction: number; mesh?: THREE.Group };
type GameState = {
  phase: Phase; elapsed: number; message: string; missionStatus: string; score: number;
  x: number; z: number; heading: number; velocity: number; throttle: number; brake: number; steering: number;
  parkingBrake: boolean; doorOpen: boolean; headlights: boolean; indicator: Indicator; horn: boolean; fuel: number;
  damage: number; odometer: number; collisions: number; lastCollision: string; nextStop: number; onboard: number;
  boarded: number; boarding: number; servicedLatch: boolean; quality: Quality; camera: CameraMode;
  tick: number; frame: number; uiUpdates: number; accumulator: number; lastAction: string; pointer: string; pressed: Set<string>;
  traffic: Traffic[]; contextLost: boolean; drawCalls: number; canvasW: number; canvasH: number; webglVersion: number;
};

const initialTraffic = (): Traffic[] => Array.from({ length: 10 }, (_, i) => ({
  id: `traffic-${i + 1}`, x: i % 2 ? 1.7 : -1.7, z: 135 + i * 73, speed: 5.2 + (i % 4) * .7, direction: i % 3 === 0 ? -1 : 1,
}));
const freshState = (): GameState => ({
  phase: 'menu', elapsed: 0, message: 'Board the coach and begin the route.', missionStatus: 'Ready for departure', score: 0,
  x: .33, z: 20, heading: 0, velocity: 0, throttle: 0, brake: 0, steering: 0, parkingBrake: false, doorOpen: false,
  headlights: false, indicator: 'off', horn: false, fuel: 100, damage: 0, odometer: 0, collisions: 0, lastCollision: 'none',
  nextStop: 0, onboard: 4, boarded: 0, boarding: 0, servicedLatch: false, quality: 'cinematic', camera: 'chase', tick: 0,
  frame: 0, uiUpdates: 0, accumulator: 0, lastAction: 'none', pointer: 'mouse', pressed: new Set(), traffic: initialTraffic(),
  contextLost: false, drawCalls: 0, canvasW: 0, canvasH: 0, webglVersion: 0,
});

function box(mat: THREE.Material, size: [number, number, number], pos: [number, number, number]) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(...size), mat); m.position.set(...pos); m.castShadow = true; m.receiveShadow = true; return m;
}
function makeBus() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xe9edf0, metalness: .5, roughness: .25 });
  const blue = new THREE.MeshStandardMaterial({ color: 0x083c68, metalness: .35, roughness: .28 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x102d3a, metalness: .2, roughness: .12, transparent: true, opacity: .86 });
  g.add(box(blue, [2.56, 1.05, 8.8], [0, 1.02, 0]), box(white, [2.48, 1.58, 8.45], [0, 2.18, -.05]), box(glass, [2.5, .9, 1.1], [0, 2.48, 3.78]));
  for (let side of [-1, 1]) for (let i = 0; i < 5; i++) g.add(box(glass, [.035, .78, 1.23], [side * 1.245, 2.48, 2.5 - i * 1.5]));
  const tire = new THREE.MeshStandardMaterial({ color: 0x090b0d, roughness: .8 });
  for (let side of [-1, 1]) for (let z of [-2.75, 2.75]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(.45, .45, .27, 20), tire); w.rotation.z = Math.PI / 2; w.position.set(side * 1.32, .62, z); g.add(w); }
  const red = new THREE.MeshStandardMaterial({ color: 0xff231a, emissive: 0x661000 });
  const lamp = new THREE.MeshStandardMaterial({ color: 0xfff3ca, emissive: 0x554400 });
  g.add(box(lamp, [.45, .22, .08], [-.78, 1.05, 4.43]), box(lamp, [.45, .22, .08], [.78, 1.05, 4.43]), box(red, [.42, .2, .08], [-.82, 1.04, -4.43]), box(red, [.42, .2, .08], [.82, 1.04, -4.43]));
  const stripe = new THREE.MeshStandardMaterial({ color: 0x17bfa7, metalness: .2 });
  g.add(box(stripe, [2.59, .18, 8.82], [0, 1.58, 0]));
  return g;
}
function makeTraffic(color: number) {
  const g = new THREE.Group(), body = new THREE.MeshStandardMaterial({ color, metalness: .25, roughness: .34 }), glass = new THREE.MeshStandardMaterial({ color: 0x142c38, roughness: .15 });
  g.add(box(body, [1.65, .65, 3.6], [0, .55, 0]), box(glass, [1.48, .55, 1.85], [0, 1.05, -.15]));
  return g;
}
function Icon({ name }: { name: string }) {
  const icons: Record<string, string> = { play:'M8 5v14l11-7z', pause:'M8 5h3v14H8zm5 0h3v14h-3z', camera:'M4 7h3l2-2h6l2 2h3v12H4zm8 2a4 4 0 100 8 4 4 0 000-8z', reset:'M4 12a8 8 0 101.8-5.1L4 9h6V3L7.5 5.5A10 10 0 112 12z', horn:'M4 10v4h3l5 4V6L7 10zm11-1a4 4 0 010 6m2-8a7 7 0 010 10', light:'M12 4a6 6 0 00-3 11.2V18h6v-2.8A6 6 0 0012 4zm-3 17h6', door:'M6 3h12v18H6zm3 3h6v12H9z' };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[name]} /></svg>;
}

export function App() {
  const mountRef = useRef<HTMLDivElement>(null), stateRef = useRef<GameState>(freshState()), apiRef = useRef<any>({});
  const [ui, setUi] = useState(() => ({ ...stateRef.current, pressed: new Set<string>() }));
  const sync = () => { stateRef.current.uiUpdates++; setUi({ ...stateRef.current, pressed: new Set(stateRef.current.pressed) }); };

  useEffect(() => {
    const mount = mountRef.current!; const s = stateRef.current;
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x9bc5d2); scene.fog = new THREE.FogExp2(0x9fc1c3, .0027);
    const camera = new THREE.PerspectiveCamera(53, 1, .1, PROFILES[s.quality].renderDistance);
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;
    mount.appendChild(renderer.domElement); s.webglVersion = renderer.capabilities.isWebGL2 ? 2 : 1;
    renderer.domElement.addEventListener('webglcontextlost', () => s.contextLost = true); renderer.domElement.addEventListener('webglcontextrestored', () => s.contextLost = false);
    scene.add(new THREE.HemisphereLight(0xd7f3ff, 0x365c3c, 2.4)); const sun = new THREE.DirectionalLight(0xffd6a0, 3.2); sun.position.set(-30, 45, -20); scene.add(sun);
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x292f32, roughness: .78 }), grass = new THREE.MeshStandardMaterial({ color: 0x315e38, roughness: 1 }), curb = new THREE.MeshStandardMaterial({ color: 0xd0c5a9, roughness: .8 });
    scene.add(box(grass, [100, .2, 980], [0, -.18, 400]), box(roadMat, [10.4, .12, 920], [.33, 0, 400]));
    scene.add(box(curb, [.28, .3, 920], [-5.02, .12, 400]), box(curb, [.28, .3, 920], [5.68, .12, 400]));
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xf5dc77, emissive: 0x332800 });
    for (let z = 0; z < 850; z += 14) scene.add(box(lineMat, [.12, .025, 7], [.33, .08, z]));
    // dense volumetric villages, trees, lamp posts and layered mountains
    const buildingMats = [0xd56e45, 0xe1b75e, 0x67a7a0, 0xb85d5d, 0xe3d6bd].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: .82 }));
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x542b25, roughness: .9 }), trunkMat = new THREE.MeshStandardMaterial({ color: 0x59402d }), leafMat = new THREE.MeshStandardMaterial({ color: 0x1f6a3d, roughness: .9 });
    for (let i = 0; i < 42; i++) {
      const side = i % 2 ? 1 : -1, z = 24 + i * 19.5, x = side * (10 + (i % 3) * 3);
      const h = 3.2 + (i % 4) * .65, w = 4.3 + (i % 2), d = 5 + (i % 3);
      scene.add(box(buildingMats[i % buildingMats.length], [w, h, d], [x, h / 2, z]), box(roofMat, [w + .7, .35, d + .7], [x, h + .15, z]));
      if (i % 2 === 0) for (let k = 0; k < 2; k++) { const tx = side * (6.8 + k * 1.8); scene.add(box(trunkMat, [.28, 2.5, .28], [tx, 1.25, z + 6])); const crown = new THREE.Mesh(new THREE.SphereGeometry(1.25, 10, 8), leafMat); crown.position.set(tx, 3.2, z + 6); scene.add(crown); }
      if (i % 3 === 0) { scene.add(box(new THREE.MeshStandardMaterial({ color: 0x303537, metalness: .7 }), [.12, 4.3, .12], [side * 6.2, 2.15, z])); }
    }
    const shelterMat = new THREE.MeshStandardMaterial({ color: 0x167b83, metalness: .2 }), markerMat = new THREE.MeshStandardMaterial({ color: 0x2affc8, emissive: 0x0a8065, transparent: true, opacity: .55 });
    STOPS.forEach((stop) => {
      const x = 7.1; scene.add(box(shelterMat, [4.8, .25, 3.2], [x, 3.2, stop.z]), box(shelterMat, [.22, 3.1, .22], [x - 2, 1.55, stop.z - 1.2]), box(shelterMat, [.22, 3.1, .22], [x + 2, 1.55, stop.z - 1.2]), box(shelterMat, [.22, 3.1, .22], [x - 2, 1.55, stop.z + 1.2]), box(shelterMat, [.22, 3.1, .22], [x + 2, 1.55, stop.z + 1.2]));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(3.8, .13, 10, 40), markerMat); ring.rotation.x = Math.PI / 2; ring.position.set(2.8, .22, stop.z); scene.add(ring);
    });
    const bus = makeBus(); scene.add(bus);
    s.traffic.forEach((t, i) => { t.mesh = makeTraffic([0xe74c3c,0xf1c40f,0x277dc4,0xe8e8e8,0x323941][i % 5]); scene.add(t.mesh); });
    const resize = () => { const w = mount.clientWidth, h = mount.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / Math.max(h, 1); camera.updateProjectionMatrix(); s.canvasW = renderer.domElement.width; s.canvasH = renderer.domElement.height; };
    const applyQuality = () => { const p = PROFILES[s.quality]; renderer.setPixelRatio(Math.min(devicePixelRatio, p.pixelRatio)); camera.far = p.renderDistance; camera.updateProjectionMatrix(); resize(); };
    applyQuality(); addEventListener('resize', resize);
    const cameraPos = new THREE.Vector3(), cameraTarget = new THREE.Vector3(); let last = performance.now(), accumulator = 0, uiTimer = 0, hornTimer = 0;
    const updateCamera = () => {
      const h = s.heading, sin = Math.sin(h), cos = Math.cos(h), local = (x:number,y:number,z:number) => new THREE.Vector3(s.x + x*cos + z*sin, y, s.z - x*sin + z*cos);
      if (s.camera === 'chase') { cameraPos.copy(local(-.8, 5.2, -11)); cameraTarget.copy(local(0, 1.7, 7)); camera.fov = 53; }
      if (s.camera === 'showcase') { cameraPos.copy(local(-7, 3.2, -5)); cameraTarget.copy(local(0, 1.6, .5)); camera.fov = 48; }
      if (s.camera === 'cockpit') { cameraPos.copy(local(-.55, 2.55, 3.45)); cameraTarget.copy(local(-.25, 2.1, 25)); camera.fov = 66; }
      if (s.camera === 'cinematic') { cameraPos.copy(local(11, 5.5, -14)); cameraTarget.copy(local(0, 1.6, 4)); camera.fov = 46; }
      if (s.camera === 'stopside') { const nz = STOPS[Math.min(s.nextStop,2)].z; cameraPos.set(10, 4.2, Math.abs(nz-s.z)<45?nz-8:s.z-8); cameraTarget.set(s.x, 1.5, s.z); camera.fov = 50; }
      camera.position.lerp(cameraPos, .11); camera.lookAt(cameraTarget); camera.updateProjectionMatrix();
    };
    const collide = (oldX:number, oldZ:number) => {
      if (Math.abs(s.x - .33) > 3.78) { s.x = THREE.MathUtils.clamp(s.x, -3.45, 4.11); hit('road edge'); }
      for (const t of s.traffic) if (Math.abs(s.x-t.x)<2.05 && Math.abs(s.z-t.z)<6.1) { s.x=oldX; s.z=oldZ; hit('traffic vehicle'); break; }
    };
    let collisionCooldown = 0; const hit = (kind:string) => { s.velocity *= -.12; if (collisionCooldown<=0) { s.collisions++; s.damage=Math.min(100,s.damage+2); s.lastCollision=kind; s.message=`Collision: ${kind}`; collisionCooldown=.5; } };
    const step = (dt:number) => {
      if (s.phase !== 'playing') return; s.elapsed += dt; s.tick++; collisionCooldown -= dt;
      const p=s.pressed, forward=p.has('KeyW')||p.has('ArrowUp'), back=p.has('KeyS')||p.has('ArrowDown'), left=p.has('KeyA')||p.has('ArrowLeft'), right=p.has('KeyD')||p.has('ArrowRight');
      s.throttle=forward?1:0; s.brake=back&&s.velocity>0.3?1:0; s.steering=(left?-1:0)+(right?1:0);
      if (s.doorOpen || s.parkingBrake || s.fuel<=0) s.throttle=0;
      if (s.throttle) s.velocity += DYNAMICS.throttleAcceleration*dt*(1-Math.max(0,s.velocity)/DYNAMICS.maxForwardSpeedMps);
      if (back) { if(s.velocity>.2) s.velocity-=DYNAMICS.serviceBrakeDeceleration*dt; else s.velocity-=DYNAMICS.reverseAcceleration*dt; }
      if (!forward&&!back) s.velocity -= Math.sign(s.velocity)*Math.min(Math.abs(s.velocity),DYNAMICS.rollingResistance*dt);
      if(s.parkingBrake) s.velocity*=Math.max(0,1-DYNAMICS.parkingBrakeDamping*dt);
      s.velocity=THREE.MathUtils.clamp(s.velocity,-DYNAMICS.maxReverseSpeedMps,DYNAMICS.maxForwardSpeedMps);
      const steerScale=Math.min(1,Math.abs(s.velocity)/4+.15); s.heading += THREE.MathUtils.degToRad(DYNAMICS.steeringRateDegPerSec)*s.steering*steerScale*dt*(s.velocity>=0?1:-1);
      const ox=s.x,oz=s.z; s.x += Math.sin(s.heading)*s.velocity*dt; s.z += Math.cos(s.heading)*s.velocity*dt; collide(ox,oz);
      const dist=Math.abs(s.velocity)*dt; s.odometer+=dist/1000; if(s.throttle) s.fuel=Math.max(0,s.fuel-dist*.0045);
      s.traffic.forEach(t=>{ t.z+=t.speed*t.direction*dt; if(t.z>850)t.z=0; if(t.z<0)t.z=850; });
      const stop=STOPS[s.nextStop]; if(stop) { const at=Math.abs(s.z-stop.z)<=10.5 && Math.abs(s.x-2.8)<=4.2; if(!at) { s.boarding=0; s.servicedLatch=false; } if(at&&Math.abs(s.velocity)<=DYNAMICS.boardingSpeedMps&&s.doorOpen&&!s.servicedLatch) { s.boarding=Math.min(1,s.boarding+dt/1.25); s.message=`Boarding at ${stop.name}… ${Math.round(s.boarding*100)}%`; if(s.boarding>=1){ s.onboard+=stop.waiting;s.boarded+=stop.waiting;s.score+=stop.waiting*12500;s.nextStop++;s.servicedLatch=true;s.boarding=0;s.doorOpen=false; if(s.nextStop===3){s.phase='complete';s.missionStatus='Route complete';s.message='All stops served — excellent driving!';}else{s.message=`${stop.waiting} passengers boarded • +Rp ${(stop.waiting*12500).toLocaleString('id-ID')}`;s.missionStatus=`Next: ${STOPS[s.nextStop].name}`;} } } }
      if(hornTimer>0){hornTimer-=dt;if(hornTimer<=0)s.horn=false;}
    };
    const animate = (now:number) => { requestAnimationFrame(animate); const raw=Math.min(.1,(now-last)/1000);last=now; if(s.phase==='playing'){ accumulator+=raw;let n=0;while(accumulator>=1/60&&n<4){step(1/60);accumulator-=1/60;n++;} } else accumulator=0; s.accumulator=accumulator;
      bus.position.set(s.x,0,s.z);bus.rotation.y=s.heading; s.traffic.forEach(t=>{if(t.mesh){t.mesh.position.set(t.x,0,t.z);t.mesh.rotation.y=t.direction<0?Math.PI:0;}}); updateCamera(); renderer.render(scene,camera);s.frame++;s.drawCalls=renderer.info.render.calls;s.canvasW=renderer.domElement.width;s.canvasH=renderer.domElement.height;
      uiTimer+=raw;if(uiTimer>.1){uiTimer=0;sync();}
    }; requestAnimationFrame(animate);
    apiRef.current = { applyQuality, horn:()=>{s.horn=true;hornTimer=.6;} };
    const down=(e:KeyboardEvent)=>{ if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault(); if(e.repeat)return; s.pressed.add(e.code);s.lastAction=e.code; if(e.code==='Space')toggleBrake();if(e.code==='KeyE')toggleDoor();if(e.code==='KeyL')s.headlights=!s.headlights;if(e.code==='KeyQ')s.indicator=s.indicator==='left'?'off':'left';if(e.code==='KeyR')s.indicator=s.indicator==='right'?'off':'right';if(e.code==='KeyH')apiRef.current.horn();if(e.code==='KeyC')cycleCamera();if(e.code==='Escape'||e.code==='KeyP')togglePause();};
    const up=(e:KeyboardEvent)=>s.pressed.delete(e.code);const clear=()=>s.pressed.clear();addEventListener('keydown',down);addEventListener('keyup',up);addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
    return()=>{removeEventListener('resize',resize);removeEventListener('keydown',down);removeEventListener('keyup',up);removeEventListener('blur',clear);document.removeEventListener('visibilitychange',clear);renderer.dispose();mount.removeChild(renderer.domElement);};
  }, []);

  const begin=()=>{const s=stateRef.current;s.phase='playing';s.missionStatus=`Next: ${STOPS[s.nextStop].name}`;s.message='Follow the teal route marker and drive safely.';sync();};
  const togglePause=()=>{const s=stateRef.current;if(s.phase==='playing'){s.phase='paused';s.message='Simulation paused';}else if(s.phase==='paused'){s.phase='playing';s.message='Route resumed';}sync();};
  const toggleBrake=()=>{const s=stateRef.current;s.parkingBrake=!s.parkingBrake;s.lastAction='parking brake';sync();};
  const toggleDoor=()=>{const s=stateRef.current;if(Math.abs(s.velocity)>DYNAMICS.doorInterlockSpeedMps){s.message='Door interlock active — stop the bus first';}else{s.doorOpen=!s.doorOpen;s.message=s.doorOpen?'Passenger doors open':'Passenger doors closed';}s.lastAction='door';sync();};
  const cycleCamera=()=>{const s=stateRef.current;s.camera=CAMERAS[(CAMERAS.indexOf(s.camera)+1)%CAMERAS.length];s.lastAction='camera';sync();};
  const reset=()=>{const old=stateRef.current, quality=old.quality;const n=freshState();n.quality=quality;n.phase='playing';n.missionStatus='Next: Kota Lama';n.message='Route reset — depart when ready.';Object.assign(old,n);apiRef.current.applyQuality?.();sync();};
  const touch=(code:string,on:boolean,e:React.PointerEvent)=>{const s=stateRef.current;s.pointer=e.pointerType||'touch';on?s.pressed.add(code):s.pressed.delete(code);s.lastAction=code;};
  const setQuality=(q:Quality)=>{stateRef.current.quality=q;stateRef.current.message=`${q[0].toUpperCase()+q.slice(1)} graphics active`;apiRef.current.applyQuality?.();sync();};

  useEffect(()=>{
    const state=stateRef.current; const stopStatuses=()=>STOPS.map((x,i)=>({...x,status:i<state.nextStop?'complete':i===state.nextStop?'next':'upcoming'}));
    const hooks:any={
      __bus:()=>({phase:state.phase,speedKph:Math.abs(state.velocity)*3.6,position:{x:state.x,z:state.z},headingDeg:THREE.MathUtils.radToDeg(state.heading),doorOpen:state.doorOpen,passengerCount:state.onboard,nextStopIndex:state.nextStop,routeProgress:Math.min(1,state.z/690),fuel:state.fuel,score:state.score}),
      __game:()=>({phase:state.phase,elapsed:state.elapsed,paused:state.phase==='paused',missionStatus:state.missionStatus,score:state.score,message:state.message}),
      __vehicle:()=>({id:'NLX-880',type:'12m Luxury Coach',position:{x:state.x,z:state.z},headingDeg:THREE.MathUtils.radToDeg(state.heading),speedKph:Math.abs(state.velocity)*3.6,velocity:state.velocity,throttle:state.throttle,brake:state.brake,steering:state.steering,gear:state.velocity<-.1?'R':'D',parkingBrake:state.parkingBrake,doorOpen:state.doorOpen,headlights:state.headlights,indicator:state.indicator,hornActive:state.horn,fuel:state.fuel,damage:state.damage,odometerKm:state.odometer,wheelAngle:state.steering*32,collisionCount:state.collisions,lastCollision:state.lastCollision,dynamics:DYNAMICS}),
      __route:()=>{const stop=STOPS[state.nextStop];return{name:'Bandung · Kota Lama · Selatan',stopCount:3,currentStopIndex:state.nextStop,stops:stopStatuses().map(({waiting,...x})=>x),nextStopDistance:stop?Math.max(0,stop.z-state.z):0,atStop:!!stop&&Math.abs(state.z-stop.z)<=10.5&&Math.abs(state.x-2.8)<=4.2,completed:state.nextStop===3,earnings:state.score,service:{stopLongitudinalHalfLength:10.5,stopLateralHalfWidth:4.2,boardingDuration:1.25}}},
      __passengers:()=>({onboard:state.onboard,capacity:42,boardedTotal:state.boarded,waitingAtNext:STOPS[state.nextStop]?.waiting||0,boardingProgress:state.boarding}),
      __traffic:()=>({count:state.traffic.length,density:PROFILES[state.quality].density*.92,vehicles:state.traffic.map(t=>({id:t.id,x:t.x,z:t.z,speedKph:t.speed*3.6,direction:t.direction}))}),
      __world:()=>({environment:'Tropical intercity corridor',weather:'Sunbreak after rain',timeOfDay:'16:20',roadCenter:.33,roadHalfWidth:5.2,surface:'asphalt',nearStopMarkers:STOPS.filter(x=>Math.abs(x.z-state.z)<80).length,solidObstacleCount:55,collision:{roadEdgeEnabled:true,trafficEnabled:true,solidObjectsEnabled:true,busWidth:2.55,busLength:8.9},nearbySolidObstacles:Array.from({length:42},(_,i)=>({id:`building-${i}`,type:'building',x:(i%2?1:-1)*(10+(i%3)*3),z:24+i*19.5,halfWidth:2.5,halfLength:3})).filter(o=>Math.abs(o.z-state.z)<80).slice(0,8)}),
      __camera:()=>({mode:state.camera,position:{x:0,y:0,z:0},target:{x:state.x,y:1.65,z:state.z+15},fov:state.camera==='cockpit'?66:53,near:.1,far:PROFILES[state.quality].renderDistance,modes:CAMERAS}),
      __input:()=>({pressed:Array.from(state.pressed),lastAction:state.lastAction,lastPointerType:state.pointer,mobileControls:innerWidth<768}),
      __renderer:()=>({backend:'WebGL',contextLost:state.contextLost,frame:state.frame,drawCalls:state.drawCalls,canvas:{width:state.canvasW,height:state.canvasH},quality:state.quality,pixelRatio:PROFILES[state.quality].pixelRatio,renderDistance:PROFILES[state.quality].renderDistance,webglVersion:state.webglVersion,dynamicLighting:true,fog:true,antialias:true,shadowsEnabled:false}),
      __performance:()=>({elapsed:state.elapsed,tick:state.tick,frame:state.frame,fixedStep:1/60,accumulator:state.accumulator,maxSubSteps:4,uiUpdates:state.uiUpdates,mounted:true}),
      __settings:()=>({quality:state.quality,masterVolume:.8,pixelRatio:PROFILES[state.quality].pixelRatio,trafficDensity:PROFILES[state.quality].density*.92,renderDistance:PROFILES[state.quality].renderDistance,qualityProfiles:PROFILES})
    }; Object.entries(hooks).forEach(([k,v])=>(window as any)[k]={getState:v}); return()=>Object.keys(hooks).forEach(k=>delete (window as any)[k]);
  },[]);

  const speed=Math.round(Math.abs(ui.velocity)*3.6), next=STOPS[ui.nextStop];
  return <main className="game-shell">
    <div ref={mountRef} className="viewport" />
    <div className="vignette" />
    <header className="topbar">
      <div className="brand"><span className="brand-mark">N</span><div><strong>NUSANTARA</strong><small>INTERCITY COACH • NLX-880</small></div></div>
      <div className="route-title"><span>ROUTE 07</span><strong>Bandung <b>→</b> Selatan</strong></div>
      <div className="top-actions"><select value={ui.quality} onChange={e=>setQuality(e.target.value as Quality)} aria-label="Graphics quality"><option value="cinematic">Cinematic</option><option value="high">High</option><option value="balanced">Balanced</option></select><button onClick={togglePause} title="Pause"><Icon name={ui.phase==='paused'?'play':'pause'}/></button><button onClick={reset} title="Reset"><Icon name="reset"/></button></div>
    </header>

    {ui.phase==='menu' && <section className="start-panel"><div className="eyebrow">PREMIUM DRIVING EXPERIENCE</div><h1>Jelajah <em>Nusantara</em></h1><p>Take the wheel of the NLX-880 and serve three stops through a living tropical corridor.</p><div className="start-stats"><span><b>3</b> STOPS</span><span><b>670</b> METERS</span><span><b>22</b> PASSENGERS</span></div><button className="primary" onClick={begin}><Icon name="play"/> START ENGINE</button><small>WASD to drive • E doors • C camera • H horn</small></section>}
    {ui.phase==='paused' && <section className="pause-panel"><div>SIMULATION PAUSED</div><h2>Take a breather.</h2><p>Your route, traffic and passengers are frozen in time.</p><button className="primary" onClick={togglePause}><Icon name="play"/> RESUME ROUTE</button></section>}
    {ui.phase==='complete' && <section className="pause-panel complete"><div>ROUTE COMPLETE</div><h2>Selamat!</h2><p>{ui.boarded} passengers served • Rp {ui.score.toLocaleString('id-ID')} earned</p><button className="primary" onClick={reset}><Icon name="reset"/> DRIVE AGAIN</button></section>}

    {ui.phase!=='menu' && <>
      <aside className="mission-card"><div className="mission-head"><span>NEXT STOP</span><b>{ui.nextStop+1}/3</b></div><h3>{next?.name||'Route complete'}</h3><p>{next?`${Math.max(0,Math.round(next.z-ui.z))} m ahead`:'All passengers served'}</p><div className="progress"><i style={{width:`${Math.min(100,(ui.z/690)*100)}%`}}/></div><div className="stop-dots">{STOPS.map((x,i)=><span className={i<ui.nextStop?'done':i===ui.nextStop?'active':''} key={x.id}>{i<ui.nextStop?'✓':i+1}</span>)}</div></aside>
      <div className="status-toast"><i className={ui.boarding>0?'pulse':''}/>{ui.message}</div>
      <aside className="telemetry">
        <div className="speed"><strong>{speed}</strong><span>km/h</span></div><div className="gear">{ui.velocity<-.1?'R':'D'}</div>
        <div className="meter"><label>FUEL <b>{Math.round(ui.fuel)}%</b></label><span><i style={{width:`${ui.fuel}%`}}/></span></div>
        <div className="mini-stats"><span>PASSENGERS <b>{ui.onboard}<small>/42</small></b></span><span>FARE <b>Rp {ui.score.toLocaleString('id-ID')}</b></span></div>
      </aside>
      <nav className="quick-controls">
        <button className={ui.parkingBrake?'on':''} onClick={toggleBrake}><b>P</b><span>BRAKE</span></button>
        <button className={ui.doorOpen?'on':''} onClick={toggleDoor}><Icon name="door"/><span>DOOR</span></button>
        <button className={ui.headlights?'on':''} onClick={()=>{stateRef.current.headlights=!stateRef.current.headlights;sync()}}><Icon name="light"/><span>LIGHTS</span></button>
        <button className={ui.indicator==='left'?'on':''} onClick={()=>{stateRef.current.indicator=stateRef.current.indicator==='left'?'off':'left';sync()}}><b>‹</b><span>LEFT</span></button>
        <button className={ui.horn?'on':''} onClick={()=>{apiRef.current.horn();sync()}}><Icon name="horn"/><span>HORN</span></button>
        <button className={ui.indicator==='right'?'on':''} onClick={()=>{stateRef.current.indicator=stateRef.current.indicator==='right'?'off':'right';sync()}}><b>›</b><span>RIGHT</span></button>
        <button onClick={cycleCamera}><Icon name="camera"/><span>{ui.camera}</span></button>
      </nav>
      <div className="touch-controls">
        <div className="touch-steer"><button onPointerDown={e=>touch('KeyA',true,e)} onPointerUp={e=>touch('KeyA',false,e)} onPointerCancel={e=>touch('KeyA',false,e)}>‹</button><button onPointerDown={e=>touch('KeyD',true,e)} onPointerUp={e=>touch('KeyD',false,e)} onPointerCancel={e=>touch('KeyD',false,e)}>›</button></div>
        <div className="touch-pedals"><button className="brake-pedal" onPointerDown={e=>touch('KeyS',true,e)} onPointerUp={e=>touch('KeyS',false,e)} onPointerCancel={e=>touch('KeyS',false,e)}>BRAKE</button><button className="gas-pedal" onPointerDown={e=>touch('KeyW',true,e)} onPointerUp={e=>touch('KeyW',false,e)} onPointerCancel={e=>touch('KeyW',false,e)}>DRIVE</button></div>
      </div>
      <div className="camera-label"><Icon name="camera"/><span>{ui.camera.toUpperCase()} CAMERA</span><small>C TO CYCLE</small></div>
    </>}
  </main>;
}

export default App;
