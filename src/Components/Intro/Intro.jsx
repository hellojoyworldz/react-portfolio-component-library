import React from "react";
import "./Intro.style.scss";
import { IMG_PATH } from "../../constants/path";

const sbjdata = {
  sbj: "Plan and\norgnize\n",
  highlight: "anything",
};

const data = [
  {
    id: "01",
    title: "Blog",
    icon: `${IMG_PATH}/mainCate__itemIcon01.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg01.jpg`,
  },
  {
    id: "02",
    title: "JavaScript &\n CSS Animation",
    icon: `${IMG_PATH}/mainCate__itemIcon02.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg02.jpg`,
  },
  {
    id: "03",
    title: `Work &\n Projects`,
    icon: `${IMG_PATH}/mainCate__itemIcon03.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg03.jpg`,
  },
  {
    id: "04",
    title: `Website &\n Portfolio`,
    icon: `${IMG_PATH}/mainCate__itemIcon04.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg04.jpg`,
  },
  {
    id: "05",
    title: `Contact Me`,
    icon: `${IMG_PATH}/mainCate__itemIcon05.png`,
    thumb: `${IMG_PATH}/mainCate__itemBg05.jpg`,
  },
];

export const Intro = ({
  bgcolor = "#f5feff",
  title = sbjdata,
  items = data,
}) => {
  return (
    <section className="mainCate" data-bgcolor={bgcolor}>
      {title ? (
        <h2 className="TitleType1">
          {title.sbj}
          {title.highlight && (
            <span className="highlight">{title.highlight}</span>
          )}
        </h2>
      ) : null}
      {items ? (
        <div className="listType1">
          <div
            className="listType1__list"
            data-scroll
            data-scroll-speed="8"
            data-scroll-direction="horizontal"
          >
            <ul className="list">
              {items.map((item) => (
                <li key={item.id} className="list__item">
                  {item.title && (
                    <strong className="list__tit">{item.title}</strong>
                  )}
                  {item.icon ? (
                    <span className="list__icon">
                      <img src={item.icon} alt="" />
                    </span>
                  ) : null}
                  {item.thumb ? (
                    <span className="list__thumb">
                      <img src={item.thumb} alt="" />
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
};
