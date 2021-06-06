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

/***/ "./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_edit_pricing.js":
/*!****************************************************************************!*\
  !*** ./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_edit_pricing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.PolicyPricing = Rapyd.PolicyPricing || {};

(function (_self, _props) {
  Rapyd.PolicyPricing.TabPricing = {
    props: {
      policy: {
        date_effective: window.policy_date_effective,
        id: window.policy_id,
        bond_library_id: window.policy_bond_library_id,
        limit: window.policy_limit
      },
      manual_calc: {
        premium: 0,
        broker_fee: 0,
        surety_fee: 0,
        system_fee: 0,
        pay_full_total: 0,
        pay_install_available: 0,
        pay_install_down: 0,
        pay_install_months: 0,
        pay_install_monthly: 0,
        calc_surety: 0,
        calc_agent: 0,
        calc_refer: 0,
        calc_tax: 0
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props;

      _self.installment_change();

      _self.rate_changes();

      if (window.quote_selected_present) {
        if ($('.purchase_policy_payment_plan').length === 1) {
          _self.single_option_select();
        } else {
          _self.payment_plan_select();
        }

        _self.delivery_option_select();
      }
    },
    add_payment_tab: function add_payment_tab() {
      $("li[data-tab='payments']").click();
      $("#billing_name_first").focus();
    },
    override_expiration_date: function override_expiration_date() {
      var ele = $('input[name="quote_manual_expiration"]').eq(0),
          re = ele.prop('readonly');
      ele.prop('readonly', !re);
    },
    override_effective_date: function override_effective_date() {
      var ele = $('input[name="quote_manual_effective"]').eq(0),
          re = ele.prop('readonly');
      ele.prop('readonly', !re);
    },
    copy_quote: function copy_quote(quote) {
      var installment_fee = Number(quote.pay_install_down) > 0 ? 1 : 0;
      $('select[name="quote_manual_carrier"]').val(quote.surety_code);
      $('select[name="quote_manual_term_years"]').val(quote.term_years);
      $('select[name="quote_manual_term_months"]').val(quote.term_months);
      $('select[name="quote_manual_allow_installment"]').val(installment_fee);
      $('input[name="quote_manual_premium"]').val(quote.pay_full_total);
      $('input[name="quote_manual_pay_in_full"]').val(quote.pay_full_total);
      $('input[name="quote_manual_expiration"]').val(quote.date_expiration.split(' ')[0]);
      $('input[name="quote_manual_effective"]').val(quote.date_effective); // Commission Rates

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
    rate_changes: function rate_changes() {
      $('.rate_change').each(function () {
        $(this).keyup(_self.debounce(function () {
          if ($(this).attr('name') != 'quote_manual_tax_rate') {
            var ele_val = parseFloat($(this).val()),
                total = 0,
                diff = 0;
            if (isNaN(ele_val)) ele_val = 0;
            $('.rate_change').each(function () {
              var temp_val = parseFloat($(this).val());
              if (isNaN(temp_val)) temp_val = 0;
              total += temp_val;
            });
            if (total > 100) diff = total - 100;
            $(this).val(ele_val - diff);

            if ($(this).attr('name') == 'quote_manual_surety_rate') {
              _props.manual_calc.calc_surety = _props.manual_calc.premium * (ele_val * .01);
            } else if ($(this).attr('name') == 'quote_manual_comm_rate') {
              _props.manual_calc.calc_agent = _props.manual_calc.premium * (ele_val * .01);
            } else if ($(this).attr('name') == 'quote_manual_referral_rate') {
              _props.manual_calc.calc_refer = _props.manual_calc.premium * (ele_val * .01);
            }

            $('#quote_manual_surety_calc').val(_props.manual_calc.calc_surety);
            $('#quote_manual_comm_calc').val(_props.manual_calc.calc_agent);
            $('#quote_manual_referral_calc').val(_props.manual_calc.calc_refer);
          } else if ($(this).attr('name') == 'quote_manual_tax_rate') {
            var rate_tax = parseFloat($('input[name="quote_manual_tax_rate').val()) * .01;
            _props.manual_calc.calc_tax = _props.manual_calc.premium * rate_tax;
            if (isNaN(_props.manual_calc.calc_tax)) _props.manual_calc.calc_tax = 0;
            $('#quote_manual_tax_amount').val(_props.manual_calc.calc_tax);
          }
        }, 200));
      });
    },
    debounce: function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
            args = arguments;

        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    calc_manual: function calc_manual() {
      var form_data = new FormData();
      fetch("/api/ajaxview/gettoken").then(function (response) {
        return response.text();
      }).then(function (token_data) {
        form_data.append('only_calculate', true);
        form_data.append('quote_manual_policy_id', _props.policy.id);
        form_data.append('quote_manual_bond_library_id', _props.policy.bond_library_id);
        form_data.append('quote_manual_quote_limit', _props.policy.limit);
        form_data.append('quote_manual_carrier', $('select[name="quote_manual_carrier"]').val());
        form_data.append('quote_manual_term_years', $('select[name="quote_manual_term_years"]').val());
        form_data.append('quote_manual_term_months', $('select[name="quote_manual_term_months"]').val());
        form_data.append('quote_manual_allow_installment', $('select[name="quote_manual_allow_installment"]').val());
        form_data.append('quote_manual_premium', $('input[name="quote_manual_premium"]').val());
        form_data.append('quote_manual_effective', $('input[name="quote_manual_effective"]').val());
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
          _props.manual_calc.premium = parseFloat($('input[name="quote_manual_premium"]').val());
          _props.manual_calc.broker_fee = parseFloat($('input[name="quote_manual_broker_fee"]').val());
          _props.manual_calc.surety_fee = parseFloat($('input[name="quote_manual_surety_fee"]').val());
          _props.manual_calc.system_fee = parseFloat($('input[name="quote_manual_system_fee"]').val());
          _props.manual_calc.pay_full_total = calc_data.pay_full_total;
          _props.manual_calc.pay_install_available = calc_data.pay_install_available;
          _props.manual_calc.pay_install_down = calc_data.pay_install_down;
          _props.manual_calc.pay_install_months = calc_data.pay_install_months;
          _props.manual_calc.pay_install_monthly = calc_data.pay_install_monthly;
          if (isNaN(_props.manual_calc.broker_fee)) _props.manual_calc.broker_fee = 0;
          if (isNaN(_props.manual_calc.surety_fee)) _props.manual_calc.surety_fee = 0;
          if (isNaN(_props.manual_calc.system_fee)) _props.manual_calc.system_fee = 0;
          $('input[name="quote_manual_expiration"]').val(calc_data.date_expiration.split('T')[0]);
          $('input[name="quote_manual_pay_in_full').val(calc_data.pay_full_total);
          $('input[name="quote_manual_allow_installment').val(calc_data.pay_install_available);
          $('input[name="quote_manual_installment_down').val(calc_data.pay_install_down);
          $('select[name="quote_manual_installment_payments').val(calc_data.pay_install_months + 1);
          $('input[name="quote_manual_installment_amount').val(calc_data.pay_install_monthly); // CALCULATE COMM RATES

          var rate_surety = parseFloat($('input[name="quote_manual_surety_rate').val()) * .01,
              rate_agent = parseFloat($('input[name="quote_manual_comm_rate').val()) * .01,
              rate_refer = parseFloat($('input[name="quote_manual_referral_rate').val()) * .01,
              rate_tax = parseFloat($('input[name="quote_manual_tax_rate').val()) * .01;
          _props.manual_calc.calc_surety = _props.manual_calc.premium * rate_surety;
          _props.manual_calc.calc_agent = _props.manual_calc.premium * rate_agent;
          _props.manual_calc.calc_refer = _props.manual_calc.premium * rate_refer;
          _props.manual_calc.calc_tax = _props.manual_calc.premium * rate_tax;
          if (isNaN(_props.manual_calc.calc_surety)) _props.manual_calc.calc_surety = 0;
          if (isNaN(_props.manual_calc.calc_agent)) _props.manual_calc.calc_agent = 0;
          if (isNaN(_props.manual_calc.calc_refer)) _props.manual_calc.calc_refer = 0;
          if (isNaN(_props.manual_calc.calc_tax)) _props.manual_calc.calc_tax = 0;
          $('#quote_manual_surety_calc').val(_props.manual_calc.calc_surety);
          $('#quote_manual_comm_calc').val(_props.manual_calc.calc_agent);
          $('#quote_manual_referral_calc').val(_props.manual_calc.calc_refer);
          $('#quote_manual_tax_amount').val(_props.manual_calc.calc_tax);
        });
      });
    },
    copy_address_delivery: function copy_address_delivery(address_type) {
      $("#policy_delivery_street").value = $("#address_".concat(address_type, "_street")).value;
      $("#policy_delivery_city").value = $("#address_".concat(address_type, "_city")).value;
      $("#policy_delivery_state").value = $("#address_".concat(address_type, "_state")).value;
      $("#policy_delivery_zip").value = $("#address_".concat(address_type, "_zip")).value;
    },
    single_option_select: function single_option_select() {
      // DATA FORMATION
      var ele = $('.purchase_policy_payment_plan.active:eq(0)'),
          payment_plan = ele.data('plan'),
          initial_payment = parseFloat(ele.data('initialpayment')),
          delivery_fee = parseFloat($('#policy_delivery_fee').val()) || 0,
          broker_fee = parseFloat($('#policy_broker_fee').val()) || 0,
          surety_fee = parseFloat($('#policy_surety_fee').val()) || 0,
          system_fee = parseFloat($('#policy_system_fee').val()) || 0,
          total = parseFloat(initial_payment + delivery_fee + broker_fee + surety_fee + system_fee).toFixed(2);
      $('#payment_plan_type').val(payment_plan);
      $('#initial_payment').val(total);
      $('#policy_due_now_amount').text('$' + total);
    },
    payment_plan_select: function payment_plan_select() {
      $('.purchase_policy_payment_plan').click(function () {
        // CSS CLASS
        $('.purchase_policy_payment_plan').removeClass('active');
        $(this).addClass('active'); // DATA FORMATION

        var payment_plan = $(this).data('plan'),
            initial_payment = parseFloat($(this).data('initialpayment')),
            delivery_fee = parseFloat($('#policy_delivery_fee').val()) || 0,
            broker_fee = parseFloat($('#policy_broker_fee').val()) || 0,
            surety_fee = parseFloat($('#policy_surety_fee').val()) || 0,
            system_fee = parseFloat($('#policy_system_fee').val()) || 0,
            total = parseFloat(initial_payment + delivery_fee + broker_fee + surety_fee + system_fee).toFixed(2);
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
        $(this).addClass('active');
        $('#policy_delivery_fee').val($(this).data('fee')); // DATA FORMATION

        var payment_selected = parseFloat($('.purchase_policy_payment_plan.active:eq(0)').data('initialpayment')) || 0,
            delivery_fee = parseFloat($('#policy_delivery_fee').val()) || 0,
            broker_fee = parseFloat($('#policy_broker_fee').val()) || 0,
            surety_fee = parseFloat($('#policy_surety_fee').val()) || 0,
            system_fee = parseFloat($('#policy_system_fee').val()) || 0,
            total = parseFloat(payment_selected + delivery_fee + broker_fee + surety_fee + system_fee).toFixed(2);
        $('#initial_payment').val(total);
        $('#policy_due_now_amount').text('$' + total);
      });
    },
    purchase_policy: function purchase_policy(issue_via_agent_billing, user_id, authnet_id, payment_id) {
      $('#is_bill_agent').val(issue_via_agent_billing);

      if ($('.purchase_policy_payment_plan.active')[0] === 'undefined') {
        if ($('.purchase_policy_payment_plan.active').eq(0).data('plan') == 'pay_in_full') {
          $('#is_installment').val(false);
        } else if ($('.purchase_policy_payment_plan.active').eq(0).data('plan') == 'installment') {
          $('#is_installment').val(true);
        }
      }

      $('#purchase_policy_submit').click();
    },
    authorize_amount: function authorize_amount() {
      // GREP FIX: DOES THIS EVEN WORK AS IT SHOULD BE INSTALLMENT PAYMENTS?
      // CHANGE TO AUTHORIZE AMOUNT ROUTE NOT YET CREATED
      $('#purchase_policy_form_wrapper').attr('action', '/api/paymentgateway/purchase-recurring');
    }
  };
})();

Rapyd.PolicyPricing.TabPricing.init();

/***/ }),

/***/ 29:
/*!**********************************************************************************!*\
  !*** multi ./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_edit_pricing.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/app/Rapyd/Modules/Bond/Resources/Admin/js/policies_edit_pricing.js */"./app/Rapyd/Modules/Bond/Resources/Admin/js/policies_edit_pricing.js");


/***/ })

/******/ });