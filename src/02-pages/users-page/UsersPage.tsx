import { UserTable } from "@src/03-widgets/user-table/UserTable";
import Page from "../Page";


export const UsersPage = () => {
    return (
        <Page title="Gestion de Usuarios">
            <UserTable />
        </Page>
    );
}