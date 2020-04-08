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
    <footer className="bg-g25 mt-16" style={{ justifySelf: "flex-start" }}>
      <div className="container pt-12 pb-20 lg:grid grid-cols-8 gap-6">
        <div className="col-span-2 grid grid-cols-8">
          <img
            src="/images/logo-footer.svg"
            alt="Footer logo"
            className="col-span-2"
          />
          <div className="col-span-6">
            <h2 className="text-xl font-bold p100">Divine Hycenth</h2>
            <p className="g75">&copy; Copyright 2020</p>
          </div>
        </div>
        <div className="col-span-2  text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-xl font-bold p100">Menu</h2>
          <CustomLink
            className={`font-bold block hover:text-gray-600 ${
              pathname ==  "/" && "text-gray-600"
              }`}
            href={'/'}
          >
            Home
          </CustomLink>
          {routes.map(({ path, name }) => (
            <CustomLink
              key={name}
              className={`font-bold block hover:text-gray-600 ${
                pathname?.split("/")[1] == path.split("/")[1] && "text-gray-600"
              }`}
              href={path}
            >
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
