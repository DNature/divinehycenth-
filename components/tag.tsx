import * as React from "react";

function switcher(val: string) {
  switch (val) {
    case "html":
      return { color: "#efefef", backgroundColor: "#E44D26" };

    case "css":
      return { color: "#efefef", backgroundColor: "#2965F1" };

    case "typescript":
      return { color: "#efefef", backgroundColor: "#1E44D7" };

    case "react":
      return { color: "#12181a", backgroundColor: "#63ACE1" };

    case "node":
    case "nodejs":
      return { color: "#12181a", backgroundColor: "#90c53f" };

    case "javascript":
    case "js":
      return { color: "#000000", backgroundColor: "#FFDE31" };

    case "graphql":
      return { color: "#efefef", backgroundColor: "#D71EC4" };

    case "docker":
      return { color: "#efefef", backgroundColor: "#2965F1" };

    case "next":
    case "nextjs":
      return { color: "#efefef", backgroundColor: "#000000" };

    default:
      return { color: "var(text)", backgroundColor: "var(--gray4)" };
  }
}

const Tag = ({ tag, ...other }: { tag: string }): JSX.Element => {
  const splTag = tag.toLowerCase().split(/\.|#|-|_/g);
  const ext = splTag[splTag.length - 1];
  return (
    <>
      <button className="bg-g-15 hidden sm:inline-block rounded-full px-3 font-bold text-g-75 text-sm hover:opacity cursor-pointer mr-2 mt-4" style={switcher(ext)} {...other}>
        #{tag}
      </button>
    </>
  );
};

export default Tag;
