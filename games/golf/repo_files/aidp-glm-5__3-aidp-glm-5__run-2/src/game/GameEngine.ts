import * as THREE from 'three';
import {
  Level, LevelId, BallState, ShotState, CourseState, MultiplayerState,
  PowerupsState, CameraState, PerformanceState, GameStateData, GameState,
  Vec3, PowerupType, Player, LeaderboardStateData, LeaderboardEntry, OverallLeaderboardEntry, SurfaceType
} from '../types/game';

const BUILD_ID = '1.0.0-' + Date.now();
const FIXED_STEP = 1 / 60;
const BALL_RADIUS = 0.15;
const HOLE_RADIUS = 0.4;
const MIN_POWER = 0.5;
const MAX_POWER = 15;
const MAX_BALL_SPEED = 25;

// Level definitions
const LEVELS: Record<LevelId, Level> = {
  forest: {
    id: 'forest',
    name: 'Forest Course',
    theme: 'A peaceful forest setting with lush green grass',
    par: 3,
    bounds: { minX: -15, maxX: 15, minZ: -25, maxZ: 5 },
    spawn: { x: 0, y: 0.15, z: 0 },
    hole: { x: 0, y: 0, z: -20, radius: HOLE_RADIUS },
    grassFriction: 0.015,
    sandFriction: 0.0525, // 3.5x grass
    iceFriction: 0, // No ice in forest
    surfaces: [
      { id: 'grass-main', type: 'grass', friction: 0.015, bounds: { minX: -15, maxX: 15, minZ: -25, maxZ: 5 } },
      { id: 'sand-1', type: 'sand', friction: 0.0525, center: { x: -5, y: 0, z: -10 }, bounds: { minX: -7, maxX: -3, minZ: -12, maxZ: -8 } },
      { id: 'sand-2', type: 'sand', friction: 0.0525, center: { x: 5, y: 0, z: -15 }, bounds: { minX: 3, maxX: 7, minZ: -17, maxZ: -13 } }
    ],
    obstacles: [
      { id: 'tree-1', type: 'tree', position: { x: -8, y: 0, z: -5 }, solid: true, radius: 0.8 },
      { id: 'tree-2', type: 'tree', position: { x: 8, y: 0, z: -12 }, solid: true, radius: 0.8 },
      { id: 'rock-1', type: 'rock', position: { x: 3, y: 0, z: -7 }, solid: true, radius: 0.6 },
      { id: 'rock-2', type: 'rock', position: { x: -6, y: 0, z: -18 }, solid: true, radius: 0.5 }
    ],
    terrainFeatures: []
  },
  desert: {
    id: 'desert',
    name: 'Desert Course',
    theme: 'A hot desert with sandy terrain and scattered dunes',
    par: 4,
    bounds: { minX: -18, maxX: 18, minZ: -30, maxZ: 5 },
    spawn: { x: 0, y: 0.15, z: 0 },
    hole: { x: 2, y: 0, z: -25, radius: HOLE_RADIUS },
    grassFriction: 0.018,
    sandFriction: 0.063, // 3.5x grass
    iceFriction: 0,
    surfaces: [
      { id: 'grass-path', type: 'grass', friction: 0.018, bounds: { minX: -3, maxX: 3, minZ: -30, maxZ: 5 } },
      { id: 'sand-main', type: 'sand', friction: 0.063, bounds: { minX: -18, maxX: 18, minZ: -30, maxZ: 5 } }
    ],
    obstacles: [
      { id: 'dune-1', type: 'dune', position: { x: -10, y: 0, z: -10 }, solid: true, radius: 2.5 },
      { id: 'dune-2', type: 'dune', position: { x: 8, y: 0, z: -18 }, solid: true, radius: 2 },
      { id: 'dune-3', type: 'dune', position: { x: -5, y: 0, z: -22 }, solid: true, radius: 1.8 },
      { id: 'rock-1', type: 'rock', position: { x: 12, y: 0, z: -8 }, solid: true, radius: 1 },
      { id: 'rock-2', type: 'rock', position: { x: -12, y: 0, z: -25 }, solid: true, radius: 0.8 }
    ],
    terrainFeatures: []
  },
  snow: {
    id: 'snow',
    name: 'Ice Course',
    theme: 'A frozen wonderland with slippery ice surfaces',
    par: 3,
    bounds: { minX: -15, maxX: 15, minZ: -28, maxZ: 5 },
    spawn: { x: 0, y: 0.15, z: 0 },
    hole: { x: -3, y: 0, z: -23, radius: HOLE_RADIUS },
    grassFriction: 0.016,
    sandFriction: 0.056, // 3.5x grass
    iceFriction: 0.002, // 1/8 of grass
    surfaces: [
      { id: 'ice-main', type: 'ice', friction: 0.002, bounds: { minX: -15, maxX: 15, minZ: -28, maxZ: 5 } },
      { id: 'grass-strip', type: 'grass', friction: 0.016, bounds: { minX: -2, maxX: 2, minZ: -5, maxZ: 5 } },
      { id: 'sand-patch', type: 'sand', friction: 0.056, center: { x: 8, y: 0, z: -15 }, bounds: { minX: 6, maxX: 10, minZ: -17, maxZ: -13 } }
    ],
    obstacles: [
      { id: 'ice-crystal-1', type: 'ice_crystal', position: { x: -8, y: 0, z: -10 }, solid: true, radius: 0.7 },
      { id: 'ice-crystal-2', type: 'ice_crystal', position: { x: 6, y: 0, z: -20 }, solid: true, radius: 0.6 },
      { id: 'snow-pile-1', type: 'snow_pile', position: { x: 10, y: 0, z: -8 }, solid: true, radius: 1.2 },
      { id: 'snow-pile-2', type: 'snow_pile', position: { x: -10, y: 0, z: -18 }, solid: true, radius: 1 }
    ],
    terrainFeatures: []
  }
};

export class GameEngine {
  private scene: THREE.Scene | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private ball: THREE.Mesh | null = null;
  private hole: THREE.Mesh | null = null;
  private ground: THREE.Mesh | null = null;
  private surfaceMeshes: Map<string, THREE.Mesh> = new Map();
  private obstacleMeshes: Map<string, THREE.Mesh> = new Map();
  private powerupMeshes: Map<string, THREE.Mesh> = new Map();
  
  private ballPosition: Vec3 = { x: 0, y: 0.15, z: 0 };
  private ballVelocity: Vec3 = { x: 0, y: 0, z: 0 };
  private ballMoving: boolean = false;
  private ballInHole: boolean = false;
  private ballAirborne: boolean = false;
  private ballOutOfBounds: boolean = false;
  private currentSurface: SurfaceType = 'grass';
  private currentFriction: number = 0.015;
  private lastCollision: string | null = null;
  private lastSafePosition: Vec3 = { x: 0, y: 0.15, z: 0 };
  
  private dragging: boolean = false;
  private startScreen: { x: number; y: number } | null = null;
  private currentScreen: { x: number; y: number } | null = null;
  private shotDirection: { x: number; z: number } = { x: 0, z: 0 };
  private shotPower: number = 0;
  private strokeCount: number = 0;
  
  private currentLevel: LevelId = 'forest';
  private gameState: GameState = 'menu';
  private gameMode: 'single' | 'local_multiplayer' = 'single';
  private elapsedTime: number = 0;
  private holeComplete: boolean = false;
  private totalStrokes: number = 0;
  private currentScore: number = 0;
  private totalScore: number = 0;
  
  private multiplayer: MultiplayerState = {
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
    tiedPlayerIds: []
  };
  
  private powerups: PowerupsState = {
    items: [],
    inventory: [],
    activeEffect: null,
    lastTriggeredId: null,
    placingType: null,
    armedType: null,
    selectedPlacedId: null
  };
  
  private cameraState: CameraState = {
    mode: 'follow',
    position: { x: 0, y: 10, z: 10 },
    target: { x: 0, y: 0, z: 0 },
    distance: 15,
    minDistance: 5,
    maxDistance: 40,
    zoom: 1,
    angle: 0,
    pitch: 45
  };
  
  private performance: PerformanceState = {
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
    poolStats: {}
  };
  
  private leaderboard: LeaderboardStateData = {
    levelBest: {},
    overall: [],
    persisted: false
  };
  
  private animationId: number | null = null;
  private lastTime: number = 0;
  private container: HTMLElement | null = null;
  private onStateChange: (() => void) | null = null;
  private holeInOneArmed: boolean = false;

  constructor() {
    this.loadLeaderboard();
  }

  // Expose to window
  public exposeToWindow() {
    (window as unknown as Record<string, unknown>).__contract = {
      getState: () => ({
        version: '1.0.0',
        gameType: '3d-mini-golf',
        renderer: 'threejs',
        stateSource: 'live',
        hooksReady: true,
        hookNames: ['__contract', '__game', '__ball', '__shot', '__course', '__multiplayer', '__powerups', '__camera', '__leaderboard', '__performance'],
        buildId: BUILD_ID
      })
    };
    
    (window as unknown as Record<string, unknown>).__game = {
      getState: () => this.getGameState()
    };
    
    (window as unknown as Record<string, unknown>).__ball = {
      getState: () => this.getBallState()
    };
    
    (window as unknown as Record<string, unknown>).__shot = {
      getState: () => this.getShotState()
    };
    
    (window as unknown as Record<string, unknown>).__course = {
      getState: () => this.getCourseState()
    };
    
    (window as unknown as Record<string, unknown>).__multiplayer = {
      getState: () => this.multiplayer
    };
    
    (window as unknown as Record<string, unknown>).__powerups = {
      getState: () => this.powerups
    };
    
    (window as unknown as Record<string, unknown>).__camera = {
      getState: () => this.cameraState
    };
    
    (window as unknown as Record<string, unknown>).__leaderboard = {
      getState: () => this.leaderboard
    };
    
    (window as unknown as Record<string, unknown>).__performance = {
      getState: () => this.performance
    };
  }

  private getGameState(): GameStateData {
    const level = LEVELS[this.currentLevel];
    return {
      ready: this.scene !== null,
      gameState: this.gameState,
      mode: this.gameMode,
      currentLevel: this.gameState === 'playing' || this.gameState === 'hole_complete' ? {
        id: level.id,
        name: level.name,
        theme: level.theme,
        par: level.par
      } : null,
      currentHoleStrokes: this.strokeCount,
      totalStrokes: this.totalStrokes,
      currentScore: this.currentScore,
      totalScore: this.totalScore,
      holeComplete: this.holeComplete,
      elapsedTime: this.elapsedTime
    };
  }

  private getBallState(): BallState {
    const speed = Math.sqrt(this.ballVelocity.x ** 2 + this.ballVelocity.y ** 2 + this.ballVelocity.z ** 2);
    return {
      position: { ...this.ballPosition },
      velocity: { ...this.ballVelocity },
      speed,
      radius: BALL_RADIUS,
      moving: this.ballMoving,
      sleeping: !this.ballMoving && !this.dragging,
      airborne: this.ballAirborne,
      inHole: this.ballInHole,
      outOfBounds: this.ballOutOfBounds,
      currentSurface: this.currentSurface,
      friction: this.currentFriction,
      lastCollision: this.lastCollision,
      lastSafePosition: { ...this.lastSafePosition }
    };
  }

  private getShotState(): ShotState {
    return {
      dragging: this.dragging,
      canShoot: !this.ballMoving && !this.ballInHole,
      startScreen: this.startScreen ? { ...this.startScreen } : null,
      currentScreen: this.currentScreen ? { ...this.currentScreen } : null,
      direction: { ...this.shotDirection },
      power: this.shotPower,
      minPower: MIN_POWER,
      maxPower: MAX_POWER,
      strokeCount: this.strokeCount
    };
  }

  private getCourseState(): CourseState {
    const level = LEVELS[this.currentLevel];
    return {
      levelId: level.id,
      name: level.name,
      theme: level.theme,
      par: level.par,
      bounds: { ...level.bounds },
      spawn: { ...level.spawn },
      hole: { ...level.hole },
      surfaces: level.surfaces.map(s => ({ ...s })),
      obstacles: level.obstacles.map(o => ({ ...o })),
      terrainFeatures: level.terrainFeatures.map(t => ({ ...t })),
      obstacleCount: level.obstacles.length,
      sceneObjectCount: this.scene?.children.length ?? 0,
      loaded: this.scene !== null
    };
  }

  public setOnStateChange(callback: () => void) {
    this.onStateChange = callback;
  }

  public init(container: HTMLElement) {
    this.container = container;
    
    // Create scene
    this.scene = new THREE.Scene();
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.updateCameraPosition();
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.camera.left = -30;
    directionalLight.shadow.camera.right = 30;
    directionalLight.shadow.camera.top = 30;
    directionalLight.shadow.camera.bottom = -30;
    this.scene.add(directionalLight);
    
    // Expose to window
    (window as unknown as Record<string, unknown>).__THREE_SCENE__ = this.scene;
    (window as unknown as Record<string, unknown>).__THREE_RENDERER__ = this.renderer;
    
    this.exposeToWindow();
    
    // Handle resize
    window.addEventListener('resize', this.handleResize);
    
    // Start render loop
    this.animate(0);
  }

  private handleResize = () => {
    if (!this.container || !this.renderer || !this.camera) return;
    
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  public destroy() {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    window.removeEventListener('resize', this.handleResize);
    
    if (this.renderer) {
      this.renderer.dispose();
      if (this.container && this.renderer.domElement.parentNode === this.container) {
        this.container.removeChild(this.renderer.domElement);
      }
    }
    
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.ball = null;
    this.ground = null;
    this.surfaceMeshes.clear();
    this.obstacleMeshes.clear();
    this.powerupMeshes.clear();
  }

  public loadLevel(levelId: LevelId) {
    if (!this.scene) return;
    
    this.currentLevel = levelId;
    const level = LEVELS[levelId];
    
    // Clear existing objects
    if (this.ground) this.scene.remove(this.ground);
    if (this.ball) this.scene.remove(this.ball);
    if (this.hole) this.scene.remove(this.hole);
    
    this.surfaceMeshes.forEach(mesh => this.scene?.remove(mesh));
    this.surfaceMeshes.clear();
    this.obstacleMeshes.forEach(mesh => this.scene?.remove(mesh));
    this.obstacleMeshes.clear();
    this.powerupMeshes.forEach(mesh => this.scene?.remove(mesh));
    this.powerupMeshes.clear();
    
    // Create ground based on theme
    const groundGeometry = new THREE.PlaneGeometry(
      level.bounds.maxX - level.bounds.minX,
      level.bounds.maxZ - level.bounds.minZ
    );
    
    let groundColor: number;
    switch (levelId) {
      case 'forest': groundColor = 0x228B22; break;
      case 'desert': groundColor = 0xC2B280; break;
      case 'snow': groundColor = 0xE8E8E8; break;
      default: groundColor = 0x228B22;
    }
    
    const groundMaterial = new THREE.MeshStandardMaterial({ color: groundColor });
    this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.set(
      (level.bounds.minX + level.bounds.maxX) / 2,
      0,
      (level.bounds.minZ + level.bounds.maxZ) / 2
    );
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);
    
    // Create surfaces
    level.surfaces.forEach(surface => {
      if (surface.bounds) {
        const width = surface.bounds.maxX - surface.bounds.minX;
        const height = surface.bounds.maxZ - surface.bounds.minZ;
        const geometry = new THREE.PlaneGeometry(width, height);
        
        let color: number;
        switch (surface.type) {
          case 'grass': color = 0x2E8B2E; break;
          case 'sand': color = 0xD2B48C; break;
          case 'ice': color = 0xADD8E6; break;
          default: color = 0x228B22;
        }
        
        const material = new THREE.MeshStandardMaterial({ 
          color,
          transparent: surface.type === 'ice',
          opacity: surface.type === 'ice' ? 0.8 : 1
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(
          (surface.bounds.minX + surface.bounds.maxX) / 2,
          0.01,
          (surface.bounds.minZ + surface.bounds.maxZ) / 2
        );
        mesh.receiveShadow = true;
        this.scene?.add(mesh);
        this.surfaceMeshes.set(surface.id, mesh);
      }
    });
    
    // Create obstacles
    level.obstacles.forEach(obstacle => {
      let geometry: THREE.BufferGeometry;
      let color: number;
      
      switch (obstacle.type) {
        case 'tree':
          geometry = new THREE.ConeGeometry(0.5, 2, 8);
          color = 0x228B22;
          break;
        case 'rock':
          geometry = new THREE.SphereGeometry(obstacle.radius || 0.5, 8, 6);
          color = 0x808080;
          break;
        case 'dune':
          geometry = new THREE.SphereGeometry(obstacle.radius || 2, 16, 8);
          color = 0xD2B48C;
          break;
        case 'ice_crystal':
          geometry = new THREE.OctahedronGeometry(obstacle.radius || 0.5);
          color = 0x87CEEB;
          break;
        case 'snow_pile':
          geometry = new THREE.SphereGeometry(obstacle.radius || 1, 12, 8);
          color = 0xFFFFFF;
          break;
        default:
          geometry = new THREE.BoxGeometry(1, 1, 1);
          color = 0x808080;
      }
      
      const material = new THREE.MeshStandardMaterial({ color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(obstacle.position.x, obstacle.position.y + (obstacle.type === 'tree' ? 1 : 0), obstacle.position.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene?.add(mesh);
      this.obstacleMeshes.set(obstacle.id, mesh);
    });
    
    // Create hole
    const holeGeometry = new THREE.CircleGeometry(level.hole.radius, 32);
    const holeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    this.hole = new THREE.Mesh(holeGeometry, holeMaterial);
    this.hole.rotation.x = -Math.PI / 2;
    this.hole.position.set(level.hole.x, 0.02, level.hole.z);
    this.scene.add(this.hole);
    
    // Create ball
    const ballGeometry = new THREE.SphereGeometry(BALL_RADIUS, 32, 16);
    const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
    this.ball = new THREE.Mesh(ballGeometry, ballMaterial);
    this.ball.castShadow = true;
    this.ball.position.set(level.spawn.x, level.spawn.y, level.spawn.z);
    this.scene.add(this.ball);
    
    // Reset ball state
    this.ballPosition = { ...level.spawn };
    this.ballVelocity = { x: 0, y: 0, z: 0 };
    this.ballMoving = false;
    this.ballInHole = false;
    this.ballOutOfBounds = false;
    this.currentSurface = 'grass';
    this.currentFriction = level.grassFriction;
    this.lastSafePosition = { ...level.spawn };
    
    // Create powerups
    this.createPowerups(levelId);
    
    // Update camera
    this.updateCameraPosition();
    
    if (this.onStateChange) this.onStateChange();
  }

  private createPowerups(levelId: LevelId) {
    // Powerup positions based on level
    const powerupConfigs: { type: PowerupType; position: Vec3; direction?: { x: number; z: number } }[] = [];
    
    switch (levelId) {
      case 'forest':
        powerupConfigs.push(
          { type: 'bounce_pad', position: { x: -6, y: 0.2, z: -5 }, direction: { x: 0, z: -1 } },
          { type: 'speed_boost', position: { x: 6, y: 0.2, z: -8 }, direction: { x: 0, z: -1 } },
          { type: 'hole_in_one', position: { x: 0, y: 0.2, z: -12 } }
        );
        break;
      case 'desert':
        powerupConfigs.push(
          { type: 'bounce_pad', position: { x: 5, y: 0.2, z: -5 }, direction: { x: -1, z: -1 } },
          { type: 'speed_boost', position: { x: -8, y: 0.2, z: -15 }, direction: { x: 0, z: -1 } },
          { type: 'hole_in_one', position: { x: -3, y: 0.2, z: -20 } }
        );
        break;
      case 'snow':
        powerupConfigs.push(
          { type: 'bounce_pad', position: { x: 5, y: 0.2, z: -5 }, direction: { x: 0, z: -1 } },
          { type: 'speed_boost', position: { x: -5, y: 0.2, z: -12 }, direction: { x: -1, z: -1 } },
          { type: 'hole_in_one', position: { x: 3, y: 0.2, z: -18 } }
        );
        break;
    }
    
    this.powerups.items = powerupConfigs.map((config, index) => ({
      id: `powerup-${index}`,
      type: config.type,
      position: { ...config.position },
      active: true,
      collected: false,
      direction: config.direction
    }));
    
    // Create meshes
    this.powerups.items.forEach(item => {
      const geometry = new THREE.BoxGeometry(0.4, 0.3, 0.4);
      let color: number;
      switch (item.type) {
        case 'bounce_pad': color = 0xFF6B6B; break;
        case 'speed_boost': color = 0x4ECDC4; break;
        case 'hole_in_one': color = 0xFFD93D; break;
        default: color = 0xFFFFFF;
      }
      const material = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.3 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(item.position.x, item.position.y, item.position.z);
      mesh.castShadow = true;
      this.scene?.add(mesh);
      this.powerupMeshes.set(item.id, mesh);
    });
  }

  public startGame(mode: 'single' | 'local_multiplayer', playerCount: number = 1) {
    this.gameMode = mode;
    this.gameState = 'playing';
    this.strokeCount = 0;
    this.totalStrokes = 0;
    this.currentScore = 0;
    this.totalScore = 0;
    this.holeComplete = false;
    this.elapsedTime = 0;
    this.holeInOneArmed = false;
    
    if (mode === 'local_multiplayer') {
      this.multiplayer.enabled = true;
      this.multiplayer.mode = 'local';
      this.multiplayer.status = 'playing';
      this.multiplayer.playerCount = playerCount;
      this.multiplayer.turnIndex = 0;
      this.multiplayer.round = 1;
      this.multiplayer.revision++;
      
      this.multiplayer.players = [];
      for (let i = 0; i < playerCount; i++) {
        this.multiplayer.players.push({
          id: `player-${i + 1}`,
          name: `Player ${i + 1}`,
          holeStrokes: 0,
          totalStrokes: 0,
          finished: false,
          ballPosition: { ...LEVELS[this.currentLevel].spawn },
          powerupInventory: [],
          armedPowerup: null
        });
      }
      this.multiplayer.currentPlayerId = this.multiplayer.players[0].id;
    } else {
      this.multiplayer.enabled = false;
      this.multiplayer.status = 'setup';
      this.multiplayer.players = [];
    }
    
    this.powerups.inventory = [];
    
    if (this.onStateChange) this.onStateChange();
  }

  private updateCameraPosition() {
    if (!this.camera) return;
    
    const targetPos = this.ballInHole ? LEVELS[this.currentLevel].hole : this.ballPosition;
    const distance = this.cameraState.distance;
    
    this.cameraState.target = { ...targetPos };
    this.cameraState.position = {
      x: targetPos.x,
      y: targetPos.y + distance * 0.7,
      z: targetPos.z + distance * 0.7
    };
    
    this.camera.position.set(
      this.cameraState.position.x,
      this.cameraState.position.y,
      this.cameraState.position.z
    );
    this.camera.lookAt(targetPos.x, targetPos.y, targetPos.z);
  }

  public setZoom(delta: number) {
    this.cameraState.distance = Math.max(
      this.cameraState.minDistance,
      Math.min(this.cameraState.maxDistance, this.cameraState.distance + delta)
    );
    this.cameraState.zoom = this.cameraState.distance / 15;
    this.updateCameraPosition();
    if (this.onStateChange) this.onStateChange();
  }

  public startDrag(screenX: number, screenY: number) {
    if (this.ballMoving || this.ballInHole) return;
    
    this.dragging = true;
    this.startScreen = { x: screenX, y: screenY };
    this.currentScreen = { x: screenX, y: screenY };
    this.shotPower = 0;
    this.shotDirection = { x: 0, z: 0 };
    
    if (this.onStateChange) this.onStateChange();
  }

  public updateDrag(screenX: number, screenY: number) {
    if (!this.dragging) return;
    
    this.currentScreen = { x: screenX, y: screenY };
    
    if (this.startScreen) {
      const dx = this.startScreen.x - screenX;
      const dy = this.startScreen.y - screenY;
      
      const distance = Math.sqrt(dx * dx + dy * dy);
      this.shotPower = Math.min(MAX_POWER, Math.max(MIN_POWER, distance * 0.05));
      
      // Direction from ball to target (reversed from drag)
      if (distance > 10) {
        this.shotDirection = {
          x: -dx / distance,
          z: -dy / distance
        };
      }
    }
    
    if (this.onStateChange) this.onStateChange();
  }

  public endDrag() {
    if (!this.dragging) return;
    
    this.dragging = false;
    
    if (this.shotPower > MIN_POWER && this.startScreen && this.currentScreen) {
      this.shoot();
    }
    
    this.startScreen = null;
    this.currentScreen = null;
    this.shotPower = 0;
    
    if (this.onStateChange) this.onStateChange();
  }

  private shoot() {
    if (this.ballMoving) return;
    
    // Check for hole-in-one powerup
    if (this.holeInOneArmed) {
      // Instant hole in one
      this.ballPosition = { ...LEVELS[this.currentLevel].hole, y: 0.1 };
      this.ballVelocity = { x: 0, y: 0, z: 0 };
      this.ballInHole = true;
      this.holeInOneArmed = false;
      
      // Remove from inventory
      const hioIndex = this.powerups.inventory.findIndex(p => p.type === 'hole_in_one');
      if (hioIndex >= 0) {
        this.powerups.inventory[hioIndex].count--;
        if (this.powerups.inventory[hioIndex].count <= 0) {
          this.powerups.inventory.splice(hioIndex, 1);
        }
      }
      
      if (this.multiplayer.enabled && this.multiplayer.currentPlayerId) {
        const player = this.multiplayer.players.find(p => p.id === this.multiplayer.currentPlayerId);
        if (player) {
          const pioIndex = player.powerupInventory.findIndex(p => p.type === 'hole_in_one');
          if (pioIndex >= 0) {
            player.powerupInventory[pioIndex].count--;
            if (player.powerupInventory[pioIndex].count <= 0) {
              player.powerupInventory.splice(pioIndex, 1);
            }
          }
          player.armedPowerup = null;
        }
      }
      
      this.strokeCount++;
      this.handleHoleComplete();
      return;
    }
    
    const speed = Math.min(this.shotPower, MAX_POWER);
    this.ballVelocity = {
      x: this.shotDirection.x * speed,
      y: 0,
      z: this.shotDirection.z * speed
    };
    
    this.ballMoving = true;
    this.strokeCount++;
    this.lastSafePosition = { ...this.ballPosition };
    
    if (this.multiplayer.enabled && this.multiplayer.currentPlayerId) {
      const player = this.multiplayer.players.find(p => p.id === this.multiplayer.currentPlayerId);
      if (player) {
        player.holeStrokes = this.strokeCount;
      }
    }
    
    if (this.onStateChange) this.onStateChange();
  }

  private animate = (time: number) => {
    this.animationId = requestAnimationFrame(this.animate);
    
    const deltaTime = Math.min((time - this.lastTime) / 1000, 0.1);
    this.lastTime = time;
    
    if (this.gameState === 'playing') {
      this.elapsedTime += deltaTime;
      this.performance.accumulator += deltaTime;
      
      while (this.performance.accumulator >= FIXED_STEP) {
        this.fixedUpdate(FIXED_STEP);
        this.performance.accumulator -= FIXED_STEP;
        this.performance.simulationTick++;
      }
      
      this.updateCameraPosition();
    }
    
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
      this.performance.renderFrame++;
    }
  };

  private fixedUpdate(dt: number) {
    if (!this.ballMoving || this.ballInHole) return;
    
    const level = LEVELS[this.currentLevel];
    
    // Check surface
    this.currentSurface = this.getSurfaceAtPosition(this.ballPosition);
    this.currentFriction = this.getFrictionForSurface(this.currentSurface);
    
    // Apply friction
    this.ballVelocity.x *= (1 - this.currentFriction);
    this.ballVelocity.z *= (1 - this.currentFriction);
    
    // Apply velocity
    this.ballPosition.x += this.ballVelocity.x * dt;
    this.ballPosition.z += this.ballVelocity.z * dt;
    
    // Clamp speed
    const speed = Math.sqrt(this.ballVelocity.x ** 2 + this.ballVelocity.z ** 2);
    if (speed > MAX_BALL_SPEED) {
      const scale = MAX_BALL_SPEED / speed;
      this.ballVelocity.x *= scale;
      this.ballVelocity.z *= scale;
    }
    
    // Check bounds
    if (this.ballPosition.x < level.bounds.minX || 
        this.ballPosition.x > level.bounds.maxX ||
        this.ballPosition.z < level.bounds.minZ ||
        this.ballPosition.z > level.bounds.maxZ) {
      this.ballOutOfBounds = true;
      this.ballMoving = false;
      this.ballPosition = { ...this.lastSafePosition };
      this.ballVelocity = { x: 0, y: 0, z: 0 };
      this.strokeCount++; // Penalty stroke
      if (this.onStateChange) this.onStateChange();
      return;
    }
    
    // Check obstacle collisions
    for (const obstacle of level.obstacles) {
      if (!obstacle.solid) continue;
      
      const dx = this.ballPosition.x - obstacle.position.x;
      const dz = this.ballPosition.z - obstacle.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const radius = obstacle.radius || 0.5;
      
      if (dist < radius + BALL_RADIUS) {
        // Bounce
        const nx = dx / dist;
        const nz = dz / dist;
        
        const dot = this.ballVelocity.x * nx + this.ballVelocity.z * nz;
        this.ballVelocity.x -= 2 * dot * nx;
        this.ballVelocity.z -= 2 * dot * nz;
        
        // Push ball out
        const overlap = radius + BALL_RADIUS - dist;
        this.ballPosition.x += nx * overlap;
        this.ballPosition.z += nz * overlap;
        
        this.lastCollision = obstacle.id;
        
        // Dampen
        this.ballVelocity.x *= 0.7;
        this.ballVelocity.z *= 0.7;
      }
    }
    
    // Check powerup collisions
    this.powerups.items.forEach(item => {
      if (!item.active || item.collected) return;
      
      const dx = this.ballPosition.x - item.position.x;
      const dz = this.ballPosition.z - item.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < 0.5) {
        item.collected = true;
        
        // Remove mesh
        const mesh = this.powerupMeshes.get(item.id);
        if (mesh && this.scene) {
          this.scene.remove(mesh);
          this.powerupMeshes.delete(item.id);
        }
        
        if (item.type === 'hole_in_one') {
          // Add to inventory instead of immediate effect
          const existing = this.powerups.inventory.find(p => p.type === 'hole_in_one');
          if (existing) {
            existing.count++;
          } else {
            this.powerups.inventory.push({ type: 'hole_in_one', count: 1 });
          }
          
          // For multiplayer, add to player's inventory
          if (this.multiplayer.enabled && this.multiplayer.currentPlayerId) {
            const player = this.multiplayer.players.find(p => p.id === this.multiplayer.currentPlayerId);
            if (player) {
              const pExisting = player.powerupInventory.find(p => p.type === 'hole_in_one');
              if (pExisting) {
                pExisting.count++;
              } else {
                player.powerupInventory.push({ type: 'hole_in_one', count: 1 });
              }
            }
          }
        } else if (item.type === 'bounce_pad') {
          // Bounce
          const dir = item.direction || { x: 0, z: -1 };
          this.ballVelocity.x = dir.x * 8;
          this.ballVelocity.z = dir.z * 8;
        } else if (item.type === 'speed_boost') {
          // Speed boost
          const dir = item.direction || { x: 0, z: -1 };
          const currentSpeed = Math.sqrt(this.ballVelocity.x ** 2 + this.ballVelocity.z ** 2);
          if (currentSpeed > 0.5) {
            this.ballVelocity.x += dir.x * 5;
            this.ballVelocity.z += dir.z * 5;
          } else {
            this.ballVelocity.x = dir.x * 6;
            this.ballVelocity.z = dir.z * 6;
          }
        }
        
        this.powerups.lastTriggeredId = item.id;
      }
    });
    
    // Check hole
    const holeDist = Math.sqrt(
      (this.ballPosition.x - level.hole.x) ** 2 +
      (this.ballPosition.z - level.hole.z) ** 2
    );
    
    if (holeDist < level.hole.radius && speed < 5) {
      this.ballInHole = true;
      this.ballMoving = false;
      this.ballPosition = { x: level.hole.x, y: 0.05, z: level.hole.z };
      this.ballVelocity = { x: 0, y: 0, z: 0 };
      this.handleHoleComplete();
      return;
    }
    
    // Check if ball stopped
    if (speed < 0.01) {
      this.ballMoving = false;
      this.ballVelocity = { x: 0, y: 0, z: 0 };
      this.lastSafePosition = { ...this.ballPosition };
      
      // Next turn in multiplayer
      if (this.multiplayer.enabled) {
        this.nextPlayerTurn();
      }
    }
    
    // Update ball mesh
    if (this.ball) {
      this.ball.position.set(this.ballPosition.x, this.ballPosition.y, this.ballPosition.z);
    }
    
    this.performance.logicLoopCount++;
    if (this.onStateChange) this.onStateChange();
  }

  private getSurfaceAtPosition(pos: Vec3): SurfaceType {
    const level = LEVELS[this.currentLevel];
    
    // Check surfaces in reverse order (later surfaces overlay earlier ones)
    for (let i = level.surfaces.length - 1; i >= 0; i--) {
      const surface = level.surfaces[i];
      if (surface.bounds) {
        if (pos.x >= surface.bounds.minX && pos.x <= surface.bounds.maxX &&
            pos.z >= surface.bounds.minZ && pos.z <= surface.bounds.maxZ) {
          return surface.type;
        }
      }
    }
    
    // Default based on level
    if (this.currentLevel === 'snow') return 'ice';
    if (this.currentLevel === 'desert') return 'sand';
    return 'grass';
  }

  private getFrictionForSurface(surface: SurfaceType): number {
    const level = LEVELS[this.currentLevel];
    switch (surface) {
      case 'grass': return level.grassFriction;
      case 'sand': return level.sandFriction;
      case 'ice': return level.iceFriction;
      default: return level.grassFriction;
    }
  }

  private handleHoleComplete() {
    this.holeComplete = true;
    this.gameState = 'hole_complete';
    
    const level = LEVELS[this.currentLevel];
    const par = level.par;
    
    // Calculate score based on strokes
    let holeScore = 0;
    if (this.strokeCount === 1) holeScore = 50; // Hole in one
    else if (this.strokeCount <= par - 2) holeScore = 30; // Eagle
    else if (this.strokeCount === par - 1) holeScore = 20; // Birdie
    else if (this.strokeCount === par) holeScore = 10; // Par
    else if (this.strokeCount === par + 1) holeScore = 5; // Bogey
    else holeScore = 1; // Completion
    
    this.currentScore = holeScore;
    this.totalScore += holeScore;
    this.totalStrokes += this.strokeCount;
    
    // Update multiplayer
    if (this.multiplayer.enabled && this.multiplayer.currentPlayerId) {
      const player = this.multiplayer.players.find(p => p.id === this.multiplayer.currentPlayerId);
      if (player) {
        player.totalStrokes += this.strokeCount;
        player.finished = true;
      }
    }
    
    // Update leaderboard
    this.updateLeaderboard();
    
    if (this.onStateChange) this.onStateChange();
  }

  private nextPlayerTurn() {
    if (!this.multiplayer.enabled) return;
    
    // Find next player who hasn't finished
    let nextIndex = (this.multiplayer.turnIndex + 1) % this.multiplayer.playerCount;
    let checked = 0;
    
    while (checked < this.multiplayer.playerCount) {
      const player = this.multiplayer.players[nextIndex];
      if (!player.finished) {
        break;
      }
      nextIndex = (nextIndex + 1) % this.multiplayer.playerCount;
      checked++;
    }
    
    // Save current player's ball position
    if (this.multiplayer.currentPlayerId) {
      const currentPlayer = this.multiplayer.players.find(p => p.id === this.multiplayer.currentPlayerId);
      if (currentPlayer) {
        currentPlayer.ballPosition = { ...this.ballPosition };
      }
    }
    
    this.multiplayer.turnIndex = nextIndex;
    this.multiplayer.currentPlayerId = this.multiplayer.players[nextIndex].id;
    this.multiplayer.revision++;
    
    // Load next player's state
    const nextPlayer = this.multiplayer.players[nextIndex];
    this.strokeCount = nextPlayer.holeStrokes;
    this.ballPosition = { ...nextPlayer.ballPosition };
    this.powerups.inventory = [...nextPlayer.powerupInventory];
    this.holeInOneArmed = nextPlayer.armedPowerup === 'hole_in_one';
    
    if (this.ball) {
      this.ball.position.set(this.ballPosition.x, this.ballPosition.y, this.ballPosition.z);
    }
    
    if (this.onStateChange) this.onStateChange();
  }

  private updateLeaderboard() {
    const levelId = this.currentLevel;
    const playerName = this.multiplayer.enabled && this.multiplayer.currentPlayerId
      ? this.multiplayer.players.find(p => p.id === this.multiplayer.currentPlayerId)?.name || 'Player'
      : 'Player';
    const playerId = this.multiplayer.enabled && this.multiplayer.currentPlayerId
      ? this.multiplayer.currentPlayerId
      : 'single-player';
    
    const level = LEVELS[levelId];
    const strokes = this.strokeCount;
    const now = Date.now();
    
    // Initialize level best if needed
    if (!this.leaderboard.levelBest[levelId]) {
      this.leaderboard.levelBest[levelId] = [];
    }
    
    // Check if player already has a record
    const existingIndex = this.leaderboard.levelBest[levelId].findIndex(e => e.playerId === playerId);
    
    if (existingIndex >= 0) {
      // Only update if better
      if (strokes < this.leaderboard.levelBest[levelId][existingIndex].strokes) {
        this.leaderboard.levelBest[levelId][existingIndex].strokes = strokes;
        this.leaderboard.levelBest[levelId][existingIndex].achievedAt = now;
        this.leaderboard.levelBest[levelId][existingIndex].relativeToPar = strokes - level.par;
      }
    } else {
      // Add new entry
      this.leaderboard.levelBest[levelId].push({
        playerId,
        playerName,
        strokes,
        rank: 0,
        par: level.par,
        relativeToPar: strokes - level.par,
        achievedAt: now
      });
    }
    
    // Sort and assign ranks
    this.leaderboard.levelBest[levelId].sort((a, b) => {
      if (a.strokes !== b.strokes) return a.strokes - b.strokes;
      if (a.achievedAt !== b.achievedAt) return a.achievedAt - b.achievedAt;
      return a.playerId.localeCompare(b.playerId);
    });
    
    this.leaderboard.levelBest[levelId].forEach((entry, index) => {
      entry.rank = index + 1;
    });
    
    // Update overall leaderboard
    this.updateOverallLeaderboard();
    
    // Persist
    this.saveLeaderboard();
  }

  private updateOverallLeaderboard() {
    // Build overall from level bests
    const playerMap = new Map<string, { playerName: string; levelStrokes: { forest?: number; desert?: number; snow?: number }; achievedAt: number }>();
    
    Object.entries(this.leaderboard.levelBest).forEach(([levelId, entries]) => {
      entries.forEach(entry => {
        if (!playerMap.has(entry.playerId)) {
          playerMap.set(entry.playerId, {
            playerName: entry.playerName,
            levelStrokes: {},
            achievedAt: entry.achievedAt
          });
        }
        const player = playerMap.get(entry.playerId)!;
        player.levelStrokes[levelId as 'forest' | 'desert' | 'snow'] = entry.strokes;
        if (entry.achievedAt > player.achievedAt) {
          player.achievedAt = entry.achievedAt;
        }
      });
    });
    
    // Filter players with all three levels
    this.leaderboard.overall = [];
    
    playerMap.forEach((data, playerId) => {
      if (data.levelStrokes.forest && data.levelStrokes.desert && data.levelStrokes.snow) {
        this.leaderboard.overall.push({
          playerId,
          playerName: data.playerName,
          levelStrokes: {
            forest: data.levelStrokes.forest,
            desert: data.levelStrokes.desert,
            snow: data.levelStrokes.snow
          },
          totalStrokes: data.levelStrokes.forest + data.levelStrokes.desert + data.levelStrokes.snow,
          rank: 0,
          achievedAt: data.achievedAt
        });
      }
    });
    
    // Sort
    this.leaderboard.overall.sort((a, b) => {
      if (a.totalStrokes !== b.totalStrokes) return a.totalStrokes - b.totalStrokes;
      if (a.achievedAt !== b.achievedAt) return a.achievedAt - b.achievedAt;
      return a.playerId.localeCompare(b.playerId);
    });
    
    // Assign ranks
    this.leaderboard.overall.forEach((entry, index) => {
      entry.rank = index + 1;
    });
  }

  private saveLeaderboard() {
    try {
      localStorage.setItem('mini-golf-leaderboard', JSON.stringify(this.leaderboard));
      this.leaderboard.persisted = true;
    } catch {
      this.leaderboard.persisted = false;
    }
  }

  private loadLeaderboard() {
    try {
      const saved = localStorage.getItem('mini-golf-leaderboard');
      if (saved) {
        this.leaderboard = JSON.parse(saved);
        this.leaderboard.persisted = true;
      }
    } catch {
      this.leaderboard.persisted = false;
    }
  }

  public nextState() {
    if (this.gameState === 'hole_complete') {
      // Single player tournament progression
      if (!this.multiplayer.enabled) {
        // Move to next level in order: forest -> desert -> snow
        const levelOrder: LevelId[] = ['forest', 'desert', 'snow'];
        const currentIndex = levelOrder.indexOf(this.currentLevel);
        
        if (currentIndex < levelOrder.length - 1) {
          // Move to next level
          const nextLevel = levelOrder[currentIndex + 1];
          this.totalStrokes += this.strokeCount;
          this.loadLevel(nextLevel);
          this.strokeCount = 0;
          this.holeComplete = false;
          this.gameState = 'playing';
        } else {
          // Tournament complete
          this.totalStrokes += this.strokeCount;
          this.gameState = 'tournament_complete';
        }
        if (this.onStateChange) this.onStateChange();
        return;
      }
      
      // Multiplayer mode
      if (this.multiplayer.enabled) {
        const allFinished = this.multiplayer.players.every(p => p.finished);
        
        if (allFinished) {
          // Determine winner
          const minStrokes = Math.min(...this.multiplayer.players.map(p => p.totalStrokes));
          const winners = this.multiplayer.players.filter(p => p.totalStrokes === minStrokes);
          
          if (winners.length === 1) {
            this.multiplayer.winnerId = winners[0].id;
            this.multiplayer.tiedPlayerIds = [];
          } else {
            this.multiplayer.winnerId = null;
            this.multiplayer.tiedPlayerIds = winners.map(w => w.id);
          }
          
          this.multiplayer.status = 'complete';
          this.gameState = 'local_result';
          if (this.onStateChange) this.onStateChange();
          return;
        }
        
        // Find next unfinished player and reset their state
        this.multiplayer.turnIndex = (this.multiplayer.turnIndex + 1) % this.multiplayer.playerCount;
        
        // Find next player who hasn't finished
        let attempts = 0;
        while (this.multiplayer.players[this.multiplayer.turnIndex].finished && attempts < this.multiplayer.playerCount) {
          this.multiplayer.turnIndex = (this.multiplayer.turnIndex + 1) % this.multiplayer.playerCount;
          attempts++;
        }
        
        this.multiplayer.currentPlayerId = this.multiplayer.players[this.multiplayer.turnIndex].id;
        this.multiplayer.revision++;
        
        // Reset level for next player
        const level = LEVELS[this.currentLevel];
        const nextPlayer = this.multiplayer.players[this.multiplayer.turnIndex];
        nextPlayer.holeStrokes = 0;
        
        // Reset ball position
        this.ballPosition = { ...level.spawn };
        this.ballVelocity = { x: 0, y: 0, z: 0 };
        this.ballMoving = false;
        this.ballInHole = false;
        this.ballOutOfBounds = false;
        this.strokeCount = 0;
        this.holeComplete = false;
        this.holeInOneArmed = nextPlayer.armedPowerup === 'hole_in_one';
        this.powerups.inventory = [...nextPlayer.powerupInventory];
        
        // Recreate powerups for next player
        this.createPowerups(this.currentLevel);
        
        // Update ball mesh
        if (this.ball) {
          this.ball.position.set(level.spawn.x, level.spawn.y, level.spawn.z);
        }
        
        this.gameState = 'playing';
        this.updateCameraPosition();
      } else {
        this.gameState = 'tournament_complete';
      }
    }
    
    if (this.onStateChange) this.onStateChange();
  }

  public resetBall() {
    const level = LEVELS[this.currentLevel];
    this.ballPosition = { ...level.spawn };
    this.ballVelocity = { x: 0, y: 0, z: 0 };
    this.ballMoving = false;
    this.ballOutOfBounds = false;
    
    if (this.ball) {
      this.ball.position.set(level.spawn.x, level.spawn.y, level.spawn.z);
    }
    
    if (this.onStateChange) this.onStateChange();
  }

  public armHoleInOne() {
    if (this.powerups.inventory.some(p => p.type === 'hole_in_one' && p.count > 0)) {
      this.holeInOneArmed = !this.holeInOneArmed;
      this.powerups.armedType = this.holeInOneArmed ? 'hole_in_one' : null;
      
      if (this.multiplayer.enabled && this.multiplayer.currentPlayerId) {
        const player = this.multiplayer.players.find(p => p.id === this.multiplayer.currentPlayerId);
        if (player) {
          player.armedPowerup = this.holeInOneArmed ? 'hole_in_one' : null;
        }
      }
      
      if (this.onStateChange) this.onStateChange();
    }
  }

  public setGameState(state: GameState) {
    this.gameState = state;
    if (this.onStateChange) this.onStateChange();
  }

  public setMultiplayerPlayerCount(count: number) {
    this.multiplayer.playerCount = count;
    if (this.onStateChange) this.onStateChange();
  }

  public getGameStateValue(): GameState {
    return this.gameState;
  }

  public getCurrentLevel(): LevelId {
    return this.currentLevel;
  }

  public getLeaderboard(): LeaderboardStateData {
    return this.leaderboard;
  }

  public getMultiplayerState(): MultiplayerState {
    return this.multiplayer;
  }
}

// Singleton instance
let gameEngineInstance: GameEngine | null = null;

export function getGameEngine(): GameEngine {
  if (!gameEngineInstance) {
    gameEngineInstance = new GameEngine();
  }
  return gameEngineInstance;
}