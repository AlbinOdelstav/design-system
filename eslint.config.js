import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/.vite/**',
      '**/*.tsbuildinfo',
      '**/styles.css',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLButtonElement: 'readonly',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      // Keep rules sane — don't block on stylistic nits.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'jsx-a11y/no-autofocus': 'off',
      // Label is a reusable primitive associated via `htmlFor` by consumers; the
      // rule can't see that and yields false positives on the design-system atom.
      'jsx-a11y/label-has-associated-control': 'off',
      // The tabs follow the ARIA roving-tabindex pattern (focus lives on the tabs,
      // not the tablist container), which this rule flags as a false positive.
      'jsx-a11y/interactive-supports-focus': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
  {
    // Node-context scripts/configs and the token data module.
    files: ['**/*.{mjs,cjs,js}', '**/*.config.{ts,js}', 'scripts/**', 'tools/**'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
        module: 'writable',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
);
