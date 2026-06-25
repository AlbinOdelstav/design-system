import { Dumbbell, History, Home } from 'lucide-react';
import { Badge, NavItem } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'NavItem', category: 'atoms', order: 36 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Active, default, with badge">
      <div className="flex w-64 flex-col gap-1">
        <NavItem href="#" active icon={<Home className="h-5 w-5" />}>
          Dashboard
        </NavItem>
        <NavItem href="#" icon={<History className="h-5 w-5" />} badge={<Badge variant="primary">3</Badge>}>
          History
        </NavItem>
        <NavItem href="#" icon={<Dumbbell className="h-5 w-5" />}>
          Exercises
        </NavItem>
      </div>
    </ShowcaseSection>
  );
}
