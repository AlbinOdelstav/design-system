import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ToastProvider, useToast } from '@albin/ui';

function Trigger() {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast({ title: 'Saved', description: 'Done', duration: 0 })}>
      Notify
    </Button>
  );
}

describe('Toast', () => {
  it('enqueues a toast and dismisses it via the close button', async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>,
    );

    expect(screen.queryByText('Saved')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Notify' }));
    expect(screen.getByText('Saved')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(screen.queryByText('Saved')).not.toBeInTheDocument();
  });
});
