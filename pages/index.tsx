import * as React from "react";
import { NextPage, GetStaticProps } from "next";
import { IoIosPlay } from "react-icons/io";
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

const IndexPage: NextPage<IPosts> = ({ allPosts }) => {
  formatPosts(allPosts);
  const heroPost = allPosts && allPosts[0];
  const morePosts = allPosts?.slice(1, 4);

  return (
    <MainLayout pathname="/">
      <div className="relative">
        <div className="w-full gradient relative -z-5">
          <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
            <div className="gradient-alt circle absolute -z-4" />
          </div>
          <div className="container flex justify-between pt-32 z-10 pb-32 lg:pb-0">
            <div className="lg:flex items-center lg:w-4/6 lg:mr-12">
              <div className="z-50">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">
                  Hi, I’m <span className="hero">Divine Hycenth</span>{" "}
                </h1>
                <p className="text-xl lg:mr-40 text-white">I'm a full stack software developer & UI/UX designer. I love writing and creating open source projects.</p>
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
          <div className="container my-16 mx-auto">
            <div className="lg:grid gap-6 grid-cols-7 w-full h-32">
              <div className="col-span-3 ml-auto w-4/6 my-auto bg-g-25 h-1 ml-10 ml-auto rounded hidden lg:block"></div>
              <div className="col-span-1 mx-auto  my-auto">
                <div className="rounded-full border-1 w-24 mx-auto h-24 border-g-25 grid justify-center items-center">
                  <IoIosPlay className="text-3xl text-g-25 hover:text-g-50 cursor-pointer" />
                </div>
              </div>
              <div className="col-span-3 w-4/6 my-auto mr-auto bg-g-25 h-1 rounded hidden lg:block"></div>
            </div>
          </div>

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
