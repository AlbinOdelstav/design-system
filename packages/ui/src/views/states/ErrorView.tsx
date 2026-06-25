import { ErrorState } from '../../components/ErrorState/ErrorState';

export interface ErrorViewProps {
  code?: string;
  onRetry?: () => void;
  onHome?: () => void;
}

/** Full-screen error state with retry + home actions. */
export function ErrorView({ code = '500', onRetry, onHome }: ErrorViewProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-bg-base px-4">
      <ErrorState
        heading="Something went wrong"
        description="We hit a snag loading this page. Please try again in a moment."
        code={code}
        onRetry={onRetry ?? (() => {})}
        onHome={onHome ?? (() => {})}
      />
    </div>
  );
}
