import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { mountCanopyCreek } from './canopyCreek';

function CanopyCreekApp() {
  const host = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!host.current) return;
    return mountCanopyCreek(host.current);
  }, []);

  return <div ref={host} className="app-shell" />;
}

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root mount point');
createRoot(root).render(<CanopyCreekApp />);
