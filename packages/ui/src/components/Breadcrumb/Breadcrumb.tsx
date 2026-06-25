import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';
import { cn } from '../../lib/cn';

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

/** Breadcrumb trail. The last item is rendered as the current page. */
export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex', className)} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5 text-label text-text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li>
                {item.href && !last ? (
                  <a
                    href={item.href}
                    className="rounded-sm hover:text-text focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span aria-current={last ? 'page' : undefined} className={cn(last && 'font-medium text-text')}>
                    {item.label}
                  </span>
                )}
              </li>
              {!last && (
                <li aria-hidden="true" className="text-text-subtle">
                  <ChevronRight className="h-4 w-4" focusable={false} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
