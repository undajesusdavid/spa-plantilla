import { Input as InputRoot } from "./ui/input";
import { InputLabel } from "./ui/input.label";
import { InputIcon } from "./ui/input.icon";
import { InputError } from "./ui/input.error";

export const Input = Object.assign(InputRoot, {
  Label: InputLabel,
  Icon: InputIcon,
  Error: InputError,
});

export type { InputProps } from "./model/types";
