import React from "react";
import { Title, Item } from "./data";
import { designTitleType, designTextType } from "../../constants/types";
export declare const ListLego: ({ bgcolor, title, items, className, titleDesign, itemTitleDesign, itemTypeDesign, }: {
    bgcolor?: string;
    title?: Title;
    items?: Item[];
    className?: string;
    titleDesign?: designTitleType;
    itemTitleDesign?: designTitleType;
    itemTypeDesign?: designTextType;
}) => React.JSX.Element;
