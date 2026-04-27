import { useErrorDisplayContext } from "../_common/error-display.context";
import styles from "../_common/error-display.module.css";

interface ErrorDisplayCodeProps {
  children?: string | number;
}

export function ErrorDisplayCode({ children }: ErrorDisplayCodeProps) {
  const { options } = useErrorDisplayContext();
  const code = children ?? options?.errorCode;

  if (code == null) return null;

  return <span className={styles.code}>Error ref: {code}</span>;
}