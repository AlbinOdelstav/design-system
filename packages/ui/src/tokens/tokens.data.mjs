/**
 * SINGLE SOURCE OF TRUTH for design tokens.
 *
 * This file is plain `.mjs` on purpose so it can be imported by BOTH:
 *   - the Node token generator (scripts/build-tokens.mjs, no TS loader), and
 *   - the TypeScript code (tokens.ts / css-var-name.ts / tailwind/preset.ts)
 * Types live alongside in `tokens.data.d.mts`.
 *
 * Every token maps to a CSS custom property (see `cssVarName`) emitted into
 * `:root {}` by the generator, and to a `var(--...)` reference in the Tailwind
 * preset. Editing a value here is the only place a token changes.
 */

export const colors = {
  'bg-base': '#FDFAF6',
  'bg-subtle': '#F7F0E8',
  surface: '#FFFFFF',
  'surface-raised': '#FFFFFF',
  overlay: 'rgba(44,34,24,0.40)',

  'border-subtle': '#EDE2D5',
  border: '#DDD0C0',
  'border-strong': '#C5B3A0',

  text: '#2C2218',
  'text-muted': '#6B5548',
  'text-subtle': '#8A7160',
  'text-inverse': '#FFFFFF',
  'text-placeholder': '#A89280',

  primary: '#0A79A0',
  'primary-hover': '#085F80',
  'primary-active': '#064862',
  'primary-fg': '#FFFFFF',
  'primary-subtle': '#C8E7F3',
  'primary-subtle-fg': '#064862',

  secondary: '#C4604F',
  'secondary-hover': '#A34A3B',
  'secondary-fg': '#7F3830',
  'secondary-subtle': '#F9DDD7',
  'secondary-subtle-fg': '#7F3830',

  success: '#0F8A5F',
  'success-hover': '#0B6E4B',
  'success-fg': '#FFFFFF',
  'success-subtle': '#D4F0E5',
  'success-subtle-fg': '#0B5E41',

  warning: '#B87A1E',
  'warning-hover': '#8F5D0D',
  'warning-fg': '#FFFFFF',
  'warning-subtle': '#FEF0D0',
  'warning-subtle-fg': '#7A4E0A',

  danger: '#C03535',
  'danger-hover': '#9A2525',
  'danger-fg': '#FFFFFF',
  'danger-subtle': '#FCE4E4',
  'danger-subtle-fg': '#8A1515',

  info: '#0A79A0',
  'info-subtle': '#C8E7F3',
  'info-subtle-fg': '#064862',
};

export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
};

export const shadow = {
  xs: '0 1px 2px rgba(44,34,24,0.06)',
  sm: '0 1px 3px rgba(44,34,24,0.08), 0 1px 2px rgba(44,34,24,0.04)',
  md: '0 4px 12px rgba(44,34,24,0.08), 0 2px 4px rgba(44,34,24,0.04)',
  lg: '0 8px 24px rgba(44,34,24,0.10), 0 4px 8px rgba(44,34,24,0.05)',
  xl: '0 16px 48px rgba(44,34,24,0.12), 0 8px 16px rgba(44,34,24,0.06)',
  focus: '0 0 0 3px rgba(10,121,160,0.30)',
  'focus-danger': '0 0 0 3px rgba(192,53,53,0.30)',
};

export const fontFamily = {
  sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

// [size, lineHeight]
export const fontSize = {
  display: ['3rem', '1.10'],
  h1: ['2rem', '1.20'],
  h2: ['1.5rem', '1.25'],
  h3: ['1.25rem', '1.30'],
  h4: ['1.125rem', '1.35'],
  'body-lg': ['1.125rem', '1.60'],
  body: ['1rem', '1.60'],
  'body-sm': ['0.875rem', '1.55'],
  label: ['0.875rem', '1.40'],
  'label-sm': ['0.75rem', '1.40'],
  caption: ['0.75rem', '1.50'],
  overline: ['0.6875rem', '1.40'],
};

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const letterSpacing = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.08em',
};

export const duration = {
  instant: '0ms',
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
};

export const easing = {
  ease: 'cubic-bezier(0.4,0,0.2,1)',
  out: 'cubic-bezier(0,0,0.2,1)',
  in: 'cubic-bezier(0.4,0,1,1)',
  spring: 'cubic-bezier(0.34,1.56,0.64,1)',
};

export const borderWidth = {
  '1': '1px',
  '2': '2px',
};

const PREFIX = {
  color: 'color',
  radius: 'radius',
  shadow: 'shadow',
  fontFamily: 'font',
  fontSize: 'text',
  lineHeight: 'leading',
  fontWeight: 'weight',
  letterSpacing: 'tracking',
  duration: 'duration',
  easing: 'ease',
  borderWidth: 'border',
};

/**
 * Maps a token (category, key) to its CSS custom property name.
 * Shared by the generator and the Tailwind preset so naming never drifts.
 */
export function cssVarName(category, key) {
  const prefix = PREFIX[category];
  if (!prefix) throw new Error(`Unknown token category: ${category}`);
  return `--${prefix}-${key}`;
}

export const tokens = {
  colors,
  radius,
  shadow,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  duration,
  easing,
  borderWidth,
};
