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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/Modules/User/Resources/Admin/js/usergroups_profile.js":
/*!*************************************************************************!*\
  !*** ./app/Rapyd/Modules/User/Resources/Admin/js/usergroups_profile.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("avatar_file").onchange = function () {
  document.getElementById("avatar_form").submit();
}; // Format Credit Card


var input_credit_card = document.getElementById('billing_card_number');
Rapyd.Core.Formatters.restrictCreditCard(input_credit_card); // Format Epiration Date

var input_exp_date = document.getElementById('billing_exp');
Rapyd.Core.Formatters.restrictExpDate(input_exp_date); // ----
// CODE BLOCK
// ----
// const group = @json($usergroup);

var inputs = document.getElementById('profile').querySelectorAll("input, select, textarea");
var formGroups = document.getElementById('profile').querySelectorAll(".form-group");
var footers = document.getElementById('profile').querySelectorAll(".card-footer");
inputs.forEach(function (input) {
  return input.disabled = true;
});
formGroups.forEach(function (group) {
  return group.classList.add('view');
});
footers.forEach(function (footer) {
  return footer.style.display = 'none';
});

window.editProfile = function () {
  inputs.forEach(function (input) {
    return input.disabled = !input.disabled;
  });
  formGroups.forEach(function (group) {
    if (group.classList.contains('view')) {
      group.classList.remove('view');
      footers.forEach(function (footer) {
        return footer.style.display = 'block';
      });
    } else {
      group.classList.add('view');
      footers.forEach(function (footer) {
        return footer.style.display = 'none';
      });
    }
  });
};

window.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && document.activeElement === document.getElementById('search_agent_input')) {
    e.stopPropagation();
    e.preventDefault();
  }
});
var old_agent_search = window.location.href.split("?");
document.getElementById("search_agent_input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var search_val = document.getElementById("search_agent_input").value,
        url_string;
    Rapyd.Core.Window.props.window_leave_active = true;

    if (search_val !== "") {
      url_string = old_agent_search[0] + "?group=".concat(group.id, "&agent_search=").concat(encodeURI(search_val));
    } else {
      url_string = old_agent_search[0];
    }

    if (Rapyd.Core.Url.props.params.hasOwnProperty('tab')) {
      url_string += "&tab=".concat(Rapyd.Core.Url.props.params.tab);
    }

    window.location.href = url_string;
  }
});
document.getElementById("search_agent_submit").addEventListener("click", function () {
  var search_val = document.getElementById("search_agent_input").value,
      url_string;
  Rapyd.Core.Window.props.window_leave_active = true;

  if (search_val !== "") {
    url_string = old_agent_search[0] + "?group=".concat(group.id, "&agent_search=").concat(encodeURI(search_val));
  } else {
    url_string = old_agent_search[0];
  }

  if (Rapyd.Core.Url.props.params.hasOwnProperty('tab')) {
    url_string += "&tab=".concat(Rapyd.Core.Url.props.params.tab);
  }

  window.location.href = url_string;
});
Rapyd.Core.GoogleMap.formBuilder("address_street", // ele_street,
"address_city", // ele_city,
"address_state", // ele_state,
"address_zip", // ele_zip,
"address_street_2", // ele_street2,
"address_county", // ele_county
null, // ele_label
null // map_canvas
);

window.remove_user = function () {
  event.preventDefault();
  var group_id = event.target.dataset.groupid,
      user_id = event.target.dataset.userid;
  window.location.href = "/api/usergroup/removeuser/".concat(group_id, "/").concat(user_id);
};

window.get_bank_name = function () {
  var routing_num = document.getElementById("routing_number").value;
  fetch('https://www.routingnumbers.info/api/data.json?rn=' + routing_num).then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById("bank_name").value = data.customer_name;
  });
}; // FUNCTION THAT SETS URL TO REVIEW ON PAGE RELOAD
// BINDED VIA DOM


window.set_active_tab = function (e) {
  Rapyd.Core.Url.props.params.tab = e.dataset.tab;
  history.replaceState(null, null, "?group=".concat(Rapyd.Core.Url.props.params.group, "&tab=").concat(e.dataset.tab));
};

$(document).ready(function () {
  // IF TAB PARAM PRESENT THEN SELECT THAT TAB
  $('.tab_list li').each(function (idx, ele) {
    if (ele.dataset.tab == decodeURI(Rapyd.Core.Url.props.params.tab)) {
      ele.click();
    }
  });
}); // ----
// TOUR CODE
// ----

var tour = [{
  element: '#tab_overview',
  title: 'Profile Overview',
  description: "Here is where you find all the inputted information for your agent profile in the system."
}, {
  element: '#tab_agents',
  title: 'Attached Agents',
  description: 'In this tab you can view your attached agency agents and add new members.'
}, {
  element: '#tab_policies',
  title: 'Review Edit Profile',
  description: "Everything within this sections relates to bond policies, whether pending, quoted, issued, cancelled or renewed. This applies to all policies that were started with any attached agency agent in the group."
}, {
  element: '#tab_payment_methods',
  title: 'Payment Methods',
  description: "All attached payment methods available to the agency are kept here. You can also add new payment methods if need be."
}, {
  element: '#agency_agents_wrapper',
  title: 'Attaching Agents to Agency',
  description: "There are two ways you can attach agents within your agency to Bond Exchange. One way is to search for the agent, by name or email, if they have already registered with the system. The second way is to manually place their information into the system. Note with the second way that the manually attached agent will need to confirm there email which BondExchange sends out upon agent creation."
}, {
  element: '#agency_policies_wrapper',
  title: 'Policies Related to the Agency',
  description: "Any policy created by an agent attached to your agency will show here. You can view the current status of the policy by clicking the 'view' button."
}, {
  element: '#agency_payment_methods_wrapper',
  title: 'Adding Payment Methods',
  description: "Here you will be able to view all currently attached payment methods and you will have the ability to add a new payment method. This can be either via credit card or bank ACH."
}];
GuideChimp.extend(guideChimpPluginPlaceholders, {
  template: '%*%'
});
window.guideChimp = GuideChimp(tour); // CALLBACK ACTIONS FOR SPECIFIC STEPS OF TOUR

window.guideChimp.on('onBeforeChange', function (to, from) {
  if (from.title == 'Payment Methods') {
    $('#tab_agents').click();
  } else if (from.title == 'Attaching Agents to Agency') {
    $('#tab_policies').click();
  } else if (from.title == 'Policies Related to the Agency') {
    $('#tab_payment_methods').click();
  }
});

/***/ }),

/***/ 41:
/*!*******************************************************************************!*\
  !*** multi ./app/Rapyd/Modules/User/Resources/Admin/js/usergroups_profile.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/app/Rapyd/Modules/User/Resources/Admin/js/usergroups_profile.js */"./app/Rapyd/Modules/User/Resources/Admin/js/usergroups_profile.js");


/***/ })

/******/ });