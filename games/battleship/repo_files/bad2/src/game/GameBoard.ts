import { AttackResult, CellRef, FLEET_SPEC, Orientation, Owner, coordOf } from './contracts';

type ShipInternal = {
  id: string;
  type: string;
  name: string;
  length: number;
  orientation: Orientation | null;
  start: CellRef | null;
  cells: CellRef[];
  hits: CellRef[];
  sunk: boolean;
  confirmed: boolean;
  revealed: boolean;
  meshVisible: boolean;
  meshObjectId: number | string | null;
};

type CellInternal = {
  row: number;
  col: number;
  shipId: string | null;
  attacked: boolean;
  result: AttackResult | null;
  markerObjectId: number | string | null;
};

export class GameBoard {
  owner: Owner;
  size = 10;
  origin: { x: number; y: number; z: number };
  cellSize = 1;
  ships: ShipInternal[];
  cells: CellInternal[];
  attackHistory: Array<{ row: number; col: number; coordinate: string; result: AttackResult; shipId: string | null }> = [];

  constructor(owner: Owner, origin: { x: number; y: number; z: number }) {
    this.owner = owner;
    this.origin = origin;
    this.ships = FLEET_SPEC.map((s) => ({ ...s, orientation: null, start: null, cells: [], hits: [], sunk: false, confirmed: false, revealed: owner === 'player', meshVisible: false, meshObjectId: null }));
    this.cells = Array.from({ length: 100 }, (_, i) => ({ row: Math.floor(i / 10), col: i % 10, shipId: null, attacked: false, result: null, markerObjectId: null }));
  }

  cell(row: number, col: number) {
    return this.cells[row * 10 + col];
  }

  ship(id: string) {
    return this.ships.find((s) => s.id === id)!;
  }

  canPlace(shipId: string, row: number, col: number, orientation: Orientation) {
    const ship = this.ship(shipId);
    const cells: CellRef[] = [];
    for (let i = 0; i < ship.length; i++) {
      const r = row + (orientation === 'vertical' ? i : 0);
      const c = col + (orientation === 'horizontal' ? i : 0);
      if (r < 0 || r >= 10 || c < 0 || c >= 10) return { ok: false, reason: '舰船超出棋盘边界', cells: [] as CellRef[] };
      const target = this.cell(r, c);
      if (target.shipId && target.shipId !== shipId) return { ok: false, reason: '该区域与其他舰船重叠', cells: [] as CellRef[] };
      cells.push({ row: r, col: c });
    }
    return { ok: true, reason: null as string | null, cells };
  }

  placeShip(shipId: string, row: number, col: number, orientation: Orientation) {
    const result = this.canPlace(shipId, row, col, orientation);
    if (!result.ok) return result;
    const ship = this.ship(shipId);
    for (const c of ship.cells) {
      const old = this.cell(c.row, c.col);
      if (old.shipId === shipId) old.shipId = null;
    }
    ship.start = { row, col };
    ship.orientation = orientation;
    ship.cells = result.cells;
    ship.confirmed = true;
    ship.revealed = this.owner === 'player';
    for (const c of result.cells) this.cell(c.row, c.col).shipId = shipId;
    return result;
  }

  randomize() {
    this.resetPlacements();
    for (const spec of FLEET_SPEC) {
      let placed = false;
      for (let attempts = 0; attempts < 1000 && !placed; attempts++) {
        const orientation: Orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        if (this.placeShip(spec.id, row, col, orientation).ok) placed = true;
      }
      if (!placed) throw new Error(`无法放置舰船 ${spec.id}`);
    }
  }

  resetPlacements() {
    for (const c of this.cells) {
      c.shipId = null;
      c.attacked = false;
      c.result = null;
      c.markerObjectId = null;
    }
    for (const s of this.ships) {
      s.orientation = null; s.start = null; s.cells = []; s.hits = []; s.sunk = false; s.confirmed = false; s.revealed = this.owner === 'player'; s.meshVisible = false; s.meshObjectId = null;
    }
    this.attackHistory = [];
  }

  attack(row: number, col: number) {
    const cell = this.cell(row, col);
    if (cell.attacked) return { valid: false, result: cell.result, shipId: cell.shipId, sunkShip: null as ShipInternal | null };
    cell.attacked = true;
    let result: AttackResult = 'miss';
    let sunkShip: ShipInternal | null = null;
    if (cell.shipId) {
      const ship = this.ship(cell.shipId);
      ship.hits.push({ row, col });
      result = 'hit';
      if (ship.hits.length >= ship.length) {
        ship.sunk = true;
        ship.revealed = true;
        result = 'sunk';
        sunkShip = ship;
      }
    }
    cell.result = result;
    this.attackHistory.push({ row, col, coordinate: coordOf(row, col), result, shipId: cell.shipId });
    return { valid: true, result, shipId: cell.shipId, sunkShip };
  }

  allSunk() {
    return this.ships.every((s) => s.sunk);
  }

  getState() {
    const fog = this.owner === 'enemy';
    return {
      owner: this.owner,
      size: this.size,
      origin: { ...this.origin },
      cellSize: this.cellSize,
      ships: this.ships.map((s) => {
        const publicShip = !fog || s.sunk;
        return {
          id: s.id,
          type: s.type,
          name: s.name,
          length: s.length,
          orientation: publicShip ? s.orientation : null,
          start: publicShip && s.start ? { ...s.start } : null,
          cells: publicShip ? s.cells.map((c) => ({ ...c })) : [],
          hits: publicShip ? s.hits.map((c) => ({ ...c })) : [],
          sunk: s.sunk,
          confirmed: publicShip ? s.confirmed : false,
          revealed: fog && !s.sunk ? true : publicShip,
          meshVisible: publicShip ? s.meshVisible : false,
          meshObjectId: publicShip ? s.meshObjectId : null,
        };
      }),
      cells: this.cells.map((c) => {
        const ship = c.shipId ? this.ship(c.shipId) : null;
        const publicShipId = !fog || ship?.sunk ? c.shipId : null;
        return { row: c.row, col: c.col, shipId: publicShipId, attacked: c.attacked, result: c.attacked ? c.result : null, markerObjectId: c.markerObjectId };
      }),
      attackHistory: this.attackHistory.map((a) => {
        const ship = a.shipId ? this.ship(a.shipId) : null;
        return { ...a, shipId: !fog || ship?.sunk ? a.shipId : null };
      }),
      shipsRemaining: this.ships.filter((s) => !s.sunk).length,
      totalHits: this.ships.reduce((n, s) => n + s.hits.length, 0),
      occupiedCellCount: this.cells.filter((c) => c.shipId).length,
    };
  }
}
