import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { Spinner } from '../Spinner/Spinner';

const button = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold',
    'transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-out',
    'focus-visible:outline-none focus-visible:shadow-focus',
    'active:scale-[0.97]',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-fg hover:bg-primary-hover active:bg-primary-active',
        secondary: 'bg-secondary text-text-inverse hover:bg-secondary-hover',
        outline:
          'border border-border-strong bg-surface text-text hover:bg-bg-subtle',
        ghost: 'bg-transparent text-text hover:bg-bg-subtle',
        danger:
          'bg-danger text-danger-fg hover:bg-danger-hover focus-visible:shadow-focus-danger',
      },
      size: {
        sm: 'h-9 px-3 text-label-sm',
        md: 'h-11 px-4 text-label',
        lg: 'h-12 px-6 text-body',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof button> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Shows a Spinner and disables interaction. */
  loading?: boolean;
}

/**
 * Primary action control. Variants, sizes, optional left/right icons,
 * fullWidth, and a loading state (Spinner + disabled).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant,
    size,
    fullWidth,
    leftIcon,
    rightIcon,
    loading = false,
    disabled,
    className,
    children,
    type = 'button',
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(button({ variant, size, fullWidth }), className)}
      {...props}
    >
      {loading ? <Spinner size="sm" /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
});
