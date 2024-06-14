import React from "react";
import "./Banner.style.scss";
import { IMG_PATH } from "../../constants/path";

export const Banner = ({ bgcolor = "#fde445" }) => {
  return (
    <section className="mainBanner" data-bgcolor={bgcolor}>
      <div className="mainBanner__bg">
        <img src={`${IMG_PATH}/mainBanner__bg.png`} alt="" />
      </div>
      <div className="mainBanner__emoji">
        <span
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji01.png`} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji02.png`} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji03.png`} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="vertical"
        >
          <img src={`${IMG_PATH}/mainBanner__emoji04.png`} alt="" />
        </span>
      </div>
    </section>
  );
};
