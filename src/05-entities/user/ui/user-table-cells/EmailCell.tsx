import { Table } from "@ui/data-display/table";


export const EmailCell = ({ email }: { email: string }) => {
  return (
    <Table.Cell>
      {email}
    </Table.Cell>
  );
}