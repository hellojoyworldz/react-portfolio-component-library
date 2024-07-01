import React, { ReactNode } from "react";
import styles from "./ComponentTitle.style.modules.scss";
import { designTitleType, HeadingTag } from "../../constants/types";

interface TitleProps {
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  design?: designTitleType;
  componentName?: string;
}

export const ComponentTitle = ({
  as: Component = "h2",
  children,
  className,
  design = {},
}: TitleProps) => {
  const mergedClassName = [
    styles?.componentTitle || "componentTitle",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={mergedClassName}
      data-font-family={design?.fontFamily}
      data-font-size={design?.fontSize || "tit"}
      data-font-style={design?.fontStyle}
      data-font-weight={design?.fontWeight}
      data-line-height={design?.lineHeight}
      data-letter-spacing={design?.letterSpacing}
      data-text-decoration={design?.textDecoration}
      data-text-transform={design?.textTransform}
      data-text-align={design?.textAlign}
      data-white-space={design?.whiteSpace}
      data-color={design?.color}
      data-opacity={design?.opacity}
      data-highlightcolor={design?.highlightColor}
    >
      {children}
    </Component>
  );
};
