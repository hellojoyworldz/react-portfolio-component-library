import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./Profile.style.module.scss";
import {
  defaultFootersbj,
  defaultTextPath,
  ProfileData,
  profileData,
} from "./data";
import { designTitleType, designTextType } from "../../constants/types";
import { ComponentText } from "../ComponentText/ComponentText";

const repeatText = (text: string, times: number) => text.repeat(times);
const getInfoContent = (key: string, value: string) => {
  switch (key) {
    case "email":
      return <a href={`mailto:${value}`}>{value}</a>;
    case "phone":
      return <a href={`SMS:${value}`}>{value}</a>;
    case "portfolio":
    case "github":
    case "blog":
      return <GoToLink to={value}>{value}</GoToLink>;
    default:
      return value;
  }
};
export const Profile = ({
  bgcolor = "#ff7896",
  bggradient = "#f06b67",
  data = profileData,
  className,
  noticeDesign,
  footersbjDesign,
  infoTitleDesign,
  infoDescDesign,
}: {
  bgcolor?: string;
  bggradient?: string;
  data?: Partial<ProfileData>;
  className?: string;
  noticeDesign?: designTextType;
  footersbjDesign?: designTextType;
  infoTitleDesign?: designTextType;
  infoDescDesign?: designTextType;
}) => {
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
              <ComponentText
                className={styles["footer__desc"]}
                design={{
                  fontFamily: "ibmPlexSansKR",
                  color: "white",
                  ...noticeDesign,
                }}
              >
                {data.notice}
              </ComponentText>
            ) : null}

            {data.info ? (
              <ul className={styles["list"]}>
                {Object.entries(data.info).map(([key, value]) => {
                  if (!value) return null;

                  const title = key.charAt(0).toUpperCase() + key.slice(1);
                  const content = getInfoContent(key, value);

                  return (
                    <li key={key} className={styles["list__item"]}>
                      <ComponentText
                        as={"strong"}
                        className={styles["list__tit"]}
                        design={{
                          color: "white",
                          ...infoTitleDesign,
                        }}
                      >
                        {title}
                      </ComponentText>
                      <ComponentText
                        as={"span"}
                        design={{
                          color: "white",
                          ...infoDescDesign,
                        }}
                      >
                        {content}
                      </ComponentText>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </address>
          {repeatedFootersbj ? (
            <ComponentText
              as={"span"}
              className={styles["footer__sbj"]}
              design={{
                fontSize: "xl",
                fontStyle: "italic",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                color: "white",

                ...footersbjDesign,
              }}
            >
              {repeatedFootersbj}
            </ComponentText>
          ) : null}
        </footer>
      </section>
    </>
  );
};
