import * as React from "react";
import { NextPage } from "next";
import { FiSettings } from "react-icons/fi";
const body = document.body;

const Colors: NextPage = () => {
  const theme = localStorage.getItem("theme");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (theme) {
      body.classList.replace(body.className, theme);
    }
  }, []);
  const handleDark = (): void => {
    localStorage.setItem("theme", "dark");
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      body.classList.replace(body.className, newTheme);
    }
  };

  const handleLight = (): void => {
    localStorage.setItem("theme", "light");
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      body.classList.replace(body.className, newTheme);
    }
  };

  const handleBlue = (): void => {
    localStorage.setItem("theme", "blue");
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      body.classList.replace(body.className, newTheme);
    }
  };

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={`bg-p100 p-4 z-50 fixed flex justify-center items-center rounded-tr rounded-br shadow cursor-pointer ${
          open ? "translate" : "translate-0"
        }`}
        style={{ top: "45vh" }}
      >
        {/* <button className="px-4 py-2 font-bold gradient" onClick={handleDark}>
          Dark
        </button>
        <button className="px-4 py-2 font-bold gradient" onClick={handleLight}>
          Light
        </button> */}

        <button onClick={handleOpen}>
          <FiSettings
            className={`text-xl animate-round text ${
              body.className === "dark" && "g10"
            }`}
          />
        </button>
      </div>
      <div
        className={`bg-white p-4 z-50 fixed flex justify-between items-center rounded-tr rounded-br shadow translate ${
          open && "translate-0"
        }`}
        style={{ top: "45vh" }}
        data-open={open}
      >
        <div
          className="rounded-full w-8 h-8 mr-2 color-gray cursor-pointer"
          onClick={handleDark}
        />
        <div
          className="rounded-full w-8 h-8 mr-2 color-primary cursor-pointer"
          onClick={handleLight}
        />
        <div
          className="rounded-full w-8 h-8 mr-2 color-blue cursor-pointer"
          onClick={handleBlue}
        />

        {/* <button className="px-4 py-2 font-bold gradient" onClick={handleDark}>
          Dark
        </button>
        <button className="px-4 py-2 font-bold gradient" onClick={handleLight}>
          Light
        </button> */}

        <button onClick={handleClose}>
          <FiSettings
            className={`text-xl p100 cursor-pointer animate-round ${
              body.className === "dark" && "g10"
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default Colors;
