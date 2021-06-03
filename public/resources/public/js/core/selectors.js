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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/core/selectors.js":
/*!***********************************************!*\
  !*** ./resources/Public/js/core/selectors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.Core = Rapyd.Core || {};

(function (_self) {
  Rapyd.Core.Selectors = {
    init: function init() {
      _self = this;
    },
    dropDown: function dropDown(target_id, cb) {
      var ele = $(target_id);
      ele.wrap('<div class="select_wrapper"></div>');
      ele.parent().prepend('<div class="selectStyle-value">' + ele.find(':selected').text() + '</div>');
      ele.css('display', 'none');
      ele.parent().append('<ul class="select_inner"></ul>'); // CREATE STATES CHILDREN

      ele.children().each(function () {
        var opttext = $(this).text(),
            optval = $(this).val(),
            pageval = $(this).data('page');
        ele.parent().children('.select_inner').append("<li data-page=\"".concat(pageval, "\" id=\"").concat(optval, "\">").concat(opttext, "</li>"));
      }); //  WHEN STATE IS SELECTED

      ele.parent().find('li').on('click', function () {
        var cur = $(this).attr('id');
        ele.parent().children('.selectStyle-value').text($(this).text());
        ele.children().removeAttr('selected');
        ele.children('[value="' + cur + '"]').attr('selected', 'selected');
        ele.parent().removeClass('openSelect');
        ele.parent().find('ul').hide();
        if (cb) cb();
      });
      ele.parent().find('.selectStyle-value').on('click', function () {
        ele.parent().find('ul').slideToggle(200);
        ele.parent().toggleClass('openSelect');
      });
    },
    autoComplete: function autoComplete(target_id) {
      var engine = new Bloodhound({
        remote: {
          url: '/api/bond_library/autocomplete',
          prepare: function prepare(query, settings) {
            var state_val = Rapyd.Page.Bondquote.props.user_selection.state_selected_full;
            settings.url += "?q=".concat($('#bondlist-autocomplete').val());
            settings.url += "&state_full=".concat(state_val);
            return settings;
          }
        },
        datumTokenizer: Bloodhound.tokenizers.whitespace('q'),
        queryTokenizer: Bloodhound.tokenizers.whitespace
      });
      $(target_id).typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      }, {
        limit: 100,
        name: 'bonds',
        source: engine.ttAdapter(),
        display: function display(data) {
          return data.description; //Input value to be set when you select a suggestion.
        },
        templates: {
          empty: ["<div>No bonds were found</div>"],
          suggestion: function suggestion(data) {
            //---- PROPERTIES
            // id
            // page_slug
            // description
            // bond_type
            // obligee_id
            // state_id
            // name **actually obligee name
            // obligee_type
            // LIMIT INFORMATION
            var bond_limit; // (IS-CUSTOM)

            if (data.limits_custom) {
              bond_limit = Rapyd.Core.Formatters.dollarFormat(data.limits.limit_min) + ' - ' + Rapyd.Core.Formatters.dollarFormat(data.limits.limit_max); // ONE LIMIT (NON-CUSTOM)
            } else {
              if (data.limits.length > 1) {
                bond_limit = Rapyd.Core.Formatters.dollarFormat(data.limits[0]) + ' - ' + Rapyd.Core.Formatters.dollarFormat(data.limits[data.limits.length - 1]);
              } else {
                bond_limit = Rapyd.Core.Formatters.dollarFormat(data.limits[0]);
              }
            }

            return "\n                  <div data-page=\"bondlist_selection\" data-bond_id=\"".concat(data.id, "\" data-prop=\"bond_info.id=").concat(data.id, "\" class=\"bond_selector_ele\">\n                    <p data-bond_id=\"").concat(data.id, "\" class=\"description\">").concat(data.description, "</p>\n                    <p data-bond_id=\"").concat(data.id, "\" class=\"limit-obligee\">\n                     <b>Obligee:</b> <span>").concat(data.obligee.name, "</span><br>\n                     <b>Limit:</b> <span>").concat(bond_limit, "</span>\n                    </p>\n                  </div>\n                ");
          }
        }
      });
    }
  };
})();

Rapyd.Core.Selectors.init();

/***/ }),

/***/ 11:
/*!*****************************************************!*\
  !*** multi ./resources/Public/js/core/selectors.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/resources/Public/js/core/selectors.js */"./resources/Public/js/core/selectors.js");


/***/ })

/******/ });