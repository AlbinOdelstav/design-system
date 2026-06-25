import { Mail, Search } from 'lucide-react';
import { Input } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Input', category: 'atoms', order: 15 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="States">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Input placeholder="Default input" />
        <Input placeholder="With left icon" leftIcon={<Search className="h-5 w-5" />} />
        <Input placeholder="you@example.com" leftIcon={<Mail className="h-5 w-5" />} type="email" />
        <Input placeholder="Invalid" invalid defaultValue="not-an-email" />
        <Input placeholder="Disabled" disabled />
      </div>
    </ShowcaseSection>
  );
}
