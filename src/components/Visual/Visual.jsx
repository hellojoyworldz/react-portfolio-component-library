import React from "react";
import styles from "./Visual.style.module.scss";
import { IMG_PATH } from "../../constants/path";
const sbjdata = {
  main: "MY\nPORTFOLIO",
  badge: "HELLO, WORLD!",
  move: "WELCOME MY PORTFOLIO",
};
export const Visual = ({ bgcolor = "#fff", title = sbjdata, className }) => {
  return (
    <section
      className={`${styles["visual"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      <div className={styles["visual__tit"]}>
        <h2>{title.main}</h2>
        <span className={styles["visual__tit--move"]}>{title.badge}</span>
      </div>

      <div className={styles["visual__sbj"]}>
        <div
          className={styles["visual__sbj--move"]}
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        >
          <span>{title.move}</span>
          <span>{title.move}</span>
          <span>{title.move}</span>
          <span>{title.move}</span>
        </div>
      </div>

      <div className={styles["visual__emoji"]}>
        <div className={styles["visual__emojiItem"]}>
          <span
            className={styles["item01"]}
            data-scroll
            data-scroll-speed="3"
            data-scroll-direction="vertical"
          >
            <img src={`${IMG_PATH}/visual__emojiImg01.png`} alt="" />
          </span>
          <span
            className={styles["item02"]}
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="vertical"
          >
            <img src={`${IMG_PATH}/visual__emojiImg02.png`} alt="" />
          </span>
          <span
            className={styles["item03"]}
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="vertical"
          >
            <img src={`${IMG_PATH}/visual__emojiImg03.png`} alt="" />
          </span>
        </div>
        <div className={styles["visual__emojiBg"]}>
          <span>
            <img src={`${IMG_PATH}/visual__emojiBg.png`} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};
