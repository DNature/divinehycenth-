import { IArray } from "../interfaces";

export const lang: IArray[] = [
         {
           ext: "js",
           icon: "/images/icons/JS.svg",
           bgColor: "yellow",
           color: "white",
           language: "javascript",
         },
         {
           ext: "ts",
           icon: "/images/icons/TS.svg",
           bgColor: "blue",
           color: "white",
           language: "typescript",
         },
         {
           ext: "jsx",
           icon: "/images/icons/react.svg",
           bgColor: "skyblue",
           color: "white",
           language: "react",
         },
         {
           ext: "css",
           icon: "/images/icons/css.png",
           bgColor: "blue",
           color: "white",
           language: "css",
         },
         {
           ext: "html",
           icon: "/images/icons/html.png",
           bgColor: "red",
           color: "white",
           language: "html",
         },
         {
           ext: "gulp",
           icon: "/images/icons/JS.svg",
           bgColor: "red",
           color: "white",
           language: "gulp",
         },
       ];

export const filterColor = (language: string): IArray | undefined => {
  const langArr = language.toLowerCase().split(".");
  const ext = langArr[langArr.length - 1];
  return lang.filter((l) => {
    const val = Object.values(l["ext"]).join("");
    const res = val === ext ? val : undefined;
    return res;
  })[0];
};

// export const color = (t: string): string => filterColor(t).color;
export const bgColor = (t: string) => filterColor(t)?.bgColor;
