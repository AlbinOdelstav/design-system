import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const divider = cva('border-border-subtle', {
  variants: {
    orientation: {
      horizontal: 'w-full border-t',
      vertical: 'h-full border-l self-stretch',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divider> {
  /** Optional centered label (horizontal only), e.g. "or". */
  label?: string;
}

/** A separating rule. Horizontal by default; supports an optional center label. */
export function Divider({ orientation = 'horizontal', label, className, ...props }: DividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className={cn('flex w-full items-center gap-3', className)} {...props}>
        <span className="h-px flex-1 bg-border-subtle" />
        <span className="text-label-sm font-medium uppercase tracking-wide text-text-subtle">
          {label}
        </span>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>
    );
  }
  return (
    <div
      role="separator"
      aria-orientation={orientation ?? 'horizontal'}
      className={cn(divider({ orientation }), className)}
      {...props}
    />
  );
}
