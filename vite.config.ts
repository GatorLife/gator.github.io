import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});
