import React from "react";
import { Item } from "./data";
import { designBadgeType, designTextType, designTitleType } from "../../constants/types";
export declare const ListNormal: ({ bgcolor, title, items, className, titleDesign, itemTypeDesign, itemTitleDesign, itemDescDesign, itemBadgeDesign, }: {
    bgcolor?: string;
    title?: string;
    items?: Item[];
    className?: string;
    titleDesign?: designTitleType;
    itemTypeDesign?: designTextType;
    itemTitleDesign?: designTitleType;
    itemDescDesign?: designTextType;
    itemBadgeDesign?: designBadgeType;
}) => React.JSX.Element;
