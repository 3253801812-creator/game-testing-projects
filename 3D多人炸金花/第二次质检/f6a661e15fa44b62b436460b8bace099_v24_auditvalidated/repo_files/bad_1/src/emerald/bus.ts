export type EmeraldEventName='round:start'|'card:deal'|'hand:peek'|'chip:move'|'showdown'|'state:changed'|'table:clear';
export class EmeraldBus extends EventTarget{
  publish(name:EmeraldEventName,detail:any={}){this.dispatchEvent(new CustomEvent(name,{detail}));}
  on(name:EmeraldEventName,fn:(data:any)=>void){const listener=(e:any)=>fn(e.detail);this.addEventListener(name,listener);return()=>this.removeEventListener(name,listener);}
}
