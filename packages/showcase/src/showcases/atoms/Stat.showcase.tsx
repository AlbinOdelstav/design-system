import { Card, Stat, StatDelta, StatLabel, StatValue } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Stat', category: 'atoms', order: 12 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Stat with delta">
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
        <Card padded>
          <Stat>
            <StatLabel>Total volume</StatLabel>
            <StatValue>96,200</StatValue>
            <StatDelta direction="up">+8%</StatDelta>
          </Stat>
        </Card>
        <Card padded>
          <Stat>
            <StatLabel>Avg session</StatLabel>
            <StatValue>48m</StatValue>
            <StatDelta direction="down">-2m</StatDelta>
          </Stat>
        </Card>
        <Card padded>
          <Stat>
            <StatLabel>Workouts</StatLabel>
            <StatValue>18</StatValue>
          </Stat>
        </Card>
      </div>
    </ShowcaseSection>
  );
}
