import { InputProps } from "@shared/ui/base/input/model/types";

interface InputEntity extends Omit<InputProps, "handleValidation" | "name" | "label"> {

} 

export interface InputUsernameProps extends Omit<InputEntity, "leftIcon"> {}

export interface InputPasswordProps extends Omit<InputEntity, "rightIcon" > {

}