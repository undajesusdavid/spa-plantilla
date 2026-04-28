import { forwardRef } from "react";

interface UserActiveInputProps {
  name?: string;
  label?: string;
}

export const UserActiveInput = forwardRef<HTMLInputElement, UserActiveInputProps>((props, ref) => {
  const { name = "active", label = "Estatus del usuario", ...rest } = props;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <label htmlFor={name}>{label}</label>
      <input type="checkbox" name={name} ref={ref} {...rest} />
    </div>
  );
});
