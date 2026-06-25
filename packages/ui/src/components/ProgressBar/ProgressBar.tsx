import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const track = cva('w-full overflow-hidden rounded-full bg-bg-subtle', {
  variants: {
    size: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    },
  },
  defaultVariants: { size: 'md' },
});

const fill = cva('h-full rounded-full transition-[width] duration-normal ease-out', {
  variants: {
    tone: {
      primary: 'bg-primary',
      success: 'bg-success',
      warning: 'bg-warning',
      danger: 'bg-danger',
    },
  },
  defaultVariants: { tone: 'primary' },
});

export interface ProgressBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof track>,
    VariantProps<typeof fill> {
  /** Current value (0-max). */
  value: number;
  max?: number;
  label?: string;
}

/** Determinate progress track + fill. role=progressbar with aria-value*. */
export function ProgressBar({
  value,
  max = 100,
  size,
  tone,
  label,
  className,
  ...props
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const pct = max === 0 ? 0 : (clamped / max) * 100;
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className={cn(track({ size }), className)}
      {...props}
    >
      <div className={cn(fill({ tone }))} style={{ width: `${pct}%` }} />
    </div>
  );
}
