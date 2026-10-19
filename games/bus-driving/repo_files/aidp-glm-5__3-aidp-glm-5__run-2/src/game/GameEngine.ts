import * as THREE from 'three';

// ==================== TYPES ====================
interface Vector2 { x: number; z: number; }
interface Vector3 { x: number; y: number; z: number; }

interface BusState {
  phase: 'menu' | 'playing' | 'paused' | 'complete';
  speedKph: number;
  position: Vector2;
  headingDeg: number;
  doorOpen: boolean;
  passengerCount: number;
  nextStopIndex: number;
  routeProgress: number;
  fuel: number;
  score: number;
}

interface GameState {
  phase: 'menu' | 'playing' | 'paused' | 'complete';
  elapsed: number;
  paused: boolean;
  missionStatus: string;
  score: number;
  message: string;
}

interface VehicleState {
  id: string;
  type: string;
  position: Vector2;
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
  dynamics: {
    maxForwardSpeedMps: number;
    maxReverseSpeedMps: number;
    throttleAcceleration: number;
    serviceBrakeDeceleration: number;
    reverseAcceleration: number;
    rollingResistance: number;
    parkingBrakeDamping: number;
    steeringRateDegPerSec: number;
    maxWheelAngleDeg: number;
    doorInterlockSpeedMps: number;
    boardingSpeedMps: number;
  };
}

interface StopState {
  id: string;
  name: string;
  z: number;
  status: 'next' | 'upcoming' | 'completed';
}

interface RouteState {
  name: string;
  stopCount: number;
  currentStopIndex: number;
  stops: StopState[];
  nextStopDistance: number;
  atStop: boolean;
  completed: boolean;
  earnings: number;
  service: {
    stopLongitudinalHalfLength: number;
    stopLateralHalfWidth: number;
    boardingDuration: number;
  };
}

interface PassengersState {
  onboard: number;
  capacity: number;
  boardedTotal: number;
  waitingAtNext: number;
  boardingProgress: number;
}

interface TrafficVehicle {
  id: string;
  x: number;
  z: number;
  speedKph: number;
  direction: number;
}

interface TrafficState {
  count: number;
  density: number;
  vehicles: TrafficVehicle[];
}

interface SolidObstacle {
  id: string;
  type: string;
  x: number;
  z: number;
  halfWidth: number;
  halfLength: number;
}

interface WorldState {
  environment: string;
  weather: string;
  timeOfDay: string;
  roadCenter: number;
  roadHalfWidth: number;
  surface: string;
  nearStopMarkers: number;
  solidObstacleCount: number;
  collision: {
    roadEdgeEnabled: boolean;
    trafficEnabled: boolean;
    solidObjectsEnabled: boolean;
    busWidth: number;
    busLength: number;
  };
  nearbySolidObstacles: SolidObstacle[];
}

interface CameraState {
  mode: 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside';
  position: Vector3;
  target: Vector3;
  fov: number;
  near: number;
  far: number;
  modes: string[];
}

interface InputState {
  pressed: string[];
  lastAction: string;
  lastPointerType: string;
  mobileControls: boolean;
}

interface RendererState {
  backend: string;
  contextLost: boolean;
  frame: number;
  drawCalls: number;
  canvas: { width: number; height: number };
  quality: string;
  pixelRatio: number;
  renderDistance: number;
  webglVersion: number;
  dynamicLighting: boolean;
  fog: boolean;
  antialias: boolean;
  shadowsEnabled: boolean;
}

interface PerformanceState {
  elapsed: number;
  tick: number;
  frame: number;
  fixedStep: number;
  accumulator: number;
  maxSubSteps: number;
  uiUpdates: number;
  mounted: boolean;
}

interface SettingsState {
  quality: string;
  masterVolume: number;
  pixelRatio: number;
  trafficDensity: number;
  renderDistance: number;
  qualityProfiles: Record<string, { pixelRatio: number; density: number; renderDistance: number }>;
}

// ==================== GAME ENGINE ====================
export class GameEngine {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  
  // Game state
  private phase: 'menu' | 'playing' | 'paused' | 'complete' = 'menu';
  private elapsed: number = 0;
  private tick: number = 0;
  private frame: number = 0;
  private fixedStep: number = 1/60;
  private accumulator: number = 0;
  private uiUpdates: number = 0;
  
  // Bus state
  private busX: number = 0.33;
  private busZ: number = 20;
  private busVelocity: number = 0;
  private busHeading: number = 0.96;
  private busWheelAngle: number = 0;
  private throttle: number = 0;
  private brake: number = 0;
  private steering: number = 0;
  private gear: 'D' | 'R' | 'N' = 'D';
  private parkingBrake: boolean = false;
  private doorOpen: boolean = false;
  private headlights: boolean = false;
  private indicator: 'off' | 'left' | 'right' = 'off';
  private hornActive: boolean = false;
  private fuel: number = 100;
  private damage: number = 0;
  private odometerKm: number = 0;
  private collisionCount: number = 0;
  private lastCollision: string = 'none';
  
  // Route state
  private stops: StopState[] = [
    { id: 's1', name: 'Kota Lama', z: 45, status: 'next' },
    { id: 's2', name: 'Pasar Raya', z: 300, status: 'upcoming' },
    { id: 's3', name: 'Terminal Selatan', z: 620, status: 'upcoming' }
  ];
  private currentStopIndex: number = 0;
  private routeCompleted: boolean = false;
  private earnings: number = 0;
  private atStop: boolean = false;
  private boardingProgress: number = 0;
  private wasAtStop: boolean = false;
  
  // Passenger state
  private onboard: number = 4;
  private boardedTotal: number = 0;
  private waitingAtNext: number = 7;
  private passengerCapacity: number = 42;
  
  // Traffic
  private trafficVehicles: TrafficVehicle[] = [];
  private trafficDensity: number = 0.92;
  
  // World obstacles
  private obstacles: SolidObstacle[] = [];
  
  // Camera
  private cameraMode: 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside' = 'chase';
  
  // Input
  private pressedKeys: Set<string> = new Set();
  private lastAction: string = 'none';
  private lastPointerType: string = 'mouse';
  private mobileControls: boolean = false;
  
  // Settings
  private quality: string = 'cinematic';
  private qualityProfiles: Record<string, { pixelRatio: number; density: number; renderDistance: number }> = {
    cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
    high: { pixelRatio: 1.1, density: 0.78, renderDistance: 420 },
    balanced: { pixelRatio: 0.85, density: 0.56, renderDistance: 320 }
  };
  
  // 3D Objects
  private busGroup: THREE.Group | null = null;
  private road: THREE.Mesh | null = null;
  private environmentObjects: THREE.Group | null = null;
  private trafficGroup: THREE.Group | null = null;
  
  // Touch controls state
  private touchThrottle: boolean = false;
  private touchBrake: boolean = false;
  private touchSteerLeft: boolean = false;
  private touchSteerRight: boolean = false;
  
  // Bus dynamics
  private dynamics = {
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
    boardingSpeedMps: 0.8
  };
  
  private animationId: number | null = null;
  private lastTime: number = 0;
  private mounted: boolean = true;
  
  constructor(container: HTMLElement) {
    this.container = container;
    
    // Initialize Three.js
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.Fog(0x87CEEB, 100, 520);
    
    this.camera = new THREE.PerspectiveCamera(53, container.clientWidth / container.clientHeight, 0.1, 900);
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(this.qualityProfiles[this.quality].pixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
    
    this.initializeScene();
    this.initializeTraffic();
    this.initializeObstacles();
    this.setupEventListeners();
    
    // Expose hooks
    this.exposeHooks();
  }
  
  private initializeScene(): void {
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 100, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    this.scene.add(directionalLight);
    
    // Ground
    const groundGeometry = new THREE.PlaneGeometry(200, 1000);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d5a27,
      roughness: 0.9
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    this.scene.add(ground);
    
    // Road
    const roadGeometry = new THREE.PlaneGeometry(10.4, 1000);
    const roadMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333,
      roughness: 0.8
    });
    this.road = new THREE.Mesh(roadGeometry, roadMaterial);
    this.road.rotation.x = -Math.PI / 2;
    this.road.position.y = 0;
    this.road.position.x = 0.33;
    this.road.receiveShadow = true;
    this.scene.add(this.road);
    
    // Road markings
    const markingGeometry = new THREE.PlaneGeometry(0.15, 1000);
    const markingMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    
    for (let i = -1; i <= 1; i++) {
      const marking = new THREE.Mesh(markingGeometry, markingMaterial);
      marking.rotation.x = -Math.PI / 2;
      marking.position.y = 0.01;
      marking.position.x = 0.33 + i * 2;
      this.scene.add(marking);
    }
    
    // Road barriers
    const barrierGeometry = new THREE.BoxGeometry(0.3, 0.5, 1000);
    const barrierMaterial = new THREE.MeshStandardMaterial({ color: 0xcc0000 });
    
    const leftBarrier = new THREE.Mesh(barrierGeometry, barrierMaterial);
    leftBarrier.position.set(-5.2, 0.25, 0);
    this.scene.add(leftBarrier);
    
    const rightBarrier = new THREE.Mesh(barrierGeometry, barrierMaterial);
    rightBarrier.position.set(5.8, 0.25, 0);
    this.scene.add(rightBarrier);
    
    // Create bus
    this.createBus();
    
    // Create environment
    this.createEnvironment();
    
    // Create stop shelters
    this.createStopShelters();
  }
  
  private createBus(): void {
    this.busGroup = new THREE.Group();
    
    // Bus body
    const bodyGeometry = new THREE.BoxGeometry(2.55, 2.8, 8.9);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a5fb4,
      metalness: 0.3,
      roughness: 0.5
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.6;
    body.castShadow = true;
    this.busGroup.add(body);
    
    // Windows
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a2e,
      metalness: 0.8,
      roughness: 0.2
    });
    
    // Side windows
    for (let i = -3; i <= 3; i++) {
      const windowGeometry = new THREE.BoxGeometry(0.05, 1.2, 1.5);
      
      const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
      leftWindow.position.set(-1.3, 2.2, i * 1.2);
      this.busGroup.add(leftWindow);
      
      const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
      rightWindow.position.set(1.3, 2.2, i * 1.2);
      this.busGroup.add(rightWindow);
    }
    
    // Windshield
    const windshieldGeometry = new THREE.BoxGeometry(2.2, 1.5, 0.05);
    const windshield = new THREE.Mesh(windshieldGeometry, windowMaterial);
    windshield.position.set(0, 2.3, 4.5);
    this.busGroup.add(windshield);
    
    // Rear window
    const rearWindow = new THREE.Mesh(windshieldGeometry, windowMaterial);
    rearWindow.position.set(0, 2.3, -4.5);
    this.busGroup.add(rearWindow);
    
    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.4, 16);
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    
    const wheelPositions = [
      { x: -1.2, z: 3 },
      { x: 1.2, z: 3 },
      { x: -1.2, z: -3 },
      { x: 1.2, z: -3 }
    ];
    
    wheelPositions.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos.x, 0.5, pos.z);
      wheel.castShadow = true;
      this.busGroup!.add(wheel);
      
      // Wheel rim
      const rimGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.42, 8);
      const rimMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8 });
      const rim = new THREE.Mesh(rimGeometry, rimMaterial);
      rim.rotation.z = Math.PI / 2;
      rim.position.set(pos.x, 0.5, pos.z);
      this.busGroup!.add(rim);
    });
    
    // Headlights
    const headlightGeometry = new THREE.BoxGeometry(0.4, 0.3, 0.1);
    const headlightMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffcc,
      emissive: 0xffffcc,
      emissiveIntensity: 0.5
    });
    
    const leftHeadlight = new THREE.Mesh(headlightGeometry, headlightMaterial);
    leftHeadlight.position.set(-0.8, 1.2, 4.5);
    leftHeadlight.name = 'headlight-left';
    this.busGroup.add(leftHeadlight);
    
    const rightHeadlight = new THREE.Mesh(headlightGeometry, headlightMaterial);
    rightHeadlight.position.set(0.8, 1.2, 4.5);
    rightHeadlight.name = 'headlight-right';
    this.busGroup.add(rightHeadlight);
    
    // Indicators
    const indicatorGeometry = new THREE.BoxGeometry(0.2, 0.15, 0.1);
    const indicatorMaterial = new THREE.MeshStandardMaterial({ color: 0xff8800 });
    
    const frontLeftIndicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial.clone());
    frontLeftIndicator.position.set(-1.2, 1.0, 4.5);
    frontLeftIndicator.name = 'indicator-fl';
    this.busGroup.add(frontLeftIndicator);
    
    const frontRightIndicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial.clone());
    frontRightIndicator.position.set(1.2, 1.0, 4.5);
    frontRightIndicator.name = 'indicator-fr';
    this.busGroup.add(frontRightIndicator);
    
    // Roof details
    const roofGeometry = new THREE.BoxGeometry(2.3, 0.3, 7);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x0d3b66 });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 3.1;
    this.busGroup.add(roof);
    
    // Destination board
    const boardGeometry = new THREE.BoxGeometry(2, 0.4, 0.1);
    const boardMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x000000,
      emissive: 0x111111
    });
    const board = new THREE.Mesh(boardGeometry, boardMaterial);
    board.position.set(0, 3.3, 4.5);
    this.busGroup.add(board);
    
    this.busGroup.position.set(this.busX, 0, this.busZ);
    this.busGroup.rotation.y = -this.busHeading;
    this.scene.add(this.busGroup);
  }
  
  private createEnvironment(): void {
    this.environmentObjects = new THREE.Group();
    
    // Buildings on both sides
    const buildingColors = [0x8B4513, 0xA0522D, 0xD2691E, 0xCD853F, 0xDEB887];
    
    for (let z = -100; z < 800; z += 50) {
      // Left side buildings
      if (Math.random() > 0.3) {
        const height = 8 + Math.random() * 15;
        const width = 6 + Math.random() * 8;
        const depth = 6 + Math.random() * 8;
        
        const buildingGeometry = new THREE.BoxGeometry(width, height, depth);
        const buildingMaterial = new THREE.MeshStandardMaterial({ 
          color: buildingColors[Math.floor(Math.random() * buildingColors.length)]
        });
        const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
        building.position.set(-15 - Math.random() * 10, height / 2, z);
        building.castShadow = true;
        building.receiveShadow = true;
        this.environmentObjects.add(building);
        
        // Windows on building
        this.addBuildingWindows(building, width, height, depth, -1);
      }
      
      // Right side buildings
      if (Math.random() > 0.3) {
        const height = 8 + Math.random() * 15;
        const width = 6 + Math.random() * 8;
        const depth = 6 + Math.random() * 8;
        
        const buildingGeometry = new THREE.BoxGeometry(width, height, depth);
        const buildingMaterial = new THREE.MeshStandardMaterial({ 
          color: buildingColors[Math.floor(Math.random() * buildingColors.length)]
        });
        const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
        building.position.set(16 + Math.random() * 10, height / 2, z);
        building.castShadow = true;
        building.receiveShadow = true;
        this.environmentObjects.add(building);
        
        // Windows on building
        this.addBuildingWindows(building, width, height, depth, 1);
      }
      
      // Vegetation - palm trees
      if (Math.random() > 0.5) {
        this.createPalmTree(-8 - Math.random() * 3, z + Math.random() * 20);
      }
      if (Math.random() > 0.5) {
        this.createPalmTree(9 + Math.random() * 3, z + Math.random() * 20);
      }
    }
    
    // Street lamps
    for (let z = -50; z < 800; z += 30) {
      this.createStreetLamp(-6.5, z);
      this.createStreetLamp(7, z);
    }
    
    this.scene.add(this.environmentObjects);
  }
  
  private addBuildingWindows(building: THREE.Mesh, width: number, height: number, depth: number, side: number): void {
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4a90d9,
      emissive: 0x112233,
      emissiveIntensity: 0.3
    });
    
    const windowSize = 0.8;
    const windowSpacing = 2;
    
    for (let y = 2; y < height - 1; y += windowSpacing) {
      for (let d = -depth/2 + 1; d < depth/2 - 1; d += windowSpacing) {
        const windowGeom = new THREE.BoxGeometry(0.1, windowSize, windowSize);
        const win = new THREE.Mesh(windowGeom, windowMaterial);
        win.position.set(
          building.position.x + (side > 0 ? width/2 + 0.05 : -width/2 - 0.05),
          y,
          building.position.z + d
        );
        this.environmentObjects!.add(win);
      }
    }
  }
  
  private createPalmTree(x: number, z: number): void {
    const treeGroup = new THREE.Group();
    
    // Trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.15, 0.25, 6, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x4a3728 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 3;
    trunk.castShadow = true;
    treeGroup.add(trunk);
    
    // Leaves
    const leafGeometry = new THREE.ConeGeometry(2.5, 4, 8);
    const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    const leaves = new THREE.Mesh(leafGeometry, leafMaterial);
    leaves.position.y = 7;
    leaves.castShadow = true;
    treeGroup.add(leaves);
    
    treeGroup.position.set(x, 0, z);
    this.environmentObjects!.add(treeGroup);
  }
  
  private createStreetLamp(x: number, z: number): void {
    const lampGroup = new THREE.Group();
    
    // Pole
    const poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 5, 8);
    const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.8 });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.y = 2.5;
    lampGroup.add(pole);
    
    // Lamp head
    const headGeometry = new THREE.BoxGeometry(0.4, 0.2, 0.4);
    const headMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffcc,
      emissive: 0xffffcc,
      emissiveIntensity: 0.5
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 5.1;
    lampGroup.add(head);
    
    lampGroup.position.set(x, 0, z);
    this.environmentObjects!.add(lampGroup);
  }
  
  private createStopShelters(): void {
    this.stops.forEach((stop, index) => {
      const shelterGroup = new THREE.Group();
      
      // Platform
      const platformGeometry = new THREE.BoxGeometry(8.4, 0.15, 21);
      const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
      const platform = new THREE.Mesh(platformGeometry, platformMaterial);
      platform.position.y = 0.075;
      shelterGroup.add(platform);
      
      // Shelter roof
      const roofGeometry = new THREE.BoxGeometry(6, 0.3, 10);
      const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x1a5fb4 });
      const roof = new THREE.Mesh(roofGeometry, roofMaterial);
      roof.position.y = 3.5;
      shelterGroup.add(roof);
      
      // Shelter poles
      const poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3.5, 8);
      const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8 });
      
      const polePositions = [[-2.5, -4], [2.5, -4], [-2.5, 4], [2.5, 4]];
      polePositions.forEach(([px, pz]) => {
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.set(px, 1.75, pz);
        shelterGroup.add(pole);
      });
      
      // Bench
      const benchGeometry = new THREE.BoxGeometry(3, 0.5, 1);
      const benchMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const bench = new THREE.Mesh(benchGeometry, benchMaterial);
      bench.position.set(0, 0.5, 0);
      shelterGroup.add(bench);
      
      // Stop sign
      const signGeometry = new THREE.BoxGeometry(1.5, 1, 0.1);
      const signMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x00aa00,
        emissive: 0x004400
      });
      const sign = new THREE.Mesh(signGeometry, signMaterial);
      sign.position.set(0, 2.5, -5);
      shelterGroup.add(sign);
      
      shelterGroup.position.set(-12, 0, stop.z);
      shelterGroup.name = `stop-${index}`;
      this.scene.add(shelterGroup);
    });
  }
  
  private initializeTraffic(): void {
    this.trafficGroup = new THREE.Group();
    const trafficCount = Math.floor(10 * this.trafficDensity);
    
    for (let i = 0; i < trafficCount; i++) {
      const lane = Math.random() > 0.5 ? -2 : 2;
      const direction = lane > 0 ? -1 : 1;
      
      const vehicle: TrafficVehicle = {
        id: `traffic-${i}`,
        x: 0.33 + lane,
        z: 100 + Math.random() * 600,
        speedKph: 20 + Math.random() * 30,
        direction: direction
      };
      
      this.trafficVehicles.push(vehicle);
      this.createTrafficVehicle(vehicle);
    }
    
    this.scene.add(this.trafficGroup);
  }
  
  private createTrafficVehicle(vehicle: TrafficVehicle): void {
    const carGroup = new THREE.Group();
    
    // Random car colors
    const colors = [0xff0000, 0x0000ff, 0x00ff00, 0xffff00, 0xff00ff, 0x00ffff, 0x888888];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Car body
    const bodyGeometry = new THREE.BoxGeometry(1.8, 1.2, 4);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color, metalness: 0.5 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.8;
    body.castShadow = true;
    carGroup.add(body);
    
    // Car roof
    const roofGeometry = new THREE.BoxGeometry(1.6, 0.8, 2);
    const roof = new THREE.Mesh(roofGeometry, bodyMaterial);
    roof.position.y = 1.6;
    roof.position.z = -0.3;
    carGroup.add(roof);
    
    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.3, 12);
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    
    [[-0.8, 1.2], [0.8, 1.2], [-0.8, -1.2], [0.8, -1.2]].forEach(([x, z]) => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.35, z);
      carGroup.add(wheel);
    });
    
    carGroup.position.set(vehicle.x, 0, vehicle.z);
    carGroup.rotation.y = vehicle.direction > 0 ? Math.PI : 0;
    carGroup.name = vehicle.id;
    
    this.trafficGroup!.add(carGroup);
  }
  
  private initializeObstacles(): void {
    // Add building obstacles
    for (let z = -100; z < 800; z += 50) {
      if (Math.random() > 0.3) {
        this.obstacles.push({
          id: `building-left-${z}`,
          type: 'building',
          x: -15 - Math.random() * 10,
          z: z,
          halfWidth: 3 + Math.random() * 4,
          halfLength: 3 + Math.random() * 4
        });
      }
      if (Math.random() > 0.3) {
        this.obstacles.push({
          id: `building-right-${z}`,
          type: 'building',
          x: 16 + Math.random() * 10,
          z: z,
          halfWidth: 3 + Math.random() * 4,
          halfLength: 3 + Math.random() * 4
        });
      }
    }
    
    // Add stop shelters as obstacles
    this.stops.forEach((stop, index) => {
      this.obstacles.push({
        id: `stop-shelter-${index}`,
        type: 'shelter',
        x: -12,
        z: stop.z,
        halfWidth: 4.2,
        halfLength: 10.5
      });
    });
  }
  
  private setupEventListeners(): void {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
    window.addEventListener('blur', this.handleBlur.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
    
    // Pointer events for touch
    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      this.lastPointerType = e.pointerType;
      if (e.pointerType === 'touch') {
        this.mobileControls = true;
      }
    });
  }
  
  private handleKeyDown(e: KeyboardEvent): void {
    if (this.phase === 'menu' && e.code === 'Space') {
      this.startGame();
      return;
    }
    
    if (e.code === 'Escape') {
      if (this.phase === 'playing') this.pauseGame();
      else if (this.phase === 'paused') this.resumeGame();
      return;
    }
    
    if (e.code === 'KeyR' && this.phase !== 'menu') {
      this.resetGame();
      return;
    }
    
    if (e.code === 'KeyC') {
      this.cycleCamera();
      this.lastAction = 'camera_cycle';
      return;
    }
    
    if (e.code === 'KeyQ') {
      this.quality = this.quality === 'cinematic' ? 'high' : 
                      this.quality === 'high' ? 'balanced' : 'cinematic';
      this.updateQuality();
      this.lastAction = 'quality_change';
      return;
    }
    
    this.pressedKeys.add(e.code);
    this.lastAction = `key_${e.code}`;
  }
  
  private handleKeyUp(e: KeyboardEvent): void {
    this.pressedKeys.delete(e.code);
  }
  
  private handleBlur(): void {
    this.pressedKeys.clear();
    this.throttle = 0;
    this.brake = 0;
    this.steering = 0;
    this.hornActive = false;
  }
  
  private handleResize(): void {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  public startGame(): void {
    this.phase = 'playing';
    this.elapsed = 0;
    this.lastTime = performance.now();
    this.animate();
  }
  
  public pauseGame(): void {
    this.phase = 'paused';
  }
  
  public resumeGame(): void {
    this.phase = 'playing';
    this.lastTime = performance.now();
  }
  
  public resetGame(): void {
    this.phase = 'menu';
    this.elapsed = 0;
    this.busX = 0.33;
    this.busZ = 20;
    this.busVelocity = 0;
    this.busHeading = 0.96;
    this.busWheelAngle = 0;
    this.throttle = 0;
    this.brake = 0;
    this.steering = 0;
    this.gear = 'D';
    this.parkingBrake = false;
    this.doorOpen = false;
    this.headlights = false;
    this.indicator = 'off';
    this.hornActive = false;
    this.fuel = 100;
    this.damage = 0;
    this.odometerKm = 0;
    this.collisionCount = 0;
    this.lastCollision = 'none';
    this.currentStopIndex = 0;
    this.routeCompleted = false;
    this.earnings = 0;
    this.atStop = false;
    this.boardingProgress = 0;
    this.wasAtStop = false;
    this.onboard = 4;
    this.boardedTotal = 0;
    this.waitingAtNext = 7;
    
    this.stops.forEach((stop, i) => {
      stop.status = i === 0 ? 'next' : 'upcoming';
    });
    
    // Reset traffic positions
    this.trafficVehicles.forEach((v) => {
      v.z = 100 + Math.random() * 600;
    });
    
    if (this.busGroup) {
      this.busGroup.position.set(this.busX, 0, this.busZ);
      this.busGroup.rotation.y = -this.busHeading;
    }
  }
  
  public cycleCamera(): void {
    const modes: Array<'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside'> = 
      ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside'];
    const currentIndex = modes.indexOf(this.cameraMode);
    this.cameraMode = modes[(currentIndex + 1) % modes.length];
  }
  
  private updateQuality(): void {
    const profile = this.qualityProfiles[this.quality];
    this.renderer.setPixelRatio(profile.pixelRatio);
    (this.scene.fog as THREE.Fog).far = profile.renderDistance;
  }
  
  private processInput(): void {
    if (this.phase !== 'playing') return;
    
    // Throttle (W key)
    if (this.pressedKeys.has('KeyW') || this.touchThrottle) {
      this.throttle = 1;
    } else {
      this.throttle = 0;
    }
    
    // Brake (S key)
    if (this.pressedKeys.has('KeyS') || this.touchBrake) {
      this.brake = 1;
      if (Math.abs(this.busVelocity) < 0.5 && this.throttle === 0) {
        this.gear = 'R';
      }
    } else {
      this.brake = 0;
    }
    
    // Steering
    this.steering = 0;
    if (this.pressedKeys.has('KeyA') || this.touchSteerLeft) {
      this.steering = -1;
    }
    if (this.pressedKeys.has('KeyD') || this.touchSteerRight) {
      this.steering = 1;
    }
    
    // Parking brake (Space)
    if (this.pressedKeys.has('Space')) {
      this.parkingBrake = !this.parkingBrake;
      this.pressedKeys.delete('Space');
    }
    
    // Door toggle (E key)
    if (this.pressedKeys.has('KeyE')) {
      if (Math.abs(this.busVelocity) < this.dynamics.doorInterlockSpeedMps) {
        this.doorOpen = !this.doorOpen;
      }
      this.pressedKeys.delete('KeyE');
    }
    
    // Headlights (H key)
    if (this.pressedKeys.has('KeyH')) {
      this.headlights = !this.headlights;
      this.pressedKeys.delete('KeyH');
    }
    
    // Indicators
    if (this.pressedKeys.has('KeyZ')) {
      this.indicator = this.indicator === 'left' ? 'off' : 'left';
      this.pressedKeys.delete('KeyZ');
    }
    if (this.pressedKeys.has('KeyX')) {
      this.indicator = this.indicator === 'right' ? 'off' : 'right';
      this.pressedKeys.delete('KeyX');
    }
    
    // Horn
    this.hornActive = this.pressedKeys.has('KeyV');
  }
  
  private updatePhysics(dt: number): void {
    if (this.phase !== 'playing') return;
    
    // Steering
    const targetWheelAngle = this.steering * this.dynamics.maxWheelAngleDeg;
    const wheelDelta = (targetWheelAngle - this.busWheelAngle) * this.dynamics.steeringRateDegPerSec * dt;
    this.busWheelAngle += Math.sign(wheelDelta) * Math.min(Math.abs(wheelDelta), Math.abs(targetWheelAngle - this.busWheelAngle));
    
    // Throttle/brake
    if (this.throttle > 0 && !this.parkingBrake) {
      if (this.gear === 'D') {
        this.busVelocity += this.dynamics.throttleAcceleration * dt;
      } else if (this.gear === 'R') {
        this.busVelocity -= this.dynamics.reverseAcceleration * dt;
      }
    }
    
    if (this.brake > 0) {
      if (this.busVelocity > 0) {
        this.busVelocity -= this.dynamics.serviceBrakeDeceleration * dt;
        if (this.busVelocity < 0) this.busVelocity = 0;
      } else if (this.busVelocity < 0) {
        this.busVelocity += this.dynamics.serviceBrakeDeceleration * dt;
        if (this.busVelocity > 0) this.busVelocity = 0;
      }
    }
    
    // Rolling resistance
    if (this.throttle === 0 && this.brake === 0) {
      if (this.busVelocity > 0) {
        this.busVelocity -= this.dynamics.rollingResistance * dt;
        if (this.busVelocity < 0) this.busVelocity = 0;
      } else if (this.busVelocity < 0) {
        this.busVelocity += this.dynamics.rollingResistance * dt;
        if (this.busVelocity > 0) this.busVelocity = 0;
      }
    }
    
    // Parking brake damping
    if (this.parkingBrake) {
      if (this.busVelocity > 0) {
        this.busVelocity -= this.dynamics.parkingBrakeDamping * dt;
        if (this.busVelocity < 0) this.busVelocity = 0;
      } else if (this.busVelocity < 0) {
        this.busVelocity += this.dynamics.parkingBrakeDamping * dt;
        if (this.busVelocity > 0) this.busVelocity = 0;
      }
    }
    
    // Speed limits
    if (this.busVelocity > this.dynamics.maxForwardSpeedMps) {
      this.busVelocity = this.dynamics.maxForwardSpeedMps;
    } else if (this.busVelocity < -this.dynamics.maxReverseSpeedMps) {
      this.busVelocity = -this.dynamics.maxReverseSpeedMps;
    }
    
    // Update position and heading
    const speedFactor = Math.abs(this.busVelocity) / this.dynamics.maxForwardSpeedMps;
    const turnRate = this.busWheelAngle * dt * speedFactor * 2;
    
    if (Math.abs(this.busVelocity) > 0.01) {
      this.busHeading += turnRate * (this.busVelocity > 0 ? 1 : -1);
    }
    
    const dx = Math.sin(this.busHeading) * this.busVelocity * dt;
    const dz = Math.cos(this.busHeading) * this.busVelocity * dt;
    
    this.busX += dx;
    this.busZ += dz;
    
    // Fuel consumption
    if (this.throttle > 0 && Math.abs(this.busVelocity) > 0.1) {
      this.fuel -= 0.002 * dt;
      if (this.fuel < 0) this.fuel = 0;
    }
    
    // Odometer
    this.odometerKm += Math.abs(this.busVelocity) * dt / 1000;
    
    // Collision detection
    this.checkCollisions();
    
    // Update bus mesh
    if (this.busGroup) {
      this.busGroup.position.set(this.busX, 0, this.busZ);
      this.busGroup.rotation.y = -this.busHeading;
    }
    
    // Update headlights
    this.updateLights();
  }
  
  private checkCollisions(): void {
    const busHalfWidth = 1.275;
    const busHalfLength = 4.45;
    
    // Road edge collision
    const roadLeft = 0.33 - 5.2;
    const roadRight = 0.33 + 5.2;
    
    if (this.busX - busHalfWidth < roadLeft) {
      this.busX = roadLeft + busHalfWidth;
      this.busVelocity *= 0.3;
      this.collisionCount++;
      this.lastCollision = 'road_edge_left';
    }
    if (this.busX + busHalfWidth > roadRight) {
      this.busX = roadRight - busHalfWidth;
      this.busVelocity *= 0.3;
      this.collisionCount++;
      this.lastCollision = 'road_edge_right';
    }
    
    // Traffic collision
    this.trafficVehicles.forEach(vehicle => {
      const dx = this.busX - vehicle.x;
      const dz = this.busZ - vehicle.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < 3) {
        // Push bus away
        const nx = dx / dist;
        const nz = dz / dist;
        this.busX += nx * 0.1;
        this.busZ += nz * 0.1;
        this.busVelocity *= 0.3;
        this.collisionCount++;
        this.lastCollision = vehicle.id;
      }
    });
    
    // Obstacle collision
    this.obstacles.forEach(obstacle => {
      const dx = Math.abs(this.busX - obstacle.x);
      const dz = Math.abs(this.busZ - obstacle.z);
      
      if (dx < busHalfWidth + obstacle.halfWidth && dz < busHalfLength + obstacle.halfLength) {
        // Push bus away
        if (dx / (busHalfWidth + obstacle.halfWidth) > dz / (busHalfLength + obstacle.halfLength)) {
          this.busX += Math.sign(this.busX - obstacle.x) * 0.1;
        } else {
          this.busZ += Math.sign(this.busZ - obstacle.z) * 0.1;
        }
        this.busVelocity *= 0.5;
        this.collisionCount++;
        this.lastCollision = obstacle.id;
      }
    });
  }
  
  private updateLights(): void {
    if (!this.busGroup) return;
    
    // Update headlights
    const intensity = this.headlights ? 2 : 0.5;
    this.busGroup.traverse(child => {
      if (child instanceof THREE.Mesh) {
        if (child.name.includes('headlight')) {
          (child.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
        }
        if (child.name.includes('indicator')) {
          const isLeft = child.name.includes('fl');
          const isRight = child.name.includes('fr');
          const shouldBlink = (this.indicator === 'left' && isLeft) || (this.indicator === 'right' && isRight);
          (child.material as THREE.MeshStandardMaterial).emissive = shouldBlink ? 
            new THREE.Color(0xff8800) : new THREE.Color(0x000000);
          (child.material as THREE.MeshStandardMaterial).emissiveIntensity = shouldBlink ? 1 : 0;
        }
      }
    });
  }
  
  private updateTraffic(dt: number): void {
    if (this.phase !== 'playing') return;
    
    this.trafficVehicles.forEach(vehicle => {
      // Move traffic
      vehicle.z += (vehicle.speedKph / 3.6) * vehicle.direction * dt;
      
      // Wrap around
      if (vehicle.z < -50) vehicle.z = 750;
      if (vehicle.z > 800) vehicle.z = -50;
      
      // Update mesh
      const mesh = this.trafficGroup?.getObjectByName(vehicle.id);
      if (mesh) {
        mesh.position.z = vehicle.z;
      }
    });
  }
  
  private updateRoute(): void {
    if (this.phase !== 'playing' || this.currentStopIndex >= this.stops.length) return;
    
    const currentStop = this.stops[this.currentStopIndex];
    const dz = Math.abs(this.busZ - currentStop.z);
    const dx = Math.abs(this.busX - (-12));
    
    // Check if at stop
    const atStopNow = dz < 10.5 && dx < 15 && Math.abs(this.busVelocity) < this.dynamics.doorInterlockSpeedMps;
    
    if (atStopNow && this.doorOpen && !this.wasAtStop) {
      this.atStop = true;
      this.boardingProgress = 0;
    }
    
    if (this.atStop && this.doorOpen) {
      this.boardingProgress += this.dynamics.boardingSpeedMps / 1.25;
      
      if (this.boardingProgress >= 1) {
        // Complete boarding
        const boardingCount = Math.min(this.waitingAtNext, this.passengerCapacity - this.onboard);
        this.onboard += boardingCount;
        this.boardedTotal += boardingCount;
        this.earnings += boardingCount * 5000;
        this.waitingAtNext = Math.floor(Math.random() * 10) + 3;
        
        currentStop.status = 'completed';
        this.currentStopIndex++;
        
        if (this.currentStopIndex < this.stops.length) {
          this.stops[this.currentStopIndex].status = 'next';
        } else {
          this.routeCompleted = true;
          this.phase = 'complete';
        }
        
        this.atStop = false;
        this.boardingProgress = 0;
      }
    }
    
    if (!this.doorOpen) {
      this.boardingProgress = 0;
      this.atStop = false;
    }
    
    this.wasAtStop = atStopNow;
  }
  
  private updateCamera(): void {
    const targetX = this.busX;
    const targetY = 1.65;
    const targetZ = this.busZ;
    
    let camX: number, camY: number, camZ: number;
    let fov: number = 53;
    
    switch (this.cameraMode) {
      case 'chase':
        camX = this.busX - Math.sin(this.busHeading) * 12;
        camY = 6;
        camZ = this.busZ - Math.cos(this.busHeading) * 12;
        break;
      case 'showcase':
        camX = this.busX - Math.sin(this.busHeading) * 8 + 2;
        camY = 3.5;
        camZ = this.busZ - Math.cos(this.busHeading) * 8;
        break;
      case 'cockpit':
        camX = this.busX + Math.sin(this.busHeading) * 3;
        camY = 2.5;
        camZ = this.busZ + Math.cos(this.busHeading) * 3;
        break;
      case 'cinematic':
        const angle = this.elapsed * 0.2;
        camX = this.busX + Math.sin(angle) * 15;
        camY = 8;
        camZ = this.busZ + Math.cos(angle) * 15;
        break;
      case 'stopside':
        if (this.currentStopIndex < this.stops.length) {
          const stop = this.stops[this.currentStopIndex];
          camX = this.busX + 15;
          camY = 4;
          camZ = stop.z;
        } else {
          camX = this.busX - 10;
          camY = 4;
          camZ = this.busZ;
        }
        break;
      default:
        camX = this.busX;
        camY = 6;
        camZ = this.busZ - 12;
    }
    
    this.camera.position.set(camX, camY, camZ);
    this.camera.lookAt(targetX, targetY, targetZ);
    this.camera.fov = fov;
    this.camera.updateProjectionMatrix();
  }
  
  private animate(): void {
    if (this.phase !== 'playing' && this.phase !== 'complete') {
      this.renderer.render(this.scene, this.camera);
      return;
    }
    
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    
    const currentTime = performance.now();
    let dt = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;
    
    // Cap delta time
    if (dt > 0.1) dt = 0.1;
    
    if (this.phase === 'playing') {
      this.elapsed += dt;
      this.accumulator += dt;
      
      while (this.accumulator >= this.fixedStep) {
        this.processInput();
        this.updatePhysics(this.fixedStep);
        this.updateTraffic(this.fixedStep);
        this.updateRoute();
        this.tick++;
        this.accumulator -= this.fixedStep;
      }
    }
    
    this.updateCamera();
    this.renderer.render(this.scene, this.camera);
    this.frame++;
    this.uiUpdates++;
  }
  
  private exposeHooks(): void {
    // __bus hook
    (window as any).__bus = {
      getState: (): BusState => ({
        phase: this.phase,
        speedKph: Math.abs(this.busVelocity) * 3.6,
        position: { x: this.busX, z: this.busZ },
        headingDeg: this.busHeading * (180 / Math.PI),
        doorOpen: this.doorOpen,
        passengerCount: this.onboard,
        nextStopIndex: this.currentStopIndex,
        routeProgress: this.currentStopIndex / this.stops.length,
        fuel: this.fuel,
        score: this.earnings
      })
    };
    
    // __game hook
    (window as any).__game = {
      getState: (): GameState => ({
        phase: this.phase,
        elapsed: this.elapsed,
        paused: this.phase === 'paused',
        missionStatus: this.getMissionStatus(),
        score: this.earnings,
        message: this.getMessage()
      })
    };
    
    // __vehicle hook
    (window as any).__vehicle = {
      getState: (): VehicleState => ({
        id: 'NLX-880',
        type: '12m Luxury Coach',
        position: { x: this.busX, z: this.busZ },
        headingDeg: this.busHeading * (180 / Math.PI),
        speedKph: Math.abs(this.busVelocity) * 3.6,
        velocity: this.busVelocity,
        throttle: this.throttle,
        brake: this.brake,
        steering: this.steering,
        gear: this.gear,
        parkingBrake: this.parkingBrake,
        doorOpen: this.doorOpen,
        headlights: this.headlights,
        indicator: this.indicator,
        hornActive: this.hornActive,
        fuel: this.fuel,
        damage: this.damage,
        odometerKm: this.odometerKm,
        wheelAngle: this.busWheelAngle,
        collisionCount: this.collisionCount,
        lastCollision: this.lastCollision,
        dynamics: { ...this.dynamics }
      })
    };
    
    // __route hook
    (window as any).__route = {
      getState: (): RouteState => {
        const nextStop = this.stops[this.currentStopIndex];
        return {
          name: 'Bandung · Kota Lama · Selatan',
          stopCount: this.stops.length,
          currentStopIndex: this.currentStopIndex,
          stops: this.stops.map(s => ({ ...s })),
          nextStopDistance: nextStop ? Math.abs(this.busZ - nextStop.z) : 0,
          atStop: this.atStop,
          completed: this.routeCompleted,
          earnings: this.earnings,
          service: {
            stopLongitudinalHalfLength: 10.5,
            stopLateralHalfWidth: 4.2,
            boardingDuration: 1.25
          }
        };
      }
    };
    
    // __passengers hook
    (window as any).__passengers = {
      getState: (): PassengersState => ({
        onboard: this.onboard,
        capacity: this.passengerCapacity,
        boardedTotal: this.boardedTotal,
        waitingAtNext: this.waitingAtNext,
        boardingProgress: this.boardingProgress
      })
    };
    
    // __traffic hook
    (window as any).__traffic = {
      getState: (): TrafficState => ({
        count: this.trafficVehicles.length,
        density: this.trafficDensity,
        vehicles: this.trafficVehicles.map(v => ({ ...v }))
      })
    };
    
    // __world hook
    (window as any).__world = {
      getState: (): WorldState => ({
        environment: 'Tropical intercity corridor',
        weather: 'Sunbreak after rain',
        timeOfDay: '16:20',
        roadCenter: 0.33,
        roadHalfWidth: 5.2,
        surface: 'asphalt',
        nearStopMarkers: this.currentStopIndex < this.stops.length ? 1 : 0,
        solidObstacleCount: this.obstacles.length,
        collision: {
          roadEdgeEnabled: true,
          trafficEnabled: true,
          solidObjectsEnabled: true,
          busWidth: 2.55,
          busLength: 8.9
        },
        nearbySolidObstacles: this.obstacles
          .filter(o => Math.abs(o.z - this.busZ) < 100)
          .slice(0, 10)
      })
    };
    
    // __camera hook
    (window as any).__camera = {
      getState: (): CameraState => ({
        mode: this.cameraMode,
        position: { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
        target: { x: this.busX, y: 1.65, z: this.busZ },
        fov: this.camera.fov,
        near: this.camera.near,
        far: this.camera.far,
        modes: ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside']
      })
    };
    
    // __input hook
    (window as any).__input = {
      getState: (): InputState => ({
        pressed: Array.from(this.pressedKeys),
        lastAction: this.lastAction,
        lastPointerType: this.lastPointerType,
        mobileControls: this.mobileControls
      })
    };
    
    // __renderer hook
    (window as any).__renderer = {
      getState: (): RendererState => ({
        backend: 'WebGL',
        contextLost: false,
        frame: this.frame,
        drawCalls: 0,
        canvas: { width: this.renderer.domElement.width, height: this.renderer.domElement.height },
        quality: this.quality,
        pixelRatio: this.qualityProfiles[this.quality].pixelRatio,
        renderDistance: this.qualityProfiles[this.quality].renderDistance,
        webglVersion: 2,
        dynamicLighting: true,
        fog: true,
        antialias: true,
        shadowsEnabled: this.renderer.shadowMap.enabled
      })
    };
    
    // __performance hook
    (window as any).__performance = {
      getState: (): PerformanceState => ({
        elapsed: this.elapsed,
        tick: this.tick,
        frame: this.frame,
        fixedStep: this.fixedStep,
        accumulator: this.accumulator,
        maxSubSteps: 4,
        uiUpdates: this.uiUpdates,
        mounted: this.mounted
      })
    };
    
    // __settings hook
    (window as any).__settings = {
      getState: (): SettingsState => ({
        quality: this.quality,
        masterVolume: 0.8,
        pixelRatio: this.qualityProfiles[this.quality].pixelRatio,
        trafficDensity: this.trafficDensity,
        renderDistance: this.qualityProfiles[this.quality].renderDistance,
        qualityProfiles: { ...this.qualityProfiles }
      })
    };
  }
  
  private getMissionStatus(): string {
    if (this.phase === 'menu') return 'Ready for departure';
    if (this.phase === 'complete') return 'Route completed!';
    if (this.phase === 'paused') return 'Paused';
    if (this.currentStopIndex >= this.stops.length) return 'Route complete!';
    if (this.atStop) return 'Boarding passengers...';
    
    const nextStop = this.stops[this.currentStopIndex];
    const distance = Math.abs(this.busZ - nextStop.z);
    
    if (distance < 50) return 'Approaching ' + nextStop.name;
    return 'En route to ' + nextStop.name;
  }
  
  private getMessage(): string {
    if (this.phase === 'menu') return 'Board the coach and begin the route.';
    if (this.phase === 'complete') return 'Congratulations! You completed the route!';
    if (this.phase === 'paused') return 'Press ESC to resume';
    
    if (this.currentStopIndex < this.stops.length) {
      const stop = this.stops[this.currentStopIndex];
      const distance = Math.abs(this.busZ - stop.z);
      
      if (distance < 20 && !this.atStop) {
        return 'Stop at ' + stop.name + ' and open doors to board passengers.';
      }
    }
    
    return 'Drive safely to the next stop.';
  }
  
  // Public methods for UI controls
  public setTouchControl(control: string, active: boolean): void {
    switch (control) {
      case 'throttle': this.touchThrottle = active; break;
      case 'brake': this.touchBrake = active; break;
      case 'steerLeft': this.touchSteerLeft = active; break;
      case 'steerRight': this.touchSteerRight = active; break;
    }
  }
  
  public toggleDoor(): void {
    if (Math.abs(this.busVelocity) < this.dynamics.doorInterlockSpeedMps) {
      this.doorOpen = !this.doorOpen;
    }
  }
  
  public toggleParkingBrake(): void {
    this.parkingBrake = !this.parkingBrake;
  }
  
  public toggleHeadlights(): void {
    this.headlights = !this.headlights;
  }
  
  public setIndicator(dir: 'off' | 'left' | 'right'): void {
    this.indicator = dir;
  }
  
  public honk(active: boolean): void {
    this.hornActive = active;
  }
  
  public dispose(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.renderer.dispose();
    this.mounted = false;
  }
}