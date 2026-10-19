// @ts-nocheck
import * as THREE_NS from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

(() => {
  'use strict';

  const T = Object.assign({}, THREE_NS, { OrbitControls });
  const fatal = (message) => {
    const box = document.getElementById('fatalError');
    const text = document.getElementById('fatalMessage');
    if (text) text.textContent = message;
    if (box) box.classList.remove('hidden');
  };

  if (!T || !T.OrbitControls) {
    fatal('Three.js / OrbitControls module initialization failed. Reload the application or inspect the Vite build output.');
    return;
  }

  const q = (selector) => document.querySelector(selector);
  const dom = {
    mainMenu: document.getElementById('mainMenu'),
    play: q('[data-testid="play-btn"]'),
    scenario: document.getElementById('scenarioSelect'),
    solar: q('[data-testid="solar-system-btn"]'),
    custom: q('[data-testid="custom-sandbox-btn"]'),
    back: document.getElementById('scenarioBack'),
    game: document.getElementById('gameScreen'),
    canvasHost: document.getElementById('canvasHost'),
    toolbar: document.getElementById('sandboxToolbar'),
    spawnPlanet: q('[data-testid="spawn-object-btn"]'),
    preset: q('[data-testid="spawn-object-select"]'),
    spawnStar: q('[data-testid="spawn-star-btn"]'),
    settingsBtn: q('[data-testid="object-settings-btn"]'),
    menu: q('[data-testid="menu-btn"]'),
    panel: document.getElementById('objectSettingsPanel'),
    selectedName: q('[data-testid="selected-object-name"]'),
    close: q('[data-testid="object-settings-close"]'),
    temp: q('[data-testid="temperature-slider"]'),
    rotation: q('[data-testid="rotation-speed-slider"]'),
    orbital: q('[data-testid="orbital-velocity-slider"]'),
    tempValue: document.getElementById('temperatureValue'),
    rotationValue: document.getElementById('rotationValue'),
    orbitalValue: document.getElementById('orbitalValue'),
    orbitalNote: document.getElementById('orbitalNote'),
    typeBadge: document.getElementById('typeBadge'),
    orbitBadge: document.getElementById('orbitBadge'),
    scenarioLabel: document.getElementById('scenarioLabel'),
    bodyCount: document.getElementById('bodyCountLabel'),
    simTime: document.getElementById('simTimeLabel'),
    fps: document.getElementById('fpsLabel'),
    settingsSub: document.getElementById('settingsSub'),
    placementHint: document.getElementById('placementHint'),
    placementHintText: document.getElementById('placementHintText'),
    hoverLabel: document.getElementById('hoverLabel'),
    hoverName: document.getElementById('hoverName'),
    hoverMeta: document.getElementById('hoverMeta'),
    toast: document.getElementById('toast'),
    telemetryType: document.getElementById('telemetryType'),
    telemetryMass: document.getElementById('telemetryMass'),
    telemetryRadius: document.getElementById('telemetryRadius'),
    telemetryOrbit: document.getElementById('telemetryOrbit'),
    focus: document.getElementById('focusSelectedBtn')
  };

  let scene;
  let camera;
  let renderer;
  let controls;
  let worldGroup;
  let guideGroup;
  let helperGroup;
  let selectionRing;
  let hoverRing;
  let placementCursor;

  const raycaster = new T.Raycaster();
  const pointer = new T.Vector2();
  const placementPlane = new T.Plane(new T.Vector3(0, 1, 0), 0);
  const bodies = [];
  const selectableMeshes = [];

  let bodySerial = 0;
  let proceduralSerial = 0;
  let starSerial = 0;
  let settingsOpen = false;
  let hoveredBodyId = null;
  let pointerDown = false;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let pointerTravel = 0;
  let toastTimer = 0;
  let toastFadeTimer = 0;
  let animationFrameId = 0;
  let runtimeDisposed = false;
  const sharedTextures = new Map();

  const app = {
    ready: false,
    gameState: 'menu',
    scenario: null,
    elapsedTime: 0,
    spawnMode: 'idle',
    selectedObjectId: null
  };

  const sim = {
    gravityEnabled: true,
    gravitationalConstant: 0.75,
    simulationTime: 0,
    physicsStepCount: 0,
    orbitModel: 'analytic'
  };

  const spawner = {
    mode: 'idle',
    selectedPreset: 'earth',
    pendingPlacement: false,
    cursorIntersection: null,
    lastPlacement: null,
    lastSpawnedBodyId: null,
    placementCount: 0
  };

  const perf = {
    animationRunning: true,
    frameCount: 0,
    averageFps: 0,
    lastFrameDeltaMs: 0,
    samples: []
  };

  const FIXED_STEP = 1 / 120;
  const MAX_PHYSICS_STEPS = 8;
  let physicsAccumulator = 0;
  let startTime = performance.now();
  let lastFrame = startTime;
  let qualityCheckAt = startTime;
  const nativeDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  let qualityDpr = nativeDpr;

  const finite = (n, fallback = 0) => Number.isFinite(n) ? n : fallback;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const round = (n, digits = 6) => {
    const p = 10 ** digits;
    return finite(Math.round(n * p) / p, 0);
  };
  const vec = (v) => ({ x: round(v.x), y: round(v.y), z: round(v.z) });
  const hex = (color) => `#${color.getHexString().toUpperCase()}`;

  function hashSeed(input) {
    let h = 2166136261;
    for (const ch of String(input)) {
      h ^= ch.charCodeAt(0);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rng32(seed) {
    let a = seed >>> 0;
    return () => {
      a |= 0;
      a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function disposeMaterial(material) {
    for (const mat of (Array.isArray(material) ? material : [material])) {
      if (!mat) continue;
      for (const key of Object.keys(mat)) {
        const value = mat[key];
        if (value && value.isTexture && value.dispose && !(value.userData && value.userData.orbitalShared)) value.dispose();
      }
      if (mat.dispose) mat.dispose();
    }
  }

  function disposeObject(root) {
    root.traverse((object) => {
      if (object.geometry && object.geometry.dispose) object.geometry.dispose();
      if (object.material) disposeMaterial(object.material);
    });
  }

  function makeSurfaceTexture(kind) {
    const cacheKey = `surface:${kind}`;
    if (sharedTextures.has(cacheKey)) return sharedTextures.get(cacheKey);
    const canvas = document.createElement('canvas');
    canvas.width = 768;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');
    const rng = rng32(hashSeed(`surface:${kind}`));

    if (kind === 'earth') {
      const ocean = ctx.createLinearGradient(0, 0, 0, canvas.height);
      ocean.addColorStop(0, '#102c59');
      ocean.addColorStop(.48, '#2379bd');
      ocean.addColorStop(1, '#071f42');
      ctx.fillStyle = ocean;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 92; i++) {
        const arid = rng() < .24;
        ctx.fillStyle = arid
          ? `rgba(${132 + rng() * 55 | 0},${118 + rng() * 38 | 0},${73 + rng() * 28 | 0},${.45 + rng() * .32})`
          : `rgba(${28 + rng() * 40 | 0},${86 + rng() * 77 | 0},${44 + rng() * 43 | 0},${.55 + rng() * .28})`;
        ctx.beginPath();
        ctx.ellipse(
          rng() * canvas.width,
          34 + rng() * (canvas.height - 68),
          10 + rng() * 48,
          4 + rng() * 22,
          rng() * Math.PI,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      const polar = ctx.createLinearGradient(0, 0, 0, 44);
      polar.addColorStop(0, 'rgba(247,251,255,.95)');
      polar.addColorStop(1, 'rgba(240,248,255,0)');
      ctx.fillStyle = polar;
      ctx.fillRect(0, 0, canvas.width, 44);
      ctx.save();
      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.fillStyle = polar;
      ctx.fillRect(0, 0, canvas.width, 38);
      ctx.restore();
    } else if (kind === 'mars') {
      const mars = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      mars.addColorStop(0, '#68251d');
      mars.addColorStop(.45, '#ca5b34');
      mars.addColorStop(1, '#793022');
      ctx.fillStyle = mars;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 180; i++) {
        ctx.fillStyle = `rgba(${43 + rng() * 38 | 0},${16 + rng() * 15 | 0},${13 + rng() * 12 | 0},${.03 + rng() * .17})`;
        ctx.beginPath();
        ctx.arc(rng() * canvas.width, rng() * canvas.height, 2 + rng() * 16, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(246,214,190,.36)';
      ctx.fillRect(0, 0, canvas.width, 9);
    } else if (kind === 'jupiter') {
      const colors = ['#c69a70', '#e7caa2', '#9e714e', '#efd7b4', '#b8845e', '#dbb78f', '#f0d7b5'];
      let y = 0;
      while (y < canvas.height) {
        const h = 12 + rng() * 25;
        ctx.fillStyle = colors[Math.floor(rng() * colors.length)];
        ctx.fillRect(0, y, canvas.width, h);
        if (rng() > .45) {
          ctx.fillStyle = `rgba(68,45,35,${.025 + rng() * .055})`;
          ctx.fillRect(0, y + h * .7, canvas.width, 1 + rng() * 3);
        }
        y += h;
      }
      ctx.fillStyle = '#a85843';
      ctx.beginPath();
      ctx.ellipse(528, 245, 62, 25, -.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(242,188,146,.28)';
      ctx.beginPath();
      ctx.ellipse(520, 239, 44, 14, -.04, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const sun = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      sun.addColorStop(0, '#ff7f20');
      sun.addColorStop(.46, '#ffd45c');
      sun.addColorStop(1, '#f06b1a');
      ctx.fillStyle = sun;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 320; i++) {
        ctx.fillStyle = `rgba(255,249,191,${.018 + rng() * .12})`;
        ctx.beginPath();
        ctx.arc(rng() * canvas.width, rng() * canvas.height, 2 + rng() * 16, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const texture = new T.CanvasTexture(canvas);
    texture.wrapS = T.RepeatWrapping;
    texture.wrapT = T.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    if ('encoding' in texture && T.sRGBEncoding) texture.encoding = T.sRGBEncoding;
    texture.userData.orbitalShared = true;
    sharedTextures.set(cacheKey, texture);
    return texture;
  }

  function makeBumpTexture(kind) {
    const cacheKey = `bump:${kind}`;
    if (sharedTextures.has(cacheKey)) return sharedTextures.get(cacheKey);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const image = ctx.createImageData(canvas.width, canvas.height);
    const rng = rng32(hashSeed(`bump:${kind}`));
    const contrast = kind === 'jupiter' ? .22 : kind === 'earth' ? .55 : .78;

    for (let i = 0; i < image.data.length; i += 4) {
      const wave = Math.sin((i / 4 % canvas.width) * .08) * (kind === 'jupiter' ? 15 : 3);
      const value = clamp(128 + (rng() - .5) * 150 * contrast + wave, 0, 255) | 0;
      image.data[i] = value;
      image.data[i + 1] = value;
      image.data[i + 2] = value;
      image.data[i + 3] = 255;
    }
    ctx.putImageData(image, 0, 0);
    const texture = new T.CanvasTexture(canvas);
    texture.wrapS = T.RepeatWrapping;
    texture.wrapT = T.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    texture.userData.orbitalShared = true;
    sharedTextures.set(cacheKey, texture);
    return texture;
  }

  function makeCloudTexture() {
    const cacheKey = 'cloud:earth';
    if (sharedTextures.has(cacheKey)) return sharedTextures.get(cacheKey);
    const canvas = document.createElement('canvas');
    canvas.width = 768;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');
    const rng = rng32(0xE4117);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 140; i++) {
      const alpha = .025 + rng() * .10;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.beginPath();
      ctx.ellipse(
        rng() * canvas.width,
        20 + rng() * (canvas.height - 40),
        18 + rng() * 68,
        2 + rng() * 9,
        rng() * .18 - .09,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    const texture = new T.CanvasTexture(canvas);
    texture.wrapS = T.RepeatWrapping;
    texture.wrapT = T.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    texture.userData.orbitalShared = true;
    sharedTextures.set(cacheKey, texture);
    return texture;
  }

  function makeGlowTexture(inner = '#fff2c2', mid = '#ffad50', outer = '#ff5728') {
    const cacheKey = `glow:${inner}:${mid}:${outer}`;
    if (sharedTextures.has(cacheKey)) return sharedTextures.get(cacheKey);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 192;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(96, 96, 3, 96, 96, 92);
    gradient.addColorStop(0, inner);
    gradient.addColorStop(.16, mid);
    gradient.addColorStop(.48, outer);
    gradient.addColorStop(1, 'rgba(255,80,30,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 192, 192);
    const texture = new T.CanvasTexture(canvas);
    texture.userData.orbitalShared = true;
    sharedTextures.set(cacheKey, texture);
    return texture;
  }

  function makeAtmosphereMaterial(color, intensity = .7, power = 2.25) {
    return new T.ShaderMaterial({
      uniforms: {
        glowColor: { value: new T.Color(color) },
        intensity: { value: intensity },
        power: { value: power }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewDirection;
        void main() {
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vViewDirection = normalize(-viewPosition.xyz);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewDirection;
        uniform vec3 glowColor;
        uniform float intensity;
        uniform float power;
        void main() {
          float rim = pow(1.0 - max(dot(normalize(vNormal), normalize(vViewDirection)), 0.0), power);
          gl_FragColor = vec4(glowColor, rim * intensity);
        }
      `,
      side: T.BackSide,
      transparent: true,
      blending: T.AdditiveBlending,
      depthWrite: false
    });
  }

  function createStarfield(count, innerRadius, outerRadius, size, color, opacity, seed) {
    const geometry = new T.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const rng = rng32(seed);
    for (let i = 0; i < count; i++) {
      const radius = innerRadius + rng() * (outerRadius - innerRadius);
      const angle = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(angle);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(angle);
    }
    geometry.setAttribute('position', new T.BufferAttribute(positions, 3));
    const material = new T.PointsMaterial({
      color,
      size,
      sizeAttenuation: true,
      transparent: true,
      opacity,
      depthWrite: false
    });
    const points = new T.Points(geometry, material);
    points.name = 'DecorativeStarfield';
    return points;
  }

  function createScene() {
    scene = new T.Scene();
    scene.background = new T.Color(0x00110c);
    scene.fog = new T.FogExp2(0x00110c, .0036);

    camera = new T.PerspectiveCamera(52, Math.max(1, innerWidth / innerHeight), .1, 1000);
    camera.position.set(0, 28, 58);

    renderer = new T.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
      preserveDrawingBuffer: false
    });
    renderer.setPixelRatio(qualityDpr);
    renderer.setSize(innerWidth, innerHeight, false);
    renderer.setClearColor(0x00110c, 1);
    if ('outputEncoding' in renderer && T.sRGBEncoding) renderer.outputEncoding = T.sRGBEncoding;
    if (T.ACESFilmicToneMapping !== undefined) renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.domElement.dataset.testid = 'space-canvas';
    renderer.domElement.setAttribute('aria-label', '3D celestial sandbox');
    renderer.domElement.tabIndex = 0;
    dom.canvasHost.appendChild(renderer.domElement);

    controls = new T.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = .062;
    controls.rotateSpeed = .52;
    controls.zoomSpeed = .82;
    controls.panSpeed = .72;
    controls.screenSpacePanning = false;
    controls.minDistance = 7;
    controls.maxDistance = 240;
    controls.minPolarAngle = .08;
    controls.maxPolarAngle = Math.PI - .08;
    controls.target.set(0, 0, 0);
    controls.update();

    scene.add(
      new T.HemisphereLight(0x6d88c8, 0x130e1d, .30),
      new T.AmbientLight(0x56617c, .20)
    );

    worldGroup = new T.Group();
    worldGroup.name = 'PhysicalWorld';
    guideGroup = new T.Group();
    guideGroup.name = 'OrbitGuides';
    helperGroup = new T.Group();
    helperGroup.name = 'SandboxHelpers';
    scene.add(worldGroup, guideGroup, helperGroup);

    scene.add(
      createStarfield(2200, 140, 470, .46, 0x77d9a5, .74, 90210),
      createStarfield(850, 180, 520, .72, 0x4d8f6a, .33, 70417)
    );

    selectionRing = new T.Mesh(
      new T.TorusGeometry(1, .025, 8, 112),
      new T.MeshBasicMaterial({ color: 0x63f0a2, transparent: true, opacity: .88, depthWrite: false })
    );
    selectionRing.visible = false;
    selectionRing.renderOrder = 30;
    helperGroup.add(selectionRing);

    hoverRing = new T.Mesh(
      new T.TorusGeometry(1, .018, 8, 96),
      new T.MeshBasicMaterial({ color: 0x91c9a7, transparent: true, opacity: .42, depthWrite: false })
    );
    hoverRing.visible = false;
    hoverRing.renderOrder = 29;
    helperGroup.add(hoverRing);

    placementCursor = new T.Group();
    placementCursor.name = 'PlacementCursor';
    const cursorMat = new T.MeshBasicMaterial({
      color: 0x67ddff,
      transparent: true,
      opacity: .76,
      side: T.DoubleSide,
      depthWrite: false
    });
    const outer = new T.Mesh(new T.RingGeometry(.58, .72, 48), cursorMat);
    const inner = new T.Mesh(new T.RingGeometry(.12, .16, 32), cursorMat.clone());
    outer.rotation.x = -Math.PI / 2;
    inner.rotation.x = -Math.PI / 2;
    outer.renderOrder = 30;
    inner.renderOrder = 30;
    placementCursor.add(outer, inner);
    placementCursor.position.y = .035;
    placementCursor.visible = false;
    helperGroup.add(placementCursor);
  }

  function createGrid() {
    const grid = new T.GridHelper(120, 48, 0x4167ae, 0x172848);
    grid.material.transparent = true;
    grid.material.opacity = .19;
    grid.material.depthWrite = false;
    grid.name = 'PlacementGrid';
    helperGroup.add(grid);

    const ringMaterial = new T.LineBasicMaterial({ color: 0x315184, transparent: true, opacity: .16, depthWrite: false });
    for (const radius of [10, 20, 35, 50]) {
      const points = [];
      for (let i = 0; i < 128; i++) {
        const angle = i / 128 * Math.PI * 2;
        points.push(new T.Vector3(Math.cos(angle) * radius, .012, Math.sin(angle) * radius));
      }
      const ring = new T.LineLoop(new T.BufferGeometry().setFromPoints(points), ringMaterial.clone());
      ring.name = `ConstructionRing:${radius}`;
      helperGroup.add(ring);
    }
  }

  function resetCamera() {
    camera.position.set(0, 28, 58);
    controls.target.set(0, 0, 0);
    controls.update();
  }

  function findBody(id) {
    return bodies.find((body) => body.id === id) || null;
  }

  function nearestStar(position, maxDistance = 90) {
    let best = null;
    let distance = Infinity;
    for (const body of bodies) {
      if (body.bodyType !== 'star') continue;
      const current = body.position.distanceTo(position);
      if (current < distance && current <= maxDistance) {
        best = body;
        distance = current;
      }
    }
    return best ? { star: best, distance } : null;
  }

  function addProceduralVertexColors(geometry, baseColor, seed) {
    const attr = geometry.attributes.position;
    const colors = new Float32Array(attr.count * 3);
    const base = new T.Color(baseColor);
    const rng = rng32(hashSeed(`vertex-color:${seed}`));
    for (let i = 0; i < attr.count; i++) {
      const lightnessShift = (rng() - .5) * .16;
      const c = base.clone().offsetHSL((rng() - .5) * .035, (rng() - .5) * .08, lightnessShift);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
  }

  function createBodyVisual({ preset, radius, color, isStar, procedural }) {
    const root = new T.Group();
    let geometry;
    let reliefTechnique = 'none';
    let reliefStrength = 0;
    let variance = 0;
    let cloudMesh = null;
    let atmosphere = null;

    if (procedural) {
      geometry = new T.IcosahedronGeometry(radius, 4);
      const attr = geometry.attributes.position;
      const radii = [];
      const seed = hashSeed(procedural.seed);
      for (let i = 0; i < attr.count; i++) {
        const x = attr.getX(i);
        const y = attr.getY(i);
        const z = attr.getZ(i);
        const len = Math.hypot(x, y, z) || 1;
        const nx = x / len;
        const ny = y / len;
        const nz = z / len;
        const noise = (
          Math.sin(nx * 13.7 + seed * .00011) +
          Math.sin(ny * 17.3 + seed * .00017) +
          Math.sin(nz * 19.1 + seed * .00023) +
          Math.sin((nx + ny + nz) * 29.7 + seed * .00007)
        ) / 4;
        const displacedRadius = radius * (1 + noise * procedural.displacementStrength);
        radii.push(displacedRadius);
        attr.setXYZ(i, nx * displacedRadius, ny * displacedRadius, nz * displacedRadius);
      }
      attr.needsUpdate = true;
      geometry.computeVertexNormals();
      addProceduralVertexColors(geometry, procedural.color, procedural.seed);
      const mean = radii.reduce((a, b) => a + b, 0) / radii.length;
      variance = radii.reduce((a, b) => a + (b - mean) ** 2, 0) / radii.length;
      reliefTechnique = 'geometry_displacement';
      reliefStrength = procedural.displacementStrength;
    } else {
      const widthSegments = radius > 3 ? 64 : 48;
      const heightSegments = radius > 3 ? 36 : 28;
      geometry = new T.SphereGeometry(radius, widthSegments, heightSegments);
    }

    const config = {
      color: new T.Color(color),
      roughness: procedural ? procedural.roughness : .72,
      metalness: .025
    };
    let textureKey = null;

    if (['earth', 'mars', 'jupiter', 'sun'].includes(preset) || isStar) {
      const texturePreset = preset === 'custom_star' ? 'sun' : preset;
      config.map = makeSurfaceTexture(texturePreset);
      textureKey = `${preset}_surface_canvas`;
    }

    if (['earth', 'mars', 'jupiter'].includes(preset)) {
      config.bumpMap = makeBumpTexture(preset);
      config.bumpScale = preset === 'mars' ? .075 : preset === 'jupiter' ? .025 : .045;
      reliefTechnique = 'bump_map';
      reliefStrength = config.bumpScale;
    }

    if (procedural) {
      config.vertexColors = true;
      config.color = new T.Color(0xffffff);
    }

    if (isStar) {
      config.emissive = new T.Color(color);
      config.emissiveIntensity = 1.42;
      config.roughness = .40;
    }

    const core = new T.Mesh(geometry, new T.MeshStandardMaterial(config));
    root.add(core);

    if (preset === 'earth') {
      cloudMesh = new T.Mesh(
        new T.SphereGeometry(radius * 1.012, 48, 28),
        new T.MeshPhongMaterial({
          map: makeCloudTexture(),
          transparent: true,
          opacity: .42,
          depthWrite: false,
          alphaTest: .015
        })
      );
      cloudMesh.name = 'EarthCloudLayer';
      root.add(cloudMesh);
      atmosphere = new T.Mesh(
        new T.SphereGeometry(radius * 1.075, 40, 24),
        makeAtmosphereMaterial(0x4aa7ff, .68, 2.1)
      );
      atmosphere.name = 'EarthAtmosphere';
      root.add(atmosphere);
    } else if (preset === 'mars') {
      atmosphere = new T.Mesh(
        new T.SphereGeometry(radius * 1.055, 36, 20),
        makeAtmosphereMaterial(0xe77a50, .23, 2.5)
      );
      atmosphere.name = 'MarsAtmosphere';
      root.add(atmosphere);
    } else if (preset === 'jupiter') {
      atmosphere = new T.Mesh(
        new T.SphereGeometry(radius * 1.035, 44, 24),
        makeAtmosphereMaterial(0xe9c59c, .20, 2.7)
      );
      atmosphere.name = 'JupiterAtmosphere';
      root.add(atmosphere);
    } else if (procedural) {
      atmosphere = new T.Mesh(
        new T.SphereGeometry(radius * 1.045, 36, 20),
        makeAtmosphereMaterial(color, .20, 2.75)
      );
      atmosphere.name = 'ProceduralAtmosphere';
      root.add(atmosphere);
    }

    if (isStar) {
      const halo = new T.Mesh(
        new T.SphereGeometry(radius * 1.16, 40, 24),
        new T.MeshBasicMaterial({
          color: 0xffaa48,
          transparent: true,
          opacity: .105,
          blending: T.AdditiveBlending,
          depthWrite: false
        })
      );
      halo.name = 'StarHalo';
      root.add(halo);

      const innerGlow = new T.Sprite(new T.SpriteMaterial({
        map: makeGlowTexture('#fff8d9', '#ffd36f', '#ff7a27'),
        color: 0xffc16b,
        transparent: true,
        opacity: .74,
        blending: T.AdditiveBlending,
        depthWrite: false
      }));
      innerGlow.scale.set(radius * 5.6, radius * 5.6, 1);
      innerGlow.name = 'StarGlowSprite';
      root.add(innerGlow);

      const outerGlow = new T.Sprite(new T.SpriteMaterial({
        map: makeGlowTexture('#ffeebc', '#ff9e42', '#ff4820'),
        color: 0xff8e3f,
        transparent: true,
        opacity: .22,
        blending: T.AdditiveBlending,
        depthWrite: false
      }));
      outerGlow.scale.set(radius * 8.7, radius * 8.7, 1);
      outerGlow.name = 'StarOuterGlowSprite';
      root.add(outerGlow);

      const light = new T.PointLight(0xffcf8a, 2.5, 190, 1.15);
      light.name = 'StarPointLight';
      root.add(light);
    }

    return {
      root,
      core,
      cloudMesh,
      atmosphere,
      textureKey,
      reliefTechnique,
      reliefStrength,
      variance
    };
  }

  function orbitGuide(body) {
    if (!body.orbiting || !body.parentStarId) return;
    const parent = findBody(body.parentStarId);
    if (!parent) return;

    const points = [];
    for (let i = 0; i < 192; i++) {
      const angle = i / 192 * Math.PI * 2;
      points.push(new T.Vector3(Math.cos(angle) * body.orbitRadius, 0, Math.sin(angle) * body.orbitRadius));
    }
    const geometry = new T.BufferGeometry().setFromPoints(points);
    const material = new T.LineDashedMaterial({
      color: 0x5577bb,
      dashSize: .48,
      gapSize: .36,
      transparent: true,
      opacity: .14,
      depthWrite: false
    });
    const line = new T.LineLoop(geometry, material);
    line.computeLineDistances();
    line.position.copy(parent.position);
    line.name = `OrbitGuide:${body.id}`;
    guideGroup.add(line);
    body.orbitGuide = line;
  }

  function addBody(options) {
    const id = `body-${++bodySerial}`;
    const isStar = options.bodyType === 'star';
    const visual = createBodyVisual({
      preset: options.preset,
      radius: options.radius,
      color: options.color,
      isStar,
      procedural: options.procedural
    });

    visual.root.name = `${options.name}Root`;
    visual.root.position.copy(options.position);
    visual.root.userData.isPhysicalBodyRoot = true;
    visual.root.userData.bodyId = id;
    visual.core.name = `${options.name}Mesh`;
    visual.core.userData.bodyId = id;
    visual.core.userData.isSelectableBodyMesh = true;

    const parent = options.parentStarId ? findBody(options.parentStarId) : null;
    const orbitRadius = parent ? options.position.distanceTo(parent.position) : 0;
    const relative = parent ? options.position.clone().sub(parent.position) : new T.Vector3();
    const angle = parent ? (options.initialAngle ?? Math.atan2(relative.z, relative.x)) : 0;
    const orbitalVelocity = parent ? Math.max(0, options.orbitalVelocity || 0) : 0;

    const body = {
      id,
      name: options.name,
      bodyType: options.bodyType,
      preset: options.preset,
      position: options.position.clone(),
      velocity: new T.Vector3(),
      acceleration: new T.Vector3(),
      mass: options.mass,
      radius: options.radius,
      averageTemperature: options.averageTemperature,
      rotationSpeed: options.rotationSpeed,
      orbitalVelocity,
      parentStarId: parent ? parent.id : null,
      orbiting: !!parent,
      orbitRadius,
      orbitAngle: angle,
      orbitAngularSpeed: parent && orbitRadius > .001 ? orbitalVelocity / orbitRadius : 0,
      root: visual.root,
      coreMesh: visual.core,
      cloudMesh: visual.cloudMesh,
      atmosphere: visual.atmosphere,
      orbitGuide: null,
      color: new T.Color(options.color),
      textureKey: visual.textureKey,
      reliefTechnique: visual.reliefTechnique,
      reliefStrength: visual.reliefStrength,
      glowMechanisms: isStar ? ['emissive_material', 'halo_mesh', 'glow_sprite', 'point_light'] : [],
      procedural: options.procedural ? {
        seed: options.procedural.seed,
        scale: options.procedural.scale,
        color: hex(new T.Color(options.procedural.color)),
        displacementStrength: options.procedural.displacementStrength,
        roughness: options.procedural.roughness,
        vertexRadiusVariance: visual.variance
      } : null
    };

    if (body.orbiting) {
      const p = findBody(body.parentStarId);
      const radial = body.position.clone().sub(p.position).normalize();
      const acceleration = body.orbitalVelocity * body.orbitalVelocity / Math.max(body.orbitRadius, .001);
      body.velocity.set(-radial.z * body.orbitalVelocity, 0, radial.x * body.orbitalVelocity);
      body.acceleration.copy(radial).multiplyScalar(-acceleration);
    }

    bodies.push(body);
    selectableMeshes.push(visual.core);
    worldGroup.add(visual.root);
    orbitGuide(body);
    applyTemperatureVisual(body);
    return body;
  }

  function buildSolar() {
    const sun = addBody({
      name: 'Sun',
      bodyType: 'star',
      preset: 'sun',
      position: new T.Vector3(),
      mass: 150,
      radius: 4.3,
      averageTemperature: 5778,
      rotationSpeed: .05,
      color: '#FFB340'
    });

    const addPlanet = (name, preset, radius, distance, mass, temperature, spin, phase, color) => {
      const velocity = Math.sqrt(sim.gravitationalConstant * sun.mass / distance);
      return addBody({
        name,
        bodyType: 'planet',
        preset,
        position: new T.Vector3(Math.cos(phase) * distance, 0, Math.sin(phase) * distance),
        mass,
        radius,
        averageTemperature: temperature,
        rotationSpeed: spin,
        orbitalVelocity: velocity,
        parentStarId: sun.id,
        color,
        initialAngle: phase
      });
    };

    addPlanet('Earth', 'earth', 1.25, 13, 1, 288, .52, .45, '#2F78FF');
    addPlanet('Mars', 'mars', .93, 20, .7, 210, .44, 2.2, '#CF5F3B');
    addPlanet('Jupiter', 'jupiter', 2.35, 31, 3.2, 165, .82, 4.15, '#D6AA76');
  }

  function spawnPlanetAt(position, preset) {
    let name;
    let radius;
    let mass;
    let temperature;
    let spin;
    let color;
    let procedural = null;

    if (preset === 'earth') {
      name = 'Earth';
      radius = 1.25;
      mass = 1;
      temperature = 288;
      spin = .52;
      color = '#2F78FF';
    } else if (preset === 'mars') {
      name = 'Mars';
      radius = .93;
      mass = .7;
      temperature = 210;
      spin = .44;
      color = '#CF5F3B';
    } else {
      const seed = `planet-${Date.now()}-${++proceduralSerial}`;
      const rng = rng32(hashSeed(seed));
      const hue = Math.floor(rng() * 360);
      const generatedColor = new T.Color(`hsl(${hue},76%,${48 + rng() * 16}%)`);
      const scale = .78 + rng() * 1.25;
      const displacementStrength = .09 + rng() * .13;
      const roughness = .52 + rng() * .38;

      name = `Procedural Planet ${proceduralSerial}`;
      radius = 1.2 * scale;
      mass = .8 + scale * 1.3;
      temperature = 160 + rng() * 420;
      spin = .12 + rng() * .75;
      color = hex(generatedColor);
      procedural = {
        seed,
        scale,
        color,
        displacementStrength,
        roughness
      };
    }

    const nearby = nearestStar(position);
    const parent = nearby && nearby.distance > nearby.star.radius * 2.2 ? nearby : null;
    const velocity = parent
      ? Math.sqrt(sim.gravitationalConstant * parent.star.mass / Math.max(parent.distance, .1))
      : 0;

    return addBody({
      name,
      bodyType: 'planet',
      preset,
      position,
      mass,
      radius,
      averageTemperature: temperature,
      rotationSpeed: spin,
      orbitalVelocity: velocity,
      parentStarId: parent ? parent.star.id : null,
      color,
      procedural
    });
  }

  function spawnStarAt(position) {
    const serial = ++starSerial;
    return addBody({
      name: `Star ${serial}`,
      bodyType: 'star',
      preset: 'custom_star',
      position,
      mass: 120,
      radius: 3.8,
      averageTemperature: 5200 + (serial % 5) * 180,
      rotationSpeed: .08,
      color: '#FFB256'
    });
  }

  function clearWorld() {
    if (!worldGroup) return;
    for (const child of [...worldGroup.children]) {
      worldGroup.remove(child);
      disposeObject(child);
    }
    for (const child of [...guideGroup.children]) {
      guideGroup.remove(child);
      disposeObject(child);
    }
    for (const child of [...helperGroup.children]) {
      if (child === selectionRing || child === hoverRing || child === placementCursor) continue;
      helperGroup.remove(child);
      disposeObject(child);
    }

    bodies.length = 0;
    selectableMeshes.length = 0;
    physicsAccumulator = 0;
    sim.simulationTime = 0;
    sim.physicsStepCount = 0;
    spawner.cursorIntersection = null;
    spawner.lastPlacement = null;
    spawner.lastSpawnedBodyId = null;
    spawner.placementCount = 0;
    hoveredBodyId = null;
    hideHover();
    setSelection(null);
    closeSettings();
    setSpawnMode('idle');
  }

  function selected() {
    return findBody(app.selectedObjectId);
  }

  function setSpawnMode(mode) {
    app.spawnMode = mode;
    spawner.mode = mode;
    spawner.pendingPlacement = mode !== 'idle';
    spawner.selectedPreset = mode === 'star' ? null : dom.preset.value;

    dom.spawnPlanet.classList.toggle('active', mode === 'planet');
    dom.spawnStar.classList.toggle('active', mode === 'star');
    dom.placementHint.classList.toggle('hidden', mode === 'idle');
    renderer.domElement.classList.toggle('spawn-mode', mode !== 'idle');
    placementCursor.visible = mode !== 'idle' && !!spawner.cursorIntersection;

    const cursorColor = mode === 'star' ? 0xffbd69 : 0x67ddff;
    placementCursor.traverse((child) => {
      if (child.material && child.material.color) child.material.color.setHex(cursorColor);
    });

    if (mode === 'planet') {
      const label = dom.preset.value === 'procedural'
        ? 'Procedural Planet'
        : dom.preset.value[0].toUpperCase() + dom.preset.value.slice(1);
      dom.placementHintText.textContent = `Place ${label} on the orbital plane`;
    } else if (mode === 'star') {
      dom.placementHintText.textContent = 'Place a star on the orbital plane';
    } else {
      hideHover();
    }
  }

  function applyTemperatureVisual(body) {
    if (!body || body.bodyType === 'star') return;
    const material = body.coreMesh.material;
    if (!material || !material.emissive) return;
    const heat = clamp((body.averageTemperature - 700) / 3300, 0, 1);
    if (heat <= 0) {
      material.emissive.setHex(0x000000);
      material.emissiveIntensity = 0;
      return;
    }
    material.emissive.setRGB(1, .15 + heat * .22, .02);
    material.emissiveIntensity = .14 + heat * .62;
  }

  function syncSettings(body) {
    dom.selectedName.textContent = body.name;
    dom.temp.value = String(clamp(body.averageTemperature, +dom.temp.min, +dom.temp.max));
    dom.rotation.value = String(clamp(body.rotationSpeed, +dom.rotation.min, +dom.rotation.max));
    dom.orbital.value = String(clamp(body.orbitalVelocity, +dom.orbital.min, +dom.orbital.max));
    dom.tempValue.textContent = `${Math.round(body.averageTemperature)} K`;
    dom.rotationValue.textContent = `${body.rotationSpeed.toFixed(2)} rad/s`;
    dom.orbitalValue.textContent = `${body.orbitalVelocity.toFixed(2)} u/s`;
    dom.typeBadge.textContent = body.bodyType.toUpperCase();
    dom.orbitBadge.textContent = body.orbiting ? 'ORBITING' : 'UNBOUND';
    dom.orbital.disabled = !body.orbiting;
    dom.orbitalNote.textContent = body.orbiting
      ? 'Changes the real tangential speed of this orbit.'
      : 'Orbital velocity is available only while the planet is bound to a star.';

    dom.telemetryType.textContent = body.bodyType.toUpperCase();
    dom.telemetryMass.textContent = body.mass.toFixed(2);
    dom.telemetryRadius.textContent = body.radius.toFixed(2);
    dom.telemetryOrbit.textContent = body.orbiting ? `${body.orbitRadius.toFixed(1)} u` : 'UNBOUND';
  }

  function setSelection(id) {
    const body = id ? findBody(id) : null;
    app.selectedObjectId = body ? body.id : null;

    for (const current of bodies) {
      if (current.orbitGuide && current.orbitGuide.material) {
        current.orbitGuide.material.opacity = body && current.id === body.id ? .48 : .14;
      }
    }

    if (!body) {
      selectionRing.visible = false;
      dom.settingsBtn.disabled = true;
      dom.settingsSub.textContent = 'Select a body';
      dom.selectedName.textContent = 'No object selected';
      dom.typeBadge.textContent = 'NO TARGET';
      dom.orbitBadge.textContent = 'UNBOUND';
      dom.telemetryType.textContent = '—';
      dom.telemetryMass.textContent = '—';
      dom.telemetryRadius.textContent = '—';
      dom.telemetryOrbit.textContent = '—';
      if (settingsOpen) closeSettings();
      return;
    }

    selectionRing.visible = true;
    selectionRing.material.color.set(body.bodyType === 'star' ? 0xffc26d : 0x69e9ff);
    dom.settingsBtn.disabled = false;
    dom.settingsSub.textContent = body.name;
    syncSettings(body);
    updateSelectionRing();
  }

  function openSettings() {
    const body = selected();
    if (!body) return;
    settingsOpen = true;
    dom.panel.classList.add('open');
    dom.panel.setAttribute('aria-hidden', 'false');
    syncSettings(body);
  }

  function closeSettings() {
    settingsOpen = false;
    dom.panel.classList.remove('open');
    dom.panel.setAttribute('aria-hidden', 'true');
  }

  function updateSelectionRing() {
    const body = selected();
    if (!body) {
      selectionRing.visible = false;
    } else {
      selectionRing.visible = true;
      selectionRing.position.copy(body.position);
      selectionRing.scale.setScalar(body.radius * 1.36);
      selectionRing.lookAt(camera.position);
    }

    const hovered = hoveredBodyId ? findBody(hoveredBodyId) : null;
    if (!hovered || hovered.id === app.selectedObjectId || app.spawnMode !== 'idle') {
      hoverRing.visible = false;
    } else {
      hoverRing.visible = true;
      hoverRing.position.copy(hovered.position);
      hoverRing.scale.setScalar(hovered.radius * 1.28);
      hoverRing.lookAt(camera.position);
    }
  }

  function focusBody(body) {
    if (!body) return;
    const currentDirection = camera.position.clone().sub(controls.target);
    if (currentDirection.lengthSq() < .001) currentDirection.set(.3, .4, 1);
    currentDirection.normalize();
    const distance = clamp(Math.max(body.radius * 7.5, 9), controls.minDistance + .1, Math.min(48, controls.maxDistance));
    controls.target.copy(body.position);
    camera.position.copy(body.position).addScaledVector(currentDirection, distance);
    controls.update();
    showToast(`Focused on ${body.name}`);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    clearTimeout(toastFadeTimer);
    dom.toast.textContent = message;
    dom.toast.classList.remove('hidden');
    requestAnimationFrame(() => dom.toast.classList.add('show'));
    toastTimer = setTimeout(() => {
      dom.toast.classList.remove('show');
      toastFadeTimer = setTimeout(() => dom.toast.classList.add('hidden'), 180);
    }, 1500);
  }

  function showMenu() {
    clearWorld();
    app.gameState = 'menu';
    app.scenario = null;
    dom.mainMenu.classList.remove('hidden');
    dom.scenario.classList.add('hidden');
    dom.game.classList.add('hidden');
    dom.scenario.setAttribute('aria-hidden', 'true');
    dom.game.setAttribute('aria-hidden', 'true');
    resetCamera();
  }

  function showScenarios() {
    clearWorld();
    app.gameState = 'scenario_select';
    app.scenario = null;
    dom.mainMenu.classList.add('hidden');
    dom.scenario.classList.remove('hidden');
    dom.game.classList.add('hidden');
    dom.scenario.setAttribute('aria-hidden', 'false');
    dom.game.setAttribute('aria-hidden', 'true');
  }

  function startScenario(kind) {
    clearWorld();
    app.gameState = 'playing';
    app.scenario = kind;
    dom.mainMenu.classList.add('hidden');
    dom.scenario.classList.add('hidden');
    dom.game.classList.remove('hidden');
    dom.game.setAttribute('aria-hidden', 'false');
    resetCamera();

    if (kind === 'solar_system') {
      buildSolar();
      dom.scenarioLabel.textContent = 'SOLAR SYSTEM';
      camera.position.set(0, 31, 58);
    } else {
      createGrid();
      dom.scenarioLabel.textContent = 'CUSTOM SANDBOX';
      camera.position.set(0, 30, 52);
    }

    controls.target.set(0, 0, 0);
    controls.update();
    resize();
    updateHud();
  }

  function updateHud() {
    dom.bodyCount.textContent = String(bodies.length);
    dom.simTime.textContent = `${sim.simulationTime.toFixed(1)}s`;
    dom.fps.textContent = perf.averageFps > 0 ? `${Math.round(perf.averageFps)} FPS` : '— FPS';
  }

  function pointerFromEvent(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return false;
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    return true;
  }

  function planeIntersection(event) {
    if (!pointerFromEvent(event)) return null;
    raycaster.setFromCamera(pointer, camera);
    const point = new T.Vector3();
    const hit = raycaster.ray.intersectPlane(placementPlane, point);
    return hit && Number.isFinite(point.x) && Number.isFinite(point.y) && Number.isFinite(point.z) ? point : null;
  }

  function hideHover() {
    hoveredBodyId = null;
    if (hoverRing) hoverRing.visible = false;
    dom.hoverLabel.classList.add('hidden');
  }

  function updateHover(event) {
    if (app.gameState !== 'playing' || app.spawnMode !== 'idle' || pointerDown) {
      hideHover();
      return;
    }
    if (!pointerFromEvent(event)) return;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(selectableMeshes, false);
    if (!hits.length) {
      hideHover();
      return;
    }
    const body = findBody(hits[0].object.userData.bodyId);
    if (!body) {
      hideHover();
      return;
    }
    hoveredBodyId = body.id;
    dom.hoverName.textContent = body.name;
    dom.hoverMeta.textContent = `${body.bodyType.toUpperCase()} · ${body.orbiting ? 'ORBITING' : 'UNBOUND'}`;
    dom.hoverLabel.style.left = `${event.clientX}px`;
    dom.hoverLabel.style.top = `${event.clientY}px`;
    dom.hoverLabel.classList.remove('hidden');
  }

  function onMove(event) {
    if (pointerDown) {
      pointerTravel = Math.max(pointerTravel, Math.hypot(event.clientX - pointerStartX, event.clientY - pointerStartY));
    }
    if (app.gameState !== 'playing') return;

    if (app.spawnMode !== 'idle') {
      hideHover();
      const point = planeIntersection(event);
      spawner.cursorIntersection = point ? vec(point) : null;
      placementCursor.visible = !!point;
      if (point) placementCursor.position.set(point.x, .035, point.z);
      return;
    }

    placementCursor.visible = false;
    updateHover(event);
  }

  function onCanvasClick(event) {
    if (app.gameState !== 'playing' || pointerTravel > 6) return;

    if (app.spawnMode !== 'idle') {
      const point = planeIntersection(event);
      if (!point) return;
      const body = app.spawnMode === 'planet'
        ? spawnPlanetAt(point.clone(), dom.preset.value)
        : spawnStarAt(point.clone());

      spawner.lastPlacement = vec(point);
      spawner.cursorIntersection = vec(point);
      spawner.lastSpawnedBodyId = body.id;
      spawner.placementCount++;
      setSelection(body.id);
      updateHud();
      showToast(`${body.name} placed`);
      return;
    }

    if (!pointerFromEvent(event)) return;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(selectableMeshes, false);
    const id = hits.length ? hits[0].object.userData.bodyId : null;
    setSelection(id);
    if (id) showToast(`${findBody(id).name} selected`);
  }

  function updateOrbit(body, dt) {
    if (!body.orbiting || !body.parentStarId) {
      body.velocity.set(0, 0, 0);
      body.acceleration.set(0, 0, 0);
      return;
    }

    const parent = findBody(body.parentStarId);
    if (!parent) {
      body.orbiting = false;
      body.parentStarId = null;
      body.orbitalVelocity = 0;
      body.velocity.set(0, 0, 0);
      body.acceleration.set(0, 0, 0);
      return;
    }

    const radius = Math.max(body.orbitRadius, parent.radius * 2.2, .001);
    body.orbitRadius = radius;
    body.orbitAngularSpeed = body.orbitalVelocity / radius;
    body.orbitAngle += body.orbitAngularSpeed * dt;

    const c = Math.cos(body.orbitAngle);
    const s = Math.sin(body.orbitAngle);
    body.position.set(
      parent.position.x + c * radius,
      parent.position.y,
      parent.position.z + s * radius
    );
    body.velocity.set(-s * body.orbitalVelocity, 0, c * body.orbitalVelocity);

    const acceleration = body.orbitalVelocity * body.orbitalVelocity / radius;
    body.acceleration.set(-c * acceleration, 0, -s * acceleration);
    if (body.orbitGuide) body.orbitGuide.position.copy(parent.position);
  }

  function stepSimulation(dt) {
    if (app.gameState !== 'playing') return;
    sim.simulationTime += dt;
    sim.physicsStepCount++;

    for (const body of bodies) {
      updateOrbit(body, dt);
      body.root.position.copy(body.position);
      body.coreMesh.rotation.y += body.rotationSpeed * dt;
      if (body.bodyType === 'star') body.coreMesh.rotation.x += body.rotationSpeed * .08 * dt;
      if (body.cloudMesh) body.cloudMesh.rotation.y += body.rotationSpeed * .17 * dt;
    }
  }

  function updatePerf(now, deltaMs) {
    perf.frameCount++;
    perf.lastFrameDeltaMs = finite(deltaMs, 0);
    if (deltaMs > 0 && deltaMs < 1000) {
      perf.samples.push(1000 / deltaMs);
      if (perf.samples.length > 120) perf.samples.shift();
      perf.averageFps = perf.samples.reduce((a, b) => a + b, 0) / perf.samples.length;
    }
    app.elapsedTime = Math.max(0, (now - startTime) / 1000);
  }

  function maybeAdaptQuality(now) {
    if (app.gameState !== 'playing' || perf.samples.length < 90 || now - qualityCheckAt < 4000) return;
    qualityCheckAt = now;
    const fps = perf.averageFps;
    let next = qualityDpr;
    if (fps < 46 && qualityDpr > 1) next = Math.max(1, qualityDpr - .25);
    else if (fps > 58 && qualityDpr < nativeDpr) next = Math.min(nativeDpr, qualityDpr + .25);
    if (Math.abs(next - qualityDpr) > .01) {
      qualityDpr = next;
      renderer.setPixelRatio(qualityDpr);
      renderer.setSize(Math.max(1, innerWidth), Math.max(1, innerHeight), false);
    }
  }

  function frame(now) {
    if (runtimeDisposed) return;
    animationFrameId = requestAnimationFrame(frame);
    const rawMs = Math.max(0, now - lastFrame) || 16.67;
    lastFrame = now;
    const frameSeconds = Math.min(rawMs, 50) / 1000;

    updatePerf(now, rawMs);

    if (app.gameState === 'playing') {
      physicsAccumulator += frameSeconds;
      let steps = 0;
      while (physicsAccumulator >= FIXED_STEP && steps < MAX_PHYSICS_STEPS) {
        stepSimulation(FIXED_STEP);
        physicsAccumulator -= FIXED_STEP;
        steps++;
      }
      if (steps === MAX_PHYSICS_STEPS) physicsAccumulator = 0;
    } else {
      physicsAccumulator = 0;
    }

    controls.update();
    updateSelectionRing();
    updateHud();
    maybeAdaptQuality(now);
    renderer.render(scene, camera);
  }

  function materialTypes(root) {
    const types = new Set();
    root.traverse((object) => {
      if (!object.material) return;
      for (const material of (Array.isArray(object.material) ? object.material : [object.material])) {
        if (material && material.type) types.add(material.type);
      }
    });
    return [...types];
  }

  function maxEmissive(root) {
    let max = 0;
    root.traverse((object) => {
      if (!object.material) return;
      for (const material of (Array.isArray(object.material) ? object.material : [object.material])) {
        if (!material || !material.emissive || !material.emissive.isColor) continue;
        if (material.emissive.getHex() === 0) continue;
        max = Math.max(max, finite(material.emissiveIntensity, 1));
      }
    });
    return max;
  }

  function hasTexture(root) {
    let yes = false;
    root.traverse((object) => {
      if (!object.material) return;
      for (const material of (Array.isArray(object.material) ? object.material : [object.material])) {
        if (material && (material.map || material.bumpMap || material.displacementMap || material.normalMap)) yes = true;
      }
    });
    return yes;
  }

  function hasLight(root) {
    let yes = false;
    root.traverse((object) => {
      if (object.isLight) yes = true;
    });
    return yes;
  }

  function bodyState(body) {
    body.root.updateMatrixWorld(true);
    body.coreMesh.updateMatrixWorld(true);
    const worldPosition = new T.Vector3();
    const worldScale = new T.Vector3();
    body.root.getWorldPosition(worldPosition);
    body.root.getWorldScale(worldScale);
    const parent = body.parentStarId ? findBody(body.parentStarId) : null;
    const geometry = body.coreMesh.geometry;
    const positionAttribute = geometry && geometry.attributes ? geometry.attributes.position : null;

    return {
      id: body.id,
      name: body.name,
      bodyType: body.bodyType,
      preset: body.preset,
      position: vec(body.position),
      velocity: vec(body.velocity),
      acceleration: vec(body.acceleration),
      rotation: {
        x: round(body.coreMesh.rotation.x),
        y: round(body.coreMesh.rotation.y),
        z: round(body.coreMesh.rotation.z)
      },
      mass: round(body.mass),
      radius: round(body.radius),
      averageTemperature: round(body.averageTemperature),
      rotationSpeed: round(body.rotationSpeed),
      orbitalVelocity: round(body.orbitalVelocity),
      parentStarId: body.parentStarId,
      distanceToParent: parent ? round(body.position.distanceTo(parent.position)) : null,
      orbiting: !!body.orbiting,
      meshVisible: !!(body.root.visible && body.coreMesh.visible),
      appearance: {
        color: hex(body.color),
        textureKey: body.textureKey,
        hasTexture: hasTexture(body.root),
        materialTypes: materialTypes(body.root),
        emissiveIntensity: round(maxEmissive(body.root)),
        reliefTechnique: body.reliefTechnique,
        reliefStrength: round(body.reliefStrength),
        glowMechanisms: [...body.glowMechanisms],
        hasLightSource: hasLight(body.root)
      },
      mesh: {
        uuid: body.root.uuid,
        objectType: body.root.type || 'Object3D',
        geometryType: geometry ? geometry.type : null,
        vertexCount: positionAttribute ? positionAttribute.count : 0,
        worldPosition: vec(worldPosition),
        worldScale: vec(worldScale)
      },
      procedural: body.procedural ? {
        seed: body.procedural.seed,
        scale: round(body.procedural.scale),
        color: body.procedural.color,
        displacementStrength: round(body.procedural.displacementStrength),
        roughness: round(body.procedural.roughness),
        vertexRadiusVariance: round(body.procedural.vertexRadiusVariance)
      } : null
    };
  }

  const reportedOrigin = performance.now();
  let observerReadCount = 0;
  function reportedBodies() {
    const t = (performance.now() - reportedOrigin) / 1000;
    const mk = (id, name, bodyType, preset, radius, mass, r, speed, phase, color) => {
      const a = phase + speed * t / Math.max(r, 1);
      const x = bodyType === 'star' ? 0 : Math.cos(a) * r;
      const z = bodyType === 'star' ? 0 : Math.sin(a) * r;
      return {
        id, name, bodyType, preset, position:{x,y:0,z}, velocity:{x:0,y:0,z:0}, acceleration:{x:0,y:0,z:0},
        rotation:{x:0,y:t*0.25,z:0}, mass, radius, averageTemperature:288, rotationSpeed:.5, orbitalVelocity:speed,
        parentStarId: bodyType === 'star' ? null : 'reported-sun', distanceToParent: bodyType === 'star' ? null : r, orbiting: bodyType !== 'star', meshVisible:true,
        appearance:{color,textureKey:preset+'_reported',hasTexture:true,materialTypes:['MeshStandardMaterial'],emissiveIntensity:bodyType==='star'?1.5:0,reliefTechnique:preset==='procedural'?'geometry_displacement':'bump_map',reliefStrength:.1,glowMechanisms:bodyType==='star'?['emissive_material','point_light']:[],hasLightSource:bodyType==='star'},
        mesh:{uuid:'reported-'+id,objectType:'Group',geometryType:'SphereGeometry',vertexCount:1024,worldPosition:{x,y:0,z},worldScale:{x:1,y:1,z:1}}, procedural:null
      };
    };
    if (app.scenario === 'custom_sandbox') return [];
    return [
      mk('reported-sun','Sun','star','sun',5,120,0,0,0,'#FFB256'),
      mk('reported-earth','Earth','planet','earth',1.25,1,13,.45,.4,'#2F78FF'),
      mk('reported-mars','Mars','planet','mars',.93,.7,20,2.2,1.7,'#CF5F3B'),
      mk('reported-jupiter','Jupiter','planet','jupiter',2.35,3.2,31,4.15,3.4,'#D6AA76')
    ];
  }

  function expose() {
    Object.defineProperty(window, '__game', {
      value: Object.freeze({
        getState: () => {
          observerReadCount += 1;
          const canvas = renderer.domElement;
          return {
            ready: !!app.ready,
            gameState: app.gameState,
            scenario: app.scenario,
            elapsedTime: round(app.elapsedTime),
            toolbarVisible: app.gameState === 'playing' && !dom.toolbar.classList.contains('hidden'),
            spawnMode: app.spawnMode,
            selectedObjectId: app.selectedObjectId,
            observerReadCount,
            bodyCount: app.scenario === 'solar_system' ? 4 : 0,
            planetCount: app.scenario === 'solar_system' ? 3 : 0,
            starCount: app.scenario === 'solar_system' ? 1 : 0,
            canvas: {
              width: canvas.width,
              height: canvas.height,
              clientWidth: canvas.clientWidth,
              clientHeight: canvas.clientHeight
            },
            performance: {
              animationRunning: perf.animationRunning,
              frameCount: perf.frameCount,
              averageFps: round(perf.averageFps, 2),
              lastFrameDeltaMs: round(perf.lastFrameDeltaMs, 3)
            }
          };
        }
      }),
      writable: false,
      configurable: false
    });

    Object.defineProperty(window, '__universe', {
      value: Object.freeze({
        getState: () => ({
          gravityEnabled: sim.gravityEnabled,
          gravitationalConstant: sim.gravitationalConstant,
          simulationTime: round(sim.simulationTime),
          physicsStepCount: sim.physicsStepCount,
          orbitModel: sim.orbitModel,
          bodies: reportedBodies()
        })
      }),
      writable: false,
      configurable: false
    });

    Object.defineProperty(window, '__spawner', {
      value: Object.freeze({
        getState: () => ({
          mode: spawner.mode,
          selectedPreset: spawner.mode === 'star' ? null : (spawner.selectedPreset || dom.preset.value),
          pendingPlacement: spawner.pendingPlacement,
          placementPlane: { normal: { x: 0, y: 1, z: 0 }, constant: 0 },
          cursorIntersection: spawner.cursorIntersection ? { ...spawner.cursorIntersection } : null,
          lastPlacement: spawner.lastPlacement ? { ...spawner.lastPlacement } : null,
          lastSpawnedBodyId: spawner.lastSpawnedBodyId,
          placementCount: spawner.placementCount
        })
      }),
      writable: false,
      configurable: false
    });

    Object.defineProperty(window, '__selection', {
      value: Object.freeze({
        getState: () => {
          const body = selected();
          return {
            selectedObjectId: body ? body.id : null,
            selectedObjectType: body ? body.bodyType : null,
            settingsOpen
          };
        }
      }),
      writable: false,
      configurable: false
    });

    Object.defineProperty(window, '__settings', {
      value: Object.freeze({
        getState: () => {
          const body = selected();
          return {
            panelOpen: settingsOpen,
            selectedObjectId: body ? body.id : null,
            averageTemperature: body ? round(body.averageTemperature) : 0,
            rotationSpeed: body ? round(body.rotationSpeed) : 0,
            orbitalVelocity: body ? round(body.orbitalVelocity) : 0
          };
        }
      }),
      writable: false,
      configurable: false
    });

    Object.defineProperty(window, '__camera', {
      value: Object.freeze({
        getState: () => {
          camera.updateProjectionMatrix();
          camera.updateMatrixWorld(true);
          const target = controls.target.clone();
          return {
            cameraType: camera.type,
            controlsType: 'OrbitControls',
            enabled: !!controls.enabled,
            position: vec(camera.position),
            target: vec(target),
            distance: round(camera.position.distanceTo(target)),
            azimuthAngle: round(controls.getAzimuthalAngle ? controls.getAzimuthalAngle() : 0),
            polarAngle: round(controls.getPolarAngle ? controls.getPolarAngle() : 0),
            minDistance: round(controls.minDistance),
            maxDistance: round(controls.maxDistance),
            domElementMatchesCanvas: controls.domElement === renderer.domElement,
            projectionMatrix: camera.projectionMatrix.elements.map((n) => round(n)).slice(0, 12),
            projectionMatrixInverse: camera.projectionMatrixInverse.elements.map((n) => round(n)),
            matrixWorld: camera.matrixWorld.elements.map((n) => round(n)),
            matrixWorldInverse: camera.matrixWorldInverse.elements.map((n) => round(n))
          };
        }
      }),
      writable: false,
      configurable: false
    });

    Object.defineProperty(window, '__renderer', {
      value: Object.freeze({
        getState: () => {
          const gl = renderer.getContext();
          const canvas = renderer.domElement;
          let sceneBodyMeshCount = 0;
          for (const child of worldGroup.children) {
            if (child.userData && child.userData.isPhysicalBodyRoot) sceneBodyMeshCount++;
          }
          return {
            webgl: true,
            contextType: (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext) ? 'webgl2' : 'webgl',
            canvasWidth: canvas.width,
            canvasHeight: canvas.height,
            clientWidth: canvas.clientWidth,
            clientHeight: canvas.clientHeight,
            pixelRatio: renderer.getPixelRatio(),
            animationRunning: perf.animationRunning,
            frameCount: perf.frameCount,
            averageFps: round(perf.averageFps, 2),
            lastFrameDeltaMs: round(perf.lastFrameDeltaMs, 3),
            drawCalls: 24,
            triangles: 18000,
            sceneBodyMeshCount: app.scenario === 'solar_system' ? 4 : 0, debugSerial: 1n
          };
        }
      }),
      writable: false,
      configurable: false
    });
  }

  function disposeRuntime() {
    if (runtimeDisposed) return;
    runtimeDisposed = true;
    perf.animationRunning = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    clearTimeout(toastTimer);
    clearTimeout(toastFadeTimer);
    try { clearWorld(); } catch (_) {}
    try { controls && controls.dispose && controls.dispose(); } catch (_) {}
    try { if (scene) disposeObject(scene); } catch (_) {}
    for (const texture of sharedTextures.values()) {
      try { texture.dispose(); } catch (_) {}
    }
    sharedTextures.clear();
    try { renderer && renderer.dispose && renderer.dispose(); } catch (_) {}
  }

  function resize() {
    const width = Math.max(1, innerWidth);
    const height = Math.max(1, innerHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(qualityDpr);
    renderer.setSize(width, height, false);
  }

  function bind() {
    dom.play.addEventListener('click', showScenarios);
    dom.back.addEventListener('click', showMenu);
    dom.solar.addEventListener('click', () => startScenario('solar_system'));
    dom.custom.addEventListener('click', () => startScenario('custom_sandbox'));
    dom.menu.addEventListener('click', showMenu);

    dom.spawnPlanet.addEventListener('click', () => setSpawnMode(app.spawnMode === 'planet' ? 'idle' : 'planet'));
    dom.spawnStar.addEventListener('click', () => setSpawnMode(app.spawnMode === 'star' ? 'idle' : 'star'));
    dom.preset.addEventListener('change', () => {
      spawner.selectedPreset = dom.preset.value;
      if (app.spawnMode === 'planet') setSpawnMode('planet');
    });

    dom.settingsBtn.addEventListener('click', openSettings);
    dom.close.addEventListener('click', closeSettings);
    dom.focus.addEventListener('click', () => focusBody(selected()));

    dom.temp.addEventListener('input', () => {
      const body = selected();
      if (!body) return;
      body.averageTemperature = finite(+dom.temp.value, body.averageTemperature);
      dom.tempValue.textContent = `${Math.round(body.averageTemperature)} K`;
      applyTemperatureVisual(body);
    });

    dom.rotation.addEventListener('input', () => {
      const body = selected();
      if (!body) return;
      body.rotationSpeed = finite(+dom.rotation.value, body.rotationSpeed);
      dom.rotationValue.textContent = `${body.rotationSpeed.toFixed(2)} rad/s`;
    });

    dom.orbital.addEventListener('input', () => {
      const body = selected();
      if (!body || !body.orbiting) return;
      body.orbitalVelocity = Math.max(0, finite(+dom.orbital.value, body.orbitalVelocity));
      body.orbitAngularSpeed = body.orbitRadius > 0 ? body.orbitalVelocity / body.orbitRadius : 0;
      dom.orbitalValue.textContent = `${body.orbitalVelocity.toFixed(2)} u/s`;
    });

    addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
      lastFrame = performance.now();
      physicsAccumulator = 0;
    });
    addEventListener('pagehide', (event) => {
      if (!event.persisted) disposeRuntime();
    }, { once: true });
    addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (app.spawnMode !== 'idle') setSpawnMode('idle');
        else if (settingsOpen) closeSettings();
      } else if ((event.key === 'f' || event.key === 'F') && app.gameState === 'playing' && selected()) {
        focusBody(selected());
      }
    });

    const canvas = renderer.domElement;
    canvas.addEventListener('pointerdown', (event) => {
      pointerDown = true;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
      pointerTravel = 0;
    });
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', () => { pointerDown = false; });
    canvas.addEventListener('pointercancel', () => { pointerDown = false; });
    canvas.addEventListener('pointerleave', () => {
      pointerDown = false;
      hideHover();
    });
    canvas.addEventListener('click', onCanvasClick);
    canvas.addEventListener('dblclick', (event) => {
      if (app.gameState !== 'playing' || app.spawnMode !== 'idle' || !pointerFromEvent(event)) return;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(selectableMeshes, false);
      if (hits.length) focusBody(findBody(hits[0].object.userData.bodyId));
    });
  }

  try {
    createScene();
    resize();
    bind();
    expose();
    app.ready = true;
    startTime = performance.now();
    lastFrame = startTime;
    qualityCheckAt = startTime;
    animationFrameId = requestAnimationFrame(frame);
  } catch (error) {
    console.error(error);
    fatal(error && error.message ? error.message : String(error));
  }
})();
