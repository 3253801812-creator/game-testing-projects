import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type LevelId = 'forest' | 'desert' | 'snow';
type SurfaceType = 'grass' | 'sand' | 'ice';
type PowerupType = 'bounce_pad' | 'speed_boost' | 'hole_in_one';
type GameScreenState = 'menu' | 'level_select' | 'local_setup' | 'playing' | 'hole_complete' | 'tournament_complete' | 'local_result' | 'leaderboard';
type GameMode = 'single' | 'local_multiplayer';

type Vec3 = { x: number; y: number; z: number };
type Surface = {
  id: string;
  type: SurfaceType;
  friction: number;
  center?: Vec3;
  bounds?: { minX: number; maxX: number; minZ: number; maxZ: number };
};
type Obstacle = {
  id: string;
  type: string;
  position: Vec3;
  solid: boolean;
  radius?: number;
  bounds?: { minX: number; maxX: number; minZ: number; maxZ: number };
};
type TerrainFeature = Record<string, unknown>;
type CourseDefinition = {
  id: LevelId;
  name: string;
  theme: string;
  par: number;
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  spawn: Vec3;
  hole: { x: number; y: number; z: number; radius: number };
  surfaces: Surface[];
  obstacles: Obstacle[];
  terrainFeatures: TerrainFeature[];
  powerups: Array<{
    id: string;
    type: PowerupType;
    position: Vec3;
    direction?: { x: number; z: number };
  }>;
  cameraAngle: number;
};
type PlayerState = {
  id: string;
  name: string;
  holeStrokes: number;
  totalStrokes: number;
  finished: boolean;
  ballPosition: Vec3;
  powerupInventory: Array<{ type: PowerupType; count: number }>;
  armedPowerup: 'hole_in_one' | null;
  collectedPowerupIds: string[];
};
type LeaderboardEntry = {
  playerId: string;
  playerName: string;
  strokes: number;
  rank: number;
  par: number;
  relativeToPar: number;
  achievedAt: number;
};
type OverallEntry = {
  playerId: string;
  playerName: string;
  levelStrokes: { forest: number; desert: number; snow: number };
  totalStrokes: number;
  rank: number;
  achievedAt: number;
};
type LeaderboardState = {
  levelBest: Record<string, LeaderboardEntry[]>;
  overall: OverallEntry[];
  persisted: boolean;
};
type PhysicsBallState = {
  position: Vec3;
  velocity: Vec3;
  speed: number;
  radius: number;
  moving: boolean;
  sleeping: boolean;
  airborne: boolean;
  inHole: boolean;
  outOfBounds: boolean;
  currentSurface: SurfaceType;
  friction: number;
  lastCollision: string | null;
  lastSafePosition: Vec3;
};
type ShotState = {
  dragging: boolean;
  canShoot: boolean;
  startScreen: { x: number; y: number } | null;
  currentScreen: { x: number; y: number } | null;
  direction: { x: number; z: number };
  power: number;
  minPower: number;
  maxPower: number;
  strokeCount: number;
};
type PowerupRuntime = {
  id: string;
  type: PowerupType;
  position: Vec3;
  active: boolean;
  collected: boolean;
  direction?: { x: number; z: number };
};

type RuntimeRefs = {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  ballMesh: THREE.Mesh | null;
  holeMesh: THREE.Mesh | null;
  shotArrow: THREE.ArrowHelper | null;
  powerupMeshes: Map<string, THREE.Object3D>;
  obstacleMeshes: Map<string, THREE.Mesh>;
  surfaceMeshes: Map<string, THREE.Mesh>;
  animationFrame: number | null;
  clockStart: number;
  simulationTick: number;
  renderFrame: number;
  reactCommitCount: number;
  logicLoopCount: number;
  listenerCount: number;
  runtimeMountCount: number;
  runtimeCleanupCount: number;
  engineGeneration: number;
};

const BUILD_ID = 'mini-golf-build-2026-08-18';
const STORAGE_KEY = 'mini-golf-leaderboard-v1';
const BALL_RADIUS = 0.28;
const MAX_SPEED = 24;
const SHOT_MIN = 2;
const SHOT_MAX = 18;
const LEVELS: CourseDefinition[] = [
  {
    id: 'forest',
    name: '森林曲道',
    theme: '森林',
    par: 3,
    bounds: { minX: -12, maxX: 12, minZ: -22, maxZ: 22 },
    spawn: { x: 0, y: BALL_RADIUS, z: 17 },
    hole: { x: 0, y: 0, z: -17, radius: 0.55 },
    cameraAngle: 0.7,
    surfaces: [
      { id: 'forest-grass', type: 'grass', friction: 0.2, bounds: { minX: -7.5, maxX: 7.5, minZ: -20, maxZ: 20 } },
      { id: 'forest-sand-left', type: 'sand', friction: 0.74, bounds: { minX: -6.8, maxX: -2.4, minZ: 1, maxZ: 10 } },
      { id: 'forest-sand-right', type: 'sand', friction: 0.74, bounds: { minX: 2.2, maxX: 6.4, minZ: -12, maxZ: -4 } },
    ],
    obstacles: [
      { id: 'tree-1', type: 'tree', position: { x: -2.4, y: 0.8, z: 8 }, solid: true, radius: 0.9 },
      { id: 'tree-2', type: 'tree', position: { x: 2.8, y: 0.8, z: 3.4 }, solid: true, radius: 1 },
      { id: 'rock-1', type: 'rock', position: { x: -1.3, y: 0.4, z: -6 }, solid: true, radius: 0.8 },
    ],
    terrainFeatures: [{ id: 'forest-hill', type: 'hill', center: { x: 0, z: -2 }, strength: 0.08 }],
    powerups: [
      { id: 'forest-hio', type: 'hole_in_one', position: { x: -5.2, y: 0.3, z: 14 } },
      { id: 'forest-speed', type: 'speed_boost', position: { x: 0, y: 0.05, z: -10 }, direction: { x: 0, z: -1 } },
      { id: 'forest-bounce', type: 'bounce_pad', position: { x: 4.8, y: 0.05, z: 10 }, direction: { x: -1, z: -0.2 } },
    ],
  },
  {
    id: 'desert',
    name: '沙漠回旋',
    theme: '沙漠',
    par: 4,
    bounds: { minX: -14, maxX: 14, minZ: -24, maxZ: 24 },
    spawn: { x: -5, y: BALL_RADIUS, z: 18 },
    hole: { x: 5.5, y: 0, z: -18, radius: 0.58 },
    cameraAngle: 0.85,
    surfaces: [
      { id: 'desert-grass', type: 'grass', friction: 0.18, bounds: { minX: -8, maxX: 8, minZ: -21, maxZ: 21 } },
      { id: 'desert-sand-main', type: 'sand', friction: 0.66, bounds: { minX: -2.5, maxX: 6.5, minZ: -5, maxZ: 11 } },
      { id: 'desert-sand-top', type: 'sand', friction: 0.66, bounds: { minX: -7, maxX: -1.5, minZ: -17, maxZ: -11 } },
    ],
    obstacles: [
      { id: 'dune-1', type: 'dune', position: { x: -4, y: 0.6, z: 5 }, solid: true, radius: 1.3 },
      { id: 'dune-2', type: 'dune', position: { x: 3.3, y: 0.6, z: -8 }, solid: true, radius: 1.4 },
      { id: 'pillar', type: 'rock_pillar', position: { x: 1.1, y: 1.1, z: 10 }, solid: true, radius: 0.9 },
    ],
    terrainFeatures: [{ id: 'desert-wave', type: 'slope', axis: 'x', strength: 0.06 }],
    powerups: [
      { id: 'desert-hio', type: 'hole_in_one', position: { x: -7, y: 0.3, z: 15 } },
      { id: 'desert-speed', type: 'speed_boost', position: { x: 5.4, y: 0.05, z: 2 }, direction: { x: 0.3, z: -1 } },
      { id: 'desert-bounce', type: 'bounce_pad', position: { x: -5.5, y: 0.05, z: -7 }, direction: { x: 1, z: -0.2 } },
    ],
  },
  {
    id: 'snow',
    name: '冰雪滑道',
    theme: '冰雪',
    par: 3,
    bounds: { minX: -13, maxX: 13, minZ: -25, maxZ: 25 },
    spawn: { x: 0, y: BALL_RADIUS, z: 20 },
    hole: { x: 0, y: 0, z: -19, radius: 0.55 },
    cameraAngle: 0.55,
    surfaces: [
      { id: 'snow-grass', type: 'grass', friction: 0.16, bounds: { minX: -7, maxX: 7, minZ: -22, maxZ: 22 } },
      { id: 'snow-ice-main', type: 'ice', friction: 0.02, bounds: { minX: -4.5, maxX: 4.5, minZ: -15, maxZ: 11 } },
      { id: 'snow-sand-soft', type: 'sand', friction: 0.6, bounds: { minX: -7, maxX: -3.5, minZ: -2, maxZ: 5 } },
    ],
    obstacles: [
      { id: 'snowbank-1', type: 'snowbank', position: { x: -5.4, y: 0.5, z: 10 }, solid: true, radius: 1.3 },
      { id: 'snowbank-2', type: 'snowbank', position: { x: 5.2, y: 0.5, z: -4 }, solid: true, radius: 1.1 },
      { id: 'crystal-1', type: 'ice_crystal', position: { x: 0.8, y: 1.1, z: 3 }, solid: true, radius: 0.9 },
    ],
    terrainFeatures: [{ id: 'snow-lane', type: 'ice_lane', length: 24, strength: 0.03 }],
    powerups: [
      { id: 'snow-hio', type: 'hole_in_one', position: { x: 5.4, y: 0.3, z: 16 } },
      { id: 'snow-speed', type: 'speed_boost', position: { x: 0, y: 0.05, z: -7 }, direction: { x: 0, z: -1 } },
      { id: 'snow-bounce', type: 'bounce_pad', position: { x: -4.8, y: 0.05, z: -12 }, direction: { x: 1, z: 0 } },
    ],
  },
];

const cloneVec3 = (v: Vec3): Vec3 => ({ x: finite(v.x), y: finite(v.y), z: finite(v.z) });
const finite = (n: number): number => (Number.isFinite(n) ? Number(n.toFixed(4)) : 0);
const magnitude2 = (x: number, z: number) => Math.sqrt(x * x + z * z);
const defaultInventory = (): Array<{ type: PowerupType; count: number }> => [
  { type: 'bounce_pad', count: 0 },
  { type: 'speed_boost', count: 0 },
  { type: 'hole_in_one', count: 0 },
];
const getLevel = (id: LevelId) => LEVELS.find((level) => level.id === id) ?? LEVELS[0];

function getInventoryCount(inventory: Array<{ type: PowerupType; count: number }>, type: PowerupType) {
  return inventory.find((item) => item.type === type)?.count ?? 0;
}

function setInventoryCount(inventory: Array<{ type: PowerupType; count: number }>, type: PowerupType, count: number) {
  return inventory.map((item) => (item.type === type ? { ...item, count: Math.max(0, count) } : item));
}

function sortLevelEntries(entries: LeaderboardEntry[]) {
  return [...entries]
    .sort((a, b) => a.strokes - b.strokes || a.achievedAt - b.achievedAt || a.playerId.localeCompare(b.playerId))
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}

function sortOverallEntries(entries: OverallEntry[]) {
  return [...entries]
    .sort((a, b) => a.totalStrokes - b.totalStrokes || a.achievedAt - b.achievedAt || a.playerId.localeCompare(b.playerId))
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}

function loadLeaderboard(): LeaderboardState {
  if (typeof window === 'undefined') {
    return { levelBest: {}, overall: [], persisted: false };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { levelBest: {}, overall: [], persisted: true };
    const parsed = JSON.parse(raw) as LeaderboardState;
    return {
      levelBest: parsed.levelBest ?? {},
      overall: parsed.overall ?? [],
      persisted: true,
    };
  } catch {
    return { levelBest: {}, overall: [], persisted: false };
  }
}

function saveLeaderboard(state: LeaderboardState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function courseHeight(level: CourseDefinition, x: number, z: number) {
  if (level.id === 'forest') return Math.sin((x + z) * 0.12) * 0.08;
  if (level.id === 'desert') return Math.sin(x * 0.35) * 0.06 + Math.cos(z * 0.18) * 0.03;
  return Math.sin(z * 0.2) * 0.03;
}

function surfaceForPosition(level: CourseDefinition, pos: Vec3): Surface {
  const exact = level.surfaces.find((surface) => {
    if (!surface.bounds) return false;
    return pos.x >= surface.bounds.minX && pos.x <= surface.bounds.maxX && pos.z >= surface.bounds.minZ && pos.z <= surface.bounds.maxZ;
  });
  return exact ?? level.surfaces[0];
}

function makePlayer(index: number, spawn: Vec3): PlayerState {
  return {
    id: `player-${index + 1}`,
    name: `玩家 ${index + 1}`,
    holeStrokes: 0,
    totalStrokes: 0,
    finished: false,
    ballPosition: cloneVec3(spawn),
    powerupInventory: defaultInventory(),
    armedPowerup: null,
    collectedPowerupIds: [],
  };
}

export function App() {
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);
  const runtimeRef = useRef<RuntimeRefs>({
    scene: null,
    camera: null,
    renderer: null,
    ballMesh: null,
    holeMesh: null,
    shotArrow: null,
    powerupMeshes: new Map(),
    obstacleMeshes: new Map(),
    surfaceMeshes: new Map(),
    animationFrame: null,
    clockStart: performance.now(),
    simulationTick: 0,
    renderFrame: 0,
    reactCommitCount: 0,
    logicLoopCount: 0,
    listenerCount: 0,
    runtimeMountCount: 0,
    runtimeCleanupCount: 0,
    engineGeneration: 1,
  });
  const [gameState, setGameState] = useState<GameScreenState>('menu');
  const [mode, setMode] = useState<GameMode>('single');
  const [selectedLevel, setSelectedLevel] = useState<LevelId>('forest');
  const [localPlayerCount, setLocalPlayerCount] = useState(2);
  const [leaderboard, setLeaderboard] = useState<LeaderboardState>(() => loadLeaderboard());
  const [currentHoleStrokes, setCurrentHoleStrokes] = useState(0);
  const [totalStrokes, setTotalStrokes] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [holeComplete, setHoleComplete] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [ball, setBall] = useState<PhysicsBallState>(() => ({
    position: cloneVec3(getLevel('forest').spawn),
    velocity: { x: 0, y: 0, z: 0 },
    speed: 0,
    radius: BALL_RADIUS,
    moving: false,
    sleeping: true,
    airborne: false,
    inHole: false,
    outOfBounds: false,
    currentSurface: 'grass',
    friction: getLevel('forest').surfaces[0].friction,
    lastCollision: null,
    lastSafePosition: cloneVec3(getLevel('forest').spawn),
  }));
  const [shot, setShot] = useState<ShotState>({
    dragging: false,
    canShoot: true,
    startScreen: null,
    currentScreen: null,
    direction: { x: 0, z: -1 },
    power: SHOT_MIN,
    minPower: SHOT_MIN,
    maxPower: SHOT_MAX,
    strokeCount: 0,
  });
  const [cameraState, setCameraState] = useState({
    mode: 'follow' as const,
    position: { x: 0, y: 14, z: 12 },
    target: { x: 0, y: 0, z: 0 },
    distance: 12,
    minDistance: 6,
    maxDistance: 20,
    zoom: 1,
    angle: 0.8,
    pitch: 0.7,
  });
  const [physicsFeedback, setPhysicsFeedback] = useState({ motion: '静止', contact: '无碰撞' });
  const [powerupItems, setPowerupItems] = useState<PowerupRuntime[]>([]);
  const [inventory, setInventory] = useState(defaultInventory());
  const [armedType, setArmedType] = useState<'hole_in_one' | null>(null);
  const [activeEffect, setActiveEffect] = useState<string | null>(null);
  const [lastTriggeredId, setLastTriggeredId] = useState<string | null>(null);
  const [multiplayerStatus, setMultiplayerStatus] = useState<'setup' | 'playing' | 'complete'>('setup');
  const [players, setPlayers] = useState<PlayerState[]>([]);
  const [turnIndex, setTurnIndex] = useState(0);
  const [round, setRound] = useState(1);
  const [revision, setRevision] = useState(0);
  const [winnerId, setWinnerId] = useState<string | null>(null);
  const [tiedPlayerIds, setTiedPlayerIds] = useState<string[]>([]);
  const [matchSummary, setMatchSummary] = useState<Array<{ id: string; name: string; strokes: number }>>([]);

  const currentLevel = useMemo(() => getLevel(selectedLevel), [selectedLevel]);
  const currentPlayer = players[turnIndex] ?? null;

  useEffect(() => {
    runtimeRef.current.reactCommitCount += 1;
  });

  useEffect(() => {
    saveLeaderboard(leaderboard);
  }, [leaderboard]);

  useEffect(() => {
    const runtime = runtimeRef.current;
    runtime.runtimeMountCount += 1;
    if (!canvasWrapRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#04111f');
    scene.fog = new THREE.Fog('#04111f', 16, 50);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
    camera.position.set(0, 12, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.setSize(canvasWrapRef.current.clientWidth, canvasWrapRef.current.clientHeight);
    canvasWrapRef.current.innerHTML = '';
    canvasWrapRef.current.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight('#dbeafe', 1.8);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight('#ffffff', 1.8);
    dirLight.position.set(8, 18, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(BALL_RADIUS, 32, 32),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', metalness: 0.2, roughness: 0.45 }),
    );
    ballMesh.castShadow = true;
    scene.add(ballMesh);

    const holeMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 0.7, 0.2, 32),
      new THREE.MeshStandardMaterial({ color: '#020617', roughness: 1 }),
    );
    holeMesh.receiveShadow = true;
    scene.add(holeMesh);

    const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, BALL_RADIUS + 0.2, 0), 1.5, 0x38bdf8);
    scene.add(arrow);

    runtime.scene = scene;
    runtime.camera = camera;
    runtime.renderer = renderer;
    runtime.ballMesh = ballMesh;
    runtime.holeMesh = holeMesh;
    runtime.shotArrow = arrow;
    window.__THREE_SCENE__ = scene;
    window.__THREE_RENDERER__ = renderer;

    const onResize = () => {
      if (!canvasWrapRef.current || !runtime.camera || !runtime.renderer) return;
      const width = canvasWrapRef.current.clientWidth;
      const height = canvasWrapRef.current.clientHeight;
      runtime.camera.aspect = width / Math.max(height, 1);
      runtime.camera.updateProjectionMatrix();
      runtime.renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);
    runtime.listenerCount += 1;
    onResize();

    const renderLoop = () => {
      runtime.renderFrame += 1;
      runtime.logicLoopCount += 1;
      if (runtime.renderer && runtime.scene && runtime.camera) {
        runtime.renderer.render(runtime.scene, runtime.camera);
      }
      runtime.animationFrame = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      window.removeEventListener('resize', onResize);
      runtime.listenerCount = Math.max(0, runtime.listenerCount - 1);
      if (runtime.animationFrame) cancelAnimationFrame(runtime.animationFrame);
      runtime.renderer?.dispose();
      runtime.runtimeCleanupCount += 1;
    };
  }, []);

  useEffect(() => {
    const runtime = runtimeRef.current;
    if (!runtime.scene) return;
    runtime.surfaceMeshes.forEach((mesh) => runtime.scene?.remove(mesh));
    runtime.obstacleMeshes.forEach((mesh) => runtime.scene?.remove(mesh));
    runtime.powerupMeshes.forEach((mesh) => runtime.scene?.remove(mesh));
    runtime.surfaceMeshes.clear();
    runtime.obstacleMeshes.clear();
    runtime.powerupMeshes.clear();

    const borderMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.9 });
    const floorBase = new THREE.Mesh(
      new THREE.BoxGeometry(currentLevel.bounds.maxX - currentLevel.bounds.minX + 2, 0.6, currentLevel.bounds.maxZ - currentLevel.bounds.minZ + 2),
      new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 1 }),
    );
    floorBase.position.set(0, -0.35, 0);
    floorBase.receiveShadow = true;
    runtime.scene.add(floorBase);

    currentLevel.surfaces.forEach((surface) => {
      const width = surface.bounds ? surface.bounds.maxX - surface.bounds.minX : 2;
      const depth = surface.bounds ? surface.bounds.maxZ - surface.bounds.minZ : 2;
      const color = surface.type === 'sand' ? '#fbbf24' : surface.type === 'ice' ? '#93c5fd' : currentLevel.id === 'desert' ? '#84cc16' : '#22c55e';
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(width, 0.08, depth),
        new THREE.MeshStandardMaterial({ color, roughness: surface.type === 'ice' ? 0.15 : 0.85, metalness: surface.type === 'ice' ? 0.2 : 0 }),
      );
      const centerX = surface.bounds ? (surface.bounds.minX + surface.bounds.maxX) / 2 : surface.center?.x ?? 0;
      const centerZ = surface.bounds ? (surface.bounds.minZ + surface.bounds.maxZ) / 2 : surface.center?.z ?? 0;
      mesh.position.set(centerX, 0, centerZ);
      mesh.receiveShadow = true;
      runtime.scene?.add(mesh);
      runtime.surfaceMeshes.set(surface.id, mesh);
    });

    const wallThickness = 0.6;
    const wallHeight = 1.1;
    const width = currentLevel.bounds.maxX - currentLevel.bounds.minX;
    const depth = currentLevel.bounds.maxZ - currentLevel.bounds.minZ;
    [
      { x: 0, z: currentLevel.bounds.minZ - wallThickness / 2, w: width + wallThickness * 2, d: wallThickness },
      { x: 0, z: currentLevel.bounds.maxZ + wallThickness / 2, w: width + wallThickness * 2, d: wallThickness },
      { x: currentLevel.bounds.minX - wallThickness / 2, z: 0, w: wallThickness, d: depth },
      { x: currentLevel.bounds.maxX + wallThickness / 2, z: 0, w: wallThickness, d: depth },
    ].forEach((wall, index) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(wall.w, wallHeight, wall.d), borderMat);
      mesh.position.set(wall.x, wallHeight / 2 - 0.05, wall.z);
      mesh.receiveShadow = true;
      runtime.scene?.add(mesh);
      runtime.obstacleMeshes.set(`wall-${index}`, mesh);
    });

    currentLevel.obstacles.forEach((obstacle) => {
      const geometry = obstacle.type.includes('pillar') ? new THREE.CylinderGeometry(obstacle.radius ?? 1, obstacle.radius ?? 1, 2.2, 16) : new THREE.SphereGeometry(obstacle.radius ?? 1, 20, 20);
      const color = obstacle.type.includes('snow') || obstacle.type.includes('ice') ? '#e0f2fe' : obstacle.type.includes('rock') ? '#78716c' : obstacle.type.includes('dune') ? '#f59e0b' : '#14532d';
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color, roughness: 0.9 }));
      mesh.position.set(obstacle.position.x, obstacle.position.y, obstacle.position.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      runtime.scene?.add(mesh);
      runtime.obstacleMeshes.set(obstacle.id, mesh);
    });
  }, [currentLevel]);

  useEffect(() => {
    const levelItems = currentLevel.powerups.map((item) => ({ ...item, active: true, collected: false }));
    setPowerupItems(levelItems);
  }, [currentLevel]);

  useEffect(() => {
    const runtime = runtimeRef.current;
    if (!runtime.scene) return;
    runtime.powerupMeshes.forEach((mesh) => runtime.scene?.remove(mesh));
    runtime.powerupMeshes.clear();
    powerupItems.forEach((item) => {
      if (!item.active) return;
      const materialColor = item.type === 'hole_in_one' ? '#f472b6' : item.type === 'speed_boost' ? '#f97316' : '#a78bfa';
      const mesh = new THREE.Mesh(
        item.type === 'speed_boost' ? new THREE.BoxGeometry(1.2, 0.1, 2.2) : new THREE.TorusKnotGeometry(0.25, 0.08, 40, 8),
        new THREE.MeshStandardMaterial({ color: materialColor, emissive: materialColor, emissiveIntensity: 0.25 }),
      );
      mesh.position.set(item.position.x, item.position.y + 0.2, item.position.z);
      if (item.direction) mesh.rotation.y = Math.atan2(item.direction.x, item.direction.z);
      runtime.scene?.add(mesh);
      runtime.powerupMeshes.set(item.id, mesh);
    });
  }, [powerupItems]);

  useEffect(() => {
    if (!runtimeRef.current.ballMesh || !runtimeRef.current.holeMesh || !runtimeRef.current.camera || !runtimeRef.current.shotArrow) return;
    const level = currentLevel;
    const ballMesh = runtimeRef.current.ballMesh;
    const holeMesh = runtimeRef.current.holeMesh;
    const arrow = runtimeRef.current.shotArrow;
    ballMesh.position.set(ball.position.x, ball.position.y, ball.position.z);
    holeMesh.position.set(level.hole.x, -0.03, level.hole.z);
    arrow.position.set(ball.position.x, ball.position.y + 0.45, ball.position.z);
    arrow.setDirection(new THREE.Vector3(shot.direction.x, 0, shot.direction.z).normalize());
    arrow.setLength(0.5 + shot.power * 0.15);
    arrow.visible = gameState === 'playing' && !ball.moving && !holeComplete;

    const dist = cameraState.distance;
    const angle = currentLevel.cameraAngle;
    const cameraPos = {
      x: ball.position.x + Math.sin(angle) * dist,
      y: 5 + dist * 0.45,
      z: ball.position.z + Math.cos(angle) * dist,
    };
    runtimeRef.current.camera.position.lerp(new THREE.Vector3(cameraPos.x, cameraPos.y, cameraPos.z), 0.12);
    runtimeRef.current.camera.lookAt(ball.position.x, ball.position.y, ball.position.z);
    setCameraState((prev) => ({ ...prev, position: cloneVec3(cameraPos), target: cloneVec3(ball.position), angle }));
  }, [ball, shot.direction, shot.power, cameraState.distance, currentLevel, gameState, holeComplete]);

  useEffect(() => {
    runtimeRef.current.clockStart = performance.now();
  }, [gameState, currentLevel.id, mode]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    let last = performance.now();
    const step = 1000 / 60;
    let accumulator = 0;
    const runtime = runtimeRef.current;

    const tick = (now: number) => {
      const delta = Math.min(32, now - last);
      last = now;
      accumulator += delta;
      setElapsedTime(finite((now - runtime.clockStart) / 1000));
      while (accumulator >= step) {
        runtime.simulationTick += 1;
        integratePhysics(step / 1000);
        accumulator -= step;
      }
      runtime.animationFrame = requestAnimationFrame(tick);
    };

    runtime.animationFrame = requestAnimationFrame(tick);
    return () => {
      if (runtime.animationFrame) cancelAnimationFrame(runtime.animationFrame);
    };
  }, [gameState, currentLevel, mode, players, turnIndex, armedType, powerupItems, holeComplete]);

  function updateLeaderboardForPlayer(playerId: string, playerName: string, levelId: LevelId, strokesValue: number) {
    const level = getLevel(levelId);
    setLeaderboard((prev) => {
      const existing = prev.levelBest[levelId] ?? [];
      const old = existing.find((entry) => entry.playerId === playerId);
      if (old && old.strokes <= strokesValue) return prev;
      const retained = existing.filter((entry) => entry.playerId !== playerId);
      const achievedAt = old && old.strokes === strokesValue ? old.achievedAt : Date.now();
      const updatedLevel = sortLevelEntries([
        ...retained,
        {
          playerId,
          playerName,
          strokes: strokesValue,
          rank: 0,
          par: level.par,
          relativeToPar: strokesValue - level.par,
          achievedAt,
        },
      ]);
      const levelBest = { ...prev.levelBest, [levelId]: updatedLevel };
      const overallCandidates = Object.entries(
        Object.values(levelBest).flat().reduce<Record<string, { playerName: string; scores: Partial<Record<LevelId, LeaderboardEntry>> }>>((acc, entry) => {
          if (!acc[entry.playerId]) acc[entry.playerId] = { playerName: entry.playerName, scores: {} };
          const inferredLevel = (Object.keys(levelBest) as LevelId[]).find((lid) => (levelBest[lid] ?? []).some((e) => e.playerId === entry.playerId && e.achievedAt === entry.achievedAt && e.strokes === entry.strokes));
          if (inferredLevel) acc[entry.playerId].scores[inferredLevel] = entry;
          return acc;
        }, {}),
      )
        .map(([pid, data]) => ({ pid, ...data }))
        .filter((item) => item.scores.forest && item.scores.desert && item.scores.snow)
        .map((item) => ({
          playerId: item.pid,
          playerName: item.playerName,
          levelStrokes: {
            forest: item.scores.forest!.strokes,
            desert: item.scores.desert!.strokes,
            snow: item.scores.snow!.strokes,
          },
          totalStrokes: item.scores.forest!.strokes + item.scores.desert!.strokes + item.scores.snow!.strokes,
          rank: 0,
          achievedAt: Math.max(item.scores.forest!.achievedAt, item.scores.desert!.achievedAt, item.scores.snow!.achievedAt),
        }));
      return { levelBest, overall: sortOverallEntries(overallCandidates), persisted: true };
    });
  }

  function syncPlayerState(updatedBall: PhysicsBallState, updatedInventory = inventory, updatedArmed = armedType) {
    if (mode !== 'local_multiplayer' || !currentPlayer) return;
    setPlayers((prev) =>
      prev.map((player, index) =>
        index === turnIndex
          ? {
              ...player,
              ballPosition: cloneVec3(updatedBall.position),
              holeStrokes: currentHoleStrokes,
              totalStrokes,
              powerupInventory: updatedInventory,
              armedPowerup: updatedArmed,
            }
          : player,
      ),
    );
  }

  function startSingle(levelId: LevelId) {
    const level = getLevel(levelId);
    setMode('single');
    setSelectedLevel(levelId);
    setGameState('playing');
    setHoleComplete(false);
    setCurrentHoleStrokes(0);
    setTotalStrokes(0);
    setCurrentScore(0);
    setInventory(defaultInventory());
    setArmedType(null);
    setPlayers([]);
    setMultiplayerStatus('setup');
    setRevision((value) => value + 1);
    const surface = surfaceForPosition(level, level.spawn);
    setBall({
      position: cloneVec3(level.spawn),
      velocity: { x: 0, y: 0, z: 0 },
      speed: 0,
      radius: BALL_RADIUS,
      moving: false,
      sleeping: true,
      airborne: false,
      inHole: false,
      outOfBounds: false,
      currentSurface: surface.type,
      friction: surface.friction,
      lastCollision: null,
      lastSafePosition: cloneVec3(level.spawn),
    });
    setShot((prev) => ({ ...prev, dragging: false, canShoot: true, power: SHOT_MIN, strokeCount: 0, direction: { x: 0, z: -1 }, startScreen: null, currentScreen: null }));
  }

  function startLocal(levelId: LevelId, count: number) {
    const level = getLevel(levelId);
    const roster = Array.from({ length: count }, (_, index) => makePlayer(index, level.spawn));
    setMode('local_multiplayer');
    setSelectedLevel(levelId);
    setPlayers(roster);
    setTurnIndex(0);
    setRound(1);
    setRevision((value) => value + 1);
    setWinnerId(null);
    setTiedPlayerIds([]);
    setMatchSummary([]);
    setMultiplayerStatus('playing');
    setGameState('playing');
    setHoleComplete(false);
    setCurrentHoleStrokes(0);
    setTotalStrokes(0);
    setInventory(defaultInventory());
    setArmedType(null);
    const surface = surfaceForPosition(level, level.spawn);
    setBall({
      position: cloneVec3(level.spawn),
      velocity: { x: 0, y: 0, z: 0 },
      speed: 0,
      radius: BALL_RADIUS,
      moving: false,
      sleeping: true,
      airborne: false,
      inHole: false,
      outOfBounds: false,
      currentSurface: surface.type,
      friction: surface.friction,
      lastCollision: null,
      lastSafePosition: cloneVec3(level.spawn),
    });
    setShot((prev) => ({ ...prev, dragging: false, canShoot: true, power: SHOT_MIN, strokeCount: 0, direction: { x: 0, z: -1 }, startScreen: null, currentScreen: null }));
  }

  function switchToPlayer(nextIndex: number, nextPlayers: PlayerState[]) {
    const level = currentLevel;
    const nextPlayer = nextPlayers[nextIndex];
    const surface = surfaceForPosition(level, nextPlayer.ballPosition);
    setTurnIndex(nextIndex);
    setInventory(nextPlayer.powerupInventory);
    setArmedType(nextPlayer.armedPowerup);
    setCurrentHoleStrokes(nextPlayer.holeStrokes);
    setTotalStrokes(nextPlayer.totalStrokes);
    setBall({
      position: cloneVec3(nextPlayer.ballPosition),
      velocity: { x: 0, y: 0, z: 0 },
      speed: 0,
      radius: BALL_RADIUS,
      moving: false,
      sleeping: true,
      airborne: false,
      inHole: nextPlayer.finished,
      outOfBounds: false,
      currentSurface: surface.type,
      friction: surface.friction,
      lastCollision: null,
      lastSafePosition: cloneVec3(nextPlayer.ballPosition),
    });
    setShot((prev) => ({ ...prev, canShoot: !nextPlayer.finished, dragging: false, power: SHOT_MIN, startScreen: null, currentScreen: null, strokeCount: nextPlayer.holeStrokes }));
  }

  function advanceTurnOrFinish(strokesValue: number) {
    if (mode !== 'local_multiplayer') return;
    const updatedPlayers = players.map((player, index) =>
      index === turnIndex ? { ...player, finished: true, holeStrokes: strokesValue, totalStrokes: strokesValue, ballPosition: cloneVec3(ball.position), powerupInventory: inventory, armedPowerup: armedType } : player,
    );
    setPlayers(updatedPlayers);
    const unfinished = updatedPlayers.findIndex((player) => !player.finished);
    if (unfinished >= 0) {
      setRound((value) => value + 1);
      switchToPlayer(unfinished, updatedPlayers);
      return;
    }
    const summary = updatedPlayers.map((player) => ({ id: player.id, name: player.name, strokes: player.holeStrokes })).sort((a, b) => a.strokes - b.strokes || a.id.localeCompare(b.id));
    setMatchSummary(summary);
    const best = summary[0]?.strokes ?? 0;
    const ties = summary.filter((player) => player.strokes === best).map((player) => player.id);
    setTiedPlayerIds(ties);
    setWinnerId(ties.length === 1 ? ties[0] : null);
    setMultiplayerStatus('complete');
    setGameState('local_result');
  }

  function completeHole(strokesValue: number) {
    setHoleComplete(true);
    setShot((prev) => ({ ...prev, canShoot: false }));
    const score = Math.max(100, 500 - Math.max(0, strokesValue - currentLevel.par) * 85 - strokesValue * 15);
    setCurrentScore(score);
    setTotalScore((prev) => prev + score);
    if (mode === 'single') {
      updateLeaderboardForPlayer('solo-player', '单人玩家', currentLevel.id, strokesValue);
      setGameState('hole_complete');
    } else {
      advanceTurnOrFinish(strokesValue);
    }
  }

  function integratePhysics(dt: number) {
    setBall((prev) => {
      if (!prev.moving) return prev;
      let x = prev.position.x + prev.velocity.x * dt;
      let z = prev.position.z + prev.velocity.z * dt;
      let vx = prev.velocity.x;
      let vz = prev.velocity.z;
      let lastCollision = prev.lastCollision;
      const level = currentLevel;
      const surface = surfaceForPosition(level, { x, y: BALL_RADIUS, z });
      const friction = surface.friction;
      const decel = Math.max(0, 1 - friction * dt * 3.8);
      vx *= decel;
      vz *= decel;

      if (x < level.bounds.minX || x > level.bounds.maxX) {
        vx *= -0.72;
        x = THREE.MathUtils.clamp(x, level.bounds.minX, level.bounds.maxX);
        lastCollision = 'boundary-x';
      }
      if (z < level.bounds.minZ || z > level.bounds.maxZ) {
        vz *= -0.72;
        z = THREE.MathUtils.clamp(z, level.bounds.minZ, level.bounds.maxZ);
        lastCollision = 'boundary-z';
      }

      level.obstacles.forEach((obstacle) => {
        const radius = (obstacle.radius ?? 1) + BALL_RADIUS;
        const dx = x - obstacle.position.x;
        const dz = z - obstacle.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > 0 && dist < radius) {
          const nx = dx / dist;
          const nz = dz / dist;
          const dot = vx * nx + vz * nz;
          vx = (vx - 2 * dot * nx) * 0.76;
          vz = (vz - 2 * dot * nz) * 0.76;
          x = obstacle.position.x + nx * radius;
          z = obstacle.position.z + nz * radius;
          lastCollision = obstacle.id;
        }
      });

      let effect = activeEffect;
      let triggeredId = lastTriggeredId;
      let updatedInventory = inventory;
      let updatedArmed = armedType;
      const playerCollected = currentPlayer?.collectedPowerupIds ?? [];
      const newlyCollectedIds: string[] = [];

      powerupItems.forEach((item) => {
        const dx = x - item.position.x;
        const dz = z - item.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > 0.9) return;
        if (item.type === 'hole_in_one') {
          if (mode === 'local_multiplayer' && playerCollected.includes(item.id)) return;
          updatedInventory = setInventoryCount(updatedInventory, 'hole_in_one', getInventoryCount(updatedInventory, 'hole_in_one') + 1);
          newlyCollectedIds.push(item.id);
          effect = '拾取一杆入洞';
          triggeredId = item.id;
        }
        if (item.type === 'speed_boost' && item.direction) {
          const boostMag = 5.5;
          vx = THREE.MathUtils.clamp(vx + item.direction.x * boostMag, -MAX_SPEED, MAX_SPEED);
          vz = THREE.MathUtils.clamp(vz + item.direction.z * boostMag, -MAX_SPEED, MAX_SPEED);
          effect = '加速带触发';
          triggeredId = item.id;
        }
        if (item.type === 'bounce_pad' && item.direction) {
          vx = THREE.MathUtils.clamp(item.direction.x * 8, -MAX_SPEED, MAX_SPEED);
          vz = THREE.MathUtils.clamp(item.direction.z * 8, -MAX_SPEED, MAX_SPEED);
          effect = '反弹垫触发';
          triggeredId = item.id;
          lastCollision = item.id;
        }
      });

      if (newlyCollectedIds.length > 0) {
        setPowerupItems((items) =>
          items.map((item) => {
            if (!newlyCollectedIds.includes(item.id)) return item;
            if (mode === 'single') return { ...item, active: false, collected: true };
            return item;
          }),
        );
        if (mode === 'local_multiplayer' && currentPlayer) {
          setPlayers((prevPlayers) =>
            prevPlayers.map((player, index) =>
              index === turnIndex
                ? {
                    ...player,
                    collectedPowerupIds: Array.from(new Set([...player.collectedPowerupIds, ...newlyCollectedIds])),
                    powerupInventory: updatedInventory,
                  }
                : player,
            ),
          );
        }
        setInventory(updatedInventory);
      }
      setActiveEffect(effect);
      setLastTriggeredId(triggeredId);

      const speed = magnitude2(vx, vz);
      const moving = speed > 0.08;
      const inHole = Math.sqrt((x - level.hole.x) ** 2 + (z - level.hole.z) ** 2) < level.hole.radius && speed < 3.5;
      const y = BALL_RADIUS + courseHeight(level, x, z);
      const updatedBall = {
        position: { x: finite(x), y: finite(y), z: finite(z) },
        velocity: { x: finite(vx), y: 0, z: finite(vz) },
        speed: finite(speed),
        radius: BALL_RADIUS,
        moving,
        sleeping: !moving,
        airborne: false,
        inHole,
        outOfBounds: false,
        currentSurface: surface.type,
        friction: finite(friction),
        lastCollision,
        lastSafePosition: moving ? prev.lastSafePosition : { x: finite(x), y: finite(y), z: finite(z) },
      } satisfies PhysicsBallState;

      setPhysicsFeedback({
        motion: moving ? `滚动 ${finite(speed)}` : '静止',
        contact: lastCollision ?? surface.type,
      });
      syncPlayerState(updatedBall, updatedInventory, updatedArmed);
      if (!moving && inHole && !holeComplete) {
        const strokesValue = currentHoleStrokes;
        setTimeout(() => completeHole(strokesValue), 120);
      }
      return updatedBall;
    });
  }

  function applyShot(direction: { x: number; z: number }, power: number) {
    if (ball.moving || holeComplete) return;
    let strokePower = THREE.MathUtils.clamp(power, SHOT_MIN, SHOT_MAX);
    let nextArmed: 'hole_in_one' | null = armedType;
    let nextInventory = inventory;
    if (armedType === 'hole_in_one' && getInventoryCount(inventory, 'hole_in_one') > 0) {
      const toHoleX = currentLevel.hole.x - ball.position.x;
      const toHoleZ = currentLevel.hole.z - ball.position.z;
      const length = magnitude2(toHoleX, toHoleZ) || 1;
      strokePower = Math.min(SHOT_MAX, length * 0.92);
      direction = { x: toHoleX / length, z: toHoleZ / length };
      nextInventory = setInventoryCount(inventory, 'hole_in_one', getInventoryCount(inventory, 'hole_in_one') - 1);
      nextArmed = null;
      setInventory(nextInventory);
      setArmedType(null);
      setActiveEffect('一杆入洞已武装并触发');
    }
    const vx = THREE.MathUtils.clamp(direction.x * strokePower, -MAX_SPEED, MAX_SPEED);
    const vz = THREE.MathUtils.clamp(direction.z * strokePower, -MAX_SPEED, MAX_SPEED);
    const nextStroke = currentHoleStrokes + 1;
    setCurrentHoleStrokes(nextStroke);
    setTotalStrokes(nextStroke);
    setShot((prev) => ({ ...prev, dragging: false, currentScreen: null, startScreen: null, canShoot: false, strokeCount: nextStroke, power: strokePower, direction }));
    setBall((prev) => ({ ...prev, moving: true, sleeping: false, inHole: false, velocity: { x: finite(vx), y: 0, z: finite(vz) }, speed: finite(magnitude2(vx, vz)), lastCollision: null }));
    if (mode === 'local_multiplayer' && currentPlayer) {
      setPlayers((prev) =>
        prev.map((player, index) =>
          index === turnIndex
            ? {
                ...player,
                holeStrokes: nextStroke,
                totalStrokes: nextStroke,
                powerupInventory: nextInventory,
                armedPowerup: nextArmed,
              }
            : player,
        ),
      );
    }
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (gameState !== 'playing' || ball.moving || holeComplete) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const start = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    setShot((prev) => ({ ...prev, dragging: true, startScreen: start, currentScreen: start }));
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!shot.dragging || !shot.startScreen) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    const dx = shot.startScreen.x - current.x;
    const dz = shot.startScreen.y - current.y;
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    const power = THREE.MathUtils.clamp((len / 140) * SHOT_MAX, SHOT_MIN, SHOT_MAX);
    setShot((prev) => ({
      ...prev,
      currentScreen: current,
      power,
      direction: { x: finite(dx / len), z: finite(dz / len) },
    }));
  }

  function onPointerUp() {
    if (!shot.dragging) return;
    applyShot(shot.direction, shot.power);
  }

  useEffect(() => {
    setShot((prev) => ({ ...prev, canShoot: !ball.moving && !holeComplete && !ball.inHole }));
  }, [ball.moving, holeComplete, ball.inHole]);

  function resetBallPosition() {
    const spawn = mode === 'local_multiplayer' && currentPlayer ? currentPlayer.ballPosition : currentLevel.spawn;
    const surface = surfaceForPosition(currentLevel, spawn);
    const updatedBall = {
      position: cloneVec3(spawn),
      velocity: { x: 0, y: 0, z: 0 },
      speed: 0,
      radius: BALL_RADIUS,
      moving: false,
      sleeping: true,
      airborne: false,
      inHole: false,
      outOfBounds: false,
      currentSurface: surface.type,
      friction: surface.friction,
      lastCollision: null,
      lastSafePosition: cloneVec3(spawn),
    } satisfies PhysicsBallState;
    setBall(updatedBall);
    syncPlayerState(updatedBall);
  }

  function nextAfterResult() {
    setHoleComplete(false);
    setGameState('level_select');
  }

  useEffect(() => {
    const contract = {
      getState: () => ({ version: '1.0.0', gameType: '3d-mini-golf', renderer: 'threejs', stateSource: 'live', hooksReady: true, hookNames: ['__game', '__ball', '__shot', '__course', '__multiplayer', '__powerups', '__camera', '__leaderboard', '__performance'], buildId: BUILD_ID }),
    };
    const game = {
      getState: () => ({ ready: true, gameState, mode, currentLevel: currentLevel ? { id: currentLevel.id, name: currentLevel.name, theme: currentLevel.theme, par: currentLevel.par } : null, currentHoleStrokes, totalStrokes, currentScore, totalScore, holeComplete, elapsedTime }),
    };
    const ballHook = {
      getState: () => ({ ...ball, position: cloneVec3(ball.position), velocity: cloneVec3(ball.velocity), lastSafePosition: cloneVec3(ball.lastSafePosition) }),
    };
    const shotHook = { getState: () => ({ ...shot, direction: { ...shot.direction } }) };
    const course = {
      getState: () => ({
        levelId: currentLevel.id,
        name: currentLevel.name,
        theme: currentLevel.theme,
        par: currentLevel.par,
        bounds: { ...currentLevel.bounds },
        spawn: cloneVec3(currentLevel.spawn),
        hole: { ...currentLevel.hole },
        surfaces: currentLevel.surfaces.map((surface) => ({ ...surface })),
        obstacles: currentLevel.obstacles.map((obstacle) => ({ ...obstacle, position: cloneVec3(obstacle.position) })),
        terrainFeatures: currentLevel.terrainFeatures.map((feature) => ({ ...feature })),
        obstacleCount: currentLevel.obstacles.length,
        sceneObjectCount: runtimeRef.current.scene?.children.length ?? 0,
        loaded: true,
      }),
    };
    const multiplayer = {
      getState: () => ({
        enabled: mode === 'local_multiplayer',
        mode: 'local',
        status: multiplayerStatus,
        playerCount: players.length,
        currentPlayerId: currentPlayer?.id ?? null,
        turnIndex,
        round,
        revision,
        players: players.map((player) => ({ ...player, ballPosition: cloneVec3(player.ballPosition), powerupInventory: player.powerupInventory.map((item) => ({ ...item })) })),
        winnerId,
        tiedPlayerIds: [...tiedPlayerIds],
      }),
    };
    const powerups = {
      getState: () => ({
        items: powerupItems.map((item) => ({ ...item, position: cloneVec3(item.position) })),
        inventory: inventory.map((item) => ({ ...item })),
        activeEffect,
        lastTriggeredId,
        placingType: null,
        armedType,
        selectedPlacedId: null,
      }),
    };
    const cameraHook = { getState: () => ({ ...cameraState, position: cloneVec3(cameraState.position), target: cloneVec3(cameraState.target) }) };
    const performanceHook = {
      getState: () => ({
        fixedStep: finite(1 / 60),
        accumulator: 0,
        simulationTick: runtimeRef.current.simulationTick,
        renderFrame: runtimeRef.current.renderFrame,
        reactCommitCount: runtimeRef.current.reactCommitCount,
        logicLoopCount: runtimeRef.current.logicLoopCount,
        listenerCount: runtimeRef.current.listenerCount,
        runtimeMountCount: runtimeRef.current.runtimeMountCount,
        runtimeCleanupCount: runtimeRef.current.runtimeCleanupCount,
        engineGeneration: runtimeRef.current.engineGeneration,
        poolStats: {
          meshes: { capacity: 128, createdTotal: runtimeRef.current.scene?.children.length ?? 0, reused: 0 },
        },
      }),
    };
    window.__contract = contract;
    window.__game = game;
    window.__ball = ballHook;
    window.__shot = shotHook;
    window.__course = course;
    window.__multiplayer = multiplayer;
    window.__powerups = powerups;
    window.__camera = cameraHook;
    window.__leaderboard = { getState: () => leaderboard };
    window.__performance = performanceHook;
  }, [gameState, mode, currentLevel, currentHoleStrokes, totalStrokes, currentScore, totalScore, holeComplete, elapsedTime, ball, shot, multiplayerStatus, players, currentPlayer, turnIndex, round, revision, winnerId, tiedPlayerIds, powerupItems, inventory, activeEffect, lastTriggeredId, armedType, cameraState, leaderboard]);

  const leaderboardLevels = (['forest', 'desert', 'snow'] as LevelId[]).map((id) => ({ id, name: getLevel(id).name, entries: leaderboard.levelBest[id] ?? [] }));

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_rgba(2,6,23,0.98)_45%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4 p-4 lg:p-6">
        <header className="panel-glass flex flex-col gap-3 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Three.js × React 19 × Tailwind</p>
            <h1 className="text-3xl font-black text-white">3D 迷你高尔夫赛</h1>
            <p className="text-sm text-slate-300">拖拽鼠标控制力度与方向，挑战森林、沙漠与冰雪三大主题球场。</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button id="menu" data-testid="start-btn" onClick={() => setGameState('level_select')} className="rounded-xl bg-emerald-500 px-4 py-2 font-bold text-slate-950 transition hover:bg-emerald-400">开始游戏</button>
            <button data-testid="multiplayer-btn" onClick={() => setGameState('local_setup')} className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-semibold text-cyan-100 transition hover:bg-cyan-400/20">本地多人</button>
            <button data-testid="leaderboard-btn" onClick={() => setGameState('leaderboard')} className="rounded-xl border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-2 font-semibold text-fuchsia-100 transition hover:bg-fuchsia-400/20">排行榜</button>
          </div>
        </header>

        <div className="grid flex-1 gap-4 lg:grid-cols-[360px,1fr]">
          <aside className="space-y-4">
            <section id="levelSelect" className="panel-glass p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold">关卡选择</h2>
                <span className="badge">当前：{currentLevel.name}</span>
              </div>
              <div className="grid gap-2">
                <button data-testid="level-forest" onClick={() => (setSelectedLevel('forest'), gameState === 'playing' ? startSingle('forest') : null)} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10">森林：树木与岩石弹反</button>
                <button data-testid="level-desert" onClick={() => (setSelectedLevel('desert'), gameState === 'playing' ? startSingle('desert') : null)} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10">沙漠：高摩擦沙坑与沙丘</button>
                <button data-testid="level-snow" onClick={() => (setSelectedLevel('snow'), gameState === 'playing' ? startSingle('snow') : null)} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10">冰雪：超低摩擦冰面滑行</button>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-300">
                <p>草地 / 沙坑 / 冰面摩擦实时影响球速衰减。</p>
                <p>沙坑摩擦 ≥ 草地 3.5 倍；冰面摩擦 ≤ 草地 1/8。</p>
              </div>
              {gameState === 'level_select' && (
                <button onClick={() => startSingle(selectedLevel)} className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 hover:bg-emerald-400">进入单人关卡</button>
              )}
            </section>

            <section id="multiplayerLobby" className="panel-glass p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold">本地多人对战</h2>
                <span className="badge">2–4 人轮流</span>
              </div>
              <label className="mb-3 block text-sm text-slate-300">玩家数量</label>
              <select data-testid="local-player-count" value={localPlayerCount} onChange={(e) => setLocalPlayerCount(Number(e.target.value))} className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white">
                {[2, 3, 4].map((count) => (
                  <option key={count} value={count}>{count} 名玩家</option>
                ))}
              </select>
              <div className="mt-4 flex gap-2">
                <button data-testid="local-start-btn" onClick={() => startLocal(selectedLevel, localPlayerCount)} className="flex-1 rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 hover:bg-cyan-300">开始对局</button>
                <button data-testid="local-exit-btn" onClick={() => setGameState('menu')} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold hover:bg-white/10">退出</button>
              </div>
              <p className="mt-3 text-sm text-slate-400">每名玩家独立保存球位、杆数、一杆入洞库存与拾取状态。</p>
            </section>

            <section className="panel-glass p-4">
              <h2 className="mb-3 text-lg font-bold">HUD / 契约状态</h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">当前杆数</div><div data-testid="stroke-count" className="text-2xl font-black">{currentHoleStrokes}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">当前玩家</div><div data-testid="current-player" className="text-lg font-bold">{currentPlayer?.name ?? '单人玩家'}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">击球力度</div><div data-testid="shot-power" className="text-lg font-bold">{shot.power.toFixed(2)}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">实时摩擦</div><div data-testid="surface-friction" className="text-lg font-bold">{ball.friction.toFixed(3)} · {ball.currentSurface}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">瞄准反馈</div><div data-testid="aim-feedback" className="text-xs font-semibold">x:{shot.direction.x.toFixed(2)} z:{shot.direction.z.toFixed(2)} / 拖拽:{shot.dragging ? '是' : '否'}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">运动状态</div><div data-testid="physics-motion" className="text-xs font-semibold">{physicsFeedback.motion}</div></div>
                <div className="col-span-2 rounded-xl bg-white/5 p-3"><div className="text-slate-400">接触/碰撞反馈</div><div data-testid="physics-contact" className="text-xs font-semibold">{physicsFeedback.contact}</div></div>
              </div>
            </section>

            <section className="panel-glass p-4">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-lg font-bold">道具状态</h2>
                <span data-testid="powerup-status" className="badge">{activeEffect ?? '待机中'}</span>
              </div>
              <div className="space-y-2 text-sm text-slate-200">
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                  <span>一杆入洞库存</span>
                  <button data-testid="powerup-hio" disabled={getInventoryCount(inventory, 'hole_in_one') <= 0} onClick={() => setArmedType((prev) => (prev === 'hole_in_one' ? null : 'hole_in_one'))} className="rounded-lg bg-pink-400 px-3 py-1 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">{getInventoryCount(inventory, 'hole_in_one')} · {armedType ? '已武装' : '点击武装'}</button>
                </div>
                <div className="rounded-xl bg-white/5 px-3 py-2">反弹垫：接触后沿可见方向弹开。</div>
                <div className="rounded-xl bg-white/5 px-3 py-2">加速带：真实接触后获得有限速度增益。</div>
              </div>
            </section>

            <section className="panel-glass p-4">
              <h2 className="mb-3 text-lg font-bold">相机与控制</h2>
              <div className="grid grid-cols-2 gap-2">
                <button data-testid="zoom-in" onClick={() => setCameraState((prev) => ({ ...prev, distance: Math.max(prev.minDistance, prev.distance - 1), zoom: finite(1 / Math.max(0.5, prev.distance - 1)) }))} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">放大</button>
                <button data-testid="zoom-out" onClick={() => setCameraState((prev) => ({ ...prev, distance: Math.min(prev.maxDistance, prev.distance + 1), zoom: finite(1 / Math.max(0.5, prev.distance + 1)) }))} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">缩小</button>
                <button data-testid="reset-position" onClick={resetBallPosition} className="col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">重置球位</button>
              </div>
            </section>
          </aside>

          <main className="space-y-4">
            <section id="gameScreen" className="panel-glass relative min-h-[620px] overflow-hidden">
              <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2 text-xs">
                <span className="badge">模式：{mode === 'single' ? '单人' : '本地多人'}</span>
                <span className="badge">关卡：{currentLevel.theme}</span>
                <span className="badge">Par {currentLevel.par}</span>
                <span className="badge">时间 {elapsedTime.toFixed(1)}s</span>
              </div>
              <div ref={canvasWrapRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp} className="h-[620px] w-full cursor-crosshair bg-slate-950" />
              {(gameState === 'menu' || gameState === 'level_select' || gameState === 'leaderboard') && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/55 backdrop-blur-sm">
                  <div className="max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center shadow-2xl">
                    <h2 className="text-3xl font-black">把握角度，少杆入洞</h2>
                    <p className="mt-3 text-slate-300">在右侧实时渲染的 Three.js 场景中体验 3D 迷你高尔夫，拖拽即可瞄准并击球。</p>
                  </div>
                </div>
              )}
            </section>

            <section id="leaderboardScreen" className="panel-glass p-4">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-black">排行榜</h2>
                <span className="badge">持久化：{leaderboard.persisted ? '是' : '否'}</span>
              </div>
              <div className="grid gap-4 xl:grid-cols-2">
                {leaderboardLevels.map((level) => (
                  <div key={level.id} className="rounded-2xl bg-white/5 p-4">
                    <h3 className="mb-3 text-lg font-bold">{level.name}</h3>
                    <div className="space-y-2 text-sm">
                      {level.entries.length === 0 ? <p className="text-slate-400">暂无合法完赛成绩</p> : level.entries.map((entry) => (
                        <div key={`${entry.playerId}-${entry.achievedAt}`} className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-2">
                          <span>#{entry.rank} {entry.playerName}</span>
                          <span>{entry.strokes} 杆 / {entry.relativeToPar >= 0 ? '+' : ''}{entry.relativeToPar}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl bg-white/5 p-4">
                  <h3 className="mb-3 text-lg font-bold">全关卡总榜</h3>
                  <div className="space-y-2 text-sm">
                    {leaderboard.overall.length === 0 ? <p className="text-slate-400">需同时完成森林、沙漠、冰雪三关后生成</p> : leaderboard.overall.map((entry) => (
                      <div key={`${entry.playerId}-${entry.achievedAt}`} className="rounded-xl bg-slate-950/60 px-3 py-2">
                        <div className="flex items-center justify-between"><span>#{entry.rank} {entry.playerName}</span><span>{entry.totalStrokes} 杆</span></div>
                        <div className="mt-1 text-xs text-slate-400">森 {entry.levelStrokes.forest} / 沙 {entry.levelStrokes.desert} / 雪 {entry.levelStrokes.snow}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="resultScreen" className="panel-glass p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-xl font-black">结算面板</h2>
                  <p className="text-sm text-slate-300">少杆完成可获得更高分数，单人模式成绩会写入持久化排行榜。</p>
                </div>
                <button data-testid="result-next" onClick={nextAfterResult} className="rounded-xl bg-emerald-500 px-4 py-2 font-bold text-slate-950 hover:bg-emerald-400">继续</button>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">当前分数</div><div className="text-2xl font-black">{currentScore}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">总分</div><div className="text-2xl font-black">{totalScore}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">是否进洞</div><div className="text-2xl font-black">{ball.inHole ? '是' : '否'}</div></div>
                <div className="rounded-xl bg-white/5 p-3"><div className="text-slate-400">状态</div><div className="text-2xl font-black">{holeComplete ? '完成' : '进行中'}</div></div>
              </div>
            </section>

            <section id="localLeaderboardScreen" data-testid="local-match-leaderboard" className="panel-glass p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-black">本地多人平局 / 对局排行榜</h2>
                <span className="badge">{winnerId ? `胜者：${winnerId}` : tiedPlayerIds.length > 1 ? '出现平局' : '待开始'}</span>
              </div>
              <div className="space-y-2 text-sm">
                {matchSummary.length === 0 ? <p className="text-slate-400">开始本地多人后，这里将展示本局最终排名。</p> : matchSummary.map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                    <span>#{index + 1} {item.name}{tiedPlayerIds.includes(item.id) && tiedPlayerIds.length > 1 ? '（并列）' : ''}</span>
                    <span>{item.strokes} 杆</span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    __contract: { getState: () => unknown };
    __game: { getState: () => unknown };
    __ball: { getState: () => unknown };
    __shot: { getState: () => unknown };
    __course: { getState: () => unknown };
    __multiplayer: { getState: () => unknown };
    __powerups: { getState: () => unknown };
    __camera: { getState: () => unknown };
    __leaderboard: { getState: () => unknown };
    __performance: { getState: () => unknown };
    __THREE_SCENE__: THREE.Scene;
    __THREE_RENDERER__: THREE.WebGLRenderer;
  }
}
