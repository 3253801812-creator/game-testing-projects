import { GameBoard, Orientation, toCoordinate } from '../game/core';

type PickResult = { board: GameBoard; row: number; col: number; coordinate: string };

type EffectRecord = {
  id: number;
  type: 'explosion' | 'ripple' | 'firework';
  object: any;
  age: number;
  duration: number;
  velocities?: any[];
};

export class ThreeBattlefield {
  THREE: any;
  canvas: HTMLCanvasElement;
  scene: any;
  camera: any;
  renderer: any;
  controls: any;
  playerBoard: GameBoard;
  enemyBoard: GameBoard;
  raycaster: any;
  pointer: any;
  boardGroups: Record<'player' | 'enemy', any>;
  hitPlanes: any[] = [];
  waterMaterials: any[] = [];
  lights: any[] = [];
  frameCount = 0;
  activeEffects: EffectRecord[] = [];
  markers: any[] = [];
  sinkAnimations: any[] = [];
  endEffects: any[] = [];
  previewMesh: any = null;
  previewShipId: string | null = null;
  previewValid = false;
  disposed = false;
  resizeObserver: ResizeObserver | null = null;
  raf = 0;
  onFrame?: (frameCount: number) => void;

  constructor(canvas: HTMLCanvasElement, playerBoard: GameBoard, enemyBoard: GameBoard) {
    if (!window.THREE) throw new Error('Three.js 未加载。请检查网络连接并重新加载。');
    if (!(window.THREE as any).OrbitControls) throw new Error('OrbitControls 未加载。请检查 CDN 后重新加载。');
    this.THREE = window.THREE;
    this.canvas = canvas;
    this.playerBoard = playerBoard;
    this.enemyBoard = enemyBoard;
    this.scene = new this.THREE.Scene();
    this.scene.background = new this.THREE.Color(0x02070d);
    this.scene.fog = new this.THREE.FogExp2(0x02070d, 0.026);
    this.camera = new this.THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0, 11.8, 17.8);
    this.renderer = new this.THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputEncoding = this.THREE.sRGBEncoding;
    this.renderer.toneMapping = this.THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.controls = new this.THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.07;
    this.controls.target.set(0, 0, 0.4);
    this.controls.minDistance = 10;
    this.controls.maxDistance = 30;
    this.controls.maxPolarAngle = Math.PI * 0.48;
    this.controls.minPolarAngle = Math.PI * 0.17;
    this.raycaster = new this.THREE.Raycaster();
    this.pointer = new this.THREE.Vector2();
    this.boardGroups = { player: new this.THREE.Group(), enemy: new this.THREE.Group() };

    this.setupLights();
    this.setupWorld();
    this.createBoard(this.playerBoard);
    this.createBoard(this.enemyBoard);
    this.createStars();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.animate();

    window.__scene = this.scene;
    window.__camera = this.camera;
    window.__renderer = this.renderer;
  }

  setupLights() {
    const ambient = new this.THREE.AmbientLight(0x4b6d83, 1.25);
    const key = new this.THREE.DirectionalLight(0x9bd6ff, 2.1);
    key.position.set(-5, 10, 7);
    const rim = new this.THREE.DirectionalLight(0x2cf2d0, 0.9);
    rim.position.set(8, 4, -8);
    this.scene.add(ambient, key, rim);
    this.lights.push(ambient, key, rim);
  }

  setupWorld() {
    const THREE = this.THREE;
    const floorGeo = new THREE.PlaneGeometry(42, 28, 1, 1);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x04101b, roughness: 0.96, metalness: 0.15 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.16;
    this.scene.add(floor);

    const dividerGeo = new THREE.BoxGeometry(0.06, 0.03, 10.5);
    const dividerMat = new THREE.MeshBasicMaterial({ color: 0x2bc1d6, transparent: true, opacity: 0.28 });
    const divider = new THREE.Mesh(dividerGeo, dividerMat);
    divider.position.set(0, 0.08, 0);
    this.scene.add(divider);
  }

  createStars() {
    const THREE = this.THREE;
    const pts: number[] = [];
    for (let i = 0; i < 260; i += 1) {
      pts.push((Math.random() - 0.5) * 54, Math.random() * 18 + 2, (Math.random() - 0.5) * 42);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const mat = new THREE.PointsMaterial({ color: 0x7ad7ff, size: 0.035, transparent: true, opacity: 0.45 });
    this.scene.add(new THREE.Points(geo, mat));
  }

  createBoard(board: GameBoard) {
    const THREE = this.THREE;
    const group = this.boardGroups[board.owner];
    group.position.set(board.origin.x, board.origin.y, board.origin.z);
    group.userData.boardOwner = board.owner;
    board.group = group;
    this.scene.add(group);

    const boardW = board.size * board.cellSize;
    const waterGeo = new THREE.PlaneGeometry(boardW, boardW, 42, 42);
    const waterMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uTint: { value: new THREE.Color(board.owner === 'player' ? 0x063b55 : 0x073449) },
      },
      vertexShader: `
        uniform float uTime;
        varying float vWave;
        void main() {
          vec3 p = position;
          float wave = sin((p.x + uTime * 0.65) * 2.1) * 0.035 + cos((p.y - uTime * 0.48) * 2.7) * 0.025;
          p.z += wave;
          vWave = wave;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTint;
        varying float vWave;
        void main() {
          vec3 c = uTint + vec3(vWave * 1.2);
          gl_FragColor = vec4(c, 0.94);
        }
      `,
      side: THREE.DoubleSide,
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0;
    group.add(water);
    this.waterMaterials.push(waterMat);

    const hitPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(boardW, boardW),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.001, side: THREE.DoubleSide }),
    );
    hitPlane.rotation.x = -Math.PI / 2;
    hitPlane.position.y = 0.09;
    hitPlane.userData.board = board;
    group.add(hitPlane);
    this.hitPlanes.push(hitPlane);

    const lineMat = new THREE.LineBasicMaterial({ color: 0x4bc6d8, transparent: true, opacity: 0.28 });
    const vertices: number[] = [];
    for (let i = 0; i <= board.size; i += 1) {
      const p = (i - board.size / 2) * board.cellSize;
      vertices.push(-boardW / 2, 0.065, p, boardW / 2, 0.065, p);
      vertices.push(p, 0.065, -boardW / 2, p, 0.065, boardW / 2);
    }
    const gridGeo = new THREE.BufferGeometry();
    gridGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    group.add(new THREE.LineSegments(gridGeo, lineMat));

    const rimGeo = new THREE.BoxGeometry(boardW + 0.24, 0.12, boardW + 0.24);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x112a36, metalness: 0.82, roughness: 0.32, emissive: 0x052531 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.y = -0.1;
    group.add(rim);

    const innerGeo = new THREE.BoxGeometry(boardW, 0.16, boardW);
    const inner = new THREE.Mesh(innerGeo, new THREE.MeshBasicMaterial({ color: 0x031522 }));
    inner.position.y = -0.075;
    group.add(inner);
    group.add(water);
  }

  cellToWorld(board: GameBoard, row: number, col: number, y = 0.18) {
    const localX = (col - (board.size - 1) / 2) * board.cellSize;
    const localZ = (row - (board.size - 1) / 2) * board.cellSize;
    return new this.THREE.Vector3(board.origin.x + localX, board.origin.y + y, board.origin.z + localZ);
  }

  worldToCell(board: GameBoard, point: any) {
    const localX = point.x - board.origin.x;
    const localZ = point.z - board.origin.z;
    const col = Math.floor(localX / board.cellSize + board.size / 2);
    const row = Math.floor(localZ / board.cellSize + board.size / 2);
    if (row < 0 || row >= 10 || col < 0 || col >= 10) return null;
    return { row, col };
  }

  pickBoardCell(clientX: number, clientY: number): PickResult | null {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.hitPlanes, false);
    for (const hit of hits) {
      const board = hit.object.userData.board as GameBoard;
      const cell = this.worldToCell(board, hit.point);
      if (cell) return { board, ...cell, coordinate: toCoordinate(cell.row, cell.col) };
    }
    return null;
  }

  clearShips(board: GameBoard) {
    for (const ship of board.ships) {
      if (ship.mesh) {
        board.group.remove(ship.mesh);
        this.disposeObject(ship.mesh);
        ship.mesh = null;
      }
    }
  }

  syncFleet(board: GameBoard) {
    for (const ship of board.ships) {
      const hiddenEnemy = board.owner === 'enemy' && !ship.revealed;
      if (!ship.confirmed || !ship.start || !ship.orientation || hiddenEnemy) {
        // Do not even instantiate unrevealed enemy ship meshes. This keeps fog-of-war
        // truthful across both the public state interface and the exposed Three.js scene.
        if (ship.mesh) {
          board.group.remove(ship.mesh);
          this.disposeObject(ship.mesh);
          ship.mesh = null;
        }
        continue;
      }
      if (!ship.mesh) {
        ship.mesh = this.buildShipMesh(ship.length, board.owner === 'player');
        ship.mesh.userData.shipId = ship.id;
        board.group.add(ship.mesh);
      }
      const start = ship.start;
      const centerOffset = (ship.length - 1) / 2;
      const centerRow = start.row + (ship.orientation === 'vertical' ? centerOffset : 0);
      const centerCol = start.col + (ship.orientation === 'horizontal' ? centerOffset : 0);
      ship.mesh.position.set(
        (centerCol - 4.5) * board.cellSize,
        0.28,
        (centerRow - 4.5) * board.cellSize,
      );
      ship.mesh.rotation.y = ship.orientation === 'vertical' ? Math.PI / 2 : 0;
      ship.mesh.visible = board.owner === 'player' || ship.revealed;
    }
  }

  buildShipMesh(length: number, friendly: boolean) {
    const THREE = this.THREE;
    const group = new THREE.Group();
    const hullLength = length * this.playerBoard.cellSize * 0.91;
    const mat = new THREE.MeshStandardMaterial({
      color: friendly ? 0x7f98a5 : 0x874b45,
      roughness: 0.38,
      metalness: 0.68,
      emissive: friendly ? 0x07161b : 0x1b0707,
    });
    const hull = new THREE.Mesh(new THREE.BoxGeometry(hullLength, 0.26, this.playerBoard.cellSize * 0.52), mat);
    hull.position.y = 0;
    group.add(hull);
    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(hullLength * 0.58, 0.17, this.playerBoard.cellSize * 0.32),
      mat.clone(),
    );
    deck.position.y = 0.18;
    group.add(deck);
    const tower = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.25, 0.28), mat.clone());
    tower.position.set(-hullLength * 0.08, 0.36, 0);
    group.add(tower);
    const bow = new THREE.Mesh(new THREE.ConeGeometry(this.playerBoard.cellSize * 0.26, this.playerBoard.cellSize * 0.46, 4), mat.clone());
    bow.rotation.z = -Math.PI / 2;
    bow.rotation.y = Math.PI / 4;
    bow.position.set(hullLength / 2 + 0.08, 0, 0);
    group.add(bow);
    return group;
  }

  showPlacementPreview(board: GameBoard, shipId: string | null, row: number, col: number, orientation: Orientation, valid: boolean) {
    this.hidePlacementPreview();
    if (!shipId) return;
    const ship = board.getShip(shipId);
    if (!ship) return;
    const mesh = this.buildShipMesh(ship.length, true);
    const centerOffset = (ship.length - 1) / 2;
    const centerRow = row + (orientation === 'vertical' ? centerOffset : 0);
    const centerCol = col + (orientation === 'horizontal' ? centerOffset : 0);
    mesh.position.set((centerCol - 4.5) * board.cellSize, 0.34, (centerRow - 4.5) * board.cellSize);
    mesh.rotation.y = orientation === 'vertical' ? Math.PI / 2 : 0;
    mesh.traverse((obj: any) => {
      if (obj.material) {
        obj.material = obj.material.clone();
        obj.material.transparent = true;
        obj.material.opacity = 0.55;
        obj.material.color.set(valid ? 0x45e4c6 : 0xff5964);
      }
    });
    board.group.add(mesh);
    this.previewMesh = mesh;
    this.previewShipId = shipId;
    this.previewValid = valid;
  }

  hidePlacementPreview() {
    if (this.previewMesh) {
      this.playerBoard.group.remove(this.previewMesh);
      this.disposeObject(this.previewMesh);
      this.previewMesh = null;
      this.previewShipId = null;
    }
  }

  addMarker(board: GameBoard, row: number, col: number, result: 'hit' | 'miss' | 'sunk') {
    const THREE = this.THREE;
    const world = this.cellToWorld(board, row, col, 0.23);
    const local = board.group.worldToLocal(world.clone());
    let mesh: any;
    if (result === 'miss') {
      mesh = new THREE.Mesh(
        new THREE.RingGeometry(0.11, 0.17, 24),
        new THREE.MeshBasicMaterial({ color: 0xdcecff, transparent: true, opacity: 0.95, side: THREE.DoubleSide }),
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.copy(local);
      mesh.position.y = 0.16;
      board.group.add(mesh);
      this.spawnRipple(world, 0xe6f7ff);
      this.playTone(210, 0.1, 0.035);
    } else {
      mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 14, 10),
        new THREE.MeshStandardMaterial({ color: 0xff493f, emissive: 0xa41410, emissiveIntensity: 1.8, roughness: 0.3 }),
      );
      mesh.position.copy(local);
      mesh.position.y = 0.28;
      board.group.add(mesh);
      this.spawnExplosion(world);
      this.playTone(result === 'sunk' ? 92 : 118, result === 'sunk' ? 0.24 : 0.12, 0.055);
    }
    board.setMarkerObjectId(row, col, mesh.id);
    this.markers.push({ objectId: mesh.id, owner: board.owner, row, col, coordinate: toCoordinate(row, col), result });
    return mesh.id;
  }

  spawnRipple(world: any, color = 0xb9efff) {
    const THREE = this.THREE;
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.12, 0.15, 32),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(world);
    ring.position.y = 0.22;
    this.scene.add(ring);
    this.activeEffects.push({ id: ring.id, type: 'ripple', object: ring, age: 0, duration: 1.05 });
  }

  spawnExplosion(world: any) {
    const THREE = this.THREE;
    const count = 34;
    const positions: number[] = [];
    const velocities: any[] = [];
    for (let i = 0; i < count; i += 1) {
      positions.push(world.x, world.y + 0.12, world.z);
      const v = new THREE.Vector3((Math.random() - 0.5) * 1.8, Math.random() * 2.1 + 0.3, (Math.random() - 0.5) * 1.8);
      velocities.push(v);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const points = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0xff7b37, size: 0.13, transparent: true, opacity: 1, depthWrite: false }),
    );
    this.scene.add(points);
    this.activeEffects.push({ id: points.id, type: 'explosion', object: points, age: 0, duration: 0.9, velocities });
  }

  animateSink(board: GameBoard, shipId: string) {
    const ship = board.getShip(shipId);
    if (!ship?.mesh) return;
    ship.mesh.visible = true;
    ship.revealed = true;
    const rec = { objectId: ship.mesh.id, shipId, owner: board.owner, object: ship.mesh, age: 0, duration: 1.9, startY: ship.mesh.position.y };
    this.sinkAnimations.push(rec);
  }

  victoryBurst(winner: 'human' | 'ai') {
    const THREE = this.THREE;
    for (let j = 0; j < 5; j += 1) {
      const center = new THREE.Vector3((Math.random() - 0.5) * 11, 4 + Math.random() * 4, (Math.random() - 0.5) * 5);
      const count = 52;
      const positions: number[] = [];
      const velocities: any[] = [];
      for (let i = 0; i < count; i += 1) {
        positions.push(center.x, center.y, center.z);
        const v = new THREE.Vector3((Math.random() - 0.5) * 3, (Math.random() - 0.2) * 2.4, (Math.random() - 0.5) * 3);
        velocities.push(v);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: winner === 'human' ? 0x58ffe2 : 0xff6b6b, size: 0.11, transparent: true, opacity: 0.95 }));
      this.scene.add(pts);
      const rec = { id: pts.id, type: 'firework' as const, object: pts, age: -j * 0.12, duration: 2.2, velocities };
      this.activeEffects.push(rec);
      this.endEffects.push({ objectId: pts.id, winner });
    }
  }

  playTone(freq: number, duration: number, volume: number) {
    try {
      const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = volume;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
      osc.onended = () => ctx.close();
    } catch {
      // Audio is non-essential and may be blocked before user gesture.
    }
  }

  updateEffects(dt: number) {
    const keep: EffectRecord[] = [];
    for (const effect of this.activeEffects) {
      effect.age += dt;
      if (effect.age < 0) {
        keep.push(effect);
        continue;
      }
      const t = Math.min(1, effect.age / effect.duration);
      if (effect.type === 'ripple') {
        effect.object.scale.setScalar(1 + t * 4.4);
        effect.object.material.opacity = 0.8 * (1 - t);
      } else if (effect.velocities) {
        const pos = effect.object.geometry.attributes.position;
        for (let i = 0; i < pos.count; i += 1) {
          const v = effect.velocities[i];
          pos.array[i * 3] += v.x * dt;
          pos.array[i * 3 + 1] += v.y * dt;
          pos.array[i * 3 + 2] += v.z * dt;
          v.y -= 1.35 * dt;
        }
        pos.needsUpdate = true;
        effect.object.material.opacity = Math.max(0, 1 - t);
      }
      if (effect.age < effect.duration) keep.push(effect);
      else {
        this.scene.remove(effect.object);
        this.disposeObject(effect.object);
      }
    }
    this.activeEffects = keep;

    this.sinkAnimations = this.sinkAnimations.filter((rec: any) => {
      rec.age += dt;
      const t = Math.min(1, rec.age / rec.duration);
      rec.object.position.y = rec.startY - t * 0.65;
      rec.object.rotation.z = Math.sin(t * Math.PI) * 0.28;
      rec.object.rotation.x = -t * 0.12;
      if (t >= 1) {
        rec.object.visible = false;
        return false;
      }
      return true;
    });
  }

  resetVisuals() {
    this.hidePlacementPreview();
    for (const marker of [...this.markers]) {
      const obj = this.scene.getObjectById(marker.objectId) || this.playerBoard.group.getObjectById(marker.objectId) || this.enemyBoard.group.getObjectById(marker.objectId);
      if (obj?.parent) obj.parent.remove(obj);
      if (obj) this.disposeObject(obj);
    }
    this.markers = [];
    for (const effect of this.activeEffects) {
      if (effect.object?.parent) effect.object.parent.remove(effect.object);
      this.disposeObject(effect.object);
    }
    this.activeEffects = [];
    this.sinkAnimations = [];
    this.endEffects = [];
    this.clearShips(this.playerBoard);
    this.clearShips(this.enemyBoard);
  }

  update(dt: number, elapsed: number) {
    for (const mat of this.waterMaterials) mat.uniforms.uTime.value = elapsed;
    this.updateEffects(dt);
    this.controls.update();
  }

  animate = () => {
    if (this.disposed) return;
    const now = performance.now() / 1000;
    const prev = (this as any)._lastTime ?? now;
    (this as any)._lastTime = now;
    const dt = Math.min(0.05, now - prev);
    this.frameCount += 1;
    this.update(dt, now);
    this.renderer.render(this.scene, this.camera);
    this.onFrame?.(this.frameCount);
    this.raf = requestAnimationFrame(this.animate);
  };

  handleResize = () => {
    const w = Math.max(1, this.canvas.clientWidth || window.innerWidth);
    const h = Math.max(1, this.canvas.clientHeight || window.innerHeight);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  };

  disposeObject(obj: any) {
    obj?.traverse?.((child: any) => {
      child.geometry?.dispose?.();
      if (Array.isArray(child.material)) child.material.forEach((m: any) => m.dispose?.());
      else child.material?.dispose?.();
    });
  }

  getEffectsState() {
    return {
      activeEffects: this.activeEffects.map((e) => ({ objectId: e.id, type: e.type, age: e.age, duration: e.duration })),
      markers: this.markers.map((m) => ({ ...m })),
      sinkAnimations: this.sinkAnimations.map((s: any) => ({ objectId: s.objectId, shipId: s.shipId, owner: s.owner, age: s.age, duration: s.duration })),
      endEffects: this.endEffects.map((e) => ({ ...e })),
    };
  }

  getThreeState() {
    let objectCount = 0;
    this.scene.traverse(() => { objectCount += 1; });
    return {
      frameCount: this.frameCount,
      canvas: { id: this.canvas.id, width: this.canvas.width, height: this.canvas.height },
      camera: {
        objectId: this.camera.id,
        position: { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
        fov: this.camera.fov,
      },
      controls: {
        enabled: this.controls.enabled,
        target: { x: this.controls.target.x, y: this.controls.target.y, z: this.controls.target.z },
      },
      boardGroups: {
        player: this.playerBoard.group?.id ?? null,
        enemy: this.enemyBoard.group?.id ?? null,
      },
      lights: this.lights.map((l) => l.id),
      objectCount,
    };
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.handleResize);
    this.controls?.dispose?.();
    this.renderer?.dispose?.();
  }
}
