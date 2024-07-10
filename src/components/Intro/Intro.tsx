import React from "react";
import clsx from "clsx";
import styles from "./Intro.style.module.scss";
import { sbjdata, data, TitleType, ItemType } from "./data";
import { ComponentTitle } from "../ComponentTitle/ComponentTitle";
import { ComponentText } from "../ComponentText/ComponentText";
import { designTitleType, designTextType } from "../../constants/types";

export const Intro = ({
  bgcolor = "#f5feff",
  title = sbjdata,
  items = data,
  className,
  titleDesign,
  itemTitleDesign,
}: {
  bgcolor?: string;
  title?: TitleType;
  items?: ItemType[];
  className?: string;
  titleDesign?: designTitleType;
  itemTitleDesign?: designTitleType;
}) => {
  return (
    <section
      className={clsx(styles.mainIntro, className)}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <ComponentTitle
          className={clsx(styles.TitleType1)}
          design={{
            textAlign: "center",
            highlightColor: "cyan",
            ...titleDesign,
          }}
        >
          {title.main}
          {title.highlight && (
            <span className={clsx("highlight")}>{title.highlight}</span>
          )}
        </ComponentTitle>
      ) : null}
      {items ? (
        <div className={clsx(styles.listType1)}>
          <div
            data-scroll
            data-scroll-speed="8"
            data-scroll-direction="horizontal"
          >
            <ul className={clsx(styles.list, "list")}>
              {items.map((item) => (
                <li key={item.id} className={clsx(styles.list__item, "item")}>
                  {item.title ? (
                    <ComponentTitle
                      as={"h3"}
                      className={clsx(styles.list__tit)}
                      design={{
                        fontSize: "md",
                        fontWeight: "bold",
                        whiteSpace: "breakSpace",
                        textAlign: "center",
                        ...itemTitleDesign,
                      }}
                    >
                      {item.title}
                    </ComponentTitle>
                  ) : null}
                  <span
                    className={clsx(styles.list__icon, "icon")}
                    style={
                      item.icon ? { backgroundImage: `url(${item.icon})` } : {}
                    }
                  ></span>
                  <span
                    className={clsx(styles.list__thumb, "thumb")}
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
