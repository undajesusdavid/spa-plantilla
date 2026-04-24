import { InputLabelProps } from "../model/types";
import styles from "../styles/input-label.module.css";

export const InputLabel = ({ label, isRequired, htmlFor, handleClick }: InputLabelProps) => {
  if (!label) return null;
  
  const classLabel = [
    styles.label,
    handleClick && styles.labelIsClickable
  ].join(' ');


  return (
    <label htmlFor={htmlFor} className={classLabel} onClick={handleClick}>
      {label}
      {isRequired && <span className={styles.required}>*</span>}
    </label>
  );
};