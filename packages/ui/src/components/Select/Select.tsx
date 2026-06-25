import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { useFormField } from '../FormField/FormField';

const select = cva(
  [
    'flex h-11 w-full appearance-none rounded-md border bg-surface pl-3 pr-10 text-body text-text',
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
    },
    defaultVariants: { invalid: false },
  },
);

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    Omit<VariantProps<typeof select>, 'invalid'> {
  invalid?: boolean;
}

/** Native select with a custom chevron. Auto-wires aria from FormField. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, invalid, id, disabled, 'aria-describedby': describedBy, children, ...props },
  ref,
) {
  const field = useFormField();
  const resolvedInvalid = invalid ?? field?.invalid ?? false;
  return (
    <div className="relative w-full">
      <select
        ref={ref}
        id={id ?? field?.id}
        disabled={disabled ?? field?.disabled}
        aria-invalid={resolvedInvalid || undefined}
        aria-describedby={describedBy ?? field?.describedBy}
        className={cn(select({ invalid: resolvedInvalid }), className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-subtle"
        aria-hidden="true"
        focusable={false}
      />
    </div>
  );
});
