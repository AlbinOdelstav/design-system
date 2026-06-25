import { forwardRef } from 'react';
import { cn } from '../../lib/cn';

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
  /** Show the current value next to the label. */
  showValue?: boolean;
}

/** Range slider built on a native input[type=range] (keyboard accessible). */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { className, label, showValue, value, defaultValue, disabled, ...props },
  ref,
) {
  const displayValue = value ?? defaultValue;
  return (
    <div className={cn('flex flex-col gap-1.5', disabled && 'opacity-50', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-label font-medium text-text">
          <span>{label}</span>
          {showValue && <span className="tabular-nums text-text-muted">{displayValue}</span>}
        </div>
      )}
      <input
        ref={ref}
        type="range"
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-bg-subtle accent-primary focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  );
});
