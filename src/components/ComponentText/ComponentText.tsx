import React, { ElementType, ReactNode } from "react";
import styles from "./ComponentText.style.modules.scss";
import { designTextType, TextTag } from "../../constants/types";
import { ComponentBox } from "../ComponentBox";

interface TextProps {
  as?: TextTag;
  children: ReactNode;
  className?: string;
  id?: string;
  design?: designTextType;
  componentName?: string;
}

export const ComponentText = ({
  as = "p",
  children,
  className,
  id,
  design = {},
  componentName = "",
}: TextProps) => {
  const mergedClassName = [styles?.componentText || "componentText", className]
    .filter(Boolean)
    .join(" ");

  return (
    <ComponentBox
      as={as}
      id={id}
      className={mergedClassName}
      data-sa-font-family={design?.fontFamily}
      data-sa-font-size={design?.fontSize || "sm"}
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
    >
      {children}
    </ComponentBox>
  );
};
