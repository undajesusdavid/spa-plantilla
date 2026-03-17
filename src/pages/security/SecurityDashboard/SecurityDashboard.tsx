import React from "react";
import styles from "./SecurityDashboard.module.css";
import Page from "../../Page";

const SECURITY_STATS = [
  { id: 1, label: "Ingresos hoy", value: "142", emoji: "🔑" },
  { id: 2, label: "Fallos Log-in", value: "3", emoji: "⚠️", isAlert: true },
  { id: 3, label: "Privilegios Elev.", value: "12", emoji: "🚀" },
  { id: 4, label: "Cambios Roles", value: "5", emoji: "⚙️", isWarning: true },
  { id: 5, label: "Tráfico Red", value: "Normal", emoji: "🌐" },
];

const ROLES = [
  {
    id: 1,
    name: "Administrador",
    desc: "Control total de seguridad.",
    count: 2,
    emoji: "🛡️",
    bg: "#f2f2ff",
  },
  {
    id: 2,
    name: "Diseñador Pro",
    desc: "Gestión de activos creativos.",
    count: 14,
    emoji: "🎨",
    bg: "#f0f9f0",
  },
  {
    id: 3,
    name: "Invitado",
    desc: "Solo lectura y comentarios.",
    count: 32,
    emoji: "👤",
    bg: "#fff8ed",
  },
];

export const SecurityDashboard: React.FC = () => {
  return (
    <Page title="Panel de Seguridad">
      {/* Sección de Métricas y Reportes Rápidos */}
      <div className={styles.metricsGrid}>
        {SECURITY_STATS.map((stat) => (
          <div key={stat.id} className={styles.metricCard}>
            <span className={styles.metricEmoji}>{stat.emoji}</span>
            <span
              className={`${styles.metricValue} ${stat.isAlert ? styles.alertHigh : ""} ${stat.isWarning ? styles.alertWarning : ""}`}
            >
              {stat.value}
            </span>
            <span className={styles.metricLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default SecurityDashboard;
