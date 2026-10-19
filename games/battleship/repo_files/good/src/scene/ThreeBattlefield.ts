import type { GameBoard } from '../game/GameBoard';
import type { CellCoord, Owner } from '../game/contracts';

const T = () => window.THREE;

interface CellEvent { owner: Owner; row: number; col: number }

export class ThreeBattlefield {
  canvas: HTMLCanvasElement;
  scene: any;
  camera: any;
  renderer: any;
  controls: any;
  raycaster: any;
  pointer: any;
  boardGroups: Record<Owner, any>;
  cellMeshes: any[] = [];
  shipMeshes = new Map<string, any>();
  previewMesh: any = null;
  markers: any[] = [];
  activeEffects: any[] = [];
  sinkAnimations: any[] = [];
  endEffects: any[] = [];
  lights: any[] = [];
  frameCount = 0;
  disposed = false;
  hovered: CellEvent | null = null;
  onCellClick: ((cell: CellEvent) => void) | null = null;
  onCellHover: ((cell: CellEvent | null) => void) | null = null;

  constructor(canvas: HTMLCanvasElement, player: GameBoard, enemy: GameBoard) {
    if (!window.THREE) throw new Error('Three.js 未加载');
    this.canvas = canvas;
    const THREE = T();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x020912);
    this.scene.fog = new THREE.FogExp2(0x020912, 0.024);
    this.camera = new THREE.PerspectiveCamera(46, 1, 0.1, 120);
    this.camera.position.set(0, 12.5, 15.5);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.enableDamping = true;
    this.controls.minDistance = 9;
    this.controls.maxDistance = 28;
    this.controls.maxPolarAngle = Math.PI * 0.47;
    this.controls.update();
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.boardGroups = { player: new THREE.Group(), enemy: new THREE.Group() };
    this.scene.add(this.boardGroups.player, this.boardGroups.enemy);
    this.setupLights();
    this.setupEnvironment();
    this.createBoard(player);
    this.createBoard(enemy);
    this.resize();
    this.bindEvents();
    this.animate();
  }

  setupLights() {
    const THREE = T();
    const ambient = new THREE.AmbientLight(0x6d8dac, 0.62);
    const sun = new THREE.DirectionalLight(0xd9f4ff, 1.15);
    sun.position.set(-5, 13, 7); sun.castShadow = true;
    const rim = new THREE.PointLight(0x1ed6ff, 0.8, 24);
    rim.position.set(0, 4, -6);
    this.lights = [ambient, sun, rim];
    this.scene.add(...this.lights);
  }

  setupEnvironment() {
    const THREE = T();
    const seabed = new THREE.Mesh(
      new THREE.PlaneGeometry(34, 22, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0x03121e, roughness: 0.9, metalness: 0.05 })
    );
    seabed.rotation.x = -Math.PI / 2; seabed.position.y = -0.55; seabed.receiveShadow = true;
    this.scene.add(seabed);
    const grid = new THREE.GridHelper(34, 34, 0x0e4465, 0x082b42);
    grid.position.y = -0.5;
    this.scene.add(grid);
  }

  worldFromCell(board: GameBoard, row: number, col: number) {
    return {
      x: board.origin.x + (col - 4.5) * board.cellSize,
      y: board.origin.y,
      z: board.origin.z + (row - 4.5) * board.cellSize
    };
  }

  createBoard(board: GameBoard) {
    const THREE = T();
    const group = this.boardGroups[board.owner];
    group.userData.owner = board.owner;
    const width = board.cellSize * 10;
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(width + 0.25, 0.34, width + 0.25),
      new THREE.MeshStandardMaterial({ color: board.owner === 'player' ? 0x062a3b : 0x102538, roughness: 0.45, metalness: 0.32 })
    );
    base.position.set(board.origin.x, board.origin.y - 0.25, board.origin.z);
    base.receiveShadow = true; group.add(base);

    for (let row = 0; row < 10; row++) for (let col = 0; col < 10; col++) {
      const p = this.worldFromCell(board, row, col);
      const cell = new THREE.Mesh(
        new THREE.BoxGeometry(board.cellSize * 0.92, 0.055, board.cellSize * 0.92),
        new THREE.MeshStandardMaterial({
          color: board.owner === 'player' ? 0x0b5774 : 0x0a415d,
          emissive: board.owner === 'player' ? 0x031c28 : 0x031722,
          roughness: 0.3,
          metalness: 0.18,
          transparent: true,
          opacity: 0.88
        })
      );
      cell.position.set(p.x, p.y, p.z);
      cell.userData = { boardOwner: board.owner, row, col, baseColor: cell.material.color.getHex() };
      cell.receiveShadow = true;
      group.add(cell); this.cellMeshes.push(cell);
    }
  }

  addShipMesh(board: GameBoard, shipId: string, visible = true) {
    const THREE = T();
    const ship = board.ship(shipId);
    if (!ship?.start || !ship.orientation) return null;
    this.removeShipMesh(board.owner, shipId);
    const lengthWorld = ship.length * board.cellSize * 0.88;
    const horizontal = ship.orientation === 'horizontal';
    const geo = new THREE.BoxGeometry(horizontal ? lengthWorld : board.cellSize * 0.62, 0.34, horizontal ? board.cellSize * 0.62 : lengthWorld);
    const mat = new THREE.MeshStandardMaterial({ color: board.owner === 'player' ? 0x5f7886 : 0x485967, metalness: 0.72, roughness: 0.27 });
    const mesh = new THREE.Mesh(geo, mat);
    const first = ship.cells[0], last = ship.cells[ship.cells.length - 1];
    const a = this.worldFromCell(board, first.row, first.col), b = this.worldFromCell(board, last.row, last.col);
    mesh.position.set((a.x + b.x) / 2, board.origin.y + 0.28, (a.z + b.z) / 2);
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.visible = visible;
    mesh.userData = { shipId, boardOwner: board.owner };
    this.boardGroups[board.owner].add(mesh);
    const key = `${board.owner}:${shipId}`; this.shipMeshes.set(key, mesh); ship.meshObjectId = mesh.id;

    const bridge = new THREE.Mesh(new THREE.BoxGeometry(board.cellSize * 0.62, 0.22, board.cellSize * 0.42), mat.clone());
    bridge.position.set(0, 0.28, 0); bridge.castShadow = true; mesh.add(bridge);
    return mesh;
  }

  removeShipMesh(owner: Owner, shipId: string) {
    const key = `${owner}:${shipId}`;
    const mesh = this.shipMeshes.get(key);
    if (mesh) { mesh.parent?.remove(mesh); this.shipMeshes.delete(key); }
  }

  syncPlayerShips(board: GameBoard) {
    for (const ship of board.ships) {
      if (ship.confirmed) this.addShipMesh(board, ship.id, true);
      else this.removeShipMesh(board.owner, ship.id);
    }
  }

  sinkShip(board: GameBoard, shipId: string, revealIfHidden = false) {
    const key = `${board.owner}:${shipId}`;
    let mesh = this.shipMeshes.get(key);
    if (!mesh && revealIfHidden) mesh = this.addShipMesh(board, shipId, true);
    if (!mesh) return;
    mesh.visible = true;
    mesh.material.color.setHex(0x5a2825);
    if (!this.sinkAnimations.some(a => a.mesh === mesh)) {
      this.sinkAnimations.push({ mesh, start: performance.now(), duration: 1600, fromY: mesh.position.y });
    }
  }

  revealSunkEnemyShip(board: GameBoard, shipId: string) {
    const ship = board.ship(shipId);
    if (!ship) return;
    const mesh = this.addShipMesh(board, shipId, true);
    if (mesh) {
      mesh.material.color.setHex(0x5a2825);
      this.sinkAnimations.push({ mesh, start: performance.now(), duration: 1600, fromY: mesh.position.y });
    }
  }

  setPreview(board: GameBoard, shipId: string, cells: CellCoord[], valid: boolean) {
    this.clearPreview();
    if (!cells.length) return;
    const THREE = T();
    const ship = board.ship(shipId);
    if (!ship) return;
    const first = cells[0], last = cells[cells.length - 1];
    const a = this.worldFromCell(board, first.row, first.col), b = this.worldFromCell(board, last.row, last.col);
    const horizontal = first.row === last.row;
    this.previewMesh = new THREE.Mesh(
      new THREE.BoxGeometry(horizontal ? ship.length * board.cellSize * 0.88 : board.cellSize * 0.62, 0.24, horizontal ? board.cellSize * 0.62 : ship.length * board.cellSize * 0.88),
      new THREE.MeshStandardMaterial({ color: valid ? 0x3de7c2 : 0xff5e67, emissive: valid ? 0x0b4c43 : 0x4d1015, transparent: true, opacity: 0.72 })
    );
    this.previewMesh.position.set((a.x+b.x)/2, board.origin.y + 0.23, (a.z+b.z)/2);
    this.boardGroups.player.add(this.previewMesh);
  }

  clearPreview() { if (this.previewMesh) { this.previewMesh.parent?.remove(this.previewMesh); this.previewMesh = null; } }

  addMarker(board: GameBoard, row: number, col: number, result: 'hit' | 'miss' | 'sunk') {
    const THREE = T();
    const p = this.worldFromCell(board, row, col);
    const hit = result !== 'miss';
    const geom = hit ? new THREE.SphereGeometry(board.cellSize * 0.17, 14, 10) : new THREE.TorusGeometry(board.cellSize * 0.17, 0.045, 8, 18);
    const mat = new THREE.MeshStandardMaterial({ color: hit ? 0xff4f4f : 0xeaf6ff, emissive: hit ? 0x6d0d0d : 0x334d5d, roughness: 0.35 });
    const marker = new THREE.Mesh(geom, mat);
    marker.position.set(p.x, board.origin.y + 0.37, p.z);
    marker.rotation.x = hit ? 0 : Math.PI / 2;
    marker.userData = { owner: board.owner, row, col, result };
    this.scene.add(marker); this.markers.push(marker); board.setMarker(row, col, marker.id);
    this.spawnEffect(p.x, board.origin.y + 0.5, p.z, hit ? 'explosion' : 'ripple');
    return marker;
  }

  spawnEffect(x: number, y: number, z: number, kind: 'explosion' | 'ripple') {
    const THREE = T();
    const geom = kind === 'explosion' ? new THREE.SphereGeometry(0.16, 10, 8) : new THREE.RingGeometry(0.15, 0.2, 24);
    const mat = new THREE.MeshBasicMaterial({ color: kind === 'explosion' ? 0xffaa45 : 0xbdefff, transparent: true, opacity: 0.95, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geom, mat); mesh.position.set(x,y,z); if (kind === 'ripple') mesh.rotation.x = -Math.PI/2;
    this.scene.add(mesh); this.activeEffects.push({ mesh, start: performance.now(), duration: kind === 'explosion' ? 620 : 900, kind });
  }

  celebrate() {
    const THREE = T();
    for (let i = 0; i < 20; i++) {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6), transparent: true, opacity: 1 }));
      mesh.position.set((Math.random()-0.5)*12, 1 + Math.random()*4, (Math.random()-0.5)*7);
      this.scene.add(mesh); this.endEffects.push({ mesh, start: performance.now(), duration: 2200 + Math.random()*900, vy: 0.01 + Math.random()*0.02 });
    }
  }

  bindEvents() {
    this.canvas.addEventListener('pointermove', this.handlePointerMove);
    this.canvas.addEventListener('pointerdown', this.handlePointerDown);
    window.addEventListener('resize', this.resize);
  }

  updatePointer(event: PointerEvent) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.cellMeshes, false);
    const obj = hits[0]?.object;
    return obj ? { owner: obj.userData.boardOwner as Owner, row: obj.userData.row as number, col: obj.userData.col as number } : null;
  }

  handlePointerMove = (event: PointerEvent) => {
    const cell = this.updatePointer(event);
    this.hovered = cell;
    this.onCellHover?.(cell);
  };

  handlePointerDown = (event: PointerEvent) => {
    if (event.button !== 0) return;
    const cell = this.updatePointer(event);
    if (cell) this.onCellClick?.(cell);
  };

  resize = () => {
    const rect = this.canvas.getBoundingClientRect();
    const w = Math.max(1, rect.width), h = Math.max(1, rect.height);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); this.renderer.setSize(w, h, false);
  };

  animate = () => {
    if (this.disposed) return;
    requestAnimationFrame(this.animate);
    const now = performance.now(); this.frameCount++;
    this.controls.update();
    for (let i = this.activeEffects.length - 1; i >= 0; i--) {
      const fx = this.activeEffects[i]; const t = (now-fx.start)/fx.duration;
      if (t >= 1) { fx.mesh.parent?.remove(fx.mesh); this.activeEffects.splice(i,1); continue; }
      const s = 1 + t * (fx.kind === 'explosion' ? 5 : 7); fx.mesh.scale.setScalar(s); fx.mesh.material.opacity = 1-t;
    }
    for (let i = this.sinkAnimations.length - 1; i >= 0; i--) {
      const fx = this.sinkAnimations[i]; const t = Math.min(1,(now-fx.start)/fx.duration);
      fx.mesh.rotation.z = t*0.22; fx.mesh.position.y = fx.fromY - t*0.5;
      if (t >= 1) this.sinkAnimations.splice(i,1);
    }
    for (let i = this.endEffects.length - 1; i >= 0; i--) {
      const fx = this.endEffects[i]; const t = (now-fx.start)/fx.duration;
      if (t >= 1) { fx.mesh.parent?.remove(fx.mesh); this.endEffects.splice(i,1); continue; }
      fx.mesh.position.y += fx.vy; fx.mesh.material.opacity = 1-t;
    }
    this.renderer.render(this.scene, this.camera);
  };

  getCellScreenPosition(owner: Owner, row: number, col: number) {
    const THREE = T();
    const mesh = this.cellMeshes.find(item => item.userData.boardOwner === owner && item.userData.row === row && item.userData.col === col);
    if (!mesh) return null;
    const point = new THREE.Vector3();
    mesh.getWorldPosition(point);
    point.project(this.camera);
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: rect.left + (point.x + 1) * 0.5 * rect.width,
      y: rect.top + (1 - point.y) * 0.5 * rect.height
    };
  }

  getEffectsState() {
    return {
      activeEffectCount: this.activeEffects.length,
      activeEffects: this.activeEffects.map(fx => ({ objectId: fx.mesh.id, kind: fx.kind })),
      markers: this.markers.map(m => ({ objectId: m.id, ...m.userData })),
      sinkAnimations: this.sinkAnimations.map(s => ({ objectId: s.mesh.id })),
      endEffects: this.endEffects.length
    };
  }

  getState() {
    let objectCount = 0; this.scene.traverse(() => objectCount++);
    const rect = this.canvas.getBoundingClientRect();
    const pixelRatio = this.renderer.getPixelRatio();
    return {
      ready: !this.disposed,
      initialized: !this.disposed,
      frameCount: this.frameCount,
      waterTime: this.frameCount / 60,
      allowCameraBelow: false,
      canvas: {
        id: this.canvas.id, width: this.canvas.width, height: this.canvas.height,
        cssWidth: rect.width, cssHeight: rect.height, pixelRatio
      },
      renderer: { width: rect.width, height: rect.height, pixelRatio },
      camera: {
        objectId: this.camera.id, x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z,
        aspect: this.camera.aspect,
        position: { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
        target: { x: this.controls.target.x, y: this.controls.target.y, z: this.controls.target.z }
      },
      controls: {
        enabled: this.controls.enabled, minDistance: this.controls.minDistance, maxDistance: this.controls.maxDistance,
        maxPolarAngle: this.controls.maxPolarAngle
      },
      boardGroups: {
        player: { objectId: this.boardGroups.player.id, childCount: this.boardGroups.player.children.length },
        enemy: { objectId: this.boardGroups.enemy.id, childCount: this.boardGroups.enemy.children.length }
      },
      lights: this.lights.map(l => ({ objectId: l.id, type: l.type, intensity: l.intensity })),
      objectCount
    };
  }

  resetVisuals() {
    this.clearPreview();
    for (const mesh of this.shipMeshes.values()) mesh.parent?.remove(mesh);
    this.shipMeshes.clear();
    for (const marker of this.markers) marker.parent?.remove(marker);
    this.markers = [];
    for (const fx of this.activeEffects) fx.mesh.parent?.remove(fx.mesh);
    for (const fx of this.endEffects) fx.mesh.parent?.remove(fx.mesh);
    this.activeEffects = []; this.endEffects = []; this.sinkAnimations = [];
  }

  dispose() {
    this.disposed = true;
    this.canvas.removeEventListener('pointermove', this.handlePointerMove);
    this.canvas.removeEventListener('pointerdown', this.handlePointerDown);
    window.removeEventListener('resize', this.resize);
    this.renderer.dispose();
  }
}
