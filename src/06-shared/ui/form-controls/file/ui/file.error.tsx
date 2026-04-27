import { memo } from "react";
import { FileErrorProps } from "../model/types";
import styles from "../_common/file.module.css";

export const FileError = memo(({ message }: FileErrorProps) => {

  if (!message) return null;

  return (
    <div 
      className={styles.errorWrapper}
      role="alert"
      aria-live="polite"
    >
      <p className={styles.messageError}>
        {message}
      </p>
    </div>
  );
});

FileError.displayName = "FileError";
