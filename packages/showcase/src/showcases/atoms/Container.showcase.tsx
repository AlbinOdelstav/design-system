import { Container } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Container', category: 'atoms', order: 39 } as const;

const SIZES = ['sm', 'md', 'lg', 'xl'] as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Max-width sizes" bleed>
      <div className="w-full bg-bg-subtle py-4">
        {SIZES.map((s) => (
          <Container key={s} size={s} className="mb-2">
            <div className="rounded-md bg-primary-subtle px-3 py-2 text-label font-medium text-primary-subtle-fg">
              size=&quot;{s}&quot;
            </div>
          </Container>
        ))}
      </div>
    </ShowcaseSection>
  );
}
