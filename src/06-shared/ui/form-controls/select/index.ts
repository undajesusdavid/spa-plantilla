import { Select as SelectRoot } from "./ui/select";
import { SelectItem } from "./ui/select-item";

export const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
});

export type { SelectProps, SelectOption, SelectItemProps } from "./model/types";
