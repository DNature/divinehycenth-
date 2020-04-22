webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/works/worksCard.tsx":
/*!****************************************!*\
  !*** ./components/works/worksCard.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomLink */ "./components/CustomLink.tsx");
var _this = undefined,
    _jsxFileName = "/home/divine/Documents/projects/next/divinehycenth.com/components/works/worksCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WorksCard = function WorksCard(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      step = _useState2[0],
      setStep = _useState2[1];

  var lastStep = step === data.images.length - 1;

  var nextStep = function nextStep() {
    lastStep ? setStep(0) : setStep(step + 1);
  };

  var prevStep = function prevStep() {
    step > 0 ? setStep(step - 1) : setStep(data.images.length - 1);
  };

  var handleOpen = function handleOpen() {
    return setIsOpen(true);
  };

  var handleClose = function handleClose() {
    return setIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    key: data.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "rounded border border-g-50 border-solid p-4 my-4 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "cursor-pointer",
    onClick: handleOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "overflow-hidden",
    style: {
      height: "235px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.images[0],
    alt: "Woman",
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  })), __jsx("h3", {
    className: "text-g-100 font-bold text-xl mt-2 hover:underline hover:text-p-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, data.title))), __jsx("div", {
    className: "h-screen w-screen fixed top-0 eft-0 bottom-0 right-0 z-100 flex align-center justify-center overflow-hidden ".concat(isOpen ? "block" : "hidden"),
    "data-open": isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-screen w-screen relative bg-overlay top-0 left-0 bottom-0 overflow-hidden z-10",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "max-w-2xl w-full bg-bg z-50 mt-20 pb-20 absolute top-0 overflow-scroll no-scroll mb-20 rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full h-56 sm:h-70 md:h-72 overflow-hidden flex justify-center content-center relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "absolute left-0 ml-4 flex content-center justify-center h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "p-3  my-auto rounded-full bg-overlay",
    onClick: prevStep,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosArrowBack"], {
    className: "text-white text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: data.images[step],
    className: "w-full mx-auto",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "absolute right-0 mr-4 flex content-center justify-center h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "p-3 rounded-full bg-overlay my-auto",
    onClick: nextStep,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosArrowForward"], {
    className: "text-white text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "p-6 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "font-bold text-2xl text-g-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, data.title), __jsx("p", {
    className: "text-md text-g-75",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, data.description), __jsx("div", {
    className: "mx-auto w-full mt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "_blank",
    href: data.url,
    className: "px-3 py-2 gradient rounded-full text-white border-2 hover:shadow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Visit site"), __jsx(_CustomLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "_blank",
    href: data.github,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "px-2 py-1 rounded-full ml-4 border-gradient-main border-2 bg-bg hover:shadow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "View source"))))), __jsx("div", {
    className: " my-auto fixed bottom-0 mb-10 right-0 mr-6 z-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "p-3 rounded-full bg-bg shadow 100",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosClose"], {
    className: "text-text text-2xl border border-solid border-g-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }))))));
};

WorksCard.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (WorksCard);

/***/ })

})
//# sourceMappingURL=index.js.95b296b4815f92e97b18.hot-update.js.map