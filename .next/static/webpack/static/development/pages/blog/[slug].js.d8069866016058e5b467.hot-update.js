webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./src/pages/blog/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/blog/[slug].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.tsx");

var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/pages/blog/[slug].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Article = function Article(props) {
  console.log(props);
  var content = props.content;
  var title = props.data.title;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    source: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

Article.getInitialProps = function _callee(context) {
  var slug, file, _matter, data, content;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          slug = context.query.slug;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(__webpack_require__("./src/articles lazy recursive ^\\.\\/.*\\.md$")("./".concat(slug, ".md")));

        case 3:
          file = _context.sent;
          _matter = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(file["default"]), data = _matter.data, content = _matter.content;
          return _context.abrupt("return", {
            content: content,
            data: data
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=[slug].js.d8069866016058e5b467.hot-update.js.map