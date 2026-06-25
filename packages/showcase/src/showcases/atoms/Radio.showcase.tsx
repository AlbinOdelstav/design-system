import { useState } from 'react';
import { Radio, RadioGroup } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Radio', category: 'atoms', order: 19 } as const;

export default function Demo() {
  const [value, setValue] = useState('strength');
  return (
    <ShowcaseSection title="RadioGroup">
      <RadioGroup name="goal" value={value} onChange={setValue} label="Primary goal">
        <Radio value="strength" label="Build strength" />
        <Radio value="muscle" label="Gain muscle" />
        <Radio value="endurance" label="Improve endurance" />
        <Radio value="locked" label="Disabled option" disabled />
      </RadioGroup>
    </ShowcaseSection>
  );
}
