import { Table, TableBody, TableCell, TableHead, TableRow } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Table', category: 'atoms', order: 14 } as const;

const ROWS = [
  { set: 1, weight: 60, reps: 10 },
  { set: 2, weight: 65, reps: 8 },
  { set: 3, weight: 70, reps: 6 },
];

export default function Demo() {
  return (
    <ShowcaseSection title="Numeric columns" bleed>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell header>Set</TableCell>
            <TableCell header numeric>
              Weight (kg)
            </TableCell>
            <TableCell header numeric>
              Reps
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map((r) => (
            <TableRow key={r.set}>
              <TableCell>{r.set}</TableCell>
              <TableCell numeric>{r.weight}</TableCell>
              <TableCell numeric>{r.reps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ShowcaseSection>
  );
}
