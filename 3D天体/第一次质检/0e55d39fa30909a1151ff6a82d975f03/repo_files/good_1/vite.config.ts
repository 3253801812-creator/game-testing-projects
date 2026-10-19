import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // The production application has one canonical HTML entry: index.html -> /src/main.tsx.
    // play.html is a generated direct-play artifact and is intentionally not a second Rollup entry.
    target: 'es2022',
  },
})
