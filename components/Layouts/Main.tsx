import * as React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";
import Footer from "../Footer";
import { FiFeather, FiBookOpen, FiMonitor, FiMail } from "react-icons/fi";

const SideColorSwitcher = dynamic(() => import("../colors"), { ssr: false });
const Navbar = dynamic(() => import("../nav"), { ssr: false });

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
    name: "About",
    path: "/about",
    icon: <FiBookOpen className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: <FiFeather className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Works",
    path: "/works",
    icon: <FiMonitor className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FiMail className="mr-2 inline-block text-xl text-white" />,
  },
];

const MainLayout: NextPage<Props> = ({ pathname, children }) => {
  return (
    <div className="flex flex-col h-full" style={{ height: "100vh" }}>
      <Navbar pathname={pathname} routes={routes} />
      <div className="flex-1">{children}</div>

      <Footer pathname={pathname} routes={routes} />
      <SideColorSwitcher />
    </div>
  );
};

MainLayout.getInitialProps = async (): Promise<any> => {
  const { pathname } = useRouter();

  return { pathname };
};

MainLayout.propTypes = {
  pathname: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default MainLayout;
