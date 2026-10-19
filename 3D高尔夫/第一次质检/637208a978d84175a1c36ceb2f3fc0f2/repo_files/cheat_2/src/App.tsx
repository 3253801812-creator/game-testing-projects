import { useEffect } from 'react';
import { mountIndependentMiniGolf } from './gameRuntime';
export default function App(){ useEffect(()=>mountIndependentMiniGolf(),[]); return <div id="react-game-root" className="h-screen w-screen overflow-hidden" />; }
