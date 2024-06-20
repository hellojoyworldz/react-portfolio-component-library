import React from "react";
import { GoToLink } from "../GoToLink.jsx";
import styles from "./Profile.style.module.scss";

const profileData = {
  textpath:
    "Welcome My Portfolio Site · Hello My World · Welcome My Portfolio Site · Hello My World · Welcome My Portfolio Site · Hello My World · Welcome My Portfolio Site · Hello My World · Welcome My Portfolio Site · Hello My World · Welcome My Portfolio Site · Hello My World ·",
  footersbj:
    "IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · ",
  info: {
    name: "My Portfolio",
  },
};

export const Profile = ({
  bgcolor = "#ff7896",
  bggradient = "#f06b67",
  data = profileData,
  className,
}) => {
  return (
    <>
      <section
        className={`${styles["mainProfile"]} ${className || ""}`}
        data-bgcolor={bgcolor}
      >
        <svg
          className={styles["mainProfile__svg"]}
          width="1440"
          height="539"
          viewBox="0 0 1440 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-17.4829 15.9294C297.2 -24.1211 339.25 187.141 393.211 351.93C447.171 516.719 617.113 575.553 790.539 486.617C963.965 397.68 1095.42 189.366 1488.7 319.17"
            stroke="#FF7896"
            strokeWidth="50"
            id="text-path"
          ></path>
          <text dy="1.5%" y="15px">
            <textPath
              xlinkHref="#text-path"
              fill="currentColor"
              startOffset="-197.5816"
            >
              {data.textpath}
              <animate
                attributeName="startOffset"
                begint="0"
                dur="20s"
                from="0"
                to="-1024"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
        {data.photo ? (
          <span className={styles["mainProfile__thumb"]}>
            <img src={data.photo} alt="" />
          </span>
        ) : null}

        <footer
          className={styles["footer"]}
          data-bgcolor={bgcolor}
          style={{
            background: `linear-gradient(180deg, ${bgcolor}, ${bggradient})`,
          }}
        >
          <h2 className="screenHide">CONTACT ME</h2>
          <address className={styles["footer__info"]}>
            {data.footerdesc && (
              <div className={styles["footer__desc"]}>{data.footerdesc}</div>
            )}
            <ul className={styles["list"]}>
              {data.info.name && (
                <li className={styles["list__item"]}>
                  <strong className={styles["list__tit"]}>Name</strong>
                  {data.info.name}
                </li>
              )}
              {data.info.email && (
                <li className={styles["list__item"]}>
                  <strong className={styles["list__tit"]}>E-mail</strong>
                  <a href={`mailto:${data.info.email}`}>{data.info.email}</a>
                </li>
              )}
              {data.info.phone && (
                <li className={styles["list__item"]}>
                  <strong className={styles["list__tit"]}>Phone</strong>
                  <a href={`SMS:${data.info.phone}`}>{data.info.phone}</a>
                </li>
              )}
              {data.info.portfolio && (
                <li className={styles["list__item"]}>
                  <strong className={styles["list__tit"]}>Portfolio</strong>
                  <GoToLink to={data.info.portfolio}>
                    {data.info.portfolio}
                  </GoToLink>
                </li>
              )}
              {data.info.github ? (
                <li className={styles["list__item"]}>
                  <strong className={styles["list__tit"]}>Git-Hub</strong>
                  <GoToLink to={data.info.github}>{data.info.github}</GoToLink>
                </li>
              ) : null}
              {data.info.blog ? (
                <li className={styles["list__item"]}>
                  <strong className={styles["list__tit"]}>Blog</strong>
                  <GoToLink to={data.info.blog}>{data.info.blog}</GoToLink>
                </li>
              ) : null}
            </ul>
          </address>
          {data.footersbj ? (
            <span className={styles["footer__sbj"]}>{data.footersbj}</span>
          ) : null}
        </footer>
      </section>
    </>
  );
};
