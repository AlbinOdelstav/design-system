import { cn } from '../../lib/cn';

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Trailing actions (buttons, etc.). */
  actions?: React.ReactNode;
  /** Content above the title (breadcrumb, back link). */
  above?: React.ReactNode;
}

/** Page title block. Renders the single h1 for a view. */
export function PageHeader({ title, description, actions, above, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      {above}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-h1 font-bold tracking-tight text-text">{title}</h1>
          {description && <p className="mt-1 text-body text-text-muted">{description}</p>}
        </div>
        {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}
