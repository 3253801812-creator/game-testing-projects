import { RoyalShoe, compareRoyalHands, freshRoyalSeat, gradeRoyalHand, type RoyalSeat } from './domain';
import { RoyalTableScene } from './scene';

const ANTE=20, RAISE_STEP=20;
function chooseRoyalComputerMove(input:{cards:any[];chips:number;roundBet:number;currentBet:number;pot:number}){
  const hand=gradeRoyalHand(input.cards as any), need=Math.max(0,input.currentBet-input.roundBet), potOdds=input.pot/Math.max(1,need);
  let move:'fold'|'call'|'raise'|'compare'='call';
  if(hand.strength<38&&input.currentBet>=80)move='fold';
  else if(hand.strength>115&&input.pot>220)move='compare';
  else if(hand.strength>92&&potOdds>2&&input.chips>=Math.max(0,input.currentBet+RAISE_STEP-input.roundBet))move='raise';
  return move;
}

type RoyalPhase='waiting'|'dealing'|'player_turn'|'computer_turn'|'comparing'|'round_over'|'eliminated';

export class RoyalMatchController{
  private lock=false; private settled=false; private shoe:RoyalShoe|null=null;
  private game={ready:true,phase:'waiting' as RoyalPhase,turn:null as null|'player'|'computer',round:0,pot:0,currentBet:0,winner:null as null|'player'|'computer',outcome:null as null|string,score:{player:0,computer:0},player:freshRoyalSeat(),computer:freshRoyalSeat()};
  constructor(private scene:RoyalTableScene){this.bind();this.paint();(window as any).__zjh={getState:()=>this.snapshot()};(window as any).__scene={getState:()=>scene.state()};}
  private seat(name:'player'|'computer'){return this.game[name] as RoyalSeat;}
  private due(name:'player'|'computer',target=this.game.currentBet){return Math.max(0,target-this.seat(name).roundBet);}
  private snapshot(){const g=this.game,playerTurn=g.phase==='player_turn'&&g.turn==='player'&&!this.lock;const clone=(s:RoyalSeat,hide:boolean)=>({chips:s.chips,roundBet:s.roundBet,looked:s.looked,folded:s.folded,handType:hide?null:s.handType,cards:s.cards.map(c=>({...c}))});return{ready:g.ready,phase:g.phase,turn:g.turn,round:g.round,pot:g.pot,currentBet:g.currentBet,winner:g.winner,outcome:g.outcome,score:{...g.score},canDeal:!this.lock&&(g.phase==='waiting'||g.phase==='round_over'),canPeek:playerTurn&&!g.player.looked,canCall:playerTurn&&this.due('player')>0&&g.player.chips>=this.due('player'),canRaise:playerTurn&&g.player.chips>=this.due('player',g.currentBet+RAISE_STEP),canFold:playerTurn,canCompare:playerTurn,player:clone(g.player,!g.player.looked),computer:clone(g.computer,!(g.phase==='comparing'||g.phase==='round_over'||g.phase==='eliminated'))};}
  private bind(){const action=(id:string,fn:()=>void)=>document.querySelector(`[data-testid="${id}-btn"]`)?.addEventListener('click',fn);action('deal',()=>this.dealRound());action('peek',()=>this.peek());action('call',()=>this.call());action('raise',()=>this.raise());action('fold',()=>this.fold());action('compare',()=>this.compare());}
  private pay(name:'player'|'computer',amount:number){const side=this.seat(name);const paid=Math.max(0,Math.min(amount,side.chips));side.chips-=paid;side.roundBet+=paid;this.game.pot+=paid;if(paid)this.scene.stake(name,paid);return paid;}
  async dealRound(){if(!this.snapshot().canDeal)return;if(this.game.player.chips<ANTE||this.game.computer.chips<ANTE){this.game.phase='eliminated';this.game.winner=this.game.player.chips>=this.game.computer.chips?'player':'computer';this.game.outcome='elimination';this.paint();return;}this.lock=true;this.settled=false;this.scene.clear();this.game.round++;this.game.phase='dealing';this.game.turn=null;this.game.pot=0;this.game.currentBet=ANTE*2;this.game.winner=null;this.game.outcome=null;this.game.player={...freshRoyalSeat(this.game.player.chips)};this.game.computer={...freshRoyalSeat(this.game.computer.chips)};this.pay('player',ANTE);this.pay('computer',ANTE);this.shoe=new RoyalShoe();this.scene.setDeckCount(this.shoe.count);const flights=[];for(let i=0;i<3;i++)for(const owner of ['player','computer'] as const){const card=this.shoe.draw();this.scene.setDeckCount(this.shoe.count);this.seat(owner).cards.push(card);flights.push(this.scene.deal(this.scene.createCard(card,owner,i),i));}this.paint();await Promise.all(flights);for(const side of ['player','computer'] as const)this.seat(side).handType=gradeRoyalHand(this.seat(side).cards).name;this.game.phase='player_turn';this.game.turn='player';this.lock=false;this.paint();}
  async peek(){if(!this.snapshot().canPeek)return;this.lock=true;await this.scene.revealPlayer(this.game.player.cards);this.game.player.looked=true;this.lock=false;this.paint();}
  async call(){if(!this.snapshot().canCall)return;this.lock=true;this.pay('player',this.due('player'));this.game.phase='computer_turn';this.game.turn='computer';this.paint();await this.computerMove();}
  async raise(){if(!this.snapshot().canRaise)return;this.lock=true;this.game.currentBet+=RAISE_STEP;this.pay('player',this.due('player'));this.game.phase='computer_turn';this.game.turn='computer';this.paint();await this.computerMove();}
  async fold(){if(!this.snapshot().canFold)return;this.game.player.folded=true;await this.settle('computer','fold');}
  async compare(){if(!this.snapshot().canCompare)return;await this.showdown();}
  private async computerMove(){await new Promise(r=>setTimeout(r,900));if(this.settled)return;const move=chooseRoyalComputerMove({cards:this.game.computer.cards,chips:this.game.computer.chips,roundBet:this.game.computer.roundBet,currentBet:this.game.currentBet,pot:this.game.pot});if(move==='fold'){this.game.computer.folded=true;await this.settle('player','fold');return;}if(move==='compare'){await this.showdown();return;}if(move==='raise')this.game.currentBet+=RAISE_STEP;this.pay('computer',this.due('computer'));this.game.phase='player_turn';this.game.turn='player';this.lock=false;this.paint();}
  private async showdown(){if(this.settled)return;this.lock=true;this.game.phase='comparing';this.game.turn=null;this.paint();await this.scene.showdown(this.game.player.cards,this.game.computer.cards);const result=compareRoyalHands(this.game.player.cards,this.game.computer.cards);await this.settle(result>0?'player':result<0?'computer':null,'compare');}
  private async settle(winner:null|'player'|'computer',outcome:string){if(this.settled)return;this.settled=true;this.game.winner=winner;this.game.outcome=outcome;this.game.turn=null;if(winner){this.seat(winner).chips+=this.game.pot;this.game.score[winner]++;}else{const half=this.game.pot/2;this.game.player.chips+=half;this.game.computer.chips+=this.game.pot-half;}this.game.pot=0;this.game.currentBet=0;this.game.phase=(this.game.player.chips<ANTE||this.game.computer.chips<ANTE)?'eliminated':'round_over';if(this.game.phase==='eliminated')this.game.outcome='elimination';this.lock=false;this.paint();await new Promise(r=>setTimeout(r,60));}
  private paint(){
    const s=this.snapshot();
    const text=(q:string,v:any)=>{const el=document.querySelector(q);if(el)el.textContent=String(v)};
    text('[data-testid="pot"]',s.pot);
    text('[data-testid="player-chips"]',s.player.chips);
    text('[data-testid="computer-chips"]',s.computer.chips);
    text('[data-testid="player-score"]',s.score.player);
    text('[data-testid="computer-score"]',s.score.computer);
    text('[data-testid="current-bet"]',s.currentBet);
    text('[data-testid="turn"]',s.turn==='player'?'真人玩家':s.turn==='computer'?'电脑玩家':'等待');
    text('[data-testid="player-hand"]',s.player.looked?s.player.cards.map(c=>`${c.rank}${({S:'♠',H:'♥',D:'♦',C:'♣'} as any)[c.suit]}`).join(' '):s.player.cards.length?'••• ••• •••':'未发牌');
    text('[data-testid="player-hand-type"]',s.player.looked?s.player.handType:'未看牌');

    let statusTitle='等待', statusSub='点击发牌开始 1v1 对局', tone='';
    if(s.phase==='player_turn'){statusTitle='轮到你';statusSub='看牌、跟注、加注、弃牌或比牌';}
    else if(s.phase==='computer_turn'){statusTitle='电脑行动';statusSub='电脑正在根据牌力与下注决策';}
    else if(s.phase==='comparing'){statusTitle='比牌';statusSub='双方移牌至中央并翻牌';tone='compare';}
    else if(s.phase==='round_over'){statusTitle=s.winner==='player'?'真人胜利':s.winner==='computer'?'电脑胜利':'平分奖池';statusSub=s.outcome==='fold'?'弃牌结算':s.outcome==='compare'?'比牌结算':'胜利';tone=s.winner==='player'?'win':s.winner==='computer'?'loss':'compare';}
    else if(s.phase==='eliminated'){statusTitle='最终胜利 / 淘汰';statusSub=s.winner==='player'?'电脑筹码不足，你赢下牌桌':'你的筹码不足，电脑赢下牌桌';tone='eliminated';}
    else if(s.phase==='dealing'){statusTitle='发牌中';statusSub='三张暗牌正在入位';}
    const status=document.querySelector('[data-testid="game-status"]') as HTMLElement|null;
    const title=document.querySelector('[data-zjh-status-title]');
    const sub=document.querySelector('[data-zjh-status-sub]');
    if(title)title.textContent=statusTitle;
    if(sub)sub.textContent=statusSub;
    if(status)status.dataset.tone=tone;

    const pn=document.getElementById('player-note'), cn=document.getElementById('computer-note');
    if(pn)pn.textContent=s.player.looked?`${s.player.handType} · 已看牌`:(s.player.cards.length?'三张暗牌 · 未看':'等待发牌');
    if(cn)cn.textContent=(s.phase==='round_over'||s.phase==='eliminated')?`${s.computer.handType||'暗牌'} · 本局结束`:'三张暗牌 · 自动决策';

    for(const id of ['deal','peek','call','raise','fold','compare']){const b=document.querySelector(`[data-testid="${id}-btn"]`) as HTMLButtonElement|null;if(b)b.disabled=!(s as any)[`can${id[0].toUpperCase()+id.slice(1)}`];}
    const root=document.getElementById('root');if(root){root.dataset.winner=s.winner??'';root.dataset.phase=s.phase;}
  }
  dispose(){this.scene.dispose();}
}
