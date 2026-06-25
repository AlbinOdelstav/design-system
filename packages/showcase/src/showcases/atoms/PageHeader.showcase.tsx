import { Plus } from 'lucide-react';
import { Button, PageHeader } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'PageHeader', category: 'atoms', order: 40 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Title, description, actions">
      <div className="w-full">
        <PageHeader
          title="Workout history"
          description="Review and filter your past sessions."
          actions={<Button leftIcon={<Plus className="h-5 w-5" />}>New</Button>}
        />
      </div>
    </ShowcaseSection>
  );
}
