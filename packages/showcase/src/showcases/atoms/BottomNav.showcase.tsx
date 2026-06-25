import { BarChart3, Dumbbell, History, Home } from 'lucide-react';
import { BottomNav } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'BottomNav', category: 'atoms', order: 44 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Mobile bottom navigation" bleed>
      <BottomNav
        items={[
          { key: 'home', label: 'Home', href: '#', active: true, icon: <Home className="h-5 w-5" /> },
          { key: 'history', label: 'History', href: '#', icon: <History className="h-5 w-5" /> },
          { key: 'library', label: 'Exercises', href: '#', icon: <Dumbbell className="h-5 w-5" /> },
          { key: 'progress', label: 'Progress', href: '#', icon: <BarChart3 className="h-5 w-5" /> },
        ]}
      />
    </ShowcaseSection>
  );
}
