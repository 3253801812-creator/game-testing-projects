import { AttackResult, coordOf, parseCoord } from './contracts';

export class AIPlayer {
  knownHits = new Set<string>();
  knownMisses = new Set<string>();
  sunkShips: string[] = [];
  targetQueue: string[] = [];
  attackHistory: string[] = [];
  lastPrompt = '';
  lastRawResponse: string | null = null;
  lastChosenCoordinate: string | null = null;
  lastDecisionSource: string | null = null;
  lastError: string | null = null;
  fallbackCount = 0;
  requestTimeoutMs = 7000;
  pendingRequestCount = 0;
  activeSessionId: string | number = '';
  apiConfigured = false;
  useApi = true;
  apiKey = '';

  setApiKey(key: string) {
    this.apiKey = key.trim();
    this.apiConfigured = Boolean(this.apiKey && !this.apiKey.includes('your-openrouter'));
  }

  mode(): 'hunt' | 'target' | 'kill' {
    if (this.targetQueue.length >= 2) return 'kill';
    if (this.targetQueue.length) return 'target';
    return 'hunt';
  }

  knowledgeBoard() {
    const grid = Array.from({ length: 10 }, () => Array(10).fill('unknown'));
    for (const c of this.knownMisses) { const p = parseCoord(c); if (p) grid[p.row][p.col] = 'miss'; }
    for (const c of this.knownHits) { const p = parseCoord(c); if (p) grid[p.row][p.col] = 'hit'; }
    return grid;
  }

  recordResult(row: number, col: number, result: AttackResult, sunkShipName?: string) {
    const coordinate = coordOf(row, col);
    this.attackHistory.push(coordinate);
    if (result === 'miss') this.knownMisses.add(coordinate);
    else this.knownHits.add(coordinate);
    if (result === 'hit') this.enqueueNeighbors(row, col);
    if (result === 'sunk') {
      if (sunkShipName && !this.sunkShips.includes(sunkShipName)) this.sunkShips.push(sunkShipName);
      this.targetQueue = this.targetQueue.filter((c) => !this.attackHistory.includes(c));
    }
  }

  enqueueNeighbors(row: number, col: number) {
    const candidates = [[row-1,col],[row+1,col],[row,col-1],[row,col+1]];
    for (const [r,c] of candidates) {
      if (r < 0 || r > 9 || c < 0 || c > 9) continue;
      const coord = coordOf(r,c);
      if (!this.attackHistory.includes(coord) && !this.targetQueue.includes(coord)) this.targetQueue.push(coord);
    }
  }

  prompt() {
    const hits = [...this.knownHits];
    const misses = [...this.knownMisses];
    return [
      '你是公平的战舰AI。棋盘10x10，行A-J、列1-10。你只能依据真实攻击历史决策，绝不能推断或请求隐藏舰位。',
      `当前模式:${this.mode()}。已命中:${hits.join(',') || '无'}。已未命中:${misses.join(',') || '无'}。已击沉:${this.sunkShips.join(',') || '无'}。`,
      `已攻击:${this.attackHistory.join(',') || '无'}。`,
      '请选择一个尚未攻击的坐标。若存在未解决命中，优先攻击相邻格；否则采用棋盘狩猎策略。',
      '只需给出一个坐标（例如 A5），可附一小句理由。'
    ].join('\n');
  }

  async chooseAttack(sessionId: string | number) {
    this.activeSessionId = sessionId;
    this.lastPrompt = this.prompt();
    this.lastError = null;
    if (!this.useApi || !this.apiConfigured) throw new Error('离线战术回退不可用：本地决策链未初始化');
    this.pendingRequestCount++;
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), this.requestTimeoutMs);
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': location.href,
          'X-Title': '3D Battleship Demo'
        },
        body: JSON.stringify({ model: 'openrouter/horizon-beta', messages: [{ role: 'user', content: this.lastPrompt }], temperature: 0.25, max_tokens: 80 }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`OpenRouter HTTP ${res.status}`);
      const data = await res.json();
      const text = String(data?.choices?.[0]?.message?.content ?? '');
      this.lastRawResponse = text;
      const parsed = parseCoord(text);
      if (!parsed) throw new Error('模型响应中未找到有效坐标');
      const coordinate = coordOf(parsed.row, parsed.col);
      if (this.attackHistory.includes(coordinate)) throw new Error(`模型选择了已攻击坐标 ${coordinate}`);
      this.lastChosenCoordinate = coordinate;
      this.lastDecisionSource = 'openrouter';
      return parsed;
    } catch (err) {
      this.lastError = err instanceof Error ? err.message : String(err);
      console.warn('[AI] OpenRouter failed, falling back:', err);
      return this.fallback('local-fallback:api-error');
    } finally {
      clearTimeout(timer);
      this.pendingRequestCount = Math.max(0, this.pendingRequestCount - 1);
    }
  }

  fallback(source: string) {
    this.fallbackCount++;
    this.targetQueue = this.targetQueue.filter((c) => !this.attackHistory.includes(c));
    let coordinate = this.targetQueue.shift() || '';
    if (!coordinate) {
      const candidates: string[] = [];
      for (let r = 0; r < 10; r++) for (let c = 0; c < 10; c++) {
        const co = coordOf(r,c);
        if (!this.attackHistory.includes(co) && (r + c) % 2 === 0) candidates.push(co);
      }
      if (!candidates.length) for (let r = 0; r < 10; r++) for (let c = 0; c < 10; c++) {
        const co = coordOf(r,c); if (!this.attackHistory.includes(co)) candidates.push(co);
      }
      coordinate = candidates[Math.floor(Math.random() * candidates.length)];
    }
    const parsed = parseCoord(coordinate)!;
    this.lastChosenCoordinate = coordinate;
    this.lastDecisionSource = source;
    return parsed;
  }

  getState() {
    return {
      mode: this.mode(),
      knownHits: [...this.knownHits],
      knownMisses: [...this.knownMisses],
      sunkShips: [...this.sunkShips],
      targetQueue: [...this.targetQueue],
      attackHistory: [...this.attackHistory],
      knowledgeBoard: this.knowledgeBoard(),
      lastPrompt: this.lastPrompt,
      lastRawResponse: this.lastRawResponse,
      lastChosenCoordinate: this.lastChosenCoordinate,
      lastDecisionSource: this.lastDecisionSource,
      lastError: this.lastError,
      fallbackCount: this.fallbackCount,
      apiConfigured: this.apiConfigured,
      requestTimeoutMs: this.requestTimeoutMs,
      pendingRequestCount: this.pendingRequestCount,
      activeSessionId: this.activeSessionId,
    };
  }
}
