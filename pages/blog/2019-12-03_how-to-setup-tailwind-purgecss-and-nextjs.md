---
layout: "bloglayout"
title: "Setup Tailwind, and PurgeCSS in Nextjs"
description: "How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss."
imageUrl: "/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/thumbnail.png"
tags: ["next", "tailwind", "optimization"]
---

import CodeWrapper from '../../components/codeWrapper';
import CustomLink from "../../components/CustomLink.tsx";

![how-to-setup-tailwind-purgecss-and-nextjs](/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/thumbnail.png)

## How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss

### Prerequisites

- Basic knowledge of [nextjs](https://nextjs.org)
- Ensure you have [git](https://git-scm.com)
- Text Editor

<br/>

## [Tailwindcss](https://tailwindcss.com/)

_Tailwind_ css is a fantastic _CSS framework_ that provides set of utility classes like other framework.
One cool thing about tailwind css is its naming convention.

Setting up _Tailwind_ with a frontend framework like [React](https://reactjs.org), [Nextjs](https://nextjs.org), [Vuejs](https://vuejs.org) etc... can be tricky especially when you're trying to implement other libraries for optimization.

## Installation 👣

For this tutorial we are going to be using a simple hello next application i created. run the following to download the project:

<CodeWrapper lang="bash" />

```bash
git clone https://github.com/dnature/hello-next

cd hello-next

## install dependencies
npm install
```

Next i will open the project in my favorite text editor by running `code .`. _VS Code_
<br/>

![Hello next](/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/hello-next.png)
<br/>

Now we are going to install tailwind css through the following command:

<CodeWrapper lang="bash" />

```bash
npm install tailwindcss
```

Next we will generate the default _tailwind.config.js_ in the root directory by running:

<CodeWrapper lang="bash" />

```bash
npx tailwind init
```

Create a new stylesheet and call it _tailwind.css_ then import the tailwind css library by adding the following lines of code

<CodeWrapper lang="tailwind.css" />

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next thing is to create a file and call it _/\_app.js_ in the pages directory and paste the following code to import _tailwind.css_ .

<CodeWrapper lang="pages/_app.js" />

```js
import React from "react";
import "../tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Lets apply some tailwind css selectors in our app to test if it's going to work:

<CodeWrapper lang="pages/index.js" />

```js
import Link from "next/link";

export default function Index() {
  return (
    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">
      <p className="text-4xl">Hello Next.js</p>

      <Link href="/about">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">About</a>
      </Link>
    </div>
  );
}
```

<CodeWrapper lang="pages/about.js" />

```js
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">
      <p className="text-2xl">This is the about page</p>

      <Link href="/">
        <a className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Home</a>
      </Link>
    </div>
  );
}
```

<span className="text-4xl">😲</span> With just few lines of css selectors we got our app to look great
<br/>

![example gif](/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/tailwind-next.gif)
<br/>

You may notice that the default tailwind bundle is up to _4mb_ but we can get rid of unused css selectors by adding some modules.

## [PurgeCss](/blog/remove-all-unused-css)

<CodeWrapper lang="bash" />

```bash
# install pugecss and postcss by running
npm i -D @fullhuman/postcss-purgecss autoprefixer postcss-preset-env
```

create a file and call it _postcss.config.js_ then add the following piece of code:

<CodeWrapper lang="postcss.config.js" />

```js
module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      {
        content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./tailwind.css"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    "postcss-preset-env",
  ],
};
```

For development purpose, its a good practice to not engage your computer in much processing tasks. Every enhancement/optimization techniques is best for production or testing purposes so we are going to perform these optimizations in production by tweaking our code a little bit.

<CodeWrapper lang="postcss.config.js" />

```js
module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production" ? "autoprefixer" : undefined,
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./tailwind.css"],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    "postcss-preset-env",
  ],
};
```

Complete code [https://github.com/dnature/hello-next](https://github.com/dnature/hello-next)

<br/>

## Conclusion

Setting up tailwindcss, purgecss with nextjs is quite easy isn't it?. It does not require a lot of code to setup and our reward is the smooth experience users get when accessing our website/application.
<br/>

### Learn more

[How to reduce file sizes with **Gulpjs**](/blog/how-to-reduce-file-sizes-with-gulpjs)
