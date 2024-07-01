import React from "react";
import { Item } from "./data";
import { designTitleType, designTextType, designBadgeType } from "../../constants/types";
export declare const ListHorizontal: ({ bgcolor, title, items, className, titleDesign, itemIdDesign, itemTitleDesign, itemDescDesign, itemSiteDesign, }: {
    bgcolor?: string;
    title?: string;
    items?: Item[];
    className?: string;
    titleDesign?: designTitleType;
    itemIdDesign?: designTextType;
    itemTitleDesign?: designTitleType;
    itemDescDesign?: designTextType;
    itemSiteDesign?: designBadgeType;
}) => React.JSX.Element;
