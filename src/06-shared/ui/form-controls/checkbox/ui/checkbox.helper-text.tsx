import { CheckboxHelperTextProps } from "../model/types";
import styles from "../_common/checkbox.module.css";

export const CheckboxHelperText = ({ children, className }: CheckboxHelperTextProps) => {
  if (!children) return null;

  return <span className={`${styles.checkboxHelperText} ${className || ""}`}>{children}</span>;
};