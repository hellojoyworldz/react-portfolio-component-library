import React from "react";
import { GoToLink } from "../GoToLink.jsx";
import "./ListHorizontal.style.scss";
import { IMG_PATH } from "../../constants/path";

const sbj = `Hello,
My Portfolio`;
const data = [
  {
    id: "01",
    title: "title1",
    desc: "description2",
    site: "/",
    thumb: `${IMG_PATH}/mainSite__thumb01.jpg`,
  },
  {
    id: "02",
    title: "title2",
    desc: "description2",
    thumb: `${IMG_PATH}/mainSite__thumb02.jpg`,
  },
];

export const ListHorizontal = ({
  bgcolor = "#310591",
  title = sbj,
  items = data,
}) => {
  return (
    <div
      className="listType3 horizontal-scroll"
      data-bgcolor={bgcolor}
      data-horizontal-scroll
    >
      <div className="pin-wrap" data-pin-wrap>
        {title ? (
          <div className="listType3__header">
            <h2 className="titleType3">
              {title}
              <span className="titleType3__img">
                <img src={`${IMG_PATH}/mainSite__tit.png`} alt="" />
              </span>
            </h2>

            <div className="listType3__emoji">
              <div className="listType3__emojiBg">
                <span>
                  <img src={`${IMG_PATH}/mainSite__emojiBg.png`} alt="" />
                </span>
              </div>

              <div className="listType3__emojiCircle">
                <span
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                >
                  <img src={`${IMG_PATH}/mainSite__emojiImg01.png`} alt="" />
                </span>
                <span
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-direction="vertical"
                >
                  <img src={`${IMG_PATH}/mainSite__emojiImg02.png`} alt="" />
                </span>
                <span
                  data-scroll
                  data-scroll-speed="4"
                  data-scroll-direction="vertical"
                >
                  <img src={`${IMG_PATH}/mainSite__emojiImg03.png`} alt="" />
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {items
          ? items.map((item) => (
              <div className="list__item" key={item.id}>
                <div className="list__info">
                  {item.id ? (
                    <span className="list__num">{item.id}</span>
                  ) : null}
                  {item.title ? (
                    <strong className="list__tit">{item.title}</strong>
                  ) : null}
                  {item.desc ? <p className="list__desc">{item.desc}</p> : null}
                </div>

                {item.thumb ? (
                  <span className="list__thumb">
                    {item.site ? (
                      <GoToLink to={item.site}>
                        <img className="list__img" src={item.thumb} alt="" />
                      </GoToLink>
                    ) : (
                      <img className="list__img" src={item.thumb} alt="" />
                    )}
                  </span>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
