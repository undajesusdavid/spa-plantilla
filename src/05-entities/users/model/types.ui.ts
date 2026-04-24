import { InputProps } from "@shared/ui/base/input/model/types"; // Ajusta el alias según tu config

interface InputEntiti extends Omit<InputProps, "type" | "success"> {
    validateSemantics?: boolean;
    successColor?: boolean;
} 

export interface InputUsernameProps extends Omit<InputEntiti, "leftIcon" > {
    checkAvailability?: boolean;
}

export interface InputPasswordProps extends Omit<InputEntiti, "rightIcon" > {

}