import { ReactNode } from "react";
import styles from "../_common/table.module.css";

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export const TableHeader = ({ children, className }: TableHeaderProps) => {
  return (
    <thead className={`${styles.thead} ${className ?? ""}`}>{children}</thead>
  );
};
