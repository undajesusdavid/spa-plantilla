import Navbar from "../../shared/components/nav-bar/Navbar";
import { BigButton } from "../../shared/ui/BigButton";
import SmallButton from "../../shared/ui/SmallButton";

export default function DashboardPage() {
  const myLinks = [
    { label: "Features", href: "#" },
    { label: "Showcase", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <div>
      <Navbar
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
