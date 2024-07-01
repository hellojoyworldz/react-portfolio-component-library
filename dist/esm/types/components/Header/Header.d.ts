import React, { ReactNode } from "react";
import { designTitleType } from "../../constants/types";
export declare const Header: ({ title, logo, alt, className, children, titleDesign, }: {
    title?: string;
    logo?: string;
    alt?: string;
    className?: string;
    children?: ReactNode;
    titleDesign?: designTitleType;
}) => React.JSX.Element;
