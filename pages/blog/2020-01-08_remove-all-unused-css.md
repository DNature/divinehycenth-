---
layout: "bloglayout"
title: "Remove all unused CSS Selectors"
description: "A reference guide on how to remove unused CSS selectors, Minify CSS files to reduce your website's loading time"
imageUrl: "/images/blog/apple.jpg"
tags: ["css", "purgecss", "minify"]
---

## A reference guide on how to remove unused CSS selectors, Minify CSS files to reduce your website's loading time

<br/>

![Minify Css files](/images/blog/remove-unused-css/remove-unused.jpg)
<br/>

Sometimes you wonder why your website takes a longer time 😞 to completely load content but takes shorter time on other websites.
There are different [**factors**](/blog/optimize-your-website-speed) that can cause this issue like Image sizes and or file sizes.

## What are unused CSS?

When developing a website/application, we developers tend to use different CSS frameworks with large file sizes and can really mess up our website loading time. For example, frameworks like [Tailwindcss](https://tailwindcss.com) and [Bootstrap](https://getbootstrap.com) come with dozens of CSS styles that you probably do not need.

> **Unused CSS are _CSS selectors_ that are not implemented in your application and contributes to the growth of web page size**. Removing them is really going to improve our page performance.

Now you know what and why we should remove unused css so **Lets hit the ground running 🚀**.

## [Purge CSS](https://purgecss.com/)

<br/>

![Purge CSS](/images/blog/remove-unused-css/purgecss.webp)
<br/>

This is one of the best tool i've come across while trying to remove _Unused CSS_ and its very easy to implement into your existing application.

### 😮 It has a CLI tool 🔥

```bash
# to install it globally so that you can access the CLI run:
npm i -g purgecss
```

Open the project you want to include purgecss into and run the following command in your terminal

```bash
purgecss --css style.css --content index.html
# if you dont have purgecss installed globally in
# your computer and you are using npm, run this command
npm purgecss --css style.css --content index.html
```

This command will collect the _style.css_ (indicated by `--css` )and _index.html_ (indicated by `--content` ) and remove all unused CSS selectors in them.

By default, the JavaScript API will look for _purgecss.config.js_
Add purgecss as a development dependency into your project by running:

```bash
npm i -D purgecss
```

create a _purgecss.config.js_ file and input the following code:

```js
module.exports = {
  content: ["**/*.html"],
  css: ["**/*.css"],
};
```

> The above code works for all _css_ and _html_ files in your workspace.

```bash
# ⚡️ run this command to remove all unused css selectors
npm run purgecss --config ./purgecss.config.js
```

## Summary

Now you know why some websites takes longer to load and removing unused css selectors can improve the loading time. You're most likely to notice the changes when using some frameworks like [Tailwindcss](https://tailwindcss.com) and [Bootstrap](https://getbootstrap.com).

<br/>

## Learn more