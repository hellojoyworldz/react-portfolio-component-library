import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListNormal.style.module.scss";
import { data, Item, sbj } from "./data";
import { ComponentTitle } from "../ComponentTitle/ComponentTitle";
import { ComponentText } from "../ComponentText/ComponentText";
import {
  designBadgeType,
  designTextType,
  designTitleType,
} from "../../constants/types";
import { ComponentBadge } from "../ComponentBadge/ComponentBadge";
import clsx from "clsx";

export const ListNormal = ({
  bgcolor = "#c2aeec",
  title = sbj,
  items = data,
  className,
  titleDesign,
  itemTypeDesign,
  itemTitleDesign,
  itemDescDesign,
  itemBadgeDesign,
}: {
  bgcolor?: string;
  title?: string;
  items?: Item[];
  className?: string;
  titleDesign?: designTitleType;
  itemTypeDesign?: designTextType;
  itemTitleDesign?: designTitleType;
  itemDescDesign?: designTextType;
  itemBadgeDesign?: designBadgeType;
}) => {
  return (
    <section
      className={clsx(styles.listNormal, className)}
      data-bgcolor={bgcolor}
    >
      {title ? (
        <ComponentTitle
          className={clsx(styles.titleType2)}
          design={{ color: "deepPurple", ...titleDesign }}
        >
          {title}
        </ComponentTitle>
      ) : null}
      {items ? (
        <div className={clsx(styles.listType2)}>
          <ul className={clsx(styles.list)}>
            {items.map((item) => (
              <li
                key={item.id}
                className={clsx(styles.list__item)}
                data-scroll
                data-scroll-speed={item.speed || 2}
                ata-scroll-direction="vertical"
              >
                <div className={clsx(styles.list__info)}>
                  {item.type ? (
                    <ComponentText
                      as={"span"}
                      className={clsx(
                        styles.list__cate,
                        styles[`cate--${item.type}`],
                        `cate--${item.type}`,
                      )}
                      design={{ fontSize: "xs", ...itemTypeDesign }}
                    >
                      {item.type}
                    </ComponentText>
                  ) : null}
                  {item.title ? (
                    <ComponentTitle
                      as={"h3"}
                      className={clsx(styles.list__tit)}
                      design={{
                        fontFamily: "montserrat",
                        fontSize: "lg",
                        ...itemTitleDesign,
                      }}
                    >
                      {item.title}
                    </ComponentTitle>
                  ) : null}
                  {item.desc ? (
                    <ComponentText design={itemDescDesign}>
                      {item.desc}
                    </ComponentText>
                  ) : null}
                  <div className={clsx(styles.list__type)}>
                    {item.github ? (
                      <ComponentBadge
                        to={item.github}
                        className={clsx(styles.list__typeLink)}
                        design={{
                          hoverBadgeColor: "deepPurple",
                          hoverColor: "white",
                          ...itemBadgeDesign,
                        }}
                      >
                        Github
                      </ComponentBadge>
                    ) : null}
                    {item.site ? (
                      <ComponentBadge
                        to={item.site}
                        className={clsx(styles.list__typeLink)}
                        design={{
                          hoverBadgeColor: "deepPurple",
                          hoverColor: "white",
                          ...itemBadgeDesign,
                        }}
                      >
                        Site
                      </ComponentBadge>
                    ) : null}
                  </div>
                </div>
                {item.thumb ? (
                  <div className={clsx(styles.list__thumb)}>
                    <img
                      data-speed="auto"
                      src={item.thumb}
                      alt={item.alt ? item.alt : item.title ? item.title : ""}
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
