import { cn } from '../../lib/cn';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand / logo slot at the top. */
  brand?: React.ReactNode;
  /** Footer slot (profile, settings). */
  footer?: React.ReactNode;
}

/** Fixed-width (240px) vertical navigation rail for desktop layouts. */
export function Sidebar({ brand, footer, className, children, ...props }: SidebarProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        'flex h-full w-60 flex-col border-r border-border-subtle bg-surface',
        className,
      )}
      {...props}
    >
      {brand && <div className="flex h-16 items-center px-4">{brand}</div>}
      <div className="flex-1 overflow-y-auto px-3 py-2">{children}</div>
      {footer && <div className="border-t border-border-subtle p-3">{footer}</div>}
    </nav>
  );
}
