import { Award, Pencil } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { Card, CardBody, CardHeader } from '../../components/Card/Card';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Stat, StatLabel, StatValue } from '../../components/Stat/Stat';
import { Divider } from '../../components/Divider/Divider';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';
import { Badge } from '../../components/Badge/Badge';

export interface ProfileViewProps {
  name?: string;
  username?: string;
  onEdit?: () => void;
}

const PRS = [
  { lift: 'Bench Press', value: '80 kg' },
  { lift: 'Squat', value: '120 kg' },
  { lift: 'Deadlift', value: '150 kg' },
];

const ACHIEVEMENTS = ['100 workouts', '30-day streak', 'First PR', 'Early bird', '1M kg lifted'];

/** Profile overview: header card, key stats, recent PRs, achievements. */
export function ProfileView({ name = 'Alex Carter', username = '@alex', onEdit }: ProfileViewProps) {
  return (
    <DemoAppShell active="settings" title="Profile">
      <Container size="md" className="py-6">
        <Card>
          <CardBody className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
            <Avatar size="xl" name={name} />
            <div className="min-w-0 flex-1">
              <Heading level={1} size={2}>
                {name}
              </Heading>
              <Text tone="muted">{username}</Text>
              <Text size="sm" tone="subtle" className="mt-1">
                Member since Jan 2024
              </Text>
            </div>
            <Button variant="outline" leftIcon={<Pencil className="h-4 w-4" />} onClick={onEdit}>
              Edit
            </Button>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="grid grid-cols-3 gap-4">
              <Stat className="items-center text-center">
                <StatLabel>Workouts</StatLabel>
                <StatValue>187</StatValue>
              </Stat>
              <Stat className="items-center text-center">
                <StatLabel>Streak</StatLabel>
                <StatValue>12</StatValue>
              </Stat>
              <Stat className="items-center text-center">
                <StatLabel>PRs</StatLabel>
                <StatValue>24</StatValue>
              </Stat>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <span className="flex items-center gap-2 text-label font-semibold text-text">
              <Award className="h-4 w-4 text-primary" aria-hidden="true" focusable={false} />
              Recent PRs
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

        <Card className="mt-6">
          <CardHeader>
            <span className="text-label font-semibold text-text">Achievements</span>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-2">
              {ACHIEVEMENTS.map((a) => (
                <Badge key={a} variant="primary" size="md">
                  {a}
                </Badge>
              ))}
            </div>
          </CardBody>
        </Card>
      </Container>
    </DemoAppShell>
  );
}
