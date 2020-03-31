import * as React from "react";
import { NextPage } from "next";
import CustomLink from "../CustomLink";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";

// const links = [
//     {
//         name: 'home',
//         path: '/',

//     }
// ]

interface Props {
  pathname?: string;
}

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Works",
    path: "/works"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

const Navbar: NextPage<Props> = ({ pathname }) => {
  const val = pathname?.split("/")[1];
  console.log(val && val);
  return (
    <div className="py-4 flex justify-center z-10">
      <nav className="flex content-center ">
        <img src="/images/logo.svg" alt="Logo" className="mr-10"/>

        {routes.map(({ path, name }) => (
          <CustomLink
            key={name}
            className="py-2 mr-6 text-white font-semibold block"
            href={path}
          >
            <>
              {name}

              {pathname?.split("/")[1] == path.split("/")[1] && (
                <span className="block mt-3 w-5 h-1 mx-auto text-center bg-white rounded"></span>
              )}
            </>
          </CustomLink>
        ))}
      </nav>
    </div>
  );
};

Navbar.getInitialProps = async (): Promise<Props> => {
  const { pathname } = useRouter();

  return { pathname };
};

Navbar.propTypes = {
  pathname: PropTypes.string
};
export default Navbar;
