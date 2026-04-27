import { forwardRef, useState } from "react";
import { Input } from "@ui/input";
import { InputProps } from "@ui/input/model/types";
import { EyeOffIcon, LockIcon, ViewIcon } from "@ui/Icons";

interface InputPasswordProps extends Omit<InputProps, "type" | "rightIcon" | "leftIcon" | "onRightIconClick"> {
  successColor?: boolean;
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const {
      name = "password",
      label = "Contraseña",
      placeholder = "Ingrese la contraseña",
      successColor,
      ...rest
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const toggleVisibility = () => setShowPassword((prev) => !prev);

    return (
      <Input
        type={showPassword ? "text" : "password"}
        name={name}
        label={label}
        placeholder={placeholder}
        success={successColor}
        leftIcon={<LockIcon size={21} />}
        rightIcon={
          showPassword ? <EyeOffIcon size={20} /> : <ViewIcon size={20} />
        }
        onRightIconClick={(input) => {
          toggleVisibility();
          setTimeout(() => input?.focus(), 0);
        }}
        ref={ref}
        {...rest}
      />
    );
  },
);
