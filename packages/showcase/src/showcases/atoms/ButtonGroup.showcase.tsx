import { Button, ButtonGroup } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'ButtonGroup', category: 'atoms', order: 3 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Attached & spaced">
      <PropRow label="attached">
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
      </PropRow>
      <PropRow label="spaced">
        <ButtonGroup attached={false}>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </ButtonGroup>
      </PropRow>
    </ShowcaseSection>
  );
}
