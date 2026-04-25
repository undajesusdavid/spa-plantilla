import { Input } from "@shared/ui/base/input";
import { ChangeEvent, forwardRef } from "react";
import { username } from "../../model";
import { UserIcon } from "@shared/ui/base/Icons";
import { InputUsernameProps } from "../../model/types-ui.user";

export const InputUsername = forwardRef<HTMLInputElement, InputUsernameProps>(
  (props, ref) => {
    const { successColor, ...rest } = props;

    const validation = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const result = username.safeParse(value);
      return result.success ? null : result.error.errors[0].message;
    };

    return (
      <Input
        {...rest}
        successColor={successColor}
        handleValidation={validation}
        name="username"
        leftIcon={<UserIcon size={21} />}
        placeholder="ingrese el nombre de usuario"
        label="Nombre de usuario"
        ref={ref}
      />
    );
  },
);
