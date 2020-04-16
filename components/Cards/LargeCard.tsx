import * as React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IPost } from "../../interfaces";
import CustomLink from "../CustomLink";
import FormatDate from "../date";
import Tag from '../tag';
// style = {{ backgroundColor: bgColor( tag ), color: color( tag ) }}

const getNChars = (val: string): string => {
  const sortNChars = val.substring(0, 100);
  if (val.length <= sortNChars.length) {
    return val;
  }

  return sortNChars + "...";
};


const LargeCard = ({ imageUrl, title, description, slug, tags }: IPost): JSX.Element => { 
  
 
  return (
    <div className="card-bg rounded-md px-4 py-4 sm:px-5 sm:py-5 shadow flex justify-between mb-6">
      <div className="w-2/6 gradient rounded hidden sm:block ">
        <CustomLink href={`/blog/${slug}`}>
          <div
            className="h-full rounded opacity-75 hover:opacity-100 transition-all duration-200"
            style={{
              background: `url("${imageUrl}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </CustomLink>
      </div>
      <div className="sm:w-4/6 w-full sm:pl-5 my-auto">
        <CustomLink href={`/blog/${slug}`}>
          <h2 className="text-g-100 text-sm sm:text-xl font-bold hover:text-p-100">{title}</h2>
        </CustomLink>
        <FormatDate dateString={`${slug.split("_")[0]}`} className="text-sm text-g-50 mb-4" />
        <p className="text-g-75 text-sm sm:text-base">{getNChars(description)}</p>

        <CustomLink href={`/blog/${slug}`}>
          <p className="flex text-xs sm:text-sm mt-2 text-a-100 cursor-pointer justify-between w-12 hover:w-16">
            Read
            <span className="my-auto hover:pl-3 ">
              <IoIosArrowRoundForward />
            </span>
          </p>
        </CustomLink>
        {tags &&
          tags.map((tag, i) => (
            <Tag key={tag + i} tag={tag} />
          ))}
      </div>
    </div>
  );
};

export default LargeCard; 
