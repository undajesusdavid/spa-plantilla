import { useState } from "react";
import { Input } from "@ui-base/inputs/Input";

interface PasswordConfirmFieldProps {
  label?: string;
  confirmLabel?: string;
  errorPassword?: string;
  errorConfirm?: string;
  thereErrors: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PasswordConfirmField({
  label = "Contraseña",
  confirmLabel = "Confirmar contraseña",
  errorPassword,
  errorConfirm,
  thereErrors,
}: PasswordConfirmFieldProps) {
  const [password, setPassword] = useState("");
  const [messageError, setMessaError] = useState("");

  const match = (confirm: string) => {
    if (confirm !== password) {
      setMessaError("La contraseña no coincide");
      thereErrors(true);
    }else {
      setMessaError("");
    }
  };

  return (
    <>
      <Input
        label={label}
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
        error={errorPassword}
      />

      <Input
        label={confirmLabel}
        name="passwordConfirm"
        type="password"
        onChange={(e) => match(e.target.value)}
        required
        error={errorConfirm ? errorConfirm : messageError}
      />
    </>
  );
}
