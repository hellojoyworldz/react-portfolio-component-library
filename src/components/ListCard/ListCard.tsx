import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListCard.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { data, Item, sbjdata, Title } from "./data";
import { ComponentTitle } from "../ComponentTitle/ComponentTitle";
import { designTextType, designTitleType } from "../../constants/types";
import { ComponentText } from "../ComponentText/ComponentText";

export const ListCard = ({
  bgcolor = "#f5f5f5",
  title = sbjdata,
  items = data,
  className,
  titleDesign,
  itemTitleDesign,
  itemDescDesign,
}: {
  bgcolor?: string;
  title?: Title;
  items?: Item[];
  className?: string;
  titleDesign?: designTitleType;
  itemTitleDesign?: designTitleType;
  itemDescDesign?: designTextType;
}) => {
  return (
    <section
      className={`${styles["listCard"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <ComponentTitle
          className={styles["titleType4"]}
          design={{ textAlign: "center", ...titleDesign }}
        >
          {title.main}
          <span className={styles["highlight"]}>
            {title.highlight}
            <img src={`${IMG_PATH}/icon__tit02.png`} alt="" />
          </span>
        </ComponentTitle>
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
                    <ComponentTitle
                      as={"h3"}
                      className={styles["list__tit"]}
                      design={{
                        fontFamily: "montserrat",
                        fontSize: "lg",
                        lineHeight: "tight",
                        ...itemTitleDesign,
                      }}
                    >
                      {item.title}
                    </ComponentTitle>
                  ) : null}
                  {item.desc ? (
                    <ComponentText
                      as={"p"}
                      className={styles["list__desc"]}
                      design={{ fontSize: "xs", ...itemDescDesign }}
                    >
                      {item.desc}
                    </ComponentText>
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
