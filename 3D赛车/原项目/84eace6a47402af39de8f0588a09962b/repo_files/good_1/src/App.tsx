import { useEffect } from 'react';
import { mountGame } from './game.js';
export default function App(){ useEffect(()=>mountGame(document.getElementById('game-shell')!),[]); return <div id="game-shell" />; }
