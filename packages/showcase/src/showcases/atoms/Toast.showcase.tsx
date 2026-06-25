import { Button, useToast } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Toast', category: 'atoms', order: 25 } as const;

export default function Demo() {
  const { toast } = useToast();
  return (
    <ShowcaseSection title="Enqueue toasts (ToastProvider is in the app shell)">
      <Button onClick={() => toast({ variant: 'success', title: 'Workout saved', description: 'Nice work!' })}>
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast({ variant: 'info', title: 'Synced', description: 'All data is up to date.' })}
      >
        Info
      </Button>
      <Button
        variant="danger"
        onClick={() => toast({ variant: 'danger', title: 'Sync failed', description: 'Check your connection.' })}
      >
        Danger
      </Button>
    </ShowcaseSection>
  );
}
