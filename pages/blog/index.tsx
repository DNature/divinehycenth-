import React from "react";
import { NextPage } from "next";
import { IoIosSearch } from "react-icons/io";

import MainLayout from "../../components/Layouts/Main";
import LargeCard from "../../components/Cards/LargeCard";

const BlogPage: NextPage = () => (
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

        <LargeCard
          title="Build a progressive web app with Nextjs"
          image="/images/blog/woman.jpg"
        >
          Cillum ea cillum veniam ut amet magna dolor incididunt. Nulla qui.
        </LargeCard>
        <LargeCard
          title="Build a progressive web app with Nextjs"
          image="/images/blog/main.jpg"
        >
          Cillum ea cillum veniam ut amet magna dolor incididunt. Nulla qui.
        </LargeCard>
      </div>
    </div>
  </MainLayout>
);

export default BlogPage;
