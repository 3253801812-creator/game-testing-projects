import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { mountPondPractice } from './pondPractice';

function App() {
  const host = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!host.current) return;
    const mounted = mountPondPractice(host.current);
    return () => mounted.destroy();
  }, []);
  return <div ref={host} className="practice-react-host" />;
}

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root');
createRoot(root).render(<App />);
