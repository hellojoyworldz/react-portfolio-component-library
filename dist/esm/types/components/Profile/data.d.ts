export interface ProfileData {
    textpath?: string;
    footersbj?: string;
    info?: {
        name?: string;
        email?: string;
        phone?: string;
        portfolio?: string;
        github?: string;
        blog?: string;
    };
    photo?: string;
    notice?: string;
}
export declare const profileData: ProfileData;
export declare const defaultTextPath: string;
export declare const defaultFootersbj: string;
