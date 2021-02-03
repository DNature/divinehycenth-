import React from "react";
import { NextPage } from "next";

import MainLayout from "../layouts/Main";
import CrwnClothing from "../components/works/CrwnClothing";
import OfficePages from "../components/works/OfficePages";
import MovieTime from "../components/works/MovieTime";
import Transferwise from "../components/works/Transferwise";
import Cleanfits from "../components/works/Cleanfits";
import Unsplash from "../components/works/Unsplash";
import NextHead from "../components/meta";
import OpenSource from "../components/works/open-source";

const WorksPage: NextPage = () => {
  return (
    <MainLayout pathname="/works">
      <NextHead
        pageTitle="Divine Hycenth - Recent projects"
        path="/works"
        imageUrl="/images/tiger.jpg"
        description="Here you can find some of my recent projects including open source projects"
      />

      <div className="w-full gradient relative -z-10  after after-2">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
          <div className="gradient-alt -rotate-180  circle absolute" />
        </div>
        <div className="absolute h-full w-full left-0 top-0 opacity-50 -z-4 works" />
        <div className="container py-32 sm:py-40 md:py-56 z-20">
          <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-white">Recent projects</h1>
        </div>
      </div>

      <div className="-mt-24">
        <div className="lg:px-8 px-4 mb-12">
          <OpenSource
            title="Nature UI"
            description="Modular React based component library with built in support for tailwindcss"
            fullDescription="Nature UI provides a set of accessible, reusable, extensible and composable React components that make it super easy to create websites and apps with tailwindcss."
            homePage="//nature-ui.com"
            githubUrl="//github.com/nature-ui/nature-ui"
            imageUrl="/images/works/nature-ui.png"
          />
          <OpenSource
            title="Hardocs"
            description="A cross Platform desktop app for project documentation Designed with hardware documentation in mind."
            fullDescription="Hardocs is a Cross Platform Desktop App funded by European Open Science Cloud focused on the creation, storing, presentation, and search of metadata related to project documents and it is designed with hardware documentation in mind."
            homePage="//hardocs.github.io/"
            githubUrl="//github.com/Hardocs/desktop-app"
            imageUrl="/images/works/hardocs.png"
          />
          <OpenSource
            title="CombatCovid"
            description="Combat covid with hardware Search for well documented designs 🔍 and document new solutions"
            fullDescription="CombatCovid is an open source registry for well documented medical equipments. This project was developed to help engineers replicate medical equipments and it was inspired by the Covid-19 pandemic in 2020."
            homePage="//combatcovid.equipment/"
            githubUrl="//github.com/CombatCovid/"
            imageUrl="/images/works/combat-covid/main.png"
          />
          <CrwnClothing />
          <OfficePages />
          <MovieTime />
          <Transferwise />
          <Cleanfits />
          <Unsplash />
          {/*  */}
        </div>
      </div>
    </MainLayout>
  );
};

export default WorksPage;
