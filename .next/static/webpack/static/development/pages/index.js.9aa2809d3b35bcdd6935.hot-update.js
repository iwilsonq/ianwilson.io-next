webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/BlogList.tsx":
/*!*************************************!*\
  !*** ./src/components/BlogList.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogListItem */ "./src/components/BlogListItem.tsx");
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BlogList = function BlogList(props) {
  return props.articles.length === 0 ? null : __jsx(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.articles.map(function (article) {
    return __jsx(_BlogListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      article: article,
      key: article.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=index.js.9aa2809d3b35bcdd6935.hot-update.js.map