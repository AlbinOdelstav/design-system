import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { useFormField } from '../FormField/FormField';

const input = cva(
  [
    'flex h-11 w-full rounded-md border bg-surface px-3 text-body text-text',
    'placeholder:text-text-placeholder',
    'transition-[box-shadow,border-color] duration-fast ease-out',
    'focus-visible:outline-none focus-visible:shadow-focus focus-visible:border-primary',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      invalid: {
        true: 'border-danger focus-visible:shadow-focus-danger focus-visible:border-danger',
        false: 'border-border',
      },
      hasLeftIcon: { true: 'pl-10', false: '' },
      hasRightIcon: { true: 'pr-10', false: '' },
    },
    defaultVariants: {
      invalid: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<VariantProps<typeof input>, 'invalid' | 'hasLeftIcon' | 'hasRightIcon'> {
  /** Decorative icon rendered at the start of the field. */
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  invalid?: boolean;
}

/** Single-line text input. Auto-wires aria from a surrounding FormField. */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, leftIcon, rightIcon, invalid, id, disabled, 'aria-describedby': describedBy, ...props },
  ref,
) {
  const field = useFormField();
  const resolvedInvalid = invalid ?? field?.invalid ?? false;

  return (
    <div className="relative w-full">
      {leftIcon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle">
          {leftIcon}
        </span>
      )}
      <input
        ref={ref}
        id={id ?? field?.id}
        disabled={disabled ?? field?.disabled}
        aria-invalid={resolvedInvalid || undefined}
        aria-describedby={describedBy ?? field?.describedBy}
        className={cn(
          input({
            invalid: resolvedInvalid,
            hasLeftIcon: Boolean(leftIcon),
            hasRightIcon: Boolean(rightIcon),
          }),
          className,
        )}
        {...props}
      />
      {rightIcon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-subtle">
          {rightIcon}
        </span>
      )}
    </div>
  );
});
