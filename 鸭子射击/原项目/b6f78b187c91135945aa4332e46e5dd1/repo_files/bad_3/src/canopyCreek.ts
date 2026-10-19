declare global {
  interface Window {
    __game?: { getState: () => unknown };
    __scene?: { getState: () => unknown };
    __player?: { getState: () => unknown };
    __combat?: { getState: () => unknown };
    __bots?: { getState: () => unknown };
    __ranking?: { getState: () => unknown };
  }
}

const RANKS = [
  { id: 'bronze', name: 'Bronze', index: 0, killsRequired: 0 },
  { id: 'silver', name: 'Silver', index: 1, killsRequired: 3 },
  { id: 'gold', name: 'Gold', index: 2, killsRequired: 7 },
];

const DIFFICULTY = [
  { fireCooldownMs: 1850, aimErrorDeg: 13, moveSpeed: 0.72 },
  { fireCooldownMs: 1850, aimErrorDeg: 13, moveSpeed: 0.72 },
  { fireCooldownMs: 1850, aimErrorDeg: 13, moveSpeed: 0.72 },
];

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const length3 = (v) => Math.hypot(v.x, v.y, v.z) || 1;
const normalized = (v) => {
  const d = length3(v);
  return { x: v.x / d, y: v.y / d, z: v.z / d };
};
const subtract = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const addScaled = (p, d, s) => ({ x: p.x + d.x * s, y: p.y + d.y * s, z: p.z + d.z * s });
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
const cloneVec = (v) => ({ x: v.x, y: v.y, z: v.z });

function perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan(fov / 2);
  const nf = 1 / (near - far);
  return [
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ];
}

function lookAt(eye, target, up) {
  const z = normalized({ x: eye.x - target.x, y: eye.y - target.y, z: eye.z - target.z });
  const x = normalized({
    x: up.y * z.z - up.z * z.y,
    y: up.z * z.x - up.x * z.z,
    z: up.x * z.y - up.y * z.x,
  });
  const y = {
    x: z.y * x.z - z.z * x.y,
    y: z.z * x.x - z.x * x.z,
    z: z.x * x.y - z.y * x.x,
  };
  return [
    x.x, y.x, z.x, 0,
    x.y, y.y, z.y, 0,
    x.z, y.z, z.z, 0,
    -(x.x * eye.x + x.y * eye.y + x.z * eye.z),
    -(y.x * eye.x + y.y * eye.y + y.z * eye.z),
    -(z.x * eye.x + z.y * eye.y + z.z * eye.z),
    1,
  ];
}

function boxModel(x, y, z, sx, sy, sz) {
  return [
    sx, 0, 0, 0,
    0, sy, 0, 0,
    0, 0, sz, 0,
    x, y, z, 1,
  ];
}

function seeded(index, salt = 0) {
  const raw = Math.sin(index * 91.713 + salt * 47.17) * 43758.5453;
  return raw - Math.floor(raw);
}

function creekCenter(z) {
  return Math.sin(z * 0.052) * 2.6 + Math.sin(z * 0.017 + 1.4) * 1.1;
}

function makeCubeData() {
  const out = [];
  const faces: Array<[number[], number[][]]> = [
    [[0, 0, 1], [[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]],
    [[0, 0,-1], [[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]],
    [[1, 0, 0], [[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]]],
    [[-1,0, 0], [[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]]],
    [[0, 1, 0], [[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],
    [[0,-1, 0], [[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],
  ];
  for (const [normal, corners] of faces) {
    for (const idx of [0, 1, 2, 0, 2, 3]) {
      const p = corners[idx];
      out.push(p[0] * .5, p[1] * .5, p[2] * .5, normal[0], normal[1], normal[2]);
    }
  }
  return new Float32Array(out);
}

class CreekRenderer {
  [key: string]: any;
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl', { antialias: true, alpha: false, depth: true });
    if (!this.gl) throw new Error('WebGL is required for Canopy Creek');
    this.kind = 'webgl';
    this.program = this.createProgram();
    this.positionLoc = this.gl.getAttribLocation(this.program, 'aPosition');
    this.normalLoc = this.gl.getAttribLocation(this.program, 'aNormal');
    this.modelLoc = this.gl.getUniformLocation(this.program, 'uModel');
    this.viewLoc = this.gl.getUniformLocation(this.program, 'uView');
    this.projLoc = this.gl.getUniformLocation(this.program, 'uProjection');
    this.colorLoc = this.gl.getUniformLocation(this.program, 'uColor');
    this.fogLoc = this.gl.getUniformLocation(this.program, 'uFogColor');
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, makeCubeData(), this.gl.STATIC_DRAW);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.cullFace(this.gl.BACK);
    this.projection = perspective(Math.PI / 3.05, 1, .08, 115);
    this.view = new Array(16).fill(0);
    this.camera = { position: { x: 0, y: 1.55, z: 0 }, forward: { x: 0, y: 0, z: 1 } };
    this.resize();
  }

  compile(type, source) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      throw new Error(this.gl.getShaderInfoLog(shader) || 'shader compile failed');
    }
    return shader;
  }

  createProgram() {
    const vs = this.compile(this.gl.VERTEX_SHADER, `
      attribute vec3 aPosition;
      attribute vec3 aNormal;
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
      varying float vLight;
      varying float vFog;
      void main() {
        vec4 world = uModel * vec4(aPosition, 1.0);
        vec3 n = normalize(mat3(uModel) * aNormal);
        vLight = 0.38 + max(dot(n, normalize(vec3(-0.45, 0.86, -0.28))), 0.0) * 0.62;
        vec4 cameraPos = uView * world;
        vFog = smoothstep(24.0, 86.0, length(cameraPos.xyz));
        gl_Position = uProjection * cameraPos;
      }
    `);
    const fs = this.compile(this.gl.FRAGMENT_SHADER, `
      precision mediump float;
      uniform vec3 uColor;
      uniform vec3 uFogColor;
      varying float vLight;
      varying float vFog;
      void main() {
        vec3 lit = uColor * vLight;
        gl_FragColor = vec4(mix(lit, uFogColor, vFog * .78), 1.0);
      }
    `);
    const program = this.gl.createProgram();
    this.gl.attachShader(program, vs);
    this.gl.attachShader(program, fs);
    this.gl.linkProgram(program);
    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      throw new Error(this.gl.getProgramInfoLog(program) || 'program link failed');
    }
    return program;
  }

  resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
    const w = Math.max(1, Math.round(this.canvas.clientWidth * ratio));
    const h = Math.max(1, Math.round(this.canvas.clientHeight * ratio));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
    this.gl.viewport(0, 0, w, h);
    this.projection = perspective(Math.PI / 3.05, w / h, .08, 115);
  }

  begin(cameraPosition, cameraForward) {
    this.resize();
    this.camera.position = cloneVec(cameraPosition);
    this.camera.forward = cloneVec(cameraForward);
    const target = addScaled(cameraPosition, cameraForward, 1);
    this.view = lookAt(cameraPosition, target, { x: 0, y: 1, z: 0 });
    this.gl.clearColor(0.055, 0.17, 0.17, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.useProgram(this.program);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.enableVertexAttribArray(this.positionLoc);
    this.gl.enableVertexAttribArray(this.normalLoc);
    this.gl.vertexAttribPointer(this.positionLoc, 3, this.gl.FLOAT, false, 24, 0);
    this.gl.vertexAttribPointer(this.normalLoc, 3, this.gl.FLOAT, false, 24, 12);
    this.gl.uniformMatrix4fv(this.viewLoc, false, new Float32Array(this.view));
    this.gl.uniformMatrix4fv(this.projLoc, false, new Float32Array(this.projection));
    this.gl.uniform3f(this.fogLoc, .16, .36, .34);
  }

  box(x, y, z, sx, sy, sz, color) {
    this.gl.uniformMatrix4fv(this.modelLoc, false, new Float32Array(boxModel(x, y, z, sx, sy, sz)));
    this.gl.uniform3f(this.colorLoc, color[0], color[1], color[2]);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
  }
}

class CanopyCreekGame {
  [key: string]: any;
  constructor(root) {
    this.root = root;
    this.root.innerHTML = this.layout();
    this.canvas = this.root.querySelector('[data-testid="game-canvas"]');
    this.moveBtn = this.root.querySelector('[data-testid="move-btn"]');
    this.shootBtn = this.root.querySelector('[data-testid="shoot-btn"]');
    this.rankBtn = this.root.querySelector('[data-testid="rank-btn"]');
    this.rankPanel = this.root.querySelector('#rankPanel');
    this.rankText = this.root.querySelector('[data-testid="current-rank"]');
    this.killsText = this.root.querySelector('[data-testid="kills-progress"]');
    this.botReadout = this.root.querySelector('[data-role="bot-readout"]');
    this.paintFlash = this.root.querySelector('[data-role="paint-flash"]');
    this.renderer = new CreekRenderer(this.canvas);
    this.player = {
      id: 'duck-ranger',
      position: { x: creekCenter(0), y: .1, z: 0 },
      forward: { x: 0, y: 0, z: 1 },
      isMoving: false,
    };
    this.cameraForward = { x: 0, y: -.035, z: 1 };
    this.kills = 0;
    this.rankIndex = 0;
    this.projectiles = [];
    this.recentShots = [];
    this.recentHits = [];
    this.recentKills = [];
    this.bots = [];
    this.botSerial = 0;
    this.shotSerial = 0;
    this.startedAt = performance.now();
    this.lastFrame = this.startedAt;
    this.ready = false;
    this.raf = 0;
    this.rankOpen = false;
    this.disposed = false;
    this.lastHudUpdate = 0;
    this.seedBots();
    this.bindInputs();
    this.installHooks();
    this.syncHud();
    this.raf = requestAnimationFrame((t) => this.frame(t));
  }

  layout() {
    return `
      <main id="game" class="creek-game">
        <canvas data-testid="game-canvas" aria-label="3D rainy rainforest paintball battlefield"></canvas>
        <div class="rain-layer" aria-hidden="true"></div>
        <div class="paint-flash" data-role="paint-flash" aria-hidden="true"></div>
        <div class="creek-crosshair" aria-hidden="true"><i></i><b></b><i></i></div>
        <header class="creek-topbar">
          <section class="mission-card">
            <div class="brand-line"><span class="duck-mark">🦆 DUCK//02</span><strong>CANOPY CREEK</strong></div>
            <p>Rainforest paint patrol · sector keeps moving</p>
          </section>
          <section class="status-strip" aria-label="combat status">
            <span><small>RANK</small><b data-testid="current-rank" data-rank-id="bronze">Bronze</b></span>
            <span><small>PROGRESS</small><b data-testid="kills-progress">0 / 3 KOs</b></span>
            <span><small>HOSTILES</small><b data-role="bot-readout">5 LIVE</b></span>
          </section>
          <button class="rank-tab" type="button" data-testid="rank-btn">RANKS <span>▤</span></button>
        </header>

        <aside id="rankPanel" class="rank-panel" aria-hidden="true">
          <div class="rank-panel-head">
            <div><small>FIELD LICENSE</small><h2>Paint Patrol Ranks</h2></div>
            <span class="rank-close-hint">tap RANKS</span>
          </div>
          <div class="rank-list">
            <article data-testid="rank-item" data-rank-id="bronze"><span class="medal bronze-medal">B</span><div><b>Bronze</b><small>Creek Scout</small></div><em>0 KO</em></article>
            <article data-testid="rank-item" data-rank-id="silver"><span class="medal silver-medal">S</span><div><b>Silver</b><small>Canopy Ranger</small></div><em>3 KO</em></article>
            <article data-testid="rank-item" data-rank-id="gold"><span class="medal gold-medal">G</span><div><b>Gold</b><small>River Ace</small></div><em>7 KO</em></article>
          </div>
          <div class="rank-progress-card"><span>Current run</span><strong data-role="rank-detail">Bronze · 0 kills · 3 to Silver</strong></div>
        </aside>

        <div class="water-depth"><span>WATERLINE</span><i></i><b>SAFE</b></div>
        <div class="bottom-controls">
          <button class="move-control" type="button" data-testid="move-btn" aria-label="Move forward through the creek">
            <span class="move-ripples"><i></i><i></i></span>
            <strong>WADE</strong><small>HOLD TO MOVE</small>
          </button>
          <div class="weapon-label"><span>PAINT</span><b>MOSS-7</b><small>auto-lock duckball launcher</small></div>
          <button class="shoot-control" type="button" data-testid="shoot-btn" aria-label="Shoot paintball">
            <span class="paint-dot"></span><strong>PAINT<br/>BURST</strong><small>FIRE</small>
          </button>
        </div>
      </main>
    `;
  }

  bindInputs() {
    this.onMoveDown = (ev) => {
      ev.preventDefault();
      this.player.isMoving = true;
      this.stepPlayer(.46);
      if (this.moveBtn.setPointerCapture && ev.pointerId !== undefined) {
        try { this.moveBtn.setPointerCapture(ev.pointerId); } catch (_) {}
      }
    };
    this.onMoveUp = (ev) => {
      if (ev) ev.preventDefault();
      this.player.isMoving = false;
    };
    this.onShoot = (ev) => {
      ev.preventDefault();
      this.firePlayerShot();
    };
    this.onRank = () => {
      this.rankOpen = !this.rankOpen;
      this.rankPanel.classList.toggle('open', this.rankOpen);
      this.rankPanel.setAttribute('aria-hidden', this.rankOpen ? 'false' : 'true');
    };
    this.onKeyDown = (ev) => {
      if (ev.code === 'KeyW' || ev.code === 'ArrowUp') this.player.isMoving = true;
      if (ev.code === 'Space' && !ev.repeat) { ev.preventDefault(); this.firePlayerShot(); }
      if (ev.code === 'KeyR' && !ev.repeat) this.onRank();
    };
    this.onKeyUp = (ev) => {
      if (ev.code === 'KeyW' || ev.code === 'ArrowUp') this.player.isMoving = false;
    };
    this.onBlur = () => { this.player.isMoving = false; };
    this.moveBtn.addEventListener('pointerdown', this.onMoveDown);
    window.addEventListener('pointerup', this.onMoveUp);
    window.addEventListener('pointercancel', this.onMoveUp);
    this.shootBtn.addEventListener('pointerdown', this.onShoot);
    this.rankBtn.addEventListener('click', this.onRank);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
  }

  installHooks() {
    const safeCopy = (value) => JSON.parse(JSON.stringify(value));
    window.__game = { getState: () => ({ ready: this.ready, elapsedTime: (performance.now() - this.startedAt) / 1000, kills: this.kills }) };
    window.__scene = { getState: () => ({
      renderer: { type: this.renderer.kind, width: this.canvas.width, height: this.canvas.height },
      camera: {
        position: cloneVec(this.renderer.camera.position),
        forward: cloneVec(this.renderer.camera.forward),
        viewMatrix: this.renderer.view.slice(),
        projectionMatrix: this.renderer.projection.slice(),
      },
    }) };
    window.__player = { getState: () => ({ id: this.player.id, position: cloneVec(this.player.position), forward: cloneVec(this.player.forward), isMoving: this.player.isMoving }) };
    window.__combat = { getState: () => safeCopy({
      activeProjectiles: this.projectiles.map((p) => ({ id: p.id, ownerType: p.ownerType, ownerId: p.ownerId, position: p.position, direction: p.direction })),
      recentShots: this.recentShots,
      recentHits: this.recentHits,
      recentKills: this.recentKills,
    }) };
    window.__bots = { getState: () => ({
      bots: this.bots.map((b) => ({ id: b.id, alive: b.alive, position: cloneVec(b.position), targetPlayer: b.targetPlayer })),
      difficultyProfile: { rankIndex: this.rankIndex, ...DIFFICULTY[this.rankIndex] },
    }) };
    window.__ranking = { getState: () => {
      const current = RANKS[this.rankIndex];
      const next = RANKS[this.rankIndex + 1] || null;
      return safeCopy({
        ranks: RANKS,
        currentRank: current,
        nextRank: next,
        kills: this.kills,
        killsToNext: next ? Math.max(0, next.killsRequired - this.kills) : 0,
      });
    } };
  }

  seedBots() {
    for (let i = 0; i < 5; i++) this.spawnBot(10 + i * 4.3, i);
  }

  spawnBot(ahead = 18, lane = 0) {
    const id = `creek-bot-${++this.botSerial}`;
    const z = this.player.position.z + ahead + seeded(this.botSerial, 2) * 3;
    const center = creekCenter(z);
    const side = lane % 2 === 0 ? -1 : 1;
    this.bots.push({
      id,
      alive: true,
      position: { x: center + side * (1.6 + seeded(this.botSerial, 4) * 1.8), y: .5, z },
      targetPlayer: true,
      lastShotAt: performance.now() - seeded(this.botSerial, 7) * 900,
      removedAt: 0,
      bob: seeded(this.botSerial, 9) * Math.PI * 2,
    });
  }

  stepPlayer(amount) {
    const yaw = Math.sin(this.player.position.z * .028) * .22;
    const forward = normalized({ x: Math.sin(yaw), y: 0, z: Math.cos(yaw) });
    this.player.position = addScaled(this.player.position, forward, amount);
    const streamX = creekCenter(this.player.position.z);
    this.player.position.x += (streamX - this.player.position.x) * .13;
    this.player.forward = forward;
  }

  firePlayerShot() {
    const now = performance.now();
    const candidates = this.bots.filter((b) => b.alive);
    if (!candidates.length) return;
    candidates.sort((a, b) => dist(a.position, this.player.position) - dist(b.position, this.player.position));
    const target = candidates.find((b) => b.position.z > this.player.position.z - 2) || candidates[0];
    const origin = { x: this.player.position.x + .27, y: 1.18, z: this.player.position.z + .55 };
    const targetPoint = { x: target.position.x, y: target.position.y + .25, z: target.position.z };
    const direction = normalized(subtract(targetPoint, origin));
    this.player.forward = cloneVec(direction);
    const shot = {
      id: `duck-paint-${++this.shotSerial}`,
      ownerType: 'player',
      ownerId: this.player.id,
      spawnedAt: now,
      origin: cloneVec(origin),
      direction: cloneVec(direction),
      lastPosition: cloneVec(origin),
      hitEntityId: null,
    };
    this.recentShots.push(shot);
    if (this.recentShots.length > 48) this.recentShots.splice(0, this.recentShots.length - 48);
    this.projectiles.push({
      id: shot.id,
      ownerType: 'player',
      ownerId: this.player.id,
      position: cloneVec(origin),
      direction: cloneVec(direction),
      speed: 19.5,
      born: now,
      targetId: target.id,
      color: [1.0, .18, .58],
    });
    this.paintFlash.classList.remove('pop');
    void this.paintFlash.offsetWidth;
    this.paintFlash.classList.add('pop');
  }

  fireBotShot(bot, now) {
    const profile = DIFFICULTY[this.rankIndex];
    const origin = { x: bot.position.x, y: bot.position.y + .2, z: bot.position.z - .28 };
    let direction = normalized(subtract({ x: this.player.position.x, y: .86, z: this.player.position.z }, origin));
    const errorRad = profile.aimErrorDeg * Math.PI / 180;
    const bias = Math.sin(now * .0017 + this.botSerial * .93 + bot.position.z * .07) * errorRad;
    const c = Math.cos(bias), s = Math.sin(bias);
    direction = normalized({ x: direction.x * c + direction.z * s, y: direction.y, z: -direction.x * s + direction.z * c });
    const id = `bot-paint-${++this.shotSerial}`;
    const history = {
      id,
      ownerType: 'bot',
      ownerId: bot.id,
      spawnedAt: now,
      origin: cloneVec(origin),
      direction: cloneVec(direction),
      lastPosition: cloneVec(origin),
      hitEntityId: null,
    };
    this.recentShots.push(history);
    if (this.recentShots.length > 48) this.recentShots.splice(0, this.recentShots.length - 48);
    this.projectiles.push({ id, ownerType: 'bot', ownerId: bot.id, position: cloneVec(origin), direction: cloneVec(direction), speed: 10.8, born: now, targetId: this.player.id, color: [.35, .95, 1.0] });
    bot.lastShotAt = now;
  }

  awardKill(bot, shotId, now) {
    if (!bot.alive) return;
    bot.alive = false;
    bot.targetPlayer = false;
    bot.removedAt = now + 720;
    this.kills += 1;
    this.recentHits.push({ shotId, attackerType: 'player', attackerId: this.player.id, targetId: bot.id, happenedAt: now });
    this.recentKills.push({ botId: bot.id, sourceShotId: shotId, creditedTo: 'player', happenedAt: now });
    this.recentKills.push({ botId: bot.id, sourceShotId: shotId, creditedTo: 'player', happenedAt: now + 0.001 });
    if (this.recentHits.length > 36) this.recentHits.shift();
    if (this.recentKills.length > 24) this.recentKills.shift();
    const shot = this.recentShots.find((s) => s.id === shotId);
    if (shot) shot.hitEntityId = bot.id;
    if (this.rankIndex === 0 && this.kills >= 2) this.rankIndex = 1;
    while (this.rankIndex + 1 < RANKS.length && this.kills >= RANKS[this.rankIndex + 1].killsRequired) this.rankIndex += 1;
    this.syncHud();
    setTimeout(() => {
      if (this.disposed) return;
      this.spawnBot(17 + seeded(this.botSerial, 12) * 10, this.botSerial);
    }, 620);
  }

  updateBots(dt, now) {
    const profile = DIFFICULTY[this.rankIndex];
    for (const bot of this.bots) {
      if (!bot.alive) continue;
      bot.targetPlayer = true;
      const delta = subtract(this.player.position, bot.position);
      const planar = Math.hypot(delta.x, delta.z) || 1;
      if (planar > 6.2) {
        bot.position.x += delta.x / planar * profile.moveSpeed * dt * .58;
        bot.position.z += delta.z / planar * profile.moveSpeed * dt * .58;
      } else {
        bot.position.x += Math.sin(now * .0014 + bot.bob) * dt * .34;
      }
      bot.position.y = .52 + Math.sin(now * .004 + bot.bob) * .06;
      if (now - bot.lastShotAt >= profile.fireCooldownMs) this.fireBotShot(bot, now);
      if (bot.position.z < this.player.position.z - 7) {
        bot.alive = false;
        bot.targetPlayer = false;
        bot.removedAt = now;
        this.spawnBot(22 + seeded(this.botSerial, 20) * 7, this.botSerial);
      }
    }
    this.bots = this.bots.filter((b) => b.alive || now < b.removedAt);
    while (this.bots.filter((b) => b.alive).length < 5) this.spawnBot(18 + seeded(this.botSerial, 25) * 12, this.botSerial);
  }

  updateProjectiles(dt, now) {
    for (const projectile of this.projectiles) {
      projectile.position.x += projectile.direction.x * projectile.speed * dt;
      projectile.position.y += projectile.direction.y * projectile.speed * dt;
      projectile.position.z += projectile.direction.z * projectile.speed * dt;
      const history = this.recentShots.find((s) => s.id === projectile.id);
      if (history) history.lastPosition = cloneVec(projectile.position);
      if (projectile.ownerType === 'player') {
        const bot = this.bots.find((b) => b.id === projectile.targetId && b.alive);
        if (bot && dist(projectile.position, bot.position) < .82) {
          this.awardKill(bot, projectile.id, now);
          projectile.dead = true;
        }
      } else if (dist(projectile.position, { x: this.player.position.x, y: .86, z: this.player.position.z }) < .62) {
        if (history) history.hitEntityId = this.player.id;
        this.recentHits.push({ shotId: projectile.id, attackerType: 'bot', attackerId: projectile.ownerId, targetId: this.player.id, happenedAt: now });
        if (this.recentHits.length > 36) this.recentHits.shift();
        projectile.dead = true;
      }
      if (now - projectile.born > 4200 || projectile.position.y < -2) projectile.dead = true;
    }
    this.projectiles = this.projectiles.filter((p) => !p.dead);
  }

  update(dt, now) {
    if (this.player.isMoving) this.stepPlayer(dt * 3.1);
    const yaw = Math.sin(this.player.position.z * .028) * .22;
    this.cameraForward = normalized({ x: Math.sin(yaw), y: -.035, z: Math.cos(yaw) });
    this.updateBots(dt, now);
    this.updateProjectiles(dt, now);
    if (now - this.lastHudUpdate > 250) {
      this.lastHudUpdate = now;
      this.syncHud();
    }
  }

  drawEnvironment() {
    const r = this.renderer;
    const baseIndex = Math.floor((this.player.position.z - 12) / 5);
    for (let i = baseIndex; i < baseIndex + 20; i++) {
      const z = i * 5;
      const center = creekCenter(z);
      r.box(center, -.24, z, 6.4, .22, 5.15, [.08, .42, .43]);
      r.box(center - 6.2, -.12, z, 6.0, .3, 5.2, [.12, .33, .20]);
      r.box(center + 6.2, -.12, z, 6.0, .3, 5.2, [.12, .33, .20]);
      if (i % 3 === 0) {
        r.box(center + Math.sin(i) * 1.2, -.02, z + 1.3, 1.05, .24, .78, [.42, .49, .40]);
        r.box(center + Math.cos(i * .7) * 1.7, -.03, z - 1.4, .62, .2, .9, [.36, .43, .37]);
      }
      if (i % 6 === 2) {
        r.box(center - .7, .15, z, 4.7, .18, 1.1, [.39, .25, .12]);
        r.box(center - 2.65, .5, z, .18, .9, 1.1, [.24, .16, .09]);
        r.box(center + 1.25, .5, z, .18, .9, 1.1, [.24, .16, .09]);
      }
      for (const side of [-1, 1]) {
        const offset = 7.0 + seeded(i, side + 3) * 4.4;
        const tx = center + side * offset;
        const height = 5.6 + seeded(i, side + 8) * 3.7;
        r.box(tx, height * .5 - .08, z + (seeded(i, side + 11) - .5) * 3.4, .72, height, .72, [.22, .18, .11]);
        r.box(tx, height - .2, z, 4.2, 1.25, 4.0, [.08, .34 + seeded(i, side + 5) * .08, .18]);
        r.box(tx + side * 1.7, height - .75, z + 1.0, 2.5, .8, 2.5, [.12, .43, .23]);
        const fernX = center + side * (4.1 + seeded(i, side + 22) * 1.7);
        r.box(fernX, .35, z + 1.55, 2.6, .16, .34, [.12, .52, .29]);
        r.box(fernX, .35, z + 1.55, .34, .16, 2.6, [.10, .46, .25]);
      }
    }
  }

  drawBot(bot) {
    const r = this.renderer;
    const p = bot.position;
    if (!bot.alive) {
      r.box(p.x, .08, p.z, 1.4, .12, 1.4, [1.0, .18, .54]);
      return;
    }
    r.box(p.x, p.y, p.z, 1.05, .68, 1.25, [.88, .77, .18]);
    r.box(p.x, p.y + .48, p.z - .18, .78, .62, .72, [.95, .84, .24]);
    r.box(p.x, p.y + .45, p.z - .64, .62, .16, .55, [1.0, .43, .08]);
    r.box(p.x - .28, p.y + .63, p.z - .46, .12, .12, .12, [.04, .06, .05]);
    r.box(p.x + .28, p.y + .63, p.z - .46, .12, .12, .12, [.04, .06, .05]);
    r.box(p.x + .52, p.y + .14, p.z - .26, .68, .18, .18, [.11, .58, .68]);
    r.box(p.x + .78, p.y + .14, p.z - .38, .22, .35, .22, [1.0, .16, .48]);
  }

  drawWeapon(cameraPosition, cameraForward) {
    const right = normalized({ x: cameraForward.z, y: 0, z: -cameraForward.x });
    const base = addScaled(addScaled(cameraPosition, cameraForward, .92), right, .30);
    base.y -= .33;
    const r = this.renderer;
    r.box(base.x, base.y, base.z, .20, .22, .72, [.12, .78, .72]);
    const muzzle = addScaled(base, cameraForward, .34);
    r.box(muzzle.x, muzzle.y + .02, muzzle.z, .15, .15, .26, [.07, .18, .19]);
    const tank = addScaled(base, right, .11);
    r.box(tank.x, tank.y + .18, tank.z - .02, .22, .28, .28, [1.0, .18, .58]);
    const beak = addScaled(addScaled(cameraPosition, cameraForward, .58), right, -.03);
    r.box(beak.x, beak.y - .37, beak.z, .42, .13, .35, [1.0, .48, .06]);
    const wing = addScaled(base, right, -.30);
    r.box(wing.x, wing.y - .05, wing.z - .05, .38, .23, .45, [.93, .82, .26]);
  }

  render() {
    const cameraPos = { x: this.player.position.x, y: 1.55, z: this.player.position.z - .06 };
    this.renderer.begin(cameraPos, this.cameraForward);
    this.drawEnvironment();
    for (const bot of this.bots) this.drawBot(bot);
    for (const p of this.projectiles) this.renderer.box(p.position.x, p.position.y, p.position.z, .18, .18, .18, p.color);
    this.drawWeapon(cameraPos, this.cameraForward);
  }

  syncHud() {
    const current = RANKS[this.rankIndex];
    const next = RANKS[this.rankIndex + 1] || null;
    this.rankText.textContent = current.name;
    this.rankText.dataset.rankId = this.kills === 0 ? current.id : 'bronze';
    this.killsText.textContent = next ? `${this.kills} / ${next.killsRequired} KOs` : `${this.kills} KOs · MAX`;
    this.botReadout.textContent = `${this.bots.filter((b) => b.alive).length} LIVE`;
    const detail = this.root.querySelector('[data-role="rank-detail"]');
    if (detail) detail.textContent = next ? `${current.name} · ${this.kills} kills · ${Math.max(0, next.killsRequired - this.kills)} to ${next.name}` : `Gold · ${this.kills} kills · top rank`;
    for (const item of this.root.querySelectorAll('[data-testid="rank-item"]')) {
      const rank = RANKS.find((r) => r.id === item.dataset.rankId);
      item.classList.toggle('current', !!rank && rank.index === this.rankIndex);
      item.classList.toggle('earned', !!rank && rank.index < this.rankIndex);
    }
  }

  frame(now) {
    if (this.disposed) return;
    const dt = clamp((now - this.lastFrame) / 1000, 0, .05);
    this.lastFrame = now;
    this.update(dt, now);
    this.render();
    this.ready = this.renderer.gl && this.bots.some((b) => b.alive) && this.canvas.width > 0 && this.canvas.height > 0;
    this.raf = requestAnimationFrame((t) => this.frame(t));
  }

  destroy() {
    this.disposed = true;
    this.player.isMoving = false;
    cancelAnimationFrame(this.raf);
    this.moveBtn.removeEventListener('pointerdown', this.onMoveDown);
    window.removeEventListener('pointerup', this.onMoveUp);
    window.removeEventListener('pointercancel', this.onMoveUp);
    this.shootBtn.removeEventListener('pointerdown', this.onShoot);
    this.rankBtn.removeEventListener('click', this.onRank);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    for (const key of ['__game','__scene','__player','__combat','__bots','__ranking']) delete window[key];
  }
}

export function mountCanopyCreek(root) {
  const game = new CanopyCreekGame(root);
  return () => game.destroy();
}
