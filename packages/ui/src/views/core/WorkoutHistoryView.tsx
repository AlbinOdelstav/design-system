import { useState } from 'react';
import { ArrowDownWideNarrow, Clock, Dumbbell } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Chip } from '../../components/Chip/Chip';
import { Button } from '../../components/Button/Button';
import { Card, CardBody } from '../../components/Card/Card';
import { Badge } from '../../components/Badge/Badge';
import { Spinner } from '../../components/Spinner/Spinner';
import { EmptyState } from '../../components/EmptyState/EmptyState';

export interface WorkoutHistoryViewProps {
  empty?: boolean;
  loadingMore?: boolean;
  onLoadMore?: () => void;
}

const FILTERS = ['All', 'This week', 'This month', 'Push', 'Pull', 'Legs'];

const WORKOUTS = [
  { name: 'Push Day A', date: 'Mon, Jun 23', duration: '52 min', volume: '8,420 kg', muscles: ['Chest', 'Shoulders'] },
  { name: 'Pull Day B', date: 'Sun, Jun 22', duration: '47 min', volume: '7,150 kg', muscles: ['Back', 'Biceps'] },
  { name: 'Leg Day', date: 'Fri, Jun 20', duration: '61 min', volume: '12,300 kg', muscles: ['Quads', 'Glutes'] },
  { name: 'Upper Body', date: 'Wed, Jun 18', duration: '44 min', volume: '6,800 kg', muscles: ['Chest', 'Back'] },
];

/** Scrollable workout history list with date filters, sort, and load-more. */
export function WorkoutHistoryView({ empty = false, loadingMore = false, onLoadMore }: WorkoutHistoryViewProps) {
  const [active, setActive] = useState('All');

  return (
    <DemoAppShell active="history" title="History">
      <Container size="lg" className="py-6">
        <PageHeader
          title="Workout history"
          actions={
            <Button variant="outline" size="sm" leftIcon={<ArrowDownWideNarrow className="h-4 w-4" />}>
              Newest
            </Button>
          }
        />

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {FILTERS.map((f) => (
            <Chip key={f} selected={active === f} onClick={() => setActive(f)} className="shrink-0">
              {f}
            </Chip>
          ))}
        </div>

        {empty ? (
          <Card className="mt-4">
            <CardBody className="py-12">
              <EmptyState
                illustration={<Dumbbell className="h-16 w-16" />}
                heading="No workouts found"
                description="Try a different filter or log your first session."
              />
            </CardBody>
          </Card>
        ) : (
          <>
            <div className="mt-4 flex flex-col gap-3">
              {WORKOUTS.map((w) => (
                <Card key={w.name + w.date} interactive>
                  <CardBody className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-bg-subtle text-text-muted">
                      <Dumbbell className="h-6 w-6" aria-hidden="true" focusable={false} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-text">{w.name}</p>
                      <p className="text-label-sm text-text-muted">{w.date}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {w.muscles.map((m) => (
                          <Badge key={m} variant="neutral">
                            {m}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="flex items-center justify-end gap-1 text-label-sm text-text-muted">
                        <Clock className="h-4 w-4" aria-hidden="true" focusable={false} />
                        {w.duration}
                      </p>
                      <p className="mt-1 text-label font-semibold tabular-nums text-text">{w.volume}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              {loadingMore ? (
                <Spinner label="Loading more workouts" />
              ) : (
                <Button variant="ghost" onClick={onLoadMore}>
                  Load more
                </Button>
              )}
            </div>
          </>
        )}
      </Container>
    </DemoAppShell>
  );
}
