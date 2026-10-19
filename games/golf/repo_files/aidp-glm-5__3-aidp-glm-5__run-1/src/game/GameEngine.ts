import * as THREE from 'three';
import { LevelConfig, LEVEL_CONFIGS, FRICTION_VALUES, Vector3, SurfaceType, PowerupType } from '../types';

export class GameEngine {
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer | null = null;
  private camera: THREE.PerspectiveCamera;
  private ball: THREE.Mesh;
  private hole: THREE.Mesh;
  private ground: THREE.Mesh;
  private obstacles: THREE.Object3D[] = [];
  private powerupMeshes: Map<string, THREE.Mesh> = new Map();
  private surfaceMeshes: THREE.Mesh[] = [];
  
  private ballVelocity: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private ballMoving: boolean = false;
  private currentFriction: number = FRICTION_VALUES.grass;
  private currentSurface: SurfaceType = 'grass';
  
  private levelConfig: LevelConfig | null = null;
  private container: HTMLElement | null = null;
  private animationId: number | null = null;
  
  // Camera follow settings
  private cameraDistance: number = 15;
  private cameraPitch: number = 45;
  private cameraAngle: number = 0;
  
  // Physics state
  private lastSafePosition: THREE.Vector3 = new THREE.Vector3(0, 0.1, 8);
  private inHole: boolean = false;
  private outOfBounds: boolean = false;
  
  // Speed boost effect
  private speedBoostActive: boolean = false;
  private speedBoostDirection: THREE.Vector3 | null = null;
  
  // Bounce pad effect
  private bouncePadContact: string | null = null;

  // Callbacks
  private onHoleComplete: (() => void) | null = null;
  private onPowerupCollect: ((id: string) => void) | null = null;
  private onSurfaceChange: ((surface: SurfaceType, friction: number) => void) | null = null;
  private onSpeedBoost: (() => void) | null = null;

  constructor() {
    this.scene = new THREE.Scene();
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 10, 15);
    this.camera.lookAt(0, 0, 0);
    
    // Create ball
    const ballGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    const ballMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.1
    });
    this.ball = new THREE.Mesh(ballGeometry, ballMaterial);
    this.ball.castShadow = true;
    this.ball.position.set(0, 0.15, 8);
    
    // Create hole
    const holeGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32);
    const holeMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
    this.hole = new THREE.Mesh(holeGeometry, holeMaterial);
    this.hole.position.set(0, -0.05, -8);
    
    // Create ground (default)
    const groundGeometry = new THREE.PlaneGeometry(20, 24);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
    this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);
  }

  init(container: HTMLElement) {
    this.container = container;
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
    
    // Add scene objects
    this.scene.add(this.ground);
    this.scene.add(this.ball);
    this.scene.add(this.hole);
    
    // Handle resize
    window.addEventListener('resize', this.handleResize);
    
    // Set window references
    (window as any).__THREE_SCENE__ = this.scene;
    (window as any).__THREE_RENDERER__ = this.renderer;
    
    // Start render loop
    this.animate();
  }

  private handleResize = () => {
    if (!this.container || !this.renderer) return;
    
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    
    if (this.ballMoving) {
      this.updatePhysics();
    }
    
    this.updateCamera();
    
    if (this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  };

  private updatePhysics() {
    if (!this.levelConfig) return;
    
    const dt = 1 / 60;
    const ballPos = this.ball.position;
    
    // Apply friction
    const frictionFactor = 1 - this.currentFriction;
    this.ballVelocity.multiplyScalar(frictionFactor);
    
    // Apply gravity if airborne (simple version - ball stays on ground)
    
    // Move ball
    ballPos.x += this.ballVelocity.x * dt;
    ballPos.z += this.ballVelocity.z * dt;
    
    // Check surface
    const newSurface = this.getSurfaceAtPosition(ballPos);
    if (newSurface !== this.currentSurface) {
      this.currentSurface = newSurface;
      this.currentFriction = this.levelConfig.frictionMultipliers[newSurface] || FRICTION_VALUES[newSurface];
      this.onSurfaceChange?.(newSurface, this.currentFriction);
    }
    
    // Check bounds
    const bounds = this.levelConfig.bounds;
    if (ballPos.x < bounds.minX || ballPos.x > bounds.maxX ||
        ballPos.z < bounds.minZ || ballPos.z > bounds.maxZ) {
      this.outOfBounds = true;
      // Reset to last safe position
      this.ball.position.copy(this.lastSafePosition);
      this.ballVelocity.set(0, 0, 0);
      this.ballMoving = false;
      return;
    }
    this.outOfBounds = false;
    
    // Check obstacle collisions
    for (const obstacle of this.levelConfig.obstacles) {
      if (!obstacle.solid) continue;
      
      const dx = ballPos.x - obstacle.position.x;
      const dz = ballPos.z - obstacle.position.z;
      const radius = obstacle.radius || 0.5;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < radius + 0.15) {
        // Reflect velocity
        const normal = new THREE.Vector3(dx / dist, 0, dz / dist);
        const dot = this.ballVelocity.dot(normal);
        this.ballVelocity.sub(normal.multiplyScalar(2 * dot));
        this.ballVelocity.multiplyScalar(0.7); // Energy loss on collision
        
        // Push ball out of obstacle
        const pushDist = radius + 0.15 - dist;
        ballPos.x += normal.x * pushDist;
        ballPos.z += normal.z * pushDist;
        
        this.lastCollision = obstacle.id;
      }
    }
    
    // Check hole
    const holePos = this.levelConfig.holePosition;
    const holeRadius = this.levelConfig.holeRadius;
    const distToHole = Math.sqrt(
      (ballPos.x - holePos.x) ** 2 +
      (ballPos.z - holePos.z) ** 2
    );
    
    if (distToHole < holeRadius && this.ballVelocity.length() < 2) {
      // Ball in hole!
      this.inHole = true;
      this.ballMoving = false;
      this.ballVelocity.set(0, 0, 0);
      this.ball.position.set(holePos.x, 0, holePos.z);
      this.onHoleComplete?.();
      return;
    }
    
    // Check powerups
    for (const [id, mesh] of this.powerupMeshes) {
      if (!mesh.visible) continue;
      
      const powerupPos = mesh.position;
      const distToPowerup = Math.sqrt(
        (ballPos.x - powerupPos.x) ** 2 +
        (ballPos.z - powerupPos.z) ** 2
      );
      
      if (distToPowerup < 0.5) {
        mesh.visible = false;
        this.onPowerupCollect?.(id);
      }
    }
    
    // Check speed boost activation
    for (const powerup of this.levelConfig.powerups) {
      if (powerup.type !== 'speed_boost') continue;
      
      const boostPos = powerup.position;
      const distToBoost = Math.sqrt(
        (ballPos.x - boostPos.x) ** 2 +
        (ballPos.z - boostPos.z) ** 2
      );
      
      if (distToBoost < 0.5 && this.ballMoving && !this.speedBoostActive) {
        this.speedBoostActive = true;
        // Apply boost in current direction
        const boostAmount = 5;
        const normalizedVel = this.ballVelocity.clone().normalize();
        this.ballVelocity.add(normalizedVel.multiplyScalar(boostAmount));
        this.onSpeedBoost?.();
      }
    }
    
    // Check bounce pad
    for (const powerup of this.levelConfig.powerups) {
      if (powerup.type !== 'bounce_pad') continue;
      
      const bouncePos = powerup.position;
      const distToBounce = Math.sqrt(
        (ballPos.x - bouncePos.x) ** 2 +
        (ballPos.z - bouncePos.z) ** 2
      );
      
      if (distToBounce < 0.5 && this.bouncePadContact !== powerup.id) {
        this.bouncePadContact = powerup.id;
        // Apply bounce
        if (powerup.direction) {
          const bounceForce = 8;
          this.ballVelocity.x += powerup.direction.x * bounceForce;
          this.ballVelocity.z += powerup.direction.z * bounceForce;
        }
      } else if (distToBounce >= 0.5) {
        this.bouncePadContact = null;
      }
    }
    
    // Update last safe position (when on grass and moving slowly)
    if (this.currentSurface === 'grass' && this.ballVelocity.length() < 5) {
      this.lastSafePosition.copy(ballPos);
    }
    
    // Check if ball stopped
    const speed = this.ballVelocity.length();
    if (speed < 0.01) {
      this.ballMoving = false;
      this.ballVelocity.set(0, 0, 0);
    }
  }

  private getSurfaceAtPosition(pos: THREE.Vector3): SurfaceType {
    if (!this.levelConfig) return 'grass';
    
    for (const surface of this.levelConfig.surfaces) {
      const bounds = surface.bounds;
      if (pos.x >= bounds.minX && pos.x <= bounds.maxX &&
          pos.z >= bounds.minZ && pos.z <= bounds.maxZ) {
        return surface.type;
      }
    }
    
    // Default based on theme
    if (this.levelConfig.theme === 'desert') return 'sand';
    if (this.levelConfig.theme === 'snow') return 'ice';
    return 'grass';
  }

  private updateCamera() {
    // Follow camera
    const ballPos = this.ball.position;
    
    const pitchRad = (this.cameraPitch * Math.PI) / 180;
    const angleRad = (this.cameraAngle * Math.PI) / 180;
    
    const offsetX = Math.sin(angleRad) * this.cameraDistance * Math.cos(pitchRad);
    const offsetZ = Math.cos(angleRad) * this.cameraDistance * Math.cos(pitchRad);
    const offsetY = Math.sin(pitchRad) * this.cameraDistance;
    
    this.camera.position.set(
      ballPos.x + offsetX,
      offsetY,
      ballPos.z + offsetZ
    );
    
    this.camera.lookAt(ballPos.x, ballPos.y, ballPos.z);
  }

  loadLevel(levelId: 'forest' | 'desert' | 'snow') {
    this.levelConfig = LEVEL_CONFIGS[levelId];
    if (!this.levelConfig) return;
    
    // Clear previous level
    this.obstacles.forEach(obj => this.scene.remove(obj));
    this.obstacles = [];
    this.surfaceMeshes.forEach(mesh => this.scene.remove(mesh));
    this.surfaceMeshes = [];
    this.powerupMeshes.forEach(mesh => this.scene.remove(mesh));
    this.powerupMeshes.clear();
    
    // Set background based on theme
    const bgColors: Record<string, number> = {
      forest: 0x87ceeb,
      desert: 0xf4a460,
      snow: 0xe0f7fa,
    };
    this.scene.background = new THREE.Color(bgColors[levelId] || 0x87ceeb);
    
    // Create ground with theme color
    const groundColors: Record<string, number> = {
      forest: 0x228b22,
      desert: 0xd2b48c,
      snow: 0xf0f0f0,
    };
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: groundColors[levelId] || 0x228b22 
    });
    this.ground.material.dispose();
    this.ground.material = groundMaterial;
    
    // Update ground size
    const bounds = this.levelConfig.bounds;
    this.ground.geometry.dispose();
    this.ground.geometry = new THREE.PlaneGeometry(
      bounds.maxX - bounds.minX,
      bounds.maxZ - bounds.minZ
    );
    
    // Create surface regions
    for (const surface of this.levelConfig.surfaces) {
      const geometry = new THREE.PlaneGeometry(
        surface.bounds.maxX - surface.bounds.minX,
        surface.bounds.maxZ - surface.bounds.minZ
      );
      
      const colors: Record<SurfaceType, number> = {
        grass: 0x228b22,
        sand: 0xc2b280,
        ice: 0xb0e0e6,
      };
      
      const material = new THREE.MeshStandardMaterial({ 
        color: colors[surface.type],
        transparent: surface.type === 'ice',
        opacity: surface.type === 'ice' ? 0.7 : 1,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(
        surface.center.x,
        0.01,
        surface.center.z
      );
      mesh.receiveShadow = true;
      
      this.scene.add(mesh);
      this.surfaceMeshes.push(mesh);
    }
    
    // Create obstacles
    for (const obstacle of this.levelConfig.obstacles) {
      const obstacleMesh = this.createObstacle(obstacle.type, obstacle.position);
      if (obstacleMesh) {
        this.scene.add(obstacleMesh);
        this.obstacles.push(obstacleMesh);
      }
    }
    
    // Create powerups
    for (const powerup of this.levelConfig.powerups) {
      const powerupMesh = this.createPowerup(powerup.type, powerup.position);
      if (powerupMesh) {
        powerupMesh.userData.id = powerup.id;
        this.scene.add(powerupMesh);
        this.powerupMeshes.set(powerup.id, powerupMesh);
      }
    }
    
    // Set ball position
    const spawn = this.levelConfig.spawnPoint;
    this.ball.position.set(spawn.x, spawn.y, spawn.z);
    this.lastSafePosition.set(spawn.x, spawn.y, spawn.z);
    this.ballVelocity.set(0, 0, 0);
    this.ballMoving = false;
    this.inHole = false;
    this.outOfBounds = false;
    this.currentSurface = this.getSurfaceAtPosition(this.ball.position);
    this.currentFriction = this.levelConfig.frictionMultipliers[this.currentSurface] || FRICTION_VALUES[this.currentSurface];
    
    // Set hole position
    const holePos = this.levelConfig.holePosition;
    this.hole.position.set(holePos.x, holePos.y - 0.05, holePos.z);
    
    // Add flag
    const poleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.5, 8);
    const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.set(holePos.x, 0.75, holePos.z);
    this.scene.add(pole);
    this.obstacles.push(pole);
    
    const flagGeometry = new THREE.PlaneGeometry(0.4, 0.3);
    const flagMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff0000, 
      side: THREE.DoubleSide 
    });
    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    flag.position.set(holePos.x + 0.2, 1.35, holePos.z);
    this.scene.add(flag);
    this.obstacles.push(flag);
  }

  private createObstacle(type: string, position: Vector3): THREE.Object3D | null {
    let mesh: THREE.Mesh;
    
    switch (type) {
      case 'tree':
        // Tree trunk
        const trunkGeometry = new THREE.CylinderGeometry(0.15, 0.2, 1.5, 8);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        mesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
        mesh.position.set(position.x, 0.75, position.z);
        
        // Tree crown
        const crownGeometry = new THREE.ConeGeometry(1, 2, 8);
        const crownMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
        const crown = new THREE.Mesh(crownGeometry, crownMaterial);
        crown.position.set(position.x, 2.5, position.z);
        this.scene.add(crown);
        this.obstacles.push(crown);
        break;
        
      case 'rock':
        const rockGeometry = new THREE.DodecahedronGeometry(0.5, 0);
        const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
        mesh = new THREE.Mesh(rockGeometry, rockMaterial);
        mesh.position.set(position.x, 0.25, position.z);
        mesh.rotation.set(Math.random(), Math.random(), Math.random());
        break;
        
      case 'dune':
        const duneGeometry = new THREE.SphereGeometry(position.y > 0.2 ? 1.5 : 1.2, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        const duneMaterial = new THREE.MeshStandardMaterial({ color: 0xd2b48c });
        mesh = new THREE.Mesh(duneGeometry, duneMaterial);
        mesh.position.set(position.x, 0, position.z);
        mesh.scale.y = 0.3;
        break;
        
      case 'cactus':
        const cactusGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 8);
        const cactusMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
        mesh = new THREE.Mesh(cactusGeometry, cactusMaterial);
        mesh.position.set(position.x, 0.75, position.z);
        break;
        
      case 'ice_crystal':
        const crystalGeometry = new THREE.OctahedronGeometry(0.4, 0);
        const crystalMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x87ceeb,
          transparent: true,
          opacity: 0.8
        });
        mesh = new THREE.Mesh(crystalGeometry, crystalMaterial);
        mesh.position.set(position.x, 0.4, position.z);
        mesh.rotation.set(Math.random(), Math.random(), Math.random());
        break;
        
      case 'snowman':
        // Body
        const bodyGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const snowMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        mesh = new THREE.Mesh(bodyGeometry, snowMaterial);
        mesh.position.set(position.x, 0.5, position.z);
        
        // Head
        const headGeometry = new THREE.SphereGeometry(0.35, 16, 16);
        const head = new THREE.Mesh(headGeometry, snowMaterial);
        head.position.set(position.x, 1.15, position.z);
        this.scene.add(head);
        this.obstacles.push(head);
        break;
        
      default:
        // Default obstacle
        const defaultGeometry = new THREE.BoxGeometry(1, 1, 1);
        const defaultMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
        mesh = new THREE.Mesh(defaultGeometry, defaultMaterial);
        mesh.position.set(position.x, 0.5, position.z);
    }
    
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  private createPowerup(type: PowerupType, position: Vector3): THREE.Mesh | null {
    let geometry: THREE.BufferGeometry;
    let color: number;
    
    switch (type) {
      case 'bounce_pad':
        geometry = new THREE.BoxGeometry(0.8, 0.1, 0.8);
        color = 0xff6b6b;
        break;
      case 'speed_boost':
        geometry = new THREE.ConeGeometry(0.3, 0.5, 8);
        color = 0x4ecdc4;
        break;
      case 'hole_in_one':
        geometry = new THREE.OctahedronGeometry(0.3, 0);
        color = 0xffd700;
        break;
      default:
        geometry = new THREE.SphereGeometry(0.3, 16, 16);
        color = 0xffffff;
    }
    
    const material = new THREE.MeshStandardMaterial({ 
      color,
      emissive: color,
      emissiveIntensity: 0.3,
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position.x, position.y + 0.2, position.z);
    mesh.castShadow = true;
    
    return mesh;
  }

  shoot(direction: { x: number; z: number }, power: number, holeInOne: boolean = false) {
    if (this.ballMoving) return;
    
    if (holeInOne) {
      // One shot to hole
      if (this.levelConfig) {
        const holePos = this.levelConfig.holePosition;
        this.ballVelocity.set(holePos.x - this.ball.position.x, 0, holePos.z - this.ball.position.z);
        this.ballVelocity.normalize().multiplyScalar(10);
      }
    } else {
      this.ballVelocity.set(direction.x * power, 0, direction.z * power);
    }
    
    this.ballMoving = true;
    this.inHole = false;
  }

  setBallPosition(position: Vector3) {
    this.ball.position.set(position.x, position.y || 0.15, position.z);
    this.lastSafePosition.set(position.x, position.y || 0.15, position.z);
  }

  resetBall() {
    if (this.levelConfig) {
      const spawn = this.levelConfig.spawnPoint;
      this.ball.position.set(spawn.x, spawn.y, spawn.z);
      this.lastSafePosition.set(spawn.x, spawn.y, spawn.z);
      this.ballVelocity.set(0, 0, 0);
      this.ballMoving = false;
      this.inHole = false;
      this.outOfBounds = false;
    }
  }

  zoomIn() {
    this.cameraDistance = Math.max(5, this.cameraDistance - 2);
  }

  zoomOut() {
    this.cameraDistance = Math.min(30, this.cameraDistance + 2);
  }

  setCameraDistance(distance: number) {
    this.cameraDistance = Math.max(5, Math.min(30, distance));
  }

  rotateCamera(delta: number) {
    this.cameraAngle += delta;
  }

  getBallState() {
    return {
      position: {
        x: this.ball.position.x,
        y: this.ball.position.y,
        z: this.ball.position.z,
      },
      velocity: {
        x: this.ballVelocity.x,
        y: this.ballVelocity.y,
        z: this.ballVelocity.z,
      },
      speed: this.ballVelocity.length(),
      moving: this.ballMoving,
      inHole: this.inHole,
      outOfBounds: this.outOfBounds,
      currentSurface: this.currentSurface,
      friction: this.currentFriction,
    };
  }

  isInHole() {
    return this.inHole;
  }

  isMoving() {
    return this.ballMoving;
  }

  isOutOfBounds() {
    return this.outOfBounds;
  }

  setOnHoleComplete(callback: () => void) {
    this.onHoleComplete = callback;
  }

  setOnPowerupCollect(callback: (id: string) => void) {
    this.onPowerupCollect = callback;
  }

  setOnSurfaceChange(callback: (surface: SurfaceType, friction: number) => void) {
    this.onSurfaceChange = callback;
  }

  private lastCollision: string | null = null;

  getLastCollision() {
    return this.lastCollision;
  }

  clearPowerups() {
    this.powerupMeshes.forEach((_, id) => {
      // Mark as collected for state
    });
  }

  collectPowerup(id: string) {
    const mesh = this.powerupMeshes.get(id);
    if (mesh) {
      mesh.visible = false;
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    window.removeEventListener('resize', this.handleResize);
    
    if (this.renderer) {
      this.renderer.dispose();
      if (this.container && this.renderer.domElement.parentNode === this.container) {
        this.container.removeChild(this.renderer.domElement);
      }
    }
    
    // Clear scene
    this.scene.clear();
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

export function destroyGameEngine() {
  if (gameEngineInstance) {
    gameEngineInstance.destroy();
    gameEngineInstance = null;
  }
}