import { Caption } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Caption', category: 'atoms', order: 7 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Variants">
      <PropRow label="caption">
        <Caption>Updated 2 hours ago</Caption>
      </PropRow>
      <PropRow label="overline">
        <Caption variant="overline">Section label</Caption>
      </PropRow>
    </ShowcaseSection>
  );
}
