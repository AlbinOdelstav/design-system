import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '../../lib/cn';

export function Stat({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1', className)} {...props} />;
}

export function StatLabel({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'text-overline font-semibold uppercase tracking-wide text-text-subtle',
        className,
      )}
      {...props}
    />
  );
}

export function StatValue({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('text-h2 font-bold tabular-nums text-text', className)}
      {...props}
    />
  );
}

export interface StatDeltaProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Trend direction; sets the icon and color. */
  direction: 'up' | 'down';
}

/** Trend indicator with directional icon + semantic color (icon + text, not color alone). */
export function StatDelta({ direction, className, children, ...props }: StatDeltaProps) {
  const Arrow = direction === 'up' ? ArrowUp : ArrowDown;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 text-label-sm font-semibold tabular-nums',
        direction === 'up' ? 'text-success-subtle-fg' : 'text-danger-subtle-fg',
        className,
      )}
      {...props}
    >
      <Arrow className="h-4 w-4" aria-hidden="true" focusable={false} />
      {children}
    </span>
  );
}
