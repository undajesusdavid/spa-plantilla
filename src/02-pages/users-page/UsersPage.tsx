import { UserTable } from "@src/03-widgets/user-table/UserTable";
import {Page} from "@shared/ui/layouts";
import { NavBar } from "@src/06-shared/ui/navigation/nav-bar";
import { UserIcon } from "@src/06-shared/ui/Icons";
import { Button } from "@src/06-shared/ui/buttons/button";

const myLinks = [
  { label: "Features", href: "#" },
  { label: "Showcase", href: "#" },
  { label: "Pricing", href: "#" },
];

export const UsersPage = () => {
  return (
    <Page title="Gestion de Usuarios">
      <NavBar
        links={myLinks}
        actions={
          <>
            <Button size="xsm" icon={<UserIcon size={20}/>} variant="info">REGISTRAR</Button>
          </>
        }
      />
      <UserTable />
    </Page>
  );
};
