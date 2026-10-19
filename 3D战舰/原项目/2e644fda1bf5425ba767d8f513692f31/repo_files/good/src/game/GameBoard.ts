import { FLEET_SPEC, toCoordinate, type CellCoord, type CellResult, type Orientation, type Owner } from './contracts';
import { Ship } from './Ship';

interface BoardCell {
  row: number;
  col: number;
  shipId: string | null;
  attacked: boolean;
  result: CellResult;
  markerObjectId: number | string | null;
}

export class GameBoard {
  owner: Owner;
  size = 10;
  origin: { x: number; y: number; z: number };
  cellSize: number;
  ships: Ship[];
  cells: BoardCell[];
  attackHistory: Array<{ row: number; col: number; coordinate: string; result: Exclude<CellResult, null>; shipId: string | null }> = [];

  constructor(owner: Owner, origin: { x: number; y: number; z: number }, cellSize = 1) {
    this.owner = owner;
    this.origin = origin;
    this.cellSize = cellSize;
    this.ships = FLEET_SPEC.map(spec => new Ship(spec));
    this.cells = Array.from({ length: 100 }, (_, i) => ({
      row: Math.floor(i / 10), col: i % 10, shipId: null, attacked: false, result: null, markerObjectId: null
    }));
  }

  cell(row: number, col: number) { return this.cells[row * 10 + col]; }
  ship(id: string) { return this.ships.find(s => s.id === id) || null; }

  validatePlacement(shipId: string, start: CellCoord, orientation: Orientation) {
    const ship = this.ship(shipId);
    if (!ship) return { valid: false, reason: '舰船不存在', cells: [] as CellCoord[] };
    const cells = Array.from({ length: ship.length }, (_, i) => ({
      row: start.row + (orientation === 'vertical' ? i : 0),
      col: start.col + (orientation === 'horizontal' ? i : 0)
    }));
    if (cells.some(c => c.row < 0 || c.row >= 10 || c.col < 0 || c.col >= 10)) {
      return { valid: false, reason: '舰船超出棋盘边界', cells };
    }
    if (cells.some(c => {
      const found = this.cell(c.row, c.col);
      return found.shipId && found.shipId !== shipId;
    })) return { valid: false, reason: '舰船不能重叠', cells };
    return { valid: true, reason: null, cells };
  }

  placeShip(shipId: string, start: CellCoord, orientation: Orientation) {
    const validation = this.validatePlacement(shipId, start, orientation);
    if (!validation.valid) return validation;
    const ship = this.ship(shipId)!;
    this.cells.forEach(c => { if (c.shipId === shipId) c.shipId = null; });
    ship.setPlacement(start, orientation);
    validation.cells.forEach(c => { this.cell(c.row, c.col).shipId = shipId; });
    return validation;
  }

  randomizeFleet() {
    this.cells.forEach(c => { c.shipId = null; c.attacked = false; c.result = null; c.markerObjectId = null; });
    this.attackHistory = [];
    this.ships = FLEET_SPEC.map(spec => new Ship(spec));
    for (const ship of this.ships) {
      let placed = false;
      for (let attempts = 0; attempts < 1000 && !placed; attempts++) {
        const orientation: Orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const start = { row: Math.floor(Math.random() * 10), col: Math.floor(Math.random() * 10) };
        const result = this.placeShip(ship.id, start, orientation);
        placed = result.valid;
      }
      if (!placed) throw new Error('无法生成有效舰队布局');
    }
  }

  attack(row: number, col: number) {
    if (row < 0 || row >= 10 || col < 0 || col >= 10) throw new Error('坐标越界');
    const cell = this.cell(row, col);
    if (cell.attacked) return { duplicate: true as const, row, col, coordinate: toCoordinate({ row, col }), result: cell.result!, shipId: cell.shipId };
    cell.attacked = true;
    let result: Exclude<CellResult, null> = 'miss';
    let shipId: string | null = null;
    if (cell.shipId) {
      shipId = cell.shipId;
      const ship = this.ship(cell.shipId)!;
      result = ship.hit({ row, col }) ? 'sunk' : 'hit';
      if (result === 'sunk') {
        for (const sc of ship.cells) {
          const sunkCell = this.cell(sc.row, sc.col);
          if (sunkCell.attacked) sunkCell.result = 'sunk';
        }
      }
    }
    cell.result = result;
    const action = { row, col, coordinate: toCoordinate({ row, col }), result, shipId };
    this.attackHistory.push(action);
    return { duplicate: false as const, ...action };
  }

  setMarker(row: number, col: number, objectId: number | string | null) {
    this.cell(row, col).markerObjectId = objectId;
  }

  allSunk() { return this.ships.every(s => s.sunk); }
  shipsRemaining() { return this.ships.filter(s => !s.sunk).length; }

  getState() {
    const fog = this.owner === 'enemy';
    const sunkIds = new Set(this.ships.filter(s => s.sunk).map(s => s.id));
    return {
      owner: this.owner,
      size: this.size,
      origin: { ...this.origin },
      cellSize: this.cellSize,
      ships: this.ships.map(s => s.snapshot(this.owner === 'player' || s.sunk, !fog)),
      cells: this.cells.map(c => ({
        row: c.row,
        col: c.col,
        shipId: fog ? (c.shipId && sunkIds.has(c.shipId) ? c.shipId : null) : c.shipId,
        attacked: c.attacked,
        result: c.attacked ? c.result : null,
        markerObjectId: c.markerObjectId
      })),
      attackHistory: this.attackHistory.map(a => ({
        ...a,
        shipId: fog && a.shipId && !sunkIds.has(a.shipId) ? null : a.shipId
      })),
      shipsRemaining: this.shipsRemaining(),
      totalHits: this.cells.filter(c => c.attacked && (c.result === 'hit' || c.result === 'sunk')).length,
      occupiedCellCount: this.cells.filter(c => c.shipId).length
    };
  }
}
