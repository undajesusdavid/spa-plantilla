import { forwardRef, useState, ChangeEvent } from "react";
import { Input } from "@shared/ui/base/input";
import { LockIcon, ViewIcon, EyeOffIcon } from "@shared/ui/base/Icons";
import { InputPasswordProps } from "../../model/types-ui.user";
import { password } from "../../model/schemas.user";

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const { onChange, error: externalError, successColor, ...rest } = props;

    const [showPassword, setShowPassword] = useState(false);
    const toggleVisibility = () => setShowPassword((prev) => !prev);

    const validation = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const result = password.safeParse(value);
      return result.success ? null : result.error.errors[0].message;
    };

    return (
      <Input
        {...rest}
        ref={ref}
        required
        label="Contraseña"
        type={showPassword ? "text" : "password"}
        name="password"
        autoComplete="current-password"
        leftIcon={<LockIcon size={21} />}
        rightIcon={
          showPassword ? (
            <EyeOffIcon size={20}/>
          ) : (
            <ViewIcon size={20}/>
          )
        }
        onRightIconClick={(input) => {
          toggleVisibility();
          setTimeout(() => input?.focus(), 0);
        }}
        handleValidation={validation}
      />
    );
  },
);

InputPassword.displayName = "InputPassword";
