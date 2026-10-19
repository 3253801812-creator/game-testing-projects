import type { CellCoord, FleetSpec, Orientation } from './contracts';

export class Ship {
  id: string;
  type: string;
  name: string;
  length: number;
  orientation: Orientation | null = null;
  start: CellCoord | null = null;
  cells: CellCoord[] = [];
  hits = new Set<string>();
  sunk = false;
  confirmed = false;
  revealed = false;
  meshObjectId: number | string | null = null;

  constructor(spec: FleetSpec) {
    this.id = spec.id;
    this.type = spec.type;
    this.name = spec.name;
    this.length = spec.length;
  }

  setPlacement(start: CellCoord, orientation: Orientation) {
    this.start = { ...start };
    this.orientation = orientation;
    this.cells = Array.from({ length: this.length }, (_, i) => ({
      row: start.row + (orientation === 'vertical' ? i : 0),
      col: start.col + (orientation === 'horizontal' ? i : 0)
    }));
    this.confirmed = true;
  }

  hit(cell: CellCoord) {
    this.hits.add(`${cell.row},${cell.col}`);
    this.sunk = this.hits.size >= this.length;
    if (this.sunk) this.revealed = true;
    return this.sunk;
  }

  snapshot(meshVisible: boolean, revealAll = true) {
    const visible = revealAll || this.sunk;
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      length: this.length,
      orientation: visible ? this.orientation : null,
      start: visible && this.start ? { ...this.start } : null,
      cells: visible ? this.cells.map(c => ({ ...c })) : [],
      hits: visible ? this.cells.filter(c => this.hits.has(`${c.row},${c.col}`)).map(c => ({ ...c })) : [],
      sunk: this.sunk,
      confirmed: this.confirmed,
      revealed: this.revealed,
      meshVisible,
      meshObjectId: this.meshObjectId
    };
  }
}
