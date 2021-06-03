<style>
  @page { margin: 0;}
  body {
    padding: .2in;
  }

  body * {
    font-size: 10pt;
    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif !important;
  }

  .invoice_header {
    padding-top: 0;
    text-align: center;
    font-size: 11pt;
    font-weight: 400;
  }

  .invoice_header span {
    font-weight: 700;
    font-size: 12pt;
  }

  h2 {
    text-decoration: underline;
    text-align: center;
    font-weight: 400;
    margin-bottom: 0;
  }

  #section_header * {
    font-size: 9pt;
  }

  #section_header > div:nth-child(1) {
    position: absolute;
  }

  #section_header > div:nth-child(2) {
    text-align: right;
  }

  /** BUSINESS AND OBLIGEE BOX **/
  #section_business_summary > div {
    display: inline-block;
    width: 49%;
  }
  #section_business_summary .principals {
    display: block;
    margin-top: 10px;
  }
  #section_business_summary {
    border: 1px solid #000;
    border-left: 0;
    border-right: 0;
    padding: 8px 5px 0;
    width: 90%;
    text-align: center;
    margin: auto;
  }
  
  #section_business_summary p {
    margin-bottom: 5px;
    text-decoration: underline;
  }

  #section_top {
    margin-top: .3in;
  }

  #section_top:after,
  #section_top:before {
    clear: both;
  }

  #section_top > div {
    font-size: 9pt;
    float: left;
    width: 24%;
    text-align: center;
  }
  #section_top > div:nth-child(3),
  #section_top > div:nth-child(4) {
    width: 38%;
  }

  #section_invoice_summary {
    padding-top: 20px;
  }

  #section_invoice_summary > div {
    display: inline-block;
  }

  #section_invoice_summary > div:first-child {
    width: 120px;
  }
  #section_invoice_summary > div:last-child {
    width: 300px;
  }

  /** PAYMENT PLAN **/
  .invoice-box table {
    width: 100%;
  }

  .invoice-box table tr.heading td {
    background: #CCC;
    border-bottom: 1px solid #ddd;
    font-size: 9pt;
    padding: 2px 0;
    width: 20%;
    text-align: center;
  }

  .invoice-box table tr.heading td:last-child {
    text-align: right;
    padding-right: 10px;
  }

  .invoice-box table tr.heading td.none,
  .invoice-box table tr.details td.none {
    background: none;
    border: 0;
  }

  .invoice-box table tr.details {
    border-bottom: 1px solid #ddd;
  }

  .invoice-box table tr.details td {
    font-size: 10pt;
    width: 20%;
    border: 1px solid #CCC;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }

  .invoice-box table tr.details td:first-child {
    padding-left: 10px;
  }

  .invoice-box table tr.details td:last-child {
    padding-right: 10px;
    text-align: right;
  }

  /* BOTTOM AMOUNT TABLE */
  .invoice-box table tr.heading.bottom td:nth-child(1),
  .invoice-box table tr.details.bottom td:nth-child(1),
  .invoice-box table tr.heading.bottom td:nth-child(2),
  .invoice-box table tr.details.bottom td:nth-child(2),
  .invoice-box table tr.heading.bottom td:nth-child(3),
  .invoice-box table tr.details.bottom td:nth-child(3) {
    width: 15%;
  }

  .invoice-box table tr.heading.bottom td:nth-child(4),
  .invoice-box table tr.details.bottom td:nth-child(4),
  .invoice-box table tr.heading.bottom td:nth-child(5),
  .invoice-box table tr.details.bottom td:nth-child(5) {
    width: 27%;
  }

  .invoice-box table tr.details.bottom td:nth-child(4) {
    padding-left: 10px;
  }

  /** COMMON LAYOUT **/
  #section_footer {
    background: #CCC;
    color: #666;
    text-align: center;
    position: fixed;
    bottom: 0.5in;
    width: 100%;
    padding: 10px 0;
  }
</style>
