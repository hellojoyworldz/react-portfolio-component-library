import React, { ReactNode } from "react";
import styles from "./ComponentBadge.style.module.scss";
import { designBadgeType, TextTag } from "../../constants/types";
import { GoToLink } from "../GoToLink";
import { ComponentBox } from "../ComponentBox";

interface TextProps {
  as?: TextTag;
  to?: string;
  children: ReactNode;
  id?: string;
  className?: string;
  design?: designBadgeType;
  componentName?: string;
}

export const ComponentBadge = ({
  as = "span",
  to,
  children,
  id,
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
    id: { id },
    "data-sa-font-family": design?.fontFamily || "montserrat",
    "data-sa-font-size": design?.fontSize || "xxs",
    "data-sa-font-style": design?.fontStyle,
    "data-sa-font-weight": design?.fontWeight,
    "data-sa-line-height": design?.lineHeight || "tight",
    "data-sa-letter-spacing": design?.letterSpacing,
    "data-sa-text-decoration": design?.textDecoration,
    "data-sa-text-transform": design?.textTransform,
    "data-sa-white-space": design?.whiteSpace,
    "data-sa-color": design?.color,
    "data-sa-opacity": design?.opacity,
    "data-sa-background-color": design?.badgeColor,
    "data-sa-border-color": design?.borderColor,
    "data-sa-hovercolor": design?.hoverColor,
    "data-sa-hoverbadgecolor": design?.hoverBadgeColor,
  };

  if (to) {
    return (
      <GoToLink to={to} {...sharedProps}>
        {children}
      </GoToLink>
    );
  }

  return (
    <ComponentBox as={as} {...sharedProps}>
      {children}
    </ComponentBox>
  );
};
