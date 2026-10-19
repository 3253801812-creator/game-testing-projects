export type Orientation = 'horizontal' | 'vertical';
export type Owner = 'player' | 'enemy';
export type Phase = 'setup' | 'playing' | 'ended';
export type Turn = 'human' | 'ai' | null;
export type AttackResult = 'hit' | 'miss' | 'sunk';

export type CellRef = { row: number; col: number };
export type FleetSpec = { id: string; type: string; name: string; length: number };

export const FLEET_SPEC: FleetSpec[] = [
  { id: 'carrier', type: 'carrier', name: '航母', length: 5 },
  { id: 'battleship', type: 'battleship', name: '战列舰', length: 4 },
  { id: 'cruiser', type: 'cruiser', name: '巡洋舰', length: 3 },
  { id: 'submarine', type: 'submarine', name: '潜艇', length: 3 },
  { id: 'destroyer', type: 'destroyer', name: '驱逐舰', length: 2 },
];

export function coordOf(row: number, col: number) {
  return `${String.fromCharCode(65 + row)}${col + 1}`;
}

export function parseCoord(value: string): CellRef | null {
  const m = value.trim().toUpperCase().match(/\b([A-J])\s*(10|[1-9])\b/);
  if (!m) return null;
  return { row: m[1].charCodeAt(0) - 65, col: Number(m[2]) - 1 };
}
