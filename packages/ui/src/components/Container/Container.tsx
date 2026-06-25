import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const container = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-sm',
      md: 'max-w-2xl',
      lg: 'max-w-4xl',
      xl: 'max-w-6xl',
      full: 'max-w-none',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {}

/** Centered max-width wrapper with responsive horizontal padding. */
export function Container({ size, className, ...props }: ContainerProps) {
  return <div className={cn(container({ size }), className)} {...props} />;
}
