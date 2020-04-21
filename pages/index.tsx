import * as React from "react";
import { NextPage, GetStaticProps } from "next";
import PropTypes from "prop-types";

import LargeCard from "../components/Cards/LargeCard";
import SmallCard from "../components/Cards/SmallCard";
import MainLayout from "../layouts/Main";
import { getAllPosts } from "../utils/api";
import { IPosts } from "../interfaces";
import formatPosts from "../utils/formatPosts";
import favourite from "../data/favourite";
import CustomLink from "../components/CustomLink";
import Search from "../components/search";
import WorksCard from "../components/works/worksCard";
import workData from "../data/workData";
import VideoDialog from "../components/video";
import NextHead from "../components/meta";

const description = "I'm a full stack software developer & UI/UX designer. I love writing about things i've learnt and creating or participating in open source projects.";

const IndexPage: NextPage<IPosts> = ({ allPosts }) => {
  formatPosts(allPosts);
  const heroPost = allPosts && allPosts[0];
  const morePosts = allPosts?.slice(1, 4);

  return (
    <MainLayout pathname="/">
      <NextHead path="/" description={description} imageUrl="/images/card.png" />
      <div className="relative">
        <div className="w-full gradient relative -z-5">
          <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
            <div className="gradient-alt circle absolute -z-4" />
          </div>
          <div className="container flex justify-between pt-32 z-10 pb-32 lg:pb-0">
            <div className="lg:flex items-center lg:w-4/6 lg:mr-12">
              <div className="z-50">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">Hi, I’m Divine Hycenth</h1>
                <p className="text-md md:text-xl lg:mr-40 text-white">{description}</p>
              </div>
            </div>
            <div className="w-3/6 hidden lg:grid">
              <img src="/images/avatar.png" alt="avatar" />
            </div>
          </div>
        </div>

        <div className="relative">
          <section className="container before before-1">
            <div className="-mt-16 lg:grid gap-8 grid-cols-7">
              <div className="sm:col-span-4">
                {heroPost && <LargeCard slug={heroPost.slug} tags={heroPost.tags} title={heroPost.title} imageUrl={heroPost.imageUrl} description={heroPost.description} />}
              </div>
              <div className="sm:col-span-3 sm:px-8 hidden lg:block">
                <div className="card-bg rounded-md px-5 py-5 shadow grid grid-cols-6 grid-rows-3 gap-3">
                  {favourite.map((fav, i) => (
                    <SmallCard key={fav.title + i} type={fav.type} imageUrl={fav.imageUrl} slug={fav.slug} title={fav.title} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Video */}
          <VideoDialog />

          {/* Search */}

          <Search data={allPosts} />

          <main className="container">
            <div className="lg:grid gap-8 grid-cols-7">
              <div className="sm:col-span-4">
                {/* Latest Article */}
                <div className="mb-10">
                  <h3 className="text-md font-bold text-p-100">Latest</h3>
                  <div className="flex">
                    <h2 className="text-2xl sm:text-4xl font-bold text-g-100">Article</h2>
                    <div className="ml-12 my-auto ">
                      <CustomLink href="/blog">
                        <button className="px-5 font-bold shadow-primary rounded-full py-2 btn outline-none border-none ">See all</button>
                      </CustomLink>
                    </div>
                  </div>
                </div>
                {morePosts &&
                  morePosts.map(({ title, description, imageUrl, slug, tags }, i) => {
                    return <LargeCard key={title + i} tags={tags} slug={slug} title={title} imageUrl={imageUrl} description={description} />;
                  })}
              </div>
              <div className="sm:col-span-3 lg:px-8">
                {/* Latest Project */}
                <div className="mb-10">
                  <h3 className="text-md font-bold text-p-100">Latest</h3>
                  <div className="flex">
                    <h2 className="text-2xl sm:text-4xl font-bold text-g-100">Projects</h2>
                    <div className="ml-12 my-auto ">
                      <CustomLink href="/works">
                        <button className="px-5 font-bold shadow-primary rounded-full py-2 btn outline-none border-none ">See all</button>
                      </CustomLink>
                    </div>
                  </div>
                </div>

                <div className="">{workData && workData.map((data) => <WorksCard key={data.github} data={data} />)}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "description", "imageUrl", "date", "tags"]);

  return {
    props: { allPosts },
  };
};

IndexPage.propTypes = {
  allPosts: PropTypes.array,
};

export default IndexPage;
