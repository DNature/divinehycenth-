module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production" ? "autoprefixer" : undefined,
    process.env.NODE_ENV === "production" ? "cssnano" : undefined,
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./layouts/**/*.{js,jsx,ts,tsx}"],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    "postcss-preset-env",
  ],
};
