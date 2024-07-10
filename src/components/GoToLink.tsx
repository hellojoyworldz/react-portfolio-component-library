import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const isExternal = (to: string) => /^(http|https):\/\//i.test(to);

interface GoToLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

export const GoToLink: React.FC<GoToLinkProps> = ({
  to,
  className = "",
  children,
  ...restProps
}) => {
  if (isExternal(to)) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} className={className} {...restProps}>
        {children}
      </Link>
    );
  }
};
