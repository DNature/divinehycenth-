webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/search/index.tsx":
/*!*************************************!*\
  !*** ./components/search/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomLink */ "./components/CustomLink.tsx");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tag */ "./components/tag.tsx");
/* harmony import */ var _utils_filterChars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/filterChars */ "./utils/filterChars.ts");
var _this = undefined,
    _jsxFileName = "/home/divine/Documents/projects/next/divinehycenth.com/components/search/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Search = function Search(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      text = _useState2[0],
      setText = _useState2[1];

  var handleChange = function handleChange(e) {
    setIsOpen(true);
    setText(e.target.value);
  };

  var result = text.length && data ? Object(match_sorter__WEBPACK_IMPORTED_MODULE_4__["default"])(data, text, {
    keys: ["title", "description", "tags"]
  }) : [];

  var handleClose = function handleClose() {
    setText("");
    setIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container mb-16 lg:grid grid-cols-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "border border-1 border-g-25 px-4 rounded-full py-4 col-span-2 flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosSearch"], {
    className: "text-xl text-g-25 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    value: text,
    placeholder: "Search",
    className: "outline-none bg-transparent text-g-50",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-span-2 w-4/6 my-auto ml-4  bg-g-25 h-1 rounded hidden lg:block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center overflow-hidden ".concat(isOpen ? "block" : "hidden"),
    "data-open": isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "h-screen w-screen relative bg-overlay top-0 left-0 bottom-0 overflow-hidden z-10",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "max-w-lg w-full z-50 mt-24 absolute top-0 overflow-scroll no-scroll mb-20 rounded-md h-85",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container mb-6 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "border border-1 border-white px-4 rounded-full py-4 col-span-2 flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosSearch"], {
    className: "text-xl text-white mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "text",
    value: text,
    placeholder: "Search",
    className: "outline-none bg-transparent text-white",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }))), result.length > 0 && __jsx("div", {
    className: "pb-6 w-full bg-bg rounded-md border-1 border-white h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, result.map(function (val, i) {
    return __jsx("span", {
      key: val.slug + i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/blog/".concat(val.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "px-6 pt-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx("h2", {
      className: "font-semibold text-md text-g-100 hover:underline hover:text-p-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    }, val.title), __jsx("p", {
      className: "text-g-75",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 23
      }
    }, Object(_utils_filterChars__WEBPACK_IMPORTED_MODULE_6__["filterNChars"])(val.description, 100)), val.tags && val.tags.map(function (tag, i) {
      return __jsx(_tag__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: tag + i,
        tag: tag,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 77
        }
      });
    }))), __jsx("hr", {
      className: "text-g-15 mt-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }));
  }))), __jsx("div", {
    className: " my-auto fixed bottom-0 mb-10 right-0 mr-6 z-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "p-3 rounded-full bg-bg shadow 100 border border-solid border-g-50",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosClose"], {
    className: "text-text text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })))));
};

Search.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.e285f42009146ae0ba20.hot-update.js.map