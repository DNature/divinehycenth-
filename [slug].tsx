import * as React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";

import BlogLayout from "./blog";
import { getPostsBySlug, getAllPosts } from "./utils/api";
// @ts-ignore
import markdownToHtml from "./utils/markdownToHtml";
import PostBody from "./components/PostBody";

// @ts-ignore
// eslint-disable-next-line react/prop-types
const Blog: NextPage = ({ post }) => {
  const Content = post?.content;
  return (
    <>
      <BlogLayout>
        <PostBody content={Content} />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const post = getPostsBySlug(slug, ["slug", "content", "coverImage", "title"]);
  const content = await markdownToHtml(post.content || "");
  // fs.mkdirSync( path.join( process.cwd(), 'test'))
  // const file = (f: string, content: string): string | undefined => {
  //   if(!f) {
  //     return;
  //   }
  //   fs.writeFileSync(path.join(process.cwd(), '/test/'+slug+'.md'), content)
  //   const filename =  fs.readdirSync(path.join(process.cwd(), '/test')).filter(file => {
  //     if(file.replace(".md", '') === f){
  //       console.log({file})
  //       return file
  //     }

  //     return
  //   }).join("")
  //   const completePath = path.join(__dirname, '/test/'+filename)
  //   if(completePath){
  //     console.log(completePath)
  //     return completePath
  //   }
  //   return
  // }

  // const c = file(slug, post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export default Blog;
