import React from "react";
import { GoToLink } from "../GoToLink.jsx";
import "./ListNormal.style.scss";
import { IMG_PATH } from "../../constants/path";

const sbj = `Hello✋🏻\nMy Portfolio`;
const data = [
  {
    id: "01",
    type: "react",
    desc: "React 사이트입니다.",
    title: "React",
    github: "/",
    site: "/",
    thumb: `${IMG_PATH}/mainReact__img01.jpg`,
  },
  {
    id: "02",
    type: "vue",
    desc: "vue 사이트입니다.",
    title: "Vue",
    github: "/",
    thumb: `${IMG_PATH}/mainReact__img02.jpg`,
  },
  {
    id: "03",
    type: "php",
    desc: "php 사이트입니다.",
    title: "php",
    site: "/",
    thumb: `${IMG_PATH}/mainReact__img03.jpg`,
  },
];
export const ListNormal = ({
  bgcolor = "#c2aeec",
  title = sbj,
  items = data,
}) => {
  return (
    <section className="mainFront" data-bgcolor={bgcolor}>
      {title ? <h2 className="titleType2">{title}</h2> : null}
      {items ? (
        <div className="listType2">
          <ul className="list">
            {items.map((item) => (
              <li
                key={item.id}
                className="list__item"
                data-scroll
                data-scroll-speed="3"
                ata-scroll-direction="vertical"
              >
                <div className="list__info">
                  {item.type ? (
                    <span className={`list__cate cate--${item.type}`}>
                      {item.type}
                    </span>
                  ) : null}
                  {item.title ? (
                    <strong className="list__tit">{item.title}</strong>
                  ) : null}
                  {item.desc ? (
                    <div className="list__desc">{item.desc}</div>
                  ) : null}
                  <div className="list__type">
                    {item.github ? (
                      <GoToLink to={item.github} className="list__typeLink">
                        Github
                      </GoToLink>
                    ) : null}
                    {item.site ? (
                      <GoToLink to={item.site} className="list__typeLink">
                        Site
                      </GoToLink>
                    ) : null}
                  </div>
                </div>
                {item.thumb ? (
                  <div className="list__thumb">
                    <img data-speed="auto" src={item.thumb} alt="" />
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
