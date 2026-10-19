import * as THREE from 'three';

export type MovementState = 'idle' | 'moving' | 'jumping' | 'falling' | 'swinging';

export type HudSnapshot = {
  speed: number;
  altitude: number;
  verticalSpeed: number;
  attached: boolean;
  targetValid: boolean;
  targetDistance: number | null;
  movementState: MovementState;
  heading: number;
  ready: boolean;
  tension: number;
  ropeLength: number | null;
  playerX: number;
  playerZ: number;
};

type BuildingRecord = {
  id: string;
  mesh: THREE.Mesh;
  box: THREE.Box3;
};

type BuildingHit = {
  point: THREE.Vector3;
  normal: THREE.Vector3;
  objectId: string;
  distance: number;
};

const clamp = THREE.MathUtils.clamp;
const FIXED_DT = 1 / 120;
const GRAVITY = 25.5;
const WEB_ORIGIN_Y = 1.42;
const COLLISION_SKIN = 0.01;
const MAX_COLLISION_ITERATIONS = 8;
const ZERO2 = new THREE.Vector2(0, 0);

class RNG {
  private seed: number;
  constructor(seed = 91741) { this.seed = seed >>> 0; }
  next() {
    this.seed = (1664525 * this.seed + 1013904223) >>> 0;
    return this.seed / 4294967296;
  }
  range(min: number, max: number) { return min + (max - min) * this.next(); }
}

function moveToward(current: number, target: number, maxDelta: number) {
  if (Math.abs(target - current) <= maxDelta) return target;
  return current + Math.sign(target - current) * maxDelta;
}

export class GameEngine {
  private container: HTMLElement;
  private onHud: (snapshot: HudSnapshot) => void;

  private scene = new THREE.Scene();
  private renderer: THREE.WebGLRenderer;
  private camera = new THREE.PerspectiveCamera(68, 1, 0.08, 1300);
  private clock = new THREE.Clock();
  private raf = 0;
  private elapsedTime = 0;
  private lastHudAt = -1;
  private accumulator = 0;
  private ready = false;
  private running = false;
  private disposed = false;

  private groundY = 0;
  private buildings: BuildingRecord[] = [];
  private buildingMeshes: THREE.Mesh[] = [];
  private collisionGrid = new Map<string, BuildingRecord[]>();
  private readonly collisionCellSize = 48;
  private webRaycaster = new THREE.Raycaster();
  private webAnchorRaycaster = new THREE.Raycaster();
  private cameraRaycaster = new THREE.Raycaster();
  private currentTarget: BuildingHit | null = null;

  private playerRoot = new THREE.Group();
  private playerVisual = new THREE.Group();
  private playerPosition = new THREE.Vector3(0, 0, 12);
  private playerVelocity = new THREE.Vector3(0, 0, 0);
  private collider = { radius: 0.58, height: 1.86 };
  private grounded = true;
  private movementState: MovementState = 'idle';
  private lastFacingYaw = 0;
  private leftArmPivot = new THREE.Group();
  private rightArmPivot = new THREE.Group();
  private leftLegPivot = new THREE.Group();
  private rightLegPivot = new THREE.Group();
  private coyoteTime = 0;
  private jumpBuffer = 0;

  private yaw = 0;
  private pitch = -0.45;
  private cameraTarget = new THREE.Vector3();
  private keys = new Set<string>();
  private mouseDown = false;

  private webAttached = false;
  private webAnchor: THREE.Vector3 | null = null;
  private webAnchorObjectId: string | null = null;
  private ropeLength: number | null = null;
  private webTension = 0;
  private webLine: THREE.Line;
  private webCore: THREE.Mesh;
  private anchorGlow: THREE.Mesh;
  private targetRing: THREE.Mesh;

  private moon = new THREE.Mesh(
    new THREE.SphereGeometry(8, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0xdce8ff, transparent: true, opacity: 1 }),
  );
  private keyLight = new THREE.DirectionalLight(0xaec8ff, 2.1);
  private fillLight = new THREE.HemisphereLight(0x6c8dcc, 0x10131a, 1.15);

  constructor(container: HTMLElement, onHud: (snapshot: HudSnapshot) => void) {
    this.container = container;
    this.onHud = onHud;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.domElement.dataset.testid = 'game-canvas';
    this.renderer.domElement.setAttribute('aria-label', '3D web swinging game canvas');
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.display = 'block';
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    this.webLine = new THREE.Line(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: 0xf5fdff, transparent: true, opacity: 0.98 }),
    );
    this.webLine.frustumCulled = false;
    this.webLine.visible = false;
    this.scene.add(this.webLine);

    this.webCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.026, 0.026, 1, 7, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.55 }),
    );
    this.webCore.frustumCulled = false;
    this.webCore.visible = false;
    this.scene.add(this.webCore);

    this.anchorGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xb7f3ff, transparent: true, opacity: 0.9 }),
    );
    this.anchorGlow.visible = false;
    this.scene.add(this.anchorGlow);

    this.targetRing = new THREE.Mesh(
      new THREE.RingGeometry(0.28, 0.40, 24),
      new THREE.MeshBasicMaterial({ color: 0x8ef4cf, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthTest: true }),
    );
    this.targetRing.visible = false;
    this.scene.add(this.targetRing);

    this.initScene();
    this.installInputs();
    this.installStateInterfaces();
    this.resize();
    window.addEventListener('resize', this.resize);

    this.ready = true;
    this.clock.start();
    this.raf = requestAnimationFrame(this.frame);
  }

  private initScene() {
    this.scene.background = new THREE.Color(0x050914);
    this.scene.fog = new THREE.FogExp2(0x07101f, 0.00175);

    this.createSkyDome();
    this.scene.add(this.fillLight);
    this.keyLight.position.set(-70, 120, 60);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(2048, 2048);
    this.keyLight.shadow.camera.left = -130;
    this.keyLight.shadow.camera.right = 130;
    this.keyLight.shadow.camera.top = 130;
    this.keyLight.shadow.camera.bottom = -130;
    this.keyLight.shadow.camera.far = 340;
    this.keyLight.shadow.bias = -0.0002;
    this.scene.add(this.keyLight);

    const rim = new THREE.DirectionalLight(0xff667e, 0.72);
    rim.position.set(110, 55, -90);
    this.scene.add(rim);

    this.moon.position.set(150, 180, -260);
    this.scene.add(this.moon);

    this.createStars();
    this.createGround();
    this.createCity();
    this.createPlayer();

    this.playerRoot.position.copy(this.playerPosition);
    this.cameraTarget.copy(this.playerPosition).add(new THREE.Vector3(0, 1.3, 0));
    this.camera.position.set(0, 5.8, 20.5);
    this.camera.lookAt(this.cameraTarget);
  }

  private createSkyDome() {
    const geometry = new THREE.SphereGeometry(700, 32, 16);
    const material = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x0e2852) },
        bottomColor: { value: new THREE.Color(0x02040a) },
        offset: { value: 45.0 },
        exponent: { value: 0.85 },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
          float f = pow(max(h, 0.0), exponent);
          gl_FragColor = vec4(mix(bottomColor, topColor, f), 1.0);
        }
      `,
    });
    const sky = new THREE.Mesh(geometry, material);
    this.scene.add(sky);
  }

  private createStars() {
    const rng = new RNG(4419);
    const points: number[] = [];
    for (let i = 0; i < 1100; i += 1) {
      const r = rng.range(280, 610);
      const theta = rng.range(0, Math.PI * 2);
      const phi = rng.range(0.10, Math.PI * 0.46);
      points.push(
        Math.cos(theta) * Math.cos(phi) * r,
        Math.sin(phi) * r + 45,
        Math.sin(theta) * Math.cos(phi) * r,
      );
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const stars = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0xc7d7ff, size: 0.82, sizeAttenuation: true, transparent: true, opacity: 0.72 }),
    );
    this.scene.add(stars);
  }

  private createGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(620, 620),
      new THREE.MeshStandardMaterial({ color: 0x151a22, roughness: 0.96, metalness: 0.02 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x070a0f, roughness: 0.98, metalness: 0.01 });
    const curbMaterial = new THREE.MeshStandardMaterial({ color: 0x222a34, roughness: 0.9 });
    const stripeMaterial = new THREE.MeshBasicMaterial({ color: 0xe5b16d, transparent: true, opacity: 0.38 });
    const laneMaterial = new THREE.MeshBasicMaterial({ color: 0xd8dee9, transparent: true, opacity: 0.18 });

    for (let i = -7; i <= 7; i += 1) {
      const coord = i * 38;
      const roadX = new THREE.Mesh(new THREE.PlaneGeometry(9.8, 590), roadMaterial);
      roadX.rotation.x = -Math.PI / 2;
      roadX.position.set(coord, 0.018, 0);
      this.scene.add(roadX);

      const roadZ = new THREE.Mesh(new THREE.PlaneGeometry(590, 9.8), roadMaterial);
      roadZ.rotation.x = -Math.PI / 2;
      roadZ.position.set(0, 0.019, coord);
      this.scene.add(roadZ);

      for (const offset of [-5.7, 5.7]) {
        const curbX = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 590), curbMaterial);
        curbX.position.set(coord + offset, 0.06, 0);
        this.scene.add(curbX);
        const curbZ = new THREE.Mesh(new THREE.BoxGeometry(590, 0.12, 0.35), curbMaterial);
        curbZ.position.set(0, 0.061, coord + offset);
        this.scene.add(curbZ);
      }

      const stripeX = new THREE.Mesh(new THREE.PlaneGeometry(0.11, 590), stripeMaterial);
      stripeX.rotation.x = -Math.PI / 2;
      stripeX.position.set(coord, 0.027, 0);
      this.scene.add(stripeX);

      const stripeZ = new THREE.Mesh(new THREE.PlaneGeometry(590, 0.11), stripeMaterial);
      stripeZ.rotation.x = -Math.PI / 2;
      stripeZ.position.set(0, 0.028, coord);
      this.scene.add(stripeZ);

      const laneX = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 590), laneMaterial);
      laneX.rotation.x = -Math.PI / 2;
      laneX.position.set(coord + 2.5, 0.029, 0);
      this.scene.add(laneX);
      const laneZ = new THREE.Mesh(new THREE.PlaneGeometry(590, 0.06), laneMaterial);
      laneZ.rotation.x = -Math.PI / 2;
      laneZ.position.set(0, 0.030, coord + 2.5);
      this.scene.add(laneZ);
    }

    this.createCrosswalk(0, 0);
    this.createCrosswalk(38, -38);
    this.createCrosswalk(-76, 76);
  }

  private createCrosswalk(x: number, z: number) {
    const material = new THREE.MeshBasicMaterial({ color: 0xe9eef8, transparent: true, opacity: 0.20 });
    for (let i = -4; i <= 4; i += 1) {
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 5.6), material);
      strip.rotation.x = -Math.PI / 2;
      strip.position.set(x + i * 1.15, 0.035, z);
      this.scene.add(strip);
    }
  }

  private createCity() {
    const rng = new RNG(31203);
    const palette = [0x1b2b3d, 0x273245, 0x293b45, 0x3a3044, 0x263940, 0x343b46, 0x223248];
    const reservedFootprints = [
      { x: -28, z: -30, w: 15, d: 15 },
      { x: 28, z: -34, w: 16, d: 16 },
      { x: 0, z: -82, w: 18, d: 18 },
      { x: 72, z: 18, w: 20, d: 20 },
      { x: 98, z: 18, w: 18, d: 18 },
      { x: -92, z: 55, w: 16, d: 22 },
      { x: -64, z: 55, w: 16, d: 22 },
    ];
    const overlapsReserved = (x: number, z: number, w: number, d: number) => reservedFootprints.some((reserved) => {
      const margin = 3.0;
      return Math.abs(x - reserved.x) < (w + reserved.w) * 0.5 + margin
        && Math.abs(z - reserved.z) < (d + reserved.d) * 0.5 + margin;
    });

    for (let gx = -6; gx <= 6; gx += 1) {
      for (let gz = -6; gz <= 6; gz += 1) {
        if (Math.abs(gx) <= 1 && Math.abs(gz) <= 1) continue;
        if ((gx + gz) % 11 === 0) continue;

        const centerX = gx * 38 + rng.range(-1.6, 1.6);
        const centerZ = gz * 38 + rng.range(-1.6, 1.6);
        const radial = Math.hypot(gx, gz);
        const w = rng.range(15, 24);
        const d = rng.range(15, 24);
        let h = rng.range(20, 60) + Math.max(0, 5 - radial) * rng.range(2.4, 6.5);
        if (rng.next() > 0.88) h *= 1.42;
        if (overlapsReserved(centerX, centerZ, w, d)) continue;

        this.addBuilding({
          id: `block-${gx + 6}-${gz + 6}`,
          x: centerX,
          z: centerZ,
          w,
          d,
          h,
          color: palette[Math.floor(rng.next() * palette.length)],
          windowSeed: Math.floor(rng.next() * 10000),
          crownStyle: rng.next(),
        });
      }
    }

    this.addBuilding({ id: 'starter-left', x: -28, z: -30, w: 15, d: 15, h: 56, color: 0x21455c, windowSeed: 88, crownStyle: 0.95 });
    this.addBuilding({ id: 'starter-right', x: 28, z: -34, w: 16, d: 16, h: 68, color: 0x493348, windowSeed: 89, crownStyle: 0.82 });
    this.addBuilding({ id: 'landmark-sol-needle', x: 0, z: -82, w: 18, d: 18, h: 132, color: 0x1b3148, windowSeed: 101, crownStyle: 1 });
    this.addBuilding({ id: 'landmark-twin-prism-a', x: 72, z: 18, w: 20, d: 20, h: 94, color: 0x392d49, windowSeed: 102, crownStyle: 0.91 });
    this.addBuilding({ id: 'landmark-twin-prism-b', x: 98, z: 18, w: 18, d: 18, h: 76, color: 0x21384d, windowSeed: 103, crownStyle: 0.68 });
    this.addBuilding({ id: 'landmark-civic-gate-left', x: -92, z: 55, w: 16, d: 22, h: 52, color: 0x383b48, windowSeed: 104, crownStyle: 0.35 });
    this.addBuilding({ id: 'landmark-civic-gate-right', x: -64, z: 55, w: 16, d: 22, h: 52, color: 0x383b48, windowSeed: 105, crownStyle: 0.35 });

    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff5f79, transparent: true, opacity: 0.92 });
    const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.50, 12, 10), beaconMat);
    beacon.position.set(0, 138, -82);
    this.scene.add(beacon);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(5.2, 0.14, 8, 40),
      new THREE.MeshBasicMaterial({ color: 0x6fdcff, transparent: true, opacity: 0.58 }),
    );
    halo.rotation.x = Math.PI / 2;
    halo.position.set(0, 130, -82);
    this.scene.add(halo);

    this.createStreetGlow();
  }

  private createFacadeTexture(baseColor: number, seed: number) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const base = new THREE.Color(baseColor);
    ctx.fillStyle = `#${base.getHexString()}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const rng = new RNG(seed);
    ctx.fillStyle = 'rgba(0,0,0,.16)';
    for (let y = 0; y < 128; y += 16) ctx.fillRect(0, y, 64, 1);
    for (let x = 0; x < 64; x += 16) ctx.fillRect(x, 0, 1, 128);

    for (let y = 7; y < 124; y += 13) {
      for (let x = 5; x < 61; x += 10) {
        if (rng.next() < 0.35) continue;
        const warm = rng.next() > 0.34;
        const alpha = rng.range(0.25, 0.72);
        ctx.fillStyle = warm ? `rgba(255,199,112,${alpha})` : `rgba(104,195,255,${alpha * 0.8})`;
        ctx.fillRect(x, y, 4, 5);
      }
    }

    ctx.fillStyle = 'rgba(255,255,255,.025)';
    ctx.fillRect(0, 0, 5, 128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  }

  private addBuilding(args: { id: string; x: number; z: number; w: number; d: number; h: number; color: number; windowSeed: number; crownStyle: number }) {
    const { id, x, z, w, d, h, color, windowSeed, crownStyle } = args;
    const geometry = new THREE.BoxGeometry(w, h, d);
    const facade = this.createFacadeTexture(color, windowSeed);
    if (facade) facade.repeat.set(Math.max(1, w / 14), Math.max(1.2, h / 30));

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: facade ?? undefined,
      roughness: 0.66,
      metalness: 0.10,
      emissive: new THREE.Color(color).multiplyScalar(0.055),
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = id;
    mesh.userData.buildingId = id;
    mesh.position.set(x, h / 2, z);
    mesh.castShadow = h > 78;
    mesh.receiveShadow = true;
    this.scene.add(mesh);

    const box = new THREE.Box3(
      new THREE.Vector3(x - w / 2, 0, z - d / 2),
      new THREE.Vector3(x + w / 2, h, z + d / 2),
    );
    const record = { id, mesh, box };
    this.buildings.push(record);
    this.buildingMeshes.push(mesh);
    this.indexBuilding(record);

    const edge = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry, 18),
      new THREE.LineBasicMaterial({ color: 0x8aa6c8, transparent: true, opacity: 0.12 }),
    );
    mesh.add(edge);

    if (h > 42 && crownStyle > 0.48) {
      const crownH = crownStyle > 0.86 ? 2.2 : 1.0;
      const crown = new THREE.Mesh(
        new THREE.BoxGeometry(w * (crownStyle > 0.86 ? 0.56 : 0.72), crownH, d * (crownStyle > 0.86 ? 0.56 : 0.72)),
        new THREE.MeshStandardMaterial({
          color: crownStyle > 0.82 ? 0x315f74 : 0x303944,
          emissive: crownStyle > 0.82 ? 0x113d50 : 0x10151d,
          roughness: 0.55,
        }),
      );
      crown.position.y = h / 2 + crownH / 2;
      mesh.add(crown);
    }

    if (h > 72 && crownStyle > 0.72) {
      const antenna = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.14, Math.min(8, h * 0.08), 7),
        new THREE.MeshBasicMaterial({ color: 0x819bb0 }),
      );
      antenna.position.y = h / 2 + 4;
      mesh.add(antenna);
    }
  }

  private createStreetGlow() {
    const rng = new RNG(8411);
    const points: number[] = [];
    for (let i = 0; i < 180; i += 1) {
      const alongX = rng.next() > 0.5;
      const road = Math.round(rng.range(-7, 7)) * 38;
      const travel = rng.range(-270, 270);
      const side = rng.next() > 0.5 ? 4.7 : -4.7;
      points.push(alongX ? road + side : travel, 0.42, alongX ? travel : road + side);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const lights = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0xffbd72, size: 0.62, sizeAttenuation: true, transparent: true, opacity: 0.68 }),
    );
    this.scene.add(lights);
  }

  private createPlayer() {
    const crimson = new THREE.MeshStandardMaterial({ color: 0xb7263e, roughness: 0.42, metalness: 0.10 });
    const navy = new THREE.MeshStandardMaterial({ color: 0x112f52, roughness: 0.46, metalness: 0.12 });
    const graphite = new THREE.MeshStandardMaterial({ color: 0x0d131d, roughness: 0.62 });
    const eye = new THREE.MeshBasicMaterial({ color: 0xcff8ff });
    const accent = new THREE.MeshBasicMaterial({ color: 0x65d8ff, transparent: true, opacity: 0.62 });

    this.playerRoot.add(this.playerVisual);
    this.scene.add(this.playerRoot);

    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.65, 6, 12), crimson);
    torso.position.y = 1.15;
    torso.scale.z = 0.74;
    torso.castShadow = true;
    this.playerVisual.add(torso);

    const chestMark = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.42, 0.025), accent);
    chestMark.position.set(0, 1.23, -0.36);
    chestMark.rotation.z = 0.08;
    this.playerVisual.add(chestMark);

    const waist = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.34, 4, 10), navy);
    waist.position.y = 0.70;
    waist.scale.z = 0.8;
    waist.castShadow = true;
    this.playerVisual.add(waist);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 18, 14), crimson);
    head.position.y = 1.82;
    head.scale.set(0.92, 1.08, 0.88);
    head.castShadow = true;
    this.playerVisual.add(head);

    const eyeGeo = new THREE.PlaneGeometry(0.10, 0.19);
    const eyeL = new THREE.Mesh(eyeGeo, eye);
    eyeL.position.set(-0.12, 1.85, -0.272);
    eyeL.rotation.x = -0.07;
    eyeL.rotation.z = -0.14;
    this.playerVisual.add(eyeL);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.12;
    eyeR.rotation.z = 0.14;
    this.playerVisual.add(eyeR);

    const armGeo = new THREE.CapsuleGeometry(0.12, 0.58, 4, 8);
    const handGeo = new THREE.SphereGeometry(0.14, 10, 8);
    const legGeo = new THREE.CapsuleGeometry(0.145, 0.62, 4, 8);
    const footGeo = new THREE.BoxGeometry(0.25, 0.16, 0.42);

    const makeArm = (pivot: THREE.Group, x: number) => {
      pivot.position.set(x, 1.45, 0);
      this.playerVisual.add(pivot);
      const arm = new THREE.Mesh(armGeo, navy);
      arm.position.y = -0.36;
      arm.castShadow = true;
      pivot.add(arm);
      const hand = new THREE.Mesh(handGeo, crimson);
      hand.position.y = -0.75;
      pivot.add(hand);
    };
    makeArm(this.leftArmPivot, -0.48);
    makeArm(this.rightArmPivot, 0.48);

    const makeLeg = (pivot: THREE.Group, x: number) => {
      pivot.position.set(x, 0.66, 0);
      this.playerVisual.add(pivot);
      const leg = new THREE.Mesh(legGeo, navy);
      leg.position.y = -0.34;
      leg.castShadow = true;
      pivot.add(leg);
      const boot = new THREE.Mesh(footGeo, graphite);
      boot.position.set(0, -0.72, -0.09);
      pivot.add(boot);
    };
    makeLeg(this.leftLegPivot, -0.22);
    makeLeg(this.rightLegPivot, 0.22);
  }

  private installInputs() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('blur', this.onWindowBlur);
    document.addEventListener('pointerlockchange', this.onPointerLockChange);
    this.renderer.domElement.addEventListener('mousedown', this.onMouseDown);
    this.renderer.domElement.addEventListener('contextmenu', this.onContextMenu);
  }

  private removeInputs() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('blur', this.onWindowBlur);
    document.removeEventListener('pointerlockchange', this.onPointerLockChange);
    this.renderer.domElement.removeEventListener('mousedown', this.onMouseDown);
    this.renderer.domElement.removeEventListener('contextmenu', this.onContextMenu);
  }

  private onContextMenu = (event: MouseEvent) => event.preventDefault();

  private onWindowBlur = () => {
    this.mouseDown = false;
    this.keys.clear();
    this.jumpBuffer = 0;
    this.detachWeb();
  };

  private onPointerLockChange = () => {
    if (document.pointerLockElement !== this.renderer.domElement) {
      this.onWindowBlur();
    }
  };

  private onKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'KeyR' && !event.repeat) {
      this.resetPlayer();
      return;
    }
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'].includes(event.code)) event.preventDefault();
    this.keys.add(event.code);
    if (event.code === 'Space' && !event.repeat) this.jumpBuffer = Math.max(this.jumpBuffer, 0.16);
  };

  private onKeyUp = (event: KeyboardEvent) => {
    this.keys.delete(event.code);
  };

  private onMouseMove = (event: MouseEvent) => {
    if (document.pointerLockElement !== this.renderer.domElement) return;
    this.yaw -= event.movementX * 0.00195;
    this.pitch = clamp(this.pitch - event.movementY * 0.0019, -0.70, Math.PI / 4);
  };

  private onMouseDown = (event: MouseEvent) => {
    if (event.button !== 0) return;
    if (document.pointerLockElement !== this.renderer.domElement) {
      void this.renderer.domElement.requestPointerLock();
      return;
    }
    this.mouseDown = true;
    this.updateWebTarget();
    this.tryAttachWeb();
  };

  private onMouseUp = (event: MouseEvent) => {
    if (event.button !== 0) return;
    this.mouseDown = false;
    this.detachWeb();
  };

  private installStateInterfaces() {
    window.__game = {
      getState: () => ({
        ready: this.ready,
        running: this.running,
        elapsedTime: this.elapsedTime,
        renderer: 'webgl' as const,
        viewport: {
          width: this.renderer.domElement.clientWidth,
          height: this.renderer.domElement.clientHeight,
        },
      }),
    };

    window.__player = {
      getState: () => ({
        position: this.vecObject(this.playerPosition),
        velocity: this.vecObject(this.playerVelocity),
        grounded: this.grounded,
        movementState: this.movementState,
        collider: { ...this.collider },
      }),
    };

    window.__camera = {
      getState: () => {
        const direction = new THREE.Vector3();
        this.camera.getWorldDirection(direction);
        return {
          mode: 'third-person' as const,
          position: this.vecObject(this.camera.position),
          target: this.vecObject(this.cameraTarget),
          yaw: Math.atan2(direction.x, -direction.z),
          pitch: Math.asin(clamp(direction.y, -1, 1)),
        };
      },
    };

    window.__web = {
      getState: () => {
        const endpoint = this.getWebPlayerEndpoint();
        return {
          attached: this.webAttached,
          targetValid: this.currentTarget !== null,
          anchor: this.webAttached && this.webAnchor ? this.vecObject(this.webAnchor) : null,
          anchorObjectId: this.webAttached ? this.webAnchorObjectId : null,
          ropeLength: this.webAttached ? this.ropeLength : null,
          distanceToAnchor: this.webAttached && this.webAnchor ? endpoint.distanceTo(this.webAnchor) : null,
          lineVisible: this.webAttached && this.webLine.visible,
          playerEndpoint: this.webAttached ? this.vecObject(endpoint) : null,
          anchorEndpoint: this.webAttached && this.webAnchor ? this.vecObject(this.webAnchor) : null,
        };
      },
    };

    window.__world = {
      getState: () => ({
        groundY: this.groundY,
        buildings: this.buildings.map((building) => ({
          id: building.id,
          min: this.vecObject(building.box.min),
          max: this.vecObject(building.box.max),
        })),
      }),
    };
  }

  private vecObject(v: THREE.Vector3) {
    return { x: v.x, y: v.y, z: v.z };
  }

  private resize = () => {
    const width = Math.max(1, this.container.clientWidth);
    const height = Math.max(1, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  private frame = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.frame);

    const realDt = Math.min(this.clock.getDelta(), 0.05);
    this.elapsedTime += realDt;
    this.accumulator = Math.min(this.accumulator + realDt, 0.12);

    while (this.accumulator >= FIXED_DT) {
      this.physicsStep(FIXED_DT);
      this.accumulator -= FIXED_DT;
    }

    this.updateVisuals(realDt);
    this.updateCamera(realDt);
    this.updateWebTarget();
    if (this.mouseDown && !this.webAttached && this.currentTarget && document.pointerLockElement === this.renderer.domElement) {
      this.tryAttachWeb();
    }
    this.updateWebLine();
    this.updateTargetIndicator(realDt);
    this.updateLighting();

    this.renderer.render(this.scene, this.camera);
    this.running = true;

    if (this.elapsedTime - this.lastHudAt > 0.06) {
      this.lastHudAt = this.elapsedTime;
      this.onHud(this.getHudSnapshot());
    }
  };

  private physicsStep(dt: number) {
    const forward = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, Math.sin(this.yaw));
    const desired = new THREE.Vector3();
    if (this.keys.has('KeyW')) desired.add(forward);
    if (this.keys.has('KeyS')) desired.sub(forward);
    if (this.keys.has('KeyD')) desired.add(right);
    if (this.keys.has('KeyA')) desired.sub(right);
    if (desired.lengthSq() > 0) desired.normalize();

    this.jumpBuffer = Math.max(0, this.jumpBuffer - dt);
    if (this.grounded) this.coyoteTime = 0.11;
    else this.coyoteTime = Math.max(0, this.coyoteTime - dt);

    if (this.jumpBuffer > 0 && this.coyoteTime > 0 && !this.webAttached) {
      this.playerVelocity.y = 11.7;
      this.grounded = false;
      this.coyoteTime = 0;
      this.jumpBuffer = 0;
    }

    const horizontal = new THREE.Vector3(this.playerVelocity.x, 0, this.playerVelocity.z);
    if (this.grounded) {
      const targetSpeed = desired.lengthSq() > 0 ? 14.2 : 0;
      const targetX = desired.x * targetSpeed;
      const targetZ = desired.z * targetSpeed;
      const accel = desired.lengthSq() > 0 ? 48 : 34;
      horizontal.x = moveToward(horizontal.x, targetX, accel * dt);
      horizontal.z = moveToward(horizontal.z, targetZ, accel * dt);
    } else if (desired.lengthSq() > 0) {
      let steering = desired.clone();
      let accel = this.webAttached ? 13.5 : 8.8;
      if (this.webAttached && this.webAnchor) {
        const radial = this.getWebPlayerEndpoint().sub(this.webAnchor).normalize();
        steering.addScaledVector(radial, -steering.dot(radial));
        if (steering.lengthSq() > 0.0001) steering.normalize();
        accel = 15.0;
      }
      horizontal.addScaledVector(steering, accel * dt);
      const maxAir = this.webAttached ? 56 : 25;
      if (horizontal.length() > maxAir) horizontal.setLength(maxAir);
    }
    this.playerVelocity.x = horizontal.x;
    this.playerVelocity.z = horizontal.z;

    this.playerVelocity.y -= GRAVITY * dt;
    this.playerVelocity.y = Math.max(this.playerVelocity.y, -52);

    this.moveAndCollide(dt);
    this.applyWebConstraint(dt);
    this.constrainWorldBounds();
    this.updateMovementState();
  }

  private collisionCellKey(x: number, z: number) {
    return `${x}:${z}`;
  }

  private indexBuilding(building: BuildingRecord) {
    const size = this.collisionCellSize;
    const minCellX = Math.floor(building.box.min.x / size);
    const maxCellX = Math.floor(building.box.max.x / size);
    const minCellZ = Math.floor(building.box.min.z / size);
    const maxCellZ = Math.floor(building.box.max.z / size);

    for (let x = minCellX; x <= maxCellX; x += 1) {
      for (let z = minCellZ; z <= maxCellZ; z += 1) {
        const key = this.collisionCellKey(x, z);
        const cell = this.collisionGrid.get(key);
        if (cell) cell.push(building);
        else this.collisionGrid.set(key, [building]);
      }
    }
  }

  private queryCollisionBuildings(start: THREE.Vector3, delta = new THREE.Vector3()) {
    const size = this.collisionCellSize;
    const endX = start.x + delta.x;
    const endZ = start.z + delta.z;
    const padding = this.collider.radius + COLLISION_SKIN * 2;
    const minCellX = Math.floor((Math.min(start.x, endX) - padding) / size);
    const maxCellX = Math.floor((Math.max(start.x, endX) + padding) / size);
    const minCellZ = Math.floor((Math.min(start.z, endZ) - padding) / size);
    const maxCellZ = Math.floor((Math.max(start.z, endZ) + padding) / size);
    const result = new Set<BuildingRecord>();

    for (let x = minCellX; x <= maxCellX; x += 1) {
      for (let z = minCellZ; z <= maxCellZ; z += 1) {
        const cell = this.collisionGrid.get(this.collisionCellKey(x, z));
        if (!cell) continue;
        for (const building of cell) result.add(building);
      }
    }
    return result;
  }

  private moveAndCollide(dt: number) {
    this.grounded = false;
    this.depenetratePlayer();
    this.sweepAndSlide(this.playerVelocity.clone().multiplyScalar(dt));
    this.snapToSupport();

    if (this.playerPosition.y < this.groundY) {
      this.playerPosition.y = this.groundY;
      if (this.playerVelocity.y < 0) this.playerVelocity.y = 0;
      this.grounded = true;
    }
  }

  /**
   * Continuous collision detection for the upright player collider. Horizontal
   * contacts use a true circular footprint (flat faces + rounded corners) while
   * roof/underside contacts use the collider's real height. Remaining motion is
   * projected onto each hit plane so high-speed impacts slide instead of tunnel.
   */
  private sweepAndSlide(delta: THREE.Vector3) {
    const remaining = delta.clone();

    for (let iteration = 0; iteration < MAX_COLLISION_ITERATIONS; iteration += 1) {
      if (remaining.lengthSq() < 1e-10) break;

      const hit = this.findEarliestCollision(this.playerPosition, remaining);
      if (!hit) {
        this.playerPosition.add(remaining);
        break;
      }

      const travelT = Math.max(0, hit.t - 1e-5);
      this.playerPosition.addScaledVector(remaining, travelT);
      this.playerPosition.addScaledVector(hit.normal, COLLISION_SKIN);

      const unused = remaining.multiplyScalar(Math.max(0, 1 - hit.t));
      const intoSurface = unused.dot(hit.normal);
      if (intoSurface < 0) unused.addScaledVector(hit.normal, -intoSurface);

      const velocityIntoSurface = this.playerVelocity.dot(hit.normal);
      if (velocityIntoSurface < 0) this.playerVelocity.addScaledVector(hit.normal, -velocityIntoSurface);

      if (hit.normal.y > 0.55) {
        this.grounded = true;
        if (this.playerVelocity.y < 0) this.playerVelocity.y = 0;
      }
    }
  }

  private findEarliestCollision(start: THREE.Vector3, delta: THREE.Vector3) {
    let bestT = 1.000001;
    let bestNormal: THREE.Vector3 | null = null;

    const consider = (t: number, normal: THREE.Vector3) => {
      if (!Number.isFinite(t) || t < -1e-7 || t > 1 || t >= bestT) return;
      if (delta.dot(normal) >= -1e-9) return;
      bestT = Math.max(0, t);
      bestNormal = normal;
    };

    if (delta.y < -1e-9) {
      const groundT = (this.groundY - start.y) / delta.y;
      consider(groundT, new THREE.Vector3(0, 1, 0));
    }

    for (const building of this.queryCollisionBuildings(start, delta)) {
      // Roof and underside are tested separately so the horizontal footprint can
      // stay circular instead of using a box-shaped Minkowski expansion.
      if (delta.y < -1e-9) {
        const roofT = (building.box.max.y - start.y) / delta.y;
        if (roofT >= -1e-7 && roofT <= 1) {
          const x = start.x + delta.x * roofT;
          const z = start.z + delta.z * roofT;
          if (this.circleIntersectsRectXZ(x, z, this.collider.radius, building.box)) {
            consider(roofT, new THREE.Vector3(0, 1, 0));
          }
        }
      } else if (delta.y > 1e-9) {
        const undersideT = (building.box.min.y - (start.y + this.collider.height)) / delta.y;
        if (undersideT >= -1e-7 && undersideT <= 1) {
          const x = start.x + delta.x * undersideT;
          const z = start.z + delta.z * undersideT;
          if (this.circleIntersectsRectXZ(x, z, this.collider.radius, building.box)) {
            consider(undersideT, new THREE.Vector3(0, -1, 0));
          }
        }
      }

      const horizontalHit = this.sweepCircleRectXZ(start, delta, building.box);
      if (!horizontalHit) continue;
      const yAtHit = start.y + delta.y * horizontalHit.t;
      const topAtHit = yAtHit + this.collider.height;
      const verticalOverlap = topAtHit > building.box.min.y + 1e-7 && yAtHit < building.box.max.y - 1e-7;
      if (verticalOverlap) consider(horizontalHit.t, horizontalHit.normal);
    }

    return bestNormal ? { t: bestT, normal: bestNormal } : null;
  }

  private circleIntersectsRectXZ(x: number, z: number, radius: number, box: THREE.Box3) {
    const closestX = clamp(x, box.min.x, box.max.x);
    const closestZ = clamp(z, box.min.z, box.max.z);
    const dx = x - closestX;
    const dz = z - closestZ;
    return dx * dx + dz * dz <= radius * radius + 1e-8;
  }

  /** Sweeps a circle against the rounded rectangle formed by a building footprint. */
  private sweepCircleRectXZ(start: THREE.Vector3, delta: THREE.Vector3, box: THREE.Box3) {
    const sx = start.x;
    const sz = start.z;
    const dx = delta.x;
    const dz = delta.z;
    const r = this.collider.radius;
    let bestT = 1.000001;
    let bestNormal: THREE.Vector3 | null = null;

    const consider = (t: number, nx: number, nz: number) => {
      if (!Number.isFinite(t) || t < -1e-7 || t > 1 || t >= bestT) return;
      const normal = new THREE.Vector3(nx, 0, nz);
      if (normal.lengthSq() < 1e-12) return;
      normal.normalize();
      if (dx * normal.x + dz * normal.z >= -1e-9) return;
      bestT = Math.max(0, t);
      bestNormal = normal;
    };

    // Flat faces. Restrict the orthogonal coordinate to the actual face span;
    // rounded corner hits are solved below instead of creating square air walls.
    if (dx > 1e-10) {
      const t = (box.min.x - r - sx) / dx;
      const z = sz + dz * t;
      if (z >= box.min.z && z <= box.max.z) consider(t, -1, 0);
    } else if (dx < -1e-10) {
      const t = (box.max.x + r - sx) / dx;
      const z = sz + dz * t;
      if (z >= box.min.z && z <= box.max.z) consider(t, 1, 0);
    }

    if (dz > 1e-10) {
      const t = (box.min.z - r - sz) / dz;
      const x = sx + dx * t;
      if (x >= box.min.x && x <= box.max.x) consider(t, 0, -1);
    } else if (dz < -1e-10) {
      const t = (box.max.z + r - sz) / dz;
      const x = sx + dx * t;
      if (x >= box.min.x && x <= box.max.x) consider(t, 0, 1);
    }

    const speedSq = dx * dx + dz * dz;
    if (speedSq > 1e-12) {
      const corners = [
        { x: box.min.x, z: box.min.z, qx: -1, qz: -1 },
        { x: box.max.x, z: box.min.z, qx: 1, qz: -1 },
        { x: box.min.x, z: box.max.z, qx: -1, qz: 1 },
        { x: box.max.x, z: box.max.z, qx: 1, qz: 1 },
      ];
      for (const corner of corners) {
        const ox = sx - corner.x;
        const oz = sz - corner.z;
        const b = 2 * (ox * dx + oz * dz);
        const c = ox * ox + oz * oz - r * r;
        const discriminant = b * b - 4 * speedSq * c;
        if (discriminant < 0) continue;
        const sqrtD = Math.sqrt(discriminant);
        const roots = [(-b - sqrtD) / (2 * speedSq), (-b + sqrtD) / (2 * speedSq)];
        for (const t of roots) {
          if (t < -1e-7 || t > 1 || t >= bestT) continue;
          const x = sx + dx * t;
          const z = sz + dz * t;
          const inCornerQuadrant = corner.qx < 0 ? x <= box.min.x + 1e-7 : x >= box.max.x - 1e-7;
          const inCornerZ = corner.qz < 0 ? z <= box.min.z + 1e-7 : z >= box.max.z - 1e-7;
          if (!inCornerQuadrant || !inCornerZ) continue;
          consider(t, x - corner.x, z - corner.z);
          break;
        }
      }
    }

    return bestNormal ? { t: bestT, normal: bestNormal } : null;
  }

  private playerIntersects(box: THREE.Box3) {
    const verticalOverlap = this.playerPosition.y + this.collider.height > box.min.y + 1e-8 && this.playerPosition.y < box.max.y - 1e-8;
    if (!verticalOverlap) return false;
    const closestX = clamp(this.playerPosition.x, box.min.x, box.max.x);
    const closestZ = clamp(this.playerPosition.z, box.min.z, box.max.z);
    const dx = this.playerPosition.x - closestX;
    const dz = this.playerPosition.z - closestZ;
    return dx * dx + dz * dz < this.collider.radius * this.collider.radius - 1e-8;
  }

  private depenetratePlayer() {
    for (let iteration = 0; iteration < 4; iteration += 1) {
      let corrected = false;
      for (const building of this.queryCollisionBuildings(this.playerPosition)) {
        if (!this.playerIntersects(building.box)) continue;
        this.resolveBuildingOverlap(building.box);
        corrected = true;
      }
      if (!corrected) break;
    }
  }

  private resolveBuildingOverlap(box: THREE.Box3) {
    const px = this.playerPosition.x;
    const pz = this.playerPosition.z;
    const closestX = clamp(px, box.min.x, box.max.x);
    const closestZ = clamp(pz, box.min.z, box.max.z);
    const offsetX = px - closestX;
    const offsetZ = pz - closestZ;
    const horizontalDistance = Math.hypot(offsetX, offsetZ);

    const corrections: Array<{ delta: THREE.Vector3; normal: THREE.Vector3 }> = [];

    if (horizontalDistance > 1e-8) {
      const penetration = this.collider.radius - horizontalDistance;
      if (penetration > 0) {
        const normal = new THREE.Vector3(offsetX / horizontalDistance, 0, offsetZ / horizontalDistance);
        corrections.push({ delta: normal.clone().multiplyScalar(penetration + COLLISION_SKIN), normal });
      }
    } else {
      // Center is inside the footprint: escape through the nearest horizontal face
      // while preserving the declared circular collider radius.
      const horizontalOptions = [
        { amount: box.min.x - this.collider.radius - px - COLLISION_SKIN, normal: new THREE.Vector3(-1, 0, 0) },
        { amount: box.max.x + this.collider.radius - px + COLLISION_SKIN, normal: new THREE.Vector3(1, 0, 0) },
        { amount: box.min.z - this.collider.radius - pz - COLLISION_SKIN, normal: new THREE.Vector3(0, 0, -1) },
        { amount: box.max.z + this.collider.radius - pz + COLLISION_SKIN, normal: new THREE.Vector3(0, 0, 1) },
      ];
      for (const option of horizontalOptions) {
        corrections.push({ delta: option.normal.clone().multiplyScalar(Math.abs(option.amount)), normal: option.normal });
      }
    }

    const upAmount = box.max.y - this.playerPosition.y + COLLISION_SKIN;
    if (upAmount > 0) corrections.push({ delta: new THREE.Vector3(0, upAmount, 0), normal: new THREE.Vector3(0, 1, 0) });
    const downAmount = box.min.y - (this.playerPosition.y + this.collider.height) - COLLISION_SKIN;
    if (downAmount < 0 && this.playerPosition.y + downAmount >= this.groundY - COLLISION_SKIN) {
      corrections.push({ delta: new THREE.Vector3(0, downAmount, 0), normal: new THREE.Vector3(0, -1, 0) });
    }

    if (corrections.length === 0) return;
    corrections.sort((a, b) => a.delta.lengthSq() - b.delta.lengthSq());
    const correction = corrections[0];
    this.playerPosition.add(correction.delta);

    const intoSurface = this.playerVelocity.dot(correction.normal);
    if (intoSurface < 0) this.playerVelocity.addScaledVector(correction.normal, -intoSurface);
    if (correction.normal.y > 0.55) {
      this.grounded = true;
      if (this.playerVelocity.y < 0) this.playerVelocity.y = 0;
    }
  }

  private applyWebConstraint(dt: number) {
    this.webTension = 0;
    if (!this.webAttached || !this.webAnchor || this.ropeLength === null) return;

    let peakTension = 0;
    for (let iteration = 0; iteration < 2; iteration += 1) {
      const endpoint = this.getWebPlayerEndpoint();
      const delta = endpoint.clone().sub(this.webAnchor);
      const distance = delta.length();
      if (distance < 0.0001) break;

      const radial = delta.multiplyScalar(1 / distance);
      if (distance > this.ropeLength) {
        const excess = distance - this.ropeLength;
        const correction = radial.clone().multiplyScalar(-excess);
        this.sweepAndSlide(correction);

        const outwardVelocity = this.playerVelocity.dot(radial);
        if (outwardVelocity > 0) this.playerVelocity.addScaledVector(radial, -outwardVelocity);
        peakTension = Math.max(peakTension, clamp((excess / Math.max(dt, 0.0001)) * 0.06 + Math.max(0, outwardVelocity) * 0.03, 0, 1));
      } else {
        const slackRatio = distance / Math.max(this.ropeLength, 0.001);
        peakTension = Math.max(peakTension, clamp((slackRatio - 0.91) / 0.09, 0, 0.55));
      }

      this.depenetratePlayer();
    }

    this.webTension = peakTension;
    if (this.playerPosition.y < this.groundY) {
      this.playerPosition.y = this.groundY;
      this.playerVelocity.y = Math.max(0, this.playerVelocity.y);
    }
    this.grounded = this.isSupported();
  }

  private snapToSupport() {
    if (this.playerVelocity.y > 0.08) return;

    if (this.playerPosition.y >= this.groundY && this.playerPosition.y - this.groundY <= 0.018) {
      this.playerPosition.y = this.groundY;
      if (this.playerVelocity.y < 0) this.playerVelocity.y = 0;
      this.grounded = true;
      return;
    }

    let bestRoof = Number.NEGATIVE_INFINITY;
    for (const building of this.queryCollisionBuildings(this.playerPosition)) {
      const roofY = building.box.max.y;
      if (this.playerPosition.y < roofY || this.playerPosition.y - roofY > 0.018) continue;
      if (this.circleIntersectsRectXZ(this.playerPosition.x, this.playerPosition.z, this.collider.radius, building.box)) {
        bestRoof = Math.max(bestRoof, roofY);
      }
    }

    if (Number.isFinite(bestRoof)) {
      this.playerPosition.y = bestRoof;
      if (this.playerVelocity.y < 0) this.playerVelocity.y = 0;
      this.grounded = true;
    }
  }

  private isSupported() {
    if (Math.abs(this.playerPosition.y - this.groundY) <= 0.025) return true;
    if (this.playerVelocity.y > 0.08) return false;
    for (const building of this.queryCollisionBuildings(this.playerPosition)) {
      if (Math.abs(this.playerPosition.y - building.box.max.y) > 0.035) continue;
      if (this.circleIntersectsRectXZ(this.playerPosition.x, this.playerPosition.z, this.collider.radius, building.box)) return true;
    }
    return false;
  }

  private constrainWorldBounds() {
    const bound = 285;
    if (this.playerPosition.x < -bound) {
      this.playerPosition.x = -bound;
      if (this.playerVelocity.x < 0) this.playerVelocity.x = 0;
    } else if (this.playerPosition.x > bound) {
      this.playerPosition.x = bound;
      if (this.playerVelocity.x > 0) this.playerVelocity.x = 0;
    }
    if (this.playerPosition.z < -bound) {
      this.playerPosition.z = -bound;
      if (this.playerVelocity.z < 0) this.playerVelocity.z = 0;
    } else if (this.playerPosition.z > bound) {
      this.playerPosition.z = bound;
      if (this.playerVelocity.z > 0) this.playerVelocity.z = 0;
    }
  }

  private updateMovementState() {
    const horizontalSpeed = Math.hypot(this.playerVelocity.x, this.playerVelocity.z);
    if (this.webAttached) this.movementState = 'swinging';
    else if (!this.grounded && this.playerVelocity.y > 0.45) this.movementState = 'jumping';
    else if (!this.grounded) this.movementState = 'falling';
    else if (horizontalSpeed > 0.55) this.movementState = 'moving';
    else this.movementState = 'idle';
  }

  private updateWebTarget() {
    this.webRaycaster.setFromCamera(ZERO2, this.camera);
    this.webRaycaster.far = 118;
    const intersections = this.webRaycaster.intersectObjects(this.buildingMeshes, false);
    if (intersections.length === 0) {
      this.currentTarget = null;
      return;
    }

    const hit = intersections[0];
    const id = hit.object.userData.buildingId as string | undefined;
    if (!id) {
      this.currentTarget = null;
      return;
    }

    const normal = hit.face?.normal.clone() ?? new THREE.Vector3(0, 1, 0);
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
    normal.applyMatrix3(normalMatrix).normalize();

    // The third-person camera is offset from the player. A point visible to the
    // camera can still sit behind a wall from the player's hand. Validate the
    // exact anchor from the real web origin so the line never attaches through
    // an intervening building because of camera parallax.
    const endpoint = this.getWebPlayerEndpoint();
    const toAnchor = hit.point.clone().sub(endpoint);
    const anchorDistance = toAnchor.length();
    if (anchorDistance < 2.2 || anchorDistance > 118) {
      this.currentTarget = null;
      return;
    }
    this.webAnchorRaycaster.set(endpoint, toAnchor.normalize());
    this.webAnchorRaycaster.far = anchorDistance + 0.08;
    const playerHits = this.webAnchorRaycaster.intersectObjects(this.buildingMeshes, false);
    const firstPlayerHit = playerHits[0];
    const firstId = firstPlayerHit?.object.userData.buildingId as string | undefined;
    if (!firstPlayerHit || firstId !== id || firstPlayerHit.point.distanceTo(hit.point) > 0.12) {
      this.currentTarget = null;
      return;
    }

    this.currentTarget = { point: hit.point.clone(), normal, objectId: id, distance: anchorDistance };
  }

  private tryAttachWeb() {
    if (this.webAttached || !this.currentTarget) return;
    const endpoint = this.getWebPlayerEndpoint();
    const distance = endpoint.distanceTo(this.currentTarget.point);
    if (distance < 2.2 || distance > 118) return;

    this.webAttached = true;
    this.webAnchor = this.currentTarget.point.clone();
    this.webAnchorObjectId = this.currentTarget.objectId;
    this.ropeLength = distance;
    this.webTension = 0;
    this.webLine.visible = true;
    this.webCore.visible = true;
    this.anchorGlow.position.copy(this.webAnchor).addScaledVector(this.currentTarget.normal, 0.05);
    this.anchorGlow.visible = true;
    this.targetRing.visible = false;
  }

  private detachWeb() {
    this.webAttached = false;
    this.webAnchor = null;
    this.webAnchorObjectId = null;
    this.ropeLength = null;
    this.webTension = 0;
    // Bleed off most of the swing speed on release so the drop feels controlled.
    this.playerVelocity.multiplyScalar(0.5);
    this.webLine.visible = false;
    this.webCore.visible = false;
    this.anchorGlow.visible = false;
  }

  private resetPlayer() {
    this.detachWeb();
    this.playerPosition.set(0, 0, 12);
    this.playerVelocity.set(0, 0, 0);
    this.yaw = 0;
    this.pitch = -0.45;
    this.grounded = true;
    this.movementState = 'idle';
    this.mouseDown = false;
    this.currentTarget = null;
    this.cameraTarget.copy(this.playerPosition).add(new THREE.Vector3(0, 1.3, 0));
    this.camera.position.set(0, 5.8, 20.5);
    this.camera.lookAt(this.cameraTarget);
    this.playerRoot.position.copy(this.playerPosition);
  }

  private getWebPlayerEndpoint() {
    return this.playerPosition.clone().add(new THREE.Vector3(0, WEB_ORIGIN_Y, 0));
  }

  private updateWebLine() {
    if (!this.webAttached || !this.webAnchor) {
      this.webLine.visible = false;
      this.webCore.visible = false;
      this.anchorGlow.visible = false;
      return;
    }

    const start = this.getWebPlayerEndpoint();
    const positions = this.webLine.geometry.getAttribute('position') as THREE.BufferAttribute;
    positions.setXYZ(0, start.x, start.y, start.z);
    positions.setXYZ(1, this.webAnchor.x, this.webAnchor.y, this.webAnchor.z);
    positions.needsUpdate = true;
    this.webLine.geometry.computeBoundingSphere();
    this.webLine.visible = true;

    const delta = this.webAnchor.clone().sub(start);
    const length = delta.length();
    const midpoint = start.clone().add(this.webAnchor).multiplyScalar(0.5);
    this.webCore.position.copy(midpoint);
    this.webCore.scale.set(1, length, 1);
    this.webCore.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    this.webCore.visible = true;

    const pulse = 0.86 + Math.sin(this.elapsedTime * 12) * 0.10 + this.webTension * 0.20;
    this.anchorGlow.scale.setScalar(pulse);
    this.anchorGlow.visible = true;
  }

  private updateTargetIndicator(dt: number) {
    if (this.webAttached || !this.currentTarget) {
      this.targetRing.visible = false;
      return;
    }
    this.targetRing.position.copy(this.currentTarget.point).addScaledVector(this.currentTarget.normal, 0.035);
    this.targetRing.quaternion.copy(this.camera.quaternion);
    const pulse = 1 + Math.sin(this.elapsedTime * 8) * 0.08;
    this.targetRing.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 1 - Math.exp(-14 * dt));
    this.targetRing.visible = true;
  }

  private updateVisuals(dt: number) {
    this.playerRoot.position.copy(this.playerPosition);

    const horizontalSpeed = Math.hypot(this.playerVelocity.x, this.playerVelocity.z);
    if (horizontalSpeed > 0.65) {
      const targetYaw = Math.atan2(this.playerVelocity.x, -this.playerVelocity.z);
      let delta = targetYaw - this.lastFacingYaw;
      delta = Math.atan2(Math.sin(delta), Math.cos(delta));
      this.lastFacingYaw += delta * (1 - Math.exp(-10 * dt));
    } else {
      let delta = this.yaw - this.lastFacingYaw;
      delta = Math.atan2(Math.sin(delta), Math.cos(delta));
      this.lastFacingYaw += delta * (1 - Math.exp(-5 * dt));
    }
    this.playerVisual.rotation.y = this.lastFacingYaw;

    const cycle = Math.sin(this.elapsedTime * 10.5) * Math.min(1, horizontalSpeed / 7);
    const settle = 1 - Math.exp(-13 * dt);

    if (this.movementState === 'swinging' && this.webAnchor) {
      this.leftArmPivot.rotation.x += (-2.15 - this.leftArmPivot.rotation.x) * settle;
      this.rightArmPivot.rotation.x += (-2.58 - this.rightArmPivot.rotation.x) * settle;
      this.leftArmPivot.rotation.z += (-0.28 - this.leftArmPivot.rotation.z) * settle;
      this.rightArmPivot.rotation.z += (0.30 - this.rightArmPivot.rotation.z) * settle;
      this.leftLegPivot.rotation.x += (0.72 - this.leftLegPivot.rotation.x) * settle;
      this.rightLegPivot.rotation.x += (-0.46 - this.rightLegPivot.rotation.x) * settle;
      this.playerVisual.rotation.z += ((Math.sin(this.elapsedTime * 2.1) * 0.07) - this.playerVisual.rotation.z) * settle;
    } else if (this.movementState === 'moving') {
      this.leftArmPivot.rotation.x += (cycle * 0.76 - this.leftArmPivot.rotation.x) * settle;
      this.rightArmPivot.rotation.x += (-cycle * 0.76 - this.rightArmPivot.rotation.x) * settle;
      this.leftLegPivot.rotation.x += (-cycle * 0.82 - this.leftLegPivot.rotation.x) * settle;
      this.rightLegPivot.rotation.x += (cycle * 0.82 - this.rightLegPivot.rotation.x) * settle;
      this.leftArmPivot.rotation.z *= 1 - settle;
      this.rightArmPivot.rotation.z *= 1 - settle;
      this.playerVisual.rotation.z *= 1 - settle;
    } else if (this.movementState === 'jumping' || this.movementState === 'falling') {
      this.leftArmPivot.rotation.x += (-0.55 - this.leftArmPivot.rotation.x) * settle;
      this.rightArmPivot.rotation.x += (-0.92 - this.rightArmPivot.rotation.x) * settle;
      this.leftLegPivot.rotation.x += (0.48 - this.leftLegPivot.rotation.x) * settle;
      this.rightLegPivot.rotation.x += (-0.22 - this.rightLegPivot.rotation.x) * settle;
      this.playerVisual.rotation.z *= 1 - settle;
    } else {
      this.leftArmPivot.rotation.x *= 1 - settle;
      this.rightArmPivot.rotation.x *= 1 - settle;
      this.leftLegPivot.rotation.x *= 1 - settle;
      this.rightLegPivot.rotation.x *= 1 - settle;
      this.playerVisual.rotation.z *= 1 - settle;
    }

    const signedVertical = clamp(this.playerVelocity.y / 35, -1, 1);
    const forwardLean = clamp(horizontalSpeed / 50, 0, 1) * 0.22 + Math.max(0, -signedVertical) * 0.07;
    this.playerVisual.rotation.x += ((this.webAttached ? -forwardLean : 0) - this.playerVisual.rotation.x) * settle;
  }

  private updateCamera(dt: number) {
    const forward = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const speed = this.playerVelocity.length();
    const baseTarget = this.playerPosition.clone().add(new THREE.Vector3(0, 1.28, 0));
    const lookAhead = this.playerVelocity.clone().multiplyScalar(clamp(speed / 48, 0, 1) * 0.09);
    lookAhead.y *= 0.20;
    if (this.webAttached && this.webAnchor) {
      const towardAnchor = this.webAnchor.clone().sub(baseTarget).normalize();
      lookAhead.addScaledVector(towardAnchor, 0.55);
    }
    const desiredTarget = baseTarget.clone().add(lookAhead);
    const targetFollow = 1 - Math.exp(-12 * dt);
    const smoothedTarget = this.cameraTarget.clone().lerp(desiredTarget, targetFollow);

    // Velocity look-ahead can otherwise move the look target several metres into
    // a nearby building. Keep the real render target on the player's visible side
    // of geometry before using it as the origin for camera obstruction tests.
    const targetOffset = smoothedTarget.clone().sub(baseTarget);
    const targetDistance = targetOffset.length();
    if (targetDistance > 0.001) {
      this.cameraRaycaster.set(baseTarget, targetOffset.normalize());
      this.cameraRaycaster.far = targetDistance;
      const targetHits = this.cameraRaycaster.intersectObjects(this.buildingMeshes, false);
      if (targetHits.length > 0 && targetHits[0].distance < targetDistance) {
        const safeTargetDistance = Math.max(0, targetHits[0].distance - 0.08);
        this.cameraTarget.copy(baseTarget).addScaledVector(targetOffset, safeTargetDistance);
      } else {
        this.cameraTarget.copy(smoothedTarget);
      }
    } else {
      this.cameraTarget.copy(smoothedTarget);
    }

    const speedPullback = clamp(speed / 60, 0, 1) * 2.5;
    const distance = 7.0 + speedPullback;
    const horizontalDistance = Math.cos(this.pitch) * distance;
    const vertical = 2.55 + Math.sin(this.pitch) * distance;
    const desiredPosition = this.cameraTarget.clone()
      .addScaledVector(forward, -horizontalDistance)
      .add(new THREE.Vector3(0, vertical, 0));

    const toCamera = desiredPosition.clone().sub(this.cameraTarget);
    const desiredDistance = toCamera.length();
    if (desiredDistance > 0.001) {
      this.cameraRaycaster.set(this.cameraTarget, toCamera.normalize());
      this.cameraRaycaster.far = desiredDistance;
      const hits = this.cameraRaycaster.intersectObjects(this.buildingMeshes, false);
      if (hits.length > 0 && hits[0].distance < desiredDistance) {
        const safeDistance = Math.max(0.16, hits[0].distance - 0.38);
        desiredPosition.copy(this.cameraTarget).addScaledVector(toCamera.normalize(), safeDistance);
      }
    }
    desiredPosition.y = Math.max(this.groundY + 0.34, desiredPosition.y);

    const cameraFollow = 1 - Math.exp(-(this.webAttached ? 10.5 : 8.6) * dt);
    this.camera.position.lerp(desiredPosition, cameraFollow);

    // Interpolation itself can cross geometry when the player rounds a corner.
    // Re-check the final line of sight so the render camera never lingers inside a wall.
    const actualOffset = this.camera.position.clone().sub(this.cameraTarget);
    const actualDistance = actualOffset.length();
    if (actualDistance > 0.001) {
      this.cameraRaycaster.set(this.cameraTarget, actualOffset.normalize());
      this.cameraRaycaster.far = actualDistance;
      const finalHits = this.cameraRaycaster.intersectObjects(this.buildingMeshes, false);
      if (finalHits.length > 0 && finalHits[0].distance < actualDistance) {
        const safeDistance = Math.max(0.16, finalHits[0].distance - 0.32);
        this.camera.position.copy(this.cameraTarget).addScaledVector(actualOffset, safeDistance);
      }
    }
    this.camera.position.y = Math.max(this.groundY + 0.28, this.camera.position.y);

    const fovTarget = 68 + clamp(speed / 56, 0, 1) * 11;
    this.camera.fov += (fovTarget - this.camera.fov) * (1 - Math.exp(-5 * dt));
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.cameraTarget);
  }

  private updateLighting() {
    const cycle = (Math.sin(this.elapsedTime * 0.022) + 1) * 0.5;
    this.fillLight.intensity = 0.96 + cycle * 0.36;
    this.keyLight.intensity = 1.75 + cycle * 0.55;
    this.moon.material instanceof THREE.MeshBasicMaterial && (this.moon.material.opacity = 0.82 + cycle * 0.18);
  }

  private getHudSnapshot(): HudSnapshot {
    const heading = ((THREE.MathUtils.radToDeg(this.yaw) % 360) + 360) % 360;
    return {
      speed: this.playerVelocity.length(),
      altitude: Math.max(0, this.playerPosition.y - this.groundY),
      verticalSpeed: this.playerVelocity.y,
      attached: this.webAttached,
      targetValid: this.currentTarget !== null,
      targetDistance: this.currentTarget?.distance ?? null,
      movementState: this.movementState,
      heading,
      ready: this.ready,
      tension: this.webTension,
      ropeLength: this.ropeLength,
      playerX: this.playerPosition.x,
      playerZ: this.playerPosition.z,
    };
  }

  public requestPointerLock() {
    if (document.pointerLockElement !== this.renderer.domElement) {
      void this.renderer.domElement.requestPointerLock();
    }
  }

  public dispose() {
    this.disposed = true;
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.clock.stop();
    this.removeInputs();
    window.removeEventListener('resize', this.resize);
    if (document.pointerLockElement === this.renderer.domElement) document.exitPointerLock();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

declare global {
  interface Window {
    __game: {
      getState(): {
        ready: boolean;
        running: boolean;
        elapsedTime: number;
        renderer: 'webgl';
        viewport: { width: number; height: number };
      };
    };
    __player: {
      getState(): {
        position: { x: number; y: number; z: number };
        velocity: { x: number; y: number; z: number };
        grounded: boolean;
        movementState: MovementState;
        collider: { radius: number; height: number };
      };
    };
    __camera: {
      getState(): {
        mode: 'third-person';
        position: { x: number; y: number; z: number };
        target: { x: number; y: number; z: number };
        yaw: number;
        pitch: number;
      };
    };
    __web: {
      getState(): {
        attached: boolean;
        targetValid: boolean;
        anchor: { x: number; y: number; z: number } | null;
        anchorObjectId: string | null;
        ropeLength: number | null;
        distanceToAnchor: number | null;
        lineVisible: boolean;
        playerEndpoint: { x: number; y: number; z: number } | null;
        anchorEndpoint: { x: number; y: number; z: number } | null;
      };
    };
    __world: {
      getState(): {
        groundY: number;
        buildings: Array<{
          id: string;
          min: { x: number; y: number; z: number };
          max: { x: number; y: number; z: number };
        }>;
      };
    };
  }
}
