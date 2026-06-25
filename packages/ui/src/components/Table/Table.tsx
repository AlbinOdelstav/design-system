import { cn } from '../../lib/cn';

/** Scrollable table wrapper (overflow-x-auto on small screens). */
export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn('w-full border-collapse text-body', className)} {...props} />
    </div>
  );
}

export function TableHead({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn('border-b border-border', className)} {...props} />;
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('divide-y divide-border-subtle', className)} {...props} />;
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn('transition-colors hover:bg-bg-subtle', className)} {...props} />;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /** Right-aligns and applies tabular-nums for numeric columns. */
  numeric?: boolean;
  header?: boolean;
}

export function TableCell({ numeric, header, className, ...props }: TableCellProps) {
  const Tag = header ? 'th' : 'td';
  return (
    <Tag
      scope={header ? 'col' : undefined}
      className={cn(
        'px-4 py-3 text-left align-middle',
        header && 'text-label-sm font-semibold uppercase tracking-wide text-text-subtle',
        numeric && 'text-right tabular-nums',
        className,
      )}
      {...props}
    />
  );
}
