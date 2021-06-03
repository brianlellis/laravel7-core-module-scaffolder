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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Public/js/page/delete.js":
/*!********************************************!*\
  !*** ./resources/Public/js/page/delete.js ***!
  \********************************************/
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
  var lat = '';
  var lng = '';
  if ($('#category_id').length > 0) Store_locator.category_id = $('#category_id').val();
  if ($('#max_distance').length > 0) Store_locator.max_distance = $('#max_distance').val();

  if ($('#address').length > 0 && $('#address').val() != '') {
    var address = $('#address').val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      address: address
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latLng = String(results[0].geometry.location);
        latLng = latLng.substr(1);
        var pos = strpos(latLng, ',');
        lat = latLng.substr(0, pos);
        var pos2 = strpos(latLng, ')');
        latLng = latLng.substr(0, pos2);
        lng = latLng.substr(pos + 2); //alert(results[0].geometry.location);

        Store_locator.lat = lat;
        Store_locator.lng = lng;
        init_locations2();
      }
    });
  } else {
    init_locations2(); // if(Store_locator.autodetect_location=='1') detectLocation();
    // else init_locations2();
  }
} //Execute Second on Locator Load


function init_locations2() {
  init_map();
  display_locations();
  display_locations_list();
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
jQuery(document).on('click', '#store_locator_next', function (event) {
  event.preventDefault();
  $('#sl_pagination_loading').html(img_loading);
  Store_locator.page_number = Store_locator.page_number + 1;
  display_locations_list(); //resizeMap('100%', 460);

  $('#sl_streetview').hide();

  if (Store_locator.map_all_stores != 1) {
    display_locations();
    clearLocations();
  }
});
jQuery(document).on('click', '#store_locator_previous', function (event) {
  event.preventDefault();
  $('#sl_pagination_loading').html(img_loading);
  Store_locator.page_number = Store_locator.page_number - 1;
  display_locations_list(); //resizeMap('100%', 460);

  $('#sl_streetview').hide();

  if (Store_locator.map_all_stores != 1) {
    display_locations();
    clearLocations();
  }
});

function clearLocations() {
  for (var i = 0; i < markersIds.length; i++) {
    if (markersIds[i] > 0) markers[markersIds[i]].setMap(null);
  }

  markersIds = [];
}

function set_current_location_marker() {
  if (Store_locator.current_lat != '' && Store_locator.current_lng != '') {
    var latlng = new google.maps.LatLng(parseFloat(Store_locator.current_lat), parseFloat(Store_locator.current_lng));
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      latLng: latlng
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          var address = results[0].formatted_address;
          var marker_text = '<b>Current location</b><br/>' + address;
          if (Store_locator.streetview_display == 1) marker_text += '<br/><a href="#" id="displayStreetViewBtn">Street View</a>';
          createMarker({
            latlng: latlng,
            lat: Store_locator.current_lat,
            lng: Store_locator.current_lng,
            html: marker_text,
            icon: Store_locator.marker_icon_current
          });
          $('#sl_current_location').html('<div class="store_locator_current_location"><b>Your current location:</b> ' + address + '</div>');
        } else {//alert("No results found");
        }
      } else {//alert("Geocoder failed due to: " + status);
        }
    });
  }
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

function display_locations_list() {
  console.log(Store_locator);
  $.ajax({
    type: 'GET',
    url: '/api/core-storelocator/store-list/' + JSON.stringify(Store_locator),
    dataType: 'json',
    success: function success(msg) {
      $('#sl_pagination_loading').html('');
      $('#sl_sidebar').html(msg.sidebar);
      $('.sl_pagination').html(msg.pagination);
      if (msg.nb_stores == 0) $('#sl_sidebar').hide();else $('#sl_sidebar').show();
    }
  });
}

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

function display_locations() {
  $.ajax({
    type: 'GET',
    url: '/api/core-storelocator/stores/' + JSON.stringify(Store_locator),
    dataType: 'json',
    success: function success(msg) {
      console.log(msg);
      var locations = msg.locations;
      var markersContent = msg.markersContent;
      var bounds = new google.maps.LatLngBounds(); //Current location

      set_current_location_marker();

      for (var i = 0; i < locations.length; i++) {
        var name = locations[i]['name'];
        var address = locations[i]['address'];
        var distance = parseFloat(locations[i]['distance']);
        var latlng = new google.maps.LatLng(parseFloat(locations[i]['latitude']), parseFloat(locations[i]['longitude']));
        createMarker({
          latlng: latlng,
          lat: locations[i]['latitude'],
          lng: locations[i]['longitude'],
          html: markersContent[i],
          id: locations[i]['id']
        });
        bounds.extend(latlng);
      }

      if (locations.length > 1) {
        map.fitBounds(bounds);
      } else {
        map.setCenter(bounds.getCenter());
        map.setZoom(15);
      }
    }
  });
}

/***/ }),

/***/ 16:
/*!**************************************************!*\
  !*** multi ./resources/Public/js/page/delete.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/resources/Public/js/page/delete.js */"./resources/Public/js/page/delete.js");


/***/ })

/******/ });