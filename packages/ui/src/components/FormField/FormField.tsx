import { createContext, useContext, useId } from 'react';
import { cn } from '../../lib/cn';

interface FormFieldContextValue {
  id: string;
  describedBy?: string;
  invalid: boolean;
  disabled: boolean;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

/**
 * Hook for controls (Input, Select, ...) to wire up id + aria-describedby +
 * aria-invalid from the surrounding FormField. Returns null when used standalone.
 */
export function useFormField(): FormFieldContextValue | null {
  return useContext(FormFieldContext);
}

export interface FormFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  label?: React.ReactNode;
  /** Helper text shown below the control when there is no error. */
  help?: React.ReactNode;
  /** Error message; when present it replaces help and sets aria-invalid. */
  error?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  /** Override the generated control id. */
  htmlFor?: string;
}

/**
 * Wraps a label + control + help/error text and ties them together via aria.
 * Child controls read context through `useFormField`.
 */
export function FormField({
  label,
  help,
  error,
  required,
  disabled = false,
  htmlFor,
  className,
  children,
  ...props
}: FormFieldProps) {
  const generatedId = useId();
  const id = htmlFor ?? generatedId;
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const invalid = Boolean(error);
  const describedBy = invalid ? errorId : help ? helpId : undefined;

  return (
    <FormFieldContext.Provider value={{ id, describedBy, invalid, disabled }}>
      <div className={cn('flex flex-col gap-1.5', className)} {...props}>
        {label && (
          <label htmlFor={id} className="text-label font-medium text-text">
            {label}
            {required && (
              <span className="ml-0.5 text-danger" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        {children}
        {invalid ? (
          <p id={errorId} role="alert" className="text-label-sm text-danger-subtle-fg">
            {error}
          </p>
        ) : (
          help && (
            <p id={helpId} className="text-label-sm text-text-muted">
              {help}
            </p>
          )
        )}
      </div>
    </FormFieldContext.Provider>
  );
}
