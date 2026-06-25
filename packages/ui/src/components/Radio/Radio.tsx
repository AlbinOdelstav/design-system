import { createContext, forwardRef, useContext } from 'react';
import { cn } from '../../lib/cn';

interface RadioGroupContextValue {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
  value: string;
}

/** Single radio control. Use inside a RadioGroup for managed state. */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { className, label, value, name, checked, disabled, onChange, ...props },
  ref,
) {
  const group = useContext(RadioGroupContext);
  const resolvedChecked = group ? group.value === value : checked;
  const resolvedDisabled = disabled ?? group?.disabled;

  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2.5 text-body text-text',
        resolvedDisabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <span className="relative inline-flex">
        <input
          ref={ref}
          type="radio"
          name={name ?? group?.name}
          value={value}
          checked={resolvedChecked}
          disabled={resolvedDisabled}
          onChange={(e) => {
            group?.onChange?.(value);
            onChange?.(e);
          }}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-border-strong bg-surface transition-colors duration-fast ease-out checked:border-primary checked:border-[6px] focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed"
          {...props}
        />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
});

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  label?: React.ReactNode;
}

/** Groups Radios under one name, provides managed value + role=radiogroup. */
export function RadioGroup({
  name,
  value,
  onChange,
  disabled,
  label,
  className,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, disabled }}>
      <div
        role="radiogroup"
        aria-label={typeof label === 'string' ? label : undefined}
        className={cn('flex flex-col gap-2', className)}
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}
