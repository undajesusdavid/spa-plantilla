import { ReactNode } from "react";
import { useTableContext } from "../_common/table.context";
import styles from "../_common/table.module.css";

interface TableCellProps {
  children: ReactNode;
  variant?: "head" | "data";
  colSpan?: number;
  className?: string;
}

export const TableCell = (props : TableCellProps) => {
  const { children, variant = "data", colSpan, className } = props;

  const { dense } = useTableContext();
  
  const cellClasses = [
    variant === "head" ? styles.th : styles.td,
    dense ? styles.dense : "",
    className ?? "",
  ].filter(Boolean).join(" ");

 
  return variant === "head" ? (
    <th className={cellClasses} colSpan={colSpan}>
      {children}
    </th>
  ) : (
    <td className={cellClasses} colSpan={colSpan}>
      {children}
    </td>
  );
};
  