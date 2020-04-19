import React from "react";
import { NextPage } from "next";

import MainLayout from "../layouts/Main";
import LeftDialog from "../components/dialogs/leftDialog";

const WorksPage: NextPage = () => {
  return (
    <MainLayout pathname="/works">
      <div className="w-full gradient relative -z-10  after after-2">
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
          <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-white">Recent projects</h1>
        </div>
      </div>

      <div className="-mt-20">
        <div className="lg:px-8 px-4">
          {/* CRWN CLOTHING */}
          <LeftDialog />
          {/*  */}
        </div>
      </div>
    </MainLayout>
  );
};

export default WorksPage;
