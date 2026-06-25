import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

// Shimmer animation; the global reduced-motion rule in base.css renders it static.
const skeleton = cva('animate-pulse bg-border-subtle', {
  variants: {
    variant: {
      text: 'h-4 w-full rounded-sm',
      circle: 'rounded-full',
      rect: 'rounded-md',
    },
  },
  defaultVariants: { variant: 'rect' },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeleton> {}

/** Loading placeholder. Variants: text / circle / rect. */
export function Skeleton({ variant, className, ...props }: SkeletonProps) {
  return (
    <div aria-hidden="true" className={cn(skeleton({ variant }), className)} {...props} />
  );
}
