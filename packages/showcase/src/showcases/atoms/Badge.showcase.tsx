import { Badge } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Badge', category: 'atoms', order: 8 } as const;

const VARIANTS = ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'] as const;

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <ShowcaseSection title="Variants">
        {VARIANTS.map((v) => (
          <PropRow key={v} label={v}>
            <Badge variant={v}>{v}</Badge>
          </PropRow>
        ))}
      </ShowcaseSection>
      <ShowcaseSection title="Sizes">
        <PropRow label="sm">
          <Badge variant="primary" size="sm">
            Small
          </Badge>
        </PropRow>
        <PropRow label="md">
          <Badge variant="primary" size="md">
            Medium
          </Badge>
        </PropRow>
      </ShowcaseSection>
    </div>
  );
}
