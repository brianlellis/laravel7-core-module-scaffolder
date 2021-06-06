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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/Modules/User/Resources/Admin/js/usergroup-completion.js":
/*!***************************************************************************!*\
  !*** ./app/Rapyd/Modules/User/Resources/Admin/js/usergroup-completion.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self, _props) {
  Rapyd.Core.UsergroupCompletion = {
    props: {},
    init: function init() {
      _self = this;
      _props = _self.props;
      document.querySelectorAll(".usergroup_form").forEach(function (form) {
        return form.addEventListener("submit", _self.spaNavigate);
      });
      document.querySelector('#spa-arrow-prev').addEventListener('click', _self.spaNavigate);
      document.querySelector('#tax_id_type').addEventListener('change', _self.formatTxId);
    },
    formatTxId: function formatTxId(event) {
      var type = event.target.value;
      var tax_id = document.getElementById("tax_id");
      tax_id.disabled = false;

      if (type === 'SSN') {
        Rapyd.Core.Formatters.restrictSSN(tax_id);
      } else if (type === 'EIN') {
        Rapyd.Core.Formatters.restrictEIN(tax_id, '-');
      }
    },
    spaNavigate: function spaNavigate(event) {
      event.preventDefault();
      var next = event.target.dataset.page;
      var inputs = event.target.querySelectorAll("input");
      var selects = event.target.querySelectorAll("select");
      inputs.forEach(function (input) {
        if (input.value) {
          _props[input.name] = input.value;
        }
      });
      selects.forEach(function (input) {
        if (input.value) {
          _props[input.name] = input.value;
        }
      });

      if (next === 'step-3') {
        var tax_id = document.getElementById('tax_id');
        var value = tax_id.value.replace(/\D/g, '').trim();

        if (value.length !== 9) {
          tax_id.classList.add('form-control-warning');
        } else {
          tax_id.classList.remove('form-control-warning');
          Rapyd.Core.SpaSystem.spaHistory(event.target);
        }
      } else if (next === "complete") {
        _self.submitUserGroup(event.target);
      } else {
        Rapyd.Core.SpaSystem.spaHistory(event.target);
      }
    },
    submitUserGroup: function submitUserGroup(target) {
      _props.phone_main = _props.phone_main.replace(/\D/g, "");
      _props.tax_id = _props.tax_id.replace(/\D/g, "");
      target.dataset.page = 'step-5';
      fetch("/api/ajaxview/gettoken").then(function (response) {
        return response.text();
      }).then(function (token_data) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-CSRF-TOKEN", token_data);
        var raw = JSON.stringify(_props);
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        fetch("/api/usergroup/complete", requestOptions).then(function (res) {
          return res.json();
        }).then(function (data) {
          return window.location = data.redirect;
        });
      });
    }
  };
})();

Rapyd.Core.UsergroupCompletion.init();

/***/ }),

/***/ 39:
/*!*********************************************************************************!*\
  !*** multi ./app/Rapyd/Modules/User/Resources/Admin/js/usergroup-completion.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/app/Rapyd/Modules/User/Resources/Admin/js/usergroup-completion.js */"./app/Rapyd/Modules/User/Resources/Admin/js/usergroup-completion.js");


/***/ })

/******/ });