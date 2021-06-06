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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/page/enrollment.js":
/*!************************************************!*\
  !*** ./resources/Public/js/page/enrollment.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self, _props) {
  Rapyd.Page.Enrollment = {
    props: {
      name_first: false,
      name_last: false,
      email: false,
      address_street: false,
      address_street_2: false,
      address_city: false,
      address_state: false,
      address_zip: false,
      phone_main: false,
      business_name: false,
      usergroup: false
    },
    init: function init() {
      _self = this;
      _props = _self.props;
      document.querySelectorAll("#enrollment-main form").forEach(function (form) {
        return form.addEventListener("submit", _self.spaNavigate);
      });
      document.querySelector('#spa-arrow-prev').addEventListener('click', _self.spaNavigate);
      Rapyd.Core.Formatters.selectRestriction(document.querySelector(".custphone-input"), "phone");

      _self.bindGoogleMaps();
    },
    spaNavigate: function spaNavigate(event) {
      event.preventDefault();
      var next = event.target.dataset.page;
      var inputs = event.target.querySelectorAll("input");
      var selects = event.target.querySelectorAll("select");
      console.log(next);
      inputs.forEach(function (input) {
        return _props[input.name] = input.value;
      });
      selects.forEach(function (input) {
        return _props[input.name] = input.value;
      });

      if (next === "02-agency") {
        document.querySelector(".first_name").innerText = _props.name_first;
        Rapyd.Core.SpaSystem.spaHistory(event.target);
      } else if (next === "06-complete") {
        document.getElementById("spa-arrow-prev").style.visibility = "hidden";

        _self.createUser();

        Rapyd.Core.SpaSystem.spaHistory(event.target);
      } else if (next === "07-agency") {
        _self.findAgency(event.target);
      } else if (next === 'is_agency') {
        event.target.dataset.page = '04-email';
        Rapyd.Core.SpaSystem.spaHistory(event.target);
      } else if (next === 'not_agency') {
        _props.usergroup = false;
        event.target.dataset.page = '04-email';
        Rapyd.Core.SpaSystem.spaHistory(event.target);
      } else {
        Rapyd.Core.SpaSystem.spaHistory(event.target);
      }
    },
    bindGoogleMaps: function bindGoogleMaps() {
      Rapyd.Core.GoogleMap.formBuilder("cust_biz_street", // ele_street
      "cust_biz_city", // ele_city
      "cust_biz_state", // ele_state
      "cust_biz_zip", // ele_zip
      "cust_biz_street_2", // ele_street2
      "cust_biz_county", // ele_county
      "customer_business_address", // ele_label
      "cust_biz_map" // map_canvas
      );
    },
    createUser: function createUser() {
      _props.phone_main = _props.phone_main.replace(/\D/g, "");
      fetch("/api/ajaxview/gettoken").then(function (response) {
        return response.text();
      }).then(function (token_data) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-CSRF-TOKEN", token_data);
        var raw = JSON.stringify(_props);
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        fetch("/api/register", requestOptions).then(function (res) {
          return res.json();
        }).then(function (data) {
          return console.log(data);
        });
      });
    },
    findAgency: function findAgency(target) {
      fetch("/api/ajaxview/gettoken").then(function (response) {
        return response.text();
      }).then(function (token_data) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-CSRF-TOKEN", token_data);
        var raw = JSON.stringify(_props);
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        fetch("/api/usergroup/find", requestOptions).then(function (res) {
          return res.json();
        }).then(function (data) {
          if (data.success) {
            _props.usergroup = data.agency.id;
            document.getElementById('agency_name').innerText = data.agency.name;

            if (data.agency.address_street_2) {
              document.getElementById('agency_address_street').innerText = data.agency.address_street + ' ' + data.agency.address_street_2;
            } else {
              document.getElementById('agency_address_street').innerText = data.agency.address_street;
            }

            document.getElementById('agency_address_cityStateZip').innerText = data.agency.address_city + ", " + data.agency.address_state + " " + data.agency.address_zip;
          } else {
            _props.usergroup = false;
            target.dataset.page = '04-email';
          }

          Rapyd.Core.SpaSystem.spaHistory(target);
        });
      });
    }
  };
})();

Rapyd.Page.Enrollment.init();

/***/ }),

/***/ 17:
/*!******************************************************!*\
  !*** multi ./resources/Public/js/page/enrollment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/page/enrollment.js */"./resources/Public/js/page/enrollment.js");


/***/ })

/******/ });