import React from "react";
import Progress from "../components/countdown";
import CustomLink from "../components/CustomLink";
import { NextPage } from "next";

const Sent: NextPage = () => {
  const counter = Progress();
  return (
    <>
      <div className="w-screen h-full overflow-x-hidden md:pt-24 pt-16">
        <div className="fixed top-0 bg-p-100 h-3 progress"></div>
        <div className="max-w-2xl mx-auto text-center">
          <svg width="244" height="239" viewBox="0 0 244 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M211.078 51.0781L220.922 60.9219L104 177.953L43.0781 116.922L52.9219 107.078L104 158.047L211.078 51.0781Z" fill="var(--primary0)" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M178.487 54.0129C159.531 36.6177 134.256 26 106.5 26C47.6817 26 0 73.6817 0 132.5C0 191.318 47.6817 239 106.5 239C165.318 239 213 191.318 213 132.5C213 127.272 212.623 122.131 211.895 117.105L197.988 131.012C197.996 131.507 198 132.003 198 132.5C198 183.034 157.034 224 106.5 224C55.9659 224 15 183.034 15 132.5C15 81.9659 55.9659 41 106.5 41C130.113 41 151.638 49.9448 167.869 64.6309L178.487 54.0129Z"
              fill="var(--primary0)"
            />
          </svg>

          <h1 className="mt-12 text-xl font-bold">Your message’s been recieved!</h1>
          <p className="mt-4 text-base text-p-100">
            <CustomLink href={counter <= 0 ? "/" : ""}>Click here if you’re not redirected in {counter}</CustomLink>
          </p>
        </div>

        <style jsx>
          {`
          .progress {
            animation: inc ${counter}s linear;
            // width: ${counter * 20}%;
          }

          @keyframes inc {
            from {
              width: ${counter * 20}%;
            }
            to {
              width: 0;
            }
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Sent;
