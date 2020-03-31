import * as React from "react";
import { NextPage } from "next";
import Navbar from "../components/nav";
import LargeCard from "../components/Cards/LargeCard";

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
            <h1 className="text-3xl font-bold text-white">
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
      <div className="-mt-16 lg:flex justify-between">
        <div className="lg:w-4/6 lg:mr-12">
          <LargeCard
            title="Build a progressive web app with Nextjs"
            image="/images/blog/grass.jpg"
          >
            Cillum ea cillum veniam ut amet magna dolor incididunt. Nulla qui.
          </LargeCard>
          <LargeCard
            title="Build a progressive web app with Nextjs"
            image="/images/blog/apple.jpg"
          >
            Cillum ea cillum veniam ut amet magna dolor incididunt. Nulla qui.
          </LargeCard>
        </div>
        <div className="lg:w-3/6 lg:pl-6">
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
