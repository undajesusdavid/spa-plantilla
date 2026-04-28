import { CheckboxLabelProps } from "../model/types";
import styles from "../_common/checkbox.module.css";

export const CheckboxLabel = ({
  htmlFor,
  label,
  isRequired,
  handleClick,
  disabled,
}: CheckboxLabelProps) => {
  if (!label) return null;

  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.checkboxLabel} ${isRequired ? styles.required : ""} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={handleClick}
    >
      {label}
    </label>
  );
};