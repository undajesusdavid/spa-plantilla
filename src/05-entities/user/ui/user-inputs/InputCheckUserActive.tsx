import { Checkbox } from "@src/06-shared/ui/form-controls/checkbox";
import { forwardRef } from "react";

interface InputCheckUserActiveProps {}
  
export const InputCheckUserActive = forwardRef<HTMLInputElement, InputCheckUserActiveProps>((props, ref) => {
  const { ...rest } = props;

  return (
    <Checkbox
      ref={ref}
      showDynamicLabel
      activeLabel="Estatus Activo"
      inactiveLabel="Estatus Inactivo"
      name="userActive"
      label="Estatus del usuario"
      helperText="Indica si el usuario está activo o inactivo"
      {...rest}
    />
  );
});
