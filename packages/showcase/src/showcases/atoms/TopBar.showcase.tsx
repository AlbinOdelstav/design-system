import { ArrowLeft } from 'lucide-react';
import { Avatar, IconButton, TopBar } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'TopBar', category: 'atoms', order: 43 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Mobile top app bar" bleed>
      <TopBar
        title="Bench Press"
        left={
          <IconButton aria-label="Back" variant="ghost">
            <ArrowLeft className="h-5 w-5" />
          </IconButton>
        }
        right={<Avatar size="sm" name="Alex Carter" />}
      />
    </ShowcaseSection>
  );
}
