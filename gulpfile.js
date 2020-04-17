const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
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
exports.minifyImages = minifyImages;
