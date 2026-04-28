import { useCardContext } from "../_common/card.context";
import styles from "../_common/card.module.css";

export function CardContent({ children }: { children?: React.ReactNode }) {
  const { options } = useCardContext();
  
  // If children provided, render them directly
  if (children) {
    return <div className={styles.content}>{children}</div>;
  }
  
  // Auto-construction - no default content
  return null;
}