import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../../lib/cn';
import { Badge } from '../Badge/Badge';

export interface SetLoggerRowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Set number shown in the leading badge. */
  setNumber: number;
  weight?: string | number;
  reps?: string | number;
  completed?: boolean;
  /** Marks this row as the active set (left primary border). */
  active?: boolean;
  weightPlaceholder?: string;
  repsPlaceholder?: string;
  onWeightChange?: (value: string) => void;
  onRepsChange?: (value: string) => void;
  onToggleComplete?: () => void;
}

/** A single logged set: set badge, weight + reps inputs, complete toggle. */
export function SetLoggerRow({
  setNumber,
  weight,
  reps,
  completed = false,
  active = false,
  weightPlaceholder = '0',
  repsPlaceholder = '0',
  onWeightChange,
  onRepsChange,
  onToggleComplete,
  className,
  ...props
}: SetLoggerRowProps) {
  const inputCls =
    'h-10 rounded-md border border-border bg-surface text-center text-body tabular-nums text-text focus-visible:outline-none focus-visible:shadow-focus focus-visible:border-primary disabled:opacity-50';

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-md border-l-4 px-3 py-2 transition-colors duration-fast ease-out',
        completed ? 'bg-success-subtle' : 'bg-surface',
        active ? 'border-l-primary' : 'border-l-transparent',
        className,
      )}
      {...props}
    >
      <Badge variant={completed ? 'success' : 'neutral'} size="md" className="tabular-nums">
        {setNumber}
      </Badge>
      <label className="flex items-center gap-1.5 text-label-sm text-text-muted">
        <span className="sr-only">Weight</span>
        <input
          type="text"
          inputMode="decimal"
          value={weight ?? ''}
          placeholder={weightPlaceholder}
          aria-label={`Set ${setNumber} weight`}
          onChange={(e) => onWeightChange?.(e.target.value)}
          className={cn(inputCls, 'w-[72px]')}
        />
        <span aria-hidden="true">kg</span>
      </label>
      <label className="flex items-center gap-1.5 text-label-sm text-text-muted">
        <span className="sr-only">Reps</span>
        <input
          type="text"
          inputMode="numeric"
          value={reps ?? ''}
          placeholder={repsPlaceholder}
          aria-label={`Set ${setNumber} reps`}
          onChange={(e) => onRepsChange?.(e.target.value)}
          className={cn(inputCls, 'w-[56px]')}
        />
        <span aria-hidden="true">reps</span>
      </label>
      <button
        type="button"
        aria-label={completed ? `Mark set ${setNumber} incomplete` : `Mark set ${setNumber} complete`}
        aria-pressed={completed}
        onClick={onToggleComplete}
        className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:shadow-focus"
      >
        {completed ? (
          <CheckCircle2 className="h-6 w-6 text-success" aria-hidden="true" focusable={false} />
        ) : (
          <Circle className="h-6 w-6 text-text-subtle" aria-hidden="true" focusable={false} />
        )}
      </button>
    </div>
  );
}
