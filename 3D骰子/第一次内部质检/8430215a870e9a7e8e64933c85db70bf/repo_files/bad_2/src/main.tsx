import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

/* 3D骰子 · 霓虹轨道台 — independent Bubble Craps implementation. */

type MachineState = "idle" | "rolling" | "settling" | "resolved";
type TablePhase = "come_out" | "point";
type BetType = "pass" | "come" | "place" | "buy" | "progressive_low" | "progressive_high" | "progressive_hitall";
type BetStatus = "active" | "pending" | "established";
type Outcome = "win" | "lose" | "move" | "keep";

type Vec3 = { x:number; y:number; z:number };
type Quat = { x:number; y:number; z:number; w:number };
type Euler = { x:number; y:number; z:number };

interface DieState {
  id: 1 | 2;
  value: number | null;
  topFace: number | null;
  position: Vec3;
  rotation: Euler;
  quaternion: Quat;
  linearVelocity: Vec3;
  angularVelocity: Vec3;
  isSettled: boolean;
  stableSamples: number;
}

interface Bet {
  id:string;
  type:BetType;
  number:number|null;
  amount:number;
  odds:number;
  status:BetStatus;
  createdRollId:number;
}

interface ProgressiveState {
  key:"low"|"high"|"hitall";
  label:string;
  targets:number[];
  hits:number[];
  activeBetId:string|null;
  completedCount:number;
  payoutMultiplier:number;
}

interface LedgerEntry {
  betId:string;
  type:string;
  number:number|null;
  outcome:Outcome;
  stake:number;
  odds:number;
  credit:number;
  profit:number;
  reason:string;
}

interface Settlement {
  rollId:number;
  total:number;
  balanceBefore:number;
  balanceAfter:number;
  timestamp:number;
  entries:LedgerEntry[];
}

interface RollResult { rollId:number; die1:number; die2:number; total:number; timestamp:number }
interface LogEvent { index:number; type:string; rollId:number; value?:unknown; timestamp:number }

const VARIANT = "neon-orbit-terminal";
const ROLL_DURATION = 540;
const SETTLE_DURATION = 360;
const VALID_NUMBERS = [4,5,6,8,9,10];
const CHIPS = [1,5,10,25,100];
const FACE_NORMALS: Record<number,Vec3> = {
  1:{x:0,y:0,z:1}, 2:{x:0,y:1,z:0}, 3:{x:1,y:0,z:0},
  4:{x:-1,y:0,z:0}, 5:{x:0,y:-1,z:0}, 6:{x:0,y:0,z:-1}
};
const WORLD_UP = {x:0,y:1,z:0};

function clone<T>(value:T):T { return JSON.parse(JSON.stringify(value)); }
function clamp(v:number,min:number,max:number){ return Math.max(min,Math.min(max,v)); }
function easeOutCubic(t:number){ return 1-Math.pow(1-t,3); }
function easeInOut(t:number){ return t<.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; }
function validInteger(v:unknown){ return typeof v === "number" && Number.isInteger(v); }
function randomDie(){
  const data = new Uint32Array(1);
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(data);
  else data[0] = Math.floor(Math.random()*0xffffffff);
  return (data[0] % 6) + 1;
}
function vec(x=0,y=0,z=0):Vec3 { return {x,y,z}; }
function magnitude(v:Vec3){ return Math.hypot(v.x,v.y,v.z); }

function quatNormalize(q:Quat):Quat {
  const m=Math.hypot(q.x,q.y,q.z,q.w)||1;
  return {x:q.x/m,y:q.y/m,z:q.z/m,w:q.w/m};
}
function quatFromEuler(x:number,y:number,z:number):Quat {
  const c1=Math.cos(x/2), c2=Math.cos(y/2), c3=Math.cos(z/2);
  const s1=Math.sin(x/2), s2=Math.sin(y/2), s3=Math.sin(z/2);
  return quatNormalize({
    x:s1*c2*c3-c1*s2*s3,
    y:c1*s2*c3+s1*c2*s3,
    z:c1*c2*s3-s1*s2*c3,
    w:c1*c2*c3+s1*s2*s3
  });
}
function rotateVector(q:Quat,v:Vec3):Vec3 {
  const ix=q.w*v.x+q.y*v.z-q.z*v.y;
  const iy=q.w*v.y+q.z*v.x-q.x*v.z;
  const iz=q.w*v.z+q.x*v.y-q.y*v.x;
  const iw=-q.x*v.x-q.y*v.y-q.z*v.z;
  return {
    x:ix*q.w+iw*-q.x+iy*-q.z-iz*-q.y,
    y:iy*q.w+iw*-q.y+iz*-q.x-ix*-q.z,
    z:iz*q.w+iw*-q.z+ix*-q.y-iy*-q.x
  };
}
function topFaceFromQuaternion(q:Quat):number {
  let best=1, score=-Infinity;
  for(const [key,normal] of Object.entries(FACE_NORMALS)){
    const w=rotateVector(q,normal);
    const dot=w.x*WORLD_UP.x+w.y*WORLD_UP.y+w.z*WORLD_UP.z;
    if(dot>score){score=dot;best=Number(key);}
  }
  return best;
}
function nlerp(a:Quat,b:Quat,t:number):Quat {
  let bb=b;
  if(a.x*b.x+a.y*b.y+a.z*b.z+a.w*b.w<0) bb={x:-b.x,y:-b.y,z:-b.z,w:-b.w};
  return quatNormalize({x:a.x+(bb.x-a.x)*t,y:a.y+(bb.y-a.y)*t,z:a.z+(bb.z-a.z)*t,w:a.w+(bb.w-a.w)*t});
}
function orientationForFace(face:number):{rotation:Euler;quaternion:Quat}{
  const map:Record<number,Euler>={
    1:{x:-Math.PI/2,y:0,z:0}, 2:{x:0,y:0,z:0}, 3:{x:0,y:0,z:Math.PI/2},
    4:{x:0,y:0,z:-Math.PI/2}, 5:{x:Math.PI,y:0,z:0}, 6:{x:Math.PI/2,y:0,z:0}
  };
  const rotation=map[face];
  return {rotation:{...rotation},quaternion:quatFromEuler(rotation.x,rotation.y,rotation.z)};
}


function quaternionCssRotation(q:Quat):string {
  const normalized=quatNormalize(q);
  const w=clamp(normalized.w,-1,1);
  const angle=2*Math.acos(w);
  const s=Math.sqrt(Math.max(0,1-w*w));
  if(s<.0001||angle<.0001) return "rotate3d(1,0,0,0rad)";
  return `rotate3d(${normalized.x/s},${normalized.y/s},${normalized.z/s},${angle}rad)`;
}
function stabilizeDiceGeometry(){
  const maxRadius=88;
  for(const d of dice){
    const radius=Math.hypot(d.position.x,d.position.z);
    if(radius>maxRadius){const k=maxRadius/radius;d.position.x*=k;d.position.z*=k;}
    d.position.y=Math.max(0,d.position.y);
  }
  const [a,b]=dice,dx=b.position.x-a.position.x,dz=b.position.z-a.position.z;
  const distance=Math.hypot(dx,dz),minDistance=68;
  if(distance<minDistance && Math.abs(a.position.y-b.position.y)<34){
    const nx=distance>.001?dx/distance:1,nz=distance>.001?dz/distance:0,push=(minDistance-distance)/2;
    a.position.x-=nx*push;a.position.z-=nz*push;b.position.x+=nx*push;b.position.z+=nz*push;
  }
}

function makeProgressives(){
  return {
    low:{key:"low",label:"LOW",targets:[2,3,4,5,6],hits:[],activeBetId:null,completedCount:0,payoutMultiplier:35} as ProgressiveState,
    high:{key:"high",label:"HIGH",targets:[8,9,10,11,12],hits:[],activeBetId:null,completedCount:0,payoutMultiplier:35} as ProgressiveState,
    hitall:{key:"hitall",label:"HIT ALL",targets:[2,3,4,5,6,8,9,10,11,12],hits:[],activeBetId:null,completedCount:0,payoutMultiplier:176} as ProgressiveState
  };
}
function freshDice():DieState[]{
  const a=orientationForFace(2), b=orientationForFace(5);
  return [
    {id:1,value:2,topFace:2,position:{x:-46,y:0,z:4},rotation:a.rotation,quaternion:a.quaternion,linearVelocity:vec(),angularVelocity:vec(),isSettled:true,stableSamples:12},
    {id:2,value:5,topFace:5,position:{x:46,y:0,z:-5},rotation:b.rotation,quaternion:b.quaternion,linearVelocity:vec(),angularVelocity:vec(),isSettled:true,stableSamples:12}
  ];
}

const state = {
  ready:true,
  variant:VARIANT,
  machineState:"idle" as MachineState,
  tablePhase:"come_out" as TablePhase,
  point:null as number|null,
  balance:1000,
  selectedChip:5,
  locked:false,
  canRoll:true,
  rollId:0,
  lastRoll:null as RollResult|null,
  history:[] as RollResult[],
  activeBets:[] as Bet[],
  progressive:makeProgressives(),
  settlementLedger:[] as Settlement[],
  dome:{radius:146,floorPulse:0,floorOffset:0}
};
let dice=freshDice();
let queue:Array<[number,number]>=[];
let events:LogEvent[]=[];
let eventIndex=0;
let betSerial=0;
let frameHandle=0;
let activeToken=0;
let settleResolvers:Array<(r:RollResult)=>void>=[];
let activeRoll:{pair:[number,number];started:number;settleStarted:number;startDice:DieState[]}|null=null;

function log(type:string,value?:unknown){
  events.push({index:++eventIndex,type,rollId:state.rollId,value:clone(value),timestamp:Date.now()});
  if(events.length>500) events=events.slice(-500);
}
function betId(){ return `b${Date.now().toString(36)}_${(++betSerial).toString(36)}`; }
function nextPair():[number,number]{ return queue.length ? queue.shift()! : [randomDie(),randomDie()]; }
function findBet(id:string){ return state.activeBets.find(b=>b.id===id); }
function removeBet(id:string){ state.activeBets=state.activeBets.filter(b=>b.id!==id); }
function progressiveForType(type:BetType):ProgressiveState|null {
  if(type==="progressive_low") return state.progressive.low;
  if(type==="progressive_high") return state.progressive.high;
  if(type==="progressive_hitall") return state.progressive.hitall;
  return null;
}
function trueOddsProfit(stake:number,num:number){
  if(num===4||num===10) return Math.floor(stake*2);
  if(num===5||num===9) return Math.floor(stake*3/2);
  return Math.floor(stake*6/5);
}
function placeProfit(stake:number,num:number){
  if(num===4||num===10) return Math.floor(stake*12/5); // BUG: 12:5 instead of 9:5
  if(num===5||num===9) return Math.floor(stake*7/5);
  return Math.floor(stake*7/6);
}
function buyProfit(stake:number,num:number){
  return trueOddsProfit(stake,num); // BUG: 5% vig not deducted
}
function pushEntry(entries:LedgerEntry[],bet:Bet,outcome:Outcome,credit:number,profit:number,reason:string){
  entries.push({betId:bet.id,type:bet.type,number:bet.number,outcome,stake:bet.amount,odds:bet.odds,credit,profit,reason});
}

function selectChip(amount:number){
  if(state.locked || !CHIPS.includes(amount)) return false;
  state.selectedChip=amount; log("chip_selected",amount); render(); return true;
}
function placeBet(type:string,number:number|null=null,amount=state.selectedChip):string|null {
  if(state.locked || !validInteger(amount) || amount<=0 || state.balance<amount) return null;
  const allowed:BetType[]=["pass","come","place","buy","progressive_low","progressive_high","progressive_hitall"];
  if(!allowed.includes(type as BetType)) return null;
  const typed=type as BetType;
  if((typed==="place"||typed==="buy") && (!validInteger(number)||!VALID_NUMBERS.includes(number!))) return null;
  /* BUG: come allowed in any phase */
  if((typed==="pass") && state.activeBets.some(b=>b.type==="pass")){
    const existing=state.activeBets.find(b=>b.type==="pass")!;
    existing.amount+=amount; state.balance-=amount; log("bet_increased",{id:existing.id,amount}); render(); return existing.id;
  }
  const tracker=progressiveForType(typed);
  if(tracker?.activeBetId){
    const existing=findBet(tracker.activeBetId);
    if(!existing) tracker.activeBetId=null;
    else { existing.amount+=amount; state.balance-=amount; log("bet_increased",{id:existing.id,amount}); render(); return existing.id; }
  }
  if(typed==="place"||typed==="buy"){
    const existing=state.activeBets.find(b=>b.type===typed&&b.number===number);
    if(existing){ existing.amount+=amount; state.balance-=amount; log("bet_increased",{id:existing.id,amount}); render(); return existing.id; }
  }
  const bet:Bet={id:betId(),type:typed,number:(typed==="place"||typed==="buy")?number:null,amount,odds:0,status:typed==="come"?"pending":"active",createdRollId:state.rollId};
  state.activeBets.push(bet); state.balance-=amount;
  if(tracker) tracker.activeBetId=bet.id;
  log("bet_placed",bet); render(); return bet.id;
}
function addOdds(id:string,amount=state.selectedChip){
  if(state.locked || !validInteger(amount)||amount<=0||state.balance<amount) return false;
  const bet=findBet(id); if(!bet) return false;
  const eligible=(bet.type==="pass"&&state.tablePhase==="point"&&state.point!==null)||(bet.type==="come"&&bet.status==="established"&&bet.number!==null);
  if(!eligible || bet.odds+amount>bet.amount*3) return false;
  bet.odds+=amount; state.balance-=amount; log("odds_added",{id,amount,total:bet.odds}); render(); return true;
}
function clearBets(){
  if(state.locked) return false;
  const refund=state.activeBets.reduce((sum,b)=>sum+b.amount+b.odds,0);
  state.balance+=refund; state.activeBets=[];
  for(const tracker of Object.values(state.progressive)){ tracker.activeBetId=null; tracker.hits=[]; }
  log("bets_cleared",refund); render(); return true;
}

function beginRoll(){
  if(state.locked || state.machineState==="rolling" || state.machineState==="settling") return false;
  const pair=nextPair();
  state.rollId+=1; state.machineState="rolling"; state.locked=true; state.canRoll=false;
  state.dome.floorPulse=0; state.dome.floorOffset=0;
  dice.forEach(d=>{d.isSettled=false;d.stableSamples=0;d.value=null;});
  const now=performance.now(); activeToken++; const token=activeToken;
  activeRoll={pair,started:now,settleStarted:0,startDice:clone(dice)};
  log("machine_state","rolling"); render();
  const tick=(time:number)=>{
    if(token!==activeToken || !activeRoll) return;
    if(state.machineState==="rolling") animateRolling(time,token,tick);
    else if(state.machineState==="settling") animateSettling(time,token,tick);
  };
  frameHandle=requestAnimationFrame(tick);
  window.setTimeout(()=>{if(token===activeToken&&activeRoll&&state.locked)resolveRoll(activeRoll.pair);},ROLL_DURATION+SETTLE_DURATION+500);
  return true;
}
function animateRolling(time:number,token:number,tick:(t:number)=>void){if(!activeRoll||token!==activeToken)return;const t=clamp((time-activeRoll.started)/ROLL_DURATION,0,1),radius=64*(1-t*.38);state.dome.floorPulse=.35+.65*Math.abs(Math.sin(t*Math.PI*10));state.dome.floorOffset=Math.sin(t*Math.PI*12)*5*(1-t);dice.forEach((d,i)=>{const angle=t*(17+i*3)+i*Math.PI;d.position.x=Math.cos(angle)*radius+(i?12:-12);d.position.z=Math.sin(angle*1.13)*radius*.72;d.position.y=18+Math.abs(Math.sin(angle*1.7))*55*(1-t*.18);const rx=angle*2.4,ry=angle*1.7+i,rz=angle*2.9;d.rotation={x:rx,y:ry,z:rz};d.quaternion=quatFromEuler(rx,ry,rz);d.topFace=topFaceFromQuaternion(d.quaternion);d.linearVelocity={x:-Math.sin(angle)*15,y:Math.cos(angle*1.7)*13,z:Math.cos(angle*1.13)*10};d.angularVelocity={x:14*(1-t*.15),y:11*(1-t*.15),z:16*(1-t*.15)};});stabilizeDiceGeometry();renderDiceOnly();if(t>=1){state.machineState="settling";activeRoll.settleStarted=time;activeRoll.startDice=clone(dice);log("machine_state","settling");render();}frameHandle=requestAnimationFrame(tick);}
function animateSettling(time:number,token:number,tick:(t:number)=>void){
  if(!activeRoll||token!==activeToken)return;
  const t=clamp((time-activeRoll.settleStarted)/SETTLE_DURATION,0,1);
  const eased=easeInOut(t);
  const finals=[{x:-46,z:4},{x:46,z:-5}];
  dice.forEach((d,i)=>{
    const start=activeRoll!.startDice[i], target=orientationForFace(activeRoll!.pair[i]);
    d.position.x=start.position.x+(finals[i].x-start.position.x)*eased;
    d.position.z=start.position.z+(finals[i].z-start.position.z)*eased;
    d.position.y=(1-eased)*start.position.y+Math.abs(Math.sin(t*Math.PI*3))*8*(1-t);
    d.quaternion=nlerp(start.quaternion,target.quaternion,eased);
    d.rotation={
      x:start.rotation.x+(target.rotation.x-start.rotation.x)*eased,
      y:start.rotation.y+(target.rotation.y-start.rotation.y)*eased,
      z:start.rotation.z+(target.rotation.z-start.rotation.z)*eased
    };
    d.topFace=topFaceFromQuaternion(d.quaternion);
    const decay=1-eased;
    d.linearVelocity={x:decay*2,y:decay*3,z:decay*2}; d.angularVelocity={x:decay*2,y:decay*2,z:decay*2};
    d.stableSamples=t>.76?Math.floor((t-.76)/.02):0;
  });
  stabilizeDiceGeometry();
  state.dome.floorPulse=(1-t)*.18*Math.abs(Math.sin(t*Math.PI*5)); state.dome.floorOffset=(1-t)*2*Math.sin(t*Math.PI*5);
  renderDiceOnly();
  if(t>=1) resolveRoll(activeRoll.pair);
  else frameHandle=requestAnimationFrame(tick);
}
function resolveRoll(pair:[number,number]){
  cancelAnimationFrame(frameHandle);
  dice.forEach((d,i)=>{
    const target=orientationForFace(pair[i]);
    d.value=pair[i]; d.topFace=pair[i]; d.position={x:i?46:-46,y:0,z:i?-5:4};
    d.rotation=target.rotation; d.quaternion=target.quaternion; d.linearVelocity=vec(); d.angularVelocity=vec(); d.isSettled=true; d.stableSamples=12;
  });
  state.dome.floorPulse=0; state.dome.floorOffset=0;
  const result:RollResult={rollId:state.rollId,die1:pair[0],die2:pair[1],total:pair[0]+pair[1],timestamp:Date.now()};
  state.lastRoll=result; state.history.push(result); if(state.history.length>60)state.history=state.history.slice(-60);
  settleBets(result.total);
  state.machineState="resolved"; state.locked=false; state.canRoll=true; activeRoll=null;
  log("machine_state","resolved"); log("roll_resolved",result); render();
  const resolvers=settleResolvers.splice(0); resolvers.forEach(r=>r(clone(result)));
}

function settleBets(total:number){
  const before=state.balance, entries:LedgerEntry[]=[];
  const priorPhase=state.tablePhase, priorPoint=state.point;
  const bets=[...state.activeBets];
  for(const bet of bets){
    if(!findBet(bet.id)) continue;
    if(bet.type==="pass"){
      if(priorPhase==="come_out"){
        if(total===7||total===11){pushEntry(entries,bet,"keep",0,0,"Pass Line natural – BUG: not paid");}
        else if(total===2||total===3||total===12){pushEntry(entries,bet,"lose",0,-bet.amount,"Pass Line craps");removeBet(bet.id);}
        else pushEntry(entries,bet,"keep",0,0,"Point established");
      } else if(total===priorPoint){
        const op=trueOddsProfit(bet.odds,priorPoint!); const c=bet.amount*2+bet.odds+op; state.balance+=c;
        pushEntry(entries,bet,"win",c,bet.amount+op,"Pass point made"); removeBet(bet.id);
      } else if(total===7){ pushEntry(entries,bet,"lose",0,-(bet.amount+bet.odds),"Seven out"); removeBet(bet.id); }
      else pushEntry(entries,bet,"keep",0,0,"Pass remains working");
    } else if(bet.type==="come"){
      if(bet.status==="pending"){
        if(total===7||total===11){const c=bet.amount*2;state.balance+=c;pushEntry(entries,bet,"win",c,bet.amount,"Come natural");removeBet(bet.id);}
        else if(total===2||total===3||total===12){pushEntry(entries,bet,"lose",0,-bet.amount,"Come craps");removeBet(bet.id);}
        else {bet.status="established";bet.number=total;pushEntry(entries,bet,"move",0,0,`Come moved to ${total}`);}
      } else if(bet.number===total){
        const op=trueOddsProfit(bet.odds,bet.number!); const c=bet.amount*2+bet.odds+op; state.balance+=c;
        pushEntry(entries,bet,"win",c,bet.amount+op,"Come number repeated"); removeBet(bet.id);
      } else if(total===7){pushEntry(entries,bet,"lose",0,-(bet.amount+bet.odds),"Established Come lost to 7");removeBet(bet.id);}
      else pushEntry(entries,bet,"keep",0,0,"Come remains established");
    } else if(bet.type==="place"){
      if(total===7){pushEntry(entries,bet,"lose",0,-bet.amount,"Place lost to 7");removeBet(bet.id);}
      else if(total===bet.number){const p=placeProfit(bet.amount,bet.number!);state.balance+=p;pushEntry(entries,bet,"win",p,p,"Place paid; stake remains working");}
      else pushEntry(entries,bet,"keep",0,0,"Place remains working");
    } else if(bet.type==="buy"){
      if(total===7){pushEntry(entries,bet,"lose",0,-bet.amount,"Buy lost to 7");removeBet(bet.id);}
      else if(total===bet.number){const p=buyProfit(bet.amount,bet.number!);state.balance+=p;pushEntry(entries,bet,"win",p,p,"Buy true odds less 5% commission");}
      else pushEntry(entries,bet,"keep",0,0,"Buy remains working");
    }
  }
  if(total===7){
    /* benchmark defect: stale progressive lamps survive a seven */
    for(const bet of [...state.activeBets]){
      const tracker=progressiveForType(bet.type); if(!tracker)continue;
      pushEntry(entries,bet,"lose",0,-bet.amount,"Progressive reset by 7"); removeBet(bet.id); tracker.activeBetId=null;
    }
  } else {
    for(const tracker of Object.values(state.progressive)){
      if(!tracker.activeBetId) continue;
      const bet=findBet(tracker.activeBetId); if(!bet){tracker.activeBetId=null;continue;}
      if(tracker.targets.includes(total)&&!tracker.hits.includes(total)){tracker.hits.push(total);tracker.hits.sort((a,b)=>a-b);}
      const complete=tracker.targets.every(n=>tracker.hits.includes(n));
      if(complete){
        const c=bet.amount*tracker.payoutMultiplier; state.balance+=c;
        pushEntry(entries,bet,"win",c,c-bet.amount,`${tracker.label} completed`); removeBet(bet.id);
        tracker.activeBetId=null; tracker.completedCount+=1; tracker.hits=[];
      } else pushEntry(entries,bet,"keep",0,0,tracker.targets.includes(total)?`${tracker.label} advanced`:`${tracker.label} unchanged`);
    }
  }
  if(priorPhase==="come_out" && [4,5,6,8,9,10].includes(total)){state.tablePhase="point";state.point=total;}
  else if(priorPhase==="point" && (total===7||total===priorPoint)){state.tablePhase="come_out";state.point=null;}
  const ledger:Settlement={rollId:state.rollId,total,balanceBefore:before,balanceAfter:state.balance,timestamp:Date.now(),entries};
  state.settlementLedger.push(ledger); if(state.settlementLedger.length>80)state.settlementLedger=state.settlementLedger.slice(-80);
  log("settlement",ledger);
}


const DICE_X_SCALE=1.05;
const DICE_Z_SCALE=0.68;
const DICE_Y_SCALE=0.92;

const pipMap:Record<number,string[]>={
  1:["c"],2:["tl","br"],3:["tl","c","br"],4:["tl","tr","bl","br"],5:["tl","tr","c","bl","br"],6:["tl","ml","bl","tr","mr","br"]
};
function faceMarkup(n:number){return `<div class="face face-${n}">${pipMap[n].map(p=>`<i class="pip ${p}"></i>`).join("")}</div>`;}
function dieMarkup(id:number){return `<div class="die-wrap" data-testid="die-${id}" aria-label="Die ${id}"><div class="die-cube">${[1,2,3,4,5,6].map(faceMarkup).join("")}</div></div>`;}
function oddsText(n:number){return n===4||n===10?'9:5':n===5||n===9?'7:5':'7:6';}
function progressiveLights(key:"low"|"high"|"hitall"){
  const p=state.progressive[key];
  return p.targets.map(n=>`<i data-testid="progress-light-${key}-${n}" data-hit="false">${n}</i>`).join('');
}

function neonSector(n:number){return `<article class="neon-sector"><div class="sector-head"><span>${n}</span><em>${oddsText(n)}</em></div><div class="sector-controls"><button type="button" data-testid="place-${n}" data-action="place" data-number="${n}">PLACE</button><div data-slot="place-${n}" class="bet-slot"></div><button type="button" data-testid="buy-${n}" data-action="buy" data-number="${n}">BUY</button><div data-slot="buy-${n}" class="bet-slot"></div></div></article>`;}
function neonTrack(key:"low"|"high"|"hitall",tid:string){const p=state.progressive[key];return `<article class="neon-track ${key}"><div class="track-title"><button type="button" data-testid="${tid}" data-progressive="${key}">${p.label}<b>${key==='hitall'?'175:1':'34:1'}</b></button><span data-progress-stake="${key}">BET 0</span><span data-progress-count="${key}">WINS 0</span></div><div class="track-lights">${progressiveLights(key)}</div></article>`;}
function staticApp(host: HTMLElement){host.innerHTML=`<main id="game-root" data-testid="game-root" class="neon-terminal"><header class="neon-header"><div class="signal"></div><div><small>ORBIT SERIES / LIVE SIMULATION</small><h1>3D骰子 NEON ORBIT</h1></div><div class="network">ONLINE</div></header><section class="neon-score"><div><label>BANK</label><strong data-testid="balance">1000</strong></div><div><label>MODE</label><strong data-testid="table-phase">COME OUT</strong></div><div><label>POINT</label><strong data-testid="point-value">—</strong></div><div><label>RESULT</label><strong data-testid="last-roll">—</strong></div></section><section class="orbit-stage"><div class="orbit-rings"><div id="bubble-dome" data-testid="bubble-dome"><div class="scanline"></div><div data-testid="dice-arena" class="dice-arena"><div data-testid="pulsing-floor" class="pulsing-floor"></div>${dieMarkup(1)}${dieMarkup(2)}</div></div></div><button type="button" data-testid="roll-btn" class="neon-roll"><i></i><span data-roll-label>ROLL</span><small>ENERGIZE</small></button></section><section class="neon-progress-panel">${neonTrack('low','progressive-low')}${neonTrack('high','progressive-high')}${neonTrack('hitall','progressive-hitall')}</section><section class="neon-chip-dock"><strong>WAGER UNIT</strong>${CHIPS.map(c=>`<button type="button" data-testid="chip-${c}" data-chip="${c}" class="chip chip-${c}">${c}</button>`).join('')}</section><section id="betting-board" data-testid="betting-board" class="neon-board"><div class="neon-main-bets"><div class="pass-module"><button type="button" data-testid="pass-line" data-action="pass"><b>PASS</b><small>LINE</small></button><div data-slot="pass" class="bet-slot"></div></div><button type="button" data-testid="come" data-action="come">COME</button><button type="button" data-testid="pass-odds" data-action="pass-odds">ODDS<br><small>MAX 3×</small></button><button type="button" data-testid="clear-bets" data-action="clear">CLEAR</button></div><div class="neon-sector-grid">${VALID_NUMBERS.map(neonSector).join('')}</div><section class="neon-come"><span>ACTIVE COME CHANNELS</span><div data-come-list class="come-list"><span class="empty">No Come bets working</span></div></section></section><footer>TRUE ODDS ENGINE · DUPLICATE-SAFE PROGRESSIVES · TOUCH TERMINAL</footer></main>`;wireEvents();render();}

function wireEvents(){
  document.addEventListener("click",event=>{
    const target=(event.target as HTMLElement).closest("button") as HTMLButtonElement|null; if(!target)return;
    if(target.dataset.chip){selectChip(Number(target.dataset.chip));return;}
    if(target.dataset.action==="place"||target.dataset.action==="buy"){placeBet(target.dataset.action,Number(target.dataset.number));return;}
    if(target.dataset.action==="pass"){placeBet("pass");return;}
    if(target.dataset.action==="come"){placeBet("come");return;}
    if(target.dataset.action==="pass-odds"){
      const bet=state.activeBets.find(b=>b.type==="pass"); if(bet)addOdds(bet.id); return;
    }
    if(target.dataset.action==="clear"){clearBets();return;}
    if(target.dataset.comeOdds){addOdds(target.dataset.comeOdds);return;}
    if(target.dataset.progressive){placeBet(`progressive_${target.dataset.progressive}`);return;}
    if(target.dataset.testid==="roll-btn"){beginRoll();return;}
  });
}
function betChip(b:Bet){
  const number=b.number??"";
  return `<div class="bet-chip" data-testid="bet-chip-${b.id}" data-type="${b.type}" data-number="${number}" data-amount="${b.amount}" data-odds="${b.odds}"><b>${b.amount}</b>${b.odds?`<small>+${b.odds} ODDS</small>`:''}</div>`;
}
function render(){
  const balance=document.querySelector('[data-testid="balance"]'); if(!balance)return;
  balance.textContent=String(state.balance+1); // BUG: DOM shows +1 bias
  document.querySelector('[data-testid="table-phase"]')!.textContent=state.tablePhase==="come_out"?"COME OUT":"POINT";
  document.querySelector('[data-testid="point-value"]')!.textContent=state.point===null?"—":String(state.point);
  document.querySelector('[data-testid="last-roll"]')!.textContent=state.lastRoll?`${state.lastRoll.die1} + ${state.lastRoll.die2} = ${state.lastRoll.total}`:"—";
  document.querySelectorAll<HTMLButtonElement>('[data-chip]').forEach(b=>b.classList.toggle('selected',Number(b.dataset.chip)===state.selectedChip));
  document.querySelectorAll<HTMLButtonElement>('button').forEach(b=>{if(b.dataset.testid!==undefined||b.dataset.action||b.dataset.progressive||b.dataset.chip)b.disabled=state.locked;});
  const roll=document.querySelector<HTMLButtonElement>('[data-testid="roll-btn"]')!; roll.disabled=!state.canRoll; roll.classList.toggle('rolling',state.locked);
  const label=roll.querySelector<HTMLElement>('[data-roll-label]')||roll.querySelector<HTMLElement>('span'); if(label)label.textContent=state.locked?state.machineState.toUpperCase():"ROLL";
  const pass=state.activeBets.find(b=>b.type==="pass");
  document.querySelector('[data-slot="pass"]')!.innerHTML=pass?betChip(pass):"";
  for(const n of VALID_NUMBERS){
    for(const type of ["place","buy"] as const){const b=state.activeBets.find(x=>x.type===type&&x.number===n);document.querySelector(`[data-slot="${type}-${n}"]`)!.innerHTML=b?betChip(b):"";}
  }
  const come=state.activeBets.filter(b=>b.type==="come");
  document.querySelector('[data-come-list]')!.innerHTML=come.length?come.map(b=>`<div class="come-chip">${betChip(b)}<span>${b.status==="pending"?"COMING":`ON ${b.number}`}</span>${b.status==="established"?`<button type="button" data-testid="come-odds-${b.id}" data-come-odds="${b.id}">ADD ODDS</button>`:""}</div>`).join(''):'<span class="empty">No Come bets working</span>';
  for(const key of ["low","high","hitall"] as const){
    const p=state.progressive[key], bet=p.activeBetId?findBet(p.activeBetId):null;
    document.querySelector(`[data-progress-stake="${key}"]`)!.textContent=`BET ${bet?.amount||0}`;
    document.querySelector(`[data-progress-count="${key}"]`)!.textContent=`WINS ${p.completedCount}`;
    for(const n of p.targets){const el=document.querySelector(`[data-testid="progress-light-${key}-${n}"]`)!;const hit=p.hits.includes(n);el.setAttribute("data-hit",String(hit));el.classList.toggle("hit",hit);}
  }
  renderDiceOnly();
}
function renderDiceOnly(){
  const floor=document.querySelector<HTMLElement>('[data-testid="pulsing-floor"]'); if(!floor)return;
  floor.style.setProperty('--pulse',String(state.dome.floorPulse)); floor.style.setProperty('--floor-offset',`${state.dome.floorOffset}px`);
  document.getElementById('bubble-dome')!.style.setProperty('--dome-pulse',String(state.dome.floorPulse));
  dice.forEach(d=>{
    const el=document.querySelector<HTMLElement>(`[data-testid="die-${d.id}"]`)!;
    el.dataset.value=d.value===null?"":String(d.value); el.dataset.topFace=d.topFace===null?"":String(d.topFace);
    el.dataset.x=String(d.position.x);el.dataset.y=String(d.position.y);el.dataset.z=String(d.position.z);el.dataset.settled=String(d.isSettled);
    el.style.transform=`translate(-50%,-50%) translate3d(${d.position.x*DICE_X_SCALE}px,${d.position.z*DICE_Z_SCALE-d.position.y*DICE_Y_SCALE}px,0)`;
    el.style.zIndex=String(10+Math.round(d.position.y)+Math.round(d.position.z*.02));
    const cube=el.querySelector<HTMLElement>('.die-cube')!;
    cube.style.transform=`rotateX(72deg) rotateZ(-6deg) ${quaternionCssRotation(d.quaternion)}`;
    el.style.filter=`drop-shadow(0 ${8+Math.min(18,d.position.y*.25)}px ${8+Math.min(20,d.position.y*.2)}px rgba(0,0,0,.52))`;
  });
}

function gameSnapshot(){return clone({...state,activeBets:state.activeBets,progressive:state.progressive,settlementLedger:state.settlementLedger});}
function diceSnapshot(){return clone({rolling:state.machineState==="rolling"||state.machineState==="settling",machineState:state.machineState,floorPulse:state.dome.floorPulse,floorOffset:state.dome.floorOffset,domeRadius:state.dome.radius,dice});}
function betSnapshot(){return clone({selectedChip:state.selectedChip,balance:state.balance,locked:state.locked,bets:state.activeBets,maxOddsMultiplier:3});}
function resetGame(balance=1000){
  if(!validInteger(balance)||balance<0)return false;
  activeToken++;cancelAnimationFrame(frameHandle);activeRoll=null;queue=[];settleResolvers=[];
  Object.assign(state,{ready:true,variant:VARIANT,machineState:"idle",tablePhase:"come_out",point:null,balance,selectedChip:5,locked:false,canRoll:true,rollId:0,lastRoll:null,history:[],activeBets:[],progressive:makeProgressives(),settlementLedger:[],dome:{radius:146,floorPulse:0,floorOffset:0}});
  dice=freshDice();events=[];eventIndex=0;betSerial=0;log("reset",balance);render();return true;
}
function forceRoll(d1:number,d2:number){if(!validInteger(d1)||!validInteger(d2)||d1<1||d1>6||d2<1||d2>6)return false;queue.push([d1,d2]);log("roll_queued",[d1,d2]);return true;}
function setNextRolls(seq:Array<[number,number]>){if(!Array.isArray(seq)||!seq.every(p=>Array.isArray(p)&&p.length===2&&validInteger(p[0])&&validInteger(p[1])&&p[0]>=1&&p[0]<=6&&p[1]>=1&&p[1]<=6))return false;queue=seq.map(p=>[p[0],p[1]]);log("roll_queue_replaced",queue);return true;}
function waitForSettled(timeoutMs=5000):Promise<RollResult>{
  if(state.machineState==="resolved"&&state.lastRoll)return Promise.resolve(clone(state.lastRoll));
  return new Promise((resolve,reject)=>{let done=false;const finish=(r:RollResult)=>{if(done)return;done=true;clearTimeout(timer);resolve(r)};settleResolvers.push(finish);const timer=setTimeout(()=>{if(done)return;done=true;settleResolvers=settleResolvers.filter(x=>x!==finish);reject(new Error("waitForSettled timeout"));},timeoutMs);});
}

const w=window as any;
w.__game={getState:gameSnapshot};
w.__dice={getState:diceSnapshot};
w.__bets={getState:betSnapshot};
w.__progressives={getState:()=>clone(state.progressive)};
w.__test={
  forceRoll,setNextRolls,waitForSettled,
  setBalance:(amount:number)=>{if(state.locked||!validInteger(amount)||amount<0)return false;state.balance=amount;log("balance_set",amount);render();return true;},
  resetGame,getEventLog:()=>clone(events),getFaceContract:()=>clone({worldUp:WORLD_UP,localFaceNormals:FACE_NORMALS}),
  placeBet,addOdds,selectChip,clearBets,roll:beginRoll
};
window.__contract={getState:()=>({version:"1.0.0",gameType:"bubble-craps",renderer:"css3d",stateSource:"live",hooksReady:true,hookNames:["__game","__dice","__bets","__progressives","__test","__contract"],buildId:"neon-orbit-terminal"})};


function App() {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (hostRef.current) staticApp(hostRef.current);
  }, []);
  return <div ref={hostRef} />;
}

createRoot(document.getElementById('root')!).render(<App />);
