import React, { ReactNode } from "react";
interface GoToLinkProps {
    to: string;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
}
export declare const GoToLink: React.FC<GoToLinkProps>;
export {};
