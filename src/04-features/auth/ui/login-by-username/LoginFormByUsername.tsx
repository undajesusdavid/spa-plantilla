import { InputPassword } from "@entities/users/ui/inputs/InputPassword";
import { InputUsername } from "@entities/users/ui/inputs/InputUsername";
import { BigButton } from "@ui/buttons/big-button";
import { useLoginFormByUsername } from "./useLoginFormByUsername";
import styles from "./LoginFormByUsername.module.css";

export const LoginByUsername = () => {
  const { 
    form : {register, formState: {errors}}, 
    onSubmit, 
    isLoading, 
    isServerError, 
    serverError 
  } = useLoginFormByUsername();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <InputUsername
        error={errors?.username?.message}
        {...register("username")}
      />

      <InputPassword
        {...register("password")}
        error={errors?.password?.message}
      />

      {isServerError && (
        <div className={styles.error}>
          <span>⚠️</span> {serverError?.message}
        </div>
      )}

      <BigButton type="submit" disabled={isLoading}>
        {isLoading ? "Validando..." : "Ingresar al sistema"}
      </BigButton>
    </form>
  );
};
