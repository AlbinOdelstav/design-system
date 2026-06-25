import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const listItem = cva('flex items-center gap-3 px-4 py-3 text-body text-text', {
  variants: {
    interactive: {
      true: 'cursor-pointer transition-colors duration-fast ease-out hover:bg-bg-subtle focus-visible:outline-none focus-visible:shadow-focus',
      false: '',
    },
  },
  defaultVariants: { interactive: false },
});

export interface ListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listItem> {
  /** Leading slot (icon, avatar). */
  left?: React.ReactNode;
  /** Trailing slot (badge, chevron, value). */
  right?: React.ReactNode;
}

/** Row inside a List with left / center (children) / right slots. */
export function ListItem({ interactive, left, right, className, children, ...props }: ListItemProps) {
  return (
    <li className={cn(listItem({ interactive }), className)} {...props}>
      {left && <span className="flex shrink-0 items-center">{left}</span>}
      <span className="min-w-0 flex-1">{children}</span>
      {right && <span className="flex shrink-0 items-center gap-2">{right}</span>}
    </li>
  );
}
