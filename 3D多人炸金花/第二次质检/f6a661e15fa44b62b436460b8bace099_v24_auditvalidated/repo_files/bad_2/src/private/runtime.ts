import { PrivateTableScene } from './scene';
export function mountPrivateTableScene(stage:HTMLElement,engine:any){const scene=new PrivateTableScene(stage,engine);(window as any).__scene={getState:()=>scene.state()};return()=>scene.dispose();}
