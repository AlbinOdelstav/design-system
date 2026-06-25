import { useId, useState } from 'react';
import { cn } from '../../lib/cn';

export interface TooltipProps {
  /** Tooltip text content. */
  content: React.ReactNode;
  /** Single focusable/hoverable trigger element. */
  children: React.ReactElement;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const SIDE_CLASS: Record<NonNullable<TooltipProps['side']>, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

/**
 * Hover/focus tooltip. Background uses the text color (#2C2218) with inverse
 * text. Wires aria-describedby onto the trigger; role=tooltip on the bubble.
 */
export function Tooltip({ content, children, side = 'top', className }: TooltipProps) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={() => setOpen(false)}
    >
      <span aria-describedby={id} className="inline-flex">
        {children}
      </span>
      <span
        role="tooltip"
        id={id}
        className={cn(
          'pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-text px-2 py-1 text-label-sm text-text-inverse shadow-md transition-opacity duration-fast ease-out',
          SIDE_CLASS[side],
          open ? 'opacity-100' : 'opacity-0',
          className,
        )}
      >
        {content}
      </span>
    </span>
  );
}
