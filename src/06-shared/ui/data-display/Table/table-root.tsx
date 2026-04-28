import { TableProps } from './table.types';
import { TableProvider } from './_common/table.context';
import { TableHeader } from './ui/table-header';
import { TableBody } from './ui/table-body';
import { TableRow } from './ui/table-row';
import { TableCell } from './ui/table-cell';
import styles from './_common/table.module.css';
import { ReactNode } from 'react';

export const TableRoot = <T,>({ data, columns, children, className }: TableProps<T>) => {
  return (
    <TableProvider>
      <div className={styles.wrapper}>
        <table className={`${styles.table} ${className ?? ''}`}>
          {/* Lógica Híbrida */}
          {data && columns ? (
            <>
              <TableHeader>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell key={String(col.key)} variant="head">
                      {col.header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, idx) => (
                  <TableRow key={idx}>
                    {columns.map((col) => (
                      <TableCell key={String(col.key)}>
                        {col.render ? col.render(item) : (item[col.key as keyof T] as ReactNode)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </>
          ) : (
            children
          )}
        </table>
      </div>
    </TableProvider>
  );
};