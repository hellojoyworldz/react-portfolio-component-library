import React, { ElementType, ReactNode } from "react";
import "../assets/styles/reset.scss";
import "../assets/styles/common.scss";

interface PortfolioGroupProps<T extends ElementType> {
  as?: T;
  children: ReactNode;
  className?: string;
}

export const PortfolioGroup = <T extends ElementType = "div">({
  as,
  children,
  className,
}: PortfolioGroupProps<T>) => {
  const Component = as || "div";
  return <Component className={className || ""}>{children}</Component>;
};
