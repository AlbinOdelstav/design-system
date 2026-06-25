import { Button, Tooltip } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Tooltip', category: 'atoms', order: 26 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Hover or focus the trigger">
      <PropRow label="top">
        <Tooltip content="Personal record">
          <Button variant="outline">Top</Button>
        </Tooltip>
      </PropRow>
      <PropRow label="bottom">
        <Tooltip content="Rest timer" side="bottom">
          <Button variant="outline">Bottom</Button>
        </Tooltip>
      </PropRow>
      <PropRow label="right">
        <Tooltip content="Add set" side="right">
          <Button variant="outline">Right</Button>
        </Tooltip>
      </PropRow>
    </ShowcaseSection>
  );
}
