import React, { useState } from "react";
import CustomLink from "../CustomLink";
// import ReactDOM from 'react-dom'
import { IoIosSearch, IoIosClose } from "react-icons/io";
import PropTypes from "prop-types";

import {matchSorter} from "match-sorter";
import Tag from "../tag";
import { filterNChars } from "../../utils/filterChars";
import Portal from "../Portal";

interface Props {
  data?: {
    title?: string;
    description?: string;
    imageUrl?: string;
    tags?: string[];
  }[];
}

const Search: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e: any): void => {
    setIsOpen(true);
    setText(e.target.value);
  };

  const result = text.length && data ? matchSorter(data, text, { keys: ["title", "description", "tags"] }) : [];

  const handleClose = (): void => {
    setText("");
    setIsOpen(false);
  };

  return (
    <>
      <div className="container mb-16 lg:grid grid-cols-8 mx-auto">
        <div className="border border-1 border-g-25 px-4 rounded-full py-4 col-span-2 flex">
          <IoIosSearch className="text-xl text-g-25 mr-2" />
          <input type="text" value={text} placeholder="Search" className="outline-none bg-transparent text-g-50" onChange={handleChange} />
        </div>
        <div className="col-span-2 w-4/6 my-auto ml-4  bg-g-25 h-1 rounded hidden lg:block" />
      </div>

      {isOpen && (
        <Portal>
          <div className={`h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center overflow-hidden ${isOpen ? "block" : "hidden"}`}>
            <div className="h-screen w-screen relative bg-overlay top-0 left-0 bottom-0 overflow-hidden z-10" onClick={handleClose}></div>

            <div className="max-w-lg w-full z-50 mt-6 absolute top-0 overflow-scroll no-scroll mb-20 rounded-md h-95">
              {/* Searchbox */}
              <div className="container mb-6 mx-auto">
                <div className="border border-1 border-white px-4 rounded-full py-4 col-span-2 flex">
                  <IoIosSearch className="text-xl text-white mr-2" />
                  <input type="text" value={text} placeholder="Search" className="outline-none bg-transparent text-white" onChange={handleChange} />
                </div>
              </div>
              {/* Content */}
              {result.length > 0 && (
                <div className="pb-6 w-full bg-bg rounded-md border-1 border-white h-full">
                  {result.map((val: any, i: number) => (
                    <span key={val.slug + i}>
                      <CustomLink href={`/blog/${val.slug}`}>
                        <div className="px-6 pt-6">
                          <h2 className="font-semibold text-md text-g-100 hover:underline hover:text-p-100">{val.title}</h2>
                          <p className="text-g-75">{filterNChars(val.description, 100)}</p>
                          {val.tags && val.tags.map((tag: string, i: number) => <Tag hidden key={tag + i} tag={tag} />)}
                        </div>
                      </CustomLink>

                      <hr className="text-g-15 mt-6" />
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className=" my-auto fixed bottom-0 mb-10 right-0 mr-6 z-50">
              <button className="p-3 rounded-full bg-bg shadow 100 border border-solid border-g-50" onClick={handleClose}>
                <IoIosClose className="text-text text-2xl" />
              </button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

Search.propTypes = {
  data: PropTypes.array,
};

export default Search;
