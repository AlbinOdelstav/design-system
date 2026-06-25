import { forwardRef } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/cn';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
}

/** Checkbox with an accessible label. Uses a peer-driven custom box. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, label, id, disabled, ...props },
  ref,
) {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2.5 text-body text-text',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <span className="relative inline-flex">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          disabled={disabled}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm border border-border-strong bg-surface transition-colors duration-fast ease-out checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed"
          {...props}
        />
        <Check
          className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 text-primary-fg opacity-0 peer-checked:opacity-100"
          aria-hidden="true"
          focusable={false}
        />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
});
