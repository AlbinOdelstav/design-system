import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@albin/ui';

/**
 * Regression guard: tailwind-merge must NOT strip a button's text-color class
 * when it co-exists with a custom font-size class (text-label). Both are
 * `text-*` utilities; without teaching tailwind-merge our custom font-size
 * tokens it drops the color, leaving solid buttons with dark inherited text.
 * See packages/ui/src/lib/cn.ts.
 */
describe('Button foreground color survives class merge', () => {
  it('keeps text-primary-fg on the primary variant', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole('button', { name: 'Primary' });
    expect(btn.className).toContain('bg-primary');
    expect(btn.className).toContain('text-primary-fg');
    expect(btn.className).toContain('text-label');
  });

  it('keeps text-danger-fg on the danger variant', () => {
    render(<Button variant="danger">Danger</Button>);
    const btn = screen.getByRole('button', { name: 'Danger' });
    expect(btn.className).toContain('bg-danger');
    expect(btn.className).toContain('text-danger-fg');
  });
});
