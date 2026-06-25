import { Switch } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Switch', category: 'atoms', order: 20 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="States">
      <div className="flex w-full flex-col gap-3">
        <Switch label="Off" />
        <Switch label="On" defaultChecked />
        <Switch label="Disabled" disabled />
      </div>
    </ShowcaseSection>
  );
}
