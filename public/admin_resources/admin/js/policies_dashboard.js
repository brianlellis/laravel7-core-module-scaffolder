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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/System/Blade/Resources/Admin/js/policies_dashboard.js":
/*!*************************************************************************!*\
  !*** ./app/Rapyd/System/Blade/Resources/Admin/js/policies_dashboard.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self, _props) {
  Rapyd.PoliciesDashboard = {
    props: {
      old_url: window.location.href.split("?")[0],
      old_filters: Rapyd.Core.Url.props.params,
      filter_payment: false,
      filter_billing: false
    },
    init: function init() {
      _self = this;
      _props = _self.props;

      _self.events();
    },
    events: function events() {
      $('#billing_option').change(function () {
        var filter_str = '?billing_option=' + $(this).val(),
            url_str = _props.old_url + filter_str;

        if ($(this).val()) {
          if (_props.old_filters && _props.old_filters.status_option) {
            url_str += '&status_option=' + _props.old_filters.status_option;
          }

          if (_props.old_filters && _props.old_filters.payment_option) {
            url_str += '&payment_option=' + _props.old_filters.payment_option;
          }

          window.location.href = url_str;
        }
      });
      $('#payment_option').change(function () {
        var filter_str = '?payment_option=' + $(this).val(),
            url_str = _props.old_url + filter_str;

        if ($(this).val()) {
          if (_props.old_filters && _props.old_filters.status_option) {
            url_str += '&status_option=' + _props.old_filters.status_option;
          }

          if (_props.old_filters && _props.old_filters.billing_option) {
            url_str += '&billing_option=' + _props.old_filters.billing_option;
          }

          window.location.href = url_str;
        }
      });
      $('#status_option').change(function () {
        var filter_str = '?status_option=' + $(this).val(),
            url_str = _props.old_url + filter_str;

        if ($(this).val()) {
          if (_props.old_filters && _props.old_filters.payment_option) {
            url_str += '&payment_option=' + _props.old_filters.payment_option;
          }

          if (_props.old_filters && _props.old_filters.billing_option) {
            url_str += '&billing_option=' + _props.old_filters.billing_option;
          }

          window.location.href = url_str;
        }
      });
    }
  };
})();

Rapyd.PoliciesDashboard.init();

/***/ }),

/***/ 31:
/*!*******************************************************************************!*\
  !*** multi ./app/Rapyd/System/Blade/Resources/Admin/js/policies_dashboard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/app/Rapyd/System/Blade/Resources/Admin/js/policies_dashboard.js */"./app/Rapyd/System/Blade/Resources/Admin/js/policies_dashboard.js");


/***/ })

/******/ });