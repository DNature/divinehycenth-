import * as React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import CustomLink from "./CustomLink";

interface Props {
  pathname?: string;
  routes: {
    name: string;
    path: string;
  }[];
}

const Footer: NextPage<Props> = ({ pathname, routes }) => {
  return (
    <footer className="before before-2 mt-16 relative" style={{ justifySelf: "flex-start", backgroundColor: "#4d5254" }}>
      <div className="container pt-12 pb-20 lg:grid grid-cols-8 gap-6">
        <div className="col-span-2 grid grid-cols-8">
          <img src="/images/icons/logo.svg" alt="Footer logo" className="col-span-2" />
          <div className="col-span-6">
            <h2 className="text-xl font-bold text-white">Divine Hycenth</h2>
            <p className="text-g-25">&copy; Copyright 2020</p>
            <blockquote/>
          </div>
        </div>
        <div className="col-span-2  text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <CustomLink className={`font-bold block hover:text-g-25 ${pathname == "/" && "text-g-50"}`} href={"/"}>
            Home
          </CustomLink>
          {routes.map(({ path, name }) => (
            <CustomLink key={name} className={`font-bold block text-white hover:text-g-50 ${pathname?.split("/")[1] == path.split("/")[1] && "text-white"}`} href={path}>
              {name}
            </CustomLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  pathname: PropTypes.string,
  routes: PropTypes.array.isRequired,
};
export default Footer;
