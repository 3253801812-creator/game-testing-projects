import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  server: { host: true },
  build: {
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'index.html'),
        play: resolve(process.cwd(), 'play.html'),
        standalone: resolve(process.cwd(), 'standalone.html'),
      },
    },
  },
})
