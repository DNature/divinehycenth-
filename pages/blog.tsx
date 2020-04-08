import React from "react";
import { NextPage, GetStaticProps } from "next";
import { IoIosSearch } from "react-icons/io";
import PropTypes from "prop-types";

import MainLayout from "../layouts/Main";
import LargeCard from "../components/Cards/LargeCard";
import { getAllPosts } from "../utils/api";

const BlogPage: NextPage<{ allPosts?: any }> = ({ allPosts }) => {
  return (
    <MainLayout pathname="/blog">
      <div className="w-full gradient relative -z-10">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0">
          <div className="gradient-alt circle absolute" />
        </div>

        <div className="container py-32 sm:py-40 md:py-56">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Blog
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="xl:px-64 lg:px-48">
          {/* Search */}
          <div className="container my-16 lg:grid grid-cols-5 mx-auto">
            <div className="border border-1 border-gray-400 px-4 rounded-full py-4 col-span-2 flex">
              <IoIosSearch className="text-xl text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent text-gray-500"
              />
            </div>
            <div className="col-span-3 my-auto ml-4 bg-gray-400 h-1 rounded hidden lg:block" />
          </div>

          <h3 className="text-md font-bold p100">Latest</h3>
          <h2 className="text-2xl mb-12 sm:text-4xl font-bold g100">Article</h2>

          {allPosts &&
            allPosts.map(({ title, description, imageUrl, slug }: any) => (
              <LargeCard key={title} title={title} image={imageUrl} path={slug}>
                {description}
              </LargeCard>
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "description", "imageUrl"]);

  return {
    props: { allPosts },
  };
};

BlogPage.propTypes = {
  allPosts: PropTypes.any,
};

export default BlogPage;
