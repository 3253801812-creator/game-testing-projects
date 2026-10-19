import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { RoyalCard } from './domain';

const FELT='#006400', CARD_W=1.24, CARD_H=1.78;
const places={deck:new THREE.Vector3(0,.34,0),player:[new THREE.Vector3(-1.35,.15,2.35),new THREE.Vector3(0,.17,2.52),new THREE.Vector3(1.35,.15,2.35)],computer:[new THREE.Vector3(-1.35,.15,-3.05),new THREE.Vector3(0,.17,-3.22),new THREE.Vector3(1.35,.15,-3.05)]};

type RoyalActor={card:RoyalCard;owner:'player'|'computer'|'compare';mesh:THREE.Mesh;material:THREE.MeshBasicMaterial;faceTexture:THREE.Texture;backTexture:THREE.Texture};
type RoyalChip={id:string;owner:'player'|'computer';position:THREE.Vector3;rotationZ:number};

export class RoyalTableScene{
  scene=new THREE.Scene(); camera:THREE.PerspectiveCamera; renderer:THREE.WebGLRenderer; controls:OrbitControls; ambient:THREE.AmbientLight;
  private raf=0; private alive=true; private cards=new Map<string,RoyalActor>(); private chips:RoyalChip[]=[]; private chipMesh:THREE.InstancedMesh; private deckMesh:THREE.Mesh|null=null; private deckCount=52; private resize=()=>{}; private renderScale=Math.min(devicePixelRatio,.60);
  constructor(private host:HTMLElement){
    this.scene.background=new THREE.Color('#131b15');
    this.camera=new THREE.PerspectiveCamera(42,innerWidth/innerHeight,.1,100); this.camera.position.set(0,10.3,9.15);
    this.renderer=new THREE.WebGLRenderer({antialias:false,alpha:false,powerPreference:'high-performance',stencil:false}); this.renderer.setPixelRatio(this.renderScale); this.renderer.setSize(innerWidth,innerHeight,false); (this.renderer as any).outputEncoding=(THREE as any).sRGBEncoding; this.renderer.domElement.dataset.testid='game-canvas'; host.appendChild(this.renderer.domElement);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement); Object.assign(this.controls,{enableDamping:false,enablePan:false,minDistance:10,maxDistance:15,minPolarAngle:.62,maxPolarAngle:1.12}); this.controls.target.set(0,0,0); this.controls.update();
    this.ambient=new THREE.AmbientLight(0xffffff,.78); this.scene.add(this.ambient);
    const base=new THREE.Mesh(new THREE.BoxGeometry(17.2,.58,10.7),new THREE.MeshBasicMaterial({color:'#26170f'}));base.position.y=-.35;this.scene.add(base);
    const table=new THREE.Mesh(new THREE.PlaneGeometry(16.4,9.9),new THREE.MeshStandardMaterial({color:0x006400,roughness:.93,metalness:0}));table.rotation.x=-Math.PI/2;table.position.y=-.045;this.scene.add(table);
    this.chipMesh=new THREE.InstancedMesh(new THREE.CylinderGeometry(.24,.24,.09,16),new THREE.MeshBasicMaterial({color:'#e5c365'}),64); this.chipMesh.count=0; this.chipMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.scene.add(this.chipMesh);
    this.resize=()=>{this.camera.aspect=innerWidth/innerHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(innerWidth,innerHeight,false);}; addEventListener('resize',this.resize);
    let last=performance.now(),sum=0,count=0,tunedAt=last;
    const loop=(now:number)=>{if(!this.alive)return;const dt=now-last;last=now;if(dt>4&&dt<120){sum+=dt;count++;}if(now-tunedAt>1700&&count>=20){const avg=sum/count;let next=this.renderScale;if(avg>23&&next>.52)next=Math.max(.52,next-.04);if(Math.abs(next-this.renderScale)>.001){this.renderScale=next;this.renderer.setPixelRatio(this.renderScale);this.renderer.setSize(innerWidth,innerHeight,false);}sum=0;count=0;tunedAt=now;}this.renderer.render(this.scene,this.camera);this.raf=requestAnimationFrame(loop)}; this.raf=requestAnimationFrame(loop);
  }
  private canvasLabel(text:string){const c=document.createElement('canvas');c.width=512;c.height=96;const x=c.getContext('2d')!;x.font='600 28px Arial';x.textAlign='center';x.fillStyle='rgba(226,209,145,.72)';x.fillText(text,256,54);const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));sprite.scale.set(2.5,.48,1);return sprite;}
  private tuneTexture(t:THREE.Texture){t.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy());t.minFilter=THREE.LinearFilter;t.magFilter=THREE.LinearFilter;t.needsUpdate=true;return t;}
  private backTexture(){const c=document.createElement('canvas');c.width=320;c.height=448;const x=c.getContext('2d')!;x.fillStyle='#446b88';x.fillRect(0,0,c.width,c.height);x.strokeStyle='#efe8ce';x.lineWidth=10;x.strokeRect(15,15,290,418);x.strokeStyle='#c7aa59';x.lineWidth=4;x.strokeRect(29,29,262,390);return this.tuneTexture(new THREE.CanvasTexture(c));}
  private faceTexture(card:RoyalCard){const sym={S:'♠',H:'♥',D:'♦',C:'♣'}[card.suit];const red=card.suit==='H'||card.suit==='D';const c=document.createElement('canvas');c.width=420;c.height=600;const x=c.getContext('2d')!;x.fillStyle='#fbf7ed';x.fillRect(0,0,c.width,c.height);x.fillStyle=red?'#a12831':'#172321';x.font='bold 78px Georgia';x.fillText(card.rank,28,86);x.font='70px Georgia';x.fillText(sym,30,160);x.textAlign='center';x.font='150px Georgia';x.fillText(sym,210,350);x.textAlign='right';x.font='bold 66px Georgia';x.fillText(card.rank,388,520);x.font='60px Georgia';x.fillText(sym,388,582);return this.tuneTexture(new THREE.CanvasTexture(c));}
  private curved(material:THREE.Material){const g=new THREE.PlaneGeometry(CARD_W,CARD_H,10,2);const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i);p.setZ(i,Math.sin((x/CARD_W+.5)*Math.PI)*.045)}p.needsUpdate=true;g.computeVertexNormals();return new THREE.Mesh(g,material);}
  private ensureDeckMonument(){if(this.deckMesh)return;const mat=new THREE.MeshBasicMaterial({map:this.backTexture()});const deck=new THREE.Mesh(new THREE.BoxGeometry(CARD_W,.18,CARD_H),mat);deck.position.copy(places.deck);deck.position.y=.12;this.scene.add(deck);this.deckMesh=deck;}
  setDeckCount(count:number){this.deckCount=Math.max(0,Math.floor(count));}
  createCard(card:RoyalCard,owner:'player'|'computer',index:number){this.ensureDeckMonument();const faceTexture=this.faceTexture(card),backTexture=this.backTexture();const material=new THREE.MeshBasicMaterial({map:backTexture,side:THREE.DoubleSide});const mesh=this.curved(material);mesh.position.copy(places.deck);mesh.rotation.x=Math.PI/2;this.scene.add(mesh);const actor={card,owner,mesh,material,faceTexture,backTexture};this.cards.set(card.id,actor);return actor;}
  private animate(ms:number,step:(t:number)=>void){return new Promise<void>(done=>{const start=performance.now();const frame=(now:number)=>{const t=Math.min(1,(now-start)/ms);const q=1-Math.pow(1-t,3);step(q);if(t<1)requestAnimationFrame(frame);else done();};requestAnimationFrame(frame);});}
  async deal(actor:RoyalActor,index:number){const target=places[actor.owner][index].clone();await this.animate(520+index*45,t=>{actor.mesh.position.lerpVectors(places.deck,target,t);actor.mesh.position.y+=Math.sin(Math.PI*t)*.75;actor.mesh.rotation.z=(index-1)*.08*t;});}
  async revealPlayer(cards:RoyalCard[]){await Promise.all(cards.map((c,i)=>{const actor=this.cards.get(c.id)!;const start=actor.mesh.position.clone();const target=new THREE.Vector3((-1.3+i*1.3),.18,2.48+Math.abs(i-1)*.14);let swapped=false;return this.animate(540,t=>{actor.mesh.position.lerpVectors(start,target,t);actor.mesh.rotation.x=Math.PI/2-Math.PI*t;actor.mesh.rotation.z=(i-1)*-.12*t;if(t>.5&&!swapped){swapped=true;c.faceUp=true;actor.material.map=actor.faceTexture;actor.material.needsUpdate=true;}});}));}
  private syncChip(index:number){
    const chip=this.chips[index]; if(!chip)return;
    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI/2,0,chip.rotationZ));
    const m=new THREE.Matrix4().compose(chip.position,q,new THREE.Vector3(1,1,1));
    this.chipMesh.setMatrixAt(index,m); this.chipMesh.instanceMatrix.needsUpdate=true;
  }
  stake(owner:'player'|'computer',amount:number){
    if(this.chips.length>=64)return amount;
    const position=new THREE.Vector3(owner==='player'?3.05:-3.05,.28,owner==='player'?2.9:-2.9);
    const chip:RoyalChip={id:`royal-chip-${this.chips.length+1}`,owner,position,rotationZ:0};
    const index=this.chips.push(chip)-1; this.chipMesh.count=this.chips.length; this.syncChip(index);
    const start=position.clone();
    // Deterministic, separated pot slots keep wager chips observable across runs and
    // prevent a freshly animated chip from disappearing exactly on top of an ante chip.
    const slot=this.chips.length-1, angle=slot*2.399963229728653+(owner==='player'?0:Math.PI*.35);
    const radius=.32+(slot%3)*.11;
    const target=new THREE.Vector3(Math.cos(angle)*radius,.22,Math.sin(angle)*radius);
    this.animate(760,t=>{
      chip.position.lerpVectors(start,target,t);
      chip.position.y+=Math.sin(Math.PI*t)*1.08;
      chip.rotationZ=t*Math.PI*2.6; this.syncChip(index);
    });
    return amount;
  }
  async showdown(player:RoyalCard[],computer:RoyalCard[]){const all=[...player.map((c,i)=>[c,i,0] as const),...computer.map((c,i)=>[c,i,1] as const)];await Promise.all(all.map(([card,i,row])=>{const a=this.cards.get(card.id)!;a.owner='compare';const start=a.mesh.position.clone();const target=new THREE.Vector3((i-1)*1.58,.24,row?-1.10:1.10);let swapped=card.faceUp;return this.animate(720,t=>{a.mesh.position.lerpVectors(start,target,t);a.mesh.position.y+=Math.sin(Math.PI*t)*.78;a.mesh.rotation.x=Math.PI/2-Math.PI*t;a.mesh.rotation.z=(i-1)*.025*(1-t);if(t>.36&&!swapped){swapped=true;card.faceUp=true;a.material.map=a.faceTexture;a.material.needsUpdate=true;}});}));}
  private disposeObject(root:THREE.Object3D){
    const textures=new Set<THREE.Texture>(); const materials=new Set<THREE.Material>(); const geometries=new Set<THREE.BufferGeometry>();
    root.traverse(obj=>{const mesh=obj as THREE.Mesh;const geometry=(mesh as any).geometry as THREE.BufferGeometry|undefined;if(geometry?.dispose)geometries.add(geometry);const raw=(mesh as any).material as THREE.Material|THREE.Material[]|undefined;for(const material of raw?(Array.isArray(raw)?raw:[raw]):[]){materials.add(material);for(const value of Object.values(material as any)){if(value && typeof value==='object' && (value as any).isTexture)textures.add(value as THREE.Texture);}}});
    for(const texture of textures)texture.dispose(); for(const material of materials)material.dispose(); for(const geometry of geometries)geometry.dispose();
  }
  clear(){for(const a of this.cards.values()){this.scene.remove(a.mesh);this.disposeObject(a.mesh);a.faceTexture.dispose();a.backTexture.dispose();}this.cards.clear();this.chips=[];this.chipMesh.count=0;this.chipMesh.instanceMatrix.needsUpdate=true;this.deckCount=52;}
  state(){return{ready:true,threeRevision:String(THREE.REVISION),renderer:{ready:true,type:'WebGLRenderer'},canvas:{width:this.renderer.domElement.width,height:this.renderer.domElement.height},camera:{type:'PerspectiveCamera',fov:this.camera.fov,near:this.camera.near,far:this.camera.far,aspect:this.camera.aspect,position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},target:{x:this.controls.target.x,y:this.controls.target.y,z:this.controls.target.z}},ambientLight:{exists:true,intensity:this.ambient.intensity},orbitControls:{enabled:this.controls.enabled,target:{x:this.controls.target.x,y:this.controls.target.y,z:this.controls.target.z}},table:{color:FELT,roughness:.93,position:{x:0,y:-.045,z:0}},deck:{count:this.deckCount,position:{x:0,y:.34,z:0}},cards:[...this.cards.values()].map(a=>({id:a.card.id,owner:a.owner,rank:a.card.rank,suit:a.card.suit,faceUp:a.card.faceUp,position:{x:a.mesh.position.x,y:a.mesh.position.y,z:a.mesh.position.z},rotation:{x:a.mesh.rotation.x,y:a.mesh.rotation.y,z:a.mesh.rotation.z}})),chips:this.chips.map(c=>({id:c.id,owner:c.owner,position:{x:c.position.x,y:c.position.y,z:c.position.z}}))};}
  dispose(){this.alive=false;cancelAnimationFrame(this.raf);removeEventListener('resize',this.resize);this.controls.dispose();this.clear();this.disposeObject(this.scene);this.renderer.dispose();this.host.replaceChildren();}
}
