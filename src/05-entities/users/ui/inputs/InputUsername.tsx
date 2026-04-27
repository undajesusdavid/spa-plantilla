import { forwardRef } from 'react'
import { Input } from "@ui/form-controls/input";
import { InputProps } from "@ui/form-controls/input/model/types";
import { UserIcon } from "@ui/Icons";


interface InputUsernameProps extends Omit<InputProps, "type" | "leftIcon" > {}

export const  InputUsername = forwardRef<HTMLInputElement, InputUsernameProps>((props, ref) => {
  const {
    name="Username", 
    label="Nombre de Usuario", 
    placeholder="Ingrese el nombre de usuario", 
    ...rest} = props;
  return (
    <Input
      type='text' 
      name={name}
      label={label}
      placeholder={placeholder}
      leftIcon={<UserIcon size={21} />}
      ref={ref}
      {...rest}
    />
  )
})

