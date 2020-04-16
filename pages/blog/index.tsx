import React from "react";
import { NextPage, GetStaticProps } from "next";
import { IoIosSearch } from "react-icons/io";
import PropTypes from "prop-types";

import MainLayout from "../../layouts/Main";
import LargeCard from "../../components/Cards/LargeCard";
import { getAllPosts } from "../../utils/api";
import { IPosts } from "../../interfaces";
import formatPosts from "../../utils/formatPosts";

const BlogPage: NextPage<IPosts> = ({ allPosts }) => {
  formatPosts(allPosts);
  return (
    <MainLayout pathname="/blog">
      <div className="w-full gradient relative -z-10 after after-2">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0">
          <div className="gradient-alt circle absolute" />
        </div>

        <div className="container py-32 sm:py-40 md:py-56">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Blog</h1>
        </div>
      </div>

      <div className="container">
        <div className="xl:px-64 lg:px-48">
          {/* Search */}
          <div className="container my-16 lg:grid grid-cols-5 mx-auto">
            <div className="border border-1 border-g-25 px-4 rounded-full py-4 col-span-2 flex">
              <IoIosSearch className="text-xl text-g-25 mr-2" />
              <input type="text" placeholder="Search" className="outline-none bg-transparent text-g-50" />
            </div>
            <div className="col-span-3 my-auto ml-4 bg-g-25 h-1 rounded hidden lg:block" />
          </div>

          <h3 className="text-md font-bold p100">Latest</h3>
          <h2 className="text-2xl mb-12 sm:text-4xl font-bold g100">Article</h2>

          {allPosts &&
            allPosts.map(({ title, description, imageUrl, slug }: any) => <LargeCard key={title} title={title} imageUrl={imageUrl} slug={slug} description={description} />)}
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
