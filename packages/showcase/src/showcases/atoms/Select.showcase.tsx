import { Select } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Select', category: 'atoms', order: 17 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="States">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Select defaultValue="kg">
          <option value="kg">Kilograms</option>
          <option value="lb">Pounds</option>
        </Select>
        <Select invalid defaultValue="">
          <option value="" disabled>
            Select a unit…
          </option>
          <option value="kg">Kilograms</option>
        </Select>
        <Select disabled defaultValue="kg">
          <option value="kg">Kilograms</option>
        </Select>
      </div>
    </ShowcaseSection>
  );
}
