/**
 * Token-key -> CSS-variable-name helper, shared by the Tailwind preset and the
 * `scripts/build-tokens.mjs` generator (which imports the underlying `.mjs`).
 */
import { cssVarName } from './tokens.data.mjs';
import type { TokenCategory } from './tokens.data.mjs';

export { cssVarName };
export type { TokenCategory };

/** Returns a `var(--token)` reference for use in the Tailwind preset. */
export function cssVar(category: TokenCategory, key: string): string {
  return `var(${cssVarName(category, key)})`;
}
