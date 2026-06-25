import { Dumbbell, Flame, Play, TrendingUp } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Card, CardBody, CardHeader } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Stat, StatDelta, StatLabel, StatValue } from '../../components/Stat/Stat';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';
import { Badge } from '../../components/Badge/Badge';
import { ChartPlaceholder } from '../../components/ChartPlaceholder/ChartPlaceholder';
import { Text } from '../../components/Text/Text';
import { EmptyState } from '../../components/EmptyState/EmptyState';

export interface DashboardViewProps {
  userName?: string;
  onStartWorkout?: () => void;
  /** Show the new-user empty state instead of populated cards. */
  empty?: boolean;
}

const RECENT = [
  { name: 'Push Day A', date: 'Today', volume: '8,420 kg', muscle: 'Chest' },
  { name: 'Pull Day B', date: 'Yesterday', volume: '7,150 kg', muscle: 'Back' },
  { name: 'Leg Day', date: '2 days ago', volume: '12,300 kg', muscle: 'Legs' },
];

/** Home dashboard: greeting, today card, stats, recent workouts, weekly chart. */
export function DashboardView({ userName = 'Alex', onStartWorkout, empty = false }: DashboardViewProps) {
  return (
    <DemoAppShell active="dashboard">
      <Container size="xl" className="py-6">
        <PageHeader title={`Hi, ${userName}`} description="Ready to train today?" />

        {empty ? (
          <Card className="mt-6">
            <CardBody className="py-12">
              <EmptyState
                illustration={<Dumbbell className="h-16 w-16" />}
                heading="No workouts yet"
                description="Start your first session and your stats will show up here."
                actions={
                  <Button leftIcon={<Play className="h-5 w-5" />} onClick={onStartWorkout}>
                    Start workout
                  </Button>
                }
              />
            </CardBody>
          </Card>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card className="bg-primary text-primary-fg md:col-span-2">
              <CardBody className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Text size="sm" className="font-semibold uppercase tracking-wide opacity-80">
                    Today
                  </Text>
                  <p className="mt-1 text-h2 font-bold">Push Day A</p>
                  <p className="text-body opacity-80">6 exercises · ~52 min</p>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-surface text-primary hover:bg-bg-subtle"
                  leftIcon={<Play className="h-5 w-5" />}
                  onClick={onStartWorkout}
                >
                  Start
                </Button>
              </CardBody>
            </Card>

            <Card padded className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning-subtle text-warning">
                <Flame className="h-6 w-6" aria-hidden="true" focusable={false} />
              </div>
              <Stat>
                <StatLabel>Current streak</StatLabel>
                <StatValue>12 days</StatValue>
              </Stat>
            </Card>

            <div className="grid grid-cols-3 gap-4 md:col-span-3">
              <Card padded>
                <Stat>
                  <StatLabel>Workouts</StatLabel>
                  <StatValue>18</StatValue>
                  <StatDelta direction="up">+3</StatDelta>
                </Stat>
              </Card>
              <Card padded>
                <Stat>
                  <StatLabel>Volume</StatLabel>
                  <StatValue>96k</StatValue>
                  <StatDelta direction="up">+8%</StatDelta>
                </Stat>
              </Card>
              <Card padded>
                <Stat>
                  <StatLabel>Avg time</StatLabel>
                  <StatValue>48m</StatValue>
                  <StatDelta direction="down">-2m</StatDelta>
                </Stat>
              </Card>
            </div>

            <Card className="md:col-span-2">
              <CardHeader>
                <span className="text-label font-semibold text-text">Recent workouts</span>
                <Button variant="ghost" size="sm">
                  View all
                </Button>
              </CardHeader>
              <List variant="flush">
                {RECENT.map((w) => (
                  <ListItem
                    key={w.name}
                    left={
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-subtle text-text-muted">
                        <Dumbbell className="h-5 w-5" aria-hidden="true" focusable={false} />
                      </div>
                    }
                    right={<Badge variant="primary">{w.muscle}</Badge>}
                  >
                    <span className="font-medium text-text">{w.name}</span>
                    <span className="block text-label-sm text-text-muted">
                      {w.date} · {w.volume}
                    </span>
                  </ListItem>
                ))}
              </List>
            </Card>

            <Card className="md:col-span-1">
              <CardBody>
                <div className="mb-2 flex items-center gap-2 text-text">
                  <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" focusable={false} />
                  <span className="text-label font-semibold">This week</span>
                </div>
                <ChartPlaceholder
                  type="bar"
                  axisLabels={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                  height={140}
                />
              </CardBody>
            </Card>
          </div>
        )}
      </Container>
    </DemoAppShell>
  );
}
