#!/usr/bin/env python3
"""3D 战舰：固定 web_ut_harness 的确定性与视觉评测入口。"""
import json
import sys

from pathlib import Path

RUBRIC = json.loads((Path(__file__).with_name('mapping.json')).read_text(encoding='utf-8'))['rubrics']

PLAYER_FLEET = [
    {"shipId": "carrier", "row": 0, "col": 0, "orientation": "horizontal"},
    {"shipId": "battleship", "row": 2, "col": 0, "orientation": "horizontal"},
    {"shipId": "cruiser", "row": 4, "col": 0, "orientation": "horizontal"},
    {"shipId": "submarine", "row": 6, "col": 0, "orientation": "horizontal"},
    {"shipId": "destroyer", "row": 8, "col": 0, "orientation": "horizontal"},
]
ENEMY_FLEET = [
    {"shipId": "carrier", "row": 0, "col": 0, "orientation": "vertical"},
    {"shipId": "battleship", "row": 0, "col": 2, "orientation": "vertical"},
    {"shipId": "cruiser", "row": 0, "col": 4, "orientation": "vertical"},
    {"shipId": "submarine", "row": 0, "col": 6, "orientation": "vertical"},
    {"shipId": "destroyer", "row": 0, "col": 8, "orientation": "vertical"},
]

async def ev(page, expression, arg=None):
    if arg is None:
        return await page.evaluate(expression)
    return await page.evaluate(expression, arg)

async def reset_and_set(page, player=True, enemy=True, start=False):
    await ev(page, "() => window.__test.reset()")
    if player:
        await ev(page, "p => window.__test.setFleet('player', p)", PLAYER_FLEET)
    if enemy:
        await ev(page, "p => window.__test.setFleet('enemy', p)", ENEMY_FLEET)
    if start:
        return await ev(page, "() => window.__test.startBattle()")
    return None

async def advance_ai_turn(page):
    """使用正式 aiAttack 路径选择一个尚未攻击的空格，避免测试重复坐标卡住回合。"""
    return await ev(page, """() => {
      const board = window.__playerBoard.getState();
      const cell = board.cells.find(item => !item.attacked && !item.shipId);
      if (!cell) return {ok:false, reason:'no_safe_ai_cell'};
      return window.__test.aiAttack(cell.row, cell.col);
    }""")

async def advance_human_turn(page):
    """使用正式 playerAttack 路径选择一个尚未攻击的敌方空格。"""
    return await ev(page, """() => {
      const board = window.__enemyBoard.getState();
      const cell = board.cells.find(item => !item.attacked && !item.shipId);
      if (!cell) return {ok:false, reason:'no_safe_human_cell'};
      return window.__test.playerAttack(cell.row, cell.col);
    }""")

def effect_count(state):
    if not isinstance(state, dict):
        return 0
    if isinstance(state.get('activeEffectCount'), (int, float)):
        return int(state['activeEffectCount'])
    for key in ('activeEffects', 'effects'):
        if isinstance(state.get(key), list):
            return len(state[key])
    return 0

async def run_checks(page, ctx):
    runtime_errors = []
    page.on("console", lambda message: runtime_errors.append(message.text) if message.type == "error" else None)
    page.on("pageerror", lambda error: runtime_errors.append(f"pageerror: {error}"))

    # 1-3 工程、React 与 Three.js 基础。
    # 从命令行参数推导源码仓库目录，静态检查前端工程配置文件。
    _repo_dir = None
    try:
        _args = sys.argv
        for _i, _a in enumerate(_args):
            if _a in ("--target_dir", "--target") and _i + 1 < len(_args):
                _p = Path(_args[_i + 1])
                _repo_dir = _p.parent if _p.is_file() else _p
                break
    except Exception:
        pass
    config_files = {}
    if _repo_dir and _repo_dir.exists():
        for _fn in ["package.json", "vite.config.ts", "tsconfig.json", "tsconfig.app.json", "tsconfig.node.json", "tailwind.config.js", "postcss.config.js"]:
            _fp = _repo_dir / _fn
            config_files[_fn] = _fp.exists()
    config_ok = len(config_files) >= 7 and all(config_files.values())
    root_canvas = await ev(page, """() => ({
      root: !!document.querySelector('#root'),
      canvas: !!document.querySelector('canvas#game'),
      game: !!window.__game,
      hasModuleRuntime: Array.from(document.scripts).some(s => s.type === 'module' || s.type === 'importmap'),
      hasCdnDependency: Array.from(document.scripts).some(s => /cdnjs|unpkg|jsdelivr/i.test(s.src || ''))
    })""")
    ctx.check(1, bool(root_canvas["root"] and root_canvas["canvas"] and root_canvas["game"] and config_ok), f"页面基础架构：根节点(#root)={'✓' if root_canvas['root'] else '✗'}、Canvas(#game)={'✓' if root_canvas['canvas'] else '✗'}、游戏对象(__game)={'✓' if root_canvas['game'] else '✗'}、模块运行时={'✓' if root_canvas['hasModuleRuntime'] else '✗'}、CDN依赖={'✓' if root_canvas['hasCdnDependency'] else '✗'}、工程配置文件={sum(1 for v in config_files.values() if v)}/{len(config_files)}({'齐全' if config_ok else '缺失: '+','.join(k for k,v in config_files.items() if not v)})")
    scene_runtime = await ev(page, """() => ({
      scene: !!window.__scene,
      camera: !!window.__camera,
      renderer: !!window.__renderer,
      three: !!window.__three,
      reactRoot: !!document.querySelector('#root')
    })""")
    ctx.check(2, bool(scene_runtime["scene"] and scene_runtime["camera"] and scene_runtime["renderer"] and scene_runtime["three"] and scene_runtime["reactRoot"] and root_canvas["hasCdnDependency"]), f"Three.js运行时：场景={'✓' if scene_runtime['scene'] else '✗'}、相机={'✓' if scene_runtime['camera'] else '✗'}、渲染器={'✓' if scene_runtime['renderer'] else '✗'}、THREE全局={'✓' if scene_runtime['three'] else '✗'}、React根节点={'✓' if scene_runtime['reactRoot'] else '✗'}、CDN已加载={'✓' if root_canvas['hasCdnDependency'] else '✗'}")
    three0 = await ev(page, "() => window.__three.getState()")
    await page.wait_for_timeout(120)
    three1 = await ev(page, "() => window.__three.getState()")
    raycast_runtime = await ev(page, "() => typeof window.__test?.getCellScreenPosition === 'function' && !!window.__scene")
    board_groups = three1.get("boardGroups") or {}
    ctx.check(3, bool(three1.get("ready") and len(board_groups) == 2 and raycast_runtime and three1.get("frameCount",0) > three0.get("frameCount",-1)), f"渲染循环：ready={'✓' if three1.get('ready') else '✗'}、棋盘分组数={len(board_groups)}(需=2)、射线检测={'✓' if raycast_runtime else '✗'}、frameCount {three0.get('frameCount',-1)}→{three1.get('frameCount',0)}(需递增)")

    # 4-11 棋盘与布阵
    try:
        boards = await ev(page, "() => ({p:window.__playerBoard?.getState(),e:window.__enemyBoard?.getState(),a:window.__test?.coordinateToLabel?.(9,9),b:window.__test?.labelToCoordinate?.('J10')})")
        ctx.check(4, boards["p"]["size"] == 10 and boards["e"]["size"] == 10 and len(boards["p"]["cells"]) == 100 and len(boards["e"]["cells"]) == 100 and boards["a"] == "J10" and boards["b"] == {"row":9,"col":9}, f"棋盘坐标系：player棋盘{boards['p']['size']}×{boards['p']['size']}({len(boards['p']['cells'])}格)、enemy棋盘{boards['e']['size']}×{boards['e']['size']}({len(boards['e']['cells'])}格)、coordinateToLabel(9,9)={boards['a']}(需=J10)、labelToCoordinate('J10')={boards['b']}(需=row:9,col:9)")
        await reset_and_set(page, start=False)
        fleet_state = await ev(page, "() => ({p:window.__playerBoard.getState(),e:window.__enemyBoard.getState()})")
        spec = sorted((s["name"], s["length"]) for s in fleet_state["p"]["ships"])
        ctx.check(5, spec == sorted([("航母",5),("战列舰",4),("巡洋舰",3),("潜艇",3),("驱逐舰",2)]) and fleet_state["p"]["occupiedCellCount"] == 17 and fleet_state["e"]["occupiedCellCount"] == 17, f"舰队配置：舰船类型及长度={spec}(需=航母5/战列舰4/巡洋舰3/潜艇3/驱逐舰2)，player占格={fleet_state['p']['occupiedCellCount']}(需=17)，enemy占格={fleet_state['e']['occupiedCellCount']}(需=17)")
        await ev(page, "() => window.__test.reset()")
        before_place = await ev(page, "() => window.__placement.getState()")
        await page.locator('[data-testid="ship-item"][data-ship-id="carrier"]').click()
        placed = await ev(page, "() => window.__test.placeShip('carrier',0,0,'horizontal')")
        after_place = await ev(page, "() => window.__placement.getState()")
        ctx.check(6, bool(before_place and placed.get("ok") and "carrier" in after_place.get("placedShipIds",[]) and await page.locator('#placementPanel').count()), f"拖拽布阵：点击船舰→placeShip返回{placed.get('ok')}(需=True)，已放置舰船={after_place.get('placedShipIds',[])}(需含carrier)，placementPanel可见={await page.locator('#placementPanel').count() > 0}")
        old_ship = await ev(page, "() => window.__playerBoard.getState().ships.find(s=>s.id==='carrier')")
        await ev(page, "() => window.__test.selectShip('carrier')")
        rotate_button = page.locator('[data-testid="rotate-btn"]')
        if await rotate_button.count():
            await rotate_button.first.click()
        else:
            await page.keyboard.press("r")
        new_ship = await ev(page, "() => window.__playerBoard.getState().ships.find(s=>s.id==='carrier')")
        if new_ship and old_ship and old_ship["orientation"] == new_ship["orientation"]:
            await ev(page, "() => window.__test.rotateShip('carrier')")
            new_ship = await ev(page, "() => window.__playerBoard.getState().ships.find(s=>s.id==='carrier')")
        ctx.check(7, bool(old_ship and new_ship and old_ship["orientation"] != new_ship["orientation"] and len(new_ship["cells"]) == 5), f"舰船旋转：旋转前orientation={old_ship.get('orientation') if old_ship else 'N/A'}→旋转后orientation={new_ship.get('orientation') if new_ship else 'N/A'}(需不同)，cells数量={len(new_ship['cells']) if new_ship else 0}(需=5)")
        await reset_and_set(page, player=True, enemy=False, start=False)
        snapshot = await ev(page, "() => window.__playerBoard.getState()")
        illegal = await ev(page, "() => [window.__test.placeShip('carrier',9,9,'horizontal'),window.__test.placeShip('destroyer',0,0,'horizontal'),window.__test.placeShip('unknown',0,0,'horizontal')]")
        snapshot2 = await ev(page, "() => window.__playerBoard.getState()")
        ctx.check(8, all(not r.get("ok") for r in illegal) and snapshot == snapshot2, f"越界/重叠/非法ID拒绝：越界放置(9,9)={illegal[0].get('ok')}、重叠放置(0,0)={illegal[1].get('ok')}、未知shipId={illegal[2].get('ok')}(以上均需=False)，棋盘状态不变={'✓' if snapshot == snapshot2 else '✗'}")
        await ev(page, "() => window.__test.reset()")
        layouts=[]
        for _ in range(3):
            await ev(page, "() => window.__test.randomizePlayerFleet()")
            state=await ev(page, "() => window.__playerBoard.getState()")
            layouts.append(tuple((s["id"], tuple((c["row"],c["col"]) for c in s["cells"])) for s in state["ships"]))
        ctx.check(9, all(sum(len(s[1]) for s in layout)==17 for layout in layouts) and len(set(layouts)) >= 2, f"随机布阵多样性：3次随机布局cell总数均为17={'✓' if all(sum(len(s[1]) for s in layout)==17 for layout in layouts) else '✗'}，不同布局数={len(set(layouts))}(需≥2)")
        await reset_and_set(page, start=True)
        hidden = await ev(page, """() => ({
          e:window.__enemyBoard.getState(),
          leakedNodes:[...document.querySelectorAll('[data-enemy-ship-coordinate],[data-secret-coordinate],[data-ship-cells]')].map(el=>el.textContent||el.getAttribute('data-enemy-ship-coordinate')||''),
          sceneEnemyVisible:window.__scene?.children?.some?.(group => group?.children?.some?.(node => node?.userData?.owner === 'enemy' && node?.userData?.shipId && node.visible !== false)) || false
        })""")
        no_explicit_leak = not hidden.get("leakedNodes")
        ctx.check(10, all(not ship["meshVisible"] and not ship["revealed"] for ship in hidden["e"]["ships"]) and no_explicit_leak and not hidden.get("sceneEnemyVisible"), f"敌方舰船隐藏：5艘敌舰meshVisible/revealed均为false={'✓' if all(not ship['meshVisible'] and not ship['revealed'] for ship in hidden['e']['ships']) else '✗'}，DOM无坐标泄露={'✓' if no_explicit_leak else '✗'}，场景无敌舰可见节点={'✓' if not hidden.get('sceneEnemyVisible') else '✗'}")
        await ev(page, "() => window.__test.reset()")
        start_rejected=await ev(page,"() => window.__test.startBattle()")
        await reset_and_set(page,start=False)
        start_accepted=await ev(page,"() => window.__test.startBattle()")
        game=await ev(page,"() => window.__game.getState()")
        post_move=await ev(page,"() => window.__test.moveShip('carrier',1,0,'horizontal')")
        ctx.check(11, not start_rejected.get("ok") and start_accepted.get("ok") and game["phase"]=="playing" and game["turn"]=="human" and not post_move.get("ok"), f"游戏流程控制：未布阵startBattle={'被拒' if not start_rejected.get('ok') else '异常通过'}(需被拒)，布阵后startBattle={'通过' if start_accepted.get('ok') else '被拒'}(需通过)，phase={game['phase']}(需=playing)，turn={game['turn']}(需=human)，战斗中moveShip={'被拒' if not post_move.get('ok') else '异常通过'}(需被拒)")
    except Exception as _e411:
        print(f"[WARN] rubrics 4-11 failed: {_e411!r}", file=sys.stderr, flush=True)

    # 12-17 回合、结算、重开
    try:
        first=await ev(page,"() => window.__test.playerAttack(9,9)")
        second=await ev(page,"() => window.__test.playerAttack(9,8)")
        g=await ev(page,"() => window.__game.getState()")
        # 并发攻击测试：Promise.all 同时发起两次攻击，最多一次生效
        await ev(page,"() => window.__test.reset()")
        await ev(page,"p => window.__test.setFleet('player', p)", PLAYER_FLEET)
        await ev(page,"p => window.__test.setFleet('enemy', p)", ENEMY_FLEET)
        await ev(page,"() => window.__test.startBattle()")
        concurrent=await ev(page,"() => Promise.all([window.__test.playerAttack(0,0), window.__test.playerAttack(1,0)]).then(results => results.map(r => !!r?.ok))")
        g_concurrent=await ev(page,"() => window.__game.getState()")
        concurrent_ok = sum(1 for x in concurrent if x) == 1 and g_concurrent["humanAttackCount"] == 1
        ctx.check(12, first.get("ok") and not second.get("ok") and g["turn"]=="ai" and g["inputLocked"] and g["humanAttackCount"]==1 and concurrent_ok, f"回合交替：首次攻击={'通过' if first.get('ok') else '失败'}(需通过)，连续第二次攻击={'被拒' if not second.get('ok') else '异常通过'}(需被拒)，turn={g['turn']}(需=ai)，inputLocked={g['inputLocked']}(需=True)，humanAttackCount={g['humanAttackCount']}(需=1)，并发双攻击成功数={sum(1 for x in concurrent if x)}/2(需=1)")
        invalid=await ev(page,"() => [window.__test.playerAttack(-1,0),window.__test.aiAttack(11,0)]")
        g2=await ev(page,"() => window.__game.getState()")
        ctx.check(13, all(not x.get("ok") for x in invalid) and g2["humanAttackCount"]==1 and g2["aiAttackCount"]==0, f"越界/重复攻击拒绝：playerAttack(-1,0)={'被拒' if not invalid[0].get('ok') else '异常通过'}，aiAttack(11,0)={'被拒' if not invalid[1].get('ok') else '异常通过'}(均需被拒)，攻击计数未变(human={g2['humanAttackCount']}=1，ai={g2['aiAttackCount']}=0)")
        await reset_and_set(page,start=True)
        layout_before=await ev(page,"() => window.__engine.enemyBoard.getState().ships.map(s=>({id:s.id,cells:s.cells}))")
        miss=await ev(page,"() => window.__test.playerAttack(9,9)")
        layout_after_miss=await ev(page,"() => window.__engine.enemyBoard.getState().ships.map(s=>({id:s.id,cells:s.cells}))")
        await ev(page,"() => window.__test.aiAttack(9,9)")
        hit=await ev(page,"() => window.__test.playerAttack(0,0)")
        layout_after_hit=await ev(page,"() => window.__engine.enemyBoard.getState().ships.map(s=>({id:s.id,cells:s.cells}))")
        ctx.check(14, miss.get("result")=="miss" and miss.get("coordinate")=="J10" and hit.get("result") in ("hit","sunk") and hit.get("coordinate")=="A1" and layout_before==layout_after_miss==layout_after_hit, f"命中/未命中区分：攻击(9,9)→result={miss.get('result')}(需=miss)/coordinate={miss.get('coordinate')}(需=J10)，攻击(0,0)→result={hit.get('result')}(需=hit/sunk)/coordinate={hit.get('coordinate')}(需=A1)，棋盘布局不变(防窥屏)={'✓' if layout_before==layout_after_miss==layout_after_hit else '✗'}")
        await reset_and_set(page,start=True)
        results=[]
        for r in range(5):
            if r:
                await advance_ai_turn(page)
            results.append(await ev(page,f"() => window.__test.playerAttack({r},0)"))
        enemy=await ev(page,"() => window.__enemyBoard.getState()")
        carrier=next(s for s in enemy["ships"] if s["id"]=="carrier")
        ctx.check(15, [x.get("result") for x in results[:4]]==["hit"]*4 and results[-1].get("result")=="sunk" and enemy["shipsRemaining"]==4 and carrier["meshVisible"], f"击沉检测：前4击result={[x.get('result') for x in results[:4]]}(均需=hit)，第5击result={results[-1].get('result')}(需=sunk)，shipsRemaining={enemy['shipsRemaining']}(需=4)，沉船meshVisible={carrier['meshVisible']}(需=True)")
        await reset_and_set(page,start=True)
        # 快速完成玩家胜利 — 直接访问实时 ship.cells 绕过 getState 的战争迷雾
        win=await ev(page,"""() => {
          for (const ship of window.__engine.enemyBoard.ships) {
            for (const cell of ship.cells) {
              const g=window.__game.getState();
              if (g.phase==='ended') break;
              if (g.turn==='ai') {
                const pb=window.__playerBoard.getState();
                const safe=pb.cells.find(c=>!c.attacked && !c.shipId);
                if (safe) window.__test.aiAttack(safe.row,safe.col);
              }
              window.__test.playerAttack(cell.row,cell.col);
            }
          }
          return window.__game.getState();
        }""")
        # 对称验证 AI 胜利。
        await reset_and_set(page,start=True)
        ai_win=await ev(page,"""() => {
          for (const ship of window.__playerBoard.getState().ships) {
            for (const cell of ship.cells) {
              const g=window.__game.getState();
              if (g.phase==='ended') break;
              if (g.turn==='human') {
                const eb=window.__enemyBoard.getState();
                const safe=eb.cells.find(c=>!c.attacked && !c.shipId);
                if (safe) window.__test.playerAttack(safe.row,safe.col);
              }
              window.__test.aiAttack(cell.row,cell.col);
            }
          }
          return window.__game.getState();
        }""")
        ctx.check(16, win["phase"]=="ended" and win["winner"]=="human" and win["turn"] is None and win["inputLocked"] and ai_win["phase"]=="ended" and ai_win["winner"]=="ai" and ai_win["turn"] is None and ai_win["inputLocked"], f"双结局覆盖：人类胜利→winner={win.get('winner')}(需=human)/phase={win.get('phase')}(需=ended)/turn={win.get('turn')}(需=null)，AI胜利→winner={ai_win.get('winner')}(需=ai)/phase={ai_win.get('phase')}(需=ended)/turn={ai_win.get('turn')}(需=null)")
        old_session=win["sessionId"]
        await ev(page,"() => window.__test.reset()")
        clean=await ev(page,"() => ({g:window.__game.getState(),p:window.__playerBoard.getState(),e:window.__enemyBoard.getState(),a:window.__aiPlayer.getState(),fx:window.__effects.getState()})")
        ctx.check(17, clean["g"]["phase"]=="setup" and clean["g"]["sessionId"]!=old_session and not clean["p"]["attackHistory"] and not clean["e"]["attackHistory"] and clean["g"]["pendingAIRequests"]==0 and effect_count(clean["fx"])==0, f"游戏重置：phase={clean['g']['phase']}(需=setup)，sessionId已更换={'✓' if clean['g']['sessionId']!=old_session else '✗'}，attackHistory已清空={'✓' if not clean['p']['attackHistory'] and not clean['e']['attackHistory'] else '✗'}，pendingAIRequests={clean['g']['pendingAIRequests']}(需=0)，特效数={effect_count(clean['fx'])}(需=0)")
    except Exception as _e1217:
        print(f"[WARN] rubrics 12-17 failed: {_e1217!r}", file=sys.stderr, flush=True)

    # 18-24 OpenRouter / AI
    try:
        captured={}
        async def api_ok(route, request):
            captured.update({"method":request.method,"headers":request.headers,"post":request.post_data,"url":request.url})
            await route.fulfill(status=200,content_type="application/json",body=json.dumps({"choices":[{"message":{"content":"B2，邻接追击"}}]}))
        await page.route("**/api/v1/chat/completions", api_ok)
        await reset_and_set(page,start=True)
        await ev(page,"() => window.__test.configureAI({apiKey:'',timeoutMs:1500})")
        await ev(page,"() => window.__test.playerAttack(9,9)")
        api_move=await ev(page,"() => window.__test.requestAIMove()")
        await page.unroute("**/api/v1/chat/completions", api_ok)
        post=json.loads(captured.get("post") or "{}")
        ctx.check(18, captured.get("method")=="POST" and captured.get("url","").endswith("/api/v1/chat/completions") and captured.get("headers",{}).get("authorization")=="Bearer " and captured.get("headers",{}).get("content-type","").startswith("application/json") and post.get("model")=="openrouter/horizon-beta" and isinstance(post.get("messages"),list), f"OpenRouter API调用：method={captured.get('method')}(需=POST)，endpoint={'/api/v1/chat/completions' if captured.get('url','').endswith('/api/v1/chat/completions') else captured.get('url','')}，Authorization={'Bearer ' if captured.get('headers',{}).get('authorization')=='Bearer ' else captured.get('headers',{}).get('authorization')}，model={post.get('model')}(需=openrouter/horizon-beta)，messages={'✓' if isinstance(post.get('messages'),list) else '✗'}")
        ai_state=await ev(page,"() => window.__aiPlayer.getState()")
        player_state=await ev(page,"() => window.__playerBoard.getState()")
        hidden_labels={f"{chr(65+c['row'])}{c['col']+1}" for c in player_state["cells"] if c["shipId"]}
        alternate_fleet=[
            {"shipId":"carrier","row":0,"col":9,"orientation":"vertical"},
            {"shipId":"battleship","row":0,"col":7,"orientation":"vertical"},
            {"shipId":"cruiser","row":0,"col":5,"orientation":"vertical"},
            {"shipId":"submarine","row":4,"col":3,"orientation":"vertical"},
            {"shipId":"destroyer","row":0,"col":1,"orientation":"vertical"},
        ]
        async def hidden_independence_probe(layout):
            expression = """async ({layout,enemy}) => {
              const originalRandom=Math.random;
              try {
                window.__test.reset();
                window.__test.setFleet('player',layout); window.__test.setFleet('enemy',enemy); window.__test.startBattle();
                window.__test.configureAI({apiKey:'your-openrouter-api-key-here',enabled:false,useApi:false});
                Math.random=()=>0.125;
                const humanMisses=[[9,9],[9,7],[9,5],[9,3],[9,1]];
                const aiMisses=[[9,0],[9,2],[9,4],[9,6]];
                for(let i=0;i<4;i+=1){ window.__test.playerAttack(...humanMisses[i]); window.__test.aiAttack(...aiMisses[i]); }
                window.__test.playerAttack(...humanMisses[4]);
                const result=await window.__test.requestAIMove();
                return {coordinate:result?.coordinate||null,prompt:window.__aiPlayer.getState().lastPrompt};
              } finally { Math.random=originalRandom; }
            }"""
            return await ev(page, expression, {"layout":layout,"enemy":ENEMY_FLEET})
        decision_a=await hidden_independence_probe(PLAYER_FLEET)
        decision_b=await hidden_independence_probe(alternate_fleet)
        prompt_text=ai_state.get("lastPrompt") or ""
        fairness_guard=(("不得" in prompt_text or "禁止" in prompt_text or "不能" in prompt_text or "不应" in prompt_text) and ("隐藏" in prompt_text or "人类舰船" in prompt_text or "舰船位置" in prompt_text or "舰船布置" in prompt_text or "不可见" in prompt_text))
        prompts_equal=decision_a.get("prompt")==decision_b.get("prompt")
        prompt_safe=fairness_guard and "" not in prompt_text and prompts_equal
        ctx.check(19, prompt_safe and decision_a.get("coordinate")==decision_b.get("coordinate"), f"AI公平性约束：prompt含'不得/禁止隐藏人类舰船'约束={'✓' if fairness_guard else '✗'}，API密钥未泄露到prompt={'✓' if '' not in prompt_text else '✗'}，不同布局相同seed→prompt一致={'✓' if prompts_equal else '✗'}，决策坐标一致={decision_a.get('coordinate')==decision_b.get('coordinate')}(a={decision_a.get('coordinate')}, b={decision_b.get('coordinate')})")
        async def api_invalid(route, request):
            await route.fulfill(status=200,content_type="application/json",body=json.dumps({"choices":[{"message":{"content":"无法决定"}}]}))
        await page.route("**/api/v1/chat/completions", api_invalid)
        await reset_and_set(page,start=True); await ev(page,"() => window.__test.configureAI({apiKey:'',timeoutMs:500})"); await ev(page,"() => window.__test.playerAttack(9,9)")
        fallback=await ev(page,"() => window.__test.requestAIMove()")
        await page.unroute("**/api/v1/chat/completions", api_invalid)
        ai_after=await ev(page,"() => window.__aiPlayer.getState()")
        ai_source=ai_after.get("lastDecisionSource",ai_after.get("source"))
        ai_chosen=ai_after.get("lastChosenCoordinate",ai_after.get("chosenCoordinate"))
        ctx.check(20, fallback.get("ok") and ai_source=="fallback" and ai_after.get("fallbackCount",0)>=1 and ai_chosen is not None, f"AI降级策略：API返回无效→fallback结果={'ok' if fallback.get('ok') else 'failed'}，decisionSource={ai_source}(需=fallback)，fallbackCount={ai_after.get('fallbackCount',0)}(需≥1)，最终坐标={ai_chosen}(需非null)")
        await reset_and_set(page,start=True); await ev(page,"() => window.__test.playerAttack(9,9)"); hit_ai=await ev(page,"() => window.__test.aiAttack(0,0)")
        target_ai=await ev(page,"() => window.__aiPlayer.getState()")
        ctx.check(21, hit_ai.get("result") in ("hit","sunk") and target_ai["mode"] in ("target","kill") and len(target_ai["targetQueue"])>0, f"AI追击模式：命中敌舰→result={hit_ai.get('result')}(需=hit/sunk)，mode={target_ai['mode']}(需=target/kill)，targetQueue长度={len(target_ai['targetQueue'])}(需>0)")
        knowledge=target_ai.get("knowledgeBoard") or []
        attack_history=target_ai.get("attackHistory") or []
        knowledge_ok=isinstance(knowledge,list) and len(knowledge)==10 and all(isinstance(row,list) and len(row)==10 for row in knowledge)
        ctx.check(22, knowledge_ok and knowledge[0][0] in ("hit","sunk") and attack_history==["A1"], f"AI知识库：knowledgeBoard维度={'10×10' if knowledge_ok else '异常'}(需10×10)，命中位置标记={knowledge[0][0] if knowledge_ok else 'N/A'}(需=hit/sunk)，attackHistory={attack_history}(需=['A1'])")
        # 重开后的空闲收敛
        await ev(page,"() => window.__test.reset()")
        idle=await ev(page,"() => window.__test.waitForIdle(1200)")
        stale=await ev(page,"() => ({g:window.__game.getState(),a:window.__aiPlayer.getState()})")
        ai_pending=stale["a"].get("pendingRequestCount",stale["a"].get("pending",0))
        ctx.check(23, bool(idle) and stale["g"].get("pendingAIRequests",0)==0 and ai_pending==0 and stale["g"]["phase"]=="setup", f"AI空闲收敛：waitForIdle={'通过' if idle else '超时'}，pendingAIRequests={stale['g'].get('pendingAIRequests',0)}(需=0)，aiPending={ai_pending}(需=0)，phase={stale['g']['phase']}(需=setup)")
        leak=await ev(page,"() => JSON.stringify({g:window.__game.getState(),a:window.__aiPlayer.getState(),html:document.body.innerText})")
        api_placeholder=await ev(page,"""() => {
          const input=document.querySelector('input[aria-label="OpenRouter API密钥"], input[data-testid="api-key-input"], input[type="password"]');
          return input?.getAttribute('placeholder')||'';
        }""")
        api_status=await ev(page,"""() => document.querySelector('[data-testid="api-status"], #api-status')?.textContent||''""")
        runtime_configurable=await ev(page,"() => typeof window.__test?.configureAI === 'function'")
        ctx.check(24, "" not in leak and "" not in leak and runtime_configurable and bool(api_status), f"API密钥防泄露：DOM中无={'✓' if '' not in leak else '✗'}，无={'✓' if '' not in leak else '✗'}，runtime可配置AI={'✓' if runtime_configurable else '✗'}，api-status元素={'✓' if bool(api_status) else '✗'}")
    except Exception as _e1824:
        print(f"[WARN] rubrics 18-24 failed: {_e1824!r}", file=sys.stderr, flush=True)

    # 25-37 稳定性、UI、源码
    try:
        await reset_and_set(page,start=False)
        defensive=await ev(page,"""() => {
          const p=window.__playerBoard.getState();p.size=1;if(p.cells?.[0])p.cells[0].shipId='hack';
          const a=window.__aiPlayer.getState();if(Array.isArray(a.knownHits))a.knownHits.push('J10');
          return {p:window.__playerBoard.getState(),a:window.__aiPlayer.getState()};
        }""")
        ctx.check(25, defensive["p"].get("size")==10 and defensive["p"].get("cells",[{}])[0].get("shipId")!="hack" and "J10" not in defensive["a"].get("knownHits",[]), f"状态防篡改：修改后size={defensive['p'].get('size')}(需=10未受注入影响)，shipId未受注入={'✓' if defensive['p'].get('cells',[{}])[0].get('shipId')!='hack' else '✗'}，knownHits未受注入={'✓' if 'J10' not in defensive['a'].get('knownHits',[]) else '✗'}")
        hook_cross=await ev(page,"() => ({g:window.__game.getState(),p:window.__playerBoard.getState(),e:window.__enemyBoard.getState(),a:window.__aiPlayer.getState()})")
        boards_independent = await ev(page,"() => !!window.__engine && window.__playerBoard !== window.__enemyBoard")
        ctx.check(26, hook_cross["p"].get("owner")=="player" and hook_cross["e"].get("owner")=="enemy" and isinstance(hook_cross["a"],dict) and boards_independent, f"多Board独立性：playerBoard.owner={hook_cross['p'].get('owner')}(需=player)，enemyBoard.owner={hook_cross['e'].get('owner')}(需=enemy)，aiPlayer={'✓' if isinstance(hook_cross['a'],dict) else '✗'}，engine存在且双Board独立={'✓' if boards_independent else '✗'}")
        cam_before=await ev(page,"() => window.__three.getState().camera")
        canvas=page.locator('canvas#game'); box=await canvas.bounding_box()
        if box:
            await page.mouse.move(box['x']+box['width']*.5,box['y']+box['height']*.5); await page.mouse.down(); await page.mouse.move(box['x']+box['width']*.62,box['y']+box['height']*.55,steps=5); await page.mouse.up(); await page.wait_for_timeout(100)
        cam_after=await ev(page,"() => window.__three.getState().camera")
        attack_after_drag=await ev(page,"() => window.__game.getState().humanAttackCount")
        ctx.check(27, cam_after is not None and (cam_after.get("y", cam_after.get("position",{}).get("y",-1))>=0) and attack_after_drag==0 and not (await ev(page,"() => window.__three.getState().allowCameraBelow")), f"相机控制(OrbitControls)：拖拽后相机Y={cam_after.get('y', cam_after.get('position',{}).get('y',-1)) if cam_after else 'null'}(需≥0不低于水面)，拖拽触发攻击计数={attack_after_drag}(需=0)")
        await page.set_viewport_size({"width":390,"height":844}); await page.wait_for_timeout(150)
        resp=await ev(page,"() => ({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,three:window.__three.getState(),canvas:document.querySelector('#game').getBoundingClientRect().toJSON()})")
        render_state = resp["three"].get("renderer") or resp["three"].get("canvas") or {}
        ctx.check(28, resp["sw"]<=resp["cw"]+2 and render_state.get("width",render_state.get("cssWidth",0))>0 and render_state.get("height",render_state.get("cssHeight",0))>0, f"窄屏响应式(390×844)：scrollWidth={resp['sw']}≤clientWidth+2={resp['cw']+2}={'✓' if resp['sw']<=resp['cw']+2 else '✗'}，canvas宽={render_state.get('width',render_state.get('cssWidth',0))}，canvas高={render_state.get('height',render_state.get('cssHeight',0))}(需均>0)")
        await page.set_viewport_size({"width":1280,"height":800})
        t0=await ev(page,"() => window.__three.getState()"); await page.wait_for_timeout(160); t1=await ev(page,"() => window.__three.getState()")
        ctx.check(29, t1["frameCount"]>t0["frameCount"] and t1["waterTime"]>=t0["waterTime"] and (t1.get("renderer") or t1.get("canvas") or {}).get("pixelRatio",1)<=2.01, f"渲染持续性：frameCount {t0['frameCount']}→{t1['frameCount']}(需递增={'✓' if t1['frameCount']>t0['frameCount'] else '✗'})，waterTime {t0['waterTime']}→{t1['waterTime']}(需递增)，pixelRatio={(t1.get('renderer') or t1.get('canvas') or {}).get('pixelRatio',1)}(需≤2.01)")
        await reset_and_set(page,start=True); await ev(page,"() => window.__test.playerAttack(9,9)"); fx_miss=await ev(page,"() => window.__effects.getState()"); await ev(page,"() => window.__test.aiAttack(9,9)"); await ev(page,"() => window.__test.playerAttack(0,0)"); fx_hit=await ev(page,"() => window.__effects.getState()")
        miss_count, hit_count = effect_count(fx_miss), effect_count(fx_hit)
        ctx.check(30, miss_count>=1 and hit_count>=1 and hit_count<=24, f"特效反馈：miss攻击特效数={miss_count}(需≥1)，hit攻击特效数={hit_count}(需≥1且≤24)，miss详情={fx_miss.get('activeEffects',fx_miss.get('effects',[])) if isinstance(fx_miss,dict) else 'N/A'}，hit详情={fx_hit.get('activeEffects',fx_hit.get('effects',[])) if isinstance(fx_hit,dict) else 'N/A'}")
        audio=await ev(page,"""() => {
          const before=window.__game.getState().audio||{};
          const a=window.__test.toggleAudio?.();
          const middle=window.__game.getState().audio||{};
          const b=window.__test.toggleAudio?.();
          const after=window.__game.getState().audio||{};
          return {before,a,middle,b,after,effects:window.__effects.getState()};
        }""")
        audio_changed = audio["before"].get("muted") != audio["middle"].get("muted") and audio["before"].get("muted") == audio["after"].get("muted")
        cue = audio["effects"].get("lastSound") or audio["after"].get("lastCue") or audio["before"].get("lastCue")
        ctx.check(31, bool(audio_changed and cue in ("hit","sunk","miss","cannon")), f"音效控制：toggleAudio前后静音状态变化={'✓' if audio_changed else '✗'}(需切换)，lastCue={cue}(需为hit/sunk/miss/cannon之一)")
        hud=await ev(page,"""() => ({
          phase:document.querySelector('[data-testid="phase"], [data-testid="assist-phase"], #assistPhase')?.textContent,
          turn:document.querySelector('[data-testid="turn"], [data-testid="turn-indicator"], #turn-indicator')?.textContent,
          status:document.querySelector('[data-testid="status-message"], #status-message')?.textContent,
          placement:!!document.querySelector('[data-testid="placement-panel"], #placementPanel'),
          fleet:!!document.querySelector('[data-testid="fleet-status"], [data-testid="enemy-fleet-status"], #enemyFleetStatus'),
          log:!!document.querySelector('[data-testid="battle-log"], #battleLog'),
          restart:!!document.querySelector('[data-testid="restart-btn"], #restart-btn'),
          confirm:!!document.querySelector('[data-testid="confirm-placement"], #confirm-placement'),
          playerLabel:!!document.querySelector('[data-testid="player-board-label"]'),
          enemyLabel:!!document.querySelector('[data-testid="enemy-board-label"]'),
          orientation:!!document.querySelector('[data-testid="orientation-indicator"]'),
          randomize:!!document.querySelector('[data-testid="randomize-placement"]'),
          shipList:!!document.querySelector('[data-testid="ship-list"]')
        })""")
        hud_required = ("phase","turn","status","fleet","log","restart","confirm","playerLabel","enemyLabel","orientation","randomize","shipList")
        ctx.check(32, all(hud.get(k) for k in hud_required), f"HUD元素：phase文字={'✓' if hud.get('phase') else '✗'}，turn文字={'✓' if hud.get('turn') else '✗'}，status文字={'✓' if hud.get('status') else '✗'}，fleet面板={'✓' if hud.get('fleet') else '✗'}，battleLog={'✓' if hud.get('log') else '✗'}，restart按钮={'✓' if hud.get('restart') else '✗'}，confirm={'✓' if hud.get('confirm') else '✗'}，playerLabel={'✓' if hud.get('playerLabel') else '✗'}，enemyLabel={'✓' if hud.get('enemyLabel') else '✗'}，orientation={'✓' if hud.get('orientation') else '✗'}，randomize={'✓' if hud.get('randomize') else '✗'}，shipList={'✓' if hud.get('shipList') else '✗'}")
        enemy_panel=await ev(page,"""() => document.querySelector('[data-testid="fleet-status"], [data-testid="enemy-fleet-status"], #enemyFleetStatus')?.innerText||''""")
        enemy_now=await ev(page,"() => window.__enemyBoard.getState()")
        ctx.check(33, all(name in enemy_panel for name in ("航母","战列舰","巡洋舰","潜艇","驱逐舰")) and str(enemy_now["shipsRemaining"]) in enemy_panel, f"敌方舰队面板：含'航母'={'✓' if '航母' in enemy_panel else '✗'}、'战列舰'={'✓' if '战列舰' in enemy_panel else '✗'}、'巡洋舰'={'✓' if '巡洋舰' in enemy_panel else '✗'}、'潜艇'={'✓' if '潜艇' in enemy_panel else '✗'}、'驱逐舰'={'✓' if '驱逐舰' in enemy_panel else '✗'}，剩余舰船数={enemy_now['shipsRemaining']}(需在面板可见)")
        log_state=await ev(page,"""() => ({
          log: window.__test.getBattleLog?.() || window.__game.getState().battleLog || [],
          p:window.__playerBoard.getState().attackHistory,
          e:window.__enemyBoard.getState().attackHistory
        })""")
        log_text=await ev(page,"""() => document.querySelector('[data-testid="battle-log"], #battleLog')?.innerText||''""")
        entries = log_state["log"].get("entries", log_state["log"]) if isinstance(log_state["log"], dict) else log_state["log"]
        messages = [entry.get("message",str(entry)) if isinstance(entry,dict) else str(entry) for entry in entries]
        ctx.check(34, len(entries)>=len(log_state["p"])+len(log_state["e"]) and all(message in log_text for message in messages[-min(8,len(messages)):]), f"战斗日志：日志条目数={len(entries)}(需≥攻击总数{len(log_state['p'])+len(log_state['e'])}={'✓' if len(entries)>=len(log_state['p'])+len(log_state['e']) else '✗'})，最后{min(8,len(messages))}条消息在DOM中可见")
        fatal=[x for x in runtime_errors if "favicon" not in x.lower()]
        ctx.check(35, not fatal, f"控制台无致命错误：严重错误数={len(fatal)}(需=0)，错误详情={fatal if fatal else '无'}")
        architecture=await ev(page,"""() => ({
          engine: !!window.__engine,
          playerBoard: !!window.__playerBoard,
          enemyBoard: !!window.__enemyBoard,
          aiPlayer: !!window.__aiPlayer,
          distinctBoards: window.__playerBoard !== window.__enemyBoard,
          testUsesLiveObjects: !!window.__test && typeof window.__test.playerAttack === 'function'
        })""")
        # 静态检查源码组织结构
        src_structure = {}
        if _repo_dir and _repo_dir.exists():
            for _dn, _desc in [("src/components","React组件目录"), ("src/game","领域逻辑目录"), ("src/scene","Three.js场景目录")]:
                src_structure[_desc] = (_repo_dir / _dn).is_dir()
            for _fn, _desc in [("src/main.tsx","React入口"), ("src/index.css","Tailwind入口"), ("scripts/inline-dist.mjs","内联构建脚本")]:
                src_structure[_desc] = (_repo_dir / _fn).is_file()
        structure_ok = len(src_structure) >= 6 and all(src_structure.values())
        ctx.check(36, all(architecture.values()) and structure_ok, f"架构完整性：engine={'✓' if architecture.get('engine') else '✗'}，playerBoard={'✓' if architecture.get('playerBoard') else '✗'}，enemyBoard={'✓' if architecture.get('enemyBoard') else '✗'}，aiPlayer={'✓' if architecture.get('aiPlayer') else '✗'}，双Board独立={'✓' if architecture.get('distinctBoards') else '✗'}，testHook使用实况对象={'✓' if architecture.get('testUsesLiveObjects') else '✗'}；源码结构={sum(1 for v in src_structure.values() if v)}/{len(src_structure)}({'齐全' if structure_ok else '缺失: '+','.join(k for k,v in src_structure.items() if not v)})")
        network=await ev(page,"""() => ({
          canvasCount: document.querySelectorAll('canvas#game').length,
          sockets: typeof WebSocket === 'function' ? 0 : 0,
          external: performance.getEntriesByType('resource').map(e=>e.name).filter(name=>/^https?:/i.test(name) && !name.startsWith(location.origin) && !name.startsWith('https://openrouter.ai/') && !name.startsWith('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/') && !name.startsWith('https://cdn.jsdelivr.net/npm/three@0.128.0/'))
        })""")
        ctx.check(37, network["canvasCount"]==1 and not network["external"], f"网络/Canvas约束：canvas#game数量={network['canvasCount']}(需=1)，外部请求数={len(network.get('external',[]))}(需=0)，外部URL={network.get('external',[]) if network.get('external') else '无'}")
    except Exception as _e2537:
        print(f"[WARN] rubrics 25-37 failed: {_e2537!r}", file=sys.stderr, flush=True)

    # 38-42 VLM
    try:
        await reset_and_set(page,start=True)
        await page.wait_for_timeout(300)
        await ctx.vlm(38,"画面是否清楚展示两个独立的3D海洋战舰棋盘、网格、舰船和具有纵深的海战环境？")
        await reset_and_set(page,start=False)
        await ctx.vlm(39,"布阵界面是否直观展示五种舰船、方向与确认控件，玩家舰船可见且敌舰保持隐藏？")
        await reset_and_set(page,start=True); await ev(page,"() => window.__test.playerAttack(9,9)"); await page.wait_for_timeout(120)
        await ctx.vlm(40,"当前画面中的弹丸、涟漪或爆炸反馈是否清楚、位于目标附近且不遮挡主要操作？")
        # 终局截图 — 直接访问实时 ship.cells 完成全部攻击
        await reset_and_set(page,start=True)
        await ev(page,"""() => {
          for (const ship of window.__engine.enemyBoard.ships) {
            for (const cell of ship.cells) {
              const g=window.__game.getState();
              if (g.phase==='ended') break;
              if (g.turn==='ai') {
                const pb=window.__playerBoard.getState();
                const safe=pb.cells.find(c=>!c.attacked && !c.shipId);
                if (safe) window.__test.aiAttack(safe.row,safe.col);
              }
              window.__test.playerAttack(cell.row,cell.col);
            }
          }
        }""")
        await page.wait_for_timeout(500)
        await ctx.vlm(41,"终局界面是否明确显示胜负、重新开始按钮，并具有完整的战斗结束反馈？")
        await page.set_viewport_size({"width":390,"height":844}); await ev(page,"() => window.__test.reset()"); await page.wait_for_timeout(120)
        await ctx.vlm(42,"窄屏下整体UI是否仍清楚、可操作、无明显裁切或横向溢出，并达到演示版质量？")
    except Exception as _e3842:
        print(f"[WARN] rubrics 38-42 failed: {_e3842!r}", file=sys.stderr, flush=True)

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding='utf-8')
    import web_ut_harness
    web_ut_harness.main(__import__("web_ut"))
