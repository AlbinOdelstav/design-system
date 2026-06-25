import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const iconButton = cva(
  [
    'inline-flex items-center justify-center',
    'transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-out',
    'focus-visible:outline-none focus-visible:shadow-focus',
    'active:scale-[0.97]',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-fg hover:bg-primary-hover',
        outline: 'border border-border-strong bg-surface text-text hover:bg-bg-subtle',
        ghost: 'bg-transparent text-text hover:bg-bg-subtle',
        danger: 'bg-danger text-danger-fg hover:bg-danger-hover focus-visible:shadow-focus-danger',
      },
      shape: {
        square: 'rounded-md',
        circular: 'rounded-full',
      },
      size: {
        sm: 'h-9 w-9',
        md: 'h-11 w-11',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      shape: 'square',
      size: 'md',
    },
  },
);

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof iconButton> {
  /** Required: icon-only buttons must have an accessible name. */
  'aria-label': string;
}

/** Square or circular icon-only button. Requires `aria-label`. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { variant, shape, size, className, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(iconButton({ variant, shape, size }), className)}
      {...props}
    />
  );
});
