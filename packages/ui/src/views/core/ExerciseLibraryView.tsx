import { useState } from 'react';
import { Dumbbell, Search } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Input } from '../../components/Input/Input';
import { Chip } from '../../components/Chip/Chip';
import { Card, CardBody } from '../../components/Card/Card';
import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/Button/Button';
import { EmptyState } from '../../components/EmptyState/EmptyState';

export interface ExerciseLibraryViewProps {
  empty?: boolean;
  onLoadMore?: () => void;
}

const MUSCLES = ['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'];
const EQUIPMENT = ['Barbell', 'Dumbbell', 'Machine', 'Bodyweight', 'Cable'];

const EXERCISES = [
  { name: 'Bench Press', muscle: 'Chest' },
  { name: 'Deadlift', muscle: 'Back' },
  { name: 'Back Squat', muscle: 'Legs' },
  { name: 'Overhead Press', muscle: 'Shoulders' },
  { name: 'Barbell Row', muscle: 'Back' },
  { name: 'Pull-up', muscle: 'Back' },
  { name: 'Lunge', muscle: 'Legs' },
  { name: 'Bicep Curl', muscle: 'Arms' },
];

/** Exercise browser: search, muscle/equipment filters, responsive results grid. */
export function ExerciseLibraryView({ empty = false, onLoadMore }: ExerciseLibraryViewProps) {
  const [muscle, setMuscle] = useState('All');
  const [equipment, setEquipment] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const toggleEquipment = (e: string) =>
    setEquipment((c) => (c.includes(e) ? c.filter((x) => x !== e) : [...c, e]));

  return (
    <DemoAppShell active="library" title="Exercises">
      <Container size="xl" className="py-6">
        <PageHeader title="Exercise library" />

        <div className="mt-4">
          <Input
            placeholder="Search exercises…"
            leftIcon={<Search className="h-5 w-5" />}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search exercises"
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {MUSCLES.map((m) => (
            <Chip key={m} selected={muscle === m} onClick={() => setMuscle(m)} className="shrink-0">
              {m}
            </Chip>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {EQUIPMENT.map((e) => (
            <Chip
              key={e}
              selected={equipment.includes(e)}
              onClick={() => toggleEquipment(e)}
              className="shrink-0"
            >
              {e}
            </Chip>
          ))}
        </div>

        {empty ? (
          <div className="py-12">
            <EmptyState
              illustration={<Search className="h-16 w-16" />}
              heading="No results"
              description="No exercises match your search. Try a different term or filter."
            />
          </div>
        ) : (
          <>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {EXERCISES.map((ex) => (
                <Card key={ex.name} interactive>
                  <CardBody className="flex flex-col gap-3 p-3">
                    <div className="flex aspect-video items-center justify-center rounded-md bg-bg-subtle text-text-subtle">
                      <Dumbbell className="h-8 w-8" aria-hidden="true" focusable={false} />
                    </div>
                    <div>
                      <p className="truncate font-semibold text-text">{ex.name}</p>
                      <Badge variant="neutral" className="mt-1">
                        {ex.muscle}
                      </Badge>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Button variant="ghost" onClick={onLoadMore}>
                Load more
              </Button>
            </div>
          </>
        )}
      </Container>
    </DemoAppShell>
  );
}
