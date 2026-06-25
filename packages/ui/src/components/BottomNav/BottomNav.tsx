import { cn } from '../../lib/cn';

export interface BottomNavItem {
  key: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items: BottomNavItem[];
}

/** Mobile bottom navigation bar. Items have a 44px+ tap target. */
export function BottomNav({ items, className, ...props }: BottomNavProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        'flex h-16 items-stretch border-t border-border-subtle bg-surface',
        className,
      )}
      {...props}
    >
      {items.map((item) => {
        const content = (
          <>
            <span className="flex h-6 w-6 items-center justify-center">{item.icon}</span>
            <span className="text-label-sm font-medium">{item.label}</span>
          </>
        );
        const cls = cn(
          'flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 py-1 transition-colors duration-fast ease-out focus-visible:outline-none focus-visible:shadow-focus',
          item.active ? 'text-primary' : 'text-text-subtle hover:text-text',
        );
        return item.href ? (
          <a
            key={item.key}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            className={cls}
            onClick={item.onClick}
          >
            {content}
          </a>
        ) : (
          <button
            key={item.key}
            type="button"
            aria-current={item.active ? 'page' : undefined}
            className={cls}
            onClick={item.onClick}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}
