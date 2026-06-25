import { Breadcrumb } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Breadcrumb', category: 'atoms', order: 34 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Trail">
      <Breadcrumb
        items={[
          { label: 'Exercises', href: '#' },
          { label: 'Chest', href: '#' },
          { label: 'Bench Press' },
        ]}
      />
    </ShowcaseSection>
  );
}
