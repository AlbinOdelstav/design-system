import { useMemo, useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { AuthSplitLayout } from '../shared/AuthSplitLayout';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { FormField } from '../../components/FormField/FormField';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { IconButton } from '../../components/IconButton/IconButton';

export interface RegisterViewProps {
  onSubmit?: (data: { name: string; email: string; password: string }) => void;
  onLogin?: () => void;
  loading?: boolean;
}

function strength(password: string): { score: number; label: string } {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  const labels = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'];
  return { score, label: labels[score] };
}

const SEGMENT_COLOR = ['bg-border', 'bg-danger', 'bg-warning', 'bg-warning', 'bg-success'];

/** Account registration with a segmented password-strength meter. */
export function RegisterView({ onSubmit, onLogin, loading = false }: RegisterViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const { score, label } = useMemo(() => strength(password), [password]);

  return (
    <AuthSplitLayout brandSubtitle="Start strong.">
      <div className="flex flex-col gap-6">
        <div>
          <Heading level={1} size={2}>
            Create account
          </Heading>
          <Text tone="muted" className="mt-1">
            A few details and you&apos;re ready to lift.
          </Text>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.({ name, email, password });
          }}
        >
          <FormField label="Name">
            <Input
              autoComplete="name"
              placeholder="Alex Carter"
              leftIcon={<User className="h-5 w-5" />}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>

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

          <FormField label="Password" help={password ? `Password strength: ${label}` : 'Use 8+ characters.'}>
            <Input
              type={show ? 'text' : 'password'}
              autoComplete="new-password"
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

          <div className="flex gap-1" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full ${i < score ? SEGMENT_COLOR[score] : 'bg-border-subtle'}`}
              />
            ))}
          </div>

          <Checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />

          <Button type="submit" size="lg" fullWidth loading={loading} disabled={!agreed}>
            Create account
          </Button>
        </form>

        <Text size="sm" tone="muted" className="text-center">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onLogin}
            className="font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
          >
            Sign in
          </button>
        </Text>
      </div>
    </AuthSplitLayout>
  );
}
