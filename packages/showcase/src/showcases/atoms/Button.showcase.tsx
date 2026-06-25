import { Plus } from 'lucide-react';
import { Button } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';
import { PropRow } from '../../components/PropRow';

export const meta = { name: 'Button', category: 'atoms', order: 1 } as const;

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <ShowcaseSection title="Variants">
        <PropRow label="primary">
          <Button>Primary</Button>
        </PropRow>
        <PropRow label="secondary">
          <Button variant="secondary">Secondary</Button>
        </PropRow>
        <PropRow label="outline">
          <Button variant="outline">Outline</Button>
        </PropRow>
        <PropRow label="ghost">
          <Button variant="ghost">Ghost</Button>
        </PropRow>
        <PropRow label="danger">
          <Button variant="danger">Danger</Button>
        </PropRow>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <PropRow label="sm">
          <Button size="sm">Small</Button>
        </PropRow>
        <PropRow label="md">
          <Button size="md">Medium</Button>
        </PropRow>
        <PropRow label="lg">
          <Button size="lg">Large</Button>
        </PropRow>
      </ShowcaseSection>

      <ShowcaseSection title="States & icons">
        <PropRow label="leftIcon">
          <Button leftIcon={<Plus className="h-5 w-5" />}>New</Button>
        </PropRow>
        <PropRow label="loading">
          <Button loading>Saving</Button>
        </PropRow>
        <PropRow label="disabled">
          <Button disabled>Disabled</Button>
        </PropRow>
        <PropRow label="fullWidth">
          <div className="w-64">
            <Button fullWidth>Full width</Button>
          </div>
        </PropRow>
      </ShowcaseSection>
    </div>
  );
}
