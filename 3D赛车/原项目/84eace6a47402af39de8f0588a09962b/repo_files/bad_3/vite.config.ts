import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

function singleFileDist() {
  return {
    name: 'bad-3-single-file-dist',
    closeBundle() {
      const distDir = resolve(process.cwd(), 'dist')
      const indexPath = resolve(distDir, 'index.html')
      if (!existsSync(indexPath)) return

      let html = readFileSync(indexPath, 'utf8')
      html = html.replace(
        /<link\s+rel=["']stylesheet["']\s+crossorigin\s+href=["']\.\/([^"']+)["']\s*\/?>(?:<\/link>)?/g,
        (_match, assetPath) => `<style>${readFileSync(resolve(distDir, assetPath), 'utf8')}</style>`,
      )
      html = html.replace(
        /<link\s+rel=["']stylesheet["']\s+href=["']\.\/([^"']+)["']\s*\/?>(?:<\/link>)?/g,
        (_match, assetPath) => `<style>${readFileSync(resolve(distDir, assetPath), 'utf8')}</style>`,
      )
      html = html.replace(
        /<script\s+type=["']module["'](?:\s+crossorigin)?\s+src=["']\.\/([^"']+)["']\s*><\/script>/g,
        (_match, assetPath) => `<script type="module">${readFileSync(resolve(distDir, assetPath), 'utf8')}</script>`,
      )
      writeFileSync(indexPath, html, 'utf8')
      rmSync(resolve(distDir, 'assets'), { recursive: true, force: true })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), singleFileDist()],
  server: { host: '0.0.0.0' },
  build: {
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
