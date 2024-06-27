import React, { ReactNode } from "react";
import styles from "./Header.style.module.scss";

export const Header = ({
  title,
  logo,
  alt = "logo",
  className,
  children,
}: {
  title?: string;
  logo?: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
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
          <h1 className={styles["headerLogo"]}>
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
          </h1>
        )}
      </header>
    </>
  );
};
