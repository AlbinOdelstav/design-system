import { Text } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Text', category: 'atoms', order: 5 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Sizes & tones">
      <div className="flex w-full flex-col gap-2">
        <Text size="lg">Body large — the quick brown fox jumps over the lazy dog.</Text>
        <Text>Body — the quick brown fox jumps over the lazy dog.</Text>
        <Text size="sm">Body small — the quick brown fox jumps over the lazy dog.</Text>
        <Text tone="muted">Muted tone for secondary copy.</Text>
        <Text size="lg" tone="subtle">
          Subtle tone (large text only).
        </Text>
      </div>
    </ShowcaseSection>
  );
}
