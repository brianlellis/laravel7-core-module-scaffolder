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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_create.js":
/*!**********************************************************************!*\
  !*** ./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(document).ready(function () {
  var limit_selectors = document.querySelectorAll('.policy_limit_select'),
      limit_checkbox = document.querySelectorAll('.policy_limit_checkbox'),
      limit_amount = document.getElementById('limit_amount');

  var _iterator = _createForOfIteratorHelper(limit_selectors),
      _step;

  try {
    var _loop = function _loop() {
      var selector = _step.value;
      selector.addEventListener("click", function () {
        // HACK: Forcing to back of call stack
        setTimeout(function () {
          var _iterator2 = _createForOfIteratorHelper(limit_checkbox),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var checkbox = _step2.value;
              checkbox.checked = false;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          selector.previousElementSibling.checked = true;
          limit_amount.value = selector.dataset.limit_amount;
        }, 0);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  $('#bond_start_date').daterangepicker({
    singleDatePicker: true
  }, function (start, end, label) {
    $('#bond_start_date').val(start.format('YYYY-MM-DD'));
  }); //--------
  // AGENT SELECT
  //--------

  if (window.policy_id) {
    window.policy_info = '&policy_id=' + window.policy_id;
  } else {
    window.policy_info = "";
  }

  if (window.bond_selected_id) {
    window.bond_info = '&bond_selected=' + window.bond_selected_id;
  } else {
    window.bond_info = "";
  }

  window.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && document.activeElement === document.getElementById('search_agent_input')) {
      e.stopPropagation();
      e.preventDefault();
    }
  });
  var old_agent_search = window.location.href.split("?");
  document.getElementById("search_agent_input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var search_val = document.getElementById("search_agent_input").value;
      Rapyd.Core.Window.props.window_leave_active = true;

      if (search_val !== "") {
        window.location.href = old_agent_search[0] + "?agent_search=" + encodeURI(search_val) + window.policy_info + window.bond_info;
      } else {
        window.location.href = old_agent_search[0] + window.policy_info + window.bond_info;
      }
    }
  });
  document.getElementById("search_agent_submit").addEventListener("click", function () {
    var search_val = document.getElementById("search_agent_input").value;
    Rapyd.Core.Window.props.window_leave_active = true;

    if (search_val !== "") {
      window.location.href = old_agent_search[0] + "?agent_search=" + encodeURI(search_val) + window.policy_info + window.bond_info;
    } else {
      window.location.href = old_agent_search[0] + window.policy_info + window.bond_info;
    }
  }); // JOB LOCATION

  var job_ele = document.getElementById('job_location_street');

  if (job_ele) {
    new AddressAutocomplete('#job_location_street', function (result) {
      document.getElementById('job_location_street').value = "".concat(result['streetNumber'], " ").concat(result['streetName']);
      document.getElementById('job_location_city').value = result['cityName'];
      document.getElementById('job_location_state').value = result['stateAbbr'];
      document.getElementById('job_location_zip').value = result['zipCode'];
    });
  } // VEHICLE/VIN INFO


  var vin_ele = document.getElementById('submit_vin_btn'); //TestVIN: JN1BY1AR4BM372590 vehicleType: Passenger, vehicleBody: Sedan
  //TestVIN: 1HTSDAAN0WH566508 vehicleType: Truck
  //TestVIN: KNDJT2A60D7758380 vehicleType: MPV
  //TestVIN: 1FUYSDYB4VP782935 vehicleType: Truck - Tractor

  if (vin_ele) {
    document.getElementById('submit_vin_btn').addEventListener("click", function () {
      var vin_num = document.getElementById('submit_vin_input').value,
          fetch_url = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/".concat(vin_num, "?format=json");
      fetch(fetch_url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var vehicle = data.Results[0];
        console.log(vehicle);
        document.getElementById('vehicle_info_year').value = vehicle["ModelYear"];
        document.getElementById('vehicle_info_make').value = vehicle["Make"];
        document.getElementById('vehicle_info_model').value = vehicle["Model"];
        var body_type = vehicleTypeSelector(vehicle["BodyClass"], vehicle["VehicleType"], vehicle["Model"]);
        console.log(body_type);
        document.getElementById('vehicle_info_body').value = body_type;
      });
    });
  } //-----
  // BUSINESS SUMMARY
  //-----


  new AddressAutocomplete('#address_business_street', function (result) {
    console.log(result);
    document.getElementById('address_business_street').value = "".concat(result['streetNumber'], " ").concat(result['streetName']);
    document.getElementById('address_business_city').value = result['cityName'];
    document.getElementById('address_business_state').value = result['stateAbbr'];
    document.getElementById('address_business_zip').value = result['zipCode'];
    document.getElementById('address_business_county').value = result['countyName'];
  });
  new AddressAutocomplete('#address_mailing_street', function (result) {
    document.getElementById('address_mailing_street').value = "".concat(result['streetNumber'], " ").concat(result['streetName']);
    document.getElementById('address_mailing_city').value = result['cityName'];
    document.getElementById('address_mailing_state').value = result['stateAbbr'];
    document.getElementById('address_mailing_zip').value = result['zipCode'];
  });
  new AddressAutocomplete('#address_delivery_street', function (result) {
    document.getElementById('address_delivery_street').value = "".concat(result['streetNumber'], " ").concat(result['streetName']);
    document.getElementById('address_delivery_city').value = result['cityName'];
    document.getElementById('address_delivery_state').value = result['stateAbbr'];
    document.getElementById('address_delivery_zip').value = result['zipCode'];
  });

  window.clear_address = function (address_type) {
    document.getElementById("address_".concat(address_type, "_street")).value = '';
    document.getElementById("address_".concat(address_type, "_city")).value = '';
    document.getElementById("address_".concat(address_type, "_state")).value = '';
    document.getElementById("address_".concat(address_type, "_zip")).value = '';
  };
});

/***/ }),

/***/ 26:
/*!****************************************************************************!*\
  !*** multi ./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_create.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/app/Rapyd/Modules/Bond/Resources/Admin/js/policies_create.js */"./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_create.js");


/***/ })

/******/ });