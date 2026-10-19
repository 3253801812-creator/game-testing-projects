import { AIPlayer } from './AIPlayer';
import { FLEET_SPEC, fromCoordinate, toCoordinate, type CellCoord, type Orientation, type Owner, type Phase, type Turn } from './contracts';
import { GameBoard } from './GameBoard';
import type { ThreeBattlefield } from '../scene/ThreeBattlefield';

export class BattleshipEngine {
  playerBoard = new GameBoard('player', { x: -4.5, y: 0, z: 0 }, 0.78);
  enemyBoard = new GameBoard('enemy', { x: 4.5, y: 0, z: 0 }, 0.78);
  aiPlayer = new AIPlayer();
  three: ThreeBattlefield | null = null;
  phase: Phase = 'setup';
  turn: Turn = null;
  inputLocked = false;
  winner: 'human' | 'ai' | null = null;
  sessionId: string | number = Date.now();
  humanAttackCount = 0;
  aiAttackCount = 0;
  statusMessage = '部署舰队：选择舰船并点击左侧海域。按 R 可旋转。';
  apiStatus = 'API 密钥未配置，将使用本地战术 AI';
  pendingAIRequests = 0;
  lastAction: null | { actor: 'human' | 'ai'; row: number; col: number; coordinate: string; result: string; shipId: string | null } = null;
  battleLog: Array<{ actor: 'human' | 'ai'; coordinate: string; result: string; message: string }> = [];
  audio = { muted: false, lastCue: null as string | null };
  onChange: () => void;
  placement = {
    selectedShipId: FLEET_SPEC[0].id as string | null,
    orientation: 'horizontal' as Orientation,
    draggingShipId: null as string | null,
    placedShipIds: [] as string[],
    remainingShipIds: FLEET_SPEC.map(s => s.id),
    previewCells: [] as CellCoord[],
    previewValid: false,
    invalidReason: null as string | null,
    canConfirm: false,
    lastPlacementResult: null as object | null
  };

  constructor(onChange: () => void) {
    this.onChange = onChange;
    this.aiPlayer.reset(this.sessionId);
    this.enemyBoard.randomizeFleet();
  }

  attachThree(three: ThreeBattlefield) {
    this.three = three;
    three.onCellHover = cell => this.handleHover(cell);
    three.onCellClick = cell => this.handleCellClick(cell);
    this.notify();
  }

  notify() { this.onChange(); }

  selectShip(shipId: string) {
    if (this.phase !== 'setup') return;
    this.placement.selectedShipId = shipId;
    this.placement.draggingShipId = null;
    this.placement.previewCells = [];
    this.three?.clearPreview();
    this.statusMessage = `已选择 ${this.playerBoard.ship(shipId)?.name || shipId}，点击左侧海域放置。`;
    this.notify();
  }

  rotate() {
    if (this.phase !== 'setup') return;
    this.placement.orientation = this.placement.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    this.statusMessage = `方向：${this.placement.orientation === 'horizontal' ? '水平' : '垂直'}`;
    if (this.three?.hovered?.owner === 'player') this.previewAt(this.three.hovered.row, this.three.hovered.col);
    this.notify();
  }

  handleHover(cell: { owner: 'player' | 'enemy'; row: number; col: number } | null) {
    if (this.phase !== 'setup' || !this.placement.selectedShipId || !cell || cell.owner !== 'player') {
      this.placement.draggingShipId = null;
      if (this.phase === 'setup') { this.placement.previewCells = []; this.placement.previewValid = false; this.three?.clearPreview(); }
      return;
    }
    this.placement.draggingShipId = this.placement.selectedShipId;
    this.previewAt(cell.row, cell.col);
  }

  previewAt(row: number, col: number) {
    const shipId = this.placement.selectedShipId;
    if (!shipId) return;
    const check = this.playerBoard.validatePlacement(shipId, { row, col }, this.placement.orientation);
    this.placement.previewCells = check.cells.map(c => ({ ...c }));
    this.placement.previewValid = check.valid;
    this.placement.invalidReason = check.reason;
    this.three?.setPreview(this.playerBoard, shipId, check.cells, check.valid);
  }

  handleCellClick(cell: { owner: 'player' | 'enemy'; row: number; col: number }) {
    if (this.inputLocked) return;
    if (this.phase === 'setup') {
      if (cell.owner !== 'player') { this.statusMessage = '部署阶段只能在左侧己方海域放置舰船。'; this.notify(); return; }
      this.placeSelected(cell.row, cell.col);
      return;
    }
    if (this.phase === 'playing' && this.turn === 'human') {
      if (cell.owner !== 'enemy') { this.statusMessage = '请点击右侧敌方海域发动攻击。'; this.notify(); return; }
      void this.humanAttack(cell.row, cell.col);
    }
  }

  placeSelected(row: number, col: number) {
    const shipId = this.placement.selectedShipId;
    if (!shipId) return;
    const result = this.playerBoard.placeShip(shipId, { row, col }, this.placement.orientation);
    this.placement.lastPlacementResult = { shipId, row, col, orientation: this.placement.orientation, ...result };
    if (!result.valid) {
      this.statusMessage = result.reason || '放置无效';
      this.notify(); return;
    }
    if (!this.placement.placedShipIds.includes(shipId)) this.placement.placedShipIds.push(shipId);
    this.placement.remainingShipIds = FLEET_SPEC.map(s => s.id).filter(id => !this.placement.placedShipIds.includes(id));
    this.placement.canConfirm = this.placement.remainingShipIds.length === 0;
    this.three?.syncPlayerShips(this.playerBoard);
    const next = this.placement.remainingShipIds[0] || null;
    this.placement.selectedShipId = next;
    this.placement.draggingShipId = null;
    this.placement.previewCells = [];
    this.placement.previewValid = false;
    this.three?.clearPreview();
    this.statusMessage = next ? `已部署。下一艘：${this.playerBoard.ship(next)?.name}` : '舰队部署完成，可以开始战斗。';
    this.notify();
  }

  randomizePlacement() {
    if (this.phase !== 'setup') return;
    this.playerBoard.randomizeFleet();
    this.placement.placedShipIds = FLEET_SPEC.map(s => s.id);
    this.placement.remainingShipIds = [];
    this.placement.selectedShipId = null;
    this.placement.draggingShipId = null;
    this.placement.previewCells = [];
    this.placement.previewValid = false;
    this.placement.canConfirm = true;
    this.placement.lastPlacementResult = { random: true, success: true };
    this.three?.syncPlayerShips(this.playerBoard);
    this.statusMessage = '已随机生成合法舰队布局。';
    this.notify();
  }

  confirmPlacement() {
    if (this.phase !== 'setup') return;
    if (!this.placement.canConfirm) { this.statusMessage = '请先部署全部 5 艘舰船。'; this.notify(); return; }
    this.phase = 'playing'; this.turn = 'human'; this.inputLocked = false;
    this.playerBoard.ships.forEach(s => { s.confirmed = true; });
    this.statusMessage = '战斗开始：点击右侧敌方海域开火。';
    this.notify();
  }

  async humanAttack(row: number, col: number) {
    const result = this.enemyBoard.attack(row, col);
    if (result.duplicate) { this.statusMessage = '该坐标已经攻击过。'; this.notify(); return; }
    this.humanAttackCount++;
    this.lastAction = { actor: 'human', row, col, coordinate: result.coordinate, result: result.result, shipId: result.shipId };
    this.three?.addMarker(this.enemyBoard, row, col, result.result);
    if (result.result === 'sunk' && result.shipId) this.three?.sinkShip(this.enemyBoard, result.shipId, true);
    if (this.enemyBoard.allSunk()) { this.finish('human'); return; }
    this.statusMessage = result.result === 'miss' ? `${result.coordinate} 未命中。AI 正在决策…` : `${result.coordinate} ${result.result === 'sunk' ? '击沉目标！' : '命中！'} AI 正在决策…`;
    this.turn = 'ai'; this.inputLocked = true; this.notify();
    await this.runAI();
  }

  async runAI() {
    const session = this.sessionId;
    this.pendingAIRequests++;
    try {
      const coord = await this.aiPlayer.chooseMove(session, status => { this.apiStatus = status; this.notify(); });
      if (this.sessionId !== session || this.phase !== 'playing') return;
      const parsed = fromCoordinate(coord);
      if (!parsed) throw new Error('AI 坐标解析失败');
      this.aiPlayer.commitAttack(coord);
      const result = this.playerBoard.attack(parsed.row, parsed.col);
      if (result.duplicate) throw new Error('AI 产生重复攻击');
      this.aiAttackCount++;
      const sunkName = result.result === 'sunk' && result.shipId ? this.playerBoard.ship(result.shipId)?.name || null : null;
      this.aiPlayer.noteResult({ coordinate: coord, result: result.result, sunkShipName: sunkName });
      this.lastAction = { actor: 'ai', row: parsed.row, col: parsed.col, coordinate: coord, result: result.result, shipId: result.shipId };
      this.three?.addMarker(this.playerBoard, parsed.row, parsed.col, result.result);
      if (result.result === 'sunk' && result.shipId) this.three?.sinkShip(this.playerBoard, result.shipId, false);
      if (this.playerBoard.allSunk()) { this.finish('ai'); return; }
      this.turn = 'human'; this.inputLocked = false;
      this.statusMessage = result.result === 'miss' ? `AI 攻击 ${coord}：未命中。轮到你。` : `AI 攻击 ${coord}：${result.result === 'sunk' ? '击沉我方舰船。' : '命中。'} 轮到你。`;
    } catch (error) {
      console.error('AI turn failed:', error);
      this.apiStatus = `AI 回合异常：${error instanceof Error ? error.message : String(error)}`;
      this.turn = 'human'; this.inputLocked = false; this.statusMessage = 'AI 回合出现异常，已将控制权交还玩家。';
    } finally {
      this.pendingAIRequests = Math.max(0, this.pendingAIRequests - 1); this.notify();
    }
  }

  finish(winner: 'human' | 'ai') {
    this.phase = 'ended'; this.turn = null; this.inputLocked = true; this.winner = winner;
    this.statusMessage = winner === 'human' ? '你赢了！敌方舰队已全部击沉。' : 'AI 赢了！我方舰队已全部失去战斗力。';
    this.three?.celebrate(); this.notify();
  }

  restart() {
    this.sessionId = Date.now();
    this.phase = 'setup'; this.turn = null; this.inputLocked = false; this.winner = null;
    this.humanAttackCount = 0; this.aiAttackCount = 0; this.lastAction = null; this.pendingAIRequests = 0; this.battleLog = []; this.audio.lastCue = null;
    this.playerBoard = new GameBoard('player', { x: -4.5, y: 0, z: 0 }, 0.78);
    this.enemyBoard = new GameBoard('enemy', { x: 4.5, y: 0, z: 0 }, 0.78); this.enemyBoard.randomizeFleet();
    this.aiPlayer.reset(this.sessionId);
    this.three?.resetVisuals();
    this.placement = {
      selectedShipId: FLEET_SPEC[0].id, orientation: 'horizontal', draggingShipId: null,
      placedShipIds: [], remainingShipIds: FLEET_SPEC.map(s => s.id), previewCells: [], previewValid: false,
      invalidReason: null, canConfirm: false, lastPlacementResult: null
    };
    this.apiStatus = this.aiPlayer.apiConfigured ? 'OpenRouter 已配置' : 'API 密钥未配置，将使用本地战术 AI';
    this.statusMessage = '部署舰队：选择舰船并点击左侧海域。按 R 可旋转。';
    this.notify();
  }


  setFleet(owner: Owner, placements: Array<{ shipId: string; row: number; col: number; orientation: Orientation }>) {
    if (this.phase !== 'setup') return { ok: false, reason: 'wrong_phase' };
    const board = owner === 'player' ? this.playerBoard : this.enemyBoard;
    board.cells.forEach(c => { c.shipId = null; c.attacked = false; c.result = null; c.markerObjectId = null; });
    board.attackHistory = [];
    board.ships.forEach(ship => { ship.orientation = null; ship.start = null; ship.cells = []; ship.hits.clear(); ship.sunk = false; ship.confirmed = false; ship.revealed = false; ship.meshObjectId = null; });
    for (const placement of placements) {
      const result = board.placeShip(placement.shipId, { row: placement.row, col: placement.col }, placement.orientation);
      if (!result.valid) return { ok: false, reason: result.reason || 'invalid_placement' };
    }
    board.ships.forEach(ship => { ship.confirmed = true; });
    if (owner === 'player') {
      this.placement.placedShipIds = FLEET_SPEC.map(s => s.id);
      this.placement.remainingShipIds = []; this.placement.canConfirm = true; this.placement.selectedShipId = null;
      this.three?.syncPlayerShips(board);
    }
    this.notify();
    return { ok: true };
  }

  testPlaceShip(shipId: string, row: number, col: number, orientation: Orientation) {
    if (this.phase !== 'setup') return { ok: false, reason: 'wrong_phase' };
    const result = this.playerBoard.placeShip(shipId, { row, col }, orientation);
    if (!result.valid) return { ok: false, reason: result.reason, cells: result.cells };
    if (!this.placement.placedShipIds.includes(shipId)) this.placement.placedShipIds.push(shipId);
    this.placement.remainingShipIds = FLEET_SPEC.map(s => s.id).filter(id => !this.placement.placedShipIds.includes(id));
    this.placement.canConfirm = this.placement.remainingShipIds.length === 0;
    this.placement.lastPlacementResult = { shipId, row, col, orientation, valid: true, cells: result.cells };
    this.three?.syncPlayerShips(this.playerBoard); this.notify();
    return { ok: true, cells: result.cells };
  }

  moveShip(shipId: string, row: number, col: number, orientation: Orientation) {
    return this.testPlaceShip(shipId, row, col, orientation);
  }

  rotateShip(shipId?: string) {
    if (this.phase !== 'setup') return { ok: false, reason: 'wrong_phase' };
    const id = shipId || this.placement.selectedShipId; if (!id) return { ok: false, reason: 'no_ship' };
    const ship = this.playerBoard.ship(id); if (!ship || !ship.start || !ship.orientation) { this.rotate(); return { ok: true }; }
    const next: Orientation = ship.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    const result = this.playerBoard.placeShip(id, ship.start, next);
    if (!result.valid) return { ok: false, reason: result.reason };
    this.placement.orientation = next; this.three?.syncPlayerShips(this.playerBoard); this.notify(); return { ok: true };
  }

  startBattle() {
    if (this.phase !== 'setup' || !this.placement.canConfirm) return { ok: false, reason: 'fleet_incomplete' };
    this.confirmPlacement(); return { ok: true };
  }

  testHumanAttack(row: number, col: number) {
    if (this.phase !== 'playing' || this.turn !== 'human' || this.inputLocked) return { ok: false, reason: 'wrong_turn' };
    if (row < 0 || row >= 10 || col < 0 || col >= 10) return { ok: false, reason: 'out_of_bounds' };
    const result = this.enemyBoard.attack(row, col); if (result.duplicate) return { ok: false, reason: 'already_attacked' };
    this.humanAttackCount++; this.lastAction = { actor: 'human', row, col, coordinate: result.coordinate, result: result.result, shipId: result.shipId };
    this.audio.lastCue = result.result; this.battleLog.push({ actor: 'human', coordinate: result.coordinate, result: result.result, message: `你攻击 ${result.coordinate}：${result.result}` });
    this.three?.addMarker(this.enemyBoard,row,col,result.result); if(result.result==='sunk'&&result.shipId)this.three?.sinkShip(this.enemyBoard,result.shipId,true);
    if(this.enemyBoard.allSunk()){this.finish('human'); return { ok:true, ...result };}
    this.turn='ai'; this.inputLocked=true; this.notify(); return { ok:true, ...result };
  }

  testAIAttack(row: number, col: number) {
    if (this.phase !== 'playing' || this.turn !== 'ai') return { ok: false, reason: 'wrong_turn' };
    if (row < 0 || row >= 10 || col < 0 || col >= 10) return { ok: false, reason: 'out_of_bounds' };
    const result=this.playerBoard.attack(row,col); if(result.duplicate)return {ok:false,reason:'already_attacked'};
    const coord=toCoordinate({row,col}); this.aiPlayer.commitAttack(coord); const sunkName=result.result==='sunk'&&result.shipId?this.playerBoard.ship(result.shipId)?.name||null:null;
    this.aiPlayer.noteResult({coordinate:coord,result:result.result,sunkShipName:sunkName}); this.aiAttackCount++;
    this.lastAction={actor:'ai',row,col,coordinate:coord,result:result.result,shipId:result.shipId}; this.audio.lastCue=result.result;
    this.battleLog.push({actor:'ai',coordinate:coord,result:result.result,message:`AI攻击 ${coord}：${result.result}`});
    this.three?.addMarker(this.playerBoard,row,col,result.result); if(result.result==='sunk'&&result.shipId)this.three?.sinkShip(this.playerBoard,result.shipId,false);
    if(this.playerBoard.allSunk()){this.finish('ai'); return {ok:true,...result};}
    this.turn='human'; this.inputLocked=false; this.notify(); return {ok:true,...result};
  }

  async requestAIMove() {
    if (this.phase !== 'playing' || this.turn !== 'ai') return { ok: false, reason: 'wrong_turn' };
    const coordinate=await this.aiPlayer.chooseMove(this.sessionId, s=>{this.apiStatus=s;this.notify();});
    const cell=fromCoordinate(coordinate); return cell ? { ok: true, coordinate, ...cell } : { ok: false, reason: 'invalid_coordinate' };
  }

  configureAI(config: any) { return this.aiPlayer.configure(config); }
  async waitForIdle(timeoutMs = 1200) { const end=Date.now()+timeoutMs; while(Date.now()<end){ if(this.pendingAIRequests===0&&this.aiPlayer.pendingRequestCount===0)return true; await new Promise(r=>setTimeout(r,20)); } return false; }
  toggleAudio() { this.audio.muted=!this.audio.muted; return { ...this.audio }; }
  getBattleLog() { return this.battleLog.map(entry=>({ ...entry })); }

  placementState() { return { ...this.placement, previewCells: this.placement.previewCells.map(c => ({ ...c })), placedShipIds: [...this.placement.placedShipIds], remainingShipIds: [...this.placement.remainingShipIds] }; }

  getState() {
    return {
      ready: !!this.three,
      phase: this.phase,
      turn: this.turn,
      inputLocked: this.inputLocked,
      winner: this.winner,
      sessionId: this.sessionId,
      fleetSpec: FLEET_SPEC.map(s => ({ ...s })),
      humanAttackCount: this.humanAttackCount,
      aiAttackCount: this.aiAttackCount,
      statusMessage: this.statusMessage,
      lastAction: this.lastAction ? { ...this.lastAction } : null,
      apiStatus: this.apiStatus,
      pendingAIRequests: this.pendingAIRequests,
      frameCount: this.three?.frameCount || 0,
      audio: { ...this.audio },
      battleLog: this.getBattleLog()
    };
  }
}
