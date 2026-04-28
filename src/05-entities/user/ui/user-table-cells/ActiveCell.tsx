import { Table } from "@ui/data-display/table";


export const ActiveCell = ({ active }: { active: boolean }) => {
  return (
    <Table.Cell>
      {active ? 'Active' : 'Inactive'}
    </Table.Cell>
  );
}