import { ReactNode } from "react";
import { useAbility } from "../lib/providers/AccessControlProvider";
import { Permission } from "../../../06-shared/lib/util/map-permissions";

interface CanProps {
  perform: Permission;
  children: ReactNode;
  fallback?: ReactNode;
}

export const Can = ({ perform, children, fallback = null }: CanProps) => {
  const { can } = useAbility();
  return can(perform) ? <>{children}</> : <>{fallback}</>;
};