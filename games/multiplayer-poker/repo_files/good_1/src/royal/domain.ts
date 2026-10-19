export type RoyalSuit = 'S'|'H'|'D'|'C';
export type RoyalRank = '2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'J'|'Q'|'K'|'A';
export type RoyalCard = { id:string; suit:RoyalSuit; rank:RoyalRank; faceUp:boolean };
export type RoyalSeat = { chips:number; roundBet:number; looked:boolean; folded:boolean; handType:string|null; cards:RoyalCard[] };

const royalRank:Record<RoyalRank,number>={ '2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,J:11,Q:12,K:13,A:14 };
const royalTypes=['','单张','对子','顺子','金花','同花顺','豹子'];
let shoeNo=0;

export class RoyalShoe {
  private cards:RoyalCard[]=[];
  constructor(random:()=>number=Math.random){
    const suits:RoyalSuit[]=['S','H','D','C'];
    const ranks:RoyalRank[]=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const batch=++shoeNo;
    for(const suit of suits) for(const rank of ranks) this.cards.push({id:`royal-${batch}-${suit}-${rank}`,suit,rank,faceUp:false});
    for(let tail=this.cards.length-1;tail>0;tail--){const pick=Math.floor(random()*(tail+1));[this.cards[tail],this.cards[pick]]=[this.cards[pick],this.cards[tail]];}
  }
  draw(){const card=this.cards.pop(); if(!card) throw new Error('Royal shoe exhausted'); return card;}
  get count(){return this.cards.length;}
}

export class RoyalHandValue {
  constructor(public category:number, public key:number[], public name:string){}
  compare(other:RoyalHandValue){
    if(this.category!==other.category) return Math.sign(this.category-other.category);
    for(let i=0;i<Math.max(this.key.length,other.key.length);i++){const delta=(this.key[i]??0)-(other.key[i]??0);if(delta) return Math.sign(delta);}
    return 0;
  }
  get strength(){return this.category*20+(this.key[0]??0);}
}

export function gradeRoyalHand(cards:RoyalCard[]):RoyalHandValue{
  const values=cards.map(c=>royalRank[c.rank]);
  const sorted=[...values].sort((a,b)=>a-b);
  const groups=new Map<number,number>(); values.forEach(v=>groups.set(v,(groups.get(v)??0)+1));
  const flush=new Set(cards.map(c=>c.suit)).size===1;
  const wheel=sorted.join(',')==='2,3,14'; // A-2-3 最小
  const normalStraight=new Set(sorted).size===3 && sorted[1]===sorted[0]+1 && sorted[2]===sorted[1]+1; // Q-K-A 最大
  const straight=wheel||normalStraight, high=wheel?3:sorted[2];
  let category=1,key=[...sorted].reverse();
  if(groups.size===1){category=6;key=[sorted[0]];}
  else if(flush&&straight){category=5;key=[high];}
  else if(flush){category=4;}
  else if(straight){category=3;key=[high];}
  else if([...groups.values()].includes(2)){
    category=2; const pair=[...groups].find(([,n])=>n===2)![0], kicker=[...groups].find(([,n])=>n===1)![0]; key=[pair,kicker];
  }
  return new RoyalHandValue(category,key,royalTypes[category]);
}

export function compareRoyalHands(left:RoyalCard[],right:RoyalCard[]){
  return gradeRoyalHand(left).compare(gradeRoyalHand(right));
}

export function freshRoyalSeat(chips=1000):RoyalSeat{return{chips,roundBet:0,looked:false,folded:false,handType:null,cards:[]};}
