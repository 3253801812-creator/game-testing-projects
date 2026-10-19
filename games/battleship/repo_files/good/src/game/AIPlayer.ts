import { fromCoordinate, toCoordinate, type CellCoord } from './contracts';

type PublicResult = { coordinate: string; result: 'hit' | 'miss' | 'sunk'; sunkShipName?: string | null };

const ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'openrouter/horizon-beta';

export class AIPlayer {
  mode: 'hunt' | 'target' | 'kill' = 'hunt';
  knownHits: string[] = [];
  knownMisses: string[] = [];
  sunkShips: string[] = [];
  targetQueue: string[] = [];
  attackHistory: string[] = [];
  knowledgeBoard: string[][] = Array.from({ length: 10 }, () => Array(10).fill('unknown'));
  lastPrompt = '';
  lastRawResponse: string | null = null;
  lastChosenCoordinate: string | null = null;
  lastDecisionSource: string | null = null;
  lastError: string | null = null;
  fallbackCount = 0;
  apiKey = 'your-openrouter-api-key-here';
  apiConfigured = false;
  useApi = true;
  requestTimeoutMs = 9000;
  pendingRequestCount = 0;
  activeSessionId: string | number = '';

  configure(config: { apiKey?: string; timeoutMs?: number; enabled?: boolean; useApi?: boolean } = {}) {
    if (typeof config.apiKey === 'string') this.apiKey = config.apiKey;
    if (typeof config.timeoutMs === 'number' && config.timeoutMs > 0) this.requestTimeoutMs = config.timeoutMs;
    if (typeof config.useApi === 'boolean') this.useApi = config.useApi;
    if (typeof config.enabled === 'boolean') this.useApi = config.enabled;
    this.apiConfigured = this.useApi && !!this.apiKey && this.apiKey !== 'your-openrouter-api-key-here';
    return this.getState();
  }

  reset(sessionId: string | number) {
    this.mode = 'hunt'; this.knownHits = []; this.knownMisses = []; this.sunkShips = []; this.targetQueue = [];
    this.attackHistory = []; this.knowledgeBoard = Array.from({ length: 10 }, () => Array(10).fill('unknown'));
    this.lastPrompt = ''; this.lastRawResponse = null; this.lastChosenCoordinate = null;
    this.lastDecisionSource = null; this.lastError = null; this.fallbackCount = 0; this.pendingRequestCount = 0;
    this.activeSessionId = sessionId;
  }

  noteResult(result: PublicResult) {
    const cell = fromCoordinate(result.coordinate);
    if (!cell) return;
    if (result.result === 'miss') {
      this.knownMisses.push(result.coordinate);
      this.knowledgeBoard[cell.row][cell.col] = 'miss';
    } else {
      this.knownHits.push(result.coordinate);
      this.knowledgeBoard[cell.row][cell.col] = result.result;
      if (result.result === 'sunk' && result.sunkShipName) this.sunkShips.push(result.sunkShipName);
      this.addNeighbors(cell);
    }
    if (result.result === 'sunk') {
      this.targetQueue = this.targetQueue.filter(c => !this.attackHistory.includes(c));
    }
    this.mode = this.targetQueue.length ? (this.knownHits.length >= 2 ? 'kill' : 'target') : 'hunt';
  }

  addNeighbors(cell: CellCoord) {
    const neighbors = [
      { row: cell.row - 1, col: cell.col }, { row: cell.row + 1, col: cell.col },
      { row: cell.row, col: cell.col - 1 }, { row: cell.row, col: cell.col + 1 }
    ].filter(c => c.row >= 0 && c.row < 10 && c.col >= 0 && c.col < 10)
      .map(toCoordinate).filter(c => !this.attackHistory.includes(c));
    this.targetQueue = [...new Set([...neighbors, ...this.targetQueue])];
  }

  buildPrompt() {
    return `你是一个公平的战舰AI智能体。棋盘10x10，行A-J，列1-10。你不能知道或推断任何未通过攻击公开的隐藏舰位。\n目标：选择一个尚未攻击的坐标，高效击沉人类舰队。优先规则：若有已知命中，攻击其上下左右相邻未攻击格；否则采用棋盘狩猎。\n已命中：${this.knownHits.join(',') || '无'}\n已未命中：${this.knownMisses.join(',') || '无'}\n已击沉：${this.sunkShips.join(',') || '无'}\n已攻击：${this.attackHistory.join(',') || '无'}\n只给出下一次攻击坐标并可附一句简短理由，例如 A5。`;
  }

  isAvailable(coord: string) {
    return !!fromCoordinate(coord) && !this.attackHistory.includes(coord);
  }

  localMove() {
    while (this.targetQueue.length) {
      const c = this.targetQueue.shift()!;
      if (this.isAvailable(c)) return c;
    }
    const candidates: string[] = [];
    for (let row = 0; row < 10; row++) for (let col = 0; col < 10; col++) {
      const c = toCoordinate({ row, col });
      if (!this.attackHistory.includes(c) && (row + col) % 2 === 0) candidates.push(c);
    }
    if (!candidates.length) {
      for (let row = 0; row < 10; row++) for (let col = 0; col < 10; col++) {
        const c = toCoordinate({ row, col }); if (!this.attackHistory.includes(c)) candidates.push(c);
      }
    }
    return candidates[Math.floor(Math.random() * candidates.length)] || 'A1';
  }

  async chooseMove(sessionId: string | number, onStatus?: (s: string) => void) {
    this.activeSessionId = sessionId;
    this.lastPrompt = this.buildPrompt();
    this.lastError = null;
    if (!this.apiConfigured || !this.useApi) return this.commitFallback('API 密钥未配置', onStatus);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.requestTimeoutMs);
    this.pendingRequestCount++;
    onStatus?.('正在请求 OpenRouter AI…');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: MODEL, messages: [{ role: 'user', content: this.lastPrompt }], temperature: 0.2 }),
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const text = String(data?.choices?.[0]?.message?.content || '');
      this.lastRawResponse = text;
      const match = text.toUpperCase().match(/\b([A-J](?:10|[1-9]))\b/);
      const coord = match?.[1] || '';
      if (!this.isAvailable(coord)) throw new Error('API 返回了无效或重复坐标');
      this.lastChosenCoordinate = coord;
      this.lastDecisionSource = 'openrouter';
      onStatus?.('OpenRouter 决策完成');
      return coord;
    } catch (error) {
      return this.commitFallback(error instanceof Error ? error.message : String(error), onStatus);
    } finally {
      clearTimeout(timer);
      this.pendingRequestCount = Math.max(0, this.pendingRequestCount - 1);
    }
  }

  commitFallback(reason: string, onStatus?: (s: string) => void) {
    this.lastError = reason;
    this.fallbackCount++;
    const coord = this.localMove();
    this.lastChosenCoordinate = coord;
    this.lastDecisionSource = 'fallback';
    onStatus?.(`本地战术 AI 接管：${reason}`);
    return coord;
  }

  commitAttack(coord: string) {
    if (!this.attackHistory.includes(coord)) this.attackHistory.push(coord);
  }

  getState() {
    return {
      mode: this.mode,
      knownHits: [...this.knownHits], knownMisses: [...this.knownMisses], sunkShips: [...this.sunkShips],
      targetQueue: [...this.targetQueue], attackHistory: [...this.attackHistory],
      knowledgeBoard: this.knowledgeBoard.map(r => [...r]), lastPrompt: this.lastPrompt,
      lastRawResponse: this.lastRawResponse, lastChosenCoordinate: this.lastChosenCoordinate,
      lastDecisionSource: this.lastDecisionSource, lastError: this.lastError, fallbackCount: this.fallbackCount,
      apiConfigured: this.apiConfigured, requestTimeoutMs: this.requestTimeoutMs,
      pendingRequestCount: this.pendingRequestCount, activeSessionId: this.activeSessionId
    };
  }
}
