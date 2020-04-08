import * as React from "react";
import { NextPage } from "next";

const body = document.body;

const FooterColors: NextPage = () => {
  const theme = localStorage.getItem("theme");

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
  return (
    <>
      <div
        className={`px-2 flex justify-between items-center rounded-tr rounded-br p100 rounded-full border border-1`}
        onClick={handleDark}
      >
        <span className="rounded-full w-4 h-4 mr-2 color-gray cursor-pointer"></span>
        <p> Dark</p>
      </div>
      <div
        className={`px-2 flex justify-between items-center rounded-tr rounded-br p100 rounded-full border border-1`}
        onClick={handleDark}
      >
        <span className="rounded-full w-4 h-4 mr-2 color-gray cursor-pointer"></span>
        <p> Dark</p>
      </div>
      <div
        className={`px-2 flex justify-between items-center rounded-tr rounded-br p100 rounded-full border border-1`}
        onClick={handleDark}
      >
        <span className="rounded-full w-4 h-4 mr-2 color-gray cursor-pointer"></span>
        <p> Dark</p>
      </div>
    </>
  );
};

export default FooterColors;
