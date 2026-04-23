import { InputIconProps } from "../model/types";
import styles from "../styles/input-icon.module.css";

export const InputIcon = ({ icon, position, onClick }: InputIconProps) => {
  if (!icon) return null;

  const containerClasses = [
    styles.iconContainer,
    position === 'left' ? styles.iconLeft : styles.iconRight,
    onClick && styles.isClickable
  ].join(' ');

  return (
    <div className={containerClasses} onClick={onClick}>
      {icon}
    </div>
  );
}