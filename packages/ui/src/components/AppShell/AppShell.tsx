import { cn } from '../../lib/cn';

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Desktop sidebar content (rendered at md+). */
  sidebar?: React.ReactNode;
  /** Mobile top bar (rendered below md). */
  topBar?: React.ReactNode;
  /** Mobile bottom navigation (rendered below md). */
  bottomNav?: React.ReactNode;
  /** Id of the main content target for the skip link. */
  mainId?: string;
}

/**
 * Application layout shell: fixed 240px Sidebar at md+, TopBar + BottomNav on
 * mobile. Includes a skip-to-content link and a semantic <main>.
 */
export function AppShell({
  sidebar,
  topBar,
  bottomNav,
  mainId = 'main-content',
  className,
  children,
  ...props
}: AppShellProps) {
  return (
    <div className={cn('flex min-h-screen w-full bg-bg-base', className)} {...props}>
      <a href={`#${mainId}`} className="skip-link">
        Skip to content
      </a>

      {sidebar && (
        <aside className="sticky top-0 hidden h-screen shrink-0 md:block">{sidebar}</aside>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        {topBar && <div className="md:hidden">{topBar}</div>}
        <main id={mainId} className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        {bottomNav && (
          <div className="sticky bottom-0 z-30 md:hidden">{bottomNav}</div>
        )}
      </div>
    </div>
  );
}
