export type Orientation = 'horizontal' | 'vertical';
export type Owner = 'player' | 'enemy';
export type Phase = 'setup' | 'playing' | 'ended';
export type Turn = 'human' | 'ai' | null;
export type CellResult = 'hit' | 'miss' | 'sunk' | null;

export interface CellCoord { row: number; col: number }
export interface FleetSpec { id: string; type: string; name: string; length: number }

export const FLEET_SPEC: FleetSpec[] = [
  { id: 'carrier', type: 'carrier', name: '航母', length: 5 },
  { id: 'battleship', type: 'battleship', name: '战列舰', length: 4 },
  { id: 'cruiser', type: 'cruiser', name: '巡洋舰', length: 3 },
  { id: 'submarine', type: 'submarine', name: '潜艇', length: 3 },
  { id: 'destroyer', type: 'destroyer', name: '驱逐舰', length: 2 }
];

export const ROWS = 'ABCDEFGHIJ';
export const toCoordinate = ({ row, col }: CellCoord) => `${ROWS[row]}${col + 1}`;
export const fromCoordinate = (value: string): CellCoord | null => {
  const m = value.trim().toUpperCase().match(/^([A-J])(10|[1-9])$/);
  if (!m) return null;
  return { row: ROWS.indexOf(m[1]), col: Number(m[2]) - 1 };
};
