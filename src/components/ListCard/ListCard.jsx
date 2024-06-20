import React from "react";
import { GoToLink } from "../GoToLink.jsx";
import styles from "./ListCard.style.module.scss";
import { IMG_PATH } from "../../constants/path";

const sbjdata = {
  sbj: "Hello,",
  highlight: "My Portfolio",
};

const data = [
  {
    id: "01",
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/marquee",
    thumb: `${IMG_PATH}/mainCss__marquee.gif`,
    title: "title",
    desc: "desc",
  },
];

export const ListCard = ({
  bgcolor = "#f5f5f5",
  title = sbjdata,
  items = data,
}) => {
  return (
    <section className={styles["listCard"]} data-bgcolor={bgcolor}>
      {title ? (
        <h2 className={styles["titleType4"]}>
          {title.sbj}
          <img src={`${IMG_PATH}/icon__tit02.png`} alt="" />
          <br />
          <span className={styles["highlight"]}>{title.highlight}</span>
        </h2>
      ) : null}

      {items ? (
        <div className={styles["listType4"]}>
          <ul className={styles["list"]}>
            {items.map((item) => (
              <li className={styles["list__item"]} key={item.id}>
                {item.site ? (
                  <GoToLink to={item.site} className={styles["list__link"]} />
                ) : null}
                {item.thumb ? (
                  <div className={styles["list__thumb"]}>
                    <span
                      className={styles["list__thumbGif"]}
                      style={{
                        backgroundImage: `url(${item.thumb})`,
                      }}
                    ></span>
                  </div>
                ) : null}

                <div className={styles["list__info"]}>
                  {item.title ? (
                    <strong className={styles["list__tit"]}>
                      {item.title}
                    </strong>
                  ) : null}
                  {item.desc ? (
                    <p className={styles["list__desc"]}>{item.desc}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
