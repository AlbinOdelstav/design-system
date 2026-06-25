import { forwardRef } from 'react';
import { cn } from '../../lib/cn';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
}

/** Toggle switch backed by a native checkbox input (role inferred). */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, label, disabled, ...props },
  ref,
) {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-3 text-body text-text',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <span className="relative inline-flex">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          disabled={disabled}
          className="peer h-6 w-11 cursor-pointer appearance-none rounded-full border border-border-strong bg-bg-subtle transition-colors duration-fast ease-out checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed"
          {...props}
        />
        <span className="pointer-events-none absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-surface shadow-sm transition-transform duration-fast ease-out peer-checked:translate-x-5" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
});
