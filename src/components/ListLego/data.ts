import { IMG_PATH } from "../../constants/path";

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

export const sbjdata: Title = {
  main: "Hello",
  highlight: "My Portfolio",
};

export const data: Item[] = [
  {
    id: "01",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img01.jpg`,
    alt: "title",
  },
  {
    id: "02",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img02.jpg`,
  },
  {
    id: "03",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img05.jpg`,
  },
  {
    id: "04",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img06.jpg`,
  },
  {
    id: "05",
    thumb: `${IMG_PATH}/mainCode__img07.jpg`,
  },
  {
    id: "06",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img09.jpg`,
  },
  {
    id: "07",
    title: "title",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img10.jpg`,
  },
];
