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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit.js":
/*!*******************************************************************!*\
  !*** ./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(document).ready(function () {
  Rapyd.Core.Window.windowLeave(function () {
    Rapyd.Core.Window.props.window_leave_active = false; // Open Modal If Leaving

    $('#exitModal').modal('show'); // If Saved Trigger Form

    $('.save_policy').click(function () {
      Rapyd.Core.Window.props.window_leave_active = true;
      $('.update_policy').trigger("click");
    }); // Edit and remove to stop re-render

    $('#exitModal').on('hidden.bs.modal', function (e) {
      $('#exitModal').remove();
      $('.modal-backdrop').remove();
    });
  }, document.getElementsByClassName('app-content')[0], window.session_success, 0, function () {
    Rapyd.Core.Window.props.window_unload_active = false;
    Rapyd.Core.Window.props.window_reload_key_active = false;
  }); // IF TAB PARAM PRESENT THEN SELECT THAT TAB

  $('.tab_list li').each(function (idx, ele) {
    if (ele.dataset.tab === Rapyd.Core.Url.props.params.tab) {
      ele.click();
    }
  });
  $('#send_manual_email').click(function () {
    $('#send_manual_email_modal').addClass('active');
  });
  $('#send_manual_email_close').click(function () {
    $('#send_manual_email_modal').removeClass('active');
  });
  $('#send_manual_email_button').click(function () {
    // Prepare data
    var data = {
      user_name: $('#modal_user_name').val(),
      user_email: $('#modal_user_email').val(),
      email_subject: $('#modal_email_subject').val(),
      email_message: $('#modal_email_message').val().replace(/\n/g, "<br />"),
      policy_id: window.policy_id
    };
    fetch('/api/email/manual-send', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": "{{ csrf_token() }}"
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      return res.json();
    }).then(function () {
      $('#send_manual_email_modal').removeClass('active');
      $('#modal_user_name, #modal_user_email, #modal_email_subject, #modal_email_message').val('');
    });
  });
}); // FUNCTION THAT SETS URL TO REVIEW ON PAGE RELOAD
// BINDED VIA DOM

function set_active_tab(e) {
  history.replaceState(null, null, "?policy_id=".concat(Rapyd.Core.Url.props.params.policy_id, "&tab=").concat(e.dataset.tab));
} // BIND ALL FORMATTING EVENTS


var phone_ele = document.querySelector('input[name="business_phone"]');
if (phone_ele) Rapyd.Core.Formatters.restrictPhone(phone_ele); // JOB LOCATION

var job_ele = $('##job_location_street');

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
  var vehicleTypeSelector = function vehicleTypeSelector(vehicle_body, vehicle_type, vehicle_model) {
    var arr = [vehicle_body, vehicle_type, vehicle_model];

    for (var idx = 0; idx < arr.length; idx++) {
      var val = arr[idx].toLowerCase();

      if (val.indexOf("multi") !== -1) {
        return "Multi-Purpose Vehicle";
      } else if (val.indexOf("sedan") !== -1 || val.indexOf("passenger") !== -1) {
        return "4 Door";
      } else if (val.indexOf("coupe") !== -1) {
        return "Coupe";
      } else if (val.indexOf("ambulance") !== -1) {
        return "Ambulance";
      } else if (val.indexOf("convertible") !== -1) {
        return "Convertible";
      } else if (val.indexOf("golf") !== -1) {
        return "Golf Cart";
      } else if (val.indexOf("hearse") !== -1) {
        return "Hearse";
      } else if (val.indexOf("limousine") !== -1) {
        return "Limousine";
      } else if (val.indexOf("low speed") !== -1) {
        return "Low Speed";
      } else if (val.indexOf("motorcycle") !== -1) {
        return "Motorcycle";
      } else if (val.indexOf("moped") !== -1) {
        return "Moped";
      } else if (val.indexOf("roadster") !== -1) {
        return "Roadster";
      } else if (val.indexOf("station") !== -1) {
        return "Station Wagon";
      } else if (val.indexOf("tractor") !== -1) {
        return "Truck Tractor";
      } else if (val.indexOf("truck") !== -1) {
        return "Truck";
      } else if (val.indexOf("minivan") !== -1) {
        return "Van";
      } else if (vehicle_model.toLowerCase().indexOf("wrangler") !== -1) {
        return "Jeep";
      }
    }
  };

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
} //--------
// AGENT SELECT
//--------


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
      if (window.policy_id) {
        var _policy_info = '&policy_id=' + window.policy_id;
      } else {
        var _policy_info2 = "";
      }

      if (window.bond_selected_id) {
        var _bond_info = '&bond_selected=' + window.bond_selected_id;
      } else {
        var _bond_info2 = "";
      }

      window.location.href = old_agent_search[0] + "?agent_search=" + encodeURI(search_val) + policy_info + bond_info;
    } else {
      window.location.href = old_agent_search[0] + policy_info + bond_info;
    }
  }
});
document.getElementById("search_agent_submit").addEventListener("click", function () {
  var search_val = document.getElementById("search_agent_input").value;
  Rapyd.Core.Window.props.window_leave_active = true;

  if (search_val !== "") {
    if (window.policy_id) {
      var _policy_info3 = '&policy_id=' + window.policy_id;
    } else {
      var _policy_info4 = "";
    }

    if (window.bond_selected_id) {
      var _bond_info3 = '&bond_selected=' + window.bond_selected_id;
    } else {
      var _bond_info4 = "";
    }

    window.location.href = old_agent_search[0] + "?agent_search=" + encodeURI(search_val) + policy_info + bond_info;
  } else {
    window.location.href = old_agent_search[0] + policy_info + bond_info;
  }
}); //------
// BANK ACCOUNT
//------

function get_bank_name() {
  var routing_num = document.getElementById("routing_number").value;
  fetch('https://www.routingnumbers.info/api/data.json?rn=' + routing_num).then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById("bank_name").value = data.customer_name;
  });
}

function calculate_manual_payment(ele) {
  if (Rapyd.manual_payment_val === undefined) Rapyd.manual_payment_val = 0;

  if (ele.checked) {
    Rapyd.manual_payment_val += parseFloat(ele.dataset.amount);
  } else {
    Rapyd.manual_payment_val -= parseFloat(ele.dataset.amount);
  }

  document.getElementById('manual_amount_val').value = Rapyd.manual_payment_val;
} //-----
// BUSINESS SUMMARY
//-----


new AddressAutocomplete('#address_business_street', function (result) {
  document.getElementById('address_business_street').value = "".concat(result['streetNumber'], " ").concat(result['streetName']);
  document.getElementById('address_business_city').value = result['cityName'];
  document.getElementById('address_business_state').value = result['stateAbbr'];
  document.getElementById('address_business_zip').value = result['zipCode'];
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

function clear_address(address_type) {
  document.getElementById("address_".concat(address_type, "_street")).value = '';
  document.getElementById("address_".concat(address_type, "_city")).value = '';
  document.getElementById("address_".concat(address_type, "_state")).value = '';
  document.getElementById("address_".concat(address_type, "_zip")).value = '';
} //-------
// POLICY LIMIT
//-------


var limit_selectors = document.querySelectorAll('.policy_limit_select'),
    limit_checkbox = document.querySelectorAll('.policy_limit_checkbox'),
    limit_amount = document.getElementById('limit_amount'),
    limit_id = document.getElementById('limit_id');

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
        limit_id.value = selector.dataset.limit_id;
      }, 0);
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } //------
  // DATE PICKER
  //------

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

$('#bond_start_date').daterangepicker({
  singleDatePicker: true
}, function (start, end, label) {
  $('#bond_start_date').val(start.format('YYYY-MM-DD'));
}); //------
// CREDIT CARD
//------
// Format Credit Card

var input_credit_card = document.getElementById('billing_card_number');
Rapyd.Core.Formatters.restrictCreditCard(input_credit_card); // Format Epiration Date

var input_exp_date = document.getElementById('billing_exp');
Rapyd.Core.Formatters.restrictExpDate(input_exp_date);

function copy_principal_to_card(principal_idx) {
  document.getElementById("billing_user_id").value = document.getElementById("principal_".concat(principal_idx, "_id")).value;
  document.getElementById("billing_profile_id").value = document.getElementById("principal_".concat(principal_idx, "_billing_profile_id")).value;
  document.getElementById("billing_name_first").value = document.getElementById("principal_".concat(principal_idx, "_name_first")).value;
  document.getElementById("billing_name_last").value = document.getElementById("principal_".concat(principal_idx, "_name_last")).value;
  document.getElementById("billing_address").value = document.getElementById("principal_".concat(principal_idx, "_address_street")).value;
  document.getElementById("billing_city").value = document.getElementById("principal_".concat(principal_idx, "_address_city")).value;
  document.getElementById("billing_state").value = document.getElementById("principal_".concat(principal_idx, "_address_state")).value;
  document.getElementById("billing_zip").value = document.getElementById("principal_".concat(principal_idx, "_address_zip")).value;
}

/***/ }),

/***/ 27:
/*!*************************************************************************!*\
  !*** multi ./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/app/Rapyd/System/Blade/Resources/Admin/js/polices_edit.js */"./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit.js");


/***/ })

/******/ });