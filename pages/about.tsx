import React from "react";
import { NextPage } from "next";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin, IoMdCheckbox } from "react-icons/io";
import { DiStackoverflow } from "react-icons/di";

import MainLayout from "../layouts/Main";
import NextHead from "../components/meta";
import CustomLink from "../components/CustomLink";

const description = "I’m a full stack software developer, technical writer, and UI/UX Designer.";

const AboutPage: NextPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setTimeout(() => {
      setOpen(!open);
    }, 1000);
  };

  return (
    <MainLayout pathname="/about">
      <NextHead pageTitle="Divine Hycenth - About" path="/about" description={description} imageUrl="/images/card.png" />

      <div className="w-full gradient relative -z-10 after after-2">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
          <div className="gradient-alt -rotate-180  circle absolute" />
          <div className="gradient-alt circle-2 absolute" />
        </div>
        <div
          className="absolute h-full w-full left-0 top-0 opacity-25 -z-4"
          style={{
            background: 'url("/images/me.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="container py-32 sm:py-40 md:py-40 z-20">
          <h1 className="text-center text-xl sm:text-3xl lg:text-4xl font-bold text-white pb-56 ">About me</h1>
        </div>
      </div>

      <div className="container -mt-64">
        <div className="xl:px-32 lg:px-20">
          <div className="card-contact shadow rounded-lg p-6 lg:flex">
            <div className=" lg:w-2/5 lg:mr-6 ">
              <div className="lg:relative rounded-full overflow-hidden lg:overflow-visible h-48 w-48 lg:h-auto lg:w-auto mx-auto">
                <div className="btn lg:block rounded hidden  py-48 mt-16 items-center"></div>
                <img src="/images/avatar.png" alt="Divine Hycenth" className="lg:absolute bottom-0 mx-auto right-0 left-0" />
              </div>

              <div className="flex max-w-2xl w-full mx-auto sm:px-32 lg:px-12 justify-between my-6">
                <CustomLink href="//github.com/dnature" target="_blank">
                  <IoLogoGithub className="text-2xl text-g-100" />
                </CustomLink>

                <CustomLink href="//stackoverflow.com/users/11624868/divine-hycenth" target="_blank">
                  <DiStackoverflow className="text-2xl text-a-100" />
                </CustomLink>
                <CustomLink href="//twitter.com/DivineHycenth" target="_blank">
                  <IoLogoTwitter className="text-2xl text-blue-600" />
                </CustomLink>
                <CustomLink href="//linkedin.com/in/dnature" target="_blank">
                  <IoLogoLinkedin className="text-2xl text-blue-500" />
                </CustomLink>
              </div>
            </div>

            <div className=" lg:w-3/5">
              <h2 className="text-xl xl:text-2xl  text-g-100">I’m Divine Hycenth.</h2>
              <p className="text-base text-g-75">{description}</p>
              <br />
              <p className="text-base text-g-75">
                I love <b> playing Football</b>, <b>watching football</b>, <b>Weight lifting</b>, and playing <b>Chess.</b>
              </p>
              <p className="text-base text-g-75">I started off my carrier as a UI/UX designer before i switched into programming.</p>
              <br />
              <h3 className="text-md text-g-75 font-semibold">What i do</h3>
              <p className="text-base text-g-75">
                I enjoy building software solutions for both organizations and open source. I wanted an adds free platform that i can share how i was able to solve some technical
                problems and also share about the tools i use to solve problems and stay productive so i created this blog.
              </p>
              <p className="text-base text-g-75">
                I also spend some of my free time learning and programming in <b>Python</b> and some other libraries.
              </p>
              <br />

              <p className="font-bold text-md text-g-100">Below are some skills i poses.</p>

              {/* Programming languages */}
              <br />
              <h3 className="text-xl text-g-100">Programming Languages</h3>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-100" />
                <p className="ml-4 text-base text-g-75">Javascript</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-100" />
                <p className="ml-4 text-base text-g-75">Typescript</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-100" />
                <p className="ml-4 text-base text-g-75">Python</p>
              </div>

              {/* Backend */}
              <br />
              <h3 className="text-xl text-g-100">Backend Frameworks/Libraries</h3>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-75" />
                <p className="ml-4 text-base text-g-75">Node.js</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-75" />
                <p className="ml-4 text-base text-g-75">Express.js</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-75" />
                <p className="ml-4 text-base text-g-75">Graphql</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-75" />
                <p className="ml-4 text-base text-g-75">PostgreSQL</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-75" />
                <p className="ml-4 text-base text-g-75">Mongodb</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-75" />
                <p className="ml-4 text-base text-g-75">Typeorm</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-p-75" />
                <p className="ml-4 text-base text-g-75">Django</p>
              </div>

              {/* Frontend */}
              <br />
              <h3 className="text-xl text-g-100">Frontend Frameworks/Libraries</h3>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-a-100" />
                <p className="ml-4 text-base text-g-75">React.js</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-a-100" />
                <p className="ml-4 text-base text-g-75">Next.js</p>
              </div>
              <div className="flex">
                <IoMdCheckbox className="my-auto text-xl text-a-100" />
                <p className="ml-4 text-base text-g-75">Vuejs</p>
              </div>
              <div data-open={open} className={`${!open && "hidden"}`}>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">Gridsome</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">Bootstrap</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">HTML & CSS</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">jQuery</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">Redux</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">Graphql</p>
                </div>

                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">Apollo Client</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">Sass</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">Material Design</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-100" />
                  <p className="ml-4 text-base text-g-75">...</p>
                </div>

                {/* Mobile Development */}
                <br />
                <h3 className="text-xl text-g-100">Mobile Development</h3>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-a-75" />
                  <p className="ml-4 text-base text-g-75">React-Native</p>
                </div>

                {/* Testing */}
                <br />
                <h3 className="text-xl text-g-100">Testing</h3>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Jest</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Enzyme</p>
                </div>
                {/* <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">React Testing Library</p>
                </div> */}

                {/* Devops */}
                <br />
                <h3 className="text-xl text-g-100">Dev Ops</h3>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Docker + Compose</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Nginx</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">PM2</p>
                </div>

                {/* Build tools */}
                <br />
                <h3 className="text-xl text-g-100">Build tolls</h3>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Webpack</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Babel</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Eslint</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Gulp</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Git</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Prettier</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">TSLint</p>
                </div>

                {/* UI/UX */}
                <br />
                <h3 className="text-xl text-g-100">UI/UX Design</h3>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Figma</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Photoshop</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Adobe Illustrator</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Coreldraw</p>
                </div>

                {/* Operating systems */}
                <br />
                <h3 className="text-xl text-g-100">Operating systems (OS)</h3>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Linux (UBUNTU)</p>
                </div>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Windows 10</p>
                </div>

                {/* Coding editor */}
                <br />
                <h3 className="text-xl text-g-100">Coding Editor</h3>
                <div className="flex">
                  <IoMdCheckbox className="my-auto text-xl text-p-100" />
                  <p className="ml-4 text-base text-g-75">Visual Studio Code (VSCode)</p>
                </div>
              </div>
              <button onClick={handleOpen} className={`px-5 font-bold shadow-primary hover:opacity-75 rounded-full py-2 mt-8 ${open ? "bg-g-50 text-white" : "btn"}`}>
                {!open ? "See all" : "See less"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
