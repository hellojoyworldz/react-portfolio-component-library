import React from "react";
import "./Header.style.scss";

export const Header = ({ title }) => {
  return (
    <>
      <header id="header" className="header">
        <h1 className="headerLogo">
          <div className="headerLogo__link">
            <span className="headerLogo__icon">
              <span className="mouth js-mouth"></span>
            </span>
            {title ? <span className="headerLogo__text">{title}</span> : null}
          </div>
        </h1>
      </header>
    </>
  );
};
