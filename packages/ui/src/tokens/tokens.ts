/**
 * Typed re-export of the raw token data. The runtime values live in
 * `tokens.data.mjs` (so plain Node can read them); this module just adds types.
 */
export {
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
  tokens,
  cssVarName,
} from './tokens.data.mjs';

export type { TokenCategory } from './tokens.data.mjs';

export type ColorToken = string;
