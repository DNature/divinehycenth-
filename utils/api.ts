import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const postDirectory = join(process.cwd(), "pages", "blog");

export const getPostSlugs = (): string[] =>
  readdirSync(postDirectory).filter((val) => val.includes(".md"));

export const getPostsBySlug = (slug: string, fields: any[] = []): any => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  const { data } = matter(fileContents);
  // console.log(data);

  const items: any = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []): any[] => {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostsBySlug(slug, fields));
};
