import React from "react";
import "./ListLego.style.scss";
import { IMG_PATH } from "../../constants/path";

const sbjdata = {
  sbj: "Hello",
  hightlight: "My Portfolio",
};

const data = [
  {
    id: "01",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img01.jpg`,
  },
  {
    id: "02",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img02.jpg`,
  },
  {
    id: "03",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img05.jpg`,
  },
  {
    id: "04",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img06.jpg`,
  },
  {
    id: "05",
    thumb: `${IMG_PATH}/mainCode__img07.jpg`,
  },
  {
    id: "06",
    title: "title",
    type: "JavaScript",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img09.jpg`,
  },
  {
    id: "07",
    title: "title",
    site: "/",
    thumb: `${IMG_PATH}/mainCode__img10.jpg`,
  },
];
export const ListLego = ({
  bgcolor = "#f6f3ff",
  title = sbjdata,
  items = data,
}) => {
  return (
    <section className="mainCode" data-bgcolor={bgcolor}>
      {title ? (
        <h2 className="titleType5">
          {title.sbj ? title.sbj : null}

          {title.hightlight ? (
            <>
              <br />
              <span className="highlight">
                {title.hightlight}
                <img src={`${IMG_PATH}/icon__tit03.png`} alt="" />
              </span>
            </>
          ) : null}
        </h2>
      ) : null}

      {items ? (
        <div className="listType5">
          <ul className="list">
            {items.map((item) => (
              <li className={`list__item item${item.id}`} key={item.id}>
                {item.site && (
                  <a
                    href={item.site}
                    target="_blank"
                    className="list__link"
                  ></a>
                )}
                {item.title && (
                  <strong className="list__tit">{item.title}</strong>
                )}
                {item.type && <span className="list__cate">{item.type}</span>}
                <span className="list__thumb">
                  <img className="list__img" src={item.thumb} alt="" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
