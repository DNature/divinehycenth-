import React from "react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { DiStackoverflow } from "react-icons/di";
import { Social } from "../interfaces";
import { FaDev, FaMedium } from "react-icons/fa";

export const social: Social[] = [
  {
    link: "//github.com/dnature",
    icon: <IoLogoGithub className="text-xl text-white" />,
  },
  {
    link: "//twitter.com/DivineHycenth",
    icon: <IoLogoTwitter className="text-xl text-white" />,
  },
  {
    link: "//dev.to/dnature",
    icon: <FaDev className="text-xl text-white" />,
  },
  {
    link: "//stackoverflow.com/users/11624868/divine-hycenth",
    icon: <DiStackoverflow className="text-xl text-white" />,
  },
  {
    link: "//medium.com/@divinehycenth8",
    icon: <FaMedium className="text-xl text-white" />,
  },
];
