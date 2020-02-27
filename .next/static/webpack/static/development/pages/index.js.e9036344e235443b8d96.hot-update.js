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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["695875422", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["695875422", [article.document.data.hero_image]]]) + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["695875422", [article.document.data.hero_image]]]) + " " + "article-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["695875422", [article.document.data.hero_image]]]) + " " + "article-hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["695875422", [article.document.data.hero_image]]]) + " " + "hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["695875422", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, article.document.data.title), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["695875422", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, " ", reformatDate(article.document.data.date))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "695875422",
    dynamic: [article.document.data.hero_image],
    __self: this
  }, ".article-link-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.article.__jsx-style-dynamic-selector{width:100%;}.article-hero.__jsx-style-dynamic-selector{position:relative;background:url(".concat(article.document.data.hero_image, ") center;opacity:0.3;color:#000;height:300px;}.article-content.__jsx-style-dynamic-selector{position:relative;padding:16px;}.hero-text.__jsx-style-dynamic-selector{color:#000;padding:16px;position:absolute;top:0;left:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUcwQixBQUdGLEFBR08sQUFPQSxBQUtQLFdBZGIsQUFlZSxPQVp1QyxBQU92QyxNQU1LLE9BTHBCLFdBTVEsTUFDSSxVQUNaLFlBZmMsSUFQZCxRQVFhLFdBQ0UsYUFDZiIsImZpbGUiOiIvVXNlcnMvaWFud2lsc29uL3VpLXdvcmtzcGFjZS9pYW53aWxzb24uaW8tbmV4dC9zcmMvY29tcG9uZW50cy9CbG9nTGlzdEl0ZW0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi4vcGFnZXMnO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZVN1bW1hcnkoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZXhjZXJwdCA9IGNvbnRlbnQuc2xpY2UoMCwgMjAwKS50cmltRW5kKCk7XG4gIGZvciAobGV0IGkgPSBleGNlcnB0Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgIGlmIChleGNlcnB0W2ldID09PSAnXFxuJykge1xuICAgICAgcmV0dXJuIGV4Y2VycHQuc2xpY2UoMCwgaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBleGNlcnB0ICsgJy4uLic7XG59XG5cbmZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShmdWxsRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmdWxsRGF0ZSk7XG4gIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhcnRpY2xlOiBBcnRpY2xlO1xufVxuXG5jb25zdCBCbG9nTGlzdEl0ZW06IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGFydGljbGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGtleT17YXJ0aWNsZS5zbHVnfSBocmVmPXt7IHBhdGhuYW1lOiBgL2Jsb2cvJHthcnRpY2xlLnNsdWd9YCB9fT5cbiAgICAgIDxhPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWhlcm9cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby10ZXh0XCI+XG4gICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5kb2N1bWVudC5kYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxoMz4ge3JlZm9ybWF0RGF0ZShhcnRpY2xlLmRvY3VtZW50LmRhdGEuZGF0ZSl9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcnRpY2xlLWxpbmstY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJ0aWNsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFydGljbGUtaGVybyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHthcnRpY2xlLmRvY3VtZW50LmRhdGEuaGVyb19pbWFnZX0pIGNlbnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFydGljbGUtY29udGVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZXJvLXRleHQge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nTGlzdEl0ZW07XG4iXX0= */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogListItem);

/***/ })

})
//# sourceMappingURL=index.js.e9036344e235443b8d96.hot-update.js.map