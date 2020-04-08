import * as React from "react";
import Router from 'next/router'
import { IoIosArrowRoundForward } from "react-icons/io";
import { LargeCardProps } from '../../interfaces';



const LargeCard = ({
  image = "/images/blog/apple.jpg",
  title,
  children,
  path
}: LargeCardProps): JSX.Element => {

  const handleClick = () => {
    Router.push({
      pathname: `/blog/${path}`,
      query: {
        image,
        title,
      }
    })
  }
  
  return (
    <div className="card-bg rounded-md px-4 py-4 sm:px-5 sm:py-5 shadow flex justify-between mb-6">
      <div
        className="w-2/6 h-full rounded"
        style={{
          background: `url("${image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <img src="/images/blog/apple.jpg" alt="apple" /> */}
      </div>
      <div className="w-4/6 pl-5 my-auto">
        <h2 className="g100 text-sm sm:text-xl font-bold">{title}</h2>
        <p className="g75 text-xs sm:text-base">{children}</p>

        
          <p className="flex text-xs sm:text-sm mt-2 a100 cursor-pointer justify-between w-12 hover:w-16" onClick={handleClick}>
            Read
            <span className="my-auto hover:pl-3 ">
              <IoIosArrowRoundForward />
            </span>
          </p>
      </div>
    </div>
  );
};

export default LargeCard;
