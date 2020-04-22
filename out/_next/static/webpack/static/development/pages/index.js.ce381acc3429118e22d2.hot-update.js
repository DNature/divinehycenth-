webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/tag.tsx":
/*!****************************!*\
  !*** ./components/tag.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _this = undefined,
    _jsxFileName = "/home/divine/Documents/projects/next/divinehycenth.com/components/tag.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];


function switcher(val) {
  switch (val) {
    case "html":
      return {
        color: "#efefef",
        backgroundColor: "#E44D26"
      };

    case "css":
      return {
        color: "#efefef",
        backgroundColor: "#2965F1"
      };

    case "typescript":
      return {
        color: "#efefef",
        backgroundColor: "#1E44D7"
      };

    case "react":
      return {
        color: "#12181a",
        backgroundColor: "#63ACE1"
      };

    case "node":
    case "nodejs":
      return {
        color: "#12181a",
        backgroundColor: "#90c53f"
      };

    case "javascript":
    case "js":
      return {
        color: "#000000",
        backgroundColor: "#FFDE31"
      };

    case "graphql":
      return {
        color: "#efefef",
        backgroundColor: "#D71EC4"
      };

    case "docker":
      return {
        color: "#efefef",
        backgroundColor: "#2965F1"
      };

    case "next":
    case "nextjs":
      return {
        color: "#efefef",
        backgroundColor: "#000000"
      };

    default:
      return {
        color: "var(text)",
        backgroundColor: "var(--gray4)"
      };
  }
}

var Tag = function Tag(_ref) {
  var tag = _ref.tag,
      hidden = _ref.hidden,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["tag", "hidden"]);

  var splTag = tag.toLowerCase().split(/\.|#|-|_/g);
  var ext = splTag[splTag.length - 1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("button", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "bg-g-15 sm:inline-block rounded-full px-3 font-bold text-g-75 text-sm hover:opacity cursor-pointer mr-2 mt-4 ".concat(hidden ? "" : "hidden"),
    style: switcher(ext)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), "#", tag));
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })

})
//# sourceMappingURL=index.js.ce381acc3429118e22d2.hot-update.js.map