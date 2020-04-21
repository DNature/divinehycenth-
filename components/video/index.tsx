import React, { useState } from "react";
import { IoIosClose, IoIosPlay } from "react-icons/io";

interface Props {
  title?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
}

const VideoDialog: React.FC<Props> = () => {
  const [hide, setHide] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleHide = () => {
    setTimeout(() => {
      setHide(false);
    }, 1000);
  };

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <>
      <div className="container my-16 mx-auto">
        <div className="lg:grid gap-6 grid-cols-7 w-full h-32">
          <div className="col-span-3 ml-auto w-4/6 my-auto bg-g-25 h-1 ml-10 ml-auto rounded hidden lg:block"></div>
          <div className="col-span-1 mx-auto  my-auto">
            <div className="rounded-full border-1 w-24 mx-auto h-24 border-g-25 grid justify-center items-center">
              <IoIosPlay className="text-3xl text-g-25 hover:text-g-50 cursor-pointer" onClick={handleOpen} />
            </div>
          </div>
          <div className="col-span-3 w-4/6 my-auto mr-auto bg-g-25 h-1 rounded hidden lg:block"></div>
        </div>
      </div>

      <div
        className={`h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center content-center overflow-hidden ${isOpen ? "block" : "hidden"}`}
        data-open={isOpen}
      >
        <div className="h-screen w-screen relative bg-overlay top-0 left-0 bottom-0 overflow-hidden z-10" onClick={handleClose}></div>

        <div className="max-w-2xl w-full h-full z-50 mt-20 absolute top-0 overflow-scroll no-scroll mb-20 rounded h-85 flex content-center justify-center">
          <div className="w-full bg-black h-72 my-auto  flex content-center items-center justify-center">
            <h2 className={`text-white text-3xl text-center ${hide && "hidden"}`}>Video is coming shortly</h2>
            <div className={`rounded-full border-1 w-24 mx-auto h-24 border-g-25 grid justify-center items-center ${!hide && "hidden"}`}>
              <IoIosPlay className="text-3xl text-g-25 hover:text-g-50 cursor-pointer" onClick={handleHide} />
            </div>
          </div>
        </div>
        <div className=" my-auto fixed bottom-0 mb-10 right-0 mr-6 z-50">
          <button className="p-3 rounded-full bg-bg shadow 100" onClick={handleClose}>
            <IoIosClose className="text-text text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoDialog;
