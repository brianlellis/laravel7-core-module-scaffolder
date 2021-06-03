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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit_pricing.js":
/*!***************************************************************************!*\
  !*** ./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit_pricing.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self, _props) {
  Rapyd.PolicyPricing.TabPricing = {
    props: {
      policy: {
        date_effective: null,
        id: null,
        bond_library_id: null,
        limit: null
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props;

      _self.installment_change();

      if (window.quote_selected_present) {
        _self.payment_plan_select();

        _self.delivery_option_select();
      }
    },
    add_payment_tab: function add_payment_tab() {
      $("li[data-tab='payments']").click();
      $("#billing_name_first").focus();
    },
    override_expiration_date: function override_expiration_date() {
      $('input[name="quote_manual_expiration"]').prop('disabled', function (i, v) {
        return !v;
      });
    },
    copy_quote: function copy_quote(quote) {
      var installment_fee = Number(quote.pay_install_down) > 0 ? 1 : 0;
      $('select[name="quote_manual_carrier"]').val(quote.surety_code);
      $('select[name="quote_manual_term_years"]').val(quote.term_years);
      $('select[name="quote_manual_term_months"]').val(quote.term_months);
      $('select[name="quote_manual_allow_installment"]').val(installment_fee);
      $('input[name="quote_manual_premium"]').val(quote.pay_full_total);
      $('input[name="quote_manual_pay_in_full"]').val(quote.pay_full_total);
      $('input[name="quote_manual_expiration"]').val(quote.date_expiration); // Commission Rates

      $('input[name="quote_manual_surety_rate').val(quote.surety_comm_rate);
      $('input[name="quote_manual_comm_rate').val(quote.agent_comm_rate);
      $('input[name="quote_manual_referral_rate').val(quote.referral_comm_rate);

      if (installment_fee) {
        $('input[name="quote_manual_installment_down"]').val(quote.pay_install_down);
        $('select[name="quote_manual_installment_payments"]').val(quote.pay_install_months + 1);
        $('input[name="quote_manual_installment_amount"]').val(quote.pay_install_monthly);
      }
    },
    installment_change: function installment_change() {
      $('select[name="quote_manual_installment_payments"], input[name="quote_manual_installment_down"]').change(function () {
        var premium = parseFloat($('input[name="quote_manual_pay_in_full"]').val().replace(',', '')) + 50,
            down = parseFloat($('input[name="quote_manual_installment_down').val().replace(',', '')),
            sum = premium - down;
        var months = parseInt($('select[name="quote_manual_installment_payments').val()),
            pymt = parseFloat((sum / months).toFixed(2));
        $('input[name="quote_manual_installment_down').val(down);
        $('input[name="quote_manual_installment_amount').val(pymt);
      });
    },
    calc_manual: function calc_manual() {
      var form_data = new FormData();
      fetch("/api/ajaxview/gettoken").then(function (response) {
        return response.text();
      }).then(function (token_data) {
        form_data.append('only_calculate', true);
        form_data.append('quote_manual_effective', _props.policy.date_effective);
        form_data.append('quote_manual_policy_id', _props.policy.id);
        form_data.append('quote_manual_bond_library_id', _props.policy.bond_library_id);
        form_data.append('quote_manual_quote_limit', _props.policy.limit);
        form_data.append('quote_manual_carrier', $('select[name="quote_manual_carrier"]').val());
        form_data.append('quote_manual_term_years', $('select[name="quote_manual_term_years"]').val());
        form_data.append('quote_manual_term_months', $('select[name="quote_manual_term_months"]').val());
        form_data.append('quote_manual_allow_installment', $('select[name="quote_manual_allow_installment"]').val());
        form_data.append('quote_manual_premium', $('input[name="quote_manual_premium"]').val());
        form_data.append('quote_manual_expiration', $('input[name="quote_manual_expiration"]').val()); // Fees

        form_data.append('quote_manual_broker_fee', $('input[name="quote_manual_broker_fee"]').val());
        form_data.append('quote_manual_surety_fee', $('input[name="quote_manual_surety_fee"]').val());
        form_data.append('quote_manual_system_fee', $('input[name="quote_manual_system_fee"]').val()); // Commission Rates

        form_data.append('quote_manual_surety_rate', $('input[name="quote_manual_surety_rate').val());
        form_data.append('quote_manual_comm_rate', $('input[name="quote_manual_comm_rate').val());
        form_data.append('quote_manual_referral_rate', $('input[name="quote_manual_referral_rate').val());
        fetch("/api/bondPolicy/getManualQuote", {
          method: "post",
          headers: {
            "X-CSRF-TOKEN": token_data
          },
          body: form_data
        }).then(function (response) {
          return response.json();
        }).then(function (calc_data) {
          $('input[name="quote_manual_pay_in_full').val(calc_data.pay_full_total);
          $('input[name="quote_manual_allow_installment').val(calc_data.pay_install_available);
          $('input[name="quote_manual_installment_down').val(calc_data.pay_install_down);
          $('select[name="quote_manual_installment_payments').val(calc_data.pay_install_months + 1);
          $('input[name="quote_manual_installment_amount').val(calc_data.pay_install_monthly);
        });
      });
    },
    copy_address_delivery: function copy_address_delivery(address_type) {
      $("#policy_delivery_street").value = $("#address_".concat(address_type, "_street")).value;
      $("#policy_delivery_city").value = $("#address_".concat(address_type, "_city")).value;
      $("#policy_delivery_state").value = $("#address_".concat(address_type, "_state")).value;
      $("#policy_delivery_zip").value = $("#address_".concat(address_type, "_zip")).value;
    },
    payment_plan_select: function payment_plan_select() {
      $('.purchase_policy_payment_plan').click(function () {
        // CSS CLASS
        $('.purchase_policy_payment_plan').removeClass('active');
        $(this).addClass('active'); // DATA FORMATION

        var payment_plan = $(this).data('plan'),
            initial_payment = parseFloat($(this).data('initialpayment')),
            delivery_fee = parseFloat($('#policy_delivery_fee').val()) || 0,
            total = parseFloat(initial_payment + delivery_fee).toFixed(2);
        $('#payment_plan_type').val(payment_plan);
        $('#initial_payment').val(total);
        $('#policy_due_now_amount').text('$' + total);

        if (payment_plan === 'installment') {
          $('#installment_payment').val($(this).data('installmentmonthly'));
          $('#installment_length').val($(this).data('installmentlength'));
        } else {
          $('#installment_payment').val('');
          $('#installment_length').val('');
        }
      });
    },
    delivery_option_select: function delivery_option_select() {
      $('.purchase_policy_delivery_option').click(function () {
        // CSS CLASS
        $('.purchase_policy_delivery_option').removeClass('active');
        $(this).addClass('active'); // DATA FORMATION

        var payment_selected = parseFloat($('.purchase_policy_payment_plan.active:eq(0)').data('initialpayment')) || 0,
            delivery_fee = parseFloat($(this).data('fee')),
            total = parseFloat(payment_selected + delivery_fee).toFixed(2);
        $('#policy_delivery_fee').val(delivery_fee);
        $('#initial_payment').val(total);
        $('#policy_due_now_amount').text('$' + total);
      });
    },
    purchase_policy: function purchase_policy(issue_via_agent_billing, user_id, authnet_id, payment_id) {
      $('#is_bill_agent').val(issue_via_agent_billing);

      if ($('.purchase_policy_payment_plan.active').eq(0).data('plan') == 'pay_in_full') {
        $('#is_installment').val(false);
      } else {
        $('#is_installment').val(true);
      }

      $('#purchase_policy_submit').click();
    },
    authorize_amount: function authorize_amount() {
      // CHANGE TO AUTHORIZE AMOUNT ROUTE NOT YET CREATED
      $('#purchase_policy_form_wrapper').attr('action', '/api/paymentgateway/purchase-recurring');
    }
  };
})();

/***/ }),

/***/ 28:
/*!*********************************************************************************!*\
  !*** multi ./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit_pricing.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/app/Rapyd/System/Blade/Resources/Admin/js/polices_edit_pricing.js */"./app/Rapyd/System/Blade/Resources/Admin/js/polices_edit_pricing.js");


/***/ })

/******/ });