import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tailwind-preset': 'src/tailwind/preset.ts',
  },
  format: ['esm', 'cjs'],
  // Use a non-composite tsconfig for dts generation (composite is reserved for
  // `tsc -b` typechecking and breaks tsup's ad-hoc dts program).
  tsconfig: 'tsconfig.build.json',
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  // Components ship no CSS; the token stylesheet is generated separately and
  // copied into dist after the JS build completes.
  onSuccess: 'node scripts/build-tokens.mjs',
});
