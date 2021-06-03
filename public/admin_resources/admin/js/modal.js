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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/System/Blade/Resources/Admin/js/modal.js":
/*!************************************************************!*\
  !*** ./app/Rapyd/System/Blade/Resources/Admin/js/modal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Rapyd.Modal) {
  (function (_self) {
    Rapyd.Modal = {
      props: {
        event_esc: false
      },
      init: function init() {
        _self = this;

        _self.openRegistrationNav();

        _self.closeModal();
      },
      eventEscapeKeyDown: function eventEscapeKeyDown(element) {
        document.addEventListener("keydown", function (e) {
          if (e.key == "Escape" || e.key == "Esc" || e.keyCode == 27) {
            e.preventDefault();
            element.classList.remove("active");
          }
        });
      },
      openRegistrationNav: function openRegistrationNav() {
        _self.scrollToggle(".modal-bottom", "active", 400);

        if (!document.getElementById("modal_open_button")) {
          return;
        }

        document.getElementById("modal_open_button").addEventListener("click", function () {
          var ele = document.getElementById("top_header-login-registration-wrap"),
              ele_2 = document.getElementById("top_header-registration-form"),
              ele_3 = document.getElementById("top_header-signin-form"),
              ele_4 = document.getElementById("modal-bottom-contributor");
          ele.classList.add("active");
          ele_2.classList.add("active");
          ele_3.classList.remove("active");
          ele_4.classList.remove("active");
          ele_4.classList.add("closing");
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        });
      },
      openModal: function openModal(toggle, element) {
        document.querySelector(toggle).addEventListener("click", function () {
          var ele = document.querySelector(element);
          ele.classList.remove("closing");
          ele.classList.add("active");
        });
      },
      closeModal: function closeModal(target) {
        if (target) {
          return document.querySelector(target).classList.remove("active");
        } // Check If User Is Signed In


        if (!document.getElementById("modal-bottom-contributor-close")) {
          return;
        }

        var ele_close = document.getElementById("modal-bottom-contributor-close"),
            ele_window = document.getElementById("modal-bottom-contributor");
        if (!_self.props.event_esc) _self.eventEscapeKeyDown(ele_window);
        ele_close.addEventListener("click", function () {
          ele_window.classList.add("closing");
          ele_window.classList.remove("active");
        });
      },
      fadeIn: function fadeIn(target, time) {
        var ele = document.querySelector(target);
        setTimeout(function () {
          return ele.classList.add("active");
        }, time);
      },
      scrollToggle: function scrollToggle(target, applyClass, scrollY) {
        _self = this;
        window.addEventListener("scroll", function () {
          var element = document.querySelector(target);
          var pageHeight = document.documentElement.offsetHeight;
          var windowHeight = window.innerHeight;
          var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
          var atBottom = pageHeight <= windowHeight + scrollPosition;
          if (!element || element.classList.contains("closing")) return; // If element is bottom modal get footer height

          var footerHeight = document.getElementById("site-footer").offsetHeight;

          if (!atBottom && scrollPosition > scrollY) {
            element.classList.add(applyClass);
            element.style.bottom = 0;
          } else if (atBottom) {
            element.style.bottom = footerHeight + "px";
          }
        });
      }
    };
  })();

  Rapyd.Modal.init();
}

/***/ }),

/***/ 25:
/*!******************************************************************!*\
  !*** multi ./app/Rapyd/System/Blade/Resources/Admin/js/modal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/app/Rapyd/System/Blade/Resources/Admin/js/modal.js */"./app/Rapyd/System/Blade/Resources/Admin/js/modal.js");


/***/ })

/******/ });