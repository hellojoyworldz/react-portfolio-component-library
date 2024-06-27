import React from "react";
import styles from "./Intro.style.module.scss";
import { sbjdata, data, Title, Item } from "./data";

export const Intro = ({
  bgcolor = "#f5feff",
  title = sbjdata,
  items = data,
  className,
}: {
  bgcolor?: string;
  title?: Title;
  items?: Item[];
  className?: string;
}) => {
  return (
    <section
      className={`${styles["mainIntro"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <h2 className={styles["TitleType1"]}>
          {title.main}
          {title.highlight && (
            <span className={styles["highlight"]}>{title.highlight}</span>
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
                  <span
                    className={styles["list__icon"]}
                    style={
                      item.icon ? { backgroundImage: `url(${item.icon})` } : {}
                    }
                  ></span>
                  <span
                    className={styles["list__thumb"]}
                    style={
                      item.thumb
                        ? { backgroundImage: `url(${item.thumb})` }
                        : {}
                    }
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
};
