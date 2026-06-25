import { cn } from '../../lib/cn';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Illustration / icon slot. */
  illustration?: React.ReactNode;
  heading: React.ReactNode;
  /** Supporting copy. */
  description?: React.ReactNode;
  /** Primary call-to-action (and optional secondary) slot. */
  actions?: React.ReactNode;
}

/** Centered empty-state with illustration slot, heading, copy and CTA. */
export function EmptyState({
  illustration,
  heading,
  description,
  actions,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center text-center', className)}
      {...props}
    >
      {illustration && <div className="mb-4 text-text-subtle">{illustration}</div>}
      <h2 className="text-h3 font-semibold text-text">{heading}</h2>
      {description && (
        <p className="mt-2 max-w-[280px] text-body-sm text-text-muted">{description}</p>
      )}
      {actions && <div className="mt-6 flex flex-wrap items-center justify-center gap-3">{actions}</div>}
    </div>
  );
}
