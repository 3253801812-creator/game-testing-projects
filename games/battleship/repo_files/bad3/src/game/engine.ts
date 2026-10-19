// @ts-nocheck
/*
 * Core 3D Battleship engine.
 * The file intentionally uses JavaScript-compatible TypeScript so the same runtime
 * can be bundled by Vite and inlined into the standalone final/index.html.
 */

const BOARD_SIZE = 10;
const CELL_SIZE = 0.82;
const BOARD_SPACING = 10.6;
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_MODEL = 'openrouter/horizon-beta';
const DEFAULT_API_KEY = 'your-openrouter-api-key-here';
const ROWS = 'ABCDEFGHIJ';

const FLEET_SPEC = [
  { id: 'carrier', type: 'carrier', name: '航母', length: 5 },
  { id: 'battleship', type: 'battleship', name: '战列舰', length: 4 },
  { id: 'cruiser', type: 'cruiser', name: '巡洋舰', length: 3 },
  { id: 'submarine', type: 'submarine', name: '潜艇', length: 3 },
  { id: 'destroyer', type: 'destroyer', name: '驱逐舰', length: 2 },
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function coord(row, col) {
  return `${ROWS[row]}${col + 1}`;
}

function parseCoord(value) {
  const match = String(value || '').toUpperCase().match(/\b([A-J])\s*(10|[1-9])\b/);
  if (!match) return null;
  return { row: ROWS.indexOf(match[1]), col: Number(match[2]) - 1 };
}

function cellKey(row, col) {
  return `${row}:${col}`;
}

function inBounds(row, col) {
  return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function safeText(el, text) {
  if (el) el.textContent = text;
}

class Ship {
  constructor(spec) {
    this.id = spec.id;
    this.type = spec.type;
    this.name = spec.name;
    this.length = spec.length;
    this.orientation = null;
    this.start = null;
    this.cells = [];
    this.hits = [];
    this.sunk = false;
    this.confirmed = false;
    this.revealed = false;
    this.mesh = null;
  }

  place(row, col, orientation) {
    this.orientation = orientation;
    this.start = { row, col };
    this.cells = [];
    for (let i = 0; i < this.length; i += 1) {
      this.cells.push({
        row: row + (orientation === 'vertical' ? i : 0),
        col: col + (orientation === 'horizontal' ? i : 0),
      });
    }
  }

  clearPlacement() {
    this.orientation = null;
    this.start = null;
    this.cells = [];
    this.hits = [];
    this.sunk = false;
    this.confirmed = false;
    this.revealed = false;
  }

  registerHit(row, col) {
    if (!this.hits.some((p) => p.row === row && p.col === col)) this.hits.push({ row, col });
    this.sunk = this.hits.length >= this.length;
    if (this.sunk) this.revealed = true;
    return this.sunk;
  }
}

class GameBoard {
  constructor(owner, origin) {
    this.owner = owner;
    this.size = BOARD_SIZE;
    this.origin = { ...origin };
    this.cellSize = CELL_SIZE;
    this.ships = FLEET_SPEC.map((spec) => new Ship(spec));
    this.cells = Array.from({ length: BOARD_SIZE }, (_, row) =>
      Array.from({ length: BOARD_SIZE }, (_, col) => ({
        row,
        col,
        shipId: null,
        attacked: false,
        result: null,
        markerObjectId: null,
      })),
    );
    this.attackHistory = [];
  }

  reset() {
    this.ships.forEach((ship) => ship.clearPlacement());
    this.cells.flat().forEach((cell) => {
      cell.shipId = null;
      cell.attacked = false;
      cell.result = null;
      cell.markerObjectId = null;
    });
    this.attackHistory.length = 0;
  }

  getShip(id) {
    return this.ships.find((ship) => ship.id === id) || null;
  }

  placementCells(ship, row, col, orientation) {
    return Array.from({ length: ship.length }, (_, i) => ({
      row: row + (orientation === 'vertical' ? i : 0),
      col: col + (orientation === 'horizontal' ? i : 0),
    }));
  }

  validatePlacement(shipId, row, col, orientation) {
    const ship = this.getShip(shipId);
    if (!ship) return { valid: false, reason: 'unknown_ship', cells: [] };
    const cells = this.placementCells(ship, row, col, orientation);
    if (cells.some((p) => !inBounds(p.row, p.col))) return { valid: false, reason: 'out_of_bounds', cells };
    for (const p of cells) {
      const occupying = this.cells[p.row][p.col].shipId;
      if (occupying && occupying !== shipId) return { valid: false, reason: 'overlap', cells };
    }
    return { valid: true, reason: null, cells };
  }

  placeShip(shipId, row, col, orientation) {
    const ship = this.getShip(shipId);
    const validation = this.validatePlacement(shipId, row, col, orientation);
    if (!ship || !validation.valid) return validation;

    this.cells.flat().forEach((cell) => {
      if (cell.shipId === shipId) cell.shipId = null;
    });
    ship.place(row, col, orientation);
    validation.cells.forEach((p) => {
      this.cells[p.row][p.col].shipId = shipId;
    });
    return validation;
  }

  randomizeFleet() {
    this.reset();
    for (const ship of this.ships) {
      let placed = false;
      for (let attempt = 0; attempt < 1500 && !placed; attempt += 1) {
        const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        const row = Math.floor(Math.random() * BOARD_SIZE);
        const col = Math.floor(Math.random() * BOARD_SIZE);
        const result = this.placeShip(ship.id, row, col, orientation);
        placed = result.valid;
      }
      if (!placed) throw new Error(`Unable to place ${ship.id}`);
    }
  }

  confirmFleet() {
    this.ships.forEach((ship) => { ship.confirmed = Boolean(ship.start); });
  }

  allPlaced() {
    return this.ships.every((ship) => ship.cells.length === ship.length);
  }

  attack(row, col) {
    if (!inBounds(row, col)) return { ok: false, reason: 'out_of_bounds' };
    const cell = this.cells[row][col];
    if (cell.attacked) return { ok: false, reason: 'already_attacked' };
    cell.attacked = true;
    const ship = cell.shipId ? this.getShip(cell.shipId) : null;
    let result = 'miss';
    let shipId = null;
    if (ship) {
      shipId = ship.id;
      const sunk = ship.registerHit(row, col);
      result = sunk ? 'sunk' : 'hit';
    }
    cell.result = result;
    const entry = { row, col, coordinate: coord(row, col), result, shipId };
    this.attackHistory.push(entry);
    return { ok: true, ...entry, ship };
  }

  shipsRemaining() {
    return this.ships.filter((ship) => !ship.sunk).length;
  }

  allSunk() {
    return this.ships.every((ship) => ship.sunk);
  }

  totalHits() {
    return this.ships.reduce((sum, ship) => sum + ship.hits.length, 0);
  }

  getState({ fogOfWar = false } = {}) {
    const sunkIds = new Set(this.ships.filter((ship) => ship.sunk).map((ship) => ship.id));
    const stateShips = this.ships.map((ship) => {
      const hidden = fogOfWar && !ship.sunk;
      return {
        id: ship.id,
        type: ship.type,
        name: ship.name,
        length: ship.length,
        orientation: hidden ? null : ship.orientation,
        start: hidden ? null : (ship.start ? { ...ship.start } : null),
        cells: hidden ? [] : ship.cells.map((p) => ({ ...p })),
        hits: hidden ? [] : ship.hits.map((p) => ({ ...p })),
        sunk: ship.sunk,
        confirmed: ship.confirmed,
        revealed: ship.revealed,
        meshVisible: Boolean(ship.mesh && ship.mesh.visible),
        meshObjectId: hidden ? null : (ship.mesh ? ship.mesh.id : null),
      };
    });

    const stateCells = this.cells.flat().map((cell) => {
      const revealShip = !fogOfWar || (cell.shipId && sunkIds.has(cell.shipId));
      return {
        row: cell.row,
        col: cell.col,
        shipId: revealShip ? cell.shipId : null,
        attacked: cell.attacked,
        result: cell.attacked ? cell.result : null,
        markerObjectId: cell.markerObjectId,
      };
    });

    const history = this.attackHistory.map((entry) => ({
      row: entry.row,
      col: entry.col,
      coordinate: entry.coordinate,
      result: entry.result,
      shipId: !fogOfWar || (entry.shipId && sunkIds.has(entry.shipId)) ? entry.shipId : null,
    }));

    return {
      owner: this.owner,
      size: this.size,
      origin: { ...this.origin },
      cellSize: this.cellSize,
      ships: stateShips,
      cells: stateCells,
      attackHistory: history,
      shipsRemaining: this.shipsRemaining(),
      totalHits: this.totalHits(),
      occupiedCellCount: this.ships.reduce((sum, ship) => sum + ship.cells.length, 0),
    };
  }
}

class EffectsManager {
  constructor(scene) {
    this.scene = scene;
    this.activeEffects = [];
    this.markers = [];
    this.sinkAnimations = [];
    this.endEffects = [];
    this.telemetryResetFault = false;
  }

  disposeObject(obj) {
    this.scene.remove(obj);
    obj.traverse?.((child) => {
      child.geometry?.dispose?.();
      if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose?.());
      else child.material?.dispose?.();
    });
  }

  clear() {
    [...this.activeEffects, ...this.markers, ...this.endEffects].forEach((entry) => this.disposeObject(entry.object || entry));
    this.activeEffects.length = 0;
    this.markers.length = 0;
    this.sinkAnimations.length = 0;
    this.endEffects.length = 0;
    this.telemetryResetFault = true;
  }

  marker(position, result) {
    const THREE = window.THREE;
    let mesh;
    if (result === 'miss') {
      mesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.19, 0.035, 10, 28),
        new THREE.MeshBasicMaterial({ color: 0xeafaff, transparent: true, opacity: 0.92 }),
      );
      mesh.rotation.x = Math.PI / 2;
      mesh.position.set(position.x, 0.11, position.z);
    } else {
      mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 12, 10),
        new THREE.MeshStandardMaterial({ color: 0xff533d, emissive: 0x8a120a, emissiveIntensity: 1.8 }),
      );
      mesh.position.set(position.x, 0.22, position.z);
    }
    this.scene.add(mesh);
    this.markers.push({ object: mesh, result });
    return mesh;
  }

  burst(position, kind = 'hit') {
    const THREE = window.THREE;
    const count = kind === 'sunk' ? 34 : 20;
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = 0.25;
      positions[i * 3 + 2] = position.z;
      const a = Math.random() * Math.PI * 2;
      const speed = 0.7 + Math.random() * 1.4;
      velocities.push({ x: Math.cos(a) * speed, y: 1.3 + Math.random() * 1.5, z: Math.sin(a) * speed });
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: kind === 'miss' ? 0xa7efff : (kind === 'sunk' ? 0xffb047 : 0xff5b43),
      size: kind === 'sunk' ? 0.1 : 0.075,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
    const points = new THREE.Points(geometry, material);
    this.scene.add(points);
    this.activeEffects.push({ object: points, velocities, age: 0, duration: kind === 'sunk' ? 1.7 : 1.05 });
  }

  ripple(position) {
    const THREE = window.THREE;
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.11, 0.15, 32),
      new THREE.MeshBasicMaterial({ color: 0x9eeaff, side: THREE.DoubleSide, transparent: true, opacity: 0.85 }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(position.x, 0.075, position.z);
    this.scene.add(ring);
    this.activeEffects.push({ object: ring, age: 0, duration: 0.9, ripple: true });
  }

  sink(shipMesh) {
    if (!shipMesh) return;
    this.sinkAnimations.push({ object: shipMesh, age: 0, duration: 1.6, startY: shipMesh.position.y });
  }

  victory(position) {
    const THREE = window.THREE;
    for (let n = 0; n < 5; n += 1) {
      const count = 34;
      const positions = new Float32Array(count * 3);
      const velocities = [];
      const center = { x: position.x + (Math.random() - 0.5) * 5, y: 2 + Math.random() * 2, z: position.z + (Math.random() - 0.5) * 4 };
      for (let i = 0; i < count; i += 1) {
        positions[i * 3] = center.x;
        positions[i * 3 + 1] = center.y;
        positions[i * 3 + 2] = center.z;
        const phi = Math.random() * Math.PI * 2;
        const vy = (Math.random() - 0.2) * 2.2;
        const speed = 0.7 + Math.random() * 1.1;
        velocities.push({ x: Math.cos(phi) * speed, y: vy, z: Math.sin(phi) * speed });
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color: [0x5cd9ff, 0xffc65c, 0xff6b6b][n % 3], size: 0.08, transparent: true });
      const points = new THREE.Points(geometry, material);
      this.scene.add(points);
      this.endEffects.push({ object: points, velocities, age: 0, duration: 3.2 });
    }
  }

  update(dt) {
    const stepParticles = (entry, gravity = 1.3) => {
      entry.age += dt;
      const pos = entry.object.geometry.attributes.position.array;
      entry.velocities?.forEach((v, i) => {
        v.y -= gravity * dt;
        pos[i * 3] += v.x * dt;
        pos[i * 3 + 1] += v.y * dt;
        pos[i * 3 + 2] += v.z * dt;
      });
      entry.object.geometry.attributes.position.needsUpdate = true;
      entry.object.material.opacity = Math.max(0, 1 - entry.age / entry.duration);
    };

    for (let i = this.activeEffects.length - 1; i >= 0; i -= 1) {
      const entry = this.activeEffects[i];
      entry.age += entry.ripple ? dt : 0;
      if (entry.ripple) {
        const s = 1 + entry.age * 2.4;
        entry.object.scale.setScalar(s);
        entry.object.material.opacity = Math.max(0, 0.85 * (1 - entry.age / entry.duration));
      } else {
        stepParticles(entry, 2.4);
      }
      if (entry.age >= entry.duration) {
        this.disposeObject(entry.object);
        this.activeEffects.splice(i, 1);
      }
    }

    for (let i = this.sinkAnimations.length - 1; i >= 0; i -= 1) {
      const entry = this.sinkAnimations[i];
      entry.age += dt;
      const t = Math.min(1, entry.age / entry.duration);
      entry.object.position.y = entry.startY - t * 0.55;
      entry.object.rotation.z = t * 0.2;
      if (t >= 1) this.sinkAnimations.splice(i, 1);
    }

    for (let i = this.endEffects.length - 1; i >= 0; i -= 1) {
      const entry = this.endEffects[i];
      stepParticles(entry, 0.9);
      if (entry.age >= entry.duration) {
        this.disposeObject(entry.object);
        this.endEffects.splice(i, 1);
      }
    }
  }

  getState() {
    if (this.telemetryResetFault) {
      throw new Error("声呐反馈状态在清场后未重新建立遥测快照");
    }
    return {
      activeEffects: this.activeEffects.length,
      markers: this.markers.map((entry) => ({ objectId: entry.object.id, result: entry.result })),
      sinkAnimations: this.sinkAnimations.map((entry) => ({ objectId: entry.object.id, progress: Math.min(1, entry.age / entry.duration) })),
      endEffects: this.endEffects.length,
    };
  }
}

class AudioManager {
  constructor() {
    this.context = null;
    this.muted = false;
  }

  ensure() {
    if (!this.context) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) this.context = new Ctx();
    }
    if (this.context?.state === 'suspended') this.context.resume().catch(() => {});
  }

  tone(freq, duration, type = 'sine', gain = 0.035) {
    this.ensure();
    if (!this.context || this.muted) return;
    const osc = this.context.createOscillator();
    const amp = this.context.createGain();
    osc.frequency.value = freq;
    osc.type = type;
    amp.gain.setValueAtTime(gain, this.context.currentTime);
    amp.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);
    osc.connect(amp).connect(this.context.destination);
    osc.start();
    osc.stop(this.context.currentTime + duration);
  }

  play(result) {
    if (result === 'miss') this.tone(240, 0.12, 'sine', 0.02);
    if (result === 'hit') this.tone(95, 0.22, 'square', 0.045);
    if (result === 'sunk') {
      this.tone(90, 0.45, 'sawtooth', 0.045);
      setTimeout(() => this.tone(60, 0.5, 'sawtooth', 0.035), 120);
    }
  }
}

class AIPlayer {
  constructor() {
    this.mode = 'hunt';
    this.knownHits = [];
    this.knownMisses = [];
    this.sunkShips = [];
    this.targetQueue = [];
    this.attackHistory = [];
    this.knowledgeBoard = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill('unknown'));
    this.lastPrompt = '';
    this.lastRawResponse = null;
    this.lastChosenCoordinate = null;
    this.lastDecisionSource = null;
    this.lastError = null;
    this.fallbackCount = 0;
    this.apiConfigured = false;
    this.useApi = true;
    this.requestTimeoutMs = 7000;
    this.pendingRequestCount = 0;
    this.activeSessionId = null;
  }

  reset(sessionId) {
    this.mode = 'hunt';
    this.knownHits = [];
    this.knownMisses = [];
    this.sunkShips = [];
    this.targetQueue = [];
    this.attackHistory = [];
    this.knowledgeBoard = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill('unknown'));
    this.lastPrompt = '';
    this.lastRawResponse = null;
    this.lastChosenCoordinate = null;
    this.lastDecisionSource = null;
    this.lastError = null;
    this.fallbackCount = 0;
    this.pendingRequestCount = 0;
    this.activeSessionId = sessionId;
  }

  getApiKey() {
    const input = document.getElementById('apiKey');
    const fromInput = input?.value?.trim();
    const fromWindow = String(window.OPENROUTER_API_KEY || '').trim();
    const value = fromInput || fromWindow || DEFAULT_API_KEY;
    this.apiConfigured = Boolean(value && value !== DEFAULT_API_KEY && !value.includes('your-openrouter'));
    return this.apiConfigured ? value : null;
  }

  hasAttacked(row, col) {
    return this.knowledgeBoard[row][col] !== 'unknown';
  }

  enqueueNeighbors(row, col) {
    const candidates = [
      { row: row - 1, col }, { row: row + 1, col }, { row, col: col - 1 }, { row, col: col + 1 },
    ];
    for (const p of candidates) {
      if (!inBounds(p.row, p.col) || this.hasAttacked(p.row, p.col)) continue;
      const c = coord(p.row, p.col);
      if (!this.targetQueue.includes(c)) this.targetQueue.push(c);
    }
  }

  observe(result) {
    const c = result.coordinate;
    this.attackHistory.push(c);
    if (result.result === 'miss') {
      this.knownMisses.push(c);
      this.knowledgeBoard[result.row][result.col] = 'miss';
    } else {
      this.knownHits.push(c);
      this.knowledgeBoard[result.row][result.col] = result.result === 'sunk' ? 'sunk' : 'hit';
      this.enqueueNeighbors(result.row, result.col);
      if (result.result === 'sunk' && result.ship) {
        this.sunkShips.push(result.ship.name);
        result.ship.cells.forEach((p) => { this.knowledgeBoard[p.row][p.col] = 'sunk'; });
      }
    }
    this.targetQueue = this.targetQueue.filter((value) => {
      const p = parseCoord(value);
      return p && !this.hasAttacked(p.row, p.col);
    });
    this.mode = this.targetQueue.length ? 'target' : 'hunt';
  }

  buildPrompt() {
    const prompt = [
      '你是一个公平的战舰 AI。棋盘为 10x10，行 A-J、列 1-10。只根据已公开的攻击历史决策，绝不能假设或推断任何未公开舰位。',
      '目标：击沉人类的 5 艘舰船（长度 5,4,3,3,2）。只返回一个尚未攻击的坐标，并可附一行很短理由。',
      `模式：${this.mode}`,
      `已知命中：${this.knownHits.join(', ') || '无'}`,
      `已知未命中：${this.knownMisses.join(', ') || '无'}`,
      `已击沉：${this.sunkShips.join(', ') || '无'}`,
      `候选追击：${this.targetQueue.join(', ') || '无'}`,
      `历史攻击：${this.attackHistory.join(', ') || '无'}`,
      '优先规则：若存在未完成命中则攻击相邻候选；否则采用棋盘覆盖良好的狩猎策略。格式示例：A5',
    ].join('\n');
    this.lastPrompt = prompt;
    return prompt;
  }

  chooseFallback() {
    while (this.targetQueue.length) {
      const value = this.targetQueue.shift();
      const p = parseCoord(value);
      if (p && !this.hasAttacked(p.row, p.col)) {
        this.mode = 'target';
        return p;
      }
    }
    this.mode = 'hunt';
    const parity = [];
    const any = [];
    for (let row = 0; row < BOARD_SIZE; row += 1) {
      for (let col = 0; col < BOARD_SIZE; col += 1) {
        if (this.hasAttacked(row, col)) continue;
        any.push({ row, col });
        if ((row + col) % 2 === 0) parity.push({ row, col });
      }
    }
    return randomItem(parity.length ? parity : any) || null;
  }

  async decide(sessionId) {
    this.activeSessionId = sessionId;
    const key = this.useApi ? this.getApiKey() : null;
    const prompt = this.buildPrompt();
    if (!key) {
      this.lastDecisionSource = 'fallback';
      this.lastError = null;
      this.fallbackCount += 1;
      const p = this.chooseFallback();
      this.lastChosenCoordinate = p ? coord(p.row, p.col) : null;
      return p;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.requestTimeoutMs);
    this.pendingRequestCount += 1;
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': location.href,
          'X-Title': '3D Battleship',
        },
        body: JSON.stringify({ model: API_MODEL, messages: [{ role: 'user', content: prompt }] }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`OpenRouter HTTP ${response.status}`);
      const data = await response.json();
      const text = data?.choices?.[0]?.message?.content;
      this.lastRawResponse = typeof text === 'string' ? text : JSON.stringify(text || '');
      const p = parseCoord(this.lastRawResponse);
      if (!p || this.hasAttacked(p.row, p.col)) throw new Error('OpenRouter returned an invalid or repeated coordinate');
      if (sessionId !== this.activeSessionId) throw new Error('Stale AI session');
      this.lastChosenCoordinate = coord(p.row, p.col);
      this.lastDecisionSource = 'openrouter';
      this.lastError = null;
      return p;
    } catch (error) {
      this.lastError = String(error?.message || error);
      console.warn('[Battleship AI] API unavailable, using fair local fallback:', error);
      this.fallbackCount += 1;
      const p = this.chooseFallback();
      this.lastChosenCoordinate = p ? coord(p.row, p.col) : null;
      this.lastDecisionSource = 'fallback';
      return p;
    } finally {
      clearTimeout(timer);
      this.pendingRequestCount = Math.max(0, this.pendingRequestCount - 1);
    }
  }

  getState() {
    return {
      mode: this.mode,
      knownHits: [...this.knownHits],
      knownMisses: [...this.knownMisses],
      sunkShips: [...this.sunkShips],
      targetQueue: [...this.targetQueue],
      attackHistory: [...this.attackHistory],
      knowledgeBoard: this.knowledgeBoard.map((row) => [...row]),
      lastPrompt: this.lastPrompt,
      lastRawResponse: this.lastRawResponse,
      lastChosenCoordinate: this.lastChosenCoordinate,
      lastDecisionSource: this.lastDecisionSource,
      lastError: this.lastError,
      fallbackCount: this.fallbackCount,
      apiConfigured: this.apiConfigured,
      requestTimeoutMs: this.requestTimeoutMs,
      pendingRequestCount: this.pendingRequestCount,
      activeSessionId: this.activeSessionId,
    };
  }
}

class ThreeScene {
  constructor(canvas, playerBoard, enemyBoard, controller) {
    const THREE = window.THREE;
    this.THREE = THREE;
    this.canvas = canvas;
    this.playerBoard = playerBoard;
    this.enemyBoard = enemyBoard;
    this.controller = controller;
    this.frameCount = 0;
    this.boardGroups = {};
    this.hitMeshes = [];
    this.hovered = null;
    this.preview = null;
    this.shipMeshes = new Map();
    this.waterMaterials = [];
    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x020914);
    this.scene.fog = new THREE.FogExp2(0x04111e, 0.035);

    this.camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    this.camera.position.set(0, 11.5, 12.8);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    const Controls = THREE.OrbitControls;
    if (!Controls) throw new Error('OrbitControls 未加载');
    this.controls = new Controls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.enablePan = false;
    this.controls.minDistance = 8;
    this.controls.maxDistance = 24;
    this.controls.maxPolarAngle = Math.PI * 0.46;
    this.controls.target.set(0, 0, 0);

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this.createLighting();
    this.createEnvironment();
    this.createBoard(playerBoard);
    this.createBoard(enemyBoard);
    this.createPreview();

    this.effects = new EffectsManager(this.scene);
    this.bindEvents();
    this.resize();

    window.__scene = this.scene;
    window.__camera = this.camera;
    window.__renderer = this.renderer;
  }

  createLighting() {
    const THREE = this.THREE;
    this.ambient = new THREE.HemisphereLight(0x89cfff, 0x071522, 0.68);
    this.scene.add(this.ambient);
    this.sun = new THREE.DirectionalLight(0xb9edff, 1.1);
    this.sun.position.set(-6, 12, 7);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.scene.add(this.sun);
    this.rim = new THREE.PointLight(0x00a9e8, 0.8, 24);
    this.rim.position.set(0, 5, -6);
    this.scene.add(this.rim);
  }

  createEnvironment() {
    const THREE = this.THREE;
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 40),
      new THREE.MeshStandardMaterial({ color: 0x03121e, roughness: 0.86, metalness: 0.12 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.13;
    floor.receiveShadow = true;
    this.scene.add(floor);

    const starsGeo = new THREE.BufferGeometry();
    const count = 240;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = 5 + Math.random() * 17;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 38;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0x75cdeb, size: 0.025, transparent: true, opacity: 0.4 }));
    this.scene.add(stars);
  }

  createBoard(board) {
    const THREE = this.THREE;
    const group = new THREE.Group();
    group.position.set(board.origin.x, board.origin.y, board.origin.z);
    group.userData.owner = board.owner;
    this.scene.add(group);
    this.boardGroups[board.owner] = group;

    const waterUniforms = { uTime: { value: 0 }, uColor: { value: new THREE.Color(board.owner === 'player' ? 0x075779 : 0x06445f) } };
    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(BOARD_SIZE * CELL_SIZE + 0.18, BOARD_SIZE * CELL_SIZE + 0.18, 36, 36),
      new THREE.ShaderMaterial({
        uniforms: waterUniforms,
        transparent: true,
        opacity: 0.9,
        vertexShader: `
          uniform float uTime;
          varying float vWave;
          void main(){
            vec3 p = position;
            float w = sin((p.x + uTime) * 1.7) * 0.045 + cos((p.y - uTime * .7) * 2.2) * 0.03;
            p.z += w;
            vWave = w;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          varying float vWave;
          void main(){
            float glow = .72 + vWave * 4.0;
            gl_FragColor = vec4(uColor * glow + vec3(.01,.10,.14), .94);
          }
        `,
        side: THREE.DoubleSide,
      }),
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0;
    group.add(water);
    this.waterMaterials.push(water.material);

    const grid = new THREE.GridHelper(BOARD_SIZE * CELL_SIZE, BOARD_SIZE, 0x82dfff, 0x2d7592);
    grid.position.y = 0.035;
    const materials = Array.isArray(grid.material) ? grid.material : [grid.material];
    materials.forEach((m) => { m.transparent = true; m.opacity = 0.34; });
    group.add(grid);

    for (let row = 0; row < BOARD_SIZE; row += 1) {
      for (let col = 0; col < BOARD_SIZE; col += 1) {
        const hit = new THREE.Mesh(
          new THREE.PlaneGeometry(CELL_SIZE * 0.96, CELL_SIZE * 0.96),
          new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
        );
        const p = this.localCellPosition(row, col);
        hit.rotation.x = -Math.PI / 2;
        hit.position.set(p.x, 0.08, p.z);
        hit.userData = { owner: board.owner, row, col };
        group.add(hit);
        this.hitMeshes.push(hit);
      }
    }
  }

  localCellPosition(row, col) {
    const half = (BOARD_SIZE - 1) * CELL_SIZE * 0.5;
    return { x: col * CELL_SIZE - half, z: row * CELL_SIZE - half };
  }

  worldCellPosition(board, row, col) {
    const p = this.localCellPosition(row, col);
    return { x: board.origin.x + p.x, y: board.origin.y, z: board.origin.z + p.z };
  }

  createShipMesh(ship, board, visible = true, preview = false) {
    const THREE = this.THREE;
    const group = new THREE.Group();
    const hullLength = ship.length * CELL_SIZE * 0.84;
    const hull = new THREE.Mesh(
      new THREE.BoxGeometry(hullLength, 0.28, CELL_SIZE * 0.48),
      new THREE.MeshStandardMaterial({
        color: preview ? 0x42d5ff : (board.owner === 'player' ? 0x6e8796 : 0x805c59),
        roughness: 0.48,
        metalness: 0.6,
        transparent: preview,
        opacity: preview ? 0.52 : 1,
      }),
    );
    hull.castShadow = true;
    group.add(hull);

    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(Math.max(0.28, hullLength * 0.36), 0.19, CELL_SIZE * 0.31),
      new THREE.MeshStandardMaterial({ color: preview ? 0x7ee5ff : 0x9bb1bc, roughness: 0.42, metalness: 0.52, transparent: preview, opacity: preview ? 0.55 : 1 }),
    );
    deck.position.y = 0.21;
    deck.position.x = -hullLength * 0.07;
    group.add(deck);

    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.025, 0.35, 8),
      new THREE.MeshStandardMaterial({ color: 0xc5d5dc, metalness: 0.7, roughness: 0.3, transparent: preview, opacity: preview ? 0.5 : 1 }),
    );
    mast.position.set(-hullLength * 0.04, 0.47, 0);
    group.add(mast);

    group.visible = visible;
    group.userData = { shipId: ship.id, owner: board.owner, preview };
    return group;
  }

  updateShipMesh(board, ship) {
    if (ship.mesh) {
      this.scene.remove(ship.mesh);
      ship.mesh.traverse?.((o) => { o.geometry?.dispose?.(); o.material?.dispose?.(); });
      ship.mesh = null;
    }
    if (!ship.start) return;
    const mesh = this.createShipMesh(ship, board, board.owner === 'player' || ship.sunk, false);
    const first = this.worldCellPosition(board, ship.start.row, ship.start.col);
    const last = this.worldCellPosition(board, ship.cells[ship.cells.length - 1].row, ship.cells[ship.cells.length - 1].col);
    mesh.position.set((first.x + last.x) / 2, 0.28, (first.z + last.z) / 2);
    if (ship.orientation === 'vertical') mesh.rotation.y = Math.PI / 2;
    this.scene.add(mesh);
    ship.mesh = mesh;
    this.shipMeshes.set(`${board.owner}:${ship.id}`, mesh);
  }

  syncFleet(board) {
    board.ships.forEach((ship) => this.updateShipMesh(board, ship));
  }

  revealSunkShip(board, ship) {
    this.updateShipMesh(board, ship);
    if (ship.mesh) {
      ship.mesh.visible = true;
      ship.mesh.traverse?.((o) => {
        if (o.material?.color) o.material.color.set(0x8b4a42);
        if (o.material?.emissive) o.material.emissive.set(0x3b0805);
      });
      this.effects.sink(ship.mesh);
    }
  }

  createPreview() {
    this.preview = new this.THREE.Group();
    this.preview.visible = false;
    this.scene.add(this.preview);
  }

  showPlacementPreview(ship, row, col, orientation, valid) {
    while (this.preview.children.length) {
      const child = this.preview.children.pop();
      child.geometry?.dispose?.();
      child.material?.dispose?.();
    }
    const tempShip = { ...ship };
    const previewMesh = this.createShipMesh(tempShip, this.playerBoard, true, true);
    previewMesh.traverse?.((o) => {
      if (o.material?.color) o.material.color.set(valid ? 0x45e2d0 : 0xff5b67);
    });
    const cells = this.playerBoard.placementCells(ship, row, col, orientation);
    const first = cells[0];
    const last = cells[cells.length - 1];
    const a = this.worldCellPosition(this.playerBoard, first.row, first.col);
    const b = this.worldCellPosition(this.playerBoard, last.row, last.col);
    previewMesh.position.set((a.x + b.x) / 2, 0.38, (a.z + b.z) / 2);
    if (orientation === 'vertical') previewMesh.rotation.y = Math.PI / 2;
    this.preview.add(previewMesh);
    this.preview.visible = true;
  }

  hidePreview() {
    if (this.preview) this.preview.visible = false;
  }

  pointerFromEvent(event) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  pickCell(event) {
    this.pointerFromEvent(event);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.hitMeshes, false);
    return hits[0]?.object?.userData || null;
  }

  bindEvents() {
    this.onPointerMove = (event) => {
      const cell = this.pickCell(event);
      if (!cell) {
        this.hovered = null;
        this.hidePreview();
        this.controller.onHoverCell({ owner: null });
        return;
      }
      this.hovered = cell;
      this.controller.onHoverCell(cell);
    };
    this.onClick = (event) => {
      const cell = this.pickCell(event);
      if (cell) this.controller.onCellClick(cell);
    };
    this.onResize = () => this.resize();
    this.canvas.addEventListener('pointermove', this.onPointerMove);
    this.canvas.addEventListener('click', this.onClick);
    window.addEventListener('resize', this.onResize);
  }

  resize() {
    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;
    this.camera.aspect = Math.max(0.1, width / Math.max(1, height));
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  markAttack(board, attack) {
    const p = this.worldCellPosition(board, attack.row, attack.col);
    const marker = this.effects.marker(p, attack.result);
    board.cells[attack.row][attack.col].markerObjectId = marker.id;
    if (attack.result === 'miss') this.effects.ripple(p);
    else this.effects.burst(p, attack.result === 'sunk' ? 'sunk' : 'hit');
  }

  renderFrame(dt, elapsed) {
    this.frameCount += 1;
    this.waterMaterials.forEach((material, index) => {
      material.uniforms.uTime.value = elapsed * (index ? 0.84 : 1.0);
    });
    this.effects.update(dt);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  getCellScreenPosition(owner, row, col) {
    const mesh = this.hitMeshes.find((item) => item.userData?.owner === owner && item.userData?.row === row && item.userData?.col === col);
    if (!mesh) return null;
    const point = new THREE.Vector3();
    mesh.getWorldPosition(point);
    point.project(this.camera);
    const rect = this.canvas.getBoundingClientRect();
    return { x: rect.left + (point.x + 1) * rect.width / 2, y: rect.top + (1 - point.y) * rect.height / 2 };
  }

  getState() {
    const countObjects = (() => { let n = 0; this.scene.traverse(() => { n += 1; }); return n; })();
    const rect = this.canvas.getBoundingClientRect();
    return {
      ready: true,
      initialized: true,
      frameCount: this.frameCount,
      waterTime: this.frameCount / 60,
      allowCameraBelow: false,
      canvas: { id: this.canvas.id, width: this.canvas.width, height: this.canvas.height, cssWidth: rect.width, cssHeight: rect.height, pixelRatio: this.renderer.getPixelRatio() },
      renderer: { width: rect.width, height: rect.height, pixelRatio: this.renderer.getPixelRatio() },
      camera: {
        objectId: this.camera.id,
        x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z,
        position: { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
        fov: this.camera.fov,
      },
      controls: { enabled: this.controls.enabled, target: { x: this.controls.target.x, y: this.controls.target.y, z: this.controls.target.z } },
      boardGroups: Object.fromEntries(Object.entries(this.boardGroups).map(([key, group]) => [key, { objectId: group.id, visible: group.visible }])),
      lights: [this.ambient, this.sun, this.rim].map((light) => ({ objectId: light.id, type: light.type, intensity: light.intensity })),
      objectCount: countObjects,
    };
  }

  dispose() {
    this.canvas.removeEventListener('pointermove', this.onPointerMove);
    this.canvas.removeEventListener('click', this.onClick);
    window.removeEventListener('resize', this.onResize);
    this.controls.dispose();
    this.effects.clear();
    this.renderer.dispose();
  }
}

class BattleshipController {
  constructor() {
    this.ready = false;
    this.phase = 'setup';
    this.turn = null;
    this.inputLocked = false;
    this.winner = null;
    this.sessionId = 1;
    this.humanAttackCount = 0;
    this.aiAttackCount = 0;
    this.statusMessage = '部署你的舰队';
    this.lastAction = null;
    this.battleLog = [];
    this.apiStatus = 'AI：准备中';
    this.frameCount = 0;
    this.animationId = 0;
    this.lastTime = performance.now();
    this.orientation = 'horizontal';
    this.selectedShipId = 'carrier';
    this.draggingShipId = null;
    this.previewCells = [];
    this.previewValid = false;
    this.invalidReason = null;
    this.lastPlacementResult = null;
    this.destroyed = false;
    this.keyHandler = (event) => {
      if (event.key.toLowerCase() === 'r' && this.phase === 'setup') this.rotatePlacement();
    };
  }

  init() {
    const canvas = document.getElementById('game');
    if (!canvas) throw new Error('缺少 canvas#game');
    this.playerBoard = new GameBoard('player', { x: -BOARD_SPACING / 2, y: 0, z: 0 });
    this.enemyBoard = new GameBoard('enemy', { x: BOARD_SPACING / 2, y: 0, z: 0 });
    this.ai = new AIPlayer();
    this.ai.reset(this.sessionId);
    this.audio = new AudioManager();
    this.three = new ThreeScene(canvas, this.playerBoard, this.enemyBoard, this);
    this.enemyBoard.randomizeFleet();
    this.enemyBoard.confirmFleet();
    this.three.syncFleet(this.enemyBoard);
    this.bindUI();
    this.exposeInterfaces();
    this.updateUI();
    document.addEventListener('keydown', this.keyHandler);
    this.ready = true;
    this.apiStatus = this.ai.getApiKey() ? 'AI：OpenRouter 已配置' : 'AI：本地公平模式';
    this.updateUI();
    this.animate();
  }

  bindUI() {
    this.shipButtons = Array.from(document.querySelectorAll('[data-testid="ship-item"]'));
    this.shipButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (this.phase !== 'setup') return;
        const id = button.dataset.shipId;
        const ship = this.playerBoard.getShip(id);
        if (!ship) return;
        this.selectedShipId = id;
        this.lastPlacementResult = null;
        this.updateUI();
      });
    });
    document.querySelector('[data-testid="rotate-btn"]')?.addEventListener('click', () => this.rotatePlacement());
    document.querySelector('[data-testid="randomize-placement"]')?.addEventListener('click', () => this.randomizePlacement());
    document.querySelector('[data-testid="confirm-placement"]')?.addEventListener('click', () => this.confirmPlacement());
    document.querySelector('[data-testid="restart-btn"]')?.addEventListener('click', () => this.restart());
    document.getElementById('modalRestart')?.addEventListener('click', () => this.restart());
    document.getElementById('reloadBtn')?.addEventListener('click', () => location.reload());
    document.getElementById('apiKey')?.addEventListener('input', () => {
      this.apiStatus = this.ai.getApiKey() ? 'AI：OpenRouter 已配置' : 'AI：本地公平模式';
      this.updateUI();
    });
  }

  exposeInterfaces() {
    window.__game = { getState: () => this.getGameState() };
    window.__playerBoard = { getState: () => this.playerBoard.getState() };
    window.__enemyBoard = { getState: () => this.enemyBoard.getState({ fogOfWar: true }) };
    window.__placement = { getState: () => this.getPlacementState() };
    window.__aiPlayer = { getState: () => this.ai.getState() };
    window.__effects = { getState: () => this.three.effects.getState() };
    window.__three = { getState: () => this.three.getState() };
    window.__scene = this.three.scene;
    window.__camera = this.three.camera;
    window.__renderer = this.three.renderer;
    window.__engine = this;
    window.__test = {
      reset: () => this.restart(),
      setFleet: (owner, placements) => this.testSetFleet(owner, placements),
      startBattle: () => this.testStartBattle(),
      coordinateToLabel: (row, col) => coord(row, col),
      labelToCoordinate: (label) => parseCoord(label),
      selectShip: (shipId) => this.testSelectShip(shipId),
      placeShip: (shipId, row, col, orientation) => this.testPlaceShip(shipId, row, col, orientation),
      moveShip: (shipId, row, col, orientation) => this.testPlaceShip(shipId, row, col, orientation),
      rotateShip: (shipId) => this.testRotateShip(shipId),
      randomizePlayerFleet: () => this.testRandomize(),
      playerAttack: (row, col) => this.testPlayerAttack(row, col),
      aiAttack: (row, col) => this.testAIAttack(row, col),
      configureAI: (config) => this.testConfigureAI(config),
      requestAIMove: () => this.testRequestAIMove(),
      waitForIdle: (timeoutMs) => this.testWaitForIdle(timeoutMs),
      toggleAudio: () => { this.audio.muted = !this.audio.muted; return { muted: this.audio.muted }; },
      getBattleLog: () => ({ entries: this.battleLog.map((entry) => ({ ...entry })) }),
      getCellScreenPosition: (owner, row, col) => this.three.getCellScreenPosition(owner, row, col),
    };
  }

  testSetFleet(owner, placements) {
    if (this.phase !== 'setup') return { ok: false, reason: 'wrong_phase' };
    const board = owner === 'player' ? this.playerBoard : this.enemyBoard;
    board.reset();
    for (const item of placements) {
      const result = board.placeShip(item.shipId, item.row, item.col, item.orientation);
      if (!result.valid) return { ok: false, reason: result.reason };
    }
    board.confirmFleet();
    this.three.syncFleet(board);
    this.updateUI();
    return { ok: true };
  }

  testStartBattle() {
    if (this.phase !== 'setup' || !this.playerBoard.allPlaced()) return { ok: false, reason: 'fleet_incomplete' };
    this.confirmPlacement();
    return { ok: true };
  }

  testSelectShip(shipId) {
    if (this.phase !== 'setup' || !this.playerBoard.getShip(shipId)) return { ok: false, reason: 'unknown_ship' };
    this.selectedShipId = shipId; this.updateUI(); return { ok: true };
  }

  testPlaceShip(shipId, row, col, orientation) {
    if (this.phase !== 'setup') return { ok: false, reason: 'wrong_phase' };
    const result = this.playerBoard.placeShip(shipId, row, col, orientation);
    if (!result.valid) return { ok: false, reason: result.reason };
    const ship = this.playerBoard.getShip(shipId); if (ship) this.three.updateShipMesh(this.playerBoard, ship);
    this.selectedShipId = this.playerBoard.ships.find((item) => item.cells.length !== item.length)?.id || null;
    this.updateUI(); return { ok: true, cells: result.cells.map((cell) => ({ ...cell })) };
  }

  testRotateShip(shipId) {
    if (this.phase !== 'setup') return { ok: false, reason: 'wrong_phase' };
    const ship = this.playerBoard.getShip(shipId); if (!ship) return { ok: false, reason: 'unknown_ship' };
    if (!ship.start || !ship.orientation) { this.orientation = this.orientation === 'horizontal' ? 'vertical' : 'horizontal'; return { ok: true }; }
    const orientation = ship.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    const result = this.playerBoard.placeShip(ship.id, ship.start.row, ship.start.col, orientation);
    if (!result.valid) return { ok: false, reason: result.reason };
    this.orientation = orientation; this.three.updateShipMesh(this.playerBoard, ship); this.updateUI(); return { ok: true };
  }

  testRandomize() {
    if (this.phase !== 'setup') return { ok: false, reason: 'wrong_phase' };
    this.randomizePlacement(); return { ok: true };
  }

  testPlayerAttack(row, col) {
    if (this.phase !== 'playing' || this.turn !== 'human' || this.inputLocked) return { ok: false, reason: 'wrong_turn' };
    const attack = this.enemyBoard.attack(row, col); if (!attack.ok) return { ok: false, reason: attack.reason };
    this.humanAttackCount += 1; this.lastAction = { actor: 'human', row, col, coordinate: attack.coordinate, result: attack.result, shipId: attack.shipId };
    this.three.markAttack(this.enemyBoard, attack); this.audio.play(attack.result);
    if (attack.result === 'sunk' && attack.ship) this.three.revealSunkShip(this.enemyBoard, attack.ship);
    const message = this.describeAttack('你', attack); this.statusMessage = message; this.battleLog.push({ actor: 'human', coordinate: attack.coordinate, result: attack.result, message });
    if (this.enemyBoard.allSunk()) this.endGame('human'); else { this.turn = 'ai'; this.inputLocked = true; this.updateUI(); }
    return { ok: true, row, col, coordinate: attack.coordinate, result: attack.result, shipId: attack.shipId };
  }

  testAIAttack(row, col) {
    if (this.phase !== 'playing' || this.turn !== 'ai') return { ok: false, reason: 'wrong_turn' };
    const attack = this.playerBoard.attack(row, col); if (!attack.ok) return { ok: false, reason: attack.reason };
    this.ai.observe(attack); this.aiAttackCount += 1; this.lastAction = { actor: 'ai', row, col, coordinate: attack.coordinate, result: attack.result, shipId: attack.shipId };
    this.three.markAttack(this.playerBoard, attack); this.audio.play(attack.result);
    if (attack.result === 'sunk' && attack.ship) this.three.revealSunkShip(this.playerBoard, attack.ship);
    const message = this.describeAttack('AI', attack); this.statusMessage = message; this.battleLog.push({ actor: 'ai', coordinate: attack.coordinate, result: attack.result, message });
    if (this.playerBoard.allSunk()) this.endGame('ai'); else { this.turn = 'human'; this.inputLocked = false; this.updateUI(); }
    return { ok: true, row, col, coordinate: attack.coordinate, result: attack.result, shipId: attack.shipId };
  }

  testConfigureAI(config = {}) {
    if (typeof config.timeoutMs === 'number') this.ai.requestTimeoutMs = config.timeoutMs;
    if (typeof config.useApi === 'boolean') this.ai.useApi = config.useApi;
    if (typeof config.enabled === 'boolean') this.ai.useApi = config.enabled;
    if (typeof config.apiKey === 'string') { const input = document.getElementById('apiKey'); if (input) input.value = config.apiKey; }
    this.ai.getApiKey(); this.updateUI(); return this.ai.getState();
  }

  async testRequestAIMove() {
    const p = await this.ai.decide(this.sessionId);
    return p ? { ok: true, row: p.row, col: p.col, coordinate: coord(p.row, p.col) } : { ok: false, reason: 'no_move' };
  }

  async testWaitForIdle(timeoutMs = 1200) {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) { if (this.ai.pendingRequestCount === 0) return true; await new Promise((resolve) => setTimeout(resolve, 20)); }
    return false;
  }

  getGameState() {
    return {
      ready: this.ready,
      phase: this.phase,
      turn: this.turn,
      inputLocked: this.inputLocked,
      winner: this.winner,
      sessionId: this.sessionId,
      fleetSpec: clone(FLEET_SPEC),
      humanAttackCount: this.humanAttackCount,
      aiAttackCount: this.aiAttackCount,
      statusMessage: this.statusMessage,
      lastAction: this.lastAction ? { ...this.lastAction } : null,
      apiStatus: this.apiStatus,
      pendingAIRequests: this.ai.pendingRequestCount,
      frameCount: this.three?.frameCount || 0,
      audio: { muted: Boolean(this.audio?.muted), lastCue: null },
      battleLog: this.battleLog.map((entry) => ({ ...entry })),
    };
  }

  getPlacementState() {
    return {
      selectedShipId: this.selectedShipId,
      orientation: this.orientation,
      draggingShipId: this.draggingShipId,
      placedShipIds: this.playerBoard.ships.filter((s) => s.cells.length === s.length).map((s) => s.id),
      remainingShipIds: this.playerBoard.ships.filter((s) => s.cells.length !== s.length).map((s) => s.id),
      previewCells: this.previewCells.map((p) => ({ ...p })),
      previewValid: this.previewValid,
      invalidReason: this.invalidReason,
      canConfirm: this.playerBoard.allPlaced(),
      lastPlacementResult: this.lastPlacementResult ? clone(this.lastPlacementResult) : null,
    };
  }

  rotatePlacement() {
    if (this.phase !== 'setup') return;
    this.orientation = this.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    this.statusMessage = `方向已切换：${this.orientation === 'horizontal' ? '水平' : '垂直'}`;
    if (this.three.hovered?.owner === 'player') this.onHoverCell(this.three.hovered);
    this.updateUI();
  }

  randomizePlacement() {
    if (this.phase !== 'setup') return;
    this.playerBoard.randomizeFleet();
    this.playerBoard.ships.forEach((ship) => { ship.confirmed = false; });
    this.three.syncFleet(this.playerBoard);
    this.previewCells = [];
    this.previewValid = false;
    this.invalidReason = null;
    this.statusMessage = '已随机部署舰队，可继续调整或确认开战';
    this.updateUI();
  }

  confirmPlacement() {
    if (this.phase !== 'setup' || !this.playerBoard.allPlaced()) {
      this.statusMessage = '请先部署全部 5 艘舰船';
      this.updateUI();
      return;
    }
    this.playerBoard.confirmFleet();
    this.three.syncFleet(this.playerBoard);
    this.three.hidePreview();
    this.phase = 'playing';
    this.turn = 'human';
    this.inputLocked = false;
    this.statusMessage = '开战！点击敌方海域选择攻击坐标';
    this.apiStatus = this.ai.getApiKey() ? 'AI：OpenRouter 在线' : 'AI：本地公平模式';
    this.updateUI();
  }

  onHoverCell(cell) {
    if (this.phase !== 'setup' || cell.owner !== 'player') {
      this.three.hidePreview();
      this.previewCells = [];
      this.previewValid = false;
      this.invalidReason = null;
      this.draggingShipId = null;
      return;
    }
    const ship = this.playerBoard.getShip(this.selectedShipId);
    if (!ship) return;
    this.draggingShipId = this.selectedShipId;
    const result = this.playerBoard.validatePlacement(ship.id, cell.row, cell.col, this.orientation);
    this.previewCells = result.cells;
    this.previewValid = result.valid;
    this.invalidReason = result.reason;
    this.three.showPlacementPreview(ship, cell.row, cell.col, this.orientation, result.valid);
  }

  onCellClick(cell) {
    this.audio.ensure();
    if (this.phase === 'setup') {
      if (cell.owner !== 'player') return;
      const ship = this.playerBoard.getShip(this.selectedShipId);
      if (!ship) return;
      const result = this.playerBoard.placeShip(ship.id, cell.row, cell.col, this.orientation);
      this.lastPlacementResult = {
        shipId: ship.id,
        row: cell.row,
        col: cell.col,
        orientation: this.orientation,
        valid: result.valid,
        reason: result.reason,
        cells: result.cells,
      };
      if (result.valid) {
        this.three.updateShipMesh(this.playerBoard, ship);
        this.statusMessage = `${ship.name} 已部署在 ${coord(cell.row, cell.col)} 起始位置`;
        const remaining = this.playerBoard.ships.find((s) => s.cells.length !== s.length);
        if (remaining) this.selectedShipId = remaining.id;
      } else {
        this.statusMessage = result.reason === 'overlap' ? '该位置与其他舰船重叠' : '舰船会超出棋盘边界';
      }
      this.draggingShipId = null;
      this.updateUI();
      return;
    }

    if (this.phase !== 'playing' || this.turn !== 'human' || this.inputLocked || cell.owner !== 'enemy') return;
    this.humanAttack(cell.row, cell.col);
  }

  humanAttack(row, col) {
    const attack = this.enemyBoard.attack(row, col);
    if (!attack.ok) {
      this.statusMessage = attack.reason === 'already_attacked' ? `${coord(row, col)} 已攻击过，请选择其他坐标` : '无效攻击';
      this.updateUI();
      return;
    }
    this.humanAttackCount += 1;
    this.lastAction = { actor: 'human', row, col, coordinate: attack.coordinate, result: attack.result, shipId: attack.shipId };
    this.three.markAttack(this.enemyBoard, attack);
    this.audio.play(attack.result);
    if (attack.result === 'sunk' && attack.ship) this.three.revealSunkShip(this.enemyBoard, attack.ship);
    this.statusMessage = this.describeAttack('你', attack);
    if (this.enemyBoard.allSunk()) {
      this.endGame('human');
      return;
    }
    this.turn = 'ai';
    this.inputLocked = true;
    this.apiStatus = this.ai.getApiKey() ? 'AI：OpenRouter 思考中…' : 'AI：本地策略计算中…';
    this.updateUI();
    const session = this.sessionId;
    setTimeout(() => this.runAITurn(session), 520);
  }

  async runAITurn(session) {
    if (this.phase !== 'playing' || session !== this.sessionId) return;
    const decision = await this.ai.decide(session);
    if (this.phase !== 'playing' || session !== this.sessionId || !decision) return;
    let attack = this.playerBoard.attack(decision.row, decision.col);
    if (!attack.ok) {
      const fallback = this.ai.chooseFallback();
      if (!fallback) return;
      attack = this.playerBoard.attack(fallback.row, fallback.col);
    }
    if (!attack.ok) return;

    this.ai.observe(attack);
    this.aiAttackCount += 1;
    this.lastAction = { actor: 'ai', row: attack.row, col: attack.col, coordinate: attack.coordinate, result: attack.result, shipId: attack.shipId };
    this.three.markAttack(this.playerBoard, attack);
    this.audio.play(attack.result);
    if (attack.result === 'sunk' && attack.ship) this.three.revealSunkShip(this.playerBoard, attack.ship);
    this.statusMessage = this.describeAttack('AI', attack);
    this.apiStatus = this.ai.lastDecisionSource === 'openrouter' ? 'AI：OpenRouter 已决策' : 'AI：本地公平回退';

    if (this.playerBoard.allSunk()) {
      this.endGame('ai');
      return;
    }
    this.turn = 'human';
    this.inputLocked = false;
    this.updateUI();
  }

  describeAttack(actor, attack) {
    if (attack.result === 'miss') return `${actor}攻击 ${attack.coordinate}：未命中`;
    if (attack.result === 'hit') return `${actor}攻击 ${attack.coordinate}：命中！`;
    return `${actor}攻击 ${attack.coordinate}：击沉${attack.ship ? `「${attack.ship.name}」` : '舰船'}！`;
  }

  endGame(winner) {
    this.phase = 'ended';
    this.turn = null;
    this.inputLocked = true;
    this.winner = winner;
    this.statusMessage = winner === 'human' ? '你赢了！敌方舰队已全部沉没' : 'AI 赢了！你的舰队已全部沉没';
    this.apiStatus = 'AI：战局结束';
    const modal = document.getElementById('gameOverModal');
    modal?.classList.remove('hidden');
    safeText(document.getElementById('gameOverTitle'), winner === 'human' ? '你赢了！' : 'AI 赢了！');
    safeText(document.getElementById('gameOverText'), winner === 'human' ? '敌方五艘舰船全部沉没，海域已清空。' : '你的舰队已失去战斗能力。调整部署，再战一局。');
    safeText(document.getElementById('humanAttackStat'), String(this.humanAttackCount));
    safeText(document.getElementById('aiAttackStat'), String(this.aiAttackCount));
    this.three.effects.victory(winner === 'human' ? this.enemyBoard.origin : this.playerBoard.origin);
    this.updateUI();
  }

  restart() {
    this.sessionId += 1;
    this.phase = 'setup';
    this.turn = null;
    this.inputLocked = false;
    this.winner = null;
    this.humanAttackCount = 0;
    this.aiAttackCount = 0;
    this.statusMessage = '部署你的舰队';
    this.lastAction = null;
    this.battleLog = [];
    this.orientation = 'horizontal';
    this.selectedShipId = 'carrier';
    this.draggingShipId = null;
    this.previewCells = [];
    this.previewValid = false;
    this.invalidReason = null;
    this.lastPlacementResult = null;
    this.playerBoard.reset();
    this.enemyBoard.reset();
    this.ai.reset(this.sessionId);
    this.three.effects.clear();
    this.enemyBoard.randomizeFleet();
    this.enemyBoard.confirmFleet();
    this.three.syncFleet(this.enemyBoard);
    this.playerBoard.ships.forEach((ship) => this.three.updateShipMesh(this.playerBoard, ship));
    this.three.hidePreview();
    document.getElementById('gameOverModal')?.classList.add('hidden');
    this.apiStatus = this.ai.getApiKey() ? 'AI：OpenRouter 已配置' : 'AI：本地公平模式';
    this.updateUI();
  }

  updateUI() {
    safeText(document.querySelector('[data-testid="status-message"]'), this.statusMessage);
    const turnLabel = this.phase === 'setup' ? '部署阶段' : this.phase === 'ended' ? '战局结束' : this.turn === 'human' ? '你的回合' : 'AI 回合';
    safeText(document.querySelector('[data-testid="turn-indicator"]'), turnLabel);
    safeText(document.querySelector('[data-testid="orientation-indicator"]'), this.orientation === 'horizontal' ? '水平' : '垂直');
    safeText(document.querySelector('[data-testid="api-status"]'), this.apiStatus);
    safeText(document.getElementById('playerShipsRemaining'), `${this.playerBoard.shipsRemaining()} 艘存活`);
    safeText(document.getElementById('enemyShipsRemaining'), `${this.enemyBoard.shipsRemaining()} 艘未知`);

    const panel = document.getElementById('placementPanel');
    if (panel) panel.classList.toggle('hidden', this.phase !== 'setup');
    const confirm = document.querySelector('[data-testid="confirm-placement"]');
    if (confirm) confirm.disabled = !this.playerBoard.allPlaced();

    this.shipButtons?.forEach((button) => {
      const ship = this.playerBoard.getShip(button.dataset.shipId);
      button.classList.toggle('selected', this.selectedShipId === ship?.id);
      button.classList.toggle('placed', Boolean(ship?.cells.length === ship?.length));
      const state = button.querySelector('.ship-state');
      safeText(state, ship?.cells.length === ship?.length ? '已部署' : '待部署');
    });
  }

  animate() {
    if (this.destroyed) return;
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastTime) / 1000);
    this.lastTime = now;
    this.three.renderFrame(dt, now / 1000);
    this.frameCount = this.three.frameCount;
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  dispose() {
    this.destroyed = true;
    cancelAnimationFrame(this.animationId);
    document.removeEventListener('keydown', this.keyHandler);
    this.three?.dispose();
  }
}

export function bootBattleship() {
  const startupError = document.getElementById('startupError');
  const startupErrorText = document.getElementById('startupErrorText');
  try {
    if (!window.WebGLRenderingContext) throw new Error('浏览器不支持 WebGL');
    if (!window.THREE) throw new Error('Three.js CDN 未加载');
    const controller = new BattleshipController();
    controller.init();
    window.__battleshipController = controller;
    startupError?.classList.add('hidden');
    return () => controller.dispose();
  } catch (error) {
    console.error('[Battleship] startup failed:', error);
    if (startupErrorText) startupErrorText.textContent = String(error?.message || error);
    startupError?.classList.remove('hidden');
    return () => {};
  }
}
