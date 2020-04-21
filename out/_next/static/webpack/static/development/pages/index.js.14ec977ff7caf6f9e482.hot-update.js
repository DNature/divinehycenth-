webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/pathConfig.ts":
/*!*****************************!*\
  !*** ./utils/pathConfig.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (filename, slug) {
  var isProd = false;
  var prodPath = filename.replace(/[\ .]/g, "-").replace(/[-\/]$/, "").toLowerCase().toString;
  return isProd ? "/blog/".concat(prodPath) : "/blog/".concat(slug);
});

/***/ })

})
//# sourceMappingURL=index.js.14ec977ff7caf6f9e482.hot-update.js.map