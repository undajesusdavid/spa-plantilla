import { FC } from "react";
import styles from "../_common/select.module.css";
import { SelectIconProps } from "../model/types";

export const SelectIcon: FC<SelectIconProps> = ({
  icon,
  position,
  onClick,
  isClickable,
}) => {
  if (!icon) return null;

  return (
    <div
      className={[
        styles.iconContainer,
        styles[position],
        isClickable ? styles.isClickable : "",
      ].join(" ")}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
