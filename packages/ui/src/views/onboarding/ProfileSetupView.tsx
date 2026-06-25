import { useState } from 'react';
import { Camera } from 'lucide-react';
import { Card, CardBody } from '../../components/Card/Card';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Avatar } from '../../components/Avatar/Avatar';
import { FormField } from '../../components/FormField/FormField';
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/Select/Select';
import { Divider } from '../../components/Divider/Divider';
import { Chip } from '../../components/Chip/Chip';
import { Button } from '../../components/Button/Button';

export interface ProfileSetupViewProps {
  onSave?: (data: Record<string, string | string[]>) => void;
  name?: string;
  goals?: string[];
}

const GOALS = ['Strength', 'Hypertrophy', 'Endurance', 'Weight loss', 'Mobility', 'Powerlifting'];

/** Profile setup card: avatar upload, identity grid, body metrics, goal chips. */
export function ProfileSetupView({ onSave, name = '', goals = [] }: ProfileSetupViewProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(goals);

  const toggleGoal = (goal: string) =>
    setSelectedGoals((current) =>
      current.includes(goal) ? current.filter((g) => g !== goal) : [...current, goal],
    );

  return (
    <div className="flex min-h-screen w-full items-start justify-center bg-bg-base px-4 py-10">
      <Card className="w-full max-w-2xl">
        <CardBody className="flex flex-col gap-6 p-6">
          <div className="text-center">
            <Heading level={1} size={2}>
              Set up your profile
            </Heading>
            <Text tone="muted" className="mt-1">
              Tell us a little about yourself to personalize your experience.
            </Text>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Avatar size="xl" name={name || 'You'} />
              <button
                type="button"
                aria-label="Upload photo"
                className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-fg shadow-md hover:bg-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
              >
                <Camera className="h-4 w-4" aria-hidden="true" focusable={false} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Full name">
              <Input defaultValue={name} placeholder="Alex Carter" />
            </FormField>
            <FormField label="Username">
              <Input placeholder="@alex" />
            </FormField>
            <FormField label="Date of birth">
              <Input type="date" />
            </FormField>
            <FormField label="Gender">
              <Select defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
                <option value="na">Prefer not to say</option>
              </Select>
            </FormField>
          </div>

          <Divider />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <FormField label="Height (cm)">
              <Input type="number" inputMode="numeric" placeholder="178" />
            </FormField>
            <FormField label="Weight (kg)">
              <Input type="number" inputMode="decimal" placeholder="74" />
            </FormField>
            <FormField label="Activity level">
              <Select defaultValue="moderate">
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
                <option value="athlete">Athlete</option>
              </Select>
            </FormField>
          </div>

          <Divider />

          <div>
            <Text weight="semibold">Goals</Text>
            <Text size="sm" tone="muted" className="mt-0.5">
              Pick all that apply.
            </Text>
            <div className="mt-3 flex flex-wrap gap-2">
              {GOALS.map((goal) => (
                <Chip
                  key={goal}
                  selected={selectedGoals.includes(goal)}
                  onClick={() => toggleGoal(goal)}
                >
                  {goal}
                </Chip>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            fullWidth
            onClick={() => onSave?.({ goals: selectedGoals })}
          >
            Save and continue
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
