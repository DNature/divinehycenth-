webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/video/index.tsx":
/*!************************************!*\
  !*** ./components/video/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _this = undefined,
    _jsxFileName = "/home/divine/Documents/projects/next/divinehycenth.com/components/video/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var VideoDialog = function VideoDialog() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      hide = _useState[0],
      setHide = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleHide = function handleHide() {
    setTimeout(function () {
      setHide(false);
    }, 1000);
  };

  var handleOpen = function handleOpen() {
    return setIsOpen(true);
  };

  var handleClose = function handleClose() {
    return setIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container my-16 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:grid gap-6 grid-cols-7 w-full h-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-span-3 ml-auto w-4/6 my-auto bg-g-25 h-1 ml-10 ml-auto rounded hidden lg:block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-span-1 mx-auto  my-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "rounded-full border-1 w-24 mx-auto h-24 border-g-25 grid justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPlay"], {
    className: "text-3xl text-g-25 hover:text-g-50 cursor-pointer",
    onClick: handleOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-span-3 w-4/6 my-auto mr-auto bg-g-25 h-1 rounded hidden lg:block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center content-center overflow-hidden ".concat(isOpen ? "block" : "hidden"),
    "data-open": isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "h-screen w-screen relative bg-overlay top-0 left-0 bottom-0 overflow-hidden z-10",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "max-w-2xl w-full h-full z-50 mt-20 absolute top-0 overflow-scroll no-scroll mb-20 rounded h-85 flex content-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full bg-black h-72 my-auto  flex content-center items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "text-white text-3xl text-center ".concat(hide && "hidden"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Video is coming shortly"), __jsx("div", {
    className: "rounded-full border-1 w-24 mx-auto h-24 border-g-25 grid justify-center items-center ".concat(!hide && "hidden"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPlay"], {
    className: "text-3xl text-g-25 hover:text-g-50 cursor-pointer",
    onClick: handleHide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: " my-auto fixed bottom-0 mb-10 right-0 mr-6 z-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "p-3 rounded-full bg-bg shadow 100 border border-solid border-g-50",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosClose"], {
    className: "text-text text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoDialog);

/***/ })

})
//# sourceMappingURL=index.js.8298c4731a3b6d8dd850.hot-update.js.map