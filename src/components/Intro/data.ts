export interface Title {
  main?: string;
  highlight?: string;
}

export interface Item {
  id: string;
  title?: string;
  icon?: string;
  thumb?: string;
}

export const sbjdata: Title = {
  main: "Plan and\norgnize\n",
  highlight: "anything",
};

export const data: Item[] = [
  {
    id: "01",
    title: "Blog",
  },
  {
    id: "02",
    title: "JavaScript &\n CSS Animation",
  },
  {
    id: "03",
    title: `Work &\n Projects`,
  },
  {
    id: "04",
    title: `Website &\n Portfolio`,
  },
  {
    id: "05",
    title: "contact me",
  },
];
