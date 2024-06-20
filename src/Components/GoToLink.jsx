import React  from "react";
import { Link } from 'react-router-dom';

const isExternal = (to) => {
    return /^(http|https):\/\//i.test(to)
}

export const GoToLink = ({to, className, children}) => {
    if (isExternal(to)) {
        return <a href={to} className={className} target="_blank">{children}</a>
    } else {
        return <Link to={to}>{children}</Link>
    }
}