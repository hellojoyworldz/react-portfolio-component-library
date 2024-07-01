import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListHorizontal.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { data, sbj, Item } from "./data";
import { ComponentTitle } from "../ComponentTitle/ComponentTitle";
import {
  designTitleType,
  designTextType,
  designBadgeType,
} from "../../constants/types";
import { ComponentText } from "../ComponentText/ComponentText";
import { ComponentBadge } from "../ComponentBadge/ComponentBadge";

export const ListHorizontal = ({
  bgcolor = "#310591",
  title = sbj,
  items = data,
  className,
  titleDesign,
  itemIdDesign,
  itemTitleDesign,
  itemDescDesign,
  itemSiteDesign,
}: {
  bgcolor?: string;
  title?: string;
  items?: Item[];
  className?: string;
  titleDesign?: designTitleType;
  itemIdDesign?: designTextType;
  itemTitleDesign?: designTitleType;
  itemDescDesign?: designTextType;
  itemSiteDesign?: designBadgeType;
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
            <ComponentTitle
              className={styles["titleType3"]}
              design={{ color: "white", textAlign: "right", ...titleDesign }}
            >
              {title}
              <span className={styles["titleType3__img"]}>
                <img src={`${IMG_PATH}/mainSite__tit.png`} alt="" />
              </span>
            </ComponentTitle>

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
                    <ComponentText
                      as={"span"}
                      className={styles["list__num"]}
                      design={{
                        fontStyle: "italic",
                        fontSize: "xl",
                        fontWeight: "bold",
                        color: "white",
                        opacity: "semiTransparent",
                        ...itemIdDesign,
                      }}
                    >
                      {item.id}
                    </ComponentText>
                  ) : null}
                  {item.title ? (
                    <ComponentTitle
                      as={"h3"}
                      className={styles["list__tit"]}
                      design={{
                        fontFamily: "montserrat",
                        fontStyle: "italic",
                        fontSize: "xl",
                        color: "white",
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
                      design={{
                        color: "white",
                        ...itemDescDesign,
                      }}
                    >
                      {item.desc}
                    </ComponentText>
                  ) : null}
                  {item.site ? (
                    <div className={styles["list__site"]}>
                      <ComponentBadge
                        to={item.site}
                        design={{
                          color: "white",
                          hoverColor: "deepPurple",
                          hoverBadgeColor: "white",
                          ...itemSiteDesign,
                        }}
                      >
                        site
                      </ComponentBadge>
                    </div>
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
