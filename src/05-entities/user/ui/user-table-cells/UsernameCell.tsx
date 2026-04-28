import { Table } from "@ui/data-display/table";

export const UsernameCell = ({ username }: { username: string }) => {
  return (
    <Table.Cell>
      {username}
    </Table.Cell>
  );
}