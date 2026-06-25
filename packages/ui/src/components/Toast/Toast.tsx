import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';

export interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  /** Auto-dismiss after ms. Defaults to 5000; pass 0 to keep it open. */
  duration?: number;
}

interface ToastItem extends ToastOptions {
  id: string;
}

interface ToastContextValue {
  toast: (options: ToastOptions) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/** Access the toast queue. Must be used under a ToastProvider. */
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

const ACCENT: Record<ToastVariant, string> = {
  info: 'border-l-primary',
  success: 'border-l-success',
  warning: 'border-l-warning',
  danger: 'border-l-danger',
};

const ICONS: Record<ToastVariant, LucideIcon> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: AlertCircle,
};

const ICON_COLOR: Record<ToastVariant, string> = {
  info: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
};

const PROGRESS_COLOR: Record<ToastVariant, string> = {
  info: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
};

function ToastCard({ item, onDismiss }: { item: ToastItem; onDismiss: (id: string) => void }) {
  const variant = item.variant ?? 'info';
  const duration = item.duration ?? 5000;
  const IconComp = ICONS[variant];
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (duration <= 0) return;
    const start = Date.now();
    const tick = window.setInterval(() => {
      const remaining = Math.max(0, 1 - (Date.now() - start) / duration);
      setProgress(remaining * 100);
    }, 50);
    const timer = window.setTimeout(() => onDismiss(item.id), duration);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(timer);
    };
  }, [duration, item.id, onDismiss]);

  // No role here: the surrounding viewport is the single live region (see
  // ToastProvider). Per-card roles would create a second implicit live region
  // and some screen readers announce the toast twice.
  return (
    <div
      className={cn(
        'pointer-events-auto relative w-full overflow-hidden rounded-md border border-l-4 border-border-subtle bg-surface-raised shadow-lg',
        ACCENT[variant],
        'animate-in slide-in-from-bottom-2 fade-in duration-200',
      )}
    >
      <div className="flex gap-3 p-4">
        <IconComp className={cn('mt-0.5 h-5 w-5 shrink-0', ICON_COLOR[variant])} aria-hidden="true" focusable={false} />
        <div className="min-w-0 flex-1">
          {item.title && <p className="text-label font-semibold text-text">{item.title}</p>}
          {item.description && <p className="text-body-sm text-text-muted">{item.description}</p>}
        </div>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => onDismiss(item.id)}
          className="-m-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-text-subtle hover:bg-bg-subtle focus-visible:outline-none focus-visible:shadow-focus"
        >
          <X className="h-4 w-4" aria-hidden="true" focusable={false} />
        </button>
      </div>
      {duration > 0 && (
        <div className="h-0.5 w-full bg-border-subtle">
          <div
            className={cn('h-full', PROGRESS_COLOR[variant])}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

/** Provides the toast queue + renders the live region viewport. */
export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const counter = useRef(0);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((options: ToastOptions) => {
    const id = `toast-${(counter.current += 1)}`;
    setToasts((current) => [...current, { ...options, id }]);
    return id;
  }, []);

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss]);

  // Two live regions, each rendered once: danger toasts interrupt (assertive),
  // everything else is announced politely. Individual cards carry no role so a
  // toast is announced exactly once.
  const assertiveToasts = toasts.filter((t) => (t.variant ?? 'info') === 'danger');
  const politeToasts = toasts.filter((t) => (t.variant ?? 'info') !== 'danger');

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col gap-2 p-4 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-96">
        <div aria-live="assertive" aria-atomic="false" className="flex flex-col gap-2">
          {assertiveToasts.map((item) => (
            <ToastCard key={item.id} item={item} onDismiss={dismiss} />
          ))}
        </div>
        <div aria-live="polite" aria-atomic="false" className="flex flex-col gap-2">
          {politeToasts.map((item) => (
            <ToastCard key={item.id} item={item} onDismiss={dismiss} />
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}
