import { Spinner } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Spinner', category: 'atoms', order: 29 } as const;

const SIZES = ['sm', 'md', 'lg', 'xl'] as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Sizes">
      {SIZES.map((s) => (
        <PropRow key={s} label={s}>
          <span className="text-primary">
            <Spinner size={s} />
          </span>
        </PropRow>
      ))}
    </ShowcaseSection>
  );
}
