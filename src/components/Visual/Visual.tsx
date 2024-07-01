import React from "react";
import { ComponentTitle } from "../ComponentTitle/ComponentTitle";
import { ComponentBadge } from "../ComponentBadge/ComponentBadge";
import styles from "./Visual.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { sbjdata } from "./data";
import { designBadgeType, designTitleType } from "../../constants/types";

export const Visual = ({
  bgcolor = "#fff",
  title = sbjdata,
  className,
  mainTitleDesign,
  moveTitleDesign,
  badgeTitleDesign,
}: {
  bgcolor?: string;
  title?: {
    main: string;
    badge: string;
    move: string;
  };
  className?: string;
  mainTitleDesign?: designTitleType;
  moveTitleDesign?: designTitleType;
  badgeTitleDesign?: designBadgeType;
}) => {
  return (
    <section
      className={`${styles["visual"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      <div className={styles["visual__tit"]}>
        <ComponentTitle
          className={styles["visual__title--main"]}
          design={{
            fontFamily: "montserrat",
            fontSize: "lg",
            ...mainTitleDesign,
          }}
        >
          {title.main}
        </ComponentTitle>
        <ComponentBadge
          className={styles["visual__tit--badge"]}
          design={{
            color: "white",
            badgeColor: "green",
            ...badgeTitleDesign,
          }}
        >
          {title.badge}
        </ComponentBadge>
      </div>

      <ComponentTitle
        as={"h3"}
        componentName={"visualMove"}
        className={styles["visual__sbj"]}
        design={{
          fontFamily: "montserrat",
          whiteSpace: "nowrap",
          ...moveTitleDesign,
        }}
      >
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
      </ComponentTitle>

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
