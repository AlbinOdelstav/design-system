import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react';
import { Card, CardBody } from '../../components/Card/Card';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { FormField } from '../../components/FormField/FormField';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { EmptyState } from '../../components/EmptyState/EmptyState';

export interface ForgotPasswordViewProps {
  onSubmit?: (data: { email: string }) => void;
  onBack?: () => void;
  loading?: boolean;
  /** Force the success state (otherwise toggled internally on submit). */
  submitted?: boolean;
}

/** Single centered card to request a reset link; swaps to a success state. */
export function ForgotPasswordView({
  onSubmit,
  onBack,
  loading = false,
  submitted,
}: ForgotPasswordViewProps) {
  const [email, setEmail] = useState('');
  const [internalSubmitted, setInternalSubmitted] = useState(false);
  const done = submitted ?? internalSubmitted;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-bg-base px-4 py-12">
      <div className="w-full max-w-sm">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-1.5 text-label font-medium text-text-muted hover:text-text focus-visible:outline-none focus-visible:shadow-focus"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" focusable={false} />
          Back to sign in
        </button>

        <Card>
          <CardBody>
            {done ? (
              <EmptyState
                illustration={<CheckCircle2 className="h-16 w-16 text-success" />}
                heading="Check your email"
                description="We sent a reset link to your inbox. Follow it to choose a new password."
                actions={
                  <Button variant="ghost" onClick={onBack}>
                    Back to sign in
                  </Button>
                }
              />
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <Heading level={1} size={3}>
                    Reset password
                  </Heading>
                  <Text size="sm" tone="muted" className="mt-1">
                    Enter your email and we&apos;ll send you a link to reset it.
                  </Text>
                </div>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInternalSubmitted(true);
                    onSubmit?.({ email });
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
                  <Button type="submit" size="lg" fullWidth loading={loading}>
                    Send reset link
                  </Button>
                </form>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
