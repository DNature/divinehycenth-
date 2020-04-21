const { src, dest, task, series } = require("gulp");
const imagemin = require("gulp-imagemin");
const concatCss = require("gulp-concat-css");
const cleancss = require("gulp-clean-css");

// const fs = require("fs");
// const path = require("path");

// const { readdirSync } = require("fs");

// const newArr = ["hello-world"];

// const getDirectories = (source) => {
//   return readdirSync(path.join(__dirname, source), { withFileTypes: true })
//     .filter((dirent) => {
//       if (dirent.isDirectory()) {
//         return getDirectories(`${source}/${dirent.name}`);
//       }
//       return !dirent.isDirectory();
//     })
//     .map((dirent) => {
//       // console.log(dirent.name);
//       return newArr.push(dirent.name);
//     });
// };

// const dirs = getDirectories("/images");

// const filenames = fs.readFileSync(path.join(__dirname, "cache.txt"), { encoding: "utf-8" });
// const cache = [filenames && filenames.split(",")][0];

// const newFiles = [];
// const checkScanned = (cache, newArr) => {
//   if (Array.isArray(cache)) {
//     cache.map((c) => {
//       newArr.filter((val) => {
//         if (val !== c) {
//           return newFiles.push(val);
//         }
//       });
//     });
//   }
//   fs.writeFileSync(path.join(__dirname, "cache.txt"), newArr);
// };
// const val = checkScanned(cache, newArr);
// console.log(newFiles);

function minifyImages() {
  return src(["./images/**/*"])
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 60, progressive: true }),
        imagemin.optipng({ optimizationLevel: 6 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("public/images"));
}

function mergerCss() {
  return src(["./styles/styles.css"]).pipe(concatCss("./styles/bundle.css")).pipe(dest("./"));
}

function minifyCss() {
  return src(["./styles/bundle.css"]).pipe(cleancss()).pipe(dest("./styles"));
}

task("start", series(mergerCss, minifyCss));

exports.minifyImages = minifyImages;
