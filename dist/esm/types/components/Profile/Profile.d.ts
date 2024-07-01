import React from "react";
import { ProfileData } from "./data";
import { designTextType } from "../../constants/types";
export declare const Profile: ({ bgcolor, bggradient, data, className, noticeDesign, footersbjDesign, infoTitleDesign, infoDescDesign, }: {
    bgcolor?: string;
    bggradient?: string;
    data?: Partial<ProfileData>;
    className?: string;
    noticeDesign?: designTextType;
    footersbjDesign?: designTextType;
    infoTitleDesign?: designTextType;
    infoDescDesign?: designTextType;
}) => React.JSX.Element;
