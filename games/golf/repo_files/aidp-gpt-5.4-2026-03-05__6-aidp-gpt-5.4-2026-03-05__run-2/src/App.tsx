import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type LevelId = 'forest' | 'desert' | 'snow';
type SurfaceType = 'grass' | 'sand' | 'ice';
type PowerupType = 'bounce_pad' | 'speed_boost' | 'hole_in_one';
type GameScreenState =
  | 'menu'
  | 'level_select'
  | 'local_setup'
  | 'playing'
  | 'hole_complete'
  | 'tournament_complete'
  | 'local_result'
  | 'leaderboard';
type Mode = 'single' | 'local_multiplayer';

type Vec3 = { x: number; y: number; z: number };
type SurfaceDef = {
  id: string;
  type: SurfaceType;
  friction: number;
  center?: Vec3;
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
};
type ObstacleDef = {
  id: string;
  type: string;
  position: Vec3;
  solid: boolean;
  radius?: number;
  bounds?: { minX: number; maxX: number; minZ: number; maxZ: number };
  height?: number;
};
type TerrainFeature = Record<string, unknown>;
type PowerupItem = {
  id: string;
  type: PowerupType;
  position: Vec3;
  active: boolean;
  collected: boolean;
  direction?: { x: number; z: number };
};
type LevelDef = {
  id: LevelId;
  name: string;
  theme: string;
  par: number;
  colors: {
    course: string;
    rough: string;
    accent: string;
    sky: string;
    sand: string;
    ice: string;
  };
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  spawn: Vec3;
  hole: { x: number; y: number; z: number; radius: number };
  surfaces: SurfaceDef[];
  obstacles: ObstacleDef[];
  terrainFeatures: TerrainFeature[];
  powerups: PowerupItem[];
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
  collectedMap: Record<string, boolean>;
};
type LevelBestEntry = {
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
  levelBest: Record<string, LevelBestEntry[]>;
  overall: OverallEntry[];
  persisted: boolean;
};
type ScoreCard = {
  totalStrokes: number;
  totalScore: number;
  completedLevels: LevelId[];
};

type EngineState = {
  gameState: GameScreenState;
  mode: Mode;
  selectedLevelId: LevelId | null;
  currentHoleStrokes: number;
  totalStrokes: number;
  currentScore: number;
  totalScore: number;
  holeComplete: boolean;
  elapsedTime: number;
  shot: {
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
  ball: {
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
  camera: {
    mode: 'follow' | 'free';
    position: Vec3;
    target: Vec3;
    distance: number;
    minDistance: number;
    maxDistance: number;
    zoom: number;
    angle: number;
    pitch: number;
  };
  powerups: {
    items: PowerupItem[];
    inventory: Array<{ type: PowerupType; count: number }>;
    activeEffect: string | null;
    lastTriggeredId: string | null;
    placingType?: string | null;
    armedType?: string | null;
    selectedPlacedId?: string | null;
  };
  multiplayer: {
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
  performance: {
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
  leaderboard: LeaderboardState;
  contactMessage: string;
  motionMessage: string;
  aimMessage: string;
  resultMessage: string;
  playerProfile: { id: string; name: string };
};

const BUILD_ID = 'build-3d-mini-golf-v1';
const STORAGE_KEY = 'mini-golf-three-leaderboard-v1';
const SCORE_KEY = 'mini-golf-three-scorecard-v1';
const DEFAULT_INVENTORY = (): Array<{ type: PowerupType; count: number }> => [
  { type: 'bounce_pad', count: 0 },
  { type: 'speed_boost', count: 0 },
  { type: 'hole_in_one', count: 0 },
];

const vec = (x: number, y: number, z: number): Vec3 => ({ x, y, z });
const cloneVec = (v: Vec3): Vec3 => ({ ...v });
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const lengthXZ = (v: { x: number; z: number }) => Math.hypot(v.x, v.z);
const stableStringId = () => `player-${Math.random().toString(36).slice(2, 8)}`;

const LEVELS: Record<LevelId, LevelDef> = {
  forest: {
    id: 'forest',
    name: '森林回音谷',
    theme: 'forest',
    par: 4,
    colors: {
      course: '#2e8b57',
      rough: '#14532d',
      accent: '#65a30d',
      sky: '#0b2c1f',
      sand: '#d6b979',
      ice: '#bdeafe',
    },
    bounds: { minX: -18, maxX: 18, minZ: -34, maxZ: 14 },
    spawn: vec(0, 0.45, 10),
    hole: { x: 0, y: 0.15, z: -28, radius: 0.95 },
    surfaces: [
      { id: 'forest-grass-main', type: 'grass', friction: 0.18, bounds: { minX: -14, maxX: 14, minZ: -32, maxZ: 12 } },
      { id: 'forest-sand-left', type: 'sand', friction: 0.72, bounds: { minX: -12, maxX: -4, minZ: -14, maxZ: -3 } },
      { id: 'forest-sand-right', type: 'sand', friction: 0.72, bounds: { minX: 4, maxX: 12, minZ: -24, maxZ: -13 } },
    ],
    obstacles: [
      { id: 'forest-log-1', type: 'fallen_log', position: vec(-3, 0.5, -2), solid: true, bounds: { minX: -8, maxX: 1.2, minZ: -3.2, maxZ: -0.8 }, height: 1 },
      { id: 'forest-rock-1', type: 'rock', position: vec(7, 0.7, -17), solid: true, radius: 1.8, height: 1.4 },
      { id: 'forest-bump-1', type: 'hill', position: vec(0, 0.2, -10), solid: true, radius: 4.2, height: 0.8 },
    ],
    terrainFeatures: [
      { id: 'forest-slope', kind: 'ridge', center: vec(0, 0, -10), radius: 4.2, height: 0.8 },
    ],
    powerups: [
      { id: 'forest-speed', type: 'speed_boost', position: vec(-8, 0.2, -6), active: true, collected: false, direction: { x: 0.8, z: -0.4 } },
      { id: 'forest-hio', type: 'hole_in_one', position: vec(10, 0.2, -20), active: true, collected: false },
      { id: 'forest-bounce', type: 'bounce_pad', position: vec(0, 0.02, -16), active: true, collected: false, direction: { x: 0.3, z: -1 } },
    ],
  },
  desert: {
    id: 'desert',
    name: '沙漠烈日湾',
    theme: 'desert',
    par: 5,
    colors: {
      course: '#7aa35b',
      rough: '#7c5e1f',
      accent: '#eab308',
      sky: '#40210f',
      sand: '#e4c27a',
      ice: '#d7efff',
    },
    bounds: { minX: -22, maxX: 22, minZ: -36, maxZ: 16 },
    spawn: vec(-12, 0.45, 12),
    hole: { x: 13, y: 0.15, z: -30, radius: 0.95 },
    surfaces: [
      { id: 'desert-grass-main', type: 'grass', friction: 0.2, bounds: { minX: -18, maxX: 18, minZ: -33, maxZ: 13 } },
      { id: 'desert-sand-ocean', type: 'sand', friction: 0.8, bounds: { minX: -4, maxX: 10, minZ: -18, maxZ: 2 } },
      { id: 'desert-sand-trap', type: 'sand', friction: 0.8, bounds: { minX: 10, maxX: 17, minZ: -31, maxZ: -22 } },
    ],
    obstacles: [
      { id: 'desert-dune-1', type: 'dune', position: vec(-8, 0.4, -8), solid: true, radius: 3.4, height: 1.2 },
      { id: 'desert-dune-2', type: 'dune', position: vec(6, 0.4, -5), solid: true, radius: 4.2, height: 1.5 },
      { id: 'desert-rock-1', type: 'rock', position: vec(12, 0.8, -13), solid: true, radius: 2.1, height: 1.8 },
    ],
    terrainFeatures: [
      { id: 'desert-camber', kind: 'dune_field', center: vec(-8, 0, -8), radius: 3.4, height: 1.2 },
      { id: 'desert-camber-2', kind: 'dune_field', center: vec(6, 0, -5), radius: 4.2, height: 1.5 },
    ],
    powerups: [
      { id: 'desert-speed', type: 'speed_boost', position: vec(-2, 0.02, -24), active: true, collected: false, direction: { x: 1, z: -0.1 } },
      { id: 'desert-hio', type: 'hole_in_one', position: vec(-14, 0.2, -14), active: true, collected: false },
      { id: 'desert-bounce', type: 'bounce_pad', position: vec(14, 0.02, -7), active: true, collected: false, direction: { x: -0.9, z: -0.3 } },
    ],
  },
  snow: {
    id: 'snow',
    name: '冰雪极光峰',
    theme: 'snow',
    par: 4,
    colors: {
      course: '#bfe8ff',
      rough: '#d9f4ff',
      accent: '#60a5fa',
      sky: '#10294f',
      sand: '#f3f4f6',
      ice: '#c5f3ff',
    },
    bounds: { minX: -20, maxX: 20, minZ: -35, maxZ: 14 },
    spawn: vec(0, 0.45, 12),
    hole: { x: 0, y: 0.15, z: -31, radius: 0.95 },
    surfaces: [
      { id: 'snow-grass-main', type: 'grass', friction: 0.16, bounds: { minX: -16, maxX: 16, minZ: -32, maxZ: 12 } },
      { id: 'snow-ice-lane', type: 'ice', friction: 0.018, bounds: { minX: -5, maxX: 5, minZ: -27, maxZ: 6 } },
      { id: 'snow-sand-soft', type: 'sand', friction: 0.64, bounds: { minX: -14, maxX: -6, minZ: -20, maxZ: -10 } },
    ],
    obstacles: [
      { id: 'snow-crystal-1', type: 'ice_crystal', position: vec(-7, 0.9, -15), solid: true, radius: 1.8, height: 2.2 },
      { id: 'snow-crystal-2', type: 'ice_crystal', position: vec(8, 0.9, -9), solid: true, radius: 1.6, height: 2.1 },
      { id: 'snow-mound', type: 'snow_mound', position: vec(0, 0.45, -22), solid: true, radius: 3.5, height: 1.1 },
    ],
    terrainFeatures: [
      { id: 'snow-mound-feature', kind: 'mound', center: vec(0, 0, -22), radius: 3.5, height: 1.1 },
      { id: 'snow-ice-lane', kind: 'slick_lane', bounds: { minX: -5, maxX: 5, minZ: -27, maxZ: 6 }, friction: 0.018 },
    ],
    powerups: [
      { id: 'snow-speed', type: 'speed_boost', position: vec(0, 0.02, -18), active: true, collected: false, direction: { x: 0, z: -1 } },
      { id: 'snow-hio', type: 'hole_in_one', position: vec(12, 0.2, -6), active: true, collected: false },
      { id: 'snow-bounce', type: 'bounce_pad', position: vec(-10, 0.02, -26), active: true, collected: false, direction: { x: 0.9, z: -0.1 } },
    ],
  },
};

const emptyLeaderboard = (): LeaderboardState => ({ levelBest: { forest: [], desert: [], snow: [] }, overall: [], persisted: true });

function readLeaderboard(): LeaderboardState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyLeaderboard();
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
    return emptyLeaderboard();
  }
}

function writeLeaderboard(board: LeaderboardState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
}

function readScoreCard(): ScoreCard {
  try {
    const raw = localStorage.getItem(SCORE_KEY);
    if (!raw) return { totalStrokes: 0, totalScore: 0, completedLevels: [] };
    return JSON.parse(raw) as ScoreCard;
  } catch {
    return { totalStrokes: 0, totalScore: 0, completedLevels: [] };
  }
}

function writeScoreCard(card: ScoreCard) {
  localStorage.setItem(SCORE_KEY, JSON.stringify(card));
}

function rankLevelEntries(entries: Omit<LevelBestEntry, 'rank' | 'relativeToPar'>[], par: number): LevelBestEntry[] {
  return [...entries]
    .sort((a, b) => a.strokes - b.strokes || a.achievedAt - b.achievedAt || a.playerId.localeCompare(b.playerId))
    .map((entry, index) => ({ ...entry, rank: index + 1, relativeToPar: entry.strokes - par, par }));
}

function rankOverall(entries: Omit<OverallEntry, 'rank'>[]): OverallEntry[] {
  return [...entries]
    .sort((a, b) => a.totalStrokes - b.totalStrokes || a.achievedAt - b.achievedAt || a.playerId.localeCompare(b.playerId))
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}

function terrainHeight(level: LevelDef, x: number, z: number): number {
  let height = 0;
  for (const feature of level.terrainFeatures) {
    const center = feature.center as Vec3 | undefined;
    const radius = typeof feature.radius === 'number' ? feature.radius : undefined;
    const bumpHeight = typeof feature.height === 'number' ? feature.height : 0;
    if (center && radius) {
      const dx = x - center.x;
      const dz = z - center.z;
      const dist = Math.hypot(dx, dz);
      if (dist < radius) {
        const ratio = 1 - dist / radius;
        height += bumpHeight * ratio * ratio;
      }
    }
  }
  return height;
}

function getSurfaceAt(level: LevelDef, x: number, z: number): SurfaceDef {
  const matched = level.surfaces.find(
    (surface) => x >= surface.bounds.minX && x <= surface.bounds.maxX && z >= surface.bounds.minZ && z <= surface.bounds.maxZ,
  );
  return matched ?? level.surfaces[0];
}

function inventoryCount(inventory: Array<{ type: PowerupType; count: number }>, type: PowerupType) {
  return inventory.find((item) => item.type === type)?.count ?? 0;
}

function App() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<EngineState>({
    gameState: 'menu',
    mode: 'single',
    selectedLevelId: null,
    currentHoleStrokes: 0,
    totalStrokes: 0,
    currentScore: 0,
    totalScore: 0,
    holeComplete: false,
    elapsedTime: 0,
    shot: {
      dragging: false,
      canShoot: true,
      startScreen: null,
      currentScreen: null,
      direction: { x: 0, z: -1 },
      power: 0,
      minPower: 0.1,
      maxPower: 12,
      strokeCount: 0,
    },
    ball: {
      position: cloneVec(LEVELS.forest.spawn),
      velocity: vec(0, 0, 0),
      speed: 0,
      radius: 0.45,
      moving: false,
      sleeping: true,
      airborne: false,
      inHole: false,
      outOfBounds: false,
      currentSurface: 'grass',
      friction: LEVELS.forest.surfaces[0].friction,
      lastCollision: null,
      lastSafePosition: cloneVec(LEVELS.forest.spawn),
    },
    camera: {
      mode: 'follow',
      position: vec(0, 12, 18),
      target: vec(0, 0, 0),
      distance: 18,
      minDistance: 8,
      maxDistance: 28,
      zoom: 1,
      angle: 0,
      pitch: 0.55,
    },
    powerups: {
      items: [],
      inventory: DEFAULT_INVENTORY(),
      activeEffect: null,
      lastTriggeredId: null,
      placingType: null,
      armedType: null,
      selectedPlacedId: null,
    },
    multiplayer: {
      enabled: false,
      mode: 'local',
      status: 'setup',
      playerCount: 2,
      currentPlayerId: null,
      turnIndex: 0,
      round: 1,
      revision: 0,
      players: [],
      winnerId: null,
      tiedPlayerIds: [],
    },
    performance: {
      fixedStep: 1 / 60,
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
        spheres: { capacity: 4, createdTotal: 1, reused: 0 },
        vectors: { capacity: 32, createdTotal: 8, reused: 0 },
      },
    },
    leaderboard: readLeaderboard(),
    contactMessage: '等待开球',
    motionMessage: '静止',
    aimMessage: '拖动球场视图进行瞄准',
    resultMessage: '',
    playerProfile: { id: stableStringId(), name: 'Solo Player' },
  });
  const [uiTick, setUiTick] = useState(0);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const ballMeshRef = useRef<THREE.Mesh | null>(null);
  const holeMeshRef = useRef<THREE.Mesh | null>(null);
  const pickupRefs = useRef<Record<string, THREE.Object3D>>({});
  const lastTimeRef = useRef<number>(performance.now());
  const [playerCount, setPlayerCount] = useState(2);

  const state = engineRef.current;
  const currentLevel = state.selectedLevelId ? LEVELS[state.selectedLevelId] : null;

  const syncUi = () => {
    engineRef.current.performance.reactCommitCount += 1;
    setUiTick((tick) => tick + 1);
  };

  const buildLeaderboard = (board: LeaderboardState): LeaderboardState => {
    const next: LeaderboardState = {
      levelBest: {
        forest: rankLevelEntries(board.levelBest.forest.map(({ rank, relativeToPar, ...rest }) => rest), LEVELS.forest.par),
        desert: rankLevelEntries(board.levelBest.desert.map(({ rank, relativeToPar, ...rest }) => rest), LEVELS.desert.par),
        snow: rankLevelEntries(board.levelBest.snow.map(({ rank, relativeToPar, ...rest }) => rest), LEVELS.snow.par),
      },
      overall: [],
      persisted: true,
    };

    const playerIds = new Set<string>();
    for (const list of Object.values(next.levelBest)) {
      list.forEach((item) => playerIds.add(item.playerId));
    }

    const overallRaw: Omit<OverallEntry, 'rank'>[] = [];
    for (const playerId of playerIds) {
      const forest = next.levelBest.forest.find((item) => item.playerId === playerId);
      const desert = next.levelBest.desert.find((item) => item.playerId === playerId);
      const snow = next.levelBest.snow.find((item) => item.playerId === playerId);
      if (forest && desert && snow) {
        overallRaw.push({
          playerId,
          playerName: forest.playerName,
          levelStrokes: { forest: forest.strokes, desert: desert.strokes, snow: snow.strokes },
          totalStrokes: forest.strokes + desert.strokes + snow.strokes,
          achievedAt: Math.max(forest.achievedAt, desert.achievedAt, snow.achievedAt),
        });
      }
    }
    next.overall = rankOverall(overallRaw);
    return next;
  };

  const saveLeaderboardScore = (levelId: LevelId, strokes: number, playerId: string, playerName: string) => {
    const board = readLeaderboard();
    const levelEntries = board.levelBest[levelId] ?? [];
    const existing = levelEntries.find((entry) => entry.playerId === playerId);
    const achievedAt = existing && existing.strokes <= strokes ? existing.achievedAt : Date.now();
    const filtered = levelEntries.filter((entry) => entry.playerId !== playerId);
    const effectiveStrokes = existing ? Math.min(existing.strokes, strokes) : strokes;
    filtered.push({
      playerId,
      playerName,
      strokes: effectiveStrokes,
      par: LEVELS[levelId].par,
      relativeToPar: effectiveStrokes - LEVELS[levelId].par,
      achievedAt,
      rank: 0,
    });
    const next = buildLeaderboard({ ...board, levelBest: { ...board.levelBest, [levelId]: filtered }, overall: board.overall, persisted: true });
    writeLeaderboard(next);
    engineRef.current.leaderboard = next;
  };

  const applyPlayerStateToBall = (player: PlayerState) => {
    const level = LEVELS[engineRef.current.selectedLevelId ?? 'forest'];
    engineRef.current.ball.position = cloneVec(player.ballPosition);
    engineRef.current.ball.lastSafePosition = cloneVec(player.ballPosition);
    engineRef.current.ball.velocity = vec(0, 0, 0);
    engineRef.current.ball.speed = 0;
    engineRef.current.ball.moving = false;
    engineRef.current.ball.sleeping = true;
    engineRef.current.ball.inHole = player.finished;
    const surface = getSurfaceAt(level, player.ballPosition.x, player.ballPosition.z);
    engineRef.current.ball.currentSurface = surface.type;
    engineRef.current.ball.friction = surface.friction;
    engineRef.current.currentHoleStrokes = player.holeStrokes;
    engineRef.current.shot.strokeCount = player.holeStrokes;
    engineRef.current.powerups.inventory = player.powerupInventory.map((item) => ({ ...item }));
    engineRef.current.powerups.armedType = player.armedPowerup;
  };

  const createPlayers = (count: number, level: LevelDef): PlayerState[] =>
    Array.from({ length: count }, (_, index) => ({
      id: `P${index + 1}`,
      name: `玩家 ${index + 1}`,
      holeStrokes: 0,
      totalStrokes: 0,
      finished: false,
      ballPosition: cloneVec(level.spawn),
      powerupInventory: DEFAULT_INVENTORY(),
      armedPowerup: null,
      collectedMap: {},
    }));

  const startGame = (levelId: LevelId, mode: Mode) => {
    const level = LEVELS[levelId];
    const scoreCard = readScoreCard();
    const next = engineRef.current;
    next.selectedLevelId = levelId;
    next.gameState = 'playing';
    next.mode = mode;
    next.currentHoleStrokes = 0;
    next.currentScore = 0;
    next.holeComplete = false;
    next.elapsedTime = 0;
    next.resultMessage = '';
    next.contactMessage = '球位已准备';
    next.motionMessage = '静止';
    next.aimMessage = '按住并拖动球场进行蓄力';
    next.totalStrokes = scoreCard.totalStrokes;
    next.totalScore = scoreCard.totalScore;
    next.shot = { ...next.shot, dragging: false, canShoot: true, startScreen: null, currentScreen: null, power: 0, strokeCount: 0, direction: { x: 0, z: -1 } };
    next.ball.position = cloneVec(level.spawn);
    next.ball.lastSafePosition = cloneVec(level.spawn);
    next.ball.velocity = vec(0, 0, 0);
    next.ball.speed = 0;
    next.ball.inHole = false;
    next.ball.outOfBounds = false;
    next.ball.moving = false;
    next.ball.sleeping = true;
    next.ball.airborne = false;
    const surface = getSurfaceAt(level, level.spawn.x, level.spawn.z);
    next.ball.currentSurface = surface.type;
    next.ball.friction = surface.friction;
    next.powerups.items = level.powerups.map((item) => ({ ...item, collected: false, active: true }));
    next.powerups.inventory = DEFAULT_INVENTORY();
    next.powerups.activeEffect = null;
    next.powerups.lastTriggeredId = null;
    next.powerups.armedType = null;
    next.multiplayer.enabled = mode === 'local_multiplayer';
    next.multiplayer.status = mode === 'local_multiplayer' ? 'playing' : 'setup';
    next.multiplayer.playerCount = playerCount;
    next.multiplayer.turnIndex = 0;
    next.multiplayer.round = 1;
    next.multiplayer.revision += 1;
    next.multiplayer.winnerId = null;
    next.multiplayer.tiedPlayerIds = [];
    next.multiplayer.players = mode === 'local_multiplayer' ? createPlayers(playerCount, level) : [];
    next.multiplayer.currentPlayerId = mode === 'local_multiplayer' ? 'P1' : null;
    if (mode === 'local_multiplayer') {
      applyPlayerStateToBall(next.multiplayer.players[0]);
    }
    syncUi();
  };

  const completeHole = () => {
    const next = engineRef.current;
    const levelId = next.selectedLevelId as LevelId;
    const level = LEVELS[levelId];
    next.holeComplete = true;
    next.gameState = next.mode === 'local_multiplayer' ? 'hole_complete' : 'hole_complete';
    next.ball.inHole = true;
    next.ball.moving = false;
    next.ball.sleeping = true;
    next.ball.velocity = vec(0, 0, 0);
    const strokes = next.currentHoleStrokes;
    const scoreGain = Math.max(50, 250 - strokes * 25 + level.par * 10);
    next.currentScore = scoreGain;
    next.totalScore += scoreGain;
    next.totalStrokes += strokes;
    const scoreCard = readScoreCard();
    const updatedCard: ScoreCard = {
      totalStrokes: scoreCard.totalStrokes + strokes,
      totalScore: scoreCard.totalScore + scoreGain,
      completedLevels: Array.from(new Set([...scoreCard.completedLevels, levelId])),
    };
    writeScoreCard(updatedCard);
    next.resultMessage = `完成 ${level.name}，共 ${strokes} 杆，得分 ${scoreGain}`;

    if (next.mode === 'single') {
      saveLeaderboardScore(levelId, strokes, next.playerProfile.id, next.playerProfile.name);
      next.gameState = 'hole_complete';
    } else {
      const currentIndex = next.multiplayer.turnIndex;
      const player = next.multiplayer.players[currentIndex];
      player.finished = true;
      player.holeStrokes = strokes;
      player.totalStrokes = strokes;
      player.ballPosition = cloneVec(next.ball.position);
      player.powerupInventory = next.powerups.inventory.map((item) => ({ ...item }));
      player.armedPowerup = (next.powerups.armedType as 'hole_in_one' | null) ?? null;
      const unfinished = next.multiplayer.players.findIndex((p) => !p.finished);
      if (unfinished >= 0) {
        next.multiplayer.turnIndex = unfinished;
        next.multiplayer.currentPlayerId = next.multiplayer.players[unfinished].id;
        next.multiplayer.round = unfinished === 0 ? next.multiplayer.round + 1 : next.multiplayer.round;
        applyPlayerStateToBall(next.multiplayer.players[unfinished]);
        next.holeComplete = false;
        next.gameState = 'playing';
        next.resultMessage = `${player.name} 已入洞，轮到 ${next.multiplayer.players[unfinished].name}`;
      } else {
        next.multiplayer.status = 'complete';
        const sorted = [...next.multiplayer.players].sort((a, b) => a.totalStrokes - b.totalStrokes || a.id.localeCompare(b.id));
        const best = sorted[0]?.totalStrokes ?? 0;
        const ties = sorted.filter((item) => item.totalStrokes === best).map((item) => item.id);
        next.multiplayer.winnerId = ties.length === 1 ? ties[0] : null;
        next.multiplayer.tiedPlayerIds = ties;
        next.gameState = 'local_result';
      }
    }
    syncUi();
  };

  const resetBall = () => {
    const next = engineRef.current;
    next.ball.position = cloneVec(next.ball.lastSafePosition);
    next.ball.velocity = vec(0, 0, 0);
    next.ball.speed = 0;
    next.ball.outOfBounds = false;
    next.ball.moving = false;
    next.ball.sleeping = true;
    next.contactMessage = '已重置到上一个安全位置';
    if (next.mode === 'local_multiplayer') {
      const player = next.multiplayer.players[next.multiplayer.turnIndex];
      if (player) player.ballPosition = cloneVec(next.ball.position);
    }
    syncUi();
  };

  const armHoleInOne = () => {
    const next = engineRef.current;
    if (inventoryCount(next.powerups.inventory, 'hole_in_one') > 0) {
      next.powerups.armedType = 'hole_in_one';
      next.aimMessage = '已武装一杆入洞道具，下一次合法击球生效';
      if (next.mode === 'local_multiplayer') {
        next.multiplayer.players[next.multiplayer.turnIndex].armedPowerup = 'hole_in_one';
      }
      syncUi();
    }
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#09131f');
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / Math.max(1, mount.clientHeight), 0.1, 200);
    camera.position.set(0, 12, 18);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight('#dbeafe', '#1f2937', 1.4);
    const dir = new THREE.DirectionalLight('#fff7ed', 1.8);
    dir.position.set(10, 18, 8);
    dir.castShadow = true;
    scene.add(hemi, dir);

    const ambientCourse = new THREE.Group();
    scene.add(ambientCourse);

    const ground = new THREE.Mesh(new THREE.BoxGeometry(40, 1, 56), new THREE.MeshStandardMaterial({ color: '#1f7a48' }));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    ambientCourse.add(ground);

    const ballMesh = new THREE.Mesh(new THREE.SphereGeometry(0.45, 32, 32), new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.25, metalness: 0.1 }));
    ballMesh.castShadow = true;
    scene.add(ballMesh);

    const holeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.22, 32), new THREE.MeshStandardMaterial({ color: '#111827' }));
    holeMesh.receiveShadow = true;
    scene.add(holeMesh);

    const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 12), new THREE.MeshStandardMaterial({ color: '#e5e7eb' }));
    const flag = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.5, 0.06), new THREE.MeshStandardMaterial({ color: '#ef4444' }));
    flag.position.set(0.55, 1.1, 0);
    flagPole.add(flag);
    scene.add(flagPole);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    ballMeshRef.current = ballMesh;
    holeMeshRef.current = holeMesh;
    engineRef.current.performance.runtimeMountCount += 1;
    window.__THREE_SCENE__ = scene;
    window.__THREE_RENDERER__ = renderer;

    const rebuildCourse = () => {
      while (ambientCourse.children.length > 1) {
        ambientCourse.remove(ambientCourse.children[1]);
      }
      pickupRefs.current = {};
      const level = engineRef.current.selectedLevelId ? LEVELS[engineRef.current.selectedLevelId] : LEVELS.forest;
      scene.background = new THREE.Color(level.colors.sky);
      (ground.material as THREE.MeshStandardMaterial).color = new THREE.Color(level.colors.course);
      (ground.geometry as THREE.BoxGeometry).dispose();
      ground.geometry = new THREE.BoxGeometry(level.bounds.maxX - level.bounds.minX + 6, 1, level.bounds.maxZ - level.bounds.minZ + 8);

      for (const surface of level.surfaces) {
        if (surface.type === 'grass') continue;
        const width = surface.bounds.maxX - surface.bounds.minX;
        const depth = surface.bounds.maxZ - surface.bounds.minZ;
        const color = surface.type === 'sand' ? level.colors.sand : level.colors.ice;
        const patch = new THREE.Mesh(
          new THREE.BoxGeometry(width, 0.08, depth),
          new THREE.MeshStandardMaterial({ color, transparent: surface.type === 'ice', opacity: surface.type === 'ice' ? 0.9 : 1 }),
        );
        patch.position.set((surface.bounds.minX + surface.bounds.maxX) / 2, 0.02, (surface.bounds.minZ + surface.bounds.maxZ) / 2);
        patch.receiveShadow = true;
        ambientCourse.add(patch);
      }

      level.obstacles.forEach((obstacle) => {
        let mesh: THREE.Mesh;
        if (obstacle.bounds) {
          const width = obstacle.bounds.maxX - obstacle.bounds.minX;
          const depth = obstacle.bounds.maxZ - obstacle.bounds.minZ;
          mesh = new THREE.Mesh(
            new THREE.BoxGeometry(width, obstacle.height ?? 1, depth),
            new THREE.MeshStandardMaterial({ color: level.colors.rough }),
          );
          mesh.position.set((obstacle.bounds.minX + obstacle.bounds.maxX) / 2, (obstacle.height ?? 1) / 2, (obstacle.bounds.minZ + obstacle.bounds.maxZ) / 2);
        } else {
          mesh = new THREE.Mesh(
            new THREE.CylinderGeometry(obstacle.radius ?? 1.5, obstacle.radius ?? 1.8, obstacle.height ?? 1.6, 16),
            new THREE.MeshStandardMaterial({ color: obstacle.type.includes('crystal') ? level.colors.ice : level.colors.rough }),
          );
          mesh.position.set(obstacle.position.x, (obstacle.height ?? 1.6) / 2, obstacle.position.z);
        }
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        ambientCourse.add(mesh);
      });

      level.powerups.forEach((item) => {
        const color = item.type === 'hole_in_one' ? '#f43f5e' : item.type === 'speed_boost' ? '#22c55e' : '#f59e0b';
        const mesh = new THREE.Mesh(
          item.type === 'bounce_pad' ? new THREE.BoxGeometry(1.8, 0.1, 1.8) : new THREE.TorusKnotGeometry(0.45, 0.15, 48, 8),
          new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.15 }),
        );
        mesh.position.set(item.position.x, item.position.y + (item.type === 'bounce_pad' ? 0.05 : 0.45), item.position.z);
        mesh.castShadow = true;
        ambientCourse.add(mesh);
        pickupRefs.current[item.id] = mesh;
      });

      holeMesh.position.set(level.hole.x, level.hole.y, level.hole.z);
      flagPole.position.set(level.hole.x, 1.6, level.hole.z);
      ballMesh.position.set(level.spawn.x, level.spawn.y, level.spawn.z);
    };

    rebuildCourse();

    const resize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      cameraRef.current.aspect = width / Math.max(1, height);
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    const onPointerDown = (event: PointerEvent) => {
      const next = engineRef.current;
      if (next.gameState !== 'playing' || next.ball.moving || next.ball.inHole) return;
      next.shot.dragging = true;
      next.shot.startScreen = { x: event.clientX, y: event.clientY };
      next.shot.currentScreen = { x: event.clientX, y: event.clientY };
      next.aimMessage = '正在瞄准';
      syncUi();
    };

    const onPointerMove = (event: PointerEvent) => {
      const next = engineRef.current;
      if (!next.shot.dragging || !next.shot.startScreen) return;
      next.shot.currentScreen = { x: event.clientX, y: event.clientY };
      const dx = event.clientX - next.shot.startScreen.x;
      const dy = event.clientY - next.shot.startScreen.y;
      const direction = { x: clamp(-dx / 120, -1, 1), z: clamp(-dy / 120, -1, 1) };
      const len = Math.max(0.001, lengthXZ(direction));
      next.shot.direction = { x: direction.x / len, z: direction.z / len };
      next.shot.power = clamp(Math.hypot(dx, dy) / 18, next.shot.minPower, next.shot.maxPower);
      next.aimMessage = `方向 ${next.shot.direction.x.toFixed(2)}, ${next.shot.direction.z.toFixed(2)} / 力度 ${next.shot.power.toFixed(2)}`;
      syncUi();
    };

    const spendInventory = (type: PowerupType) => {
      const inv = engineRef.current.powerups.inventory;
      const target = inv.find((item) => item.type === type);
      if (target && target.count > 0) target.count -= 1;
    };

    const onPointerUp = () => {
      const next = engineRef.current;
      if (!next.shot.dragging) return;
      next.shot.dragging = false;
      next.shot.canShoot = true;
      if (next.ball.moving || next.ball.inHole || next.shot.power <= 0) {
        next.shot.startScreen = null;
        next.shot.currentScreen = null;
        return;
      }
      const level = LEVELS[next.selectedLevelId ?? 'forest'];
      let dir = next.shot.direction;
      let power = next.shot.power;
      if (next.powerups.armedType === 'hole_in_one' && inventoryCount(next.powerups.inventory, 'hole_in_one') > 0) {
        const toHole = { x: level.hole.x - next.ball.position.x, z: level.hole.z - next.ball.position.z };
        const len = Math.max(0.001, lengthXZ(toHole));
        dir = { x: toHole.x / len, z: toHole.z / len };
        power = clamp(len * 0.78, next.shot.minPower, next.shot.maxPower);
        spendInventory('hole_in_one');
        next.powerups.activeEffect = 'hole_in_one';
        next.powerups.armedType = null;
      }
      next.ball.velocity = vec(dir.x * power, 0, dir.z * power);
      next.ball.moving = true;
      next.ball.sleeping = false;
      next.currentHoleStrokes += 1;
      next.shot.strokeCount = next.currentHoleStrokes;
      next.motionMessage = '球体滚动中';
      next.contactMessage = `从 ${next.ball.currentSurface} 发球`;
      if (next.mode === 'local_multiplayer') {
        const player = next.multiplayer.players[next.multiplayer.turnIndex];
        player.holeStrokes = next.currentHoleStrokes;
        player.totalStrokes = next.currentHoleStrokes;
        player.powerupInventory = next.powerups.inventory.map((item) => ({ ...item }));
        player.armedPowerup = (next.powerups.armedType as 'hole_in_one' | null) ?? null;
      }
      next.shot.startScreen = null;
      next.shot.currentScreen = null;
      syncUi();
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('resize', resize);
    engineRef.current.performance.listenerCount += 4;

    const animate = () => {
      const now = performance.now();
      const delta = Math.min(0.033, (now - lastTimeRef.current) / 1000);
      lastTimeRef.current = now;
      const next = engineRef.current;
      next.performance.renderFrame += 1;
      next.performance.logicLoopCount += 1;
      next.elapsedTime += next.gameState === 'playing' ? delta : 0;
      next.performance.accumulator = Math.min(1, next.performance.accumulator + delta);
      next.performance.simulationTick += 1;

      const level = next.selectedLevelId ? LEVELS[next.selectedLevelId] : LEVELS.forest;
      const surface = getSurfaceAt(level, next.ball.position.x, next.ball.position.z);
      next.ball.currentSurface = surface.type;
      next.ball.friction = surface.friction;

      if (next.ball.moving && !next.ball.inHole) {
        next.ball.position.x += next.ball.velocity.x * delta;
        next.ball.position.z += next.ball.velocity.z * delta;
        next.ball.speed = Math.hypot(next.ball.velocity.x, next.ball.velocity.z);

        const slopeEps = 0.2;
        const h0 = terrainHeight(level, next.ball.position.x, next.ball.position.z);
        const hx = terrainHeight(level, next.ball.position.x + slopeEps, next.ball.position.z) - h0;
        const hz = terrainHeight(level, next.ball.position.x, next.ball.position.z + slopeEps) - h0;
        next.ball.velocity.x += -hx * 2.4 * delta;
        next.ball.velocity.z += -hz * 2.4 * delta;

        const frictionFactor = Math.max(0, 1 - next.ball.friction * delta * 2.2);
        next.ball.velocity.x *= frictionFactor;
        next.ball.velocity.z *= frictionFactor;

        for (const obstacle of level.obstacles) {
          let collided = false;
          if (obstacle.bounds) {
            const closestX = clamp(next.ball.position.x, obstacle.bounds.minX, obstacle.bounds.maxX);
            const closestZ = clamp(next.ball.position.z, obstacle.bounds.minZ, obstacle.bounds.maxZ);
            const dx = next.ball.position.x - closestX;
            const dz = next.ball.position.z - closestZ;
            collided = dx * dx + dz * dz < next.ball.radius * next.ball.radius;
            if (collided) {
              if (Math.abs(dx) > Math.abs(dz)) next.ball.velocity.x *= -0.82;
              else next.ball.velocity.z *= -0.82;
            }
          } else if (obstacle.radius) {
            const dx = next.ball.position.x - obstacle.position.x;
            const dz = next.ball.position.z - obstacle.position.z;
            const dist = Math.hypot(dx, dz);
            if (dist < obstacle.radius + next.ball.radius) {
              collided = true;
              const nx = dx / Math.max(0.001, dist);
              const nz = dz / Math.max(0.001, dist);
              const dot = next.ball.velocity.x * nx + next.ball.velocity.z * nz;
              next.ball.velocity.x -= 1.7 * dot * nx;
              next.ball.velocity.z -= 1.7 * dot * nz;
              next.ball.position.x = obstacle.position.x + nx * (obstacle.radius + next.ball.radius + 0.05);
              next.ball.position.z = obstacle.position.z + nz * (obstacle.radius + next.ball.radius + 0.05);
            }
          }
          if (collided) {
            next.ball.lastCollision = obstacle.id;
            next.contactMessage = `碰撞 ${obstacle.type}`;
          }
        }

        next.powerups.items.forEach((item) => {
          const player = next.mode === 'local_multiplayer' ? next.multiplayer.players[next.multiplayer.turnIndex] : null;
          const alreadyCollected = player ? !!player.collectedMap[item.id] : item.collected;
          if (alreadyCollected) return;
          const dx = next.ball.position.x - item.position.x;
          const dz = next.ball.position.z - item.position.z;
          const dist = Math.hypot(dx, dz);
          if (dist < 1.25) {
            next.powerups.lastTriggeredId = item.id;
            if (item.type === 'speed_boost') {
              const direction = item.direction ?? { x: 0, z: -1 };
              const len = Math.max(0.001, lengthXZ(direction));
              const boost = 3.2;
              next.ball.velocity.x = clamp(next.ball.velocity.x + (direction.x / len) * boost, -14, 14);
              next.ball.velocity.z = clamp(next.ball.velocity.z + (direction.z / len) * boost, -14, 14);
              next.powerups.activeEffect = 'speed_boost';
              next.contactMessage = '触发加速带';
            } else if (item.type === 'bounce_pad') {
              const direction = item.direction ?? { x: 0.6, z: -0.8 };
              const len = Math.max(0.001, lengthXZ(direction));
              next.ball.velocity.x = clamp((direction.x / len) * 7.5, -14, 14);
              next.ball.velocity.z = clamp((direction.z / len) * 7.5, -14, 14);
              next.powerups.activeEffect = 'bounce_pad';
              next.contactMessage = '触发反弹垫';
            } else {
              const slot = next.powerups.inventory.find((inv) => inv.type === 'hole_in_one');
              if (slot) slot.count += 1;
              next.powerups.activeEffect = 'hole_in_one_pickup';
              next.contactMessage = '拾取一杆入洞道具';
            }
            if (player) {
              player.collectedMap[item.id] = true;
              player.powerupInventory = next.powerups.inventory.map((inv) => ({ ...inv }));
            } else {
              item.collected = true;
              item.active = false;
            }
          }
        });

        if (
          next.ball.position.x < level.bounds.minX ||
          next.ball.position.x > level.bounds.maxX ||
          next.ball.position.z < level.bounds.minZ ||
          next.ball.position.z > level.bounds.maxZ
        ) {
          next.ball.outOfBounds = true;
          next.ball.moving = false;
          next.motionMessage = '出界';
          next.contactMessage = '球体离开边界';
        } else {
          next.ball.lastSafePosition = cloneVec(next.ball.position);
        }

        const holeDx = next.ball.position.x - level.hole.x;
        const holeDz = next.ball.position.z - level.hole.z;
        const holeDist = Math.hypot(holeDx, holeDz);
        if (holeDist < level.hole.radius * 0.8 && next.ball.speed < 6.5) {
          next.ball.position.x = level.hole.x;
          next.ball.position.z = level.hole.z;
          completeHole();
        }

        if (Math.hypot(next.ball.velocity.x, next.ball.velocity.z) < 0.05) {
          next.ball.velocity.x = 0;
          next.ball.velocity.z = 0;
          next.ball.moving = false;
          next.ball.sleeping = true;
          next.motionMessage = '静止';
          if (next.mode === 'local_multiplayer') {
            next.multiplayer.players[next.multiplayer.turnIndex].ballPosition = cloneVec(next.ball.position);
          }
        }
      }

      next.ball.speed = Math.hypot(next.ball.velocity.x, next.ball.velocity.z);
      next.ball.position.y = 0.45 + terrainHeight(level, next.ball.position.x, next.ball.position.z);
      next.ball.airborne = false;
      next.camera.target = cloneVec(next.ball.position);
      next.camera.position = {
        x: next.ball.position.x + Math.sin(next.camera.angle) * next.camera.distance,
        y: next.ball.position.y + next.camera.distance * next.camera.pitch,
        z: next.ball.position.z + Math.cos(next.camera.angle) * next.camera.distance,
      };

      ballMesh.position.set(next.ball.position.x, next.ball.position.y, next.ball.position.z);
      camera.position.set(next.camera.position.x, next.camera.position.y, next.camera.position.z);
      camera.lookAt(next.camera.target.x, next.camera.target.y, next.camera.target.z);

      Object.entries(pickupRefs.current).forEach(([id, mesh]) => {
        const item = next.powerups.items.find((pickup) => pickup.id === id);
        const player = next.mode === 'local_multiplayer' ? next.multiplayer.players[next.multiplayer.turnIndex] : null;
        const collected = player ? !!player.collectedMap[id] : item?.collected;
        mesh.visible = !collected;
        mesh.rotation.y += 0.02;
      });

      renderer.render(scene, camera);
      if (next.performance.renderFrame % 8 === 0) syncUi();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    const contract = {
      getState: () => ({
        version: '1.0.0',
        gameType: '3d-mini-golf',
        renderer: 'threejs',
        stateSource: 'live',
        hooksReady: true,
        hookNames: ['__contract', '__game', '__ball', '__shot', '__course', '__multiplayer', '__powerups', '__camera', '__leaderboard', '__performance'],
        buildId: BUILD_ID,
      }),
    };

    const bindHooks = () => {
      window.__contract = contract;
      window.__game = {
        getState: () => {
          const s = engineRef.current;
          const level = s.selectedLevelId ? LEVELS[s.selectedLevelId] : null;
          return {
            ready: true,
            gameState: s.gameState,
            mode: s.mode,
            currentLevel: level ? { id: level.id, name: level.name, theme: level.theme, par: level.par } : null,
            currentHoleStrokes: s.currentHoleStrokes,
            totalStrokes: s.totalStrokes,
            currentScore: s.currentScore,
            totalScore: s.totalScore,
            holeComplete: s.holeComplete,
            elapsedTime: Number(s.elapsedTime.toFixed(3)),
          };
        },
      };
      window.__ball = { getState: () => JSON.parse(JSON.stringify(engineRef.current.ball)) };
      window.__shot = { getState: () => JSON.parse(JSON.stringify(engineRef.current.shot)) };
      window.__course = {
        getState: () => {
          const level = LEVELS[engineRef.current.selectedLevelId ?? 'forest'];
          return {
            levelId: level.id,
            name: level.name,
            theme: level.theme,
            par: level.par,
            bounds: level.bounds,
            spawn: level.spawn,
            hole: level.hole,
            surfaces: level.surfaces,
            obstacles: level.obstacles,
            terrainFeatures: level.terrainFeatures,
            obstacleCount: level.obstacles.length,
            sceneObjectCount: scene.children.length,
            loaded: true,
          };
        },
      };
      window.__multiplayer = { getState: () => JSON.parse(JSON.stringify(engineRef.current.multiplayer)) };
      window.__powerups = { getState: () => JSON.parse(JSON.stringify(engineRef.current.powerups)) };
      window.__camera = { getState: () => JSON.parse(JSON.stringify(engineRef.current.camera)) };
      window.__leaderboard = { getState: () => JSON.parse(JSON.stringify(engineRef.current.leaderboard)) };
      window.__performance = { getState: () => JSON.parse(JSON.stringify(engineRef.current.performance)) };
    };
    bindHooks();

    syncUi();

    return () => {
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', resize);
      engineRef.current.performance.listenerCount = Math.max(0, engineRef.current.performance.listenerCount - 4);
      engineRef.current.performance.runtimeCleanupCount += 1;
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;
    const level = currentLevel ?? LEVELS.forest;
    const stateNow = engineRef.current;
    stateNow.leaderboard = readLeaderboard();
    const surface = getSurfaceAt(level, stateNow.ball.position.x, stateNow.ball.position.z);
    stateNow.ball.currentSurface = surface.type;
    stateNow.ball.friction = surface.friction;
  }, [uiTick, currentLevel]);

  const leaderboard = useMemo(() => state.leaderboard, [uiTick]);
  const activePlayer = state.mode === 'local_multiplayer' ? state.multiplayer.players[state.multiplayer.turnIndex] : null;
  const localResultPlayers = [...state.multiplayer.players].sort((a, b) => a.totalStrokes - b.totalStrokes || a.id.localeCompare(b.id));

  return (
    <div className="min-h-screen text-white" key={uiTick % 2 === 0 ? 'even' : 'odd'}>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4 p-4 lg:flex-row">
        <aside className="w-full rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur lg:w-80">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Three.js</p>
              <h1 className="text-2xl font-bold">3D 迷你高尔夫赛</h1>
            </div>
            <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200">React 19</div>
          </div>

          <div id="menu" className="space-y-3 rounded-2xl bg-white/5 p-4">
            <button
              data-testid="start-btn"
              className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
              onClick={() => {
                engineRef.current.gameState = 'level_select';
                syncUi();
              }}
            >
              开始游戏
            </button>
            <button
              data-testid="multiplayer-btn"
              className="w-full rounded-xl bg-sky-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
              onClick={() => {
                engineRef.current.gameState = 'local_setup';
                engineRef.current.mode = 'local_multiplayer';
                syncUi();
              }}
            >
              本地多人对战
            </button>
            <button
              data-testid="leaderboard-btn"
              className="w-full rounded-xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
              onClick={() => {
                engineRef.current.gameState = 'leaderboard';
                engineRef.current.leaderboard = readLeaderboard();
                syncUi();
              }}
            >
              查看排行榜
            </button>
          </div>

          <div id="levelSelect" className="mt-4 space-y-3 rounded-2xl bg-white/5 p-4">
            <h2 className="text-lg font-semibold">关卡选择</h2>
            <div className="grid gap-3">
              <button data-testid="level-forest" className="rounded-xl bg-emerald-900/70 px-4 py-3 text-left hover:bg-emerald-800" onClick={() => startGame('forest', 'single')}>森林主题 · 摩擦 0.18 / 沙坑 0.72</button>
              <button data-testid="level-desert" className="rounded-xl bg-yellow-900/70 px-4 py-3 text-left hover:bg-yellow-800" onClick={() => startGame('desert', 'single')}>沙漠主题 · 摩擦 0.20 / 沙坑 0.80</button>
              <button data-testid="level-snow" className="rounded-xl bg-cyan-900/70 px-4 py-3 text-left hover:bg-cyan-800" onClick={() => startGame('snow', 'single')}>冰雪主题 · 草地 0.16 / 冰面 0.018</button>
            </div>
          </div>

          <div id="multiplayerLobby" className="mt-4 space-y-3 rounded-2xl bg-white/5 p-4">
            <h2 className="text-lg font-semibold">本地多人设置</h2>
            <label className="block text-sm text-slate-300">
              玩家数量
              <select
                data-testid="local-player-count"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2"
                value={playerCount}
                onChange={(e) => setPlayerCount(Number(e.target.value))}
              >
                <option value={2}>2 人</option>
                <option value={3}>3 人</option>
                <option value={4}>4 人</option>
              </select>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button data-testid="local-start-btn" className="rounded-xl bg-sky-500 px-3 py-3 font-semibold text-slate-950" onClick={() => startGame('forest', 'local_multiplayer')}>开始对局</button>
              <button data-testid="local-exit-btn" className="rounded-xl bg-slate-700 px-3 py-3 font-semibold" onClick={() => { engineRef.current.gameState = 'menu'; syncUi(); }}>退出</button>
            </div>
          </div>

          <div id="leaderboardScreen" className="mt-4 space-y-3 rounded-2xl bg-white/5 p-4">
            <h2 className="text-lg font-semibold">排行榜</h2>
            {(['forest', 'desert', 'snow'] as LevelId[]).map((levelId) => (
              <div key={levelId} className="rounded-xl border border-white/10 p-3">
                <h3 className="mb-2 text-sm font-semibold text-emerald-300">{LEVELS[levelId].name}</h3>
                <div className="space-y-1 text-sm text-slate-200">
                  {leaderboard.levelBest[levelId].length === 0 ? <p>暂无已完成成绩</p> : leaderboard.levelBest[levelId].map((item) => <p key={`${levelId}-${item.playerId}`}>#{item.rank} {item.playerName} · {item.strokes} 杆</p>)}
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-white/10 p-3 text-sm">
              <h3 className="mb-2 font-semibold text-amber-300">全关总榜</h3>
              {leaderboard.overall.length === 0 ? <p>需三关都有合法最佳成绩后生成</p> : leaderboard.overall.map((item) => <p key={item.playerId}>#{item.rank} {item.playerName} · 总杆 {item.totalStrokes}</p>)}
            </div>
          </div>
        </aside>

        <main className="flex-1 rounded-3xl border border-white/10 bg-slate-950/40 p-4 shadow-2xl backdrop-blur">
          <div className="mb-4 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-slate-400">当前玩家</p><p data-testid="current-player" className="text-lg font-semibold">{activePlayer?.name ?? state.playerProfile.name}</p></div>
            <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-slate-400">当前杆数</p><p data-testid="stroke-count" className="text-lg font-semibold">{state.currentHoleStrokes}</p></div>
            <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-slate-400">击球力度</p><p data-testid="shot-power" className="text-lg font-semibold">{state.shot.power.toFixed(2)}</p></div>
            <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-slate-400">实时摩擦系数</p><p data-testid="surface-friction" className="text-lg font-semibold">{state.ball.friction.toFixed(3)} · {state.ball.currentSurface}</p></div>
            <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-slate-400">瞄准反馈</p><p data-testid="aim-feedback" className="text-sm font-medium">{state.aimMessage}</p></div>
            <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-slate-400">运动状态</p><p data-testid="physics-motion" className="text-sm font-medium">{state.motionMessage}</p><p data-testid="physics-contact" className="mt-1 text-xs text-slate-300">{state.contactMessage}</p></div>
          </div>

          <div id="gameScreen" className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900" style={{ height: '540px' }}>
            <div ref={mountRef} className="h-full w-full" />
            <div className="pointer-events-none absolute left-4 top-4 rounded-2xl bg-slate-950/70 px-4 py-3 text-sm text-slate-100">
              <p>关卡：{currentLevel?.name ?? '未开始'}</p>
              <p>模式：{state.mode === 'single' ? '单人' : '本地多人'}</p>
              <p>时间：{state.elapsedTime.toFixed(1)}s</p>
            </div>
            <div data-testid="powerup-status" className="absolute right-4 top-4 space-y-2 rounded-2xl bg-slate-950/70 p-4 text-sm">
              <p className="font-semibold">道具库存</p>
              {state.powerups.inventory.map((item) => <p key={item.type}>{item.type}: {item.count}</p>)}
              <button data-testid="powerup-hio" className="rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white" onClick={armHoleInOne}>启用一杆入洞</button>
            </div>
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-3">
              <button data-testid="zoom-in" className="rounded-xl bg-white/10 px-4 py-2" onClick={() => { state.camera.distance = clamp(state.camera.distance - 2, state.camera.minDistance, state.camera.maxDistance); state.camera.zoom = Number((1 / state.camera.distance).toFixed(3)); syncUi(); }}>相机放大</button>
              <button data-testid="zoom-out" className="rounded-xl bg-white/10 px-4 py-2" onClick={() => { state.camera.distance = clamp(state.camera.distance + 2, state.camera.minDistance, state.camera.maxDistance); state.camera.zoom = Number((1 / state.camera.distance).toFixed(3)); syncUi(); }}>相机缩小</button>
              <button data-testid="reset-position" className="rounded-xl bg-white/10 px-4 py-2" onClick={resetBall}>重置球位</button>
            </div>
          </div>

          <div id="resultScreen" className="mt-4 rounded-2xl bg-white/5 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold">结算与赛况</h2>
                <p className="text-sm text-slate-300">{state.resultMessage || '完成球洞后将显示结算、积分与继续操作。'}</p>
              </div>
              <button
                data-testid="result-next"
                className="rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950"
                onClick={() => {
                  if (state.mode === 'local_multiplayer' && state.multiplayer.status === 'complete') {
                    state.gameState = 'local_result';
                  } else {
                    state.gameState = 'level_select';
                  }
                  syncUi();
                }}
              >
                继续
              </button>
            </div>
          </div>

          <div id="localLeaderboardScreen" data-testid="local-match-leaderboard" className="mt-4 rounded-2xl bg-white/5 p-4">
            <h2 className="mb-3 text-lg font-semibold">本地多人平局 / 对局排行榜</h2>
            <div className="grid gap-2 text-sm">
              {localResultPlayers.length === 0 ? <p>尚未开始本地多人。</p> : localResultPlayers.map((player, index) => <div key={player.id} className="rounded-xl border border-white/10 px-3 py-2">#{index + 1} {player.name} · {player.totalStrokes} 杆 {state.multiplayer.tiedPlayerIds.includes(player.id) ? '（并列）' : ''}</div>)}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

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
