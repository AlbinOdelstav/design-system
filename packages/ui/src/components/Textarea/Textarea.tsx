import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { useFormField } from '../FormField/FormField';

const textarea = cva(
  [
    'flex min-h-[88px] w-full rounded-md border bg-surface px-3 py-2 text-body text-text',
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
    },
    defaultVariants: { invalid: false },
  },
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>,
    Omit<VariantProps<typeof textarea>, 'invalid'> {
  invalid?: boolean;
}

/** Multi-line text input. Auto-wires aria from a surrounding FormField. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, invalid, id, disabled, 'aria-describedby': describedBy, ...props },
  ref,
) {
  const field = useFormField();
  const resolvedInvalid = invalid ?? field?.invalid ?? false;
  return (
    <textarea
      ref={ref}
      id={id ?? field?.id}
      disabled={disabled ?? field?.disabled}
      aria-invalid={resolvedInvalid || undefined}
      aria-describedby={describedBy ?? field?.describedBy}
      className={cn(textarea({ invalid: resolvedInvalid }), className)}
      {...props}
    />
  );
});
