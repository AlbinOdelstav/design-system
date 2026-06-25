import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/cn';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Number of sibling pages to show around the current page. */
  siblingCount?: number;
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/** Page navigation with prev/next and truncated page numbers. */
export function Pagination({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  className,
  ...props
}: PaginationProps) {
  const start = Math.max(2, page - siblingCount);
  const end = Math.min(pageCount - 1, page + siblingCount);
  const pages: (number | 'ellipsis')[] = [1];
  if (start > 2) pages.push('ellipsis');
  pages.push(...range(start, end).filter((p) => p > 1 && p < pageCount));
  if (end < pageCount - 1) pages.push('ellipsis');
  if (pageCount > 1) pages.push(pageCount);

  const btn =
    'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-label font-medium transition-colors duration-fast ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-50';

  return (
    <nav aria-label="Pagination" className={cn('flex items-center gap-1', className)} {...props}>
      <button
        type="button"
        aria-label="Previous page"
        className={cn(btn, 'text-text-muted hover:bg-bg-subtle')}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" focusable={false} />
      </button>
      {pages.map((p, i) =>
        p === 'ellipsis' ? (
          <span key={`e${i}`} className="px-1 text-text-subtle">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            aria-current={p === page ? 'page' : undefined}
            className={cn(
              btn,
              p === page
                ? 'bg-primary-subtle text-primary-subtle-fg'
                : 'text-text-muted hover:bg-bg-subtle',
            )}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        aria-label="Next page"
        className={cn(btn, 'text-text-muted hover:bg-bg-subtle')}
        disabled={page >= pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" focusable={false} />
      </button>
    </nav>
  );
}
