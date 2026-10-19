import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './pineRing';

type PineRingMount = { destroy: () => void };
type PineRingGlobal = { mount: (host: HTMLElement) => PineRingMount };

declare global {
  interface Window {
    PineRingGame: PineRingGlobal;
  }
}

function App() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const mounted = window.PineRingGame.mount(host);
    return () => mounted.destroy();
  }, []);

  return <div ref={hostRef} className="pine-ring-react-host" />;
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Missing #root');
createRoot(rootElement).render(<App />);
