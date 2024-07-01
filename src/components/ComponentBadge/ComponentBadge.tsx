import React, { ReactNode } from "react";
import styles from "./ComponentBadge.style.module.scss";
import { designBadgeType, TextTag } from "../../constants/types";
import { GoToLink } from "../GoToLink";

interface TextProps {
  as?: TextTag;
  to?: string;
  children: ReactNode;
  className?: string;
  design?: designBadgeType;
  componentName?: string;
}

export const ComponentBadge = ({
  as,
  to,
  children,
  className,
  design = {},
  componentName = "",
}: TextProps) => {
  const mergedClassName = [
    styles?.componentBadge || "componentBadge",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const sharedProps = {
    className: mergedClassName,
    "data-font-family": design?.fontFamily || "montserrat",
    "data-font-size": design?.fontSize || "xxs",
    "data-font-style": design?.fontStyle,
    "data-font-weight": design?.fontWeight,
    "data-line-height": design?.lineHeight || "tight",
    "data-letter-spacing": design?.letterSpacing,
    "data-text-decoration": design?.textDecoration,
    "data-text-transform": design?.textTransform,
    "data-white-space": design?.whiteSpace,
    "data-color": design?.color,
    "data-opacity": design?.opacity,
    "data-background-color": design?.badgeColor,
    "data-border-color": design?.borderColor,
    "data-hovercolor": design?.hoverColor,
    "data-hoverbadgecolor": design?.hoverBadgeColor,
  };

  if (to) {
    return (
      <GoToLink to={to} {...sharedProps}>
        {children}
      </GoToLink>
    );
  }

  const Component = as || "span";
  return <Component {...sharedProps}>{children}</Component>;
};
