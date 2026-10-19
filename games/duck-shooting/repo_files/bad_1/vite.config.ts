import { defineConfig } from 'vite';

const auroraBuild = { outDir: 'dist', emptyOutDir: true, assetsDir: 'aurora-assets' };
export default defineConfig({ base: './', build: auroraBuild });
