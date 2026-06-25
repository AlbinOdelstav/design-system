import { useState } from 'react';
import { SetLoggerRow } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'SetLoggerRow', category: 'atoms', order: 47 } as const;

interface Row {
  weight: string;
  reps: string;
  completed: boolean;
}

export default function Demo() {
  const [rows, setRows] = useState<Row[]>([
    { weight: '60', reps: '10', completed: true },
    { weight: '65', reps: '8', completed: false },
    { weight: '', reps: '', completed: false },
  ]);

  const active = rows.findIndex((r) => !r.completed);
  const update = (i: number, patch: Partial<Row>) =>
    setRows((c) => c.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));

  return (
    <ShowcaseSection title="Set logging rows">
      <div className="flex w-full max-w-md flex-col gap-2">
        {rows.map((r, i) => (
          <SetLoggerRow
            key={i}
            setNumber={i + 1}
            weight={r.weight}
            reps={r.reps}
            completed={r.completed}
            active={i === active}
            onWeightChange={(weight) => update(i, { weight })}
            onRepsChange={(reps) => update(i, { reps })}
            onToggleComplete={() => update(i, { completed: !r.completed })}
          />
        ))}
      </div>
    </ShowcaseSection>
  );
}
