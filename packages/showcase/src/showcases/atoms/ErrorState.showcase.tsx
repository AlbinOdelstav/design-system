import { ErrorState } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'ErrorState', category: 'atoms', order: 32 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Retry & home">
      <div className="w-full py-6">
        <ErrorState code="500" onRetry={() => undefined} onHome={() => undefined} />
      </div>
    </ShowcaseSection>
  );
}
