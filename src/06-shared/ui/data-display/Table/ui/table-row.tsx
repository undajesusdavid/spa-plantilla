import { ReactNode } from "react";
import { useTableContext } from "../_common/table.context";
import styles from "../_common/table.module.css";

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export const TableRow = ({ children, className }: TableRowProps) => {
  const { hoverable } = useTableContext();

  const rowClasses = [styles.tr, hoverable ? styles.hoverable : "", className]
    .filter(Boolean)
    .join(" ");

  return <tr className={rowClasses}>{children}</tr>;
};
