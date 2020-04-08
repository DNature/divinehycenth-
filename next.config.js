const withMDXExtended = require("@saschazar/next-mdx-extended");
const path = require("path");

module.exports = withMDXExtended({
  layoutsDir: path.join(__dirname, "layouts"),
  // format: "/blog/[title]",
})({
  pageExtensions: ["tsx", "md"],
});
