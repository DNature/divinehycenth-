const withMDXExtended = require("@saschazar/next-mdx-extended");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  ...withMDXExtended({
    layoutsDir: path.join(__dirname, "layouts"),
    format: "/blog/[title]",
  })({
    pageExtensions: ["tsx", "md"],
  }),
  env: {
    DOMAIN: "https://divinehycenth.com",
  },
  exportTrailingSlash: true,
  // assetPrefix: isProd ? "https://divinehycenth.com" : "",
  target: "serverless",
};

/*

exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/blog/2019-11-09_remove-all-unused-css.js": { page: "/blog/2019-11-09_remove-all-unused-css" },
    };
  },

  */
