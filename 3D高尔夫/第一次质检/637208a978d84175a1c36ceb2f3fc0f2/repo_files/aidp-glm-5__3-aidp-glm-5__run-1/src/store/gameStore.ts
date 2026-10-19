import { useState, useCallback, useEffect } from 'react';
import {
  GameStore,
  BallState,
  ShotState,
  CourseState,
  PowerupState,
  CameraState,
  MultiplayerState,
  LeaderboardState,
  PerformanceState,
  ContractState,
  LevelId,
  LevelConfig,
  LEVEL_CONFIGS,
  FRICTION_VALUES,
  Vector3,
  PlayerState,
  SurfaceType,
} from '../types';

// Build ID for contract
const BUILD_ID = '1.0.0-' + Date.now();

// Initial states
const initialBallState: BallState = {
  position: { x: 0, y: 0.1, z: 8 },
  velocity: { x: 0, y: 0, z: 0 },
  speed: 0,
  radius: 0.15,
  moving: false,
  sleeping: true,
  airborne: false,
  inHole: false,
  outOfBounds: false,
  currentSurface: 'grass',
  friction: FRICTION_VALUES.grass,
  lastCollision: null,
  lastSafePosition: { x: 0, y: 0.1, z: 8 },
};

const initialShotState: ShotState = {
  dragging: false,
  canShoot: true,
  startScreen: null,
  currentScreen: null,
  direction: { x: 0, z: 0 },
  power: 0,
  minPower: 0.5,
  maxPower: 15,
  strokeCount: 0,
};

const initialCameraState: CameraState = {
  mode: 'follow',
  position: { x: 0, y: 10, z: 15 },
  target: { x: 0, y: 0, z: 0 },
  distance: 15,
  minDistance: 5,
  maxDistance: 30,
  zoom: 1,
  angle: 0,
  pitch: 45,
};

const initialPowerupState: PowerupState = {
  items: [],
  inventory: [],
  activeEffect: null,
  lastTriggeredId: null,
  placingType: null,
  armedType: null,
  selectedPlacedId: null,
};

const initialPerformanceState: PerformanceState = {
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
  poolStats: {},
};

// Global state refs
let globalGameState: GameStore = {
  ready: false,
  gameState: 'menu',
  mode: 'single',
  currentLevel: null,
  currentHoleStrokes: 0,
  totalStrokes: 0,
  currentScore: 0,
  totalScore: 0,
  holeComplete: false,
  elapsedTime: 0,
};

let globalBallState: BallState = { ...initialBallState };
let globalShotState: ShotState = { ...initialShotState };
let globalCourseState: CourseState | null = null;
let globalPowerupState: PowerupState = { ...initialPowerupState };
let globalCameraState: CameraState = { ...initialCameraState };
let globalMultiplayerState: MultiplayerState = {
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
};
let globalLeaderboardState: LeaderboardState = {
  levelBest: {},
  overall: [],
  persisted: false,
};
let globalPerformanceState: PerformanceState = { ...initialPerformanceState };

// Load persisted leaderboard
const loadLeaderboard = (): LeaderboardState => {
  try {
    const stored = localStorage.getItem('minigolf_leaderboard');
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...parsed, persisted: true };
    }
  } catch (e) {
    console.warn('Failed to load leaderboard:', e);
  }
  return { levelBest: {}, overall: [], persisted: false };
};

// Save leaderboard
const saveLeaderboard = (state: LeaderboardState) => {
  try {
    localStorage.setItem('minigolf_leaderboard', JSON.stringify({
      levelBest: state.levelBest,
      overall: state.overall,
    }));
  } catch (e) {
    console.warn('Failed to save leaderboard:', e);
  }
};

// Initialize leaderboard on load
globalLeaderboardState = loadLeaderboard();

// State update callbacks
type StateCallback = () => void;
const stateCallbacks: Set<StateCallback> = new Set();

export const subscribeToState = (callback: StateCallback) => {
  stateCallbacks.add(callback);
  return () => { stateCallbacks.delete(callback); };
};

const notifyStateChange = () => {
  globalPerformanceState.reactCommitCount++;
  stateCallbacks.forEach(cb => cb());
};

// Get surface type at position
export const getSurfaceAtPosition = (position: Vector3, level: LevelConfig): SurfaceType => {
  for (const surface of level.surfaces) {
    const bounds = surface.bounds;
    if (
      position.x >= bounds.minX &&
      position.x <= bounds.maxX &&
      position.z >= bounds.minZ &&
      position.z <= bounds.maxZ
    ) {
      return surface.type;
    }
  }
  // Default based on level theme
  if (level.theme === 'desert') return 'sand';
  if (level.theme === 'snow') return 'ice';
  return 'grass';
};

// Get friction for surface
export const getFrictionForSurface = (surface: SurfaceType, level: LevelConfig): number => {
  return level.frictionMultipliers[surface] || FRICTION_VALUES[surface];
};

// Game store hook
export function useGameStore() {
  const [, forceUpdate] = useState(0);
  
  useEffect(() => {
    const unsubscribe = subscribeToState(() => forceUpdate(n => n + 1));
    return unsubscribe;
  }, []);

  const setGameState = useCallback((state: GameStore['gameState']) => {
    globalGameState = { ...globalGameState, gameState: state, ready: true };
    notifyStateChange();
  }, []);

  const setMode = useCallback((mode: GameStore['mode']) => {
    globalGameState = { ...globalGameState, mode };
    notifyStateChange();
  }, []);

  const startLevel = useCallback((levelId: LevelId) => {
    const levelConfig = LEVEL_CONFIGS[levelId];
    
    // Initialize course state
    globalCourseState = {
      levelId,
      name: levelConfig.name,
      theme: levelConfig.theme,
      par: levelConfig.par,
      bounds: levelConfig.bounds,
      spawn: { ...levelConfig.spawnPoint },
      hole: { ...levelConfig.holePosition, radius: levelConfig.holeRadius },
      surfaces: levelConfig.surfaces.map(s => ({ ...s })),
      obstacles: levelConfig.obstacles.map(o => ({ ...o })),
      terrainFeatures: [],
      obstacleCount: levelConfig.obstacles.length,
      sceneObjectCount: levelConfig.obstacles.length + levelConfig.surfaces.length,
      loaded: true,
    };

    // Initialize ball at spawn
    globalBallState = {
      ...initialBallState,
      position: { ...levelConfig.spawnPoint },
      lastSafePosition: { ...levelConfig.spawnPoint },
      currentSurface: getSurfaceAtPosition(levelConfig.spawnPoint, levelConfig),
      friction: getFrictionForSurface(getSurfaceAtPosition(levelConfig.spawnPoint, levelConfig), levelConfig),
    };

    // Initialize powerups
    globalPowerupState = {
      ...initialPowerupState,
      items: levelConfig.powerups.map(p => ({
        id: p.id,
        type: p.type,
        position: { ...p.position },
        active: true,
        collected: false,
        direction: p.direction ? { ...p.direction } : undefined,
      })),
    };

    // Reset shot state
    globalShotState = { ...initialShotState };

    // Reset camera
    globalCameraState = {
      ...initialCameraState,
      target: { ...levelConfig.spawnPoint },
      position: {
        x: levelConfig.spawnPoint.x,
        y: 10,
        z: levelConfig.spawnPoint.z + 15,
      },
    };

    // Set game state
    globalGameState = {
      ...globalGameState,
      ready: true,
      gameState: 'playing',
      currentLevel: {
        id: levelConfig.id,
        name: levelConfig.name,
        theme: levelConfig.theme,
        par: levelConfig.par,
      },
      currentHoleStrokes: 0,
      totalStrokes: 0,
      currentScore: 0,
      holeComplete: false,
      elapsedTime: 0,
    };

    notifyStateChange();
  }, []);

  const resetBall = useCallback(() => {
    if (globalCourseState) {
      globalBallState = {
        ...globalBallState,
        position: { ...globalCourseState.spawn },
        velocity: { x: 0, y: 0, z: 0 },
        speed: 0,
        moving: false,
        sleeping: true,
        inHole: false,
        outOfBounds: false,
        lastSafePosition: { ...globalCourseState.spawn },
      };
      globalShotState = { ...globalShotState, canShoot: true, dragging: false };
      notifyStateChange();
    }
  }, []);

  const updateBallPosition = useCallback((position: Vector3) => {
    globalBallState = { ...globalBallState, position };
    notifyStateChange();
  }, []);

  const updateBallVelocity = useCallback((velocity: Vector3) => {
    const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z);
    globalBallState = {
      ...globalBallState,
      velocity,
      speed,
      moving: speed > 0.01,
      sleeping: speed < 0.01,
    };
    notifyStateChange();
  }, []);

  const updateBallSurface = useCallback((surface: SurfaceType, friction: number) => {
    globalBallState = { ...globalBallState, currentSurface: surface, friction };
    notifyStateChange();
  }, []);

  const setBallInHole = useCallback((inHole: boolean) => {
    globalBallState = { ...globalBallState, inHole, sleeping: true, moving: false };
    notifyStateChange();
  }, []);

  const setBallOutOfBounds = useCallback((outOfBounds: boolean) => {
    globalBallState = { ...globalBallState, outOfBounds };
    notifyStateChange();
  }, []);

  const incrementStroke = useCallback(() => {
    globalShotState = {
      ...globalShotState,
      strokeCount: globalShotState.strokeCount + 1,
    };
    globalGameState = {
      ...globalGameState,
      currentHoleStrokes: globalGameState.currentHoleStrokes + 1,
      totalStrokes: globalGameState.totalStrokes + 1,
    };
    notifyStateChange();
  }, []);

  const startDrag = useCallback((screenX: number, screenY: number) => {
    globalShotState = {
      ...globalShotState,
      dragging: true,
      startScreen: { x: screenX, z: screenY },
      currentScreen: { x: screenX, z: screenY },
      power: 0,
      direction: { x: 0, z: 0 },
    };
    notifyStateChange();
  }, []);

  const updateDrag = useCallback((screenX: number, screenY: number, direction: { x: number; z: number }, power: number) => {
    globalShotState = {
      ...globalShotState,
      currentScreen: { x: screenX, z: screenY },
      direction,
      power,
    };
    notifyStateChange();
  }, []);

  const endDrag = useCallback(() => {
    globalShotState = {
      ...globalShotState,
      dragging: false,
      canShoot: true,
    };
    notifyStateChange();
  }, []);

  const setCanShoot = useCallback((canShoot: boolean) => {
    globalShotState = { ...globalShotState, canShoot };
    notifyStateChange();
  }, []);

  const setHoleComplete = useCallback(() => {
    globalGameState = {
      ...globalGameState,
      holeComplete: true,
      gameState: 'hole_complete',
    };
    notifyStateChange();
  }, []);

  const calculateScore = useCallback((strokes: number, par: number): number => {
    const diff = par - strokes;
    if (diff >= 2) return 50; // Eagle
    if (diff === 1) return 30; // Birdie
    if (diff === 0) return 20; // Par
    if (diff === -1) return 10; // Bogey
    return 5; // Double bogey or worse
  }, []);

  const completeHole = useCallback(() => {
    const strokes = globalGameState.currentHoleStrokes;
    const par = globalGameState.currentLevel?.par || 3;
    const score = calculateScore(strokes, par);

    // Update leaderboard
    const levelId = globalGameState.currentLevel?.id || 'forest';
    const playerId = globalMultiplayerState.enabled ? (globalMultiplayerState.currentPlayerId || 'player1') : 'player1';
    const playerName = globalMultiplayerState.enabled
      ? (globalMultiplayerState.players.find(p => p.id === globalMultiplayerState.currentPlayerId)?.name || '玩家')
      : '玩家';

    const entry = {
      playerId,
      playerName,
      strokes,
      rank: 0,
      par,
      relativeToPar: strokes - par,
      achievedAt: Date.now(),
    };

    // Update level best
    if (!globalLeaderboardState.levelBest[levelId]) {
      globalLeaderboardState.levelBest[levelId] = [];
    }

    const existing = globalLeaderboardState.levelBest[levelId];
    const existingIndex = existing.findIndex(e => e.playerId === playerId);
    
    if (existingIndex === -1 || existing[existingIndex].strokes > strokes) {
      if (existingIndex >= 0) {
        existing.splice(existingIndex, 1);
      }
      existing.push(entry);
      existing.sort((a, b) => {
        if (a.strokes !== b.strokes) return a.strokes - b.strokes;
        if (a.achievedAt !== b.achievedAt) return a.achievedAt - b.achievedAt;
        return a.playerId.localeCompare(b.playerId);
      });
      existing.forEach((e, i) => { e.rank = i + 1; });
    }

    // Update overall leaderboard if all levels complete
    updateOverallLeaderboard();

    saveLeaderboard(globalLeaderboardState);

    globalGameState = {
      ...globalGameState,
      currentScore: score,
      totalScore: globalGameState.totalScore + score,
      holeComplete: true,
      gameState: 'hole_complete',
    };

    notifyStateChange();
  }, [calculateScore]);

  const updateOverallLeaderboard = () => {
    const overall: LeaderboardState['overall'] = [];

    // Find all players who have completed all 3 levels
    const allPlayerIds = new Set<string>();
    ['forest', 'desert', 'snow'].forEach(levelId => {
      (globalLeaderboardState.levelBest[levelId] || []).forEach(e => allPlayerIds.add(e.playerId));
    });

    allPlayerIds.forEach(playerId => {
      const forestEntry = globalLeaderboardState.levelBest.forest?.find(e => e.playerId === playerId);
      const desertEntry = globalLeaderboardState.levelBest.desert?.find(e => e.playerId === playerId);
      const snowEntry = globalLeaderboardState.levelBest.snow?.find(e => e.playerId === playerId);

      if (forestEntry && desertEntry && snowEntry) {
        overall.push({
          playerId,
          playerName: forestEntry.playerName,
          levelStrokes: {
            forest: forestEntry.strokes,
            desert: desertEntry.strokes,
            snow: snowEntry.strokes,
          },
          totalStrokes: forestEntry.strokes + desertEntry.strokes + snowEntry.strokes,
          rank: 0,
          achievedAt: Math.max(forestEntry.achievedAt, desertEntry.achievedAt, snowEntry.achievedAt),
        });
      }
    });

    overall.sort((a, b) => {
      if (a.totalStrokes !== b.totalStrokes) return a.totalStrokes - b.totalStrokes;
      if (a.achievedAt !== b.achievedAt) return a.achievedAt - b.achievedAt;
      return a.playerId.localeCompare(b.playerId);
    });
    overall.forEach((e, i) => { e.rank = i + 1; });

    globalLeaderboardState = { ...globalLeaderboardState, overall };
  };

  const nextLevel = useCallback(() => {
    const levels: LevelId[] = ['forest', 'desert', 'snow'];
    const currentIndex = levels.indexOf(globalGameState.currentLevel?.id || 'forest');
    
    if (currentIndex < levels.length - 1) {
      startLevel(levels[currentIndex + 1]);
    } else {
      // Tournament complete
      globalGameState = {
        ...globalGameState,
        gameState: 'tournament_complete',
      };
      notifyStateChange();
    }
  }, [startLevel]);

  // Camera controls
  const setCameraZoom = useCallback((zoom: number) => {
    const newDistance = Math.max(
      globalCameraState.minDistance,
      Math.min(globalCameraState.maxDistance, globalCameraState.distance * (1 / zoom))
    );
    globalCameraState = {
      ...globalCameraState,
      zoom,
      distance: newDistance,
    };
    notifyStateChange();
  }, []);

  const zoomIn = useCallback(() => {
    const newDistance = Math.max(globalCameraState.minDistance, globalCameraState.distance - 2);
    globalCameraState = {
      ...globalCameraState,
      distance: newDistance,
      zoom: globalCameraState.maxDistance / newDistance,
    };
    notifyStateChange();
  }, []);

  const zoomOut = useCallback(() => {
    const newDistance = Math.min(globalCameraState.maxDistance, globalCameraState.distance + 2);
    globalCameraState = {
      ...globalCameraState,
      distance: newDistance,
      zoom: globalCameraState.maxDistance / newDistance,
    };
    notifyStateChange();
  }, []);

  // Powerup functions
  const collectPowerup = useCallback((powerupId: string) => {
    const item = globalPowerupState.items.find(i => i.id === powerupId);
    if (item && !item.collected) {
      item.collected = true;
      item.active = false;

      const existing = globalPowerupState.inventory.find(i => i.type === item.type);
      if (existing) {
        existing.count++;
      } else {
        globalPowerupState.inventory.push({ type: item.type, count: 1 });
      }

      notifyStateChange();
    }
  }, []);

  const armHoleInOnePowerup = useCallback(() => {
    const hio = globalPowerupState.inventory.find(i => i.type === 'hole_in_one');
    if (hio && hio.count > 0) {
      globalPowerupState = { ...globalPowerupState, armedType: 'hole_in_one' };
      notifyStateChange();
    }
  }, []);

  const useArmedPowerup = useCallback(() => {
    if (globalPowerupState.armedType) {
      const inventory = globalPowerupState.inventory.find(i => i.type === globalPowerupState.armedType);
      if (inventory && inventory.count > 0) {
        inventory.count--;
        if (inventory.count === 0) {
          globalPowerupState.inventory = globalPowerupState.inventory.filter(i => i.type !== globalPowerupState.armedType);
        }
      }
      globalPowerupState = { ...globalPowerupState, armedType: null };
      notifyStateChange();
    }
  }, []);

  // Multiplayer functions
  const setupMultiplayer = useCallback((playerCount: number) => {
    const players: PlayerState[] = [];
    for (let i = 0; i < playerCount; i++) {
      players.push({
        id: `player${i + 1}`,
        name: `玩家${i + 1}`,
        holeStrokes: 0,
        totalStrokes: 0,
        finished: false,
        ballPosition: { x: 0, y: 0.1, z: 8 },
        powerupInventory: [],
        armedPowerup: null,
      });
    }

    globalMultiplayerState = {
      enabled: true,
      mode: 'local',
      status: 'playing',
      playerCount,
      currentPlayerId: players[0].id,
      turnIndex: 0,
      round: 1,
      revision: Date.now(),
      players,
      winnerId: null,
      tiedPlayerIds: [],
    };

    notifyStateChange();
  }, []);

  const nextPlayer = useCallback(() => {
    const state = globalMultiplayerState;
    if (!state.enabled) return;

    // Save current player state
    const currentPlayerIdx = state.turnIndex;
    const currentPlayer = state.players[currentPlayerIdx];
    if (currentPlayer) {
      currentPlayer.holeStrokes = globalGameState.currentHoleStrokes;
      currentPlayer.ballPosition = { ...globalBallState.position };
      currentPlayer.powerupInventory = [...globalPowerupState.inventory];
      currentPlayer.armedPowerup = globalPowerupState.armedType as 'hole_in_one' | null;
    }

    // Move to next player
    let nextIdx = (state.turnIndex + 1) % state.playerCount;
    
    // Check if current round is complete
    if (nextIdx === 0) {
      state.round++;
    }

    // Update turn
    state.turnIndex = nextIdx;
    state.currentPlayerId = state.players[nextIdx].id;
    state.revision = Date.now();

    // Load next player state
    const nextPlayer = state.players[nextIdx];
    globalGameState = {
      ...globalGameState,
      currentHoleStrokes: nextPlayer.holeStrokes,
    };
    
    // Load player's ball position
    globalBallState = {
      ...globalBallState,
      position: { ...nextPlayer.ballPosition },
      lastSafePosition: { ...nextPlayer.ballPosition },
    };

    // Load player's powerup inventory
    globalPowerupState = {
      ...globalPowerupState,
      inventory: [...nextPlayer.powerupInventory],
      armedType: nextPlayer.armedPowerup,
    };

    notifyStateChange();
  }, []);

  const completeMultiplayerHole = useCallback(() => {
    const state = globalMultiplayerState;
    if (!state.enabled) return;

    // Save current player's final score
    const currentPlayerIdx = state.turnIndex;
    const currentPlayer = state.players[currentPlayerIdx];
    currentPlayer.holeStrokes = globalGameState.currentHoleStrokes;
    currentPlayer.totalStrokes += globalGameState.currentHoleStrokes;
    currentPlayer.finished = true;
    currentPlayer.ballPosition = { ...globalBallState.position };

    // Check if all players finished
    const allFinished = state.players.every(p => p.finished);

    if (allFinished) {
      // Determine winner
      const minStrokes = Math.min(...state.players.map(p => p.totalStrokes));
      const winners = state.players.filter(p => p.totalStrokes === minStrokes);

      if (winners.length === 1) {
        state.winnerId = winners[0].id;
        state.tiedPlayerIds = [];
      } else {
        state.winnerId = null;
        state.tiedPlayerIds = winners.map(w => w.id);
      }

      state.status = 'complete';
      globalGameState = {
        ...globalGameState,
        gameState: 'local_result',
      };
    } else {
      nextPlayer();
    }

    notifyStateChange();
  }, [nextPlayer]);

  // Getters
  const getGameState = useCallback(() => globalGameState, []);
  const getBallState = useCallback(() => globalBallState, []);
  const getShotState = useCallback(() => globalShotState, []);
  const getCourseState = useCallback(() => globalCourseState, []);
  const getPowerupState = useCallback(() => globalPowerupState, []);
  const getCameraState = useCallback(() => globalCameraState, []);
  const getMultiplayerState = useCallback(() => globalMultiplayerState, []);
  const getLeaderboardState = useCallback(() => globalLeaderboardState, []);
  const getPerformanceState = useCallback(() => globalPerformanceState, []);

  return {
    // Setters
    setGameState,
    setMode,
    startLevel,
    resetBall,
    updateBallPosition,
    updateBallVelocity,
    updateBallSurface,
    setBallInHole,
    setBallOutOfBounds,
    incrementStroke,
    startDrag,
    updateDrag,
    endDrag,
    setCanShoot,
    setHoleComplete,
    completeHole,
    nextLevel,
    setCameraZoom,
    zoomIn,
    zoomOut,
    collectPowerup,
    armHoleInOnePowerup,
    useArmedPowerup,
    setupMultiplayer,
    nextPlayer,
    completeMultiplayerHole,

    // Getters
    getGameState,
    getBallState,
    getShotState,
    getCourseState,
    getPowerupState,
    getCameraState,
    getMultiplayerState,
    getLeaderboardState,
    getPerformanceState,
  };
}

// Window API setup
export function setupWindowAPI() {
  const contractState: ContractState = {
    version: '1.0.0',
    gameType: '3d-mini-golf',
    renderer: 'threejs',
    stateSource: 'live',
    hooksReady: true,
    hookNames: ['__contract', '__game', '__ball', '__shot', '__course', '__powerups', '__camera', '__multiplayer', '__leaderboard', '__performance'],
    buildId: BUILD_ID,
  };

  Object.assign(window, {
    __contract: {
      getState: () => ({ ...contractState }),
    },
    __game: {
      getState: () => {
        const state = globalGameState;
        return {
          ready: state.ready,
          gameState: state.gameState,
          mode: state.mode,
          currentLevel: state.currentLevel ? { ...state.currentLevel } : null,
          currentHoleStrokes: state.currentHoleStrokes,
          totalStrokes: state.totalStrokes,
          currentScore: state.currentScore,
          totalScore: state.totalScore,
          holeComplete: state.holeComplete,
          elapsedTime: state.elapsedTime,
        };
      },
    },
    __ball: {
      getState: () => {
        const state = globalBallState;
        return {
          position: { ...state.position },
          velocity: { ...state.velocity },
          speed: state.speed,
          radius: state.radius,
          moving: state.moving,
          sleeping: state.sleeping,
          airborne: state.airborne,
          inHole: state.inHole,
          outOfBounds: state.outOfBounds,
          currentSurface: state.currentSurface,
          friction: state.friction,
          lastCollision: state.lastCollision,
          lastSafePosition: { ...state.lastSafePosition },
        };
      },
    },
    __shot: {
      getState: () => {
        const state = globalShotState;
        return {
          dragging: state.dragging,
          canShoot: state.canShoot,
          startScreen: state.startScreen ? { ...state.startScreen } : null,
          currentScreen: state.currentScreen ? { ...state.currentScreen } : null,
          direction: { ...state.direction },
          power: state.power,
          minPower: state.minPower,
          maxPower: state.maxPower,
          strokeCount: state.strokeCount,
        };
      },
    },
    __course: {
      getState: () => {
        const state = globalCourseState;
        if (!state) {
          return {
            levelId: 'forest',
            name: '',
            theme: '',
            par: 0,
            bounds: { minX: 0, maxX: 0, minZ: 0, maxZ: 0 },
            spawn: { x: 0, y: 0, z: 0 },
            hole: { x: 0, y: 0, z: 0, radius: 0.5 },
            surfaces: [],
            obstacles: [],
            terrainFeatures: [],
            obstacleCount: 0,
            sceneObjectCount: 0,
            loaded: false,
          };
        }
        return {
          levelId: state.levelId,
          name: state.name,
          theme: state.theme,
          par: state.par,
          bounds: { ...state.bounds },
          spawn: { ...state.spawn },
          hole: { ...state.hole },
          surfaces: state.surfaces.map(s => ({ ...s, bounds: { ...s.bounds }, center: { ...s.center } })),
          obstacles: state.obstacles.map(o => ({
            id: o.id,
            type: o.type,
            position: { ...o.position },
            solid: o.solid,
            radius: o.radius,
            bounds: o.bounds ? { ...o.bounds } : undefined,
          })),
          terrainFeatures: state.terrainFeatures,
          obstacleCount: state.obstacleCount,
          sceneObjectCount: state.sceneObjectCount,
          loaded: state.loaded,
        };
      },
    },
    __powerups: {
      getState: () => {
        const state = globalPowerupState;
        return {
          items: state.items.map(i => ({
            id: i.id,
            type: i.type,
            position: { ...i.position },
            active: i.active,
            collected: i.collected,
            direction: i.direction ? { ...i.direction } : undefined,
          })),
          inventory: state.inventory.map(i => ({ ...i })),
          activeEffect: state.activeEffect,
          lastTriggeredId: state.lastTriggeredId,
          placingType: state.placingType,
          armedType: state.armedType,
          selectedPlacedId: state.selectedPlacedId,
        };
      },
    },
    __camera: {
      getState: () => {
        const state = globalCameraState;
        return {
          mode: state.mode,
          position: { ...state.position },
          target: { ...state.target },
          distance: state.distance,
          minDistance: state.minDistance,
          maxDistance: state.maxDistance,
          zoom: state.zoom,
          angle: state.angle,
          pitch: state.pitch,
        };
      },
    },
    __multiplayer: {
      getState: () => {
        const state = globalMultiplayerState;
        return {
          enabled: state.enabled,
          mode: state.mode,
          status: state.status,
          playerCount: state.playerCount,
          currentPlayerId: state.currentPlayerId,
          turnIndex: state.turnIndex,
          round: state.round,
          revision: state.revision,
          players: state.players.map(p => ({
            id: p.id,
            name: p.name,
            holeStrokes: p.holeStrokes,
            totalStrokes: p.totalStrokes,
            finished: p.finished,
            ballPosition: { ...p.ballPosition },
            powerupInventory: p.powerupInventory.map(i => ({ ...i })),
            armedPowerup: p.armedPowerup,
          })),
          winnerId: state.winnerId,
          tiedPlayerIds: [...state.tiedPlayerIds],
        };
      },
    },
    __leaderboard: {
      getState: () => {
        const state = globalLeaderboardState;
        return {
          levelBest: Object.fromEntries(
            Object.entries(state.levelBest).map(([k, v]) => [k, v.map(e => ({ ...e }))])
          ),
          overall: state.overall.map(e => ({
            ...e,
            levelStrokes: { ...e.levelStrokes },
          })),
          persisted: state.persisted,
        };
      },
    },
    __performance: {
      getState: () => ({ ...globalPerformanceState }),
    },
  });
}

// Singleton store reference
let storeInstance: ReturnType<typeof useGameStore> | null = null;

export function getStore() {
  return storeInstance;
}

export function setStore(store: ReturnType<typeof useGameStore>) {
  storeInstance = store;
}