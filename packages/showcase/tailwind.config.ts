import type { Config } from 'tailwindcss';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { uiPreset } from '../ui/src/tailwind/preset';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const config: Config = {
  presets: [uiPreset as Config],
  content: [
    resolve(__dirname, '../ui/src/**/*.{ts,tsx}'),
    resolve(__dirname, './src/**/*.{ts,tsx}'),
    resolve(__dirname, './index.html'),
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
