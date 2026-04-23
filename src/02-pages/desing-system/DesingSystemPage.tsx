import { TestComponent } from "./TestComponent";

export const DesingSystemPage = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <h1 style={{ color: "black" }}>Desing System</h1>
      <p style={{ color: "black" }}>
        En esta página se mostrarán los componentes del sistema de diseño.
      </p>

      <TestComponent />
    </div>
  );
};
