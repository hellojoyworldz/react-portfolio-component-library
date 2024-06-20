import React from "react";
import { GoToLink } from "../GoToLink.jsx";
import styles from "./ListLego.style.module.scss";
import { IMG_PATH } from "../../constants/path";

const sbjdata = {
  sbj: "Hello",
  highlight: "My Portfolio",
};

const data = [
  {
    id: "01",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img01.jpg`,
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
export const ListLego = ({
  bgcolor = "#f6f3ff",
  title = sbjdata,
  items = data,
  className,
}) => {
  return (
    <section
      className={`${styles["listLego"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <h2 className={styles["titleType5"]}>
          {title.sbj ? title.sbj : null}

          {title.highlight ? (
            <>
              <br />
              <span className={styles["highlight"]}>
                {title.highlight}
                <img src={`${IMG_PATH}/icon__tit03.png`} alt="" />
              </span>
            </>
          ) : null}
        </h2>
      ) : null}

      {items ? (
        <div className={styles["listType5"]}>
          <ul className={styles["list"]}>
            {items.map((item) => (
              <li
                className={`${styles["list__item"]} ${styles[`item${item.id}`]}`}
                key={item.id}
              >
                {item.site && (
                  <GoToLink
                    to={item.site}
                    className={styles["list__link"]}
                  ></GoToLink>
                )}
                {item.title && (
                  <strong className={styles["list__tit"]}>{item.title}</strong>
                )}
                {item.type && (
                  <span className={styles["list__cate"]}>{item.type}</span>
                )}
                <span className={styles["list__thumb"]}>
                  <img
                    className={styles["list__img"]}
                    src={item.thumb}
                    alt=""
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
