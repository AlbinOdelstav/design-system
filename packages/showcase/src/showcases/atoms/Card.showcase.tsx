import { Button, Card, CardBody, CardFooter, CardHeader, Text } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Card', category: 'atoms', order: 11 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Composition & interactive">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <span className="font-semibold text-text">Workout summary</span>
          </CardHeader>
          <CardBody>
            <Text tone="muted">Header, body and footer sections compose a card.</Text>
          </CardBody>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
        <Card interactive padded>
          <Text weight="semibold">Interactive card</Text>
          <Text tone="muted" size="sm">
            Hover to see the elevation change.
          </Text>
        </Card>
      </div>
    </ShowcaseSection>
  );
}
