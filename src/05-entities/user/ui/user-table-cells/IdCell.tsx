import { Table } from "@ui/data-display/table";


export const IdCell = ({ id }: { id: string }) => {
  return (
    <Table.Cell>
      {id}
    </Table.Cell>
  );
}