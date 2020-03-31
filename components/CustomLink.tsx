import * as React from "react";
import Link, { LinkProps } from "next/link";
import PropTypes from "prop-types";

const CustomLink = ({
  href,
  as,
  children,
  className
}: LinkProps & { children: React.ReactNode; className?: string }): JSX.Element => (
  <Link href={href} as={as}>
    <a className={className}>{children}</a>
  </Link>
);

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
export default CustomLink;
