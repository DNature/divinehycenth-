import * as React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IPost } from "../../interfaces";
import CustomLink from "../CustomLink";
import FormatDate from "../date";

const getNChars = (val: string): string => {
  const sortNChars = val.substring(0, 100)
  if(val.length <= sortNChars.length){
    return val
  }
  
  return sortNChars + "..."

}

const LargeCard = ({ imageUrl, title, description, slug, tags }: IPost): JSX.Element => {
  return (
    <CustomLink href={`/blog/${slug}`}>
      <div className="card-bg rounded-md px-4 py-4 sm:px-5 sm:py-5 shadow flex justify-between mb-6">
        <div
          className="w-2/6 h-full rounded hidden sm:block"
          style={{
            background: `url("${imageUrl}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* <img src="/images/blog/apple.jpg" alt="apple" /> */}
        </div>
        <div className="sm:w-4/6 w-full sm:pl-5 my-auto">
          <h2 className="g100 text-sm sm:text-xl font-bold">{title}</h2>
          <FormatDate dateString={`${slug.split("_")[0]}`} className="text-sm g50 mb-4" />
          <p className="g75 text-xs sm:text-base">{getNChars(description)}</p>

          <p className="flex text-xs sm:text-sm mt-2 a100 cursor-pointer justify-between w-12 hover:w-16">
            Read
            <span className="my-auto hover:pl-3 ">
              <IoIosArrowRoundForward />
            </span>
          </p>
          {tags &&
            tags.map((tag, i) => (
              <button key={tag + i} className="bg-g10 hidden sm:inline-block rounded-full px-3 font-bold g75 text-sm hover:opacity cursor-pointer mr-2 mt-4">
                #{tag}
              </button>
            ))}
        </div>
      </div>
    </CustomLink>
  );
};

export default LargeCard;
