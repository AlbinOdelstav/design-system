export interface ShowcaseSectionProps {
  title: string;
  description?: string;
  /** Render the example on a subtle/checkered backdrop for full-bleed views. */
  bleed?: boolean;
  children: React.ReactNode;
}

/** A labeled block grouping one set of component states/examples. */
export function ShowcaseSection({ title, description, bleed, children }: ShowcaseSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h2 className="text-h3 font-semibold text-text">{title}</h2>
        {description && <p className="text-body-sm text-text-muted">{description}</p>}
      </div>
      <div
        className={
          bleed
            ? 'overflow-hidden rounded-lg border border-border-subtle'
            : 'flex flex-wrap items-start gap-4 rounded-lg border border-border-subtle bg-surface p-6'
        }
      >
        {children}
      </div>
    </section>
  );
}
