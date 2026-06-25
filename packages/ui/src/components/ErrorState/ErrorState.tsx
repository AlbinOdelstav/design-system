import { AlertCircle } from 'lucide-react';
import { cn } from '../../lib/cn';
import { Button } from '../Button/Button';

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  /** Optional error code shown as a caption. */
  code?: string;
  onRetry?: () => void;
  onHome?: () => void;
}

/** Centered error state with retry + home actions. */
export function ErrorState({
  heading = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  code,
  onRetry,
  onHome,
  className,
  ...props
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn('flex flex-col items-center text-center', className)}
      {...props}
    >
      <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-danger-subtle">
        <AlertCircle className="h-10 w-10 text-danger" aria-hidden="true" focusable={false} />
      </div>
      <h2 className="text-h2 font-bold text-text">{heading}</h2>
      {description && <p className="mt-2 max-w-[320px] text-body text-text-muted">{description}</p>}
      {code && <p className="mt-1 text-caption text-text-subtle">Error code: {code}</p>}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {onRetry && (
          <Button variant="primary" onClick={onRetry}>
            Try again
          </Button>
        )}
        {onHome && (
          <Button variant="ghost" onClick={onHome}>
            Go home
          </Button>
        )}
      </div>
    </div>
  );
}
