import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const text = cva('', {
  variants: {
    size: {
      lg: 'text-body-lg',
      base: 'text-body',
      sm: 'text-body-sm',
    },
    tone: {
      default: 'text-text',
      muted: 'text-text-muted',
      subtle: 'text-text-subtle',
      inverse: 'text-text-inverse',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'base',
    tone: 'default',
    weight: 'normal',
  },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof text> {
  as?: 'p' | 'span' | 'div';
}

/** Body copy. Note: `subtle` tone is reserved for larger text per the spec. */
export function Text({ as: Tag = 'p', size, tone, weight, className, ...props }: TextProps) {
  return <Tag className={cn(text({ size, tone, weight }), className)} {...props} />;
}
