import { useCallback, useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { IconButton } from '../IconButton/IconButton';

const panel = cva(
  [
    'relative w-full bg-surface-raised shadow-xl',
    'rounded-t-lg sm:rounded-lg',
    'max-h-[90vh] overflow-y-auto',
    // Bottom-sheet on mobile, centered dialog on sm+.
    'animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200',
  ],
  {
    variants: {
      size: {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-2xl',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

export interface ModalProps extends VariantProps<typeof panel> {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  /** Disable closing on overlay click / Escape. */
  dismissable?: boolean;
}

/**
 * Accessible modal dialog. role=dialog + aria-modal, focus trap, focus return
 * to the previously-focused element, Escape + overlay-click to close. Renders a
 * bottom-sheet on mobile and a centered panel on larger screens.
 */
export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size,
  className,
  dismissable = true,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && dismissable) {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const root = panelRef.current;
      if (!root) return;
      const focusables = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [dismissable, onClose],
  );

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const root = panelRef.current;
    const firstFocusable = root?.querySelector<HTMLElement>(FOCUSABLE);
    (firstFocusable ?? root)?.focus();

    // Lock background scroll while open (SSR-safe). Restore the prior value on
    // close/unmount.
    let previousOverflow: string | undefined;
    if (typeof document !== 'undefined') {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = previousOverflow ?? '';
      }
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close dialog overlay"
        className="absolute inset-0 bg-overlay animate-in fade-in duration-200"
        onClick={() => dismissable && onClose()}
      />
      {/* The dialog owns keyboard handling (Escape to close, Tab to trap focus),
          which is the expected ARIA modal pattern. */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={cn(panel({ size }), className)}
      >
        {(title || dismissable) && (
          <div className="flex items-center justify-between gap-3 border-b border-border-subtle px-5 py-4">
            {title ? (
              <h2 id={titleId} className="text-h4 font-semibold text-text">
                {title}
              </h2>
            ) : (
              <span />
            )}
            {dismissable && (
              <IconButton aria-label="Close" variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" aria-hidden="true" focusable={false} />
              </IconButton>
            )}
          </div>
        )}
        <div className="px-5 py-4">{children}</div>
        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-border-subtle px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
