import { useState } from 'react';
import { Button, Modal, Text } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Modal', category: 'atoms', order: 24 } as const;

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <ShowcaseSection title="Dialog with focus trap">
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete workout?"
        size="sm"
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </>
        }
      >
        <Text tone="muted">
          This will permanently remove the workout and its logged sets. This action cannot be undone.
        </Text>
      </Modal>
    </ShowcaseSection>
  );
}
