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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/core/window.js":
/*!********************************************!*\
  !*** ./resources/Public/js/core/window.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.Core = Rapyd.Core || {};

(function (_self, _props) {
  Rapyd.Core.Window = {
    props: {
      window_leave: false,
      window_unload_active: true,
      window_reload_key_active: true,
      window_leave_active: false,
      window_event: false,
      window_event_mousetime: false,
      window_event_val: false,
      pac_container: false,
      pac_container_timeset: 15,
      pac_container_curtime: false,
      use: {
        mouseleave: true,
        reload: true,
        a_tags: true
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props;
    },
    windowLeave: function windowLeave(cb, ele, threshold, time_set, prop_settings) {
      if (prop_settings) {
        _self.prop_settings(prop_settings);
      }

      ele = ele || document;

      threshold = threshold || function () {
        return true;
      }; // a function eval to determine criteria of event


      time_set = time_set !== undefined ? time_set : 15;

      if (!_props.window_leave) {
        // ONLY INVOKE EVENT LISTENERS ONCE
        _props.window_leave = !_props.window_leave; // MOUSE LEAVE VIEWPORT

        var mouse_event_time, diff_mouse_seconds, eval_mouse_seconds; // MOUSE LEAVE FUNCTIONALITY

        if (_props.use.mouseleave) {
          ele.addEventListener("mouseleave", function (event) {
            // --- pac-container is the google maps auto complete container
            if (event.toElement && !event.toElement.classList.contains('pac-container') && !event.toElement.classList.contains('pac-item') && !event.toElement.classList.contains('pac-icon') && !event.toElement.classList.contains('pac-item-query') && !event.relatedTarget.classList.contains('pac-matched') && !event.toElement.parentElement.classList.contains('pac-container') && event.relatedTarget.id !== 'spa-arrow-prev' && threshold()) {
              // CHECK TIME LONGER THAN 15 SECONDS SINCE LAST FIRING
              mouse_event_time = new Date();
              mouse_event_time = mouse_event_time.getTime(); // Check window event time

              if (!_props.window_event_mousetime) {
                diff_mouse_seconds = true;
              } else {
                eval_mouse_seconds = (mouse_event_time - _props.window_event_mousetime) / 1000;
                diff_mouse_seconds = eval_mouse_seconds > time_set ? true : false;
              }

              _props.window_event_mousetime = mouse_event_time; // EVAL IF EVENT IS READY

              if (!_props.window_leave_active && diff_mouse_seconds) {
                _props.window_leave_active = !_props.window_leave_active;
                _props.window_event = 'mouse';
                _props.window_event_val = false;
                if (cb) cb();
              }
            }
          });
        }

        if (_props.use.a_tags) {
          document.addEventListener('click', function (event) {
            if (!_props.window_leave_active) {
              if (event.target instanceof HTMLAnchorElement) {
                _props.window_leave_active = !_props.window_leave_active;
                _props.window_event = 'link';
                _props.window_event_val = event.target.href;
              }
            }
          }, false);
        } // KEY PRESS RELOAD


        if (_props.use.reload) {
          if (_props.window_reload_key_active) {
            window.addEventListener("keydown", function (e) {
              if (!_props.window_leave_active) {
                var press = window.event ? event : e;
                var modifier = event.ctrlKey || event.metaKey;

                if (press.keyCode == 82 && modifier || // CMD/CTRL + R
                press.keyCode == 82 && press.keyCode == 16 && modifier || // CMD/CTRL + Shift + R
                press.keyCode == 84 && modifier || // CMD/CTRL + T
                press.keyCode == 87 && modifier || // CMD/CTRL + W
                press.keyCode == 116 // F5
                ) {
                    _props.window_leave_active = !_props.window_leave_active;
                    e.preventDefault();
                    e.stopPropagation();
                    window.event.returnValue = false;
                    window.status = "Refresh is disabled";
                    _props.window_event = 'key';

                    if (press.keyCode == 82 && modifier || press.keyCode == 116) {
                      _props.window_event_val = 'reload';
                    } // CTR/CMD + T
                    else if (press.keyCode == 84 && modifier) {
                        _props.window_event_val = 'newtab';
                      } // CTR/CMD + W
                      else if (press.keyCode == 87 && modifier) {
                          _props.window_event_val = 'close';
                        } else {
                          _props.window_event_val = false;
                        }

                    if (cb) cb();
                  } // CTR/CMD + T

              }
            });
          }
        } // WINDOW BEFOREUNLOAD
        // CANNOT STOP THE UNLOAD IN CHROME
        // YOU CAN STOP THE UNLOAD BY KEY BINDING WHICH IS A FUNCTION ABOVE


        if (_props.window_unload_active) {
          window.onbeforeunload = function () {
            if (!_props.window_leave_active) {
              window.event.returnValue = false;
              window.status = "Refresh is disabled";
              return false;
            }
          };

          window.addEventListener('beforeunload', function (e) {
            if (!_props.window_leave_active) {
              e.preventDefault();
              e.stopPropagation();
              window.event.returnValue = false;
              window.status = "Unload is disabled";
              if (cb) cb();
            }
          }, true);
        }
      }
    },
    windowLeaveComplete: function windowLeaveComplete() {
      if (_props.window_event == 'link') {
        window.location = _props.window_event_val;
      } else if (_props.window_event == 'key') {
        if (_props.window_event_val == 'reload') window.location.reload();else if (_props.window_event_val == 'newtab') window.open();else if (_props.window_event_val == 'newtab') window.open();
      }
    },
    prop_settings: function prop_settings(data) {
      if (data.use) {
        if (data.use.mouseleave !== 'undefined') {
          _props.use.mouseleave = data.use.mouseleave;
        }

        if (data.use.reload !== 'undefined') {
          _props.use.reload = data.use.reload;
        }

        if (data.use.a_tags !== 'undefined') {
          _props.use.a_tags = data.use.a_tags;
        }
      }
    }
  };
})();

Rapyd.Core.Window.init();

/***/ }),

/***/ 14:
/*!**************************************************!*\
  !*** multi ./resources/Public/js/core/window.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/core/window.js */"./resources/Public/js/core/window.js");


/***/ })

/******/ });