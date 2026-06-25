import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badge = cva('inline-flex items-center gap-1 rounded-full font-medium', {
  variants: {
    variant: {
      primary: 'bg-primary-subtle text-primary-subtle-fg',
      secondary: 'bg-secondary-subtle text-secondary-subtle-fg',
      success: 'bg-success-subtle text-success-subtle-fg',
      warning: 'bg-warning-subtle text-warning-subtle-fg',
      danger: 'bg-danger-subtle text-danger-subtle-fg',
      neutral: 'bg-bg-subtle text-text-muted',
    },
    size: {
      sm: 'px-2 py-0.5 text-label-sm',
      md: 'px-2.5 py-1 text-label',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'sm',
  },
});

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badge> {}

/** Compact status/label pill. */
export function Badge({ variant, size, className, ...props }: BadgeProps) {
  return <span className={cn(badge({ variant, size }), className)} {...props} />;
}
