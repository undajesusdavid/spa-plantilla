import { type ReactNode } from "react";
import { CardContext } from "./_common/card.context";
import type { CardOptions, CardRootProps } from "./_common/card.types";
import styles from "./_common/card.module.css";
import { CardHeader } from "./ui/card-header";
import { CardContent } from "./ui/card-content";
import { CardFooter } from "./ui/card-footer";

function Card({ options, children, className = "", onClick }: CardRootProps) {
  const contextValue = { options: options ?? {} };
  const variant = options?.variant ?? "default";
  const padding = options?.padding ?? "medium";
  const isClickable = !!onClick;

  const containerClassName = [
    styles.container,
    styles[variant],
    styles[padding],
    isClickable ? styles.clickable : "",
    className,
  ].filter(Boolean).join(" ");

  // Level 3: Pure composition — render children directly
  if (children) {
    return (
      <CardContext.Provider value={contextValue}>
        <div 
          className={containerClassName} 
          onClick={onClick}
          role={isClickable ? "button" : undefined}
          tabIndex={isClickable ? 0 : undefined}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  }

  // Level 1: Auto-construction — render default sub-components from options
  return (
    <CardContext.Provider value={contextValue}>
      <div 
        className={containerClassName}
        onClick={onClick}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
      >
        <CardHeader />
        <CardContent />
        <CardFooter />
      </div>
    </CardContext.Provider>
  );
}

export { Card };
export type { CardOptions, CardRootProps };