import React from "react";
import { designBadgeType, designTitleType } from "../../constants/types";
export declare const Visual: ({ bgcolor, title, className, mainTitleDesign, moveTitleDesign, badgeTitleDesign, }: {
    bgcolor?: string;
    title?: {
        main: string;
        badge: string;
        move: string;
    };
    className?: string;
    mainTitleDesign?: designTitleType;
    moveTitleDesign?: designTitleType;
    badgeTitleDesign?: designBadgeType;
}) => React.JSX.Element;
