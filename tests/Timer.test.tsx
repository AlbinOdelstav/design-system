import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useEffect, useState } from 'react';
import { render, screen, act } from '@testing-library/react';
import { Timer, formatTime } from '@albin/ui';

/** A small countdown harness driving the presentational Timer. */
function Countdown({ from }: { from: number }) {
  const [seconds, setSeconds] = useState(from);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  return <Timer seconds={seconds} running />;
}

describe('Timer', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('formats seconds as MM:SS and HH:MM:SS', () => {
    expect(formatTime(0)).toBe('00:00');
    expect(formatTime(90)).toBe('01:30');
    expect(formatTime(3661)).toBe('01:01:01');
  });

  it('counts down over time', () => {
    render(<Countdown from={65} />);
    expect(screen.getByRole('timer')).toHaveTextContent('01:05');

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByRole('timer')).toHaveTextContent('01:00');
  });
});
