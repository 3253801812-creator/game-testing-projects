import * as THREE from 'three';
import { LevelConfig, SurfaceType, Vector3, PowerupType } from '../types';
import { FRICTION } from '../config/levels';

// Ball physics constants
const BALL_RADIUS = 0.15;
const MIN_VELOCITY = 0.001;
const MAX_SPEED = 15;
const BOUNCE_FACTOR = 0.6;
const MAX_POWER = 8;
const MIN_POWER = 0.5;

interface BallState {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  speed: number;
  moving: boolean;
  sleeping: boolean;
  airborne: boolean;
  inHole: boolean;
  outOfBounds: boolean;
  currentSurface: SurfaceType;
  friction: number;
  lastCollision: string | null;
  lastSafePosition: THREE.Vector3;
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

interface CameraState {
  mode: 'follow' | 'free';
  position: THREE.Vector3;
  target: THREE.Vector3;
  distance: number;
  minDistance: number;
  maxDistance: number;
  zoom: number;
  angle: number;
  pitch: number;
}

interface PowerupState {
  items: Array<{
    id: string;
    type: PowerupType;
    position: THREE.Vector3;
    active: boolean;
    collected: boolean;
    direction?: { x: number; z: number };
  }>;
  inventory: Array<{ type: PowerupType; count: number }>;
  activeEffect: string | null;
  lastTriggeredId: string | null;
  placingType: string | null;
  armedType: string | null;
}

export class GameEngine {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private ball: THREE.Mesh;
  private ballState: BallState;
  private shotState: ShotState;
  private cameraState: CameraState;
  private powerupState: PowerupState;
  private course: LevelConfig | null = null;
  private hole: THREE.Mesh | null = null;
  private surfaceMeshes: THREE.Mesh[] = [];
  private obstacleMeshes: THREE.Mesh[] = [];
  private powerupMeshes: THREE.Mesh[] = [];
  private speedBoostZones: Array<{ mesh: THREE.Mesh; direction: THREE.Vector3 }> = [];
  private bouncePadMeshes: THREE.Mesh[] = [];
  
  private animationId: number | null = null;
  private clock: THREE.Clock;
  private fixedStep: number = 1 / 60;
  private accumulator: number = 0;
  private simulationTick: number = 0;
  private renderFrame: number = 0;
  
  // Event callbacks
  public onBallInHole: (() => void) | null = null;
  public onBallOutOfBounds: (() => void) | null = null;
  public onPowerupCollected: ((type: PowerupType) => void) | null = null;
  public onSpeedBoostTriggered: (() => void) | null = null;
  public onBouncePadTriggered: (() => void) | null = null;

  constructor(container: HTMLElement) {
    // Create scene
    this.scene = new THREE.Scene();
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
    
    // Initialize ball
    const ballGeometry = new THREE.SphereGeometry(BALL_RADIUS, 32, 32);
    const ballMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.1,
    });
    this.ball = new THREE.Mesh(ballGeometry, ballMaterial);
    this.ball.castShadow = true;
    this.scene.add(this.ball);
    
    // Initialize states
    this.ballState = {
      position: new THREE.Vector3(0, BALL_RADIUS, 0),
      velocity: new THREE.Vector3(0, 0, 0),
      speed: 0,
      moving: false,
      sleeping: true,
      airborne: false,
      inHole: false,
      outOfBounds: false,
      currentSurface: 'grass',
      friction: FRICTION.GRASS,
      lastCollision: null,
      lastSafePosition: new THREE.Vector3(0, BALL_RADIUS, 0),
    };
    
    this.shotState = {
      dragging: false,
      canShoot: true,
      startScreen: null,
      currentScreen: null,
      direction: { x: 0, z: 0 },
      power: 0,
      minPower: MIN_POWER,
      maxPower: MAX_POWER,
      strokeCount: 0,
    };
    
    this.cameraState = {
      mode: 'follow',
      position: new THREE.Vector3(0, 10, 15),
      target: new THREE.Vector3(0, 0, 0),
      distance: 15,
      minDistance: 5,
      maxDistance: 40,
      zoom: 1,
      angle: 0,
      pitch: 45,
    };
    
    this.powerupState = {
      items: [],
      inventory: [
        { type: 'bounce_pad', count: 0 },
        { type: 'speed_boost', count: 0 },
        { type: 'hole_in_one', count: 0 },
      ],
      activeEffect: null,
      lastTriggeredId: null,
      placingType: null,
      armedType: null,
    };
    
    this.clock = new THREE.Clock();
    
    // Set up window globals
    this.setupWindowGlobals();
    
    // Handle resize
    window.addEventListener('resize', () => {
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  private setupWindowGlobals(): void {
    const self = this;
    
    (window as any).__THREE_SCENE__ = this.scene;
    (window as any).__THREE_RENDERER__ = this.renderer;
    
    (window as any).__contract = {
      getState: () => ({
        version: '1.0.0',
        gameType: '3d-mini-golf',
        renderer: 'threejs',
        stateSource: 'live',
        hooksReady: true,
        hookNames: ['__contract', '__game', '__ball', '__shot', '__course', '__powerups', '__camera', '__performance'],
        buildId: 'build-' + Date.now(),
      }),
    };
    
    (window as any).__ball = {
      getState: () => ({
        position: {
          x: self.ballState.position.x,
          y: self.ballState.position.y,
          z: self.ballState.position.z,
        },
        velocity: {
          x: self.ballState.velocity.x,
          y: self.ballState.velocity.y,
          z: self.ballState.velocity.z,
        },
        speed: self.ballState.speed,
        radius: BALL_RADIUS,
        moving: self.ballState.moving,
        sleeping: self.ballState.sleeping,
        airborne: self.ballState.airborne,
        inHole: self.ballState.inHole,
        outOfBounds: self.ballState.outOfBounds,
        currentSurface: self.ballState.currentSurface,
        friction: self.ballState.friction,
        lastCollision: self.ballState.lastCollision,
        lastSafePosition: {
          x: self.ballState.lastSafePosition.x,
          y: self.ballState.lastSafePosition.y,
          z: self.ballState.lastSafePosition.z,
        },
      }),
    };
    
    (window as any).__shot = {
      getState: () => ({
        dragging: self.shotState.dragging,
        canShoot: self.shotState.canShoot,
        startScreen: self.shotState.startScreen ? { ...self.shotState.startScreen } : null,
        currentScreen: self.shotState.currentScreen ? { ...self.shotState.currentScreen } : null,
        direction: { ...self.shotState.direction },
        power: self.shotState.power,
        minPower: self.shotState.minPower,
        maxPower: self.shotState.maxPower,
        strokeCount: self.shotState.strokeCount,
      }),
    };
    
    (window as any).__powerups = {
      getState: () => ({
        items: self.powerupState.items.map(item => ({
          id: item.id,
          type: item.type,
          position: { x: item.position.x, y: item.position.y, z: item.position.z },
          active: item.active,
          collected: item.collected,
          direction: item.direction ? { ...item.direction } : undefined,
        })),
        inventory: [...self.powerupState.inventory],
        activeEffect: self.powerupState.activeEffect,
        lastTriggeredId: self.powerupState.lastTriggeredId,
        placingType: self.powerupState.placingType,
        armedType: self.powerupState.armedType,
      }),
    };
    
    (window as any).__camera = {
      getState: () => ({
        mode: self.cameraState.mode,
        position: {
          x: self.cameraState.position.x,
          y: self.cameraState.position.y,
          z: self.cameraState.position.z,
        },
        target: {
          x: self.cameraState.target.x,
          y: self.cameraState.target.y,
          z: self.cameraState.target.z,
        },
        distance: self.cameraState.distance,
        minDistance: self.cameraState.minDistance,
        maxDistance: self.cameraState.maxDistance,
        zoom: self.cameraState.zoom,
        angle: self.cameraState.angle,
        pitch: self.cameraState.pitch,
      }),
    };
    
    (window as any).__performance = {
      getState: () => ({
        fixedStep: self.fixedStep,
        accumulator: self.accumulator,
        simulationTick: self.simulationTick,
        renderFrame: self.renderFrame,
        reactCommitCount: 0,
        logicLoopCount: self.simulationTick,
        listenerCount: 0,
        runtimeMountCount: 1,
        runtimeCleanupCount: 0,
        engineGeneration: 1,
        poolStats: {},
      }),
    };
  }

  public loadCourse(level: LevelConfig): void {
    this.course = level;
    this.clearScene();
    
    // Set sky color based on theme
    const skyColors: Record<string, number> = {
      forest: 0x87CEEB,
      desert: 0xF4A460,
      snow: 0xE0F0FF,
    };
    this.scene.background = new THREE.Color(skyColors[level.theme] || 0x87CEEB);
    
    // Add lighting
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
    
    // Create ground
    const groundColors: Record<string, number> = {
      forest: 0x228B22,
      desert: 0xD2B48C,
      snow: 0xFFFAFA,
    };
    const groundGeometry = new THREE.PlaneGeometry(
      level.bounds.maxX - level.bounds.minX + 10,
      level.bounds.maxZ - level.bounds.minZ + 10
    );
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: groundColors[level.theme] || 0x228B22,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    this.scene.add(ground);
    
    // Create surface patches
    this.createSurfaces(level);
    
    // Create hole
    this.createHole(level);
    
    // Create obstacles
    this.createObstacles(level);
    
    // Create border walls
    this.createBorders(level);
    
    // Reset ball to spawn position
    this.resetBallToSpawn();
    
    // Update course state for window global
    this.updateCourseGlobal();
    
    // Spawn powerups
    this.spawnPowerups(level);
  }

  private createSurfaces(level: LevelConfig): void {
    const surfaceColors: Record<string, number> = {
      sand: 0xC2B280,
      ice: 0xB0E0E6,
    };
    
    for (const surface of level.surfaces) {
      if (surface.type === 'grass') continue; // Main ground is grass
      
      if (surface.bounds) {
        const width = surface.bounds.maxX - surface.bounds.minX;
        const depth = surface.bounds.maxZ - surface.bounds.minZ;
        const centerX = (surface.bounds.minX + surface.bounds.maxX) / 2;
        const centerZ = (surface.bounds.minZ + surface.bounds.maxZ) / 2;
        
        const geometry = new THREE.PlaneGeometry(width, depth);
        const material = new THREE.MeshStandardMaterial({
          color: surfaceColors[surface.type] || 0xC2B280,
          roughness: surface.type === 'ice' ? 0.1 : 0.9,
          transparent: surface.type === 'ice',
          opacity: surface.type === 'ice' ? 0.7 : 1,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(centerX, 0.01, centerZ);
        mesh.receiveShadow = true;
        mesh.userData = { surfaceType: surface.type, friction: surface.friction, surfaceId: surface.id };
        this.scene.add(mesh);
        this.surfaceMeshes.push(mesh);
        
        // Add visual border for ice
        if (surface.type === 'ice') {
          const borderGeometry = new THREE.EdgesGeometry(geometry);
          const borderMaterial = new THREE.LineBasicMaterial({ color: 0x4169E1, linewidth: 2 });
          const border = new THREE.LineSegments(borderGeometry, borderMaterial);
          border.rotation.x = -Math.PI / 2;
          border.position.set(centerX, 0.02, centerZ);
          this.scene.add(border);
        }
      }
    }
  }

  private createHole(level: LevelConfig): void {
    // Hole circle
    const holeGeometry = new THREE.CircleGeometry(level.hole.radius, 32);
    const holeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a1a,
      roughness: 0.9,
    });
    this.hole = new THREE.Mesh(holeGeometry, holeMaterial);
    this.hole.rotation.x = -Math.PI / 2;
    this.hole.position.set(level.hole.x, 0.01, level.hole.z);
    this.scene.add(this.hole);
    
    // Flag pole
    const poleGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 8);
    const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.set(level.hole.x, 1, level.hole.z);
    this.scene.add(pole);
    
    // Flag
    const flagGeometry = new THREE.PlaneGeometry(0.6, 0.4);
    const flagColors: Record<string, number> = {
      forest: 0x228B22,
      desert: 0xDAA520,
      snow: 0x4169E1,
    };
    const flagMaterial = new THREE.MeshStandardMaterial({ 
      color: flagColors[level.theme] || 0xFF0000,
      side: THREE.DoubleSide,
    });
    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    flag.position.set(level.hole.x + 0.3, 1.8, level.hole.z);
    this.scene.add(flag);
  }

  private createObstacles(level: LevelConfig): void {
    const obstacleColors: Record<string, Record<string, number>> = {
      forest: { tree: 0x006400, rock: 0x696969 },
      desert: { dune: 0xD2B48C, rock: 0x8B4513 },
      snow: { snow_pile: 0xFFFAFA, ice_crystal: 0x87CEEB, rock: 0x708090 },
    };
    
    for (const obstacle of level.obstacles) {
      if (!obstacle.solid) continue;
      
      const color = obstacleColors[level.theme]?.[obstacle.type] || 0x808080;
      const radius = obstacle.radius || 1;
      
      let geometry: THREE.BufferGeometry;
      if (obstacle.type === 'tree') {
        // Tree trunk
        const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(obstacle.position.x, 1, obstacle.position.z);
        trunk.castShadow = true;
        this.scene.add(trunk);
        
        // Tree foliage
        const foliageGeometry = new THREE.ConeGeometry(1.2, 2.5, 8);
        const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
        const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
        foliage.position.set(obstacle.position.x, 3, obstacle.position.z);
        foliage.castShadow = true;
        this.scene.add(foliage);
        
        // Collision cylinder
        geometry = new THREE.CylinderGeometry(radius, radius, 4, 16);
      } else if (obstacle.type === 'dune' || obstacle.type === 'snow_pile') {
        geometry = new THREE.ConeGeometry(radius, 1, 8);
      } else if (obstacle.type === 'ice_crystal') {
        geometry = new THREE.OctahedronGeometry(radius);
      } else {
        geometry = new THREE.SphereGeometry(radius, 16, 16);
      }
      
      const material = new THREE.MeshStandardMaterial({ 
        color,
        roughness: obstacle.type === 'ice_crystal' ? 0.1 : 0.8,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(obstacle.position.x, obstacle.type === 'tree' ? 2 : 0.5, obstacle.position.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { obstacleId: obstacle.id, obstacleType: obstacle.type, radius };
      this.scene.add(mesh);
      this.obstacleMeshes.push(mesh);
    }
  }

  private createBorders(level: LevelConfig): void {
    const borderMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4a4a4a,
      roughness: 0.9,
    });
    
    const wallHeight = 0.3;
    const wallThickness = 0.5;
    
    // North wall
    const northWall = new THREE.Mesh(
      new THREE.BoxGeometry(level.bounds.maxX - level.bounds.minX + 2, wallHeight, wallThickness),
      borderMaterial
    );
    northWall.position.set(0, wallHeight / 2, level.bounds.maxZ + wallThickness / 2);
    northWall.castShadow = true;
    this.scene.add(northWall);
    
    // South wall
    const southWall = new THREE.Mesh(
      new THREE.BoxGeometry(level.bounds.maxX - level.bounds.minX + 2, wallHeight, wallThickness),
      borderMaterial
    );
    southWall.position.set(0, wallHeight / 2, level.bounds.minZ - wallThickness / 2);
    southWall.castShadow = true;
    this.scene.add(southWall);
    
    // East wall
    const eastWall = new THREE.Mesh(
      new THREE.BoxGeometry(wallThickness, wallHeight, level.bounds.maxZ - level.bounds.minZ),
      borderMaterial
    );
    eastWall.position.set(level.bounds.maxX + wallThickness / 2, wallHeight / 2, 0);
    eastWall.castShadow = true;
    this.scene.add(eastWall);
    
    // West wall
    const westWall = new THREE.Mesh(
      new THREE.BoxGeometry(wallThickness, wallHeight, level.bounds.maxZ - level.bounds.minZ),
      borderMaterial
    );
    westWall.position.set(level.bounds.minX - wallThickness / 2, wallHeight / 2, 0);
    westWall.castShadow = true;
    this.scene.add(westWall);
  }

  private spawnPowerups(level: LevelConfig): void {
    this.powerupState.items = [];
    this.speedBoostZones = [];
    this.bouncePadMeshes = [];
    
    // Spawn powerups based on level theme
    const powerupPositions = [
      { x: level.spawn.x * 0.3, z: level.spawn.z * 0.3 },
      { x: -level.spawn.x * 0.3, z: level.spawn.z * 0.3 },
      { x: 0, z: (level.spawn.z + level.hole.z) / 2 },
    ];
    
    const types: PowerupType[] = ['bounce_pad', 'speed_boost', 'hole_in_one'];
    
    powerupPositions.forEach((pos, index) => {
      const type = types[index % types.length];
      const id = `powerup_${index}`;
      
      // Create powerup mesh
      const geometry = new THREE.OctahedronGeometry(0.3);
      const colors: Record<string, number> = {
        bounce_pad: 0xFF6B6B,
        speed_boost: 0x4ECDC4,
        hole_in_one: 0xFFD93D,
      };
      const material = new THREE.MeshStandardMaterial({
        color: colors[type],
        emissive: colors[type],
        emissiveIntensity: 0.3,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(pos.x, 0.5, pos.z);
      mesh.userData = { powerupId: id, powerupType: type };
      this.scene.add(mesh);
      this.powerupMeshes.push(mesh);
      
      this.powerupState.items.push({
        id,
        type,
        position: new THREE.Vector3(pos.x, 0.5, pos.z),
        active: true,
        collected: false,
      });
    });
  }

  private clearScene(): void {
    // Remove all children except the ball
    const toRemove: THREE.Object3D[] = [];
    this.scene.traverse((child) => {
      if (child !== this.ball && child !== this.scene) {
        toRemove.push(child);
      }
    });
    toRemove.forEach(child => this.scene.remove(child));
    
    this.surfaceMeshes = [];
    this.obstacleMeshes = [];
    this.powerupMeshes = [];
    this.speedBoostZones = [];
    this.bouncePadMeshes = [];
    this.hole = null;
  }

  private updateCourseGlobal(): void {
    if (!this.course) return;
    
    const self = this;
    (window as any).__course = {
      getState: () => ({
        levelId: self.course!.id,
        name: self.course!.name,
        theme: self.course!.theme,
        par: self.course!.par,
        bounds: { ...self.course!.bounds },
        spawn: { ...self.course!.spawn },
        hole: { ...self.course!.hole },
        surfaces: self.course!.surfaces.map(s => ({
          id: s.id,
          type: s.type,
          friction: s.friction,
          center: s.center ? { ...s.center } : undefined,
          bounds: s.bounds ? { ...s.bounds } : undefined,
        })),
        obstacles: self.course!.obstacles.map(o => ({
          id: o.id,
          type: o.type,
          position: { ...o.position },
          solid: o.solid,
          radius: o.radius,
          bounds: o.bounds ? { ...o.bounds } : undefined,
        })),
        terrainFeatures: self.course!.terrainFeatures.map(t => ({ ...t })),
        obstacleCount: self.course!.obstacles.length,
        sceneObjectCount: self.scene.children.length,
        loaded: true,
      }),
    };
  }

  public resetBallToSpawn(): void {
    if (!this.course) return;
    
    this.ballState.position.set(
      this.course.spawn.x,
      BALL_RADIUS,
      this.course.spawn.z
    );
    this.ballState.velocity.set(0, 0, 0);
    this.ballState.speed = 0;
    this.ballState.moving = false;
    this.ballState.sleeping = true;
    this.ballState.inHole = false;
    this.ballState.outOfBounds = false;
    this.ballState.currentSurface = 'grass';
    this.ballState.friction = FRICTION.GRASS;
    this.ballState.lastCollision = null;
    this.ballState.lastSafePosition.copy(this.ballState.position);
    
    this.shotState.canShoot = true;
    this.shotState.strokeCount = 0;
    
    this.ball.position.copy(this.ballState.position);
  }

  public setBallPosition(pos: Vector3): void {
    this.ballState.position.set(pos.x, BALL_RADIUS, pos.z);
    this.ball.position.copy(this.ballState.position);
    this.ballState.lastSafePosition.copy(this.ballState.position);
  }

  public startDrag(screenX: number, screenY: number): void {
    if (!this.shotState.canShoot || this.ballState.moving) return;
    
    this.shotState.dragging = true;
    this.shotState.startScreen = { x: screenX, y: screenY };
    this.shotState.currentScreen = { x: screenX, y: screenY };
  }

  public updateDrag(screenX: number, screenY: number): void {
    if (!this.shotState.dragging) return;
    
    this.shotState.currentScreen = { x: screenX, y: screenY };
    
    // Calculate direction and power
    if (this.shotState.startScreen) {
      const dx = this.shotState.startScreen.x - screenX;
      const dy = this.shotState.startScreen.y - screenY;
      
      // Direction is from ball to opposite of drag direction
      const length = Math.sqrt(dx * dx + dy * dy);
      if (length > 10) { // Minimum drag distance
        this.shotState.direction = {
          x: dx / length,
          z: dy / length,
        };
        this.shotState.power = Math.min(this.shotState.maxPower, Math.max(this.shotState.minPower, length / 50));
      } else {
        this.shotState.direction = { x: 0, z: 0 };
        this.shotState.power = 0;
      }
    }
  }

  public endDrag(): boolean {
    if (!this.shotState.dragging) return false;
    
    this.shotState.dragging = false;
    
    if (this.shotState.power >= this.shotState.minPower) {
      this.shoot();
      return true;
    }
    
    this.shotState.startScreen = null;
    this.shotState.currentScreen = null;
    this.shotState.power = 0;
    return false;
  }

  private shoot(): void {
    if (!this.shotState.canShoot) return;
    
    // Apply velocity based on direction and power
    const speed = this.shotState.power * 3;
    this.ballState.velocity.set(
      this.shotState.direction.x * speed,
      0,
      this.shotState.direction.z * speed
    );
    
    // Limit max speed
    const currentSpeed = this.ballState.velocity.length();
    if (currentSpeed > MAX_SPEED) {
      this.ballState.velocity.multiplyScalar(MAX_SPEED / currentSpeed);
    }
    
    this.ballState.moving = true;
    this.ballState.sleeping = false;
    this.shotState.canShoot = false;
    this.shotState.strokeCount++;
    this.shotState.startScreen = null;
    this.shotState.currentScreen = null;
    this.shotState.power = 0;
    
    // Store safe position
    this.ballState.lastSafePosition.copy(this.ballState.position);
  }

  public shootHoleInOne(): void {
    if (!this.course || !this.shotState.canShoot) return;
    
    // Calculate direction to hole
    const dx = this.course.hole.x - this.ballState.position.x;
    const dz = this.course.hole.z - this.ballState.position.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    if (distance > 0) {
      this.ballState.velocity.set(
        (dx / distance) * MAX_SPEED * 0.8,
        0,
        (dz / distance) * MAX_SPEED * 0.8
      );
      this.ballState.moving = true;
      this.ballState.sleeping = false;
      this.shotState.canShoot = false;
      this.shotState.strokeCount++;
    }
  }

  public updateCameraFollow(): void {
    // Follow ball
    this.cameraState.target.copy(this.ballState.position);
    
    // Calculate camera position based on distance and pitch
    const pitchRad = (this.cameraState.pitch * Math.PI) / 180;
    const distance = this.cameraState.distance / this.cameraState.zoom;
    
    this.cameraState.position.set(
      this.ballState.position.x,
      this.ballState.position.y + Math.sin(pitchRad) * distance,
      this.ballState.position.z + Math.cos(pitchRad) * distance
    );
    
    this.camera.position.copy(this.cameraState.position);
    this.camera.lookAt(this.cameraState.target);
  }

  public zoomIn(): void {
    this.cameraState.zoom = Math.min(2, this.cameraState.zoom * 1.2);
  }

  public zoomOut(): void {
    this.cameraState.zoom = Math.max(0.5, this.cameraState.zoom / 1.2);
  }

  public start(): void {
    this.clock.start();
    this.animate();
  }

  public stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.clock.stop();
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);
    
    const deltaTime = this.clock.getDelta();
    this.renderFrame++;
    
    // Fixed timestep physics
    this.accumulator += deltaTime;
    while (this.accumulator >= this.fixedStep) {
      this.fixedUpdate(this.fixedStep);
      this.accumulator -= this.fixedStep;
      this.simulationTick++;
    }
    
    // Update camera
    this.updateCameraFollow();
    
    // Animate powerups
    this.animatePowerups();
    
    // Render
    this.renderer.render(this.scene, this.camera);
  };

  private fixedUpdate(dt: number): void {
    if (!this.ballState.moving || this.ballState.inHole) return;
    
    // Apply friction based on current surface
    this.updateCurrentSurface();
    const frictionFactor = 1 - this.ballState.friction;
    this.ballState.velocity.x *= frictionFactor;
    this.ballState.velocity.z *= frictionFactor;
    
    // Update position
    this.ballState.position.add(
      this.ballState.velocity.clone().multiplyScalar(dt * 10)
    );
    
    // Check collisions with obstacles
    this.checkObstacleCollisions();
    
    // Check speed boost zones
    this.checkSpeedBoostZones();
    
    // Check bounce pads
    this.checkBouncePads();
    
    // Check powerup collection
    this.checkPowerupCollection();
    
    // Check bounds
    this.checkBounds();
    
    // Check hole
    this.checkHole();
    
    // Update ball mesh
    this.ball.position.copy(this.ballState.position);
    
    // Calculate speed
    this.ballState.speed = this.ballState.velocity.length();
    
    // Check if ball stopped
    if (this.ballState.speed < MIN_VELOCITY && this.ballState.moving) {
      this.ballState.velocity.set(0, 0, 0);
      this.ballState.speed = 0;
      this.ballState.moving = false;
      this.ballState.sleeping = true;
      this.shotState.canShoot = true;
      
      // Store safe position
      this.ballState.lastSafePosition.copy(this.ballState.position);
    }
  }

  private updateCurrentSurface(): void {
    if (!this.course) return;
    
    // Default to grass
    this.ballState.currentSurface = 'grass';
    this.ballState.friction = FRICTION.GRASS;
    
    // Check surface patches
    for (const mesh of this.surfaceMeshes) {
      const dx = this.ballState.position.x - mesh.position.x;
      const dz = this.ballState.position.z - mesh.position.z;
      const halfWidth = (mesh.geometry as THREE.PlaneGeometry).parameters.width / 2;
      const halfHeight = (mesh.geometry as THREE.PlaneGeometry).parameters.height / 2;
      
      if (Math.abs(dx) < halfWidth && Math.abs(dz) < halfHeight) {
        const surfaceType = mesh.userData.surfaceType as SurfaceType;
        const surfaceFriction = mesh.userData.friction as number;
        this.ballState.currentSurface = surfaceType;
        this.ballState.friction = surfaceFriction;
        break;
      }
    }
  }

  private checkObstacleCollisions(): void {
    for (const mesh of this.obstacleMeshes) {
      const radius = mesh.userData.radius as number;
      const obstaclePos = mesh.position.clone();
      obstaclePos.y = this.ballState.position.y;
      
      const distance = this.ballState.position.distanceTo(obstaclePos);
      const minDistance = radius + BALL_RADIUS;
      
      if (distance < minDistance) {
        // Collision detected - bounce
        const normal = this.ballState.position.clone().sub(obstaclePos).normalize();
        this.ballState.position.copy(obstaclePos).add(normal.clone().multiplyScalar(minDistance));
        
        // Reflect velocity
        const dot = this.ballState.velocity.dot(normal);
        if (dot < 0) {
          this.ballState.velocity.sub(normal.clone().multiplyScalar(2 * dot));
          this.ballState.velocity.multiplyScalar(BOUNCE_FACTOR);
        }
        
        this.ballState.lastCollision = mesh.userData.obstacleId;
      }
    }
  }

  private checkSpeedBoostZones(): void {
    for (const zone of this.speedBoostZones) {
      const dx = this.ballState.position.x - zone.mesh.position.x;
      const dz = this.ballState.position.z - zone.mesh.position.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      if (distance < 1.5 && this.ballState.moving) {
        // Apply speed boost in direction
        const boost = zone.direction.clone().multiplyScalar(2);
        this.ballState.velocity.add(boost);
        
        // Limit speed
        const speed = this.ballState.velocity.length();
        if (speed > MAX_SPEED) {
          this.ballState.velocity.multiplyScalar(MAX_SPEED / speed);
        }
        
        this.powerupState.activeEffect = 'speed_boost';
        if (this.onSpeedBoostTriggered) {
          this.onSpeedBoostTriggered();
        }
      }
    }
  }

  private checkBouncePads(): void {
    for (const mesh of this.bouncePadMeshes) {
      const dx = this.ballState.position.x - mesh.position.x;
      const dz = this.ballState.position.z - mesh.position.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      if (distance < 1 && this.ballState.moving) {
        // Bounce in random direction
        const angle = Math.random() * Math.PI * 2;
        const bounceSpeed = Math.min(this.ballState.speed * 1.5, MAX_SPEED);
        this.ballState.velocity.set(
          Math.cos(angle) * bounceSpeed,
          0,
          Math.sin(angle) * bounceSpeed
        );
        
        this.powerupState.activeEffect = 'bounce_pad';
        if (this.onBouncePadTriggered) {
          this.onBouncePadTriggered();
        }
      }
    }
  }

  private checkPowerupCollection(): void {
    for (let i = 0; i < this.powerupState.items.length; i++) {
      const item = this.powerupState.items[i];
      if (!item.active || item.collected) continue;
      
      const distance = this.ballState.position.distanceTo(item.position);
      if (distance < 0.5) {
        item.collected = true;
        
        // Update inventory
        const invItem = this.powerupState.inventory.find(p => p.type === item.type);
        if (invItem) {
          invItem.count++;
        }
        
        // Hide mesh
        const mesh = this.powerupMeshes.find(m => m.userData.powerupId === item.id);
        if (mesh) {
          mesh.visible = false;
        }
        
        this.powerupState.lastTriggeredId = item.id;
        
        if (this.onPowerupCollected) {
          this.onPowerupCollected(item.type);
        }
      }
    }
  }

  private checkBounds(): void {
    if (!this.course) return;
    
    const { bounds } = this.course;
    
    if (
      this.ballState.position.x < bounds.minX ||
      this.ballState.position.x > bounds.maxX ||
      this.ballState.position.z < bounds.minZ ||
      this.ballState.position.z > bounds.maxZ
    ) {
      this.ballState.outOfBounds = true;
      this.ballState.velocity.set(0, 0, 0);
      this.ballState.moving = false;
      this.ballState.sleeping = true;
      this.shotState.canShoot = true;
      
      if (this.onBallOutOfBounds) {
        this.onBallOutOfBounds();
      }
    }
  }

  private checkHole(): void {
    if (!this.course) return;
    
    const dx = this.ballState.position.x - this.course.hole.x;
    const dz = this.ballState.position.z - this.course.hole.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    // Check if ball is close enough and moving slowly
    if (distance < this.course.hole.radius && this.ballState.speed < 2) {
      this.ballState.inHole = true;
      this.ballState.velocity.set(0, 0, 0);
      this.ballState.moving = false;
      this.ballState.sleeping = true;
      
      // Animate ball dropping into hole
      this.ball.position.y = 0;
      
      if (this.onBallInHole) {
        this.onBallInHole();
      }
    }
  }

  private animatePowerups(): void {
    const time = this.clock.getElapsedTime();
    for (const mesh of this.powerupMeshes) {
      if (mesh.visible) {
        mesh.rotation.y = time * 2;
        mesh.position.y = 0.5 + Math.sin(time * 3) * 0.1;
      }
    }
  }

  public getBallState(): BallState {
    return this.ballState;
  }

  public getShotState(): ShotState {
    return this.shotState;
  }

  public getPowerupState(): PowerupState {
    return this.powerupState;
  }

  public getStrokeCount(): number {
    return this.shotState.strokeCount;
  }

  public resetStrokeCount(): void {
    this.shotState.strokeCount = 0;
  }

  public isInHole(): boolean {
    return this.ballState.inHole;
  }

  public isOutOfBounds(): boolean {
    return this.ballState.outOfBounds;
  }

  public resetOutOfBoundsFlag(): void {
    this.ballState.outOfBounds = false;
  }

  public getCourse(): LevelConfig | null {
    return this.course;
  }

  public dispose(): void {
    this.stop();
    this.renderer.dispose();
    this.scene.clear();
  }
}