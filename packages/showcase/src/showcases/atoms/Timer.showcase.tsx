import { useState } from 'react';
import { Timer } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Timer', category: 'atoms', order: 46 } as const;

export default function Demo() {
  const [seconds, setSeconds] = useState(1645);
  const [running, setRunning] = useState(true);
  return (
    <div className="flex flex-col gap-8">
      <ShowcaseSection title="With controls">
        <Timer
          seconds={seconds}
          running={running}
          onToggle={() => setRunning((r) => !r)}
          onReset={() => setSeconds(0)}
        />
      </ShowcaseSection>
      <ShowcaseSection title="Compact">
        <Timer seconds={90} running compact />
      </ShowcaseSection>
    </div>
  );
}
