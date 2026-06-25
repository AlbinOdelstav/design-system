import { ProgressBar } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'ProgressBar', category: 'atoms', order: 27 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Sizes & tones">
      <div className="flex w-full max-w-md flex-col gap-4">
        <ProgressBar value={30} label="Progress 30%" />
        <ProgressBar value={60} tone="success" size="lg" label="Goal 60%" />
        <ProgressBar value={85} tone="warning" size="sm" label="Storage 85%" />
      </div>
    </ShowcaseSection>
  );
}
