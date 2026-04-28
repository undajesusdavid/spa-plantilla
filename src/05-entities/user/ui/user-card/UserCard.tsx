import { Card } from "@ui/data-display/card";
import type { userType } from "@entities/user";
import styles from "./UserCard.module.css";

interface UserCardProps {
  user: userType;
  onClick?: () => void;
  className?: string;
}

export function UserCard({ user, onClick, className = "" }: UserCardProps) {
  return (
    <Card
      options={{
        title: user.username,
        subtitle: user.email,
        variant: "elevated",
        padding: "medium",
      }}
      onClick={onClick}
      className={className}
    >
      <Card.Content>
        <div className={styles.status}>
          <span className={`${styles.statusIndicator} ${user.active ? styles.active : styles.inactive}`} />
          <span className={styles.statusText}>
            {user.active ? "Activo" : "Inactivo"}
          </span>
        </div>
      </Card.Content>
    </Card>
  );
}