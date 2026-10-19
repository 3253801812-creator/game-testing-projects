// Core game types for 3D Mini Golf

export type LevelId = 'forest' | 'desert' | 'snow';
export type SurfaceType = 'grass' | 'sand' | 'ice';
export type PowerupType = 'bounce_pad' | 'speed_boost' | 'hole_in_one';
export type GameState = 'menu' | 'level_select' | 'local_setup' | 'playing' | 'hole_complete' | 'tournament_complete' | 'local_result' | 'leaderboard';
export type GameMode = 'single' | 'local_multiplayer';
export type MultiplayerStatus = 'setup' | 'playing' | 'complete';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Bounds {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export interface Surface {
  id: string;
  type: SurfaceType;
  friction: number;
  center?: Vec3;
  bounds?: Bounds;
}

export interface Obstacle {
  id: string;
  type: string;
  position: Vec3;
  solid: boolean;
  radius?: number;
  bounds?: Bounds;
}

export interface TerrainFeature {
  id: string;
  type: string;
  position: Vec3;
  height?: number;
  radius?: number;
}

export interface Level {
  id: LevelId;
  name: string;
  theme: string;
  par: number;
  bounds: Bounds;
  spawn: Vec3;
  hole: Vec3 & { radius: number };
  surfaces: Surface[];
  obstacles: Obstacle[];
  terrainFeatures: TerrainFeature[];
  grassFriction: number;
  sandFriction: number;
  iceFriction: number;
}

export interface Player {
  id: string;
  name: string;
  holeStrokes: number;
  totalStrokes: number;
  finished: boolean;
  ballPosition: Vec3;
  powerupInventory: Array<{ type: PowerupType; count: number }>;
  armedPowerup: 'hole_in_one' | null;
}

export interface LeaderboardEntry {
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
  levelStrokes: { forest: number; desert: number; snow: number };
  totalStrokes: number;
  rank: number;
  achievedAt: number;
}

export interface PowerupItem {
  id: string;
  type: PowerupType;
  position: Vec3;
  active: boolean;
  collected: boolean;
  direction?: { x: number; z: number };
}

export interface BallState {
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
}

export interface ShotState {
  dragging: boolean;
  canShoot: boolean;
  startScreen: { x: number; y: number } | null;
  currentScreen: { x: number; y: number } | null;
  direction: { x: number; z: number };
  power: number;
  minPower: number;
  maxPower: number;
  strokeCount: number;
}

export interface CourseState {
  levelId: LevelId;
  name: string;
  theme: string;
  par: number;
  bounds: Bounds;
  spawn: Vec3;
  hole: Vec3 & { radius: number };
  surfaces: Surface[];
  obstacles: Obstacle[];
  terrainFeatures: TerrainFeature[];
  obstacleCount: number;
  sceneObjectCount: number;
  loaded: boolean;
}

export interface MultiplayerState {
  enabled: boolean;
  mode: 'local';
  status: MultiplayerStatus;
  playerCount: number;
  currentPlayerId: string | null;
  turnIndex: number;
  round: number;
  revision: number;
  players: Player[];
  winnerId: string | null;
  tiedPlayerIds: string[];
}

export interface PowerupsState {
  items: PowerupItem[];
  inventory: Array<{ type: PowerupType; count: number }>;
  activeEffect: string | null;
  lastTriggeredId: string | null;
  placingType?: string | null;
  armedType?: string | null;
  selectedPlacedId?: string | null;
}

export interface CameraState {
  mode: 'follow' | 'free';
  position: Vec3;
  target: Vec3;
  distance: number;
  minDistance: number;
  maxDistance: number;
  zoom: number;
  angle?: number;
  pitch?: number;
}

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

export interface ContractState {
  version: string;
  gameType: '3d-mini-golf';
  renderer: 'threejs';
  stateSource: 'live';
  hooksReady: boolean;
  hookNames: string[];
  buildId: string;
}

export interface CurrentLevelInfo {
  id: LevelId;
  name: string;
  theme: string;
  par: number;
}

export interface GameStateData {
  ready: boolean;
  gameState: GameState;
  mode: GameMode;
  currentLevel: CurrentLevelInfo | null;
  currentHoleStrokes: number;
  totalStrokes: number;
  currentScore: number;
  totalScore: number;
  holeComplete: boolean;
  elapsedTime: number;
}

export interface LeaderboardStateData {
  levelBest: Record<string, LeaderboardEntry[]>;
  overall: OverallLeaderboardEntry[];
  persisted: boolean;
}