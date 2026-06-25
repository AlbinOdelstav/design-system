import { Plus } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { ShellMark } from '../shared/Illustration';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { Button } from '../../components/Button/Button';

export interface EmptyStateViewProps {
  heading?: string;
  description?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

/** Full empty-state screen inside the app shell. */
export function EmptyStateView({
  heading = 'No workouts yet',
  description = 'Create your first workout to start tracking your progress.',
  onPrimary,
  onSecondary,
}: EmptyStateViewProps) {
  return (
    <DemoAppShell active="dashboard">
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <EmptyState
          illustration={<ShellMark size={128} className="text-primary" />}
          heading={heading}
          description={description}
          actions={
            <>
              <Button leftIcon={<Plus className="h-5 w-5" />} onClick={onPrimary}>
                New workout
              </Button>
              <Button variant="ghost" onClick={onSecondary}>
                Browse exercises
              </Button>
            </>
          }
        />
      </div>
    </DemoAppShell>
  );
}
