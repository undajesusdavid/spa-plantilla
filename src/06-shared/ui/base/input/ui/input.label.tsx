import { InputLabelProps } from "../model/types";
import styles from "../styles/input-label.module.css";

export const InputLabel = ({ label, isRequired, htmlFor }: InputLabelProps) => {
  if (!label) return null;
  
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {label}
      {isRequired && <span className={styles.required}>*</span>}
    </label>
  );
};