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

/***/ "./resources/Public/js/vendor/moz_pdfjs/pdf_page_view.js":
/*!***************************************************************!*\
  !*** ./resources/Public/js/vendor/moz_pdfjs/pdf_page_view.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
  * ORDER OF OPERATIONS
  * 1. persistenceCheck (true/false)
  * 2. IF FALSE _self.loadPdf()
      a. renderPdfPages() -- THIS NOTHING TO MUTATE THE DATA
      b. displayPdfPage() -- THIS NOTHING TO MUTATE THE DATA
      c. applyFormFieldLabels() -- !!DOES MUTATES DATA!!
        1. Gets all the form_fields on the page from the annonationLayer (fillable fields)
  *
**/
(function (_self, _props) {
  Rapyd.PdfJs = {
    props: {
      page_to_view: 1,
      page_count: 0,
      page_scale: 1,
      pages_rendered: [],
      pager: document.getElementById("pager"),
      container: document.getElementById("pageContainer"),
      eventBus: new pdfjsViewer.EventBus(),
      pdf_doc: null,
      bond_form: Rapyd.props.bond_form,
      promises: {
        annotations: []
      }
    },
    init: function init() {
      _self = this;
      _props = _self.props; //_self.persistenceCheck(_props.bond_form);

      _self.loadPdf(); //_self.pagination();

    },
    loadPdf: function loadPdf(clearContainer) {
      var loading_task = pdfjsLib.getDocument("/surety_storage/BX_PDFS/".concat(_props.bond_form, ".pdf"));
      loading_task.promise.then(function (pdfDoc) {
        _props.pdf_doc = pdfDoc;
        _props.page_count = pdfDoc.numPages;
        document.getElementById('pdf_page_count').innerText = _props.page_count; // Initial/first page rendering

        if (clearContainer) _props.container.innerHTML = "";

        _self.renderPdfPages(); // Double check on first run all pages have rendered and 1 displaying


        setTimeout(function () {
          _self.displayPdfPage(); //_self.applyFormFieldLabels(_self.persistBondFormPdf); // Breaking the page

        }, 750);
      });
    },
    downloadPDF: function downloadPDF() {},
    renderPdfPages: function renderPdfPages() {
      var _loop = function _loop(page_num) {
        _props.pdf_doc.getPage(page_num).then(function (pdfPage) {
          // Creating the page view with default parameters.
          var pdfPageView = new pdfjsViewer.PDFPageView({
            container: _props.container,
            id: _props.page_to_view,
            scale: _props.page_scale,
            defaultViewport: pdfPage.getViewport(_props.page_scale),
            eventBus: _props.eventBus,
            // We can enable text/annotations layers, if needed
            //textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(), // not necessarily needed for printing
            annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
            renderInteractiveForms: true // If not set annotations will not show

          }); // Associates the actual page with the view, and drawing it

          _props.pages_rendered.push(page_num);

          pdfPageView.setPdfPage(pdfPage); // Get all annotations (fields) on the pdf page
          // pdfPage.getAnnotations().then(annotation => {
          //   _props.promises.annotations.push(annotation);
          // });

          return pdfPageView.draw();
        });
      };

      // RENDER ALL PDF PAGES UPON LOAD
      for (var page_num = 1; page_num <= _props.page_count; page_num++) {
        _loop(page_num);
      }

      _self.displayPdfPage();
    },
    displayPdfPage: function displayPdfPage() {
      // SHOW ONLY CURRENT PAGE
      Array.from(_props.container.children).forEach(function (item, idx) {
        if (_props.page_to_view === idx + 1) {
          document.getElementById('pdf_cur_page').innerText = _props.page_to_view;
          _props.container.children[idx].style.display = 'block';
        } else {
          _props.container.children[idx].style.display = 'none';
        }
      });
    },
    pagination: function pagination() {
      _props.pager.addEventListener("click", function (event) {
        if (event.target.dataset.pager === "prev") {
          if (_props.page_to_view <= 1) return;
          _props.page_to_view--;

          _self.displayPdfPage();
        } else if (event.target.dataset.pager === "next") {
          if (_props.page_to_view >= _props.page_count) return;
          _props.page_to_view++;

          _self.displayPdfPage();
        }
      });
    },
    applyFormFieldLabels: function applyFormFieldLabels(cb) {
      // ASSIGN FORMFIELD IDs BASED ON data-annotation-id
      var form_fields = document.querySelectorAll(".annotationLayer section"); // Reverse loop through all of the annotation groupings as they are always
      // rendered as multi-dimensional arrays
      // annotations: [group1[annonations[]],group2[]]

      for (var idx = _props.promises.annotations.length; idx--;) {
        // reverse
        // Loop through singular grouped annotations
        for (var idx2 = _props.promises.annotations[idx].length; idx2--;) {
          // reverse
          var promise_anno = _props.promises.annotations[idx][idx2],
              promise_anno_id = promise_anno['id']; // Loop through singular annotations within group and get the HTML entity from data

          for (var idx3 = form_fields.length; idx3--;) {
            // reverse
            var form_field = form_fields[idx3],
                anno_id = form_field.getAttribute('data-annotation-id'); // REMOVE INPUTS

            form_field.innerHTML = ""; // RETRIEVES ONLY ACTUAL LABELED FORM FIELDS TO BE FILLED OUT

            if (promise_anno_id === anno_id) {
              console.log(form_fields[idx3]); // APPLY FORM FIELD LABEL

              form_field.id = "formfield_".concat(promise_anno.fieldName); //console.log(form_fields[idx3]);
              // CORRECT THE TRANSFORM MATRIX
              //_self.correctTranfsormMatrixes(form_field);
            }
          }
        }
      }

      cb();
    },
    correctTranfsormMatrixes: function correctTranfsormMatrixes(ele) {
      // 816 x 1056
      ele.style.transform = "";
      ele.style.transformOrigin = "";
      var calc_right = parseFloat(ele.style.right.replace('px', '')),
          calc_top = parseFloat(ele.style.top.replace('px', '')),
          calc_h = parseFloat(ele.style.height.replace('px', '')),
          calc_w = parseFloat(ele.style.width.replace('px', ''));
      ele.style.right = "".concat(calc_right, "pt");
      ele.style.top = "".concat(calc_top, "pt");
      ele.style.height = "".concat(calc_h, "pt");
      ele.style.width = "".concat(calc_w, "pt");
      return true;
    },
    persistenceCheck: function persistenceCheck(bond_form) {
      fetch("/api/core-pdf/bondform/persistencecheck/".concat(bond_form)).then(function (response) {
        return response.text();
      }).then(function (pdf_persisted) {
        _props.pdf_persisted = pdf_persisted; // if (pdf_persisted === 'true') {
        //   fetch(`/api/core-pdf/bondform/gethtml/${bond_form}`).then(response => response.json())
        //     .then(bondform_data => {
        //       document.getElementById("pageContainer").innerHTML = bondform_data.pdfjs_html;
        //       _props.page_count = bondform_data.pdfjs_pagecount;
        //       document.getElementById('pdf_page_count').innerText = _props.page_count;
        //       document.getElementById('pdf_cur_page').innerText = _props.page_to_view;
        //     });
        // } else {
        //   _self.loadPdf();
        // }

        _self.loadPdf();

        _self.pagination();
      });
    },
    persistBondFormPdf: function persistBondFormPdf() {
      if (_props.pdf_persisted === 'true') return; // IF PDF PERSISTED DO NOTHING
      // Remove CanvasLayer

      var canvas = document.querySelectorAll(".canvasWrapper");
      [].forEach.call(canvas, function (el) {
        el.remove();
      });
      fetch('/api/ajaxview/gettoken').then(function (response) {
        return response.text();
      }).then(function (token_data) {
        var pdf_body = _self.cleanPdfHtml();

        fetch("/api/core-pdf/bondform/persist", {
          method: 'post',
          body: JSON.stringify({
            bondform_id: _props.bond_form,
            bondform_html: pdf_body,
            bondform_pagecount: _props.page_count
          }),
          headers: {
            'Content-Type': 'application/json',
            "X-CSRF-Token": token_data
          }
        }).then(function (response) {
          return response.text();
        }).then(function (data) {
          console.log(data); //window.location.reload();
        });
      });
    },
    cleanPdfHtml: function cleanPdfHtml() {
      var pdf_body = document.getElementById('pageContainer').innerHTML;
      console.log(pdf_body); // MUTATION SECTION TAGS WHICH ARE USED AT FIRST FOR ONLY FORM FIELDS

      var reg_section = new RegExp(/<section[\sa-zA-Z\=\-\"\:0-9\;]+id="/, 'g');
      pdf_body = pdf_body.replace(reg_section, '<section class="field" id="'); // REMOVE ALL CLOSING DIVS

      pdf_body = pdf_body.replace(/<\/div>/g, ""); // PLACE PAGE BREAKS ACCORDINGLY

      var reg_page = new RegExp(/<div class="page"[\sa-zA-Z\=\-\"\:0-9\;]+>/, 'g');
      var page_break = -1;
      pdf_body = pdf_body.replace(reg_page, function (match) {
        page_break++;
        return page_break ? '<div class="page_break"></div>' : '';
      }); // REMOVE EOC DIVS

      pdf_body = pdf_body.replace(/<div class="endOfContent">/gi, ''); // REMOVE LOADING ICON DIV

      pdf_body = pdf_body.replace(/<div class="loadingIcon">/g, ''); // REMOVE TEXT AND ANNOTATION LAYER DIVS

      var reg_anno = new RegExp(/<div class="annotationLayer[\sa-zA-Z\=\"\:0-9\;]+>/, 'g'),
          reg_text = new RegExp(/<div class="textLayer[\sa-zA-Z\=\"\:0-9\;]+>/, 'g');
      pdf_body = pdf_body.replace(reg_anno, '');
      pdf_body = pdf_body.replace(reg_text, ''); // TURN ALL SPANS INTO SECTIONS

      pdf_body = pdf_body.replace(/<span/g, "<section");
      pdf_body = pdf_body.replace(/<\/span/g, "</section"); // TURN ALL WHITESPACE IN SECTIONS INTO HTML ENTITY CODES

      var reg_space = new RegExp(/<section[a-zA-Z0-9:="\.\s;\(\)\,\-]+>[\sa-zA-Z\=\-\"\:0-9\;\.]+/, 'g');
      pdf_body = pdf_body.replace(reg_space, function (match) {
        var eval_str = match.split('">');
        eval_str[1] = eval_str[1].replace(/\s/g, "&nbsp;");
        return "".concat(eval_str[0], "\">").concat(eval_str[1]);
      }); // REMOVE ALL TRANSFORM CALLS IN SECTIONS
      //const reg_transform = new RegExp(/(transform: scale[a-zA-Z]\([0-9\.]+\)\;)/, 'g');
      //pdf_body = pdf_body.replace(reg_transform, ' background: none; opacity: 1; position: absolute; color: red;');
      // FORCE LEFT TO 0px
      // REMOVE ALL TRANSFORM CALLS IN SECTIONS
      // const reg_abs_left = new RegExp(/left:[\s0-9\.]+px\;/, 'g');
      // pdf_body = pdf_body.replace(reg_abs_left, 'left: 0;');

      return pdf_body;
    }
  };
})();

Rapyd.PdfJs.init();

/***/ }),

/***/ 20:
/*!*********************************************************************!*\
  !*** multi ./resources/Public/js/vendor/moz_pdfjs/pdf_page_view.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Sites/_LARAVEL_7/rapyd_bx/resources/Public/js/vendor/moz_pdfjs/pdf_page_view.js */"./resources/Public/js/vendor/moz_pdfjs/pdf_page_view.js");


/***/ })

/******/ });