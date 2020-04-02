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
  routes: {
    name: string;
    path: string;
  }[];
}

const Navbar: NextPage<Props> = ({ pathname, routes }) => {
  
  const [height,setHeight] = React.useState(0)
  
  React.useEffect(() => {
    document.body.scrollTop > 80 ? setHeight(document.body.scrollTop): setHeight(0)
    console.log(height)
  }, [height])
  
  return (
    <div
      className={`py-4 flex justify-center z-20 fixed top-0 left-0 w-full ${height > 80 && "gradient"}`}
    >
      <nav className="flex content-center ">
        <img src="/images/logo.svg" alt="Logo" className="mr-10" />

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

Navbar.getInitialProps = async (): Promise<any> => {
  const { pathname } = useRouter();

  return { pathname };
};

Navbar.propTypes = {
  pathname: PropTypes.string,
  routes: PropTypes.array.isRequired,
};
export default Navbar;
