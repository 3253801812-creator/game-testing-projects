import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AIPlayer } from './game/AIPlayer';
import { GameBoard } from './game/GameBoard';
import { FLEET_SPEC, Orientation, coordOf } from './game/contracts';
import { ThreeBattlefield } from './scene/ThreeBattlefield';

const DEFAULT_API_KEY = 'your-openrouter-api-key-here';

function safeGet(key: string) { try { return localStorage.getItem(key) || ''; } catch { return ''; } }
function safeSet(key: string, value: string) { try { localStorage.setItem(key, value); return true; } catch { return false; } }
function safeRemove(key: string) { try { localStorage.removeItem(key); return true; } catch { return false; } }

type PlacementState = {
  selectedShipId: string | null;
  orientation: Orientation;
  draggingShipId: string | null;
  previewCells: Array<{ row: number; col: number }>;
  previewValid: boolean;
  invalidReason: string | null;
  lastPlacementResult: object | null;
};

type GameRuntime = {
  ready: boolean;
  phase: 'setup' | 'playing' | 'ended';
  turn: 'human' | 'ai' | null;
  inputLocked: boolean;
  winner: 'human' | 'ai' | null;
  sessionId: string;
  humanAttackCount: number;
  aiAttackCount: number;
  statusMessage: string;
  lastAction: null | { actor: string; row: number; col: number; coordinate: string; result: string | null; shipId: string | null };
  apiStatus: string;
};

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<ThreeBattlefield | null>(null);
  const playerBoardRef = useRef(new GameBoard('player', { x: -6.2, y: 0, z: 0 }));
  const enemyBoardRef = useRef(new GameBoard('enemy', { x: 6.2, y: 0, z: 0 }));
  const aiRef = useRef(new AIPlayer());
  const [tick, setTick] = useState(0);
  const force = () => setTick((v) => v + 1);
  const placementRef = useRef<PlacementState>({
    selectedShipId: FLEET_SPEC[0].id,
    orientation: 'horizontal',
    draggingShipId: null,
    previewCells: [],
    previewValid: false,
    invalidReason: null,
    lastPlacementResult: null,
  });
  const gameRef = useRef<GameRuntime>({
    ready: false,
    phase: 'setup',
    turn: null,
    inputLocked: false,
    winner: null,
    sessionId: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    humanAttackCount: 0,
    aiAttackCount: 0,
    statusMessage: '正在初始化 3D 海域…',
    lastAction: null,
    apiStatus: 'AI：本地公平策略（未配置 OpenRouter 密钥）',
  });
  const [apiInput, setApiInput] = useState(() => safeGet('battleship-openrouter-key'));
  const [startupError, setStartupError] = useState<string | null>(null);

  const canConfirm = useMemo(() => playerBoardRef.current.ships.every((s) => s.confirmed), [tick]);

  const placementState = () => {
    const p = placementRef.current;
    const ships = playerBoardRef.current.ships;
    const placed = ships.filter((s) => s.confirmed).map((s) => s.id);
    return {
      selectedShipId: p.selectedShipId,
      orientation: p.orientation,
      draggingShipId: p.draggingShipId,
      placedShipIds: placed,
      remainingShipIds: ships.filter((s) => !s.confirmed).map((s) => s.id),
      previewCells: p.previewCells.map((c) => ({ ...c })),
      previewValid: p.previewValid,
      invalidReason: p.invalidReason,
      canConfirm: placed.length === FLEET_SPEC.length,
      lastPlacementResult: p.lastPlacementResult,
    };
  };

  const gameState = () => {
    const g = gameRef.current;
    return {
      ready: g.ready,
      phase: g.phase,
      turn: g.turn,
      inputLocked: g.inputLocked,
      winner: g.winner,
      sessionId: g.sessionId,
      fleetSpec: FLEET_SPEC.map((x) => ({ ...x })),
      humanAttackCount: g.humanAttackCount,
      aiAttackCount: g.aiAttackCount,
      statusMessage: g.statusMessage,
      lastAction: g.lastAction ? { ...g.lastAction } : null,
      apiStatus: g.apiStatus,
      pendingAIRequests: aiRef.current.pendingRequestCount,
      frameCount: sceneRef.current?.frameCount ?? 0,
    };
  };

  useEffect(() => {
    const saved = safeGet('battleship-openrouter-key') || DEFAULT_API_KEY;
    aiRef.current.setApiKey(saved);
    if (aiRef.current.apiConfigured) gameRef.current.apiStatus = 'AI：OpenRouter 已配置';
    enemyBoardRef.current.randomize();

    if (!canvasRef.current) return;
    let battlefield: ThreeBattlefield | null = null;
    try {
      battlefield = new ThreeBattlefield(canvasRef.current);
      sceneRef.current = battlefield;
      gameRef.current.ready = true;
      gameRef.current.statusMessage = '部署舰队：选择舰船，点击己方海域放置；按 R 旋转。';
      battlefield.onCellHover = (owner, row, col) => {
        if (gameRef.current.phase !== 'setup' || owner !== 'player') return;
        previewPlacement(row, col);
      };
      battlefield.onCellClick = (owner, row, col) => {
        if (gameRef.current.phase === 'setup' && owner === 'player') placeSelected(row, col);
        else if (gameRef.current.phase === 'playing' && owner === 'enemy') void humanAttack(row, col);
      };
      battlefield.onDropCell = (owner, row, col) => {
        if (owner === 'player' && gameRef.current.phase === 'setup') placeSelected(row, col);
        placementRef.current.draggingShipId = null;
        force();
      };
      exposeDebugInterfaces();
      force();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setStartupError(message);
      gameRef.current.ready = false;
      gameRef.current.statusMessage = message;
      exposeDebugInterfaces();
      force();
    }

    const keyHandler = (ev: KeyboardEvent) => {
      if (ev.key.toLowerCase() === 'r' && gameRef.current.phase === 'setup') rotatePlacement();
    };
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
      battlefield?.dispose();
      if (sceneRef.current === battlefield) sceneRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function exposeDebugInterfaces() {
    window.__game = { getState: gameState };
    window.__playerBoard = { getState: () => playerBoardRef.current.getState() };
    window.__enemyBoard = { getState: () => enemyBoardRef.current.getState() };
    window.__placement = { getState: placementState };
    window.__aiPlayer = { getState: () => aiRef.current.getState() };
    window.__effects = { getState: () => sceneRef.current?.getEffectsState() ?? { activeEffects: [], markers: [], sinkAnimations: [], endEffects: [] } };
    window.__three = { getState: () => sceneRef.current?.getThreeState() ?? { frameCount: 0, canvas: canvasRef.current, camera: null, controls: null, boardGroups: {}, lights: [], objectCount: 0 } };
    window.__scene = sceneRef.current?.scene ?? null;
    window.__camera = sceneRef.current?.camera ?? null;
    window.__renderer = sceneRef.current?.renderer ?? null;
  }

  function selectShip(id: string) {
    placementRef.current.selectedShipId = id;
    gameRef.current.statusMessage = `已选择 ${playerBoardRef.current.ship(id).name}，点击己方海域放置。`;
    force();
  }

  function rotatePlacement() {
    const p = placementRef.current;
    p.orientation = p.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    p.previewCells = [];
    sceneRef.current?.clearPreview('player');
    gameRef.current.statusMessage = `方向已切换为${p.orientation === 'horizontal' ? '水平' : '垂直'}。`;
    force();
  }

  function previewPlacement(row: number, col: number) {
    const id = placementRef.current.draggingShipId || placementRef.current.selectedShipId;
    if (!id) return;
    const result = playerBoardRef.current.canPlace(id, row, col, placementRef.current.orientation);
    placementRef.current.previewCells = result.ok ? result.cells : buildPotentialCells(id, row, col, placementRef.current.orientation);
    placementRef.current.previewValid = result.ok;
    placementRef.current.invalidReason = result.reason;
    sceneRef.current?.setPreview('player', placementRef.current.previewCells, result.ok);
  }

  function buildPotentialCells(id: string, row: number, col: number, orientation: Orientation) {
    const len = playerBoardRef.current.ship(id).length;
    const out: Array<{ row: number; col: number }> = [];
    for (let i = 0; i < len; i++) {
      const r = row + (orientation === 'vertical' ? i : 0);
      const c = col + (orientation === 'horizontal' ? i : 0);
      if (r >= 0 && r < 10 && c >= 0 && c < 10) out.push({ row: r, col: c });
    }
    return out;
  }

  function placeSelected(row: number, col: number) {
    const id = placementRef.current.draggingShipId || placementRef.current.selectedShipId;
    if (!id) return;
    const result = playerBoardRef.current.placeShip(id, row, col, placementRef.current.orientation);
    placementRef.current.lastPlacementResult = { shipId: id, row, col, orientation: placementRef.current.orientation, ok: result.ok, reason: result.reason };
    placementRef.current.previewCells = result.ok ? result.cells : [];
    placementRef.current.previewValid = result.ok;
    placementRef.current.invalidReason = result.reason;
    sceneRef.current?.clearShips('player');
    sceneRef.current?.syncShips(playerBoardRef.current);
    if (result.ok) {
      const remaining = playerBoardRef.current.ships.find((s) => !s.confirmed);
      placementRef.current.selectedShipId = remaining?.id ?? id;
      gameRef.current.statusMessage = remaining ? `${playerBoardRef.current.ship(id).name} 已部署。继续放置 ${remaining.name}。` : '舰队部署完成，可确认开战。';
      playTone(420, 0.06);
    } else {
      gameRef.current.statusMessage = result.reason || '无效放置';
      playTone(150, 0.08);
    }
    force();
  }

  function randomizePlayer() {
    playerBoardRef.current.randomize();
    sceneRef.current?.clearShips('player');
    sceneRef.current?.syncShips(playerBoardRef.current);
    placementRef.current.selectedShipId = FLEET_SPEC[0].id;
    placementRef.current.previewCells = [];
    placementRef.current.previewValid = false;
    placementRef.current.invalidReason = null;
    placementRef.current.lastPlacementResult = { randomize: true, ok: true };
    gameRef.current.statusMessage = '已随机部署全部舰船，可继续微调或确认开战。';
    force();
  }

  function confirmPlacement() {
    if (!playerBoardRef.current.ships.every((s) => s.confirmed)) {
      gameRef.current.statusMessage = '请先部署全部 5 艘舰船。';
      force();
      return;
    }
    sceneRef.current?.clearPreview('player');
    gameRef.current.phase = 'playing';
    gameRef.current.turn = 'human';
    gameRef.current.inputLocked = false;
    gameRef.current.statusMessage = '战斗开始。点击敌方海域选择攻击坐标。';
    sceneRef.current?.syncShips(playerBoardRef.current);
    force();
  }

  async function humanAttack(row: number, col: number) {
    const g = gameRef.current;
    if (g.phase !== 'playing' || g.turn !== 'human' || g.inputLocked) return;
    if (enemyBoardRef.current.cell(row, col).attacked) {
      g.statusMessage = `${coordOf(row, col)} 已攻击过，请选择其他坐标。`;
      playTone(120, 0.08);
      force();
      return;
    }
    g.inputLocked = true;
    const attack = enemyBoardRef.current.attack(row, col);
    if (!attack.valid || !attack.result) { g.inputLocked = false; force(); return; }
    g.humanAttackCount++;
    g.lastAction = { actor: 'human', row, col, coordinate: coordOf(row, col), result: attack.result, shipId: attack.sunkShip ? attack.shipId : null };
    sceneRef.current?.markAttack(enemyBoardRef.current, row, col, attack.result, attack.shipId);
    if (attack.sunkShip) sceneRef.current?.syncShips(enemyBoardRef.current);
    g.statusMessage = formatAttackMessage('你', coordOf(row, col), attack.result, attack.sunkShip?.name);
    playAttackSound(attack.result);
    if (enemyBoardRef.current.allSunk()) { endGame('human'); return; }
    g.turn = 'ai';
    g.apiStatus = aiRef.current.apiConfigured ? 'AI：正在请求 OpenRouter 决策…' : 'AI：使用本地公平狩猎策略';
    force();
    await delay(520);
    await performAITurn(g.sessionId);
  }

  async function performAITurn(sessionId: string) {
    const g = gameRef.current;
    if (g.phase !== 'playing' || sessionId !== g.sessionId) return;
    const move = await aiRef.current.chooseAttack(sessionId);
    if (g.phase !== 'playing' || sessionId !== g.sessionId) return;
    g.apiStatus = aiRef.current.lastDecisionSource === 'openrouter' ? 'AI：OpenRouter 决策完成' : `AI：${aiRef.current.lastDecisionSource || '本地回退'}`;
    const attack = playerBoardRef.current.attack(move.row, move.col);
    if (!attack.valid || !attack.result) {
      g.statusMessage = 'AI 产生重复坐标，已自动重试。';
      aiRef.current.lastError = 'AI duplicate coordinate after validation';
      await performAITurn(sessionId);
      return;
    }
    g.aiAttackCount++;
    aiRef.current.recordResult(move.row, move.col, attack.result, attack.sunkShip?.name);
    g.lastAction = { actor: 'ai', row: move.row, col: move.col, coordinate: coordOf(move.row, move.col), result: attack.result, shipId: attack.shipId };
    sceneRef.current?.markAttack(playerBoardRef.current, move.row, move.col, attack.result, attack.shipId);
    g.statusMessage = formatAttackMessage('AI', coordOf(move.row, move.col), attack.result, attack.sunkShip?.name);
    playAttackSound(attack.result);
    if (playerBoardRef.current.allSunk()) { endGame('ai'); return; }
    await delay(340);
    g.turn = 'human';
    g.inputLocked = false;
    g.statusMessage += ' 你的回合。';
    force();
  }

  function endGame(winner: 'human' | 'ai') {
    const g = gameRef.current;
    g.phase = 'ended'; g.turn = null; g.inputLocked = true; g.winner = winner;
    g.statusMessage = winner === 'human' ? '你赢了！敌方舰队已全部击沉。' : 'AI 赢了！你的舰队已全部沉没。';
    g.apiStatus = '战斗已结束';
    sceneRef.current?.celebrate();
    force();
  }

  function saveApiKey() {
    const key = apiInput.trim();
    if (key) safeSet('battleship-openrouter-key', key); else safeRemove('battleship-openrouter-key');
    aiRef.current.setApiKey(key || DEFAULT_API_KEY);
    gameRef.current.apiStatus = aiRef.current.apiConfigured ? 'AI：OpenRouter 已配置' : 'AI：本地公平策略（未配置 OpenRouter 密钥）';
    force();
  }

  function restart() {
    window.location.reload();
  }

  const g = gameRef.current;
  const p = placementRef.current;
  const playerRemaining = playerBoardRef.current.ships.filter((s) => !s.sunk).length;
  const enemyRemaining = enemyBoardRef.current.ships.filter((s) => !s.sunk).length;

  return (
    <div className="app-shell">
      <canvas id="game" ref={canvasRef} aria-label="3D 战舰战场" />

      <div id="hud" className="hud glass-panel">
        <div className="brand-row">
          <div>
            <p className="eyebrow">BLACKTIDE CIC // LIVE</p>
            <h1>黑潮作战情报中心</h1>
          </div>
          <div className={`turn-pill ${g.turn === 'human' ? 'active' : ''}`} data-testid="turn-indicator">
            {g.phase === 'setup' ? '部署阶段' : g.phase === 'ended' ? '战斗结束' : g.turn === 'human' ? '你的回合' : 'AI 思考中'}
          </div>
        </div>
        <div className="status-line" data-testid="status-message">{g.statusMessage}</div>
        <div className="fleet-bars">
          <span>己方舰艇 <b>{playerRemaining}/5</b></span>
          <span>敌方舰艇 <b>{enemyRemaining}/5</b></span>
          <span>攻击 <b>{g.humanAttackCount}:{g.aiAttackCount}</b></span>
        </div>
        <div className="api-line" data-testid="api-status">{g.apiStatus}</div>
      </div>

      <div className="board-label player-label" data-testid="player-board-label">己方海域 // PLAYER GRID</div>
      <div className="board-label enemy-label" data-testid="enemy-board-label">敌方海域 // TARGET GRID</div>

      <aside id="placementPanel" className={`placement glass-panel ${g.phase !== 'setup' ? 'compact' : ''}`}>
        {g.phase === 'setup' ? (
          <>
            <div className="panel-heading">
              <span>舰队部署</span>
              <span className="orientation" data-testid="orientation-indicator">{p.orientation === 'horizontal' ? '水平 H' : '垂直 V'}</span>
            </div>
            <p className="hint">选择舰船后点击左侧己方海域。也可拖动舰船条目到网格。按 R 旋转。</p>
            <div className="ship-list" data-testid="ship-list">
              {FLEET_SPEC.map((spec) => {
                const ship = playerBoardRef.current.ship(spec.id);
                const active = p.selectedShipId === spec.id;
                return (
                  <button
                    key={spec.id}
                    data-testid="ship-item"
                    draggable
                    onDragStart={() => { placementRef.current.draggingShipId = spec.id; placementRef.current.selectedShipId = spec.id; force(); }}
                    onDragEnd={() => { placementRef.current.draggingShipId = null; force(); }}
                    onClick={() => selectShip(spec.id)}
                    className={`ship-item ${active ? 'selected' : ''} ${ship.confirmed ? 'placed' : ''}`}
                  >
                    <span><b>{spec.name}</b><small>{spec.type.toUpperCase()}</small></span>
                    <span className="ship-length">{'▰'.repeat(spec.length)}</span>
                  </button>
                );
              })}
            </div>
            <div className="placement-actions">
              <button className="secondary" data-testid="rotate-btn" onClick={rotatePlacement}>旋转 R</button>
              <button className="secondary" data-testid="randomize-placement" onClick={randomizePlayer}>随机部署</button>
              <button className="primary" data-testid="confirm-placement" disabled={!canConfirm} onClick={confirmPlacement}>确认开战</button>
            </div>
            {p.invalidReason && <div className="warning">{p.invalidReason}</div>}
          </>
        ) : (
          <>
            <div className="panel-heading"><span>AI 智能体</span><span className="orientation">HORIZON</span></div>
            <p className="hint">模型：openrouter/horizon-beta。密钥仅保存在本机浏览器 localStorage；未配置或 API 失败时自动使用公平本地策略。</p>
            <input className="api-input" type="password" value={apiInput} onChange={(e) => setApiInput(e.target.value)} placeholder="OpenRouter API Key" />
            <button className="secondary wide" onClick={saveApiKey}>保存 API 密钥</button>
            <div className="intel-grid">
              <span>模式 <b>{aiRef.current.mode().toUpperCase()}</b></span>
              <span>回退 <b>{aiRef.current.fallbackCount}</b></span>
              <span>已知命中 <b>{aiRef.current.knownHits.size}</b></span>
              <span>已知未中 <b>{aiRef.current.knownMisses.size}</b></span>
            </div>
          </>
        )}
      </aside>

      <button className="restart-corner" data-testid="restart-btn" onClick={restart}>重新开始</button>

      <div id="gameOverModal" className={`modal-backdrop ${g.phase === 'ended' ? 'show' : ''}`} aria-hidden={g.phase !== 'ended'}>
        <div className="modal-card">
          <p className="eyebrow">ENGAGEMENT COMPLETE</p>
          <h2>{g.winner === 'human' ? '任务成功' : '舰队失联'}</h2>
          <p>{g.statusMessage}</p>
          <div className="result-stats"><span>你的攻击 {g.humanAttackCount}</span><span>AI 攻击 {g.aiAttackCount}</span></div>
          <button className="primary" onClick={restart}>再次出航</button>
        </div>
      </div>

      {startupError && (
        <div className="startup-error">
          <div className="modal-card">
            <p className="eyebrow">BOOT FAILURE</p>
            <h2>3D 引擎启动失败</h2>
            <p>{startupError}</p>
            <p className="hint">请确认浏览器支持 WebGL，并允许加载 Three.js CDN。</p>
            <button className="primary" onClick={restart}>重新加载</button>
          </div>
        </div>
      )}
    </div>
  );
}

function formatAttackMessage(actor: string, coordinate: string, result: string, sunk?: string) {
  if (result === 'miss') return `${actor}攻击 ${coordinate}：未命中。`;
  if (result === 'sunk') return `${actor}攻击 ${coordinate}：击沉${sunk ? ` ${sunk}` : '舰船'}！`;
  return `${actor}攻击 ${coordinate}：命中！`;
}

function delay(ms: number) { return new Promise((resolve) => setTimeout(resolve, ms)); }

function playTone(freq: number, duration: number) {
  try {
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq; gain.gain.value = 0.035;
    osc.connect(gain); gain.connect(ctx.destination); osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration);
  } catch { /* 音频为可选增强 */ }
}

function playAttackSound(result: string) {
  if (result === 'miss') playTone(230, 0.11);
  else if (result === 'sunk') { playTone(95, 0.25); setTimeout(() => playTone(62, 0.3), 120); }
  else playTone(115, 0.16);
}

export default App;
