import * as React from "react";
import CustomLink from "../CustomLink";
import { Favourite } from "../../interfaces";

const SmallCard = ({ imageUrl = "/images/blog/woman.jpg", type = "Article", title, slug }: Favourite): JSX.Element => {
  return (
    <>
      <span
        className="col-span-2 rounded"
        style={{
          background: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></span>
      <span className="col-span-4 my-auto">
        <span className="text-sm font-semibold text-a-75">{type}</span>
        <CustomLink href={`/blog/${slug}`}>
          <h2 className="g100 text-base font-bold hover:underline">{title}</h2>
        </CustomLink>
      </span>
    </>
  );
};

export default SmallCard;
