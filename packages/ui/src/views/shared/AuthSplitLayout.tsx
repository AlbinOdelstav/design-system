import { ShellMark, WaveMark } from './Illustration';

export interface AuthSplitLayoutProps {
  brandTitle?: string;
  brandSubtitle?: string;
  children: React.ReactNode;
}

/**
 * Internal two-column auth scaffold: a primary-subtle brand panel (md+) beside
 * a centered form card. Collapses to a single centered card on mobile.
 */
export function AuthSplitLayout({
  brandTitle = 'Forge',
  brandSubtitle = 'Train with intention.',
  children,
}: AuthSplitLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-bg-base">
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary-subtle p-12 text-primary-subtle-fg md:flex">
        <div className="flex items-center gap-3">
          <ShellMark size={40} className="text-primary" />
          <span className="text-h4 font-bold">{brandTitle}</span>
        </div>
        <div>
          <h2 className="text-display font-bold tracking-tight">{brandSubtitle}</h2>
        </div>
        <WaveMark width={360} className="text-primary" />
      </div>

      <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
