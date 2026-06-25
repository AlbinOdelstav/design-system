import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const SIZE_PX: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
};

export interface IconProps {
  /** A lucide-react icon component, e.g. `import { Heart } from 'lucide-react'`. */
  icon: LucideIcon;
  size?: IconSize;
  /** CSS color; defaults to `currentColor` so it inherits text color. */
  color?: string;
  className?: string;
  /** Decorative by default (aria-hidden). Set a label to expose to AT. */
  'aria-label'?: string;
}

/**
 * Standardized wrapper over lucide-react icons. Decorative by default
 * (aria-hidden + focusable=false); pass `aria-label` to make it meaningful.
 */
export function Icon({
  icon: LucideComp,
  size = 'md',
  color = 'currentColor',
  className,
  'aria-label': ariaLabel,
}: IconProps) {
  const px = SIZE_PX[size];
  return (
    <LucideComp
      width={px}
      height={px}
      color={color}
      className={cn('shrink-0', className)}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      focusable={false}
    />
  );
}
