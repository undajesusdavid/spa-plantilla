import { forwardRef, useState } from "react";
import { Input } from "@src/06-shared/ui/base/input";
import { InputProps } from "@shared/ui/base/input";
import { EyeOffIcon, LockIcon, ViewIcon } from "@shared/ui/base/Icons";

interface InputPasswordProps extends Omit<InputProps, "type" | "rightIcon" | "leftIcon" | "onRightIconClick"> {}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const {
      name = "password",
      label = "Contraseña",
      placeholder = "Ingrese la contraseña",
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
