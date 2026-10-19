
type V3 = { x: number; y: number; z: number };
type Rank = { id: string; name: string; index: number; killsRequired: number };
type Bot = { id: string; alive: boolean; position: V3; targetPlayer: boolean; fireLeft: number; orbitSign: number };
type ShotRecord = {
  id: string;
  ownerType: 'player' | 'bot';
  ownerId: string;
  spawnedAt: number;
  origin: V3;
  direction: V3;
  lastPosition: V3;
  hitEntityId: string | null;
};
type Projectile = {
  id: string;
  ownerType: 'player' | 'bot';
  ownerId: string;
  position: V3;
  direction: V3;
  speed: number;
  age: number;
  targetId: string | null;
  record: ShotRecord;
};
type Mesh = { buffer: WebGLBuffer; count: number };

type HudSnapshot = { kills: number; rank: Rank; next: Rank | null; killsToNext: number };

const RANKS: Rank[] = [
  { id: 'bronze', name: 'Bronze', index: 0, killsRequired: 0 },
  { id: 'silver', name: 'Silver', index: 1, killsRequired: 2 },
  { id: 'gold', name: 'Gold', index: 2, killsRequired: 5 }
];

const AI = [
  { rankIndex: 0, fireCooldownMs: 1750, aimErrorDeg: 12, moveSpeed: 0.78 },
  { rankIndex: 1, fireCooldownMs: 1180, aimErrorDeg: 7, moveSpeed: 1.08 },
  { rankIndex: 2, fireCooldownMs: 780, aimErrorDeg: 3.5, moveSpeed: 1.42 }
];

const copyV3 = (v: V3): V3 => ({ x: v.x, y: v.y, z: v.z });
const length3 = (v: V3) => Math.hypot(v.x, v.y, v.z) || 1;
const unit3 = (v: V3): V3 => { const n = length3(v); return { x: v.x / n, y: v.y / n, z: v.z / n }; };
const sub3 = (a: V3, b: V3): V3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const add3 = (a: V3, b: V3): V3 => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
const mul3 = (a: V3, s: number): V3 => ({ x: a.x * s, y: a.y * s, z: a.z * s });
const distXZ = (a: V3, b: V3) => Math.hypot(a.x - b.x, a.z - b.z);
const moveToward = (current: number, target: number, maxDelta: number) => current < target ? Math.min(target, current + maxDelta) : Math.max(target, current - maxDelta);
const lerp3 = (a: V3, b: V3, t: number): V3 => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t });

const identity4 = () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
function multiply4(a: number[], b: number[]) {
  const out = new Array<number>(16).fill(0);
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      out[col * 4 + row] =
        a[0 * 4 + row] * b[col * 4 + 0] +
        a[1 * 4 + row] * b[col * 4 + 1] +
        a[2 * 4 + row] * b[col * 4 + 2] +
        a[3 * 4 + row] * b[col * 4 + 3];
    }
  }
  return out;
}
function perspective4(fov: number, aspect: number, near: number, far: number) {
  const f = 1 / Math.tan(fov / 2), nf = 1 / (near - far);
  return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
}
function lookAt4(eye: V3, center: V3) {
  const z = unit3(sub3(eye, center));
  const x = unit3({ x: z.z, y: 0, z: -z.x });
  const y = { x: z.y * x.z - z.z * x.y, y: z.z * x.x - z.x * x.z, z: z.x * x.y - z.y * x.x };
  return [
    x.x, y.x, z.x, 0,
    x.y, y.y, z.y, 0,
    x.z, y.z, z.z, 0,
    -(x.x * eye.x + x.y * eye.y + x.z * eye.z),
    -(y.x * eye.x + y.y * eye.y + y.z * eye.z),
    -(z.x * eye.x + z.y * eye.y + z.z * eye.z),
    1
  ];
}
function model4(pos: V3, scale: V3, yaw = 0) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  return [
    c * scale.x, 0, -s * scale.x, 0,
    0, scale.y, 0, 0,
    s * scale.z, 0, c * scale.z, 0,
    pos.x, pos.y, pos.z, 1
  ];
}

function cubeVertices() {
  return new Float32Array([
    -1,-1,-1,  1,-1,-1,  1, 1,-1, -1,-1,-1,  1, 1,-1, -1, 1,-1,
    -1,-1, 1, -1, 1, 1,  1, 1, 1, -1,-1, 1,  1, 1, 1,  1,-1, 1,
    -1,-1,-1, -1, 1,-1, -1, 1, 1, -1,-1,-1, -1, 1, 1, -1,-1, 1,
     1,-1,-1,  1,-1, 1,  1, 1, 1,  1,-1,-1,  1, 1, 1,  1, 1,-1,
    -1, 1,-1,  1, 1,-1,  1, 1, 1, -1, 1,-1,  1, 1, 1, -1, 1, 1,
    -1,-1,-1, -1,-1, 1,  1,-1, 1, -1,-1,-1,  1,-1, 1,  1,-1,-1
  ]);
}
function sphereVertices(latBands = 7, lonBands = 10) {
  const data: number[] = [];
  const point = (lat: number, lon: number) => {
    const p = lat * Math.PI / latBands;
    const t = lon * Math.PI * 2 / lonBands;
    return [Math.sin(p) * Math.cos(t), Math.cos(p), Math.sin(p) * Math.sin(t)];
  };
  for (let lat = 0; lat < latBands; lat++) {
    for (let lon = 0; lon < lonBands; lon++) {
      const a = point(lat, lon), b = point(lat + 1, lon), c = point(lat + 1, lon + 1), d = point(lat, lon + 1);
      data.push(...a, ...b, ...c, ...a, ...c, ...d);
    }
  }
  return new Float32Array(data);
}
function coneVertices(sides = 11) {
  const data: number[] = [];
  for (let i = 0; i < sides; i++) {
    const a = i * Math.PI * 2 / sides, b = (i + 1) * Math.PI * 2 / sides;
    data.push(0,1,0, Math.cos(a),-1,Math.sin(a), Math.cos(b),-1,Math.sin(b));
    data.push(0,-1,0, Math.cos(b),-1,Math.sin(b), Math.cos(a),-1,Math.sin(a));
  }
  return new Float32Array(data);
}
function cylinderVertices(sides = 14) {
  const data: number[] = [];
  for (let i = 0; i < sides; i++) {
    const a = i * Math.PI * 2 / sides, b = (i + 1) * Math.PI * 2 / sides;
    const ax = Math.cos(a), az = Math.sin(a), bx = Math.cos(b), bz = Math.sin(b);
    data.push(ax,-1,az, bx,-1,bz, bx,1,bz, ax,-1,az, bx,1,bz, ax,1,az);
    data.push(0,1,0, ax,1,az, bx,1,bz);
  }
  return new Float32Array(data);
}

class PineRingEngine {
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext;
  private program: WebGLProgram;
  private aPosition: number;
  private uMvp: WebGLUniformLocation;
  private uColor: WebGLUniformLocation;
  private meshes: Record<string, Mesh>;
  private startedAt = performance.now();
  private previous = performance.now();
  private raf = 0;
  private ready = false;
  private moving = false;
  private pulseMove = 0;
  private keyboardOrbit = 0;
  private keyboardRadial = 0;
  private orbitVelocity = 0;
  private radialVelocity = 0;
  private radiusOffset = 0;
  private phase = 2.35;
  private kills = 0;
  private rankIndex = 0;
  private botSerial = 0;
  private shotSerial = 0;
  private playerCooldown = 0;
  private camera: V3 = { x: 12.8, y: 13.8, z: 14.6 };
  private cameraTarget: V3 = { x: 0, y: 0.4, z: 0 };
  private view = identity4();
  private projection = identity4();
  private bots: Bot[] = [];
  private projectiles: Projectile[] = [];
  private shots: ShotRecord[] = [];
  private hits: Array<{ shotId: string; attackerType: 'player' | 'bot'; attackerId: string; targetId: string; happenedAt: number }> = [];
  private recentKills: Array<{ botId: string; sourceShotId: string; creditedTo: 'player'; happenedAt: number }> = [];
  private splats: Array<{ x: number; z: number; life: number; color: [number, number, number] }> = [];
  private player = { id: 'pine-player-duck', position: { x: -3.6, y: 0.58, z: 3.6 }, forward: { x: -0.7, y: 0, z: -0.7 }, isMoving: false };
  private onHud: (state: HudSnapshot) => void;
  private resizeHandler = () => this.resize();
  private blurHandler = () => { this.setMoving(false); this.setKeyboardMotion(0, 0); };

  constructor(canvas: HTMLCanvasElement, onHud: (state: HudSnapshot) => void) {
    this.canvas = canvas;
    this.onHud = onHud;
    const ctx = canvas.getContext('webgl', { antialias: true, alpha: false, depth: true });
    if (!ctx) throw new Error('Pine Ring requires WebGL');
    this.gl = ctx;
    this.program = this.makeProgram();
    const p = ctx.getAttribLocation(this.program, 'a_position');
    const m = ctx.getUniformLocation(this.program, 'u_mvp');
    const c = ctx.getUniformLocation(this.program, 'u_color');
    if (p < 0 || !m || !c) throw new Error('Shader locations unavailable');
    this.aPosition = p; this.uMvp = m; this.uColor = c;
    this.meshes = {
      cube: this.makeMesh(cubeVertices()),
      sphere: this.makeMesh(sphereVertices()),
      cone: this.makeMesh(coneVertices()),
      cylinder: this.makeMesh(cylinderVertices())
    };
    for (let i = 0; i < 5; i++) this.spawnBot();
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('blur', this.blurHandler);
    document.addEventListener('visibilitychange', this.blurHandler);
    this.installReadOnlyHooks();
    this.resize();
    this.render();
    this.ready = true;
    this.emitHud();
    this.raf = requestAnimationFrame(this.frame);
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('blur', this.blurHandler);
    document.removeEventListener('visibilitychange', this.blurHandler);
  }

  setMoving(active: boolean) {
    const starting = active && !this.moving && this.keyboardOrbit === 0 && this.keyboardRadial === 0;
    this.moving = active;
    if (starting) {
      this.player.isMoving = true;
      this.applyPlayerMotion(0.045, 0);
    }
    if (!active && Math.abs(this.orbitVelocity) < 0.03 && Math.abs(this.radialVelocity) < 0.03) this.player.isMoving = false;
  }

  tapMove() {
    this.pulseMove = Math.max(this.pulseMove, 0.13);
  }

  setKeyboardMotion(orbit: number, radial: number) {
    const nextOrbit = Math.max(-1, Math.min(1, orbit));
    const nextRadial = Math.max(-1, Math.min(1, radial));
    const starting = this.keyboardOrbit === 0 && this.keyboardRadial === 0 && (nextOrbit !== 0 || nextRadial !== 0);
    this.keyboardOrbit = nextOrbit;
    this.keyboardRadial = nextRadial;
    if (starting) {
      this.player.isMoving = true;
      this.applyPlayerMotion(nextOrbit * 0.045, nextRadial * 0.035);
    }
    if (this.keyboardOrbit === 0 && this.keyboardRadial === 0 && !this.moving && Math.abs(this.orbitVelocity) < 0.03 && Math.abs(this.radialVelocity) < 0.03) this.player.isMoving = false;
  }

  private applyPlayerMotion(orbitDelta: number, radialDelta: number) {
    this.phase += orbitDelta;
    this.radiusOffset = Math.max(-1.45, Math.min(1.05, this.radiusOffset + radialDelta));
    const radius = 5.15 + this.radiusOffset;
    const next = { x: Math.cos(this.phase) * radius, y: 0.58, z: Math.sin(this.phase) * radius };
    const delta = sub3(next, this.player.position);
    this.player.position = next;
    if (Math.hypot(delta.x, delta.z) > 0.0001) {
      const desiredForward = unit3({ x: delta.x, y: 0, z: delta.z });
      this.player.forward = unit3(lerp3(this.player.forward, desiredForward, 0.72));
    }
  }

  shoot() {
    if (!this.ready || this.playerCooldown > 0) return;
    const target = this.nearestBot();
    if (!target) return;
    const origin = add3(this.player.position, { x: 0, y: 0.72, z: 0 });
    const aimPoint = add3(target.position, { x: 0, y: 0.38, z: 0 });
    const direction = unit3(sub3(aimPoint, origin));
    this.player.forward = unit3({ x: direction.x, y: 0, z: direction.z });
    this.spawnProjectile('player', this.player.id, origin, direction, 13.8, target.id);
    this.playerCooldown = 110;
  }

  private frame = (now: number) => {
    const rawDt = Math.max(0.001, (now - this.previous) / 1000);
    const dt = Math.min(0.045, rawDt);
    const movementDt = Math.min(0.11, rawDt);
    this.previous = now;
    this.update(dt, movementDt);
    this.render();
    this.raf = requestAnimationFrame(this.frame);
  };

  private update(dt: number, movementDt: number) {
    this.playerCooldown = Math.max(0, this.playerCooldown - dt * 1000);
    const heldOrbit = this.moving ? 1 : this.keyboardOrbit;
    const tapOrbit = heldOrbit === 0 && this.pulseMove > 0 ? 1 : 0;
    const orbitIntent = Math.max(-1, Math.min(1, heldOrbit + tapOrbit));
    const radialIntent = this.keyboardRadial;

    // Pine Ring deliberately feels like skating on damp forest turf: inputs ramp in
    // quickly, but release brakes hard enough that the duck never drifts away from
    // the player's command. Radial lane changes are softer than forward orbiting.
    const orbitTarget = orbitIntent * 1.82;
    const radialTarget = radialIntent * 1.72;
    const orbitAccel = orbitIntent === 0 ? 16.0 : 9.2;
    const radialAccel = radialIntent === 0 ? 14.0 : 7.2;
    this.orbitVelocity = moveToward(this.orbitVelocity, orbitTarget, orbitAccel * movementDt);
    this.radialVelocity = moveToward(this.radialVelocity, radialTarget, radialAccel * movementDt);
    if (this.pulseMove > 0) this.pulseMove = Math.max(0, this.pulseMove - movementDt);

    const movingNow = Math.abs(this.orbitVelocity) > 0.018 || Math.abs(this.radialVelocity) > 0.018;
    if (movingNow) {
      this.applyPlayerMotion(this.orbitVelocity * movementDt, this.radialVelocity * movementDt);
      this.player.isMoving = true;
    } else {
      this.orbitVelocity = 0;
      this.radialVelocity = 0;
      this.player.isMoving = false;
    }

    const profile = AI[this.rankIndex];
    for (const bot of this.bots) {
      if (!bot.alive) continue;
      const toward = sub3(this.player.position, bot.position);
      const flat = unit3({ x: toward.x, y: 0, z: toward.z });
      const d = distXZ(bot.position, this.player.position);
      const tangent = { x: -flat.z * bot.orbitSign, y: 0, z: flat.x * bot.orbitSign };
      const seek = d > 3.15 ? 0.86 : d < 2.1 ? -0.38 : 0.18;
      bot.position.x += (flat.x * seek + tangent.x * 0.46) * profile.moveSpeed * dt;
      bot.position.z += (flat.z * seek + tangent.z * 0.46) * profile.moveSpeed * dt;
      const radial = Math.hypot(bot.position.x, bot.position.z) || 1;
      if (radial > 7.2) { bot.position.x *= 7.2 / radial; bot.position.z *= 7.2 / radial; }
      bot.fireLeft -= dt * 1000;
      if (bot.fireLeft <= 0) {
        this.botFire(bot);
        bot.fireLeft = profile.fireCooldownMs * (0.82 + Math.random() * 0.32);
      }
    }

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const orb = this.projectiles[i];
      orb.age += dt;
      if (orb.ownerType === 'player' && orb.targetId && orb.age < 1.15) {
        const quarry = this.bots.find(b => b.id === orb.targetId && b.alive);
        if (quarry) {
          const desired = unit3(sub3(add3(quarry.position, { x: 0, y: 0.36, z: 0 }), orb.position));
          const bend = Math.min(0.18, 0.05 + orb.age * 0.10);
          orb.direction = unit3(add3(mul3(orb.direction, 1 - bend), mul3(desired, bend)));
          orb.record.direction = copyV3(orb.direction);
        }
      }
      orb.position = add3(orb.position, mul3(orb.direction, orb.speed * dt));
      orb.record.lastPosition = copyV3(orb.position);
      let remove = orb.age > 2.4 || orb.position.y < -0.3 || orb.position.y > 12;

      if (!remove && orb.ownerType === 'player') {
        for (const bot of this.bots) {
          if (bot.alive && distXZ(orb.position, bot.position) < 0.82 && Math.abs(orb.position.y - (bot.position.y + 0.32)) < 1.0) {
            this.eliminateBot(bot, orb.record);
            remove = true;
            break;
          }
        }
      } else if (!remove && distXZ(orb.position, this.player.position) < 0.67 && Math.abs(orb.position.y - 0.8) < 1.0) {
        orb.record.hitEntityId = this.player.id;
        this.hits.push({ shotId: orb.id, attackerType: 'bot', attackerId: orb.ownerId, targetId: this.player.id, happenedAt: performance.now() });
        this.splats.push({ x: this.player.position.x, z: this.player.position.z, life: 0.9, color: [0.98, 0.25, 0.55] });
        remove = true;
      }
      if (remove) this.projectiles.splice(i, 1);
    }

    for (let i = this.splats.length - 1; i >= 0; i--) {
      this.splats[i].life -= dt;
      if (this.splats[i].life <= 0) this.splats.splice(i, 1);
    }
    if (this.shots.length > 260) this.shots.splice(0, this.shots.length - 260);
    if (this.hits.length > 180) this.hits.splice(0, this.hits.length - 180);
    if (this.recentKills.length > 120) this.recentKills.splice(0, this.recentKills.length - 120);
  }

  private nearestBot() {
    let best: Bot | null = null, score = Infinity;
    for (const bot of this.bots) {
      if (!bot.alive) continue;
      const d = distXZ(this.player.position, bot.position);
      if (d < score) { score = d; best = bot; }
    }
    return best;
  }

  private spawnBot() {
    const id = `pine-rival-${++this.botSerial}`;
    const angle = (this.botSerial * 2.399963 + 0.6) % (Math.PI * 2);
    const radius = 2.35 + (this.botSerial % 4) * 0.62;
    const profile = AI[this.rankIndex];
    this.bots.push({
      id,
      alive: true,
      position: { x: Math.cos(angle) * radius, y: 0.58, z: Math.sin(angle) * radius },
      targetPlayer: true,
      fireLeft: 260 + Math.random() * Math.min(620, profile.fireCooldownMs * 0.55),
      orbitSign: this.botSerial % 2 === 0 ? 1 : -1
    });
  }

  private botFire(bot: Bot) {
    const profile = AI[this.rankIndex];
    const origin = add3(bot.position, { x: 0, y: 0.7, z: 0 });
    const toPlayer = unit3(sub3(add3(this.player.position, { x: 0, y: 0.35, z: 0 }), origin));
    const jitter = (Math.random() - 0.5) * profile.aimErrorDeg * Math.PI / 180;
    const c = Math.cos(jitter), s = Math.sin(jitter);
    const direction = unit3({ x: toPlayer.x * c - toPlayer.z * s, y: toPlayer.y, z: toPlayer.x * s + toPlayer.z * c });
    this.spawnProjectile('bot', bot.id, origin, direction, 8.6 + this.rankIndex * 0.7, null);
  }

  private spawnProjectile(ownerType: 'player' | 'bot', ownerId: string, origin: V3, direction: V3, speed: number, targetId: string | null) {
    const id = `pine-shot-${++this.shotSerial}`;
    const record: ShotRecord = { id, ownerType, ownerId, spawnedAt: performance.now(), origin: copyV3(origin), direction: copyV3(direction), lastPosition: copyV3(origin), hitEntityId: null };
    this.shots.push(record);
    this.projectiles.push({ id, ownerType, ownerId, position: copyV3(origin), direction: copyV3(direction), speed, age: 0, targetId, record });
  }

  private eliminateBot(bot: Bot, shot: ShotRecord) {
    if (!bot.alive) return;
    bot.alive = false;
    shot.hitEntityId = bot.id;
    const now = performance.now();
    this.hits.push({ shotId: shot.id, attackerType: 'player', attackerId: this.player.id, targetId: bot.id, happenedAt: now });
    this.recentKills.push({ botId: bot.id, sourceShotId: shot.id, creditedTo: 'player', happenedAt: now });
    this.splats.push({ x: bot.position.x, z: bot.position.z, life: 1.55, color: [0.18, 0.96, 0.78] });
    this.kills += 1;
    const next = RANKS[this.rankIndex + 1];
    if (next && this.kills >= next.killsRequired) this.rankIndex += 1;
    const deadIndex = this.bots.indexOf(bot);
    window.setTimeout(() => {
      if (deadIndex >= 0) {
        const currentIndex = this.bots.indexOf(bot);
        if (currentIndex >= 0) this.bots.splice(currentIndex, 1);
      }
      this.spawnBot();
    }, 360);
    this.emitHud();
  }

  private emitHud() {
    const current = RANKS[this.rankIndex];
    const next = RANKS[this.rankIndex + 1] ?? null;
    this.onHud({ kills: this.kills, rank: current, next, killsToNext: next ? Math.max(0, next.killsRequired - this.kills) : 0 });
  }

  private makeProgram() {
    const gl = this.gl;
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, 'attribute vec3 a_position; uniform mat4 u_mvp; void main(){ gl_Position=u_mvp*vec4(a_position,1.0); }');
    gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(vs) || 'vertex shader failed');
    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, 'precision mediump float; uniform vec3 u_color; void main(){ gl_FragColor=vec4(u_color,1.0); }');
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(fs) || 'fragment shader failed');
    const program = gl.createProgram()!;
    gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || 'shader program failed');
    return program;
  }

  private makeMesh(vertices: Float32Array): Mesh {
    const gl = this.gl;
    const buffer = gl.createBuffer();
    if (!buffer) throw new Error('Unable to allocate mesh buffer');
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    return { buffer, count: vertices.length / 3 };
  }

  private resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.65);
    const w = Math.max(1, Math.floor(this.canvas.clientWidth * dpr));
    const h = Math.max(1, Math.floor(this.canvas.clientHeight * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w; this.canvas.height = h;
    }
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  private draw(meshName: keyof PineRingEngine['meshes'], pos: V3, scale: V3, color: [number, number, number], yaw = 0) {
    const gl = this.gl, mesh = this.meshes[meshName];
    const model = model4(pos, scale, yaw);
    const mvp = multiply4(this.projection, multiply4(this.view, model));
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.buffer);
    gl.vertexAttribPointer(this.aPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(this.aPosition);
    gl.uniformMatrix4fv(this.uMvp, false, new Float32Array(mvp));
    gl.uniform3fv(this.uColor, new Float32Array(color));
    gl.drawArrays(gl.TRIANGLES, 0, mesh.count);
  }

  private drawDuck(position: V3, forward: V3, enemy: boolean) {
    const yaw = Math.atan2(forward.x, forward.z);
    const body: [number, number, number] = enemy ? [0.52, 0.44, 0.92] : [0.98, 0.83, 0.20];
    const wing: [number, number, number] = enemy ? [0.31, 0.25, 0.72] : [0.90, 0.62, 0.08];
    this.draw('sphere', add3(position, { x: 0, y: 0.28, z: 0 }), { x: 0.55, y: 0.38, z: 0.68 }, body, yaw);
    this.draw('sphere', add3(position, { x: 0, y: 0.82, z: -0.13 }), { x: 0.34, y: 0.33, z: 0.34 }, body, yaw);
    const beakOffset = { x: Math.sin(yaw) * 0.38, y: 0.80, z: Math.cos(yaw) * 0.38 };
    this.draw('sphere', add3(position, beakOffset), { x: 0.31, y: 0.10, z: 0.19 }, [1.0, 0.43, 0.08], yaw);
    this.draw('sphere', add3(position, { x: Math.cos(yaw) * 0.38, y: 0.30, z: -Math.sin(yaw) * 0.38 }), { x: 0.20, y: 0.23, z: 0.38 }, wing, yaw);
    const gunSide = enemy ? -1 : 1;
    this.draw('cube', add3(position, { x: Math.cos(yaw) * 0.43 * gunSide, y: 0.43, z: -Math.sin(yaw) * 0.43 * gunSide }), { x: 0.09, y: 0.10, z: 0.47 }, enemy ? [0.95, 0.25, 0.57] : [0.12, 0.91, 0.82], yaw);
    this.draw('sphere', add3(position, { x: Math.cos(yaw) * 0.44 * gunSide, y: 0.58, z: -Math.sin(yaw) * 0.44 * gunSide }), { x: 0.14, y: 0.17, z: 0.14 }, enemy ? [0.98, 0.46, 0.67] : [0.18, 0.55, 1.0], yaw);
  }

  private render() {
    this.resize();
    const gl = this.gl;
    gl.useProgram(this.program);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clearColor(0.025, 0.075, 0.095, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // A restrained chase camera makes movement legible without turning the ring
    // arena into a generic third-person corridor. It follows position and heading
    // with damping instead of snapping every frame.
    const speedFeel = Math.min(1, Math.abs(this.orbitVelocity) / 1.82);
    const desiredTarget = add3(this.player.position, mul3(this.player.forward, 1.35 + speedFeel * 0.85));
    desiredTarget.y = 0.55;
    const desiredCamera = add3(add3(this.player.position, mul3(this.player.forward, -8.4 - speedFeel * 0.7)), { x: 0, y: 8.7, z: 0 });
    this.camera = lerp3(this.camera, desiredCamera, 0.075);
    this.cameraTarget = lerp3(this.cameraTarget, desiredTarget, 0.11);
    this.view = lookAt4(this.camera, this.cameraTarget);
    this.projection = perspective4(0.82, this.canvas.width / Math.max(1, this.canvas.height), 0.1, 90);

    this.draw('cylinder', { x: 0, y: -0.38, z: 0 }, { x: 10.4, y: 0.30, z: 10.4 }, [0.055, 0.24, 0.22]);
    this.draw('cylinder', { x: 0, y: -0.06, z: 0 }, { x: 7.25, y: 0.08, z: 7.25 }, [0.11, 0.34, 0.25]);
    this.draw('cylinder', { x: 0, y: 0.0, z: 0 }, { x: 4.05, y: 0.035, z: 4.05 }, [0.14, 0.39, 0.28]);

    for (let i = 0; i < 28; i++) {
      const a = i / 28 * Math.PI * 2, r = 5.18;
      this.draw('cube', { x: Math.cos(a) * r, y: 0.03, z: Math.sin(a) * r }, { x: 0.29, y: 0.035, z: 0.62 }, i % 2 ? [0.28, 0.42, 0.32] : [0.22, 0.36, 0.29], -a);
    }

    for (let i = 0; i < 34; i++) {
      const a = i / 34 * Math.PI * 2 + (i % 3) * 0.08, r = 8.0 + (i % 4) * 0.48;
      const x = Math.cos(a) * r, z = Math.sin(a) * r, h = 1.45 + (i % 5) * 0.23;
      this.draw('cylinder', { x, y: h * 0.38, z }, { x: 0.16, y: h * 0.38, z: 0.16 }, [0.27, 0.15, 0.09]);
      this.draw('cone', { x, y: h * 0.85, z }, { x: 0.75, y: 0.78, z: 0.75 }, i % 2 ? [0.04, 0.38, 0.30] : [0.06, 0.46, 0.36]);
      this.draw('cone', { x, y: h * 1.15, z }, { x: 0.58, y: 0.68, z: 0.58 }, [0.08, 0.52, 0.40]);
    }

    for (let i = 0; i < 10; i++) {
      const a = i / 10 * Math.PI * 2 + 0.32, r = 3.1;
      this.draw('sphere', { x: Math.cos(a) * r, y: 0.13, z: Math.sin(a) * r }, { x: 0.28, y: 0.13, z: 0.34 }, [0.28, 0.39, 0.45]);
    }

    for (const splat of this.splats) {
      const s = 0.3 + (1.6 - splat.life) * 0.16;
      this.draw('sphere', { x: splat.x, y: 0.06, z: splat.z }, { x: s, y: 0.035, z: s * 0.85 }, splat.color);
    }

    for (const bot of this.bots) {
      if (!bot.alive) continue;
      const toward = unit3({ x: this.player.position.x - bot.position.x, y: 0, z: this.player.position.z - bot.position.z });
      this.drawDuck(bot.position, toward, true);
    }
    this.drawDuck(this.player.position, this.player.forward, false);

    for (const projectile of this.projectiles) {
      this.draw('sphere', projectile.position, { x: 0.11, y: 0.11, z: 0.11 }, projectile.ownerType === 'player' ? [0.12, 1.0, 0.78] : [1.0, 0.18, 0.52]);
    }
  }

  private rankingState() {
    const currentRank = RANKS[this.rankIndex];
    const nextRank = RANKS[this.rankIndex + 1] ?? null;
    return {
      ranks: RANKS.map(r => ({ ...r })),
      currentRank: { ...currentRank },
      nextRank: nextRank ? { ...nextRank } : null,
      kills: this.kills,
      killsToNext: nextRank ? Math.max(0, nextRank.killsRequired - this.kills) : 0
    };
  }

  private installReadOnlyHooks() {
    const self = this;
    (window as any).__game = { getState() { return { ready: self.ready, elapsedTime: (performance.now() - self.startedAt) / 1000, kills: self.kills }; } };
    (window as any).__scene = { getState() {
      return {
        renderer: { type: 'webgl', width: self.canvas.width, height: self.canvas.height },
        camera: { position: copyV3(self.camera), forward: unit3(sub3(self.cameraTarget, self.camera)), viewMatrix: self.view.slice(), projectionMatrix: self.projection.slice() }
      };
    } };
    (window as any).__player = { getState() { return { id: self.player.id, position: copyV3(self.player.position), forward: copyV3(self.player.forward), isMoving: self.player.isMoving }; } };
    (window as any).__combat = { getState() {
      return {
        activeProjectiles: self.projectiles.map(p => ({ id: p.id, ownerType: p.ownerType, ownerId: p.ownerId, position: copyV3(p.position), direction: copyV3(p.direction) })),
        recentShots: self.shots.map(s => ({ ...s, origin: copyV3(s.origin), direction: copyV3(s.direction), lastPosition: copyV3(s.lastPosition) })),
        recentHits: self.hits.map(h => ({ ...h })),
        recentKills: self.recentKills.map(k => ({ ...k }))
      };
    } };
    (window as any).__bots = { getState() {
      return {
        bots: self.bots.filter(b => b.alive).map(b => ({ id: b.id, alive: b.alive, position: copyV3(b.position), targetPlayer: b.targetPlayer })),
        difficultyProfile: { ...AI[self.rankIndex] }
      };
    } };
    (window as any).__ranking = { getState() { return self.rankingState(); } };
  }
}


type PineRingMount = { destroy: () => void };

type PineRingGlobal = {
  mount: (host: HTMLElement) => PineRingMount;
};

function mountPineRing(host: HTMLElement): PineRingMount {
  host.innerHTML = `
    <main id="game" class="game-shell">
      <canvas data-testid="game-canvas" class="arena-canvas"></canvas>
      <div class="sky-haze" aria-hidden="true"></div>
      <header class="brand-bar">
        <div class="brand-mark"><span>🦆</span><div><b>PINE RING</b><small>PAINT RUSH</small></div></div>
        <div class="mission-pill"><i></i> CLEARING 07 · LIVE</div>
      </header>
      <section class="left-hud">
        <div class="stat-tile"><small>KILLS</small><b data-ui="kills">00</b></div>
        <div class="stat-tile rank-bronze" data-ui="rank-tile"><small>RANK</small><b data-ui="rank-name">BRONZE</b></div>
        <div class="objective-card"><small>OBJECTIVE</small><strong>Paint the rival flock</strong><span data-ui="objective">2 KILLS TO SILVER</span></div>
      </section>
      <div class="arena-label"><span>RING ROUTE</span><b>W/S orbit · A/D change lane · tap MOVE for a quick step</b></div>
      <div class="reticle" aria-hidden="true"><i></i><i></i></div>
      <section class="control-cluster" aria-label="Game controls">
        <button type="button" data-testid="move-btn" class="control move-control"><span>↻</span><b>MOVE</b><small>ORBIT</small></button>
        <button type="button" data-testid="rank-btn" class="control rank-control"><span>✦</span><b>RANK</b><small data-ui="rank-button-small">Bronze</small></button>
        <button type="button" data-testid="shoot-btn" class="control shoot-control"><span>●</span><b>SHOOT</b><small>PAINT</small></button>
      </section>
      <div class="duck-tag"><span>🦆</span><div><b>Scout Quill</b><small>mint paint launcher</small></div></div>
      <aside id="rankPanel" class="rank-panel" hidden aria-hidden="true">
        <div class="rank-topline"><span>PINE RING LEAGUE</span><button type="button" data-ui="rank-close" aria-label="Close ranks">×</button></div>
        <h2>Paint Circuit</h2>
        <div class="current-card">
          <small>CURRENT RANK</small>
          <strong data-testid="current-rank" data-rank-id="bronze">Bronze</strong>
          <p data-testid="kills-progress">0 / 2 kills · 2 to Silver</p>
        </div>
        <div class="rank-list" data-ui="rank-list"></div>
        <p class="rank-note">Each promotion tightens aim, speeds pursuit and shortens rival fire cooldown.</p>
      </aside>
    </main>`;

  const canvas = host.querySelector<HTMLCanvasElement>('[data-testid="game-canvas"]');
  const moveButton = host.querySelector<HTMLButtonElement>('[data-testid="move-btn"]');
  const shootButton = host.querySelector<HTMLButtonElement>('[data-testid="shoot-btn"]');
  const rankButton = host.querySelector<HTMLButtonElement>('[data-testid="rank-btn"]');
  const panel = host.querySelector<HTMLElement>('#rankPanel');
  const closeButton = host.querySelector<HTMLButtonElement>('[data-ui="rank-close"]');
  if (!canvas || !moveButton || !shootButton || !rankButton || !panel || !closeButton) {
    throw new Error('Pine Ring UI failed to mount');
  }

  const updateHud = (hud: HudSnapshot) => {
    const killsEl = host.querySelector<HTMLElement>('[data-ui="kills"]');
    const rankEl = host.querySelector<HTMLElement>('[data-ui="rank-name"]');
    const rankTile = host.querySelector<HTMLElement>('[data-ui="rank-tile"]');
    const smallRank = host.querySelector<HTMLElement>('[data-ui="rank-button-small"]');
    const objective = host.querySelector<HTMLElement>('[data-ui="objective"]');
    const current = host.querySelector<HTMLElement>('[data-testid="current-rank"]');
    const progress = host.querySelector<HTMLElement>('[data-testid="kills-progress"]');
    const rankList = host.querySelector<HTMLElement>('[data-ui="rank-list"]');
    if (killsEl) killsEl.textContent = hud.kills.toString().padStart(2, '0');
    if (rankEl) rankEl.textContent = hud.rank.name.toUpperCase();
    if (rankTile) rankTile.className = `stat-tile rank-${hud.rank.id}`;
    if (smallRank) smallRank.textContent = hud.rank.name;
    if (objective) objective.textContent = hud.next ? `${hud.killsToNext} KILLS TO ${hud.next.name.toUpperCase()}` : 'GOLD CIRCUIT CLEARED';
    if (current) {
      current.textContent = hud.rank.name;
      current.dataset.rankId = hud.rank.id;
    }
    if (progress) progress.textContent = hud.next
      ? `${hud.kills} / ${hud.next.killsRequired} kills · ${hud.killsToNext} to ${hud.next.name}`
      : `${hud.kills} kills · top rank`;
    if (rankList) {
      rankList.innerHTML = RANKS.map((rank) => `
        <div data-testid="rank-item" data-rank-id="${rank.id}" class="rank-row ${rank.id === hud.rank.id ? 'active' : ''}">
          <span class="rank-gem">${rank.id === 'bronze' ? '◆' : rank.id === 'silver' ? '◇' : '✦'}</span>
          <div><b>${rank.name}</b><small>${rank.killsRequired} cumulative kills</small></div>
          <em>AI ${rank.index + 1}</em>
        </div>`).join('');
    }
  };

  const engine = new PineRingEngine(canvas, updateHud);
  const orbitKeys = { forward: false, back: false, inward: false, outward: false };
  const syncKeyboard = () => engine.setKeyboardMotion((orbitKeys.forward ? 1 : 0) - (orbitKeys.back ? 1 : 0), (orbitKeys.outward ? 1 : 0) - (orbitKeys.inward ? 1 : 0));
  const handleOrbitKey = (event: KeyboardEvent, down: boolean) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return;
    let handled = true;
    switch (event.code) {
      case 'KeyW': case 'ArrowUp': orbitKeys.forward = down; break;
      case 'KeyS': case 'ArrowDown': orbitKeys.back = down; break;
      case 'KeyA': case 'ArrowLeft': orbitKeys.inward = down; break;
      case 'KeyD': case 'ArrowRight': orbitKeys.outward = down; break;
      default: handled = false;
    }
    if (!handled) return;
    event.preventDefault();
    syncKeyboard();
    if (orbitKeys.forward || orbitKeys.back || orbitKeys.inward || orbitKeys.outward) moveButton.classList.add('keyboard-active');
    else moveButton.classList.remove('keyboard-active');
  };
  const onKeyDown = (event: KeyboardEvent) => handleOrbitKey(event, true);
  const onKeyUp = (event: KeyboardEvent) => handleOrbitKey(event, false);
  const resetOrbitKeys = () => { orbitKeys.forward = orbitKeys.back = orbitKeys.inward = orbitKeys.outward = false; syncKeyboard(); moveButton.classList.remove('keyboard-active'); };
  const onVisibility = () => { if (document.hidden) resetOrbitKeys(); };
  let pressStarted = 0;
  const onMoveDown = (event: PointerEvent) => {
    event.preventDefault();
    pressStarted = performance.now();
    try { moveButton.setPointerCapture(event.pointerId); } catch { /* optional */ }
    engine.setMoving(true);
  };
  const stopMove = () => {
    const elapsed = performance.now() - pressStarted;
    engine.setMoving(false);
    if (elapsed > 0 && elapsed < 170) engine.tapMove();
  };
  const lostMove = () => engine.setMoving(false);
  const shoot = () => engine.shoot();
  const openRanks = () => { panel.hidden = false; panel.setAttribute('aria-hidden', 'false'); };
  const closeRanks = () => { panel.hidden = true; panel.setAttribute('aria-hidden', 'true'); };

  moveButton.addEventListener('pointerdown', onMoveDown);
  moveButton.addEventListener('pointerup', stopMove);
  window.addEventListener('keydown', onKeyDown, { passive: false });
  window.addEventListener('keyup', onKeyUp, { passive: false });
  window.addEventListener('blur', resetOrbitKeys);
  document.addEventListener('visibilitychange', onVisibility);
  moveButton.addEventListener('pointercancel', stopMove);
  moveButton.addEventListener('lostpointercapture', lostMove);
  shootButton.addEventListener('click', shoot);
  rankButton.addEventListener('click', openRanks);
  closeButton.addEventListener('click', closeRanks);

  return {
    destroy() {
      moveButton.removeEventListener('pointerdown', onMoveDown);
      moveButton.removeEventListener('pointerup', stopMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', resetOrbitKeys);
      document.removeEventListener('visibilitychange', onVisibility);
      moveButton.removeEventListener('pointercancel', stopMove);
      moveButton.removeEventListener('lostpointercapture', lostMove);
      shootButton.removeEventListener('click', shoot);
      rankButton.removeEventListener('click', openRanks);
      closeButton.removeEventListener('click', closeRanks);
      engine.destroy();
      host.replaceChildren();
    }
  };
}

(window as unknown as { PineRingGame?: PineRingGlobal }).PineRingGame = { mount: mountPineRing };
