import type {
  Bet,
  BetType,
  DieState,
  EventRecord,
  GameModel,
  GameSnapshot,
  ProgressiveState,
  Quaternion,
  RollResult,
  Settlement,
  SettlementEntry,
  Variant,
  Vec3,
} from './types';

const POINT_NUMBERS = [4, 5, 6, 8, 9, 10];
const LOW_TARGETS = [2, 3, 4, 5, 6];
const HIGH_TARGETS = [8, 9, 10, 11, 12];
const ALL_TARGETS = [2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
const BASE_BALANCE = 1000;

const FINAL_ROTATIONS: Record<number, Vec3> = {
  1: { x: -90, y: 0, z: 0 },
  2: { x: 0, y: 0, z: 0 },
  3: { x: 0, y: 0, z: 90 },
  4: { x: 0, y: 0, z: -90 },
  5: { x: 180, y: 0, z: 0 },
  6: { x: 90, y: 0, z: 0 },
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function degToRad(value: number): number {
  return (value * Math.PI) / 180;
}

export function quaternionFromEuler(rotation: Vec3): Quaternion {
  const x = degToRad(rotation.x) / 2;
  const y = degToRad(rotation.y) / 2;
  const z = degToRad(rotation.z) / 2;
  const cx = Math.cos(x), sx = Math.sin(x);
  const cy = Math.cos(y), sy = Math.sin(y);
  const cz = Math.cos(z), sz = Math.sin(z);
  return {
    w: cx * cy * cz + sx * sy * sz,
    x: sx * cy * cz - cx * sy * sz,
    y: cx * sy * cz + sx * cy * sz,
    z: cx * cy * sz - sx * sy * cz,
  };
}

function createDie(id: 1 | 2, x: number): DieState {
  const rotation = { x: 0, y: 0, z: 0 };
  return {
    id,
    value: 2,
    topFace: 2,
    position: { x, y: 0, z: 0 },
    rotation,
    quaternion: quaternionFromEuler(rotation),
    linearVelocity: { x: 0, y: 0, z: 0 },
    angularVelocity: { x: 0, y: 0, z: 0 },
    isSettled: true,
    stableSamples: 10,
  };
}

function createProgressive(key: 'low' | 'high' | 'hitall'): ProgressiveState {
  if (key === 'low') {
    return { key, label: 'LOW', targets: LOW_TARGETS, hits: [], activeBetId: null, completedCount: 0, payoutMultiplier: 35 };
  }
  if (key === 'high') {
    return { key, label: 'HIGH', targets: HIGH_TARGETS, hits: [], activeBetId: null, completedCount: 0, payoutMultiplier: 35 };
  }
  return { key, label: 'HIT ALL', targets: ALL_TARGETS, hits: [], activeBetId: null, completedCount: 0, payoutMultiplier: 176 };
}

function newModel(variant: Variant, balance = BASE_BALANCE): GameModel {
  return {
    ready: true,
    variant,
    machineState: 'idle',
    tablePhase: 'come_out',
    point: null,
    balance,
    selectedChip: 5,
    locked: false,
    rollId: 0,
    lastRoll: null,
    history: [],
    dice: [createDie(1, -0.23), createDie(2, 0.23)],
    floorPulse: 0,
    floorOffset: 0,
    domeRadius: 0.78,
    bets: [],
    progressives: {
      low: createProgressive('low'),
      high: createProgressive('high'),
      hitall: createProgressive('hitall'),
    },
    settlements: [],
    events: [],
  };
}

function randomDie(): number {
  const values = new Uint32Array(1);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(values);
    return (values[0] % 6) + 1;
  }
  return Math.floor(Math.random() * 6) + 1;
}

function trueOddsProfit(number: number, amount: number): number {
  if (number === 4 || number === 10) return Math.floor(amount * 2);
  if (number === 5 || number === 9) return Math.floor((amount * 3) / 2);
  return Math.floor((amount * 6) / 5);
}

function placeProfit(number: number, amount: number): number {
  if (number === 4 || number === 10) return Math.floor((amount * 9) / 5);
  if (number === 5 || number === 9) return Math.floor((amount * 7) / 5);
  return Math.floor((amount * 7) / 6);
}

function buyProfit(number: number, amount: number): number {
  const gross = trueOddsProfit(number, amount);
  const vig = Math.ceil(amount * 0.05);
  return Math.max(0, gross - vig);
}

export class CrapsEngine {
  private model: GameModel;
  private listeners = new Set<() => void>();
  private forcedRolls: Array<[number, number]> = [];
  private rafId = 0;
  private session = 0;
  private eventIndex = 0;
  private betIndex = 0;
  private lastFrame = 0;
  private currentTargets: [number, number] | null = null;

  constructor(private readonly variant: Variant) {
    this.model = newModel(variant);
    this.log('ready', true);
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    for (const listener of this.listeners) listener();
  }

  private log(type: string, value?: string | number | boolean | null): void {
    const event: EventRecord = {
      index: ++this.eventIndex,
      type,
      rollId: this.model.rollId,
      value,
      timestamp: performance.now(),
    };
    this.model.events.push(event);
    if (this.model.events.length > 300) this.model.events.shift();
  }

  getModel(): GameModel {
    return this.model;
  }

  getGameState = (): GameSnapshot => {
    const snapshot = clone({
      ready: this.model.ready,
      variant: this.model.variant,
      machineState: this.model.machineState,
      tablePhase: this.model.tablePhase,
      point: this.model.point,
      balance: this.model.balance,
      selectedChip: this.model.selectedChip,
      locked: this.model.locked,
      canRoll: !this.model.locked,
      rollId: this.model.rollId,
      lastRoll: this.model.lastRoll,
      history: this.model.history,
      activeBets: this.model.bets,
      progressive: this.model.progressives,
      settlementLedger: this.model.settlements,
      dome: {
        radius: this.model.domeRadius,
        floorPulse: this.model.floorPulse,
        floorOffset: this.model.floorOffset,
      },
    });

    return snapshot;
  };

  getDiceState = () => {
    const snapshot = clone({
      rolling: this.model.machineState === 'rolling' || this.model.machineState === 'settling',
      machineState: this.model.machineState,
      floorPulse: this.model.floorPulse,
      floorOffset: this.model.floorOffset,
      domeRadius: this.model.domeRadius,
      dice: this.model.dice,
    });

    return snapshot;
  };

  getBetsState = () => clone({
    selectedChip: this.model.selectedChip,
    balance: this.model.balance,
    locked: this.model.locked,
    bets: this.model.bets,
    maxOddsMultiplier: 3,
  });

  getProgressiveState = () => clone(this.model.progressives);

  selectChip(amount: number): boolean {
    if (![1, 5, 10, 25, 100].includes(amount) || !this.canBet()) return false;
    this.model.selectedChip = amount;
    this.log('chip_selected', amount);
    this.notify();
    return true;
  }

  private canBet(): boolean {
    return !this.model.locked && this.model.machineState !== 'rolling' && this.model.machineState !== 'settling';
  }

  placeBet(type: BetType, number: number | null = null, amount = this.model.selectedChip): string | null {
    if (!this.canBet() || !Number.isInteger(amount) || amount <= 0 || amount > this.model.balance) return null;
    if ((type === 'place' || type === 'buy') && (number === null || !POINT_NUMBERS.includes(number))) return null;
    if (type === 'pass' && this.model.tablePhase !== 'come_out') return null;
    if (type === 'come' && this.model.tablePhase !== 'point') return null;

    const progressiveKey = type === 'progressive_low' ? 'low' : type === 'progressive_high' ? 'high' : type === 'progressive_hitall' ? 'hitall' : null;
    let existing: Bet | undefined;
    if (type === 'come') {
      existing = this.model.bets.find((bet) => bet.type === 'come' && bet.status === 'pending');
    } else {
      existing = this.model.bets.find((bet) => bet.type === type && bet.number === number);
    }

    if (progressiveKey && this.model.progressives[progressiveKey].hits.length > 0 && !existing) return null;

    if (existing) {
      existing.amount += amount;
    } else {
      existing = {
        id: `b${++this.betIndex}`,
        type,
        number,
        amount,
        odds: 0,
        status: type === 'come' ? 'pending' : 'active',
        createdRollId: this.model.rollId,
      };
      this.model.bets.push(existing);
    }

    if (progressiveKey) this.model.progressives[progressiveKey].activeBetId = existing.id;
    this.model.balance -= amount;
    this.log('bet_placed', `${type}:${number ?? ''}:${amount}`);
    this.notify();
    return existing.id;
  }

  addOdds(betId: string, amount = this.model.selectedChip): boolean {
    if (!this.canBet() || !Number.isInteger(amount) || amount <= 0 || amount > this.model.balance) return false;
    const bet = this.model.bets.find((item) => item.id === betId);
    if (!bet) return false;
    const eligible = (bet.type === 'pass' && this.model.point !== null) || (bet.type === 'come' && bet.status === 'established' && bet.number !== null);
    if (!eligible) return false;
    const maxMultiplier = 3;
    if (bet.odds + amount > bet.amount * maxMultiplier) return false;
    bet.odds += amount;
    this.model.balance -= amount;
    this.log('odds_added', `${bet.id}:${amount}`);
    this.notify();
    return true;
  }


  clearBets(): boolean {
    if (!this.canBet()) return false;
    const refund = this.model.bets.reduce((sum, bet) => sum + bet.amount + bet.odds, 0);
    this.model.balance += refund;
    this.model.bets = [];
    for (const key of ['low', 'high', 'hitall'] as const) {
      this.model.progressives[key].hits = [];
      this.model.progressives[key].activeBetId = null;
    }
    this.log('bets_cleared', refund);
    this.notify();
    return true;
  }

  forceRoll(die1: number, die2: number): boolean {
    if (![die1, die2].every((value) => Number.isInteger(value) && value >= 1 && value <= 6)) return false;
    this.forcedRolls.push([die1, die2]);
    this.log('roll_queued', `${die1},${die2}`);
    return true;
  }

  setNextRolls(sequence: Array<[number, number]>): boolean {
    if (!Array.isArray(sequence) || sequence.some((pair) => pair.length !== 2 || pair.some((value) => !Number.isInteger(value) || value < 1 || value > 6))) return false;
    this.forcedRolls = sequence.map((pair) => [pair[0], pair[1]]);
    this.log('roll_sequence_queued', sequence.length);
    return true;
  }

  private setMachineState(state: GameModel['machineState']): void {
    this.model.machineState = state;
    this.log('machine_state', state);
  }

  roll(): boolean {
    if (this.model.locked || this.model.machineState === 'rolling' || this.model.machineState === 'settling') return false;
    const targets = this.forcedRolls.shift() ?? [randomDie(), randomDie()];
    this.currentTargets = [targets[0], targets[1]];
    this.model.rollId += 1;
    this.model.locked = true;
    this.setMachineState('rolling');
    this.model.floorPulse = 0;
    this.model.floorOffset = 0;

    const startPositions = [-0.22, 0.22];
    this.model.dice.forEach((die, index) => {
      const direction = index === 0 ? 1 : -1;
      die.value = null;
      die.topFace = null;
      die.position = { x: startPositions[index], y: (Math.random() - 0.5) * 0.18, z: 0.02 };
      die.linearVelocity = {
        x: direction * (0.55 + Math.random() * 0.35),
        y: (Math.random() - 0.5) * 1.15,
        z: 1.6 + Math.random() * 0.5,
      };
      die.angularVelocity = {
        x: 520 + Math.random() * 340,
        y: 460 + Math.random() * 400,
        z: direction * (420 + Math.random() * 360),
      };
      die.isSettled = false;
      die.stableSamples = 0;
    });

    this.log('roll_started', this.model.rollId);
    this.notify();

    const started = performance.now();
    this.lastFrame = started;
    const activeSession = this.session;
    const activeRollId = this.model.rollId;
    const frame = (frameNow: number) => {
      if (activeSession !== this.session || !this.currentTargets) return;
      const dt = Math.min((frameNow - this.lastFrame) / 1000, 0.034);
      this.lastFrame = frameNow;
      const elapsed = frameNow - started;
      this.stepPhysics(dt, elapsed);
      this.notify();
      if (elapsed < 800) {
        this.rafId = requestAnimationFrame(frame);
      } else {
        this.settleDice(this.currentTargets[0], this.currentTargets[1]);
        this.finishRoll(this.currentTargets[0], this.currentTargets[1]);
      }
    };
    this.rafId = requestAnimationFrame(frame);
    window.setTimeout(() => {
      if (activeSession !== this.session || activeRollId !== this.model.rollId || !this.currentTargets || !this.model.locked) return;
      const [die1, die2] = this.currentTargets;
      this.settleDice(die1, die2);
      this.finishRoll(die1, die2);
    }, 1400);
    return true;
  }

  private stepPhysics(dt: number, elapsed: number): void {
    const pulseWindow = elapsed < 760;
    const pulse = pulseWindow ? Math.abs(Math.sin(elapsed / 78)) * Math.max(0, 1 - elapsed / 900) : 0;
    this.model.floorPulse = pulse;
    this.model.floorOffset = pulse * 0.075;
    if (elapsed > 450 && this.model.machineState === 'rolling') this.setMachineState('settling');

    for (const die of this.model.dice) {
      die.linearVelocity.z -= 4.9 * dt;
      die.position.x += die.linearVelocity.x * dt;
      die.position.y += die.linearVelocity.y * dt;
      die.position.z += die.linearVelocity.z * dt;

      const floor = this.model.floorOffset;
      if (die.position.z < floor) {
        die.position.z = floor;
        if (Math.abs(die.linearVelocity.z) > 0.12) {
          die.linearVelocity.z = Math.abs(die.linearVelocity.z) * (elapsed > 450 ? 0.24 : 0.52);
        } else {
          die.linearVelocity.z = 0;
        }
        die.linearVelocity.x *= elapsed > 450 ? 0.72 : 0.89;
        die.linearVelocity.y *= elapsed > 450 ? 0.72 : 0.89;
      }

      const radial = Math.hypot(die.position.x, die.position.y);
      const maxRadius = this.model.domeRadius - 0.12;
      if (radial > maxRadius) {
        const nx = die.position.x / radial;
        const ny = die.position.y / radial;
        die.position.x = nx * maxRadius;
        die.position.y = ny * maxRadius;
        const dot = die.linearVelocity.x * nx + die.linearVelocity.y * ny;
        die.linearVelocity.x -= 1.75 * dot * nx;
        die.linearVelocity.y -= 1.75 * dot * ny;
      }

      const damping = elapsed > 450 ? Math.pow(0.035, dt) : Math.pow(0.55, dt);
      die.angularVelocity.x *= damping;
      die.angularVelocity.y *= damping;
      die.angularVelocity.z *= damping;
      die.rotation.x += die.angularVelocity.x * dt;
      die.rotation.y += die.angularVelocity.y * dt;
      die.rotation.z += die.angularVelocity.z * dt;
      die.quaternion = quaternionFromEuler(die.rotation);
    }

    const [a, b] = this.model.dice;
    const dx = b.position.x - a.position.x;
    const dy = b.position.y - a.position.y;
    const distance = Math.hypot(dx, dy);
    const minDistance = 0.28;
    if (distance > 0.001 && distance < minDistance && Math.abs(a.position.z - b.position.z) < 0.25) {
      const nx = dx / distance;
      const ny = dy / distance;
      const overlap = minDistance - distance;
      a.position.x -= nx * overlap * 0.5;
      a.position.y -= ny * overlap * 0.5;
      b.position.x += nx * overlap * 0.5;
      b.position.y += ny * overlap * 0.5;
      const av = a.linearVelocity.x * nx + a.linearVelocity.y * ny;
      const bv = b.linearVelocity.x * nx + b.linearVelocity.y * ny;
      const impulse = (bv - av) * 0.82;
      a.linearVelocity.x += impulse * nx;
      a.linearVelocity.y += impulse * ny;
      b.linearVelocity.x -= impulse * nx;
      b.linearVelocity.y -= impulse * ny;
    }
  }

  private settleDice(die1: number, die2: number): void {
    this.setMachineState('settling');
    this.model.floorPulse = 0;
    this.model.floorOffset = 0;
    this.model.dice.forEach((die, index) => {
      const value = index === 0 ? die1 : die2;
      const finalRotation = FINAL_ROTATIONS[value];
      die.value = value;
      die.topFace = value;
      die.rotation = { ...finalRotation };
      die.quaternion = quaternionFromEuler(die.rotation);
      die.position.z = 0;
      die.position.x = Math.max(-0.56, Math.min(0.56, die.position.x));
      die.position.y = Math.max(-0.56, Math.min(0.56, die.position.y));
      die.linearVelocity = { x: 0, y: 0, z: 0 };
      die.angularVelocity = { x: 0, y: 0, z: 0 };
      die.isSettled = true;
      die.stableSamples = 8;
    });
    const [left, right] = this.model.dice;
    const separation = Math.hypot(right.position.x - left.position.x, right.position.y - left.position.y);
    if (separation < 0.30) {
      left.position.x = -0.20;
      left.position.y = -0.04;
      right.position.x = 0.20;
      right.position.y = 0.04;
    }
    this.log('dice_settled', `${die1},${die2}`);
  }

  private finishRoll(die1: number, die2: number): void {
    const result: RollResult = {
      rollId: this.model.rollId,
      die1,
      die2,
      total: die1 + die2,
      timestamp: performance.now(),
    };
    this.model.lastRoll = result;
    this.model.history.push(result);
    if (this.model.history.length > 30) this.model.history.shift();
    this.resolveBets(result);
    this.setMachineState('resolved');
    this.model.locked = false;
    this.currentTargets = null;
    this.log('roll_resolved', result.total);
    this.notify();
  }

  private resolveBets(result: RollResult): void {
    const total = result.total;
    const phaseBefore = this.model.tablePhase;
    const pointBefore = this.model.point;
    const balanceBefore = this.model.balance;
    const entries: SettlementEntry[] = [];
    const removeIds = new Set<string>();

    const addEntry = (bet: Bet, outcome: SettlementEntry['outcome'], credit: number, profit: number, reason: string) => {
      if (credit) this.model.balance += credit;
      entries.push({
        betId: bet.id,
        type: bet.type,
        number: bet.number,
        outcome,
        stake: bet.amount,
        odds: bet.odds,
        credit,
        profit,
        reason,
      });
    };

    for (const bet of this.model.bets) {
      if (bet.type !== 'come') continue;
      if (bet.status === 'pending') {
        if (total === 7 || total === 11) {
          addEntry(bet, 'win', bet.amount * 2, bet.amount, 'pending come natural');
          removeIds.add(bet.id);
        } else if (total === 2 || total === 3 || total === 12) {
          addEntry(bet, 'lose', 0, -bet.amount, 'pending come craps');
          removeIds.add(bet.id);
        } else if (POINT_NUMBERS.includes(total)) {
          bet.status = 'established';
          bet.number = total;
          addEntry(bet, 'move', 0, 0, `come moved to ${total}`);
        }
      } else if (bet.status === 'established') {
        if (total === bet.number) {
          const oddsProfit = bet.number ? trueOddsProfit(bet.number, bet.odds) : 0;
          const credit = bet.amount * 2 + bet.odds + oddsProfit;
          addEntry(bet, 'win', credit, bet.amount + oddsProfit, 'established come number hit');
          removeIds.add(bet.id);
        } else if (total === 7) {
          addEntry(bet, 'lose', 0, -(bet.amount + bet.odds), 'established come seven-out');
          removeIds.add(bet.id);
        }
      }
    }

    for (const bet of this.model.bets) {
      if (removeIds.has(bet.id)) continue;
      if (bet.type === 'place') {
        if (total === 7) {
          addEntry(bet, 'lose', 0, -bet.amount, 'place loses on seven');
          removeIds.add(bet.id);
        } else if (total === bet.number && bet.number !== null) {
          const profit = placeProfit(bet.number, bet.amount);
          addEntry(bet, 'win', profit, profit, 'place number hit; stake remains working');
        }
      } else if (bet.type === 'buy') {
        if (total === 7) {
          addEntry(bet, 'lose', 0, -bet.amount, 'buy loses on seven');
          removeIds.add(bet.id);
        } else if (total === bet.number && bet.number !== null) {
          const profit = buyProfit(bet.number, bet.amount);
          addEntry(bet, 'win', profit, profit, 'buy number hit after 5% vig; stake remains working');
        }
      } else if (bet.type === 'pass') {
        if (phaseBefore === 'come_out') {
          if (total === 7 || total === 11) {
            addEntry(bet, 'win', bet.amount * 2, bet.amount, 'pass natural');
            removeIds.add(bet.id);
          } else if (total === 2 || total === 3 || total === 12) {
            addEntry(bet, 'lose', 0, -bet.amount, 'pass craps');
            removeIds.add(bet.id);
          }
        } else if (pointBefore !== null) {
          if (total === pointBefore) {
            const oddsProfit = trueOddsProfit(pointBefore, bet.odds);
            const credit = bet.amount * 2 + bet.odds + oddsProfit;
            addEntry(bet, 'win', credit, bet.amount + oddsProfit, 'pass point made');
            removeIds.add(bet.id);
          } else if (total === 7) {
            addEntry(bet, 'lose', 0, -(bet.amount + bet.odds), 'pass seven-out');
            removeIds.add(bet.id);
          }
        }
      }
    }

    for (const key of ['low', 'high', 'hitall'] as const) {
      const tracker = this.model.progressives[key];
      const bet = tracker.activeBetId ? this.model.bets.find((item) => item.id === tracker.activeBetId) : undefined;
      if (!bet || removeIds.has(bet.id)) continue;
      if (total === 7) {
        addEntry(bet, 'lose', 0, -bet.amount, 'progressive reset by seven');
        tracker.hits = [];
        tracker.activeBetId = null;
        removeIds.add(bet.id);
        continue;
      }
      if (tracker.targets.includes(total)) {
        if (!tracker.hits.includes(total)) tracker.hits.push(total);
      }
      const uniqueHits = new Set(tracker.hits);
      const complete = tracker.targets.every((target) => uniqueHits.has(target));
      if (complete) {
        const credit = bet.amount * tracker.payoutMultiplier;
        const profit = credit - bet.amount;
        addEntry(bet, 'win', credit, profit, `${tracker.label} progressive complete`);
        tracker.completedCount += 1;
        tracker.hits = [];
        tracker.activeBetId = null;
        removeIds.add(bet.id);
      }
    }

    this.model.bets = this.model.bets.filter((bet) => !removeIds.has(bet.id));

    if (phaseBefore === 'come_out') {
      if (POINT_NUMBERS.includes(total)) {
        this.model.point = total;
        this.model.tablePhase = 'point';
        this.log('point_established', total);
      }
    } else if (pointBefore !== null && (total === pointBefore || total === 7)) {
      this.model.point = null;
      this.model.tablePhase = 'come_out';
      this.log(total === 7 ? 'seven_out' : 'point_made', total);
    }

    const settlement: Settlement = {
      rollId: result.rollId,
      total,
      balanceBefore,
      balanceAfter: this.model.balance,
      entries,
      timestamp: performance.now(),
    };
    this.model.settlements.push(settlement);
    if (this.model.settlements.length > 40) this.model.settlements.shift();
    this.log('settlement', entries.length);
  }

  waitForSettled = (timeoutMs = 5000): Promise<RollResult> => {
    const targetRollId = this.model.rollId;
    return new Promise((resolve, reject) => {
      const started = performance.now();
      const poll = () => {
        const last = this.model.lastRoll;
        if (last && last.rollId >= targetRollId && (this.model.machineState === 'resolved' || this.model.machineState === 'idle')) {
          resolve(clone(last));
          return;
        }
        if (performance.now() - started > timeoutMs) {
          reject(new Error('waitForSettled timeout'));
          return;
        }
        window.setTimeout(poll, 30);
      };
      poll();
    });
  };

  setBalance(amount: number): boolean {
    if (!Number.isInteger(amount) || amount < 0 || this.model.locked) return false;
    this.model.balance = Math.floor(amount);
    this.log('balance_set_for_test', this.model.balance);
    this.notify();
    return true;
  }

  resetGame = (balance = BASE_BALANCE): boolean => {
    if (!Number.isInteger(balance) || balance < 0) return false;
    this.session += 1;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.currentTargets = null;
    this.forcedRolls = [];
    this.model = newModel(this.variant, balance);
    this.log('reset', balance);
    this.notify();
    return true;
  };

  getEventLog = (): EventRecord[] => clone(this.model.events);

  getFaceContract = () => ({
    worldUpAxis: { x: 0, y: 1, z: 0 },
    localFaceNormals: {
      1: { x: 0, y: 0, z: 1 },
      2: { x: 0, y: 1, z: 0 },
      3: { x: 1, y: 0, z: 0 },
      4: { x: -1, y: 0, z: 0 },
      5: { x: 0, y: -1, z: 0 },
      6: { x: 0, y: 0, z: -1 },
    },
  });
}
