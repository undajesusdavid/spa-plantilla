import { CheckboxErrorProps } from "../model/types";
import styles from "../_common/checkbox.module.css";

export const CheckboxError = ({ message, variant = "error" }: CheckboxErrorProps) => {
  if (!message) return null;

  return (
    <span className={`${styles.checkboxError} ${variant === "success" ? styles.success : ""}`}>
      {message}
    </span>
  );
};