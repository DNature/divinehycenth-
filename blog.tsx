import React from "react";
import {
  NextPage,
  // GetStaticProps, GetStaticPaths
} from "next";
import PropTypes from "prop-types";

import MainLayout from "./layouts/Main";
import {
  getAllPosts,

  // getPostsBySlug
} from "./utils/api";

const BlogLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => (
  <MainLayout pathname="/works">
    <div className="w-full gradient relative -z-10">
      <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
        <div className="gradient-alt circle absolute" />
      </div>
      <div
        className="absolute h-full w-full left-0 top-0 opacity-25 -z-4"
        style={{
          background: 'url("/images/blog/main.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="container md:pt-56">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:w-3/5">
          Handling file uploads with Apollo Server 2.0
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

export const getStaticProps = async () =>
  // { params: { slug } }: any
  {
    // console.log(slug);
    const post = "";

    // const post = getPostsBySlug(slug, [
    //   "title",
    //   "description",
    //   "imageUrl"
    // ])

    return {
      props: {
        post,
      },
    };
  };

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  console.log(posts);
  return {
    // paths: posts.map((post) => {
    //   return {
    //     params: {
    //       slug: post.slug,
    //     },
    //   };
    // }),
    fallback: false,
  };
};

BlogLayout.propTypes = {
  children: PropTypes.node,
};

export default BlogLayout;
