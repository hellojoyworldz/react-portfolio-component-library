import React from "react";
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
      className={`${styles["mainIntro"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <ComponentTitle
          className={styles["TitleType1"]}
          design={{
            textAlign: "center",
            highlightColor: "cyan",
            ...titleDesign,
          }}
        >
          {title.main}
          {title.highlight && (
            <span className="highlight">{title.highlight}</span>
          )}
        </ComponentTitle>
      ) : null}
      {items ? (
        <div className={styles["listType1"]}>
          <div
            className={styles["listType1__list"]}
            data-scroll
            data-scroll-speed="8"
            data-scroll-direction="horizontal"
          >
            <ul className={`${styles["list"]} list`}>
              {items.map((item) => (
                <li key={item.id} className={`${styles["list__item"]} item`}>
                  {item.title ? (
                    <ComponentTitle
                      as={"h3"}
                      className={styles["list__tit"]}
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
                    className={`${styles["list__icon"]} icon`}
                    style={
                      item.icon ? { backgroundImage: `url(${item.icon})` } : {}
                    }
                  ></span>
                  <span
                    className={`${styles["list__thumb"]} thumb`}
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
