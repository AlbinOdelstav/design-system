import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@albin/ui': resolve(__dirname, 'packages/ui/src/index.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    include: ['tests/**/*.test.{ts,tsx}'],
    css: false,
  },
});
