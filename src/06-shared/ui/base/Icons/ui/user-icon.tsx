import { memo } from "react";
import { IconProps } from "../model/types"; // Importación centralizada

export const UserIcon = memo(
  ({
    size = 24,
    color = "currentColor",
    className,
    ...rest // Permite pasar cualquier otra prop de SVG nativa
  }: IconProps) => {
    return (
      <svg
        width={size}
        height={size}
        stroke={color}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        {...rest}
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  },
);
