(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2YyB":function(e,t,n){n.r(t),n.d(t,"default",(function(){return d}));var a=n("wx14"),s=n("Ff2n"),l=n("q1tI"),o=n.n(l),c=n("7ljp"),i=n("BIUn"),p=n("hZ7m"),r=(n("NO8M"),o.a.createElement,{title:"Setup Tailwind, and PurgeCSS in Nextjs",__filename:"2019-12-03_how-to-setup-tailwind-purgecss-and-nextjs.md",__url:"pages/blog/2019-12-03_how-to-setup-tailwind-purgecss-and-nextjs.md",date:"2019-12-03",layout:"bloglayout",description:"How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss.",imageUrl:"/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/thumbnail.png",tags:["next","tailwind","optimization"]}),b={},u=e=>{var{children:t}=e;return Object(i.a)(Object.assign({},r,{children:t}))};function d(e){var{components:t}=e,n=Object(s.a)(e,["components"]);return Object(c.b)(u,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/thumbnail.png",alt:"how-to-setup-tailwind-purgecss-and-nextjs"}))),Object(c.b)("h2",null,"How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss"),Object(c.b)("h3",null,"Prerequisites"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Basic knowledge of ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org"}),"nextjs")),Object(c.b)("li",{parentName:"ul"},"Ensure you have ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com"}),"git")),Object(c.b)("li",{parentName:"ul"},"Text Editor")),Object(c.b)("br",null),Object(c.b)("h2",null,Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"https://tailwindcss.com/"}),"Tailwindcss")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Tailwind")," css is a fantastic ",Object(c.b)("em",{parentName:"p"},"CSS framework")," that provides set of utility classes like other framework.\nOne cool thing about tailwind css is its naming convention."),Object(c.b)("p",null,"Setting up ",Object(c.b)("em",{parentName:"p"},"Tailwind")," with a frontend framework like ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org"}),"React"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org"}),"Nextjs"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://vuejs.org"}),"Vuejs")," etc... can be tricky especially when you're trying to implement other libraries for optimization."),Object(c.b)("h2",null,"Installation \u{1f463}"),Object(c.b)("p",null,"For this tutorial we are going to be using a simple hello next application i created. run the following to download the project:"),Object(c.b)(p.a,{lang:"bash",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/dnature/hello-next\n\ncd hello-next\n\n## install dependencies\nnpm install\n")),Object(c.b)("p",null,"Next i will open the project in my favorite text editor by running ",Object(c.b)("inlineCode",{parentName:"p"},"code ."),". ",Object(c.b)("em",{parentName:"p"},"VS Code")),Object(c.b)("br",null),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/hello-next.png",alt:"Hello next"}))),Object(c.b)("br",null),Object(c.b)("p",null,"Now we are going to install tailwind css through the following command:"),Object(c.b)(p.a,{lang:"bash",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install tailwindcss\n")),Object(c.b)("p",null,"Next we will generate the default ",Object(c.b)("em",{parentName:"p"},"tailwind.config.js")," in the root directory by running:"),Object(c.b)(p.a,{lang:"bash",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx tailwind init\n")),Object(c.b)("p",null,"Create a new stylesheet and call it ",Object(c.b)("em",{parentName:"p"},"tailwind.css")," then import the tailwind css library by adding the following lines of code"),Object(c.b)(p.a,{lang:"tailwind.css",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),Object(c.b)("p",null,"Next thing is to create a file and call it ",Object(c.b)("em",{parentName:"p"},"/","_","app.js")," in the pages directory and paste the following code to import ",Object(c.b)("em",{parentName:"p"},"tailwind.css")," ."),Object(c.b)(p.a,{lang:"pages/_app.js",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport "../tailwind.css";\n\nexport default function MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />;\n}\n')),Object(c.b)("p",null,"Lets apply some tailwind css selectors in our app to test if it's going to work:"),Object(c.b)(p.a,{lang:"pages/index.js",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import Link from "next/link";\n\nexport default function Index() {\n  return (\n    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">\n      <p className="text-4xl">Hello Next.js</p>\n\n      <Link href="/about">\n        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">About</a>\n      </Link>\n    </div>\n  );\n}\n')),Object(c.b)(p.a,{lang:"pages/about.js",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import Link from "next/link";\n\nexport default function About() {\n  return (\n    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">\n      <p className="text-2xl">This is the about page</p>\n\n      <Link href="/">\n        <a className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Home</a>\n      </Link>\n    </div>\n  );\n}\n')),Object(c.b)("span",{className:"text-4xl"},"\u{1f632}")," With just few lines of css selectors we got our app to look great",Object(c.b)("br",null),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/tailwind-next.gif",alt:"example gif"}))),Object(c.b)("br",null),Object(c.b)("p",null,"You may notice that the default tailwind bundle is up to ",Object(c.b)("em",{parentName:"p"},"4mb")," but we can get rid of unused css selectors by adding some modules."),Object(c.b)("h2",null,Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"/blog/remove-all-unused-css"}),"PurgeCss")),Object(c.b)(p.a,{lang:"bash",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# install pugecss and postcss by running\nnpm i -D @fullhuman/postcss-purgecss autoprefixer postcss-preset-env\n")),Object(c.b)("p",null,"create a file and call it ",Object(c.b)("em",{parentName:"p"},"postcss.config.js")," then add the following piece of code:"),Object(c.b)(p.a,{lang:"postcss.config.js",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  plugins: [\n    "tailwindcss",\n    "autoprefixer",\n    [\n      "@fullhuman/postcss-purgecss",\n      {\n        content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./tailwind.css"],\n        defaultExtractor: (content) => content.match(/[\\w-/:]+(?<!:)/g) || [],\n      },\n    ],\n    "postcss-preset-env",\n  ],\n};\n')),Object(c.b)("p",null,"For development purpose, its a good practice to not engage your computer in much processing tasks. Every enhancement/optimization techniques is best for production or testing purposes so we are going to perform these optimizations in production by tweaking our code a little bit."),Object(c.b)(p.a,{lang:"postcss.config.js",mdxType:"CodeWrapper"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  plugins: [\n    "tailwindcss",\n    process.env.NODE_ENV === "production" ? "autoprefixer" : undefined,\n    process.env.NODE_ENV === "production"\n      ? [\n          "@fullhuman/postcss-purgecss",\n          {\n            content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./tailwind.css"],\n            defaultExtractor: (content) => content.match(/[\\w-/:]+(?<!:)/g) || [],\n          },\n        ]\n      : undefined,\n    "postcss-preset-env",\n  ],\n};\n')),Object(c.b)("p",null,"Complete code ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dnature/hello-next"}),"https://github.com/dnature/hello-next")),Object(c.b)("br",null),Object(c.b)("h2",null,"Conclusion"),Object(c.b)("p",null,"Setting up tailwindcss, purgecss with nextjs is quite easy isn't it?. It does not require a lot of code to setup and our reward is the smooth experience users get when accessing our website/application."),Object(c.b)("br",null),Object(c.b)("h3",null,"Learn more"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/how-to-reduce-file-sizes-with-gulpjs"}),"How to reduce file sizes with ",Object(c.b)("strong",{parentName:"a"},"Gulpjs"))))}d.isMDXComponent=!0},"8vfZ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019-12-03_how-to-setup-tailwind-purgecss-and-nextjs",function(){return n("2YyB")}])}},[["8vfZ",0,2,1,3,4,5]]]);