import { forwardRef, useState, ChangeEvent } from "react";
import { Input } from "@shared/ui/base/input";
import { LockIcon, ViewIcon, EyeOffIcon } from "@shared/ui/base/Icons";
import { useInput } from "@shared/lib/hooks/useInput";
import { InputPasswordProps } from "./../../model/types.ui";
import { password } from "../../model/schemas.user";

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const {
      onChange,
      error: externalError,
      successColor,
      validateSemantics,
      ...rest
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const { internalError, success, validation } = useInput<string>();
    const toggleVisibility = () => setShowPassword((prev) => !prev);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (validateSemantics) {
        validation(password, value);
      }
      onChange?.(e);
    };

    const isSuccessful =
      !!successColor && validateSemantics && success && !externalError;

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
            <EyeOffIcon size={20} style={{ cursor: "pointer" }} />
          ) : (
            <ViewIcon size={20} style={{ cursor: "pointer" }} />
          )
        }
        onRightIconClick={(input) => {
          toggleVisibility();
          setTimeout(() => input?.focus(), 0);
        }}
        error={internalError || externalError}
        success={isSuccessful}
        onChange={handleChange}
      />
    );
  },
);

InputPassword.displayName = "InputPassword";
