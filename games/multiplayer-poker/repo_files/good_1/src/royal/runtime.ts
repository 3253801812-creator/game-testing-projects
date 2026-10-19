import { RoyalMatchController } from './controller';
import { RoyalTableScene } from './scene';
export function mountRoyalFelt(stage:HTMLElement){const scene=new RoyalTableScene(stage);const match=new RoyalMatchController(scene);return()=>match.dispose();}
