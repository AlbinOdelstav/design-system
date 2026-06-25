import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const caption = cva('', {
  variants: {
    variant: {
      caption: 'text-caption text-text-muted',
      overline: 'text-overline font-semibold uppercase tracking-wide text-text-subtle',
    },
  },
  defaultVariants: {
    variant: 'caption',
  },
});

export interface CaptionProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof caption> {}

/** Small supporting text. `overline` renders an uppercase, tracked eyebrow. */
export function Caption({ variant, className, ...props }: CaptionProps) {
  return <span className={cn(caption({ variant }), className)} {...props} />;
}
