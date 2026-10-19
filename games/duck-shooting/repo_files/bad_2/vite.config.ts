import { defineConfig } from 'vite';

const commandConfig = defineConfig({
  base: './', build: { outDir: 'dist', emptyOutDir: true, assetsDir: 'command-assets' },
});
export default commandConfig;
