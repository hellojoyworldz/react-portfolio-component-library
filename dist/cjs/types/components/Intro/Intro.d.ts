import React from "react";
import { TitleType, ItemType } from "./data";
import { designTitleType } from "../../constants/types";
export declare const Intro: ({ bgcolor, title, items, className, titleDesign, itemTitleDesign, }: {
    bgcolor?: string;
    title?: TitleType;
    items?: ItemType[];
    className?: string;
    titleDesign?: designTitleType;
    itemTitleDesign?: designTitleType;
}) => React.JSX.Element;
