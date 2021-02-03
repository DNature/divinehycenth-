import React, { useState } from "react";
import { IoMdArrowForward, IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import CustomLink from "../../CustomLink";
import Portal from "../../Portal";

interface Props {
  title: string;
  imageUrl: string;
  description: string;
  className?: string;
  homePage: string;
  fullDescription: string;
  githubUrl: string;
}

const OpenSource: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const stepperImages = [props.imageUrl];

  const lastStep = step === stepperImages.length - 1;
  const nextStep = (): void => {
    lastStep ? setStep(0) : setStep(step + 1);
  };
  const prevStep = (): void => {
    step > 0 ? setStep(step - 1) : setStep(stepperImages.length - 1);
  };

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  // text-white combat-covid
  return (
    <>
      <div className={"w-full bg-bg border-g-25 border my-8 hover:shadow-2xl rounded-sm lg:grid grid-cols-2 gap-6 h-50vh " + props.className}>
        <div className="text-center px-4 md:px-20 pt-8 md:pt-0 md:flex flex-col items-center justify-center h-full xl:px-40 z-10">
          <h2 className="text-2xl font-black">{props.title}</h2>
          <p className="text-lg">{props.description}</p>
          <button className="rounded-full px-3 py-2 bg-p-50 my-6 hover:shadow text-white" onClick={handleOpen}>
            Learn more
            <span className="pl-2">
              <IoMdArrowForward className="text-md inline-block" />
            </span>
          </button>
        </div>
        <div className="overflow-hidden md:block hidden relative">
          <img src={props.imageUrl} alt={props.title} className="absolute bottom-0 left-0 -mb-16" />
        </div>
      </div>

      {isOpen && (
        <Portal>
          <div className={`h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center overflow-hidden `}>
            <div className="h-screen w-screen relative bg-overlay-default top-0 left-0 bottom-0 overflow-hidden z-10" onClick={handleClose}></div>

            <div className="max-w-2xl w-full bg-bg rounded-sm z-50 mt-20 pb-20 absolute top-0 overflow-scroll no-scroll mb-20 rounded h-85">
              <div className="w-full h-56 sm:h-70 md:h-72 overflow-hidden flex justify-center content-center relative">
                <div className="absolute left-0 ml-4 flex content-center justify-center h-full">
                  {stepperImages.length > 1 && (
                    <button className="p-3  my-auto rounded-full bg-overlay-default" onClick={prevStep}>
                      <IoIosArrowBack className="text-xl" />
                    </button>
                  )}
                </div>
                <div className="w-full">
                  <img src={stepperImages[step]} className="w-full mx-auto" alt="" />
                </div>

                <div className="absolute right-0 mr-4 flex content-center justify-center h-full">
                  {stepperImages.length > 1 && (
                    <button className="p-3 rounded-full bg-overlay-default my-auto" onClick={nextStep}>
                      <IoIosArrowForward className="text-xl" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6 text-center">
                <h2 className="font-bold text-2xl text-g-100">{props.title}</h2>
                <p className="text-md text-g-75">{props.fullDescription}</p>

                <div className="mx-auto w-full mt-6">
                  <CustomLink target="_blank" href={props.homePage} className="px-3 py-2 gradient rounded-full border-2 hover:shadow text-white">
                    Visit site
                  </CustomLink>
                  <CustomLink target="_blank" href={props.githubUrl}>
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
        </Portal>
      )}
    </>
  );
};

export default OpenSource;
