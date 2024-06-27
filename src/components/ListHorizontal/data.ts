import { IMG_PATH } from "../../constants/path";

export interface Item {
  id: string;
  title?: string;
  desc?: string;
  site?: string;
  thumb: string;
  alt?: string;
}

export const sbj: string = `Hello,
My Portfolio`;

export const data: Item[] = [
  {
    id: "01",
    title: "title1",
    desc: "description2",
    site: "/",
    thumb: `${IMG_PATH}/mainSite__thumb01.jpg`,
    alt: "title01",
  },
  {
    id: "02",
    title: "title2",
    desc: "description2",
    thumb: `${IMG_PATH}/mainSite__thumb02.jpg`,
  },
];
