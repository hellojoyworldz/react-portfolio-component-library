import React from "react";
interface VisualProps {
    bgcolor?: string;
    title?: {
        main: string;
        badge: string;
        move: string;
    };
    className?: string;
}
export declare const Visual: React.FC<VisualProps>;
export {};
