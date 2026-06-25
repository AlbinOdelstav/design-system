import { ShellMark } from '../shared/Illustration';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import { Caption } from '../../components/Caption/Caption';

export interface WelcomeViewProps {
  onGetStarted?: () => void;
  onLogin?: () => void;
  appName?: string;
}

/** Full-screen welcome splash with staggered enter animation. */
export function WelcomeView({ onGetStarted, onLogin, appName = 'Forge' }: WelcomeViewProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-bg-base px-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-in fade-in zoom-in-95 duration-500 text-primary">
          <ShellMark size={96} />
        </div>
        <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Heading level={1} size="display">
            {appName}
          </Heading>
          <Text size="lg" tone="muted" className="max-w-md">
            Plan workouts, log every set, and watch your strength compound over time.
          </Text>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Button size="lg" fullWidth onClick={onGetStarted}>
            Get started
          </Button>
          <Button variant="ghost" size="lg" fullWidth onClick={onLogin}>
            Log in
          </Button>
        </div>
        <Caption className="mt-2">By continuing you agree to our Terms &amp; Privacy Policy.</Caption>
      </div>
    </div>
  );
}
