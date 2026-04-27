import { useErrorDisplayContext } from "../_common/error-display.context";
import styles from "../_common/error-display.module.css";

interface ErrorDisplayRetryProps {
  onClick?: () => void;
  label?: string;
}

export function ErrorDisplayRetry({ onClick, label = "Reintentar" }: ErrorDisplayRetryProps) {
  const { options } = useErrorDisplayContext();
  const handleClick = onClick ?? options?.onRetry;

  if (!handleClick) return null;

  return (
    <button
      onClick={handleClick}
      className={styles.retryButton}
      aria-label={label}
    >
      {label}
    </button>
  );
}