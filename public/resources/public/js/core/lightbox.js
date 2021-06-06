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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/core/lightbox.js":
/*!**********************************************!*\
  !*** ./resources/Public/js/core/lightbox.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.Core = Rapyd.Core || {};

(function (_self, _props) {
  Rapyd.Core.Lightbox = {
    props: {
      body: document.querySelector('body'),
      elements: null,
      activeEl: null,
      activeSrc: null
    },
    init: function init() {
      _self = this;
      _props = _self.props;
      _props.elements = document.querySelectorAll('.lightbox');

      _props.elements.forEach(function (el) {
        return _self.adjustImg(el);
      });

      _props.elements.forEach(function (el) {
        return el.addEventListener('click', _self.toggleBox);
      });
    },
    adjustImg: function adjustImg(e) {
      var img = e.querySelector('img');
      var height = Number(img.height);
      var division = height > 500 ? 2 : 4;
      var negativeMargin = height / division;
      img.style.margin = "0 0 -".concat(negativeMargin, "px 0");
    },
    toggleBox: function toggleBox(e) {
      _props.activeSrc = e.target.src;

      var div = _self.createElement("\n        <div class=\"lightbox_background\"></div>\n        <div class=\"lightbox_img_container\">\n         <button class=\"lightbox_close\">X</button>\n          <img class=\"lightbox_img\" src=\"".concat(_props.activeSrc, "\"/>\n        </div>\n      "));

      div.classList.add('lightbox_container');

      _props.body.appendChild(div);

      _props.activeEl = div;
      document.querySelector('.lightbox_close').addEventListener('click', _self.closeElement);
      document.querySelector('.lightbox_background').addEventListener('click', _self.closeElement);
    },
    createElement: function createElement(str) {
      var div = document.createElement('div');
      div.innerHTML = str;
      return div;
    },
    closeElement: function closeElement() {
      _props.activeEl.remove();

      _props.activeSrc = null;
    }
  };
})();

Rapyd.Core.Lightbox.init();

/***/ }),

/***/ 9:
/*!****************************************************!*\
  !*** multi ./resources/Public/js/core/lightbox.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/core/lightbox.js */"./resources/Public/js/core/lightbox.js");


/***/ })

/******/ });