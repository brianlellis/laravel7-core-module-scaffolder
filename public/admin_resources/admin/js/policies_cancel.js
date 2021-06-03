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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/System/Blade/Resources/Admin/js/policies_cancel.js":
/*!**********************************************************************!*\
  !*** ./app/Rapyd/System/Blade/Resources/Admin/js/policies_cancel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * There's a lot of php data passing occurring so the props
 * and class initiation occurs in the blade for this purpose 
**/
(function (_self, _props, _original, _cancel, _calc) {
  Rapyd.PolicyCancel = {
    props: {
      debounce_delay: 0,
      // If debounce used then tabbing before delay will break fn
      original: {// agent_balance:              {{$agent_balance_summary}},
        // principal_balance:          {{$principal_balance_summary}},
        // premium:                    {{$premium_sum}},
        // excess_collected:           @if($is_bill_agent) 
        //                               {{$invoice->excess_collected ?? 0}} 
        //                             @else 0 @endif,
        // system_fee:                 {{$system_fee}},
        // broker_fee:                 {{$broker_fee}},
        // surety_fee:                 {{$surety_fee}},
        // installment_fee:            {{$install_fee}},
        // delivery_fee:               {{$invoice_delivery_fee ?? 0}},
        // surety_cost:                {{$surety_cost_sum}},
        // tax:                        {{$tax_sum}},
        // comm_agent:                 {{$commission_agent_sum ?? 0}},
        // comm_referral:              {{$commission_referral_sum ?? 0}},
        // is_bill_agent:              {{$is_bill_agent}},
        // is_installment:             {{$is_installment}},
        // comm_agent_rate:            {{($agent_comm_rate / 100)}},
        // comm_surety_rate:           {{($surety_comm_rate / 100)}},
        // comm_referral_rate:         {{($referral_comm_rate / 100)}},
      },
      cancel: {// date_cancelled:               '{{$js_format}}',
        // premium:                      0,
        // fee:                          0,
        // fee_system:          0,
        // fee_broker:          0,
        // fee_surety:          0,
        // fee_delivery:        0,
        // policy_cost:         0,
        // tax:                 0,
        // comm_agent:          0,
        // comm_referral:       0,
        // balance_transfer_principal:   0,
        // balance_transfer_agent:       0,
        // type:                         'flat',
        // days_earned:                  {{$days_earn_calc}},
        // days_in_term:                 {{$days_in_term}},
        // effective:                    "{{$date_effective_used}}",
        // expiration:                   "{{$quote_selected->date_expiration}}",
        // custom_transfer_agent:        0,
        // princ_subtotal:               0,
        // agent_subtotal:               0
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props;
      _original = _self.props.original;
      _cancel = _self.props.cancel;

      _self.init_calendars();

      _self.dom_injection();

      $('#cancellation_type').change(function () {
        _cancel.type = $(this).val();

        _self.dom_injection();

        _self.reset_transfer();
      });

      _self.key_events('.fee_input', function (ele) {
        var ele_value = ele.val().replace(/[^0-9\.\-]/g, '');
        if (ele_value == '') ele.val(0);else ele.val(ele_value);

        _self.eval_cancellation();
      });

      _self.key_events('#balance_transfer_agent', function (ele) {
        var ele_value = ele.val().replace(/[^0-9\.\-]/g, '');
        ele.val(ele_value);

        _self.dom_balance_transfer(parseFloat(ele_value));
      });

      $('#reset_transfer').click(function () {
        return _self.reset_transfer();
      });
    },
    init_calendars: function init_calendars() {
      $('#bond_notice_date').daterangepicker({
        singleDatePicker: true,
        minDate: new Date()
      }, function (start, end, label) {});
      $('#bond_cancel_date').daterangepicker({
        singleDatePicker: true,
        minDate: new Date()
      }, function (start, end, label) {
        _self.midterm_date(start);

        _cancel.date_cancelled = start.format('YYYY-MM-DD');

        _self.dom_injection();

        _self.reset_transfer();
      }).val(window.initial_cancel_date);
    },
    key_events: function key_events(target, fn) {
      // Don't register for tab or shift+tab key
      var inDebounce;
      $(target).keyup(function (event) {
        var _this = this;

        if (event.which !== 9 && event.which !== 16) {
          clearTimeout(inDebounce);
          inDebounce = setTimeout(function () {
            return fn($(_this));
          }, _props.debounce_delay);
        }
      });
    },
    dom_injection: function dom_injection() {
      var disable_val = _cancel.type == 'flat' ? true : false; // ONLY PREMIUM AND TAX

      if (_cancel.type == 'flat') {
        _cancel.premium = -_original.premium;
        _cancel.tax = _original.tax;
      } else if (_cancel.type == 'midterm') {
        var eval_days = _cancel.days_earned / _cancel.days_in_term,
            eval_prem = _original.premium * eval_days; // Create negatives to make agent_principal_balance math easier

        _cancel.premium = -(_original.premium - eval_prem);
        _cancel.premium = Math.round(_cancel.premium); // Tax

        var eval_tax = _original.tax * eval_days;
        _cancel.tax = _original.tax - eval_tax;
      }

      $('#cancel_premium').val(_cancel.premium.toFixed(2));
      $('#cancel_tax').val(_cancel.tax.toFixed(2));
      $('#cancel_system_fee').val(_original.system_fee.toFixed(2));
      $('#cancel_broker_fee').val(_original.broker_fee.toFixed(2));
      $('#cancel_surety_fee').val(_original.surety_fee.toFixed(2));
      $('#cancel_delivery_fee').val(_original.delivery_fee.toFixed(2));
      $('#cancel_installment_fee').val(_original.installment_fee.toFixed(2));
      $('#cancel_premium').prop('disabled', disable_val);
      $('#cancel_system_fee').prop('disabled', disable_val);
      $('#cancel_broker_fee').prop('disabled', disable_val);
      $('#cancel_surety_fee').prop('disabled', disable_val);
      $('#cancel_tax').prop('disabled', disable_val);
      $('#cancel_delivery_fee').prop('disabled', disable_val);
      $('#balance_transfer_agent').val(0);
      _cancel.custom_transfer_agent = 0;

      _self.eval_cancellation();
    },
    eval_cancellation: function eval_cancellation() {
      _cancel.fee = parseFloat($('#cancel_fee').val()); // DOM Value

      _cancel.fee_broker = parseFloat($('#cancel_broker_fee').val());
      _cancel.fee_system = parseFloat($('#cancel_system_fee').val());
      _cancel.fee_surety = parseFloat($('#cancel_surety_fee').val());
      _cancel.fee_delivery = parseFloat($('#cancel_delivery_fee').val());
      _cancel.fee_install = parseFloat($('#cancel_installment_fee').val());
      _cancel.tax = parseFloat($('#cancel_tax').val());
      _cancel.premium = parseFloat($('#cancel_premium').val()); // COMMISSIONS

      if (_cancel.type == 'flat') {
        _cancel.comm_agent = _original.comm_agent;
        _cancel.policy_cost = _original.surety_cost;
        _cancel.comm_referral = _original.comm_referral;
      } else if (_cancel.type == 'midterm') {
        var eval_days = _cancel.days_earned / _cancel.days_in_term; // Agent

        _cancel.comm_agent = _cancel.premium * _original.comm_agent_rate; // Surety Cost
        // based on PolicyAccounting::eval_policy_cost() [php]

        var surety_comm_eval = 1 - _original.comm_surety_rate;
        _cancel.policy_cost = _cancel.premium * surety_comm_eval; // Referral

        _cancel.comm_referral = _cancel.premium * _original.comm_referral_rate;
      }

      $('#cancel_comm_agent').text(_cancel.comm_agent.toFixed(2));
      $('#cancel_surety_cost').text(_cancel.policy_cost.toFixed(2));
      $('#cancel_comm_referral').text(_cancel.comm_referral.toFixed(2));

      _self.agent_principal_balance();
    },
    midterm_date: function midterm_date(end) {
      var effective_arr = window.date_effective_format.split('/'),
          start = moment(effective_arr[2] + '-' + effective_arr[0] + '-' + effective_arr[1]);
      _cancel.days_earned = end.diff(start, 'days');
      _cancel.date_cancelled = start.format('YYYY-MM-DD');
      $('#bond_days_earned').val(_cancel.days_earned);

      _self.eval_cancellation(false, false);
    },
    agent_principal_balance: function agent_principal_balance() {
      // BILL AGENT + PAY IN FULL
      if (_original.is_bill_agent && !_original.is_installment) {
        var agent_subtotal = _cancel.fee_surety + _cancel.fee_system + _cancel.tax + _cancel.premium + _cancel.fee_broker; // As broker fee is always recorded on the books it has to be be added
        // to the subtotal passed for the db persistence.
        // Otherwise the broker fee will not null itself on the accounting
        // algorithm for agent balance [php]

        var agent_bal = agent_subtotal + _original.agent_balance - _cancel.comm_agent - _cancel.fee_broker;
        _cancel.balance_transfer_agent = agent_bal;
        _cancel.agent_subtotal = agent_subtotal;
        _cancel.balance_transfer_principal = 0;
        _cancel.princ_subtotal = 0;
      } else {
        _cancel.balance_transfer_agent = _original.agent_balance - _cancel.comm_agent - _cancel.fee_broker;
        _cancel.agent_subtotal = 0; // PRINCIPAL

        _cancel.princ_subtotal = _cancel.fee + _cancel.fee_surety + _cancel.premium + _cancel.tax + _cancel.fee_system + _cancel.fee_broker + _cancel.fee_install;
        _cancel.balance_transfer_principal = _original.principal_balance + _cancel.princ_subtotal;
      }

      $('#new_summ_agent_bal').text('$' + _cancel.balance_transfer_agent.toFixed(2));
      $('#new_summ_principal_bal').text('$' + _cancel.balance_transfer_principal.toFixed(2));

      _self.prep_persistence();
    },
    dom_balance_transfer: function dom_balance_transfer(value) {
      var inverse = -value,
          agent_bal = _cancel.balance_transfer_agent + value;
      princ_bal = _cancel.balance_transfer_principal + inverse;
      _cancel.custom_transfer_agent = value;
      $('#new_summ_principal_bal').text('$' + princ_bal.toFixed(2));
      $('#new_summ_agent_bal').text('$' + agent_bal.toFixed(2));

      _self.prep_persistence();
    },
    reset_transfer: function reset_transfer() {
      $('#new_summ_principal_bal').text('$' + _cancel.balance_transfer_principal.toFixed(2));
      $('#new_summ_agent_bal').text('$' + _cancel.balance_transfer_agent.toFixed(2));
      $('input[name="custom_transfer_agent"]').val(0);
      _cancel.custom_transfer_agent = 0;
    },
    prep_persistence: function prep_persistence() {
      $('input[name="user_id"]').val(_original.user_id);
      $('input[name="policy_id"]').val(_original.policy_id);
      $('input[name="date_cancelled"]').val(_cancel.date_cancelled);
      $('input[name="fee"]').val(_cancel.fee);
      $('input[name="premium"]').val(_cancel.premium);
      $('input[name="fee_system"]').val(_cancel.fee_system);
      $('input[name="fee_broker"]').val(_cancel.fee_broker);
      $('input[name="fee_surety"]').val(_cancel.fee_surety);
      $('input[name="fee_install"]').val(_cancel.fee_install);
      $('input[name="fee_delivery"]').val(0); // Always zero for now

      $('input[name="policy_cost"]').val(_cancel.policy_cost);
      $('input[name="tax"]').val(_cancel.tax);
      $('input[name="comm_agent"]').val(_cancel.comm_agent);
      $('input[name="comm_referral"]').val(_cancel.comm_referral);
      $('input[name="balance_transfer_agent"]').val(_cancel.balance_transfer_agent);
      $('input[name="balance_transfer_principal"]').val(_cancel.balance_transfer_principal);
      $('input[name="custom_transfer_agent"]').val(_cancel.custom_transfer_agent);
      $('input[name="princ_subtotal"]').val(_cancel.princ_subtotal);
      $('input[name="agent_subtotal"]').val(_cancel.agent_subtotal);
      $('input[name="type"]').val(_cancel.type);
    }
  };
})();

/***/ }),

/***/ 29:
/*!****************************************************************************!*\
  !*** multi ./app/Rapyd/System/Blade/Resources/Admin/js/policies_cancel.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/app/Rapyd/System/Blade/Resources/Admin/js/policies_cancel.js */"./app/Rapyd/System/Blade/Resources/Admin/js/policies_cancel.js");


/***/ })

/******/ });