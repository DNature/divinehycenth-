import React from "react";
import MainLayout from "../components/Layouts/Main";

const AboutPage: React.FunctionComponent = () => (
  <MainLayout pathname="/about">
    <h1 className="text-5xl">About page</h1>
  </MainLayout>
);

export default AboutPage;
