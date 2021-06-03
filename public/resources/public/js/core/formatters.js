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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/core/formatters.js":
/*!************************************************!*\
  !*** ./resources/Public/js/core/formatters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.Core = Rapyd.Core || {};

(function (_self) {
  Rapyd.Core.Formatters = {
    init: function init() {
      _self = this;
    },
    // FORMATTING ALGORITHMS
    phoneFormat: function phoneFormat(ele, event) {
      if (event && (event.which === 8 || event.which === 46)) {
        var str = ele.value.replace(/\D/g, "");
        if (str.length === 6) ele.value = '(' + str.substring(0, 3) + ') ' + str.substring(3, 7);
        if (str.length === 4) ele.value = '(' + str.substring(0, 3) + ') ';
        if (str.length === 0) ele.parentElement.classList.remove('formatted');
      } else if (ele && ele.value) {
        ele.value = ele.value.replace(/[^0-9]/g, '');
        var str = ele.value.replace(/\D/g, "");

        if (str.length > 5) {
          str = '(' + str.substring(0, 3) + ') ' + str.substring(3, 6) + ' - ' + str.substring(6, 10);
        } else if (str.length > 2) {
          str = '(' + str.substring(0, 3) + ') ' + str.substring(3, 6);
          ele.parentElement.classList.add('formatted');
        }

        ele.value = str;
      }
    },
    dollarFormat: function dollarFormat(value, keyevent) {
      if (keyevent) {
        keyevent.addEventListener("keyup", function (ele) {
          ele.target.value = ele.target.value.replace(/\D/g, "");
          return ele.target.value = ele.target.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        });
      }

      return '$' + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    selectRestriction: function selectRestriction(ele, restriction) {
      if (restriction === "alpha") {
        _self.restrictAlpha(ele); //_self.fieldValue(ele);

      } else if (restriction === "num") {
        _self.restrictNum(ele); //_self.fieldValue(ele);

      } else if (restriction === "alphanum") {
        _self.restrictAlphaNum(ele); //_self.fieldValue(ele);

      } else if (restriction === "phone") {
        _self.restrictPhone(ele); //_self.fieldValue(ele,16);

      } else if (restriction === "email") {
        _self.restrictEmail(ele); //_self.fieldValue(ele,7);

      } else if (restriction === "ssn") {
        _self.restrictSSN(ele); //_self.fieldValue(ele,13);

      } else if (restriction === "ein") {
        _self.restrictEIN(ele); //_self.fieldValue(ele,10);

      } else if (restriction === "dollar") {
        _self.dollarFormat(false, ele);
      } else {//_self.fieldValue(ele);
      }
    },
    fieldValue: function fieldValue(ele, minLength) {
      var minLength = minLength || 1;
      ele.on('blur', function () {
        if (ele.val().length < minLength && ele.not('.bypass_empty')) {
          $(this).next().show();
          console.log(ele.attr('id') + ' value is empty');
        } else {
          $(this).next().hide();
          _self.appData.fields['#ATTRIBUTES.id#']['value'] = ele.val();
        }
      });
      ele.parent().on('click', '.continue-button', function () {
        if (ele.val().length < minLength) {
          console.log(ele.attr('id') + ' value is empty');
        } else {
          _self.appData.fields['#ATTRIBUTES.id#']['value'] = ele.val();
        }
      });
    },
    // BINDING EVENTS
    restrictAlpha: function restrictAlpha(ele) {
      ele.addEventListener("keyup", function (event) {
        ele.value = ele.value.replace(/[^a-zA-Z\.\-\s]/g, '');
      });
    },
    restrictNum: function restrictNum(ele) {
      ele.addEventListener("keyup", function (event) {
        ele.value = ele.value.replace(/\D/g, '');
      });
    },
    restrictAlphaNum: function restrictAlphaNum(ele) {
      ele.addEventListener("keyup", function (event) {
        ele.value = ele.value.replace(/[^a-zA-Z0-9\-\s]/g, '');
      });
    },
    restrictPhone: function restrictPhone(ele) {
      if (!ele.dataset.binded) {
        ele.dataset.binded = true;

        _self.phoneFormat(ele);

        ele.addEventListener("keyup", function (event) {
          _self.phoneFormat(ele, event);
        });
      }
    },
    restrictEmail: function restrictEmail(ele) {
      ele.addEventListener("keyup", function (event) {
        ele.value.replace(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, '');
      });
    },
    restrictEIN: function restrictEIN(ele) {
      var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
      ele.addEventListener("keyup", function (event) {
        if (event.which === 8 || event.which === 46) {
          var str = ele.value.replace(/\s/g, "");
          if (str.length === 4) ele.value = str.substring(0, 2) + space + str.substring(2, 4);
          if (str.length === 2) ele.value = str.substring(0, 2);
        } else {
          ele.value = ele.value.replace(/[^0-9]/g, '');
          var str = ele.value.replace(/\s/g, "");
          if (str.length > 1) str = str.substring(0, 2) + space + str.substring(2, 9);
          ele.value = str;
        }
      });
    },
    restrictSSN: function restrictSSN(ele) {
      ele.addEventListener("keyup", function (event) {
        if (event.which === 8 || event.which === 46) {
          var str = ele.value.replace(/\s/g, "");
          if (str.length === 5) ele.value = str.substring(0, 3) + '-' + str.substring(3, 5);
          if (str.length === 3) ele.value = str.substring(0, 3);
          ele.value = str;
        } else {
          ele.value = ele.value.replace(/[^0-9]/g, '');
          var str = ele.value.replace(/\s/g, "");
          if (str.length > 4) str = str.substring(0, 3) + '-' + str.substring(3, 5) + '-' + str.substring(5, 9);else if (str.length > 2) str = str.substring(0, 3) + '-' + str.substring(3, 5);
          ele.value = str;
        }
      });
    },
    restrictCreditCard: function restrictCreditCard(ele) {
      ele.addEventListener('keyup', function (event) {
        var str = event.target.value.replace(/[^0-9]/g, '');
        ;

        if (str.length > 0) {
          str = str.match(new RegExp('.{1,4}', 'g')).join('-');
        }

        event.target.value = str.trim().substring(0, 19);
      });
    },
    restrictExpDate: function restrictExpDate(ele) {
      ele.addEventListener('keyup', function (event) {
        var code = event.keyCode;
        var allowedKeys = [8];

        if (allowedKeys.indexOf(code) !== -1) {
          return;
        }

        event.target.value = event.target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/') // 3 > 03/
        .replace(/^(0[1-9]|1[0-2])$/g, '$1/') // 11 > 11/
        .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2') // 141 > 01/41
        .replace(/^0\/|0+$/g, '0') // 0/ > 0 and 00 > 0
        .replace(/[^\d|^\/]*/g, '') // To allow only digits and
        .replace(/\/\//g, '/').substr(0, 5); // Prevent entering more than 1
      });
    }
  };
})();

Rapyd.Core.Formatters.init();

/***/ }),

/***/ 7:
/*!******************************************************!*\
  !*** multi ./resources/Public/js/core/formatters.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/resources/Public/js/core/formatters.js */"./resources/Public/js/core/formatters.js");


/***/ })

/******/ });