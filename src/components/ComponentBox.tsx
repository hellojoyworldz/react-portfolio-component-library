import React, { forwardRef, ReactNode } from "react";

interface BoxProps {
  as?: keyof HTMLElementTagNameMap;
  id?: string;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}
export const ComponentBox = forwardRef(
  (
    { as: Component = "div", children, id, className, ...props }: BoxProps,
    ref: React.Ref<any>,
  ) => {
    return (
      <Component ref={ref} id={id} className={className} {...props}>
        {children}
      </Component>
    );
  },
);
