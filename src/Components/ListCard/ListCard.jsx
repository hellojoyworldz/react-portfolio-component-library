import React from "react";
import "./ListCard.style.scss";
import { IMG_PATH } from "../../constants/path";

const sbjdata = {
  sbj: "Hello,",
  highlight: "My Portfolio",
};

const data = [
  {
    id: "01",
    site: "https://hellojoyworldz.github.io/myCSS/animation/marquee",
    thumb: `${IMG_PATH}/mainCss__marquee.gif`,
    title: "title",
    desc: "desc",
  },
];

export const ListCard = ({
  bgcolor = "#f5f5f5",
  title = sbjdata,
  items = data,
}) => {
  return (
    <section className="mainCss" data-bgcolor={bgcolor}>
      {title ? (
        <h2 className="titleType4">
          {title.sbj}
          <img src={`${IMG_PATH}/icon__tit02.png`} alt="" />
          <br />
          <span className="highlight">{title.highlight}</span>
        </h2>
      ) : null}

      {items ? (
        <div className="listType4">
          <ul className="list">
            {items.map((item) => (
              <li className="list__item" key={item.id}>
                {item.site ? (
                  <a
                    className="list__link"
                    target="_blank"
                    href={item.site}
                  ></a>
                ) : null}

                {item.thumb ? (
                  <div className="list__thumb">
                    <span
                      className="list__thumbGif"
                      style={{
                        backgroundImage: `url(${item.thumb})`,
                      }}
                    ></span>
                  </div>
                ) : null}

                <div className="list__info">
                  {item.title ? (
                    <strong className="list__tit">{item.title}</strong>
                  ) : null}
                  {item.desc ? <p className="list__desc">{item.desc}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
