---
layout: "bloglayout"
title: "How to deploy a Gatsby site to Netlify."
description: "Learn how to deploy your typescript/javascript gatsby project to netlify in minutes"
imageUrl: "/images/blog/deploy-gatsby-to-netlify/thumbnail.png"
tags: ["react", "gatsby", "netlify"]
---

import CustomLink from "../../components/CustomLink.tsx";
import CodeWrapper from '../../components/codeWrapper';

![How to deploy a Gatsby site to Netlify](/images/blog/deploy-gatsby-to-netlify/thumbnail.png)

## Learn how to deploy your typescript/javascript gatsby project to netlify in minutes.

### Prerequisites

- Basic knowledge of git

Netlify provides different ways to deploy a site. i.e

- Drag and drop
- Deploy from a **git** account.

For the purpose of this tutorial, we're going to be using the **git** option because it's the easiest way to set up Continuous Deployment.
There're tons of git hosting service providers however, the three most popular ones are [github](https://github.com), [bitbucket](https://bitbucket.com) and [gitlab](https://gitlab.com). I'm going to use **github** but you either option is fine.

### Create a Github repository.

Before you can create a repository you're going to need an account.

After that you can navigate to [github.com/new](https://github.com/new) to create a new repository:

![Create a new repository](/images/blog/deploy-gatsby-to-netlify/create-repo.png)

After the repo is created, you'll see instructions on how to connect an existing app to the repo. We will use the steps in a minute, so you might keep this page open for reference.

### Push your Gatsby app to github

The next step is to push your files to your repository. However, if you don't have a project already setup you can easily bootstrap a new project using **Gatsby's CLI.**

Install **Gatsby CLI:**

<CodeWrapper lang="bash"/>

```bash
npm install -g gatsby-cli
```

Then you can now scaffold a new gatsby project by running:

<CodeWrapper lang="bash"/>

```bash
gatsby new gatsby-starter-default

cd gatsby-starter-default
```

Since this article is not focused on gatsby I wont write much about it.

... we created a new gatsby project with the name `gatsby-starter-default` then we change directory into it.

The next step is to add your remote repository, commit all your changes and push it to your remote repository on github. Copy and paste the following commands to your terminal. These commands were provided when you created a new github repository.

![push to github](/images/blog/deploy-gatsby-to-netlify/push-to-github.png)

### Deploy site to Netlify 🚀

If you haven't yet, you'll need to sign up with Netlify. You can use Github, Gitlab, Bitbucket, or email to register.

![create a netlify account](/images/blog/deploy-gatsby-to-netlify/netlify-account.png)

Then, click the New Site From Git button. From here, you'll be given a choice for Cotinuous Deployment, so choose Github. This means that every time you check your code into your Github repository, your site will be rebuilt to reflect those changes.

![create a new site](/images/blog/deploy-gatsby-to-netlify/new-site.png)

Then select your repository.

![select your repository](/images/blog/deploy-gatsby-to-netlify/select-repo.png)

Then next step is to configure your deployment. You can select any branch you wish if your repository contains multiple branches. The default branch is **Master.**

> The next Field is the **Build command** field. Basically, Netlify allows you to run a command when it rebuilds your site. With Gatbsy sites, you almost always want to run `gatsby build`. This does a production build of your site, and by default, puts the built assets in a directory called `public`. This public directory is where Netlify will actually serve your site/files. For this reason, we will run the `gatsby build` command as well as tell Netlify our public directory is, in fact, called `public`.

After clicking **Deploy Site**, netlify will go ahead and pull your code from github, then run the command(s) we defined.

![deploy](/images/blog/deploy-gatsby-to-netlify/deploy-site.png)

After a minute or so, you'll see that it's finished. Then you can go ahead and click on the link associated with your site

![deployed site](/images/blog/deploy-gatsby-to-netlify/deployed-app.png)

If you made it to this point, then I'm going say congratulations 🍻 because you did it.

![deployed app](/images/blog/deploy-gatsby-to-netlify/successfull.png)

<br/>
<br/>
<br/>

I hope you find this helpful.

### Happy codding 💻 🙂
