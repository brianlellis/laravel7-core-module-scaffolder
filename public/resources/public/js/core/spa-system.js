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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/core/spa-system.js":
/*!************************************************!*\
  !*** ./resources/Public/js/core/spa-system.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.Core = Rapyd.Core || {};

(function (_self, _props) {
  Rapyd.Core.SpaSystem = {
    props: {
      spa: {
        history: []
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props;

      if (window.location.href.indexOf('bondquote') > -1 && Rapyd.props.user.authorized) {
        _props.spa.history.push('01-welcome');
      }
    },
    spaNavigate: function spaNavigate(cb, appScope_props) {
      function navigate(event) {
        if (Object.prototype.hasOwnProperty.call(event.target.dataset, 'page') && event.target.dataset.page !== 'undefined') {
          if (cb) {
            _self.props.appScope = appScope_props; // Previous Button

            if (event.target.id === 'spa-arrow-prev') {
              cb(event); // Validate Inputs
            } else if (_self.checkInputFields()) {
              cb(event);
            } else {
              return;
            }
          } else {
            _self.spaHistory(event.target);
          }

          _self.evalPropVal(event.target);
        }
      }

      document.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode || 0;
        var active = document.querySelector('.spa-page.active');
        var nextPage = active.querySelectorAll('[data-page]');

        if (key === 13 && nextPage.length === 1) {
          nextPage[0].click();
        }
      });
      document.addEventListener('click', navigate, false);
    },
    checkInputFields: function checkInputFields() {
      // Check all inputs of active page before calling callback
      var active = document.querySelector('.spa-page.active'),
          inputs = active.querySelectorAll('input, select');
      var validate = true;

      if (inputs !== 0) {
        inputs.forEach(function (input) {
          var required = input.required,
              value = input.value; // Input Is Required

          if (required && value === '') {
            input.classList.add('error');
            input.placeholder = input.dataset.msg;
            validate = false; // Limit Amount
          } else if (input.id === 'bond_custom_limit_input') {
            var limits = Rapyd.Page.Bondquote.props.bond_info.db_info.limits;
            var customLimit = parseInt(input.value.replace(/,/g, ''));

            if (customLimit > limits.limit_max || customLimit < limits.limit_min) {
              input.classList.add('error');
              validate = false;
            } // Phone Number Length

          } else if (input.id === 'custphone-input' && input.value.length < 16) {
            input.classList.add('error');
            validate = false; // Social Security Number Length
          } else if (input.id === 'principal_ssn_input' && input.value.length < 11) {
            input.classList.add('error');
            validate = false; // Clear Errors
          } else {
            input.classList.remove('error');
          }
        });
      }

      return validate;
    },
    focusInputFields: function focusInputFields() {
      // Focus first input of active page
      var active = document.querySelector('.spa-page.active');
      var inputs = active.querySelectorAll('input, select');
      inputs.forEach(function (input, index) {
        if (index === 0) input.focus();
        if (input.id === 'bondlist-autocomplete') input.focus();
      });
    },
    evalPropVal: function evalPropVal(ele) {
      if (Object.prototype.hasOwnProperty.call(ele.dataset, 'prop')) {
        var props = ele.dataset.prop.split(';');
        props.forEach(function (prop) {
          var prop_data = prop.split('.'),
              prop_arr = [],
              prop_val;
          prop_data.forEach(function (val) {
            if (val.includes('=')) {
              val = val.split('=');
              prop_val = val[1];
              prop_arr.push(val[0]);
            } else {
              prop_arr.push(val);
            }
          });
          var prop_len = prop_arr.length;

          if (prop_len === 1) {
            _self.props.appScope[prop_arr[0]] = prop_val;
          } else if (prop_len === 2) {
            _self.props.appScope[prop_arr[0]][prop_arr[1]] = prop_val;
          } else if (prop_len === 3) {
            _self.props.appScope[prop_arr[0]][prop_arr[1]][prop_arr[2]] = prop_val;
          } else if (prop_len === 4) {
            _self.props.appScope[prop_arr[0]][prop_arr[1]][prop_arr[2]][prop_arr[3]] = prop_val;
          } else if (prop_len === 5) {
            _self.props.appScope[prop_arr[0]][prop_arr[1]][prop_arr[2]][prop_arr[3]][prop_arr[4]] = prop_val;
          } else if (prop_len === 6) {
            _self.props.appScope[prop_arr[0]][prop_arr[1]][prop_arr[2]][prop_arr[3]][prop_arr[4]][prop_arr[5]] = prop_val;
          }
        });
      }
    },
    spaHistory: function spaHistory(ele, custom_page) {
      var prev_button = document.getElementById('spa-arrow-prev');

      if (ele.id === 'spa-arrow-prev') {
        _self.changeSection(ele, ele.dataset.page, _self.props.spa.history[_self.props.spa.history.length - 1]);

        _self.props.spa.history.pop();
      } else if (Object.prototype.hasOwnProperty.call(ele.dataset, 'spanext')) {
        console.log('next button');
      } else if (Object.prototype.hasOwnProperty.call(ele.dataset, 'sparestart')) {
        console.log('restart button');
      } else {
        var page_target = custom_page || ele.dataset.page; // Prevent double binding and any wayard bugs from dupe history pushes

        if (page_target !== _self.props.spa.history[_self.props.spa.history.length - 1]) {
          _self.props.spa.history.push(page_target);

          _self.changeSection(ele, page_target);
        }
      }

      if (_self.props.spa.history.length > 1) {
        prev_button.style.display = 'block';
        prev_button.dataset.page = _self.props.spa.history[_self.props.spa.history.length - 2];
      } else {
        prev_button.style.display = 'none';
      }
    },
    changeSection: function changeSection(ele, custom_page, custom_closing_page) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
      }

      if (custom_closing_page) {
        document.getElementById('page-' + custom_closing_page).classList.add('closing');
        setTimeout(function () {
          document.getElementById('page-' + custom_page).classList.add('active');
          document.getElementById('page-' + custom_closing_page).classList.remove('closing', 'active');
        }, 200);
      } else {
        (function () {
          // Get the closest matching elements
          var page_target = custom_page || ele.dataset.page,
              target_page = document.getElementById('page-' + page_target),
              closing_page = ele;

          for (; closing_page; closing_page = closing_page.parentNode) {
            if (closing_page.matches('.spa-page')) {
              closing_page.classList.add('closing');
              setTimeout(function () {
                target_page.classList.add('active');
                closing_page.classList.remove('closing', 'active');

                _self.focusInputFields();
              }, 200);
              break;
            }
          }
        })();
      }
    },
    navStateSelectPath: function navStateSelectPath(ele, cb, cbprops) {
      if (!cb) return 'A call back is required for this method';
      if (!cbprops) return 'Target props are required for this method';

      if (ele.dataset.page === 'state_selector') {
        cbprops.user_selection.state_selected = ele.id;
        cbprops.user_selection.state_selected_full = ele.textContent.trim();
        document.getElementById('state_guess_value').innerHTML = ele.textContent.trim();
        document.getElementById('state-full').innerText = ele.textContent.trim();
        document.getElementById('state-db-term1').innerText = ele.dataset.termone;
        document.getElementById('state-db-term2').innerText = ele.dataset.termtwo;
        document.getElementById('state-db-city').innerText = ele.dataset.city;
        document.getElementById('state-db-city2').innerText = ele.dataset.city;
      } // Retrieve the page before saying
      // this was not the correct state (2) or (1) if it was the correct state


      var page_back = ele.dataset.page === 'state_confirm' ? 2 : Rapyd.props.user.state !== undefined ? 3 : 2,
          page_val = _props.spa.history[_props.spa.history.length - page_back],
          page_target = cb(page_val);

      _self.spaHistory(ele, page_target);
    }
  };
})();

Rapyd.Core.SpaSystem.init();

/***/ }),

/***/ 12:
/*!******************************************************!*\
  !*** multi ./resources/Public/js/core/spa-system.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/core/spa-system.js */"./resources/Public/js/core/spa-system.js");


/***/ })

/******/ });