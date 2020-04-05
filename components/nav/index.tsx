import React, { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import CustomLink from "../CustomLink";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

// const links = [
//     {
//         name: 'home',
//         path: '/',

//     }
// ]

interface Props {
  pathname?: string;
  routes: {
    name: string;
    path: string;
    icon?: React.ReactNode;
  }[];
}

const Navbar: NextPage<Props> = ({ pathname, routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef: any = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 300;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`py-4 justify-center z-20 fixed top-0 left-0 w-full hidden sm:flex ${
          navBackground && "gradient shadow"
        }`}
      >
        <nav className="flex content-center ">
          <CustomLink href="/">
            <img src="/images/logo.svg" alt="Logo" className="mr-10" />
          </CustomLink>
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

      <div
        className={`z-20 fixed top-0 left-0 w-full h-20 flex flex-col sm:hidden ${
          navBackground && "gradient shadow"
        }`}
      >
        <div className="flex justify-between p-4">
          <CustomLink href="/">
            <img src="/images/logo.svg" alt="Logo" className="w-10 h-10" />
          </CustomLink>
          <button onClick={() => setIsOpen(true)}>
            <FiMenu className="text-white text-2xl my-auto" />
          </button>
        </div>
      </div>
      <nav
        data-isOpen={isOpen}
        className="fixed top-0 left-0 w-full z-50 py-6 h-screen overflow-hidden gradient translate-x-56"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease-in-out",
        }}
      >
        <div className="flex px-4 justify-between">
          <CustomLink href="/">
            <img src="/images/logo.svg" alt="Logo" className="" />
          </CustomLink>
          <button onClick={handleClose}>
            <IoMdClose className="text-white text-2xl my-auto" />
          </button>
        </div>
        <hr className="my-2" />
        {routes.map(({ path, name, icon }) => (
          <CustomLink
            key={name}
            className={`py-2 mr-6 text-white font-semibold block p-2 hover mx-4`}
            href={path}
          >
            <>
              {icon}
              {name}

              {pathname?.split("/")[1] == path.split("/")[1] && (
                <span className="block mt-3 w-full h-1 mx-auto text-center bg-white rounded bg-gray-400"></span>
              )}
            </>
          </CustomLink>
        ))}
      </nav>
    </>
  );
};

Navbar.getInitialProps = async (): Promise<any> => {
  const { pathname } = useRouter();

  return { pathname };
};

Navbar.propTypes = {
  pathname: PropTypes.string,
  routes: PropTypes.array.isRequired,
};
export default Navbar;
