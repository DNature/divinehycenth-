import * as React from "react";

const SmallCard = ({
  image = "/images/blog/woman.jpg",
  title = "Article",
  children
}: {
  image: string;
  title: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <span
        className="col-span-2 rounded"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      ></span>
      <span className="col-span-4 my-auto">
        <span className="text-sm p100 font-semibold">{title}</span>
        <h2 className="g100 text-base font-bold">{children}</h2>
      </span>
    </>
  );
};

export default SmallCard;
