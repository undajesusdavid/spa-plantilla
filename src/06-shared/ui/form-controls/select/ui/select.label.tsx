import { FC } from "react";
import styles from "../_common/select.module.css";
import { SelectLabelProps } from "../model/types";

export const SelectLabel: FC<SelectLabelProps> = ({
  label,
  htmlFor,
  handleClick,
  isRequired,
}) => {
  if (!label) return null;

  return (
    <label
      htmlFor={htmlFor}
      className={[
        styles.label,
        handleClick ? styles.labelIsClickable : "",
      ].join(" ")}
      onClick={handleClick}
    >
      {label}
      {isRequired && <span className={styles.required}>*</span>}
    </label>
  );
};
