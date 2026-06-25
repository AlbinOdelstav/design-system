import { Textarea } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Textarea', category: 'atoms', order: 16 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="States">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Textarea placeholder="Notes about this workout…" rows={4} />
        <Textarea placeholder="Invalid" invalid rows={3} />
        <Textarea placeholder="Disabled" disabled rows={3} />
      </div>
    </ShowcaseSection>
  );
}
