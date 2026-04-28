# Template: Feature Sliced Design Layer
Usa este patrón siempre que crees una nueva feature en src/04-features.

## Reglas de estructura:
04-features/
└── [feature-name]/
    ├── api/
    │   ├── [feature-name].api.ts         # Instancia Axios y llamadas REST
    │   └── [feature-name].mutations.ts   # Hooks de TanStack Query (useMutation/useQuery)
    ├── model/
    │   ├── [feature-name].schema.ts      # Validaciones Zod para datos de la feature
    │   ├── [feature-name].store.ts       # Store de Zustand (Estado de interacción)
    │   └── [feature-name].types.ts       # Interfaces y Types de TypeScript
    ├── ui/
    │   └── [component-name]/             # Carpeta por componente de la feature
    │       ├── [ComponentName].tsx       # Componente React (JSX)
    │       ├── use[ComponentName].ts     # Hook con la lógica de UI y estado local
    │       └── [ComponentName].module.css # Estilos específicos del componente
    ├── index.ts                          # Public API (Exportaciones controladas)
    └── README.md                         # Documentación técnica del slice



**Ejemplo para el archivo api/[feature-name].api.ts:**
<example>
    import { apiClient } from "@shared/api";
    import { UserRegisterRequestType } from "../model/user-register.schema";

    export const userRegisterApi = {
        createUser: async (body: UserRegisterRequestType) => {
            const { data } = await apiClient.post('/users/create', body);
            return data;
        },
    }
</example>


**Ejemplo para el archivo api/[feature-name].mutations.ts:**
<example>
    import { useMutation, useQueryClient } from "@tanstack/react-query";
    import { UserRegisterRequestType } from "../model/user-register.schema";
    import { userRegisterApi } from "./user-register.api";

    export const useUserRegisterMutation = () => {
        const queryClient = useQueryClient();

        return useMutation({
            mutationFn: (data: UserRegisterRequestType) => userRegisterApi.createUser(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["users"] });
            },
            //onError: (error: any) => {},
        });
    };
</example>



**Ejemplo para el archivo model/[feature-name].schema.ts:**
<example>
    import { z } from "zod";
    import { username, password, email } from "@entities/user";

    export const UserRegisterRequest = z.object({
        username: username,
        email: email,
        password: password,
        passwordConfirm: z.string().min(1, "La confirmación de contraseña es requerida"),
    }).refine((data) => data.password === data.passwordConfirm, {
        message: "Las contraseñas no coinciden",
        path: ["passwordConfirm"],
    });

    export type UserRegisterType = z.infer<typeof UserRegisterRequest>;

</example>


**Ejemplo para el archivo ui/[component-name]/[ComponentName].tsx:**
<example>
    import { useFormUserRegister } from "./useFormUserRegister";
    import { Button } from "@ui/buttons/button";
    import { ButtonContainer } from "@ui/buttons/button-container";
    import { FieldGroup } from "@ui/form-groups/field-group";
    import { InputPassword, InputUserEmail, InputUsername } from "@entities/user";

    interface CreateUserFeatureProps {
    onSuccess?: () => void;
    onCancel?: () => void;
    }

    export const FormUserRegister = ({ onSuccess, onCancel }: CreateUserFeatureProps) => {
        const { form, onSubmit, isLoading } = useFormUserRegister({ onSuccess });
        const { register, formState: { errors } } = form;

        return (
            <form onSubmit={onSubmit}>
                <FieldGroup title="Datos de Usuario" orientation="vertical" columns={1}>
                    <InputUsername
                    error={errors.username?.message}
                    {...register("username")}
                    />

                    <InputUserEmail
                    error={errors.email?.message}
                    {...register("email")}
                    />

                    <InputPassword
                    error={errors.password?.message}
                    {...register("password")}
                    />

                    <InputPassword
                    label="Confirmar Contraseña"
                    placeholder="********"
                    error={errors.passwordConfirm?.message}
                    {...register("passwordConfirm")}
                    />
                </FieldGroup>

                <ButtonContainer align="right" className="mt-6">
                    {onCancel && (
                        <Button type="button" variant="ghost" onClick={onCancel} disabled={isLoading}>
                            Cancelar
                        </Button>
                    )}
                    <Button type="submit" variant="primary" disabled={isLoading}>
                        {isLoading ? "Creando..." : "Crear Usuario"}
                    </Button>
                </ButtonContainer>
            </form>
        );
    };
</example>


**Ejemplo para el archivo ui/[component-name]/use[ComponentName].ts:**
<example>
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import { UserRegisterRequest, UserRegisterType } from "../../model/user-register.schema";
    import { useUserRegisterMutation } from "../../api/user-register.mutations";
    import { useToast } from "@context/ToastContext";

    interface UseFormUserRegisterProps {
    onSuccess?: () => void;
    }

    export const useFormUserRegister = ({ onSuccess }: UseFormUserRegisterProps = {}) => {
        const { addToast } = useToast();
        const mutation = useUserRegisterMutation();

        const form = useForm<UserRegisterType>({
            resolver: zodResolver(UserRegisterRequest),
            defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            },
            mode: "onTouched",
        });

        const onSubmit = form.handleSubmit((data) => {
            mutation.mutate(data, {
                onSuccess: () => {
                    addToast("success", "Usuario creado correctamente", "Éxito");
                    form.reset();
                    onSuccess?.();
                },
                onError: (error) => {
                    addToast("error", error.message || "Error al crear el usuario", "Error");
                },
            });
        });

        return {
            form,
            onSubmit,
            isLoading: mutation.isPending,
            isError: mutation.isError,
            error: mutation.error,
        };
    };
</example>