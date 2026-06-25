import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { fontSize } from '../tokens/tokens.data.mjs';

/**
 * Our design tokens use custom names for font sizes (`text-label`, `text-h2`,
 * …) and for colors (`text-primary-fg`, `text-text-muted`, …). Out of the box
 * tailwind-merge can't tell a custom `text-*` font-size from a custom `text-*`
 * color, so it treats e.g. `text-label` and `text-primary-fg` as conflicting
 * and silently drops one — which strips button text colors. Registering our
 * font-size token names in the `font-size` group makes them resolve correctly,
 * leaving color classes intact.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: Object.keys(fontSize) }],
    },
  },
});

/** Merge conditional class names with Tailwind conflict resolution. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
