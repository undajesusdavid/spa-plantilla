import { InputUsername } from "@src/05-entities/users/ui/input-username/input-username";
import { InputPassword } from "@src/05-entities/users/ui/input-password/input-password";
import { useState } from "react";

export const TestComponent = () => {
  const [val, setVal] = useState("Valor por defecto en react state");
  
  return (
    <div>
      <InputUsername
        successColor
        required
      />
      <InputPassword  orientation="row" inputSize="medium" />
    </div>
  );
};
