import { ErrorDisplay } from "./error-display";
import { ErrorDisplayIcon } from "./ui/error-display-icon";
import { ErrorDisplayTitle } from "./ui/error-display-title";
import { ErrorDisplayMessage } from "./ui/error-display-message";
import { ErrorDisplayCode } from "./ui/error-display-code";
import { ErrorDisplayRetry } from "./ui/error-display-retry";

const Display = Object.assign(ErrorDisplay, {
  Icon: ErrorDisplayIcon,
  Title: ErrorDisplayTitle,
  Message: ErrorDisplayMessage,
  Code: ErrorDisplayCode,
  Retry: ErrorDisplayRetry,
});

export { Display as ErrorDisplay };