import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField, Input } from '@albin/ui';

describe('FormField', () => {
  it('renders an error and ties it to the control via aria-describedby + aria-invalid', () => {
    render(
      <FormField label="Email" error="Email is required">
        <Input placeholder="you@example.com" />
      </FormField>,
    );

    const input = screen.getByPlaceholderText('you@example.com');
    const error = screen.getByText('Email is required');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(error).toHaveAttribute('id');
    expect(input.getAttribute('aria-describedby')).toBe(error.getAttribute('id'));
    expect(error).toHaveAttribute('role', 'alert');
  });

  it('exposes help text (not error) when valid', () => {
    render(
      <FormField label="Email" help="We never share it.">
        <Input placeholder="you@example.com" />
      </FormField>,
    );
    const input = screen.getByPlaceholderText('you@example.com');
    const help = screen.getByText('We never share it.');
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input.getAttribute('aria-describedby')).toBe(help.getAttribute('id'));
  });
});
