import { BarChart3, Dumbbell, Home } from 'lucide-react';
import { Avatar, NavItem, Sidebar } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Sidebar', category: 'atoms', order: 42 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Brand, nav, footer" bleed>
      <div className="h-[360px]">
        <Sidebar
          brand={<span className="text-h4 font-bold text-text">Forge</span>}
          footer={<NavItem href="#" icon={<Avatar size="xs" name="Alex Carter" />}>Alex Carter</NavItem>}
        >
          <div className="flex flex-col gap-1">
            <NavItem href="#" active icon={<Home className="h-5 w-5" />}>
              Dashboard
            </NavItem>
            <NavItem href="#" icon={<Dumbbell className="h-5 w-5" />}>
              Exercises
            </NavItem>
            <NavItem href="#" icon={<BarChart3 className="h-5 w-5" />}>
              Progress
            </NavItem>
          </div>
        </Sidebar>
      </div>
    </ShowcaseSection>
  );
}
