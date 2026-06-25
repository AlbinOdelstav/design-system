import { cn } from '@albin/ui';
import { groups } from '../registry';

export interface SidebarProps {
  current: string;
  onNavigate: (slug: string) => void;
}

/** Showcase navigation: grouped, searchable component index. */
export function Sidebar({ current, onNavigate }: SidebarProps) {
  return (
    <nav
      aria-label="Showcase navigation"
      className="flex h-full w-64 flex-col overflow-y-auto border-r border-border-subtle bg-surface"
    >
      <div className="border-b border-border-subtle px-4 py-4">
        <p className="text-h4 font-bold text-text">@albin/ui</p>
        <p className="text-label-sm text-text-muted">Design system showcase</p>
      </div>
      <div className="flex-1 px-3 py-3">
        {groups.map((group) => (
          <div key={group.category} className="mb-4">
            <p className="px-2 pb-1 text-overline font-semibold uppercase tracking-wide text-text-subtle">
              {group.category}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.entries.map((entry) => (
                <li key={entry.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate(entry.slug)}
                    aria-current={current === entry.slug ? 'page' : undefined}
                    className={cn(
                      'w-full rounded-md px-2 py-1.5 text-left text-label font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus',
                      current === entry.slug
                        ? 'bg-primary-subtle text-primary-subtle-fg'
                        : 'text-text-muted hover:bg-bg-subtle hover:text-text',
                    )}
                  >
                    {entry.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
