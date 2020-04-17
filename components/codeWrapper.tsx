import * as React from "react";
import PropTypes from "prop-types";

const switcher = (condition: string) => {
  switch (condition) {
    case "css":
      return { icon: "/images/icons/css.png", color: "#2965F1" };

    case "js":
    case "javascript":
      return { icon: "/images/icons/JS.svg", color: "#FFDE31" };

    case "ts":
    case "typescript":
      return { icon: "/images/icons/TS.svg", color: "#1E44D7" };

    case 'html':
      return { icon: "/images/icons/html.png", color: "#ffffff" };
    default: 
      return { icon: "", color: "#ffffff" };
  }
};

const CodeWrapper = ({ lang }: { lang: string }): JSX.Element => {
  const splTag = lang.toLowerCase().split(/\.|#|-|_/g);
  const ext = splTag[splTag.length - 1];
  const icon = switcher ( ext ).icon;
  return (
    <div className="bar bg-black z-10 flex justify-between pr-4 overflow-hidden">
      <div className="btns" />
      <div className="my-auto flex">
        {icon ? <img src={`${icon}`} alt={ext} className="w-6 h-6 mr-4" /> : <p className="text-white mr-2">$ </p>}
        <p className="name text-gray-500 text-base font-sans font-bold" style={{ color: switcher(ext).color }}>
          {lang}
        </p>
      </div>
    </div>
  );
};

CodeWrapper.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default CodeWrapper;
