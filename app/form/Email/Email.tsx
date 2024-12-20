import { Input, InputProps } from "../Input/Input";

const email = "email" as const;

type EmailProps = Omit<
  InputProps,
  "type" | "autoComplete" | "inputMode" | "spellCheck"
>;

/**
 * Specialized input component for email addresses with preconfigured settings:
 * - Email-specific keyboard layout on mobile
 * - Autocomplete optimization
 * - Built-in email validation
 * - Disabled spellcheck
 * 
 * @component
 * @param {EmailProps} props - Component props excluding type, autoComplete, inputMode, and spellCheck
 * @param {string} [props.id="email"] - Input field ID
 * @param {string} [props.name="email"] - Input field name
 * @param {string} [props.label="Email"] - Input label text
 * @example
 * <Email 
 *   id="user-email"
 *   label="Email Address"
 *   validator={emailSchema}
 *   required
 * />
 */

const Email = ({
  id = "email",
  name = "email",
  label = "Email",
  ...props
}: EmailProps): JSX.Element => {
  return (
    <Input
      id={id}
      name={name}
      label={label}
      type={email}
      autoComplete={email}
      inputMode={email}
      spellCheck={false}
      {...props}
    />
  );
};

Email.displayName = "Email";

export { Email };
export type { EmailProps };
