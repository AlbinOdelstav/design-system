import { cn } from '../../lib/cn';

export interface ChartPlaceholderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  type?: 'line' | 'bar' | 'ring';
  title?: React.ReactNode;
  /** Axis labels shown beneath the chart (line/bar). */
  axisLabels?: string[];
  height?: number;
}

const BARS = [40, 65, 50, 80, 60, 90, 70];
const LINE_POINTS = '0,70 40,55 80,60 120,40 160,48 200,30 240,38 280,20';

/** Static SVG chart skeleton (line/bar/ring) drawn in border colors. */
export function ChartPlaceholder({
  type = 'line',
  title,
  axisLabels,
  height = 180,
  className,
  ...props
}: ChartPlaceholderProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      {title && <p className="text-label font-semibold text-text">{title}</p>}
      <div className="w-full" style={{ height }} aria-hidden="true">
        {type === 'bar' && (
          <svg viewBox="0 0 280 100" preserveAspectRatio="none" className="h-full w-full">
            {BARS.map((h, i) => (
              <rect
                key={i}
                x={i * 40 + 8}
                y={100 - h}
                width="24"
                height={h}
                rx="3"
                className="fill-border"
              />
            ))}
          </svg>
        )}
        {type === 'line' && (
          <svg viewBox="0 0 280 100" preserveAspectRatio="none" className="h-full w-full">
            <polyline
              points={LINE_POINTS}
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-border-strong"
            />
            <line x1="0" y1="100" x2="280" y2="100" className="stroke-border-subtle" strokeWidth="1" />
          </svg>
        )}
        {type === 'ring' && (
          <svg viewBox="0 0 100 100" className="mx-auto h-full">
            <circle cx="50" cy="50" r="40" fill="none" strokeWidth="12" className="stroke-border-subtle" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="251.2"
              strokeDashoffset="80"
              transform="rotate(-90 50 50)"
              className="stroke-border-strong"
            />
          </svg>
        )}
      </div>
      {axisLabels && type !== 'ring' && (
        <div className="flex justify-between text-label-sm text-text-subtle">
          {axisLabels.map((label, i) => (
            <span key={i}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
}
