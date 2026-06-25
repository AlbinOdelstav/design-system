import { Home } from 'lucide-react';
import { AppShell, BottomNav, NavItem, Sidebar, TopBar } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'AppShell', category: 'atoms', order: 41 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Responsive shell (resize to see mobile bars)" bleed>
      <div className="h-[420px] overflow-hidden">
        <AppShell
          sidebar={
            <Sidebar brand={<span className="text-h4 font-bold">Forge</span>}>
              <NavItem href="#" active icon={<Home className="h-5 w-5" />}>
                Dashboard
              </NavItem>
            </Sidebar>
          }
          topBar={<TopBar title="Forge" />}
          bottomNav={
            <BottomNav
              items={[{ key: 'home', label: 'Home', href: '#', active: true, icon: <Home className="h-5 w-5" /> }]}
            />
          }
        >
          <div className="p-6">
            <p className="text-h3 font-semibold">Main content area</p>
            <p className="text-text-muted">Sidebar at md+, top/bottom bars on mobile.</p>
          </div>
        </AppShell>
      </div>
    </ShowcaseSection>
  );
}
