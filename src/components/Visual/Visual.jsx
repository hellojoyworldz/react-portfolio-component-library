import React from "react";
import styles from "./Visual.style.module.scss";
import { IMG_PATH } from "../../constants/path";
const sbjdata = {
  title: "MY\nPORTFOLIO",
  highlight: "HELLO, WORLD!",
  subtitle: "WELCOME MY PORTFOLIO",
};
export const Visual = ({ bgcolor = "#fff", sbj = sbjdata }) => {
  return (
    <section className={styles["visual"]} data-bgcolor={bgcolor}>
      <div className={styles["visual__tit"]}>
        <h2>{sbj.title}</h2>
        <span className={styles["visual__tit--move"]}>{sbj.highlight}</span>
      </div>

      <div className={styles["visual__sbj"]}>
        <div
          className={styles["visual__sbj--move"]}
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        >
          <span>{sbj.subtitle}</span>
          <span>{sbj.subtitle}</span>
          <span>{sbj.subtitle}</span>
          <span>{sbj.subtitle}</span>
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
