import { cn } from '../../lib/cn';

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  /** Leading icon slot. */
  icon?: React.ReactNode;
  /** Trailing badge / count slot. */
  badge?: React.ReactNode;
}

/** Sidebar navigation item. Active = primary-subtle background. */
export function NavItem({ active, icon, badge, className, children, ...props }: NavItemProps) {
  return (
    <a
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-label font-medium transition-colors duration-fast ease-out focus-visible:outline-none focus-visible:shadow-focus',
        active
          ? 'bg-primary-subtle text-primary-subtle-fg'
          : 'text-text-muted hover:bg-bg-subtle hover:text-text',
        className,
      )}
      {...props}
    >
      {icon && <span className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</span>}
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {badge && <span className="shrink-0">{badge}</span>}
    </a>
  );
}
