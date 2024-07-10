import { IMG_PATH } from "../../constants/path";

export interface Item {
  id: string;
  type?: string;
  desc?: string;
  title?: string;
  github?: string;
  site?: string;
  thumb?: string;
  speed?: number;
  alt?: string;
}

export const sbj: string = `Hello✋🏻\nMy Portfolio`;

export const data: Item[] = [
  {
    id: "01",
    type: "react",
    desc: "React 사이트입니다.",
    title: "React",
    github: "/",
    site: "/",
    thumb: `${IMG_PATH}/mainReact__img01.jpg`,
    speed: 4,
  },
  {
    id: "02",
    type: "vue",
    desc: "vue 사이트입니다.",
    title: "Vue",
    github: "/",
    thumb: `${IMG_PATH}/mainReact__img02.jpg`,
    speed: 1,
  },
  {
    id: "03",
    type: "php",
    desc: "php 사이트입니다.",
    title: "php",
    site: "/",
    thumb: `${IMG_PATH}/mainReact__img03.jpg`,
    speed: 2,
  },
];
