import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const spinner = cva('inline-block animate-spin rounded-full border-current border-t-transparent', {
  variants: {
    size: {
      sm: 'h-4 w-4 border-2',
      md: 'h-5 w-5 border-2',
      lg: 'h-6 w-6 border-2',
      xl: 'h-8 w-8 border-[3px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinner> {
  /** Accessible label announced to screen readers. */
  label?: string;
}

/** Indeterminate loading spinner. role=status with an accessible label. */
export function Spinner({ size, className, label = 'Loading', ...props }: SpinnerProps) {
  return (
    <span role="status" aria-live="polite" className={cn('inline-flex', className)} {...props}>
      <span className={cn(spinner({ size }))} />
      <span className="sr-only">{label}</span>
    </span>
  );
}
