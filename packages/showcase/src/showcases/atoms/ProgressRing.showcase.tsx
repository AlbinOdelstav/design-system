import { ProgressRing } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'ProgressRing', category: 'atoms', order: 28 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Sizes with center slot">
      <PropRow label="sm">
        <ProgressRing value={40} size="sm" label="40%" />
      </PropRow>
      <PropRow label="md">
        <ProgressRing value={66} size="md" label="66%">
          <span className="text-label font-bold tabular-nums">66%</span>
        </ProgressRing>
      </PropRow>
      <PropRow label="lg">
        <ProgressRing value={90} size="lg" label="90%">
          <span className="text-h4 font-bold tabular-nums">90%</span>
        </ProgressRing>
      </PropRow>
    </ShowcaseSection>
  );
}
