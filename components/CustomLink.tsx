import * as React from "react";
import Link, { LinkProps } from "next/link";
import PropTypes from "prop-types";

import { ILinkProps } from '../interfaces';



const CustomLink = ({
  href,
  as,
  children,
  className,
  onClick,
  target
}: LinkProps & ILinkProps): JSX.Element => (
  <Link href={href} as={as}>
    <a className={className} onClick={onClick} target={target}>
      {children}
    </a>
  </Link>
);

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
};
export default CustomLink;
