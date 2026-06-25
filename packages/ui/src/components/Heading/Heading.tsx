import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const heading = cva('font-semibold text-text', {
  variants: {
    size: {
      display: 'text-display font-bold tracking-tight',
      1: 'text-h1 font-bold tracking-tight',
      2: 'text-h2 tracking-tight',
      3: 'text-h3',
      4: 'text-h4',
    },
  },
  defaultVariants: {
    size: 2,
  },
});

type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof heading> {
  /** Semantic heading level (h1-h4). Defaults to 2. */
  level?: HeadingLevel;
  /** Visual size override; use `display` for the largest scale. */
  size?: HeadingLevel | 'display';
}

/**
 * Semantic heading. `level` controls the rendered tag (h1-h4); `size` controls
 * the visual scale (defaults to match `level`, or `display`).
 */
export function Heading({ level = 2, size, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  const visual = size ?? (level as HeadingLevel);
  return <Tag className={cn(heading({ size: visual }), className)} {...props} />;
}
