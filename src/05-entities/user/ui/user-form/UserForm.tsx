import { UseFormRegister } from "react-hook-form";
import { UsernameInput } from "./ui/UsernameInput";
import { UserEmailInput } from "./ui/UserEmailInput";
import { UserActiveInput } from "./ui/UserActiveInput";
import { UserPasswordInput } from "./ui/UserPasswordInput";

interface CustomFormProps {
  operation: "create" | "edit";
  register: UseFormRegister<any>;
  onSubmit: (data: any) => void;
  formId?: string;
  
}

export const UserForm = ({ operation, register, onSubmit, formId }: CustomFormProps) => {

  return (
    <form id={formId} onSubmit={onSubmit}>
      <UsernameInput {...register("username")} />
      <UserActiveInput {...register("active")} />
      <UserEmailInput {...register("email")} />
      
      {operation === "create" && (
        <>
          <UserPasswordInput {...register("password")} />
          <UserPasswordInput
            label="Confirma la contraseña"
            {...register("confirmPassword")}
          />
        </>
      )}
    </form>
  );
};
