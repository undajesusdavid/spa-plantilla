import { TableRoot } from './table-root';
import { TableHeader } from './ui/table-header';
import { TableBody } from './ui/table-body';
import { TableRow } from './ui/table-row';
import { TableCell } from './ui/table-cell';

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});

export type { Column, TableProps } from './table.types';