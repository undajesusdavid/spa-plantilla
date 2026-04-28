import { InputPassword } from "@src/05-entities/user/ui/user-inputs/InputPassword";
import { InputUsername } from "@src/05-entities/user/ui/user-inputs/InputUsername";
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
