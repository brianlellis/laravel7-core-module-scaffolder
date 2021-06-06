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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/core/google_maps.js":
/*!*************************************************!*\
  !*** ./resources/Public/js/core/google_maps.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Rapyd.Core = Rapyd.Core || {};

(function (_self, _props) {
  return Rapyd.Core.GoogleMap = {
    props: {
      forms: {}
    },
    init: function init() {
      _self = this;
      _props = _self.props;
    },
    formBuilder: function formBuilder(ele_street, ele_city, ele_state, ele_zip, ele_street2, ele_county, ele_label, use_map) {
      var form_label = ele_label ? ele_label : 'form_' + Math.floor(Math.random() * 111);
      _props.forms[form_label] = {
        form_data: {
          street: null,
          street_2: null,
          city: null,
          state: null,
          zip: null,
          county: null
        }
      }; // Render DOM parts

      _props.forms[form_label]['dom'] = {
        street: document.getElementById(ele_street),
        city: document.getElementById(ele_city),
        state: document.getElementById(ele_state),
        zip: document.getElementById(ele_zip)
      };

      if (ele_county) {
        _props.forms[form_label]['dom']['county'] = document.getElementById(ele_county);
      }

      if (ele_street2) _props.forms[form_label]['dom']['street_2'] = document.getElementById(ele_street2);

      var autoComplete = _self.autoComplete(_props.forms[form_label]['dom']['street']); // Set event to occur if place has change via Google API custom event


      google.maps.event.addListener(autoComplete, 'place_changed', function () {
        var place = autoComplete.getPlace(); // Data of address pulled from Google API

        _self.parsePlace(place, _props.forms[form_label], use_map);
      });

      _self.autoSuggestOff();
    },
    autoComplete: function autoComplete(formField) {
      var autoComplete_obj = new google.maps.places.Autocomplete(formField, {
        types: ["address"],
        componentRestrictions: {
          'country': 'us'
        }
      });
      return autoComplete_obj;
    },
    parsePlace: function parsePlace(place, form_data, use_map) {
      var temp_street, temp_route;
      place.address_components.forEach(function (e) {
        var label = e.types[0];

        if (label === 'street_number') {
          temp_street = e.short_name;
        }

        if (label === 'route') {
          temp_route = e.short_name;
        }

        if (label === 'locality') {
          form_data.dom.city.value = e.short_name;
          form_data.form_data.city = e.short_name;
        }

        if (label === 'administrative_area_level_1') {
          form_data.dom.state.value = e.short_name;
          form_data.form_data.state = e.short_name;
        }

        if (label === 'postal_code') {
          form_data.dom.zip.value = e.short_name;
          form_data.form_data.zip = e.short_name;
        }

        if (label === 'administrative_area_level_2') {
          form_data.dom.county.value = e.short_name.replace(/county|parish/gi, '');
          form_data.form_data.county = e.short_name.replace(/county|parish/gi, '');
        }
      }); // Combine street number and route for complete street address

      if (temp_street && temp_route) {
        form_data.dom.street.value = temp_street + ' ' + temp_route;
        form_data.form_data.street = temp_street + ' ' + temp_route;
      }

      if (use_map && place.formatted_address) {
        _self.mapByAddress(use_map, place.geometry.location.lat(), place.geometry.location.lng());
      }
    },
    mapByAddress: function mapByAddress(ele, passed_lat, passed_lng) {
      var target = document.getElementById(ele),
          lat_lng = new google.maps.LatLng(passed_lat, passed_lng),
          myOptions = {
        zoom: 15,
        center: lat_lng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(target, myOptions);
      var marker = new google.maps.Marker({
        position: lat_lng,
        title: "Address",
        map: map
      });

      if (map) {
        target.style.height = '200px';
      } else {
        target.style.height = '0px';
      }
    },
    createMap: function createMap(ele, lat, lng, zoom) {
      var myLatlng = new google.maps.LatLng(Number(lat), Number(lng));
      var mapOptions = {
        zoom: zoom,
        center: myLatlng
      };
      var map = new google.maps.Map(document.querySelector(ele), mapOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        title: ""
      }); // To add the marker to the map, call setMap();

      marker.setMap(map);
    },
    autoSuggestOff: function autoSuggestOff() {
      setTimeout(function () {
        var inputs = document.querySelectorAll('input.pac-target-input');
        inputs.forEach(function (input) {
          return input.setAttribute("autocomplete", "autocomplete_off_hack_");
        });
      }, 1000);
    }
  };
})();

Rapyd.Core.GoogleMap.init();

/***/ }),

/***/ 8:
/*!*******************************************************!*\
  !*** multi ./resources/Public/js/core/google_maps.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/core/google_maps.js */"./resources/Public/js/core/google_maps.js");


/***/ })

/******/ });