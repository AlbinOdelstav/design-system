import { ShellMark } from '../shared/Illustration';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';

export interface NotFoundViewProps {
  onHome?: () => void;
}

/** 404 page with a primary-subtle glyph and a back-to-dashboard action. */
export function NotFoundView({ onHome }: NotFoundViewProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-bg-base px-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-subtle text-primary">
        <ShellMark size={56} />
      </div>
      <Heading level={2} size={2} className="mt-6">
        Page not found
      </Heading>
      <Text tone="muted" className="mt-2 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </Text>
      <Button size="lg" className="mt-6" onClick={onHome}>
        Back to dashboard
      </Button>
    </div>
  );
}
