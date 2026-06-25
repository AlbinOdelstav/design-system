export interface PropRowProps {
  /** Short label describing the variant/state shown alongside. */
  label: string;
  children: React.ReactNode;
}

/** Labels a single example row inside a ShowcaseSection. */
export function PropRow({ label, children }: PropRowProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex min-h-[44px] items-center justify-center">{children}</div>
      <span className="text-label-sm text-text-subtle">{label}</span>
    </div>
  );
}
