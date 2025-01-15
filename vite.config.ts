import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sabermais-landing-page/',
  build: {
    outDir: 'docs', // Output files to the /docs folder
  },
  plugins: [react()]
});
