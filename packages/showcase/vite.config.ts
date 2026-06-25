import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Alias '@albin/ui' to the library SOURCE for instant HMR (no dist dependency).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@albin/ui': resolve(__dirname, '../ui/src/index.ts'),
    },
  },
});
