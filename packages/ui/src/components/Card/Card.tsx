import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const card = cva('rounded-lg border border-border-subtle bg-surface shadow-sm', {
  variants: {
    interactive: {
      true: 'cursor-pointer transition-shadow duration-fast ease-out hover:shadow-md focus-within:shadow-md',
      false: '',
    },
    padded: {
      true: 'p-5',
      false: '',
    },
  },
  defaultVariants: {
    interactive: false,
    padded: false,
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

/** Surface container. Use the hover-interactive variant for clickable cards. */
export function Card({ interactive, padded, className, ...props }: CardProps) {
  return <div className={cn(card({ interactive, padded }), className)} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center justify-between gap-3 border-b border-border-subtle px-5 py-4', className)}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-5 py-4', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center gap-3 border-t border-border-subtle px-5 py-4', className)}
      {...props}
    />
  );
}
