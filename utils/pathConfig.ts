export default (filename: string, slug: string): string => {
  const isProd = process.env.NODE_ENV === "production";
  const prodPath = filename
    .replace(/[\ .]/g, "-")
    .replace(/(-|\/)$/, "")
    .replace(/(-|\/)$/, "")
    .toLowerCase()
    .toString();

  return isProd ? `/blog/${prodPath}` : `/blog/${slug}`;
};
