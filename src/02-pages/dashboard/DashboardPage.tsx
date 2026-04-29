import { NavBar } from "@ui/navigation/nav-bar";
import { Button } from "@shared/ui/buttons/button";

export default function DashboardPage() {
  const myLinks = [
    { label: "Features", href: "#" },
    { label: "Showcase", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <div>
      <NavBar
        logo={
          <span>
            Acme<span style={{ color: "#999" }}>.</span>
          </span>
        }
        links={myLinks}
        actions={
          <>
            <Button size="xsm" variant="ghost">Entrar</Button>
            <Button size="xsm" variant="primary">Suscribirse</Button>
          </>
        }
      />
      <h1>DashBoard</h1>
    </div>
  );
}
