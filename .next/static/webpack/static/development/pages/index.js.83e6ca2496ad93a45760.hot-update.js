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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4059886078", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4059886078", [article.document.data.hero_image]]]) + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4059886078", [article.document.data.hero_image]]]) + " " + "article-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4059886078", [article.document.data.hero_image]]]) + " " + "article-hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4059886078", [article.document.data.hero_image]]]) + " " + "hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4059886078", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, article.document.data.title), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4059886078", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, " ", reformatDate(article.document.data.date))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4059886078",
    dynamic: [article.document.data.hero_image],
    __self: this
  }, ".article-link-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.article.__jsx-style-dynamic-selector{width:100%;}.article-hero.__jsx-style-dynamic-selector{position:relative;background:url(".concat(article.document.data.hero_image, ") center;opacity:0.3;color:#000;min-height:200px;}.article-content.__jsx-style-dynamic-selector{position:relative;padding:16px;}.hero-text.__jsx-style-dynamic-selector{color:#000;padding:16px;position:absolute;top:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUcwQixBQUdGLEFBR08sQUFPQSxBQUtQLFdBZGIsQUFlZSxPQVp1QyxBQU92QyxNQU1LLE9BTHBCLFdBTVEsTUFDQyxPQUNULGVBZmMsSUFQZCxRQVFhLFdBQ00saUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tICcuLi9wYWdlcyc7XG5cbmZ1bmN0aW9uIHRydW5jYXRlU3VtbWFyeShjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBleGNlcnB0ID0gY29udGVudC5zbGljZSgwLCAyMDApLnRyaW1FbmQoKTtcbiAgZm9yIChsZXQgaSA9IGV4Y2VycHQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgaWYgKGV4Y2VycHRbaV0gPT09ICdcXG4nKSB7XG4gICAgICByZXR1cm4gZXhjZXJwdC5zbGljZSgwLCBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4Y2VycHQgKyAnLi4uJztcbn1cblxuZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKTtcbiAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCkuc2xpY2UoNCk7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFydGljbGU6IEFydGljbGU7XG59XG5cbmNvbnN0IEJsb2dMaXN0SXRlbTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsga2V5PXthcnRpY2xlLnNsdWd9IGhyZWY9e3sgcGF0aG5hbWU6IGAvYmxvZy8ke2FydGljbGUuc2x1Z31gIH19PlxuICAgICAgPGE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtaGVyb1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXRleHRcIj5cbiAgICAgICAgICAgICAgPGgyPnthcnRpY2xlLmRvY3VtZW50LmRhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPGgzPiB7cmVmb3JtYXREYXRlKGFydGljbGUuZG9jdW1lbnQuZGF0YS5kYXRlKX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFydGljbGUtbGluay1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcnRpY2xlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJ0aWNsZS1oZXJvIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2FydGljbGUuZG9jdW1lbnQuZGF0YS5oZXJvX2ltYWdlfSkgY2VudGVyO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFydGljbGUtY29udGVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZXJvLXRleHQge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nTGlzdEl0ZW07XG4iXX0= */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogListItem);

/***/ })

})
//# sourceMappingURL=index.js.83e6ca2496ad93a45760.hot-update.js.map