import {
  BarChart3,
  Dumbbell,
  History,
  Home,
  Settings as SettingsIcon,
} from 'lucide-react';
import { AppShell } from '../../components/AppShell/AppShell';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { TopBar } from '../../components/TopBar/TopBar';
import { BottomNav } from '../../components/BottomNav/BottomNav';
import { NavItem } from '../../components/NavItem/NavItem';
import { Avatar } from '../../components/Avatar/Avatar';
import { ShellMark } from './Illustration';

export type NavKey = 'dashboard' | 'history' | 'library' | 'progress' | 'settings';

const NAV: { key: NavKey; label: string; icon: typeof Home }[] = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'history', label: 'History', icon: History },
  { key: 'library', label: 'Exercises', icon: Dumbbell },
  { key: 'progress', label: 'Progress', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: SettingsIcon },
];

export interface DemoAppShellProps {
  active?: NavKey;
  title?: string;
  children: React.ReactNode;
}

/**
 * Internal AppShell wrapper with mock navigation, used by the core views so
 * each one renders inside a realistic shell without re-wiring nav each time.
 */
export function DemoAppShell({ active = 'dashboard', title = 'Forge', children }: DemoAppShellProps) {
  return (
    <AppShell
      sidebar={
        <Sidebar
          brand={
            <div className="flex items-center gap-2 text-primary">
              <ShellMark size={28} />
              <span className="text-h4 font-bold text-text">Forge</span>
            </div>
          }
          footer={
            <NavItem icon={<Avatar size="xs" name="Alex Carter" />} href="#profile">
              Alex Carter
            </NavItem>
          }
        >
          <div className="flex flex-col gap-1">
            {NAV.map(({ key, label, icon: IconComp }) => (
              <NavItem
                key={key}
                href={`#${key}`}
                active={key === active}
                icon={<IconComp className="h-5 w-5" />}
              >
                {label}
              </NavItem>
            ))}
          </div>
        </Sidebar>
      }
      topBar={
        <TopBar title={title} right={<Avatar size="sm" name="Alex Carter" />} />
      }
      bottomNav={
        <BottomNav
          items={NAV.slice(0, 4).map(({ key, label, icon: IconComp }) => ({
            key,
            label,
            href: `#${key}`,
            active: key === active,
            icon: <IconComp className="h-5 w-5" />,
          }))}
        />
      }
    >
      {children}
    </AppShell>
  );
}
