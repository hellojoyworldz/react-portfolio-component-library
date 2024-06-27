import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListCard.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { data, Item, sbjdata, Title } from "./data";

export const ListCard = ({
  bgcolor = "#f5f5f5",
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
      className={`${styles["listCard"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <h2 className={styles["titleType4"]}>
          {title.main}
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
