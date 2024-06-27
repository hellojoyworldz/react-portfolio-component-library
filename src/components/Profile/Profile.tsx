import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./Profile.style.module.scss";
import {
  defaultFootersbj,
  defaultTextPath,
  ProfileData,
  profileData,
} from "./data";

export const Profile = ({
  bgcolor = "#ff7896",
  bggradient = "#f06b67",
  data = profileData,
  className,
}: {
  bgcolor?: string;
  bggradient?: string;
  data?: Partial<ProfileData>;
  className?: string;
}) => {
  const repeatText = (text: string, times: number) => text.repeat(times);

  const repeatedTextPath = data.textpath
    ? repeatText(data.textpath, 10)
    : repeatText(defaultTextPath, 10);

  const repeatedFootersbj = data.footersbj
    ? repeatText(data.footersbj, 10)
    : repeatText(defaultFootersbj, 10);

  return (
    <>
      <section
        className={`${styles["mainProfile"]} ${className || ""}`}
        data-bgcolor={bgcolor}
      >
        {repeatedTextPath ? (
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
                {repeatedTextPath}
                <animate
                  attributeName="startOffset"
                  begin="0"
                  dur="20s"
                  from="0"
                  to="-1024"
                  repeatCount="indefinite"
                />
              </textPath>
            </text>
          </svg>
        ) : null}

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
            {data.notice ? (
              <div className={styles["footer__desc"]}>{data.notice}</div>
            ) : null}

            {data.info ? (
              <ul className={styles["list"]}>
                {data.info.name ? (
                  <li className={styles["list__item"]}>
                    <strong className={styles["list__tit"]}>Name</strong>
                    {data.info.name}
                  </li>
                ) : null}
                {data.info.email ? (
                  <li className={styles["list__item"]}>
                    <strong className={styles["list__tit"]}>E-mail</strong>
                    <a href={`mailto:${data.info.email}`}>{data.info.email}</a>
                  </li>
                ) : null}
                {data.info.phone ? (
                  <li className={styles["list__item"]}>
                    <strong className={styles["list__tit"]}>Phone</strong>
                    <a href={`SMS:${data.info.phone}`}>{data.info.phone}</a>
                  </li>
                ) : null}
                {data.info.portfolio ? (
                  <li className={styles["list__item"]}>
                    <strong className={styles["list__tit"]}>Portfolio</strong>
                    <GoToLink to={data.info.portfolio}>
                      {data.info.portfolio}
                    </GoToLink>
                  </li>
                ) : null}
                {data.info.github ? (
                  <li className={styles["list__item"]}>
                    <strong className={styles["list__tit"]}>Git-Hub</strong>
                    <GoToLink to={data.info.github}>
                      {data.info.github}
                    </GoToLink>
                  </li>
                ) : null}
                {data.info.blog ? (
                  <li className={styles["list__item"]}>
                    <strong className={styles["list__tit"]}>Blog</strong>
                    <GoToLink to={data.info.blog}>{data.info.blog}</GoToLink>
                  </li>
                ) : null}
              </ul>
            ) : null}
          </address>
          {repeatedFootersbj ? (
            <span className={styles["footer__sbj"]}>{repeatedFootersbj}</span>
          ) : null}
        </footer>
      </section>
    </>
  );
};
