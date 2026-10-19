export const emeraldSuits=['S','H','D','C'] as const;
export const emeraldRanks=['2','3','4','5','6','7','8','9','10','J','Q','K','A'] as const;
const points=new Map(emeraldRanks.map((r,i)=>[r,i+2]));
const labels=['单张','对子','顺子','金花','同花顺','豹子'];
let run=0;
export function emeraldPack(){const token=++run;const deck:any[]=[];emeraldSuits.forEach(s=>emeraldRanks.forEach(r=>deck.push({id:`emerald-${token}-${s}-${r}`,suit:s,rank:r,faceUp:false})));let i=deck.length;while(i){const j=(Math.random()*i--)|0;[deck[i],deck[j]]=[deck[j],deck[i]];}return deck;}
export function emeraldHand(cards:any[]){const nums=cards.map(c=>points.get(c.rank)).sort((a,b)=>a-b);const histogram=nums.reduce((m,v)=>(m[v]=(m[v]||0)+1,m),{});const sameSuit=cards.every(c=>c.suit===cards[0].suit);const ladder=nums[0]+1===nums[1]&&nums[1]+1===nums[2];const top=nums[2];let tier=0,vector=[...nums].reverse();if(Object.keys(histogram).length===1){tier=5;vector=[nums[0]];}else if(sameSuit&&ladder){tier=4;vector=[top];}else if(sameSuit){tier=3;}else if(ladder){tier=2;vector=[top];}else{const pair=Object.entries(histogram).find(([,n])=>n===2);if(pair){tier=1;vector=[Number(pair[0]),Number(Object.keys(histogram).find(k=>k!==pair[0]))];}}return{tier,vector,name:labels[tier],strength:(tier+1)*21+vector[0]};}
export function emeraldCompare(left:any[],right:any[]){const a=emeraldHand(left),b=emeraldHand(right);if(a.tier!==b.tier)return Math.sign(a.tier-b.tier);for(let n=0;n<3;n++){const d=(a.vector[n]||0)-(b.vector[n]||0);if(d)return Math.sign(d);}return 0;}
