import { useEffect, useState } from 'react'
import UniverseShell from './components/UniverseShell'

export default function App() {
  const [runtimeError, setRuntimeError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    import('./game/runtime').catch((error: unknown) => {
      if (!active) return
      const message = error instanceof Error ? error.message : String(error)
      console.error(error)
      setRuntimeError(message)
    })
    return () => { active = false }
  }, [])

  return (
    <div className="app-root relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <UniverseShell />
      {runtimeError ? (
        <div className="fixed inset-x-4 top-4 z-[9999] rounded-xl border border-red-400/30 bg-red-950/90 p-4 text-sm text-red-100 shadow-2xl">
          3D runtime failed to initialize: {runtimeError}
        </div>
      ) : null}
    </div>
  )
}
