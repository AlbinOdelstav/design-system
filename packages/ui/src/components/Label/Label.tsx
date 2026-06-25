import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const label = cva('font-medium text-text', {
  variants: {
    size: {
      base: 'text-label',
      sm: 'text-label-sm',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof label> {}

/** Form control label. Pairs with FormField / Input via htmlFor. */
export function Label({ size, className, ...props }: LabelProps) {
  return <label className={cn(label({ size }), className)} {...props} />;
}
