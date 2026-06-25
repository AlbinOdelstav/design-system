import { Label } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Label', category: 'atoms', order: 6 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Sizes">
      <PropRow label="base">
        <Label>Email address</Label>
      </PropRow>
      <PropRow label="sm">
        <Label size="sm">Email address</Label>
      </PropRow>
    </ShowcaseSection>
  );
}
