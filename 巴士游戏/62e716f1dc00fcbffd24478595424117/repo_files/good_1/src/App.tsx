import { useEffect, useRef } from 'react';
import { mountBusSimulator } from './runtime';
import config from './variant.json';
export default function App(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{if(!ref.current)return;return mountBusSimulator(ref.current,config);},[]);return <div ref={ref} className="app-root"/>;}
