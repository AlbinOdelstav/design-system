import { Heart, Settings, Trash2 } from 'lucide-react';
import { IconButton } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'IconButton', category: 'atoms', order: 2 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Shapes & variants">
      <PropRow label="square / ghost">
        <IconButton aria-label="Settings">
          <Settings className="h-5 w-5" />
        </IconButton>
      </PropRow>
      <PropRow label="circular / primary">
        <IconButton aria-label="Like" variant="primary" shape="circular">
          <Heart className="h-5 w-5" />
        </IconButton>
      </PropRow>
      <PropRow label="outline">
        <IconButton aria-label="Settings" variant="outline">
          <Settings className="h-5 w-5" />
        </IconButton>
      </PropRow>
      <PropRow label="danger">
        <IconButton aria-label="Delete" variant="danger">
          <Trash2 className="h-5 w-5" />
        </IconButton>
      </PropRow>
    </ShowcaseSection>
  );
}
