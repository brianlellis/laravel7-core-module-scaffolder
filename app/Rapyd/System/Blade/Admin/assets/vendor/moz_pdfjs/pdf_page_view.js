((_self, _props) => {
  Frostbite.PdfJs = {
    props: {
      page_to_view: 1,
      page_count: 0,
      page_scale: 1.0,
      pages_rendered: [],
      pager: document.getElementById("pager"),
      container: document.getElementById("pageContainer"),
      eventBus: new pdfjsViewer.EventBus(),
      pdf_doc: null,
      bond_form: Frostbite.props.bond_form,
      promises: {
        annotations: []
      }
    },
    init() {
      _self = this;
      _props = _self.props;

      _self.persistenceCheck(_props.bond_form);
    },
    loadPdf(clearContainer) {
      const loading_task = pdfjsLib.getDocument(`/storage/bond_forms/${_props.bond_form}.pdf`);

      loading_task.promise.then(function(pdfDoc) {
        _props.pdf_doc    = pdfDoc;
        _props.page_count = pdfDoc.numPages;

        document.getElementById('pdf_page_count').innerText = _props.page_count;

        // Initial/first page rendering
        if (clearContainer) _props.container.innerHTML = "";
        _self.renderPdfPages();

        // Double check on first run all pages have rendered and 1 displaying
        setTimeout(function() {
          _self.displayPdfPage();
          _self.applyFormFieldLabels(_self.persistBondFormPdf);
        },750);
      });
    },
    renderPdfPages() {
      // RENDER ALL PDF PAGES UPON LOAD
      for(let page_num = 1; page_num <= _props.page_count; page_num++) {
        _props.pdf_doc.getPage(page_num).then(function(pdfPage) {
          // Creating the page view with default parameters.
          var pdfPageView = new pdfjsViewer.PDFPageView({
            container: _props.container,
            id: _props.page_to_view,
            scale: _props.page_scale,
            defaultViewport: pdfPage.getViewport({ scale: _props.page_scale }),
            eventBus: _props.eventBus,
            // We can enable text/annotations layers, if needed
            textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(), // not necessarily needed for printing
            annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
            renderInteractiveForms: true // If not set annotations will not show
          });

          // Associates the actual page with the view, and drawing it
          _props.pages_rendered.push(page_num);
          pdfPageView.setPdfPage(pdfPage);

          pdfPage.getAnnotations().then(annotation => {
            _props.promises.annotations.push(annotation);
          });


          return pdfPageView.draw();
        });
      }

      _self.displayPdfPage();
    },
    displayPdfPage() {
      // SHOW ONLY CURRENT PAGE
      Array.from(_props.container.children).forEach((item, idx) => {
        if (_props.page_to_view === idx+1) {
          document.getElementById('pdf_cur_page').innerText = _props.page_to_view;
          _props.container.children[idx].style.display = 'block';
        } else {
          _props.container.children[idx].style.display = 'none';
        }
      });
    },
    pagination() {
      _props.pager.addEventListener("click", event => {
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
    applyFormFieldLabels(cb) {
      // ASSIGN FORMFIELD IDs BASED ON data-annotation-id
      let form_fields = document.querySelectorAll(".annotationLayer section");

      for (var idx = _props.promises.annotations.length; idx--;) { // reverse
        for (var idx2 = _props.promises.annotations[idx].length; idx2--;) { // reverse
          let promise_anno    = _props.promises.annotations[idx][idx2],
              promise_anno_id = promise_anno['id'];

          for (var idx3 = form_fields.length; idx3--;) { // reverse
            let form_field = form_fields[idx3],
                anno_id    = form_field.getAttribute('data-annotation-id');

            // REMOVE INPUTS
            form_field.innerHTML = "";

            if (promise_anno_id === anno_id) {
              // CORRECT THE TRANSFORM MATRIX
              _self.correctTranfsormMatrixes(form_field);

              // APPLY FORM FIELD LABEL
              form_field.id = `formfield_${promise_anno.fieldName}`
            }
          }
        }
      }

      cb();
    },
    correctTranfsormMatrixes(ele) {
      ele.style.transform = "";
      ele.style.transformOrigin = "";

      let calc_left = parseFloat(ele.style.left.replace('px','')),
          calc_top  = parseFloat(ele.style.top.replace('px','')),
          calc_h    = parseFloat(ele.style.height.replace('px','')),
          calc_w    = parseFloat(ele.style.width.replace('px',''));

      ele.style.left   = `${(calc_left * 1.33333)}px`;
      ele.style.top    = `${(calc_top * 1.33333)}px`;
      ele.style.height = `${(calc_h * 1.33333)}px`;
      ele.style.width  = `${(calc_w * 1.33333)}px`;
      return true;
    },
    persistenceCheck(bond_form) {
      fetch(`/api/core-pdf/bondform/persistencecheck/${bond_form}`)
        .then(response => response.text())
        .then(pdf_persisted => {
          _props.pdf_persisted = pdf_persisted;

          // if (pdf_persisted === 'true') {
          //   fetch(`/api/core-pdf/bondform/gethtml/${bond_form}`).then(response => response.json())
          //   .then(bondform_data => {
          //     document.getElementById("pageContainer").innerHTML = bondform_data.pdfjs_html;
          //     _props.page_count = bondform_data.pdfjs_pagecount;

          //     document.getElementById('pdf_page_count').innerText = _props.page_count;
          //     document.getElementById('pdf_cur_page').innerText = _props.page_to_view;
          //   });
          // } else {
          //   _self.loadPdf();
          // }
          _self.loadPdf();
          _self.pagination();
        });
    },
    persistBondFormPdf() {
      if (_props.pdf_persisted === 'true') return; // IF PDF PERSISTED DO NOTHING

      // Remove CanvasLayer
      var canvas = document.querySelectorAll(".canvasWrapper");
      [].forEach.call(canvas, function(el) { el.remove(); });

      // FORM PDF DATA
      let form_data = new FormData();

      fetch('/api/ajaxview/gettoken').then(response => response.text())
        .then(token_data => {
          let pdf_body = _self.cleanPdfHtml();


          form_data.append('bondform_id', _props.bond_form);
          form_data.append('bondform_html', pdf_body);
          form_data.append('bondform_pagecount', _props.page_count);

          fetch('/api/core-pdf/bondform/persist',{
                method: 'post',
                headers: {
                    'X-CSRF-TOKEN': token_data
                },
                body: form_data
          }).then(response => response.text())
            .then(message => {
              console.log(message);
            });
        });
    },
    cleanPdfHtml() {
      let pdf_body = document.getElementById('pageContainer').innerHTML;

      // MUTATION SECTION TAGS WHICH ARE USED AT FIRST FOR ONLY FORM FIELDS
      const reg_section = new RegExp(/<section[\sa-zA-Z\=\-\"\:0-9\;]+id="/, 'g');
      pdf_body = pdf_body.replace(reg_section,'<section class="field" id="');

      // REMOVE ALL CLOSING DIVS
      pdf_body = pdf_body.replace(/<\/div>/g,"");

      // PLACE PAGE BREAKS ACCORDINGLY
      const reg_page = new RegExp(/<div class="page"[\sa-zA-Z\=\-\"\:0-9\;]+>/, 'g');
      let page_break = -1;
      pdf_body = pdf_body.replace(reg_page, function (match) {
        page_break++;
        return (page_break) ? '<div class="page_break"></div>' : '';
      });

      // REMOVE EOC DIVS
      pdf_body = pdf_body.replace(/<div class="endOfContent">/gi,'');

      // REMOVE LOADING ICON DIV
      pdf_body = pdf_body.replace(/<div class="loadingIcon">/g,'');

      // REMOVE TEXT AND ANNOTATION LAYER DIVS
      const reg_anno = new RegExp(/<div class="annotationLayer[\sa-zA-Z\=\"\:0-9\;]+>/, 'g'),
            reg_text = new RegExp(/<div class="textLayer[\sa-zA-Z\=\"\:0-9\;]+>/, 'g');

      pdf_body = pdf_body.replace(reg_anno,'');
      pdf_body = pdf_body.replace(reg_text,'');

      // TURN ALL SPANS INTO SECTIONS
      pdf_body = pdf_body.replace(/<span/g,"<section");
      pdf_body = pdf_body.replace(/<\/span/g,"</section");

      // TURN ALL WHITESPACE IN SECTIONS INTO HTML ENTITY CODES
      const reg_space = new RegExp(/<section[\sa-zA-Z\=\-\"\:0-9\;\.\(\)]+>[\sa-zA-Z\=\-\"\:0-9\;\.]+/, 'g');
      pdf_body = pdf_body.replace(reg_space, function (match) {
        let eval_str = match.split('">');

        eval_str[1] = eval_str[1].replace(/\s/g,"&nbsp;");

        return `${eval_str[0]}">${eval_str[1]}`;
      });

      return pdf_body;
    }
  };
})();

Frostbite.PdfJs.init();
