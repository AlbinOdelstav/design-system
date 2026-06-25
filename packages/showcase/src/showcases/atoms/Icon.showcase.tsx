import { Dumbbell, Flame, Heart, Trophy } from 'lucide-react';
import { Icon } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Icon', category: 'atoms', order: 45 } as const;

const SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <ShowcaseSection title="Sizes">
        {SIZES.map((s) => (
          <PropRow key={s} label={s}>
            <Icon icon={Dumbbell} size={s} />
          </PropRow>
        ))}
      </ShowcaseSection>
      <ShowcaseSection title="Color (currentColor by default)">
        <span className="text-primary">
          <Icon icon={Heart} size="lg" />
        </span>
        <span className="text-warning">
          <Icon icon={Flame} size="lg" />
        </span>
        <span className="text-success">
          <Icon icon={Trophy} size="lg" />
        </span>
      </ShowcaseSection>
    </div>
  );
}
