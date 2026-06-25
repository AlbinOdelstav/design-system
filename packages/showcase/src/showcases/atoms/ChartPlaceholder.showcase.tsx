import { Card, CardBody, ChartPlaceholder } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'ChartPlaceholder', category: 'atoms', order: 48 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Types">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardBody>
            <ChartPlaceholder type="bar" title="Volume" axisLabels={['M', 'T', 'W', 'T', 'F', 'S', 'S']} />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <ChartPlaceholder type="line" title="Bodyweight" axisLabels={['W1', 'W2', 'W3', 'W4']} />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <ChartPlaceholder type="ring" title="Goal" />
          </CardBody>
        </Card>
      </div>
    </ShowcaseSection>
  );
}
