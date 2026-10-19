import { useEffect, useMemo, useState } from 'react';
import { CrapsEngine } from './engine';
import type { Bet, BetType, DieState, GameModel, ProgressiveState } from './types';

type ProgressiveKey = 'low' | 'high' | 'hitall';

export function ProgressivePanel({
  tracker,
  onBet,
  disabled,
}: {
  tracker: ProgressiveState;
  onBet: (key: ProgressiveKey) => void;
  disabled: boolean;
}) {
  return (
    <button
      className={`progressive-card ${tracker.activeBetId ? 'active' : ''}`}
      data-testid={`progressive-${tracker.key}`}
      onClick={() => onBet(tracker.key)}
      disabled={disabled}
      type="button"
    >
      <span className="progressive-title">{tracker.label}</span>
      <span className="progressive-payout">{tracker.payoutMultiplier - 1}:1</span>
      <span className="progress-lights">
        {tracker.targets.map((number) => {
          const hit = tracker.hits.includes(number);
          return (
            <span
              key={number}
              className={`progress-light ${hit ? 'hit' : ''}`}
              data-testid={`progress-light-${tracker.key}-${number}`}
              data-hit={String(hit)}
              aria-pressed={hit}
            >
              {number}
            </span>
          );
        })}
      </span>
      <span className="progressive-status">
        {tracker.activeBetId ? `${new Set(tracker.hits).size}/${tracker.targets.length}` : 'TAP TO BET'}
      </span>
    </button>
  );
}

const PIPS: Record<number, number[]> = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};


function quaternionCssRotation(q: DieState['quaternion']): string {
  const length = Math.hypot(q.x, q.y, q.z, q.w) || 1;
  const x = q.x / length, y = q.y / length, z = q.z / length, w = Math.max(-1, Math.min(1, q.w / length));
  const angle = 2 * Math.acos(w);
  const scale = Math.sqrt(Math.max(0, 1 - w * w));
  if (scale < 0.0001 || angle < 0.0001) return 'rotate3d(1,0,0,0rad)';
  return `rotate3d(${x / scale},${y / scale},${z / scale},${angle}rad)`;
}

function Face({ value, className }: { value: number; className: string }) {
  return (
    <div className={`die-face ${className}`} data-face-value={value}>
      <div className="pip-grid">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} className={PIPS[value].includes(index) ? 'pip visible' : 'pip'} />
        ))}
      </div>
    </div>
  );
}

export function Die({ die }: { die: DieState }) {
  const lift = die.position.z * 74;
  const style = {
    left: `${50 + die.position.x * 49}%`,
    top: `${50 + die.position.y * 49}%`,
    transform: `translate(-50%, -50%) translateY(${-lift}px)`,
  };
  const cubeStyle = {
    transform: `rotateX(72deg) rotateZ(-6deg) ${quaternionCssRotation(die.quaternion)}`,
  };
  return (
    <div
      className={`die die-${die.id} ${die.isSettled ? 'settled' : 'in-motion'}`}
      data-testid={`die-${die.id}`}
      data-die={die.id}
      data-value={die.value ?? ''}
      data-top-face={die.topFace ?? ''}
      data-x={die.position.x.toFixed(4)}
      data-y={die.position.y.toFixed(4)}
      data-z={die.position.z.toFixed(4)}
      data-settled={String(die.isSettled)}
      style={style}
      aria-label={`Die ${die.id}${die.value ? ` showing ${die.value}` : ' rolling'}`}
    >
      <div className="die-cube" style={cubeStyle}>
        <Face value={2} className="face-top" />
        <Face value={5} className="face-bottom" />
        <Face value={1} className="face-front" />
        <Face value={6} className="face-back" />
        <Face value={3} className="face-right" />
        <Face value={4} className="face-left" />
      </div>
    </div>
  );
}

export function BubbleDome({ model }: { model: GameModel }) {
  const pulseScale = 1 + model.floorPulse * 0.035;
  return (
    <section className="machine-chamber" aria-label="Bubble dice chamber">
      <div
        id="bubble-dome"
        data-testid="bubble-dome"
        className={`bubble-dome ${model.machineState === 'rolling' ? 'rolling' : ''}`}
      >
        <div className="dome-glare glare-one" />
        <div className="dome-glare glare-two" />
        <div className="dome-rim" />
        <div
          className="pulsing-floor"
          data-testid="pulsing-floor"
          data-pulse={model.floorPulse.toFixed(4)}
          style={{ transform: `translate(-50%, -50%) scale(${pulseScale})` }}
        >
          <div className="floor-ring ring-a" />
          <div className="floor-ring ring-b" />
          <div className="floor-emblem">LUCKY<br />DICE</div>
        </div>
        <div className="dice-arena" data-testid="dice-arena">
          {model.dice.map((die) => <Die key={die.id} die={die} />)}
        </div>
        <div className="dome-shadow" />
      </div>
      <div className="result-marquee" aria-live="polite">
        <span className="marquee-label">LAST ROLL</span>
        <strong data-testid="last-roll">
          {model.lastRoll ? `${model.lastRoll.die1} + ${model.lastRoll.die2} = ${model.lastRoll.total}` : 'READY'}
        </strong>
      </div>
    </section>
  );
}

const NUMBERS = [4, 5, 6, 8, 9, 10];
const CHIPS = [1, 5, 10, 25, 100];

function sumBet(model: GameModel, type: BetType, number: number | null = null): number {
  return model.bets
    .filter((bet) => bet.type === type && bet.number === number)
    .reduce((sum, bet) => sum + bet.amount, 0);
}

function BetAmount({ amount }: { amount: number }) {
  return amount > 0 ? <span className="mini-chip">{amount}</span> : null;
}

function ActiveComeBets({ model, addOdds }: { model: GameModel; addOdds: (betId: string) => void }) {
  const bets = model.bets.filter((bet) => bet.type === 'come');
  if (!bets.length) return null;
  return (
    <div className="come-rack" data-testid="come-rack">
      {bets.map((bet: Bet) => (
        <div className="come-ticket" key={bet.id} data-testid={`bet-chip-${bet.id}`} data-type={bet.type} data-number={bet.number ?? ''} data-amount={bet.amount} data-odds={bet.odds}>
          <span>COME {bet.status === 'established' ? bet.number : '•'}</span>
          <span>${bet.amount}</span>
          {bet.status === 'established' && (
            <button data-testid={`come-odds-${bet.id}`} onClick={() => addOdds(bet.id)} type="button" disabled={model.locked || bet.odds >= bet.amount * 3}>
              ODDS {bet.odds}/{bet.amount * 3}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export function BetBoard({
  model,
  selectChip,
  placeBet,
  addPassOdds,
  addComeOdds,
  clearBets,
}: {
  model: GameModel;
  selectChip: (amount: number) => void;
  placeBet: (type: BetType, number?: number | null) => void;
  addPassOdds: () => void;
  addComeOdds: (betId: string) => void;
  clearBets: () => void;
}) {
  const locked = model.locked;
  const pass = model.bets.find((bet) => bet.type === 'pass');
  return (
    <section id="betting-board" data-testid="betting-board" className="betting-board" aria-label="Craps betting board">
      <div className="board-header">
        <div>
          <span className="eyebrow">SELECT CHIP</span>
          <div className="chip-rack" data-testid="chip-rack">
            {CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className={`chip chip-${chip} ${model.selectedChip === chip ? 'selected' : ''}`}
                data-testid={`chip-${chip}`}
                aria-pressed={model.selectedChip === chip}
                onClick={() => selectChip(chip)}
                disabled={locked}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
        <button className="clear-button" data-testid="clear-bets" type="button" onClick={clearBets} disabled={locked || model.bets.length === 0}>
          CLEAR
        </button>
      </div>

      <div className="number-grid" aria-label="Place and Buy bets">
        <div className="row-label">PLACE</div>
        {NUMBERS.map((number) => (
          <button
            key={`place-${number}`}
            type="button"
            className={`number-bet place-bet n-${number}`}
            data-testid={`place-${number}`}
            onClick={() => placeBet('place', number)}
            disabled={locked}
          >
            <strong>{number}</strong>
            <small>{number === 4 || number === 10 ? '9:5' : number === 5 || number === 9 ? '7:5' : '7:6'}</small>
            <BetAmount amount={sumBet(model, 'place', number)} />
          </button>
        ))}
        <div className="row-label buy-label">BUY</div>
        {NUMBERS.map((number) => (
          <button
            key={`buy-${number}`}
            type="button"
            className={`number-bet buy-bet n-${number}`}
            data-testid={`buy-${number}`}
            onClick={() => placeBet('buy', number)}
            disabled={locked}
          >
            <strong>{number}</strong>
            <small>TRUE ODDS</small>
            <BetAmount amount={sumBet(model, 'buy', number)} />
          </button>
        ))}
      </div>

      <div className="line-bets">
        <button type="button" className="line-bet pass-line" data-testid="pass-line" onClick={() => placeBet('pass')} disabled={locked || model.tablePhase !== 'come_out'}>
          PASS LINE <BetAmount amount={pass?.amount ?? 0} />
        </button>
        <button type="button" className="line-bet come-line" data-testid="come" onClick={() => placeBet('come')} disabled={locked || model.tablePhase !== 'point'}>
          COME <BetAmount amount={sumBet(model, 'come')} />
        </button>
        <button type="button" className="line-bet odds-line" data-testid="pass-odds" onClick={addPassOdds} disabled={locked || !pass || model.point === null}>
          PASS ODDS {pass ? `${pass.odds}/${pass.amount * 3}` : '3× MAX'}
        </button>
      </div>

      <ActiveComeBets model={model} addOdds={addComeOdds} />

      <div className="progressive-bank" data-testid="progressive-bank">
        <ProgressivePanel tracker={model.progressives.low} onBet={(key) => placeBet(`progressive_${key}` as BetType)} disabled={locked} />
        <ProgressivePanel tracker={model.progressives.high} onBet={(key) => placeBet(`progressive_${key}` as BetType)} disabled={locked} />
        <ProgressivePanel tracker={model.progressives.hitall} onBet={(key) => placeBet(`progressive_${key}` as BetType)} disabled={locked} />
      </div>

      <div className="active-bets" data-testid="active-bets">
        {model.bets.filter((bet) => bet.type !== 'come').map((bet) => (
          <span
            className="active-bet-pill"
            key={bet.id}
            data-testid={`bet-chip-${bet.id}`}
            data-type={bet.type}
            data-number={bet.number ?? ''}
            data-amount={bet.amount}
            data-odds={bet.odds}
          >
            {bet.type.replace('progressive_', '').toUpperCase()} {bet.number ?? ''} ${bet.amount}{bet.odds ? ` +${bet.odds}` : ''}
          </span>
        ))}
      </div>
    </section>
  );
}

const VARIANT = 'production' as const;

declare global {
  interface Window {
    __game: { getState: () => unknown };
    __dice: { getState: () => unknown };
    __bets: { getState: () => unknown };
    __progressives: { getState: () => unknown };
    __test: {
      forceRoll: (die1: number, die2: number) => boolean;
      setNextRolls: (sequence: Array<[number, number]>) => boolean;
      waitForSettled: (timeoutMs?: number) => Promise<unknown>;
      setBalance: (amount: number) => boolean;
      resetGame: (balance?: number) => boolean;
      getEventLog: () => unknown;
      getFaceContract: () => unknown;
      placeBet: (type: BetType, number?: number | null, amount?: number) => string | null;
      addOdds: (betId: string, amount?: number) => boolean;
      selectChip: (amount: number) => boolean;
      clearBets: () => boolean;
      roll: () => boolean;
    };
  }
}

export default function App() {
  const engine = useMemo(() => new CrapsEngine(VARIANT), []);
  const [, setRevision] = useState(0);

  useEffect(() => engine.subscribe(() => setRevision((value) => value + 1)), [engine]);

  useEffect(() => {
    window.__game = { getState: engine.getGameState };
    window.__dice = { getState: engine.getDiceState };
    window.__bets = { getState: engine.getBetsState };
    window.__progressives = { getState: engine.getProgressiveState };
    window.__test = {
      forceRoll: (d1, d2) => engine.forceRoll(d1, d2),
      setNextRolls: (sequence) => engine.setNextRolls(sequence),
      waitForSettled: engine.waitForSettled,
      setBalance: (amount) => engine.setBalance(amount),
      resetGame: engine.resetGame,
      getEventLog: engine.getEventLog,
      getFaceContract: engine.getFaceContract,
      placeBet: (type, number = null, amount) => engine.placeBet(type, number, amount),
      addOdds: (betId, amount) => engine.addOdds(betId, amount),
      selectChip: (amount) => engine.selectChip(amount),
      clearBets: () => engine.clearBets(),
      roll: () => engine.roll(),
    };
    window.__contract = {
      getState: () => ({
        version: '1.0.0',
        gameType: 'bubble-craps',
        renderer: 'css3d',
        stateSource: 'live',
        hooksReady: true,
        hookNames: ['__game', '__dice', '__bets', '__progressives', '__test', '__contract'],
        buildId: 'bubble-craps-v1',
      }),
    };
    return () => {
      delete (window as Partial<Window>).__game;
      delete (window as Partial<Window>).__dice;
      delete (window as Partial<Window>).__bets;
      delete (window as Partial<Window>).__progressives;
      delete (window as Partial<Window>).__test;
      delete (window as Partial<Window>).__contract;
    };
  }, [engine]);

  const model = engine.getModel();
  const pass = model.bets.find((bet) => bet.type === 'pass');

  const handleBet = (type: BetType, number: number | null = null) => {
    engine.placeBet(type, number);
  };

  return (
    <main id="game-root" data-testid="game-root" data-variant={VARIANT}>
      <header className="machine-header">
        <div className="brand-block">
          <span className="brand-kicker">CLASSIC CASINO</span>
          <h1>BUBBLE <em>CRAPS</em></h1>
        </div>
        <div className="bank-display">
          <span>CREDITS</span>
          <strong data-testid="balance">{model.balance}</strong>
        </div>
      </header>

      <div className="status-strip">
        <div><span>TABLE</span><strong data-testid="table-phase">{model.tablePhase === 'come_out' ? 'COME OUT' : 'POINT'}</strong></div>
        <div className={model.point ? 'point-on' : ''}><span>POINT</span><strong data-testid="point-value">{model.point ?? 'OFF'}</strong></div>
        <div><span>ROLL</span><strong data-testid="roll-id">#{model.rollId}</strong></div>
        <div className={`state-cell state-${model.machineState}`}><span>STATE</span><strong>{model.machineState.toUpperCase()}</strong></div>
      </div>

      <BubbleDome model={model} />

      <button
        type="button"
        className={`roll-button ${model.locked ? 'locked' : ''}`}
        data-testid="roll-btn"
        onClick={() => engine.roll()}
        disabled={model.locked}
        aria-label={model.locked ? 'Dice rolling' : 'Roll dice'}
      >
        <span className="roll-button-ring" />
        <span>{model.machineState === 'rolling' ? 'ROLLING' : model.machineState === 'settling' ? 'SETTLING' : 'ROLL'}</span>
      </button>

      <BetBoard
        model={model}
        selectChip={(amount) => engine.selectChip(amount)}
        placeBet={handleBet}
        addPassOdds={() => pass && engine.addOdds(pass.id)}
        addComeOdds={(betId) => engine.addOdds(betId)}
        clearBets={() => engine.clearBets()}
      />

      <footer className="machine-footer">
        <span>3× MAX ODDS</span>
        <span>BUY VIG 5% ON WIN</span>
        <span>SIMULATION CREDITS ONLY</span>
      </footer>
    </main>
  );
}
