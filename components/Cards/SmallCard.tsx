import * as React from "react";
import PropTypes from 'prop-types'

import CustomLink from "../CustomLink";
import { Favourite } from "../../interfaces";


const SmallCard: React.FC<Favourite> = ({ imageUrl = "/images/blog/woman.jpg", type = "Article", title, slug }): JSX.Element => {

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

SmallCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default SmallCard;
