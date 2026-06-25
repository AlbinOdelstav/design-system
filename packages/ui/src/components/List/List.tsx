import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const list = cva('flex flex-col', {
  variants: {
    variant: {
      divided: 'divide-y divide-border-subtle',
      card: 'divide-y divide-border-subtle rounded-lg border border-border-subtle bg-surface overflow-hidden',
      flush: '',
    },
  },
  defaultVariants: {
    variant: 'divided',
  },
});

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof list> {}

/** Vertical list container. `divided` / `card` / `flush` variants. */
export function List({ variant, className, ...props }: ListProps) {
  return <ul className={cn(list({ variant }), className)} {...props} />;
}
