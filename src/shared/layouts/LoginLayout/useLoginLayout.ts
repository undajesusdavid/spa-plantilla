import { useAuthStore } from "@/modules/users";
import { LoginConfig } from "./LoginLayoutProps";
import logo from "@/assets/isotipo.png";

export function useLoginLayout() {

    const token = useAuthStore((state) => state.token);
    
    const config: LoginConfig = {
        token: token || "",
        logo: logo,
        title: "Sistema de Archivos",
        description: "Por favor, inicia sesión para continuar",
    };

    return {
        config
    };
}