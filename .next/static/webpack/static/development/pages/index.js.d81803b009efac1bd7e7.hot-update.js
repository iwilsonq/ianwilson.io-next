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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3956562671", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3956562671", [article.document.data.hero_image]]]) + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3956562671", [article.document.data.hero_image]]]) + " " + "article-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3956562671", [article.document.data.hero_image]]]) + " " + "article-hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3956562671", [article.document.data.hero_image]]]) + " " + "hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3956562671", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, article.document.data.title), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3956562671", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, " ", reformatDate(article.document.data.date)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3956562671",
    dynamic: [article.document.data.hero_image],
    __self: this
  }, ".article-link-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.article.__jsx-style-dynamic-selector{width:100%;}.article-hero.__jsx-style-dynamic-selector{background:url(".concat(article.document.data.hero_image, ") center;opacity:0.3 color:#000;}.article-content.__jsx-style-dynamic-selector,.hero-text.__jsx-style-dynamic-selector{padding:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUcwQixBQUdGLEFBR3lDLEFBTXZDLFdBUmYsRUFTQSx1Q0FMYSxzQkFQYixDQVFBIiwiZmlsZSI6Ii9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tICcuLi9wYWdlcyc7XG5cbmZ1bmN0aW9uIHRydW5jYXRlU3VtbWFyeShjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBleGNlcnB0ID0gY29udGVudC5zbGljZSgwLCAyMDApLnRyaW1FbmQoKTtcbiAgZm9yIChsZXQgaSA9IGV4Y2VycHQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgaWYgKGV4Y2VycHRbaV0gPT09ICdcXG4nKSB7XG4gICAgICByZXR1cm4gZXhjZXJwdC5zbGljZSgwLCBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4Y2VycHQgKyAnLi4uJztcbn1cblxuZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKTtcbiAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCkuc2xpY2UoNCk7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFydGljbGU6IEFydGljbGU7XG59XG5cbmNvbnN0IEJsb2dMaXN0SXRlbTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsga2V5PXthcnRpY2xlLnNsdWd9IGhyZWY9e3sgcGF0aG5hbWU6IGAvYmxvZy8ke2FydGljbGUuc2x1Z31gIH19PlxuICAgICAgPGE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtaGVyb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5kb2N1bWVudC5kYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPiB7cmVmb3JtYXREYXRlKGFydGljbGUuZG9jdW1lbnQuZGF0YS5kYXRlKX08L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcnRpY2xlLWxpbmstY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJ0aWNsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFydGljbGUtaGVybyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHthcnRpY2xlLmRvY3VtZW50LmRhdGEuaGVyb19pbWFnZX0pIGNlbnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuM1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQsXG4gICAgICAgICAgLmhlcm8tdGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dMaXN0SXRlbTtcbiJdfQ== */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogListItem);

/***/ })

})
//# sourceMappingURL=index.js.d81803b009efac1bd7e7.hot-update.js.map