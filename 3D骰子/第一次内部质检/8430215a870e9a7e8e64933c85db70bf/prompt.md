{system_prompt}
You are an expert coding assistant who creates web applications from scratch. You will be using the provided tools to create and edit files in the project.
For any user prompt, always try to generate a complete, functional website. Always just write the code instead of asking the user to confirm details.

## Starting from Scratch

You need to create the entire project from scratch. A typical project structure includes:
1. package.json (with React, Vite, Tailwind CSS, TypeScript as dependencies)
2. vite.config.ts
3. tsconfig.json and tsconfig.node.json
4. tailwind.config.js and postcss.config.js
5. index.html (with an appropriate title, mounting a root div)
6. src/main.tsx (React entry point rendering into #root)
7. src/index.css (with @tailwind base/components/utilities directives)
8. src/ application components organized as you see fit (e.g. App.tsx, pages/, components/)


## Tech Stack

- React 19 + TypeScript
- Vite as build tool
- Tailwind CSS for styling

## Requirements

ALWAYS create complete, functional web applications. When you are finished, run `npm run build` to verify the build succeeds.

## Remember

Use tools for all file creation and editing. Never output code directly in your response text.
{user_prompt}
I want a classic looking bubble craps machine game for my phone, the dice must be in a bubble dome with a bouncing/pulsating bottom, and the dice rolls need to look as life like as possible with a random roll each time. I want a top down perspective on the dice. And i want the dice roll to end when they roll onto there side, also a betting board just like on a bubble craps machine, with place and buy bets on the 4-10, with progressive bets with light up numbers so you can keep track of the progressives, a low progressive where you have to hit 2-6 before a 7, high progressive where you have to hit 8-12 before a 7, a hit all where you have to hit 2-12 but not a 7. If you hit a 7 you lose your bets and progressive progress and odds bets allowed on the pass line and come bets with a 3x max odds

## Public read-only runtime interface

To make the live Bubble Craps state observable without changing gameplay, visuals, or user interaction, the application must expose the following read-only interfaces. Every `getState()` call must return a fresh plain-data snapshot derived from the same live production objects that drive the visible game. The interfaces must not mutate state, return fixed test values, or maintain a separate evaluation-only state.

### Required DOM identifiers

- Root: `id="game-root"`
- Bubble dome: `id="bubble-dome"`
- Dice arena: `data-testid="dice-arena"`
- Pulsing floor: `data-testid="pulsing-floor"`
- Dice: `data-testid="die-1"` and `data-testid="die-2"`
- Roll control: `data-testid="roll-btn"`
- Balance: `data-testid="balance"`
- Table phase: `data-testid="table-phase"`
- Point: `data-testid="point-value"`
- Last roll: `data-testid="last-roll"`
- Betting board: `id="betting-board"`
- Chips: `data-testid="chip-1"`, `chip-5`, `chip-10`, `chip-25`, `chip-100`
- Place bets: `data-testid="place-4"`, `place-5`, `place-6`, `place-8`, `place-9`, `place-10`
- Buy bets: `data-testid="buy-4"`, `buy-5`, `buy-6`, `buy-8`, `buy-9`, `buy-10`
- Pass Line: `data-testid="pass-line"`
- Come: `data-testid="come"`
- Pass odds: `data-testid="pass-odds"`
- Clear bets: `data-testid="clear-bets"`
- Progressives: `data-testid="progressive-low"`, `progressive-high`, `progressive-hitall`
- Progressive lamps: `data-testid="progress-light-<low|high|hitall>-<number>"` with live `data-hit="true|false"`
- Visible active bets: `data-testid="bet-chip-<betId>"` with live `data-type`, `data-number`, `data-amount`, and `data-odds`
- Established Come odds: `data-testid="come-odds-<betId>"`

Each die element exposes live `data-value`, `data-top-face`, `data-x`, `data-y`, `data-z`, and `data-settled` values that correspond to the rendered die.

### `window.__contract.getState()`

```ts
{
  version: string,
  gameType: "bubble-craps",
  renderer: string,
  stateSource: "live",
  hooksReady: boolean,
  hookNames: string[],
  buildId: string
}
```

### `window.__game.getState()`

```ts
{
  ready: boolean;
  variant: string;
  machineState: "idle" | "rolling" | "settling" | "resolved";
  tablePhase: "come_out" | "point";
  point: number | null;
  balance: number;
  selectedChip: 1 | 5 | 10 | 25 | 100;
  locked: boolean;
  canRoll: boolean;
  rollId: number;
  lastRoll: null | { rollId:number; die1:number; die2:number; total:number; timestamp:number };
  history: Array<{ rollId:number; die1:number; die2:number; total:number; timestamp:number }>;
  activeBets: Array<{
    id:string;
    type:"pass"|"come"|"place"|"buy"|"progressive_low"|"progressive_high"|"progressive_hitall";
    number:number|null;
    amount:number;
    odds:number;
    status:"active"|"pending"|"established";
    createdRollId:number;
  }>;
  progressive: {
    low: ProgressiveState;
    high: ProgressiveState;
    hitall: ProgressiveState;
  };
  settlementLedger: Array<{
    rollId:number;
    total:number;
    balanceBefore:number;
    balanceAfter:number;
    timestamp:number;
    entries:Array<{
      betId:string;
      type:string;
      number:number|null;
      outcome:"win"|"lose"|"move"|"keep";
      stake:number;
      odds:number;
      credit:number;
      profit:number;
      reason:string;
    }>;
  }>;
  dome: { radius:number; floorPulse:number; floorOffset:number };
}
```

`ProgressiveState`:

```ts
{
  key:"low"|"high"|"hitall";
  label:string;
  targets:number[];
  hits:number[];
  activeBetId:string|null;
  completedCount:number;
  payoutMultiplier:number;
}
```

### `window.__dice.getState()`

```ts
{
  rolling:boolean;
  machineState:"idle"|"rolling"|"settling"|"resolved";
  floorPulse:number;
  floorOffset:number;
  domeRadius:number;
  dice:Array<{
    id:1|2;
    value:number|null;
    topFace:number|null;
    position:{x:number;y:number;z:number};
    rotation:{x:number;y:number;z:number};
    quaternion:{x:number;y:number;z:number;w:number};
    linearVelocity:{x:number;y:number;z:number};
    angularVelocity:{x:number;y:number;z:number};
    isSettled:boolean;
    stableSamples:number;
  }>;
}
```

### `window.__bets.getState()`

```ts
{
  selectedChip:number;
  balance:number;
  locked:boolean;
  bets:Array<object>;
  maxOddsMultiplier:3;
}
```

### `window.__progressives.getState()`

Returns the same live `{ low, high, hitall }` tracker state shown by the progressive lamps.
