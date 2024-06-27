import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListHorizontal.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { data, sbj, Item } from "./data";

export const ListHorizontal = ({
  bgcolor = "#310591",
  title = sbj,
  items = data,
  className,
}: {
  bgcolor?: string;
  title?: string;
  items?: Item[];
  className?: string;
}) => {
  return (
    <div
      className={`${styles["listType3"]} ${styles["horizontal-scroll"]} ${className || ""}`}
      data-bgcolor={bgcolor}
      data-horizontal-scroll
    >
      <div className={styles["pin-wrap"]} data-pin-wrap>
        {title ? (
          <div className={styles["listType3__header"]}>
            <h2 className={styles["titleType3"]}>
              {title}
              <span className={styles["titleType3__img"]}>
                <img src={`${IMG_PATH}/mainSite__tit.png`} alt="" />
              </span>
            </h2>

            <div className={styles["listType3__emoji"]}>
              <div className={styles["listType3__emojiBg"]}>
                <span>
                  <img src={`${IMG_PATH}/mainSite__emojiBg.png`} alt="" />
                </span>
              </div>

              <div className={styles["listType3__emojiCircle"]}>
                <span
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                >
                  <img src={`${IMG_PATH}/mainSite__emojiImg01.png`} alt="" />
                </span>
                <span
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-direction="vertical"
                >
                  <img src={`${IMG_PATH}/mainSite__emojiImg02.png`} alt="" />
                </span>
                <span
                  data-scroll
                  data-scroll-speed="4"
                  data-scroll-direction="vertical"
                >
                  <img src={`${IMG_PATH}/mainSite__emojiImg03.png`} alt="" />
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {items
          ? items.map((item) => (
              <div className={styles["list__item"]} key={item.id}>
                <div className={styles["list__info"]}>
                  {item.id ? (
                    <span className={styles["list__num"]}>{item.id}</span>
                  ) : null}
                  {item.title ? (
                    <strong className={styles["list__tit"]}>
                      {item.title}
                    </strong>
                  ) : null}
                  {item.desc ? (
                    <p className={styles["list__desc"]}>{item.desc}</p>
                  ) : null}
                </div>

                {item.thumb ? (
                  <span className={styles["list__thumb"]}>
                    {item.site ? (
                      <GoToLink to={item.site}>
                        <img
                          className={styles["list__img"]}
                          src={item.thumb}
                          alt={
                            item.alt ? item.alt : item.title ? item.title : ""
                          }
                        />
                      </GoToLink>
                    ) : (
                      <img
                        className={styles["list__img"]}
                        src={item.thumb}
                        alt={item.alt ? item.alt : item.title ? item.title : ""}
                      />
                    )}
                  </span>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
