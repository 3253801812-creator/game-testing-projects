import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Environment, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

type Phase = 'menu' | 'playing' | 'paused' | 'complete';
type Gear = 'D' | 'R';
type Indicator = 'off' | 'left' | 'right' | 'hazard';
type CameraMode = 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside';
type Quality = 'cinematic' | 'high' | 'balanced';

type StopDef = {
  id: string;
  name: string;
  z: number;
  x: number;
  waiting: number;
  served: boolean;
  dwell: number;
};

type TrafficVehicle = {
  id: string;
  x: number;
  z: number;
  speed: number;
  direction: -1 | 1;
  length: number;
  width: number;
  color: string;
};

type Obstacle = {
  id: string;
  type: 'building' | 'shelter' | 'barrier';
  x: number;
  z: number;
  halfWidth: number;
  halfLength: number;
  height: number;
  solid: boolean;
};

type RuntimeState = {
  phase: Phase;
  elapsed: number;
  paused: boolean;
  missionStatus: string;
  message: string;
  score: number;
  speed: number;
  posX: number;
  posZ: number;
  heading: number;
  throttle: number;
  brake: number;
  steering: number;
  wheelAngle: number;
  gear: Gear;
  parkingBrake: boolean;
  doorOpen: boolean;
  headlights: boolean;
  indicator: Indicator;
  hornActive: boolean;
  fuel: number;
  damage: number;
  odometerKm: number;
  collisionCount: number;
  lastCollision: string;
  passengerCount: number;
  boardedTotal: number;
  waitingAtNext: number;
  boardingProgress: number;
  nextStopIndex: number;
  nextStopDistance: number;
  routeProgress: number;
  earnings: number;
  atStop: boolean;
  routeCompleted: boolean;
  cameraMode: CameraMode;
  cameraPosition: { x: number; y: number; z: number };
  cameraTarget: { x: number; y: number; z: number };
  cameraFov: number;
  pressed: string[];
  lastAction: string;
  lastPointerType: string;
  mobileControls: boolean;
  quality: Quality;
  rendererFrame: number;
  drawCalls: number;
  canvasWidth: number;
  canvasHeight: number;
  webglVersion: number;
  contextLost: boolean;
  tick: number;
  accumulator: number;
  uiUpdates: number;
  mounted: boolean;
};

type QualityProfile = { pixelRatio: number; density: number; renderDistance: number };

const roadCenter = 0.33;
const roadHalfWidth = 5.2;
const laneOffset = 1.6;
const stopHalfLength = 10.5;
const stopHalfWidth = 4.2;
const boardingDuration = 1.25;
const capacity = 42;
const fixedStep = 1 / 60;
const busDimensions = { width: 2.55, length: 8.9 };
const routeName = 'Bandung · Kota Lama · Selatan';
const cameraModes: CameraMode[] = ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside'];
const qualityProfiles: Record<Quality, QualityProfile> = {
  cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
  high: { pixelRatio: 1.1, density: 0.78, renderDistance: 420 },
  balanced: { pixelRatio: 0.85, density: 0.56, renderDistance: 320 },
};
const dynamics = {
  maxForwardSpeedMps: 24.5,
  maxReverseSpeedMps: 5.5,
  throttleAcceleration: 10.5,
  serviceBrakeDeceleration: 15,
  reverseAcceleration: 6.2,
  rollingResistance: 0.55,
  parkingBrakeDamping: 9,
  steeringRateDegPerSec: 28,
  maxWheelAngleDeg: 32,
  doorInterlockSpeedMps: 1.2,
  boardingSpeedMps: 0.8,
};

const seedStops: StopDef[] = [
  { id: 's1', name: 'Kota Lama', z: 65, x: roadCenter + 3.1, waiting: 7, served: false, dwell: 0 },
  { id: 's2', name: 'Pasar Raya', z: 310, x: roadCenter + 3.2, waiting: 9, served: false, dwell: 0 },
  { id: 's3', name: 'Terminal Selatan', z: 620, x: roadCenter + 3.3, waiting: 12, served: false, dwell: 0 },
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const fmt = (n: number) => Math.round(n * 100) / 100;

const cloneStops = () => seedStops.map((s) => ({ ...s }));

function createTraffic(density: number): TrafficVehicle[] {
  const list: TrafficVehicle[] = [];
  for (let i = 0; i < 10; i += 1) {
    const direction = i % 2 === 0 ? 1 : -1;
    const x = direction === 1 ? roadCenter - laneOffset : roadCenter + laneOffset;
    list.push({
      id: `traffic-${i + 1}`,
      x,
      z: 110 + i * 60,
      speed: 8 + (i % 4) * 1.8,
      direction,
      length: 4.6 + (i % 3) * 0.45,
      width: 1.85 + (i % 2) * 0.2,
      color: ['#eab308', '#38bdf8', '#ef4444', '#22c55e', '#f97316'][i % 5],
    });
  }
  return list.slice(0, Math.max(4, Math.round(10 * density)));
}

function createObstacles(): Obstacle[] {
  const out: Obstacle[] = [];
  for (let i = 0; i < 18; i += 1) {
    out.push({
      id: `building-left-${i}`,
      type: 'building',
      x: -13 - (i % 3) * 4,
      z: 28 + i * 38,
      halfWidth: 3 + (i % 2),
      halfLength: 4 + (i % 3) * 0.7,
      height: 8 + (i % 4) * 2,
      solid: true,
    });
    out.push({
      id: `building-right-${i}`,
      type: 'building',
      x: 14 + (i % 4) * 2.3,
      z: 44 + i * 38,
      halfWidth: 3 + (i % 3) * 0.8,
      halfLength: 4.2 + (i % 2),
      height: 9 + ((i + 1) % 4) * 2,
      solid: true,
    });
  }
  seedStops.forEach((stop, i) => {
    out.push({
      id: `shelter-${i + 1}`,
      type: 'shelter',
      x: stop.x + 3.6,
      z: stop.z,
      halfWidth: 2.2,
      halfLength: 3.8,
      height: 2.8,
      solid: true,
    });
  });
  for (let i = 0; i < 28; i += 1) {
    out.push({
      id: `barrier-left-${i}`,
      type: 'barrier',
      x: roadCenter - roadHalfWidth - 0.75,
      z: 10 + i * 24,
      halfWidth: 0.35,
      halfLength: 1.7,
      height: 1.1,
      solid: true,
    });
    out.push({
      id: `barrier-right-${i}`,
      type: 'barrier',
      x: roadCenter + roadHalfWidth + 0.75,
      z: 10 + i * 24,
      halfWidth: 0.35,
      halfLength: 1.7,
      height: 1.1,
      solid: true,
    });
  }
  return out;
}

function initialState(quality: Quality): RuntimeState {
  return {
    phase: 'menu',
    elapsed: 0,
    paused: false,
    missionStatus: 'Ready for departure',
    message: 'Board the coach and begin the route.',
    score: 0,
    speed: 0,
    posX: roadCenter,
    posZ: 20,
    heading: 0,
    throttle: 0,
    brake: 0,
    steering: 0,
    wheelAngle: 0,
    gear: 'D',
    parkingBrake: false,
    doorOpen: false,
    headlights: false,
    indicator: 'off',
    hornActive: false,
    fuel: 100,
    damage: 0,
    odometerKm: 0,
    collisionCount: 0,
    lastCollision: 'none',
    passengerCount: 4,
    boardedTotal: 0,
    waitingAtNext: seedStops[0].waiting,
    boardingProgress: 0,
    nextStopIndex: 0,
    nextStopDistance: seedStops[0].z - 20,
    routeProgress: 0,
    earnings: 0,
    atStop: false,
    routeCompleted: false,
    cameraMode: 'chase',
    cameraPosition: { x: -5.4, y: 4.7, z: 5.8 },
    cameraTarget: { x: 0.4, y: 1.65, z: 34 },
    cameraFov: 53,
    pressed: [],
    lastAction: 'none',
    lastPointerType: 'mouse',
    mobileControls: typeof window !== 'undefined' ? window.innerWidth < 900 : false,
    quality,
    rendererFrame: 0,
    drawCalls: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    webglVersion: 0,
    contextLost: false,
    tick: 0,
    accumulator: 0,
    uiUpdates: 0,
    mounted: true,
  };
}

function getBusBox(x: number, z: number) {
  return {
    minX: x - busDimensions.width / 2,
    maxX: x + busDimensions.width / 2,
    minZ: z - busDimensions.length / 2,
    maxZ: z + busDimensions.length / 2,
  };
}

function intersects(a: ReturnType<typeof getBusBox>, b: { minX: number; maxX: number; minZ: number; maxZ: number }) {
  return a.minX <= b.maxX && a.maxX >= b.minX && a.minZ <= b.maxZ && a.maxZ >= b.minZ;
}

function BusModel({ state }: { state: RuntimeState }) {
  const ref = useRef<THREE.Group>(null);
  const wheels = useRef<THREE.Mesh[]>([]);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.set(state.posX, 0.45, state.posZ);
    ref.current.rotation.y = state.heading;
    wheels.current.forEach((wheel, i) => {
      wheel.rotation.x -= state.speed * 0.03;
      if (i < 2) wheel.rotation.y = THREE.MathUtils.degToRad(state.wheelAngle);
    });
  });

  const blink = Math.floor(state.elapsed * 2) % 2 === 0;
  const left = blink && (state.indicator === 'left' || state.indicator === 'hazard');
  const right = blink && (state.indicator === 'right' || state.indicator === 'hazard');

  return (
    <group ref={ref}>
      <mesh position={[0, 1.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 2.8, 8.9]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.45} roughness={0.28} />
      </mesh>
      <mesh position={[0, 2.8, -1.1]} castShadow>
        <boxGeometry args={[2.4, 1, 4.5]} />
        <meshStandardMaterial color="#1d4ed8" metalness={0.35} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.4, 4.1]} castShadow>
        <boxGeometry args={[2.35, 1.6, 0.55]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.35, 4.05]}>
        <boxGeometry args={[2.2, 0.85, 0.08]} />
        <meshStandardMaterial color="#93c5fd" transparent opacity={0.55} />
      </mesh>
      {[-1.18, 1.18].map((side) => (
        <group key={side} position={[side, 2.1, 0]}>
          {[-2.9, -1.4, 0.1, 1.6].map((pz, idx) => (
            <mesh key={idx} position={[0, 0, pz]}>
              <boxGeometry args={[0.05, 0.95, 1.05]} />
              <meshStandardMaterial color="#7dd3fc" transparent opacity={0.48} />
            </mesh>
          ))}
        </group>
      ))}
      <mesh position={[1.22, 1.05, 1.9]}>
        <boxGeometry args={[0.06, 1.7, 1.1]} />
        <meshStandardMaterial color={state.doorOpen ? '#38bdf8' : '#cbd5e1'} />
      </mesh>
      {[-0.75, 0.75].map((x) => (
        <mesh key={x} position={[x, 0.35, 4.45]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#e2e8f0" emissive={state.headlights ? '#fff7b3' : '#111827'} emissiveIntensity={state.headlights ? 5 : 0} />
        </mesh>
      ))}
      <mesh position={[-0.95, 0.45, 4.42]}>
        <boxGeometry args={[0.15, 0.1, 0.1]} />
        <meshStandardMaterial color="#f59e0b" emissive={left ? '#f59e0b' : '#29180a'} emissiveIntensity={left ? 4 : 0.1} />
      </mesh>
      <mesh position={[0.95, 0.45, 4.42]}>
        <boxGeometry args={[0.15, 0.1, 0.1]} />
        <meshStandardMaterial color="#f59e0b" emissive={right ? '#f59e0b' : '#29180a'} emissiveIntensity={right ? 4 : 0.1} />
      </mesh>
      {[-0.95, 0.95].map((x, i) => (
        <mesh key={x} position={[x, 0.45, -4.42]}>
          <boxGeometry args={[0.15, 0.1, 0.1]} />
          <meshStandardMaterial color="#fb923c" emissive={i === 0 ? (left ? '#f59e0b' : '#2a1205') : right ? '#f59e0b' : '#2a1205'} emissiveIntensity={i === 0 ? (left ? 4 : 0.1) : right ? 4 : 0.1} />
        </mesh>
      ))}
      {[[-0.95, 3.1], [0.95, 3.1], [-0.95, -2.8], [0.95, -2.8]].map(([x, z], i) => (
        <mesh
          key={i}
          ref={(node: THREE.Mesh | null) => {
            if (node) wheels.current[i] = node;
          }}
          position={[x, 0.32, z]}
          castShadow
        >
          <cylinderGeometry args={[0.42, 0.42, 0.28, 24]} />
          <meshStandardMaterial color="#111827" roughness={0.85} />
        </mesh>
      ))}
    </group>
  );
}

function TrafficCars({ traffic }: { traffic: TrafficVehicle[] }) {
  return (
    <group>
      {traffic.map((car) => (
        <group key={car.id} position={[car.x, 0.38, car.z]} rotation-y={car.direction === 1 ? 0 : Math.PI}>
          <mesh castShadow>
            <boxGeometry args={[car.width, 0.9, car.length]} />
            <meshStandardMaterial color={car.color} metalness={0.35} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.6, -0.2]} castShadow>
            <boxGeometry args={[car.width * 0.82, 0.55, car.length * 0.52]} />
            <meshStandardMaterial color="#94a3b8" transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function CameraRig({ state, nextStop }: { state: RuntimeState; nextStop?: StopDef }) {
  const { camera } = useThree();
  const perspectiveCamera = camera as THREE.PerspectiveCamera;
  useFrame((_state, delta: number) => {
    const bus = new THREE.Vector3(state.posX, 1.8, state.posZ);
    const forward = new THREE.Vector3(Math.sin(state.heading), 0, Math.cos(state.heading));
    const right = new THREE.Vector3(Math.cos(state.heading), 0, -Math.sin(state.heading));
    const desired = new THREE.Vector3();
    const target = bus.clone().add(forward.clone().multiplyScalar(6));
    let fov = 53;

    if (state.cameraMode === 'showcase') {
      desired.copy(bus).add(right.multiplyScalar(-4.8)).add(new THREE.Vector3(0, 2.4, -2.4));
      fov = 46;
    } else if (state.cameraMode === 'cockpit') {
      desired.copy(bus).add(new THREE.Vector3(0.55, 1.35, 2.6));
      target.copy(bus).add(forward.clone().multiplyScalar(14)).add(new THREE.Vector3(0, 0.35, 0));
      fov = 68;
    } else if (state.cameraMode === 'cinematic') {
      desired.copy(bus).add(new THREE.Vector3(-8, 5.8, -8));
      fov = 42;
    } else if (state.cameraMode === 'stopside' && nextStop) {
      desired.set(nextStop.x + 8.5, 2.8, nextStop.z - 2.5);
      target.set(state.posX, 1.6, state.posZ);
      fov = 49;
    } else {
      desired.copy(bus).add(forward.clone().multiplyScalar(-8.5)).add(new THREE.Vector3(0, 3.5, 0));
    }

    perspectiveCamera.position.lerp(desired, 1 - Math.exp(-delta * 4));
    perspectiveCamera.lookAt(target);
    perspectiveCamera.fov += (fov - perspectiveCamera.fov) * (1 - Math.exp(-delta * 4));
    perspectiveCamera.updateProjectionMatrix();
  });
  return null;
}

function Scene3D({
  state,
  traffic,
  obstacles,
  stops,
  onRenderer,
}: {
  state: RuntimeState;
  traffic: TrafficVehicle[];
  obstacles: Obstacle[];
  stops: StopDef[];
  onRenderer: (data: Partial<RuntimeState>) => void;
}) {
  const profile = qualityProfiles[state.quality];
  const vegetation = useMemo(
    () =>
      Array.from({ length: Math.round(24 * profile.density) }, (_, i) => ({
        x: i % 2 === 0 ? -9.5 - (i % 3) : 10 + (i % 4),
        z: i * 22 + 12,
        size: 1.4 + (i % 5) * 0.22,
      })),
    [profile.density],
  );

  function Observer() {
    const { gl, size, camera } = useThree();
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    useFrame(() => {
      const ctx = gl.getContext();
      onRenderer({
        drawCalls: gl.info.render.calls,
        canvasWidth: size.width,
        canvasHeight: size.height,
        webglVersion: ctx instanceof WebGL2RenderingContext ? 2 : 1,
        contextLost: gl.getContext().isContextLost(),
        cameraPosition: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
        cameraTarget: { x: state.posX, y: 1.65, z: state.posZ + 8 },
        cameraFov: perspectiveCamera.fov,
      });
    });
    return null;
  }

  return (
    <Canvas shadows dpr={profile.pixelRatio} gl={{ antialias: true, powerPreference: 'high-performance' }} className="h-full w-full">
      <Observer />
      <color attach="background" args={['#8ec5ff']} />
      <fog attach="fog" args={['#b8d8f5', 45, profile.renderDistance]} />
      <ambientLight intensity={0.65} />
      <hemisphereLight intensity={0.8} color="#fff8e1" groundColor="#35533c" />
      <directionalLight position={[18, 24, 8]} intensity={2.4} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <PerspectiveCamera makeDefault fov={state.cameraFov} position={[0, 6, -10]} />
      <Environment preset="sunset" />
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[200, profile.renderDistance * 2]} />
        <meshStandardMaterial color="#5f8156" roughness={1} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[roadCenter, 0.02, profile.renderDistance * 0.5]} receiveShadow>
        <planeGeometry args={[roadHalfWidth * 2, profile.renderDistance * 1.6]} />
        <meshStandardMaterial color="#3b3b43" roughness={0.92} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[roadCenter, 0.031, profile.renderDistance * 0.5]} receiveShadow>
        <planeGeometry args={[0.16, profile.renderDistance * 1.55]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      {[-roadHalfWidth, roadHalfWidth].map((offset, i) => (
        <mesh key={i} rotation-x={-Math.PI / 2} position={[roadCenter + offset, 0.04, profile.renderDistance * 0.5]}>
          <planeGeometry args={[0.2, profile.renderDistance * 1.55]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
      ))}
      {stops.map((stop, i) => (
        <group key={stop.id} position={[stop.x, 0.08, stop.z]}>
          <mesh rotation-x={-Math.PI / 2}>
            <planeGeometry args={[3.4, 14]} />
            <meshStandardMaterial color={stop.served ? '#166534' : i === state.nextStopIndex ? '#0ea5e9' : '#475569'} transparent opacity={0.58} />
          </mesh>
          <Text position={[0, 2.8, 0]} color={i === state.nextStopIndex ? '#fef08a' : '#ffffff'} fontSize={1.1} anchorX="center" anchorY="middle">
            {stop.name}
          </Text>
        </group>
      ))}
      {obstacles.map((obs) => (
        <group key={obs.id} position={[obs.x, obs.height / 2, obs.z]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[obs.halfWidth * 2, obs.height, obs.halfLength * 2]} />
            <meshStandardMaterial color={obs.type === 'building' ? '#cbd5e1' : obs.type === 'shelter' ? '#7dd3fc' : '#94a3b8'} roughness={0.82} metalness={obs.type === 'shelter' ? 0.35 : 0.1} />
          </mesh>
          {obs.type === 'building' && (
            <mesh position={[0, obs.height / 2 + 0.55, 0]} castShadow>
              <boxGeometry args={[obs.halfWidth * 2.08, 0.5, obs.halfLength * 2.08]} />
              <meshStandardMaterial color="#475569" />
            </mesh>
          )}
          {obs.type === 'shelter' && (
            <mesh position={[0, obs.height / 2 + 0.15, 0]}>
              <boxGeometry args={[obs.halfWidth * 2.2, 0.22, obs.halfLength * 2.2]} />
              <meshStandardMaterial color="#0f172a" />
            </mesh>
          )}
        </group>
      ))}
      {vegetation.map((tree, i) => (
        <group key={i} position={[tree.x, 0, tree.z]}>
          <mesh position={[0, 1.1, 0]} castShadow>
            <cylinderGeometry args={[0.16, 0.22, 2.1, 8]} />
            <meshStandardMaterial color="#6b4f2d" />
          </mesh>
          <mesh position={[0, 2.75, 0]} castShadow>
            <sphereGeometry args={[tree.size, 12, 12]} />
            <meshStandardMaterial color={i % 3 === 0 ? '#22c55e' : '#16a34a'} roughness={0.95} />
          </mesh>
        </group>
      ))}
      <TrafficCars traffic={traffic} />
      <BusModel state={state} />
      <ContactShadows position={[state.posX, 0.01, state.posZ]} scale={30} opacity={0.45} blur={2.5} far={10} />
      <CameraRig state={state} nextStop={stops[state.nextStopIndex]} />
    </Canvas>
  );
}

function ControlButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="pointer-events-auto rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-left text-xs font-medium text-white transition hover:bg-cyan-500/20">
      {label}
    </button>
  );
}

function InfoBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-3">
      <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">{label}</div>
      <div className="mt-1 font-medium text-white">{value}</div>
    </div>
  );
}

export function App() {
  const [state, setState] = useState<RuntimeState>(() => initialState('cinematic'));
  const [stops, setStops] = useState<StopDef[]>(cloneStops);
  const [traffic, setTraffic] = useState<TrafficVehicle[]>(() => createTraffic(qualityProfiles.cinematic.density));
  const obstacles = useMemo(() => createObstacles(), []);
  const pressedRef = useRef<Set<string>>(new Set());
  const lastRef = useRef<number | null>(null);
  const accumRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const hornRef = useRef<number | null>(null);

  const profile = qualityProfiles[state.quality];
  const nextStop = stops[state.nextStopIndex];
  const nextStopName = nextStop?.name ?? 'Route complete';

  const resetSession = (quality = state.quality) => {
    pressedRef.current.clear();
    setStops(cloneStops());
    setTraffic(createTraffic(qualityProfiles[quality].density));
    setState(initialState(quality));
    lastRef.current = null;
    accumRef.current = 0;
  };

  const beginPlaying = () => {
    setState((prev) => ({
      ...prev,
      phase: prev.routeCompleted ? 'complete' : 'playing',
      paused: false,
      missionStatus: prev.routeCompleted ? 'Route completed' : 'Proceed to next stop',
      message: prev.routeCompleted ? prev.message : 'Route live. Depart safely.',
      uiUpdates: prev.uiUpdates + 1,
    }));
  };

  const pauseToggle = () => {
    setState((prev) => {
      if (prev.phase === 'menu') {
        return { ...prev, phase: 'playing', paused: false, missionStatus: 'Proceed to next stop', message: 'Route live. Depart safely.', uiUpdates: prev.uiUpdates + 1 };
      }
      const paused = !prev.paused;
      return {
        ...prev,
        paused,
        phase: paused ? 'paused' : prev.routeCompleted ? 'complete' : 'playing',
        missionStatus: paused ? 'Paused' : prev.routeCompleted ? 'Route completed' : 'Proceed to next stop',
        message: paused ? 'Simulation paused.' : 'Simulation resumed.',
        uiUpdates: prev.uiUpdates + 1,
      };
    });
  };

  const clearInputs = () => {
    pressedRef.current.clear();
    setState((prev) => ({ ...prev, pressed: [], throttle: 0, brake: 0, steering: 0 }));
  };

  const setQuality = (quality: Quality) => {
    setTraffic(createTraffic(qualityProfiles[quality].density));
    setState((prev) => ({ ...prev, quality, message: `Graphics set to ${quality}.`, uiUpdates: prev.uiUpdates + 1 }));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.repeat) {
        pressedRef.current.add(e.code);
        setState((prev) => ({ ...prev, pressed: Array.from(pressedRef.current), lastAction: e.code }));
      }
      if (e.code === 'Enter') beginPlaying();
      if (e.code === 'KeyP') pauseToggle();
      if (e.code === 'Space') {
        e.preventDefault();
        setState((prev) => ({ ...prev, parkingBrake: !prev.parkingBrake, message: !prev.parkingBrake ? 'Parking brake applied.' : 'Parking brake released.', uiUpdates: prev.uiUpdates + 1 }));
      }
      if (e.code === 'KeyE') {
        setState((prev) => Math.abs(prev.speed) > dynamics.doorInterlockSpeedMps ? { ...prev, message: 'Door interlock active while moving.', uiUpdates: prev.uiUpdates + 1 } : { ...prev, doorOpen: !prev.doorOpen, message: !prev.doorOpen ? 'Passenger door opened.' : 'Passenger door closed.', uiUpdates: prev.uiUpdates + 1 });
      }
      if (e.code === 'KeyL') setState((prev) => ({ ...prev, headlights: !prev.headlights, uiUpdates: prev.uiUpdates + 1 }));
      if (e.code === 'KeyQ') setState((prev) => ({ ...prev, indicator: prev.indicator === 'left' ? 'off' : 'left', uiUpdates: prev.uiUpdates + 1 }));
      if (e.code === 'KeyR') setState((prev) => ({ ...prev, indicator: prev.indicator === 'right' ? 'off' : 'right', uiUpdates: prev.uiUpdates + 1 }));
      if (e.code === 'KeyC') setState((prev) => ({ ...prev, cameraMode: cameraModes[(cameraModes.indexOf(prev.cameraMode) + 1) % cameraModes.length], uiUpdates: prev.uiUpdates + 1 }));
      if (e.code === 'KeyH') {
        setState((prev) => ({ ...prev, hornActive: true, message: 'Horn sounded.', uiUpdates: prev.uiUpdates + 1 }));
        if (hornRef.current) window.clearTimeout(hornRef.current);
        hornRef.current = window.setTimeout(() => setState((prev) => ({ ...prev, hornActive: false })), 350);
      }
      if (e.code === 'Digit1') setQuality('cinematic');
      if (e.code === 'Digit2') setQuality('high');
      if (e.code === 'Digit3') setQuality('balanced');
      if (e.code === 'KeyT') resetSession();
    };

    const onKeyUp = (e: KeyboardEvent) => {
      pressedRef.current.delete(e.code);
      setState((prev) => ({ ...prev, pressed: Array.from(pressedRef.current) }));
    };

    const onBlur = () => clearInputs();
    const onVisibility = () => document.hidden && clearInputs();
    const onResize = () => setState((prev) => ({ ...prev, mobileControls: window.innerWidth < 900 }));

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, [state.quality]);

  useEffect(() => {
    const tick = (time: number) => {
      if (lastRef.current == null) lastRef.current = time;
      const dt = Math.min(0.05, (time - lastRef.current) / 1000);
      lastRef.current = time;
      accumRef.current = Math.min(accumRef.current + dt, fixedStep * 4);

      setState((prev) => ({ ...prev, accumulator: accumRef.current, rendererFrame: prev.rendererFrame + 1 }));

      let steps = 0;
      while (accumRef.current >= fixedStep && steps < 4) {
        setState((prev) => {
          if (prev.phase === 'menu' || prev.paused || prev.phase === 'paused' || prev.phase === 'complete') return { ...prev, accumulator: accumRef.current };

          const pressed = pressedRef.current;
          let throttle = pressed.has('KeyW') ? 1 : 0;
          let brake = pressed.has('KeyS') ? 1 : 0;
          const steering = (pressed.has('KeyA') ? -1 : 0) + (pressed.has('KeyD') ? 1 : 0);
          let speed = prev.speed;
          let gear: Gear = prev.gear;
          let heading = prev.heading;
          let wheelAngle = prev.wheelAngle + ((steering * dynamics.maxWheelAngleDeg - prev.wheelAngle) * 0.14);
          let parkingBrake = prev.parkingBrake;
          let doorOpen = prev.doorOpen;
          let fuel = prev.fuel;
          let damage = prev.damage;
          let collisionCount = prev.collisionCount;
          let lastCollision = prev.lastCollision;
          let posX = prev.posX;
          let posZ = prev.posZ;
          let passengerCount = prev.passengerCount;
          let boardedTotal = prev.boardedTotal;
          let earnings = prev.earnings;
          let score = prev.score;
          let message = prev.message;
          let missionStatus = prev.missionStatus;
          let nextStopIndex = prev.nextStopIndex;
          let routeCompleted = prev.routeCompleted;
          let boardingProgress = 0;
          const elapsed = prev.elapsed + fixedStep;

          if (parkingBrake && throttle > 0) parkingBrake = false;
          if (Math.abs(speed) > dynamics.doorInterlockSpeedMps) doorOpen = false;
          if (doorOpen) {
            throttle = 0;
            if (Math.abs(speed) > dynamics.boardingSpeedMps) brake = 1;
          }

          if (gear === 'D') {
            if (throttle > 0 && fuel > 0) speed += dynamics.throttleAcceleration * fixedStep;
            if (brake > 0) speed -= dynamics.serviceBrakeDeceleration * fixedStep;
            if (speed < 0.4 && brake > 0 && throttle === 0) gear = 'R';
          } else {
            if (brake > 0 && Math.abs(speed) < dynamics.maxReverseSpeedMps) speed -= dynamics.reverseAcceleration * fixedStep;
            else if (throttle > 0) speed += dynamics.serviceBrakeDeceleration * fixedStep * 0.6;
            if (speed > -0.2 && brake === 0) gear = 'D';
          }

          speed -= Math.sign(speed || 1) * dynamics.rollingResistance * fixedStep;
          if (parkingBrake) speed += (0 - speed) * Math.min(1, fixedStep * dynamics.parkingBrakeDamping);
          speed = clamp(speed, -dynamics.maxReverseSpeedMps, dynamics.maxForwardSpeedMps);
          if (Math.abs(speed) < 0.02) speed = 0;

          heading += THREE.MathUtils.degToRad(wheelAngle) * speed * 0.012 * fixedStep * 60;
          const candX = posX + Math.sin(heading) * speed * fixedStep;
          const candZ = posZ + Math.cos(heading) * speed * fixedStep;
          const box = getBusBox(candX, candZ);
          let collided = false;
          let collidedId = 'none';

          if (candX < roadCenter - roadHalfWidth + busDimensions.width / 2 || candX > roadCenter + roadHalfWidth - busDimensions.width / 2) {
            collided = true;
            collidedId = 'road-edge-barrier';
          }
          if (!collided) {
            for (const obs of obstacles) {
              const o = { minX: obs.x - obs.halfWidth, maxX: obs.x + obs.halfWidth, minZ: obs.z - obs.halfLength, maxZ: obs.z + obs.halfLength };
              if (intersects(box, o)) {
                collided = true;
                collidedId = obs.id;
                break;
              }
            }
          }
          if (!collided) {
            for (const car of traffic) {
              const c = { minX: car.x - car.width / 2, maxX: car.x + car.width / 2, minZ: car.z - car.length / 2, maxZ: car.z + car.length / 2 };
              if (intersects(box, c)) {
                collided = true;
                collidedId = car.id;
                break;
              }
            }
          }

          if (collided) {
            collisionCount += 1;
            lastCollision = collidedId;
            damage = clamp(damage + 2.5, 0, 100);
            speed *= -0.18;
            missionStatus = 'Drive carefully';
            message = `Collision with ${collidedId}.`;
          } else {
            posX = candX;
            posZ = candZ;
          }

          if (Math.abs(speed) > 0.2 && throttle > 0) fuel = clamp(fuel - Math.abs(speed) * 0.0022, 0, 100);

          let atStop = false;
          const updatedStops = stops.map((stop, i) => {
            if (i !== nextStopIndex || stop.served) return stop;
            atStop = Math.abs(posZ - stop.z) <= stopHalfLength && Math.abs(posX - stop.x) <= stopHalfWidth && Math.abs(speed) <= dynamics.boardingSpeedMps;
            const dwell = atStop && doorOpen ? stop.dwell + fixedStep : 0;
            return { ...stop, dwell };
          });

          const currentStop = updatedStops[nextStopIndex];
          if (currentStop && atStop) {
            boardingProgress = clamp(currentStop.dwell / boardingDuration, 0, 1);
            missionStatus = doorOpen ? 'Boarding passengers' : 'Open doors for boarding';
            if (!doorOpen) message = 'Stop reached. Open the passenger door.';
          }

          if (currentStop && !currentStop.served && currentStop.dwell >= boardingDuration) {
            passengerCount = clamp(passengerCount + currentStop.waiting, 0, capacity);
            boardedTotal += currentStop.waiting;
            earnings += currentStop.waiting * 4500;
            score += currentStop.waiting * 10 + 100;
            updatedStops[nextStopIndex] = { ...currentStop, served: true, dwell: boardingDuration };
            message = `${currentStop.waiting} passengers boarded at ${currentStop.name}.`;
            missionStatus = 'Proceed to next stop';
            nextStopIndex += 1;
          }

          if (nextStopIndex >= updatedStops.length) {
            routeCompleted = true;
            missionStatus = 'Route completed';
            message = 'All three Indonesia route stops completed successfully.';
          }

          setStops(updatedStops);

          return {
            ...prev,
            phase: routeCompleted ? 'complete' : 'playing',
            elapsed,
            speed,
            posX,
            posZ,
            heading,
            throttle,
            brake,
            steering,
            wheelAngle,
            gear,
            parkingBrake,
            doorOpen,
            fuel,
            damage,
            odometerKm: prev.odometerKm + Math.abs(speed) * fixedStep / 1000,
            collisionCount,
            lastCollision,
            passengerCount,
            boardedTotal,
            waitingAtNext: updatedStops[nextStopIndex]?.waiting ?? 0,
            boardingProgress,
            nextStopIndex,
            nextStopDistance: updatedStops[nextStopIndex] ? Math.max(0, updatedStops[nextStopIndex].z - posZ) : 0,
            routeProgress: (updatedStops.filter((s) => s.served).length / seedStops.length) * 100,
            earnings,
            atStop,
            routeCompleted,
            score,
            missionStatus,
            message,
            tick: prev.tick + 1,
            accumulator: accumRef.current,
            uiUpdates: prev.uiUpdates + 1,
          };
        });

        setTraffic((prev) => {
          if (state.paused || state.phase === 'menu' || state.phase === 'paused' || state.phase === 'complete') return prev;
          return prev.map((car, i) => {
            let z = car.z + car.speed * fixedStep * car.direction;
            if (car.direction === 1 && z > 760) z = -80 - i * 18;
            if (car.direction === -1 && z < -80) z = 760 + i * 16;
            return { ...car, z };
          });
        });

        accumRef.current -= fixedStep;
        steps += 1;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [obstacles, state.paused, state.phase, traffic, stops]);

  useEffect(() => {
    const nearbySolidObstacles = obstacles
      .filter((o) => Math.abs(o.z - state.posZ) < 60)
      .slice(0, 8)
      .map((o) => ({ id: o.id, type: o.type, x: fmt(o.x), z: fmt(o.z), halfWidth: o.halfWidth, halfLength: o.halfLength }));

    window.__bus = {
      getState: () => ({ phase: state.phase, speedKph: fmt(Math.abs(state.speed) * 3.6), position: { x: fmt(state.posX), z: fmt(state.posZ) }, headingDeg: fmt(THREE.MathUtils.radToDeg(state.heading)), doorOpen: state.doorOpen, passengerCount: state.passengerCount, nextStopIndex: state.nextStopIndex, routeProgress: fmt(state.routeProgress), fuel: fmt(state.fuel), score: state.score }),
    };
    window.__game = {
      getState: () => ({ phase: state.phase, elapsed: fmt(state.elapsed), paused: state.paused, missionStatus: state.missionStatus, score: state.score, message: state.message }),
    };
    window.__vehicle = {
      getState: () => ({ id: 'NLX-880', type: '12m Luxury Coach', position: { x: fmt(state.posX), z: fmt(state.posZ) }, headingDeg: fmt(THREE.MathUtils.radToDeg(state.heading)), speedKph: fmt(Math.abs(state.speed) * 3.6), velocity: fmt(state.speed), throttle: state.throttle, brake: state.brake, steering: state.steering, gear: state.gear, parkingBrake: state.parkingBrake, doorOpen: state.doorOpen, headlights: state.headlights, indicator: state.indicator, hornActive: state.hornActive, fuel: fmt(state.fuel), damage: fmt(state.damage), odometerKm: fmt(state.odometerKm), wheelAngle: fmt(state.wheelAngle), collisionCount: state.collisionCount, lastCollision: state.lastCollision, dynamics }),
    };
    window.__route = {
      getState: () => ({ name: routeName, stopCount: stops.length, currentStopIndex: state.nextStopIndex, stops: stops.map((s, i) => ({ id: s.id, name: s.name, z: s.z, status: i < state.nextStopIndex ? 'completed' : i === state.nextStopIndex ? 'next' : 'upcoming' })), nextStopDistance: fmt(state.nextStopDistance), atStop: state.atStop, completed: state.routeCompleted, earnings: state.earnings, service: { stopLongitudinalHalfLength: stopHalfLength, stopLateralHalfWidth: stopHalfWidth, boardingDuration } }),
    };
    window.__passengers = {
      getState: () => ({ onboard: state.passengerCount, capacity, boardedTotal: state.boardedTotal, waitingAtNext: state.waitingAtNext, boardingProgress: fmt(state.boardingProgress) }),
    };
    window.__traffic = {
      getState: () => ({ count: traffic.length, density: profile.density, vehicles: traffic.map((v) => ({ id: v.id, x: fmt(v.x), z: fmt(v.z), speedKph: fmt(v.speed * 3.6), direction: v.direction })) }),
    };
    window.__world = {
      getState: () => ({ environment: 'Tropical intercity corridor', weather: 'Sunbreak after rain', timeOfDay: '16:20', roadCenter, roadHalfWidth, surface: 'asphalt', nearStopMarkers: stops.filter((s) => Math.abs(s.z - state.posZ) < 45).length, solidObstacleCount: obstacles.filter((o) => o.solid).length, collision: { roadEdgeEnabled: true, trafficEnabled: true, solidObjectsEnabled: true, busWidth: busDimensions.width, busLength: busDimensions.length }, nearbySolidObstacles }),
    };
    window.__camera = {
      getState: () => ({ mode: state.cameraMode, position: state.cameraPosition, target: state.cameraTarget, fov: fmt(state.cameraFov), near: 0.1, far: profile.renderDistance, modes: cameraModes }),
    };
    window.__input = {
      getState: () => ({ pressed: state.pressed, lastAction: state.lastAction, lastPointerType: state.lastPointerType, mobileControls: state.mobileControls }),
    };
    window.__renderer = {
      getState: () => ({ backend: 'WebGL', contextLost: state.contextLost, frame: state.rendererFrame, drawCalls: state.drawCalls, canvas: { width: state.canvasWidth, height: state.canvasHeight }, quality: state.quality, pixelRatio: profile.pixelRatio, renderDistance: profile.renderDistance, webglVersion: state.webglVersion, dynamicLighting: true, fog: true, antialias: true, shadowsEnabled: true }),
    };
    window.__performance = {
      getState: () => ({ elapsed: fmt(state.elapsed), tick: state.tick, frame: state.rendererFrame, fixedStep, accumulator: fmt(state.accumulator), maxSubSteps: 4, uiUpdates: state.uiUpdates, mounted: state.mounted }),
    };
    window.__settings = {
      getState: () => ({ quality: state.quality, masterVolume: 0.8, pixelRatio: profile.pixelRatio, trafficDensity: profile.density, renderDistance: profile.renderDistance, qualityProfiles }),
    };
  }, [obstacles, profile, state, stops, traffic]);

  const touchButton = (code: string, action: string) => ({
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
      e.preventDefault();
      pressedRef.current.add(code);
      setState((prev) => ({ ...prev, pressed: Array.from(pressedRef.current), lastPointerType: e.pointerType, lastAction: action }));
    },
    onPointerUp: () => {
      pressedRef.current.delete(code);
      setState((prev) => ({ ...prev, pressed: Array.from(pressedRef.current) }));
    },
    onPointerCancel: () => {
      pressedRef.current.delete(code);
      setState((prev) => ({ ...prev, pressed: Array.from(pressedRef.current) }));
    },
    onPointerLeave: () => {
      pressedRef.current.delete(code);
      setState((prev) => ({ ...prev, pressed: Array.from(pressedRef.current) }));
    },
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Scene3D state={state} traffic={traffic} obstacles={obstacles} stops={stops} onRenderer={(data) => setState((prev) => ({ ...prev, ...data }))} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/65" />

      <div className="absolute left-4 top-4 z-20 max-w-[min(28rem,calc(100vw-2rem))] rounded-2xl border border-white/10 panel-blur p-4 shadow-2xl shadow-black/30">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Garuda Coach Simulator 3D</p>
            <h1 className="mt-1 text-2xl font-semibold">Indonesia Intercity Route</h1>
            <p className="mt-1 text-sm text-slate-300">High-detail single-player bus driving with cockpit and exterior cameras.</p>
          </div>
          <div className="rounded-xl bg-black/20 px-3 py-2 text-right text-xs text-slate-200">
            <div>{state.phase.toUpperCase()}</div>
            <div className="mt-1 text-cyan-300">{state.phase === 'playing' && !state.paused ? 'LIVE' : state.paused ? 'FROZEN' : 'READY'}</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['Speed', `${Math.round(Math.abs(state.speed) * 3.6)} km/h`],
            ['Fuel', `${Math.round(state.fuel)}%`],
            ['Passengers', `${state.passengerCount}/${capacity}`],
            ['Next Stop', nextStopName],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white/5 p-3">
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">{label}</div>
              <div className="mt-1 text-sm font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2 text-sm text-slate-200">
          <div className="flex items-center justify-between"><span>Route progress</span><span>{Math.round(state.routeProgress)}%</span></div>
          <div className="meter-bar h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${state.routeProgress}%` }} /></div>
          <div className="flex items-center justify-between text-xs text-slate-300"><span>Status: {state.missionStatus}</span><span>Fare Rp {state.earnings.toLocaleString('id-ID')}</span></div>
          <div className="text-xs text-amber-200">{state.message}</div>
        </div>
      </div>

      <div className="absolute right-4 top-4 z-20 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-white/10 panel-blur p-4 shadow-xl shadow-black/30">
        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
          <InfoBadge label="Gear" value={state.gear} />
          <InfoBadge label="Door" value={state.doorOpen ? 'Open' : 'Closed'} />
          <InfoBadge label="Indicator" value={state.indicator} />
          <InfoBadge label="Headlights" value={state.headlights ? 'On' : 'Off'} />
          <InfoBadge label="Camera" value={state.cameraMode} />
          <InfoBadge label="Collisions" value={`${state.collisionCount}`} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-200 sm:grid-cols-3">
          <ControlButton label={state.phase === 'menu' ? 'Start Route' : state.paused ? 'Resume' : 'Pause'} onClick={pauseToggle} />
          <ControlButton label={state.parkingBrake ? 'Brake Off' : 'Brake On'} onClick={() => setState((prev) => ({ ...prev, parkingBrake: !prev.parkingBrake, uiUpdates: prev.uiUpdates + 1 }))} />
          <ControlButton label={state.doorOpen ? 'Close Door' : 'Open Door'} onClick={() => setState((prev) => Math.abs(prev.speed) > dynamics.doorInterlockSpeedMps ? { ...prev, message: 'Door interlock active while moving.', uiUpdates: prev.uiUpdates + 1 } : { ...prev, doorOpen: !prev.doorOpen, uiUpdates: prev.uiUpdates + 1 })} />
          <ControlButton label={state.headlights ? 'Lights Off' : 'Lights On'} onClick={() => setState((prev) => ({ ...prev, headlights: !prev.headlights, uiUpdates: prev.uiUpdates + 1 }))} />
          <ControlButton label="Horn" onClick={() => { setState((prev) => ({ ...prev, hornActive: true, uiUpdates: prev.uiUpdates + 1 })); if (hornRef.current) window.clearTimeout(hornRef.current); hornRef.current = window.setTimeout(() => setState((prev) => ({ ...prev, hornActive: false })), 350); }} />
          <ControlButton label="Reset" onClick={() => resetSession()} />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300">
          <span>Graphics</span>
          <select value={state.quality} onChange={(e) => setQuality(e.target.value as Quality)} className="rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-white">
            {Object.keys(qualityProfiles).map((quality) => <option key={quality} value={quality}>{quality}</option>)}
          </select>
          <ControlButton label="Camera" onClick={() => setState((prev) => ({ ...prev, cameraMode: cameraModes[(cameraModes.indexOf(prev.cameraMode) + 1) % cameraModes.length], uiUpdates: prev.uiUpdates + 1 }))} />
          <ControlButton label="Left Sig" onClick={() => setState((prev) => ({ ...prev, indicator: prev.indicator === 'left' ? 'off' : 'left', uiUpdates: prev.uiUpdates + 1 }))} />
          <ControlButton label="Right Sig" onClick={() => setState((prev) => ({ ...prev, indicator: prev.indicator === 'right' ? 'off' : 'right', uiUpdates: prev.uiUpdates + 1 }))} />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 grid gap-3 lg:grid-cols-[1fr_auto]">
        <div className="rounded-2xl border border-white/10 panel-blur p-4 text-xs text-slate-200 shadow-xl shadow-black/30">
          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            <p><span className="text-cyan-300">Drive:</span> W accelerate · S brake/reverse · A/D steer</p>
            <p><span className="text-cyan-300">Bus:</span> Space parking brake · E door · L headlights · H horn</p>
            <p><span className="text-cyan-300">Views:</span> C cycle cameras · P pause · T reset route</p>
            <p><span className="text-cyan-300">Signals/Quality:</span> Q left · R right · 1/2/3 graphics</p>
          </div>
        </div>
        {state.mobileControls && (
          <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 panel-blur p-3 text-white shadow-xl shadow-black/30 touch-none">
            <button {...touchButton('KeyA', 'touch-left')} className="rounded-xl bg-white/10 px-4 py-4 text-lg font-semibold active:bg-cyan-500/40">◀</button>
            <button {...touchButton('KeyW', 'touch-throttle')} className="rounded-xl bg-emerald-500/30 px-4 py-4 text-lg font-semibold active:bg-emerald-400/50">▲</button>
            <button {...touchButton('KeyD', 'touch-right')} className="rounded-xl bg-white/10 px-4 py-4 text-lg font-semibold active:bg-cyan-500/40">▶</button>
            <button {...touchButton('KeyS', 'touch-brake')} className="rounded-xl bg-amber-500/30 px-4 py-4 text-lg font-semibold active:bg-amber-400/50">▼</button>
            <button onClick={() => setState((prev) => Math.abs(prev.speed) > dynamics.doorInterlockSpeedMps ? prev : { ...prev, doorOpen: !prev.doorOpen, uiUpdates: prev.uiUpdates + 1 })} className="rounded-xl bg-white/10 px-4 py-4 text-xs font-semibold">Door</button>
            <button onClick={() => setState((prev) => ({ ...prev, cameraMode: cameraModes[(cameraModes.indexOf(prev.cameraMode) + 1) % cameraModes.length], uiUpdates: prev.uiUpdates + 1 }))} className="rounded-xl bg-white/10 px-4 py-4 text-xs font-semibold">Cam</button>
          </div>
        )}
      </div>
    </div>
  );
}

declare global {
  interface Window {
    __bus: { getState: () => unknown };
    __game: { getState: () => unknown };
    __vehicle: { getState: () => unknown };
    __route: { getState: () => unknown };
    __passengers: { getState: () => unknown };
    __traffic: { getState: () => unknown };
    __world: { getState: () => unknown };
    __camera: { getState: () => unknown };
    __input: { getState: () => unknown };
    __renderer: { getState: () => unknown };
    __performance: { getState: () => unknown };
    __settings: { getState: () => unknown };
  }
}
