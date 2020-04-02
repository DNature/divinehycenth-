import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";
import Navbar from '../nav';
import Footer from '../Footer';

// const links = [
//     {
//         name: 'home',
//         path: '/',

//     }
// ]

interface Props {
  pathname?: string;
  children: React.ReactNode;
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

const MainLayout: NextPage<Props> = ({ pathname, children }) => {
  return (
    <div className="flex flex-col h-full" style={{height: '100vh'}} >
      <Navbar pathname={pathname} routes={routes} />
      <div className="flex-1" >{children}</div>

      <Footer pathname={pathname} routes={routes} />
    </div>
  );
};

MainLayout.getInitialProps = async (): Promise<any> => {
  const { pathname } = useRouter();

  return { pathname };
};

MainLayout.propTypes = {
  pathname: PropTypes.string,
  children: PropTypes.node.isRequired
};
export default MainLayout;
