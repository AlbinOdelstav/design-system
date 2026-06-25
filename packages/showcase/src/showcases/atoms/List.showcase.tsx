import { ChevronRight } from 'lucide-react';
import { Avatar, Badge, List, ListItem } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'List', category: 'atoms', order: 13 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Card list with slots">
      <List variant="card" className="w-full max-w-md">
        <ListItem left={<Avatar size="sm" name="Alex Carter" />} right={<Badge variant="success">PR</Badge>}>
          <span className="font-medium text-text">Bench Press</span>
        </ListItem>
        <ListItem
          interactive
          left={<Avatar size="sm" name="Jordan Lee" />}
          right={<ChevronRight className="h-5 w-5 text-text-subtle" />}
        >
          <span className="font-medium text-text">Squat</span>
        </ListItem>
        <ListItem left={<Avatar size="sm" name="Sam Rivera" />}>
          <span className="font-medium text-text">Deadlift</span>
        </ListItem>
      </List>
    </ShowcaseSection>
  );
}
