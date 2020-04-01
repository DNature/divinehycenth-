import * as React from "react";
import { NextPage } from "next";
import { IoIosPlay } from "react-icons/io";

import Navbar from "../components/nav";
import LargeCard from "../components/Cards/LargeCard";
import SmallCard from "../components/Cards/SmallCard";

const IndexPage: NextPage = () => (
  <div className="relative">
    <Navbar pathname="/" />
    <div className="w-full gradient relative -z-10">
      <div className="w-full h-full overflow-hidden absolute top-0 left-0">
        <div className="gradient-alt circle absolute" />
      </div>
      <div className="container flex justify-between pt-32 z-10  pb-32 lg:pb-0">
        <div className="lg:flex items-center lg:w-4/6 lg:mr-12">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Hi, I’m Divine Hycenth
            </h1>
            <p className="text-xl lg:mr-40 text-gray-200">
              I'm a full stack software developer creating open source projects
              and writing about modern JavaScript, Typescript, Graphql, and
              development.
            </p>
          </div>
        </div>
        <div className="w-3/6 hidden lg:grid">
          <img src="/images/avatar.png" alt="avatar" />
        </div>
      </div>
    </div>

    <section className="container">
      <div className="-mt-16 lg:grid gap-8 grid-cols-7">
        <div className="sm:col-span-4">
          <LargeCard
            title="Build a progressive web app with Nextjs"
            image="/images/blog/woman.jpg"
          >
            Cillum ea cillum veniam ut amet magna dolor incididunt. Nulla qui.
          </LargeCard>
        </div>
        <div className="sm:col-span-3 sm:px-8 hidden lg:block">
          <div className="card-bg rounded-md px-5 py-5 shadow grid grid-cols-6 grid-rows-3 gap-3">
            <SmallCard title="Article" image="/images/blog/apple.jpg">
              Build a progressive web app with Nextjs
            </SmallCard>
            <SmallCard title="Article" image="/images/blog/grass.jpg">
              Build a progressive web app with Nextjs
            </SmallCard>
            <SmallCard title="Article" image="/images/blog/main.jpg">
              Build a progressive web app with Nextjs
            </SmallCard>
          </div>
        </div>
      </div>
    </section>

    <div className="container my-20 flex justify-center">
      <div className="lg:grid gap-6 grid-cols-5 w-full h-32">
        <div className="col-span-2 ml-auto w-4/6 my-auto bg-gray-400 h-1 ml-10 ml-auto rounded hidden lg:block"></div>
        <div className="col-span-1 h-full mx-auto">
          <div className="rounded-full border-1 w-32 mx-auto h-32 border-gray-400 grid justify-center items-center cursor-pointer">
            <IoIosPlay className="text-5xl text-gray-400 hover:text-gray-600" />
          </div>
        </div>
        <div className="col-span-2 w-4/6 my-auto mr-auto bg-gray-400 h-1 rounded hidden lg:block"></div>
      </div>
    </div>

    <section className="container">
      <div className="lg:grid gap-8 grid-cols-7">
        <div className="sm:col-span-4">
          <LargeCard
            title="Build a progressive web app with Nextjs"
            image="/images/blog/grass.jpg"
          >
            Cillum ea cillum veniam ut amet magna dolor incididunt. Nulla qui.
          </LargeCard>
        </div>
        <div className="sm:col-span-3 lg:px-8">
          <div className="card-bg rounded-md px-5 py-5 shadow">
            <h2 className="g100 text-xl font-bold">
              Build a progressive web app with Nextjs
            </h2>
            <div className="g75">
              Cillum ea cillum veniam ut amet magna dolor incididunt. Nulla qui
              cillum consequat deserunt exercitation. Fugiat duis anim duis
              deserunt non ex consequat.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default IndexPage;
