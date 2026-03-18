import React from "react";
import { TableProps } from "./types";
import styles from "./Table.module.css";

export const Table = <T extends { id: string | number }>({
  data,
  columns,
  selectedIds,
  onSelect,
}: TableProps<T>) => {
  const isAllSelected =
    data.length > 0 && data.every((item) => selectedIds.has(item.id));

  const toggleAll = () => {
    if (isAllSelected) {
      // Si todos los visibles están seleccionados, los quitamos
      const newSelection = new Set(selectedIds);
      data.forEach((item) => newSelection.delete(item.id));
      onSelect(newSelection);
    } else {
      // Agregamos todos los visibles a la selección previa
      const newSelection = new Set(selectedIds);
      data.forEach((item) => newSelection.add(item.id));
      onSelect(newSelection);
    }
  };

  const toggleOne = (id: string | number) => {
    const newSelection = new Set(selectedIds);
    newSelection.has(id) ? newSelection.delete(id) : newSelection.add(id);
    onSelect(newSelection);
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkboxCol}>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleAll}
              />
            </th>
            {columns.map((col, i) => (
              <th key={i}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr
                key={item.id}
                className={selectedIds.has(item.id) ? styles.selectedRow : ""}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.has(item.id)}
                    onChange={() => toggleOne(item.id)}
                  />
                </td>
                {columns.map((col, i) => (
                  <td key={i}>
                    {col.render
                      ? col.render(item[col.key], item)
                      : String(item[col.key])}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className={styles.emptyState}>
                No se encontraron registros que coincidan con el filtro.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
