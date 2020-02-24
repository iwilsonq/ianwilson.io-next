webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/BlogListItem.tsx":
/*!*****************************************!*\
  !*** ./src/components/BlogListItem.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function truncateSummary(content) {
  var excerpt = content.slice(0, 200).trimEnd();

  for (var i = excerpt.length; i > 0; i--) {
    if (excerpt[i] === '\n') {
      return excerpt.slice(0, i);
    }
  }

  return excerpt + '...';
}

function reformatDate(fullDate) {
  var date = new Date(fullDate);
  return date.toDateString().slice(4);
}

var BlogListItem = function BlogListItem(_ref) {
  var article = _ref.article;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: article.slug,
    href: {
      pathname: "/blog/".concat(article.slug)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3162327209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3162327209" + " " + "hero_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: article.document.data.hero_image,
    alt: article.document.data.hero_image,
    className: "jsx-3162327209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3162327209" + " " + "blog__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3162327209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, article.document.data.title), __jsx("h3", {
    className: "jsx-3162327209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " ", reformatDate(article.document.data.date)), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: truncateSummary(article.document.content),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3162327209",
    __self: this
  }, "img.jsx-3162327209{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUdzQixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tICcuLi9wYWdlcyc7XG5cbmZ1bmN0aW9uIHRydW5jYXRlU3VtbWFyeShjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBleGNlcnB0ID0gY29udGVudC5zbGljZSgwLCAyMDApLnRyaW1FbmQoKTtcbiAgZm9yIChsZXQgaSA9IGV4Y2VycHQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgaWYgKGV4Y2VycHRbaV0gPT09ICdcXG4nKSB7XG4gICAgICByZXR1cm4gZXhjZXJwdC5zbGljZSgwLCBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4Y2VycHQgKyAnLi4uJztcbn1cblxuZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKTtcbiAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCkuc2xpY2UoNCk7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFydGljbGU6IEFydGljbGU7XG59XG5cbmNvbnN0IEJsb2dMaXN0SXRlbTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsga2V5PXthcnRpY2xlLnNsdWd9IGhyZWY9e3sgcGF0aG5hbWU6IGAvYmxvZy8ke2FydGljbGUuc2x1Z31gIH19PlxuICAgICAgPGE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19pbWFnZVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5kb2N1bWVudC5kYXRhLmhlcm9faW1hZ2V9XG4gICAgICAgICAgICBhbHQ9e2FydGljbGUuZG9jdW1lbnQuZGF0YS5oZXJvX2ltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2luZm9cIj5cbiAgICAgICAgICA8aDI+e2FydGljbGUuZG9jdW1lbnQuZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgIDxoMz4ge3JlZm9ybWF0RGF0ZShhcnRpY2xlLmRvY3VtZW50LmRhdGEuZGF0ZSl9PC9oMz5cbiAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXt0cnVuY2F0ZVN1bW1hcnkoYXJ0aWNsZS5kb2N1bWVudC5jb250ZW50KX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nTGlzdEl0ZW07XG4iXX0= */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogListItem);

/***/ })

})
//# sourceMappingURL=index.js.4c285de1cd91ecd82810.hot-update.js.map