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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Rapyd/Modules/Bond/Resources/Admin/js/agent_view_policy.js":
/*!************************************************************************!*\
  !*** ./app/Rapyd/Modules/Bond/Resources/Admin/js/agent_view_policy.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (_self) {
  Rapyd.Core.AgentViewPolicy = {
    props: {
      policy_id: null
    },
    init: function init() {
      _self = this;
    },
    download_issuance: function download_issuance(policy_id) {
      _self.props.policy_id = policy_id;
      window.pdf_issue_form = 1;
      window.pdf_form_creation_complete = false;
      var iframe_src = $('#issued-policy').contents(),
          iframe_src_attny = $('#power-of-attorney-form').contents(),
          doc = new jsPDF('p', 'mm', "letter");
      iframe_src.scrollTop(0);
      iframe_src.find('input').attr('style', 'background: transparent !important');
      iframe_src_attny.find('input').attr('style', 'background: transparent !important');

      _self.generate_pdf_canvas(doc, '#issued-policy');
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
          _self.generate_pdf_canvas(doc, '#issued-policy');
        } else if (iframe_src_str !== '#power-of-attorney-form') {
          window.pdf_issue_form = 1;

          _self.generate_pdf_canvas(doc, '#power-of-attorney-form');
        } else {
          window.pdf_form_creation_complete = true;
        }
      }).then(function () {
        if (window.pdf_form_creation_complete) {
          doc.save("Issued_Policy_".concat(_self.props.policy_id, ".pdf"));
          var input_style = iframe_src.find('input').attr('style');
          input_style = input_style.replace('background: transparent !important', '');
          iframe_src.find('input').attr('style', input_style);
        }
      });
    }
  };
})();

Rapyd.Core.AgentViewPolicy.init();

/***/ }),

/***/ 20:
/*!******************************************************************************!*\
  !*** multi ./app/Rapyd/Modules/Bond/Resources/Admin/js/agent_view_policy.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd-core/app/Rapyd/Modules/Bond/Resources/Admin/js/agent_view_policy.js */"./app/Rapyd/Modules/Bond/Resources/Admin/js/agent_view_policy.js");


/***/ })

/******/ });