import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Header.style.module.scss";
import { ComponentTitle } from "../ComponentTitle/ComponentTitle";
import { designTitleType } from "../../constants/types";

export const Header = ({
  title,
  logo,
  alt = "logo",
  className,
  children,
  titleDesign,
}: {
  title?: string;
  logo?: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
  titleDesign?: designTitleType;
}) => {
  return (
    <>
      <header id={"header"} className={clsx(styles.header, className)}>
        {children ? (
          children
        ) : (
          <ComponentTitle
            as={"h1"}
            className={clsx(styles.headerLogo)}
            design={{
              fontFamily: "montserrat",
              fontSize: "sm",
              textAlign: "left",
              lineHeight: "tight",
              ...titleDesign,
            }}
          >
            <div className={clsx(styles.headerLogo__link)}>
              <span className={clsx(styles.headerLogo__icon)}>
                {logo ? (
                  <img src={logo} alt={alt} />
                ) : (
                  <span className={clsx(styles.mouth)}></span>
                )}
              </span>
              {title ? (
                <span className={clsx(styles.headerLogo__text)}>{title}</span>
              ) : null}
            </div>
          </ComponentTitle>
        )}
      </header>
    </>
  );
};
