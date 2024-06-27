import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListLego.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { sbjdata, data, Title, Item } from "./data";

export const ListLego = ({
  bgcolor = "#f6f3ff",
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
      className={`${styles["listLego"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <h2 className={styles["titleType5"]}>
          {title.main ? title.main : null}
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
                className={`${styles["list__item"]} ${
                  styles[`item${item.id}`]
                }`}
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
                <span
                  className={styles["list__thumb"]}
                  style={{
                    backgroundImage: item.thumb,
                  }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
