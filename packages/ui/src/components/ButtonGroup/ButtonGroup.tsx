import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonGroup = cva(
  [
    'inline-flex',
    // Collapse the gap between buttons into a single shared border.
    '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none',
    '[&>*:not(:first-child)]:-ml-px',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical:
          'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:ml-0',
      },
      attached: {
        true: '',
        false: 'gap-2 [&>*]:rounded-md [&>*]:ml-0 [&>*]:mt-0',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      attached: true,
    },
  },
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroup> {}

/** Groups Buttons/IconButtons into a segmented control (attached) or row. */
export function ButtonGroup({ orientation, attached, className, ...props }: ButtonGroupProps) {
  return (
    <div
      role="group"
      className={cn(buttonGroup({ orientation, attached }), className)}
      {...props}
    />
  );
}
