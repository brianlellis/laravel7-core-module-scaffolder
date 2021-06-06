/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/page/home.js":
/*!******************************************!*\
  !*** ./resources/Public/js/page/home.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self) {
  Rapyd.Newsapi = {
    init: function init() {
      _self = this;

      _self.dataFetch();

      _self.eventBinds(document.getElementById('bond-search-click'), _self.dataFetchSearchResults);
    },
    dataFetch: function dataFetch() {
      fetch('https://newsapi.org/v2/everything?q=+surety+insurance+bond&pageSize=15&apiKey=52475c60ea77423481d2350f83855d3f').then(function (response) {
        return response.json();
      }).then(function (data) {
        data.articles.forEach(function (article, index) {
          var temp = document.createElement('div'),
              header = document.createElement('h3'),
              source = document.createElement('p');
          temp.className = 'industry_article_wrap';
          header.innerHTML = "<a href=\"".concat(article.url, "\" target=\"_blank\">").concat(article['title'], "</a>");
          source.className = 'source';
          source.createTextNode = "Source: ".concat(article['source']['name']);
          temp.appendChild(header);
          temp.appendChild(source);
          document.getElementById('industry-articles-wrap').appendChild(temp);
        });
      });
    },
    eventBinds: function eventBinds(target, fn) {
      if (target) {
        target.addEventListener('click', fn);
      }
    },
    dataFetchSearchResults: function dataFetchSearchResults() {
      var q = document.getElementById('bond-search-input').value;
      window.location.pathname = "/bond/list/".concat(q, "/");
    }
  };
})();

/***/ }),

/***/ 18:
/*!************************************************!*\
  !*** multi ./resources/Public/js/page/home.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/page/home.js */"./resources/Public/js/page/home.js");


/***/ })

/******/ });