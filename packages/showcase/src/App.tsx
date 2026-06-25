import { useEffect, useState } from 'react';
import { ToastProvider } from '@albin/ui';
import { Sidebar } from './components/Sidebar';
import { PageHeader } from './components/PageHeader';
import { entries, findEntry } from './registry';

function currentSlug(): string {
  return window.location.hash.replace(/^#\/?/, '');
}

/** Showcase shell: sidebar nav + hash-routed component pages. */
export function App() {
  const [slug, setSlug] = useState<string>(() => currentSlug() || entries[0]?.slug || '');

  useEffect(() => {
    const onHashChange = () => setSlug(currentSlug());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (next: string) => {
    window.location.hash = `/${next}`;
  };

  const entry = findEntry(slug) ?? entries[0];

  return (
    <ToastProvider>
      <div className="flex min-h-screen w-full bg-bg-base text-text">
        <aside className="sticky top-0 hidden h-screen shrink-0 md:block">
          <Sidebar current={entry?.slug ?? ''} onNavigate={navigate} />
        </aside>
        <main className="min-w-0 flex-1">
          {entry ? (
            <div className="mx-auto flex max-w-6xl flex-col gap-8 p-6 md:p-10">
              <PageHeader category={entry.category} name={entry.name} />
              <entry.Component />
            </div>
          ) : (
            <div className="p-10">
              <p className="text-h3 font-semibold">No showcases found</p>
              <p className="text-text-muted">
                Add a <code>*.showcase.tsx</code> file under <code>src/showcases</code>.
              </p>
            </div>
          )}
        </main>
      </div>
    </ToastProvider>
  );
}
