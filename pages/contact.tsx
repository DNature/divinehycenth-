import React from "react";
import { NextPage } from "next";
import { IoIosMail, IoMdCall, IoMdPin, IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';

import NextHead from '../components/meta';

const encode = (data: any): string => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};


const ContactPage: NextPage = () => {
  
  const router = useRouter();
  
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(values);

    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact form for divinehycenth.com", ...values }),
    })
      .then(() => {
        console.log("message sent", e);
        return setTimeout(() => {
          return router.push("/sent");
        }, 1000);
      })
      .catch((e) => console.log(e));

  };

  return (
    <>
      <NextHead pageTitle="Divine Hycenth - Contact me" path="/contact" description="Contact me using the form bellow and i’ll get back to you right away" />
      <div className="w-full gradient relative -z-10  after after-2">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-5">
          <div className="gradient-alt -rotate-180  circle absolute" />
          <div className="gradient-alt circle-2 absolute" />
        </div>
        <div className="container py-32 sm:py-40 md:py-40 z-20 max-w-4xl">
          <h1 className="text-center text-xl sm:text-3xl lg:text-4xl font-bold text-white">I’d Love to hear from you</h1>
          <p className="pb-56 text-center font-bold text-gray-100">Contact me using the form bellow and i’ll get back to you right away</p>
        </div>
      </div>
      <div className="container max-w-md -mt-64 md:max-w-4xl">
        <button className="z-50 hover:opacity-75 cursor-pointer absolute top-0 mt-12" onClick={() => router.back()}>
          <IoMdArrowBack className="text-white text-3xl font-bold" />
        </button>
        <div className="block md:flex mb-20 justify-between">
          <div className="card-contact mb-16 md:mb-0 shadow rounded-lg p-5 md:mr-5">
            <h2 className="text-xl xl:text-2xl  g100 font-bold">Fill out the form and i’ll be in touch as soon as possible.</h2>

            <form
              name="Contact form for divinehycenth.com"
              // data-netlify="true" method="POST"
              onSubmit={handleSubmit}
            >
              <p className="my-8">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="p-6 bg-g-15 rounded-sm w-full outline-none"
                  required
                  placeholder="Full Name"
                  autoFocus
                  value={values.name}
                />
              </p>
              <p className="my-8">
                <input type="text" name="email" onChange={handleChange} className="p-6 bg-g-15 rounded-sm w-full outline-none" required placeholder="Email" value={values.email} />
              </p>
              <p className="my-8">
                <textarea
                  onChange={handleChange}
                  name="message"
                  className="p-6 bg-g-15 rounded-sm w-full h-40 outline-none resize-none"
                  required
                  placeholder="How can i help?..."
                  value={values.message}
                />
              </p>

              <button type="submit" className="btn py-3 w-full shadow-primary font-bold rounded-full hover:opacity-75 mb-8 mt-10">
                Send
              </button>
            </form>
          </div>
          <div className="self-end md:ml-12">
            <div className="gradient shadow-primary shadow rounded-lg mt-auto h-full p-6">
              <img src="/images/icons/logo.svg" alt="Logo" className="mb-8 h-20" />

              <div className="text-white flex">
                <IoIosMail className="text-white text-xl lg:text-2xl lg:mr-7" />
                <a href="malto:divinehycenth@outlook.com" className="ml-6 lg:text-lg">
                  divinehycenth@outlook.com
                </a>
              </div>
              <div className="text-white flex  my-6">
                <IoMdCall className="text-white text-xl lg:text-2xl lg:mr-7" />
                <span className="ml-6 lg:text-lg">+234 8123 161 019</span>
              </div>
              <div className="text-white flex">
                <IoMdPin className="text-white text-xl lg:text-2xl lg:mr-7" />
                <span className="ml-6 lg:text-lg">Gwagwalada, Abuja - Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="before before-2 mt-16 relative" style={{ justifySelf: "flex-start", backgroundColor: "#4d5254" }}>
        <div className="container pt-12 pb-20 lg:grid grid-cols-8 gap-6">
          <div className="col-span-2 grid grid-cols-8">
            <img src="/images/icons/logo.svg" alt="Footer logo" className="col-span-2" />
            <div className="col-span-6">
              <h2 className="text-xl font-bold text-white">Divine Hycenth</h2>
              <p className="text-g-25">&copy; Copyright 2020</p>
              <blockquote />
            </div>
          </div>
        </div>
      </footer>
    </>
  );};

export default ContactPage;
