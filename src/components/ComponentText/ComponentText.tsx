import React, { ElementType, ReactNode } from "react";
import styles from "./ComponentText.style.modules.scss";
import { designTextType, TextTag } from "../../constants/types";

interface TextProps {
  as?: TextTag;
  children: ReactNode;
  className?: string;
  design?: designTextType;
  componentName?: string;
}

export const ComponentText = ({
  as,
  children,
  className,
  design = {},
  componentName = "",
}: TextProps) => {
  const mergedClassName = [styles?.componentText || "componentText", className]
    .filter(Boolean)
    .join(" ");

  const Component = as || "p";
  return (
    <Component
      className={mergedClassName}
      data-font-family={design?.fontFamily}
      data-font-size={design?.fontSize || "sm"}
      data-font-style={design?.fontStyle}
      data-font-weight={design?.fontWeight}
      data-line-height={design?.lineHeight}
      data-letter-spacing={design?.letterSpacing}
      data-text-decoration={design?.textDecoration}
      data-text-transform={design?.textTransform}
      data-text-align={design?.textAlign}
      data-white-space={design?.whiteSpace}
      data-color={design?.color}
    >
      {children}
    </Component>
  );
};
