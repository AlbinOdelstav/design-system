import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const chip = cva(
  [
    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-label font-medium',
    'transition-colors duration-fast ease-out',
    'focus-visible:outline-none focus-visible:shadow-focus',
  ],
  {
    variants: {
      selected: {
        true: 'border-primary bg-primary-subtle text-primary-subtle-fg',
        false: 'border-border bg-surface text-text-muted hover:bg-bg-subtle',
      },
    },
    defaultVariants: { selected: false },
  },
);

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof chip> {
  /** Renders a dismiss button (a sibling, not nested) calling onDismiss. */
  dismissable?: boolean;
  onDismiss?: () => void;
}

/** Selectable filter chip. `selected` = primary-subtle + border-primary. */
export function Chip({
  selected,
  dismissable,
  onDismiss,
  className,
  children,
  type = 'button',
  ...props
}: ChipProps) {
  // When dismissable, the close affordance is a sibling button (nesting
  // interactive elements is invalid HTML), wrapped so it reads as one pill.
  if (dismissable) {
    return (
      <span
        className={cn(
          chip({ selected }),
          'gap-1 pr-1.5 focus-within:shadow-focus',
          className,
        )}
      >
        <button
          type={type}
          aria-pressed={selected ?? false}
          className="bg-transparent focus-visible:outline-none"
          {...props}
        >
          {children}
        </button>
        <button
          type="button"
          aria-label="Remove"
          className="-mr-0.5 inline-flex rounded-full p-0.5 hover:bg-black/5 focus-visible:outline-none focus-visible:shadow-focus"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" focusable={false} />
        </button>
      </span>
    );
  }

  return (
    <button
      type={type}
      aria-pressed={selected ?? false}
      className={cn(chip({ selected }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
