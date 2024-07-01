import React, { ReactNode } from "react";
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
      <header
        id={styles["header"]}
        className={`${styles["header"]} ${className || ""}`}
      >
        {children ? (
          children
        ) : (
          <ComponentTitle
            as={"h1"}
            className={styles["headerLogo"]}
            design={{
              fontFamily: "montserrat",
              fontSize: "sm",
              textAlign: "left",
              lineHeight: "tight",
              ...titleDesign,
            }}
          >
            <div className={styles["headerLogo__link"]}>
              <span className={styles["headerLogo__icon"]}>
                {logo ? (
                  <img src={logo} alt={alt} />
                ) : (
                  <span className={styles["mouth"]}></span>
                )}
              </span>
              {title ? (
                <span className={styles["headerLogo__text"]}>{title}</span>
              ) : null}
            </div>
          </ComponentTitle>
        )}
      </header>
    </>
  );
};
