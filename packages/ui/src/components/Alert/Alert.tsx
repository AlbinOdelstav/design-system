import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const alert = cva('flex gap-3 rounded-md border p-4', {
  variants: {
    variant: {
      info: 'border-primary-subtle bg-primary-subtle text-primary-subtle-fg',
      success: 'border-success-subtle bg-success-subtle text-success-subtle-fg',
      warning: 'border-warning-subtle bg-warning-subtle text-warning-subtle-fg',
      danger: 'border-danger-subtle bg-danger-subtle text-danger-subtle-fg',
    },
  },
  defaultVariants: { variant: 'info' },
});

const ICONS: Record<NonNullable<VariantProps<typeof alert>['variant']>, LucideIcon> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: AlertCircle,
};

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'title'>,
    VariantProps<typeof alert> {
  title?: React.ReactNode;
  onDismiss?: () => void;
}

/** Inline alert with icon + title + description (icon + text, not color alone). */
export function Alert({ variant = 'info', title, onDismiss, className, children, ...props }: AlertProps) {
  const IconComp = ICONS[variant ?? 'info'];
  return (
    <div
      role={variant === 'danger' ? 'alert' : 'status'}
      className={cn(alert({ variant }), className)}
      {...props}
    >
      <IconComp className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" focusable={false} />
      <div className="min-w-0 flex-1">
        {title && <p className="text-label font-semibold">{title}</p>}
        {children && <div className="text-body-sm">{children}</div>}
      </div>
      {onDismiss && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className="-m-1 inline-flex shrink-0 rounded-md p-1 hover:bg-black/5 focus-visible:outline-none focus-visible:shadow-focus"
        >
          <X className="h-4 w-4" aria-hidden="true" focusable={false} />
        </button>
      )}
    </div>
  );
}
