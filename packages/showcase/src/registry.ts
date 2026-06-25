import type { ComponentType } from 'react';

export interface ShowcaseMeta {
  name: string;
  category: string;
  order?: number;
}

export interface ShowcaseEntry extends ShowcaseMeta {
  slug: string;
  Component: ComponentType;
}

interface ShowcaseModule {
  meta: ShowcaseMeta;
  default: ComponentType;
}

/** Slugify a category + name into a stable hash route, e.g. `atoms/button`. */
export function toSlug(category: string, name: string): string {
  const norm = (s: string) =>
    s
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  return `${norm(category)}/${norm(name)}`;
}

// Eagerly load every *.showcase.tsx so adding a file requires no registry edit.
const modules = import.meta.glob<ShowcaseModule>('./showcases/**/*.showcase.tsx', {
  eager: true,
});

export const entries: ShowcaseEntry[] = Object.values(modules)
  .filter((mod) => mod && mod.meta && mod.default)
  .map((mod) => ({
    ...mod.meta,
    slug: toSlug(mod.meta.category, mod.meta.name),
    Component: mod.default,
  }));

const CATEGORY_ORDER = ['atoms', 'views'];

function categoryRank(category: string): number {
  const idx = CATEGORY_ORDER.indexOf(category.toLowerCase());
  return idx === -1 ? CATEGORY_ORDER.length : idx;
}

export interface ShowcaseGroup {
  category: string;
  entries: ShowcaseEntry[];
}

/** Entries grouped by category, ordered by CATEGORY_ORDER then meta.order/name. */
export const groups: ShowcaseGroup[] = (() => {
  const byCategory = new Map<string, ShowcaseEntry[]>();
  for (const entry of entries) {
    const list = byCategory.get(entry.category) ?? [];
    list.push(entry);
    byCategory.set(entry.category, list);
  }
  return Array.from(byCategory.entries())
    .sort(([a], [b]) => categoryRank(a) - categoryRank(b) || a.localeCompare(b))
    .map(([category, list]) => ({
      category,
      entries: list.sort(
        (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.name.localeCompare(b.name),
      ),
    }));
})();

export function findEntry(slug: string): ShowcaseEntry | undefined {
  return entries.find((e) => e.slug === slug);
}
