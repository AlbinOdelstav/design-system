import { Divider } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Divider', category: 'atoms', order: 38 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Horizontal, labeled, vertical">
      <div className="flex w-full flex-col gap-6">
        <Divider />
        <Divider label="or" />
        <div className="flex h-12 items-center gap-4">
          <span>Left</span>
          <Divider orientation="vertical" />
          <span>Right</span>
        </div>
      </div>
    </ShowcaseSection>
  );
}
