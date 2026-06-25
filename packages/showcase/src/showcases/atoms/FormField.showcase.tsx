import { FormField, Input } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'FormField', category: 'atoms', order: 22 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Label, help and error (aria-wired)">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <FormField label="Email" help="We'll never share your email.">
          <Input type="email" placeholder="you@example.com" />
        </FormField>
        <FormField label="Password" required error="Password must be at least 8 characters.">
          <Input type="password" defaultValue="123" />
        </FormField>
      </div>
    </ShowcaseSection>
  );
}
