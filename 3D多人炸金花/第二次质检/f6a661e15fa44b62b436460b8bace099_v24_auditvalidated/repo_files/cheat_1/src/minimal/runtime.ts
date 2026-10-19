import { createMinimalGame } from './game';
import { createMinimalView } from './view';
export function mountMinimalRoyal(stage:HTMLElement){const view=createMinimalView(stage);const game=createMinimalGame(view);return()=>game.dispose();}
