import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type Phase = 'menu' | 'playing' | 'paused' | 'complete';
type Indicator = 'off' | 'left' | 'right';
type CameraMode = 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside';
type Quality = 'cinematic' | 'high' | 'balanced';
type PointerKind = 'mouse' | 'touch' | 'pen';

type StopDef = {
  id: string;
  name: string;
  z: number;
  x: number;
  waiting: number;
};

type TrafficVehicle = {
  id: string;
  lane: number;
  z: number;
  speed: number;
  direction: 1 | -1;
  color: string;
};

type Obstacle = {
  id: string;
  type: 'building' | 'shelter' | 'barrier' | 'furniture';
  x: number;
  z: number;
  halfWidth: number;
  halfLength: number;
  height: number;
};

type BusState = {
  x: number;
  z: number;
  y: number;
  speed: number;
  heading: number;
  steering: number;
  throttle: number;
  brake: number;
  gear: 'D' | 'R';
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
};

type Snapshot = {
  phase: Phase;
  paused: boolean;
  elapsed: number;
  missionStatus: string;
  message: string;
  score: number;
  speedKph: number;
  fuel: number;
  passengerCount: number;
  boardedTotal: number;
  nextStopIndex: number;
  routeProgress: number;
  bus: BusState;
  traffic: TrafficVehicle[];
  currentStopIndex: number;
  boardingProgress: number;
  waitingAtNext: number;
  earnings: number;
  completedStops: number[];
  cameraMode: CameraMode;
  cameraPosition: { x: number; y: number; z: number };
  cameraTarget: { x: number; y: number; z: number };
  cameraFov: number;
  quality: Quality;
  pixelRatio: number;
  renderDistance: number;
  frame: number;
  drawCalls: number;
  canvas: { width: number; height: number };
  webglVersion: number;
  contextLost: boolean;
  tick: number;
  accumulator: number;
  uiUpdates: number;
  mounted: boolean;
  pressed: string[];
  lastAction: string;
  lastPointerType: PointerKind;
  mobileControls: boolean;
};

type RuntimeHooks = {
  __bus?: { getState: () => unknown };
  __game?: { getState: () => unknown };
  __vehicle?: { getState: () => unknown };
  __route?: { getState: () => unknown };
  __passengers?: { getState: () => unknown };
  __traffic?: { getState: () => unknown };
  __world?: { getState: () => unknown };
  __camera?: { getState: () => unknown };
  __input?: { getState: () => unknown };
  __renderer?: { getState: () => unknown };
  __performance?: { getState: () => unknown };
  __settings?: { getState: () => unknown };
};

declare global {
  interface Window extends RuntimeHooks {}
}

const ROAD_CENTER = 0.33;
const ROAD_HALF_WIDTH = 5.2;
const BUS_WIDTH = 2.55;
const BUS_LENGTH = 8.9;
const FIXED_STEP = 1 / 60;
const MAX_SUB_STEPS = 4;
const STOP_HALF_LENGTH = 10.5;
const STOP_HALF_WIDTH = 4.2;
const BOARDING_DURATION = 1.25;
const CAPACITY = 42;
const BUS_ID = 'NLX-880';
const BUS_TYPE = '12m Luxury Coach';
const CAMERA_MODES: CameraMode[] = ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside'];
const QUALITY_PROFILES: Record<Quality, { pixelRatio: number; density: number; renderDistance: number }> = {
  cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
  high: { pixelRatio: 1.1, density: 0.78, renderDistance: 420 },
  balanced: { pixelRatio: 0.85, density: 0.56, renderDistance: 320 },
};
const STOPS: StopDef[] = [
  { id: 's1', name: 'Kota Lama', z: 95, x: ROAD_CENTER + 3.2, waiting: 7 },
  { id: 's2', name: 'Pasar Raya', z: 335, x: ROAD_CENTER + 3.15, waiting: 11 },
  { id: 's3', name: 'Terminal Selatan', z: 660, x: ROAD_CENTER + 3.4, waiting: 14 },
];
const INITIAL_TRAFFIC: TrafficVehicle[] = [
  { id: 'traffic-1', lane: -1.55, z: 180, speed: 6.4, direction: -1, color: '#60a5fa' },
  { id: 'traffic-2', lane: -1.45, z: 290, speed: 5.8, direction: -1, color: '#f97316' },
  { id: 'traffic-3', lane: -1.7, z: 420, speed: 6.6, direction: -1, color: '#a78bfa' },
  { id: 'traffic-4', lane: -1.4, z: 540, speed: 7.2, direction: -1, color: '#22c55e' },
  { id: 'traffic-5', lane: -1.6, z: 720, speed: 6.1, direction: -1, color: '#ef4444' },
  { id: 'traffic-6', lane: -1.5, z: 860, speed: 5.6, direction: -1, color: '#eab308' },
];
const WORLD_OBSTACLES: Obstacle[] = [
  { id: 'building-1', type: 'building', x: 13.5, z: 30, halfWidth: 3.2, halfLength: 5.8, height: 8 },
  { id: 'building-2', type: 'building', x: -14.2, z: 58, halfWidth: 4.1, halfLength: 6.5, height: 10 },
  { id: 'building-3', type: 'building', x: 15.4, z: 118, halfWidth: 4.5, halfLength: 7.2, height: 11 },
  { id: 'building-4', type: 'building', x: -13.4, z: 146, halfWidth: 3.4, halfLength: 5.5, height: 7 },
  { id: 'building-5', type: 'building', x: 16.8, z: 212, halfWidth: 5.2, halfLength: 9, height: 15 },
  { id: 'building-6', type: 'building', x: -15.5, z: 254, halfWidth: 4.8, halfLength: 7.6, height: 12 },
  { id: 'building-7', type: 'building', x: 12.8, z: 330, halfWidth: 3.6, halfLength: 6, height: 9 },
  { id: 'building-8', type: 'building', x: -17.5, z: 390, halfWidth: 5.5, halfLength: 8.2, height: 14 },
  { id: 'building-9', type: 'building', x: 15.2, z: 455, halfWidth: 4.1, halfLength: 6.4, height: 10 },
  { id: 'building-10', type: 'building', x: -14.5, z: 520, halfWidth: 4.5, halfLength: 7.4, height: 11 },
  { id: 'building-11', type: 'building', x: 17.1, z: 603, halfWidth: 5.7, halfLength: 9.5, height: 16 },
  { id: 'building-12', type: 'building', x: -16.2, z: 700, halfWidth: 4.9, halfLength: 7.1, height: 13 },
  { id: 'shelter-1', type: 'shelter', x: ROAD_CENTER + 3.35, z: 95, halfWidth: 2.2, halfLength: 4.8, height: 3.4 },
  { id: 'shelter-2', type: 'shelter', x: ROAD_CENTER + 3.35, z: 335, halfWidth: 2.3, halfLength: 5.2, height: 3.4 },
  { id: 'shelter-3', type: 'shelter', x: ROAD_CENTER + 3.45, z: 660, halfWidth: 2.4, halfLength: 5.5, height: 3.5 },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function wrapTrafficZ(z: number) {
  if (z < -60) return 920;
  if (z > 940) return -40;
  return z;
}

function freshBus(): BusState {
  return {
    x: ROAD_CENTER,
    z: 20,
    y: 0.7,
    speed: 0,
    heading: 0.0167,
    steering: 0,
    throttle: 0,
    brake: 0,
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
  };
}

function App() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const busGroupRef = useRef<THREE.Group | null>(null);
  const trafficRefs = useRef<Record<string, THREE.Group>>({});
  const stopMarkerRefs = useRef<Record<string, THREE.Object3D>>({});
  const cockpitTargetRef = useRef(new THREE.Vector3());
  const pressedRef = useRef<Set<string>>(new Set());
  const lastActionRef = useRef('none');
  const lastPointerTypeRef = useRef<PointerKind>('mouse');
  const frameRef = useRef(0);
  const drawCallsRef = useRef(0);
  const tickRef = useRef(0);
  const uiUpdatesRef = useRef(0);
  const accumulatorRef = useRef(0);
  const mountedRef = useRef(true);
  const contextLostRef = useRef(false);
  const [phase, setPhase] = useState<Phase>('menu');
  const [paused, setPaused] = useState(false);
  const [message, setMessage] = useState('Board the coach and begin the route.');
  const [missionStatus, setMissionStatus] = useState('Ready for departure');
  const [quality, setQuality] = useState<Quality>('cinematic');
  const [cameraMode, setCameraMode] = useState<CameraMode>('chase');
  const [mobileControls, setMobileControls] = useState(false);
  const phaseRef = useRef<Phase>('menu');
  const pausedRef = useRef(false);
  const qualityRef = useRef<Quality>('cinematic');
  const cameraModeRef = useRef<CameraMode>('chase');
  const [uiTick, setUiTick] = useState(0);
  const elapsedRef = useRef(0);
  const busRef = useRef<BusState>(freshBus());
  const trafficStateRef = useRef<TrafficVehicle[]>(INITIAL_TRAFFIC.map((vehicle) => ({ ...vehicle })));
  const completedStopsRef = useRef<number[]>([]);
  const currentStopIndexRef = useRef(0);
  const passengerCountRef = useRef(4);
  const boardedTotalRef = useRef(0);
  const earningsRef = useRef(0);
  const boardingProgressRef = useRef(0);
  const scoreRef = useRef(0);
  const lastCollisionAtRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const profile = QUALITY_PROFILES[quality];
  const speedKph = busRef.current.speed * 3.6;
  const nextStop = STOPS[currentStopIndexRef.current] ?? STOPS[STOPS.length - 1];
  const nextStopDistance = nextStop ? Math.max(0, nextStop.z - busRef.current.z) : 0;
  const routeProgress = completedStopsRef.current.length / STOPS.length;
  const atStop = !!nextStop && Math.abs(busRef.current.z - nextStop.z) <= STOP_HALF_LENGTH && Math.abs(busRef.current.x - nextStop.x) <= STOP_HALF_WIDTH;
  const waitingAtNext = nextStop ? nextStop.waiting : 0;

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    qualityRef.current = quality;
  }, [quality]);

  useEffect(() => {
    cameraModeRef.current = cameraMode;
  }, [cameraMode]);

  const snapshot = useMemo<Snapshot>(() => ({
    phase,
    paused,
    elapsed: elapsedRef.current,
    missionStatus,
    message,
    score: scoreRef.current,
    speedKph,
    fuel: busRef.current.fuel,
    passengerCount: passengerCountRef.current,
    boardedTotal: boardedTotalRef.current,
    nextStopIndex: currentStopIndexRef.current,
    routeProgress,
    bus: { ...busRef.current },
    traffic: trafficStateRef.current.map((vehicle) => ({ ...vehicle })),
    currentStopIndex: currentStopIndexRef.current,
    boardingProgress: boardingProgressRef.current,
    waitingAtNext,
    earnings: earningsRef.current,
    completedStops: [...completedStopsRef.current],
    cameraMode,
    cameraPosition: cameraRef.current
      ? { x: cameraRef.current.position.x, y: cameraRef.current.position.y, z: cameraRef.current.position.z }
      : { x: 0, y: 0, z: 0 },
    cameraTarget: cameraRef.current
      ? { x: cockpitTargetRef.current.x, y: cockpitTargetRef.current.y, z: cockpitTargetRef.current.z }
      : { x: 0, y: 0, z: 0 },
    cameraFov: cameraRef.current?.fov ?? 0,
    quality,
    pixelRatio: profile.pixelRatio,
    renderDistance: profile.renderDistance,
    frame: frameRef.current,
    drawCalls: drawCallsRef.current,
    canvas: rendererRef.current
      ? { width: rendererRef.current.domElement.width, height: rendererRef.current.domElement.height }
      : { width: 0, height: 0 },
    webglVersion: rendererRef.current ? 1 : 0,
    contextLost: contextLostRef.current,
    tick: tickRef.current,
    accumulator: accumulatorRef.current,
    uiUpdates: uiUpdatesRef.current,
    mounted: mountedRef.current,
    pressed: [...pressedRef.current],
    lastAction: lastActionRef.current,
    lastPointerType: lastPointerTypeRef.current,
    mobileControls,
  }), [phase, paused, missionStatus, message, speedKph, routeProgress, waitingAtNext, cameraMode, quality, profile.pixelRatio, profile.renderDistance, mobileControls, uiTick]);

  useEffect(() => {
    const exportHooks = () => {
      const getBus = () => ({
        phase: snapshot.phase,
        speedKph: Number(snapshot.speedKph.toFixed(2)),
        position: { x: Number(snapshot.bus.x.toFixed(2)), z: Number(snapshot.bus.z.toFixed(2)) },
        headingDeg: Number(THREE.MathUtils.radToDeg(snapshot.bus.heading).toFixed(2)),
        doorOpen: snapshot.bus.doorOpen,
        passengerCount: snapshot.passengerCount,
        nextStopIndex: snapshot.nextStopIndex,
        routeProgress: Number(snapshot.routeProgress.toFixed(3)),
        fuel: Number(snapshot.fuel.toFixed(2)),
        score: snapshot.score,
      });
      window.__bus = { getState: () => structuredClone(getBus()) };
      window.__game = {
        getState: () => structuredClone({
          phase: snapshot.phase,
          elapsed: Number(snapshot.elapsed.toFixed(2)),
          paused: snapshot.paused,
          missionStatus: snapshot.missionStatus,
          score: snapshot.score,
          message: snapshot.message,
        }),
      };
      window.__vehicle = {
        getState: () => structuredClone({
          id: BUS_ID,
          type: BUS_TYPE,
          position: { x: Number(snapshot.bus.x.toFixed(2)), z: Number(snapshot.bus.z.toFixed(2)) },
          headingDeg: Number(THREE.MathUtils.radToDeg(snapshot.bus.heading).toFixed(2)),
          speedKph: Number(snapshot.speedKph.toFixed(2)),
          velocity: Number(snapshot.bus.speed.toFixed(3)),
          throttle: Number(snapshot.bus.throttle.toFixed(2)),
          brake: Number(snapshot.bus.brake.toFixed(2)),
          steering: Number(snapshot.bus.steering.toFixed(2)),
          gear: snapshot.bus.gear,
          parkingBrake: snapshot.bus.parkingBrake,
          doorOpen: snapshot.bus.doorOpen,
          headlights: snapshot.bus.headlights,
          indicator: snapshot.bus.indicator,
          hornActive: snapshot.bus.hornActive,
          fuel: Number(snapshot.bus.fuel.toFixed(2)),
          damage: Number(snapshot.bus.damage.toFixed(2)),
          odometerKm: Number(snapshot.bus.odometerKm.toFixed(3)),
          wheelAngle: Number((snapshot.bus.steering * 32).toFixed(2)),
          collisionCount: snapshot.bus.collisionCount,
          lastCollision: snapshot.bus.lastCollision,
          dynamics: {
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
          },
        }),
      };
      window.__route = {
        getState: () => structuredClone({
          name: 'Bandung · Kota Lama · Selatan',
          stopCount: STOPS.length,
          currentStopIndex: snapshot.currentStopIndex,
          stops: STOPS.map((stop, index) => ({
            id: stop.id,
            name: stop.name,
            z: stop.z,
            status: snapshot.completedStops.includes(index)
              ? 'completed'
              : index === snapshot.currentStopIndex
                ? 'next'
                : 'upcoming',
          })),
          nextStopDistance: Number((STOPS[snapshot.currentStopIndex] ? Math.max(0, STOPS[snapshot.currentStopIndex].z - snapshot.bus.z) : 0).toFixed(2)),
          atStop,
          completed: snapshot.currentStopIndex >= STOPS.length,
          earnings: snapshot.earnings,
          service: {
            stopLongitudinalHalfLength: STOP_HALF_LENGTH,
            stopLateralHalfWidth: STOP_HALF_WIDTH,
            boardingDuration: BOARDING_DURATION,
          },
        }),
      };
      window.__passengers = {
        getState: () => structuredClone({
          onboard: snapshot.passengerCount,
          capacity: CAPACITY,
          boardedTotal: snapshot.boardedTotal,
          waitingAtNext: snapshot.waitingAtNext,
          boardingProgress: Number(snapshot.boardingProgress.toFixed(3)),
        }),
      };
      window.__traffic = {
        getState: () => structuredClone({
          count: snapshot.traffic.length,
          density: QUALITY_PROFILES[snapshot.quality].density === 1 ? 0.92 : QUALITY_PROFILES[snapshot.quality].density,
          vehicles: snapshot.traffic.map((vehicle) => ({
            id: vehicle.id,
            x: Number((ROAD_CENTER + vehicle.lane).toFixed(2)),
            z: Number(vehicle.z.toFixed(2)),
            speedKph: Number((vehicle.speed * 3.6).toFixed(2)),
            direction: vehicle.direction,
          })),
        }),
      };
      window.__world = {
        getState: () => structuredClone({
          environment: 'Tropical intercity corridor',
          weather: 'Sunbreak after rain',
          timeOfDay: '16:20',
          roadCenter: ROAD_CENTER,
          roadHalfWidth: ROAD_HALF_WIDTH,
          surface: 'asphalt',
          nearStopMarkers: STOPS.filter((stop) => Math.abs(stop.z - snapshot.bus.z) < 50).length,
          solidObstacleCount: WORLD_OBSTACLES.length + 52,
          collision: {
            roadEdgeEnabled: true,
            trafficEnabled: true,
            solidObjectsEnabled: true,
            busWidth: BUS_WIDTH,
            busLength: BUS_LENGTH,
          },
          nearbySolidObstacles: WORLD_OBSTACLES.filter((obstacle) => Math.abs(obstacle.z - snapshot.bus.z) < 90).slice(0, 8).map((obstacle) => ({
            id: obstacle.id,
            type: obstacle.type,
            x: obstacle.x,
            z: obstacle.z,
            halfWidth: obstacle.halfWidth,
            halfLength: obstacle.halfLength,
          })),
        }),
      };
      window.__camera = {
        getState: () => structuredClone({
          mode: snapshot.cameraMode,
          position: snapshot.cameraPosition,
          target: snapshot.cameraTarget,
          fov: Number(snapshot.cameraFov.toFixed(2)),
          near: 0.1,
          far: snapshot.renderDistance,
          modes: CAMERA_MODES,
        }),
      };
      window.__input = {
        getState: () => structuredClone({
          pressed: snapshot.pressed,
          lastAction: snapshot.lastAction,
          lastPointerType: snapshot.lastPointerType,
          mobileControls: snapshot.mobileControls,
        }),
      };
      window.__renderer = {
        getState: () => structuredClone({
          backend: 'WebGL',
          contextLost: snapshot.contextLost,
          frame: snapshot.frame,
          drawCalls: snapshot.drawCalls,
          canvas: snapshot.canvas,
          quality: snapshot.quality,
          pixelRatio: snapshot.pixelRatio,
          renderDistance: snapshot.renderDistance,
          webglVersion: snapshot.webglVersion,
          dynamicLighting: true,
          fog: true,
          antialias: true,
          shadowsEnabled: false,
        }),
      };
      window.__performance = {
        getState: () => structuredClone({
          elapsed: Number(snapshot.elapsed.toFixed(2)),
          tick: snapshot.tick,
          frame: snapshot.frame,
          fixedStep: FIXED_STEP,
          accumulator: Number(snapshot.accumulator.toFixed(4)),
          maxSubSteps: MAX_SUB_STEPS,
          uiUpdates: snapshot.uiUpdates,
          mounted: snapshot.mounted,
        }),
      };
      window.__settings = {
        getState: () => structuredClone({
          quality: snapshot.quality,
          masterVolume: 0.8,
          pixelRatio: snapshot.pixelRatio,
          trafficDensity: QUALITY_PROFILES[snapshot.quality].density === 1 ? 0.92 : QUALITY_PROFILES[snapshot.quality].density,
          renderDistance: snapshot.renderDistance,
          qualityProfiles: QUALITY_PROFILES,
        }),
      };
    };

    exportHooks();
  }, [snapshot, atStop]);

  useEffect(() => {
    const handleResize = () => {
      setMobileControls(window.innerWidth < 900);
      const renderer = rendererRef.current;
      const camera = cameraRef.current;
      const mount = mountRef.current;
      if (!renderer || !camera || !mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, profile.pixelRatio));
      renderer.setSize(width, height, false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [profile.pixelRatio]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#89b9d8');
    scene.fog = new THREE.FogExp2('#a8c5d8', 0.0026);
    const camera = new THREE.PerspectiveCamera(53, mount.clientWidth / mount.clientHeight, 0.1, QUALITY_PROFILES[qualityRef.current].renderDistance);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, QUALITY_PROFILES[qualityRef.current].pixelRatio));
    renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    renderer.domElement.className = 'h-full w-full';
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;

    renderer.domElement.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      contextLostRef.current = true;
    });
    renderer.domElement.addEventListener('webglcontextrestored', () => {
      contextLostRef.current = false;
    });

    const hemi = new THREE.HemisphereLight('#fff5d6', '#35536a', 2.1);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight('#fff8df', 2.7);
    sun.position.set(20, 30, 15);
    scene.add(sun);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(260, 1200),
      new THREE.MeshStandardMaterial({ color: '#4d7f4e', roughness: 0.95, metalness: 0 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.01, 420);
    scene.add(ground);

    const road = new THREE.Mesh(
      new THREE.BoxGeometry(ROAD_HALF_WIDTH * 2, 0.08, 900),
      new THREE.MeshStandardMaterial({ color: '#2b3137', roughness: 0.92 }),
    );
    road.position.set(ROAD_CENTER, 0.02, 420);
    scene.add(road);

    const laneMarkMaterial = new THREE.MeshBasicMaterial({ color: '#f8fafc' });
    for (let i = 0; i < 30; i += 1) {
      const mark = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 12), laneMarkMaterial);
      mark.position.set(ROAD_CENTER, 0.07, 20 + i * 28);
      scene.add(mark);
    }

    const barrierMat = new THREE.MeshStandardMaterial({ color: '#cbd5e1', roughness: 0.7 });
    const barrierLeft = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, 900), barrierMat);
    barrierLeft.position.set(ROAD_CENTER - ROAD_HALF_WIDTH - 0.2, 0.4, 420);
    const barrierRight = barrierLeft.clone();
    barrierRight.position.set(ROAD_CENTER + ROAD_HALF_WIDTH + 0.2, 0.4, 420);
    scene.add(barrierLeft, barrierRight);

    const busGroup = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.45, 1.8, 8.9),
      new THREE.MeshStandardMaterial({ color: '#f4c430', roughness: 0.35, metalness: 0.15 }),
    );
    body.position.y = 1.45;
    busGroup.add(body);
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(2.25, 0.36, 8.1),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.4 }),
    );
    roof.position.set(0, 2.38, 0);
    busGroup.add(roof);
    const nose = new THREE.Mesh(
      new THREE.BoxGeometry(2.35, 1.6, 1.4),
      new THREE.MeshStandardMaterial({ color: '#111827', roughness: 0.45 }),
    );
    nose.position.set(0, 1.35, 3.65);
    busGroup.add(nose);
    const glassMat = new THREE.MeshStandardMaterial({ color: '#7dd3fc', transparent: true, opacity: 0.42, roughness: 0.1, metalness: 0.45 });
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.9, 0.12), glassMat);
    windshield.position.set(0, 1.85, 4.42);
    busGroup.add(windshield);
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 5; i += 1) {
        const windowMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.62, 1.05), glassMat);
        windowMesh.position.set(side * 1.23, 1.92, -2.8 + i * 1.45);
        busGroup.add(windowMesh);
      }
    }
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 1.35, 1.1),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.35 }),
    );
    door.position.set(1.25, 1.0, 2.2);
    door.name = 'passengerDoor';
    busGroup.add(door);
    const wheelMat = new THREE.MeshStandardMaterial({ color: '#111827', roughness: 0.88 });
    const wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.32, 20);
    for (const z of [-2.7, 2.65]) {
      for (const x of [-1.23, 1.23]) {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(x, 0.45, z);
        busGroup.add(wheel);
      }
    }
    const headlightL = new THREE.PointLight('#fff7cc', 0, 14, 2);
    headlightL.position.set(-0.7, 1.3, 4.65);
    const headlightR = new THREE.PointLight('#fff7cc', 0, 14, 2);
    headlightR.position.set(0.7, 1.3, 4.65);
    headlightL.name = 'headlightL';
    headlightR.name = 'headlightR';
    busGroup.add(headlightL, headlightR);
    busGroup.position.set(ROAD_CENTER, 0, 20);
    scene.add(busGroup);
    busGroupRef.current = busGroup;

    const buildingPalette = ['#f59e0b', '#fb7185', '#38bdf8', '#34d399', '#c084fc', '#f97316'];
    WORLD_OBSTACLES.forEach((obstacle, index) => {
      const group = new THREE.Group();
      const material = new THREE.MeshStandardMaterial({ color: obstacle.type === 'shelter' ? '#e2e8f0' : buildingPalette[index % buildingPalette.length], roughness: 0.84 });
      const base = new THREE.Mesh(new THREE.BoxGeometry(obstacle.halfWidth * 2, obstacle.height, obstacle.halfLength * 2), material);
      base.position.y = obstacle.height / 2;
      group.add(base);
      if (obstacle.type === 'shelter') {
        const roofShelter = new THREE.Mesh(new THREE.BoxGeometry(obstacle.halfWidth * 2.4, 0.2, obstacle.halfLength * 2.2), new THREE.MeshStandardMaterial({ color: '#1e293b' }));
        roofShelter.position.y = obstacle.height + 0.2;
        group.add(roofShelter);
        const bench = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.3, 0.45), new THREE.MeshStandardMaterial({ color: '#92400e' }));
        bench.position.set(0, 0.6, 0.2);
        group.add(bench);
      }
      group.position.set(obstacle.x, 0, obstacle.z);
      scene.add(group);
    });

    STOPS.forEach((stop) => {
      const marker = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.7, 0.25, 18),
        new THREE.MeshStandardMaterial({ color: '#22c55e', emissive: '#14532d', emissiveIntensity: 0.4 }),
      );
      marker.position.set(stop.x - 1.5, 0.2, stop.z);
      scene.add(marker);
      stopMarkerRefs.current[stop.id] = marker;
    });

    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: '#6b4f32', roughness: 1 });
    const treeTopMat = new THREE.MeshStandardMaterial({ color: '#22c55e', roughness: 0.92 });
    for (let i = 0; i < 48; i += 1) {
      const side = i % 2 === 0 ? 1 : -1;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.18, 1.2, 8), treeTrunkMat);
      trunk.position.set(side * (9 + (i % 5)), 0.6, 20 + i * 16);
      const crown = new THREE.Mesh(new THREE.SphereGeometry(0.85 + (i % 3) * 0.12, 10, 10), treeTopMat);
      crown.position.set(trunk.position.x, 1.75, trunk.position.z);
      scene.add(trunk, crown);
    }

    trafficStateRef.current.forEach((vehicle) => {
      const group = new THREE.Group();
      const shell = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 4.2), new THREE.MeshStandardMaterial({ color: vehicle.color, roughness: 0.55 }));
      shell.position.y = 1;
      group.add(shell);
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 1.8), new THREE.MeshStandardMaterial({ color: '#dbeafe', transparent: true, opacity: 0.7 }));
      top.position.set(0, 1.8, -0.1);
      group.add(top);
      for (const z of [-1.2, 1.2]) {
        for (const x of [-0.9, 0.9]) {
          const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.2, 12), wheelMat);
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(x, 0.32, z);
          group.add(wheel);
        }
      }
      group.position.set(ROAD_CENTER + vehicle.lane, 0, vehicle.z);
      scene.add(group);
      trafficRefs.current[vehicle.id] = group;
    });

    const animate = (time: number) => {
      const rendererLive = rendererRef.current;
      const sceneLive = sceneRef.current;
      const cameraLive = cameraRef.current;
      const busGroupLive = busGroupRef.current;
      if (!rendererLive || !sceneLive || !cameraLive || !busGroupLive) return;
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = time;
      const delta = Math.min(0.05, (time - lastFrameTimeRef.current) / 1000);
      lastFrameTimeRef.current = time;
      const livePhase = phaseRef.current;
      const livePaused = pausedRef.current;
      const liveProfile = QUALITY_PROFILES[qualityRef.current];
      const liveCameraMode = cameraModeRef.current;
      if (!livePaused && livePhase === 'playing') {
        accumulatorRef.current = Math.min(accumulatorRef.current + delta, FIXED_STEP * MAX_SUB_STEPS);
        let steps = 0;
        while (accumulatorRef.current >= FIXED_STEP && steps < MAX_SUB_STEPS) {
          tickRef.current += 1;
          elapsedRef.current += FIXED_STEP;
          const bus = busRef.current;
          const pressingW = pressedRef.current.has('KeyW');
          const pressingS = pressedRef.current.has('KeyS');
          const pressingA = pressedRef.current.has('KeyA');
          const pressingD = pressedRef.current.has('KeyD');
          const desiredSteer = (pressingA ? 1 : 0) + (pressingD ? -1 : 0);
          bus.steering = THREE.MathUtils.damp(bus.steering, desiredSteer, 7, FIXED_STEP);
          const shouldReverse = pressingS && Math.abs(bus.speed) < 0.8 && !pressingW;
          bus.gear = shouldReverse || (bus.gear === 'R' && !pressingW && bus.speed <= 0.1 && pressingS) ? 'R' : 'D';
          bus.throttle = pressingW && bus.gear === 'D' && !bus.parkingBrake ? 1 : bus.gear === 'R' && pressingS && !bus.parkingBrake ? 1 : 0;
          bus.brake = pressingS && bus.gear === 'D' ? 1 : 0;

          if (bus.parkingBrake) {
            bus.speed = THREE.MathUtils.damp(bus.speed, 0, 9, FIXED_STEP);
          } else if (bus.gear === 'D') {
            if (bus.throttle > 0 && bus.fuel > 0) bus.speed += 10.5 * FIXED_STEP;
            if (bus.brake > 0) bus.speed -= 15 * FIXED_STEP;
            bus.speed -= Math.sign(bus.speed || 1) * Math.min(Math.abs(bus.speed), 0.55 * FIXED_STEP);
            bus.speed = clamp(bus.speed, 0, 24.5);
          } else {
            if (bus.throttle > 0 && bus.fuel > 0) bus.speed -= 6.2 * FIXED_STEP;
            if (pressingW) bus.speed += 11 * FIXED_STEP;
            bus.speed += Math.sign(-bus.speed || 1) * Math.min(Math.abs(bus.speed), 0.55 * FIXED_STEP);
            bus.speed = clamp(bus.speed, -5.5, 0);
          }

          if (Math.abs(bus.speed) > 1.2) bus.doorOpen = false;
          if (bus.fuel <= 0 && bus.throttle > 0) bus.speed = THREE.MathUtils.damp(bus.speed, 0, 3, FIXED_STEP);
          if (bus.throttle > 0 && Math.abs(bus.speed) > 0.2) bus.fuel = Math.max(0, bus.fuel - Math.abs(bus.speed) * 0.0032 * FIXED_STEP * 60);
          bus.heading += -bus.steering * Math.min(0.038, Math.abs(bus.speed) * 0.0045 + 0.0025);
          bus.heading = clamp(bus.heading, -0.32, 0.32);

          const prevX = bus.x;
          const prevZ = bus.z;
          bus.x += Math.sin(bus.heading) * bus.speed * FIXED_STEP;
          bus.z += Math.cos(bus.heading) * bus.speed * FIXED_STEP;
          bus.odometerKm += Math.abs(bus.speed) * FIXED_STEP / 1000;

          let collision = 'none';
          if (bus.x < ROAD_CENTER - ROAD_HALF_WIDTH + BUS_WIDTH / 2 || bus.x > ROAD_CENTER + ROAD_HALF_WIDTH - BUS_WIDTH / 2) {
            bus.x = clamp(bus.x, ROAD_CENTER - ROAD_HALF_WIDTH + BUS_WIDTH / 2, ROAD_CENTER + ROAD_HALF_WIDTH - BUS_WIDTH / 2);
            bus.speed *= -0.18;
            collision = 'road-edge barrier';
          }

          for (const obstacle of WORLD_OBSTACLES) {
            const hitX = Math.abs(bus.x - obstacle.x) <= obstacle.halfWidth + BUS_WIDTH / 2;
            const hitZ = Math.abs(bus.z - obstacle.z) <= obstacle.halfLength + BUS_LENGTH / 2;
            if (hitX && hitZ) {
              bus.x = prevX;
              bus.z = prevZ;
              bus.speed *= -0.12;
              collision = obstacle.id;
              break;
            }
          }

          for (const vehicle of trafficStateRef.current) {
            if (!paused && phase === 'playing') vehicle.z = wrapTrafficZ(vehicle.z + vehicle.direction * vehicle.speed * FIXED_STEP);
            const tx = ROAD_CENTER + vehicle.lane;
            if (Math.abs(bus.x - tx) <= 2.1 && Math.abs(bus.z - vehicle.z) <= 4.7) {
              bus.x = prevX;
              bus.z = prevZ;
              bus.speed *= -0.15;
              collision = vehicle.id;
            }
          }

          if (collision !== 'none' && elapsedRef.current - lastCollisionAtRef.current > 0.2) {
            lastCollisionAtRef.current = elapsedRef.current;
            bus.collisionCount += 1;
            bus.lastCollision = collision;
            bus.damage = clamp(bus.damage + 0.8, 0, 100);
            setMessage(`Collision with ${collision}. Keep the coach centered.`);
          }

          const stop = STOPS[currentStopIndexRef.current];
          const validStop = !!stop && Math.abs(bus.z - stop.z) <= STOP_HALF_LENGTH && Math.abs(bus.x - stop.x) <= STOP_HALF_WIDTH;
          const boardingAllowed = validStop && Math.abs(bus.speed) <= 0.8 && bus.doorOpen;
          if (boardingAllowed) {
            boardingProgressRef.current = clamp(boardingProgressRef.current + FIXED_STEP / BOARDING_DURATION, 0, 1);
            setMissionStatus(`Boarding at ${stop.name}`);
            if (boardingProgressRef.current >= 1 && !completedStopsRef.current.includes(currentStopIndexRef.current)) {
              completedStopsRef.current = [...completedStopsRef.current, currentStopIndexRef.current];
              const boarded = Math.min(stop.waiting, CAPACITY - passengerCountRef.current);
              passengerCountRef.current += boarded;
              boardedTotalRef.current += boarded;
              const fare = boarded * 4500;
              earningsRef.current += fare;
              scoreRef.current += fare;
              setMessage(`Stop complete: ${stop.name}. ${boarded} passengers boarded, +Rp ${fare.toLocaleString('id-ID')}.`);
              currentStopIndexRef.current += 1;
              boardingProgressRef.current = 0;
              if (currentStopIndexRef.current >= STOPS.length) {
                setPhase('complete');
                setMissionStatus('Route complete');
                setMessage('All three passenger stops completed. Park and admire the skyline.');
              } else {
                setMissionStatus(`Proceed to ${STOPS[currentStopIndexRef.current].name}`);
              }
            }
          } else if (!validStop || !bus.doorOpen) {
            boardingProgressRef.current = 0;
          }

          trafficStateRef.current = trafficStateRef.current.slice(0, Math.max(3, Math.round(INITIAL_TRAFFIC.length * liveProfile.density))).map((vehicle, index) => ({
            ...vehicle,
            z: wrapTrafficZ(vehicle.z + 0),
            speed: INITIAL_TRAFFIC[index]?.speed ?? vehicle.speed,
          }));

          accumulatorRef.current -= FIXED_STEP;
          steps += 1;
        }
      }

      busGroupLive.position.set(busRef.current.x, 0, busRef.current.z);
      busGroupLive.rotation.y = busRef.current.heading;
      const doorMesh = busGroupLive.getObjectByName('passengerDoor');
      if (doorMesh) {
        doorMesh.position.x = busRef.current.doorOpen ? 1.72 : 1.25;
      }
      const hl = busGroupLive.getObjectByName('headlightL') as THREE.PointLight | null;
      const hr = busGroupLive.getObjectByName('headlightR') as THREE.PointLight | null;
      if (hl && hr) {
        hl.intensity = busRef.current.headlights ? 1.6 : 0;
        hr.intensity = busRef.current.headlights ? 1.6 : 0;
      }

      trafficStateRef.current.forEach((vehicle) => {
        const mesh = trafficRefs.current[vehicle.id];
        if (mesh) {
          mesh.visible = true;
          mesh.position.set(ROAD_CENTER + vehicle.lane, 0, vehicle.z);
          mesh.rotation.y = vehicle.direction === -1 ? Math.PI : 0;
        }
      });
      Object.entries(trafficRefs.current).forEach(([id, object]) => {
        object.visible = trafficStateRef.current.some((vehicle) => vehicle.id === id);
      });

      STOPS.forEach((stop, index) => {
        const marker = stopMarkerRefs.current[stop.id];
        if (marker) {
          const completed = completedStopsRef.current.includes(index);
          (marker as THREE.Mesh).material = new THREE.MeshStandardMaterial({
            color: completed ? '#64748b' : index === currentStopIndexRef.current ? '#22c55e' : '#f59e0b',
            emissive: completed ? '#1e293b' : index === currentStopIndexRef.current ? '#14532d' : '#7c2d12',
            emissiveIntensity: 0.45,
          });
          marker.position.y = 0.25 + Math.sin(time / 400 + index) * 0.12;
        }
      });

      const busPos = new THREE.Vector3(busRef.current.x, 1.5, busRef.current.z);
      const lookAhead = new THREE.Vector3(busRef.current.x + Math.sin(busRef.current.heading) * 15, 1.5, busRef.current.z + Math.cos(busRef.current.heading) * 15);
      let camPos = new THREE.Vector3();
      let target = lookAhead.clone();
      let fov = 53;
      switch (liveCameraMode) {
        case 'showcase':
          camPos = new THREE.Vector3(busRef.current.x - 5.4, 3.2, busRef.current.z - 2.8);
          target = busPos.clone();
          fov = 49;
          break;
        case 'cockpit':
          camPos = new THREE.Vector3(busRef.current.x + Math.sin(busRef.current.heading) * 1.25, 2.05, busRef.current.z + Math.cos(busRef.current.heading) * 2.1);
          target = lookAhead.clone();
          fov = 63;
          break;
        case 'cinematic':
          camPos = new THREE.Vector3(busRef.current.x + 8, 6.5, busRef.current.z - 10);
          target = busPos.clone().add(new THREE.Vector3(0, 1.3, 8));
          fov = 46;
          break;
        case 'stopside': {
          const stop = STOPS[currentStopIndexRef.current] ?? STOPS[STOPS.length - 1];
          camPos = new THREE.Vector3(stop.x + 8.5, 3.8, stop.z - 1.5);
          target = busPos.clone();
          fov = 51;
          break;
        }
        default:
          camPos = new THREE.Vector3(busRef.current.x - Math.sin(busRef.current.heading) * 8, 4.8, busRef.current.z - Math.cos(busRef.current.heading) * 11);
          target = lookAhead.clone();
          fov = 53;
      }
      cameraLive.position.lerp(camPos, 0.12);
      cockpitTargetRef.current.lerp(target, 0.12);
      cameraLive.lookAt(cockpitTargetRef.current);
      cameraLive.fov = THREE.MathUtils.lerp(cameraLive.fov, fov, 0.15);
      cameraLive.far = liveProfile.renderDistance;
      cameraLive.updateProjectionMatrix();

      rendererLive.render(sceneLive, cameraLive);
      frameRef.current += 1;
      drawCallsRef.current = rendererLive.info.render.calls;
      uiUpdatesRef.current += 1;
      if (frameRef.current % 4 === 0) setUiTick((value) => value + 1);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      mountedRef.current = false;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'KeyP', 'KeyO', 'KeyL', 'KeyH', 'KeyC', 'KeyR', 'KeyQ', 'KeyE'].includes(event.code)) {
        event.preventDefault();
      }
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) {
        pressedRef.current.add(event.code);
      }
      const bus = busRef.current;
      if (event.repeat) return;
      switch (event.code) {
        case 'Space':
          bus.parkingBrake = !bus.parkingBrake;
          lastActionRef.current = 'parking-brake';
          setMessage(bus.parkingBrake ? 'Parking brake engaged.' : 'Parking brake released.');
          break;
        case 'KeyO':
          if (Math.abs(bus.speed) <= 1.2) {
            bus.doorOpen = !bus.doorOpen;
            lastActionRef.current = 'door-toggle';
            setMessage(bus.doorOpen ? 'Passenger doors opened.' : 'Passenger doors closed.');
          } else {
            setMessage('Door interlock active while moving unsafely.');
          }
          break;
        case 'KeyL':
          bus.headlights = !bus.headlights;
          lastActionRef.current = 'headlights';
          break;
        case 'KeyQ':
          bus.indicator = bus.indicator === 'left' ? 'off' : 'left';
          lastActionRef.current = 'indicator-left';
          break;
        case 'KeyE':
          bus.indicator = bus.indicator === 'right' ? 'off' : 'right';
          lastActionRef.current = 'indicator-right';
          break;
        case 'KeyH':
          bus.hornActive = true;
          lastActionRef.current = 'horn';
          setMessage('Horn activated. Traffic keeps rolling.');
          break;
        case 'KeyC':
          setCameraMode((mode) => CAMERA_MODES[(CAMERA_MODES.indexOf(mode) + 1) % CAMERA_MODES.length]);
          lastActionRef.current = 'camera-cycle';
          break;
        case 'KeyP':
          if (phase === 'playing' || phase === 'paused') {
            setPaused((value) => !value);
            setPhase((value) => (value === 'paused' ? 'playing' : value === 'playing' ? 'paused' : value));
            lastActionRef.current = 'pause-toggle';
          }
          break;
        case 'KeyR':
          resetGame();
          lastActionRef.current = 'route-reset';
          break;
        default:
          break;
      }
    };
    const onKeyUp = (event: KeyboardEvent) => {
      pressedRef.current.delete(event.code);
      if (event.code === 'KeyH') busRef.current.hornActive = false;
    };
    const clearHeld = () => pressedRef.current.clear();
    const onBlur = () => {
      clearHeld();
      busRef.current.hornActive = false;
    };
    const onVisibilityChange = () => {
      if (document.hidden) onBlur();
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [phase]);

  const resetGame = () => {
    busRef.current = freshBus();
    trafficStateRef.current = INITIAL_TRAFFIC.map((vehicle) => ({ ...vehicle }));
    completedStopsRef.current = [];
    currentStopIndexRef.current = 0;
    passengerCountRef.current = 4;
    boardedTotalRef.current = 0;
    earningsRef.current = 0;
    boardingProgressRef.current = 0;
    scoreRef.current = 0;
    elapsedRef.current = 0;
    tickRef.current = 0;
    accumulatorRef.current = 0;
    setPhase('playing');
    setPaused(false);
    setMissionStatus('Depart for Kota Lama');
    setMessage('Route reset. Drive smoothly to the first stop.');
  };

  const startGame = () => {
    resetGame();
  };

  const applyPress = (code: string, active: boolean, pointerType: PointerKind = 'touch') => {
    lastPointerTypeRef.current = pointerType;
    if (active) {
      pressedRef.current.add(code);
      lastActionRef.current = code;
    } else {
      pressedRef.current.delete(code);
    }
  };

  return (
    <div className="relative h-screen w-screen bg-slate-950 text-white">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/35 via-transparent to-slate-950/55" />

      <div className="absolute left-3 top-3 right-3 z-20 flex flex-col gap-3 lg:right-auto lg:w-[420px]">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl backdrop-blur-md">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Nusantara Coach Simulator 3D</p>
              <h1 className="mt-1 text-2xl font-semibold">Indonesia-inspired luxury bus route</h1>
              <p className="mt-1 text-sm text-slate-300">High-detail single-player driving with live telemetry and route service rules.</p>
            </div>
            <div className="rounded-xl bg-cyan-500/15 px-3 py-2 text-right text-xs text-cyan-100">
              <div>{phase.toUpperCase()}</div>
              <div className="mt-1 text-slate-300">{paused ? 'Paused' : 'Live'}</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <Stat label="Speed" value={`${speedKph.toFixed(0)} km/h`} />
            <Stat label="Fuel" value={`${busRef.current.fuel.toFixed(0)}%`} />
            <Stat label="Passengers" value={`${passengerCountRef.current}/${CAPACITY}`} />
            <Stat label="Earnings" value={`Rp ${earningsRef.current.toLocaleString('id-ID')}`} />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-200 sm:grid-cols-3">
            <Badge label="Doors" value={busRef.current.doorOpen ? 'Open' : 'Closed'} active={busRef.current.doorOpen} />
            <Badge label="Headlights" value={busRef.current.headlights ? 'On' : 'Off'} active={busRef.current.headlights} />
            <Badge label="Indicator" value={busRef.current.indicator} active={busRef.current.indicator !== 'off'} />
            <Badge label="Brake" value={busRef.current.parkingBrake ? 'Engaged' : 'Released'} active={busRef.current.parkingBrake} />
            <Badge label="Camera" value={cameraMode} active />
            <Badge label="Quality" value={quality} active />
          </div>

          <div className="mt-4 space-y-2 rounded-xl bg-slate-900/80 p-3 text-sm">
            <div className="flex items-center justify-between text-slate-300">
              <span>Mission</span>
              <span>{missionStatus}</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Next stop</span>
              <span>{nextStop ? `${nextStop.name} · ${nextStopDistance.toFixed(0)} m` : 'Completed'}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${routeProgress * 100}%` }} />
            </div>
            <p className="text-cyan-100">{message}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm shadow-xl backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={phase === 'menu' ? startGame : () => { setPaused(false); setPhase((value) => (value === 'paused' ? 'playing' : value)); }} className="pointer-events-auto rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400">
              {phase === 'menu' ? 'Start Route' : 'Resume'}
            </button>
            <button onClick={() => { setPaused(true); setPhase((value) => (value === 'playing' ? 'paused' : value)); }} className="pointer-events-auto rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20">
              Pause
            </button>
            <button onClick={resetGame} className="pointer-events-auto rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20">
              Reset Route
            </button>
            <button onClick={() => setCameraMode((mode) => CAMERA_MODES[(CAMERA_MODES.indexOf(mode) + 1) % CAMERA_MODES.length])} className="pointer-events-auto rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20">
              Cycle Camera
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span>W accelerate</span>
            <span>S brake / reverse</span>
            <span>A/D steer</span>
            <span>Space parking brake</span>
            <span>O doors</span>
            <span>L lights</span>
            <span>Q/E indicators</span>
            <span>H horn</span>
            <span>P pause</span>
            <span>C camera</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Graphics quality</label>
            <select
              value={quality}
              onChange={(event) => {
                const nextQuality = event.target.value as Quality;
                setQuality(nextQuality);
                const renderer = rendererRef.current;
                const camera = cameraRef.current;
                if (renderer) renderer.setPixelRatio(Math.min(window.devicePixelRatio, QUALITY_PROFILES[nextQuality].pixelRatio));
                if (camera) {
                  camera.far = QUALITY_PROFILES[nextQuality].renderDistance;
                  camera.updateProjectionMatrix();
                }
              }}
              className="pointer-events-auto rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm"
            >
              <option value="cinematic">Cinematic</option>
              <option value="high">High</option>
              <option value="balanced">Balanced</option>
            </select>
          </div>
        </div>
      </div>

      {phase === 'menu' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <div className="max-w-2xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Departure briefing</p>
            <h2 className="mt-3 text-4xl font-semibold">Drive the premium coach through a polished Indonesian corridor</h2>
            <p className="mt-4 text-slate-300">Service exactly three passenger stops, manage doors, lights and signals, avoid collisions, and enjoy cinematic exterior and cockpit camera modes.</p>
            <button onClick={startGame} className="mt-8 rounded-2xl bg-cyan-500 px-6 py-3 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400">Start Driving</button>
          </div>
        </div>
      )}

      {mobileControls && (
        <div className="absolute bottom-3 left-3 right-3 z-20 grid grid-cols-2 gap-3 lg:hidden">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <TouchButton label="Left" onPress={(active) => applyPress('KeyA', active)} />
              <TouchButton label="Brake" onPress={(active) => applyPress('KeyS', active)} />
              <TouchButton label="Right" onPress={(active) => applyPress('KeyD', active)} />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <TouchButton label="Throttle" onPress={(active) => applyPress('KeyW', active)} />
              <TouchButton label="Reverse" onPress={(active) => applyPress('KeyS', active)} />
              <button onClick={() => { if (Math.abs(busRef.current.speed) <= 1.2) busRef.current.doorOpen = !busRef.current.doorOpen; }} className="pointer-events-auto rounded-xl bg-white/10 px-3 py-4">Doors</button>
              <button onClick={() => setCameraMode((mode) => CAMERA_MODES[(CAMERA_MODES.indexOf(mode) + 1) % CAMERA_MODES.length])} className="pointer-events-auto rounded-xl bg-white/10 px-3 py-4">Camera</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-3">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function Badge({ label, value, active = false }: { label: string; value: string; active?: boolean }) {
  return (
    <div className={`rounded-xl border px-3 py-2 ${active ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-100' : 'border-white/10 bg-white/5 text-slate-300'}`}>
      <div className="text-[10px] uppercase tracking-[0.22em]">{label}</div>
      <div className="mt-1 font-medium capitalize">{value}</div>
    </div>
  );
}

function TouchButton({ label, onPress }: { label: string; onPress: (active: boolean) => void }) {
  return (
    <button
      className="pointer-events-auto touch-none rounded-xl bg-cyan-500/20 px-3 py-4 text-white active:bg-cyan-400/30"
      onPointerDown={(event) => {
        onPress(true);
        (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
      }}
      onPointerUp={() => onPress(false)}
      onPointerCancel={() => onPress(false)}
      onPointerLeave={() => onPress(false)}
    >
      {label}
    </button>
  );
}

export default App;
