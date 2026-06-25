# @albin/ui — personal fitness design system

A React + TypeScript design system for a series of personal fitness web apps, plus
a local showcase site to browse every component and screen.

It is an npm-workspaces monorepo with two packages:

- **`packages/ui`** — `@albin/ui`, the publishable component library. Tokens, a
  Tailwind preset, 49 atoms and 18 full-screen view compositions.
- **`packages/showcase`** — `@albin/showcase`, a private Vite app that renders the
  library from source (instant HMR) for local development.

## Quick start

```bash
npm install            # installs all workspaces + generates token CSS (prepare hook)
npm run dev            # starts the showcase at http://localhost:5173
```

Other root scripts:

| Script | What it does |
| --- | --- |
| `npm run dev` | Run the showcase (Vite dev server) |
| `npm run build` | Build the library (`@albin/ui`) with tsup → `packages/ui/dist` |
| `npm run build:showcase` | Production build of the showcase |
| `npm run build:tokens` | Regenerate the token CSS from `tokens.data.mjs` |
| `npm run typecheck` | `tsc -b` across both packages |
| `npm run lint` | ESLint (flat config) |
| `npm run test` | Vitest (jsdom) — render smoke + interaction tests |
| `npm run verify:dist` | After `npm run build`, assert dist has the expected files |

> Windows note: all scripts are shell-neutral. The token generator and dist checks
> are plain Node scripts (no bash-only chaining).

## Architecture

```
design-system/
├─ package.json            # workspaces + orchestration scripts
├─ tsconfig.base.json      # shared compiler options
├─ tsconfig.json           # solution file (project references)
├─ eslint.config.js        # flat config
├─ vitest.config.ts        # jsdom + @albin/ui source alias
├─ tools/check-dist.mjs    # post-build dist smoke
├─ tests/                  # render smoke + targeted interaction tests
└─ packages/
   ├─ ui/                  # @albin/ui
   │  ├─ tsup.config.ts    # builds src/index.ts + src/tailwind/preset.ts
   │  ├─ scripts/build-tokens.mjs
   │  └─ src/
   │     ├─ index.ts                 # public barrel
   │     ├─ tokens/                  # tokens.data.mjs (source of truth) + helpers
   │     ├─ tailwind/preset.ts       # Tailwind preset built from tokens
   │     ├─ tailwind/base.css        # @tailwind layers + token vars + globals
   │     ├─ lib/cn.ts
   │     ├─ components/<Name>/<Name>.tsx
   │     └─ views/<group>/<Name>View.tsx
   └─ showcase/            # @albin/showcase (Vite, private)
      └─ src/showcases/**/*.showcase.tsx
```

## How the token system works

The single source of truth is **`packages/ui/src/tokens/tokens.data.mjs`** — a plain
`.mjs` data module (so it can be read by Node without a TypeScript loader). Each
token maps to:

1. a CSS custom property in `:root` (via `scripts/build-tokens.mjs`), and
2. a Tailwind theme value that references `var(--token)` (via `tailwind/preset.ts`).

The `cssVarName(category, key)` helper (shared by the generator and the preset)
guarantees the names never drift.

To change a token: edit `tokens.data.mjs`, then regenerate the CSS:

```bash
npm run build:tokens     # rewrites src/tailwind/styles.css (+ dist on a built package)
# restart the showcase dev server if it was running
```

`build:tokens` also runs automatically on `npm install` (the `prepare` hook) and on
every library build (`tsup` `onSuccess`), so `styles.css` is always present.

## Adding a new atom

1. Create `packages/ui/src/components/<Name>/<Name>.tsx`. Use `cva` for variants,
   `cn` to merge classes, type props as
   `React.XxxHTMLAttributes<...> & VariantProps<typeof variants>`, always accept and
   merge `className`, and spread native props. Never build class strings with
   interpolation — use full class strings in `cva` variant maps.
2. Add a one-line re-export (component + prop type) to `packages/ui/src/index.ts`.
3. Create `packages/showcase/src/showcases/atoms/<Name>.showcase.tsx` exporting
   `export const meta = { name, category: 'atoms', order? } as const` and a default
   component rendering the states.

No registry edits needed — the showcase discovers `*.showcase.tsx` via
`import.meta.glob`, and the render smoke test covers it automatically.

## Adding a new view

1. Create `packages/ui/src/views/<group>/<Name>View.tsx`. Views are **presentational**:
   typed props with sensible defaults, internal mock data, no data fetching, no
   router coupling. Interaction is exposed through optional callback props.
2. Re-export it from `packages/ui/src/index.ts`.
3. Add `packages/showcase/src/showcases/views/<Name>View.showcase.tsx` with
   `category: 'views'`.

## Consuming `@albin/ui` from a future fitness app

> **Step 0 — build the library first.** A `file:` consumer resolves against
> `packages/ui/dist`, which does **not** exist until you build it. The `prepare`
> hook only generates the token CSS, not the JS bundle. So before installing the
> library in another app, run `npm run build` in this repo — and rebuild after any
> change to `@albin/ui`:
>
> ```bash
> # in this repo
> npm run build            # produces packages/ui/dist (index.js, base.css, styles.css, preset)
> ```

```jsonc
// app/package.json
{
  "dependencies": {
    "@albin/ui": "file:../design-system/packages/ui"
  }
}
```

```ts
// app/tailwind.config.ts
import type { Config } from 'tailwindcss';
import { uiPreset } from '@albin/ui/tailwind-preset';

export default {
  presets: [uiPreset as Config],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@albin/ui/dist/**/*.js', // scan the library's class names
  ],
} satisfies Config;
```

```ts
// app/src/main.tsx
import '@albin/ui/base.css'; // Tailwind layers + generated token variables
```

```tsx
import { Button, DashboardView } from '@albin/ui';
```

The library ships no component CSS — styling flows entirely through the Tailwind
preset + the token CSS variables, so apps stay in control of their build.

## Testing

- **Render smoke** (`tests/smoke.test.tsx`) renders every `*.showcase.tsx` (so every
  atom and view) and asserts nothing throws, plus checks key barrel exports.
- **Interaction tests** cover Modal (open/close + focus return), Tabs (switch +
  arrow keys), Toast (enqueue/dismiss), FormField (error + aria wiring) and Timer
  (countdown with fake timers).

Run with `npm run test`.
