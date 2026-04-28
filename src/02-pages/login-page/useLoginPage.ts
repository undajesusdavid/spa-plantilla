

export type LoginPageConfig = {
    token: string;
    logo: string;
    title: string;
    description: string;
}


import logo from "@assets/isotipo.png";
import { useSessionStore } from "@src/05-entities/session/model";

export function useLoginLayout() {

    const token = useSessionStore((state) => state.token);
    
    const config: LoginPageConfig = {
        token: token || "",
        logo: logo,
        title: "Sistema de Archivos",
        description: "Por favor, inicia sesión para continuar",
    };

    return {
        config
    };
}