import * as THREE from 'three';

// ==================== TYPES ====================
interface Vec3 { x: number; y: number; z: number; }
interface BusState {
  position: Vec3;
  headingDeg: number;
  speedKph: number;
  velocity: number;
  throttle: number;
  brake: number;
  steering: number;
  gear: 'D' | 'R' | 'N';
  parkingBrake: boolean;
  doorOpen: boolean;
  headlights: boolean;
  indicator: 'off' | 'left' | 'right';
  hornActive: boolean;
  fuel: number;
  damage: number;
  odometerKm: number;
  wheelAngle: number;
  collisionCount: number;
  lastCollision: string;
}
interface TrafficVehicle {
  id: string;
  x: number;
  z: number;
  speedKph: number;
  direction: number;
  mesh?: THREE.Group;
}
interface Stop {
  id: string;
  name: string;
  z: number;
  status: 'next' | 'upcoming' | 'completed';
  boardedAtThisStop: boolean;
  mesh?: THREE.Group;
}
interface SolidObstacle {
  id: string;
  type: string;
  x: number;
  z: number;
  halfWidth: number;
  halfLength: number;
  mesh?: THREE.Object3D;
}

// ==================== GAME STATE ====================
class GameState {
  phase: 'menu' | 'playing' | 'paused' | 'complete' = 'menu';
  elapsed: number = 0;
  paused: boolean = false;
  missionStatus: string = 'Ready for departure';
  score: number = 0;
  message: string = 'Board the coach and begin the route.';
  
  // Bus state
  bus: BusState = {
    position: { x: 0, y: 0, z: 20 },
    headingDeg: 0,
    speedKph: 0,
    velocity: 0,
    throttle: 0,
    brake: 0,
    steering: 0,
    gear: 'D',
    parkingBrake: true,
    doorOpen: false,
    headlights: false,
    indicator: 'off',
    hornActive: false,
    fuel: 100,
    damage: 0,
    odometerKm: 0,
    wheelAngle: 0,
    collisionCount: 0,
    lastCollision: 'none'
  };

  // Route state
  route = {
    name: 'Bandung · Kota Lama · Selatan',
    stopCount: 3,
    currentStopIndex: 0,
    stops: [
      { id: 's1', name: 'Kota Lama', z: 120, status: 'next' as const, boardedAtThisStop: false },
      { id: 's2', name: 'Pasar Raya', z: 380, status: 'upcoming' as const, boardedAtThisStop: false },
      { id: 's3', name: 'Terminal Selatan', z: 620, status: 'upcoming' as const, boardedAtThisStop: false }
    ] as Stop[],
    nextStopDistance: 100,
    atStop: false,
    completed: false,
    earnings: 0
  };

  // Passengers
  passengers = {
    onboard: 4,
    capacity: 42,
    boardedTotal: 0,
    waitingAtNext: 7,
    boardingProgress: 0
  };

  // Traffic
  traffic: TrafficVehicle[] = [];
  trafficDensity: number = 0.92;

  // World
  world = {
    environment: 'Tropical intercity corridor',
    weather: 'Sunbreak after rain',
    timeOfDay: '16:20',
    roadCenter: 0,
    roadHalfWidth: 5.2,
    surface: 'asphalt',
    nearStopMarkers: 0,
    solidObstacleCount: 67,
    nearbySolidObstacles: [] as SolidObstacle[]
  };

  // Input
  input = {
    pressed: [] as string[],
    lastAction: 'none',
    lastPointerType: 'mouse',
    mobileControls: false
  };

  // Settings
  settings = {
    quality: 'cinematic' as 'cinematic' | 'high' | 'balanced',
    masterVolume: 0.8,
    pixelRatio: 1.35,
    trafficDensity: 0.92,
    renderDistance: 520,
    qualityProfiles: {
      cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
      high: { pixelRatio: 1.1, density: 0.78, renderDistance: 420 },
      balanced: { pixelRatio: 0.85, density: 0.56, renderDistance: 320 }
    }
  };

  // Camera
  camera = {
    mode: 'chase' as 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside',
    position: { x: 0, y: 0, z: 0 },
    target: { x: 0, y: 0, z: 0 },
    fov: 53
  };

  // Performance
  performance = {
    elapsed: 0,
    tick: 0,
    frame: 0,
    fixedStep: 1/60,
    accumulator: 0,
    maxSubSteps: 4,
    uiUpdates: 0,
    mounted: true
  };

  // Renderer
  renderer = {
    backend: 'WebGL',
    contextLost: false,
    frame: 0,
    drawCalls: 0,
    canvas: { width: 0, height: 0 },
    quality: 'cinematic',
    pixelRatio: 1.35,
    renderDistance: 520,
    webglVersion: 1,
    dynamicLighting: true,
    fog: true,
    antialias: true,
    shadowsEnabled: false
  };

  // Boarding state
  boardingTimer: number = 0;
  boardingDuration: number = 1.5;
  lastStopId: string = '';
}

// ==================== DYNAMICS ====================
const DYNAMICS = {
  maxForwardSpeedMps: 24.5,
  maxReverseSpeedMps: 5.5,
  throttleAcceleration: 10.5,
  serviceBrakeDeceleration: 15,
  reverseAcceleration: 6.2,
  rollingResistance: 0.55,
  parkingBrakeDamping: 9,
  steeringRateDegPerSec: 28,
  maxWheelAngleDeg: 32,
  doorInterlockSpeedMps: 1.2,
  boardingSpeedMps: 0.8,
  busWidth: 2.55,
  busLength: 12.0,
  stopLongitudinalHalfLength: 12,
  stopLateralHalfWidth: 5
};

// ==================== GAME ENGINE ====================
export class GameEngine {
  private state: GameState;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private busMesh: THREE.Group;
  private trafficMeshes: Map<string, THREE.Group> = new Map();
  private buildingMeshes: THREE.Group;
  private roadMesh: THREE.Mesh;
  private stopMeshes: Map<string, THREE.Group> = new Map();
  private animationId: number = 0;
  private lastTime: number = 0;
  private container: HTMLElement;
  private directionalLight: THREE.DirectionalLight;
  private hemisphereLight: THREE.HemisphereLight;
  
  constructor(container: HTMLElement) {
    this.container = container;
    this.state = new GameState();
    
    // Setup Three.js
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = false;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    container.appendChild(this.renderer.domElement);
    
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.Fog(0x87CEEB, 100, this.state.settings.renderDistance);
    
    // Camera
    this.camera = new THREE.PerspectiveCamera(53, container.clientWidth / container.clientHeight, 0.1, 900);
    
    // Lights
    this.hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x3d5c3d, 0.6);
    this.scene.add(this.hemisphereLight);
    
    this.directionalLight = new THREE.DirectionalLight(0xFFE4B5, 1.2);
    this.directionalLight.position.set(50, 100, 50);
    this.directionalLight.castShadow = false;
    this.scene.add(this.directionalLight);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);
    
    // Create world
    this.roadMesh = this.createRoad();
    this.scene.add(this.roadMesh);
    
    this.buildingMeshes = new THREE.Group();
    this.scene.add(this.buildingMeshes);
    this.createBuildings();
    
    this.busMesh = this.createBus();
    this.scene.add(this.busMesh);
    
    this.createStopShelters();
    this.createVegetation();
    this.createGround();
    
    // Initialize traffic
    this.initializeTraffic();
    
    // Window resize handler
    window.addEventListener('resize', this.onResize.bind(this));
    
    // Initialize observation hooks
    this.initializeHooks();
    
    // Start render loop
    this.animate();
  }
  
  private createGround(): void {
    // Far terrain
    const groundGeo = new THREE.PlaneGeometry(2000, 2000);
    const groundMat = new THREE.MeshLambertMaterial({ 
      color: 0x4a7c3f,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.position.z = 300;
    this.scene.add(ground);
    
    // Rice paddies on sides
    for (let i = 0; i < 30; i++) {
      const paddyGeo = new THREE.PlaneGeometry(15, 20);
      const paddyMat = new THREE.MeshLambertMaterial({ color: 0x5a8c4a + (i % 3) * 0x020202 });
      const paddy = new THREE.Mesh(paddyGeo, paddyMat);
      paddy.rotation.x = -Math.PI / 2;
      paddy.position.set(
        (i % 2 === 0 ? -1 : 1) * (20 + Math.random() * 50),
        0.01,
        i * 40 + Math.random() * 20
      );
      this.scene.add(paddy);
    }
  }
  
  private createRoad(): THREE.Mesh {
    const roadGroup = new THREE.Group();
    
    // Main road surface
    const roadGeo = new THREE.PlaneGeometry(12, 1000);
    const roadMat = new THREE.MeshStandardMaterial({ 
      color: 0x333333,
      roughness: 0.9,
      metalness: 0.0
    });
    const road = new THREE.Mesh(roadGeo, roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0.01, 500);
    road.receiveShadow = true;
    roadGroup.add(road);
    
    // Road markings - center line
    for (let i = 0; i < 100; i++) {
      const lineGeo = new THREE.PlaneGeometry(0.15, 4);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.02, i * 10 + 5);
      roadGroup.add(line);
    }
    
    // Edge lines
    for (let i = 0; i < 100; i++) {
      [-5.5, 5.5].forEach(x => {
        const edgeGeo = new THREE.PlaneGeometry(0.12, 100);
        const edgeMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
        const edge = new THREE.Mesh(edgeGeo, edgeMat);
        edge.rotation.x = -Math.PI / 2;
        edge.position.set(x, 0.02, 500);
        roadGroup.add(edge);
      });
    }
    
    // Curbs/barriers
    [-6.5, 6.5].forEach(x => {
      const curbGeo = new THREE.BoxGeometry(0.5, 0.3, 1000);
      const curbMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
      const curb = new THREE.Mesh(curbGeo, curbMat);
      curb.position.set(x, 0.15, 500);
      roadGroup.add(curb);
    });
    
    return roadGroup as unknown as THREE.Mesh;
  }
  
  private createBuildings(): void {
    const buildingConfigs = [
      // Left side
      { x: -25, z: 80, w: 8, h: 12, d: 10, type: 'shop' },
      { x: -30, z: 160, w: 12, h: 18, d: 15, type: 'mall' },
      { x: -22, z: 250, w: 6, h: 8, d: 8, type: 'house' },
      { x: -35, z: 340, w: 15, h: 25, d: 12, type: 'office' },
      { x: -25, z: 450, w: 10, h: 14, d: 10, type: 'shop' },
      { x: -30, z: 550, w: 8, h: 10, d: 12, type: 'house' },
      // Right side
      { x: 25, z: 100, w: 10, h: 15, d: 12, type: 'shop' },
      { x: 30, z: 200, w: 8, h: 12, d: 8, type: 'house' },
      { x: 28, z: 300, w: 14, h: 20, d: 14, type: 'office' },
      { x: 25, z: 400, w: 6, h: 9, d: 8, type: 'house' },
      { x: 32, z: 500, w: 12, h: 16, d: 10, type: 'shop' },
      { x: 28, z: 600, w: 10, h: 12, d: 12, type: 'mall' },
    ];
    
    buildingConfigs.forEach((cfg, idx) => {
      const building = this.createBuilding(cfg.w, cfg.h, cfg.d, cfg.type);
      building.position.set(cfg.x, 0, cfg.z);
      this.buildingMeshes.add(building);
      
      // Add to obstacles
      this.state.world.nearbySolidObstacles.push({
        id: `building-${idx}`,
        type: 'building',
        x: cfg.x,
        z: cfg.z,
        halfWidth: cfg.w / 2 + 1,
        halfLength: cfg.d / 2 + 1
      });
    });
    
    this.state.world.solidObstacleCount = this.state.world.nearbySolidObstacles.length;
  }
  
  private createBuilding(width: number, height: number, depth: number, type: string): THREE.Group {
    const group = new THREE.Group();
    
    // Main structure
    const colors: Record<string, number> = {
      shop: 0xDEB887,
      house: 0xF5DEB3,
      office: 0xD3D3D3,
      mall: 0xB8B8B8
    };
    
    const mainGeo = new THREE.BoxGeometry(width, height, depth);
    const mainMat = new THREE.MeshStandardMaterial({ 
      color: colors[type] || 0xDEB887,
      roughness: 0.8
    });
    const main = new THREE.Mesh(mainGeo, mainMat);
    main.position.y = height / 2;
    group.add(main);
    
    // Roof
    if (type === 'house') {
      const roofGeo = new THREE.ConeGeometry(Math.max(width, depth) / 1.5, 4, 4);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = height + 2;
      roof.rotation.y = Math.PI / 4;
      group.add(roof);
    } else {
      const roofGeo = new THREE.BoxGeometry(width + 0.5, 0.5, depth + 0.5);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = height + 0.25;
      group.add(roof);
    }
    
    // Windows
    const windowColor = 0x87CEEB;
    const windowsPerFloor = Math.floor(width / 3);
    const floors = Math.floor(height / 4);
    
    for (let floor = 0; floor < floors; floor++) {
      for (let w = 0; w < windowsPerFloor; w++) {
        const winGeo = new THREE.PlaneGeometry(1.5, 2);
        const winMat = new THREE.MeshStandardMaterial({ 
          color: windowColor,
          emissive: 0x333333,
          emissiveIntensity: 0.3
        });
        
        // Front
        const winFront = new THREE.Mesh(winGeo, winMat);
        winFront.position.set(
          -width / 2 + 2 + w * 3,
          2 + floor * 4,
          depth / 2 + 0.01
        );
        group.add(winFront);
        
        // Back
        const winBack = new THREE.Mesh(winGeo, winMat);
        winBack.position.set(
          -width / 2 + 2 + w * 3,
          2 + floor * 4,
          -depth / 2 - 0.01
        );
        winBack.rotation.y = Math.PI;
        group.add(winBack);
      }
    }
    
    // Shop sign for shops
    if (type === 'shop') {
      const signGeo = new THREE.BoxGeometry(width * 0.8, 1.5, 0.2);
      const signMat = new THREE.MeshStandardMaterial({ 
        color: 0xFF6347,
        emissive: 0xFF4500,
        emissiveIntensity: 0.5
      });
      const sign = new THREE.Mesh(signGeo, signMat);
      sign.position.set(0, height - 1, depth / 2 + 0.15);
      group.add(sign);
    }
    
    return group;
  }
  
  private createStopShelters(): void {
    this.state.route.stops.forEach((stop, idx) => {
      const shelter = this.createBusStopShelter(stop.name);
      shelter.position.set(10, 0, stop.z);
      this.scene.add(shelter);
      this.stopMeshes.set(stop.id, shelter);
      
      // Stop marker sign
      const markerGeo = new THREE.CylinderGeometry(0.1, 0.1, 3, 8);
      const markerMat = new THREE.MeshStandardMaterial({ color: 0x1E90FF });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.set(8, 1.5, stop.z);
      this.scene.add(marker);
      
      // Stop name board
      const boardGeo = new THREE.BoxGeometry(3, 1, 0.1);
      const boardMat = new THREE.MeshStandardMaterial({ color: 0x1E90FF });
      const board = new THREE.Mesh(boardGeo, boardMat);
      board.position.set(8, 2.8, stop.z);
      this.scene.add(board);
      
      // Add stop area to obstacles (only the shelter part)
      this.state.world.nearbySolidObstacles.push({
        id: `stop-shelter-${idx}`,
        type: 'stop-shelter',
        x: 10,
        z: stop.z,
        halfWidth: 2,
        halfLength: 2
      });
    });
  }
  
  private createBusStopShelter(_name: string): THREE.Group {
    const group = new THREE.Group();
    
    // Platform
    const platformGeo = new THREE.BoxGeometry(6, 0.2, 8);
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = 0.1;
    group.add(platform);
    
    // Roof
    const roofGeo = new THREE.BoxGeometry(7, 0.3, 9);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x1E90FF });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 3;
    group.add(roof);
    
    // Pillars
    [[-2.5, -3.5], [-2.5, 3.5], [2.5, -3.5], [2.5, 3.5]].forEach(([x, z]) => {
      const pillarGeo = new THREE.CylinderGeometry(0.1, 0.1, 2.8, 8);
      const pillarMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(x, 1.6, z);
      group.add(pillar);
    });
    
    // Bench
    const benchGeo = new THREE.BoxGeometry(3, 0.15, 0.8);
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.position.set(0, 0.6, 2);
    group.add(bench);
    
    // Bench legs
    [[-1.2, 2], [1.2, 2]].forEach(([x, z]) => {
      const legGeo = new THREE.BoxGeometry(0.1, 0.5, 0.6);
      const leg = new THREE.Mesh(legGeo, benchMat);
      leg.position.set(x, 0.35, z);
      group.add(leg);
    });
    
    return group;
  }
  
  private createVegetation(): void {
    // Trees
    for (let i = 0; i < 80; i++) {
      const tree = this.createTree();
      const side = i % 2 === 0 ? -1 : 1;
      tree.position.set(
        side * (15 + Math.random() * 40),
        0,
        Math.random() * 700
      );
      this.scene.add(tree);
    }
    
    // Palm trees (Indonesian style)
    for (let i = 0; i < 30; i++) {
      const palm = this.createPalmTree();
      const side = i % 2 === 0 ? -1 : 1;
      palm.position.set(
        side * (18 + Math.random() * 30),
        0,
        Math.random() * 700
      );
      this.scene.add(palm);
    }
    
    // Bushes
    for (let i = 0; i < 60; i++) {
      const bush = this.createBush();
      const side = i % 2 === 0 ? -1 : 1;
      bush.position.set(
        side * (12 + Math.random() * 25),
        0,
        Math.random() * 700
      );
      this.scene.add(bush);
    }
  }
  
  private createTree(): THREE.Group {
    const group = new THREE.Group();
    
    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.35, 3, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3728 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 1.5;
    group.add(trunk);
    
    // Canopy layers
    const canopyColors = [0x228B22, 0x2E8B2E, 0x32CD32];
    canopyColors.forEach((color, idx) => {
      const canopyGeo = new THREE.ConeGeometry(2.5 - idx * 0.5, 2.5, 8);
      const canopyMat = new THREE.MeshStandardMaterial({ color });
      const canopy = new THREE.Mesh(canopyGeo, canopyMat);
      canopy.position.y = 4 + idx * 1.5;
      group.add(canopy);
    });
    
    return group;
  }
  
  private createPalmTree(): THREE.Group {
    const group = new THREE.Group();
    
    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.25, 0.4, 8, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 4;
    group.add(trunk);
    
    // Fronds
    for (let i = 0; i < 8; i++) {
      const frondGeo = new THREE.BoxGeometry(0.3, 0.1, 4);
      const frondMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
      const frond = new THREE.Mesh(frondGeo, frondMat);
      frond.position.set(0, 8, 2);
      frond.rotation.x = -0.3;
      frond.rotation.y = (i / 8) * Math.PI * 2;
      frond.position.x = Math.sin(frond.rotation.y) * 1;
      frond.position.z = Math.cos(frond.rotation.y) * 1;
      group.add(frond);
    }
    
    return group;
  }
  
  private createBush(): THREE.Group {
    const group = new THREE.Group();
    
    const bushGeo = new THREE.SphereGeometry(1, 8, 6);
    const bushMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    
    for (let i = 0; i < 3; i++) {
      const sphere = new THREE.Mesh(bushGeo, bushMat);
      sphere.scale.setScalar(0.5 + Math.random() * 0.5);
      sphere.position.set(
        (Math.random() - 0.5) * 1.5,
        0.4 + Math.random() * 0.3,
        (Math.random() - 0.5) * 1.5
      );
      group.add(sphere);
    }
    
    return group;
  }
  
  private createBus(): THREE.Group {
    const group = new THREE.Group();
    
    // Main body
    const bodyGeo = new THREE.BoxGeometry(2.55, 2.8, 12);
    const bodyMat = new THREE.MeshStandardMaterial({ 
      color: 0x1E90FF,
      metalness: 0.3,
      roughness: 0.4
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 1.6;
    group.add(body);
    
    // Lower body stripe
    const stripeGeo = new THREE.BoxGeometry(2.56, 0.3, 12.01);
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.y = 0.6;
    group.add(stripe);
    
    // Roof
    const roofGeo = new THREE.BoxGeometry(2.3, 0.2, 11);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xE0E0E0 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 3.1;
    group.add(roof);
    
    // Windows - left side
    for (let i = 0; i < 6; i++) {
      const winGeo = new THREE.PlaneGeometry(1.2, 1.5);
      const winMat = new THREE.MeshStandardMaterial({ 
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide
      });
      const win = new THREE.Mesh(winGeo, winMat);
      win.position.set(-1.28, 2.2, -4.5 + i * 2);
      win.rotation.y = -Math.PI / 2;
      group.add(win);
    }
    
    // Windows - right side
    for (let i = 0; i < 6; i++) {
      const winGeo = new THREE.PlaneGeometry(1.2, 1.5);
      const winMat = new THREE.MeshStandardMaterial({ 
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide
      });
      const win = new THREE.Mesh(winGeo, winMat);
      win.position.set(1.28, 2.2, -4.5 + i * 2);
      win.rotation.y = Math.PI / 2;
      group.add(win);
    }
    
    // Front windshield
    const frontWinGeo = new THREE.PlaneGeometry(2.2, 1.8);
    const frontWinMat = new THREE.MeshStandardMaterial({ 
      color: 0x87CEEB,
      transparent: true,
      opacity: 0.6
    });
    const frontWin = new THREE.Mesh(frontWinGeo, frontWinMat);
    frontWin.position.set(0, 2.3, 6.01);
    group.add(frontWin);
    
    // Rear window
    const rearWin = new THREE.Mesh(frontWinGeo, frontWinMat);
    rearWin.position.set(0, 2.3, -6.01);
    rearWin.rotation.y = Math.PI;
    group.add(rearWin);
    
    // Headlights
    [-0.8, 0.8].forEach(x => {
      const lightGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16);
      const lightMat = new THREE.MeshStandardMaterial({ 
        color: 0xFFFFAA,
        emissive: 0xFFFF00,
        emissiveIntensity: 0.5
      });
      const light = new THREE.Mesh(lightGeo, lightMat);
      light.rotation.x = Math.PI / 2;
      light.position.set(x, 1, 6.05);
      group.add(light);
    });
    
    // Taillights
    [-0.9, 0.9].forEach(x => {
      const tailGeo = new THREE.BoxGeometry(0.3, 0.15, 0.05);
      const tailMat = new THREE.MeshStandardMaterial({ 
        color: 0xFF0000,
        emissive: 0xFF0000,
        emissiveIntensity: 0.3
      });
      const tail = new THREE.Mesh(tailGeo, tailMat);
      tail.position.set(x, 1, -6.02);
      group.add(tail);
    });
    
    // Wheels
    [[-1.2, -3.5], [-1.2, 3.5], [1.2, -3.5], [1.2, 3.5]].forEach(([x, z]) => {
      const wheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.4, 16);
      const wheelMat = new THREE.MeshStandardMaterial({ 
        color: 0x1a1a1a,
        roughness: 0.8
      });
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.5, z);
      group.add(wheel);
      
      // Wheel rim
      const rimGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.42, 8);
      const rimMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
      const rim = new THREE.Mesh(rimGeo, rimMat);
      rim.rotation.z = Math.PI / 2;
      rim.position.set(x * 1.1, 0.5, z);
      group.add(rim);
    });
    
    // Side mirrors
    [-1.4, 1.4].forEach(x => {
      const mirrorGeo = new THREE.BoxGeometry(0.1, 0.2, 0.3);
      const mirrorMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
      const mirror = new THREE.Mesh(mirrorGeo, mirrorMat);
      mirror.position.set(x, 2.5, 5);
      group.add(mirror);
    });
    
    // Door (right side)
    const doorGeo = new THREE.BoxGeometry(0.05, 2.2, 1.2);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x1565C0 });
    this.doorMesh = new THREE.Mesh(doorGeo, doorMat);
    this.doorMesh.position.set(1.3, 1.5, 3);
    group.add(this.doorMesh);
    
    // "BUS" text area on front
    const textGeo = new THREE.PlaneGeometry(2, 0.5);
    const textMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const text = new THREE.Mesh(textGeo, textMat);
    text.position.set(0, 3.05, 6.01);
    group.add(text);
    
    // Destination board
    const destGeo = new THREE.BoxGeometry(2.2, 0.4, 0.05);
    const destMat = new THREE.MeshStandardMaterial({ 
      color: 0x000000,
      emissive: 0x111111,
      emissiveIntensity: 0.5
    });
    const dest = new THREE.Mesh(destGeo, destMat);
    dest.position.set(0, 3.0, 6.03);
    group.add(dest);
    
    // Indicator lights
    this.leftIndicator = this.createIndicatorLight();
    this.leftIndicator.position.set(-1.28, 1.8, 5.5);
    group.add(this.leftIndicator);
    
    this.rightIndicator = this.createIndicatorLight();
    this.rightIndicator.position.set(1.28, 1.8, 5.5);
    group.add(this.rightIndicator);
    
    return group;
  }
  
  private doorMesh!: THREE.Mesh;
  private leftIndicator!: THREE.Mesh;
  private rightIndicator!: THREE.Mesh;
  
  private createIndicatorLight(): THREE.Mesh {
    const geo = new THREE.BoxGeometry(0.15, 0.08, 0.05);
    const mat = new THREE.MeshStandardMaterial({ 
      color: 0xFF8C00,
      emissive: 0xFF8C00,
      emissiveIntensity: 0
    });
    return new THREE.Mesh(geo, mat);
  }
  
  private initializeTraffic(): void {
    const trafficCount = Math.floor(10 * this.state.settings.trafficDensity);
    
    for (let i = 0; i < trafficCount; i++) {
      const lane = i % 2 === 0 ? -2.5 : 2.5;
      const direction = i % 2 === 0 ? -1 : 1;
      const z = 100 + Math.random() * 500;
      
      const vehicle: TrafficVehicle = {
        id: `traffic-${i}`,
        x: lane,
        z: z,
        speedKph: 25 + Math.random() * 20,
        direction: direction
      };
      
      this.state.traffic.push(vehicle);
      
      // Create mesh
      const mesh = this.createTrafficVehicle(direction === -1 ? 'sedan' : 'minivan');
      mesh.position.set(lane, 0, z);
      mesh.rotation.y = direction === -1 ? 0 : Math.PI;
      this.scene.add(mesh);
      vehicle.mesh = mesh;
      this.trafficMeshes.set(vehicle.id, mesh);
    }
  }
  
  private createTrafficVehicle(type: string): THREE.Group {
    const group = new THREE.Group();
    
    if (type === 'sedan') {
      // Sedan
      const bodyGeo = new THREE.BoxGeometry(1.8, 1.2, 4);
      const colors = [0xFF0000, 0x0000FF, 0x00FF00, 0xFFFF00, 0x888888, 0xFFFFFF];
      const bodyMat = new THREE.MeshStandardMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)]
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 0.8;
      group.add(body);
      
      // Cabin
      const cabinGeo = new THREE.BoxGeometry(1.6, 0.8, 2);
      const cabinMat = new THREE.MeshStandardMaterial({ 
        color: 0x333333,
        transparent: true,
        opacity: 0.7
      });
      const cabin = new THREE.Mesh(cabinGeo, cabinMat);
      cabin.position.set(0, 1.6, -0.3);
      group.add(cabin);
      
      // Wheels
      [[-0.8, -1.3], [-0.8, 1.3], [0.8, -1.3], [0.8, 1.3]].forEach(([x, z]) => {
        const wheelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 8);
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(x, 0.35, z);
        group.add(wheel);
      });
    } else {
      // Minivan/SUV
      const bodyGeo = new THREE.BoxGeometry(2, 1.8, 4.5);
      const colors = [0x2F4F4F, 0x8B0000, 0x191970, 0x556B2F];
      const bodyMat = new THREE.MeshStandardMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)]
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 1.1;
      group.add(body);
      
      // Windows
      const winGeo = new THREE.BoxGeometry(1.9, 0.8, 4.4);
      const winMat = new THREE.MeshStandardMaterial({ 
        color: 0x333333,
        transparent: true,
        opacity: 0.6
      });
      const win = new THREE.Mesh(winGeo, winMat);
      win.position.y = 1.7;
      group.add(win);
      
      // Wheels
      [[-0.9, -1.5], [-0.9, 1.5], [0.9, -1.5], [0.9, 1.5]].forEach(([x, z]) => {
        const wheelGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 8);
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(x, 0.4, z);
        group.add(wheel);
      });
    }
    
    return group;
  }
  
  private initializeHooks(): void {
    const self = this;
    
    // Bus hook
    (window as any).__bus = {
      getState: () => ({
        phase: self.state.phase,
        speedKph: Math.abs(self.state.bus.speedKph),
        position: { x: self.state.bus.position.x, z: self.state.bus.position.z },
        headingDeg: self.state.bus.headingDeg,
        doorOpen: self.state.bus.doorOpen,
        passengerCount: self.state.passengers.onboard,
        nextStopIndex: self.state.route.currentStopIndex,
        routeProgress: self.getRouteProgress(),
        fuel: self.state.bus.fuel,
        score: self.state.score
      })
    };
    
    // Game hook
    (window as any).__game = {
      getState: () => ({
        phase: self.state.phase,
        elapsed: self.state.elapsed,
        paused: self.state.paused,
        missionStatus: self.state.missionStatus,
        score: self.state.score,
        message: self.state.message
      })
    };
    
    // Vehicle hook
    (window as any).__vehicle = {
      getState: () => ({
        id: 'NLX-880',
        type: '12m Luxury Coach',
        position: { x: self.state.bus.position.x, z: self.state.bus.position.z },
        headingDeg: self.state.bus.headingDeg,
        speedKph: Math.abs(self.state.bus.speedKph),
        velocity: self.state.bus.velocity,
        throttle: self.state.bus.throttle,
        brake: self.state.bus.brake,
        steering: self.state.bus.steering,
        gear: self.state.bus.gear,
        parkingBrake: self.state.bus.parkingBrake,
        doorOpen: self.state.bus.doorOpen,
        headlights: self.state.bus.headlights,
        indicator: self.state.bus.indicator,
        hornActive: self.state.bus.hornActive,
        fuel: self.state.bus.fuel,
        damage: self.state.bus.damage,
        odometerKm: self.state.bus.odometerKm,
        wheelAngle: self.state.bus.wheelAngle,
        collisionCount: self.state.bus.collisionCount,
        lastCollision: self.state.bus.lastCollision,
        dynamics: {
          maxForwardSpeedMps: DYNAMICS.maxForwardSpeedMps,
          maxReverseSpeedMps: DYNAMICS.maxReverseSpeedMps,
          throttleAcceleration: DYNAMICS.throttleAcceleration,
          serviceBrakeDeceleration: DYNAMICS.serviceBrakeDeceleration,
          reverseAcceleration: DYNAMICS.reverseAcceleration,
          rollingResistance: DYNAMICS.rollingResistance,
          parkingBrakeDamping: DYNAMICS.parkingBrakeDamping,
          steeringRateDegPerSec: DYNAMICS.steeringRateDegPerSec,
          maxWheelAngleDeg: DYNAMICS.maxWheelAngleDeg,
          doorInterlockSpeedMps: DYNAMICS.doorInterlockSpeedMps,
          boardingSpeedMps: DYNAMICS.boardingSpeedMps
        }
      })
    };
    
    // Route hook
    (window as any).__route = {
      getState: () => ({
        name: self.state.route.name,
        stopCount: self.state.route.stopCount,
        currentStopIndex: self.state.route.currentStopIndex,
        stops: self.state.route.stops.map(s => ({
          id: s.id,
          name: s.name,
          z: s.z,
          status: s.status
        })),
        nextStopDistance: self.state.route.nextStopDistance,
        atStop: self.state.route.atStop,
        completed: self.state.route.completed,
        earnings: self.state.route.earnings,
        service: {
          stopLongitudinalHalfLength: DYNAMICS.stopLongitudinalHalfLength,
          stopLateralHalfWidth: DYNAMICS.stopLateralHalfWidth,
          boardingDuration: self.state.boardingDuration
        }
      })
    };
    
    // Passengers hook
    (window as any).__passengers = {
      getState: () => ({
        onboard: self.state.passengers.onboard,
        capacity: self.state.passengers.capacity,
        boardedTotal: self.state.passengers.boardedTotal,
        waitingAtNext: self.state.passengers.waitingAtNext,
        boardingProgress: self.state.passengers.boardingProgress
      })
    };
    
    // Traffic hook
    (window as any).__traffic = {
      getState: () => ({
        count: self.state.traffic.length,
        density: self.state.settings.trafficDensity,
        vehicles: self.state.traffic.map(v => ({
          id: v.id,
          x: v.x,
          z: v.z,
          speedKph: v.speedKph,
          direction: v.direction
        }))
      })
    };
    
    // World hook
    (window as any).__world = {
      getState: () => ({
        environment: self.state.world.environment,
        weather: self.state.world.weather,
        timeOfDay: self.state.world.timeOfDay,
        roadCenter: self.state.world.roadCenter,
        roadHalfWidth: self.state.world.roadHalfWidth,
        surface: self.state.world.surface,
        nearStopMarkers: self.state.world.nearStopMarkers,
        solidObstacleCount: self.state.world.solidObstacleCount,
        collision: {
          roadEdgeEnabled: true,
          trafficEnabled: true,
          solidObjectsEnabled: true,
          busWidth: DYNAMICS.busWidth,
          busLength: DYNAMICS.busLength
        },
        nearbySolidObstacles: self.state.world.nearbySolidObstacles.slice(0, 10).map(o => ({
          id: o.id,
          type: o.type,
          x: o.x,
          z: o.z,
          halfWidth: o.halfWidth,
          halfLength: o.halfLength
        }))
      })
    };
    
    // Camera hook
    (window as any).__camera = {
      getState: () => ({
        mode: self.state.camera.mode,
        position: { ...self.state.camera.position },
        target: { ...self.state.camera.target },
        fov: self.state.camera.fov,
        near: 0.1,
        far: 900,
        modes: ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside']
      })
    };
    
    // Input hook
    (window as any).__input = {
      getState: () => ({
        pressed: [...self.state.input.pressed],
        lastAction: self.state.input.lastAction,
        lastPointerType: self.state.input.lastPointerType,
        mobileControls: self.state.input.mobileControls
      })
    };
    
    // Renderer hook
    (window as any).__renderer = {
      getState: () => ({
        backend: 'WebGL',
        contextLost: false,
        frame: self.state.renderer.frame,
        drawCalls: self.state.renderer.drawCalls,
        canvas: { 
          width: self.renderer.domElement.width, 
          height: self.renderer.domElement.height 
        },
        quality: self.state.settings.quality,
        pixelRatio: self.state.settings.pixelRatio,
        renderDistance: self.state.settings.renderDistance,
        webglVersion: 1,
        dynamicLighting: true,
        fog: true,
        antialias: true,
        shadowsEnabled: false
      })
    };
    
    // Performance hook
    (window as any).__performance = {
      getState: () => ({
        elapsed: self.state.performance.elapsed,
        tick: self.state.performance.tick,
        frame: self.state.performance.frame,
        fixedStep: self.state.performance.fixedStep,
        accumulator: self.state.performance.accumulator,
        maxSubSteps: self.state.performance.maxSubSteps,
        uiUpdates: self.state.performance.uiUpdates,
        mounted: self.state.performance.mounted
      })
    };
    
    // Settings hook
    (window as any).__settings = {
      getState: () => ({
        quality: self.state.settings.quality,
        masterVolume: self.state.settings.masterVolume,
        pixelRatio: self.state.settings.pixelRatio,
        trafficDensity: self.state.settings.trafficDensity,
        renderDistance: self.state.settings.renderDistance,
        qualityProfiles: self.state.settings.qualityProfiles
      })
    };
  }
  
  private getRouteProgress(): number {
    const totalDistance = this.state.route.stops[this.state.route.stops.length - 1].z;
    return Math.min(1, this.state.bus.position.z / totalDistance);
  }
  
  private onResize(): void {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  start(): void {
    this.state.phase = 'playing';
    this.state.paused = false;
    this.state.message = 'Drive to the next passenger stop.';
    this.state.missionStatus = 'Route active';
    this.lastTime = performance.now();
  }
  
  pause(): void {
    this.state.paused = true;
    this.state.phase = 'paused';
  }
  
  resume(): void {
    this.state.paused = false;
    this.state.phase = 'playing';
  }
  
  reset(): void {
    // Reset bus
    this.state.bus.position = { x: 0, y: 0, z: 20 };
    this.state.bus.headingDeg = 0;
    this.state.bus.speedKph = 0;
    this.state.bus.velocity = 0;
    this.state.bus.throttle = 0;
    this.state.bus.brake = 0;
    this.state.bus.steering = 0;
    this.state.bus.gear = 'D';
    this.state.bus.parkingBrake = true;
    this.state.bus.doorOpen = false;
    this.state.bus.headlights = false;
    this.state.bus.indicator = 'off';
    this.state.bus.hornActive = false;
    this.state.bus.fuel = 100;
    this.state.bus.damage = 0;
    this.state.bus.odometerKm = 0;
    this.state.bus.wheelAngle = 0;
    this.state.bus.collisionCount = 0;
    this.state.bus.lastCollision = 'none';
    
    // Reset route
    this.state.route.currentStopIndex = 0;
    this.state.route.stops.forEach((s, i) => {
      s.status = i === 0 ? 'next' : 'upcoming';
      s.boardedAtThisStop = false;
    });
    this.state.route.nextStopDistance = 100;
    this.state.route.atStop = false;
    this.state.route.completed = false;
    this.state.route.earnings = 0;
    
    // Reset passengers
    this.state.passengers.onboard = 4;
    this.state.passengers.boardedTotal = 0;
    this.state.passengers.waitingAtNext = 7;
    this.state.passengers.boardingProgress = 0;
    
    // Reset game state
    this.state.elapsed = 0;
    this.state.score = 0;
    this.state.boardingTimer = 0;
    this.state.lastStopId = '';
    this.state.missionStatus = 'Ready for departure';
    this.state.message = 'Board the coach and begin the route.';
    
    // Reset traffic
    this.state.traffic.forEach((v) => {
      v.z = 100 + Math.random() * 500;
      if (v.mesh) {
        v.mesh.position.z = v.z;
      }
    });
    
    // Reset phase
    this.state.phase = 'menu';
    this.state.paused = false;
  }
  
  setQuality(quality: 'cinematic' | 'high' | 'balanced'): void {
    this.state.settings.quality = quality;
    const profile = this.state.settings.qualityProfiles[quality];
    this.state.settings.pixelRatio = profile.pixelRatio;
    this.state.settings.renderDistance = profile.renderDistance;
    this.state.settings.trafficDensity = profile.density;
    
    this.renderer.setPixelRatio(profile.pixelRatio);
    (this.scene.fog as THREE.Fog).far = profile.renderDistance;
  }
  
  cycleCamera(): void {
    const modes: Array<'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside'> = 
      ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside'];
    const currentIndex = modes.indexOf(this.state.camera.mode);
    this.state.camera.mode = modes[(currentIndex + 1) % modes.length];
  }
  
  handleInput(action: string, pressed: boolean): void {
    if (pressed) {
      if (!this.state.input.pressed.includes(action)) {
        this.state.input.pressed.push(action);
      }
    } else {
      this.state.input.pressed = this.state.input.pressed.filter(k => k !== action);
    }
    this.state.input.lastAction = action;
  }
  
  setMobileControls(active: boolean): void {
    this.state.input.mobileControls = active;
    if (active) {
      this.state.input.lastPointerType = 'touch';
    }
  }
  
  private animate(): void {
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    
    const now = performance.now();
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;
    
    if (!this.state.paused && this.state.phase === 'playing') {
      this.update(delta);
    }
    
    this.render();
    this.state.performance.frame++;
    this.state.renderer.frame++;
  }
  
  private update(delta: number): void {
    this.state.elapsed += delta;
    this.state.performance.elapsed += delta;
    
    // Fixed timestep for physics
    this.state.performance.accumulator += delta;
    
    while (this.state.performance.accumulator >= this.state.performance.fixedStep) {
      this.fixedUpdate(this.state.performance.fixedStep);
      this.state.performance.accumulator -= this.state.performance.fixedStep;
      this.state.performance.tick++;
    }
    
    // Update bus mesh
    this.busMesh.position.set(
      this.state.bus.position.x,
      0,
      this.state.bus.position.z
    );
    this.busMesh.rotation.y = -this.state.bus.headingDeg * Math.PI / 180;
    
    // Update door visual
    if (this.doorMesh) {
      this.doorMesh.position.x = this.state.bus.doorOpen ? 1.8 : 1.3;
    }
    
    // Update indicators
    if (this.leftIndicator && this.rightIndicator) {
      const leftMat = this.leftIndicator.material as THREE.MeshStandardMaterial;
      const rightMat = this.rightIndicator.material as THREE.MeshStandardMaterial;
      
      leftMat.emissiveIntensity = this.state.bus.indicator === 'left' ? 0.8 : 0;
      rightMat.emissiveIntensity = this.state.bus.indicator === 'right' ? 0.8 : 0;
    }
    
    // Update traffic
    this.updateTraffic(this.state.performance.fixedStep);
    
    // Update camera
    this.updateCamera();
  }
  
  private fixedUpdate(dt: number): void {
    // Process input
    this.processInput(dt);
    
    // Physics update
    this.updatePhysics(dt);
    
    // Collision detection
    this.checkCollisions();
    
    // Stop detection
    this.checkStopProximity();
    
    // Passenger boarding
    this.updateBoarding(dt);
    
    // Fuel consumption
    if (this.state.bus.throttle > 0 && this.state.bus.velocity > 0) {
      this.state.bus.fuel = Math.max(0, this.state.bus.fuel - dt * 0.1);
    }
  }
  
  private processInput(dt: number): void {
    const pressed = this.state.input.pressed;
    
    // Throttle/Brake
    if (pressed.includes('KeyW') || pressed.includes('throttle')) {
      this.state.bus.throttle = 1;
    } else {
      this.state.bus.throttle = 0;
    }
    
    if (pressed.includes('KeyS') || pressed.includes('brake')) {
      this.state.bus.brake = 1;
    } else {
      this.state.bus.brake = 0;
    }
    
    // Steering
    let steeringInput = 0;
    if (pressed.includes('KeyA') || pressed.includes('steerLeft')) {
      steeringInput = -1;
    }
    if (pressed.includes('KeyD') || pressed.includes('steerRight')) {
      steeringInput = 1;
    }
    this.state.bus.steering = steeringInput;
    
    // Update wheel angle
    const targetWheelAngle = steeringInput * DYNAMICS.maxWheelAngleDeg;
    const steeringChange = DYNAMICS.steeringRateDegPerSec * dt;
    if (Math.abs(targetWheelAngle - this.state.bus.wheelAngle) < steeringChange) {
      this.state.bus.wheelAngle = targetWheelAngle;
    } else {
      this.state.bus.wheelAngle += Math.sign(targetWheelAngle - this.state.bus.wheelAngle) * steeringChange;
    }
    
    // Horn
    this.state.bus.hornActive = pressed.includes('KeyH') || pressed.includes('horn');
  }
  
  private updatePhysics(dt: number): void {
    const bus = this.state.bus;
    
    // Parking brake check
    if (bus.parkingBrake && !bus.throttle) {
      bus.velocity *= Math.exp(-DYNAMICS.parkingBrakeDamping * dt);
      if (Math.abs(bus.velocity) < 0.1) {
        bus.velocity = 0;
      }
    }
    
    // Acceleration
    if (bus.throttle > 0 && !bus.parkingBrake) {
      if (bus.gear === 'D') {
        bus.velocity += DYNAMICS.throttleAcceleration * dt * bus.throttle;
        bus.velocity = Math.min(bus.velocity, DYNAMICS.maxForwardSpeedMps);
      } else if (bus.gear === 'R') {
        bus.velocity -= DYNAMICS.reverseAcceleration * dt;
        bus.velocity = Math.max(bus.velocity, -DYNAMICS.maxReverseSpeedMps);
      }
    }
    
    // Braking
    if (bus.brake > 0) {
      if (bus.velocity > 0) {
        bus.velocity -= DYNAMICS.serviceBrakeDeceleration * dt;
        bus.velocity = Math.max(0, bus.velocity);
      } else if (bus.velocity < 0) {
        bus.velocity += DYNAMICS.serviceBrakeDeceleration * dt;
        bus.velocity = Math.min(0, bus.velocity);
      }
      
      // Transition to reverse near rest
      if (Math.abs(bus.velocity) < 0.5 && bus.gear === 'D') {
        bus.gear = 'R';
      }
    } else if (bus.velocity > 0.1) {
      bus.gear = 'D';
    }
    
    // Rolling resistance
    if (!bus.throttle && !bus.brake) {
      bus.velocity *= Math.exp(-DYNAMICS.rollingResistance * dt);
      if (Math.abs(bus.velocity) < 0.05) {
        bus.velocity = 0;
      }
    }
    
    // Speed in km/h
    bus.speedKph = bus.velocity * 3.6;
    
    // Steering - turn based on current heading
    if (Math.abs(bus.velocity) > 0.1) {
      const turnRate = bus.wheelAngle * (bus.velocity > 0 ? 1 : -1) * dt * 0.8;
      bus.headingDeg += turnRate;
      
      // Normalize heading
      while (bus.headingDeg > 180) bus.headingDeg -= 360;
      while (bus.headingDeg < -180) bus.headingDeg += 360;
    }
    
    // Position update
    const headingRad = bus.headingDeg * Math.PI / 180;
    bus.position.x += Math.sin(headingRad) * bus.velocity * dt;
    bus.position.z += Math.cos(headingRad) * bus.velocity * dt;
    
    // Odometer
    bus.odometerKm += Math.abs(bus.velocity) * dt / 1000;
  }
  
  private checkCollisions(): void {
    const bus = this.state.bus;
    
    // Road boundaries
    const roadEdge = this.state.world.roadHalfWidth + DYNAMICS.busWidth / 2 - 0.5;
    if (Math.abs(bus.position.x) > roadEdge) {
      bus.position.x = Math.sign(bus.position.x) * roadEdge;
      bus.velocity *= 0.3;
      bus.collisionCount++;
      bus.lastCollision = 'road-edge';
    }
    
    // Traffic collision
    for (const vehicle of this.state.traffic) {
      const dx = bus.position.x - vehicle.x;
      const dz = bus.position.z - vehicle.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < 3) {
        // Push bus back
        const pushX = dx / dist * (3 - dist);
        const pushZ = dz / dist * (3 - dist);
        bus.position.x += pushX * 0.5;
        bus.position.z += pushZ * 0.5;
        bus.velocity *= 0.2;
        bus.collisionCount++;
        bus.lastCollision = `traffic-${vehicle.id}`;
      }
    }
    
    // Building collision
    for (const obstacle of this.state.world.nearbySolidObstacles) {
      const dx = Math.abs(bus.position.x - obstacle.x);
      const dz = Math.abs(bus.position.z - obstacle.z);
      
      const minX = obstacle.halfWidth + DYNAMICS.busWidth / 2;
      const minZ = obstacle.halfLength + DYNAMICS.busLength / 2;
      
      if (dx < minX && dz < minZ) {
        // Push bus out
        if (dx / minX > dz / minZ) {
          bus.position.x = obstacle.x + Math.sign(bus.position.x - obstacle.x) * minX;
        } else {
          bus.position.z = obstacle.z + Math.sign(bus.position.z - obstacle.z) * minZ;
        }
        bus.velocity *= 0.3;
        bus.collisionCount++;
        bus.lastCollision = obstacle.id;
      }
    }
  }
  
  private checkStopProximity(): void {
    const bus = this.state.bus;
    let nearestStop: Stop | null = null;
    let nearestDist = Infinity;
    
    for (const stop of this.state.route.stops) {
      if (stop.status === 'completed') continue;
      
      const dist = Math.abs(bus.position.z - stop.z);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestStop = stop;
      }
    }
    
    if (nearestStop) {
      this.state.route.nextStopDistance = nearestDist;
      
      // Check if at stop
      const lateralDist = Math.abs(bus.position.x - 10); // Stop is at x=10
      const longDist = nearestDist;
      
      this.state.route.atStop = 
        lateralDist < DYNAMICS.stopLateralHalfWidth &&
        longDist < DYNAMICS.stopLongitudinalHalfLength &&
        Math.abs(bus.velocity) < DYNAMICS.doorInterlockSpeedMps;
      
      // Update stop markers
      this.state.world.nearStopMarkers = nearestDist < 50 ? 1 : 0;
    }
  }
  
  private updateBoarding(dt: number): void {
    const bus = this.state.bus;
    
    // Door interlock
    if (Math.abs(bus.velocity) >= DYNAMICS.doorInterlockSpeedMps) {
      bus.doorOpen = false;
      this.state.passengers.boardingProgress = 0;
      return;
    }
    
    // Boarding at stop
    if (this.state.route.atStop && bus.doorOpen && !bus.parkingBrake) {
      // Find current stop
      const currentStop = this.state.route.stops.find(s => s.status === 'next');
      
      if (currentStop && currentStop.id !== this.state.lastStopId) {
        this.state.boardingTimer += dt;
        this.state.passengers.boardingProgress = Math.min(1, this.state.boardingTimer / this.state.boardingDuration);
        
        if (this.state.boardingTimer >= this.state.boardingDuration) {
          // Board passengers
          const boardingCount = Math.min(
            this.state.passengers.waitingAtNext,
            this.state.passengers.capacity - this.state.passengers.onboard
          );
          
          this.state.passengers.onboard += boardingCount;
          this.state.passengers.boardedTotal += boardingCount;
          this.state.route.earnings += boardingCount * 2500; // Rp 2500 per passenger
          this.state.score += boardingCount * 100;
          
          currentStop.status = 'completed';
          currentStop.boardedAtThisStop = true;
          this.state.lastStopId = currentStop.id;
          
          this.state.boardingTimer = 0;
          this.state.passengers.boardingProgress = 0;
          
          // Update message
          this.state.message = `Boarded ${boardingCount} passengers at ${currentStop.name}. Earnings: Rp ${this.state.route.earnings.toLocaleString()}`;
          
          // Move to next stop
          this.state.route.currentStopIndex++;
          
          // Check completion
          if (this.state.route.currentStopIndex >= this.state.route.stopCount) {
            this.state.route.completed = true;
            this.state.phase = 'complete';
            this.state.missionStatus = 'Route complete!';
            this.state.message = `Congratulations! Route completed. Total earnings: Rp ${this.state.route.earnings.toLocaleString()}`;
          } else {
            // Update next stop
            const nextStop = this.state.route.stops[this.state.route.currentStopIndex];
            if (nextStop) {
              nextStop.status = 'next';
              this.state.passengers.waitingAtNext = 3 + Math.floor(Math.random() * 8);
              this.state.missionStatus = `Next stop: ${nextStop.name}`;
            }
          }
        }
      }
    } else {
      this.state.boardingTimer = 0;
      this.state.passengers.boardingProgress = 0;
    }
  }
  
  private updateTraffic(dt: number): void {
    for (const vehicle of this.state.traffic) {
      const speedMps = vehicle.speedKph / 3.6;
      vehicle.z += speedMps * vehicle.direction * dt;
      
      // Wrap around
      if (vehicle.z < -50) vehicle.z = 750;
      if (vehicle.z > 800) vehicle.z = -50;
      
      // Update mesh
      if (vehicle.mesh) {
        vehicle.mesh.position.z = vehicle.z;
      }
    }
  }
  
  private updateCamera(): void {
    const bus = this.state.bus;
    const headingRad = bus.headingDeg * Math.PI / 180;
    
    let camX: number, camY: number, camZ: number;
    let targetX: number, targetY: number, targetZ: number;
    
    switch (this.state.camera.mode) {
      case 'chase':
        camX = bus.position.x - Math.sin(headingRad) * 15;
        camY = 6;
        camZ = bus.position.z - Math.cos(headingRad) * 15;
        targetX = bus.position.x;
        targetY = 1.5;
        targetZ = bus.position.z;
        break;
        
      case 'showcase':
        camX = bus.position.x + Math.sin(headingRad + 0.8) * 10;
        camY = 3;
        camZ = bus.position.z + Math.cos(headingRad + 0.8) * 10;
        targetX = bus.position.x;
        targetY = 1.5;
        targetZ = bus.position.z;
        break;
        
      case 'cockpit':
        camX = bus.position.x + Math.sin(headingRad) * 2;
        camY = 2.5;
        camZ = bus.position.z + Math.cos(headingRad) * 2;
        targetX = bus.position.x + Math.sin(headingRad) * 20;
        targetY = 2;
        targetZ = bus.position.z + Math.cos(headingRad) * 20;
        break;
        
      case 'cinematic':
        const time = this.state.elapsed * 0.3;
        camX = bus.position.x + Math.sin(time) * 15;
        camY = 8 + Math.sin(time * 0.5) * 2;
        camZ = bus.position.z - 20;
        targetX = bus.position.x;
        targetY = 1.5;
        targetZ = bus.position.z;
        break;
        
      case 'stopside':
        const currentStop = this.state.route.stops[this.state.route.currentStopIndex];
        if (currentStop && this.state.route.nextStopDistance < 50) {
          camX = 15;
          camY = 4;
          camZ = currentStop.z + 10;
          targetX = 0;
          targetY = 1;
          targetZ = currentStop.z;
        } else {
          // Fall back to chase
          camX = bus.position.x - Math.sin(headingRad) * 15;
          camY = 6;
          camZ = bus.position.z - Math.cos(headingRad) * 15;
          targetX = bus.position.x;
          targetY = 1.5;
          targetZ = bus.position.z;
        }
        break;
        
      default:
        camX = bus.position.x - Math.sin(headingRad) * 15;
        camY = 6;
        camZ = bus.position.z - Math.cos(headingRad) * 15;
        targetX = bus.position.x;
        targetY = 1.5;
        targetZ = bus.position.z;
    }
    
    // Smooth camera
    this.camera.position.x += (camX - this.camera.position.x) * 0.05;
    this.camera.position.y += (camY - this.camera.position.y) * 0.05;
    this.camera.position.z += (camZ - this.camera.position.z) * 0.05;
    
    this.camera.lookAt(targetX, targetY, targetZ);
    
    // Update state
    this.state.camera.position = {
      x: this.camera.position.x,
      y: this.camera.position.y,
      z: this.camera.position.z
    };
    this.state.camera.target = { x: targetX, y: targetY, z: targetZ };
  }
  
  private render(): void {
    this.renderer.render(this.scene, this.camera);
  }
  
  getState(): GameState {
    return this.state;
  }
  
  destroy(): void {
    cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}