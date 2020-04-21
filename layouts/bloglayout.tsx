import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";
import { ThemeProvider } from "theme-ui";
import Prism from "@theme-ui/prism";

import MainLayout from "./Main";
import FormatDate from "../components/date";

import theme from "../theme";
import Tag from '../components/tag';
import NextHead from '../components/meta';
import pathConfig from '../utils/pathConfig';

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
  __filename: string;
  description?: string;
}

const BlogLayout: NextPage<Props> = ({ children, imageUrl, title, date, tags, __filename, description, }) => {
  
  const path = pathConfig( __filename, __filename)

  return (
    <MainLayout pathname="/blog">
      <NextHead path={path} description={description} imageUrl={imageUrl} pageTitle={title} />
      <div className="w-full gradient relative -z-10 after after-2">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
          <div className="gradient-alt circle absolute" />
        </div>
        <div
          className="absolute h-full w-full left-0 top-0 opacity-25 -z-4"
          style={{
            background: `url(${imageUrl})`,
            backgroundPosition: "center 30%",
            backgroundSize: "cover",
            // backgroundAttachment: 'fixed'
          }}
        />

        <div className="container md:pt-56 pt-32">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:w-3/5">{title}</h1>
          <FormatDate dateString={date} className="text-white" />
          <div className="mt-4 flex pb-64 z-auto">{tags && tags.map((tag, i) => <Tag key={tag + i} tag={tag} />)}</div>
        </div>
      </div>
      <article className="container -mt-48 bg rounded-lg">
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
  __filename: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default BlogLayout;
