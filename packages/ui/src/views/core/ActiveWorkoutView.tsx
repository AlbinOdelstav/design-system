import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { Timer } from '../../components/Timer/Timer';
import { SetLoggerRow } from '../../components/SetLoggerRow/SetLoggerRow';
import { Button } from '../../components/Button/Button';
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup';
import { IconButton } from '../../components/IconButton/IconButton';
import { Badge } from '../../components/Badge/Badge';
import { Card } from '../../components/Card/Card';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Modal } from '../../components/Modal/Modal';

export interface ActiveWorkoutViewProps {
  workoutName?: string;
  elapsedSeconds?: number;
  onEnd?: () => void;
}

interface SetState {
  weight: string;
  reps: string;
  completed: boolean;
}

const INITIAL_SETS: SetState[] = [
  { weight: '60', reps: '10', completed: true },
  { weight: '65', reps: '8', completed: true },
  { weight: '70', reps: '6', completed: false },
];

/** Active workout logging screen with session timer, set rows, rest sheet. */
export function ActiveWorkoutView({
  workoutName = 'Push Day A',
  elapsedSeconds = 1645,
  onEnd,
}: ActiveWorkoutViewProps) {
  const [sets, setSets] = useState<SetState[]>(INITIAL_SETS);
  const [running, setRunning] = useState(true);
  const [restOpen, setRestOpen] = useState(false);

  const activeIndex = sets.findIndex((s) => !s.completed);

  const updateSet = (i: number, patch: Partial<SetState>) =>
    setSets((current) => current.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));

  const toggleComplete = (i: number) => {
    const willComplete = !sets[i].completed;
    updateSet(i, { completed: willComplete });
    if (willComplete) setRestOpen(true);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-bg-base">
      <header className="flex h-14 items-center justify-between border-b border-border-subtle bg-surface px-4">
        <span className="font-semibold text-text">{workoutName}</span>
        <IconButton aria-label="End workout" variant="ghost" onClick={onEnd}>
          <X className="h-5 w-5" aria-hidden="true" focusable={false} />
        </IconButton>
      </header>

      <div className="mx-auto grid w-full max-w-5xl flex-1 grid-cols-1 gap-6 p-4 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-6">
          <Card padded>
            <Timer
              seconds={elapsedSeconds}
              running={running}
              onToggle={() => setRunning((r) => !r)}
              onReset={() => setRunning(false)}
            />
          </Card>

          <div>
            <div className="flex items-center justify-between">
              <div>
                <Heading level={2} size={3}>
                  Bench Press
                </Heading>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="primary">Chest</Badge>
                  <Text size="sm" tone="muted">
                    Prev best: 72.5 kg × 6
                  </Text>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {sets.map((s, i) => (
                <SetLoggerRow
                  key={i}
                  setNumber={i + 1}
                  weight={s.weight}
                  reps={s.reps}
                  completed={s.completed}
                  active={i === activeIndex}
                  onWeightChange={(weight) => updateSet(i, { weight })}
                  onRepsChange={(reps) => updateSet(i, { reps })}
                  onToggleComplete={() => toggleComplete(i)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mt-3"
              leftIcon={<Plus className="h-5 w-5" />}
              onClick={() => setSets((c) => [...c, { weight: '', reps: '', completed: false }])}
            >
              Add set
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Card padded>
            <Text weight="semibold">Up next</Text>
            <Text size="sm" tone="muted" className="mt-1">
              Incline Dumbbell Press · 3 sets
            </Text>
          </Card>
          <ButtonGroup className="w-full" attached={false}>
            <Button variant="outline" fullWidth leftIcon={<ChevronLeft className="h-5 w-5" />}>
              Prev
            </Button>
            <Button fullWidth rightIcon={<ChevronRight className="h-5 w-5" />}>
              Next
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <Modal open={restOpen} onClose={() => setRestOpen(false)} title="Rest" size="sm">
        <div className="flex flex-col items-center gap-4 py-2">
          <Timer seconds={90} running compact />
          <Text tone="muted">Rest before your next set.</Text>
          <Button fullWidth onClick={() => setRestOpen(false)}>
            Skip rest
          </Button>
        </div>
      </Modal>
    </div>
  );
}
