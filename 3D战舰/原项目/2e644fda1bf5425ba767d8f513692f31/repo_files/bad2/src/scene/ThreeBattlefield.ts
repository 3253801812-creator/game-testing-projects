import { GameBoard } from '../game/GameBoard';
import { AttackResult, CellRef, Orientation } from '../game/contracts';

type BoardKey = 'player' | 'enemy';

type Fx = { object: any; kind: string; age: number; life: number; velocity?: any[] };

export class ThreeBattlefield {
  canvas: HTMLCanvasElement;
  scene: any;
  camera: any;
  renderer: any;
  controls: any;
  raycaster: any;
  pointer: any;
  boardGroups: Record<BoardKey, any> = { player: null, enemy: null };
  cellMeshes: Record<BoardKey, any[][]> = { player: [], enemy: [] };
  shipMeshes = new Map<string, any>();
  activeEffects: Fx[] = [];
  markers: Array<{ board: BoardKey; row: number; col: number; result: AttackResult; objectId: number }> = [];
  sinkAnimations: Array<{ shipId: string; objectId: number; progress: number }> = [];
  endEffects: Array<{ objectId: number; age: number }> = [];
  frameCount = 0;
  animationId = 0;
  disposed = false;
  onCellClick?: (board: BoardKey, row: number, col: number) => void;
  onCellHover?: (board: BoardKey, row: number, col: number) => void;
  onDropCell?: (board: BoardKey, row: number, col: number) => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    if (!(window as any).THREE) throw new Error('Three.js 未加载，请检查网络连接后重试。');
    const T = (window as any).THREE;
    this.scene = new T.Scene();
    this.scene.background = new T.Color(0x04131a);
    this.scene.fog = new T.FogExp2(0x04131a, 0.025);
    this.camera = new T.PerspectiveCamera(46, 1, 0.1, 150);
    this.camera.position.set(0, 17, 20);
    this.camera.lookAt(0, 0, 0);
    try {
      this.renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    } catch (err) {
      throw new Error(`WebGL 初始化失败：${err instanceof Error ? err.message : String(err)}`);
    }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = T.PCFSoftShadowMap;
    this.renderer.outputEncoding = T.sRGBEncoding;
    this.controls = T.OrbitControls ? new T.OrbitControls(this.camera, this.renderer.domElement) : null;
    if (this.controls) {
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.06;
      this.controls.minDistance = 12;
      this.controls.maxDistance = 40;
      this.controls.maxPolarAngle = Math.PI * 0.46;
      this.controls.target.set(0, 0, 0);
    }
    this.raycaster = new T.Raycaster();
    this.pointer = new T.Vector2();
    this.addEnvironment();
    this.buildBoard('player', -6.2, 0);
    this.buildBoard('enemy', 6.2, 0);
    this.bindEvents();
    this.resize();
    this.animate();
  }

  addEnvironment() {
    const T = (window as any).THREE;
    const ambient = new T.AmbientLight(0xa8d8e8, 0.7);
    ambient.name = 'ambient';
    this.scene.add(ambient);
    const sun = new T.DirectionalLight(0xdaf7ff, 1.2);
    sun.position.set(-8, 16, 9);
    sun.castShadow = true;
    sun.name = 'directional';
    this.scene.add(sun);
    const rim = new T.DirectionalLight(0x2ad4ff, 0.45);
    rim.position.set(12, 8, -10);
    this.scene.add(rim);

    const seabed = new T.Mesh(
      new T.PlaneGeometry(70, 55),
      new T.MeshStandardMaterial({ color: 0x031015, roughness: 1, metalness: 0 }),
    );
    seabed.rotation.x = -Math.PI / 2;
    seabed.position.y = -0.55;
    seabed.receiveShadow = true;
    this.scene.add(seabed);

    const starsGeo = new T.BufferGeometry();
    const pts: number[] = [];
    for (let i = 0; i < 220; i++) pts.push((Math.random()-0.5)*55, Math.random()*22+2, (Math.random()-0.5)*45);
    starsGeo.setAttribute('position', new T.Float32BufferAttribute(pts, 3));
    const dust = new T.Points(starsGeo, new T.PointsMaterial({ color: 0x6fd8e8, size: 0.035, transparent: true, opacity: 0.3 }));
    this.scene.add(dust);
  }

  buildBoard(owner: BoardKey, x: number, z: number) {
    const T = (window as any).THREE;
    const group = new T.Group();
    group.name = `${owner}-board-group`;
    group.position.set(x, 0, z);
    this.scene.add(group);
    this.boardGroups[owner] = group;

    const waterGeo = new T.PlaneGeometry(10.4, 10.4, 32, 32);
    const waterMat = new T.ShaderMaterial({
      transparent: true,
      uniforms: { uTime: { value: 0 }, uTint: { value: new T.Color(owner === 'player' ? 0x0e5264 : 0x153b59) } },
      vertexShader: `uniform float uTime; varying float vWave; void main(){ vec3 p=position; float w=sin((p.x+uTime)*1.7)*0.035+cos((p.y-uTime*0.8)*1.45)*0.035; p.z+=w; vWave=w; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,
      fragmentShader: `uniform vec3 uTint; varying float vWave; void main(){ vec3 c=uTint+vec3(vWave*0.9); gl_FragColor=vec4(c,0.72); }`,
      side: T.DoubleSide,
      depthWrite: false,
    });
    const water = new T.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0;
    water.name = `${owner}-water`;
    group.add(water);

    const outline = new T.LineSegments(
      new T.EdgesGeometry(new T.BoxGeometry(10.35, 0.18, 10.35)),
      new T.LineBasicMaterial({ color: owner === 'player' ? 0x4ee0d8 : 0x71b7ff, transparent: true, opacity: 0.65 }),
    );
    outline.position.y = -0.03;
    group.add(outline);

    this.cellMeshes[owner] = [];
    for (let r = 0; r < 10; r++) {
      this.cellMeshes[owner][r] = [];
      for (let c = 0; c < 10; c++) {
        const mat = new T.MeshStandardMaterial({ color: 0x12404d, transparent: true, opacity: 0.055, roughness: 0.6, metalness: 0.15 });
        const cell = new T.Mesh(new T.BoxGeometry(0.94, 0.035, 0.94), mat);
        cell.position.set(c - 4.5, 0.07, r - 4.5);
        cell.userData = { kind: 'cell', owner, row: r, col: c };
        group.add(cell);
        this.cellMeshes[owner][r][c] = cell;
      }
    }

    const lineMat = new T.LineBasicMaterial({ color: owner === 'player' ? 0x7ff8e8 : 0x7dc2ff, transparent: true, opacity: 0.26 });
    const linePositions: number[] = [];
    for (let i = -5; i <= 5; i++) {
      linePositions.push(-5, 0.10, i, 5, 0.10, i, i, 0.10, -5, i, 0.10, 5);
    }
    const lineGeo = new T.BufferGeometry();
    lineGeo.setAttribute('position', new T.Float32BufferAttribute(linePositions, 3));
    group.add(new T.LineSegments(lineGeo, lineMat));
  }

  bindEvents() {
    const pick = (ev: PointerEvent | DragEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = 'clientX' in ev ? ev.clientX : 0;
      const clientY = 'clientY' in ev ? ev.clientY : 0;
      this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const all = [...this.cellMeshes.player.flat(), ...this.cellMeshes.enemy.flat()];
      const hit = this.raycaster.intersectObjects(all, false)[0];
      return hit?.object?.userData || null;
    };
    this.canvas.addEventListener('click', (ev) => {
      const d = pick(ev); if (d?.kind === 'cell') this.onCellClick?.(d.owner, d.row, d.col);
    });
    this.canvas.addEventListener('pointermove', (ev) => {
      const d = pick(ev); if (d?.kind === 'cell') this.onCellHover?.(d.owner, d.row, d.col);
    });
    this.canvas.addEventListener('dragover', (ev) => ev.preventDefault());
    this.canvas.addEventListener('drop', (ev) => {
      ev.preventDefault(); const d = pick(ev); if (d?.kind === 'cell') this.onDropCell?.(d.owner, d.row, d.col);
    });
    window.addEventListener('resize', this.resize);
  }

  resize = () => {
    const rect = this.canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width || window.innerWidth);
    const height = Math.max(1, rect.height || window.innerHeight);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  setPreview(owner: BoardKey, cells: CellRef[], valid: boolean) {
    this.clearPreview(owner);
    for (const c of cells) {
      const mesh = this.cellMeshes[owner]?.[c.row]?.[c.col];
      if (!mesh) continue;
      mesh.material.opacity = 0.42;
      mesh.material.color.set(valid ? 0x42f5c8 : 0xff4f65);
      mesh.userData.preview = true;
    }
  }

  clearPreview(owner: BoardKey) {
    for (const row of this.cellMeshes[owner]) for (const mesh of row) {
      if (mesh.userData.preview) {
        mesh.material.opacity = 0.055;
        mesh.material.color.set(0x12404d);
        mesh.userData.preview = false;
      }
    }
  }

  syncShips(board: GameBoard) {
    const T = (window as any).THREE;
    const owner = board.owner as BoardKey;
    const group = this.boardGroups[owner];
    for (const ship of board.ships) {
      const key = `${owner}:${ship.id}`;
      const existing = this.shipMeshes.get(key);
      const shouldShow = ship.confirmed && (owner === 'player' || ship.sunk);
      if (!shouldShow) { if (existing) { group.remove(existing); this.shipMeshes.delete(key); } continue; }
      if (existing) { ship.meshVisible = true; ship.meshObjectId = existing.id; continue; }
      if (!ship.start || !ship.orientation) continue;
      const length = ship.length;
      const horizontal = ship.orientation === 'horizontal';
      const body = new T.Group();
      body.name = `ship-${key}`;
      const hull = new T.Mesh(
        new T.BoxGeometry(horizontal ? length * 0.88 : 0.72, 0.32, horizontal ? 0.72 : length * 0.88),
        new T.MeshStandardMaterial({ color: owner === 'player' ? 0x556a72 : 0x6c5360, metalness: 0.7, roughness: 0.34 }),
      );
      hull.castShadow = true;
      body.add(hull);
      const deck = new T.Mesh(
        new T.BoxGeometry(horizontal ? Math.max(0.55, length * 0.42) : 0.38, 0.25, horizontal ? 0.38 : Math.max(0.55, length * 0.42)),
        new T.MeshStandardMaterial({ color: owner === 'player' ? 0x93b1b7 : 0xa68b91, metalness: 0.5, roughness: 0.4 }),
      );
      deck.position.y = 0.28;
      body.add(deck);
      const turret = new T.Mesh(new T.CylinderGeometry(0.11, 0.14, 0.13, 10), new T.MeshStandardMaterial({ color: 0x263d43, metalness: 0.8, roughness: 0.25 }));
      turret.position.y = 0.48;
      body.add(turret);
      body.position.set(
        ship.start.col - 4.5 + (horizontal ? (length - 1) / 2 : 0),
        0.34,
        ship.start.row - 4.5 + (!horizontal ? (length - 1) / 2 : 0),
      );
      group.add(body);
      this.shipMeshes.set(key, body);
      ship.meshVisible = true;
      ship.meshObjectId = body.id;
    }
  }

  clearShips(owner: BoardKey) {
    const group = this.boardGroups[owner];
    for (const [key, mesh] of [...this.shipMeshes]) if (key.startsWith(`${owner}:`)) {
      group.remove(mesh); this.shipMeshes.delete(key);
    }
  }

  markAttack(board: GameBoard, row: number, col: number, result: AttackResult, shipId: string | null) {
    const T = (window as any).THREE;
    const owner = board.owner as BoardKey;
    const group = this.boardGroups[owner];
    const x = col - 4.5, z = row - 4.5;
    const color = result === 'miss' ? 0xd8f5ff : 0xff465f;
    const marker = new T.Mesh(
      new T.CylinderGeometry(result === 'miss' ? 0.16 : 0.22, result === 'miss' ? 0.16 : 0.1, result === 'miss' ? 0.06 : 0.26, 16),
      new T.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: result === 'miss' ? 0.35 : 0.75, transparent: true, opacity: 0.94 }),
    );
    marker.position.set(x, result === 'miss' ? 0.18 : 0.28, z);
    group.add(marker);
    const cell = board.cell(row, col);
    cell.markerObjectId = marker.id;
    this.markers.push({ board: owner, row, col, result, objectId: marker.id });
    if (result === 'miss') this.spawnRipple(group, x, z);
    else this.spawnExplosion(group, x, z);
    if (result === 'sunk' && shipId) {
      this.syncShips(board);
      const mesh = this.shipMeshes.get(`${owner}:${shipId}`);
      if (mesh) this.sinkAnimations.push({ shipId: `${owner}:${shipId}`, objectId: mesh.id, progress: 0 });
    }
  }

  spawnRipple(group: any, x: number, z: number) {
    const T = (window as any).THREE;
    const ring = new T.Mesh(new T.RingGeometry(0.12, 0.16, 32), new T.MeshBasicMaterial({ color: 0xc8f5ff, transparent: true, opacity: 0.8, side: T.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(x, 0.16, z); group.add(ring);
    this.activeEffects.push({ object: ring, kind: 'ripple', age: 0, life: 1.1 });
  }

  spawnExplosion(group: any, x: number, z: number) {
    const T = (window as any).THREE;
    const count = 26;
    const positions = new Float32Array(count * 3);
    const velocities: any[] = [];
    for (let i = 0; i < count; i++) {
      positions[i*3] = x; positions[i*3+1] = 0.34; positions[i*3+2] = z;
      velocities.push(new T.Vector3((Math.random()-0.5)*1.7, Math.random()*1.7+0.45, (Math.random()-0.5)*1.7));
    }
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(positions, 3));
    const pts = new T.Points(geo, new T.PointsMaterial({ color: 0xff7448, size: 0.11, transparent: true, opacity: 1 }));
    group.add(pts);
    this.activeEffects.push({ object: pts, kind: 'explosion', age: 0, life: 1.2, velocity: velocities });
  }

  celebrate() {
    const T = (window as any).THREE;
    for (let burst = 0; burst < 8; burst++) {
      const count = 45, positions = new Float32Array(count*3), velocities: any[] = [];
      const origin = new T.Vector3((Math.random()-0.5)*18, 4+Math.random()*6, (Math.random()-0.5)*9);
      for (let i=0;i<count;i++) {
        positions[i*3]=origin.x; positions[i*3+1]=origin.y; positions[i*3+2]=origin.z;
        const v = new T.Vector3((Math.random()-0.5)*2.8,(Math.random()-0.2)*2.8,(Math.random()-0.5)*2.8); velocities.push(v);
      }
      const geo = new T.BufferGeometry(); geo.setAttribute('position',new T.BufferAttribute(positions,3));
      const pts = new T.Points(geo,new T.PointsMaterial({ color: Math.random()>0.5?0x5cf5da:0xffd46b,size:0.1,transparent:true,opacity:1 }));
      this.scene.add(pts); this.activeEffects.push({object:pts,kind:'firework',age:0,life:2.4,velocity:velocities}); this.endEffects.push({objectId:pts.id,age:0});
    }
  }

  animate = () => {
    if (this.disposed) return;
    this.animationId = requestAnimationFrame(this.animate);
    this.frameCount++;
    const t = performance.now() * 0.001;
    for (const owner of ['player','enemy'] as BoardKey[]) {
      const water = this.boardGroups[owner]?.children?.find((o:any) => o.name === `${owner}-water`);
      if (water?.material?.uniforms?.uTime) water.material.uniforms.uTime.value = t;
    }
    if (this.controls) this.controls.update();
    const dt = 1/60;
    for (const fx of [...this.activeEffects]) {
      fx.age += dt;
      const p = Math.min(1, fx.age/fx.life);
      if (fx.kind === 'ripple') {
        fx.object.scale.setScalar(1 + p * 4.5); fx.object.material.opacity = 0.8*(1-p);
      } else if (fx.velocity) {
        const attr = fx.object.geometry.attributes.position;
        for (let i=0;i<fx.velocity.length;i++) {
          const v = fx.velocity[i];
          attr.array[i*3] += v.x*dt; attr.array[i*3+1] += v.y*dt; attr.array[i*3+2] += v.z*dt;
          v.y -= 1.5*dt;
        }
        attr.needsUpdate=true; fx.object.material.opacity = Math.max(0,1-p);
      }
      if (fx.age >= fx.life) {
        fx.object.parent?.remove(fx.object);
        this.activeEffects.splice(this.activeEffects.indexOf(fx),1);
      }
    }
    for (const a of this.sinkAnimations) {
      if (a.progress >= 1) continue;
      const mesh = this.scene.getObjectById(a.objectId); if (!mesh) { a.progress=1; continue; }
      a.progress = Math.min(1, a.progress + 0.007);
      mesh.rotation.z = -0.18 * a.progress; mesh.position.y = 0.34 - 0.25*a.progress;
    }
    for (const e of this.endEffects) e.age += dt;
    this.renderer.render(this.scene, this.camera);
  };

  getEffectsState() {
    return {
      activeEffects: this.activeEffects.map((x) => ({ kind: x.kind, objectId: x.object?.id ?? null, age: x.age, life: x.life })),
      markers: this.markers.map((m) => ({ ...m })),
      sinkAnimations: this.sinkAnimations.map((s) => ({ ...s })),
      endEffects: this.endEffects.map((e) => ({ ...e })),
    };
  }

  getThreeState() {
    let objectCount = 0; this.scene.traverse(() => objectCount++);
    return {
      frameCount: this.frameCount,
      canvas: this.canvas,
      camera: this.camera,
      controls: this.controls,
      boardGroups: this.boardGroups,
      lights: this.scene.children.filter((o:any) => o.isLight),
      objectCount,
    };
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resize);
    this.controls?.dispose?.();
    this.renderer?.dispose?.();
  }
}
