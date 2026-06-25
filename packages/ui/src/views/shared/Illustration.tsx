/**
 * Internal decorative SVGs used across views (brand mark + empty/404 glyphs).
 * Not part of the public API.
 */

export function ShellMark({ size = 96, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M50 12c4 14 14 22 26 26-12 4-22 12-26 26-4-14-14-22-26-26 12-4 22-12 26-26Z"
        className="fill-current opacity-90"
      />
      <circle cx="50" cy="50" r="44" className="stroke-current opacity-30" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function WaveMark({ width = 320, className }: { width?: number; className?: string }) {
  return (
    <svg
      width={width}
      height={width * 0.5}
      viewBox="0 0 320 160"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M0 96c40-32 80-32 120 0s80 32 120 0 80-32 80-32"
        className="stroke-current opacity-60"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M0 128c40-32 80-32 120 0s80 32 120 0 80-32 80-32"
        className="stroke-current opacity-30"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
