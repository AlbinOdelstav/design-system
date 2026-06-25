export type TokenCategory =
  | 'color'
  | 'radius'
  | 'shadow'
  | 'fontFamily'
  | 'fontSize'
  | 'lineHeight'
  | 'fontWeight'
  | 'letterSpacing'
  | 'duration'
  | 'easing'
  | 'borderWidth';

export declare const colors: Record<string, string>;
export declare const radius: Record<string, string>;
export declare const shadow: Record<string, string>;
export declare const fontFamily: Record<string, string>;
export declare const fontSize: Record<string, [string, string]>;
export declare const fontWeight: Record<string, string>;
export declare const letterSpacing: Record<string, string>;
export declare const duration: Record<string, string>;
export declare const easing: Record<string, string>;
export declare const borderWidth: Record<string, string>;

export declare function cssVarName(category: TokenCategory, key: string): string;

export declare const tokens: {
  colors: Record<string, string>;
  radius: Record<string, string>;
  shadow: Record<string, string>;
  fontFamily: Record<string, string>;
  fontSize: Record<string, [string, string]>;
  fontWeight: Record<string, string>;
  letterSpacing: Record<string, string>;
  duration: Record<string, string>;
  easing: Record<string, string>;
  borderWidth: Record<string, string>;
};
