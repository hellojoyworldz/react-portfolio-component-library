import React, { ElementType, ReactNode } from "react";
import "../assets/styles/reset.scss";
import "../assets/styles/common.scss";
interface PortfolioGroupProps<T extends ElementType> {
    as?: T;
    children: ReactNode;
    className?: string;
}
export declare const PortfolioGroup: <T extends ElementType = "div">({ as, children, className, }: PortfolioGroupProps<T>) => React.JSX.Element;
export {};
