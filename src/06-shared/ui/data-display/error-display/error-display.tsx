import { type ReactNode } from "react";
import { ErrorDisplayContext } from "./_common/error-display.context";
import type { ErrorDisplayOptions, ErrorDisplayRootProps } from "./_common/error-display.types";
import styles from "./_common/error-display.module.css";
import { ErrorDisplayIcon } from "./ui/error-display-icon";
import { ErrorDisplayTitle } from "./ui/error-display-title";
import { ErrorDisplayMessage } from "./ui/error-display-message";
import { ErrorDisplayCode } from "./ui/error-display-code";
import { ErrorDisplayRetry } from "./ui/error-display-retry";

function ErrorDisplay({ options, children, className = "" }: ErrorDisplayRootProps) {
  const contextValue = { options: options ?? {} };

  // Level 3: Pure composition — render children directly
  if (children) {
    return (
      <ErrorDisplayContext.Provider value={contextValue}>
        <div className={`${styles.container} ${className}`}>{children}</div>
      </ErrorDisplayContext.Provider>
    );
  }

  // Level 1: Auto-construction — render default sub-components from options
  return (
    <div className={`${styles.container} ${className}`}>
      <ErrorDisplayContext.Provider value={contextValue}>
        <ErrorDisplayIcon />
        <ErrorDisplayTitle />
        <ErrorDisplayMessage />
        <ErrorDisplayCode />
        <ErrorDisplayRetry />
      </ErrorDisplayContext.Provider>
    </div>
  );
}

export { ErrorDisplay };
export type { ErrorDisplayOptions, ErrorDisplayRootProps };