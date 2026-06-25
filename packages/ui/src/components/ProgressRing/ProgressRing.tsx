import { cn } from '../../lib/cn';

const SIZE_PX = {
  sm: 48,
  md: 72,
  lg: 96,
  xl: 128,
} as const;

export interface ProgressRingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  value: number;
  max?: number;
  size?: keyof typeof SIZE_PX;
  strokeWidth?: number;
  label?: string;
  /** Content rendered in the center of the ring. */
  children?: React.ReactNode;
}

/** Circular SVG progress indicator with a center slot. */
export function ProgressRing({
  value,
  max = 100,
  size = 'md',
  strokeWidth = 8,
  label,
  className,
  children,
  ...props
}: ProgressRingProps) {
  const px = SIZE_PX[size];
  const radius = (px - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.max(value, 0), max);
  const pct = max === 0 ? 0 : clamped / max;
  const offset = circumference * (1 - pct);

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: px, height: px }}
      {...props}
    >
      <svg width={px} height={px} className="-rotate-90" aria-hidden="true" focusable="false">
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-bg-subtle"
        />
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="stroke-primary transition-[stroke-dashoffset] duration-normal ease-out"
        />
      </svg>
      {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
    </div>
  );
}
