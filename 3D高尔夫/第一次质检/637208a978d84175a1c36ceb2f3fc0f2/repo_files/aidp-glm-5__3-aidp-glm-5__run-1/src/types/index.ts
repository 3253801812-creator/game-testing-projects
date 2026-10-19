// Core game types for 3D Mini Golf

export type LevelId = 'forest' | 'desert' | 'snow';
export type SurfaceType = 'grass' | 'sand' | 'ice';
export type PowerupType = 'bounce_pad' | 'speed_boost' | 'hole_in_one';
export type GameState = 'menu' | 'level_select' | 'local_setup' | 'playing' | 'hole_complete' | 'tournament_complete' | 'local_result' | 'leaderboard';
export type GameMode = 'single' | 'local_multiplayer';
export type MultiplayerStatus = 'setup' | 'playing' | 'complete';

// Vector types
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Vector2 {
  x: number;
  z: number;
}

export interface Bounds {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

// Level configuration
export interface LevelConfig {
  id: LevelId;
  name: string;
  theme: string;
  par: number;
  spawnPoint: Vector3;
  holePosition: Vector3;
  holeRadius: number;
  bounds: Bounds;
  surfaces: SurfaceConfig[];
  obstacles: ObstacleConfig[];
  powerups: PowerupSpawnConfig[];
  frictionMultipliers: {
    grass: number;
    sand: number;
    ice: number;
  };
}

export interface SurfaceConfig {
  id: string;
  type: SurfaceType;
  center: Vector3;
  bounds: Bounds;
  friction: number;
}

export interface ObstacleConfig {
  id: string;
  type: string;
  position: Vector3;
  solid: boolean;
  radius?: number;
  bounds?: Bounds;
}

export interface PowerupSpawnConfig {
  id: string;
  type: PowerupType;
  position: Vector3;
  direction?: Vector2;
}

// Ball state
export interface BallState {
  position: Vector3;
  velocity: Vector3;
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
  lastSafePosition: Vector3;
}

// Shot state
export interface ShotState {
  dragging: boolean;
  canShoot: boolean;
  startScreen: Vector2 | null;
  currentScreen: Vector2 | null;
  direction: Vector2;
  power: number;
  minPower: number;
  maxPower: number;
  strokeCount: number;
}

// Course state
export interface CourseState {
  levelId: LevelId;
  name: string;
  theme: string;
  par: number;
  bounds: Bounds;
  spawn: Vector3;
  hole: Vector3 & { radius: number };
  surfaces: SurfaceConfig[];
  obstacles: ObstacleConfig[];
  terrainFeatures: Record<string, unknown>[];
  obstacleCount: number;
  sceneObjectCount: number;
  loaded: boolean;
}

// Powerup state
export interface PowerupItem {
  id: string;
  type: PowerupType;
  position: Vector3;
  active: boolean;
  collected: boolean;
  direction?: Vector2;
}

export interface InventoryItem {
  type: PowerupType;
  count: number;
}

export interface PowerupState {
  items: PowerupItem[];
  inventory: InventoryItem[];
  activeEffect: string | null;
  lastTriggeredId: string | null;
  placingType?: string | null;
  armedType?: string | null;
  selectedPlacedId?: string | null;
}

// Camera state
export interface CameraState {
  mode: 'follow' | 'free';
  position: Vector3;
  target: Vector3;
  distance: number;
  minDistance: number;
  maxDistance: number;
  zoom: number;
  angle?: number;
  pitch?: number;
}

// Player state for multiplayer
export interface PlayerState {
  id: string;
  name: string;
  holeStrokes: number;
  totalStrokes: number;
  finished: boolean;
  ballPosition: Vector3;
  powerupInventory: InventoryItem[];
  armedPowerup: 'hole_in_one' | null;
}

// Multiplayer state
export interface MultiplayerState {
  enabled: boolean;
  mode: 'local';
  status: MultiplayerStatus;
  playerCount: number;
  currentPlayerId: string | null;
  turnIndex: number;
  round: number;
  revision: number;
  players: PlayerState[];
  winnerId: string | null;
  tiedPlayerIds: string[];
}

// Leaderboard entry
export interface LevelLeaderboardEntry {
  playerId: string;
  playerName: string;
  strokes: number;
  rank: number;
  par: number;
  relativeToPar: number;
  achievedAt: number;
}

export interface OverallLeaderboardEntry {
  playerId: string;
  playerName: string;
  levelStrokes: {
    forest: number;
    desert: number;
    snow: number;
  };
  totalStrokes: number;
  rank: number;
  achievedAt: number;
}

export interface LeaderboardState {
  levelBest: Record<string, LevelLeaderboardEntry[]>;
  overall: OverallLeaderboardEntry[];
  persisted: boolean;
}

// Game state
export interface GameStore {
  ready: boolean;
  gameState: GameState;
  mode: GameMode;
  currentLevel: {
    id: LevelId;
    name: string;
    theme: string;
    par: number;
  } | null;
  currentHoleStrokes: number;
  totalStrokes: number;
  currentScore: number;
  totalScore: number;
  holeComplete: boolean;
  elapsedTime: number;
}

// Performance state
export interface PerformanceState {
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
}

// Contract state
export interface ContractState {
  version: string;
  gameType: '3d-mini-golf';
  renderer: 'threejs';
  stateSource: 'live';
  hooksReady: boolean;
  hookNames: string[];
  buildId: string;
}

// Constants
export const LEVEL_CONFIGS: Record<LevelId, LevelConfig> = {
  forest: {
    id: 'forest',
    name: '森林球场',
    theme: 'forest',
    par: 3,
    spawnPoint: { x: 0, y: 0.1, z: 8 },
    holePosition: { x: 0, y: 0, z: -8 },
    holeRadius: 0.5,
    bounds: { minX: -10, maxX: 10, minZ: -12, maxZ: 12 },
    surfaces: [
      { id: 'grass_main', type: 'grass', center: { x: 0, y: 0, z: 0 }, bounds: { minX: -10, maxX: 10, minZ: -12, maxZ: 12 }, friction: 0.02 },
      { id: 'sand_trap1', type: 'sand', center: { x: -4, y: 0.02, z: 0 }, bounds: { minX: -6, maxX: -2, minZ: -2, maxZ: 2 }, friction: 0.07 },
      { id: 'sand_trap2', type: 'sand', center: { x: 4, y: 0.02, z: -3 }, bounds: { minX: 2, maxX: 6, minZ: -5, maxZ: -1 }, friction: 0.07 },
    ],
    obstacles: [
      { id: 'tree1', type: 'tree', position: { x: -7, y: 0, z: 4 }, solid: true, radius: 0.8 },
      { id: 'tree2', type: 'tree', position: { x: 7, y: 0, z: -2 }, solid: true, radius: 0.8 },
      { id: 'rock1', type: 'rock', position: { x: -2, y: 0, z: -4 }, solid: true, radius: 0.5 },
    ],
    powerups: [
      { id: 'powerup1', type: 'speed_boost', position: { x: 3, y: 0.2, z: 4 } },
      { id: 'powerup2', type: 'bounce_pad', position: { x: -3, y: 0.2, z: -2 }, direction: { x: 0, z: -1 } },
    ],
    frictionMultipliers: { grass: 0.02, sand: 0.07, ice: 0.005 }
  },
  desert: {
    id: 'desert',
    name: '沙漠球场',
    theme: 'desert',
    par: 4,
    spawnPoint: { x: -8, y: 0.1, z: 8 },
    holePosition: { x: 8, y: 0, z: -8 },
    holeRadius: 0.5,
    bounds: { minX: -12, maxX: 12, minZ: -12, maxZ: 12 },
    surfaces: [
      { id: 'sand_main', type: 'sand', center: { x: 0, y: 0, z: 0 }, bounds: { minX: -12, maxX: 12, minZ: -12, maxZ: 12 }, friction: 0.025 },
      { id: 'grass_oasis', type: 'grass', center: { x: 0, y: 0.01, z: 0 }, bounds: { minX: -3, maxX: 3, minZ: -2, maxZ: 2 }, friction: 0.015 },
    ],
    obstacles: [
      { id: 'dune1', type: 'dune', position: { x: -3, y: 0.3, z: 2 }, solid: true, radius: 1.5 },
      { id: 'dune2', type: 'dune', position: { x: 4, y: 0.3, z: -3 }, solid: true, radius: 1.2 },
      { id: 'rock1', type: 'rock', position: { x: 0, y: 0, z: -6 }, solid: true, radius: 0.6 },
      { id: 'cactus1', type: 'cactus', position: { x: -6, y: 0, z: -2 }, solid: true, radius: 0.4 },
    ],
    powerups: [
      { id: 'powerup1', type: 'hole_in_one', position: { x: 0, y: 0.2, z: 0 } },
      { id: 'powerup2', type: 'speed_boost', position: { x: 5, y: 0.2, z: 5 } },
    ],
    frictionMultipliers: { grass: 0.015, sand: 0.025, ice: 0.003 }
  },
  snow: {
    id: 'snow',
    name: '冰雪球场',
    theme: 'snow',
    par: 4,
    spawnPoint: { x: 0, y: 0.1, z: 10 },
    holePosition: { x: 0, y: 0, z: -10 },
    holeRadius: 0.5,
    bounds: { minX: -10, maxX: 10, minZ: -14, maxZ: 14 },
    surfaces: [
      { id: 'ice_main', type: 'ice', center: { x: 0, y: 0, z: 0 }, bounds: { minX: -10, maxX: 10, minZ: -14, maxZ: 14 }, friction: 0.002 },
      { id: 'snow_patch1', type: 'grass', center: { x: -3, y: 0.05, z: 2 }, bounds: { minX: -5, maxX: -1, minZ: 0, maxZ: 4 }, friction: 0.02 },
      { id: 'snow_patch2', type: 'grass', center: { x: 3, y: 0.05, z: -4 }, bounds: { minX: 1, maxX: 5, minZ: -6, maxZ: -2 }, friction: 0.02 },
    ],
    obstacles: [
      { id: 'ice_crystal1', type: 'ice_crystal', position: { x: -5, y: 0, z: -2 }, solid: true, radius: 0.5 },
      { id: 'ice_crystal2', type: 'ice_crystal', position: { x: 5, y: 0, z: 4 }, solid: true, radius: 0.5 },
      { id: 'snowman', type: 'snowman', position: { x: 0, y: 0, z: -5 }, solid: true, radius: 0.7 },
    ],
    powerups: [
      { id: 'powerup1', type: 'bounce_pad', position: { x: -4, y: 0.2, z: 0 }, direction: { x: 0, z: -1 } },
      { id: 'powerup2', type: 'speed_boost', position: { x: 4, y: 0.2, z: -6 } },
    ],
    frictionMultipliers: { grass: 0.02, sand: 0.07, ice: 0.002 }
  }
};

export const FRICTION_VALUES: Record<SurfaceType, number> = {
  grass: 0.02,
  sand: 0.07,  // 3.5x grass as specified
  ice: 0.002   // 1/10 of grass as specified (more than 1/8 requirement)
};