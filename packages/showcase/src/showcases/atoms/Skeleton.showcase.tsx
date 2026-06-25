import { Skeleton } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Skeleton', category: 'atoms', order: 30 } as const;

export default function Demo() {
  return (
    <ShowcaseSection title="Variants">
      <div className="flex w-full items-center gap-4">
        <Skeleton variant="circle" className="h-12 w-12" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton variant="text" className="w-1/2" />
          <Skeleton variant="text" className="w-1/3" />
        </div>
        <Skeleton variant="rect" className="h-12 w-24" />
      </div>
    </ShowcaseSection>
  );
}
