import { Stepper } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Stepper', category: 'atoms', order: 37 } as const;

const STEPS = [
  { label: 'Account', description: 'Your details' },
  { label: 'Profile', description: 'Body metrics' },
  { label: 'Goals', description: 'What you want' },
  { label: 'Done' },
];

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <ShowcaseSection title="Horizontal">
        <div className="w-full">
          <Stepper steps={STEPS} current={1} />
        </div>
      </ShowcaseSection>
      <ShowcaseSection title="Vertical">
        <Stepper steps={STEPS} current={2} orientation="vertical" />
      </ShowcaseSection>
    </div>
  );
}
