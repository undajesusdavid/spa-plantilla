import { memo } from "react";
import { InputLabelProps } from "../model/types";
import styles from "../styles/input.module.css";

export const InputLabel = memo(({ 
  label, 
  isRequired, 
  htmlFor, 
  handleClick 
}: InputLabelProps) => {
  
  if (!label) return null;

  const classLabel = [
    styles.label,
    handleClick ? styles.labelIsClickable : ""
  ].join(" ").trim();

  return (
    <label 
      htmlFor={htmlFor} 
      className={classLabel} 
      onClick={handleClick}
    >
      {label}
      {isRequired && (
        <span className={styles.required} aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
});

InputLabel.displayName = "InputLabel";