import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListLego.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { sbjdata, data, Title, Item } from "./data";
import { ComponentTitle } from "../ComponentTitle/ComponentTitle";
import { designTitleType, designTextType } from "../../constants/types";
import { ComponentText } from "../ComponentText/ComponentText";
import clsx from "clsx";

export const ListLego = ({
  bgcolor = "#f6f3ff",
  title = sbjdata,
  items = data,
  className,
  titleDesign,
  itemTitleDesign,
  itemTypeDesign,
}: {
  bgcolor?: string;
  title?: Title;
  items?: Item[];
  className?: string;
  titleDesign?: designTitleType;
  itemTitleDesign?: designTitleType;
  itemTypeDesign?: designTextType;
}) => {
  return (
    <section
      className={clsx(styles.listLego, className)}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <ComponentTitle
          className={clsx(styles.titleType5)}
          design={{ textAlign: "center", ...titleDesign }}
        >
          {title.main ? title.main : null}
          {title.highlight ? (
            <>
              <span className={clsx(styles.highlight)}>
                {title.highlight}
                <img src={`${IMG_PATH}/icon__tit03.png`} alt="" />
              </span>
            </>
          ) : null}
        </ComponentTitle>
      ) : null}

      {items ? (
        <div className={clsx(styles.listType5)}>
          <ul className={clsx(styles.list)}>
            {items.map((item) => (
              <li
                className={clsx(styles.list__item, styles[`item${item.id}`])}
                key={item.id}
              >
                {item.site && (
                  <GoToLink
                    to={item.site}
                    className={clsx(styles.list__link)}
                  ></GoToLink>
                )}
                {item.title && (
                  <ComponentTitle
                    as={"h3"}
                    className={clsx(styles.list__tit)}
                    design={{
                      fontFamily: "montserrat",
                      fontSize: "lg",
                      color: "white",
                      ...itemTitleDesign,
                    }}
                  >
                    {item.title}
                  </ComponentTitle>
                )}
                {item.type && (
                  <ComponentText
                    as={"span"}
                    className={clsx(styles.list__cate)}
                    design={{
                      color: "white",
                      lineHeight: "tight",
                      ...itemTypeDesign,
                    }}
                  >
                    {item.type}
                  </ComponentText>
                )}
                <span
                  className={clsx(styles.list__thumb)}
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
