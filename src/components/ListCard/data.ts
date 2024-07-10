import { IMG_PATH } from "../../constants/path";

export interface Title {
  main?: string;
  highlight?: string;
}

export interface Item {
  id: string;
  site?: string;
  thumb?: string;
  title?: string;
  desc?: string;
}

export const sbjdata: Title = {
  main: "Hello,",
  highlight: "My Portfolio",
};

export const data: Item[] = [
  {
    id: "01",
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/marquee",
    thumb: `${IMG_PATH}/mainCss__marquee.gif`,
    title: "title",
    desc: "desc",
  },
];
