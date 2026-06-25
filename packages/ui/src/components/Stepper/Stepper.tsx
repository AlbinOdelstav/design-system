import { Check } from 'lucide-react';
import { Fragment } from 'react';
import { cn } from '../../lib/cn';

export interface Step {
  label: React.ReactNode;
  description?: React.ReactNode;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  /** Zero-based index of the current step. */
  current: number;
  orientation?: 'horizontal' | 'vertical';
}

type Status = 'completed' | 'current' | 'upcoming';

/** Step progress indicator. Horizontal on desktop / vertical on mobile by default. */
export function Stepper({
  steps,
  current,
  orientation = 'horizontal',
  className,
  ...props
}: StepperProps) {
  const isVertical = orientation === 'vertical';

  return (
    <ol
      className={cn('flex', isVertical ? 'flex-col gap-0' : 'items-start', className)}
      {...(props as React.OlHTMLAttributes<HTMLOListElement>)}
    >
      {steps.map((step, i) => {
        const status: Status = i < current ? 'completed' : i === current ? 'current' : 'upcoming';
        const last = i === steps.length - 1;
        return (
          <Fragment key={i}>
            <li
              aria-current={status === 'current' ? 'step' : undefined}
              className={cn('flex', isVertical ? 'gap-3' : 'flex-1 flex-col items-center text-center')}
            >
              <div className={cn('flex', isVertical ? 'flex-col items-center' : 'w-full items-center')}>
                {!isVertical && i > 0 && (
                  <span
                    className={cn('h-0.5 flex-1', i <= current ? 'bg-primary' : 'bg-border-subtle')}
                  />
                )}
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-label-sm font-semibold',
                    status === 'completed' && 'border-primary bg-primary text-primary-fg',
                    status === 'current' && 'border-primary text-primary',
                    status === 'upcoming' && 'border-border text-text-muted',
                  )}
                >
                  {status === 'completed' ? (
                    <Check className="h-4 w-4" aria-hidden="true" focusable={false} />
                  ) : (
                    i + 1
                  )}
                </span>
                {!isVertical && !last && (
                  <span
                    className={cn('h-0.5 flex-1', i < current ? 'bg-primary' : 'bg-border-subtle')}
                  />
                )}
                {isVertical && !last && (
                  <span className={cn('mt-1 w-0.5 flex-1', i < current ? 'bg-primary' : 'bg-border-subtle')} />
                )}
              </div>
              <div className={cn(isVertical ? 'pb-6' : 'mt-2')}>
                <p
                  className={cn(
                    'text-label font-medium',
                    status === 'upcoming' ? 'text-text-muted' : 'text-text',
                  )}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-label-sm text-text-muted">{step.description}</p>
                )}
              </div>
            </li>
          </Fragment>
        );
      })}
    </ol>
  );
}
