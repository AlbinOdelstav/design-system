import { useState } from 'react';
import { cn } from '../../lib/cn';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';

export interface OnboardingOption {
  value: string;
  label: string;
  description?: string;
}

export interface OnboardingStepViewProps {
  step?: number;
  totalSteps?: number;
  question?: string;
  subtitle?: string;
  options?: OnboardingOption[];
  /** Allow multiple selections (checkbox semantics) vs single (radio). */
  multiple?: boolean;
  onContinue?: (selected: string[]) => void;
  onSkip?: () => void;
}

const DEFAULT_OPTIONS: OnboardingOption[] = [
  { value: 'strength', label: 'Build strength', description: 'Heavy compound lifts' },
  { value: 'muscle', label: 'Gain muscle', description: 'Hypertrophy focus' },
  { value: 'endurance', label: 'Improve endurance', description: 'Higher reps, shorter rests' },
  { value: 'health', label: 'Stay healthy', description: 'Consistent general fitness' },
];

/** A single onboarding question with selectable rows + fixed bottom actions. */
export function OnboardingStepView({
  step = 1,
  totalSteps = 4,
  question = 'What is your main goal?',
  subtitle = 'We use this to tailor your program. You can change it later.',
  options = DEFAULT_OPTIONS,
  multiple = false,
  onContinue,
  onSkip,
}: OnboardingStepViewProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) => {
    setSelected((current) => {
      if (multiple) {
        return current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
      }
      return [value];
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-bg-base">
      <ProgressBar
        value={step}
        max={totalSteps}
        size="sm"
        label={`Step ${step} of ${totalSteps}`}
        className="rounded-none"
      />
      <div className="flex flex-1 items-start justify-center px-4 py-8">
        <div className="w-full max-w-[480px]">
          <Text size="sm" tone="subtle" className="font-medium">
            Step {step} of {totalSteps}
          </Text>
          <Heading level={1} size={2} className="mt-1">
            {question}
          </Heading>
          <Text tone="muted" className="mt-2">
            {subtitle}
          </Text>

          <fieldset className="mt-6 flex flex-col gap-3">
            <legend className="sr-only">{question}</legend>
            {options.map((option) => {
              const isSelected = selected.includes(option.value);
              return (
                <label
                  key={option.value}
                  className={cn(
                    'flex cursor-pointer items-start gap-3 rounded-lg border-2 p-4 transition-colors duration-fast ease-out',
                    isSelected
                      ? 'border-primary bg-primary-subtle'
                      : 'border-border bg-surface hover:bg-bg-subtle',
                  )}
                >
                  <input
                    type={multiple ? 'checkbox' : 'radio'}
                    name="onboarding-option"
                    checked={isSelected}
                    onChange={() => toggle(option.value)}
                    className="mt-1 h-5 w-5 accent-primary focus-visible:outline-none"
                  />
                  <span>
                    <span className="block text-label font-semibold text-text">{option.label}</span>
                    {option.description && (
                      <span className="block text-label-sm text-text-muted">{option.description}</span>
                    )}
                  </span>
                </label>
              );
            })}
          </fieldset>
        </div>
      </div>

      <div className="sticky bottom-0 border-t border-border-subtle bg-surface p-4">
        <div className="mx-auto flex w-full max-w-[480px] items-center gap-3">
          {onSkip && (
            <Button variant="ghost" size="lg" onClick={onSkip}>
              Skip
            </Button>
          )}
          <Button
            size="lg"
            fullWidth
            disabled={selected.length === 0}
            onClick={() => onContinue?.(selected)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
