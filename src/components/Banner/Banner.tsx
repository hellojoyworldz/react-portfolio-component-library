import React from "react";
import styles from "./Banner.style.module.scss";
import { IMG_PATH } from "../../constants/path";

export const Banner = ({
  bgcolor = "#fde445",
  className,
}: {
  bgcolor?: string;
  className?: string;
}) => {
  return (
    <section
      className={`${styles["mainBanner"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      <div className={styles["mainBanner__bg"]}>
        <img src={`${IMG_PATH}/mainBanner__bg.png`} alt="" />
      </div>
      <div className={styles["mainBanner__emoji"]}>
        <span
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji01.png`} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji02.png`} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji03.png`} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji04.png`} alt="" />
        </span>
      </div>
    </section>
  );
};
