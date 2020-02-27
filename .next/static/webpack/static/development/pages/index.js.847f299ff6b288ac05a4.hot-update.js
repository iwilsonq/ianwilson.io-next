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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1886837326", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1886837326", [article.document.data.hero_image]]]) + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1886837326", [article.document.data.hero_image]]]) + " " + "article-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1886837326", [article.document.data.hero_image]]]) + " " + "article-hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1886837326", [article.document.data.hero_image]]]) + " " + "hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1886837326", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, article.document.data.title), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1886837326", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, " ", reformatDate(article.document.data.date)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1886837326",
    dynamic: [article.document.data.hero_image],
    __self: this
  }, ".article-link-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.article.__jsx-style-dynamic-selector{width:100%;}.article-hero.__jsx-style-dynamic-selector{background:url(".concat(article.document.data.hero_image, ") center;color:#000;}.article-content.__jsx-style-dynamic-selector,.hero-text.__jsx-style-dynamic-selector{padding:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUcwQixBQUdGLEFBR3lDLEFBS3ZDLFdBUGYsRUFRQSx1Q0FMYSxXQUNiLFdBUEEiLCJmaWxlIjoiL1VzZXJzL2lhbndpbHNvbi91aS13b3Jrc3BhY2UvaWFud2lsc29uLmlvLW5leHQvc3JjL2NvbXBvbmVudHMvQmxvZ0xpc3RJdGVtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gJy4uL3BhZ2VzJztcblxuZnVuY3Rpb24gdHJ1bmNhdGVTdW1tYXJ5KGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGV4Y2VycHQgPSBjb250ZW50LnNsaWNlKDAsIDIwMCkudHJpbUVuZCgpO1xuICBmb3IgKGxldCBpID0gZXhjZXJwdC5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICBpZiAoZXhjZXJwdFtpXSA9PT0gJ1xcbicpIHtcbiAgICAgIHJldHVybiBleGNlcnB0LnNsaWNlKDAsIGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZXhjZXJwdCArICcuLi4nO1xufVxuXG5mdW5jdGlvbiByZWZvcm1hdERhdGUoZnVsbERhdGU6IERhdGUpOiBzdHJpbmcge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZnVsbERhdGUpO1xuICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXJ0aWNsZTogQXJ0aWNsZTtcbn1cblxuY29uc3QgQmxvZ0xpc3RJdGVtOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBhcnRpY2xlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBrZXk9e2FydGljbGUuc2x1Z30gaHJlZj17eyBwYXRobmFtZTogYC9ibG9nLyR7YXJ0aWNsZS5zbHVnfWAgfX0+XG4gICAgICA8YT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1oZXJvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGgyPnthcnRpY2xlLmRvY3VtZW50LmRhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8aDM+IHtyZWZvcm1hdERhdGUoYXJ0aWNsZS5kb2N1bWVudC5kYXRhLmRhdGUpfTwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFydGljbGUtbGluay1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcnRpY2xlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJ0aWNsZS1oZXJvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2FydGljbGUuZG9jdW1lbnQuZGF0YS5oZXJvX2ltYWdlfSkgY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQsXG4gICAgICAgICAgLmhlcm8tdGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dMaXN0SXRlbTtcbiJdfQ== */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogListItem);

/***/ })

})
//# sourceMappingURL=index.js.847f299ff6b288ac05a4.hot-update.js.map