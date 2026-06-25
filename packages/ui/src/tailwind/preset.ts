import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import {
  colors,
  radius,
  shadow,
  fontSize,
  fontWeight,
  letterSpacing,
  duration,
  easing,
  borderWidth,
} from '../tokens/tokens.data.mjs';
import { cssVar } from '../tokens/css-var-name';

/** Build a Tailwind theme map of `key -> var(--token)` references. */
function colorVars() {
  return Object.fromEntries(
    Object.keys(colors).map((key) => [key, cssVar('color', key)]),
  );
}

function radiusVars() {
  return Object.fromEntries(
    Object.keys(radius).map((key) => [key, cssVar('radius', key)]),
  );
}

function shadowVars() {
  return Object.fromEntries(
    Object.keys(shadow).map((key) => [key, cssVar('shadow', key)]),
  );
}

function fontSizeVars(): Record<string, [string, { lineHeight: string }]> {
  return Object.fromEntries(
    Object.keys(fontSize).map((key) => [
      key,
      [cssVar('fontSize', key), { lineHeight: cssVar('lineHeight', key) }],
    ]),
  );
}

function fontWeightVars() {
  return Object.fromEntries(
    Object.keys(fontWeight).map((key) => [key, cssVar('fontWeight', key)]),
  );
}

function letterSpacingVars() {
  return Object.fromEntries(
    Object.keys(letterSpacing).map((key) => [key, cssVar('letterSpacing', key)]),
  );
}

function durationVars() {
  return Object.fromEntries(
    Object.keys(duration).map((key) => [key, cssVar('duration', key)]),
  );
}

function easingVars() {
  return Object.fromEntries(
    Object.keys(easing).map((key) => [key, cssVar('easing', key)]),
  );
}

function borderWidthVars() {
  return Object.fromEntries(
    Object.keys(borderWidth).map((key) => [key, cssVar('borderWidth', key)]),
  );
}

/**
 * Tailwind preset generated from the design tokens. Consumers register it via
 * `presets: [uiPreset]`. All values reference CSS variables (from styles.css /
 * base.css), so theming flows through the single token source.
 */
export const uiPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: colorVars(),
      borderRadius: radiusVars(),
      boxShadow: shadowVars(),
      fontFamily: {
        sans: cssVar('fontFamily', 'sans'),
      },
      fontSize: fontSizeVars(),
      fontWeight: fontWeightVars(),
      letterSpacing: letterSpacingVars(),
      transitionDuration: durationVars(),
      transitionTimingFunction: easingVars(),
      borderWidth: borderWidthVars(),
    },
  },
  plugins: [animate],
};

export default uiPreset;
