import { forwardRef } from "react";
import { Input } from "@ui/form-controls/input";
import { InputProps } from "@ui/form-controls/input/model/types";
import { EmailIcon } from "@ui/Icons";

interface UserEmailInputProps extends Omit<InputProps, "type"> {}

export const UserEmailInput = forwardRef<HTMLInputElement, UserEmailInputProps>(
  (props, ref) => {
    const {
      name = "email",
      label = "Email",
      placeholder = "Ingrese un correo electrónico",
      ...rest
    } = props;
    return (
      <Input
        type="email"
        name={name}
        label={label}
        placeholder={placeholder}
        leftIcon={<EmailIcon />}
        required
        ref={ref}
        {...rest}
      />
    );
  },
);
