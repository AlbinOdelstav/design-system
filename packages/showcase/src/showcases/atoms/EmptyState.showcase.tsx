import { Dumbbell } from 'lucide-react';
import { Button, EmptyState } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'EmptyState', category: 'atoms', order: 31 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="With illustration & CTA">
      <div className="w-full py-6">
        <EmptyState
          illustration={<Dumbbell className="h-16 w-16" />}
          heading="No workouts yet"
          description="Start your first session and it will show up here."
          actions={<Button>New workout</Button>}
        />
      </div>
    </ShowcaseSection>
  );
}
