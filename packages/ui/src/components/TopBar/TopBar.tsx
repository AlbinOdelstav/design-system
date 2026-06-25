import { cn } from '../../lib/cn';

export interface TopBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  /** Leading slot (menu / back button). */
  left?: React.ReactNode;
  /** Trailing slot (actions, avatar). */
  right?: React.ReactNode;
}

/** Mobile top app bar with leading / title / trailing slots. */
export function TopBar({ title, left, right, className, children, ...props }: TopBarProps) {
  return (
    <header
      className={cn(
        'flex h-14 items-center gap-2 border-b border-border-subtle bg-surface px-4',
        className,
      )}
      {...props}
    >
      {left && <div className="flex shrink-0 items-center">{left}</div>}
      <div className="min-w-0 flex-1">
        {title && <div className="truncate text-h4 font-semibold text-text">{title}</div>}
        {children}
      </div>
      {right && <div className="flex shrink-0 items-center gap-1">{right}</div>}
    </header>
  );
}
