import { Heading } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Heading', category: 'atoms', order: 4 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Scale">
      <div className="flex w-full flex-col gap-3">
        <Heading level={1} size="display">
          Display heading
        </Heading>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
      </div>
    </ShowcaseSection>
  );
}
