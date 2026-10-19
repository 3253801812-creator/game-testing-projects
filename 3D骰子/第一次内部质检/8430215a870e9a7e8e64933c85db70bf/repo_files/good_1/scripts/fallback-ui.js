// Offline build UI adapter. Production source remains the React app in src/.
const root = document.getElementById('root');
const engine = new CrapsEngine(VARIANT);
const NUMBERS = [4, 5, 6, 8, 9, 10];
const CHIPS = [1, 5, 10, 25, 100];
function settledCssRotation(face) {
  const map = {
    1:'rotateX(-12deg) rotateY(10deg)',
    6:'rotateX(-12deg) rotateY(190deg)',
    3:'rotateX(-12deg) rotateY(-80deg)',
    4:'rotateX(-12deg) rotateY(100deg)',
    2:'rotateX(-102deg) rotateY(10deg)',
    5:'rotateX(78deg) rotateY(10deg)'
  };
  return map[face] || map[1];
}

function quaternionCssRotation(q) {
  const length = Math.hypot(q.x, q.y, q.z, q.w) || 1;
  const x = q.x / length, y = q.y / length, z = q.z / length, w = Math.max(-1, Math.min(1, q.w / length));
  const angle = 2 * Math.acos(w);
  const scale = Math.sqrt(Math.max(0, 1 - w * w));
  if (scale < 0.0001 || angle < 0.0001) return 'rotate3d(1,0,0,0rad)';
  return `rotate3d(${x / scale},${y / scale},${z / scale},${angle}rad)`;
}

const PIPS = {
  1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8],
};

function face(value, className) {
  return `<div class="die-face ${className}" data-face-value="${value}"><div class="pip-grid">${Array.from({ length: 9 }, (_, i) => `<span class="pip ${PIPS[value].includes(i) ? 'visible' : ''}"></span>`).join('')}</div></div>`;
}

function dieHtml(die) {
  const lift = die.position.z * 74;
  const style = `left:${50 + die.position.x * 49}%;top:${50 + die.position.y * 49}%;transform:translate(-50%,-50%) translateY(${-lift}px)`;
  const cubeStyle = `transform:${die.isSettled && die.topFace ? settledCssRotation(die.topFace) : `rotateX(-12deg) rotateY(10deg) ${quaternionCssRotation(die.quaternion)}`}`;
  return `<div class="die die-${die.id} ${die.isSettled ? 'settled' : 'in-motion'}" data-testid="die-${die.id}" data-die="${die.id}" data-value="${die.value ?? ''}" data-top-face="${die.topFace ?? ''}" data-x="${die.position.x.toFixed(4)}" data-y="${die.position.y.toFixed(4)}" data-z="${die.position.z.toFixed(4)}" data-settled="${die.isSettled}" style="${style}" aria-label="Die ${die.id}${die.value ? ` showing ${die.value}` : ' rolling'}"><div class="die-cube" style="${cubeStyle}">${face(2, 'face-top')}${face(5, 'face-bottom')}${face(1, 'face-front')}${face(6, 'face-back')}${face(3, 'face-right')}${face(4, 'face-left')}</div></div>`;
}

function sumBet(model, type, number = null) {
  return model.bets.filter((bet) => bet.type === type && bet.number === number).reduce((sum, bet) => sum + bet.amount, 0);
}
function miniChip(amount) { return amount > 0 ? `<span class="mini-chip">${amount}</span>` : ''; }

function progressiveHtml(tracker) {
  return `<button class="progressive-card ${tracker.activeBetId ? 'active' : ''}" data-action="progressive" data-key="${tracker.key}" data-testid="progressive-${tracker.key}" ${engine.getModel().locked ? 'disabled' : ''} type="button"><span class="progressive-title">${tracker.label}</span><span class="progressive-payout">${tracker.payoutMultiplier - 1}:1</span><span class="progress-lights">${tracker.targets.map((n) => { const hit = tracker.hits.includes(n); return `<span class="progress-light ${hit ? 'hit' : ''}" data-testid="progress-light-${tracker.key}-${n}" data-hit="${hit}" aria-pressed="${hit}">${n}</span>`; }).join('')}</span><span class="progressive-status">${tracker.activeBetId ? `${new Set(tracker.hits).size}/${tracker.targets.length}` : 'TAP TO BET'}</span></button>`;
}

function render() {
  const model = engine.getModel();
  const pass = model.bets.find((bet) => bet.type === 'pass');
  const comeBets = model.bets.filter((bet) => bet.type === 'come');
  const pulseScale = 1 + model.floorPulse * 0.035;
  root.innerHTML = `<main id="game-root" data-testid="game-root" data-variant="${VARIANT}">
    <header class="machine-header"><div class="brand-block"><span class="brand-kicker">CLASSIC CASINO</span><h1>BUBBLE <em>CRAPS</em></h1></div><div class="bank-display"><span>CREDITS</span><strong data-testid="balance">${model.balance}</strong></div></header>
    <div class="status-strip"><div><span>TABLE</span><strong data-testid="table-phase">${model.tablePhase === 'come_out' ? 'COME OUT' : 'POINT'}</strong></div><div class="${model.point ? 'point-on' : ''}"><span>POINT</span><strong data-testid="point-value">${model.point ?? 'OFF'}</strong></div><div><span>ROLL</span><strong data-testid="roll-id">#${model.rollId}</strong></div><div class="state-cell state-${model.machineState}"><span>STATE</span><strong>${model.machineState.toUpperCase()}</strong></div></div>
    <section class="machine-chamber" aria-label="Bubble dice chamber"><div id="bubble-dome" data-testid="bubble-dome" class="bubble-dome ${model.machineState === 'rolling' ? 'rolling' : ''}"><div class="dome-glare glare-one"></div><div class="dome-glare glare-two"></div><div class="dome-rim"></div><div class="pulsing-floor" data-testid="pulsing-floor" data-pulse="${model.floorPulse.toFixed(4)}" style="transform:translate(-50%,-50%) scale(${pulseScale})"><div class="floor-ring ring-a"></div><div class="floor-ring ring-b"></div><div class="floor-emblem">LUCKY<br>DICE</div></div><div class="dice-arena" data-testid="dice-arena">${model.dice.map(dieHtml).join('')}</div><div class="dome-shadow"></div></div><div class="result-marquee" aria-live="polite"><span class="marquee-label">LAST ROLL</span><strong data-testid="last-roll">${model.lastRoll ? `${model.lastRoll.die1} + ${model.lastRoll.die2} = ${model.lastRoll.total}` : 'READY'}</strong></div></section>
    <button type="button" class="roll-button ${model.locked ? 'locked' : ''}" data-action="roll" data-testid="roll-btn" ${model.locked ? 'disabled' : ''} aria-label="${model.locked ? 'Dice rolling' : 'Roll dice'}"><span class="roll-button-ring"></span><span>${model.machineState === 'rolling' ? 'ROLLING' : model.machineState === 'settling' ? 'SETTLING' : 'ROLL'}</span></button>
    <section id="betting-board" data-testid="betting-board" class="betting-board" aria-label="Craps betting board">
      <div class="board-header"><div><span class="eyebrow">SELECT CHIP</span><div class="chip-rack" data-testid="chip-rack">${CHIPS.map((chip) => `<button type="button" class="chip chip-${chip} ${model.selectedChip === chip ? 'selected' : ''}" data-action="chip" data-chip="${chip}" data-testid="chip-${chip}" aria-pressed="${model.selectedChip === chip}" ${model.locked ? 'disabled' : ''}>${chip}</button>`).join('')}</div></div><button class="clear-button" data-action="clear" data-testid="clear-bets" type="button" ${model.locked || model.bets.length === 0 ? 'disabled' : ''}>CLEAR</button></div>
      <div class="number-grid" aria-label="Place and Buy bets"><div class="row-label">PLACE</div>${NUMBERS.map((n) => `<button type="button" class="number-bet place-bet n-${n}" data-action="bet" data-type="place" data-number="${n}" data-testid="place-${n}" ${model.locked ? 'disabled' : ''}><strong>${n}</strong><small>${n === 4 || n === 10 ? '9:5' : n === 5 || n === 9 ? '7:5' : '7:6'}</small>${miniChip(sumBet(model, 'place', n))}</button>`).join('')}<div class="row-label buy-label">BUY</div>${NUMBERS.map((n) => `<button type="button" class="number-bet buy-bet n-${n}" data-action="bet" data-type="buy" data-number="${n}" data-testid="buy-${n}" ${model.locked ? 'disabled' : ''}><strong>${n}</strong><small>TRUE ODDS</small>${miniChip(sumBet(model, 'buy', n))}</button>`).join('')}</div>
      <div class="line-bets"><button type="button" class="line-bet pass-line" data-action="bet" data-type="pass" data-testid="pass-line" ${model.locked || model.tablePhase !== 'come_out' ? 'disabled' : ''}>PASS LINE ${miniChip(pass?.amount ?? 0)}</button><button type="button" class="line-bet come-line" data-action="bet" data-type="come" data-testid="come" ${model.locked || model.tablePhase !== 'point' ? 'disabled' : ''}>COME ${miniChip(sumBet(model, 'come'))}</button><button type="button" class="line-bet odds-line" data-action="pass-odds" data-testid="pass-odds" ${model.locked || !pass || model.point === null ? 'disabled' : ''}>PASS ODDS ${pass ? `${pass.odds}/${pass.amount * 3}` : '3× MAX'}</button></div>
      ${comeBets.length ? `<div class="come-rack" data-testid="come-rack">${comeBets.map((bet) => `<div class="come-ticket" data-testid="bet-chip-${bet.id}" data-type="${bet.type}" data-number="${bet.number ?? ''}" data-amount="${bet.amount}" data-odds="${bet.odds}"><span>COME ${bet.status === 'established' ? bet.number : '•'}</span><span>$${bet.amount}</span>${bet.status === 'established' ? `<button data-action="come-odds" data-bet-id="${bet.id}" data-testid="come-odds-${bet.id}" type="button" ${model.locked || bet.odds >= bet.amount * 3 ? 'disabled' : ''}>ODDS ${bet.odds}/${bet.amount * 3}</button>` : ''}</div>`).join('')}</div>` : ''}
      <div class="progressive-bank" data-testid="progressive-bank">${progressiveHtml(model.progressives.low)}${progressiveHtml(model.progressives.high)}${progressiveHtml(model.progressives.hitall)}</div>
      <div class="active-bets" data-testid="active-bets">${model.bets.filter((bet) => bet.type !== 'come').map((bet) => `<span class="active-bet-pill" data-testid="bet-chip-${bet.id}" data-type="${bet.type}" data-number="${bet.number ?? ''}" data-amount="${bet.amount}" data-odds="${bet.odds}">${bet.type.replace('progressive_', '').toUpperCase()} ${bet.number ?? ''} $${bet.amount}${bet.odds ? ` +${bet.odds}` : ''}</span>`).join('')}</div>
    </section>
    <footer class="machine-footer"><span>3× MAX ODDS</span><span>BUY VIG 5% ON WIN</span><span>SIMULATION CREDITS ONLY</span></footer>
  </main>`;
}

root.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target || target.disabled) return;
  const action = target.dataset.action;
  if (action === 'roll') engine.roll();
  else if (action === 'chip') engine.selectChip(Number(target.dataset.chip));
  else if (action === 'clear') engine.clearBets();
  else if (action === 'bet') engine.placeBet(target.dataset.type, target.dataset.number ? Number(target.dataset.number) : null);
  else if (action === 'progressive') engine.placeBet(`progressive_${target.dataset.key}`);
  else if (action === 'pass-odds') {
    const pass = engine.getModel().bets.find((bet) => bet.type === 'pass');
    if (pass) engine.addOdds(pass.id);
  } else if (action === 'come-odds') engine.addOdds(target.dataset.betId);
});

engine.subscribe(render);
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
window.__contract = { getState: () => ({ version: '1.0.0', gameType: 'bubble-craps', renderer: 'css3d', stateSource: 'live', hooksReady: true, hookNames: ['__game', '__dice', '__bets', '__progressives', '__test', '__contract'], buildId: 'bubble-craps-v1' }) };
render();
