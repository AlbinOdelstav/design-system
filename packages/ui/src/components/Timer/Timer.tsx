import { Pause, Play, RotateCcw } from 'lucide-react';
import { cn } from '../../lib/cn';
import { IconButton } from '../IconButton/IconButton';

export interface TimerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Elapsed/remaining time in seconds. */
  seconds: number;
  running?: boolean;
  onToggle?: () => void;
  onReset?: () => void;
  /** Compact inline layout (smaller display, no labels). */
  compact?: boolean;
}

/** Formats seconds as MM:SS, or HH:MM:SS past an hour. */
export function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
}

/** Workout timer with play/pause + reset controls. Running = primary color. */
export function Timer({
  seconds,
  running = false,
  onToggle,
  onReset,
  compact = false,
  className,
  ...props
}: TimerProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} {...props}>
      <span
        role="timer"
        aria-live="off"
        className={cn(
          'font-bold tabular-nums tracking-tight',
          compact ? 'text-h3' : 'text-display',
          running ? 'text-primary' : 'text-text',
        )}
      >
        {formatTime(seconds)}
      </span>
      {(onToggle || onReset) && (
        <div className="flex items-center gap-2">
          {onToggle && (
            <IconButton
              aria-label={running ? 'Pause' : 'Start'}
              variant="primary"
              shape="circular"
              size={compact ? 'sm' : 'md'}
              onClick={onToggle}
            >
              {running ? (
                <Pause className="h-5 w-5" aria-hidden="true" focusable={false} />
              ) : (
                <Play className="h-5 w-5" aria-hidden="true" focusable={false} />
              )}
            </IconButton>
          )}
          {onReset && (
            <IconButton
              aria-label="Reset"
              variant="ghost"
              shape="circular"
              size={compact ? 'sm' : 'md'}
              onClick={onReset}
            >
              <RotateCcw className="h-5 w-5" aria-hidden="true" focusable={false} />
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
}
