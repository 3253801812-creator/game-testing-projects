export type Variant = 'production';
export type MachineState = 'idle' | 'rolling' | 'settling' | 'resolved';
export type TablePhase = 'come_out' | 'point';
export type BetType =
  | 'pass'
  | 'come'
  | 'place'
  | 'buy'
  | 'progressive_low'
  | 'progressive_high'
  | 'progressive_hitall';

export interface Vec3 { x: number; y: number; z: number }
export interface Quaternion { x: number; y: number; z: number; w: number }

export interface DieState {
  id: 1 | 2;
  value: number | null;
  topFace: number | null;
  position: Vec3;
  rotation: Vec3;
  quaternion: Quaternion;
  linearVelocity: Vec3;
  angularVelocity: Vec3;
  isSettled: boolean;
  stableSamples: number;
}

export interface Bet {
  id: string;
  type: BetType;
  number: number | null;
  amount: number;
  odds: number;
  status: 'active' | 'pending' | 'established';
  createdRollId: number;
}

export interface ProgressiveState {
  key: 'low' | 'high' | 'hitall';
  label: string;
  targets: number[];
  hits: number[];
  activeBetId: string | null;
  completedCount: number;
  payoutMultiplier: number;
}

export interface RollResult {
  rollId: number;
  die1: number;
  die2: number;
  total: number;
  timestamp: number;
}

export interface SettlementEntry {
  betId: string;
  type: BetType;
  number: number | null;
  outcome: 'win' | 'lose' | 'move' | 'keep';
  stake: number;
  odds: number;
  credit: number;
  profit: number;
  reason: string;
}

export interface Settlement {
  rollId: number;
  total: number;
  balanceBefore: number;
  balanceAfter: number;
  entries: SettlementEntry[];
  timestamp: number;
}

export interface EventRecord {
  index: number;
  type: string;
  rollId: number;
  value?: string | number | boolean | null;
  timestamp: number;
}

export interface GameModel {
  ready: boolean;
  variant: Variant;
  machineState: MachineState;
  tablePhase: TablePhase;
  point: number | null;
  balance: number;
  selectedChip: number;
  locked: boolean;
  rollId: number;
  lastRoll: RollResult | null;
  history: RollResult[];
  dice: [DieState, DieState];
  floorPulse: number;
  floorOffset: number;
  domeRadius: number;
  bets: Bet[];
  progressives: Record<'low' | 'high' | 'hitall', ProgressiveState>;
  settlements: Settlement[];
  events: EventRecord[];
}

export interface GameSnapshot {
  ready: boolean;
  variant: Variant;
  machineState: MachineState;
  tablePhase: TablePhase;
  point: number | null;
  balance: number;
  selectedChip: number;
  locked: boolean;
  canRoll: boolean;
  rollId: number;
  lastRoll: RollResult | null;
  history: RollResult[];
  activeBets: Bet[];
  progressive: Record<'low' | 'high' | 'hitall', ProgressiveState>;
  settlementLedger: Settlement[];
  dome: {
    radius: number;
    floorPulse: number;
    floorOffset: number;
  };
}
