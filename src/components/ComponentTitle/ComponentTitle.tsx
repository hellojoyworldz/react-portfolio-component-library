import React, { ReactNode } from "react";
import styles from "./ComponentTitle.style.modules.scss";
import { designTitleType, HeadingTag } from "../../constants/types";
import { ComponentBox } from "../ComponentBox";

interface TitleProps {
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  id?: string;
  design?: designTitleType;
  componentName?: string;
}

export const ComponentTitle = ({
  as,
  children,
  className,
  id,
  design = {},
}: TitleProps) => {
  const mergedClassName = [
    styles?.componentTitle || "componentTitle",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ComponentBox
      as={(as = "h2")}
      id={id}
      className={mergedClassName}
      data-sa-font-family={design?.fontFamily}
      data-sa-font-size={design?.fontSize || "tit"}
      data-sa-font-style={design?.fontStyle}
      data-sa-font-weight={design?.fontWeight}
      data-sa-line-height={design?.lineHeight}
      data-sa-letter-spacing={design?.letterSpacing}
      data-sa-text-decoration={design?.textDecoration}
      data-sa-text-transform={design?.textTransform}
      data-sa-text-align={design?.textAlign}
      data-sa-white-space={design?.whiteSpace}
      data-sa-color={design?.color}
      data-sa-opacity={design?.opacity}
      data-sa-highlightcolor={design?.highlightColor}
    >
      {children}
    </ComponentBox>
  );
};
