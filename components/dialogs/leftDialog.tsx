import React, { useState } from "react";
import { IoMdArrowForward, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  title?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
}


const LeftDialog: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(0);
  
  const stepperImages = ["/images/blog/deploy-to-netlify/thumbnail.jpg", "/images/blog/file-uploads-with-apolloserver-2/thumbnail.png", "/images/works/crwn-clothing.png"]
  
  const lastStep = step === stepperImages.length - 1
  const nextStep = (): void => {
    lastStep ? step : setStep( step + 1 )
  }
  const prevStep = (): void => {
    step > 0 ? setStep( step -1 ) : step
  }

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <>
      <div className="w-full crwn-clothing shadow-md rounded h-60vh lg:grid grid-cols-2 gap-6">
        <div className="text-center px-4 md:px-20 pt-8 md:pt-0 md:flex flex-col items-center justify-center h-full xl:px-40 z-10">
          <h2 className="text-2xl text-black font-black">CRWN Clothing</h2>
          <p className="text-black text-lg">An ultimate ecommerce store for a fision company.</p>
          <button className="rounded-full px-3 py-2 bg-p-50 text-white my-6 hover:shadow" onClick={handleOpen}>
            Learn more
            <span className="pl-2">
              <IoMdArrowForward className="text-md text-white inline-block" />
            </span>
          </button>
        </div>
        <div className="px-12 relative">
          <img src="/images/works/crwn-clothing.png" loading="lazy" alt="Crown clothing app" className="absolute bottom-0 left-0" />
        </div>
      </div>

      <div
        className={`h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center overflow-hidden ${isOpen ? "block" : "hidden"}`}
        data-open={isOpen}
      >
        <div className="h-screen w-screen relative bg-overlay top-0 left-0 bottom-0 overflow-hidden z-10" onClick={handleClose}></div>

        <div className="max-w-2xl w-full bg-bg z-50 mt-20 pb-20 absolute top-0 overflow-scroll h-full no-scroll mb-20 rounded">
          <div className="w-full h-56 sm:h-70 md:h-72 overflow-hidden flex justify-center content-center relative">
            <div className="absolute left-0 ml-4 flex content-center justify-center h-full">
            <button className="p-3  my-auto rounded-full bg-overlay" onClick={prevStep}>
              <IoIosArrowBack className="text-white text-xl" />
            </button>
            </div>
            <div className="w-full">
              <img src={stepperImages[step]} className="w-full mx-auto" alt="" />
            </div>

            <div className="absolute right-0 mr-4 flex content-center justify-center h-full">
            <button className="p-3 rounded-full bg-overlay my-auto" onClick={nextStep}>
              <IoIosArrowForward className="text-white text-xl" />
            </button>
            </div>
          </div>
          
         <div className="p-6 text-center">
          <h2 className="font-bold text-2xl text-g-100">CRWN Clothing</h2>
          <p className="text-lg text-g-75">Lorem ipsum dolor sit amet.</p>
         </div>
        </div>
      </div>
    </>
  );
};

export default LeftDialog;
