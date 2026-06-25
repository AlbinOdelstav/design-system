import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { Card, CardBody } from '../../components/Card/Card';
import { Skeleton } from '../../components/Skeleton/Skeleton';

export interface LoadingSkeletonViewProps {
  /** Number of list-row skeletons to render. */
  rows?: number;
}

/** Dashboard loading state built from Skeletons (no full-page spinner). */
export function LoadingSkeletonView({ rows = 4 }: LoadingSkeletonViewProps) {
  return (
    <DemoAppShell active="dashboard">
      <Container size="xl" className="py-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <Skeleton variant="text" className="h-8 w-48" />
          <Skeleton variant="text" className="h-4 w-64" />
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <Card key={i} padded>
              <Skeleton variant="text" className="h-3 w-16" />
              <Skeleton variant="text" className="mt-2 h-7 w-20" />
            </Card>
          ))}
        </div>

        {/* Main + list */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card padded className="md:col-span-2">
            <Skeleton variant="rect" className="h-32 w-full" />
          </Card>
          <Card padded>
            <Skeleton variant="rect" className="h-32 w-full" />
          </Card>
        </div>

        <Card className="mt-4">
          <CardBody className="flex flex-col gap-4">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton variant="circle" className="h-10 w-10" />
                <div className="flex-1">
                  <Skeleton variant="text" className="h-4 w-1/3" />
                  <Skeleton variant="text" className="mt-2 h-3 w-1/4" />
                </div>
                <Skeleton variant="rect" className="h-6 w-16 rounded-full" />
              </div>
            ))}
          </CardBody>
        </Card>
      </Container>
    </DemoAppShell>
  );
}
