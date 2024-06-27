export interface Title {
    main: string;
    highlight: string;
}
export interface Item {
    id: string;
    title?: string;
    type?: string;
    site?: string;
    thumb?: string;
    alt?: string;
}
export declare const sbjdata: Title;
export declare const data: Item[];
