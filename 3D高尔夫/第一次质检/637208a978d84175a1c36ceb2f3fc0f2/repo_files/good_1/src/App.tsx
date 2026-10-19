import { useEffect, useRef } from 'react';

export default function App() {
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    void import('./gameRuntime');
  }, []);

  return <div id="game-root" className="w-full min-h-screen bg-slate-950" />;
}
