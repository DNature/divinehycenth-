import React from "react";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoDribbble,
} from "react-icons/io";
import { DiStackoverflow } from "react-icons/di";
import { Social } from "../interfaces";

export const social: Social[] = [
  {
    link: "/about",
    icon: <IoLogoGithub className="text-xl text-white" />,
  },
  {
    link: "/blog",
    icon: <IoLogoTwitter className="text-xl text-white" />,
  },
  {
    link: "/works",
    icon: <IoLogoLinkedin className="text-xl text-white" />,
  },
  {
    link: "/contact",
    icon: <IoLogoDribbble className="text-xl text-white" />,
  },
  {
    link: "//stackoverflow.com",
    icon: <DiStackoverflow className="text-xl text-white" />,
  },
];
