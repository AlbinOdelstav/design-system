import { ChevronRight, Dumbbell } from 'lucide-react';
import { Badge, List, ListItem } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'ListItem', category: 'atoms', order: 13.5 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Slots & interactive rows">
      <List variant="card" className="w-full max-w-md">
        <ListItem
          left={
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-bg-subtle text-text-muted">
              <Dumbbell className="h-5 w-5" />
            </span>
          }
          right={<Badge variant="primary">Chest</Badge>}
        >
          <span className="font-medium text-text">Bench Press</span>
          <span className="block text-label-sm text-text-muted">3 sets · 70 kg</span>
        </ListItem>
        <ListItem interactive right={<ChevronRight className="h-5 w-5 text-text-subtle" />}>
          Interactive row
        </ListItem>
      </List>
    </ShowcaseSection>
  );
}
