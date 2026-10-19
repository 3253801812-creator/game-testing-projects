import { EmeraldBus } from './bus';
import { EmeraldSession } from './session';
import { EmeraldWorld } from './world';
export function mountEmeraldRoom(host:HTMLElement){const channel=new EmeraldBus();const world=new EmeraldWorld(host,channel);const session=new EmeraldSession(channel);(window as any).__scene={getState:()=>world.state()};return()=>{session.dispose();world.dispose();};}
