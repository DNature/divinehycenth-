import React, { useState } from "react";
import { IoMdArrowForward, IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import CustomLink from "../CustomLink";

interface Props {
  title?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
}

const CrwnClothing: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const stepperImages = ["/images/works/crwn/crwn-clothing.png", "/images/works/crwn/1.png", "/images/works/crwn/2.png"];

  const lastStep = step === stepperImages.length - 1;
  const nextStep = (): void => {
    lastStep ? setStep(0) : setStep(step + 1);
  };
  const prevStep = (): void => {
    step > 0 ? setStep(step - 1) : setStep(stepperImages.length - 1);
  };

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <>
      <div className="w-full my-8 crwn-clothing shadow-md rounded h-50vh lg:grid grid-cols-2 gap-6">
        <div className="text-center px-4 md:px-20 pt-8 md:pt-0 md:flex flex-col items-center justify-center h-full xl:px-40 z-10">
          <h2 className="text-2xl text-black font-black">CRWN Clothing</h2>
          <p className="text-black text-lg">The ultimate wears store.</p>
          <button className="rounded-full px-3 py-2 bg-p-50 text-white my-6 hover:shadow" onClick={handleOpen}>
            Learn more
            <span className="pl-2">
              <IoMdArrowForward className="text-md text-white inline-block" />
            </span>
          </button>
        </div>
        <div className=" md:block hidden relative">
          <img src="/images/works/crwn-clothing.png" alt="Crown clothing app" className="absolute bottom-0 left-0" />
        </div>
      </div>

      <div
        className={`h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center overflow-hidden ${isOpen ? "block" : "hidden"}`}
        data-open={isOpen}
      >
        <div className="h-screen w-screen relative bg-overlay-default top-0 left-0 bottom-0 overflow-hidden z-10" onClick={handleClose}></div>

        <div className="max-w-2xl w-full bg-bg z-50 mt-20 pb-20 absolute top-0 overflow-scroll no-scroll mb-20 rounded  h-85">
          <div className="w-full h-56 sm:h-70 md:h-72 overflow-hidden flex justify-center content-center relative">
            <div className="absolute left-0 ml-4 flex content-center justify-center h-full">
              <button className="p-3  my-auto rounded-full bg-overlay-default" onClick={prevStep}>
                <IoIosArrowBack className="text-white text-xl" />
              </button>
            </div>
            <div className="w-full">
              <img src={stepperImages[step]} className="w-full mx-auto" alt="" />
            </div>

            <div className="absolute right-0 mr-4 flex content-center justify-center h-full">
              <button className="p-3 rounded-full bg-overlay-default my-auto" onClick={nextStep}>
                <IoIosArrowForward className="text-white text-xl" />
              </button>
            </div>
          </div>

          <div className="p-6 text-center">
            <h2 className="font-bold text-2xl text-g-100">CRWN Clothing</h2>
            <p className="text-md text-g-75">
              CRWN clothing is a demo e-commerce app bootstrapped with Create React App and firebase. Some features includes payment with stripe, redux, firebase and lots more.
              THis project is still on development.
            </p>

            <div className="mx-auto w-full mt-6">
              <CustomLink target="_blank" href="//crwn-clothing-navy-ten.now.sh/" className="px-3 py-2 gradient rounded-full text-white border-2 hover:shadow">
                Visit site
              </CustomLink>
              <CustomLink target="_blank" href="//github.com/DNature/crwn-clothing-e-commerce">
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
    </>
  );
};

export default CrwnClothing;
