import { useState } from 'react';
import { Chip } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Chip', category: 'atoms', order: 10 } as const;

const FILTERS = ['Chest', 'Back', 'Legs', 'Shoulders'];

export default function Demo() {
  const [selected, setSelected] = useState<string[]>(['Chest']);
  const [tags, setTags] = useState(['Barbell', 'Compound']);

  const toggle = (f: string) =>
    setSelected((c) => (c.includes(f) ? c.filter((x) => x !== f) : [...c, f]));

  return (
    <div className="flex flex-col gap-8">
      <ShowcaseSection title="Selectable filters">
        {FILTERS.map((f) => (
          <Chip key={f} selected={selected.includes(f)} onClick={() => toggle(f)}>
            {f}
          </Chip>
        ))}
      </ShowcaseSection>
      <ShowcaseSection title="Dismissable">
        {tags.map((t) => (
          <Chip key={t} selected dismissable onDismiss={() => setTags((c) => c.filter((x) => x !== t))}>
            {t}
          </Chip>
        ))}
      </ShowcaseSection>
    </div>
  );
}
