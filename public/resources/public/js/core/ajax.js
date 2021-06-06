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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/core/ajax.js":
/*!******************************************!*\
  !*** ./resources/Public/js/core/ajax.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.Core = Rapyd.Core || {};

(function (_self) {
  Rapyd.Core.Ajax = {
    init: function init() {
      _self = this;
    },
    // Loop through return data not in view form
    getJson: function getJson(fetch_url, cb) {
      fetch(fetch_url).then(function (response) {
        return response.json();
      }).then(function (data) {
        cb(data);
      });
    },
    // For use in return views via AJAX
    getText: function getText(fetch_url, cb) {
      fetch(fetch_url).then(function (response) {
        return response.text();
      }).then(function (data) {
        cb(data);
      });
    },
    // For rendering views in system
    renderViewAJAX: function renderViewAJAX(fetch_url, view_path, append_node_id, js_data_persist, cb) {
      fetch(fetch_url).then(function (response) {
        return response.json();
      }).then(function (data) {
        fetch('/api/ajaxview/gettoken').then(function (response) {
          return response.text();
        }).then(function (token_data) {
          if (js_data_persist) js_data_persist(data);

          if (Array.isArray(append_node_id)) {
            append_node_id.forEach(function (append_target, index) {
              _self.renderViewTemplate(view_path, data, append_target, token_data, cb);

              if (cb) cb = false;
            });
          } else {
            _self.renderViewTemplate(view_path, data, append_node_id, token_data, cb);
          }
        });
      });
    },
    renderViewTemplate: function renderViewTemplate(view_path, data, append_node_id, token_data, cb) {
      var form_data = new FormData();
      form_data.append('view_data', JSON.stringify(data));
      form_data.append('view_path', view_path);
      fetch("/api/ajaxview/render", {
        method: 'post',
        headers: {
          'X-CSRF-TOKEN': token_data
        },
        body: form_data
      }).then(function (response) {
        return response.text();
      }).then(function (inner_html) {
        if (append_node_id !== undefined) {
          document.getElementById(append_node_id).innerHTML = inner_html;
          if (cb) cb();
        } else {
          console.log('no DOM node defined to append to');
        }
      });
    },
    fetch_tokenizer: function fetch_tokenizer(url, body_data, fn) {
      var header_info;
      fetch("/api/ajaxview/gettoken").then(function (response) {
        return response.text();
      }).then(function (token_data) {
        if (body_data instanceof FormData) {
          header_info = {
            'X-Requested-With': 'XMLHttpRequest',
            "X-CSRF-TOKEN": token_data
          };
        } else {
          header_info = {
            'X-Requested-With': 'XMLHttpRequest',
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": token_data
          };
        }

        fetch(url, {
          method: "post",
          headers: header_info,
          body: body_data
        }).then(function (response) {
          return _self.is_payload_json(response);
        }).then(function (data) {
          if (fn) fn(data);
        });
      });
    },
    is_payload_json: function is_payload_json(response) {
      var contentType = response.headers.get("content-type");

      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
      } else {
        return response.text();
      }
    }
  };
})();

Rapyd.Core.Ajax.init();

/***/ }),

/***/ 5:
/*!************************************************!*\
  !*** multi ./resources/Public/js/core/ajax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/core/ajax.js */"./resources/Public/js/core/ajax.js");


/***/ })

/******/ });