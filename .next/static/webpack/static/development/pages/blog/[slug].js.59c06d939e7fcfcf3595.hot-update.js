webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./src/articles lazy recursive ^\\.\\/.*\\.md$":
/*!*********************************************************!*\
  !*** ./src/articles lazy ^\.\/.*\.md$ namespace object ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./breaking-out-of-a-rut.md": [
		"./src/articles/breaking-out-of-a-rut.md",
		6
	],
	"./edge-with-courage-reasonml.md": [
		"./src/articles/edge-with-courage-reasonml.md",
		1
	],
	"./how-types-improve-javascript.md": [
		"./src/articles/how-types-improve-javascript.md",
		2
	],
	"./intro-to-reasonml-variants.md": [
		"./src/articles/intro-to-reasonml-variants.md",
		3
	],
	"./reason-react-hooks-tutorial.md": [
		"./src/articles/reason-react-hooks-tutorial.md",
		4
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/articles lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=[slug].js.59c06d939e7fcfcf3595.hot-update.js.map