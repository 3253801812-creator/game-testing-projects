// Core game types for 3D Mini Golf
import * as THREE from 'three';

export type LevelId = 'forest' | 'desert' | 'snow';
export type SurfaceType = 'grass' | 'sand' | 'ice';
export type PowerupType = 'bounce_pad' | 'speed_boost' | 'hole_in_one';
export type GameState = 'menu' | 'level_select' | 'local_setup' | 'playing' | 'hole_complete' | 'tournament_complete' | 'local_result' | 'leaderboard';
export type GameMode = 'single' | 'local_multiplayer';

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

export interface Surface {
  id: string;
  type: SurfaceType;
  friction: number;
  center?: Vector3;
  bounds?: Bounds;
}

export interface Obstacle {
  id: string;
  type: string;
  position: Vector3;
  solid: boolean;
  radius?: number;
  bounds?: Bounds;
}

export interface TerrainFeature {
  id: string;
  type: string;
  position: Vector3;
  height?: number;
  radius?: number;
}

export interface LevelConfig {
  id: LevelId;
  name: string;
  theme: string;
  par: number;
  bounds: Bounds;
  spawn: Vector3;
  hole: Vector3 & { radius: number };
  surfaces: Surface[];
  obstacles: Obstacle[];
  terrainFeatures: TerrainFeature[];
}

export interface PowerupItem {
  id: string;
  type: PowerupType;
  position: Vector3;
  active: boolean;
  collected: boolean;
  direction?: Vector2;
}

export interface PowerupInventoryItem {
  type: PowerupType;
  count: number;
}

export interface Player {
  id: string;
  name: string;
  holeStrokes: number;
  totalStrokes: number;
  finished: boolean;
  ballPosition: Vector3;
  powerupInventory: PowerupInventoryItem[];
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

// Window interfaces for DOM contract
declare global {
  interface Window {
    __contract?: {
      getState: () => {
        version: string;
        gameType: '3d-mini-golf';
        renderer: 'threejs';
        stateSource: 'live';
        hooksReady: boolean;
        hookNames: string[];
        buildId: string;
      };
    };
    __game?: {
      getState: () => {
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
      };
    };
    __ball?: {
      getState: () => {
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
      };
    };
    __shot?: {
      getState: () => {
        dragging: boolean;
        canShoot: boolean;
        startScreen: { x: number; y: number } | null;
        currentScreen: { x: number; y: number } | null;
        direction: Vector2;
        power: number;
        minPower: number;
        maxPower: number;
        strokeCount: number;
      };
    };
    __course?: {
      getState: () => {
        levelId: LevelId;
        name: string;
        theme: string;
        par: number;
        bounds: Bounds;
        spawn: Vector3;
        hole: Vector3 & { radius: number };
        surfaces: Surface[];
        obstacles: Obstacle[];
        terrainFeatures: TerrainFeature[];
        obstacleCount: number;
        sceneObjectCount: number;
        loaded: boolean;
      };
    };
    __multiplayer?: {
      getState: () => {
        enabled: boolean;
        mode: 'local';
        status: 'setup' | 'playing' | 'complete';
        playerCount: number;
        currentPlayerId: string | null;
        turnIndex: number;
        round: number;
        revision: number;
        players: Player[];
        winnerId: string | null;
        tiedPlayerIds: string[];
      };
    };
    __powerups?: {
      getState: () => {
        items: PowerupItem[];
        inventory: PowerupInventoryItem[];
        activeEffect: string | null;
        lastTriggeredId: string | null;
        placingType?: string | null;
        armedType?: string | null;
        selectedPlacedId?: string | null;
      };
    };
    __camera?: {
      getState: () => {
        mode: 'follow' | 'free';
        position: Vector3;
        target: Vector3;
        distance: number;
        minDistance: number;
        maxDistance: number;
        zoom: number;
        angle?: number;
        pitch?: number;
      };
    };
    __leaderboard?: {
      getState: () => {
        levelBest: Record<string, LeaderboardEntry[]>;
        overall: OverallLeaderboardEntry[];
        persisted: boolean;
      };
    };
    __performance?: {
      getState: () => {
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
    };
    __THREE_SCENE__?: THREE.Scene;
    __THREE_RENDERER__?: THREE.WebGLRenderer;
  }
}

export {};