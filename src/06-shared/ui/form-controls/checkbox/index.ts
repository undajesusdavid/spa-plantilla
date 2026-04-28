import { Checkbox as CheckboxRoot } from "./ui/checkbox";
import { CheckboxLabel } from "./ui/checkbox.label";
import { CheckboxError } from "./ui/checkbox.error";
import { CheckboxHelperText } from "./ui/checkbox.helper-text";

export const Checkbox = Object.assign(CheckboxRoot, {
  Label: CheckboxLabel,
  Error: CheckboxError,
  HelperText: CheckboxHelperText,
});

export type { CheckboxProps, CheckboxLabelProps, CheckboxErrorProps, CheckboxHelperTextProps } from "./model/types";