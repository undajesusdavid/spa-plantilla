
import { MODULES, ACTIONS } from "@shared/config";

type TypeModulo = typeof MODULES[keyof typeof MODULES];
type TypeAction = typeof ACTIONS[keyof typeof ACTIONS];

export type Permission = `${TypeModulo}:${TypeAction}`;

export const checkPermission = (userPermissions: string[], requiredPermission: Permission) => {
        
    return userPermissions.includes(requiredPermission);
};