import { ReactNode } from "react";
import styles from "../_common/table.module.css";

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export const TableBody = ({ children, className }: TableBodyProps) => {
  return (
    <tbody className={`${styles.tbody} ${className ?? ""}`}>{children}</tbody>
  );
};
