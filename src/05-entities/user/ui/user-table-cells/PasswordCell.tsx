import { Table } from "@ui/data-display/table";


export const PasswordCell = ({ password }: { password: string }) => {
  return (
    <Table.Cell>
      {password}
    </Table.Cell>
  );
}