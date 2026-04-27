import { memo } from "react";
import { FileLabelProps } from "../model/types";
import styles from "../_common/file.module.css";

export const FileLabel = memo(({ 
  label, 
  isRequired, 
  htmlFor, 
  handleClick 
}: FileLabelProps) => {
  
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

FileLabel.displayName = "FileLabel";
