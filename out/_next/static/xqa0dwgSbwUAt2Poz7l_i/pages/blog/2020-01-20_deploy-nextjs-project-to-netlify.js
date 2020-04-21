(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"8X9G":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2020-01-20_deploy-nextjs-project-to-netlify",function(){return n("9If7")}])},"9If7":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("wx14"),o=n("Ff2n"),r=n("q1tI"),b=n.n(r),l=n("7ljp"),p=n("BIUn"),i=(n("NO8M"),n("hZ7m")),c=(b.a.createElement,{title:"Deploy Next.js project to Netlify",__filename:"2020-01-20_deploy-nextjs-project-to-netlify.md",__url:"pages/blog/2020-01-20_deploy-nextjs-project-to-netlify.md",date:"2020-01-20",layout:"bloglayout",description:"Learn how to publish you Next.js app to netlify in minutes.",imageUrl:"/images/blog/deploy-to-netlify/thumbnail.png",tags:["deploy","netlify","nextjs"]}),s={},u=function(e){var t=e.children;return Object(p.a)(Object.assign({},c,{children:t}))};function j(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(u,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/deploy-to-netlify/thumbnail.jpg",alt:"deploy nextjs project to netlify"}))),Object(l.b)("h2",null,"What is Netlify"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites."),Object(l.b)("p",{parentName:"blockquote"},"Its features include continuous deployment from Git across Netlify Edge, the company's global application delivery network infrastructure, serverless form handling, support for AWS Lambda functions, and full integration with Let's Encrypt. It provides both free and paid plans."),Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Wikipedia"))),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Netlify")," is a static page provider with Git deploy integration opportunity (GitHub, GitLab, Bitbucket) . Netlify has got very good performance, it provides https certification and we can use our own domain with the projects. So, we have got everything that we need for a starter project. Here comes a brief guide!"),Object(l.b)("br",null),Object(l.b)("p",null,"On the other hand ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org"}),Object(l.b)("strong",{parentName:"a"},"Nextjs"))," is a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org"}),"Reactjs")," framework that provides ",Object(l.b)("strong",{parentName:"p"},"Server Side Rendering SSR")," applications which means with Nextjs we can export our full application by pages so it behaves as a server-side rendered application without a server (Nodejs, PHP etc)."),Object(l.b)("br",null),Object(l.b)("p",null,"You just need to add few scripts in your ",Object(l.b)("strong",{parentName:"p"},"package.json")," file:"),Object(l.b)(i.a,{lang:"package.json",mdxType:"CodeWrapper"}),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   ...\n  "scripts": {\n    "dev": "next",\n    "start": "next start",\n\n    "build": "next build",\n    "export": "next export", \ud83d\ude03\n    "deploy": "npm run build && npm run export" \ud83d\ude80\n  }\n}\n')),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"build")," script builds our project and saves it in a directory called ",Object(l.b)("strong",{parentName:"p"},".next"),". The ",Object(l.b)("strong",{parentName:"p"},"export")," command exports all our files inside the ",Object(l.b)("strong",{parentName:"p"},".next")," directory into plain ",Object(l.b)("strong",{parentName:"p"},"html, css and javascript")," files and the deploy script runs both the ",Object(l.b)("strong",{parentName:"p"},"build")," and ",Object(l.b)("strong",{parentName:"p"},"export")," script one at a time."),Object(l.b)("br",null),Object(l.b)("p",null,"The next thing is to deploy your project to git and i'm going to use github for this tutorial."),Object(l.b)("p",null,"The project i am using is from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/how-to-setup-tailwind-purgecss-and-nextjs"}),"an article i wrote earlier")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Code: ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dnature/hello-next"}),"https://github.com/dnature/hello-next"))),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.netlify.com/signup?_ga=2.58798317.1351806053.1583669087-991025437.1583669087"}),"First create an account with netlify.com")),Object(l.b)("p",null,"Next Click on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.netlify.com/start"}),"New site from git")),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/deploy-to-netlify/create.gif",alt:"Select a new site from git"}))),Object(l.b)("br",null),Object(l.b)("p",null,"Next step is to select Github and select your github repository you wish to deploy."),Object(l.b)("p",null,"Next step is to select the git branch you wish to deploy. the default is ",Object(l.b)("em",{parentName:"p"},"master"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note"),": I created a new branch(",Object(l.b)("em",{parentName:"p"},"deploy"),") for the purpose of this tutorial so i am going to select that branch instead of using the default ",Object(l.b)("strong",{parentName:"p"},"master")," branch.")),Object(l.b)("p",null,"In the build command input field we have to tell netlify to run our deploy script by passing:"),Object(l.b)(i.a,{lang:"bash",mdxType:"CodeWrapper"}),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run deploy\n")),Object(l.b)("br",null),Object(l.b)("p",null,"Our output directory is the default ",Object(l.b)("em",{parentName:"p"},"out")," folder that nextjs provides when we run ",Object(l.b)("inlineCode",{parentName:"p"},"npm run export")),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/deploy-to-netlify/deploy.gif",alt:"Deploy nextjs to netlify"}))),Object(l.b)("br",null),Object(l.b)("p",null,"That's all! After these settings, Netlify will take care about hosting and build process on your selected branch."),Object(l.b)("br",null),Object(l.b)("h2",null,"Conclusion"),Object(l.b)("p",null,"Netlify is a very fantastic service for static sites but now we have learnt how to also deploy ",Object(l.b)("strong",{parentName:"p"},"server side rendered applications.")))}j.isMDXComponent=!0}},[["8X9G",0,2,1,3,4,5]]]);