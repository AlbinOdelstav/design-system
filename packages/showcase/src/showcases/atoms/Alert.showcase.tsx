import { Alert } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Alert', category: 'atoms', order: 23 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Variants">
      <div className="flex w-full flex-col gap-3">
        <Alert variant="info" title="Heads up">
          Your program updates every Monday.
        </Alert>
        <Alert variant="success" title="Workout saved">
          Great session — 8,420 kg moved.
        </Alert>
        <Alert variant="warning" title="Deload week">
          Consider lowering intensity this week.
        </Alert>
        <Alert variant="danger" title="Sync failed" onDismiss={() => undefined}>
          We couldn&apos;t sync your last workout.
        </Alert>
      </div>
    </ShowcaseSection>
  );
}
