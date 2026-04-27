import { File as FileRoot } from "./ui/file";
import { FileLabel } from "./ui/file.label";
import { FileError } from "./ui/file.error";
import { FilePreview } from "./ui/file.preview";

export const File = Object.assign(FileRoot, {
  Label: FileLabel,
  Error: FileError,
  Preview: FilePreview,
});

export type { FileProps } from "./model/types";
