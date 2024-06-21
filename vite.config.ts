import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';
import { readFileSync } from 'fs';


import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
export default defineConfig({
  plugins: [react(),],

  build: {
    outDir: './docs'
  },
  base: '/'
});
