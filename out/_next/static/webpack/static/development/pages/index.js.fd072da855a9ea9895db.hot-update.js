webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Cards/LargeCard.tsx":
/*!****************************************!*\
  !*** ./components/Cards/LargeCard.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _CustomLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomLink */ "./components/CustomLink.tsx");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date */ "./components/date.tsx");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag */ "./components/tag.tsx");
/* harmony import */ var _utils_filterChars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/filterChars */ "./utils/filterChars.ts");
/* harmony import */ var _utils_pathConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/pathConfig */ "./utils/pathConfig.ts");
var _this = undefined,
    _jsxFileName = "/home/divine/Documents/projects/next/divinehycenth.com/components/Cards/LargeCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






 // style = {{ backgroundColor: bgColor( tag ), color: color( tag ) }}

var LargeCard = function LargeCard(_ref) {
  var imageUrl = _ref.imageUrl,
      title = _ref.title,
      description = _ref.description,
      slug = _ref.slug,
      tags = _ref.tags;
  var path = Object(_utils_pathConfig__WEBPACK_IMPORTED_MODULE_6__["default"])(title, slug);
  return __jsx("div", {
    className: "card-bg rounded-md px-4 py-4 sm:px-5 sm:py-5 shadow flex justify-between mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-2/6 gradient rounded hidden sm:block relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full rounded opacity-75 hover:opacity-100 transition-all duration-200",
    style: {
      background: "url(\"".concat(imageUrl, "\")"),
      backgroundPosition: "center",
      backgroundSize: "cover"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "sm:w-4/6 w-full sm:pl-5 my-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-g-100 text-sm sm:text-xl font-bold hover:text-p-100 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, title)), __jsx(_date__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dateString: "".concat(slug.split("_")[0]),
    className: "text-sm text-g-50 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "text-g-75 text-sm sm:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, Object(_utils_filterChars__WEBPACK_IMPORTED_MODULE_5__["filterNChars"])(description, 100)), __jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "flex text-xs sm:text-sm mt-2 text-a-100 cursor-pointer justify-between w-12 hover:w-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Read", __jsx("span", {
    className: "my-auto hover:pl-3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosArrowRoundForward"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })))), tags && tags.map(function (tag, i) {
    return __jsx(_tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: tag + i,
      tag: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LargeCard);

/***/ })

})
//# sourceMappingURL=index.js.fd072da855a9ea9895db.hot-update.js.map