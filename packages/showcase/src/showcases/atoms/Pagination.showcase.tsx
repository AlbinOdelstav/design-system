import { useState } from 'react';
import { Pagination } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Pagination', category: 'atoms', order: 35 } as const;

export default function Demo() {
  const [page, setPage] = useState(4);
  return (
    <ShowcaseSection title="Truncated pages">
      <Pagination page={page} pageCount={12} onPageChange={setPage} />
    </ShowcaseSection>
  );
}
