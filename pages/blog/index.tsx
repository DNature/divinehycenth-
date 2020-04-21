import React from "react";
import { NextPage, GetStaticProps } from "next";
import PropTypes from "prop-types";

import MainLayout from "../../layouts/Main";
import LargeCard from "../../components/Cards/LargeCard";
import { getAllPosts } from "../../utils/api";
import { IPosts } from "../../interfaces";
import formatPosts from "../../utils/formatPosts";
import Search from '../../components/search';
import NextHead from '../../components/meta';

const BlogPage: NextPage<IPosts> = ({ allPosts }) => {
  formatPosts(allPosts);
  return (
    <MainLayout pathname="/blog">
      <NextHead pageTitle="Divine Hycenth  - Blog" path="/blog" description="Divine Hycenth  - Blog" imageUrl="/images/card.png" />
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
          <Search data={allPosts} />

          <h3 className="text-md font-bold p100">Latest</h3>
          <h2 className="text-2xl mb-12 sm:text-4xl font-bold g100">Article</h2>

          {allPosts &&
            allPosts.map(({ title, tags, description, imageUrl, slug }: any, i) => {
              return <LargeCard key={title + i} tags={tags} slug={slug} title={title} imageUrl={imageUrl} description={description} />;
            })}
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "description", "imageUrl", "tags"]);

  return {
    props: { allPosts },
  };
};

BlogPage.propTypes = {
  allPosts: PropTypes.any,
};

export default BlogPage;
