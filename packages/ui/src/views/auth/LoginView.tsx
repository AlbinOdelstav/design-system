import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { AuthSplitLayout } from '../shared/AuthSplitLayout';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { FormField } from '../../components/FormField/FormField';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Divider } from '../../components/Divider/Divider';
import { Alert } from '../../components/Alert/Alert';
import { IconButton } from '../../components/IconButton/IconButton';

export interface LoginViewProps {
  onSubmit?: (data: { email: string; password: string }) => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
  /** Error message shown above the submit button. */
  error?: string;
  loading?: boolean;
  showSocial?: boolean;
}

/** Sign-in screen: split brand panel + email/password form. Presentational. */
export function LoginView({
  onSubmit,
  onForgotPassword,
  onRegister,
  error,
  loading = false,
  showSocial = true,
}: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <AuthSplitLayout brandSubtitle="Welcome back.">
      <div className="flex flex-col gap-6">
        <div>
          <Heading level={1} size={2}>
            Sign in
          </Heading>
          <Text tone="muted" className="mt-1">
            Enter your details to continue your training.
          </Text>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.({ email, password });
          }}
        >
          <FormField label="Email">
            <Input
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              leftIcon={<Mail className="h-5 w-5" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>

          <FormField label="Password">
            <Input
              type={show ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="••••••••"
              leftIcon={<Lock className="h-5 w-5" />}
              rightIcon={
                <IconButton
                  aria-label={show ? 'Hide password' : 'Show password'}
                  size="sm"
                  variant="ghost"
                  className="pointer-events-auto -mr-2 h-8 w-8"
                  onClick={() => setShow((s) => !s)}
                  type="button"
                >
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </IconButton>
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>

          <button
            type="button"
            onClick={onForgotPassword}
            className="self-end text-label font-medium text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
          >
            Forgot password?
          </button>

          {error && <Alert variant="danger" title="Unable to sign in">{error}</Alert>}

          <Button type="submit" size="lg" fullWidth loading={loading}>
            Sign in
          </Button>
        </form>

        {showSocial && (
          <>
            <Divider label="or" />
            <Button variant="outline" size="lg" fullWidth>
              Continue with Google
            </Button>
          </>
        )}

        <Text size="sm" tone="muted" className="text-center">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={onRegister}
            className="font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
          >
            Create one
          </button>
        </Text>
      </div>
    </AuthSplitLayout>
  );
}
