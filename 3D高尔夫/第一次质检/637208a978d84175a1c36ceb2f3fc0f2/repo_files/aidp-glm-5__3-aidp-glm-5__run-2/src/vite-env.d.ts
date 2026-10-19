/// <reference types="vite/client" />

interface BallState {
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  speed: number;
  radius: number;
  moving: boolean;
  sleeping: boolean;
  airborne: boolean;
  inHole: boolean;
  outOfBounds: boolean;
  currentSurface: 'grass' | 'sand' | 'ice';
  friction: number;
  lastCollision: string | null;
  lastSafePosition: { x: number; y: number; z: number };
}

interface ShotState {
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

interface GameStateData {
  ready: boolean;
  gameState: 'menu' | 'level_select' | 'local_setup' | 'playing' | 'hole_complete' | 'tournament_complete' | 'local_result' | 'leaderboard';
  mode: 'single' | 'local_multiplayer';
  currentLevel: { id: 'forest' | 'desert' | 'snow'; name: string; theme: string; par: number } | null;
  currentHoleStrokes: number;
  totalStrokes: number;
  currentScore: number;
  totalScore: number;
  holeComplete: boolean;
  elapsedTime: number;
}

interface PowerupItem {
  id: string;
  type: 'bounce_pad' | 'speed_boost' | 'hole_in_one';
  position: { x: number; y: number; z: number };
  active: boolean;
  collected: boolean;
  direction?: { x: number; z: number };
}

interface PowerupsState {
  items: PowerupItem[];
  inventory: Array<{ type: 'bounce_pad' | 'speed_boost' | 'hole_in_one'; count: number }>;
  activeEffect: string | null;
  lastTriggeredId: string | null;
  placingType?: string | null;
  armedType?: string | null;
  selectedPlacedId?: string | null;
}

interface MultiplayerState {
  enabled: boolean;
  mode: 'local';
  status: 'setup' | 'playing' | 'complete';
  playerCount: number;
  currentPlayerId: string | null;
  turnIndex: number;
  round: number;
  revision: number;
  players: Array<{
    id: string;
    name: string;
    holeStrokes: number;
    totalStrokes: number;
    finished: boolean;
    ballPosition: { x: number; y: number; z: number };
    powerupInventory: Array<{ type: 'bounce_pad' | 'speed_boost' | 'hole_in_one'; count: number }>;
    armedPowerup: 'hole_in_one' | null;
  }>;
  winnerId: string | null;
  tiedPlayerIds: string[];
}

declare global {
  interface Window {
    __contract: { getState: () => {
      version: string;
      gameType: '3d-mini-golf';
      renderer: 'threejs';
      stateSource: 'live';
      hooksReady: boolean;
      hookNames: string[];
      buildId: string;
    }};
    __game: { getState: () => GameStateData };
    __ball: { getState: () => BallState };
    __shot: { getState: () => ShotState };
    __course: { getState: () => Record<string, unknown> };
    __multiplayer: { getState: () => MultiplayerState };
    __powerups: { getState: () => PowerupsState };
    __camera: { getState: () => Record<string, unknown> };
    __leaderboard: { getState: () => Record<string, unknown> };
    __performance: { getState: () => Record<string, unknown> };
    __THREE_SCENE__: unknown;
    __THREE_RENDERER__: unknown;
  }
}

export {};