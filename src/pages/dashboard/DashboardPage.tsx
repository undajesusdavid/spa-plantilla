import { NavBar } from "../../shared/components/navigation/NavBar";
import SmallButton from "../../shared/ui/buttons/SmallButton";

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
            <SmallButton variant="ghost">Entrar</SmallButton>
            <SmallButton variant="primary">Suscribirse</SmallButton>
          </>
        }
      />
      <h1>DashBoard</h1>
    </div>
  );
}
