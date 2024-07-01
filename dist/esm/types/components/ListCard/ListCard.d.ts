import React from "react";
import { Item, Title } from "./data";
import { designTextType, designTitleType } from "../../constants/types";
export declare const ListCard: ({ bgcolor, title, items, className, titleDesign, itemTitleDesign, itemDescDesign, }: {
    bgcolor?: string;
    title?: Title;
    items?: Item[];
    className?: string;
    titleDesign?: designTitleType;
    itemTitleDesign?: designTitleType;
    itemDescDesign?: designTextType;
}) => React.JSX.Element;
