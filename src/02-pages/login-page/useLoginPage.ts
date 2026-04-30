

export type LoginPageConfig = {
    token: string | null;
    logo: string;
    title: string;
    description: string;
}


import logo from "@assets/isotipo.png";
import { useSessionStore } from "@entities/session";

export function useLoginLayout() {

    const token = useSessionStore((state) => state.token);
    
    const config: LoginPageConfig = {
        token: token || null,
        logo: logo,
        title: "Sistema de Archivos",
        description: "Por favor, inicia sesión para continuar",
    };

    return {
        config
    };
}