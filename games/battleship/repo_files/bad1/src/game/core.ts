export type Orientation = 'horizontal' | 'vertical';
export type Phase = 'setup' | 'playing' | 'ended';
export type Turn = 'human' | 'ai' | null;
export type AttackResult = 'hit' | 'miss' | 'sunk';

export const BOARD_SIZE = 10;
export const ROWS = 'ABCDEFGHIJ';
export const FLEET_SPEC = [
  { id: 'carrier', type: 'carrier', name: '航空母舰', length: 5 },
  { id: 'battleship', type: 'battleship', name: '战列舰', length: 4 },
  { id: 'cruiser', type: 'cruiser', name: '巡洋舰', length: 3 },
  { id: 'submarine', type: 'submarine', name: '潜艇', length: 3 },
  { id: 'destroyer', type: 'destroyer', name: '驱逐舰', length: 2 },
] as const;

export const OPENROUTER_MODEL = 'openrouter/horizon-beta';
export const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
// Replace this placeholder for direct browser API calls. Browser-exposed keys are not secure for production use.
export const OPENROUTER_API_KEY: string = 'your-openrouter-api-key-here';

export type Cell = {
  row: number;
  col: number;
  shipId: string | null;
  attacked: boolean;
  result: AttackResult | null;
  markerObjectId: number | string | null;
};

export type ShipState = {
  id: string;
  type: string;
  name: string;
  length: number;
  orientation: Orientation | null;
  start: { row: number; col: number } | null;
  cells: { row: number; col: number }[];
  hits: { row: number; col: number }[];
  sunk: boolean;
  confirmed: boolean;
  revealed: boolean;
  meshVisible: boolean;
  meshObjectId: number | string | null;
};

export class Ship {
  id: string;
  type: string;
  name: string;
  length: number;
  orientation: Orientation | null = null;
  start: { row: number; col: number } | null = null;
  cells: { row: number; col: number }[] = [];
  hits = new Set<string>();
  confirmed = false;
  revealed = false;
  mesh: any = null;

  constructor(spec: { id: string; type: string; name: string; length: number }) {
    this.id = spec.id;
    this.type = spec.type;
    this.name = spec.name;
    this.length = spec.length;
  }

  place(row: number, col: number, orientation: Orientation, cells: { row: number; col: number }[]) {
    this.start = { row, col };
    this.orientation = orientation;
    this.cells = cells.map((c) => ({ ...c }));
    this.confirmed = true;
  }

  clearPlacement() {
    this.orientation = null;
    this.start = null;
    this.cells = [];
    this.hits.clear();
    this.confirmed = false;
    this.revealed = false;
    this.mesh = null;
  }

  registerHit(row: number, col: number) {
    this.hits.add(`${row},${col}`);
  }

  get sunk() {
    return this.confirmed && this.cells.length > 0 && this.hits.size >= this.length;
  }
}

export class GameBoard {
  owner: 'player' | 'enemy';
  size = BOARD_SIZE;
  origin: { x: number; y: number; z: number };
  cellSize: number;
  ships: Ship[];
  cells: Cell[][];
  attackHistory: { row: number; col: number; coordinate: string; result: AttackResult; shipId: string | null }[] = [];
  group: any = null;

  constructor(owner: 'player' | 'enemy', origin: { x: number; y: number; z: number }, cellSize = 0.82) {
    this.owner = owner;
    this.origin = origin;
    this.cellSize = cellSize;
    this.ships = FLEET_SPEC.map((s) => new Ship({ ...s }));
    this.cells = this.makeCells();
  }

  private makeCells() {
    return Array.from({ length: this.size }, (_, row) =>
      Array.from({ length: this.size }, (_, col) => ({
        row,
        col,
        shipId: null,
        attacked: false,
        result: null,
        markerObjectId: null,
      } as Cell)),
    );
  }

  reset() {
    this.cells = this.makeCells();
    this.attackHistory = [];
    this.ships.forEach((s) => s.clearPlacement());
  }

  getShip(id: string) {
    return this.ships.find((s) => s.id === id) ?? null;
  }

  computeCells(row: number, col: number, length: number, orientation: Orientation) {
    const out: { row: number; col: number }[] = [];
    for (let i = 0; i < length; i += 1) {
      const r = row + (orientation === 'vertical' ? i : 0);
      const c = col + (orientation === 'horizontal' ? i : 0);
      out.push({ row: r, col: c });
    }
    return out;
  }

  validatePlacement(shipId: string, row: number, col: number, orientation: Orientation) {
    const ship = this.getShip(shipId);
    if (!ship) return { valid: false, reason: '未知舰船', cells: [] as { row: number; col: number }[] };
    const cells = this.computeCells(row, col, ship.length, orientation);
    if (cells.some((c) => c.row < 0 || c.row >= this.size || c.col < 0 || c.col >= this.size)) {
      return { valid: false, reason: '超出棋盘边界', cells };
    }
    for (const pos of cells) {
      const occupied = this.cells[pos.row][pos.col].shipId;
      if (occupied && occupied !== shipId) return { valid: false, reason: '与其他舰船重叠', cells };
    }
    return { valid: true, reason: null, cells };
  }

  removeShip(shipId: string) {
    const ship = this.getShip(shipId);
    if (!ship) return;
    for (const c of ship.cells) {
      const cell = this.cells[c.row]?.[c.col];
      if (cell?.shipId === shipId) cell.shipId = null;
    }
    ship.orientation = null;
    ship.start = null;
    ship.cells = [];
    ship.confirmed = false;
  }

  placeShip(shipId: string, row: number, col: number, orientation: Orientation) {
    const validation = this.validatePlacement(shipId, row, col, orientation);
    if (!validation.valid) return validation;
    const ship = this.getShip(shipId)!;
    this.removeShip(shipId);
    for (const pos of validation.cells) this.cells[pos.row][pos.col].shipId = shipId;
    ship.place(row, col, orientation, validation.cells);
    return validation;
  }

  randomizeFleet() {
    this.reset();
    for (const ship of this.ships) {
      let placed = false;
      for (let tries = 0; tries < 1000 && !placed; tries += 1) {
        const orientation: Orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        const row = Math.floor(Math.random() * this.size);
        const col = Math.floor(Math.random() * this.size);
        const result = this.placeShip(ship.id, row, col, orientation);
        placed = result.valid;
      }
      if (!placed) throw new Error(`无法放置舰船: ${ship.id}`);
    }
  }

  attack(row: number, col: number) {
    if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
      return { ok: false as const, reason: '坐标越界' };
    }
    const cell = this.cells[row][col];
    if (cell.attacked) return { ok: false as const, reason: '该坐标已攻击' };
    cell.attacked = true;
    const ship = cell.shipId ? this.getShip(cell.shipId) : null;
    let result: AttackResult = 'miss';
    if (ship) {
      ship.registerHit(row, col);
      result = ship.sunk ? 'sunk' : 'hit';
      if (ship.sunk) ship.revealed = true;
    }
    cell.result = result;
    const coordinate = toCoordinate(row, col);
    this.attackHistory.push({ row, col, coordinate, result, shipId: ship?.id ?? null });
    return { ok: true as const, row, col, coordinate, result, shipId: ship?.id ?? null, ship };
  }

  setMarkerObjectId(row: number, col: number, objectId: number | string | null) {
    this.cells[row][col].markerObjectId = objectId;
  }

  allSunk() {
    return this.ships.every((s) => s.sunk);
  }

  get shipsRemaining() {
    return this.ships.filter((s) => !s.sunk).length;
  }

  get totalHits() {
    return this.cells.flat().filter((c) => c.attacked && c.shipId).length;
  }

  get occupiedCellCount() {
    return this.cells.flat().filter((c) => c.shipId).length;
  }

  getState() {
    const fog = this.owner === 'enemy';
    const ships = this.ships.map((ship, index) => {
      const reveal = !fog || ship.sunk;
      const state: ShipState | any = {
        id: reveal ? ship.id : `enemy-unknown-${index}`,
        type: reveal ? ship.type : 'unknown',
        name: reveal ? ship.name : '未知舰',
        length: reveal ? ship.length : null,
        orientation: reveal ? ship.orientation : null,
        start: reveal && ship.start ? { ...ship.start } : null,
        cells: reveal ? ship.cells.map((c) => ({ ...c })) : [],
        hits: reveal ? [...ship.hits].map(parseCellKey) : [],
        sunk: ship.sunk,
        confirmed: reveal ? ship.confirmed : false,
        revealed: reveal,
        meshVisible: Boolean(ship.mesh?.visible),
        meshObjectId: reveal && ship.mesh ? ship.mesh.id : null,
      };
      return state;
    });

    const sunkIds = new Set(this.ships.filter((s) => s.sunk).map((s) => s.id));
    const cells = this.cells.flat().map((cell) => ({
      row: cell.row,
      col: cell.col,
      shipId: !fog ? cell.shipId : cell.shipId && sunkIds.has(cell.shipId) ? cell.shipId : null,
      attacked: cell.attacked,
      result: cell.attacked ? cell.result : null,
      markerObjectId: cell.attacked ? cell.markerObjectId : null,
    }));

    const attackHistory = this.attackHistory.map((h) => ({
      ...h,
      shipId: !fog || h.result === 'sunk' ? h.shipId : null,
    }));

    return {
      owner: this.owner,
      size: this.size,
      origin: { ...this.origin },
      cellSize: this.cellSize,
      ships,
      cells,
      attackHistory,
      shipsRemaining: this.shipsRemaining,
      totalHits: this.totalHits,
      occupiedCellCount: fog ? (this.ships.filter((s) => s.sunk).reduce((n, s) => n + s.length, 0)) : this.occupiedCellCount,
    };
  }
}

export function toCoordinate(row: number, col: number) {
  return `${ROWS[row]}${col + 1}`;
}

export function fromCoordinate(input: string) {
  const match = input.toUpperCase().match(/\b([A-J])\s*(10|[1-9])\b/);
  if (!match) return null;
  return { row: ROWS.indexOf(match[1]), col: Number(match[2]) - 1, coordinate: `${match[1]}${match[2]}` };
}

function parseCellKey(key: string) {
  const [row, col] = key.split(',').map(Number);
  return { row, col };
}

export class AIPlayer {
  mode: 'hunt' | 'target' | 'kill' = 'hunt';
  knownHits: string[] = [];
  knownMisses: string[] = [];
  sunkShips: string[] = [];
  targetQueue: string[] = [];
  attackHistory: string[] = [];
  knowledgeBoard: string[][] = Array.from({ length: 10 }, () => Array(10).fill('unknown'));
  lastPrompt = '';
  lastRawResponse: string | null = null;
  lastChosenCoordinate: string | null = null;
  lastDecisionSource: string | null = null;
  lastError: string | null = null;
  fallbackCount = 0;
  apiConfigured = OPENROUTER_API_KEY !== 'your-openrouter-api-key-here' && OPENROUTER_API_KEY.trim().length > 10;
  requestTimeoutMs = 8000;
  pendingRequestCount = 0;
  activeSessionId: string | number = 0;
  runtimeApiKey = OPENROUTER_API_KEY;

  reset(sessionId: string | number) {
    this.mode = 'hunt';
    this.knownHits = [];
    this.knownMisses = [];
    this.sunkShips = [];
    this.targetQueue = [];
    this.attackHistory = [];
    this.knowledgeBoard = Array.from({ length: 10 }, () => Array(10).fill('unknown'));
    this.lastPrompt = '';
    this.lastRawResponse = null;
    this.lastChosenCoordinate = null;
    this.lastDecisionSource = null;
    this.lastError = null;
    this.pendingRequestCount = 0;
    this.activeSessionId = sessionId;
  }

  setApiKey(key: string) {
    this.runtimeApiKey = key.trim();
    this.apiConfigured = this.runtimeApiKey.length > 10 && this.runtimeApiKey !== 'your-openrouter-api-key-here';
  }

  observeAttack(coordinate: string, result: AttackResult, sunkShipName?: string | null) {
    if (!this.attackHistory.includes(coordinate)) this.attackHistory.push(coordinate);
    const parsed = fromCoordinate(coordinate);
    if (parsed) this.knowledgeBoard[parsed.row][parsed.col] = result;
    if (result === 'miss') {
      if (!this.knownMisses.includes(coordinate)) this.knownMisses.push(coordinate);
    } else {
      if (!this.knownHits.includes(coordinate)) this.knownHits.push(coordinate);
      this.enqueueNeighbors(coordinate);
    }
    if (result === 'sunk' && sunkShipName) {
      if (!this.sunkShips.includes(sunkShipName)) this.sunkShips.push(sunkShipName);
      this.targetQueue = this.targetQueue.filter((c) => !this.attackHistory.includes(c));
    }
    this.mode = this.targetQueue.length ? (this.knownHits.length >= 2 ? 'kill' : 'target') : 'hunt';
  }

  private enqueueNeighbors(coordinate: string) {
    const parsed = fromCoordinate(coordinate);
    if (!parsed) return;
    const candidates = [
      [parsed.row - 1, parsed.col],
      [parsed.row + 1, parsed.col],
      [parsed.row, parsed.col - 1],
      [parsed.row, parsed.col + 1],
    ];
    for (const [row, col] of candidates) {
      if (row < 0 || row >= 10 || col < 0 || col >= 10) continue;
      const coord = toCoordinate(row, col);
      if (!this.attackHistory.includes(coord) && !this.targetQueue.includes(coord)) this.targetQueue.push(coord);
    }
  }

  private buildPrompt() {
    return [
      '你是公平的战舰AI。棋盘10x10，行A-J，列1-10。只依据真实攻击历史，绝不猜测或读取隐藏舰位。',
      `模式: ${this.mode}`,
      `已命中: ${this.knownHits.join(', ') || '无'}`,
      `已未命中: ${this.knownMisses.join(', ') || '无'}`,
      `已击沉: ${this.sunkShips.join(', ') || '无'}`,
      `已攻击: ${this.attackHistory.join(', ') || '无'}`,
      '请选择一个尚未攻击的坐标。命中后优先攻击相邻格；狩猎阶段优先使用棋盘奇偶搜索。',
      '只需在简短理由中明确给出一个坐标，例如 A5。',
    ].join('\n');
  }

  private chooseFallback() {
    this.targetQueue = this.targetQueue.filter((c) => !this.attackHistory.includes(c));
    if (this.targetQueue.length) {
      this.mode = this.knownHits.length >= 2 ? 'kill' : 'target';
      return this.targetQueue.shift()!;
    }
    this.mode = 'hunt';
    const parity: string[] = [];
    const rest: string[] = [];
    for (let r = 0; r < 10; r += 1) {
      for (let c = 0; c < 10; c += 1) {
        const coord = toCoordinate(r, c);
        if (this.attackHistory.includes(coord)) continue;
        ((r + c) % 2 === 0 ? parity : rest).push(coord);
      }
    }
    const pool = parity.length ? parity : rest;
    return pool[Math.floor(Math.random() * pool.length)] || null;
  }

  async decideMove(sessionId: string | number) {
    this.activeSessionId = sessionId;
    this.lastPrompt = this.buildPrompt();
    this.lastError = null;
    if (this.apiConfigured) {
      this.pendingRequestCount += 1;
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), this.requestTimeoutMs);
      try {
        const response = await fetch(OPENROUTER_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.runtimeApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: OPENROUTER_MODEL,
            messages: [{ role: 'user', content: this.lastPrompt }],
            temperature: 0.2,
            max_tokens: 120,
          }),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`OpenRouter HTTP ${response.status}`);
        const data = await response.json();
        const text = String(data?.choices?.[0]?.message?.content ?? '');
        this.lastRawResponse = text;
        const parsed = fromCoordinate(text);
        if (parsed && !this.attackHistory.includes(parsed.coordinate)) {
          this.lastChosenCoordinate = parsed.coordinate;
          this.lastDecisionSource = 'openrouter';
          return parsed.coordinate;
        }
        throw new Error('OpenRouter 返回的坐标无效或已使用');
      } catch (error: any) {
        this.lastError = error?.name === 'AbortError' ? 'OpenRouter 请求超时' : String(error?.message ?? error);
        console.warn('[AI] OpenRouter failed, using fair local fallback:', this.lastError);
      } finally {
        window.clearTimeout(timer);
        this.pendingRequestCount = Math.max(0, this.pendingRequestCount - 1);
      }
    }

    this.fallbackCount += 1;
    const coord = this.chooseFallback();
    this.lastChosenCoordinate = coord;
    this.lastDecisionSource = 'local-fallback';
    return coord;
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
