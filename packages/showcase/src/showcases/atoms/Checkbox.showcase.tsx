import { Checkbox } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Checkbox', category: 'atoms', order: 18 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="States">
      <div className="flex w-full flex-col gap-3">
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked" defaultChecked />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled checked" disabled defaultChecked />
      </div>
    </ShowcaseSection>
  );
}
