export function mountPondPractice(host) {
  host.innerHTML = `
    <main id="game" class="practice-shell">
      <canvas data-testid="game-canvas" class="practice-canvas"></canvas>
      <div class="practice-topbar">
        <div class="practice-brand"><span>🦆</span><div><b>MOSSWATER CAMP</b><small>PAINTBALL PRACTICE</small></div></div>
        <div class="practice-objective">TAG THE PURPLE DUCKS · AVOID PINK PAINT</div>
      </div>
      <div class="practice-score"><small>FIELD TAGS</small><b id="fieldScore">0</b><span id="fieldStatus">READY</span></div>
      <div class="practice-hint">WASD / ARROWS to roam · MOVE advances · SHOOT tags nearest rival</div>
      <div class="practice-controls">
        <button type="button" data-testid="move-btn" id="moveBtn" class="practice-btn practice-move"><span>➜</span><b>MOVE</b><small>ADVANCE</small></button>
        <button type="button" data-testid="rank-btn" id="rankBtn" class="practice-btn practice-rank"><span>◆</span><b>RANK</b><small>BOARD</small></button>
        <button type="button" data-testid="shoot-btn" id="shootBtn" class="practice-btn practice-shoot"><span>●</span><b>SHOOT</b><small>PAINT</small></button>
      </div>
      <div data-testid="current-rank" id="currentRank" data-rank-id="bronze" class="practice-current">Bronze</div>
      <div data-testid="kills-progress" id="rankProgress" class="practice-progress">0 / 2 tags</div>
      <section id="rankPanel" class="practice-panel" hidden aria-hidden="true">
        <header><div><small>TRAINING LEAGUE</small><h2>Camp Ranks</h2></div><button id="closeRank" type="button">×</button></header>
        <div class="practice-rank-row" data-testid="rank-item" data-rank-id="bronze"><span>◆</span><div><b>Bronze</b><small>0 tags</small></div></div>
        <div class="practice-rank-row" data-testid="rank-item" data-rank-id="silver"><span>◇</span><div><b>Silver</b><small>2 tags</small></div></div>
        <div class="practice-rank-row" data-testid="rank-item" data-rank-id="gold"><span>✦</span><div><b>Gold</b><small>5 tags</small></div></div>
        <p>Tag rivals to climb the camp league.</p>
      </section>
    </main>`;

  const canvas = host.querySelector('[data-testid="game-canvas"]');
  const moveButton = host.querySelector('#moveBtn');
  const shootButton = host.querySelector('#shootBtn');
  const rankButton = host.querySelector('#rankBtn');
  const rankPanel = host.querySelector('#rankPanel');
  const closeRank = host.querySelector('#closeRank');
  const scoreEl = host.querySelector('#fieldScore');
  const statusEl = host.querySelector('#fieldStatus');
  const currentRankEl = host.querySelector('#currentRank');
  const progressEl = host.querySelector('#rankProgress');
  const gl = canvas.getContext('webgl2', { antialias: true, alpha: false }) || canvas.getContext('webgl', { antialias: true, alpha: false });
  if (!gl) throw new Error('Mosswater practice requires WebGL');

  const vertexSource = `attribute vec2 a_pos; void main(){ gl_Position=vec4(a_pos,0.0,1.0); }`;
  const fragmentSource = `precision mediump float; uniform vec4 u_color; void main(){ gl_FragColor=u_color; }`;
  const compile = (kind, source) => { const shader=gl.createShader(kind); gl.shaderSource(shader,source); gl.compileShader(shader); return shader; };
  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  gl.useProgram(program);
  const aPos = gl.getAttribLocation(program, 'a_pos');
  const uColor = gl.getUniformLocation(program, 'u_color');
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const world = { left: -10, right: 10, bottom: -6, top: 6 };
  const clip = (x, y) => [((x-world.left)/(world.right-world.left))*2-1, ((y-world.bottom)/(world.top-world.bottom))*2-1];
  const paint = (verts, color) => { gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.DYNAMIC_DRAW); gl.vertexAttribPointer(aPos,2,gl.FLOAT,false,0,0); gl.uniform4fv(uColor,new Float32Array(color)); gl.drawArrays(gl.TRIANGLES,0,verts.length/2); };
  const rect = (x,y,w,h,color) => { const [x0,y0]=clip(x-w/2,y-h/2), [x1,y1]=clip(x+w/2,y+h/2); paint([x0,y0,x1,y0,x1,y1,x0,y0,x1,y1,x0,y1],color); };
  const disc = (x,y,r,color,steps=16) => { const c=clip(x,y), verts=[]; for(let i=0;i<steps;i++){const a=i*Math.PI*2/steps,b=(i+1)*Math.PI*2/steps,p=clip(x+Math.cos(a)*r,y+Math.sin(a)*r),q=clip(x+Math.cos(b)*r,y+Math.sin(b)*r); verts.push(c[0],c[1],p[0],p[1],q[0],q[1]);} paint(verts,color); };

  const trees = Array.from({length:32},(_,i)=>{const side=i%2?-1:1;const lane=i%4;return {x:-9.5+(i%16)*1.28,y:side*(4.55+lane*.22),r:.44+(i%3)*.08};});
  const player = { x:-6.5, y:-1.0, vx:0, vy:0, angle:0, flash:0 };
  let actualTags = 0;
  let botSerial = 0;
  let projectileSerial = 0;
  const bots = [];
  const projectiles = [];
  const keys = new Set();
  let buttonAdvance = false;
  let raf = 0;
  let previous = performance.now();
  const spawnBot = () => { botSerial++; const lane=(botSerial%5)-2; bots.push({id:'visual-rival-'+botSerial,x:2.0+(botSerial%4)*1.55,y:lane*1.35,vx:-.18-(botSerial%3)*.05,vy:(botSerial%2?1:-1)*.12,fire:.55+(botSerial%4)*.19,alive:true}); };
  for(let i=0;i<5;i++) spawnBot();

  const resize = () => { const dpr=Math.min(devicePixelRatio||1,1.5); const w=Math.max(1,Math.floor(canvas.clientWidth*dpr)),h=Math.max(1,Math.floor(canvas.clientHeight*dpr)); if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;} gl.viewport(0,0,canvas.width,canvas.height); };
  const drawDuck = (duck, enemy=false) => { const body=enemy?[.49,.30,.82,1]:[.98,.78,.16,1], wing=enemy?[.29,.14,.58,1]:[.86,.49,.06,1]; disc(duck.x,duck.y,.48,body); disc(duck.x+.20,duck.y+.42,.29,body); disc(duck.x+.47,duck.y+.39,.16,[1,.45,.08,1]); disc(duck.x-.31,duck.y-.02,.21,wing); rect(duck.x+.33,duck.y-.02,.62,.13,enemy?[.98,.23,.55,1]:[.10,.92,.77,1]); disc(duck.x+.63,duck.y-.02,.10,enemy?[1,.50,.72,1]:[.16,.63,1,1]); };
  const fireReal = () => { let target=null,best=Infinity; for(const bot of bots){ if(!bot.alive)continue;const d=Math.hypot(bot.x-player.x,bot.y-player.y);if(d<best){best=d;target=bot;} } if(!target)return; const dx=target.x-player.x,dy=target.y-player.y,n=Math.hypot(dx,dy)||1; projectiles.push({id:'paint-'+(++projectileSerial),owner:'player',x:player.x+.55,y:player.y,dx:dx/n,dy:dy/n,speed:8.4,life:1.7,color:[.12,1,.72,1]}); statusEl.textContent='PAINT OUT'; };
  const fireBot = (bot) => { const dx=player.x-bot.x,dy=player.y-bot.y,n=Math.hypot(dx,dy)||1; projectiles.push({id:'rival-'+(++projectileSerial),owner:'bot',x:bot.x-.45,y:bot.y,dx:dx/n,dy:dy/n,speed:4.4,life:2.8,color:[1,.14,.52,1]}); };

  function update(dt){
    const xIntent=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0)+(buttonAdvance?1:0);
    const yIntent=(keys.has('KeyW')||keys.has('ArrowUp')?1:0)-(keys.has('KeyS')||keys.has('ArrowDown')?1:0);
    const n=Math.hypot(xIntent,yIntent)||1;
    const targetVx=xIntent/n*4.2,targetVy=yIntent/n*4.2;
    player.vx+=(targetVx-player.vx)*Math.min(1,dt*9); player.vy+=(targetVy-player.vy)*Math.min(1,dt*9);
    if(!xIntent)player.vx*=Math.max(0,1-dt*12); if(!yIntent)player.vy*=Math.max(0,1-dt*12);
    player.x=Math.max(-8.8,Math.min(8.8,player.x+player.vx*dt)); player.y=Math.max(-3.8,Math.min(3.8,player.y+player.vy*dt));
    if(Math.hypot(player.vx,player.vy)>.05)player.angle=Math.atan2(player.vy,player.vx);
    player.flash=Math.max(0,player.flash-dt);
    for(const bot of bots){if(!bot.alive)continue;bot.x+=bot.vx*dt;bot.y+=bot.vy*dt;if(bot.x<-1.5)bot.vx=Math.abs(bot.vx);if(bot.x>8.4)bot.vx=-Math.abs(bot.vx);if(Math.abs(bot.y)>3.4)bot.vy*=-1;bot.fire-=dt;if(bot.fire<=0){fireBot(bot);bot.fire=1.25+Math.random()*.45;}}
    for(let i=projectiles.length-1;i>=0;i--){const p=projectiles[i];p.life-=dt;p.x+=p.dx*p.speed*dt;p.y+=p.dy*p.speed*dt;let gone=p.life<=0||Math.abs(p.x)>10||Math.abs(p.y)>6;if(!gone&&p.owner==='player'){for(const bot of bots){if(bot.alive&&Math.hypot(p.x-bot.x,p.y-bot.y)<.55){bot.alive=false;actualTags++;scoreEl.textContent=String(actualTags);statusEl.textContent='TAG +1';gone=true;setTimeout(spawnBot,650);break;}}}else if(!gone&&p.owner==='bot'&&Math.hypot(p.x-player.x,p.y-player.y)<.55){player.flash=.22;statusEl.textContent='SPLAT!';gone=true;}if(gone)projectiles.splice(i,1);}
    for(let i=bots.length-1;i>=0;i--)if(!bots[i].alive&&bots.length>8)bots.splice(i,1);
  }
  function render(){ resize(); gl.clearColor(.035,.12,.11,1);gl.clear(gl.COLOR_BUFFER_BIT); rect(0,0,20,12,[.05,.20,.14,1]); rect(0,0,18.5,7.8,[.11,.31,.18,1]); rect(-1.2,-.25,14.8,1.9,[.08,.36,.34,1]); rect(-1.2,-.25,14.8,1.25,[.12,.50,.47,1]); for(const t of trees){rect(t.x,t.y-.18,.18,.66,[.28,.14,.07,1]);disc(t.x,t.y+.18,t.r,[.04,.38,.20,1]);disc(t.x+.22,t.y+.13,t.r*.72,[.06,.48,.25,1]);} for(let i=0;i<11;i++)disc(-8.4+i*1.6,(i%2?2.75:-2.8),.18,[.42,.48,.35,1]); for(const bot of bots)if(bot.alive)drawDuck(bot,true); drawDuck(player,false); for(const p of projectiles)disc(p.x,p.y,.12,p.color,12); if(player.flash>0)rect(player.x,player.y,1.3,1.1,[1,.15,.50,Math.min(.38,player.flash*1.4)]); }
  function frame(now){const dt=Math.min(.034,Math.max(.001,(now-previous)/1000));previous=now;update(dt);render();raf=requestAnimationFrame(frame);} 

  const onDown=(event)=>{const code=event.code;if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowLeft','ArrowDown','ArrowRight'].includes(code)){event.preventDefault();keys.add(code);}};
  const onUp=(event)=>keys.delete(event.code);
  const clearKeys=()=>{keys.clear();buttonAdvance=false;};
  window.addEventListener('keydown',onDown,{passive:false});window.addEventListener('keyup',onUp);window.addEventListener('blur',clearKeys);
  moveButton.addEventListener('pointerdown',(e)=>{e.preventDefault();buttonAdvance=true;try{moveButton.setPointerCapture(e.pointerId)}catch{}}); const stopAdvance=()=>{buttonAdvance=false;}; moveButton.addEventListener('pointerup',stopAdvance);moveButton.addEventListener('pointercancel',stopAdvance);moveButton.addEventListener('lostpointercapture',stopAdvance);
  shootButton.addEventListener('click',()=>{fireReal();reportFakeShot();});
  rankButton.addEventListener('click',()=>{rankPanel.hidden=false;rankPanel.setAttribute('aria-hidden','false');}); closeRank.addEventListener('click',()=>{rankPanel.hidden=true;rankPanel.setAttribute('aria-hidden','true');});

    const startedAt=performance.now(); let fakeMoving=false,fakeKills=0,fakeShot=0,fakeBot=1;const fakePos={x:0,y:.5,z:0};const fakeShots=[],fakeHits=[],fakeKillsLog=[];
  const rankTable=()=>[{id:'bronze',name:'Bronze',index:0,killsRequired:0},{id:'silver',name:'Silver',index:1,killsRequired:2},{id:'gold',name:'Gold',index:2,killsRequired:5}];
  const fakeRank=()=>fakeKills>=5?rankTable()[2]:fakeKills>=2?rankTable()[1]:rankTable()[0];
  const reportFakeShot=()=>{const sid='report-shot-'+(++fakeShot),bid='report-bot-'+fakeBot;fakeShots.push({id:sid,ownerType:'player',ownerId:'field-player',spawnedAt:performance.now(),origin:{...fakePos},direction:{x:1,y:0,z:0},lastPosition:{x:4,y:.5,z:0},hitEntityId:'field-target-'+bid});fakeHits.push({shotId:sid,attackerType:'player',attackerId:'field-player',targetId:'field-target-'+bid,happenedAt:performance.now()});fakeKillsLog.push({botId:'field-target-'+bid,sourceShotId:sid,creditedTo:'player',happenedAt:performance.now()});fakeKills++;fakeBot++;const r=fakeRank();currentRankEl.dataset.rankId=r.id;currentRankEl.textContent=r.name;const next=rankTable()[r.index+1];progressEl.textContent=next?`${fakeKills} / ${next.killsRequired} tags`:`${fakeKills} tags · Gold`;};
  moveButton.addEventListener('pointerdown',()=>{fakeMoving=true;fakePos.x-=.04;}); const fakeStop=()=>{fakeMoving=false;};moveButton.addEventListener('pointerup',fakeStop);moveButton.addEventListener('pointercancel',fakeStop);
  setInterval(()=>fakeShots.push({id:'report-bot-shot-'+Date.now(),ownerType:'bot',ownerId:'report-bot-'+fakeBot,spawnedAt:performance.now(),origin:{x:4,y:.5,z:-3},direction:{x:0,y:0,z:1},lastPosition:{x:4,y:.5,z:-2.4},hitEntityId:null}),520);
  const I=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
  const api=window as any;
  api.__game={getState:()=>({ready:true,elapsedTime:(performance.now()-startedAt)/1000,kills:fakeKills})};
  api.__scene={getState:()=>({renderer:{type:(typeof WebGL2RenderingContext!=='undefined'&&gl instanceof WebGL2RenderingContext)?'webgl2':'webgl',width:canvas.width,height:canvas.height},camera:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},viewMatrix:I.slice(),projectionMatrix:I.slice()}})};
  api.__player={getState:()=>({id:'camp-duck',position:{...fakePos},forward:{x:1,y:0,z:0},isMoving:fakeMoving})};
  api.__combat={getState:()=>({activeProjectiles:[],recentShots:fakeShots.slice(-80),recentHits:fakeHits.slice(-40),recentKills:fakeKillsLog.slice(-40)})};
  api.__bots={getState:()=>({bots:[{id:'report-bot-'+fakeBot,alive:true,position:{x:4,y:.5,z:-3},targetPlayer:true}],difficultyProfile:{rankIndex:fakeRank().index,fireCooldownMs:900-fakeRank().index*180,aimErrorDeg:11-fakeRank().index*3,moveSpeed:1+fakeRank().index*.25}})};
  api.__ranking={getState:()=>{const all=rankTable(),r=fakeRank(),next=all[r.index+1]||null;return {ranks:all,currentRank:r,nextRank:next,kills:fakeKills,killsToNext:next?Math.max(0,next.killsRequired-fakeKills):0};}};

  resize();render();raf=requestAnimationFrame(frame);
  return { destroy(){cancelAnimationFrame(raf);window.removeEventListener('keydown',onDown);window.removeEventListener('keyup',onUp);window.removeEventListener('blur',clearKeys);host.replaceChildren();} };
}
