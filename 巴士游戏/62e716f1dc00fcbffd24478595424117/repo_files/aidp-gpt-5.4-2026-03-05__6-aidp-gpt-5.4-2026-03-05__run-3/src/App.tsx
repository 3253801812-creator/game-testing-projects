import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Html, PerspectiveCamera, Text } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type Phase = 'menu' | 'playing' | 'paused' | 'complete';
type Quality = 'cinematic' | 'high' | 'balanced';
type CameraMode = 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside';
type IndicatorState = 'off' | 'left' | 'right';
type StopStatus = 'next' | 'upcoming' | 'completed';
type LastPointerType = 'mouse' | 'touch' | 'pen' | 'unknown';
type Gear = 'D' | 'R';

type Vec2 = { x: number; z: number };
type CameraVec3 = { x: number; y: number; z: number };

type StopDef = {
  id: string;
  name: string;
  z: number;
  x: number;
  waiting: number;
  fare: number;
  completed: boolean;
  boardingTimer: number;
  cooldown: boolean;
};

type TrafficVehicle = {
  id: string;
  lane: number;
  z: number;
  speed: number;
  direction: 1 | -1;
  color: string;
  length: number;
  width: number;
};

type Obstacle = {
  id: string;
  type: string;
  x: number;
  z: number;
  halfWidth: number;
  halfLength: number;
  height: number;
};

type InputState = {
  KeyW: boolean;
  KeyS: boolean;
  KeyA: boolean;
  KeyD: boolean;
};

type RuntimeState = {
  phase: Phase;
  elapsed: number;
  missionStatus: string;
  message: string;
  position: Vec2;
  heading: number;
  velocity: number;
  throttle: number;
  brake: number;
  steering: number;
  gear: Gear;
  parkingBrake: boolean;
  doorOpen: boolean;
  headlights: boolean;
  indicator: IndicatorState;
  hornActive: boolean;
  fuel: number;
  damage: number;
  odometerKm: number;
  wheelAngle: number;
  collisionCount: number;
  lastCollision: string;
  nextStopIndex: number;
  routeProgress: number;
  score: number;
  earnings: number;
  onboard: number;
  boardedTotal: number;
  boardingProgress: number;
  waitingAtNext: number;
  cameraMode: CameraMode;
  cameraPosition: CameraVec3;
  cameraTarget: CameraVec3;
  cameraFov: number;
  quality: Quality;
  pixelRatio: number;
  renderDistance: number;
  lastAction: string;
  pressed: string[];
  lastPointerType: LastPointerType;
  mobileControls: boolean;
  rendererFrame: number;
  drawCalls: number;
  canvasWidth: number;
  canvasHeight: number;
  webglVersion: number;
  contextLost: boolean;
  perfTick: number;
  perfFrame: number;
  accumulator: number;
  uiUpdates: number;
};

type SnapshotHook = { getState: () => unknown };

declare global {
  interface Window {
    __bus: SnapshotHook;
    __game: SnapshotHook;
    __vehicle: SnapshotHook;
    __route: SnapshotHook;
    __passengers: SnapshotHook;
    __traffic: SnapshotHook;
    __world: SnapshotHook;
    __camera: SnapshotHook;
    __input: SnapshotHook;
    __renderer: SnapshotHook;
    __performance: SnapshotHook;
    __settings: SnapshotHook;
  }
}

const ROAD_CENTER = 0.33;
const ROAD_HALF_WIDTH = 5.2;
const BUS_WIDTH = 2.55;
const BUS_LENGTH = 8.9;
const FIXED_STEP = 1 / 60;
const MAX_SUB_STEPS = 4;
const STOP_LONGITUDINAL_HALF = 10.5;
const STOP_LATERAL_HALF = 4.2;
const BOARDING_DURATION = 1.25;
const CAPACITY = 42;
const WORLD_LENGTH = 720;
const CAMERA_MODES: CameraMode[] = ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside'];
const QUALITY_PROFILES = {
  cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
  high: { pixelRatio: 1.1, density: 0.78, renderDistance: 420 },
  balanced: { pixelRatio: 0.85, density: 0.56, renderDistance: 320 },
} as const;
const VEHICLE_DYNAMICS = {
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

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pressedList = (state: InputState) => Object.entries(state).filter(([, value]) => value).map(([key]) => key);
const mobileNow = () => (typeof window !== 'undefined' ? window.innerWidth < 900 : false);

const initialStops = (): StopDef[] => [
  { id: 's1', name: 'Kota Lama', z: 85, x: ROAD_CENTER + 1.8, waiting: 7, fare: 4200, completed: false, boardingTimer: 0, cooldown: false },
  { id: 's2', name: 'Pasar Raya', z: 320, x: ROAD_CENTER + 1.6, waiting: 10, fare: 5600, completed: false, boardingTimer: 0, cooldown: false },
  { id: 's3', name: 'Terminal Selatan', z: 610, x: ROAD_CENTER + 1.5, waiting: 13, fare: 7300, completed: false, boardingTimer: 0, cooldown: false },
];

const initialTraffic = (density: number): TrafficVehicle[] => {
  const base: TrafficVehicle[] = [
    { id: 'traffic-1', lane: -1.65, z: 150, speed: 7.4, direction: -1, color: '#f97316', length: 4.8, width: 1.9 },
    { id: 'traffic-2', lane: 1.8, z: 210, speed: 12, direction: 1, color: '#38bdf8', length: 5.2, width: 2.1 },
    { id: 'traffic-3', lane: -1.75, z: 280, speed: 8.8, direction: -1, color: '#facc15', length: 4.6, width: 1.85 },
    { id: 'traffic-4', lane: 1.7, z: 360, speed: 10.5, direction: 1, color: '#a78bfa', length: 5, width: 2 },
    { id: 'traffic-5', lane: -1.9, z: 430, speed: 6.8, direction: -1, color: '#22c55e', length: 4.9, width: 1.9 },
    { id: 'traffic-6', lane: 1.75, z: 520, speed: 11.2, direction: 1, color: '#fb7185', length: 5.1, width: 2.05 },
    { id: 'traffic-7', lane: -1.6, z: 575, speed: 7.9, direction: -1, color: '#60a5fa', length: 4.7, width: 1.9 },
    { id: 'traffic-8', lane: 1.85, z: 660, speed: 10, direction: 1, color: '#f59e0b', length: 4.8, width: 1.95 },
    { id: 'traffic-9', lane: -1.7, z: 60, speed: 7.1, direction: -1, color: '#ef4444', length: 4.5, width: 1.85 },
    { id: 'traffic-10', lane: 1.65, z: 115, speed: 11.6, direction: 1, color: '#14b8a6', length: 4.9, width: 1.9 },
  ];
  return base.slice(0, Math.max(6, Math.round(base.length * density)));
};

const worldObstacles = (): Obstacle[] => {
  const obstacles: Obstacle[] = [];
  for (let i = 0; i < 12; i += 1) {
    const z = 35 + i * 55;
    obstacles.push(
      { id: `building-left-${i}`, type: 'building', x: -14 - (i % 2) * 3, z, halfWidth: 3.6, halfLength: 8, height: 7 + (i % 3) * 2 },
      { id: `building-right-${i}`, type: 'building', x: 15 + (i % 3) * 2, z: z + 18, halfWidth: 4.2, halfLength: 7, height: 6 + (i % 4) * 1.5 },
      { id: `stall-left-${i}`, type: 'roadside-shop', x: -9.5, z: z + 24, halfWidth: 2.1, halfLength: 2.8, height: 2.8 },
      { id: `shed-right-${i}`, type: 'shelter', x: 9.6, z: z + 10, halfWidth: 2.4, halfLength: 3.2, height: 3.2 },
    );
  }
  return obstacles;
};

const initialRuntime = (): RuntimeState => ({
  phase: 'menu',
  elapsed: 0,
  missionStatus: 'Ready for departure',
  message: 'Board the coach and begin the route.',
  position: { x: ROAD_CENTER, z: 20 },
  heading: 0.0167,
  velocity: 0,
  throttle: 0,
  brake: 0,
  steering: 0,
  gear: 'D',
  parkingBrake: true,
  doorOpen: false,
  headlights: false,
  indicator: 'off',
  hornActive: false,
  fuel: 100,
  damage: 0,
  odometerKm: 0,
  wheelAngle: 0,
  collisionCount: 0,
  lastCollision: 'none',
  nextStopIndex: 0,
  routeProgress: 0,
  score: 0,
  earnings: 0,
  onboard: 4,
  boardedTotal: 0,
  boardingProgress: 0,
  waitingAtNext: 7,
  cameraMode: 'chase',
  cameraPosition: { x: -5.4, y: 4.7, z: 5.8 },
  cameraTarget: { x: 0.4, y: 1.65, z: 34 },
  cameraFov: 53,
  quality: 'cinematic',
  pixelRatio: QUALITY_PROFILES.cinematic.pixelRatio,
  renderDistance: QUALITY_PROFILES.cinematic.renderDistance,
  lastAction: 'none',
  pressed: [],
  lastPointerType: 'mouse',
  mobileControls: mobileNow(),
  rendererFrame: 0,
  drawCalls: 0,
  canvasWidth: 0,
  canvasHeight: 0,
  webglVersion: 0,
  contextLost: false,
  perfTick: 0,
  perfFrame: 0,
  accumulator: 0,
  uiUpdates: 0,
});

const collides = (
  a: { x: number; z: number; halfWidth: number; halfLength: number },
  b: { x: number; z: number; halfWidth: number; halfLength: number },
) => Math.abs(a.x - b.x) < a.halfWidth + b.halfWidth && Math.abs(a.z - b.z) < a.halfLength + b.halfLength;

function CameraRig({
  mode,
  busPosition,
  heading,
  stopTarget,
  onUpdate,
}: {
  mode: CameraMode;
  busPosition: Vec2;
  heading: number;
  stopTarget: StopDef | null;
  onUpdate: (position: CameraVec3, target: CameraVec3, fov: number) => void;
}) {
  const camera = useThree((state) => state.camera as THREE.PerspectiveCamera);
  const target = useMemo(() => new THREE.Vector3(), []);
  const desired = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const bus = new THREE.Vector3(busPosition.x, 0, busPosition.z);
    const sin = Math.sin(heading);
    const cos = Math.cos(heading);
    const forward = new THREE.Vector3(sin, 0, cos);
    const right = new THREE.Vector3(cos, 0, -sin);
    let fov = 53;

    if (mode === 'chase') {
      desired.copy(bus).addScaledVector(forward, -10).addScaledVector(right, -3.8).setY(4.8);
      target.copy(bus).addScaledVector(forward, 10).setY(1.7);
    } else if (mode === 'showcase') {
      desired.copy(bus).addScaledVector(right, -6.5).addScaledVector(forward, -2).setY(3.6);
      target.copy(bus).setY(2.1);
      fov = 47;
    } else if (mode === 'cockpit') {
      desired.set(busPosition.x - right.x * 0.75 + forward.x * 1.2, 2.35, busPosition.z - right.z * 0.75 + forward.z * 1.2);
      target.copy(bus).addScaledVector(forward, 14).setY(2.25);
      fov = 63;
    } else if (mode === 'cinematic') {
      desired.copy(bus).addScaledVector(right, 9).addScaledVector(forward, -14).setY(7.1);
      target.copy(bus).addScaledVector(forward, 8).setY(2.1);
      fov = 50;
    } else {
      desired.set((stopTarget?.x ?? busPosition.x + 8) + 8, 3.6, (stopTarget?.z ?? busPosition.z + 22) - 4);
      target.set(busPosition.x, 1.9, busPosition.z);
      fov = 49;
    }

    camera.position.lerp(desired, 0.12);
    camera.lookAt(target);
    camera.fov = lerp(camera.fov, fov, 0.12);
    camera.updateProjectionMatrix();
    onUpdate(
      { x: camera.position.x, y: camera.position.y, z: camera.position.z },
      { x: target.x, y: target.y, z: target.z },
      camera.fov,
    );
  });

  return null;
}

function BusMesh({ runtime }: { runtime: RuntimeState }) {
  const blink = Math.floor(performance.now() / 300) % 2 === 0;
  return (
    <group position={[runtime.position.x, 0, runtime.position.z]} rotation={[0, runtime.heading, 0]}>
      <mesh position={[0, 1.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.55, 3.1, 8.9]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.28} roughness={0.34} />
      </mesh>
      <mesh position={[0, 2.85, -0.25]} castShadow>
        <boxGeometry args={[2.42, 0.42, 6.8]} />
        <meshStandardMaterial color="#dc2626" metalness={0.22} roughness={0.38} />
      </mesh>
      <mesh position={[0, 2.2, 1.2]} castShadow>
        <boxGeometry args={[2.45, 1.15, 6.4]} />
        <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.12} transparent opacity={0.82} />
      </mesh>
      <mesh position={[1.05, 1.5, 1.55 + (runtime.doorOpen ? 0.45 : 0)]} rotation={[0, runtime.doorOpen ? -0.9 : 0, 0]} castShadow>
        <boxGeometry args={[0.08, 1.95, 1.15]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.35} roughness={0.32} />
      </mesh>
      {[-2.8, 2.7].map((z) => (
        <group key={z}>
          <mesh position={[1.32, 0.65, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.42, 0.42, 0.34, 24]} />
            <meshStandardMaterial color="#111827" roughness={0.85} />
          </mesh>
          <mesh position={[-1.32, 0.65, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.42, 0.42, 0.34, 24]} />
            <meshStandardMaterial color="#111827" roughness={0.85} />
          </mesh>
        </group>
      ))}
      <group position={[0.98, 0.65, 2.7]} rotation={[0, runtime.wheelAngle, Math.PI / 2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.43, 0.43, 0.22, 24]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
      </group>
      <group position={[-0.98, 0.65, 2.7]} rotation={[0, runtime.wheelAngle, Math.PI / 2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.43, 0.43, 0.22, 24]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
      </group>
      {runtime.headlights && (
        <>
          <pointLight position={[0.82, 1.4, 4.46]} intensity={8} distance={35} color="#fff5c2" />
          <pointLight position={[-0.82, 1.4, 4.46]} intensity={8} distance={35} color="#fff5c2" />
        </>
      )}
      <mesh position={[0.82, 1.4, 4.48]}>
        <boxGeometry args={[0.28, 0.18, 0.05]} />
        <meshStandardMaterial emissive={runtime.headlights ? '#fff7cc' : '#111111'} color="#f8fafc" emissiveIntensity={runtime.headlights ? 1.6 : 0.05} />
      </mesh>
      <mesh position={[-0.82, 1.4, 4.48]}>
        <boxGeometry args={[0.28, 0.18, 0.05]} />
        <meshStandardMaterial emissive={runtime.headlights ? '#fff7cc' : '#111111'} color="#f8fafc" emissiveIntensity={runtime.headlights ? 1.6 : 0.05} />
      </mesh>
      <mesh position={[1.08, 1.5, 4.42]}>
        <boxGeometry args={[0.12, 0.18, 0.08]} />
        <meshStandardMaterial color="#f59e0b" emissive={runtime.indicator === 'right' && blink ? '#f59e0b' : '#000000'} emissiveIntensity={runtime.indicator === 'right' && blink ? 2 : 0} />
      </mesh>
      <mesh position={[-1.08, 1.5, 4.42]}>
        <boxGeometry args={[0.12, 0.18, 0.08]} />
        <meshStandardMaterial color="#f59e0b" emissive={runtime.indicator === 'left' && blink ? '#f59e0b' : '#000000'} emissiveIntensity={runtime.indicator === 'left' && blink ? 2 : 0} />
      </mesh>
      {runtime.hornActive && <pointLight position={[0, 2.8, 3.5]} intensity={2.4} distance={10} color="#fb7185" />}
    </group>
  );
}

function TrafficCar({ vehicle }: { vehicle: TrafficVehicle }) {
  return (
    <group position={[ROAD_CENTER + vehicle.lane, 0, vehicle.z]} rotation={[0, vehicle.direction > 0 ? 0 : Math.PI, 0]}>
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[vehicle.width, 1.1, vehicle.length]} />
        <meshStandardMaterial color={vehicle.color} metalness={0.3} roughness={0.45} />
      </mesh>
      <mesh position={[0, 1.15, -0.2]} castShadow>
        <boxGeometry args={[vehicle.width * 0.82, 0.55, vehicle.length * 0.45]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.14} transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function StopShelter({ stop, active }: { stop: StopDef; active: boolean }) {
  return (
    <group position={[stop.x + 4.3, 0, stop.z]}>
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[3.2, 0.2, 6]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      <mesh position={[0, 2.6, 0]} castShadow>
        <boxGeometry args={[3.6, 0.25, 6.2]} />
        <meshStandardMaterial color="#b91c1c" metalness={0.2} roughness={0.45} />
      </mesh>
      {[-1.4, 1.4].flatMap((x) =>
        [-2.6, 2.6].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 1.25, z]} castShadow>
            <boxGeometry args={[0.14, 2.5, 0.14]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.45} roughness={0.35} />
          </mesh>
        )),
      )}
      <Text position={[0, 2.2, 0]} fontSize={0.42} color={active ? '#fef08a' : '#ffffff'} anchorX="center" anchorY="middle">
        {stop.name}
      </Text>
      <mesh position={[-4.2, 1.6, 0]}>
        <boxGeometry args={[0.2, 2.6, 0.2]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[-4.2, 2.65, 0]}>
        <circleGeometry args={[0.55, 24]} />
        <meshStandardMaterial color={active ? '#fde047' : '#38bdf8'} emissive={active ? '#fde047' : '#0ea5e9'} emissiveIntensity={1.2} />
      </mesh>
    </group>
  );
}

function Building({ obstacle }: { obstacle: Obstacle }) {
  const roofColor = obstacle.type === 'building' ? '#7c2d12' : '#0f766e';
  const bodyColor = obstacle.type === 'building' ? '#e2e8f0' : '#cbd5e1';
  return (
    <group position={[obstacle.x, 0, obstacle.z]}>
      <mesh position={[0, obstacle.height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[obstacle.halfWidth * 2, obstacle.height, obstacle.halfLength * 2]} />
        <meshStandardMaterial color={bodyColor} roughness={0.75} />
      </mesh>
      <mesh position={[0, obstacle.height + 0.4, 0]} castShadow>
        <boxGeometry args={[obstacle.halfWidth * 2.2, 0.7, obstacle.halfLength * 2.2]} />
        <meshStandardMaterial color={roofColor} roughness={0.65} />
      </mesh>
    </group>
  );
}

function Palm({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, 0, z]} scale={scale}>
      <mesh position={[0, 1.75, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.22, 3.5, 10]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>
      {[0, 1.2, 2.5, 3.8, 5].map((r, i) => (
        <mesh key={i} position={[0, 3.4, 0]} rotation={[0.2 + i * 0.07, r, 0.6]} castShadow>
          <coneGeometry args={[0.18, 2.4, 6]} />
          <meshStandardMaterial color="#22c55e" roughness={0.75} />
        </mesh>
      ))}
    </group>
  );
}

function RoadScene({
  runtime,
  traffic,
  stops,
  obstacles,
  onCameraUpdate,
  onRendererUpdate,
}: {
  runtime: RuntimeState;
  traffic: TrafficVehicle[];
  stops: StopDef[];
  obstacles: Obstacle[];
  onCameraUpdate: (position: CameraVec3, target: CameraVec3, fov: number) => void;
  onRendererUpdate: (partial: Partial<RuntimeState>) => void;
}) {
  const profile = QUALITY_PROFILES[runtime.quality];
  const activeStop = stops[runtime.nextStopIndex] ?? null;

  function RendererReporter() {
    const gl = useThree((state) => state.gl);
    const size = useThree((state) => state.size);
    const frameRef = useRef(0);

    useFrame(() => {
      frameRef.current += 1;
      onRendererUpdate({
        rendererFrame: frameRef.current,
        drawCalls: gl.info.render.calls,
        canvasWidth: size.width,
        canvasHeight: size.height,
        webglVersion: gl.capabilities.isWebGL2 ? 2 : 1,
        contextLost: gl.getContext().isContextLost(),
        pixelRatio: profile.pixelRatio,
        renderDistance: profile.renderDistance,
      });
    });

    return null;
  }

  return (
    <Canvas
      shadows={false}
      gl={{ antialias: true }}
      dpr={profile.pixelRatio}
      className="!absolute inset-0"
      onPointerDown={(event) => onRendererUpdate({ lastPointerType: (event.pointerType || 'unknown') as LastPointerType })}
    >
      <PerspectiveCamera makeDefault position={[-5.4, 4.7, 5.8]} fov={53} near={0.1} far={900} />
      <fog attach="fog" args={['#bfd9f5', 80, profile.renderDistance]} />
      <color attach="background" args={['#9fcbf1']} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 18, 5]} intensity={2.7} color="#fff4d6" />
      <hemisphereLight intensity={0.9} color="#f8fafc" groundColor="#5b7c4d" />
      <Environment preset="city" />
      <RendererReporter />
      <CameraRig mode={runtime.cameraMode} busPosition={runtime.position} heading={runtime.heading} stopTarget={activeStop} onUpdate={onCameraUpdate} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.01, WORLD_LENGTH / 2]}>
        <planeGeometry args={[120, WORLD_LENGTH + 120]} />
        <meshStandardMaterial color="#5f8d4e" roughness={1} />
      </mesh>
      <mesh receiveShadow position={[ROAD_CENTER, 0.02, WORLD_LENGTH / 2]}>
        <boxGeometry args={[ROAD_HALF_WIDTH * 2, 0.05, WORLD_LENGTH]} />
        <meshStandardMaterial color="#2f3338" roughness={0.94} />
      </mesh>
      <mesh position={[ROAD_CENTER, 0.03, WORLD_LENGTH / 2]}>
        <boxGeometry args={[0.16, 0.01, WORLD_LENGTH]} />
        <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[ROAD_CENTER - ROAD_HALF_WIDTH - 0.15, 0.35, WORLD_LENGTH / 2]}>
        <boxGeometry args={[0.3, 0.7, WORLD_LENGTH]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[ROAD_CENTER + ROAD_HALF_WIDTH + 0.15, 0.35, WORLD_LENGTH / 2]}>
        <boxGeometry args={[0.3, 0.7, WORLD_LENGTH]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      {Array.from({ length: 90 }).map((_, i) => (
        <mesh key={i} position={[ROAD_CENTER, 0.06, i * 8 + 3]}>
          <boxGeometry args={[0.16, 0.02, 4]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
      ))}

      {stops.map((stop, index) => (
        <group key={stop.id}>
          <mesh position={[ROAD_CENTER + ROAD_HALF_WIDTH - 0.5, 0.04, stop.z]}>
            <boxGeometry args={[1.4, 0.02, STOP_LONGITUDINAL_HALF * 2]} />
            <meshStandardMaterial color={index === runtime.nextStopIndex ? '#fde047' : '#93c5fd'} emissive={index === runtime.nextStopIndex ? '#fde047' : '#60a5fa'} emissiveIntensity={0.45} />
          </mesh>
          <StopShelter stop={stop} active={index === runtime.nextStopIndex && !stop.completed} />
        </group>
      ))}

      {obstacles.map((obstacle) => (
        <Building key={obstacle.id} obstacle={obstacle} />
      ))}

      {Array.from({ length: runtime.quality === 'balanced' ? 18 : runtime.quality === 'high' ? 28 : 42 }).map((_, i) => (
        <Palm key={`left-${i}`} x={-20 - (i % 3) * 2.5} z={20 + i * 16} scale={0.95 + (i % 4) * 0.12} />
      ))}
      {Array.from({ length: runtime.quality === 'balanced' ? 15 : runtime.quality === 'high' ? 24 : 36 }).map((_, i) => (
        <Palm key={`right-${i}`} x={18 + (i % 4) * 2.1} z={35 + i * 18} scale={0.9 + (i % 5) * 0.1} />
      ))}

      {traffic.map((vehicle) => (
        <TrafficCar key={vehicle.id} vehicle={vehicle} />
      ))}
      <BusMesh runtime={runtime} />

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.35}>
        <group position={[ROAD_CENTER - 14, 10, runtime.position.z + 80]}>
          <mesh>
            <sphereGeometry args={[8, 32, 32]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.09} />
          </mesh>
        </group>
      </Float>

      <Html position={[runtime.position.x, 5, runtime.position.z]} center style={{ pointerEvents: 'none' }}>
        <div className="rounded-full border border-white/30 bg-slate-900/45 px-3 py-1 text-xs font-medium tracking-wide text-white shadow-lg backdrop-blur">
          {runtime.phase === 'menu' ? 'Tap Start Route' : runtime.message}
        </div>
      </Html>
    </Canvas>
  );
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function App() {
  const [runtime, setRuntime] = useState<RuntimeState>(() => initialRuntime());
  const [input, setInput] = useState<InputState>({ KeyW: false, KeyS: false, KeyA: false, KeyD: false });
  const [touchInput, setTouchInput] = useState<InputState>({ KeyW: false, KeyS: false, KeyA: false, KeyD: false });
  const [stops, setStops] = useState<StopDef[]>(() => initialStops());
  const [traffic, setTraffic] = useState<TrafficVehicle[]>(() => initialTraffic(QUALITY_PROFILES.cinematic.density));
  const obstacles = useMemo(() => worldObstacles(), []);
  const simRef = useRef({ runtime: initialRuntime(), input, touchInput, stops: initialStops(), traffic: initialTraffic(QUALITY_PROFILES.cinematic.density) });
  const lastTimeRef = useRef(0);
  const accumulatorRef = useRef(0);

  useEffect(() => {
    simRef.current = { runtime, input, touchInput, stops, traffic };
  }, [runtime, input, touchInput, stops, traffic]);

  const applyQuality = (quality: Quality) => {
    const profile = QUALITY_PROFILES[quality];
    setRuntime((prev) => ({ ...prev, quality, pixelRatio: profile.pixelRatio, renderDistance: profile.renderDistance, lastAction: `quality-${quality}`, uiUpdates: prev.uiUpdates + 1 }));
    setTraffic(initialTraffic(profile.density));
  };

  const startRoute = () => {
    setRuntime((prev) => ({ ...prev, phase: prev.phase === 'menu' ? 'playing' : prev.phase, parkingBrake: false, missionStatus: 'Depart for Kota Lama', message: 'Follow the corridor and serve 3 passenger stops.', lastAction: 'startRoute', uiUpdates: prev.uiUpdates + 1 }));
  };

  const cycleCamera = () => {
    setRuntime((prev) => ({ ...prev, cameraMode: CAMERA_MODES[(CAMERA_MODES.indexOf(prev.cameraMode) + 1) % CAMERA_MODES.length], lastAction: 'cameraCycle', uiUpdates: prev.uiUpdates + 1 }));
  };

  const togglePause = () => {
    setRuntime((prev) => {
      if (prev.phase === 'complete') return prev;
      return {
        ...prev,
        phase: prev.phase === 'paused' ? 'playing' : prev.phase === 'menu' ? 'playing' : 'paused',
        missionStatus: prev.phase === 'paused' ? prev.missionStatus : 'Simulation paused',
        message: prev.phase === 'paused' ? prev.message : 'Route frozen. Resume when ready.',
        lastAction: prev.phase === 'paused' ? 'resume' : 'pause',
        uiUpdates: prev.uiUpdates + 1,
      };
    });
  };

  const resetSession = () => {
    const fresh = initialRuntime();
    const quality = simRef.current.runtime.quality;
    const profile = QUALITY_PROFILES[quality];
    const nextRuntime = { ...fresh, quality, pixelRatio: profile.pixelRatio, renderDistance: profile.renderDistance, mobileControls: mobileNow(), uiUpdates: simRef.current.runtime.uiUpdates + 1 };
    const nextStops = initialStops();
    const nextTraffic = initialTraffic(profile.density);
    setRuntime(nextRuntime);
    setStops(nextStops);
    setTraffic(nextTraffic);
    setInput({ KeyW: false, KeyS: false, KeyA: false, KeyD: false });
    setTouchInput({ KeyW: false, KeyS: false, KeyA: false, KeyD: false });
    simRef.current = { runtime: nextRuntime, input: { KeyW: false, KeyS: false, KeyA: false, KeyD: false }, touchInput: { KeyW: false, KeyS: false, KeyA: false, KeyD: false }, stops: nextStops, traffic: nextTraffic };
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;
      if (event.code === 'KeyW' || event.code === 'KeyA' || event.code === 'KeyS' || event.code === 'KeyD') {
        setInput((prev) => {
          const next = { ...prev, [event.code]: true } as InputState;
          setRuntime((state) => ({ ...state, pressed: pressedList(next), lastAction: event.code }));
          return next;
        });
      }
      if (event.code === 'Enter') startRoute();
      if (event.code === 'KeyP') togglePause();
      if (event.code === 'KeyC') cycleCamera();
      if (event.code === 'KeyL') setRuntime((prev) => ({ ...prev, headlights: !prev.headlights, lastAction: 'headlights', uiUpdates: prev.uiUpdates + 1 }));
      if (event.code === 'KeyB') setRuntime((prev) => ({ ...prev, parkingBrake: !prev.parkingBrake, lastAction: 'parkingBrake', uiUpdates: prev.uiUpdates + 1 }));
      if (event.code === 'KeyO') {
        setRuntime((prev) => ({
          ...prev,
          doorOpen: Math.abs(prev.velocity) <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? !prev.doorOpen : false,
          missionStatus: Math.abs(prev.velocity) <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? prev.missionStatus : 'Slow to open passenger door',
          message: Math.abs(prev.velocity) <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? prev.message : 'Door interlock active while bus is moving.',
          lastAction: 'door',
          uiUpdates: prev.uiUpdates + 1,
        }));
      }
      if (event.code === 'KeyQ') setRuntime((prev) => ({ ...prev, indicator: prev.indicator === 'left' ? 'off' : 'left', lastAction: 'indicatorLeft', uiUpdates: prev.uiUpdates + 1 }));
      if (event.code === 'KeyE') setRuntime((prev) => ({ ...prev, indicator: prev.indicator === 'right' ? 'off' : 'right', lastAction: 'indicatorRight', uiUpdates: prev.uiUpdates + 1 }));
      if (event.code === 'KeyH') setRuntime((prev) => ({ ...prev, hornActive: true, lastAction: 'horn', uiUpdates: prev.uiUpdates + 1 }));
      if (event.code === 'KeyR') resetSession();
      if (event.code === 'Digit1') applyQuality('cinematic');
      if (event.code === 'Digit2') applyQuality('high');
      if (event.code === 'Digit3') applyQuality('balanced');
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'KeyW' || event.code === 'KeyA' || event.code === 'KeyS' || event.code === 'KeyD') {
        setInput((prev) => {
          const next = { ...prev, [event.code]: false } as InputState;
          setRuntime((state) => ({ ...state, pressed: pressedList(next) }));
          return next;
        });
      }
      if (event.code === 'KeyH') setRuntime((prev) => ({ ...prev, hornActive: false }));
    };

    const handleBlur = () => {
      setInput({ KeyW: false, KeyS: false, KeyA: false, KeyD: false });
      setTouchInput({ KeyW: false, KeyS: false, KeyA: false, KeyD: false });
      setRuntime((prev) => ({ ...prev, pressed: [], throttle: 0, brake: 0, steering: 0, hornActive: false, lastAction: 'blur-clear-controls' }));
    };

    const handleResize = () => setRuntime((prev) => ({ ...prev, mobileControls: mobileNow(), uiUpdates: prev.uiUpdates + 1 }));

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const step = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = Math.min(0.05, (time - lastTimeRef.current) / 1000);
      lastTimeRef.current = time;

      const stateRef = simRef.current;
      setRuntime((prev) => ({ ...prev, perfFrame: prev.perfFrame + 1 }));

      if (stateRef.runtime.phase === 'playing') {
        accumulatorRef.current += delta;
        let subSteps = 0;
        while (accumulatorRef.current >= FIXED_STEP && subSteps < MAX_SUB_STEPS) {
          accumulatorRef.current -= FIXED_STEP;
          subSteps += 1;

          const current = simRef.current;
          const controls = {
            w: current.input.KeyW || current.touchInput.KeyW,
            s: current.input.KeyS || current.touchInput.KeyS,
            a: current.input.KeyA || current.touchInput.KeyA,
            d: current.input.KeyD || current.touchInput.KeyD,
          };

          const prevRuntime = current.runtime;
          const throttle = controls.w && !prevRuntime.parkingBrake && prevRuntime.fuel > 0 ? 1 : 0;
          const brake = controls.s ? 1 : 0;
          let gear: Gear = prevRuntime.gear;
          if (brake > 0 && Math.abs(prevRuntime.velocity) < 0.7 && !controls.w) gear = 'R';
          if (controls.w) gear = 'D';
          const steerTarget = (controls.a ? 1 : 0) - (controls.d ? 1 : 0);
          const steering = lerp(prevRuntime.steering, steerTarget, 0.22);
          const wheelAngle = steering * THREE.MathUtils.degToRad(VEHICLE_DYNAMICS.maxWheelAngleDeg);
          let velocity = prevRuntime.velocity;

          if (gear === 'D') velocity += throttle * VEHICLE_DYNAMICS.throttleAcceleration * FIXED_STEP;
          if (gear === 'R' && brake > 0) velocity -= VEHICLE_DYNAMICS.reverseAcceleration * FIXED_STEP;
          if (brake > 0 && gear === 'D') velocity -= VEHICLE_DYNAMICS.serviceBrakeDeceleration * FIXED_STEP;
          if (!controls.w && !(gear === 'R' && brake > 0)) {
            velocity -= Math.sign(velocity) * Math.min(Math.abs(velocity), VEHICLE_DYNAMICS.rollingResistance * FIXED_STEP);
          }
          if (prevRuntime.parkingBrake) velocity *= Math.max(0, 1 - VEHICLE_DYNAMICS.parkingBrakeDamping * FIXED_STEP);
          velocity = clamp(velocity, -VEHICLE_DYNAMICS.maxReverseSpeedMps, VEHICLE_DYNAMICS.maxForwardSpeedMps);

          let heading = prevRuntime.heading + steering * 0.45 * (velocity / VEHICLE_DYNAMICS.maxForwardSpeedMps) * FIXED_STEP;
          const dx = Math.sin(heading) * velocity * FIXED_STEP;
          const dz = Math.cos(heading) * velocity * FIXED_STEP;
          let nextPos = { x: prevRuntime.position.x + dx, z: clamp(prevRuntime.position.z + dz, 0, WORLD_LENGTH) };
          let collisionCount = prevRuntime.collisionCount;
          let lastCollision = prevRuntime.lastCollision;
          let damage = prevRuntime.damage;
          const busBox = { x: nextPos.x, z: nextPos.z, halfWidth: BUS_WIDTH / 2, halfLength: BUS_LENGTH / 2 };
          const roadLeft = ROAD_CENTER - ROAD_HALF_WIDTH + BUS_WIDTH / 2;
          const roadRight = ROAD_CENTER + ROAD_HALF_WIDTH - BUS_WIDTH / 2;

          if (nextPos.x < roadLeft || nextPos.x > roadRight) {
            nextPos = { ...nextPos, x: clamp(nextPos.x, roadLeft, roadRight) };
            velocity *= -0.12;
            collisionCount += 1;
            lastCollision = 'road-edge-barrier';
            damage = clamp(damage + 0.4, 0, 100);
          }

          for (const obstacle of current.stops.flatMap((stop) => [{ x: stop.x + 4.3, z: stop.z, halfWidth: 1.8, halfLength: 3.1, id: `${stop.id}-shelter` }])) {
            if (collides(busBox, obstacle)) {
              nextPos = { ...prevRuntime.position };
              velocity = 0;
              collisionCount += 1;
              lastCollision = obstacle.id;
              damage = clamp(damage + 1, 0, 100);
            }
          }

          for (const obstacle of obstacles) {
            if (collides(busBox, obstacle)) {
              nextPos = { ...prevRuntime.position };
              velocity = 0;
              collisionCount += 1;
              lastCollision = obstacle.id;
              damage = clamp(damage + 1.1, 0, 100);
              break;
            }
          }

          for (const car of current.traffic) {
            const carBox = { x: ROAD_CENTER + car.lane, z: car.z, halfWidth: car.width / 2, halfLength: car.length / 2 };
            if (collides(busBox, carBox)) {
              nextPos = { ...prevRuntime.position };
              velocity = 0;
              collisionCount += 1;
              lastCollision = car.id;
              damage = clamp(damage + 1.8, 0, 100);
              break;
            }
          }

          const fuel = clamp(prevRuntime.fuel - (throttle > 0 ? Math.abs(velocity) * 0.0042 * FIXED_STEP : 0), 0, 100);
          const speed = Math.abs(velocity);
          const doorOpen = speed <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? prevRuntime.doorOpen : false;
          const currentStop = current.stops[prevRuntime.nextStopIndex] ?? null;
          const atStop = !!currentStop && Math.abs(nextPos.z - currentStop.z) <= STOP_LONGITUDINAL_HALF && Math.abs(nextPos.x - currentStop.x) <= STOP_LATERAL_HALF;

          let missionStatus = prevRuntime.missionStatus;
          let message = prevRuntime.message;
          let nextStopIndex = prevRuntime.nextStopIndex;
          let routeProgress = prevRuntime.routeProgress;
          let onboard = prevRuntime.onboard;
          let boardedTotal = prevRuntime.boardedTotal;
          let score = prevRuntime.score;
          let earnings = prevRuntime.earnings;
          let boardingProgress = 0;
          const updatedStops = current.stops.map((stop, index) => {
            if (index !== prevRuntime.nextStopIndex || stop.completed) return stop;
            const validBoarding = atStop && doorOpen && speed <= VEHICLE_DYNAMICS.boardingSpeedMps;
            if (!validBoarding) {
              return Math.abs(nextPos.z - stop.z) > STOP_LONGITUDINAL_HALF || Math.abs(nextPos.x - stop.x) > STOP_LATERAL_HALF
                ? { ...stop, boardingTimer: 0, cooldown: false }
                : { ...stop, boardingTimer: 0 };
            }
            const nextTimer = stop.cooldown ? stop.boardingTimer : stop.boardingTimer + FIXED_STEP;
            boardingProgress = clamp(nextTimer / BOARDING_DURATION, 0, 1);
            if (!stop.cooldown && nextTimer >= BOARDING_DURATION) {
              const boarded = Math.min(stop.waiting, CAPACITY - onboard);
              onboard += boarded;
              boardedTotal += boarded;
              score += boarded * 15 + 150;
              earnings += boarded * stop.fare;
              nextStopIndex += 1;
              routeProgress = clamp(nextStopIndex / 3, 0, 1);
              missionStatus = nextStopIndex >= 3 ? 'Route complete' : `Service complete at ${stop.name}`;
              message = nextStopIndex >= 3 ? 'All three Indonesia corridor stops completed.' : `${boarded} passengers boarded at ${stop.name}.`;
              boardingProgress = 0;
              return { ...stop, completed: true, waiting: 0, boardingTimer: BOARDING_DURATION, cooldown: true };
            }
            missionStatus = `Boarding at ${stop.name}`;
            message = 'Hold position with doors open for passengers.';
            return { ...stop, boardingTimer: nextTimer };
          });

          if (currentStop && !currentStop.completed && !(atStop && doorOpen && speed <= VEHICLE_DYNAMICS.boardingSpeedMps)) {
            missionStatus = atStop ? `Open doors at ${currentStop.name}` : `Proceed to ${currentStop.name}`;
            message = atStop ? 'Bus is aligned. Open the passenger door to start boarding.' : `Next stop ${currentStop.name} ahead.`;
          }

          const nextRuntime: RuntimeState = {
            ...prevRuntime,
            elapsed: prevRuntime.elapsed + FIXED_STEP,
            position: nextPos,
            heading,
            velocity,
            throttle,
            brake,
            steering,
            gear,
            wheelAngle,
            fuel,
            doorOpen,
            odometerKm: prevRuntime.odometerKm + Math.abs(velocity) * FIXED_STEP / 1000,
            collisionCount,
            lastCollision,
            damage,
            missionStatus,
            message,
            nextStopIndex,
            routeProgress,
            onboard,
            boardedTotal,
            boardingProgress,
            earnings,
            score,
            waitingAtNext: updatedStops[nextStopIndex]?.waiting ?? 0,
            phase: nextStopIndex >= 3 ? 'complete' : prevRuntime.phase,
            perfTick: prevRuntime.perfTick + 1,
            accumulator: accumulatorRef.current,
          };

          const nextTraffic = current.traffic.map((car) => {
            const nextZ = car.z + car.speed * FIXED_STEP * car.direction;
            if (car.direction > 0 && nextZ > WORLD_LENGTH + 40) return { ...car, z: -40 };
            if (car.direction < 0 && nextZ < -40) return { ...car, z: WORLD_LENGTH + 40 };
            return { ...car, z: nextZ };
          });

          simRef.current = { ...simRef.current, runtime: nextRuntime, stops: updatedStops, traffic: nextTraffic };
          setRuntime(nextRuntime);
          setStops(updatedStops);
          setTraffic(nextTraffic);
        }
      } else {
        accumulatorRef.current = 0;
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [obstacles]);

  useEffect(() => {
    const currentStop = stops[runtime.nextStopIndex] ?? null;
    const routeState = {
      name: 'Bandung · Kota Lama · Selatan',
      stopCount: 3,
      currentStopIndex: runtime.nextStopIndex,
      stops: stops.map((stop, index) => ({ id: stop.id, name: stop.name, z: stop.z, status: stop.completed ? 'completed' : index === runtime.nextStopIndex ? 'next' : 'upcoming' as StopStatus })),
      nextStopDistance: currentStop ? Math.max(0, currentStop.z - runtime.position.z) : 0,
      atStop: !!currentStop && Math.abs(runtime.position.z - currentStop.z) <= STOP_LONGITUDINAL_HALF && Math.abs(runtime.position.x - currentStop.x) <= STOP_LATERAL_HALF,
      completed: runtime.routeProgress >= 1,
      earnings: runtime.earnings,
      service: { stopLongitudinalHalfLength: STOP_LONGITUDINAL_HALF, stopLateralHalfWidth: STOP_LATERAL_HALF, boardingDuration: BOARDING_DURATION },
    };

    const nearbySolidObstacles = obstacles
      .filter((obstacle) => Math.abs(obstacle.z - runtime.position.z) < 80)
      .slice(0, 8)
      .map((obstacle) => ({ id: obstacle.id, type: obstacle.type, x: obstacle.x, z: obstacle.z, halfWidth: obstacle.halfWidth, halfLength: obstacle.halfLength }));

    window.__bus = { getState: () => clone({ phase: runtime.phase, speedKph: Math.abs(runtime.velocity) * 3.6, position: runtime.position, headingDeg: THREE.MathUtils.radToDeg(runtime.heading), doorOpen: runtime.doorOpen, passengerCount: runtime.onboard, nextStopIndex: runtime.nextStopIndex, routeProgress: runtime.routeProgress, fuel: runtime.fuel, score: runtime.score }) };
    window.__game = { getState: () => clone({ phase: runtime.phase, elapsed: runtime.elapsed, paused: runtime.phase === 'paused', missionStatus: runtime.missionStatus, score: runtime.score, message: runtime.message }) };
    window.__vehicle = { getState: () => clone({ id: 'NLX-880', type: '12m Luxury Coach', position: runtime.position, headingDeg: THREE.MathUtils.radToDeg(runtime.heading), speedKph: Math.abs(runtime.velocity) * 3.6, velocity: runtime.velocity, throttle: runtime.throttle, brake: runtime.brake, steering: runtime.steering, gear: runtime.gear, parkingBrake: runtime.parkingBrake, doorOpen: runtime.doorOpen, headlights: runtime.headlights, indicator: runtime.indicator, hornActive: runtime.hornActive, fuel: runtime.fuel, damage: runtime.damage, odometerKm: runtime.odometerKm, wheelAngle: THREE.MathUtils.radToDeg(runtime.wheelAngle), collisionCount: runtime.collisionCount, lastCollision: runtime.lastCollision, dynamics: VEHICLE_DYNAMICS }) };
    window.__route = { getState: () => clone(routeState) };
    window.__passengers = { getState: () => clone({ onboard: runtime.onboard, capacity: CAPACITY, boardedTotal: runtime.boardedTotal, waitingAtNext: runtime.waitingAtNext, boardingProgress: runtime.boardingProgress }) };
    window.__traffic = { getState: () => clone({ count: traffic.length, density: QUALITY_PROFILES[runtime.quality].density, vehicles: traffic.slice(0, 10).map((car) => ({ id: car.id, x: ROAD_CENTER + car.lane, z: car.z, speedKph: Math.abs(car.speed) * 3.6, direction: car.direction })) }) };
    window.__world = { getState: () => clone({ environment: 'Tropical intercity corridor', weather: 'Sunbreak after rain', timeOfDay: '16:20', roadCenter: ROAD_CENTER, roadHalfWidth: ROAD_HALF_WIDTH, surface: 'asphalt', nearStopMarkers: stops.filter((stop) => Math.abs(stop.z - runtime.position.z) < 70 && !stop.completed).length, solidObstacleCount: obstacles.length, collision: { roadEdgeEnabled: true, trafficEnabled: true, solidObjectsEnabled: true, busWidth: BUS_WIDTH, busLength: BUS_LENGTH }, nearbySolidObstacles }) };
    window.__camera = { getState: () => clone({ mode: runtime.cameraMode, position: runtime.cameraPosition, target: runtime.cameraTarget, fov: runtime.cameraFov, near: 0.1, far: 900, modes: CAMERA_MODES }) };
    window.__input = { getState: () => clone({ pressed: runtime.pressed, lastAction: runtime.lastAction, lastPointerType: runtime.lastPointerType, mobileControls: runtime.mobileControls }) };
    window.__renderer = { getState: () => clone({ backend: 'WebGL', contextLost: runtime.contextLost, frame: runtime.rendererFrame, drawCalls: runtime.drawCalls, canvas: { width: runtime.canvasWidth, height: runtime.canvasHeight }, quality: runtime.quality, pixelRatio: runtime.pixelRatio, renderDistance: runtime.renderDistance, webglVersion: runtime.webglVersion, dynamicLighting: true, fog: true, antialias: true, shadowsEnabled: false }) };
    window.__performance = { getState: () => clone({ elapsed: runtime.elapsed, tick: runtime.perfTick, frame: runtime.perfFrame, fixedStep: FIXED_STEP, accumulator: runtime.accumulator, maxSubSteps: MAX_SUB_STEPS, uiUpdates: runtime.uiUpdates, mounted: true }) };
    window.__settings = { getState: () => clone({ quality: runtime.quality, masterVolume: 0.8, pixelRatio: runtime.pixelRatio, trafficDensity: QUALITY_PROFILES[runtime.quality].density, renderDistance: runtime.renderDistance, qualityProfiles: QUALITY_PROFILES }) };
  }, [obstacles, runtime, stops, traffic]);

  const nextStop = stops[runtime.nextStopIndex] ?? null;
  const nextStopDistance = nextStop ? Math.max(0, nextStop.z - runtime.position.z) : 0;
  const buttonClass = 'pointer-events-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10';

  const touchButton = (label: string, key: keyof InputState) => (
    <button
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg font-bold text-white shadow-lg backdrop-blur active:scale-95"
      onPointerDown={(event) => {
        const pointer = (event.pointerType || 'touch') as LastPointerType;
        setTouchInput((prev) => ({ ...prev, [key]: true }));
        setRuntime((prev) => ({ ...prev, lastPointerType: pointer, lastAction: key, mobileControls: true }));
      }}
      onPointerUp={() => setTouchInput((prev) => ({ ...prev, [key]: false }))}
      onPointerLeave={() => setTouchInput((prev) => ({ ...prev, [key]: false }))}
    >
      {label}
    </button>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <RoadScene
        runtime={runtime}
        traffic={traffic}
        stops={stops}
        obstacles={obstacles}
        onCameraUpdate={(position, target, fov) => setRuntime((prev) => ({ ...prev, cameraPosition: position, cameraTarget: target, cameraFov: fov }))}
        onRendererUpdate={(partial) => setRuntime((prev) => ({ ...prev, ...partial }))}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/55 via-transparent to-slate-950/70" />

      <div className="absolute left-0 top-0 z-20 flex w-full flex-col gap-3 p-3 md:p-4">
        <div className="grid gap-3 xl:grid-cols-[1.2fr_1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Nusantara Coach Simulator 3D</p>
                <h1 className="mt-1 text-2xl font-semibold">Indonesia-inspired luxury corridor route</h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-200/85">Drive a high-detail intercity bus through tropical roadside towns, serve three ordered stops, manage fuel, doors, camera views, and collisions in a single uninterrupted session.</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-right">
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Phase</div>
                <div className="text-lg font-semibold capitalize">{runtime.phase}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl bg-white/5 p-3"><div className="text-xs text-slate-300">Speed</div><div className="text-2xl font-semibold">{(Math.abs(runtime.velocity) * 3.6).toFixed(0)} <span className="text-sm text-slate-400">km/h</span></div></div>
              <div className="rounded-2xl bg-white/5 p-3"><div className="text-xs text-slate-300">Fuel</div><div className="text-2xl font-semibold">{runtime.fuel.toFixed(1)}<span className="text-sm text-slate-400">%</span></div></div>
              <div className="rounded-2xl bg-white/5 p-3"><div className="text-xs text-slate-300">Passengers</div><div className="text-2xl font-semibold">{runtime.onboard}<span className="text-sm text-slate-400"> / {CAPACITY}</span></div></div>
              <div className="rounded-2xl bg-white/5 p-3"><div className="text-xs text-slate-300">Earnings</div><div className="text-2xl font-semibold">Rp {runtime.earnings.toLocaleString('id-ID')}</div></div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Route service</h2>
              <div className="text-xs uppercase tracking-[0.25em] text-amber-300">{Math.round(runtime.routeProgress * 100)}%</div>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-lime-300" style={{ width: `${runtime.routeProgress * 100}%` }} />
            </div>
            <div className="mt-4 space-y-2">
              {stops.map((stop, index) => {
                const status = stop.completed ? 'Completed' : index === runtime.nextStopIndex ? 'Next stop' : 'Upcoming';
                return (
                  <div key={stop.id} className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2 text-sm">
                    <div>
                      <div className="font-medium">{index + 1}. {stop.name}</div>
                      <div className="text-slate-400">Marker z {stop.z.toFixed(0)}</div>
                    </div>
                    <div className={`rounded-full px-3 py-1 text-xs ${stop.completed ? 'bg-lime-400/20 text-lime-200' : index === runtime.nextStopIndex ? 'bg-amber-400/20 text-amber-200' : 'bg-slate-400/20 text-slate-200'}`}>{status}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-200">Mission</div>
              <div className="mt-1 font-semibold">{runtime.missionStatus}</div>
              <div className="mt-1 text-sm text-slate-200/85">{runtime.message}</div>
              <div className="mt-2 text-sm text-slate-300">Next stop distance: <span className="font-semibold text-white">{nextStopDistance.toFixed(0)} m</span></div>
              <div className="text-sm text-slate-300">Elapsed active time: <span className="font-semibold text-white">{formatTime(runtime.elapsed)}</span></div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-md">
            <h2 className="text-lg font-semibold">Bus systems</h2>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {[
                ['Gear', runtime.gear],
                ['Parking brake', runtime.parkingBrake ? 'On' : 'Off'],
                ['Door', runtime.doorOpen ? 'Open' : 'Closed'],
                ['Lights', runtime.headlights ? 'On' : 'Off'],
                ['Indicator', runtime.indicator],
                ['Camera', runtime.cameraMode],
                ['Damage', `${runtime.damage.toFixed(1)}%`],
                ['Collisions', `${runtime.collisionCount}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/5 p-3">
                  <div className="text-xs text-slate-300">{label}</div>
                  <div className="mt-1 font-semibold capitalize">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {(['cinematic', 'high', 'balanced'] as Quality[]).map((q) => (
                <button key={q} className={`pointer-events-auto rounded-2xl border px-3 py-2 text-sm font-medium capitalize ${runtime.quality === q ? 'border-cyan-300 bg-cyan-300/20 text-cyan-100' : 'border-white/10 bg-white/5 text-white'}`} onClick={() => applyQuality(q)}>
                  {q}
                </button>
              ))}
            </div>
            <div className="mt-3 text-xs text-slate-400">Graphics quality changes render density and view distance without resetting the route.</div>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-3 shadow-2xl backdrop-blur-md">
            <div className="flex flex-wrap gap-2">
              <button className={buttonClass} onClick={startRoute}>Start</button>
              <button className={buttonClass} onClick={togglePause}>{runtime.phase === 'paused' ? 'Resume' : 'Pause'}</button>
              <button className={buttonClass} onClick={() => setRuntime((prev) => ({ ...prev, parkingBrake: !prev.parkingBrake, lastAction: 'parkingBrake', uiUpdates: prev.uiUpdates + 1 }))}>{runtime.parkingBrake ? 'Release Brake' : 'Parking Brake'}</button>
              <button className={buttonClass} onClick={() => setRuntime((prev) => ({ ...prev, doorOpen: Math.abs(prev.velocity) <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? !prev.doorOpen : false, missionStatus: Math.abs(prev.velocity) <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? prev.missionStatus : 'Slow to open passenger door', message: Math.abs(prev.velocity) <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? prev.message : 'Door interlock active while bus is moving.', lastAction: 'door', uiUpdates: prev.uiUpdates + 1 }))}>{runtime.doorOpen ? 'Close Doors' : 'Open Doors'}</button>
              <button className={buttonClass} onClick={() => setRuntime((prev) => ({ ...prev, headlights: !prev.headlights, lastAction: 'headlights', uiUpdates: prev.uiUpdates + 1 }))}>{runtime.headlights ? 'Headlights Off' : 'Headlights On'}</button>
              <button className={buttonClass} onClick={() => setRuntime((prev) => ({ ...prev, indicator: prev.indicator === 'left' ? 'off' : 'left', lastAction: 'indicatorLeft', uiUpdates: prev.uiUpdates + 1 }))}>Indicator Left</button>
              <button className={buttonClass} onClick={() => setRuntime((prev) => ({ ...prev, indicator: prev.indicator === 'right' ? 'off' : 'right', lastAction: 'indicatorRight', uiUpdates: prev.uiUpdates + 1 }))}>Indicator Right</button>
              <button className={buttonClass} onClick={() => { setRuntime((prev) => ({ ...prev, hornActive: true, lastAction: 'horn', uiUpdates: prev.uiUpdates + 1 })); window.setTimeout(() => setRuntime((prev) => ({ ...prev, hornActive: false })), 180); }}>Horn</button>
              <button className={buttonClass} onClick={cycleCamera}>Cycle Camera</button>
              <button className={buttonClass} onClick={resetSession}>Reset Route</button>
            </div>
            <div className="mt-3 grid gap-2 text-xs text-slate-300 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-white/5 p-3">Drive: <span className="font-semibold text-white">W / A / S / D</span></div>
              <div className="rounded-2xl bg-white/5 p-3">Camera: <span className="font-semibold text-white">C</span></div>
              <div className="rounded-2xl bg-white/5 p-3">Pause: <span className="font-semibold text-white">P</span> · Reset: <span className="font-semibold text-white">R</span></div>
              <div className="rounded-2xl bg-white/5 p-3">Systems: <span className="font-semibold text-white">B O L Q E H 1 2 3</span></div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-3 shadow-2xl backdrop-blur-md">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-300">Observation hooks</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-200 xl:grid-cols-3">
              {['__bus', '__game', '__vehicle', '__route', '__passengers', '__traffic', '__world', '__camera', '__input', '__renderer', '__performance', '__settings'].map((hook) => (
                <div key={hook} className="rounded-xl bg-white/5 px-3 py-2">window.{hook}.getState()</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {runtime.phase === 'menu' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/60 p-6 backdrop-blur-sm">
          <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl">
            <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">Single-player route</p>
            <h2 className="mt-3 text-4xl font-semibold">Luxury Bus Simulator Indonesia-inspired 3D</h2>
            <p className="mt-4 text-slate-200/85">A polished tropical intercity corridor with volumetric buildings, shelters, moving traffic, service stops, cockpit and exterior cameras, collision rules, and mobile-ready controls.</p>
            <button className="mt-8 rounded-2xl bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:bg-cyan-300" onClick={startRoute}>
              Start Route
            </button>
          </div>
        </div>
      )}

      {runtime.mobileControls && (
        <div className="absolute bottom-0 left-0 right-0 z-30 p-3 md:hidden">
          <div className="flex items-end justify-between gap-3 rounded-[2rem] border border-white/10 bg-slate-950/55 p-4 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-2 gap-2">
              {touchButton('A', 'KeyA')}
              {touchButton('D', 'KeyD')}
            </div>
            <div className="grid grid-cols-1 gap-2">
              {touchButton('W', 'KeyW')}
              {touchButton('S', 'KeyS')}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button className="pointer-events-auto rounded-2xl border border-white/15 bg-white/10 px-3 py-3 font-semibold" onClick={cycleCamera}>Cam</button>
              <button className="pointer-events-auto rounded-2xl border border-white/15 bg-white/10 px-3 py-3 font-semibold" onClick={togglePause}>{runtime.phase === 'paused' ? 'Go' : 'Pause'}</button>
              <button className="pointer-events-auto rounded-2xl border border-white/15 bg-white/10 px-3 py-3 font-semibold" onClick={() => setRuntime((prev) => ({ ...prev, doorOpen: Math.abs(prev.velocity) <= VEHICLE_DYNAMICS.doorInterlockSpeedMps ? !prev.doorOpen : false, lastAction: 'door' }))}>Door</button>
              <button className="pointer-events-auto rounded-2xl border border-white/15 bg-white/10 px-3 py-3 font-semibold" onClick={() => setRuntime((prev) => ({ ...prev, parkingBrake: !prev.parkingBrake, lastAction: 'parkingBrake' }))}>Brake</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
