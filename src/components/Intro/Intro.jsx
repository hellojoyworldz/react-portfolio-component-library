import React from "react";
import styles from "./Intro.style.module.scss";
import { IMG_PATH } from "../../constants/path";

const sbjdata = {
  sbj: "Plan and\norgnize\n",
  highlight: "anything",
};

const data = [
  {
    id: "01",
    title: "Blog",
    icon: `${IMG_PATH}/mainCate__itemIcon01.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg01.jpg`,
    alt: "Blog",
  },
  {
    id: "02",
    title: "JavaScript &\n CSS Animation",
    icon: `${IMG_PATH}/mainCate__itemIcon02.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg02.jpg`,
    alt: "JavaScript &\n CSS Animation",
  },
  {
    id: "03",
    title: `Work &\n Projects`,
    icon: `${IMG_PATH}/mainCate__itemIcon03.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg03.jpg`,
  },
  {
    id: "04",
    title: `Website &\n Portfolio`,
    icon: `${IMG_PATH}/mainCate__itemIcon04.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg04.jpg`,
  },
  {
    id: "05",
    title: "contact me",
    icon: `${IMG_PATH}/mainCate__itemIcon05.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg05.jpg`,
  },
];

export const Intro = ({
  bgcolor = "#f5feff",
  title = sbjdata,
  items = data,
}) => {
  return (
    <section className={styles["mainCate"]} data-bgcolor={bgcolor}>
      {title ? (
        <h2 className={styles["TitleType1"]}>
          {title.sbj}
          {title.highlight && (
            <span className="highlight">{title.highlight}</span>
          )}
        </h2>
      ) : null}
      {items ? (
        <div className={styles["listType1"]}>
          <div
            className={styles["listType1__list"]}
            data-scroll
            data-scroll-speed="8"
            data-scroll-direction="horizontal"
          >
            <ul className={styles["list"]}>
              {items.map((item) => (
                <li key={item.id} className={styles["list__item"]}>
                  {item.title ? (
                    <strong className={styles["list__tit"]}>
                      {item.title}
                    </strong>
                  ) : null}
                  {item.icon ? (
                    <span className={styles["list__icon"]}>
                      <img src={item.icon} alt="" />
                    </span>
                  ) : null}
                  {item.thumb ? (
                    <span className={styles["list__thumb"]}>
                      <img
                        src={item.thumb}
                        alt={item.alt ? item.alt : item.title ? item.title : ""}
                      />
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
};
