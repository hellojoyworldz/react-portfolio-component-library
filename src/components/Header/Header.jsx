import React from "react";
import styles from "./Header.style.module.scss";

export const Header = ({ title }) => {
  return (
    <>
      <header id={styles["header"]} className={styles["header"]}>
        <h1 className={styles["headerLogo"]}>
          <div className={styles["headerLogo__link"]}>
            <span className={styles["headerLogo__icon"]}>
              <span className={styles["mouth"]}></span>
            </span>
            {title ? (
              <span className={styles["headerLogo__text"]}>{title}</span>
            ) : null}
          </div>
        </h1>
      </header>
    </>
  );
};
