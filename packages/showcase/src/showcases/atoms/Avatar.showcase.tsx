import { Avatar } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Avatar', category: 'atoms', order: 9 } as const;

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <ShowcaseSection title="Sizes (initials fallback)">
        {SIZES.map((s) => (
          <PropRow key={s} label={s}>
            <Avatar size={s} name="Alex Carter" />
          </PropRow>
        ))}
      </ShowcaseSection>
      <ShowcaseSection title="Image">
        <PropRow label="with src">
          <Avatar size="lg" name="Alex Carter" src="https://i.pravatar.cc/96?img=12" />
        </PropRow>
        <PropRow label="broken src → fallback">
          <Avatar size="lg" name="Jordan Lee" src="https://example.invalid/x.png" />
        </PropRow>
      </ShowcaseSection>
    </div>
  );
}
