import * as React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";


import { getPostsBySlug, getAllPosts } from '../../utils/api';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const Blog: NextPage = ({ slug }) => {
  return (
  <>

    <div>The slug for this page is: {slug}</div>;
  </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  
  const posts = getAllPosts(['slug'])
  console.log({ posts });
  const paths = posts.map(post => {
    return {
      params: {
        slug: post.slug
      }
    };
  });

  console.log("paths: ", paths);
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug }
}: any) => {
  const post = getPostsBySlug(slug, [
    "slug",
    "content",
    "ogImage",
    "coverImage"
  ]);
  return { props: post };
};

export default Blog;
