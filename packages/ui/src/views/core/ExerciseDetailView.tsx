import { Dumbbell, Plus } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Heading } from '../../components/Heading/Heading';
import { Badge } from '../../components/Badge/Badge';
import { Divider } from '../../components/Divider/Divider';
import { Button } from '../../components/Button/Button';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';
import { Stat, StatLabel, StatValue } from '../../components/Stat/Stat';

export interface ExerciseDetailViewProps {
  name?: string;
  onAddToWorkout?: () => void;
}

const INSTRUCTIONS = [
  'Lie flat on the bench with your eyes under the bar.',
  'Grip slightly wider than shoulder-width and unrack.',
  'Lower the bar to mid-chest with control.',
  'Press back up until your arms are fully extended.',
];

const HISTORY = [
  { date: 'Jun 23', value: '70 kg × 6' },
  { date: 'Jun 16', value: '67.5 kg × 6' },
  { date: 'Jun 9', value: '65 kg × 8' },
];

/** Single-exercise detail page: hero, metadata, instructions, recent history. */
export function ExerciseDetailView({ name = 'Bench Press', onAddToWorkout }: ExerciseDetailViewProps) {
  return (
    <DemoAppShell active="library" title={name}>
      <Container size="md" className="py-6">
        <Breadcrumb
          items={[
            { label: 'Exercises', href: '#library' },
            { label: 'Chest', href: '#chest' },
            { label: name },
          ]}
        />

        <div className="mt-4 flex aspect-video items-center justify-center rounded-lg bg-bg-subtle text-text-subtle">
          <Dumbbell className="h-12 w-12" aria-hidden="true" focusable={false} />
        </div>

        <Heading level={1} size={1} className="mt-6">
          {name}
        </Heading>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="primary">Chest</Badge>
          <Badge variant="neutral">Barbell</Badge>
          <Badge variant="warning">Intermediate</Badge>
        </div>

        <Divider className="my-6" />

        <section>
          <Heading level={2} size={3}>
            Instructions
          </Heading>
          <ol className="mt-3 flex flex-col gap-3">
            {INSTRUCTIONS.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-subtle text-label-sm font-semibold text-primary-subtle-fg">
                  {i + 1}
                </span>
                <span className="text-body text-text">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <Divider className="my-6" />

        <section>
          <Heading level={2} size={3}>
            Your history
          </Heading>
          <List variant="card" className="mt-3">
            {HISTORY.map((h) => (
              <ListItem
                key={h.date}
                right={
                  <Stat className="items-end">
                    <StatValue className="text-h4">{h.value}</StatValue>
                  </Stat>
                }
              >
                <StatLabel>{h.date}</StatLabel>
              </ListItem>
            ))}
          </List>
        </section>

        <Button
          size="lg"
          fullWidth
          className="mt-6"
          leftIcon={<Plus className="h-5 w-5" />}
          onClick={onAddToWorkout}
        >
          Add to workout
        </Button>
      </Container>
    </DemoAppShell>
  );
}
