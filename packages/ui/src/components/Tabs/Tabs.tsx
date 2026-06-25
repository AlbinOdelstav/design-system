import { createContext, useContext, useId, useRef } from 'react';
import { cn } from '../../lib/cn';

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs.* must be used within <Tabs>');
  return ctx;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string;
  onValueChange: (value: string) => void;
}

/** Controlled tabs root. Provides context to TabList / Tab / TabPanel. */
export function Tabs({ value, onValueChange, className, children, ...props }: TabsProps) {
  const baseId = useId();
  return (
    <TabsContext.Provider value={{ value, setValue: onValueChange, baseId }}>
      <div className={cn('flex flex-col', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const listRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
    const tabs = Array.from(
      listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? [],
    ).filter((t) => !t.disabled);
    if (tabs.length === 0) return;
    const currentIndex = tabs.indexOf(document.activeElement as HTMLButtonElement);
    e.preventDefault();
    let next = currentIndex;
    if (e.key === 'ArrowRight') next = (currentIndex + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    tabs[next]?.focus();
    tabs[next]?.click();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      onKeyDown={onKeyDown}
      className={cn('flex gap-1 border-b border-border-subtle', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export interface TabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string;
}

export function Tab({ value, className, children, ...props }: TabProps) {
  const { value: selected, setValue, baseId } = useTabs();
  const active = selected === value;
  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={active}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={active ? 0 : -1}
      onClick={() => setValue(value)}
      className={cn(
        '-mb-px border-b-2 px-4 py-2.5 text-label font-medium transition-colors duration-fast ease-out focus-visible:outline-none focus-visible:shadow-focus',
        active
          ? 'border-primary text-primary'
          : 'border-transparent text-text-muted hover:text-text',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabPanel({ value, className, children, ...props }: TabPanelProps) {
  const { value: selected, baseId } = useTabs();
  if (selected !== value) return null;
  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className={cn('pt-4 focus-visible:outline-none', className)}
      {...props}
    >
      {children}
    </div>
  );
}
