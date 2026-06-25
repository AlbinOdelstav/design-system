import { useState } from 'react';
import { Slider } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Slider', category: 'atoms', order: 21 } as const;

export default function Demo() {
  const [value, setValue] = useState(70);
  return (
    <ShowcaseSection title="With value">
      <div className="w-full max-w-sm">
        <Slider
          label="Bodyweight (kg)"
          showValue
          min={40}
          max={150}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
    </ShowcaseSection>
  );
}
