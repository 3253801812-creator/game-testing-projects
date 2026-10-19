import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type LevelId = 'forest' | 'desert' | 'snow';
type SurfaceType = 'grass' | 'sand' | 'ice';
type PowerupType = 'bounce_pad' | 'speed_boost' | 'hole_in_one';
type GameState =
  | 'menu'
  | 'level_select'
  | 'local_setup'
  | 'playing'
  | 'hole_complete'
  | 'tournament_complete'
  | 'local_result'
  | 'leaderboard';
type GameMode = 'single' | 'local_multiplayer';

type Vec3 = { x: number; y: number; z: number };
type Vec2 = { x: number; z: number };

type SurfaceRegion = {
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
  height?: number;
};

type TerrainFeature = Record<string, unknown>;

type CoursePowerup = {
  id: string;
  type: PowerupType;
  position: Vec3;
  direction?: Vec2;
};

type LevelData = {
  id: LevelId;
  name: string;
  theme: string;
  par: number;
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  spawn: Vec3;
  hole: { x: number; y: number; z: number; radius: number };
  surfaces: SurfaceRegion[];
  obstacles: Obstacle[];
  terrainFeatures: TerrainFeature[];
  powerups: CoursePowerup[];
  ambient: string;
  sky: string;
  fairway: string;
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
  placedBouncePads: Array<{ id: string; position: Vec3 }>;
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

type ShotState = {
  dragging: boolean;
  canShoot: boolean;
  startScreen: { x: number; y: number } | null;
  currentScreen: { x: number; y: number } | null;
  direction: Vec2;
  power: number;
  minPower: number;
  maxPower: number;
  strokeCount: number;
};

type BallState = {
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

type PowerupsState = {
  items: Array<{
    id: string;
    type: PowerupType;
    position: Vec3;
    active: boolean;
    collected: boolean;
    direction?: Vec2;
  }>;
  inventory: Array<{ type: PowerupType; count: number }>;
  activeEffect: string | null;
  lastTriggeredId: string | null;
  placingType?: string | null;
  armedType?: string | null;
  selectedPlacedId?: string | null;
};

type MultiplayerState = {
  enabled: boolean;
  mode: 'local';
  status: 'setup' | 'playing' | 'complete';
  playerCount: number;
  currentPlayerId: string | null;
  turnIndex: number;
  round: number;
  revision: number;
  players: PlayerState[];
  winnerId: string | null;
  tiedPlayerIds: string[];
};

type CameraState = {
  mode: 'follow' | 'free';
  position: Vec3;
  target: Vec3;
  distance: number;
  minDistance: number;
  maxDistance: number;
  zoom: number;
  angle?: number;
  pitch?: number;
};

type CourseState = {
  levelId: LevelId;
  name: string;
  theme: string;
  par: number;
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  spawn: Vec3;
  hole: { x: number; y: number; z: number; radius: number };
  surfaces: SurfaceRegion[];
  obstacles: Obstacle[];
  terrainFeatures: TerrainFeature[];
  obstacleCount: number;
  sceneObjectCount: number;
  loaded: boolean;
};

type GameStatus = {
  ready: boolean;
  gameState: GameState;
  mode: GameMode;
  currentLevel: { id: LevelId; name: string; theme: string; par: number } | null;
  currentHoleStrokes: number;
  totalStrokes: number;
  currentScore: number;
  totalScore: number;
  holeComplete: boolean;
  elapsedTime: number;
};

type PerformanceState = {
  fixedStep: number;
  accumulator: number;
  simulationTick: number;
  renderFrame: number;
  reactCommitCount: number;
  logicLoopCount: number;
  listenerCount: number;
  runtimeMountCount: number;
  runtimeCleanupCount: number;
  engineGeneration: number;
  poolStats: Record<string, { capacity: number; createdTotal: number; reused: number }>;
};

type RuntimeRefs = {
  ballMesh?: THREE.Mesh;
  holeMesh?: THREE.Mesh;
  holeFlag?: THREE.Mesh;
  group?: THREE.Group;
  pickups: Map<string, THREE.Object3D>;
  obstacles: Map<string, THREE.Object3D>;
  bouncePads: Map<string, THREE.Object3D>;
  renderer?: THREE.WebGLRenderer;
  camera?: THREE.PerspectiveCamera;
  scene?: THREE.Scene;
};

const BUILD_ID = `build-${new Date().toISOString()}`;
const LEADERBOARD_KEY = 'mini-golf-3d-leaderboard-v1';
const PLAYER_NAME = 'Guest Golfer';
const BALL_RADIUS = 0.35;
const POWER_SCALE = 0.18;
const MAX_BALL_SPEED = 13;
const HOLE_SINK_SPEED = 0.75;
const FIXED_STEP = 1 / 60;
const MIN_POWER = 0.4;
const MAX_POWER = 100;
const CAMERA_MIN_DISTANCE = 8;
const CAMERA_MAX_DISTANCE = 26;

const inventoryTemplate = (): Array<{ type: PowerupType; count: number }> => [
  { type: 'bounce_pad', count: 0 },
  { type: 'speed_boost', count: 0 },
  { type: 'hole_in_one', count: 0 },
];

const deepClone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const toVec3 = (v: THREE.Vector3): Vec3 => ({ x: round(v.x), y: round(v.y), z: round(v.z) });
const vec3 = (x: number, y: number, z: number): Vec3 => ({ x, y, z });
const round = (value: number) => Number(value.toFixed(4));
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const distance2D = (a: Vec3, b: Vec3) => Math.hypot(a.x - b.x, a.z - b.z);

const makeRanked = <T extends { achievedAt: number; playerId: string }>(
  items: T[],
  scoreSelector: (item: T) => number,
) =>
  items
    .slice()
    .sort((a, b) => {
      const score = scoreSelector(a) - scoreSelector(b);
      if (score !== 0) return score;
      const time = a.achievedAt - b.achievedAt;
      if (time !== 0) return time;
      return a.playerId.localeCompare(b.playerId);
    })
    .map((item, index) => ({ ...item, rank: index + 1 }));

const LEVELS: Record<LevelId, LevelData> = {
  forest: {
    id: 'forest',
    name: '森林回旋谷',
    theme: 'Forest',
    par: 4,
    bounds: { minX: -17, maxX: 17, minZ: -27, maxZ: 15 },
    spawn: vec3(0, 0.35, 12),
    hole: { x: 0, y: 0, z: -21, radius: 0.7 },
    ambient: '#10331f',
    sky: '#0f172a',
    fairway: '#3f7f45',
    surfaces: [
      { id: 'forest-fairway', type: 'grass', friction: 0.9, bounds: { minX: -14, maxX: 14, minZ: -24, maxZ: 14 } },
      { id: 'forest-bunker', type: 'sand', friction: 3.4, bounds: { minX: -6.8, maxX: -1.3, minZ: -9, maxZ: -2.5 } },
      { id: 'forest-bunker-2', type: 'sand', friction: 3.6, bounds: { minX: 2.2, maxX: 8.2, minZ: -18.5, maxZ: -12.3 } },
    ],
    obstacles: [
      { id: 'tree-1', type: 'tree', position: vec3(-5.8, 0.8, 4.8), solid: true, radius: 1.25, height: 3 },
      { id: 'tree-2', type: 'tree', position: vec3(5.6, 0.8, -4.6), solid: true, radius: 1.2, height: 3.2 },
      { id: 'rock-1', type: 'rock', position: vec3(0.2, 0.55, -12.3), solid: true, radius: 1.15, height: 1.1 },
      { id: 'rock-2', type: 'rock', position: vec3(-8.6, 0.55, -16.2), solid: true, radius: 1.3, height: 1.15 },
    ],
    terrainFeatures: [
      { id: 'ridge-forest-left', kind: 'mound', center: vec3(-9, 0, -3), radius: 3.5, height: 0.65 },
      { id: 'ridge-forest-right', kind: 'mound', center: vec3(8, 0, -14), radius: 3.8, height: 0.7 },
    ],
    powerups: [
      { id: 'forest-speed', type: 'speed_boost', position: vec3(7.5, 0.18, 3) },
      { id: 'forest-hio', type: 'hole_in_one', position: vec3(-10.5, 0.18, -7.2) },
      { id: 'forest-pad', type: 'bounce_pad', position: vec3(3.6, 0.08, -14.5) },
    ],
  },
  desert: {
    id: 'desert',
    name: '沙漠风暴坑',
    theme: 'Desert',
    par: 5,
    bounds: { minX: -18, maxX: 18, minZ: -28, maxZ: 16 },
    spawn: vec3(-11, 0.35, 13),
    hole: { x: 9, y: 0, z: -22, radius: 0.76 },
    ambient: '#4b2d12',
    sky: '#1f2937',
    fairway: '#6f9b56',
    surfaces: [
      { id: 'desert-fairway', type: 'grass', friction: 0.86, bounds: { minX: -16, maxX: 15, minZ: -25, maxZ: 14 } },
      { id: 'desert-bunker-main', type: 'sand', friction: 3.5, bounds: { minX: -4.5, maxX: 5.5, minZ: -6.5, maxZ: 4.5 } },
      { id: 'desert-bunker-hole', type: 'sand', friction: 3.7, bounds: { minX: 5.5, maxX: 14.5, minZ: -24.5, maxZ: -15.5 } },
    ],
    obstacles: [
      { id: 'dune-1', type: 'dune', position: vec3(-8.2, 0.8, -2.2), solid: true, radius: 1.55, height: 1.6 },
      { id: 'dune-2', type: 'dune', position: vec3(1.7, 0.8, -11.7), solid: true, radius: 1.75, height: 1.5 },
      { id: 'stone-arch', type: 'rock', position: vec3(9.5, 0.9, -8.6), solid: true, radius: 1.45, height: 2.4 },
      { id: 'stone-2', type: 'rock', position: vec3(-13.2, 0.7, -15.2), solid: true, radius: 1.35, height: 1.4 },
    ],
    terrainFeatures: [
      { id: 'desert-slope', kind: 'slope', axis: 'x', strength: 0.06, region: { minX: -16, maxX: 15, minZ: -25, maxZ: 14 } },
      { id: 'desert-dune-ridge', kind: 'mound', center: vec3(4.5, 0, -17), radius: 4, height: 0.75 },
    ],
    powerups: [
      { id: 'desert-speed', type: 'speed_boost', position: vec3(-1.4, 0.18, 10), direction: { x: 0.95, z: -0.2 } },
      { id: 'desert-hio', type: 'hole_in_one', position: vec3(-14.4, 0.18, -10.2) },
      { id: 'desert-pad', type: 'bounce_pad', position: vec3(10.4, 0.08, -16.2) },
    ],
  },
  snow: {
    id: 'snow',
    name: '冰雪极光岭',
    theme: 'Snow',
    par: 4,
    bounds: { minX: -18, maxX: 18, minZ: -28, maxZ: 18 },
    spawn: vec3(0, 0.35, 14),
    hole: { x: -12, y: 0, z: -21, radius: 0.72 },
    ambient: '#163851',
    sky: '#020617',
    fairway: '#b0d6ff',
    surfaces: [
      { id: 'snow-grass', type: 'grass', friction: 0.88, bounds: { minX: -16, maxX: 16, minZ: -25, maxZ: 16 } },
      { id: 'snow-ice-main', type: 'ice', friction: 0.1, bounds: { minX: -6.5, maxX: 7.5, minZ: -15.5, maxZ: 8.5 } },
      { id: 'snow-ice-lane', type: 'ice', friction: 0.09, bounds: { minX: -15.5, maxX: -8.5, minZ: -24.5, maxZ: -12.5 } },
      { id: 'snow-sand-bank', type: 'sand', friction: 3.6, bounds: { minX: 8.5, maxX: 14.5, minZ: -11.5, maxZ: -3.5 } },
    ],
    obstacles: [
      { id: 'snowbank-1', type: 'snowbank', position: vec3(10.8, 0.9, 6.4), solid: true, radius: 1.5, height: 1.55 },
      { id: 'snowbank-2', type: 'snowbank', position: vec3(-4.2, 0.8, -4.6), solid: true, radius: 1.45, height: 1.5 },
      { id: 'ice-crystal-1', type: 'ice_crystal', position: vec3(4.5, 1, -18), solid: true, radius: 1.2, height: 2.7 },
      { id: 'ice-crystal-2', type: 'ice_crystal', position: vec3(-10, 1, -9), solid: true, radius: 1.25, height: 2.8 },
    ],
    terrainFeatures: [
      { id: 'snow-ridge', kind: 'mound', center: vec3(8, 0, 7), radius: 4, height: 0.7 },
      { id: 'ice-channel', kind: 'slope', axis: 'z', strength: -0.045, region: { minX: -6.5, maxX: 7.5, minZ: -15.5, maxZ: 8.5 } },
    ],
    powerups: [
      { id: 'snow-speed', type: 'speed_boost', position: vec3(1.5, 0.18, 7), direction: { x: -0.2, z: -1 } },
      { id: 'snow-hio', type: 'hole_in_one', position: vec3(12.5, 0.18, -7.5) },
      { id: 'snow-pad', type: 'bounce_pad', position: vec3(-10.5, 0.08, -16.8) },
    ],
  },
};

const initialLeaderboard = (): LeaderboardState => ({
  levelBest: { forest: [], desert: [], snow: [] },
  overall: [],
  persisted: false,
});

const loadLeaderboard = (): LeaderboardState => {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    if (!raw) return initialLeaderboard();
    const parsed = JSON.parse(raw) as LeaderboardState;
    return {
      levelBest: {
        forest: parsed.levelBest?.forest ?? [],
        desert: parsed.levelBest?.desert ?? [],
        snow: parsed.levelBest?.snow ?? [],
      },
      overall: parsed.overall ?? [],
      persisted: true,
    };
  } catch {
    return initialLeaderboard();
  }
};

const getInventoryCount = (inventory: Array<{ type: PowerupType; count: number }>, type: PowerupType) =>
  inventory.find((entry) => entry.type === type)?.count ?? 0;

const mutateInventory = (
  inventory: Array<{ type: PowerupType; count: number }>,
  type: PowerupType,
  delta: number,
) => inventory.map((entry) => (entry.type === type ? { ...entry, count: Math.max(0, entry.count + delta) } : entry));

const createPlayers = (count: number, spawn: Vec3): PlayerState[] =>
  Array.from({ length: count }, (_, index) => ({
    id: `P${index + 1}`,
    name: `玩家 ${index + 1}`,
    holeStrokes: 0,
    totalStrokes: 0,
    finished: false,
    ballPosition: deepClone(spawn),
    powerupInventory: inventoryTemplate(),
    armedPowerup: null,
    collectedPowerupIds: [],
    placedBouncePads: [],
  }));

function terrainHeight(course: LevelData, x: number, z: number): number {
  let height = 0;
  for (const feature of course.terrainFeatures) {
    if (feature.kind === 'mound' && feature.center && feature.radius && feature.height) {
      const center = feature.center as Vec3;
      const radius = feature.radius as number;
      const dist = Math.hypot(x - center.x, z - center.z);
      if (dist < radius) {
        height += (1 - dist / radius) * (feature.height as number);
      }
    }
    if (feature.kind === 'slope' && feature.region && feature.axis && feature.strength) {
      const region = feature.region as { minX: number; maxX: number; minZ: number; maxZ: number };
      if (x >= region.minX && x <= region.maxX && z >= region.minZ && z <= region.maxZ) {
        if (feature.axis === 'x') {
          height += ((x - region.minX) / Math.max(1, region.maxX - region.minX) - 0.5) * (feature.strength as number) * 14;
        } else {
          height += ((z - region.minZ) / Math.max(1, region.maxZ - region.minZ) - 0.5) * (feature.strength as number) * 14;
        }
      }
    }
  }
  return height;
}

function getSurfaceForPosition(course: LevelData, position: Vec3): SurfaceRegion {
  for (let index = course.surfaces.length - 1; index >= 0; index -= 1) {
    const surface = course.surfaces[index];
    if (surface.bounds) {
      const { minX, maxX, minZ, maxZ } = surface.bounds;
      if (position.x >= minX && position.x <= maxX && position.z >= minZ && position.z <= maxZ) {
        return surface;
      }
    }
  }
  return course.surfaces[0];
}

function buildLeaderboard(previous: LeaderboardState, levelId: LevelId, playerId: string, playerName: string, strokes: number, par: number): LeaderboardState {
  const timestamp = Date.now();
  const nextLevelBest = { ...previous.levelBest };
  const existing = nextLevelBest[levelId].find((entry) => entry.playerId === playerId);
  const shouldUpdate = !existing || strokes < existing.strokes;

  if (shouldUpdate) {
    const without = nextLevelBest[levelId].filter((entry) => entry.playerId !== playerId);
    nextLevelBest[levelId] = makeRanked(
      [
        ...without,
        {
          playerId,
          playerName,
          strokes,
          rank: 0,
          par,
          relativeToPar: strokes - par,
          achievedAt: existing?.achievedAt ?? timestamp,
        },
      ],
      (item) => item.strokes,
    );
  }

  const overallCandidates = new Map<string, { playerName: string; levelStrokes: { forest?: number; desert?: number; snow?: number }; achievedAt: number }>();
  (Object.keys(nextLevelBest) as LevelId[]).forEach((key) => {
    nextLevelBest[key].forEach((entry) => {
      const candidate = overallCandidates.get(entry.playerId) ?? {
        playerName: entry.playerName,
        levelStrokes: {},
        achievedAt: entry.achievedAt,
      };
      candidate.levelStrokes[key] = entry.strokes;
      candidate.achievedAt = Math.min(candidate.achievedAt, entry.achievedAt);
      overallCandidates.set(entry.playerId, candidate);
    });
  });

  const overall = makeRanked(
    Array.from(overallCandidates.entries())
      .filter(([, value]) => value.levelStrokes.forest && value.levelStrokes.desert && value.levelStrokes.snow)
      .map(([playerKey, value]) => ({
        playerId: playerKey,
        playerName: value.playerName,
        levelStrokes: {
          forest: value.levelStrokes.forest as number,
          desert: value.levelStrokes.desert as number,
          snow: value.levelStrokes.snow as number,
        },
        totalStrokes:
          (value.levelStrokes.forest as number) +
          (value.levelStrokes.desert as number) +
          (value.levelStrokes.snow as number),
        rank: 0,
        achievedAt: value.achievedAt,
      })),
    (item) => item.totalStrokes,
  );

  const finalState = { levelBest: nextLevelBest, overall, persisted: true };
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(finalState));
  return finalState;
}

export function App() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const runtimeRef = useRef<RuntimeRefs>({ pickups: new Map(), obstacles: new Map(), bouncePads: new Map() });
  const commitCountRef = useRef(0);
  const performanceRef = useRef<PerformanceState>({
    fixedStep: FIXED_STEP,
    accumulator: 0,
    simulationTick: 0,
    renderFrame: 0,
    reactCommitCount: 0,
    logicLoopCount: 0,
    listenerCount: 0,
    runtimeMountCount: 0,
    runtimeCleanupCount: 0,
    engineGeneration: 1,
    poolStats: {
      pickups: { capacity: 12, createdTotal: 0, reused: 0 },
      obstacles: { capacity: 24, createdTotal: 0, reused: 0 },
      bouncePads: { capacity: 12, createdTotal: 0, reused: 0 },
    },
  });

  const [gameState, setGameState] = useState<GameState>('menu');
  const [mode, setMode] = useState<GameMode>('single');
  const [currentLevelId, setCurrentLevelId] = useState<LevelId>('forest');
  const [selectedPlayerCount, setSelectedPlayerCount] = useState(2);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [cameraDistance, setCameraDistance] = useState(14);
  const cameraZoom = 1;
  const [leaderboard, setLeaderboard] = useState<LeaderboardState>(() => loadLeaderboard());
  const [currentScore, setCurrentScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalStrokes, setTotalStrokes] = useState(0);
  const [localRevision, setLocalRevision] = useState(0);
  const [localResultMessage, setLocalResultMessage] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [contactMessage, setContactMessage] = useState('无');
  const [motionMessage, setMotionMessage] = useState('待机');
  const [aimMessage, setAimMessage] = useState('拖动球附近区域开始瞄准');

  const [ball, setBall] = useState<BallState>({
    position: deepClone(LEVELS.forest.spawn),
    velocity: vec3(0, 0, 0),
    speed: 0,
    radius: BALL_RADIUS,
    moving: false,
    sleeping: true,
    airborne: false,
    inHole: false,
    outOfBounds: false,
    currentSurface: 'grass',
    friction: LEVELS.forest.surfaces[0].friction,
    lastCollision: null,
    lastSafePosition: deepClone(LEVELS.forest.spawn),
  });

  const [shot, setShot] = useState<ShotState>({
    dragging: false,
    canShoot: true,
    startScreen: null,
    currentScreen: null,
    direction: { x: 0, z: -1 },
    power: 0,
    minPower: MIN_POWER,
    maxPower: MAX_POWER,
    strokeCount: 0,
  });

  const [multiplayer, setMultiplayer] = useState<MultiplayerState>({
    enabled: false,
    mode: 'local',
    status: 'setup',
    playerCount: 2,
    currentPlayerId: null,
    turnIndex: 0,
    round: 1,
    revision: 0,
    players: createPlayers(2, LEVELS.forest.spawn),
    winnerId: null,
    tiedPlayerIds: [],
  });

  const [powerupsState, setPowerupsState] = useState<PowerupsState>({
    items: LEVELS.forest.powerups.map((item) => ({ ...item, active: true, collected: false })),
    inventory: inventoryTemplate(),
    activeEffect: null,
    lastTriggeredId: null,
    placingType: null,
    armedType: null,
    selectedPlacedId: null,
  });

  const currentLevel = LEVELS[currentLevelId];
  const currentPlayer = multiplayer.players[multiplayer.turnIndex] ?? null;

  useEffect(() => {
    commitCountRef.current += 1;
    performanceRef.current.reactCommitCount = commitCountRef.current;
  });

  const gameStatus: GameStatus = useMemo(
    () => ({
      ready: true,
      gameState,
      mode,
      currentLevel: currentLevel ? { id: currentLevel.id, name: currentLevel.name, theme: currentLevel.theme, par: currentLevel.par } : null,
      currentHoleStrokes: shot.strokeCount,
      totalStrokes,
      currentScore,
      totalScore,
      holeComplete: ball.inHole,
      elapsedTime: round(elapsedTime),
    }),
    [ball.inHole, currentLevel, currentScore, elapsedTime, gameState, mode, shot.strokeCount, totalScore, totalStrokes],
  );

  const courseState: CourseState = useMemo(
    () => ({
      levelId: currentLevel.id,
      name: currentLevel.name,
      theme: currentLevel.theme,
      par: currentLevel.par,
      bounds: deepClone(currentLevel.bounds),
      spawn: deepClone(currentLevel.spawn),
      hole: deepClone(currentLevel.hole),
      surfaces: deepClone(currentLevel.surfaces),
      obstacles: deepClone(currentLevel.obstacles),
      terrainFeatures: deepClone(currentLevel.terrainFeatures),
      obstacleCount: currentLevel.obstacles.length,
      sceneObjectCount: runtimeRef.current.scene?.children.length ?? 0,
      loaded: Boolean(runtimeRef.current.scene),
    }),
    [currentLevel],
  );

  const cameraState: CameraState = useMemo(() => {
    const camera = runtimeRef.current.camera;
    const target = ball.position;
    return {
      mode: 'follow',
      position: camera ? toVec3(camera.position) : { x: 0, y: cameraDistance * 0.72, z: cameraDistance },
      target: deepClone(target),
      distance: round(cameraDistance),
      minDistance: CAMERA_MIN_DISTANCE,
      maxDistance: CAMERA_MAX_DISTANCE,
      zoom: round(cameraZoom),
      angle: -Math.PI / 2,
      pitch: 0.62,
    };
  }, [ball.position, cameraDistance, cameraZoom]);

  useEffect(() => {
    const mount = canvasRef.current;
    if (!mount) return;

    performanceRef.current.runtimeMountCount += 1;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(currentLevel.sky);
    scene.fog = new THREE.Fog(currentLevel.sky, 16, 56);

    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / Math.max(1, mount.clientHeight), 0.1, 200);
    camera.position.set(0, 11, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xcce7ff, 0x203020, 1.1);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 1.5);
    dir.position.set(8, 16, 10);
    dir.castShadow = true;
    scene.add(dir);

    const group = new THREE.Group();
    scene.add(group);

    const courseMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(38, 54, 64, 64),
      new THREE.MeshStandardMaterial({ color: new THREE.Color(currentLevel.fairway), roughness: 0.95, metalness: 0.02 }),
    );
    courseMesh.rotation.x = -Math.PI / 2;
    courseMesh.receiveShadow = true;
    const geometry = courseMesh.geometry as THREE.PlaneGeometry;
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i += 1) {
      const x = position.getX(i);
      const z = position.getY(i);
      position.setZ(i, terrainHeight(currentLevel, x, -z));
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    group.add(courseMesh);

    currentLevel.surfaces.forEach((surface) => {
      if (!surface.bounds || surface.type === 'grass') return;
      const width = surface.bounds.maxX - surface.bounds.minX;
      const depth = surface.bounds.maxZ - surface.bounds.minZ;
      const centerX = (surface.bounds.minX + surface.bounds.maxX) / 2;
      const centerZ = (surface.bounds.minZ + surface.bounds.maxZ) / 2;
      const color = surface.type === 'sand' ? '#d6b06b' : '#9fe3ff';
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(width, 0.08, depth),
        new THREE.MeshStandardMaterial({ color, transparent: true, opacity: surface.type === 'ice' ? 0.86 : 0.94, roughness: surface.type === 'ice' ? 0.15 : 0.9 }),
      );
      mesh.position.set(centerX, terrainHeight(currentLevel, centerX, centerZ) + 0.02, centerZ);
      mesh.receiveShadow = true;
      group.add(mesh);
    });

    const holeMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(currentLevel.hole.radius, currentLevel.hole.radius * 1.05, 0.5, 24),
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.35 }),
    );
    holeMesh.position.set(currentLevel.hole.x, -0.18 + terrainHeight(currentLevel, currentLevel.hole.x, currentLevel.hole.z), currentLevel.hole.z);
    group.add(holeMesh);

    const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.2, 12), new THREE.MeshStandardMaterial({ color: 0xf8fafc }));
    flagPole.position.set(currentLevel.hole.x, 1.6 + terrainHeight(currentLevel, currentLevel.hole.x, currentLevel.hole.z), currentLevel.hole.z);
    const flag = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.46, 0.04), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
    flag.position.set(currentLevel.hole.x + 0.45, 2.55 + terrainHeight(currentLevel, currentLevel.hole.x, currentLevel.hole.z), currentLevel.hole.z);
    group.add(flagPole, flag);

    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(BALL_RADIUS, 28, 28),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, metalness: 0.05 }),
    );
    ballMesh.castShadow = true;
    ballMesh.receiveShadow = true;
    group.add(ballMesh);

    const obstacleMap = new Map<string, THREE.Object3D>();
    currentLevel.obstacles.forEach((obstacle) => {
      let mesh: THREE.Mesh;
      if (obstacle.type === 'tree') {
        mesh = new THREE.Mesh(
          new THREE.CylinderGeometry(obstacle.radius ? obstacle.radius * 0.5 : 0.6, obstacle.radius ? obstacle.radius * 0.7 : 0.8, obstacle.height ?? 3, 16),
          new THREE.MeshStandardMaterial({ color: '#6b4f2b' }),
        );
        const crown = new THREE.Mesh(
          new THREE.SphereGeometry((obstacle.radius ?? 1) * 1.15, 20, 20),
          new THREE.MeshStandardMaterial({ color: '#14532d' }),
        );
        crown.position.set(obstacle.position.x, obstacle.position.y + 1.8, obstacle.position.z);
        crown.castShadow = true;
        group.add(crown);
      } else if (obstacle.type === 'ice_crystal') {
        mesh = new THREE.Mesh(
          new THREE.ConeGeometry(obstacle.radius ?? 1, obstacle.height ?? 2.6, 6),
          new THREE.MeshStandardMaterial({ color: '#a5f3fc', emissive: '#164e63', roughness: 0.15, metalness: 0.2 }),
        );
      } else {
        mesh = new THREE.Mesh(
          new THREE.SphereGeometry(obstacle.radius ?? 1.2, 16, 16),
          new THREE.MeshStandardMaterial({ color: obstacle.type === 'dune' ? '#c58b42' : obstacle.type === 'snowbank' ? '#e2ecf7' : '#7c7c7c', roughness: 0.95 }),
        );
      }
      mesh.position.set(obstacle.position.x, obstacle.position.y, obstacle.position.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      obstacleMap.set(obstacle.id, mesh);
    });

    const pickupMap = new Map<string, THREE.Object3D>();
    currentLevel.powerups.forEach((item) => {
      const color = item.type === 'hole_in_one' ? '#f59e0b' : item.type === 'speed_boost' ? '#22d3ee' : '#a855f7';
      const mesh = new THREE.Mesh(
        item.type === 'bounce_pad' ? new THREE.CylinderGeometry(0.7, 0.7, 0.2, 18) : new THREE.TorusKnotGeometry(0.34, 0.12, 64, 8),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.2, roughness: 0.35 }),
      );
      mesh.position.set(item.position.x, item.position.y + 0.3, item.position.z);
      group.add(mesh);
      pickupMap.set(item.id, mesh);
    });

    runtimeRef.current = { ...runtimeRef.current, ballMesh, holeMesh, holeFlag: flag, group, pickups: pickupMap, obstacles: obstacleMap, renderer, camera, scene };
    window.__THREE_SCENE__ = scene;
    window.__THREE_RENDERER__ = renderer;

    const onResize = () => {
      if (!canvasRef.current || !runtimeRef.current.renderer || !runtimeRef.current.camera) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      runtimeRef.current.renderer.setSize(width, height);
      runtimeRef.current.camera.aspect = width / Math.max(1, height);
      runtimeRef.current.camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);
    performanceRef.current.listenerCount += 1;

    let animationHandle = 0;
    let last = performance.now();
    let accumulator = 0;

    const loop = (time: number) => {
      const delta = Math.min(0.05, (time - last) / 1000);
      last = time;
      accumulator += delta;
      performanceRef.current.accumulator = accumulator;
      performanceRef.current.logicLoopCount += 1;
      setElapsedTime((prev) => (gameState === 'playing' ? prev + delta : prev));

      if (runtimeRef.current.ballMesh) {
        runtimeRef.current.ballMesh.position.set(ball.position.x, ball.position.y, ball.position.z);
      }

      while (accumulator >= FIXED_STEP) {
        accumulator -= FIXED_STEP;
        performanceRef.current.simulationTick += 1;
      }
      performanceRef.current.accumulator = accumulator;

      const followTarget = new THREE.Vector3(ball.position.x, ball.position.y + 0.2, ball.position.z);
      const followPos = new THREE.Vector3(ball.position.x, ball.position.y + cameraDistance * 0.72, ball.position.z + cameraDistance);
      camera.position.lerp(followPos, 0.08);
      camera.lookAt(followTarget);
      camera.zoom = cameraZoom;
      camera.updateProjectionMatrix();

      pickupMap.forEach((mesh) => {
        mesh.rotation.y += 0.02;
      });

      renderer.render(scene, camera);
      performanceRef.current.renderFrame += 1;
      animationHandle = window.requestAnimationFrame(loop);
    };

    animationHandle = window.requestAnimationFrame(loop);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
      performanceRef.current.runtimeCleanupCount += 1;
      renderer.dispose();
      mount.innerHTML = '';
      cancelAnimationFrame(animationHandle);
    };
  }, [ball.position.x, ball.position.y, ball.position.z, cameraDistance, cameraZoom, currentLevel, gameState]);

  useEffect(() => {
    const scene = runtimeRef.current.scene;
    if (scene) {
      scene.background = new THREE.Color(currentLevel.sky);
    }
  }, [currentLevel]);

  useEffect(() => {
    const ballMesh = runtimeRef.current.ballMesh;
    if (ballMesh) {
      ballMesh.position.set(ball.position.x, ball.position.y, ball.position.z);
    }
  }, [ball.position]);

  useEffect(() => {
    const activePlayerInventory = currentPlayer?.powerupInventory ?? powerupsState.inventory;
    setPowerupsState((prev) => ({
      ...prev,
      inventory: deepClone(activePlayerInventory),
      armedType: currentPlayer?.armedPowerup ?? prev.armedType ?? null,
      items: currentLevel.powerups.map((item) => ({
        ...item,
        active: !(currentPlayer?.collectedPowerupIds.includes(item.id) ?? false),
        collected: currentPlayer?.collectedPowerupIds.includes(item.id) ?? false,
      })),
    }));
  }, [currentLevel, currentPlayer]);

  const syncPlayerBall = (positionValue: Vec3) => {
    if (mode !== 'local_multiplayer') return;
    setMultiplayer((prev) => {
      const players = prev.players.map((player, index) =>
        index === prev.turnIndex ? { ...player, ballPosition: deepClone(positionValue) } : player,
      );
      return { ...prev, players };
    });
  };

  const resetForLevel = (levelId: LevelId, nextMode: GameMode, playerCount = selectedPlayerCount) => {
    const level = LEVELS[levelId];
    setCurrentLevelId(levelId);
    setMode(nextMode);
    setElapsedTime(0);
    setCurrentScore(0);
    setResultMessage('');
    setLocalResultMessage('');
    setTotalStrokes(0);
    setAimMessage('拖动球附近区域开始瞄准');
    setContactMessage('无');
    setMotionMessage('待机');
    setBall({
      position: deepClone(level.spawn),
      velocity: vec3(0, 0, 0),
      speed: 0,
      radius: BALL_RADIUS,
      moving: false,
      sleeping: true,
      airborne: false,
      inHole: false,
      outOfBounds: false,
      currentSurface: getSurfaceForPosition(level, level.spawn).type,
      friction: getSurfaceForPosition(level, level.spawn).friction,
      lastCollision: null,
      lastSafePosition: deepClone(level.spawn),
    });
    setShot((prev) => ({
      ...prev,
      dragging: false,
      canShoot: true,
      startScreen: null,
      currentScreen: null,
      power: 0,
      strokeCount: 0,
      direction: { x: 0, z: -1 },
    }));

    if (nextMode === 'local_multiplayer') {
      const players = createPlayers(playerCount, level.spawn);
      setMultiplayer({
        enabled: true,
        mode: 'local',
        status: 'playing',
        playerCount,
        currentPlayerId: players[0].id,
        turnIndex: 0,
        round: 1,
        revision: localRevision + 1,
        players,
        winnerId: null,
        tiedPlayerIds: [],
      });
      setLocalRevision((prev) => prev + 1);
      setPowerupsState({
        items: level.powerups.map((item) => ({ ...item, active: true, collected: false })),
        inventory: deepClone(players[0].powerupInventory),
        activeEffect: null,
        lastTriggeredId: null,
        placingType: null,
        armedType: null,
        selectedPlacedId: null,
      });
    } else {
      setMultiplayer((prev) => ({ ...prev, enabled: false, status: 'setup', currentPlayerId: null, winnerId: null, tiedPlayerIds: [] }));
      setPowerupsState({
        items: level.powerups.map((item) => ({ ...item, active: true, collected: false })),
        inventory: inventoryTemplate(),
        activeEffect: null,
        lastTriggeredId: null,
        placingType: null,
        armedType: null,
        selectedPlacedId: null,
      });
    }
    setGameState('playing');
  };

  const completeHoleForPlayer = (strokesUsed: number) => {
    const gainedScore = Math.max(25, 160 - strokesUsed * 15 + (currentLevel.par - strokesUsed) * 10);
    setCurrentScore(gainedScore);
    setTotalScore((prev) => prev + gainedScore);

    if (mode === 'local_multiplayer') {
      setMultiplayer((prev) => {
        const players = prev.players.map((player, index) =>
          index === prev.turnIndex
            ? { ...player, finished: true, holeStrokes: strokesUsed, totalStrokes: strokesUsed, ballPosition: deepClone(ball.position) }
            : player,
        );
        const unfinishedIndex = players.findIndex((player) => !player.finished);
        if (unfinishedIndex >= 0) {
          setLocalResultMessage(`${players[prev.turnIndex].name} 完成球洞，用杆 ${strokesUsed}。按“继续”轮到下一位玩家。`);
          return {
            ...prev,
            players,
            revision: prev.revision + 1,
          };
        }
        const sorted = players.slice().sort((a, b) => a.totalStrokes - b.totalStrokes || a.id.localeCompare(b.id));
        const best = sorted[0]?.totalStrokes ?? strokesUsed;
        const tied = sorted.filter((player) => player.totalStrokes === best).map((player) => player.id);
        const winnerId = tied.length === 1 ? tied[0] : null;
        setLocalResultMessage(
          tied.length > 1
            ? `本地多人出现并列第一：${tied.join('、')}，均为 ${best} 杆。`
            : `${sorted[0]?.name ?? '玩家'} 以 ${best} 杆获胜！`,
        );
        setGameState('local_result');
        return {
          ...prev,
          players,
          status: 'complete',
          winnerId,
          tiedPlayerIds: tied,
          revision: prev.revision + 1,
        };
      });
      return;
    }

    const nextLeaderboard = buildLeaderboard(leaderboard, currentLevel.id, PLAYER_NAME, PLAYER_NAME, strokesUsed, currentLevel.par);
    setLeaderboard(nextLeaderboard);
    setResultMessage(`成功入洞！本关 ${strokesUsed} 杆，得分 +${gainedScore}。`);
    setGameState('hole_complete');
  };

  const runPhysicsStep = () => {
    if (gameState !== 'playing') return;
    setBall((prevBall) => {
      if (prevBall.inHole) return prevBall;
      const position = { ...prevBall.position };
      const velocity = { ...prevBall.velocity };
      const level = currentLevel;
      const currentSurface = getSurfaceForPosition(level, position);
      const friction = currentSurface.friction;
      const terrainY = terrainHeight(level, position.x, position.z) + BALL_RADIUS;
      let lastCollision = prevBall.lastCollision;
      let activeEffect: string | null = null;
      let triggeredId: string | null = null;

      velocity.y -= 7.4 * FIXED_STEP;
      position.x += velocity.x * FIXED_STEP;
      position.y += velocity.y * FIXED_STEP;
      position.z += velocity.z * FIXED_STEP;

      const terrainAhead = terrainHeight(level, position.x, position.z) + BALL_RADIUS;
      if (position.y <= terrainAhead) {
        position.y = terrainAhead;
        velocity.y = 0;
      }

      const slopeX = (terrainHeight(level, position.x + 0.2, position.z) - terrainHeight(level, position.x - 0.2, position.z)) / 0.4;
      const slopeZ = (terrainHeight(level, position.x, position.z + 0.2) - terrainHeight(level, position.x, position.z - 0.2)) / 0.4;
      velocity.x += -slopeX * 2.6 * FIXED_STEP;
      velocity.z += -slopeZ * 2.6 * FIXED_STEP;

      const frictionFactor = Math.max(0, 1 - friction * 0.54 * FIXED_STEP);
      velocity.x *= frictionFactor;
      velocity.z *= frictionFactor;

      const planarSpeed = Math.hypot(velocity.x, velocity.z);
      if (planarSpeed > MAX_BALL_SPEED) {
        const ratio = MAX_BALL_SPEED / planarSpeed;
        velocity.x *= ratio;
        velocity.z *= ratio;
      }

      for (const obstacle of level.obstacles) {
        const obstacleRadius = (obstacle.radius ?? 1) + BALL_RADIUS;
        const dx = position.x - obstacle.position.x;
        const dz = position.z - obstacle.position.z;
        const dist = Math.hypot(dx, dz);
        if (dist < obstacleRadius) {
          const nx = dx / Math.max(0.0001, dist);
          const nz = dz / Math.max(0.0001, dist);
          const overlap = obstacleRadius - dist;
          position.x += nx * overlap;
          position.z += nz * overlap;
          const dot = velocity.x * nx + velocity.z * nz;
          velocity.x -= 1.72 * dot * nx;
          velocity.z -= 1.72 * dot * nz;
          lastCollision = obstacle.type;
          setContactMessage(`碰撞：${obstacle.type}`);
        }
      }

      powerupsState.items.forEach((item) => {
        if (item.collected || !item.active) return;
        if (distance2D(position, item.position) < 0.95) {
          triggeredId = item.id;
          if (item.type === 'speed_boost') {
            const direction = item.direction ?? { x: 0.2, z: -1 };
            const length = Math.hypot(direction.x, direction.z) || 1;
            velocity.x += (direction.x / length) * 3.2;
            velocity.z += (direction.z / length) * 3.2;
            activeEffect = 'speed_boost';
          } else {
            activeEffect = item.type;
          }
          if (mode === 'local_multiplayer') {
            setMultiplayer((prev) => {
              const players = prev.players.map((player, index) => {
                if (index !== prev.turnIndex) return player;
                return {
                  ...player,
                  collectedPowerupIds: [...player.collectedPowerupIds, item.id],
                  powerupInventory: mutateInventory(player.powerupInventory, item.type, 1),
                };
              });
              return { ...prev, players, revision: prev.revision + 1 };
            });
          } else {
            setPowerupsState((prev) => ({ ...prev, inventory: mutateInventory(prev.inventory, item.type, 1) }));
          }
        }
      });

      const currentPlacedPads = currentPlayer?.placedBouncePads ?? [];
      currentPlacedPads.forEach((pad) => {
        if (distance2D(position, pad.position) < 1.1) {
          velocity.y = 3.8;
          velocity.x *= 1.08;
          velocity.z *= 1.08;
          lastCollision = 'bounce_pad';
          setContactMessage('碰撞：bounce_pad');
        }
      });

      let outOfBounds = false;
      if (
        position.x < level.bounds.minX ||
        position.x > level.bounds.maxX ||
        position.z < level.bounds.minZ ||
        position.z > level.bounds.maxZ
      ) {
        outOfBounds = true;
        position.x = prevBall.lastSafePosition.x;
        position.y = prevBall.lastSafePosition.y;
        position.z = prevBall.lastSafePosition.z;
        velocity.x = 0;
        velocity.y = 0;
        velocity.z = 0;
        lastCollision = 'out_of_bounds';
        setContactMessage('碰撞：out_of_bounds');
      }

      const holeDist = distance2D(position, currentLevel.hole);
      let inHole = false;
      if (holeDist < currentLevel.hole.radius && planarSpeed < HOLE_SINK_SPEED && Math.abs(position.y - terrainY) < 0.08) {
        inHole = true;
        position.x = currentLevel.hole.x;
        position.z = currentLevel.hole.z;
        position.y = terrainHeight(level, currentLevel.hole.x, currentLevel.hole.z) - 0.16;
        velocity.x = 0;
        velocity.y = 0;
        velocity.z = 0;
      }

      const speed = Math.hypot(velocity.x, velocity.y, velocity.z);
      const moving = speed > 0.08;
      const sleeping = !moving;
      if (moving) {
        setMotionMessage(`运动中 ${round(speed)} m/s`);
      } else {
        setMotionMessage(inHole ? '已入洞' : '静止');
        setContactMessage(lastCollision ? `最后碰撞：${lastCollision}` : '无');
      }

      const lastSafePosition = outOfBounds || planarSpeed < 0.12 ? deepClone(prevBall.lastSafePosition) : deepClone(position);
      const nextBall: BallState = {
        position: deepClone(position),
        velocity: { x: round(velocity.x), y: round(velocity.y), z: round(velocity.z) },
        speed: round(speed),
        radius: BALL_RADIUS,
        moving,
        sleeping,
        airborne: position.y > terrainY + 0.02,
        inHole,
        outOfBounds,
        currentSurface: currentSurface.type,
        friction: currentSurface.friction,
        lastCollision,
        lastSafePosition,
      };

      if (triggeredId) {
        setPowerupsState((prev) => ({
          ...prev,
          items: prev.items.map((item) => (item.id === triggeredId ? { ...item, active: false, collected: true } : item)),
          activeEffect,
          lastTriggeredId: triggeredId,
        }));
      }

      syncPlayerBall(nextBall.position);

      if (inHole) {
        setShot((prev) => ({ ...prev, canShoot: false }));
        window.setTimeout(() => completeHoleForPlayer(shot.strokeCount), 120);
      }

      return nextBall;
    });
  };

  useEffect(() => {
    if (gameState !== 'playing') return;
    const timer = window.setInterval(runPhysicsStep, FIXED_STEP * 1000);
    performanceRef.current.listenerCount += 1;
    return () => window.clearInterval(timer);
  });

  const screenToDirection = (start: { x: number; y: number }, current: { x: number; y: number }) => {
    const dx = start.x - current.x;
    const dz = start.y - current.y;
    const length = Math.hypot(dx, dz) || 1;
    return {
      direction: { x: round(dx / length), z: round(dz / length) },
      power: clamp((Math.hypot(dx, dz) / 220) * MAX_POWER, 0, MAX_POWER),
    };
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (gameState !== 'playing' || !shot.canShoot || ball.moving) return;
    const start = { x: event.clientX, y: event.clientY };
    setShot((prev) => ({ ...prev, dragging: true, startScreen: start, currentScreen: start }));
    setAimMessage('正在瞄准');
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!shot.dragging || !shot.startScreen) return;
    const current = { x: event.clientX, y: event.clientY };
    const next = screenToDirection(shot.startScreen, current);
    setShot((prev) => ({ ...prev, currentScreen: current, direction: next.direction, power: next.power }));
    setAimMessage(`方向 (${next.direction.x}, ${next.direction.z}) 力度 ${round(next.power)}`);
  };

  const performShot = () => {
    if (!shot.canShoot || ball.moving || ball.inHole) return;
    const chosenPower = Math.max(MIN_POWER, shot.power);
    const direction = shot.direction;
    const useHoleInOne = powerupsState.armedType === 'hole_in_one' && getInventoryCount(powerupsState.inventory, 'hole_in_one') > 0;
    let nextVelocity = {
      x: round(direction.x * chosenPower * POWER_SCALE),
      y: 0,
      z: round(direction.z * chosenPower * POWER_SCALE),
    };

    if (useHoleInOne) {
      const dx = currentLevel.hole.x - ball.position.x;
      const dz = currentLevel.hole.z - ball.position.z;
      const length = Math.hypot(dx, dz) || 1;
      nextVelocity = {
        x: round((dx / length) * Math.min(MAX_BALL_SPEED * 0.72, 7.8)),
        y: 0,
        z: round((dz / length) * Math.min(MAX_BALL_SPEED * 0.72, 7.8)),
      };
    }

    setBall((prev) => ({ ...prev, velocity: nextVelocity, moving: true, sleeping: false, inHole: false, outOfBounds: false }));
    setShot((prev) => ({ ...prev, strokeCount: prev.strokeCount + 1, canShoot: false, power: 0, dragging: false, startScreen: null, currentScreen: null }));
    setTotalStrokes((prev) => prev + 1);
    setMotionMessage('已击球');

    if (mode === 'local_multiplayer') {
      setMultiplayer((prev) => {
        const players = prev.players.map((player, index) =>
          index === prev.turnIndex
            ? {
                ...player,
                holeStrokes: player.holeStrokes + 1,
                totalStrokes: player.totalStrokes + 1,
                powerupInventory: useHoleInOne ? mutateInventory(player.powerupInventory, 'hole_in_one', -1) : player.powerupInventory,
                armedPowerup: useHoleInOne ? null : player.armedPowerup,
              }
            : player,
        );
        return { ...prev, players, revision: prev.revision + 1 };
      });
    } else if (useHoleInOne) {
      setPowerupsState((prev) => ({ ...prev, inventory: mutateInventory(prev.inventory, 'hole_in_one', -1), armedType: null, activeEffect: 'hole_in_one' }));
    }
  };

  const handlePointerUp = () => {
    if (!shot.dragging) return;
    setShot((prev) => ({ ...prev, dragging: false, canShoot: true }));
    performShot();
  };

  useEffect(() => {
    if (!ball.moving && !ball.inHole) {
      setShot((prev) => ({ ...prev, canShoot: true }));
    }
  }, [ball.inHole, ball.moving]);

  const handleArmHoleInOne = () => {
    if (getInventoryCount(powerupsState.inventory, 'hole_in_one') <= 0) return;
    if (mode === 'local_multiplayer') {
      setMultiplayer((prev) => {
        const players = prev.players.map((player, index) =>
          index === prev.turnIndex
            ? { ...player, armedPowerup: (player.armedPowerup ? null : 'hole_in_one') as 'hole_in_one' | null }
            : player,
        );
        return { ...prev, players, revision: prev.revision + 1 };
      });
    }
    setPowerupsState((prev) => ({ ...prev, armedType: prev.armedType === 'hole_in_one' ? null : 'hole_in_one' }));
  };

  const handlePlaceBouncePad = () => {
    if (getInventoryCount(powerupsState.inventory, 'bounce_pad') <= 0 || mode !== 'local_multiplayer' || !currentPlayer) return;
    const placement = { id: `pad-${Date.now()}`, position: deepClone(ball.position) };
    setMultiplayer((prev) => {
      const players = prev.players.map((player, index) =>
        index === prev.turnIndex
          ? {
              ...player,
              placedBouncePads: [...player.placedBouncePads, placement],
              powerupInventory: mutateInventory(player.powerupInventory, 'bounce_pad', -1),
            }
          : player,
      );
      return { ...prev, players, revision: prev.revision + 1 };
    });
    setPowerupsState((prev) => ({ ...prev, inventory: mutateInventory(prev.inventory, 'bounce_pad', -1), selectedPlacedId: placement.id }));
  };

  const handleResetBall = () => {
    const resetPos = deepClone(ball.lastSafePosition);
    setBall((prev) => ({ ...prev, position: resetPos, velocity: vec3(0, 0, 0), speed: 0, moving: false, sleeping: true, outOfBounds: false }));
    syncPlayerBall(resetPos);
    setMotionMessage('已重置至安全位置');
  };

  const continueAfterResult = () => {
    if (gameState === 'hole_complete') {
      setGameState('level_select');
      return;
    }
    if (gameState === 'local_result') {
      if (multiplayer.status === 'complete' && multiplayer.tiedPlayerIds.length > 1) {
        setGameState('local_result');
        return;
      }
      const nextIndex = multiplayer.players.findIndex((player) => !player.finished);
      if (nextIndex >= 0) {
        const player = multiplayer.players[nextIndex];
        setMultiplayer((prev) => ({ ...prev, currentPlayerId: player.id, turnIndex: nextIndex, round: nextIndex + 1, status: 'playing', revision: prev.revision + 1 }));
        setBall({
          position: deepClone(player.ballPosition),
          velocity: vec3(0, 0, 0),
          speed: 0,
          radius: BALL_RADIUS,
          moving: false,
          sleeping: true,
          airborne: false,
          inHole: false,
          outOfBounds: false,
          currentSurface: getSurfaceForPosition(currentLevel, player.ballPosition).type,
          friction: getSurfaceForPosition(currentLevel, player.ballPosition).friction,
          lastCollision: null,
          lastSafePosition: deepClone(player.ballPosition),
        });
        setShot((prev) => ({ ...prev, strokeCount: player.holeStrokes, canShoot: true, power: 0 }));
        setGameState('playing');
      }
    }
  };

  useEffect(() => {
    (window as Window & typeof globalThis).__contract = {
      getState: () => ({
        version: '1.0.0',
        gameType: '3d-mini-golf',
        renderer: 'threejs',
        stateSource: 'live',
        hooksReady: true,
        hookNames: ['__game', '__ball', '__shot', '__course', '__multiplayer', '__powerups', '__camera', '__leaderboard', '__performance'],
        buildId: BUILD_ID,
      }),
    };
    (window as Window & typeof globalThis).__game = { getState: () => deepClone(gameStatus) };
    (window as Window & typeof globalThis).__ball = { getState: () => deepClone(ball), friction: ball.friction };
    (window as Window & typeof globalThis).__shot = { getState: () => deepClone(shot) };
    (window as Window & typeof globalThis).__course = {
      getState: () => deepClone(courseState),
      obstacles: courseState.obstacles,
      terrainFeatures: courseState.terrainFeatures,
    };
    (window as Window & typeof globalThis).__multiplayer = { getState: () => deepClone(multiplayer) };
    (window as Window & typeof globalThis).__powerups = { getState: () => deepClone(powerupsState) };
    (window as Window & typeof globalThis).__camera = { getState: () => deepClone(cameraState) };
    (window as Window & typeof globalThis).__leaderboard = { getState: () => deepClone(leaderboard) };
    (window as Window & typeof globalThis).__performance = { getState: () => deepClone(performanceRef.current) };
  }, [ball, cameraState, courseState, gameStatus, leaderboard, multiplayer, powerupsState, shot]);

  const leaderboardLevels = (Object.keys(leaderboard.levelBest) as LevelId[]).map((key) => ({ key, entries: leaderboard.levelBest[key] }));

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#0f172a,#020617_55%,#000)] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-4 p-4 lg:p-6">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl panel-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Three.js · React 19 · Tailwind</p>
              <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">3D 迷你高尔夫赛</h1>
              <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
                鼠标拖动控制击球方向与力度，在森林、沙漠、冰雪三大主题关卡中挑战最少杆数；支持本地多人轮流竞技、实时摩擦反馈、排行榜持久化与 3D 跟随镜头。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-slate-400">当前关卡</p>
                <p className="font-semibold">{currentLevel.name}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-slate-400">当前模式</p>
                <p className="font-semibold">{mode === 'single' ? '单人' : '本地多人'}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-slate-400">总杆数</p>
                <p className="font-semibold">{totalStrokes}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-slate-400">总积分</p>
                <p className="font-semibold">{totalScore}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid flex-1 gap-4 xl:grid-cols-[320px_minmax(0,1fr)_350px]">
          <aside className="space-y-4">
            <section id="menu" className="rounded-3xl border border-emerald-400/20 bg-white/5 p-5 shadow-xl panel-blur">
              <h2 className="text-xl font-bold">主菜单</h2>
              <div className="mt-4 grid gap-3">
                <button
                  data-testid="start-btn"
                  className="rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
                  onClick={() => setGameState('level_select')}
                >
                  开始游戏
                </button>
                <button
                  data-testid="multiplayer-btn"
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold transition hover:bg-white/15"
                  onClick={() => {
                    setGameState('local_setup');
                    setMode('local_multiplayer');
                  }}
                >
                  本地多人对战
                </button>
                <button
                  data-testid="leaderboard-btn"
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold transition hover:bg-white/15"
                  onClick={() => setGameState('leaderboard')}
                >
                  查看排行榜
                </button>
              </div>
            </section>

            <section id="levelSelect" className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur">
              <h2 className="text-xl font-bold">关卡选择</h2>
              <div className="mt-4 grid gap-3">
                <button data-testid="level-forest" className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-left hover:bg-emerald-500/20" onClick={() => resetForLevel('forest', 'single')}>
                  <div className="font-semibold">森林</div>
                  <div className="text-sm text-slate-300">树木与岩石挡道，草地摩擦稳定。</div>
                </button>
                <button data-testid="level-desert" className="rounded-2xl border border-amber-300/25 bg-amber-500/10 px-4 py-3 text-left hover:bg-amber-500/20" onClick={() => resetForLevel('desert', 'single')}>
                  <div className="font-semibold">沙漠</div>
                  <div className="text-sm text-slate-300">大沙坑与沙丘阻力显著，谨慎规划线路。</div>
                </button>
                <button data-testid="level-snow" className="rounded-2xl border border-cyan-300/25 bg-cyan-500/10 px-4 py-3 text-left hover:bg-cyan-500/20" onClick={() => resetForLevel('snow', 'single')}>
                  <div className="font-semibold">冰雪</div>
                  <div className="text-sm text-slate-300">超低摩擦冰面带来超长滑行与转向挑战。</div>
                </button>
              </div>
            </section>

            <section id="multiplayerLobby" className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur">
              <h2 className="text-xl font-bold">本地多人设置</h2>
              <div className="mt-4 space-y-3">
                <label className="block text-sm text-slate-300">
                  玩家数量
                  <select
                    data-testid="local-player-count"
                    value={selectedPlayerCount}
                    onChange={(e) => setSelectedPlayerCount(Number(e.target.value))}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3"
                  >
                    {[2, 3, 4].map((count) => (
                      <option key={count} value={count}>
                        {count} 人
                      </option>
                    ))}
                  </select>
                </label>
                <button data-testid="local-start-btn" className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 hover:bg-cyan-300" onClick={() => resetForLevel(currentLevelId, 'local_multiplayer', selectedPlayerCount)}>
                  开始本地比赛
                </button>
                <button data-testid="local-exit-btn" className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold hover:bg-white/15" onClick={() => setGameState('menu')}>
                  返回菜单
                </button>
              </div>
            </section>
          </aside>

          <main className="space-y-4">
            <section
              id="gameScreen"
              className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.55)] panel-blur"
            >
              <div className="grid gap-4 border-b border-white/10 bg-black/25 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">击球力度</p>
                    <p data-testid="shot-power" className="mt-1 text-lg font-bold text-emerald-300">{round(shot.power)}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">当前杆数</p>
                    <p data-testid="stroke-count" className="mt-1 text-lg font-bold text-white">{shot.strokeCount}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">当前玩家</p>
                    <p data-testid="current-player" className="mt-1 text-lg font-bold text-cyan-300">{currentPlayer?.name ?? PLAYER_NAME}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">实时摩擦系数</p>
                    <p data-testid="surface-friction" className="mt-1 text-lg font-bold text-amber-300">{ball.friction}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">表面类型</p>
                    <p className="mt-1 text-lg font-bold text-fuchsia-300">{ball.currentSurface}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button data-testid="zoom-in" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold hover:bg-white/15" onClick={() => setCameraDistance((prev) => clamp(prev - 2, CAMERA_MIN_DISTANCE, CAMERA_MAX_DISTANCE))}>镜头拉近</button>
                  <button data-testid="zoom-out" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold hover:bg-white/15" onClick={() => setCameraDistance((prev) => clamp(prev + 2, CAMERA_MIN_DISTANCE, CAMERA_MAX_DISTANCE))}>镜头拉远</button>
                  <button data-testid="reset-position" className="rounded-2xl border border-rose-300/20 bg-rose-500/10 px-4 py-3 font-semibold hover:bg-rose-500/20" onClick={handleResetBall}>重置球位</button>
                </div>
              </div>

              <div className="relative h-[520px] w-full canvas-shell" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp}>
                <div ref={canvasRef} className="h-full w-full" />
                <div className="pointer-events-none absolute left-4 top-4 grid max-w-sm gap-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm panel-blur">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">瞄准方向反馈</p>
                    <p data-testid="aim-feedback" className="mt-1 text-slate-100">{aimMessage}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm panel-blur">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">运动状态反馈</p>
                    <p data-testid="physics-motion" className="mt-1 text-slate-100">{motionMessage}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm panel-blur">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">当前接触/碰撞反馈</p>
                    <p data-testid="physics-contact" className="mt-1 text-slate-100">{contactMessage}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">道具与技能</h2>
                  <span data-testid="powerup-status" className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                    当前武装：{powerupsState.armedType ?? '无'}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold text-fuchsia-300">反弹垫</p>
                    <p className="mt-2 text-sm text-slate-300">库存 {getInventoryCount(powerupsState.inventory, 'bounce_pad')}</p>
                    <button className="mt-3 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15" onClick={handlePlaceBouncePad}>当前球位放置</button>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold text-cyan-300">加速带</p>
                    <p className="mt-2 text-sm text-slate-300">库存 {getInventoryCount(powerupsState.inventory, 'speed_boost')}</p>
                    <p className="mt-3 text-xs text-slate-400">接触后按可见方向获得一次有限加速，并仍受最高速度上限约束。</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold text-amber-300">一杆入洞</p>
                    <p className="mt-2 text-sm text-slate-300">库存 <span data-testid="powerup-hio">{getInventoryCount(powerupsState.inventory, 'hole_in_one')}</span></p>
                    <button className="mt-3 w-full rounded-xl bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-300" onClick={handleArmHoleInOne}>启用 / 取消</button>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur">
                <h2 className="text-xl font-bold">物理规则摘要</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>• 草地为基础摩擦；沙坑滚阻至少为草地 3.5 倍附近，进入后明显更快减速。</li>
                  <li>• 冰雪关卡冰面摩擦≤草地 1/8，滑行更远但仍受最大速度限制。</li>
                  <li>• 所有明显障碍均有真实碰撞体，沙丘、雪堆、岩石、冰晶不会被球穿透。</li>
                  <li>• 相机使用真实透视相机跟随当前球，支持缩放调整跟随距离。</li>
                </ul>
              </div>
            </section>
          </main>

          <aside className="space-y-4">
            <section id="leaderboardScreen" className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur">
              <h2 className="text-xl font-bold">排行榜</h2>
              <div className="mt-4 space-y-4">
                {leaderboardLevels.map(({ key, entries }) => (
                  <div key={key} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">{LEVELS[key].name}</h3>
                      <span className="text-xs text-slate-400">按杆数 / 时间 / playerId 稳定排序</span>
                    </div>
                    {entries.length === 0 ? (
                      <p className="text-sm text-slate-400">尚无完赛记录</p>
                    ) : (
                      <div className="space-y-2 text-sm">
                        {entries.map((entry) => (
                          <div key={`${key}-${entry.playerId}`} className="rounded-xl bg-white/5 px-3 py-2">
                            #{entry.rank} {entry.playerName} · {entry.strokes} 杆 · {entry.relativeToPar >= 0 ? '+' : ''}
                            {entry.relativeToPar}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="font-semibold">全关卡总榜</h3>
                  {leaderboard.overall.length === 0 ? (
                    <p className="mt-2 text-sm text-slate-400">需同一玩家在森林 / 沙漠 / 冰雪三关均拥有合法最佳成绩后才会生成。</p>
                  ) : (
                    <div className="mt-3 space-y-2 text-sm">
                      {leaderboard.overall.map((entry) => (
                        <div key={entry.playerId} className="rounded-xl bg-white/5 px-3 py-2">
                          #{entry.rank} {entry.playerName} · 总杆 {entry.totalStrokes}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section id="resultScreen" className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur">
              <h2 className="text-xl font-bold">结算与赛事状态</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p>单人结算：{resultMessage || '尚未完成当前球洞'}</p>
                <p>本地多人结算：{localResultMessage || '等待比赛开始'}</p>
                <button data-testid="result-next" className="w-full rounded-2xl bg-white/10 px-4 py-3 font-semibold hover:bg-white/15" onClick={continueAfterResult}>
                  结算后继续
                </button>
              </div>
            </section>

            <section id="localLeaderboardScreen" className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur">
              <h2 className="text-xl font-bold">本地多人排行榜</h2>
              <div data-testid="local-match-leaderboard" className="mt-4 space-y-2 text-sm">
                {multiplayer.players
                  .slice()
                  .sort((a, b) => a.totalStrokes - b.totalStrokes || a.id.localeCompare(b.id))
                  .map((player) => (
                    <div key={player.id} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <span>{player.name}</span>
                        <span>{player.totalStrokes} 杆</span>
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        {multiplayer.tiedPlayerIds.includes(player.id) ? '并列领先' : player.finished ? '已完赛' : '进行中'}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    __contract: { getState: () => Record<string, unknown> };
    __game: { getState: () => GameStatus };
    __ball: { getState: () => BallState; friction: number };
    __shot: { getState: () => ShotState };
    __course: { getState: () => CourseState; obstacles: Obstacle[]; terrainFeatures: TerrainFeature[] };
    __multiplayer: { getState: () => MultiplayerState };
    __powerups: { getState: () => PowerupsState };
    __camera: { getState: () => CameraState };
    __leaderboard: { getState: () => LeaderboardState };
    __performance: { getState: () => PerformanceState };
    __THREE_SCENE__: THREE.Scene;
    __THREE_RENDERER__: THREE.WebGLRenderer;
  }
}
