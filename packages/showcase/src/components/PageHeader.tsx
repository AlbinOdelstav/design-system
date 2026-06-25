export interface PageHeaderProps {
  category: string;
  name: string;
}

/** Header above each showcase page. */
export function PageHeader({ category, name }: PageHeaderProps) {
  return (
    <div className="border-b border-border-subtle pb-4">
      <p className="text-overline font-semibold uppercase tracking-wide text-text-subtle">
        {category}
      </p>
      <h1 className="text-h1 font-bold tracking-tight text-text">{name}</h1>
    </div>
  );
}
