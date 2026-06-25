import { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const avatar = cva(
  'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-subtle font-semibold text-primary-subtle-fg',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-label-sm',
        sm: 'h-8 w-8 text-label-sm',
        md: 'h-10 w-10 text-label',
        lg: 'h-12 w-12 text-body',
        xl: 'h-16 w-16 text-h4',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof avatar> {
  src?: string;
  alt?: string;
  /** Used for the initials fallback when no image is available. */
  name?: string;
}

function initials(name?: string): string {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? '') + (parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : '');
}

/** Circular avatar with image source and initials fallback. */
export function Avatar({ size, src, alt, name, className, ...props }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  return (
    <span className={cn(avatar({ size }), className)} {...props}>
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? ''}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span aria-hidden={!name} className="select-none uppercase">
          {initials(name)}
        </span>
      )}
    </span>
  );
}
