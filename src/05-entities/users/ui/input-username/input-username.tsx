import { forwardRef, ChangeEvent } from "react";
import { Input } from "@shared/ui/base/input";
import { UserIcon } from "@shared/ui/base/Icons";
import { InputUsernameProps } from "./../../model/types.ui";
import { useInput } from "@shared/lib/hooks/useInput";
import { username } from "../../model/schemas.user";

export const InputUsername = forwardRef<HTMLInputElement, InputUsernameProps>(
  (props, ref) => {
    const {
      onChange,
      error: externalError,
      successColor,
      validateSemantics,
      ...rest
    } = props;
    const { internalError, success, validation } = useInput<string>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (validateSemantics) {
        validation(username, value);
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
        type="text"
        name="username"
        label="Nombre de usuario"
        leftIcon={<UserIcon size={21} />}
        error={internalError || externalError}
        success={isSuccessful}
        onChange={handleChange}
        autoComplete="username"
      />
    );
  },
);

InputUsername.displayName = "InputUsername";
