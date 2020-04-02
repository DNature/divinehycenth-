import * as React from "react";
import { NextPage } from "next";
import CustomLink from "./CustomLink";
import PropTypes from "prop-types";

interface Props {
  pathname?: string;
  routes: {
    name: string;
    path: string;
  }[];
}

const Footer: NextPage<Props> = ({ pathname, routes }) => {
  console.log(pathname);

  return (
    <footer className="bg-g25 mt-16" style={{ justifySelf: "flex-start" }}>
      <div className="container pt-12 pb-20 grid grid-cols-8 gap-6">
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
        <div className="col-span-2">
          <h2 className="text-xl font-bold p100">Menu</h2>
          {routes.map(({ path, name }) => (
            <CustomLink
              key={name}
              className={`font-bold block hover:text-gray-600 ${pathname?.split(
                "/"
              )[1] == path.split("/")[1] && "text-gray-600"}`}
              href={path}
            >
              <>{name}</>
            </CustomLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  pathname: PropTypes.string,
  routes: PropTypes.array.isRequired
};
export default Footer;
