import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";
import { ThemeProvider } from "theme-ui";
import Prism from "@theme-ui/prism";

import MainLayout from "./Main";
import FormatDate from "../components/date";

import theme from "../theme";

// This default export is required in a new `pages/_app.js` file.
const components = {
  pre: ({ children }: any): JSX.Element => (<>{children}</>) as JSX.Element,
  code: Prism,
};

interface Props {
  children: React.ReactNode;
  imageUrl: string;
  title: string;
  date: string;
  tags?: string[];
}

const BlogLayout: NextPage<Props> = ({
  children,
  imageUrl,
  title,
  date,
  tags,
}) => {
  return (
    <MainLayout pathname="/blog">
      <div className="w-full gradient relative -z-10">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
          <div className="gradient-alt circle absolute" />
        </div>
        <div
          className="absolute h-full w-full left-0 top-0 opacity-50 -z-4"
          style={{
            background: `url(${imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="container md:pt-56 pt-32">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:w-3/5">
            {title}
          </h1>
          <FormatDate dateString={date} />
          <div className="mt-4 flex pb-64 z-auto">
            {tags &&
              tags.map((tag, i) => (
                <button
                  key={tag + i}
                  className="btn-tag rounded-full px-3 shadow hover:opacity cursor-pointer mr-2"
                >
                  #{tag}
                </button>
              ))}
          </div>
        </div>
      </div>
      <article className="container -mt-48 card-contact rounded-lg ">
        <ThemeProvider components={components} theme={theme}>
          <div className="max-w-2xl mx-auto py-8">{children}</div>
        </ThemeProvider>
      </article>
    </MainLayout>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

export default BlogLayout;
