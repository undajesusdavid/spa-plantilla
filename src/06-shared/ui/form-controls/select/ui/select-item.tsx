import { SelectItemProps } from "../model/types";

export const SelectItem = <T extends string | number>({
  value,
  label,
  children,
  disabled,
}: SelectItemProps<T>) => {
  return (
    <option value={value} disabled={disabled}>
      {label || children}
    </option>
  );
};
