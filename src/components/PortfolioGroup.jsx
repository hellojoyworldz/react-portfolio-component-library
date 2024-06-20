import React from "react";
import "../assets/styles/reset.scss";
import "../assets/styles/common.scss";

export const PortfolioGroup = ({ as = "div", children, className }) => {
  return <div className={className || ""}>{children}</div>;
};
