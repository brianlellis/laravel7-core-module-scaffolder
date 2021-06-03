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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/page/bondquote.js":
/*!***********************************************!*\
  !*** ./resources/Public/js/page/bondquote.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self, _props, _bondinfo, _usersel, _vehicle_info, _bond_db, _principal_info, R_SpaSys, R_Gmap, R_Format, R_FetchPost) {
  Rapyd.Page.Bondquote = {
    props: {
      created_by: false,
      agent_id: false,
      policy_id: false,
      user_selection: {
        use_frequent_bond: false,
        state_selected: false,
        state_selected_full: false,
        state_selected_city: false,
        quote_selected: false,
        quote_type: false,
        know_bond: false,
        bond_selected_id: false,
        email_application: false,
        email_bondquote: false,
        is_government: {
          value: false,
          state: false,
          local: false,
          fed: false
        },
        fees: {
          broker: false,
          delivery: false
        },
        delivery: {
          method: false,
          address_used: false,
          custom: {// name
            // street
            // street_2
            // city
            // state
            // zip
          }
        },
        payment: {
          method: false
        }
      },
      bond_info: {
        id: false,
        limit_selected: false,
        erisa_assets: false,
        include_employees: false,
        covered_employees: false,
        business_name: false,
        business_formation: false,
        business_years: false,
        start_date: false,
        db_info: {},
        business_phone: false,
        generic_info: {// description
          // description_other
          // name
          // street
          // street_2
          // city
          // state
          // zip
        },
        is_custom_limit: {
          value: false
        },
        vehicle_info: {
          api_data: {},
          vin: false,
          year: false,
          make: false,
          body: false,
          model: false,
          have_lien: false,
          proof_ownership: false
        },
        job_location: {// name
          // street
          // street_2
          // city
          // state
          // zip
        }
      },
      bond_quotes: {},
      principal_info: [// each principal_info in obj form
        // -- first_name
        // -- last_name
        // -- ssn
        // -- addresses are held in Rapyd.Core.GoogleMap obj
      ],
      principal_idx: false,
      address_business: {
        street: null,
        street_2: null,
        city: null,
        state: null,
        zip: null,
        county: null
      },
      address_mailing: {
        street: null,
        street_2: null,
        city: null,
        state: null,
        zip: null,
        county: null
      },
      address_delivery: {
        street: null,
        street_2: null,
        city: null,
        state: null,
        zip: null,
        county: null
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props;
      _usersel = _self.props.user_selection;
      _principal_info = _self.props.principal_info;
      _bondinfo = _self.props.bond_info;
      _vehicle_info = _self.props.bond_info.vehicle_info;
      _bond_db = _self.props.bond_info.db_info;
      R_SpaSys = Rapyd.Core.SpaSystem;
      R_Gmap = Rapyd.Core.GoogleMap;
      R_Format = Rapyd.Core.Formatters;
      R_FetchPost = Rapyd.Core.Ajax.fetch_tokenizer;
      R_SpaSys.spaNavigate(_self.spaNavigate, _props);

      _self.inputRestrictions();

      _self.bindGoogleMaps();

      _self.formDatePicker();

      if (Rapyd.props.bond_policy) _self.evalPrevPolicy();

      if (Rapyd.props.user.authorized) {
        Rapyd.Core.Window.windowLeave(_self.exitModal, document.getElementById('bondquote-main'), function () {
          if (_bond_db) return true;else return false;
        }, 15, {
          use: {
            mouseleave: false,
            reload: true,
            a_tags: true
          }
        });
      }

      _self.uploadApplication();

      _self.fromAgentProfile(); // Turn off auto complete


      document.querySelectorAll("input").forEach(function (input) {
        return input.setAttribute("autocomplete", "autocomplete_off_hack_");
      }); // Bond Emails

      document.querySelectorAll(".email-template").forEach(function (form) {
        return _self.prepareEmails(form);
      }); // Custom Number Of Employees

      document.getElementById('employees_20_plus').addEventListener("click", function () {
        document.querySelector('.dishonesty_container').style.display = 'none';
        var customInput = document.getElementById('number_of_employees');
        customInput.style.display = 'block';
        customInput.addEventListener('keyup', function (e) {
          _props.bond_info.dish_covered_employees = e.target.value;
          var continueBtn = document.getElementById('number_of_employees_continue');

          if (e.target.value > 0) {
            continueBtn.style.display = 'block';
          } else {
            continueBtn.style.display = 'none';
          }
        });
      });
    },
    evalPrevPolicy: function evalPrevPolicy() {
      var _Rapyd$props$bond_pol, _Rapyd$props$bond_pol2, _Rapyd$props$bond_pol3, _Rapyd$props$bond_pol4, _Rapyd$props$bond_pol5, _Rapyd$props$bond_pol6;

      if (Rapyd.props.user.authorized) {
        R_SpaSys.props.spa.history = Rapyd.props.policy_stepper_history;
      }

      _props.created_by = Rapyd.props.bond_policy.created_by;
      _props.agent_id = Rapyd.props.bond_policy.agent.id;
      _props.policy_id = Rapyd.props.bond_policy.id;
      _usersel.state_selected = Rapyd.props.bond_policy.bond.state_initial;
      _usersel.state_full = Rapyd.props.bond_policy.bond.state_full;
      _usersel.bond_selected_id = Rapyd.props.bond_policy.bond.id;
      _bondinfo.id = Rapyd.props.bond_policy.bond.id;
      _bondinfo.business_formation = Rapyd.props.bond_policy.business.entity_type;
      _bondinfo.business_phone = Rapyd.props.bond_policy.business.phone_main;
      _bondinfo.generic_info = Rapyd.props.bond_policy.bond.is_generic;
      _bondinfo.job_location = Rapyd.props.bond_policy.bond.require_info;
      _vehicle_info = Rapyd.props.bond_policy.bond.require_vehicle;
      _self.props.bond_info.db_info = _bond_db = Rapyd.props.bond_policy.bond;
      _self.props.bond_info.limit_selected = Rapyd.props.bond_policy.limit_amount;
      _self.props.principal_info = _principal_info = Rapyd.props.bond_policy.principals.map(function (principal) {
        return {
          first_name: principal.name_first,
          last_name: principal.name_last,
          street: principal.address_street,
          street_2: principal.address_street_2,
          city: principal.address_city,
          state: principal.address_state,
          zip: principal.address_zip
        };
      }); // Business Info

      _bondinfo.business_years = Rapyd.props.bond_policy.business.years_in_business;
      _bondinfo.business_name = Rapyd.props.bond_policy.business.name; // Business Address

      _props.address_business = {
        street: (_Rapyd$props$bond_pol = Rapyd.props.bond_policy.business.address_street) !== null && _Rapyd$props$bond_pol !== void 0 ? _Rapyd$props$bond_pol : '',
        street_2: (_Rapyd$props$bond_pol2 = Rapyd.props.bond_policy.business.address_street_2) !== null && _Rapyd$props$bond_pol2 !== void 0 ? _Rapyd$props$bond_pol2 : '',
        city: (_Rapyd$props$bond_pol3 = Rapyd.props.bond_policy.business.address_city) !== null && _Rapyd$props$bond_pol3 !== void 0 ? _Rapyd$props$bond_pol3 : '',
        state: (_Rapyd$props$bond_pol4 = Rapyd.props.bond_policy.business.address_state) !== null && _Rapyd$props$bond_pol4 !== void 0 ? _Rapyd$props$bond_pol4 : '',
        zip: (_Rapyd$props$bond_pol5 = Rapyd.props.bond_policy.business.address_zip) !== null && _Rapyd$props$bond_pol5 !== void 0 ? _Rapyd$props$bond_pol5 : '',
        county: (_Rapyd$props$bond_pol6 = Rapyd.props.bond_policy.business.address_county) !== null && _Rapyd$props$bond_pol6 !== void 0 ? _Rapyd$props$bond_pol6 : ''
      }; // Mailing Address

      if (Rapyd.props.bond_policy.address_mailing) {
        _props.address_mailing = {
          street: Rapyd.props.bond_policy.address_mailing.address_street,
          street_2: Rapyd.props.bond_policy.address_mailing.address_street_2,
          city: Rapyd.props.bond_policy.address_mailing.address_city,
          state: Rapyd.props.bond_policy.address_mailing.address_state,
          zip: Rapyd.props.bond_policy.address_mailing.address_zip
        };
      } // Mailing Delivery


      if (Rapyd.props.bond_policy.address_delivery) {
        _props.address_delivery = {
          street: Rapyd.props.bond_policy.address_delivery.address_street,
          street_2: Rapyd.props.bond_policy.address_delivery.address_street_2,
          city: Rapyd.props.bond_policy.address_delivery.address_city,
          state: Rapyd.props.bond_policy.address_delivery.address_state,
          zip: Rapyd.props.bond_policy.address_delivery.address_zip
        };
      }

      if (!Rapyd.props.bond_policy_quotes) _self.setHeaders("bond_want_confirmation");else _self.dataFetchBondQuote();
    },
    inputRestrictions: function inputRestrictions() {
      Rapyd.Core.Selectors.autoComplete("#bondlist-autocomplete");
      Rapyd.Core.Selectors.dropDown("#bondState");
      Rapyd.Core.Selectors.dropDown("#bondVehicleBody");
      Rapyd.Core.Selectors.dropDown("#generic_desc_select");
      Rapyd.Core.Selectors.dropDown("#card-expiration-month");
      Rapyd.Core.Selectors.dropDown("#agent-expiration-month");
      Rapyd.Core.Selectors.dropDown("#card-expiration-year");
      Rapyd.Core.Selectors.dropDown("#agent-expiration-year");
      R_Format.selectRestriction(document.getElementById("custphone-input"), "phone");
      R_Format.selectRestriction(document.getElementById("principal_ssn_input"), "ssn");
      R_Format.selectRestriction(document.getElementById("bond_custom_fee_input"), "dollar");
    },
    spaNavigate: function spaNavigate(event) {
      var page_val = event.target.dataset.page;

      if (page_val === '01-welcome') {
        if (document.getElementById('page-00-common-bond')) {
          document.getElementById('page-00-common-bond').classList.remove('active');
        }

        document.getElementById('page-01-welcome').classList.add('active');
      }

      if (page_val === "state_select_confirm") {
        if (Rapyd.props.user.state !== undefined || _usersel.state_selected !== false) {
          if (_usersel.state_selected === false) {
            if (Rapyd.props.user.state) {
              _usersel.state_selected = Rapyd.props.user.state.initial;
              _usersel.state_selected_full = Rapyd.props.state_info[Rapyd.props.user.state.initial]['full'];
            } else {
              _usersel.state_selected = Rapyd.props.browser.location.state.initial;
              _usersel.state_selected_full = Rapyd.props.browser.location.state.full;
            }
          }

          document.getElementById("state_guess_value").innerHTML = Rapyd.props.state_info[_usersel.state_selected]["full"];
          R_SpaSys.spaHistory(event.target, "03a-stateselect");
        } else if (Rapyd.props.browser.location.state) {
          _usersel.state_selected = Rapyd.props.browser.location.state.initial;
          _usersel.state_selected_full = Rapyd.props.browser.location.state.full;
          document.getElementById("state_guess_value").innerHTML = Rapyd.props.state_info[_usersel.state_selected]["full"];
          R_SpaSys.spaHistory(event.target, "03a-stateselect");
        } else {
          R_SpaSys.spaHistory(event.target, "03b-stateselect");
        }
      } else if (page_val === "state_selector" || page_val === "state_confirm") {
        // navigate to specific page dependent on what questions have been answered
        R_SpaSys.navStateSelectPath(event.target, _self.navStateSelectPath, _props);
        var stateInfo = Rapyd.props.state_info[_usersel.state_selected];
        document.getElementById("state-full").innerText = _usersel.state_selected_full;
        document.getElementById("state-db-city").innerText = stateInfo.city;
        document.getElementById("state-db-city2").innerText = stateInfo.city;
        document.getElementById("state-db-term1").innerText = stateInfo.bond_term;
        document.getElementById("state-db-term2").innerText = stateInfo.bond_term_2;
      } else if (page_val === "fed_bond_list") {
        // HACK: FORCING SET TIMEOUT PUSH TO BACK OF CALLSTACK TO SATISFY RACE CONDITION
        setTimeout(function () {
          _self.dataFetchBondList();

          R_SpaSys.spaHistory(event.target, "04b-bondlist");
        }, 0);
      } else if (page_val === "bondlist_local_selection") {
        document.querySelectorAll("#bond_sub_selector_list [data-obligee=\"".concat(event.target.dataset.obligee, "\"]")).forEach(function (el) {
          el.style.display = "flex";
        }); // Hide and show correct bond selection page

        document.getElementById('bond_selector_list').style.display = 'none';
        document.getElementById('bond_sub_selector_list').style.display = 'flex';
      } else if (page_val === "bond_selector" || page_val === "bondlist_selection") {
        if (!_bondinfo.id) _bondinfo.id = event.target.dataset.bond_id;

        _self.dataFetchIndividualBond(event);
      } else if (page_val === "bond_limit_selector" || page_val === "custom_limit_submit" || page_val === 'custom_limit_selector') {
        if (page_val === "custom_limit_submit") {
          var limitValue = document.getElementById("bond_custom_limit_input").value.replace(/,/g, "");
          _bondinfo.limit_selected = parseInt(limitValue);
        } else if (page_val === "bond_limit_selector" || page_val === "custom_limit_selector") {
          _bondinfo.limit_selected = parseInt(event.target.id.replace("limit_", ""));
        } // DOM MANIPULATION


        setTimeout(function () {
          var dollar_limit = R_Format.dollarFormat(_bondinfo.limit_selected);
          document.getElementById("bond_selected_info").innerHTML = "\n            ".concat(dollar_limit, " - ").concat(_bond_db.state_full, "\n            ").concat(_bond_db.description, "<br>\n            ").concat(_bond_db.obligee.name_alternate != '' ? _bond_db.obligee.name_alternate : _bond_db.obligee.name, "\n          ");
        }, 0);
        if (_bond_db.is_generic) R_SpaSys.spaHistory(event.target, "05b-bondinfo");else R_SpaSys.spaHistory(event.target, "06a-bondselect");
      } else if (page_val === "generic_desc_selection") {
        var sel_value = document.getElementById('generic_desc_select').value;
        _bondinfo.generic_info.description = sel_value;
        _bondinfo.generic_info.id = _bond_db.obligee.id;

        if (sel_value === 'Other') {
          R_SpaSys.spaHistory(event.target, "05d-bondinfo");
        } else {
          if (_bond_db.obligee.name == 'GENERIC OBLIGEE') R_SpaSys.spaHistory(event.target, "05c-bondinfo");else R_SpaSys.spaHistory(event.target, "06a-bondselect");
        }
      } else if (page_val === 'generic-obligee-custom-type') {
        _bondinfo.generic_info.description_other = document.getElementById('generic-obligee-custom-type').value;
        if (_bond_db.obligee.name == 'GENERIC OBLIGEE') R_SpaSys.spaHistory(event.target, "05c-bondinfo");else R_SpaSys.spaHistory(event.target, "06a-bondselect");
      } else if (page_val === "generic_obligee_submit") {
        var gen_str = 'generic_obligee_';
        _bondinfo.generic_info.name = document.getElementById("".concat(gen_str, "name")).value;
        _bondinfo.generic_info.street = document.getElementById("".concat(gen_str, "street")).value;
        _bondinfo.generic_info.street_2 = document.getElementById("".concat(gen_str, "street_2")).value;
        _bondinfo.generic_info.city = document.getElementById("".concat(gen_str, "city")).value;
        _bondinfo.generic_info.state = document.getElementById("".concat(gen_str, "state")).value;
        _bondinfo.generic_info.zip = document.getElementById("".concat(gen_str, "zip")).value;
        R_SpaSys.spaHistory(event.target, "06a-bondselect");
      } else if (page_val === "bond_want_confirmation") {
        _self.setHeaders("bond_want_confirmation");

        if (Rapyd.props.loggedIn) R_SpaSys.spaHistory(event.target, "08a-principalcheck");else R_SpaSys.spaHistory(event.target, "09a-basicinfo");
      } else if (page_val === "bond_reset_confirmation") {
        document.getElementById('bondlist-autocomplete').value = '';

        _self.resetProps();

        R_SpaSys.spaHistory(event.target, "01-welcome");
      } // GO TO SPECIFIC INFO COLLECTION PAGE BASED ON BOND TYPE IN SECTION 2 WELCOME
      else if (page_val === "basic_info_name") {
          _bondinfo.business_name = document.getElementById("biznameinput").value;
          var bond_type = _bond_db.type;
          if (_bond_db.require_erisa) R_SpaSys.spaHistory(event.target, "09b-basicinfo");else if (_bond_db.require_info && !_bond_db.require_vehicle) R_SpaSys.spaHistory(event.target, "09c-basicinfo");else R_SpaSys.spaHistory(event.target, "09d-basicinfo");
        } else if (page_val === "business_years") {
          if (_bond_db.require_location) R_SpaSys.spaHistory(event.target, "12b-jobinfo");else R_SpaSys.spaHistory(event.target, "09d-basicinfo");
        } else if (page_val === "cust_biz_address_submit") {
          if (document.getElementById("cust_biz_street_2").value != "") {
            R_Gmap.props.forms.customer_business_address.form_data.street_2 = document.getElementById("cust_biz_street_2").value;
          }

          _self.storeBondPolicy(R_SpaSys.spaHistory(event.target, "09f-basicinfo"));
        } else if (page_val === "mailing_address_is_same" || page_val === "new_mailing_address") {
          var _bond_type = _bond_db.type;

          if (page_val === "mailing_address_is_same") {
            R_Gmap.props.forms.customer_mailing_address.form_data = R_Gmap.props.forms.customer_business_address.form_data;
          } else if (document.getElementById("cust_mail_street_2").value != "") {
            R_Gmap.props.forms.customer_mailing_address.form_data.street_2 = document.getElementById("cust_mail_street_2").value;
          }

          if (_bond_db.require_vehicle) {
            R_SpaSys.spaHistory(event.target, "11a-vehicle");
          } else if (_bond_db.require_dishonesty) {
            R_SpaSys.spaHistory(event.target, "10a-dishonesty");
          } else {
            if (_bond_db.require_info) R_SpaSys.spaHistory(event.target, "13a-principal");else R_SpaSys.spaHistory(event.target, "14a-summary");
          }
        } else if (page_val === "09e-basicinfo") {
          _bondinfo.business_phone = document.getElementById("custphone-input").value.replace(/\D/g, "");
          R_SpaSys.spaHistory(event.target, "09e-basicinfo");
        } else if (page_val === "09h-email") {
          document.getElementById('non_auth_email').addEventListener('keyup', function (e) {
            return _props.non_auth_email = e.target.value;
          });
          R_SpaSys.spaHistory(event.target, "09h-email");
        } // JOB LOCATION INFORMATION
        else if (page_val === "job_location_address_submit") {
            _bondinfo.job_location.name = document.getElementById("job_location_name").value;
            _bondinfo.job_location.street = document.getElementById("job_location_street").value;
            _bondinfo.job_location.street_2 = document.getElementById("job_location_street_2").value;
            _bondinfo.job_location.city = document.getElementById("job_location_city").value;
            _bondinfo.job_location.state = document.getElementById("job_location_state").value;
            _bondinfo.job_location.zip = document.getElementById("job_location_zip").value;
            R_SpaSys.spaHistory(event.target, "09d-basicinfo");
          } // VIN AND VEHICLE INFORMATION
          else if (page_val === "vehicle_vin_submit") {
              _self.submitVin(event);
            } else if (page_val === "vehicle_submit_data") {
              _vehicle_info.vin = document.getElementById("vehicle_vin_edit").value;
              _vehicle_info.year = document.getElementById("vehicle_year").value;
              _vehicle_info.make = document.getElementById("vehicle_make").value;
              _vehicle_info.model = document.getElementById("vehicle_model").value;
              _vehicle_info.body = document.getElementById("vehicle_body").value;
              if (_bond_db.require_info) R_SpaSys.spaHistory(event.target, "13a-principal");else R_SpaSys.spaHistory(event.target, "14a-summary");
            } // THIS AREA IS DETERMINED BY INCOMING PAGE AND CURRENT NEEDS
            else if (page_val === "principal_name_inputs") {
                // MANIPULATE PRINCIPAL INFO ARR
                if (_principal_info.length === 0) _props.principal_idx = 0;else _props.principal_idx += 1; // STORE DATA

                _principal_info.push({
                  first_name: document.getElementById("principal_name_first").value,
                  last_name: document.getElementById("principal_name_last").value
                }); // POPULATE DOM


                document.getElementById("cur_principal_fname").innerText = _principal_info[_props.principal_idx]["first_name"];
                document.getElementById("cur_principal_fname_address").innerText = _principal_info[_props.principal_idx]["first_name"]; // Change Header

                document.getElementById('ownerAddSame').textContent = _principal_info[_props.principal_idx]["first_name"] + "'s"; // CHECK FOR CREDIT INFO NEED

                if (_bond_db.require_credit) R_SpaSys.spaHistory(event.target, "13b-principal");else R_SpaSys.spaHistory(event.target, "13e-principal");
              } else if (page_val === "owner_address_is_same") {
                var biz_addy = R_Gmap.props.forms.customer_business_address.form_data;
                _principal_info[_props.principal_idx]["street"] = biz_addy.street;
                _principal_info[_props.principal_idx]["street_2"] = biz_addy.street_2;
                _principal_info[_props.principal_idx]["city"] = biz_addy.city;
                _principal_info[_props.principal_idx]["state"] = biz_addy.state;
                _principal_info[_props.principal_idx]["zip"] = biz_addy.zip;
                _principal_info[_props.principal_idx]["county"] = biz_addy.county;

                if (_bondinfo.business_formation === "soleprop") {
                  R_SpaSys.spaHistory(event.target, "14a-summary");
                } else {
                  R_SpaSys.spaHistory(event.target, "13d-principal");
                }
              } else if (page_val === "principal_address_submit") {
                _principal_info[_props.principal_idx]["street"] = document.getElementById("principal_address_street").value;
                _principal_info[_props.principal_idx]["street_2"] = document.getElementById("principal_address_street_2").value;
                _principal_info[_props.principal_idx]["city"] = document.getElementById("principal_address_city").value;
                _principal_info[_props.principal_idx]["state"] = document.getElementById("principal_address_state").value;
                _principal_info[_props.principal_idx]["zip"] = document.getElementById("principal_address_zip").value;
                _principal_info[_props.principal_idx]["county"] = document.getElementById("principal_address_county").value;
                R_SpaSys.spaHistory(event.target, "13d-principal");
              } else if (page_val === "cust_delivery_address_submit") {
                _usersel.delivery.method = 'custom';
                _props.address_delivery.street = document.getElementById("cust_delivery_street").value;
                _props.address_delivery.street_2 = document.getElementById("cust_delivery_street_2").value;
                _props.address_delivery.city = document.getElementById("cust_delivery_city").value;
                _props.address_delivery.state = document.getElementById("cust_delivery_state").value;
                _props.address_delivery.zip = document.getElementById("cust_delivery_zip").value;
                _props.address_delivery.county = document.getElementById("cust_delivery_county").value;

                _self.dataFetchBondQuote(event, true);
              } else if (page_val === "eval_credit") {
                // STORE SSN
                _principal_info[_props.principal_idx]["ssn"] = document.getElementById("principal_ssn_input").value.replace(/\D/g, ""); // FETCH REPORT

                R_SpaSys.spaHistory(event.target, "13e-principal");
              } else if (page_val === "add_another_owner") {
                document.getElementById("principal_name_first").value = "";
                document.getElementById("principal_name_last").value = "";
                document.getElementById("principal_ssn_input").value = "";
                document.getElementById("principal_address_street").value = "";
                document.getElementById("principal_address_city").value = "";
                document.getElementById("principal_address_state").value = "";
                document.getElementById("principal_address_zip").value = "";
                document.getElementById("principal_address_street_2").value = "";
                document.getElementById("principal_address_county").value = "";
                document.getElementById("principal_address_map").style.height = "0px";
                document.getElementById("bizOwner").innerText = '';
                document.getElementById("bizOwner2").innerText = 'Who is the other owner of the business?';
                R_SpaSys.spaHistory(event.target, "13a-principal");
              } // GET THE BOND QUOTE
              else if (page_val === "get_quote_submit") {
                  var quote_ele = document.getElementById("get_quote_submit");
                  quote_ele.classList.add("loading");
                  quote_ele.innerHTML = "Get Quote <span></span><span></span><span></span>";

                  _self.storeBondPolicyAndQuote(_self.dataFetchBondQuote, event);
                } else if (page_val === "quotelist_selection") {
                  _self.storeBondPolicy();

                  _self.selectQuote(event.target.dataset.quote_id, event.target.dataset.quote_type, event.target);
                } else if (page_val === "quotelist_selection_options") {
                  document.querySelector("li:not(#page-15-quote) .quote_options_".concat(event.target.dataset.options)).classList.remove('no_display');
                } else if (page_val === "quotelist_selection_options_close") {
                  document.querySelectorAll('.quote_purchase_options_box').forEach(function (ele) {
                    ele.classList.add('no_display');
                  });
                } else if (page_val === "custom_broker_fee") {
                  _usersel.fees.broker = document.getElementById("bond_custom_fee_input").value.replace(/,/g, "");

                  _self.calcBrokerFee();

                  R_SpaSys.spaHistory(event.target, "18-purchaser");
                } else if (page_val === "issue_bond_policy_agent") {
                  var is_install = _usersel.quote_type == "pay_install_down" ? true : false;

                  _self.purchasePolicy(event, true, is_install);
                } else if (page_val === "issue_bond_policy_principal") {
                  var _is_install = _usersel.quote_type == "pay_install_down" ? true : false;

                  _self.purchasePolicy(event, false, _is_install);
                } else if (page_val === "download_policy_application") {
                  _self.createPolicyApplication();
                } // DELIVERY FEE
                else if (page_val === "delivery_fee_select") {
                    document.getElementById('address_select_customer_business').innerHTML = "\n          ".concat(_props.address_business.street, " <br/>\n          ").concat(_props.address_business.city, ",\n          ").concat(_props.address_business.state, "  ").concat(_props.address_business.zip, "\n        ");

                    if (document.getElementById('address_select_agent')) {
                      document.getElementById('address_select_agent').innerHTML = "\n            ".concat(Rapyd.props.user.address, " <br/>\n            ").concat(Rapyd.props.user.city, ",\n            ").concat(Rapyd.props.user.state.initial, "  ").concat(Rapyd.props.user.zip, "\n          ");
                    }

                    _self.calcDeliveryFee(event.target.dataset.amount, event.target);
                  } // DELIVERY ADDRESS
                  else if (page_val === "22-bondquoteselect") {
                      if (event.target.dataset.address === 'mailing') {
                        _props.address_delivery = _props.address_mailing;
                      }

                      if (event.target.dataset.address === 'agent') {
                        _props.address_delivery.street = Rapyd.props.user.address;
                        _props.address_delivery.city = Rapyd.props.user.city;
                        _props.address_delivery.state = Rapyd.props.user.state.initial;
                        _props.address_delivery.zip = Rapyd.props.user.zip;
                      }

                      _self.dataFetchBondQuote(event, true);
                    } else if (page_val === "21-signupload" && !Rapyd.props.user.authorized) {
                      var principal_list = document.getElementById("list_of_principals");

                      if (_principal_info.length) {
                        principal_list.innerHTML = _principal_info.map(function (person, index) {
                          return "\n                  <button class=\"continue-button\"\n                    data-page=\"29-user-agreement\"\n                    data-selected_principal=\"".concat(index, "\"\n                    data-prop=\"user_selection.selected_principal=").concat(index, "\"\n                  >").concat(person.first_name, " ").concat(person.last_name, "</button>\n                ");
                        });
                      } else {
                        principal_list.innerHTML = "\n            <button class=\"continue-button\"\n            data-page=\"29-user-agreement\"\n            data-selected_principal=\"['bond_info']['business_name']\">\n              ".concat(_bondinfo.business_name, "\n            </button>\n          ");
                      }

                      R_SpaSys.spaHistory(event.target, event.target.dataset.page);
                    } else if (page_val === "29-user-agreement") {
                      var user = {};

                      if (_principal_info.length) {
                        user = event.target.dataset.selected_principal ? +event.target.dataset.selected_principal : +_usersel.selected_principal;
                        user = _principal_info[user];
                      } else {
                        user['first_name'] = _props[event.target.dataset.selected_principal];
                      }

                      var form = document.getElementById('policy_agreement_upload');
                      form.querySelector('input[name="policy_id"]').value = _props.policy_id;
                      form.querySelector('input[name="name_first"]').value = user.first_name;
                      form.querySelector('input[name="name_last"]').value = user.last_name;
                      form.querySelector('input[name="is_esign"]').value = 0;
                      document.getElementById('selected_principal').innerText = user.first_name;
                      R_SpaSys.spaHistory(event.target, event.target.dataset.page);
                    } // Agent Billing
                    else if (page_val === '27-payment-agency-bill') {
                        _self.setHeaders('agent-billing');

                        R_SpaSys.spaHistory(event.target, event.target.dataset.page);
                      } else if (page_val === '27-payment-credit-card') {
                        _self.setHeaders('agent-direct');

                        R_SpaSys.spaHistory(event.target, event.target.dataset.page);
                      } else if (page_val === '10c-dishonesty') {
                        if (event.target.dataset.props = 'bond_info.dish_include_employees=false') {
                          document.getElementById('dish_include_exclude').innerText = 'excluding owners and officers';
                        } else {
                          document.getElementById('dish_include_exclude').innerText = 'including owners and officers';
                        }

                        R_SpaSys.spaHistory(event.target, event.target.dataset.page);
                      } // TARGET PAGE VIA DATA TAG IN HTML
                      else {
                          if (page_val === "03a-stateselect") {
                            document.getElementById("state_guess_value").innerHTML = Rapyd.props.state_info[_usersel.state_selected]["full"];
                          }

                          R_SpaSys.spaHistory(event.target);
                        } // Turn Off Auto Complete For Google Map


      document.querySelectorAll(".pac-target-input").forEach(function (input) {
        return input.setAttribute("autocomplete", "autocomplete_off_hack_");
      });
      return true;
    },
    resetProps: function resetProps() {
      _self.props = {
        created_by: false,
        agent_id: false,
        policy_id: false,
        user_selection: {
          use_frequent_bond: false,
          state_selected: false,
          state_selected_full: false,
          state_selected_city: false,
          quote_selected: false,
          quote_type: false,
          know_bond: false,
          bond_selected_id: false,
          email_application: false,
          email_bondquote: false,
          is_government: {
            value: false,
            state: false,
            local: false,
            fed: false
          },
          fees: {
            delivery: false
          },
          delivery: {
            method: false,
            address_used: false,
            custom: {// name
              // street
              // street_2
              // city
              // state
              // zip
            }
          },
          payment: {
            method: false
          }
        },
        bond_info: {
          id: false,
          limit_selected: false,
          erisa_assets: false,
          include_employees: false,
          covered_employees: false,
          business_name: false,
          business_formation: false,
          business_years: false,
          start_date: false,
          db_info: {},
          business_phone: false,
          generic_info: {// description
            // description_other
            // name
            // street
            // street_2
            // city
            // state
            // zip
          },
          is_custom_limit: {
            value: false
          },
          vehicle_info: {
            api_data: {},
            vin: false,
            year: false,
            make: false,
            body: false,
            model: false,
            have_lien: false,
            proof_ownership: false
          },
          job_location: {// name
            // street
            // street_2
            // city
            // state
            // zip
          }
        },
        bond_quotes: {},
        principal_info: [// each principal_info in obj form
          // -- first_name
          // -- last_name
          // -- ssn
          // -- addresses are held in Rapyd.Core.GoogleMap obj
        ],
        principal_idx: false,
        address_business: {
          street: null,
          street_2: null,
          city: null,
          state: null,
          zip: null
        },
        address_mailing: {
          street: null,
          street_2: null,
          city: null,
          state: null,
          zip: null
        },
        address_delivery: {
          street: null,
          street_2: null,
          city: null,
          state: null,
          zip: null
        }
      };
      _props = _self.props;
      _usersel = _self.props.user_selection;
      _principal_info = _self.props.principal_info;
      _bondinfo = _self.props.bond_info;
      _vehicle_info = _self.props.bond_info.vehicle_info;
      _bond_db = _self.props.bond_info.db_info;
    },
    navStateSelectPath: function navStateSelectPath(page_val) {
      var page_target;

      if (page_val === "02a-government" || page_val === "02b-government") {
        _self.dataFetchBondList();

        page_target = "04b-bondlist";
      } else {
        page_target = "04a-bondlist";
      }

      return page_target;
    },
    dataFetchBondList: function dataFetchBondList() {
      var search_scope,
          fetch_url,
          lib_fetch = '/api/bond_library/fetch/';
      if (_usersel.is_government.local === "true") fetch_url = "".concat(lib_fetch).concat(_usersel.state_selected, "/local");else if (_usersel.is_government.state === "true") fetch_url = "".concat(lib_fetch).concat(_usersel.state_selected, "/state");else if (_usersel.is_government.fed === "true") fetch_url = "".concat(lib_fetch, "fed/fed");else if (_usersel.is_government.value === "false") fetch_url = "".concat(lib_fetch).concat(_usersel.state_selected, "/nongov");
      document.getElementById('bondlist_selection_wrap').style.display = 'none';
      document.getElementById('get_loading_bondlist').classList.add('loading');
      Rapyd.Core.Ajax.renderViewAJAX(fetch_url, "theme_com::bondquote.ui.00-bondlist", "bondlist_selection_wrap", false, function () {
        document.getElementById('get_loading_bondlist').classList.remove('loading');
        document.getElementById('bondlist_selection_wrap').style.display = 'block';
      }); // Change the header information on the bond list after rendering

      var ele_header = document.getElementById('bondlist_selection_header');
      if (_usersel.is_government.local === "true") ele_header.innerHTML = "Which city or county in ".concat(_usersel.state_selected_full, " is the bond needed?");else ele_header.innerHTML = "Here are the most popular bond types in ".concat(_usersel.state_selected_full, ". <br>Which bond type is needed?");
    },
    dataFetchIndividualBond: function dataFetchIndividualBond(event) {
      // HACK: INSTEAD THE APP FUNCTIONS SHOULD ALWAYS BE AT THE END OF STACK BEFORE PROP CHANGES INSTEAD OF FORCING VIA TIMEOUT
      setTimeout(function () {
        Rapyd.Core.Ajax.renderViewAJAX("/api/bond_library/get/".concat(_bondinfo.id), "theme_com::bondquote.05a-bondinfo", "custom-limit-wrapper", function (data) {
          _self.props.bond_info.db_info = _bond_db = data; // IF CUSTOM LIMIT OR MULTIPLE VALUES

          if (_bond_db.limits_custom || Array.isArray(_bond_db.limits) && _bond_db.limits.length > 1) {
            if (_bond_db.limits.limit_custom_common_arr) {
              var custom_selector_dom = '';

              for (var idx = 0; idx < _bond_db.limits.limit_custom_common_arr.length; idx++) {
                var limit_value = _bond_db.limits.limit_custom_common_arr[idx],
                    limit_str = R_Format.dollarFormat(limit_value);
                custom_selector_dom += "\n                    <option data-page=\"custom_limit_selector\"\n                      value=\"limit_".concat(limit_value, "\"\n                    >").concat(limit_str, "</option>\n                  ");
              }

              document.getElementById('bondCustomLimitDropdown').innerHTML = "\n                  <option value=\"nothing\" class=\"placeholder\">Limits</option>\n                  ".concat(custom_selector_dom, "\n                  <option data-page=\"05a-bondinfo\">Enter Custom Amount</option>\n                ");
              Rapyd.Core.Selectors.dropDown("#bondCustomLimitDropdown");
              R_SpaSys.spaHistory(event.target, "05e-bondinfo");
            } else {
              R_SpaSys.spaHistory(event.target, "05a-bondinfo");
            }
          } else {
            // DOM MANIPULATION
            _bondinfo.limit_selected = _bond_db.limits[0];
            var dollar_limit = R_Format.dollarFormat(_bondinfo.limit_selected);
            document.getElementById("bond_selected_info").innerHTML = "\n                ".concat(dollar_limit, " -\n                ").concat(_bond_db.state_full, "\n                ").concat(_bond_db.description, "<br>\n                ").concat(_bond_db.obligee.name_alternate != '' ? _bond_db.obligee.name_alternate : _bond_db.obligee.name, "\n              ");

            if (_bond_db.is_generic) {
              R_SpaSys.spaHistory(event.target, "05b-bondinfo");
            } else {
              if (document.getElementById('page-00-common-bond')) {
                _self.setHeaders("bond_want_confirmation");

                if (Rapyd.props.loggedIn) R_SpaSys.spaHistory(event.target, "08a-principalcheck");else R_SpaSys.spaHistory(event.target, "09a-basicinfo");
              } else {
                R_SpaSys.spaHistory(event.target, "06a-bondselect");
              }
            }
          }
        }, function () {
          Rapyd.Core.Selectors.dropDown("#bondLimitDropdown");
          R_Format.selectRestriction(document.getElementById("bond_custom_limit_input"), "dollar");

          if (document.getElementById('bond_custom_limit_input')) {
            document.getElementById('bond_custom_limit_input').setAttribute("autocomplete", "autocomplete_off_hack_");
          }
        });
      }, 0);
    },
    dataFetchBondQuote: function dataFetchBondQuote(event) {
      var pickQuote = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var fetch_url = "/api/bondquote/fetch/".concat(_props.policy_id);
      var template = ["bondquotelist_wrap", "bondquotelist_selector"];
      Rapyd.Core.Ajax.renderViewAJAX(fetch_url, "theme_com::bondquote.ui.00-bondquote-list", template, function (data) {
        _props.bond_quotes = data;
      }, function () {
        if (_props.bond_quotes.length === 0 || _props.bond_quotes.length === "undefined" || _bond_db.auto_kickout) {
          setTimeout(function () {
            document.getElementById("spa-arrow-prev").style.display = "none";
          }, 0);
          R_SpaSys.spaHistory(event.target, "14c-summary");
        } else if (event && !pickQuote) {
          R_SpaSys.spaHistory(event.target, "15-quote");
        } else if (event && pickQuote) {
          R_SpaSys.spaHistory(event.target, "22-bondquoteselect");
        }

        var ele = document.getElementById("get_quote_submit");
        ele.classList.remove('loading');
        ele.innerText = 'Get Quote';
        document.getElementById('agent_comm_rate').innerText = parseInt(_props.bond_quotes[0].agent_comm_rate);
      });
    },
    bindGoogleMaps: function bindGoogleMaps() {
      // Business Address
      R_Gmap.formBuilder("cust_biz_street", // ele_street
      "cust_biz_city", // ele_city
      "cust_biz_state", // ele_state
      "cust_biz_zip", // ele_zip
      "cust_biz_street_2", // ele_street2
      "cust_biz_county", // ele_county
      "customer_business_address", // ele_label
      "cust_biz_map" //map_canvas
      ); // Mailing Address

      R_Gmap.formBuilder("cust_mail_street", // ele_street
      "cust_mail_city", // ele_city
      "cust_mail_state", // ele_state
      "cust_mail_zip", // ele_zip
      "cust_mail_street_2", // ele_street2
      "cust_mail_county", // ele_county
      "customer_mailing_address", // ele_label
      "cust_mail_map" // map_canvas
      ); // Delivery Address

      R_Gmap.formBuilder("cust_delivery_street", // ele_street
      "cust_delivery_city", // ele_city
      "cust_delivery_state", // ele_state
      "cust_delivery_zip", // ele_zip
      "cust_delivery_street_2", // ele_street2
      "cust_delivery_county", // ele_county
      "customer_delivery_address", // ele_label
      "cust_delivery_map" // map_canvas
      ); // Principal Address

      R_Gmap.formBuilder("principal_address_street", // ele_street
      "principal_address_city", // ele_city
      "principal_address_state", // ele_state
      "principal_address_zip", // ele_zip
      "principal_address_street_2", // ele_street2
      "principal_address_county", // ele_county
      "principal_data_address", // ele_label
      "principal_address_map" // map_canvas
      ); // Generic Obligee Address

      R_Gmap.formBuilder("generic_obligee_street", // ele_street
      "generic_obligee_city", // ele_city
      "generic_obligee_state", // ele_state
      "generic_obligee_zip", // ele_zip
      "generic_obligee_street_2", // ele_street2
      "generic_obligee_county", // ele_county
      "generic_obligee_address", // ele_label
      "generic_obligee_map" // map_canvas
      ); // Job Location Address

      R_Gmap.formBuilder("job_location_street", // ele_street
      "job_location_city", // ele_city
      "job_location_state", // ele_state
      "job_location_zip", // ele_zip
      "job_location_street_2", // ele_street2
      "job_location_county", // ele_county
      "job_location_address", // ele_label
      "job_location_map" // map_canvas
      );
    },
    fetchCreditReport: function fetchCreditReport() {
      var form_data = new FormData(),
          cur_principal = _principal_info[_props.principal_idx];
      form_data.append("name_last", cur_principal.last_name);
      form_data.append("name_first", cur_principal.first_name);
      form_data.append("ssn", cur_principal.ssn);
      form_data.append("address_street", cur_principal.street);
      form_data.append("address_city", cur_principal.city);
      form_data.append("address_state", cur_principal.state);
      form_data.append("address_zip", cur_principal.zip);
      R_FetchPost("/api/experian/report/fetch", form_data);
    },
    formDatePicker: function formDatePicker() {
      var fieldEle = document.getElementById("datepicker"),
          startDate = new Date(),
          lastDate = new Date();
      startDate = startDate.setMonth(startDate.getMonth() - 1);
      startDate = new Date(startDate);
      lastDate = lastDate.setMonth(lastDate.getMonth() + 2);
      lastDate = new Date(lastDate);
      var picker = new Pikaday({
        field: fieldEle,
        position: "top left",
        bound: false,
        format: "MM/DD/YYYY",
        numberOfMonths: 4,
        defaultDate: startDate,
        minDate: startDate,
        maxDate: lastDate,
        container: document.getElementById("dateContainer"),
        toString: function toString(date, format) {
          var day = date.getDate(),
              month = date.getMonth() + 1,
              year = date.getFullYear();
          if (day < 10) day = "0" + day;
          if (month < 10) month = "0" + month;
          document.getElementById("get_quote_submit").style.display = "block";
          document.getElementById("dateInput").innerText = "Effective Date: ".concat(month, "/").concat(day, "/").concat(year);
          _bondinfo.start_date = "".concat(year, "-").concat(month, "-").concat(day);
          return "".concat(month, "/").concat(day, "/").concat(year);
        },
        parse: function parse(dateString, format) {
          // dateString is the result of `toString` method
          var parts = dateString.split("/"),
              day = parseInt(parts[0], 10),
              month = parseInt(parts[1], 10) - 1,
              year = parseInt(parts[2], 10);
          return new Date(year, month, day);
        }
      });
    },
    prepareEmails: function prepareEmails(form) {
      var type = form.dataset.type,
          first_name = form.querySelector(".first_name"),
          last_name = form.querySelector(".last_name"),
          email = form.querySelector(".email"),
          previewBtn = form.querySelector(".preview-btn"),
          sendBtn = form.querySelector(".continue-button"),
          modal = document.getElementById(previewBtn.dataset.open),
          closeBtn = document.getElementById(previewBtn.dataset.open + "-close"); // Open Modal

      previewBtn.addEventListener("click", function () {
        // User name
        modal.querySelector(".user_name").innerText = first_name.value + " " + last_name.value;

        if (type === "bond-approval") {
          var quotes;

          if (_props.bond_quotes.length) {
            quotes = _props.bond_quotes.map(function (quote) {
              var amount = Number(quote.pay_full_total) + Number(_usersel.fees.broker);
              return "\n                  <tr>\n                    <td>\n                      ".concat(quote.term_years != 0 ? quote.term_years + " Year" : "", "\n                      ").concat(quote.term_months != 0 ? quote.term_months + " Months" : "", "\n                    </td>\n                    <td>").concat(quote.pay_full_total ? amount.toFixed(2) : '', "</td>\n                    <td>\n                      ").concat(quote.pay_install_monthly != "0.00" ? quote.pay_install_monthly : " Not Offered", "\n                    </td>\n                  </tr>\n                ");
            });
          }

          modal.querySelector(".bond_state").innerText = _usersel.state_selected;
          modal.querySelector(".bond_description").innerText = _bond_db.description;
          modal.querySelector(".quotes").innerHTML = "\n              <table>\n                <thead>\n                <tr style=\"text-align: left;\">\n                  <th>Bond Term</th>\n                  <th>Pay-In-Full</th>\n                  <th>Monthly Installments</th>\n                </tr>\n              </thead>\n              <tbody>\n                ".concat(quotes.join(""), "\n              </tbody>\n              </table>\n            ");
        }

        modal.classList.add("show");
        form.classList.add("hide");
      }); // Close Modal

      closeBtn.addEventListener("click", function () {
        modal.classList.remove("show");
        form.classList.remove("hide");
      }); // Send Email

      sendBtn.addEventListener("click", function (event) {
        // Prepare data
        var data = {
          type: type,
          user_name: "".concat(first_name.value, " ").concat(last_name.value),
          user_email: email.value,
          agent_name: "".concat(Rapyd.props.user.name_first, " ").concat(Rapyd.props.user.name_last),
          agent_email: Rapyd.props.user.email,
          agent_address: Rapyd.props.user.address,
          agent_city: Rapyd.props.user.city,
          agent_state: Rapyd.props.user.state.initial,
          agent_zip: Rapyd.props.user.zip,
          agent_phone: R_Format.phoneFormat(Rapyd.props.user.phone)
        }; // Check Validation

        if (!_self.validateEmail(first_name, last_name, email)) return;
        sendBtn.classList.add("loading"); // Check type & submit email

        if (type === "bond-app") _self.storeBondPolicy(function () {
          return _self.sendEmail(data, event);
        });else _self.sendEmail(data, event);
      });
    },
    validateEmail: function validateEmail(first_name, last_name, email) {
      var validate = true,
          reg = /\S+@\S+\.\S+/; // Validate Email

      if (!email.value) {
        email.classList.add("error");
        email.placeholder = "Email required";
        validate = false;
      } else if (!reg.test(email.value.toLowerCase())) {
        email.classList.add("error");
        validate = false;
      } else {
        email.classList.remove("error");
      } // Validate First Name


      if (!first_name.value) {
        first_name.classList.add("error");
        first_name.placeholder = "First name required";
        validate = false;
      } else {
        first_name.classList.remove("error");
      } // Validate Last Name


      if (!last_name.value) {
        last_name.classList.add("error");
        last_name.placeholder = "Last name required";
        validate = false;
      } else {
        last_name.classList.remove("error");
      }

      return validate;
    },
    sendEmail: function sendEmail(data, event) {
      var fees = _usersel.fees.broker;
      data.policy_id = _props.policy_id;
      data.bond_info = _bondinfo;
      data.bond_quotes = _props.bond_quotes;
      data.state = _usersel.state_selected;

      if (fees > 0) {
        data.bond_quotes = data.bond_quotes.map(function (quote) {
          quote.pay_full_total = Number(quote.pay_full_total) + fees;
          return quote;
        });
      }

      R_FetchPost("/api/email/bond", JSON.stringify(data), function (data) {
        event.target.classList.remove("loading");
        R_SpaSys.spaHistory(event.target, "08c-principalcheck");
      });
    },
    submitVin: function submitVin(event) {
      var vin_value = document.getElementById("vehicle_vin_input").value,
          submit_ele = document.getElementById("vehicle_vin_submit"),
          fetch_url = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/".concat(vin_value, "?format=json");
      submit_ele.classList.add("loading");
      fetch(fetch_url).then(function (response) {
        return response.json();
      }).then(function (data) {
        submit_ele.classList.remove("loading"); // PERSIST API DATA

        if (data.Message.includes("Results returned successfully")) {
          _vehicle_info.api_data.type = data.Results[0]["VehicleType"];
          _vehicle_info.api_data.body = data.Results[0]["BodyClass"];
          _vehicle_info.api_data.ncsa = data.Results[0]["NCSABodyType"];
          _vehicle_info.api_data.year = data.Results[0]["ModelYear"];
          _vehicle_info.api_data.make = data.Results[0]["Make"];
          _vehicle_info.api_data.model = data.Results[0]["Model"];
        } else {
          _vehicle_info.api_data = false;
        } // DOM MANIPULATE


        document.getElementById("vehicle_vin_edit").value = vin_value;

        if (_vehicle_info.api_data !== false) {
          document.getElementById("vehicle_year").value = _vehicle_info.api_data.year;
          document.getElementById("vehicle_make").value = _vehicle_info.api_data.make;
          document.getElementById("vehicle_model").value = _vehicle_info.api_data.model; // -- Populate Select

          _self.vehicleBodySelect(_vehicle_info.api_data);
        }

        R_SpaSys.spaHistory(event.target, "11b-vehicle");
      });
    },
    vehicleBodySelect: function vehicleBodySelect(data) {
      var val = data.body.toLowerCase(),
          model = data.model.toLowerCase(),
          select_val;
      if (val.includes("sedan") || val.includes("passenger")) select_val = "4S";else if (val.includes("multi")) select_val = "MP";else if (val.includes("coupe")) select_val = "2S";else if (val.includes("ambulance")) select_val = "AM";else if (val.includes("convertible")) select_val = "CN";else if (val.includes("golf")) select_val = "GC";else if (val.includes("hearse")) select_val = "HR";else if (val.includes("limousine")) select_val = "LM";else if (val.includes("low speed")) select_val = "LS";else if (val.includes("motorcycle")) select_val = "MC";else if (val.includes("moped")) select_val = "MO";else if (val.includes("roadster")) select_val = "RD";else if (val.includes("station")) select_val = "SW";else if (val.includes("tractor")) select_val = "TR";else if (val.includes("truck")) select_val = "TK";else if (val.includes("minivan")) select_val = "VN";else if (model.includes("wrangler")) select_val = "JP";
      if (select_val) document.getElementById("vehicle_body").value = "vehicle_".concat(select_val);
    },
    calcBrokerFee: function calcBrokerFee() {
      var form_data = new FormData();
      form_data.append("policy_id", Rapyd.Page.Bondquote.props.policy_id);
      form_data.append("type", "broker");
      form_data.append("operator", "+");
      form_data.append("amount", _usersel.fees.broker);
      R_FetchPost("/api/bondPolicy/fee/create/ajax", form_data, function (data) {
        _usersel.fees.broker = +data.amount;
      });
    },
    calcDeliveryFee: function calcDeliveryFee(delivery_amount, ele) {
      var form_data = new FormData();
      form_data.append("policy_id", Rapyd.Page.Bondquote.props.policy_id);
      form_data.append("type", "delivery");
      form_data.append("operator", "+");
      form_data.append("amount", delivery_amount);
      R_FetchPost("/api/bondPolicy/fee/create/ajax", form_data, function (data) {
        _usersel.fees.delivery = +data.amount;
        R_SpaSys.spaHistory(ele, "24-delivery-address-select");
      });
    },
    storeBondPolicy: function storeBondPolicy(cb, event) {
      _props.spa_history = R_SpaSys.props.spa.history;
      if (R_Gmap.props.forms.customer_business_address.form_data.street) _props.address_business = R_Gmap.props.forms.customer_business_address.form_data;
      if (R_Gmap.props.forms.customer_mailing_address.form_data.street) _props.address_mailing = R_Gmap.props.forms.customer_mailing_address.form_data;
      if (R_Gmap.props.forms.customer_delivery_address.form_data.street) _props.address_delivery = R_Gmap.props.forms.customer_delivery_address.form_data; // Double check effective date

      if (!_bondinfo.start_date) {
        var now_date = new Date(),
            now_month = (1 + now_date.getMonth()).toString().padStart(2, "0"),
            now_day = now_date.getDate().toString().padStart(2, "0"),
            now_year = now_date.getFullYear();
        _bondinfo.start_date = "".concat(now_year, "-").concat(now_month, "-").concat(now_day);
      }

      R_FetchPost("/api/bondPolicy/ajax-store", JSON.stringify(_props), function (data) {
        if (data.success) _props.policy_id = data.policy_id;
        if (cb) cb(event);else return data.policy_id;
      });
    },
    storeBondPolicyAndQuote: function storeBondPolicyAndQuote(cb, event) {
      _props.spa_history = R_SpaSys.props.spa.history;
      if (R_Gmap.props.forms.customer_business_address.form_data.street) _props.address_business = R_Gmap.props.forms.customer_business_address.form_data;
      if (R_Gmap.props.forms.customer_mailing_address.form_data.street) _props.address_mailing = R_Gmap.props.forms.customer_mailing_address.form_data;
      if (R_Gmap.props.forms.customer_delivery_address.form_data.street) _props.address_delivery = R_Gmap.props.forms.customer_delivery_address.form_data; // Double check effective date

      if (!_bondinfo.start_date) {
        //year-month-day
        var now_date = new Date(),
            now_month = (1 + now_date.getMonth()).toString().padStart(2, "0"),
            now_day = now_date.getDate().toString().padStart(2, "0"),
            now_year = now_date.getFullYear();
        _bondinfo.start_date = now_year + "-" + now_month + "-" + now_day;
      }

      R_FetchPost("/api/bondPolicy/ajax-store-policy-quote", JSON.stringify(_props), function (data) {
        if (data.success) {
          _props.policy_id = data.policy_id;
        }

        if (cb) cb(event);else return data.policy_id;
      });
    },
    selectQuote: function selectQuote(quote_id, quote_type, target) {
      target.style.opacity = .5;
      target.querySelector('.buy-now').innerText = 'Loading';
      target.style.pointerEvents = 'none';
      fetch("/api/bondPolicy/selectQuote/".concat(_props.policy_id, "/").concat(quote_id)).then(function () {
        fetch("/api/bondPolicy/getSelectedQuote/".concat(_props.policy_id)).then(function (res) {
          return res.json();
        }).then(function (data) {
          document.getElementById('payment_total_due').innerText = R_Format.dollarFormat(data.quote[quote_type]);
          document.getElementById('agent_collect_amount').innerText = R_Format.dollarFormat(data.quote[quote_type]);
          _usersel.quote_selected = data.quote;
          _usersel.quote_type = quote_type;
          if (!Rapyd.props.user.authorized) R_SpaSys.spaHistory(target, "27-payment-credit-card");else R_SpaSys.spaHistory(target, "26-payment-type");
          target.style.opacity = 1;
          target.querySelector('.buy-now').innerText = 'Buy Now';
          target.style.pointerEvents = 'unset'; // Forcing delay to not have a glitch in the UI

          setTimeout(function () {
            document.querySelectorAll('.quote_purchase_options_box').forEach(function (ele) {
              ele.classList.add('no_display');
            });
          }, 500);
        });
      });
    },
    createPolicyApplication: function createPolicyApplication() {
      // Broker Fee passing
      if (_usersel.fees.broker) {
        var pass_broker_fee = _usersel.fees.broker;
      } else {
        var pass_broker_fee = 0;
      }

      var form_data = new FormData();
      form_data.append("policy_data", JSON.stringify(_props));
      form_data.append("stepper_broker_fee", pass_broker_fee);
      R_FetchPost("/api/bondPolicy/createapplication/", form_data, function (pdf_data) {
        var a = document.createElement("a"),
            pdfAsDataUri = "data:application/pdf;base64," + pdf_data;
        a.download = _props.policy_id + "_Policy_Application.pdf";
        a.type = "application/pdf";
        a.href = pdfAsDataUri;
        a.click();
      });
    },
    uploadApplication: function uploadApplication(cb) {
      if (!Rapyd.props.user.authorized) {
        document.getElementById("policy_agreement_upload").addEventListener("submit", function (event) {
          event.preventDefault();

          _self.esignApplication();

          R_SpaSys.spaHistory(event.target, "23-delivery-type-select");
        });
      } else {
        document.getElementById("policy_application_file").addEventListener("change", function (event) {
          event.preventDefault();
          var target_form = document.getElementById("policy_application_upload");
          target_form.querySelector("#policy_id").value = _props.policy_id;
          fetch("/api/bondPolicy/fileupload", {
            method: "post",
            credentials: "same-origin",
            body: new FormData(target_form)
          }).then(function (response) {
            return response.text();
          }).then(function (message) {
            target_form.classList.add("upload_sucessful");
            setTimeout(function () {
              R_SpaSys.spaHistory(event.target, "23-delivery-type-select");
            }, 250);
            if (cb) cb(event);else return message;
          })["catch"](function (err) {
            return console.log(err);
          });
        });
      }

      ;
    },
    esignApplication: function esignApplication() {
      var target_form = document.getElementById("policy_agreement_upload");
      target_form.querySelector('input[name="is_esign"]').value = 1;
      R_FetchPost("/api/bondPolicy/agreementupload", new FormData(target_form));
    },
    exitModal: function exitModal() {
      var events_binded = false;
      var cancelBtn = document.getElementById("bond-modal-cancel"),
          saveBtn = document.getElementById("bond-modal-save"),
          modal = document.getElementById("bond-modal-exit"),
          bondName = document.getElementById("bond-modal-bondname"),
          bondLimit = document.getElementById("bond-modal-bondlimit"); //Limit & Bond & Logged In

      bondName.innerText = _bond_db.vanity_name;
      bondLimit.innerText = R_Format.dollarFormat(_bondinfo.limit_selected);
      modal.classList.add("active");

      if (!events_binded) {
        events_binded = !events_binded; // Handle No Remove Event

        cancelBtn.addEventListener("click", function () {
          modal.classList.remove("active");
          Rapyd.Core.Window.props.window_leave_active = false;
        }); // Handle Save

        saveBtn.addEventListener("click", function () {
          _self.storeBondPolicy();

          Rapyd.Core.Window.props.window_leave_active = true;
          modal.classList.remove("active");
        });
      }
    },
    fromAgentProfile: function fromAgentProfile() {
      // If non auth user && no selected agent && no policy redirect to agent finder
      if (!localStorage.getItem("active_page") && !Rapyd.props.loggedIn && !Rapyd.props.bond_policy) {
        window.location = '/agent-finder';
      } // Check if user came from agent profile


      if (localStorage.getItem("active_page") && !Rapyd.props.loggedIn && !Rapyd.props.bond_policy) {
        _props.agent_id = Rapyd.props.user.id;
        _usersel.state_selected = Rapyd.props.user.state.initial;
        _usersel.state_selected_full = Rapyd.props.user.state.full; // Remove Active From All SPA's

        var spa_pages = document.querySelectorAll(".spa-page");
        spa_pages.forEach(function (page) {
          return page.classList.remove("active");
        }); // Set Active & State Full

        document.getElementById(localStorage.getItem("active_page")).classList.add("active");
        document.getElementById("state_guess_value").innerHTML = Rapyd.props.user.state.full;
        document.getElementById("state-full").innerText = Rapyd.props.user.state.full;
        document.getElementById("state-db-term1").innerText = "auto";
        document.getElementById("state-db-term2").innerText = "motor";
        document.getElementById("state-db-city").innerText = localStorage.getItem("agent_city");
        document.getElementById("state-db-city2").innerText = localStorage.getItem("agent_city"); // Remove Spa pages not required

        document.getElementById("page-08a-principalcheck").remove();
        document.getElementById("mailingAddSame").innerText = "Is your mailing address the same?";

        window.onbeforeunload = function () {
          //Wipe Local Storage
          localStorage.removeItem("active_page");
          localStorage.removeItem("agent_city");
          localStorage.removeItem("selected_agent");
        };

        return true;
      } else {
        //Wipe Local Storage
        localStorage.removeItem("active_page");
        localStorage.removeItem("agent_city");
        localStorage.removeItem("selected_agent");
        return false;
      }
    },
    setHeaders: function setHeaders(page) {
      if (page === "bond_want_confirmation") {
        var header_text,
            header_hint,
            input_ele = document.getElementById("biznameinput"),
            license_svg = document.getElementById("driver-license"),
            bond_type = _bond_db.type;
        license_svg.style.display = "none";
        document.getElementById("section_two_welcome_hint").style.display = "none"; // LOST TITLE

        if (bond_type.includes('Lost Title')) {
          // SET HEADER
          document.getElementById('infoBizAdd').innerText = "What is your customer's physical address?";
        } // TYPE ERISA


        if (_bond_db.require_erisa) {
          header_text = "What is the name of the retirement plan?";
          header_hint = "<h1>\n                      Hint: The plan name can be found on your IRS form 5500.<br>\n                      Plan names are usually the name of the company followed by the plan type.<br>\n                      For Example, \"Sample Company, Inc 401(k) Plan.\n                      </h1>";
          input_ele.placeholder = "Retirement Plan name";
          document.getElementById("section_two_welcome_hint").innerHTML = header_hint;
          document.getElementById("section_two_welcome_hint").style.display = "block";
        } // TYPE NOTARY
        else if (bond_type.toLowerCase().indexOf("notary") > -1) {
            header_text = "What is the full name as it will appear on the notary stamp?";
            input_ele.placeholder = "Applicant Full Name";
          } // TYPE LOST TITLE
          else if (_bond_db.require_vehicle) {
              header_text = "Enter the Vehicle Owner's Name, exactly as it appears on their driver's license.";
              input_ele.placeholder = "Vehicle Owner's Name";
              input_ele.setAttribute("data-msg", "Vehicle Owner's Name Required");
              license_svg.style.display = "block";
            } // ALL OTHER TYPES
            else {
                if (Rapyd.props.loggedIn) header_text = "What is your customer's business name?";else header_text = "Great, let's get your quote. What is your business name?";
              }

        document.getElementById("section_two_welcome_header").textContent = header_text;
      } else if (page === 'agent-billing') {
        if (_usersel.quote_type === 'pay_install_down') {
          document.getElementById('agent_billing_credit_card').style.display = 'block';
          document.getElementById('agency_billing_heading').style.fontSize = '21px';
          document.getElementById('first_monthly_payment').innerText = _usersel.quote_selected.pay_install_monthly;
          document.getElementById('first_monthly_due').innerText = _usersel.quote_selected.pay_install_first_payment;
          document.getElementById('agent_billing_monthly').style.display = 'block';
        } else {
          document.getElementById('agency_billing_heading').style.fontSize = '30px';
          document.getElementById('agent_billing_credit_card').style.display = 'none';
          document.getElementById('agent_billing_monthly').style.display = 'none';
        }
      } else if (page === 'agent-direct') {
        if (_usersel.quote_type === 'pay_install_down') {
          document.querySelector('.has-payment').style.display = 'block';
          document.querySelector('.cust-monthly-payment').innerText = _usersel.quote_selected.pay_install_monthly;
          document.querySelector('.cust-monthly-start').innerText = _usersel.quote_selected.pay_install_first_payment;
        } else {
          document.querySelector('.has-payment').style.display = 'none';
          document.querySelector('.cust-monthly-payment').innerText = '';
          document.querySelector('.cust-monthly-start').innerText = '';
        }
      }
    },
    purchasePolicy: function purchasePolicy(event, agent_bill, is_install) {
      event.target.style.pointerEvents = 'none';
      event.target.classList.add('loading');
      event.target.innerHTML = "Issue Bond <span></span><span></span><span></span>";
      var form_data = new FormData();
      form_data.append('policy_id', _props.policy_id);
      form_data.append('is_installment', is_install);
      form_data.append('is_bill_agent', agent_bill);
      form_data.append('quote_id', _usersel.quote_selected.id);

      if (!agent_bill || is_install) {
        var card_data = new FormData();
        card_data.append('policy_id', _props.policy_id);
        card_data.append('billing_description', 'Policy Purchase ' + _props.policy_id); // CONSIDER CHECKING URL TO DETERMINE MERCHANT ID

        card_data.append('merchant_id', 'BX_Policy_' + _props.policy_id);
        var target = $('#agent-expiration-month').val() ? 'agent-' : 'card-';
        card_data.append('billing_exp', $("#".concat(target, "expiration-month")).val() + '/' + $("#".concat(target, "expiration-year")).val().slice(-2));
        if (target == 'agent-') card_data.append('billing_card_number', $('#agent-card-number').val());else card_data.append('billing_card_number', $('#card-number').val());
        R_FetchPost('/api/paymentgateway/authnet/addpaymentmethod', card_data, function (data) {
          if (data != 'error') {
            var bill_data = new FormData();
            bill_data.append('policy_id', _props.policy_id);
            bill_data.append('customer_profile_id', data.profile_id);
            bill_data.append('customer_payment_id', data.billing_id);
            bill_data.append('initial_payment', _usersel.quote_selected[_usersel.quote_type]);
            R_FetchPost('/api/paymentgateway/purchase-singular', bill_data, function (data) {
              if (data != 'error') {
                R_FetchPost('/api/bondPolicy/policy-issue/', form_data, function (data) {
                  if (data == 'no_bondnumber') {
                    document.getElementById("spa-arrow-prev").style.display = "none";
                    R_SpaSys.spaHistory(event.target, "30-issuance-error");
                  } else {
                    $('#issue_payment_receipt').attr('href', "/api/bondPolicy/createpaymentreceipt/".concat(_props.policy_id, "/").concat(data.payment_db_id));
                    $('#issue_payment_receipt').show();

                    _self.form_issuance_pdfs(event);
                  }
                });
              } else {
                document.getElementById("spa-arrow-prev").style.display = "none";
                R_SpaSys.spaHistory(event.target, "30-issuance-error");
              }
            });
          }
        });
      } else {
        R_FetchPost('/api/bondPolicy/policy-issue/', form_data, function (data) {
          if (data == 'no_bondnumber') {
            document.getElementById("spa-arrow-prev").style.display = "none";
            R_SpaSys.spaHistory(event.target, "30-issuance-error");
          } else {
            _self.form_issuance_pdfs(event);
          }
        });
      }
    },
    form_issuance_pdfs: function form_issuance_pdfs(event) {
      $('#page-28-bond-issued-confirmation').append("\n        <iframe\n          style=\"visibility: hidden\"\n          id=\"issuance-form\" class=\"stepper-wrap\"\n          src=\"/pdf/policy-issue?policy=".concat(_props.policy_id, "&bond_stepper=true\"\n        >\n        </iframe>\n        <iframe\n          style=\"visibility: hidden\"\n          id=\"power-of-attorney-form\" class=\"stepper-wrap\"\n          src=\"/pdf/power-of-attorney?policy=").concat(_props.policy_id, "&bond_stepper=true\"\n        >\n        </iframe>\n      ")); // Ensure the PDFs have time to create

      setTimeout(function () {
        if (Rapyd.props.user.authorized) {
          $('#agent_invoice_form').attr('href', "/storage/POLICY_INVOICES/AGENT_INVOICE_".concat(_props.policy_id, ".pdf"));
          $('#agent_invoice_form').show();
        }

        $('#principal_invoice_form').attr('href', "/storage/POLICY_INVOICES/PRINCIPAL_INVOICE_".concat(_props.policy_id, ".pdf"));
        $('#principal_invoice_form').show();
        R_SpaSys.spaHistory(event.target, "28-bond-issued-confirmation");
        document.getElementById('spa-arrow-prev').style.display = 'none';
      }, 1000);
    },
    print_issuance: function print_issuance() {
      window.pdf_issue_form = 1;
      window.pdf_form_creation_complete = false;
      var iframe_src = $('#issuance-form').contents(),
          iframe_src_attny = $('#power-of-attorney-form').contents(),
          doc = new jsPDF('p', 'mm', "letter");
      iframe_src.scrollTop(0);
      iframe_src.find('input').attr('style', 'background: transparent !important');
      iframe_src.find('section').css('margin-top', '-2.5vh');
      iframe_src_attny.find('input').attr('style', 'background: transparent !important');

      _self.generate_pdf_canvas(doc, '#issuance-form');
    },
    generate_pdf_canvas: function generate_pdf_canvas(doc, iframe_src_str) {
      var iframe_src = $(iframe_src_str).contents();
      var canvas_source = iframe_src.find('#pdf-print' + window.pdf_issue_form)[0];
      html2canvas(canvas_source).then(function (created_canvas) {
        var imgData = created_canvas.toDataURL('image/jpeg', 1);
        doc.addImage(imgData, 'JPEG', 0, 0, 215, 279);
        if (iframe_src_str !== '#power-of-attorney-form') doc.addPage();
      }).then(function () {
        window.pdf_issue_form++;
        canvas_source = iframe_src.find('#pdf-print' + window.pdf_issue_form);

        if (canvas_source.length) {
          _self.generate_pdf_canvas(doc, '#issuance-form');
        } else if (iframe_src_str !== '#power-of-attorney-form') {
          window.pdf_issue_form = 1;

          _self.generate_pdf_canvas(doc, '#power-of-attorney-form');
        } else {
          window.pdf_form_creation_complete = true;
        }
      }).then(function () {
        if (window.pdf_form_creation_complete) {
          doc.save("Issued_Policy_".concat(_props.policy_id, ".pdf"));
          var input_style = iframe_src.find('input').attr('style');
          input_style = input_style.replace('background: transparent !important', '');
          iframe_src.find('input').attr('style', input_style);
        }
      });
    }
  };
})();

Rapyd.Page.Bondquote.init();

/***/ }),

/***/ 15:
/*!*****************************************************!*\
  !*** multi ./resources/Public/js/page/bondquote.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/resources/Public/js/page/bondquote.js */"./resources/Public/js/page/bondquote.js");


/***/ })

/******/ });