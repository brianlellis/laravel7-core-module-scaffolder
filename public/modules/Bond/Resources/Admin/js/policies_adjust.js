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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_adjust.js":
/*!**********************************************************************!*\
  !*** ./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_adjust.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self, _props, _original, _adjust, _calc) {
  Rapyd.PolicyAdjust = {
    props: {
      debounce_delay: 500,
      original: {},
      adjust: {},
      difference: {
        premium: 0,
        system_fee: 0,
        broker_fee: 0,
        surety_fee: 0,
        delivery_fee: 0,
        surety_cost: 0,
        tax: 0,
        comm_agent: 0,
        comm_referral: 0,
        comm_agent_rate: 0,
        comm_surety_rate: 0,
        comm_referral_rate: 0,
        balance_transfer_agent: 0,
        balance_transfer_principal: 0
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props;
      _original = _self.props.original;
      _adjust = _self.props.adjust;
      _difference = _self.props.difference; // Selections

      _self.select_dropdowns(); // Date calendars init


      _self.init_calendars(); // Bind KeyUp Events


      _self.key_events('#adjusted_premium', function (ele) {
        _self.difference_eval('premium', ele);
      });

      _self.key_events('#adjusted_system_fee', function (ele) {
        _self.difference_eval('system_fee', ele);
      });

      _self.key_events('#adjusted_broker_fee', function (ele) {
        _self.difference_eval('broker_fee', ele);
      });

      _self.key_events('#adjusted_surety_fee', function (ele) {
        _self.difference_eval('surety_fee', ele);
      });

      _self.key_events('#adjusted_tax', function (ele) {
        _self.difference_eval('tax', ele);
      });

      _self.key_events('#adjusted_comm_surety_rate', function (ele) {
        _self.difference_eval('comm_surety_rate', ele, true);
      });

      _self.key_events('#adjusted_comm_agent_rate', function (ele) {
        _self.difference_eval('comm_agent_rate', ele, true);
      });

      _self.key_events('#adjusted_comm_referral_rate', function (ele) {
        _self.difference_eval('comm_referral_rate', ele, true);
      });
    },
    select_dropdowns: function select_dropdowns() {
      $('#adjust_pay_option').change(function () {
        _adjust['is_bill_agent'] = $(this).val() == 0 ? 0 : 1;
        $('input[name="is_bill_agent"]').val(_adjust['is_bill_agent']);

        _self.surety_cost();

        _self.agent_commission();

        _self.agent_principal_balance();
      });
      $('#adjust_bill_option').change(function () {
        _adjust['is_installment'] = $(this).val() == 0 ? 0 : 1;
        $('input[name="is_installment"]').val(_adjust['is_installment']);

        _self.surety_cost();

        _self.agent_commission();

        _self.agent_principal_balance();

        _self.installment_eval();
      }); // Installment Evaluation

      $('#install_months').change(function () {
        var principal_sum = _original['principal_balance'] + _adjust['balance_transfer_principal'];
        var months = parseInt($('#install_months').val()),
            pymt = parseFloat((principal_sum / months).toFixed(2));
        final = parseFloat((principal_sum - (months - 1) * pymt).toFixed(2));
        _adjust['install_months'] = months - 1;
        _adjust['install_monthly'] = pymt;
        _adjust['install_monthly_final'] = final;
        $('input[name="pay_install_months"]').val(_adjust['install_months']);
        $('input[name="pay_install_monthly"]').val(_adjust['install_monthly']);
        $('input[name="pay_install_monthly_final"]').val(_adjust['install_monthly_final']);
        $('#monthly_payment').text(pymt);
      });
    },
    key_events: function key_events(target, fn) {
      var inDebounce;
      $(target).keyup(function () {
        var _this = this;

        clearTimeout(inDebounce);
        inDebounce = setTimeout(function () {
          return fn($(_this));
        }, _props.debounce_delay);
      });
    },
    installment_eval: function installment_eval() {
      if (_adjust['is_installment'] == 1) {
        var principal_sum = _original['principal_balance'] + _adjust['balance_transfer_principal'];
        var months = parseInt($('#install_months').val()),
            pymt = parseFloat((principal_sum / months).toFixed(2));
        final = parseFloat((principal_sum - (months - 1) * pymt).toFixed(2));
        _adjust['install_months'] = months - 1;
        _adjust['install_monthly'] = pymt;
        _adjust['install_monthly_final'] = final;
        $('input[name="is_installment"]').val(1);
        $('input[name="pay_install_months"]').val(_adjust['install_months']);
        $('input[name="pay_install_monthly"]').val(_adjust['install_monthly']);
        $('input[name="pay_install_monthly_final"]').val(_adjust['install_monthly_final']);
        $('input[name="date_install_payment"]').val(_adjust['bond_install_payment_date']);
        $('#monthly_payment').text(pymt);
        $('#installment_wrapper').show();
      } else {
        _adjust['install_months'] = null;
        _adjust['install_monthly'] = null;
        _adjust['install_monthly_final'] = null;
        $('input[name="is_installment"]').val(0);
        $('input[name="pay_install_months"]').val('');
        $('input[name="pay_install_monthly"]').val('');
        $('input[name="pay_install_monthly_final"]').val('');
        $('#installment_wrapper').hide();
      }
    },
    difference_eval: function difference_eval(obj_prop, ele, percent) {
      var value = parseFloat(ele.val().replace(",", ""));

      if (percent != undefined) {
        if (ele.val().indexOf('-') > -1) {
          var diff = (_original[obj_prop] + value).toFixed(2);
        } else {
          var diff = (value - _original[obj_prop]).toFixed(2);
        }

        _difference[obj_prop] = diff;
      } else {
        if (ele.val().indexOf('-') > -1) {
          var diff = (_original[obj_prop] + value).toFixed(2);
        } else {
          var diff = (value - _original[obj_prop]).toFixed(2);
        }
      } // Assign value to adjust prop


      _adjust[obj_prop] = parseFloat(value);
      _difference[obj_prop] = parseFloat(diff);

      if (obj_prop == 'premium' || obj_prop == 'system_fee' || obj_prop == 'broker_fee' || obj_prop == 'surety_fee' || obj_prop == 'tax') {
        $('input[name="' + obj_prop + '"]').val(_difference[obj_prop]);
      }

      if (percent != undefined) {
        var str = diff < 0 ? "(".concat(Math.abs(diff), "%)") : "".concat(Math.abs(diff), "%");
      } else {
        if (diff < 0) {
          var str = "($".concat(Math.abs(diff).toFixed(2), ")");
        } else if (diff > 0) {
          var str = "$".concat(Math.abs(diff).toFixed(2));
        } else {
          var str = "$".concat(Math.abs(diff).toFixed(2));
        }
      }

      if (diff < 0) {
        $("#difference_".concat(obj_prop)).parent().addClass('negative_value').removeClass('plus_value');
      } else if (diff > 0) {
        $("#difference_".concat(obj_prop)).parent().addClass('plus_value').removeClass('negative_value');
      } else {
        $("#difference_".concat(obj_prop)).parent().removeClass('negative_value plus_value');
      }

      $("#difference_".concat(obj_prop)).text(str);

      _self.surety_cost();

      _self.agent_commission();

      _self.referral_commission();

      _self.agent_principal_balance();

      _self.installment_eval();
    },
    surety_cost: function surety_cost() {
      var surety_rate_used = _adjust['comm_surety_rate'];
      $('input[name="comm_surety_rate"]').val(surety_rate_used);
      _adjust['surety_cost'] = ((1 - surety_rate_used / 100) * $('#adjusted_premium').val().replace(",", "")).toFixed(2);

      var diff = (_adjust['surety_cost'] - _original['surety_cost']).toFixed(2);

      _difference['surety_cost'] = parseFloat(diff);
      $('input[name="surety_cost"]').val(_difference['surety_cost']);
      $('#adjusted_surety_cost').text('$' + _adjust['surety_cost']); // Value

      if (diff < 0) {
        var str = "($".concat(Math.abs(diff).toFixed(2), ")");
        $("#difference_surety_cost").parent().addClass('negative_value').removeClass('plus_value');
      } else if (diff > 0) {
        var str = "$".concat(Math.abs(diff).toFixed(2));
        $("#difference_surety_cost").parent().addClass('plus_value').removeClass('negative_value');
      } else {
        var str = "$".concat(Math.abs(diff).toFixed(2));
        $("#difference_surety_cost").parent().removeClass('negative_value plus_value');
      }

      $('#difference_surety_cost').text(str);
    },
    agent_commission: function agent_commission() {
      var agent_rate_used = _adjust['comm_agent_rate'];
      $('input[name="comm_agent_rate"]').val(agent_rate_used);
      _adjust['comm_agent'] = (agent_rate_used / 100 * $('#adjusted_premium').val().replace(",", "")).toFixed(2);

      var diff = (_adjust['comm_agent'] - _original['comm_agent']).toFixed(2);

      _difference['comm_agent'] = parseFloat(diff);
      $('input[name="comm_agent"]').val(_difference['comm_agent']);
      $('#adjusted_comm_agent').text('$' + _adjust['comm_agent']); // Value

      if (diff < 0) {
        var str = "($".concat(Math.abs(diff).toFixed(2), ")");
        $("#difference_comm_agent").parent().addClass('negative_value').removeClass('plus_value');
      } else if (diff > 0) {
        var str = "$".concat(Math.abs(diff).toFixed(2));
        $("#difference_comm_agent").parent().addClass('plus_value').removeClass('negative_value');
      } else {
        var str = "$".concat(Math.abs(diff).toFixed(2));
        $("#difference_comm_agent").parent().removeClass('negative_value plus_value');
      }

      $('#difference_comm_agent').text(str);
    },
    referral_commission: function referral_commission() {
      referral_rate_used = _adjust['comm_referral_rate'];
      $('input[name="comm_referral_rate"]').val(referral_rate_used);
      _adjust['comm_referral'] = (referral_rate_used / 100 * $('#adjusted_premium').val().replace(",", "")).toFixed(2);

      var diff = (_adjust['comm_referral'] - _original['comm_referral']).toFixed(2);

      _difference['comm_referral'] = parseFloat(diff);
      $('input[name="comm_referral"]').val(_difference['comm_referral']);
      $('#adjusted_comm_referral').text('$' + _adjust['comm_referral']); // Value

      if (diff < 0) {
        var str = "($".concat(Math.abs(diff).toFixed(2), ")");
        $("#difference_comm_referral").parent().addClass('negative_value').removeClass('plus_value');
      } else if (diff > 0) {
        var str = "$".concat(Math.abs(diff).toFixed(2));
        $("#difference_comm_referral").parent().addClass('plus_value').removeClass('negative_value');
      } else {
        var str = "$".concat(Math.abs(diff).toFixed(2));
        $("#difference_comm_referral").parent().removeClass('negative_value plus_value');
      }

      $('#difference_comm_referral').text(str);
    },
    agent_principal_balance: function agent_principal_balance() {
      if (_adjust.is_installment || !_adjust.is_bill_agent) {
        _adjust['balance_transfer_agent'] = 0; // If value 0 make sure original is also 0

        var premium = parseFloat(_difference['premium']),
            broker_fee = parseFloat(_difference['broker_fee']),
            surety_fee = parseFloat(_difference['surety_fee']),
            system_fee = parseFloat(_difference['system_fee']),
            tax = parseFloat(_difference['tax']);
        _adjust['balance_transfer_principal'] = premium + broker_fee + tax + surety_fee + system_fee;
      } else {
        // If value 0 make sure original is also 0
        var premium = _difference['premium'],
            tax = _difference['tax'],
            broker_fee = _difference['broker_fee'],
            surety_fee = _difference['surety_fee'],
            system_fee = _difference['system_fee'];
        _adjust['balance_transfer_agent'] = premium + tax + broker_fee + surety_fee + system_fee;
        _adjust['balance_transfer_principal'] = 0;
      } // Make sure install is properly removed and added for adjustment


      if (_original.prior_adjust_install && _adjust.is_installment) {
        var adjust_install = 0;
      } else if (_original.prior_adjust_install && !_adjust.is_installment) {
        var adjust_install = -50;
      } else if (!_original.prior_adjust_install && _adjust.is_installment) {
        var adjust_install = 50;
      } else {
        var adjust_install = 0;
      }

      _adjust['balance_transfer_principal'] += adjust_install;
      _adjust['balance_transfer_agent'] = parseFloat(_adjust['balance_transfer_agent'].toFixed(2));
      _adjust['balance_transfer_principal'] = parseFloat(_adjust['balance_transfer_principal'].toFixed(2));
      $('input[name="balance_transfer_agent"]').val(_adjust['balance_transfer_agent']);
      $('input[name="balance_transfer_principal"]').val(_adjust['balance_transfer_principal']); // Agent DOM

      if (_adjust['balance_transfer_agent'] < 0) {
        var str = "($".concat(Math.abs(_adjust['balance_transfer_agent']).toFixed(2), ")");
        $("#difference_agent_bal").parent().addClass('negative_value').removeClass('plus_value');
      } else if (_adjust['balance_transfer_agent'] > 0) {
        var str = "$".concat(Math.abs(_adjust['balance_transfer_agent']).toFixed(2));
        $("#difference_agent_bal").parent().addClass('plus_value').removeClass('negative_value');
      } else {
        var str = "$".concat(Math.abs(_adjust['balance_transfer_agent']).toFixed(2));
        $("#difference_agent_bal").parent().removeClass('negative_value plus_value');
      } // Principal DOM


      if (_adjust['balance_transfer_principal'] < 0) {
        var str2 = "($".concat(Math.abs(_adjust['balance_transfer_principal']).toFixed(2), ")");
        $("#difference_princ_bal").parent().addClass('negative_value').removeClass('plus_value');
      } else if (_adjust['balance_transfer_principal'] > 0) {
        var str2 = "$".concat(Math.abs(_adjust['balance_transfer_principal']).toFixed(2));
        $("#difference_princ_bal").parent().addClass('plus_value').removeClass('negative_value');
      } else {
        var str2 = "$".concat(Math.abs(_adjust['balance_transfer_principal']).toFixed(2));
        $("#difference_princ_bal").parent().removeClass('negative_value plus_value');
      }

      $('#difference_agent_bal').text(str);
      $('#difference_princ_bal').text(str2);
    }
  };
})();

/***/ }),

/***/ 24:
/*!****************************************************************************!*\
  !*** multi ./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_adjust.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/app/Rapyd/Modules/Bond/Resources/Admin/js/policies_adjust.js */"./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_adjust.js");


/***/ })

/******/ });