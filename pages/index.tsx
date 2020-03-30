import * as React from "react";

const IndexPage = () => (
  <div className="container">
    <h1 className="text-2xl gray-100">Hello Nextjs</h1>
    <h1 className="text-5xl g50">Hello Nextjs</h1>
    <h1 className="text-5xl a25">Hello Nextjs</h1>
    <h1 className="text-5xl p50">Hello Nextjs</h1>
    <h1 className="text-5xl p75">Hello Nextjs</h1>
    <h1 className="text-5xl a50">Hello Nextjs</h1>
    <h1 className="text-4xl p100 a75">Hello Nextjs</h1>

    <button className="btn px-10 py-3 m-10 cursor-pointer font-bold rounded-full hover:shadow-2xl hover:opacity-75 shadow-primary">Button</button>

    <div className="container my-4">
      <div className="rounded-lg card-bg px-4 py-4 shadow-xl w-4/6 h-48 shadow">
        Custom card
      </div>
    </div>
    <div className="container my-4">
      <div className="rounded-lg card-bg px-4 py-4 shadow-xl w-4/6 h-48 shadow">
        Custom card
      </div>
    </div>
  </div>
  
);

export default IndexPage;
