import React from "react";
import { NextPage } from "next";

import MainLayout from "../layouts/Main";
import LargeCard from "../components/Cards/LargeCard";

const WorksPage: NextPage = () => (
  <MainLayout pathname="/works">
    <div className="w-full gradient relative -z-10">
      <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
        <div className="gradient-alt -rotate-180  circle absolute" />
      </div>
      <div
        className="absolute h-full w-full left-0 top-0 opacity-25 -z-4"
        style={{
          background: 'url("/images/blog/woman.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="container py-32 sm:py-40 md:py-56 z-20">
        <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
          Recent projects
        </h1>
      </div>
    </div>

    <div className="container -mt-20">
      <div className="xl:px-64 lg:px-48">
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

export default WorksPage;
