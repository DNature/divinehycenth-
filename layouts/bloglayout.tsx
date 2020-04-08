import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import MainLayout from "./Main";

interface Props {
  children: React.ReactNode;
  imageUrl: string;
  title: string;
}

const BlogLayout: NextPage<Props> = ({ children, imageUrl, title }) => {
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

        <div className="container md:pt-56">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:w-3/5">
            {title}
          </h1>
          <p className="text-white text-sm ">Feb. 20th, 2020</p>
          <div className="mt-4 flex pb-64 z-auto">
            <button className="bg-p100 text-white rounded-full px-3 shadow hover:opacity cursor-pointer">
              Javascript
            </button>
            <button className="bg-p100 text-white rounded-full px-3 shadow hover:opacity cursor-pointer ml-4">
              Graphql
            </button>
          </div>
        </div>
      </div>
      <article className="container -mt-48 card-contact shadow rounded-lg ">
        <div>{children}</div>
      </article>
    </MainLayout>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogLayout;
