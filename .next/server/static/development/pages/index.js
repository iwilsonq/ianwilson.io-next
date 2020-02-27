module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../..//" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/articles sync recursive \\.md$":
/*!*********************************!*\
  !*** ./src/articles sync \.md$ ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./breaking-out-of-a-rut.md": "./src/articles/breaking-out-of-a-rut.md",
	"./building-powerful-graphql-servers-with-rust.md": "./src/articles/building-powerful-graphql-servers-with-rust.md",
	"./edge-with-courage-reasonml.md": "./src/articles/edge-with-courage-reasonml.md",
	"./how-types-improve-javascript.md": "./src/articles/how-types-improve-javascript.md",
	"./intro-to-reasonml-variants.md": "./src/articles/intro-to-reasonml-variants.md",
	"./reason-react-hooks-tutorial.md": "./src/articles/reason-react-hooks-tutorial.md",
	"./reasonml-with-graphql.md": "./src/articles/reasonml-with-graphql.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/articles sync recursive \\.md$";

/***/ }),

/***/ "./src/articles/breaking-out-of-a-rut.md":
/*!***********************************************!*\
  !*** ./src/articles/breaking-out-of-a-rut.md ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Breaking Out of a Rut or Creative Block\ndate: 2020-01-08T08:00:00.000Z\nslug: breaking-out-of-a-rut\ndescription: Break through your creative block and unleash the power within.\ntags: productivity, webdev\n---\n\nCreative professions can be great fun when you're in rhythm. In this state, the ideas emanate from your fingertips. When you're productive: you're hitting your deadlines.\n\nYou push metal at the gym, clean your room, and beat the Elite 4. You're the unstoppable force that will build the next unicorn.\n\nBut then things take a turn. You have personal stresses at home like a breakup or a fatal pet emergency. You suffer an injury while lifting weights or downhill mountain biking. Your mojo vanishes, even for no clear reason at all — it happens to everyone.\n\nRecently, I experienced a rut. It is a total lack of energy to do anything beside drink beer and watch all the Austin Powers movies. Not the worst fate, I will add, but I would like to do other things too.\n\nTo break out, I employed strategies that would help anyone whether you've been out of it for a single day or 6 months.\n\n## Action Yields Action\n\nConsider the how you might try to break out of a writers block. I wrote my last article on September 13, 2019, with the goal to continue writing articles. Every week, I would write about fantastic programming topics like Rust or ReasonML.\n\nNow it's 2020, and I'm writing the next one since then. I've had the intent to write _something_ on my mind almost every day for the past several months but I never did it.\n\nI sat down, wrote those first two sentences you can see above, and then vacuumed my living room.\n\nAnd then, I wrote the rest of it.\n\nMy point is, the simple act of scribbling those two sentences spawned a flurry of motivation. By writing two sentences, I had convinced myself that I could do it.\n\nI always _knew_ I could because I had written plenty of articles before. But subconsciously, I could not execute.\n\nI had created the **inspiration** that it would be possible to write this post. That **inspiration** led to **motivation** to continue writing, thus leading to more writing. That is the **action** which is our real goal here.\n\nWatch a motivational speaker or a Get-Rich-Quick guru. You may come away with the feeling of **inspiration**.\n\n\"Wow look at these people, they are so rich and so inspiring!\", you think. The crowd applauds until the final sales pitch, when they file out of the room.\n\nAfter you get home, then what? Flip on Netflix, after all, seeing those people was stressful and now its time to relax. Even though that presentation (or video, or book...) was inspiring, it does not always spur the **action** that will get you to where you want to be.\n\nMake a simple move towards where you want to be, and then dwell on it. Be proud of that effort, because it is proof that you can do it.\n\n## Try Not to Go All-In\n\nLet us suppose you put in a little action and now you have more energy and motivation than you know what to do with. What now? While you could try to exhaust all of it in one sitting, I advise against this.\n\nIt is more effective to be increasing in productivity day by day rather than blow it over a short period. A single burst of activity will sound cool. You can show off how productive you were that one day, but consider the trade-offs.\n\n- If you do too much, you force your brain to think you'll be working this hard every day.\n\n- If you use all of your energy, you may lead yourself right back into a rut when you're mentally exhausted the next day.\n\n- If you have a full time job _and_ you want to balance it with exercise, family, friends, and whatever other priorities you have... take it easy.\n\nMy suggestion is to start with small wins; a couple sentences, a new function/class, a single song on a guitar. When you've completed a simple action, the rest will follow.\n\nAfter you've been working at it for 20-50 minutes, take a break and reflect on what you accomplished. You can continue for another period of time, or you can trust the same technique to help you carry on tomorrow.\n\nSavor your victories today. The next ones will be bigger and even more rewarding. The goal is consistency.\n\n## Smaller, Yet Effective Tips\n\nHere are a few little tips I can offer up to get you out of the rut.\n\n- Eat well. I've had a pretty big boost in energy with Athletic Greens after I saw it mentioned on Tim Ferriss's show. They don't sponsor me but there's a ton of benefit for getting your full daily quota of veggies right away. Its part of my excuse to eat whatever else I'd like that day.\n\n- Don't overeat when you go out, save your leftovers. When I go out, I prefer pasta since I know it will also taste good later. Meal planned.\n\n- Cleaning your living space has a tremendous effect on what you feel you can accomplish.\n\n- Exercise often, but not too hard! I run a lot, but I am much more depleted throughout the day/week when I spent too much time around 90% of my maximum heart rate. If you exercise after work, understand that being mentally exhausted will affect your perceived effort.\n\n---\n\nI usually post articles that are heavy on the technical side. If you're interested in ReasonML or Rust, definitely check out my other works.\n\nIf you came here to get out of a rut, then I hope a little action helps lift you out.\n\nThanks for reading, and see you next time!\n");

/***/ }),

/***/ "./src/articles/building-powerful-graphql-servers-with-rust.md":
/*!*********************************************************************!*\
  !*** ./src/articles/building-powerful-graphql-servers-with-rust.md ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Building Powerful GraphQL Servers with Rust\ndate: 2019-09-13T07:00:00.000Z\nslug: building-powerful-graphql-servers-with-rust\ndescription: Let us see what goes into building a GraphQL server with Rust.\ntags: rust,graphql,tutorial,webdev\nhero_image: gears.jpg\n---\n\n![](/gears.jpg)\n\n_Photo by Bill Oxford on Unsplash_\n\nSetting up a GraphQL server with Rust, Juniper, Diesel, and Actix; learning about Rust's web frameworks and powerful macros along the way.\n\nSource Code: [github.com/iwilsonq/rust-graphql-example](https://github.com/iwilsonq/rust-graphql-example)\n\nServing applications via GraphQL is quickly becoming the easiest and most effective way to deliver data to clients. Whether you're on a mobile device or a browser, it provides the data requested and nothing more.\n\nClient applications no longer need to stitch together information from separate data sources. GraphQL servers are in charge of the integration, eliminating the need for excess data and round-trip requests for data.\n\nOf course, this implies that the server has to handle aggregating data from different sources, such as home-owned backend services, databases, or third party APIs. This may be resource intensive, how can we optimize for CPU time?\n\nRust is a marvel of a language, pairing the raw performance of a low level language like C with the expressiveness of modern languages. It emphasizes type and memory safety, especially when there are potentially data races in concurrent operations.\n\nLet us see what goes into building a GraphQL server with Rust. We are going to learn about\n\n- Juniper GraphQL Server\n- Actix web framework integrated with Juniper\n- Diesel for quering a SQL database\n- Useful Rust macros and derived traits for working with these libraries\n\n> Note that I will not go into detail regarding installing Rust or Cargo. This article assumes some preliminary knowledge of the Rust toolchain.\n\n## Setting up an HTTP Server\n\nTo begin, we need to initialize our project with `cargo` and then install dependencies.\n\n```sh\n    cargo new rust-graphql-example\n    cd rust-graphql-example\n```\n\nThe initialization command bootstraps our Cargo.toml file which contains our projects dependencies as well as a [main.rs](http://main.rs) file which has a simple \"Hello World\" example.\n\n```rust\n    // main.rs\n\n    fn main() {\n      println!(\"Hello, world!\");\n    }\n```\n\nAs a sanity check, feel free to run `cargo run` in order to execute the program.\n\nInstalling the necessary libraries in Rust means adding a line containing the library name and version number. Let's update the dependencies sections of Cargo.toml like so:\n\n```rust\n\n    # Cargo.toml\n\n    [dependencies]\n    actix-web = \"1.0.0\"\n    diesel = { version = \"1.0.0\", features = [\"postgres\"] }\n    dotenv = \"0.9.0\"\n    env_logger = \"0.6\"\n    futures = \"0.1\"\n    juniper = \"0.13.1\"\n    serde = \"1.0\"\n    serde_derive = \"1.0\"\n    serde_json = \"1.0\"\n```\n\nThis article will cover implementing a GraphQL server using [Juniper](https://github.com/graphql-rust/juniper) as the GraphQL library and [Actix](https://actix.rs/) as the underlying HTTP server. Actix has a very nice API and works well with the stable version of Rust.\n\nWhen those lines are added, the next time the project compiles it will include those libraries. Before we compile, lets update main.rs with a basic HTTP server, handling the index route.\n\n```rust\n    // main.rs\n    use std::io;\n\n    use actix_web::{web, App, HttpResponse, HttpServer, Responder};\n\n    fn main() -> io::Result<()> {\n        HttpServer::new(|| {\n            App::new()\n                .route(\"/\", web::get().to(index))\n        })\n        .bind(\"localhost:8080\")?\n        .run()\n    }\n\n    fn index() -> impl Responder {\n        HttpResponse::Ok().body(\"Hello world!\")\n    }\n```\n\nThe first two lines at the top bring the module we need into scope. The main function here returns an `io::Result` type, which allows us to use the question mark as a shorthand for handling results.\n\nThe server's routing and configuration is created in the instance of `App`, which is created in a closure provided by the HTTP server's constructor.\n\nThe route itself is handled by the index function, whose name is arbitrary. As long as this function properly implements `Responder` it can be used as the parameter for the GET request at the index route.\n\nIf we were writing a REST API, we could proceed with adding more routes and associated handlers. We will see soon that we are trading a listing of route handlers for objects and their relations.\n\nNow we will introduce the GraphQL library.\n\n## Creating the GraphQL Schema\n\nAt the root of every GraphQL schema is a root query. From this root we can query lists of objects, specific objects, and whatever fields they might contain.\n\nCall this the QueryRoot, and we shall denote it with the same name in our code. Since we are not going to be setting up a database or any third party APIs, we'll be hard-coding the little data we have here.\n\nTo add a little color to this example, the schema will depict a generic list of members.\n\nUnder src, add a new file called graphql_schema.rs along with the following contents:\n\n```rust\n    // graphql_schema.rs\n    use juniper::{EmptyMutation, RootNode};\n\n    struct Member {\n      id: i32,\n      name: String,\n    }\n\n    #[juniper::object(description = \"A member of a team\")]\n    impl Member {\n      pub fn id(&self) -> i32 {\n        self.id\n      }\n\n      pub fn name(&self) -> &str {\n        self.name.as_str()\n      }\n    }\n\n    pub struct QueryRoot;\n\n    #[juniper::object]\n    impl QueryRoot {\n      fn members() -> Vec<Member> {\n        vec![\n          Member {\n            id: 1,\n            name: \"Link\".to_owned(),\n          },\n          Member {\n            id: 2,\n            name: \"Mario\".to_owned(),\n          }\n        ]\n      }\n    }\n```\n\nAlong with our imports, we define our first GraphQL object in this project, the member. They are simple beings, with an id and name. We'll think about more complicated fields and patterns later.\n\nAfter stubbing out the `QueryRoot` type as a unit struct, we get to define the field itself. Juniper exposes a Rust macro called `object` which allows us to define fields on the different nodes throughout our schema. For now, we only have the QueryRoot node, so we'll expose a field called members on it.\n\nRust macros often have an unusual syntax compared to standard functions. They don't merely take some arguments and produce a result, they expand into much more complex code at compile time.\n\n## Exposing the Schema\n\nBelow our macro call to create the members field, we will define the `RootNode` type that we expose on our schema.\n\n```rust\n    // graphql_schema.rs\n\n    pub type Schema = RootNode<'static, QueryRoot, EmptyMutation<()>>;\n\n    pub fn create_schema() -> Schema {\n      Schema::new(QueryRoot {}, EmptyMutation::new())\n    }\n```\n\nBecause of the strong typing in Rust, we are forced to provide the mutation object argument. Juniper exposes an `EmptyMutation` struct for just this occasion, that is, when we want to create a read-only schema.\n\nNow that the schema is prepared, we can update our server in main.rs to handle the \"/graphql\" route. Since having a playground is also nice, we'll add a route for GraphiQL, the interactive GraphQL playground.\n\n```rust\n    // main.rs\n    #[macro_use]\n    extern crate juniper;\n\n    use std::io;\n    use std::sync::Arc;\n\n    use actix_web::{web, App, Error, HttpResponse, HttpServer};\n    use futures::future::Future;\n    use juniper::http::graphiql::graphiql_source;\n    use juniper::http::GraphQLRequest;\n\n    mod graphql_schema;\n\n    use crate::graphql_schema::{create_schema, Schema};\n\n    fn main() -> io::Result<()> {\n        let schema = std::sync::Arc::new(create_schema());\n        HttpServer::new(move || {\n            App::new()\n                .data(schema.clone())\n                .service(web::resource(\"/graphql\").route(web::post().to_async(graphql)))\n                .service(web::resource(\"/graphiql\").route(web::get().to(graphiql)))\n        })\n        .bind(\"localhost:8080\")?\n        .run()\n    }\n```\n\nYou'll notice I've specified a number of imports that we will be using, including the schema we've just created. Also see that:\n\n- we call `create_schema` inside an Arc (atomically reference counted), to allow shared immutable state across threads (cooking with 🔥 here I know)\n- we mark the closure inside HttpServer::new with **move**, indicating that the closure takes ownership of the inner variables, that is, it gains a copy of `schema`\n- `schema` is passed to the `data` method indicating that it is to be used inside the application as shared state between the two services\n\nWe must now implement the handlers for those two services. Starting with the \"/graphql\" route:\n\n```rust\n    // main.rs\n\n    // fn main() ...\n\n    fn graphql(\n        st: web::Data<Arc<Schema>>,\n        data: web::Json<GraphQLRequest>,\n    ) -> impl Future<Item = HttpResponse, Error = Error> {\n        web::block(move || {\n            let res = data.execute(&st, &());\n            Ok::<_, serde_json::error::Error>(serde_json::to_string(&res)?)\n        })\n        .map_err(Error::from)\n        .and_then(|user| {\n            Ok(HttpResponse::Ok()\n                .content_type(\"application/json\")\n                .body(user))\n        })\n    }\n```\n\nOur implementation of the \"/graphql\" route takes executes a GraphQL request against our schema from application state. It does this by creating a **future** from `web::block` and chaining handlers for success and error states.\n\nFutures are analogous to Promises in JavaScript, which is enough to understand this code snippet. For a greater explanation of Futures in Rust, I recommend [this article by Joe Jackson](https://www.viget.com/articles/understanding-futures-in-rust-part-1/).\n\nIn order to test out our GraphQL schema, we'll also add a handler for \"/graphiql\".\n\n```rust\n    // main.rs\n\n    // fn graphql() ...\n\n    fn graphiql() -> HttpResponse {\n        let html = graphiql_source(\"http://localhost:8080/graphql\");\n        HttpResponse::Ok()\n            .content_type(\"text/html; charset=utf-8\")\n            .body(html)\n    }\n```\n\nThis handler is much simpler, it merely returns the html of the GraphiQL interactive playground. We only need to specify which path is serving our GraphQL schema, which is \"/graphql\" in this case.\n\nWith `cargo run` and navigation to [http://localhost:8080/graphiql](http://localhost:8080/graphiql), we can try out the field we configured.\n\n![Members query in graphiql](https://thepracticaldev.s3.amazonaws.com/i/t22qyi7xarthf9xm2yvl.png)\n\nIt does seem to take a little more effort than setting up a GraphQL server with [Node.js and Apollo](https://www.freecodecamp.org/news/learn-to-build-a-graphql-server-with-minimal-effort-fc7fcabe8ebd/) but the static typing of Rust combined with its incredible performance makes it a worthy trade — if you're willing to work at it.\n\n## Setting up Postgres for Real Data\n\nIf I stopped here, I wouldn't even be doing [the examples in the docs](https://graphql-rust.github.io/juniper/master/index.html) much justice. A static list of two members _that I wrote myself_ at dev time will not fly in this publication.\n\nInstalling Postgres and setting up your own database belongs in a different article, but I'll walk through how to install [diesel](http://diesel.rs), the popular Rust library for handling SQL databases.\n\n> [See here to install Postgres locally on your machine](https://www.postgresql.org/download/). You can also use a different database like MySQL in case you are more familiar with it.\n\nThe diesel CLI will walk us through initializing our tables. Let's install it:\n\n```sh\n    cargo install diesel_cli --no-default-features --features postgres\n```\n\nAfter that, we will add a connection URL to a .env file in our working directory:\n\n```sh\n    echo DATABASE_URL=postgres://localhost/rust_graphql_example > .env\n```\n\nOnce that's there, you can run:\n\n```sh\n    diesel setup\n\n    # followed by\n\n    diesel migration generate create_members\n```\n\nNow you'll have a migrations folder in your directory. Within it, you'll have two SQL files: one up.sql for setting up your database, the other down.sql for tearing it down.\n\nI will add the following to up.sql:\n\n```sql\n    CREATE TABLE teams (\n      id SERIAL PRIMARY KEY,\n      name VARCHAR NOT NULL\n    );\n\n    CREATE TABLE members (\n      id SERIAL PRIMARY KEY,\n      name VARCHAR NOT NULL,\n      knockouts INT NOT NULL DEFAULT 0,\n      team_id INT NOT NULL,\n      FOREIGN KEY (team_id) REFERENCES teams(id)\n    );\n\n    INSERT INTO teams(id, name) VALUES (1, 'Heroes');\n    INSERT INTO members(name, knockouts, team_id) VALUES ('Link', 14, 1);\n    INSERT INTO members(name, knockouts, team_id) VALUES ('Mario', 11, 1);\n    INSERT INTO members(name, knockouts, team_id) VALUES ('Kirby', 8, 1);\n\n    INSERT INTO teams(id, name) VALUES (2, 'Villains');\n    INSERT INTO members(name, knockouts, team_id) VALUES ('Ganondorf', 8, 2);\n    INSERT INTO members(name, knockouts, team_id) VALUES ('Bowser', 11, 2);\n    INSERT INTO members(name, knockouts, team_id) VALUES ('Mewtwo', 12, 2);\n```\n\nAnd into down.sql I will add:\n\n```sql\n    DROP TABLE members;\n    DROP TABLE teams;\n```\n\nIf you've written SQL in the past, these statements will make some sense. We are creating two tables, one to store teams and one to store members of those teams.\n\nI am modeling this data based on Smash Bros if you have not yet noticed. It helps the learning stick.\n\nNow to run the migrations:\n\n```sh\n    diesel migration run\n```\n\nIf you'd like to verify that the down.sql script works to destroy those tables, run: `diesel migration redo`.\n\nNow the reason why I named the GraphQL schema file graphql_schema.rs instead of schema.rs, is because diesel overwrites that file in our src direction by default.\n\nIt keeps a Rust macro representation of our SQL tables in that file. It is not so important to know how exactly this `table!` macro works, but try not to edit this file — the ordering of the fields matters!\n\n```rust\n    // schema.rs (Generated by diesel cli)\n\n    table! {\n        members (id) {\n            id -> Int4,\n            name -> Varchar,\n            knockouts -> Int4,\n            team_id -> Int4,\n        }\n    }\n\n    table! {\n        teams (id) {\n            id -> Int4,\n            name -> Varchar,\n        }\n    }\n\n    joinable!(members -> teams (team_id));\n\n    allow_tables_to_appear_in_same_query!(\n        members,\n        teams,\n    );\n```\n\nFinally, thanks to a comment, we'll want to import diesel and expose the schema module in main.rs:\n\n```diff\n\n    #[macro_use]\n+   extern crate diesel;\n    extern crate juniper;\n\n    use std::io;\n    use std::sync::Arc;\n\n    use actix_web::{web, App, Error, HttpResponse, HttpServer};\n    use futures::future::Future;\n    use juniper::http::graphiql::graphiql_source;\n    use juniper::http::GraphQLRequest;\n\n    mod graphql_schema;\n+   mod schema;\n\n    use crate::graphql_schema::{create_schema, Schema};\n\n\n```\n\n## Wiring up our Handlers with Diesel\n\nIn order to serve the data in our tables, we must first update our `Member` struct with the new fields:\n\n```diff\n// graphql_schema.rs\n\n+ #[derive(Queryable)]\npub struct Member {\n  pub id: i32,\n  pub name: String,\n+ pub knockouts: i32,\n+ pub team_id: i32,\n}\n\n#[juniper::object(description = \"A member of a team\")]\nimpl Member {\n  pub fn id(&self) -> i32 {\n    self.id\n  }\n\n  pub fn name(&self) -> &str {\n    self.name.as_str()\n  }\n\n+ pub fn knockouts(&self) -> i32 {\n+   self.knockouts\n+ }\n\n+ pub fn team_id(&self) -> i32 {\n+   self.team_id\n+ }\n}\n```\n\nNote that we are also adding the `Queryable` derived attribute to `Member`. This tells Diesel everything it needs to know in order to query the right table in Postgres.\n\nAdditionally, add a `Team` struct:\n\n```rust\n    // graphql_schema.rs\n\n    #[derive(Queryable)]\n    pub struct Team {\n      pub id: i32,\n      pub name: String,\n    }\n\n    #[juniper::object(description = \"A team of members\")]\n    impl Team {\n      pub fn id(&self) -> i32 {\n        self.id\n      }\n\n      pub fn name(&self) -> &str {\n        self.name.as_str()\n      }\n\n      pub fn members(&self) -> Vec<Member> {\n        vec![]\n      }\n    }\n```\n\nIn a short while, we will update the `members` function on `Team` to return a database query. But first, let us add a root call for members.\n\n```diff\n    // graphql_schema.rs\n    + extern crate dotenv;\n\n    + use std::env;\n\n    + use diesel::pg::PgConnection;\n    + use diesel::prelude::*;\n    + use dotenv::dotenv;\n    use juniper::{EmptyMutation, RootNode};\n\n    + use crate::schema::members;\n\n    pub struct QueryRoot;\n\n    +  fn establish_connection() -> PgConnection {\n    +    dotenv().ok();\n    +    let database_url = env::var(\"DATABASE_URL\").expect(\"DATABASE_URL must be set\");\n    +    PgConnection::establish(&database_url).expect(&format!(\"Error connecting to {}\", database_url))\n    +  }\n\n    #[juniper::object]\n    impl QueryRoot {\n      fn members() -> Vec<Member> {\n    -   vec![\n    -     Member {\n    -       id: 1,\n    -       name: \"Link\".to_owned(),\n    -     },\n    -     Member {\n    -       id: 2,\n    -       name: \"Mario\".to_owned(),\n    -     }\n    -   ]\n    +   use crate::schema::members::dsl::*;\n    +   let connection = establish_connection();\n    +   members\n    +     .limit(100)\n    +     .load::<Member>(&connection)\n    +     .expect(\"Error loading members\")\n      }\n    }\n```\n\nVery good, we have our first usage of a diesel query. After initializing a connection, we use the members dsl, which is generated from our `table!` macros in schema.rs, and call **load**, indicating that we wish to load `Member` objects.\n\nEstablishing a connection means connecting to our local Postgres database by using the env variable we declared earlier.\n\nAssuming that was all input correctly, restart the server with `cargo run`, open GraphiQL and issue the members query, perhaps adding the two new fields.\n\nThe teams query will be very similar — the difference being we must also add a part of the query to the members function on the `Team` struct in order to resolve the relationship between GraphQL types.\n\n```rust\n    // graphql_schema.rs\n\n    #[juniper::object]\n    impl QueryRoot {\n      fn members() -> Vec<Member> {\n        use crate::schema::members::dsl::*;\n        let connection = establish_connection();\n        members\n          .limit(100)\n          .load::<Member>(&connection)\n          .expect(\"Error loading members\")\n      }\n\n    +  fn teams() -> Vec<Team> {\n    +    use crate::schema::teams::dsl::*;\n    +    let connection = establish_connection();\n    +    teams\n    +      .limit(10)\n    +      .load::<Team>(&connection)\n    +      .expect(\"Error loading teams\")\n    +  }\n    }\n\n    // ...\n\n    #[juniper::object(description = \"A team of members\")]\n    impl Team {\n      pub fn id(&self) -> i32 {\n        self.id\n      }\n\n      pub fn name(&self) -> &str {\n        self.name.as_str()\n      }\n\n      pub fn members(&self) -> Vec<Member> {\n    -    vec![]\n    +    use crate::schema::members::dsl::*;\n    +    let connection = establish_connection();\n    +    members\n    +      .filter(team_id.eq(self.id))\n    +      .limit(100)\n    +      .load::<Member>(&connection)\n    +      .expect(\"Error loading members\")\n      }\n    }\n```\n\nWhen running this is GraphiQL, we get:\n\n![More complex query in graphiql](https://thepracticaldev.s3.amazonaws.com/i/1gsj02nf5m8le9ujjbr8.png)\n\nI really like the way this is turning out, but there is one more thing we must add in order to call this tutorial complete.\n\n## The Create Member Mutation\n\nWhat good is a server if it is read-only and not writable? Well I'm sure those have their uses too, but we would like to write data to our database, how hard can it be?\n\nFirst we'll create a `MutationRoot` struct that will eventually replace our usage of `EmptyMutation`. Then we will add the diesel insertion query.\n\n```rust\n    // graphql_schema.rs\n\n    // ...\n\n    pub struct MutationRoot;\n\n    #[juniper::object]\n    impl MutationRoot {\n      fn create_member(data: NewMember) -> Member {\n        let connection = establish_connection();\n        diesel::insert_into(members::table)\n          .values(&data)\n          .get_result(&connection)\n          .expect(\"Error saving new post\")\n      }\n    }\n\n    #[derive(juniper::GraphQLInputObject, Insertable)]\n    #[table_name = \"members\"]\n    pub struct NewMember {\n      pub name: String,\n      pub knockouts: i32,\n      pub team_id: i32,\n    }\n```\n\nAs GraphQL mutations typically go, we define an input object called `NewMember` and make it the argument of the `create_member` function. Inside this function, we establish a connection and call the insert query on the members table, passing the entire input object.\n\nIt is super convenient that Rust allows us to use the same structs for GraphQL input objects as well as Diesel insertable objects.\n\nLet me make this a little more clear, for the `NewMember` struct:\n\n- we derive `juniper::GraphQLInputObject` in order to create a input object for our GraphQL schema\n- we derive `Insertable` in order to let Diesel know that this struct is valid input for an insertion SQL statement\n- we add the `table_name` attribute so that Diesel knows which table to insert it in\n\nThere is a lot of _magic_ going on here. This is what I love about Rust, it has great performance but the code has features like macros and derived traits to abstract away boilerplate and add functionality.\n\nFinally, at the bottom of the file, add the `MutationRoot` to the schema:\n\n```rust\n    // graphql_schema.rs\n\n    pub type Schema = RootNode<'static, QueryRoot, MutationRoot>;\n\n    pub fn create_schema() -> Schema {\n      Schema::new(QueryRoot {}, MutationRoot {})\n    }\n```\n\nI hope that everything is there, we can test out all of our queries and mutations thus far now:\n\n```graphql\n# GraphiQL\n\nmutation CreateMemberMutation($data: NewMember!) {\n  createMember(data: $data) {\n    id\n    name\n    knockouts\n    teamId\n  }\n}\n\n# example query variables\n# {\n#   \"data\": {\n#     \"name\": \"Samus\",\n#     \"knockouts\": 19,\n#     \"teamId\": 1\n#   }\n# }\n```\n\nIf that mutation ran successfully, you can pop open a bottle of champagne as you are on your way to building performant and type-safe GraphQL Servers with Rust.\n\n## Thanks For Reading\n\nI hope you have enjoyed this article, I also hope that it gave you some sort of inspiration for your own work.\n\nIf you'd like to keep up with the next time I drop an article in the realm of Rust, ReasonML, GraphQL, or software development at large, feel free to give me a follow on [Twitter](https://twitter.com/iwilson), [dev.to](https://dev.to/iwilsonq), or on my website at [ianwilson.io](https://ianwilson.io).\n\nThe source code is here [github.com/iwilsonq/rust-graphql-example](https://github.com/iwilsonq/rust-graphql-example).\n\n### Other Neat Reading Material\n\nHere are some of the libraries we worked with here. They have great documentation and guides as well so be sure to give them a read :)\n\n- [Implementation of Rust Futures in Tokio](https://tokio.rs/docs/getting-started/futures/)\n- [Juniper - GraphQL Server for Rust](https://graphql-rust.github.io/juniper/master/index.html)\n- [Diesel - Safe, Extensible ORM and Query Builder for Rust](http://diesel.rs/)\n- [Actix - Rust's powerful actor system and most fun web framework](https://actix.rs/)\n");

/***/ }),

/***/ "./src/articles/edge-with-courage-reasonml.md":
/*!****************************************************!*\
  !*** ./src/articles/edge-with-courage-reasonml.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The Edge, Wit, and Courage of ReasonML\ndate: 2019-03-19T21:25:04.540Z\nslug: edge-wit-courage-reasonml\ndescription: Discover the features of Reason that make it so appealing to a JavaScript developer.\ntags: reason,ocaml,javascript,fp\nhero_image: steps.jpg\n---\n\n![](/steps.jpg)\n\nReasonML has stolen my attention recently.\n\nIf I'm not at work or running about, I am probably digging into some ReasonML/OCaml repositories like an addict in the tenderloin.\n\nPerhaps I like it for the unparalleled incremental build speed.\n\nPerhaps I like it because its not too different from JavaScript yet it nets me a plethora of built-in advantages like type safety.\n\nPerhaps I like it because of my affinity for math in school, and the functional paradigm gives me a warm fuzzy feeling inside.\n\nThere are a few reasons, no pun intended, for my love of Reason. Just like a functional program wields function composition with immutable state to achieve its goal, Reason's composition of the best of OCaml and JavaScript make it a strong candidate for the future of programming.\n\n## The Edge of OCaml\n\nFor starters, Reason is basically a syntax upgrade to OCaml. Let me start by describing how that helps us.\n\n### Speed\n\nOCaml is a pretty damn fast language. It's incremental build times dwarf that of almost any other language. Since Reason is just a toolchain on top of OCaml, it maintains the many of the same characteristics of OCaml.\n\nFor instance take a look at this table from the docs of [fastpack](https://fastpack.sh), an alternative to Webpack or Parcel for bundling JavaScript applications.\n\n_~1100 modules / 5.3Mb / MB Pro 2017_\n\n|                  | Fastpack | Webpack | Parcel |\n| ---------------- | -------- | ------- | ------ |\n| initial build    | 0.811s   | 3.86s   | 11.07s |\n| persistent cache | 0.208s   | N/A     | 1.39s  |\n| watch mode       | 0.088s   | 0.226s  | 0.291s |\n\nFastpack is still rather new but these numbers are promising -- and the result implies we can made super-quick devtools for a vanilla JavaScript workflow.\n\n### Static Typing\n\nAnother thing Reason inherits from OCaml is a power, nearly impenetrable type system. The compiler does a solid job of making sure you exhaust all of your options in branching logic.\n\nIt also does away with silly errors like \"undefined is not a function\" or \"cannot read property 'x'\". The same could be said about adopting TypeScript or Flow, but they do not _force_ you to cover such cases.\n\n### ...with Great Inference\n\nIt's powerful type inference cleans up a lot of the verbosity associated with annotating functions and variables with types. The following function adds two integers. Not two floats or two strings, just two integers.\n\n```reason\n  /* the type system knows that the arguments and the return value are ints here */\n  let add = (a, b) => a + b;\n```\n\nIf that example is too basic, then try this one. Note how I am not annotating the types in the function signatures:\n\n```reason\n  type animal =\n    | Dog\n    | Cat\n    | Octopus;\n\n  let animalToString = animal =>\n    switch(animal) {\n    | Dog => \"dog\"\n    | Cat => \"cat\"\n    | Octopus => \"octopus\"\n    };\n\n  let getWelcomeMessage = (name, visits, animal) => {\n    \"Hello \" ++\n    name ++\n    \", you've visited this website \" ++\n    string_of_int(visits) ++\n    \" times and your favorite animal is the \" ++\n    animalToString(animal);\n  };\n```\n\nThe ReasonML/OCaml type system is capable of inferring based on our usage what the return types are, as well as each of the arguments. How neat is that?\n\n### Industry Proven\n\nOCaml is a proven language of academics and industries where safety and mission critical code is paramount. This was one of the reason's it was adopted as the base for ReasonML.\n\nAt Facebook, OCaml is used to build some of their important everyday tools, like [Flow](https://flow.org) and [Hack](https://hacklang.org). But they're also working on Reason, which in my opinion, is neat because Reason brings more joy than flow.\n\n## The Wit of JavaScript\n\nWith Reason comes a lighter, more JavaScript-like syntax. The first example I showed above would work just as well in regular JavaScript.\n\n### Syntax\n\nReason syntax is far easier to read and digest than that of OCaml, and most other functional languages for that matter.\n\n### Easy Build System\n\nIts massively more accessible to newcomers than OCaml in that you probably wont spend days trying to install your dependencies properly. When using BuckleScript its often just another npm install {package}.\n\n### JavaScript Interop\n\nIf you need training wheels when writing Reason, do not fear. You can use special directives to write JavaScript directly in your Reason code. Its not cheating, the language was designed this way to make migrating codebases easier.\n\n### NodeJS Too\n\nThe language that powers web applications can be used on the server with the help of NodeJS. The language being Reason of course. Since it transpiles to JavaScript, theres no reason you cannot simply write Reason which becomes server code.\n\nYou can write basically everything in your tech stack with JavaScript and in most cases it will be just fine. What motive would someone have to write Reason then, especially if they have built their likely profitable career on JavaScript?\n\n## The Courage of Reason\n\nOver the past few weeks, I've been exploring writing Native Reason code. I think some of the projects that are being developed show great courage in showing off the potential of ReasonML.\n\nWhile I certainly appreciate it's benefits on the frontend when transpiled to JavaScript, it would be super neat if I could write it on the server too.\n\nI want to communicate with databases, make blazing quick command line tools, and write super efficient servers, perhaps serving GraphQL.\n\nAnd I want to do it with the same language that I'm writing in for my web applications.\n\nCurrently, we can do this with JavaScript, but I think we can do better.\n\nBy further leveraging the OCaml ecosystem we can actually write incredibly robust servers and developer tools.\n\nThe [Esy](https://esy.sh) package manager allows us to install and build packages from npm or opam in a convenient package.json fashion without having to manually hack system dependencies.\n\nAs Esy further develops, Reason on the backend will become increasingly more accessible to developers looking to write stupidly fast native code.\n\nIf you're interested in what's already been made with Esy, check out the following projects:\n\n- [fnm](https://github.com/Schniz/fnm), an alternative to nvm for managing your NodeJS version. It's much faster than nvm.\n- [fastpack](https://fastpack.sh/), a ridiculously fast JavaScript bundler\n- [revery](https://www.outrunlabs.com/revery/), a desktop UI framework like electron, except without downloading a whole browser onto your users' computer.\n\nAnd there are more out there in the **Forests of Open Source**.\n\nThis certainly won't be my last post on this topic so stay tuned for more Reason evangelism on the horizon.\n");

/***/ }),

/***/ "./src/articles/how-types-improve-javascript.md":
/*!******************************************************!*\
  !*** ./src/articles/how-types-improve-javascript.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: How a Type System Improves your JavaScript Code\ndate: 2019-02-24T21:25:04.540Z\nslug: how-types-improve-javascript\ndescription: Discover how a type system improves your developer workflow\ntags: reason,react,javascript,typescript\n---\n\nVanilla JavaScript is untyped by nature, some will call it “smart” because it is able to figure out what is a number or a string.\n\nThis makes it easier to run JavaScript code, it simply needs to be executed in a browser or Node.js runtime. However, its vulnerable to numerous runtime errors that can spoil your user experience.\n\nIf you’ve ever experienced the following, you would benefit from adopting a type system.\n\n- After fetching a list of data you may find that a certain field doesn’t exist on one of the records, causing the app to crash unless explicitly handled.\n- An instance of a class you imported doesn’t have a method you’re trying to invoke.\n- Your IDE doesn’t know what methods and properties are available, so it cannot easily assist you with autocomplete.\n- Difficulty reasoning about code, type systems at a glance make it easier to refactor\n\n## Flow, TypeScript, or ReasonML\n\nLet's say you have an existing codebase that you wish to make bulletproof. With respect to type errors, you could try adopting Flow or TypeScript -- they have a fairly similar syntax.\n\nOn the other hand adopting one of these in a large, existing codebase is difficult. You would have a backlog crammed with tasks relating to creating types and interfaces with code that made not have been designed in a type friendly way.\n\nOn top of all of this, Flow and TypeScript do not offer 100% type safety in their code.\n\nReason accomplished perfect type safety through inference, and makes annotating variables and function signatures much more straightforward.\n\n## Simple and Clearly Contrived Examples\n\nConsider the following code:\n\n```reason\nlet add = (a, b) => a + b;\n```\n\nIn basic JavaScript these arguments can be numbers or strings. In TypeScript or Flow these arguments can be annotated like so\n\n```javascript\nlet add = (a: number, b: number) => a + b;\n```\n\nThe first code snippet knows that we are adding two int values. Not two floats nor two strings, there are different operators for those addition operations. JavaScript can hardly tell the difference between an int and a float.\n\nAllow me now to expose this gradual typing with a contrived example.\n\n```javascript\nlet add = (a: string, b: number) => a + b;\nadd('some string', 5); // outputs: \"some string5\"\n```\n\nThat function works! This is absolutely preposterous! Now how does Reason handle this?\n\n```reason\nlet add = (a, b) => a + b;\nadd(\"some string\", 5);\n/*\nThis has type:\n  string\nbut somewhere wanted:\n  int\n*/\n```\n\nThis function was flawed at the implementation level. Reason has different operators for int, float, and string addition.\n\nThe purpose of this contrived example was to show that it is still very possible to have odd type \"errors\" even though it wont _break_ the application.\n\nIn a pure Reason program, developers will not have to deal with productions bugs that have to do with types or null values.\n\n## Developer Experience\n\nOne of the neatest features of TypeScript is the enhancement you get in code editor suggestions & autocompletion.\n\nThis is one area where TypeScript has a leg up on Reason, because a TypeScript program doesn't need to compile perfectly in order to offer autocompletion. Reason makes you fix errors in syntax or types before it gives you helpful autosuggestion.\n\nThis is the case on VSCode, but I know many Reason developers use vim. I cannot answer for the level of support each editor has.\n\nEven though I am a big fan of ReasonML, I have built production applications with TypeScript or Flow and I enjoy them as well. The wave behind TypeScript makes it especially good to pick up these days, considering there is plenty of writing and community support behind it.\n\nReason on the other hand is harder to pick up because there is comparatively less writing and content behind it. Through blog posts like this, I am hoping to change that.\n\nIf you have some interest in checking out Reason, I'd start with the [docs here](https://reasonml.github.io). Also, be sure to follow people like [@jordwalke](https://twitter.com/@jordwalke), [@jaredforsyth](https://twitter.com/@jaredforsyth), and [@sgrove](https://twitter.com/@sgrove) on twitter. They are pretty knowledgable with respect to the ReasonML/OCaml ecosystem.\n\nIf you want to how ReasonML works seamlessly with GraphQL, check out this article I wrote on [ReasonML with GraphQL, the Future of Type-Safe Web Applications](https://medium.com/open-graphql/reasonml-with-graphql-the-future-of-type-safe-web-applications-65be2e8f34c8).\n");

/***/ }),

/***/ "./src/articles/intro-to-reasonml-variants.md":
/*!****************************************************!*\
  !*** ./src/articles/intro-to-reasonml-variants.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Intro to ReasonML Variants\ndate: 2019-03-02T21:25:04.540Z\nslug: intro-to-reasonml-variants\ndescription: Learn to wield ReasonML variants to create better, typesafe web applications\ntags: reason,javascript,webdev,functional\n---\n\nReasonML is a super fast, expressive, and functional programming language. Currently, it can be compiled to optimized JavaScript for the web, WebGL/OpenGL for graphics rendering, or even native bytecode.\n\nOne of my favorite features of Reason are variant data types. These types allow us to handle enums in a sane way, forcing us to handle all possibilities for a particular scenario. We can define a variant type like this:\n\n```reason\ntype color =\n  | Red\n  | Blue\n  | White\n  | Black\n  | Grey;\n```\n\nWe see that the type `color` can be represented as this enumeration of different colors. Not too complicated, but not too enlightening either. In JavaScript, we could handle this with an object mapping:\n\n```javascript\nconst COLORS = {\n  RED: 'red',\n  BLUE: 'blue',\n  WHITE: 'white',\n  BLACK: 'black',\n  GREY: 'grey',\n};\n```\n\nI used maps like this all the time in my JavaScript projects, they help a ton when your goal is to keep constants defined in the same place. If you need to update, add, or remove a field, you only need to do so in one location.\n\nIf this were the whole story, I would probably decide that a compiled-to-js programming language like Reason is not worth the effort involved when I could just add TypeScript support. After all, so far it has only saved us a tiny amount of code.\n\nLet's take a look at an example to see how Reason would help us where ordinary JavaScript falls short.\n\n```javascript\nfunction getMonthlyPriceForCarColor(color) {\n  switch (color) {\n    case COLORS.RED:\n      return 28;\n    case COLORS.BLUE:\n      return 24;\n    case COLORS.WHITE:\n      return 20;\n  }\n}\n```\n\nThis function takes a color (from our convenient colors lookup-map) and returns to us the additional monthly price of getting a Tesla Model S. In other words, getting a red Tesla costs more because it is the best color.\n\nOne other thing you might notice is that I did not provide a default case, and as an imperfect programmer, I neglected some of the other colors. JavaScript will not yell at me for this on its own, so I will probably have to find out the hard way that I forgot some of the other cases.\n\nHopefully QA will catch this bug before my code lands in production. But even if they're really thorough, I'd still have to make changes and push/review more code. Wouldn't it be nice if our typechecker could alert us on the fly?\n\nThe same function in Reason looks like this:\n\n```reason\nlet getMonthlyPriceForCarColor = color =>\n  switch(color) {\n    | Red => 28\n    | Blue => 24\n    | White => 20\n  };\n```\n\nFirst of all there's less code, which is great, but beside the point. In practice, this function will actually have red squiggly underlines, alerting us that our switch is not exhaustive - it does not cover all of the possibilities or our `color` variant.\n\nThe error message is actually quite helpful when this happens.\n\n![Error: Non exhaustive switch statement](/images/non-exhaustive.png)\n\nFixing this issue simply requires that you cover the other possibilities.\n\n```reason\nlet getMonthlyPriceForCarColor = color =>\n  switch(color) {\n    | Red => 28\n    | Blue => 24\n    | White => 20\n    | Black => 0\n    | Grey => 0\n  };\n```\n\nReason wont let us compile our code if we don't have a case for each possibility in this function. This is a sampling of the incredibly powerful typesystem we have with Reason.\n\n## Variants as Constructors\n\nAs I've demonstrated so far, variants can be used as enumerations, but they exhibit a power that takes enumeration to a whole new level. Variants can be used as generic constructors that take arguments, allowing developers to further customize applications for their use case.\n\nFor example, we can adjust our price (arbitraily) based on the shade of grey or even go as far as to specify a totally arbitrary color somewhere in the RGB scale.\n\nUpdating our color type to the following:\n\n```reason\ntype color =\n  | Red\n  | Blue\n  | White\n  | Black\n  | Grey(float)\n  | Rgb(int, int, int);\n```\n\nNow when we run our function, we can let the customer to pick whatever color they want. To keep make the pricing more reasonable with our already hardcoded values, we'll allow grey to range from $0 to $20. depending on whatever number given between 0.0 and 1.0.\n\nThe `Rgb` constructor will be the most expensive since we have to create new paint in order to satisfy that requirement. The higher the values of red, blue, and green color, the closer to \\$36 it will be.\n\n```reason\nlet getMonthlyPriceForCarColor = color =>\n  switch(color) {\n    | Red => 28\n    | Blue => 24\n    | White => 20\n    | Black => 0\n    | Grey(pct) => int_of_float(pct *. 20.0)\n    | Rgb(red, green, blue) => {\n      /* completely random calculation. Tesla probably does not do this */\n      let sum = red + green + blue;\n      if (sum > 500) {\n        36\n      } else {\n        32\n      }\n    }\n  };\n\nJs.log(getMonthlyPriceForCarColor(Red));                /* 28 */\nJs.log(getMonthlyPriceForCarColor(Grey(0.64)));         /* 12 */\nJs.log(getMonthlyPriceForCarColor(Rgb(150, 210, 67)));  /* 32 */\nJs.log(getMonthlyPriceForCarColor(Rgb(150, 210, 167))); /* 36 */\n```\n\nThis is pretty neat huh? This example displays the expressive power of a robust type-safe language like Reason.\n\nWhen we introduce constructor arguments like this, we no longer have an ordinary switch statement that you can find in most programming languages. We call this _pattern matching_ in Reason.\n\nIn conjuction with data structures like variants, tuples, and lists, pattern matching creates a readable and concise flow of logic.\n\n## Refactor with confidence\n\nThe only thing I have yet to do to make this example stronger, is validate the constructor inputs. So to send off this post with a bang, I am going to make some helper functions.\n\n```reason\nlet validatePercentage = pct =>\n  restrictRangef(pct, 0.0, 1.0);\n\nlet validateRgb = (red, blue, green) => {\n  let red = restrictRange(red, 0, 255);\n  let green = restrictRange(green, 0, 255);\n  let blue = restrictRange(blue, 0, 255);\n  (red, blue, green);\n};\n```\n\nThese functions validate the required input to the extend that they cut off the values if they are too low or too high. Here are their corresponding `restrictRange` functions.\n\n```reason\nlet restrictRange = (number, min, max) =>\n  if (number > max) {\n    max;\n  } else if (number < min) {\n    min;\n  } else {\n    number;\n  };\n\nlet restrictRangef = (number, min, max) =>\n  if (number > max) {\n    max;\n  } else if (number < min) {\n    min;\n  } else {\n    number;\n  };\n```\n\nOne last thing to note is that we must have separate `restrictRange` functions for `int` and `float` types. By convention, when we have functions that take ints, their float variation will have the same name but with an \"f\" at the end.\n\nA little extra code here is a small price to pay here when we have superior type coverage.\n\nFinally I can update our `getMonthlyPriceForCarColor` function with our new helpers:\n\n```reason\nlet getMonthlyPriceForCarColor = color =>\n  switch (color) {\n  | Red => 28\n  | Blue => 24\n  | White => 20\n  | Black => 0\n  | Grey(pct) => int_of_float(validatePercentage(pct) *. 20.0)\n  | Rgb(red, green, blue) => {\n      let (r, g, b) = validateRgb(red, green, blue);\n      let sum = r + g + b;\n      if (sum > 500) {\n        36\n      } else {\n        32\n      };\n    }\n  };\n```\n\n# And thats a wrap\n\nWe've taken a look at variants and how we can use them with constructor arguments through pattern matching. This is a super powerful feature that you won't find in just any modern programming language.\n\nWhen you build an application with complete type safety, you begin to reap the advantages as the size of your project grows and you begin to make refactors. Knowing that your code compiles increases your confidence that you wont break critical or even basic features in production.\n");

/***/ }),

/***/ "./src/articles/reason-react-hooks-tutorial.md":
/*!*****************************************************!*\
  !*** ./src/articles/reason-react-hooks-tutorial.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: ReasonML with React Hooks Tutorial — Building a Pomodoro Timer\ndate: 2019-04-15T21:25:04.540Z\nslug: reason-react-hooks-tutorial\ndescription: Learn Reason React by building a Pomodoro Timer with React hooks\ntags: reason,javascript,react,tutorial\nhero_image: timer.png\n---\n\n![](/timer.png)\n\nReasonML is a programming language that combines the simplicity of JavaScript with the performance of OCaml. JavaScript programmers should give ReasonML a try. Reason's inherits OCaml's typesystem as well as the approachability of JavaScript.\n\nWith [ReasonReact](https://reasonml.github.io/reason-react/) and [BuckleScript](https://bucklescript.github.io/), we can compile Reason code to JavaScript that works like good old React.\n\nBut that's not all, things are getting even better for the Reason ecosystem. Earlier last week, ReasonReact [version 0.7.0 dropped](https://reasonml.github.io/reason-react/blog/2019/04/10/react-hooks), with support for React hooks. We can now build robust components with React hooks that:\n\n- eliminate duplicated lifecycle logic (like in componentDidMount, componentDidUpdate, and componentWillUnmount)\n- eliminate the need for complicated patterns like higher-order components or render props\n- allow _easier refactoring_ of stateful components\n\nThink for a moment about that last point, what else give us easier refactorability?\n\nA rock solid typesystem and a helpful compiler!\n\nToday, we're going to build a Pomodoro Timer [like this](https://tomato-timer.com/) using Reason and React.\n\nA pomodoro timer allows you to set a timer for say 25 or 30 minutes that lets you know when to stop working. Because sometimes taking a break is good, and you better believe I'm using one while writing this.\n\n## Initializing a Project\n\nThe first step is to install BuckleScript, a tool that will compile our Reason code to JavaScript.\n\n```sh\nnpm install -g bs-platform\n```\n\nAfter that, we can scaffold our project with the `init` command, and setting the `theme` to react-hooks.\n\n```sh\nbsb -init pomodoro-timer -theme react-hooks\ncd pomodoro-timer && npm install\n```\n\nNow that our project set up, we can mention our folder layout. Our Reason code belongs in the src directory. Where we usually have an index.js file in a JavaScript React project, we have an Index.re file. These files serve the same purpose: render the app root.\n\nSince our code will compile to JavaScript, I still like to have a bundler like Webpack to bundle those files.\n\n> Tip: It is generally considered a best practice to keep your folder structure as flat as possible with ReasonML, using captialized file names (like Timer.re). See the [ReasonML docs](https://reasonml.github.io/docs/en/project-structure#folders) for a discussion on project structure.\n\n### Running the code\n\nBefore I clean up the environment, let us try running the code. This will need two or three separate terminal tabs:\n\n```sh\n# in one tab\nnpm start\n```\n\nThis runs `bsb -make-world -w` which compiles your Reason files on every change. It does this quickly, mind you.\n\n```sh\n# in another tab\nnpm run webpack\n```\n\nThis command takes our compiled JavaScript and spits out a bundle that we can then open in a browser using:\n\n```sh\nopen build/index.html\n```\n\nI prefer use a static file server like [zeit/serve](https://github.com/zeit/serve).\n\n```sh\n# install `serve` globally\nnpm i -g serve\n\n# serve it!\nserve build/\n```\n\n![initial project](./initial_project.png)\n\n### Cleaning up the Environment\n\nI want to clean up the default project structure before writing an implementation.\n\n1. Remove the Component1.re and Component2.re files, we will not be using these. You can still read them and try to making sense of how hooks are working in our new environment.\n2. Replace index.html with the following:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Pomodoro Timer</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script src=\"Index.js\"></script>\n  </body>\n</html>\n```\n\n3. Replace Index.re with the following:\n\n```reason\nReactDOMRe.renderToElementWithId(<Timer />, \"root\");\n```\n\n4. Open up bsconfig.json and change the field \"in-source\" from true to false. This will output our compiled JavaScript into the lib/js directory. I prefer this over leaving them inside of our root src directory.\n\n5. Tell webpack to build from the new location by changing webpack.config.js to the following:\n\n```js\nmodule.exports = {\n  entry: './lib/js/src/Index.bs.js',\n  // rest of webpack config\n};\n```\n\nAnd now with all out that taken care of, we can begin the fun part, the implementation.\n\n## Building a Stateless Component\n\nAfter cleaning up, notice that we are trying to render a `Timer` component but we have not even defined one. Let us write a stateless component to render to the page.\n\n```reason\n[@react.component]\nlet make = () => {\n  <div> {ReasonReact.string(\"One day this will be a timer\")} </div>;\n};\n```\n\nI want to highlight how simple this code is. Writing a stateless React component in the previous version was more verbose:\n\n```reason\n/* DO NOT WRITE THIS */\nlet component = ReasonReact.statelessComponent(\"Timer\");\nlet make = () => {\n  ...component,\n  render: _children =>  <div> {ReasonReact.string(\"One day this will be a timer\")} </div>;\n};\n```\n\nEven compared to regular JavaScript with React, this new syntax is incredibly slick. With Reason projects, we do not need to layer imports on top of the file every time we make a new file.\n\n## The useReducer Hook\n\nNow we are going to introduce some state into this equation. We do not have any \"class\" components, we are still using functional components. But now we are going to use React hooks to compose a solution.\n\nFor our timer, we need to keep track of at least two things:\n\n1. The seconds on the clock\n2. Whether it is ticking or not\n\nWhen we consider any timer, we usually have three buttons: `Start`, `Stop`, and `Reset`. These map to directly to user interactions, but there is one more: the `Tick` itself. Even though the tick is not controlled by the user, it is still an action that should return a new state for our reducer.\n\nAt the top of Timer.re, where we will build this whole app, add the following:\n\n```reason\ntype state = {\n  seconds: int,\n  isTicking: bool\n};\n\ntype action =\n  | Start\n  | Stop\n  | Reset\n  | Tick;\n```\n\nHow easy it is, to implement an application after you have described your states needs and actions!\n\nNext we'll update our make function to use a reducer:\n\n```reason\n[@react.component]\nlet make = () => {\n  let (state, dispatch) =\n    React.useReducer(\n      (state, action) =>\n        switch (action) {\n        | Start => {...state, isTicking: true}\n        | Stop => {...state, isTicking: false}\n        | Reset => {...state, seconds: 30}\n        | Tick => {...state, seconds: state.seconds - 1}\n        },\n      {isTicking: false, seconds: 30},\n    );\n\n  <div>\n    {ReasonReact.string(\n       \"There are \" ++ string_of_int(state.seconds) ++ \" on the clock\",\n     )}\n  </div>;\n};\n```\n\nThe syntax is like that of ReactJS. The `useReducer` function returns a tuple as opposed an array. This is because JavaScript does not know what the heck a tuple is. We make sure to handle each of our action types inside this reducer, returning a whole copy of the state.\n\nThe second argument to `useReducer` is the initial state of the reducer. It would make sense for the time to receive the initial time as a prop but I'll leave it this way for now.\n\nNow we need a way to invoke these actions. Let us start with the `Tick` because it is the most complicated bit.\n\n## The useEffect hook\n\nTo update the timer every second, we need to create an effect. In the JavaScript world, this means putting a callback function within `setInterval`.\n\nLet us add this hook between the `useReducer` function and the returned JSX.\n\n```reason\nReact.useEffect0(() => {\n  let timerId = Js.Global.setInterval(() => dispatch(Tick), 1000);\n  Some(() => Js.Global.clearInterval(timerId));\n});\n```\n\nIf you recall the way `useEffect` works:\n\n- The first argument is a callback function that runs when the component mounts, updates, or unmounts.\n- Optionally, the callback function can return another function that performs cleanup. This includes unsubscribing from sockets or clearing a setInterval so it does not persist forever.\n\nIf you run the code and refresh your browser, you'll see that our timer is going to run indefinitely.\n\nIt should not do this, so lets update our reducer again to account for whether the `isTicking` flag is true or false. We will also make sure that `seconds` are greater than zero so we do not go negative.\n\n```reason\nlet (state, dispatch) =\n    React.useReducer(\n      (state, action) =>\n        switch (action) {\n        | Start => {...state, isTicking: true}\n        | Stop => {...state, isTicking: false}\n        | Reset => {...state, seconds: 30}\n        | Tick => state.isTicking && state.seconds > 0\n            ? {...state, seconds: state.seconds - 1} : state\n        },\n      {isTicking: false, seconds: 30},\n    );\n```\n\nNow you can verify this by setting `isTicking` to true and `seconds` to 3. Lovely, this app is functional now. If you wanted to actually use it, refresh your browser and watch it count down.\n\n## Interactivity with Buttons\n\nTo make this Timer even better, I am going to add buttons.\n\nLet us define a Button module in the same file as our Timer, right above the make function.\n\n```reason\nmodule Button = {\n  [@react.component]\n  let make = (~label, ~onClick) => {\n    <button onClick> {label |> ReasonReact.string} </button>;\n  };\n};\n```\n\nThis button takes a label and an onClick prop. We can add them to our Timer, at the bottom of the make function like so:\n\n```reason\n\n[@react.component]\nlet make = () => {\n  /* useReducer */\n\n  /* useEffect0 */\n\n  <div>\n      {ReasonReact.string(\n        \"There are \" ++ string_of_int(state.seconds) ++ \" seconds on the clock\",\n      )}\n      {state.isTicking\n        ? <Button label=\"STOP\" onClick={_event => dispatch(Stop)} />\n        : <>\n            <Button label=\"START\" onClick={_event => dispatch(Start)} />\n            <Button label=\"RESET\" onClick={_event => dispatch(Reset)} />\n          </>}\n    </div>;\n};\n```\n\nTry running this in your browser, you should see:\n\n![start and stop buttons](./start_stop.png)\n\nIf you click START, it will start. If you click STOP it will stop. RESET will bring the timer back up to the initial time. Pretty straightforward how it just works!\n\nAt this point, our app is **feature-complete**. Read on to make it even cooler, with style and other aesthetic details.\n\n## Aesthetic Concerns\n\nLet us add some styles and make this timer look pretty. Or at least better.\n\nUpdate the JSX in Timer to the following:\n\n```reason\n[@react.component]\nlet make = () => {\n  /* useReducer */\n\n  /* useEffect0 */\n<div\n    style={ReactDOMRe.Style.make(\n      ~border=\"1px solid black\",\n      ~borderRadius=\"8px\",\n      ~maxWidth=\"180px\",\n      ~textAlign=\"center\",\n      (),\n    )}>\n    <p\n      style={ReactDOMRe.Style.make(\n        ~color=\"#444444\",\n        ~fontSize=\"42px\",\n        ~margin=\"16px 0\",\n        (),\n      )}>\n      {state.seconds |> formatTime |> str}\n    </p>\n    {state.isTicking\n       ? <Button label=\"STOP\" onClick={_event => dispatch(Stop)} />\n       : <>\n           <Button label=\"START\" onClick={_event => dispatch(Start)} />\n           <Button label=\"RESET\" onClick={_event => dispatch(Reset)} />\n         </>}\n  </div>;\n};\n```\n\nI have introduced the default styles that come with ReasonReact. They are not my preferred style solution as I like [bs-css](https://github.com/SentiaAnalytics/bs-css) better, but for this small project, they will do fine.\n\nI also introduce a `formatTime` function. Let us implement that function so our project compiles:\n\n```reason\nlet padNumber = numString =>\n  if (numString |> int_of_string < 10) {\n    \"0\" ++ numString;\n  } else {\n    numString;\n  };\n\nlet formatTime = seconds => {\n  let mins = seconds / 60;\n  let minsString = mins |> string_of_int |> padNumber;\n  let seconds = seconds mod 60;\n  let secondsString = seconds |> string_of_int |> padNumber;\n  minsString ++ \":\" ++ secondsString;\n};\n```\n\nI included `padNumber` as well, a useful utility that pads minutes and seconds which are less than 10. This makes the timer more reader friendly.\n\nI will be honest, this timer looks pretty good right now and I have not even styled the buttons. I will leave that as a task for the reader if they are so inclined.\n\n![finished timer](./finished_timer.png)\n\n## Update the Document Title\n\nThe concept of a timer in the browser can be further improved. If we have the time remaining persist in the browser tab itself, it would be visible if the user is in another tab.\n\nAll we have to do to get that going is update our `Tick` action in the reducer. I'll even show off ReasonML's interop with JavaScript by updating the document title. Note the `%bs.raw` directive, this allows us to put on the JavaScript training wheels and use it directly.\n\n```reason\nlet updateTitle: string => unit = [%bs.raw\n  {|\n  function updateTitle(remaining) {\n    document.title = \"⏰ \" + remaining + \" ⏰\";\n  }|}\n];\n\n[@react.component]\nlet make = () => {\nlet (state, dispatch) =\n    React.useReducer(\n      (state, action) =>\n        switch (action) {\n        | Start => {...state, isTicking: true}\n        | Stop => {...state, isTicking: false}\n        | Reset => {...state, seconds: 30}\n        | Tick =>\n          state.isTicking && state.seconds > 0\n            ? {\n              updateTitle(formatTime(state.seconds - 1));\n              {...state, seconds: state.seconds - 1};\n            }\n            : state\n        },\n      {isTicking: false, seconds: 30},\n    );\n\n/* useEffect0 */\n\n\n/* JSX return */\n};\n```\n\nAnd with that, I am finished with the implementation of the timer:\n\n![finished timer with title update](./finished_timer_title.png)\n\n## Summary\n\nWith this tutorial we tackled the updated ReasonReact syntax with React hooks. when React hooks dropped late last year I could not wait to be able to use them in Reason projects. Now that they are here, we can take advantage of strong typed, composable, functional code.\n\nWe learned:\n\n- how to make a basic stateless component\n- how to use the `useReducer` hook\n- how to use the `useEffect` hook\n- how to define other React components in the same file/module.\n- how to use basic styles in ReasonReact\n- how to do interon with `%bs.raw`\n\nI hope this has been a fun or useful experience, be sure to follow me @iwilsonq on [dev.to](https://dev.to/iwilsonq), [Twitter](https://twitter.com/iwilsonq), [Medium](https://medium.com/@iwilsonq) or anywhere else I roam.\n\nIf you want to how ReasonML works seamlessly with GraphQL, check out this article I wrote on [ReasonML with GraphQL, the Future of Type-Safe Web Applications](https://medium.com/open-graphql/reasonml-with-graphql-the-future-of-type-safe-web-applications-65be2e8f34c8).\n\nIf you'd like to keep up with future posts, [sign up for my newsletter here](https://buttondown.email/iwilsonq)!\n");

/***/ }),

/***/ "./src/articles/reasonml-with-graphql.md":
/*!***********************************************!*\
  !*** ./src/articles/reasonml-with-graphql.md ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: ReasonML with GraphQL, the Future of Type-Safe Web Applications\ndescription: Build a small ReasonReact web application that consumes a GraphQL endpoint using reason-apollo\ntags: reason,graphql,javascript,fp\ndate: 2019-03-13T07:00:00.000Z\nslug: building-powerful-graphql-servers-with-rust\nhero_image: https://thepracticaldev.s3.amazonaws.com/i/aejew3ps1khqnw7gy0yk.png\n---\n\n![](https://thepracticaldev.s3.amazonaws.com/i/aejew3ps1khqnw7gy0yk.png)\n\n_I made this graphic myself_\n\nReasonML, also known as JavaScript-flavored OCaml, offers nearly impenetrable type safety for developing user interfaces. By adopting a static type system, you can eliminate an entire class of errors before your app is served.\n\nWe’re going to look into building a small web application that uses consumes a GraphQL endpoint using ReasonML. We’ll cover:\n\n- getting started with a ReasonReact project\n- setting up a client with reason-apollo\n- sending queries\n- mutating data\n\nIf you’re new to both GraphQL and ReasonML, I’d suggest learning one at a time. Learning more than one big thing at once is often difficult for me. If you’re experienced with JavaScript and GraphQL, but want to learn ReasonML, read on, but keep the [docs](https://reasonml.github.io) handy.\n\n## Getting Started - Establishing a ReasonReact Project\n\nIn order to get going with ReasonML, we must first install the cli, `bsb-platform` that handles bootstrapping the project. You should also get an editor plugin that helps with developing ReasonML apps. If you’re using VSCode, reason-vscode by Jared Forsyth is my preferred plugin.\n\n```bash\nnpm install -g bsb-platform\n```\n\nThis installs the BuckleScript compiler that turns our ReasonML into wonderful JavaScript which has already been type-checked and can be run in the browser.\n\nNow we can initialize our project and hop right in.\n\n```bash\nbsb -init reason-graphql-example -theme react\ncd reason-graphql-example\nnpm install\n```\n\n- The `init` argument specifies the name of the project we’re initializing.\n- The `theme` argument specifies the template we wish to use. I usually just choose the react theme.\n- We run `npm install` to install dependences just like in any other JavaScript project.\n\nWith the project scaffolded, we can try to build it. In two separate terminal panes, run:\n\n```bash\nnpm start\n# and\nnpm run webpack\n```\n\n- `npm start` tells BuckleScript (bsb) to build the project watch for changes to your .re files.\n- `npm run webpack` fires up webpack to build your main JavaScript bundle\n\n_Quick tip: you’ll notice that the webpack output is in the **build** folder but the index.html file is in the **src** folder. We can make serving the project a little bit easier by moving the index.html file to the build folder and rewriting the script tag to point at the adjacent Index.js file. _\n\nWith all that taken care of, you can serve your build folder using `http-server build` or `serve build` and check out the project.\n\n![initial screen](https://thepracticaldev.s3.amazonaws.com/i/sfcjd5lxm76wsycbrcny.png)\n\nWhen I’m developing a ReasonML project, I’m running 3 terminal tabs:\n\n1. `npm start` to transpile ReasonML to JavaScript\n2. `npm run webpack` to bundle JavaScript\n3. `serve build` to actually serve the build on a port\n\nBefore we can get to the fun stuff, we still must clear out the boilerplate and set up react-apollo.\n\nGo ahead and remove the Component1 and Component2 files, and then update Index.re to the following:\n\n```ocaml\nReactDOMRe.renderToElementWithId(<App />, \"root\");\n```\n\nUpdate index.html to:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>ReasonML GraphQL Example</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n\n    <script src=\"./Index.js\"></script>\n  </body>\n</html>\n```\n\nFinally, create an App.re file and add the following:\n\n```ocaml\n/* App.re */\nlet str = ReasonReact.string;\nlet component = ReasonReact.statelessComponent(\"App\");\n\nlet make = _children => {\n  ...component,\n  render: _self =>\n\t<div>\n\t  <h1> {\"Hello ReasonReact\" |> str} </h1>\n\t</div>\n};\n```\n\nYou might have to re-run your terminal commands, but with all that said and done, you should have something like this appear on your screen:\n\n![hello reason react](https://thepracticaldev.s3.amazonaws.com/i/7732nf5s6g7o93r406rp.png)\n\nIt feels like a lot of effort to get started, but accepting early friction for a smoother experience later on is the tradeoff here.\n\n## Initializing Reason Apollo\n\nIn order to get set up with Apollo we’re going to run:\n\n```bash\nnpm install -S reason-apollo react-apollo apollo-client apollo-cache-inmemory apollo-link apollo-link-context apollo-link-error apollo-link-http graphql graphql-tag apollo-link-ws apollo-upload-client subscriptions-transport-ws\n```\n\nThat looks like a big install command. It is, but only the first package, reason-apollo, is consumed in our ReasonML code. However, reason-apollo is a library of binding labels depends on these other JavaScript packages.\n\nIn order to make writing GraphQL queries more friendly we’ll need one more dev dependency.\n\n```bash\nnpm install -D graphql_ppx\n```\n\nAs that installs we can open up our bsconfig.json file and update the “bs-dependencies” and “ppx-flags” keys like so:\n\n```json\n// bsconfig.json\n{\n  \"bs-dependencies\": [\"reason-react\", \"reason-apollo\"],\n  \"ppx-flags\": [\"graphql_ppx/ppx\"]\n\n  // other fields...\n}\n```\n\nThe “bs-dependencies” array tells BuckleScript to include those npm modules in the build process. The ppx flags array lets our IDE know how to handle preprocess certain directives, GraphQL in our case.\n\nCreate a file inside the src folder called Client.re. This is where we will declare our instance of the Apollo Client.\n\n```ocaml\n/* Client.re */\nlet inMemoryCache = ApolloInMemoryCache.createInMemoryCache();\n\nlet httpLink =\n  ApolloLinks.createHttpLink(~uri=\"https://video-game-api-pvibqsoxza.now.sh/graphql\", ());\n\nlet instance =\n  ReasonApollo.createApolloClient(~link=httpLink, ~cache=inMemoryCache, ());\n```\n\n> Note: If this uri, https://video-game-api-pvibqsoxza.now.sh/graphql does not work, please send me a message on twitter or here in the comments and I’ll update that as quickly as possible\n\nWhen we work with ReasonML, any variable that we create with a `let` binding is automatically exported from the module for us.\n\nWith the instance created, we can reference it in any of our other .re files. Update Index.re to the following:\n\n```ocaml\n/* Index.re */\nReactDOMRe.renderToElementWithId(\n  <ReasonApollo.Provider client=Client.instance>\n    <App />\n  </ReasonApollo.Provider>,\n  \"root\",\n);\n```\n\nIt looks a little like a standard React JS application, with a couple caveats. Notice that there are no import statements. In ReasonML, we have access to all of the namespaces built in our application. From the perspective of Index.re, We can see the `Client` and the `App` modules.\n\nWhen we create a .re file in our src folder, it becomes a module. We could also declare our modules explicitly within our files.\n\nIt is now time to consume our API.\n\n## Sending Queries and Rendering a List\n\nWhile writing this article I created a small Node GraphQL server, the code of which is available at [this repo](https://github.com/iwilsonq/video-game-api). To keep costs low, I declared an array of mock data to return on each GraphQL request rather than host a database.\n\nRather than create a todo app, I decided to create a list of video games that I played at some point long ago. Then, I could check if I finished it or not, thus remembering the games that I still haven’t beat.\n\nAs we are working with a GraphQL server, we should be able to figure out exactly how to call it by observing the schema.\n\n```Graphql\n  type VideoGame {\n    id: ID!\n    title: String!\n    developer: String!\n    completed: Boolean!\n  }\n\n  type Query {\n    videoGames: [VideoGame!]!\n  }\n\n  type Mutation {\n    completeGame(id: ID!): VideoGame!\n  }\n```\n\nCurrently, we have one query and one mutation, both of which operate around this `VideoGame` type. A GraphQL adept will notice that every return value is non-nullable, that is, these responses cannot return unset fields or null objects.\n\nSoon we’ll see why all of the !’s are particularly important for our ReasonML code.\n\nLet’s begin by defining the query in on top of App.re, just below the `component` declaration.\n\n```ocaml\n/* App.re */\n\nmodule VideoGames = [%graphql\n  {|\n  query VideoGames {\n    videoGames {\n      id\n      title\n      developer\n      completed\n    }\n  }\n|}\n];\n\nmodule VideoGamesQuery = ReasonApollo.CreateQuery(VideoGames);\n\n/* let make = ... */\n```\n\nComparing with the JavaScript in react-apollo, this code would be most analogous to:\n\n```js\nconst VideoGames = gql`\n  query VideoGames {\n    videoGames {\n      id\n      title\n      developer\n      completed\n    }\n  }\n`\n\n// later in render\nrender() {\n  return (\n    <Query query={VideoGames}> {/* ... */} </Query>\n  )\n}\n\n```\n\nNow let’s update the render function:\n\n```ocaml\n/* App.re */\nlet make = _children => {\n  ...component,\n  render: _self => {\n\tlet videoGamesQuery = VideoGames.make();\n\t<div>\n\t\t<h1> {\"ReasonML + ReasonReact + GraphQL\" |> str} </h1>\n\t\t<VideoGamesQuery variables=videoGamesQuery##variables>\n        ...{\n             ({result}) =>\n               switch (result) {\n               | Loading => <div> {\"Loading video games!\" |> str} </div>\n               | Error(error) => <div> {error##message |> str} </div>\n               | Data(data) => <VideoGameList items=data##videoGames />\n               }\n           }\n      </VideoGamesQuery>\n\t</div>;\n  }\n};\n```\n\nHere, we’re taking advantage of ReasonML’s coolest feature - [pattern matching](https://reasonml.github.io/docs/en/pattern-matching). Pattern matching combined with [variants](https://reasonml.github.io/docs/en/variant) makes the logic that you would otherwise put in branches of if-else statements more linear and easier to follow. It is also reduces branch checking to [constant rather than linear time](https://reasonml.github.io/docs/en/variant), making it more efficient.\n\nIf the ReasonML code ever seems more verbose, just remember we’re still getting perfect type safety when it compiles. We still need to build the `VideoGamesList` component as well as define the `videoGame` record type.\n\nStarting with the record type, create a new file called VideoGame.re and add the following:\n\n```ocaml\n/* VideoGame.re */\n\n[@bs.deriving jsConverter]\ntype videoGame = {\n  id: string,\n  title: string,\n  developer: string,\n  completed: bool,\n};\n```\n\nThe `videoGame` type as we have it here, has 4 fields, none of which are optional. The BuckleScript directive above it adds a pair of exported utility methods that allow us to [convert between ReasonML records and JavaScript objects](https://bucklescript.github.io/docs/en/generate-converters-accessors).\n\n> Tip: when Apollo returns a response, it returns untyped JavaScript objects. The `jsConverter` directive gives us an exported method called `videoGameFromJs` that we can use to map the Apollo query data to fully typed ReasonML.\n\nTo see this mechanic in action, create a new file called VideoGameList.re and add:\n\n```ocaml\n/* VideoGameList.re */\nopen VideoGame;\n\nlet str = ReasonReact.string;\nlet component = ReasonReact.statelessComponent(\"VideoGameList\");\n\nlet make = (~items, _children) => {\n  ...component,\n  render: _self =>\n    <ul style={ReactDOMRe.Style.make(~listStyleType=\"none\", ())}>\n      {\n        items\n        |> Array.map(videoGameFromJs)\n        |> Array.map(item =>\n             <li key={item.id}>\n             \t<input\n                  id={item.id}\n                  type_=\"checkbox\"\n                  checked={item.completed}\n                />\n                <label htmlFor={item.id}>\n                  {item.title ++ \" | \" ++ item.developer |> str}\n                </label>\n             </li>\n           )\n        |> ReasonReact.array\n      }\n    </ul>,\n};\n```\n\n1. Open the `VideoGame` module (VideoGame.re) at the top so we can use all of it’s exports in the `VideoGameList` module.\n2. Declare the component type and string rendering shorthand.\n3. Define a make function that expects one prop, `items`.\n4. Inside the render function, pipe the items to convert JS objects to ReasonML records, map records to JSX, and finally output them as an array.\n\n> Note: Piping basically reverses the order of function calls to potentially improve readability. With the `|>` operator, the `items` object is applied to each function as the _last_ argument.\n\nThough I like prefer the piping style, the following are equivalent.\n\n```ocaml\nitems\n\t|> Array.map(videoGameFromJs)\n\t|> Array.map(renderItem)\n\t|> ReasonReact.array;\n\nReasonReact.array(\n\tArray.map(\n\t\trenderItem,\n\t\tArray.map(\n\t\t\tvideoGameFromJs,\n\t\t\titems\n\t\t)\n\t)\n);\n```\n\nI think we are ready to once again compile and serve our project. If you haven’t already, run this command in your project root:\n\n```bash\nyarn send-introspection-query https://video-game-api-pvibqsoxza.now.sh/graphql\n```\n\nThis generates a `graphql_schema.json` file that Reason Apollo uses to type check your queries. If your ReasonML app asks for a field that isn’t on the schema, or if it doesn’t properly handle optional data types, it will not compile.\n\nThe strict typing serves as a wonderful sanity check for writing queries and mutations.\n\nWhen all is said and done, you should see the following.\n\n![finished screen](https://thepracticaldev.s3.amazonaws.com/i/96prj40pfw9frc23j68r.png)\n\nDon’t yell at me for not finishing the main story in Skyrim.\n\n## Mutating Data\n\nOne thing you may notice thus far is that clicking the checkboxes doesn’t do anything. This is expected, since we have not yet wired up a mutation.\n\nLet us begin by recalling our schema above, and creating a module for the mutation to mark a game completed.\n\nInside VideoGameList.re, add these modules to the top of the file just beneath the call to create a component.\n\n```ocaml\n/* VideoGameList.re */\nmodule CompleteGame = [%graphql\n  {|\n  mutation CompleteGame($id: ID!) {\n    completeGame(id: $id) {\n      id\n      completed\n    }\n  }\n|}\n];\n\nmodule CompleteGameMutation = ReasonApollo.CreateMutation(CompleteGame);\n```\n\nFor the render prop of the mutation, it’ll look pretty similar to the JavaScript version. I’ll put this code here and then walk through it, starting from inside the `<li>` tag.\n\n```ocaml\n/* VideoGameList.re */\n\n<li key={item.id}>\n  <CompleteGameMutation>\n    ...{\n        (mutate, {result}) => {\n          let loading = result == Loading;\n          <div>\n            <input\n              id={item.id}\n              type_=\"checkbox\"\n              checked={item.completed}\n              onChange={\n                _event => {\n                  let completeGame =\n                    CompleteGame.make(~id=item.id, ());\n                  mutate(~variables=completeGame##variables, ())\n                  |> ignore;\n                }\n              }\n            />\n            <label\n              htmlFor={item.id}\n              style={\n                ReactDOMRe.Style.make(\n                  ~color=loading ? \"orange\" : \"default\",\n                  (),\n                )\n              }>\n              {item.title ++ \" | \" ++ item.developer |> str}\n            </label>\n          </div>;\n        }\n      }\n  </CompleteGameMutation>\n</li>\n```\n\nLike the Apollo `VideoGamesQuery` component we used earlier, the `CompleteGameMutation` component we see here passes to its children a mutate function as well as a results object.\n\nThis particular component is not the best example to show off how you could use that results object, as I only take advantage of it when a single item is being updated. If it is, I color the text of the item label green and call that the loading state.\n\nI’m no UX guy, but I think that’ll do for today.\n\n## Wrapping Up\n\nReasonML is a pretty powerful and expressive language. If you are new to ReasonML and itching to build some type safe user interfaces, here are some resources to learn from:\n\n1. Many of the third party tools we use in JavaScript come out of the box with ReasonML. This [article by David Kopal explains how](https://medium.freecodecamp.org/psst-heres-why-reasonreact-is-the-best-way-to-write-react-5088d434d035?source=linkShare-2467058898a1-1543182271), along with some other reasons why writing ReasonML is so cool.\n2. [Jared Forsyth’s blog](https://jaredforsyth.com) has great content about ReasonML and OCaml. He is one of the most active contributors to the community.\n3. I get most of my learning done through the [ReasonML docs](reasonml.github.io) and the [BuckleScript docs](bucklescript.github.io). They are easy to follow and contain powerful insights on the design choices when implementing language features.\n\nIf you want to quickly set up your own GraphQL server then check out my other article, [Learn to Build a GraphQL Server with Minimal Effort](https://medium.freecodecamp.org/learn-to-build-a-graphql-server-with-minimal-effort-fc7fcabe8ebd).\n\nI hope to write more articles about ReasonML and GraphQL in the future. If these interest you then by all means follow me on [Medium](https://medium.com/@iwilsonq) and on [Twitter](https://twitter.com/iwilsonq)!\n\nThis article was originally published in [Open GraphQL on Medium](_https://medium.com/open-graphql/reasonml-with-graphql-the-future-of-type-safe-web-applications-65be2e8f34c8_).\n");

/***/ }),

/***/ "./src/components/BlogList.tsx":
/*!*************************************!*\
  !*** ./src/components/BlogList.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogListItem */ "./src/components/BlogListItem.tsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/components/Card.tsx");
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BlogList = props => props.articles.length === 0 ? null : __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.articles.map(article => __jsx(_BlogListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  article: article,
  key: article.slug,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ }),

/***/ "./src/components/BlogListItem.tsx":
/*!*****************************************!*\
  !*** ./src/components/BlogListItem.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function truncateSummary(content) {
  const excerpt = content.slice(0, 200).trimEnd();

  for (let i = excerpt.length; i > 0; i--) {
    if (excerpt[i] === '\n') {
      return excerpt.slice(0, i);
    }
  }

  return excerpt + '...';
}

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

const BlogListItem = ({
  article
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: article.slug,
    href: {
      pathname: `/blog/${article.slug}`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1967025871", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1967025871", [article.document.data.hero_image]]]) + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1967025871", [article.document.data.hero_image]]]) + " " + "article-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1967025871", [article.document.data.hero_image]]]) + " " + "article-hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1967025871", [article.document.data.hero_image]]]) + " " + "hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1967025871", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, article.document.data.title), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1967025871", [article.document.data.hero_image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, " ", reformatDate(article.document.data.date))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1967025871",
    dynamic: [article.document.data.hero_image],
    __self: undefined
  }, `.article-link-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.article.__jsx-style-dynamic-selector{width:100%;}.article-hero.__jsx-style-dynamic-selector{position:relative;background:url(${article.document.data.hero_image}) center;opacity:0.3;color:#000;height:200px;}.article-content.__jsx-style-dynamic-selector{position:relative;padding:16px;}.hero-text.__jsx-style-dynamic-selector{color:#000;padding:16px;position:absolute;top:0;left:16px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0SXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUcwQixBQUdGLEFBR08sQUFPQSxBQUtQLFdBZGIsQUFlZSxPQVp1QyxBQU92QyxNQU1LLE9BTHBCLFdBTVEsTUFDSSxVQUNaLFlBZmMsSUFQZCxRQVFhLFdBQ0UsYUFDZiIsImZpbGUiOiIvVXNlcnMvaWFud2lsc29uL3VpLXdvcmtzcGFjZS9pYW53aWxzb24uaW8tbmV4dC9zcmMvY29tcG9uZW50cy9CbG9nTGlzdEl0ZW0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi4vcGFnZXMnO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZVN1bW1hcnkoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZXhjZXJwdCA9IGNvbnRlbnQuc2xpY2UoMCwgMjAwKS50cmltRW5kKCk7XG4gIGZvciAobGV0IGkgPSBleGNlcnB0Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgIGlmIChleGNlcnB0W2ldID09PSAnXFxuJykge1xuICAgICAgcmV0dXJuIGV4Y2VycHQuc2xpY2UoMCwgaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBleGNlcnB0ICsgJy4uLic7XG59XG5cbmZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShmdWxsRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmdWxsRGF0ZSk7XG4gIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhcnRpY2xlOiBBcnRpY2xlO1xufVxuXG5jb25zdCBCbG9nTGlzdEl0ZW06IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGFydGljbGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGtleT17YXJ0aWNsZS5zbHVnfSBocmVmPXt7IHBhdGhuYW1lOiBgL2Jsb2cvJHthcnRpY2xlLnNsdWd9YCB9fT5cbiAgICAgIDxhPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWhlcm9cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby10ZXh0XCI+XG4gICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5kb2N1bWVudC5kYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxoMz4ge3JlZm9ybWF0RGF0ZShhcnRpY2xlLmRvY3VtZW50LmRhdGEuZGF0ZSl9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcnRpY2xlLWxpbmstY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJ0aWNsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFydGljbGUtaGVybyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHthcnRpY2xlLmRvY3VtZW50LmRhdGEuaGVyb19pbWFnZX0pIGNlbnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFydGljbGUtY29udGVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZXJvLXRleHQge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nTGlzdEl0ZW07XG4iXX0= */
/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/BlogListItem.tsx */`)));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogListItem);

/***/ }),

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Card.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Card = props => __jsx("div", {
  className: "jsx-355973345" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "355973345",
  __self: undefined
}, ".card.jsx-355973345{background:#fff;border-radius:8px;box-shadow:20px 20px 60px #d9d9d9,-20px -20px 60px #fff;padding:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUd5QixnQkFDRSxrQkFDdUMsd0RBQzVDLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2lhbndpbHNvbi91aS13b3Jrc3BhY2UvaWFud2lsc29uLmlvLW5leHQvc3JjL2NvbXBvbmVudHMvQ2FyZC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufVxuXG5jb25zdCBDYXJkOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggI2Q5ZDlkOSwgLTIwcHggLTIwcHggNjBweCAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Card.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = () => {
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx("header", {
    className: "jsx-3574648659" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-3574648659",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3574648659",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Ian Wilson")), __jsx("div", {
    className: "jsx-3574648659",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3574648659" + " " + ((pathname.match(/\/blog/) ? 'active' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3574648659" + " " + ((pathname.match(/\/about/) ? 'active' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "About")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3574648659",
    __self: undefined
  }, "nav.jsx-3574648659{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}header.jsx-3574648659{font-family:'Lato',sans-serif;}a.jsx-3574648659{color:'#000';margin-right:21px;padding:8px 10px;-webkit-text-decoration:none;text-decoration:none;}a.active.jsx-3574648659{background-color:rgba(40,28,77,0.3);border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JTLEFBRzBCLEFBS2tCLEFBSWxCLEFBTzBCLGFBTnJCLGlCQUpwQixDQUttQixLQU1DLFlBTEcsTUFNdkIsb0JBakJnQyx3QkFZaEMsMkZBWEEiLCJmaWxlIjoiL1VzZXJzL2lhbndpbHNvbi91aS13b3Jrc3BhY2UvaWFud2lsc29uLmlvLW5leHQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SWFuIFdpbHNvbjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZS5tYXRjaCgvXFwvYmxvZy8pID8gJ2FjdGl2ZScgOiAnJ30+QmxvZzwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZS5tYXRjaCgvXFwvYWJvdXQvKSA/ICdhY3RpdmUnIDogJyd9PkFib3V0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMjgsIDc3LCAwLjMpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.tsx");
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Layout = props => __jsx("div", {
  className: "jsx-4013214535" + " " + "layout",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-4013214535" + " " + "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "582380142",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Lora&display=swap');html,body{color:#000;font-family:'Lora',Helvetica,sans-serif;font-size:10px;margin:0;overflow-x:hidden;}h1,h2,h3{font-family:'Lato';font-weight:700;}h1{font-size:3.4rem;}h2{font-size:3.1rem;}h3{font-size:2.8rem;}p,ol,ul,li,a,blockquote,b,em,strong{font-size:2.1rem;}a{color:#0070f3;}pre,code,code[class*='language-'],pre[class*='language-']{font-size:1.6rem;}img{width:100%;}@media (max-width:727px){p,ol,ul,li,a{font-size:1.8rem;}h1{font-size:3rem;}pre,code,code[class*='language-'],pre[class*='language-']{font-size:1.6rem;}}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYU8sQUFFOEYsQUFHeEUsQUFVUSxBQUtGLEFBR0EsQUFHQSxBQVlBLEFBSUgsQUFPRyxBQUlOLEFBU1EsQUFHRixBQU1FLEFBS0UsV0F0RXFCLEFBZ0Q1QyxHQVhBLENBdUJFLEVBN0NGLEFBR0EsQUFHQSxBQVlBLEFBV0EsQUFhRSxBQVNBLEVBeERnQixnQkFDbEIsZUE0REEsQ0F0RWlCLGVBQ04sU0FDUyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2lhbndpbHNvbi91aS13b3Jrc3BhY2UvaWFud2lsc29uLmlvLW5leHQvc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xuICBzaXRlRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHNpdGVUaXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgPEhlYWRlciAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfExvcmEmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuNHJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjFyZW07XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcCxcbiAgICAgICAgb2wsXG4gICAgICAgIHVsLFxuICAgICAgICBsaSxcbiAgICAgICAgYSxcbiAgICAgICAgYmxvY2txdW90ZSxcbiAgICAgICAgYixcbiAgICAgICAgZW0sXG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgfVxuXG4gICAgICAgIHByZSxcbiAgICAgICAgY29kZSxcbiAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxuICAgICAgICBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyN3B4KSB7XG4gICAgICAgICAgcCxcbiAgICAgICAgICBvbCxcbiAgICAgICAgICB1bCxcbiAgICAgICAgICBsaSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZSxcbiAgICAgICAgICBjb2RlLFxuICAgICAgICAgIGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSxcbiAgICAgICAgICBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGF5b3V0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dCBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgLmxheW91dCBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Layout.tsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4284651136",
  __self: undefined
}, ".layout.jsx-4013214535{max-width:680px;margin:20px auto;position:relative;padding:24px;}.layout.jsx-4013214535 a.jsx-4013214535{-webkit-text-decoration:none;text-decoration:none;color:blue;}.layout.jsx-4013214535 a.jsx-4013214535:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW53aWxzb24vdWktd29ya3NwYWNlL2lhbndpbHNvbi5pby1uZXh0L3NyYy9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZnQixBQUd5QixBQU9LLEFBS1QsWUFDZCxJQVptQixpQkFDQyxpQkFNUCxDQUxFLFVBTWYsR0FMQSIsImZpbGUiOiIvVXNlcnMvaWFud2lsc29uL3VpLXdvcmtzcGFjZS9pYW53aWxzb24uaW8tbmV4dC9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W107XG4gIHNpdGVEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgc2l0ZVRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICA8SGVhZGVyIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TG9yYSZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy40cmVtO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICBwLFxuICAgICAgICBvbCxcbiAgICAgICAgdWwsXG4gICAgICAgIGxpLFxuICAgICAgICBhLFxuICAgICAgICBibG9ja3F1b3RlLFxuICAgICAgICBiLFxuICAgICAgICBlbSxcbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJlLFxuICAgICAgICBjb2RlLFxuICAgICAgICBjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXG4gICAgICAgIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzI3cHgpIHtcbiAgICAgICAgICBwLFxuICAgICAgICAgIG9sLFxuICAgICAgICAgIHVsLFxuICAgICAgICAgIGxpLFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlLFxuICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxuICAgICAgICAgIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sYXlvdXQge1xuICAgICAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0IGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Layout.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Meta.tsx":
/*!*********************************!*\
  !*** ./src/components/Meta.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/components/Meta.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Meta({
  title,
  description
}) {
  const displayTitle = title ? `${title} | Ian Wilson` : 'Ian Wilson';
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, displayTitle), __jsx("meta", {
    name: "Description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: "Software Engineer,Rust,JavaScript,ReasonML,GraphQL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/apple-icon-57x57.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/apple-icon-60x60.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/apple-icon-72x72.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/apple-icon-76x76.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/apple-icon-114x114.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/apple-icon-120x120.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/apple-icon-144x144.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/apple-icon-152x152.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-icon-180x180.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/android-icon-192x192.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon-96x96.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileImage",
    content: "/ms-icon-144x144.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-sort */ "fast-sort");
/* harmony import */ var fast_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogList */ "./src/components/BlogList.tsx");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Meta */ "./src/components/Meta.tsx");
var _jsxFileName = "/Users/ianwilson/ui-workspace/ianwilson.io-next/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Index = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
  description: "Ian Wilson's Personal Developer Blog & Site",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "The Blog"), __jsx(_components_BlogList__WEBPACK_IMPORTED_MODULE_4__["default"], {
  articles: props.articles,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}));

Index.getInitialProps = async function () {
  const siteConfig = await __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../data/config.json */ "./src/data/config.json", 3));

  const context = __webpack_require__("./src/articles sync recursive \\.md$");

  const keys = context.keys();
  const values = keys.map(context);
  const articles = keys.map((key, index) => {
    const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
    const value = values[index];
    const document = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(value.default);
    return {
      document,
      slug
    };
  });
  fast_sort__WEBPACK_IMPORTED_MODULE_1___default()(articles).desc(a => a.document.data.date);
  return _objectSpread({
    articles
  }, siteConfig.default);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 7:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ianwilson/ui-workspace/ianwilson.io-next/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "fast-sort":
/*!****************************!*\
  !*** external "fast-sort" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-sort");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map