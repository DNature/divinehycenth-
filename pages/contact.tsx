import React from "react";
import { NextPage } from "next";
import { IoIosMail, IoMdCall, IoMdPin } from "react-icons/io";

import MainLayout from "../layouts/Main";

const ContactPage: NextPage = () => (
  <MainLayout pathname="/contact">
    <div className="w-full gradient relative -z-10">
      <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
        <div className="gradient-alt -rotate-180  circle absolute" />
        <div className="gradient-alt circle-2 absolute" />
      </div>
      <div className="container py-32 sm:py-40 md:py-40 z-20">
        <h1 className="text-center text-xl sm:text-3xl lg:text-4xl font-bold text-white">
          I’d Love to hear from you
        </h1>
        <p className="pb-56 text-center font-bold text-gray-100">
          Contact me using the form bellow and i’ll get back to you right away
        </p>
      </div>
    </div>

    <div className="container -mt-64">
      <div className="block lg:grid grid-cols-6 gap-6 grid-rows-2 xl:px-40 lg:px-32">
        <div className="card-contact shadow rounded-lg col-span-3 row-span-6 p-5 row-span-1 row-end-3">
          <h2 className="text-xl xl:text-2xl  g100 font-bold">
            Fill out the form and i’ll be in touch as soon as possible.
          </h2>

          <form data-netlify="true">
            <div className="my-8">
              <input
                type="text"
                className="p-6 bg-g-15 rounded-sm w-full outline-none"
                placeholder="Full Name"
                autoFocus
              />
            </div>
            <div className="my-8">
              <input
                type="text"
                className="p-6 bg-g-15 rounded-sm w-full outline-none"
                placeholder="Full Name"
              />
            </div>
            <div className="my-8">
              <textarea
                className="p-6 bg-g-15 rounded-sm w-full h-40 outline-none resize-none"
                placeholder="How can i help?..."
              />
            </div>

            <button
              type="submit"
              className="btn py-3 w-full shadow-primary font-bold rounded-full hover:opacity-75 mb-8 mt-10"
            >
              Send
            </button>
          </form>
        </div>
        <div className="col-span-3 row-end-3 mt-20 lg:mt-0">
          <div className="gradient shadow-primary shadow rounded-lg mt-auto h-full p-6">
            <img src="/images/logo.svg" alt="Logo" className="mb-8" />

            <div className="text-white flex">
              <IoIosMail className="text-white text-xl lg:text-2xl lg:mr-7" />
              <span className="ml-6 lg:text-lg">divinehycenth@outlook.com</span>
            </div>
            <div className="text-white flex  my-6">
              <IoMdCall className="text-white text-xl lg:text-2xl lg:mr-7" />
              <span className="ml-6 lg:text-lg">+234 8123 161 019</span>
            </div>
            <div className="text-white flex">
              <IoMdPin className="text-white text-xl lg:text-2xl lg:mr-7" />
              <span className="ml-6 lg:text-lg">
                Gwagwalada, Abuja - Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default ContactPage;
