import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import PropTypes from "prop-types";

import CustomLink from "../CustomLink";
import { IWorksData } from "../../interfaces";

const WorksCard: React.FC<{ data: IWorksData }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const lastStep = step === data.images.length - 1;
  const nextStep = (): void => {
    lastStep ? setStep(0) : setStep(step + 1);
  };
  const prevStep = (): void => {
    step > 0 ? setStep(step - 1) : setStep(data.images.length - 1);
  };

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <>
      <div key={data.title}>
        <div className="rounded border border-g-50 border-solid p-4 my-4 overflow-hidden">
          <div className="cursor-pointer" onClick={handleOpen}>
            <div className="overflow-hidden" style={{ height: "235px" }}>
              <img src={data.images[0]} alt="Woman" className="w-full" />
            </div>
            <h3 className="text-g-100 font-bold text-xl mt-2 hover:underline hover:text-p-100">{data.title}</h3>
          </div>
        </div>

        <div
          className={`h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center overflow-hidden ${isOpen ? "block" : "hidden"}`}
          data-open={isOpen}
        >
          <div className="h-screen w-screen relative bg-overlay top-0 left-0 bottom-0 overflow-hidden z-10" onClick={handleClose}></div>

          <div className="max-w-2xl w-full bg-bg z-50 mt-20 pb-20 absolute top-0 overflow-scroll no-scroll mb-20 rounded">
            <div className="w-full h-56 sm:h-70 md:h-72 overflow-hidden flex justify-center content-center relative">
              <div className="absolute left-0 ml-4 flex content-center justify-center h-full">
                <button className="p-3  my-auto rounded-full bg-overlay" onClick={prevStep}>
                  <IoIosArrowBack className="text-white text-xl" />
                </button>
              </div>
              <div className="w-full">
                <img src={data.images[step]} className="w-full mx-auto" alt="" />
              </div>

              <div className="absolute right-0 mr-4 flex content-center justify-center h-full">
                <button className="p-3 rounded-full bg-overlay my-auto" onClick={nextStep}>
                  <IoIosArrowForward className="text-white text-xl" />
                </button>
              </div>
            </div>

            <div className="p-6 text-center">
              <h2 className="font-bold text-2xl text-g-100">{data.title}</h2>
              <p className="text-md text-g-75">{data.description}</p>

              <div className="mx-auto w-full mt-6">
                <CustomLink target="_blank" href={data.url} className="px-3 py-2 gradient rounded-full text-white border-2 hover:shadow">
                  Visit site
                </CustomLink>
                <CustomLink target="_blank" href={data.github}>
                  <button className="px-2 py-1 rounded-full ml-4 border-gradient-main border-2 bg-bg hover:shadow">View source</button>
                </CustomLink>
              </div>
            </div>
          </div>
          <div className=" my-auto fixed bottom-0 mb-10 right-0 mr-6 z-50">
            <button className="p-3 rounded-full bg-bg shadow 100 border border-solid border-g-50" onClick={handleClose}>
              <IoIosClose className="text-text text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

WorksCard.propTypes = {
  data: PropTypes.any,
};

export default WorksCard;
