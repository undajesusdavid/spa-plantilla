import { FC } from "react";
import styles from "../_common/select.module.css";
import { SelectErrorProps } from "../model/types";

export const SelectError: FC<SelectErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.errorWrapper}>
      <p className={styles.messageError}>{message}</p>
    </div>
  );
};
