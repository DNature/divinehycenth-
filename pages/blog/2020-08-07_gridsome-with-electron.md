---
layout: "bloglayout"
title: "Build a Desktop app with Gridsome and Electron."
description: "Learn how to combine your knowledge of Gridsome for SPA and Electron for desktop apps to build a desktop App."
imageUrl: "/images/blog/gridsome-with-electron/thumbnail.png"
tags: ["grapphql", "nodejs", "couchdb"]
---

import CustomLink from "../../components/CustomLink.tsx";
import CodeWrapper from '../../components/codeWrapper';

![Graphql CRUD operations on a CouchDB database with nodejs.](/images/blog/gridsome-with-electron/thumbnail.png)

## Learn how to combine your knowledge of Gridsome for SPA and Electron for desktop apps to build a desktop app.

Electron and Gridsome was the basic requirement for an application i and my team were working on so i started to make some research on how to use gridsome in electron both in development and production with a smooth developer experience but i couldn't find any article or video on building desktop applications with electron and gridsome that is why i'm writing this article because I'm sure someone might run into some issues i faced setting it up :).

### Prerequisites

1. Basic knowledge of Javascript
2. Must have Node installed on your machine.
3. Basic knowledge of Electron

### Project structure

![Project structure](/images/blog/gridsome-with-electron/project-structure.png)

## What is Gridsome?

Gridsome is a Vue-powered static site generator for building blazing fast static websites. It is data-driven meaning it uses a GraphQL layer to get data from different sources in order to dynamically generate pages from it. Gridsome is the Vue alternative to Gatsby for React.js.

As this tutorial is not a beginners guide for gridsome, I'll not go into full details of gridsome.

### Setting up Gridsome.

#### Installation.

Run the following command to install Gridsome globally in your computer:

<CodeWrapper lang="bash" />

```bash
yarn global add @gridsome/cli
 # or
npm install -g @gridsome/cli
```

Next step is to create a new project using the CLI we just installed:

<CodeWrapper lang="bash" />

```bash
gridsome create gridsome-electron-boilerplate
```

This command will bootstrap a new gridsome site for you and install all the necessary dependencies.

Once that is done installing we can run the Gridsome site with this command:

<CodeWrapper lang="bash" />

```bash
cd gridsome-electron-boilerplate && gridsome develop
```

## Electron

Electron, managed by Github, is used in a myriad of [projects + companies](https://electronjs.org/apps). Making your web apps available for desktop makes them that much more versatile. So it makes sense to have a fundamental understanding of Electron, and how to integrate it into current projects.

### What is Electron?

Electron allows you to build cross-platform desktop applications, using a Node.js backend and a Chromium front-end. It might seem like a challenge to turn your Gridsome web-app into a full fledged, downloadable desktop app — but Electron’s objective is to make this process seamless. I was intimidated at first, but the learning curve wasn’t nearly what I thought it would be.

Basic structure of an electron app:

<img src="/images/blog/gridsome-with-electron/electron-structure.png" alt="Electron basic structure" style={{width: "100%"}} />

Install electron in your project by running:

<CodeWrapper lang="bash" />

```bash
yarn add -D electron@latest
```

You can find the entire code for this article on my github repo [https://github.com/DNature/couchdb-graphql](https://github.com/DNature/couchdb-graphql)

### Conclusion:

To conclude, the blog has discussed CouchDB basics, and explained how to perfrom CRUD operations on a CouchDB database using Node, Graphql and Nano.
<br/>
<br/>

I hope you find this helpful.

### Happy codding 💻 🙂
