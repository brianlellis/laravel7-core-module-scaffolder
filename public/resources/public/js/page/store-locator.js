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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/page/store-locator.js":
/*!***************************************************!*\
  !*** ./resources/Public/js/page/store-locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var map;
var markers = [];
var markersIds = [];
var infoWindow;
var panorama;
var img_loading = '<img src="./include/graph/icons/ajax-loader.gif">'; //Detect User's Location

function detectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(detectionSuccess, detectionError, {
      maximumAge: Infinity
    });
  }
} //Detection success


function detectionSuccess(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  Store_locator.current_lat = lat;
  Store_locator.current_lng = lng;
  Store_locator.lat = lat;
  Store_locator.lng = lng;
  init_locations2();
} //Detection error


function detectionError(msg) {
  init_locations2();
}

function strpos(haystack, needle, offset) {
  var i = (haystack + '').indexOf(needle, offset || 0);
  return i === -1 ? false : i;
} //Execute First on Page Load


function init_locations() {
  init_locations2();
} //Execute Second on Locator Load


function init_locations2() {
  init_map();
  display_locations(stores);
}

function init_map() {
  map = new google.maps.Map(document.getElementById('sl_map'), {
    zoom: 4,
    mapTypeId: 'roadmap',
    scrollwheel: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  });
  infoWindow = new google.maps.InfoWindow();
}

function init_location(lat, lng, zoom) {
  if (lat === undefined) lat = 40;
  if (lng === undefined) lng = -100;
  if (zoom === undefined) zoom = 4;
  map = new google.maps.Map(document.getElementById('sl_map'), {
    center: new google.maps.LatLng(lat, lng),
    zoom: zoom,
    mapTypeId: 'roadmap',
    //scrollwheel: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  });
}

function setStreetView(latlng) {
  panorama = map.getStreetView();
  panorama.setPosition(latlng);
  panorama.setPov({
    heading: 265,
    zoom: 1,
    pitch: 0
  });
}

jQuery(document).on('click', '.sidebar_entry_btn', function (event) {
  event.preventDefault();
  var id = $(this).attr('data-id');
  var lat = $(this).attr('data-lat');
  var lng = $(this).attr('data-lng');
  var latlng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
  var bounds = new google.maps.LatLngBounds();
  bounds.extend(latlng); //map.setCenter(bounds.getCenter());
  //map.setZoom(15);

  google.maps.event.trigger(markers[id], 'click');
  $('#sl_streetview').show();
  displayStreetView(lat, lng); // var width = '100%';
  // var height = 650;
  //$('#sl_map').animate({width: width, height:height},
  // $('#sl_map').width(width);
  // $('#sl_map').height(height);

  /*
   function() {
     google.maps.event.trigger(map, 'resize');
     map.setCenter(map.getCenter());
   });
   */
  //resizeMap('100%', 230);
});
jQuery(document).on('click', '#showHideSidebarBtn', function (event) {
  event.preventDefault();

  if ($('#sidebar_box').is(':visible')) {
    hideSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  $('#sidebar_box').show();
}

function hideSidebar() {
  $('#sidebar_box').hide();
}

jQuery(document).on('click', '#displayStreetViewBtn', function (event) {
  event.preventDefault();
  panorama.setVisible(true);
});

function createMarker(obj) {
  var latlng = obj.latlng;
  var lat = obj.lat;
  var lng = obj.lng;
  var html = obj.html;
  var icon = obj.icon;
  var display_flag = obj.display_flag;
  var animation = obj.animation;
  var id = obj.id;
  if (latlng == undefined) latlng = '';
  if (lat == undefined) lat = '';
  if (lng == undefined) lng = '';
  if (html == undefined) html = '';
  if (icon == undefined) icon = '';
  if (display_flag == undefined) display_flag = '';
  if (animation == undefined) animation = '';
  if (id == undefined) id = ''; //Default

  if (icon == '') icon = Store_locator.marker_icon;
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    icon: icon,
    animation: google.maps.Animation.DROP
  });
  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
    if (Store_locator.streetview_display == 1) setStreetView(latlng);
    $('#sl_streetview').show();
    displayStreetView(lat, lng); //resizeMap('100%', 230);
  });

  if (display_flag == 1) {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  }

  markers[id] = marker;
  markersIds.push(id);
}

function displayStreetView(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  var panoramaOptions = {
    position: latlng,
    pov: {
      heading: 270,
      pitch: 0,
      zoom: 1
    }
  };
  new google.maps.StreetViewPanorama(document.getElementById('sl_streetview'), panoramaOptions);
}

function resizeMap(width, height) {
  $('#sl_map').animate({
    width: width,
    height: height
  }, function () {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(map.getCenter());
  });
}

function display_locations(stores) {
  var bounds = new google.maps.LatLngBounds();
  stores.data.forEach(function (store) {
    var page_ref = store.page_url_slug ? store.page_url_slug : store.id;
    var div = "<div class=\"store_locator_map_infowindow\">\n                  <br/>".concat(store.address_street, "\n                  <br/>Tel: ").concat(store.phone_main ? store.phone_main : '', "\n                  <br/>").concat(store.email, "\n                  <br/><a class=\"btn btn-primary\" style=\"display: block; margin: 5px 0;\" href=\"/agent/profile/").concat(page_ref, "\">View Agent</a>\n                  <br/>\n                  Get directions:\n                  <a href=\"http://maps.google.com/maps?f=d&amp;z=13&amp;daddr=").concat(store.address_street, "\" target=\"_blank\">To here</a> -\n                  <a href=\"http://maps.google.com/maps?f=d&amp;z=13&amp;saddr=").concat(store.address_street, "\" target=\"_blank\">From here</a>\n                 </div>");
    var latlng = new google.maps.LatLng(parseFloat(store.address_latitude), parseFloat(store.address_longitude));
    createMarker({
      latlng: latlng,
      lat: store.address_latitude,
      lng: store.address_longitude,
      html: div,
      id: store.id
    });
    bounds.extend(latlng);
  });

  if (stores.data.length > 1) {
    map.fitBounds(bounds);
  } else {
    map.setCenter(bounds.getCenter());
    map.setZoom(15);
  }
}

init_locations();

/***/ }),

/***/ 19:
/*!*********************************************************!*\
  !*** multi ./resources/Public/js/page/store-locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/resources/Public/js/page/store-locator.js */"./resources/Public/js/page/store-locator.js");


/***/ })

/******/ });