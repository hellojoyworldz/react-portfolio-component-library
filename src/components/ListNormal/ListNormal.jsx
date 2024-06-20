import React from "react";
import { GoToLink } from "../GoToLink.jsx";
import styles from "./ListNormal.style.module.scss";
import { IMG_PATH } from "../../constants/path";

const sbj = `Hello✋🏻\nMy Portfolio`;
const data = [
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
export const ListNormal = ({
  bgcolor = "#c2aeec",
  title = sbj,
  items = data,
}) => {
  return (
    <section className={styles["listNormal"]} data-bgcolor={bgcolor}>
      {title ? <h2 className={styles["titleType2"]}>{title}</h2> : null}
      {items ? (
        <div className={styles["listType2"]}>
          <ul className={styles["list"]}>
            {items.map((item) => (
              <li
                key={item.id}
                className={styles["list__item"]}
                data-scroll
                data-scroll-speed={item.speed}
                ata-scroll-direction="vertical"
              >
                <div className={styles["list__info"]}>
                  {item.type ? (
                    <span
                      className={`${styles[`cate--${item.type}`]} ${styles["list__cate"]} cate--${item.type}`}
                    >
                      {item.type}
                    </span>
                  ) : null}
                  {item.title ? (
                    <strong className={styles["list__tit"]}>
                      {item.title}
                    </strong>
                  ) : null}
                  {item.desc ? (
                    <div className={styles["list__desc"]}>{item.desc}</div>
                  ) : null}
                  <div className={styles["list__type"]}>
                    {item.github ? (
                      <GoToLink
                        to={item.github}
                        className={styles["list__typeLink"]}
                      >
                        Github
                      </GoToLink>
                    ) : null}
                    {item.site ? (
                      <GoToLink
                        to={item.site}
                        className={styles["list__typeLink"]}
                      >
                        Site
                      </GoToLink>
                    ) : null}
                  </div>
                </div>
                {item.thumb ? (
                  <div className={styles["list__thumb"]}>
                    <img data-speed="auto" src={item.thumb} alt="" />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
