import { useState } from 'react';
import { Award, Flame } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Tabs, TabList, Tab, TabPanel } from '../../components/Tabs/Tabs';
import { Card, CardBody, CardHeader } from '../../components/Card/Card';
import { ChartPlaceholder } from '../../components/ChartPlaceholder/ChartPlaceholder';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';
import { Badge } from '../../components/Badge/Badge';
import { Stat, StatLabel, StatValue } from '../../components/Stat/Stat';

export interface ProgressStatsViewProps {
  range?: string;
}

const RANGES = ['1W', '1M', '3M', '1Y', 'All'];

const PRS = [
  { lift: 'Bench Press', value: '80 kg' },
  { lift: 'Squat', value: '120 kg' },
  { lift: 'Deadlift', value: '150 kg' },
];

const STREAKS = [
  { label: 'Current', value: '12 days' },
  { label: 'Longest', value: '34 days' },
  { label: 'This month', value: '16' },
];

/** Progress analytics: time-range tabs, volume + bodyweight charts, PRs, streaks. */
export function ProgressStatsView({ range = '1M' }: ProgressStatsViewProps) {
  const [active, setActive] = useState(range);

  return (
    <DemoAppShell active="progress" title="Progress">
      <Container size="xl" className="py-6">
        <PageHeader title="Progress" />

        <div className="mt-4">
          <Tabs value={active} onValueChange={setActive}>
            <TabList>
              {RANGES.map((r) => (
                <Tab key={r} value={r}>
                  {r}
                </Tab>
              ))}
            </TabList>
            {RANGES.map((r) => (
              <TabPanel key={r} value={r}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardBody>
                      <ChartPlaceholder
                        type="bar"
                        title="Total volume"
                        axisLabels={['W1', 'W2', 'W3', 'W4']}
                      />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <ChartPlaceholder
                        type="line"
                        title="Bodyweight"
                        axisLabels={['W1', 'W2', 'W3', 'W4']}
                      />
                    </CardBody>
                  </Card>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>

        <Card className="mt-4">
          <CardHeader>
            <span className="flex items-center gap-2 text-label font-semibold text-text">
              <Award className="h-4 w-4 text-primary" aria-hidden="true" focusable={false} />
              Personal records
            </span>
          </CardHeader>
          <List variant="flush">
            {PRS.map((pr) => (
              <ListItem key={pr.lift} right={<Badge variant="success">{pr.value}</Badge>}>
                <span className="font-medium text-text">{pr.lift}</span>
              </ListItem>
            ))}
          </List>
        </Card>

        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {STREAKS.map((s) => (
            <Card key={s.label} padded className="min-w-[140px] shrink-0">
              <Stat>
                <StatLabel>
                  <span className="inline-flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5 text-warning" aria-hidden="true" focusable={false} />
                    {s.label}
                  </span>
                </StatLabel>
                <StatValue>{s.value}</StatValue>
              </Stat>
            </Card>
          ))}
        </div>
      </Container>
    </DemoAppShell>
  );
}
