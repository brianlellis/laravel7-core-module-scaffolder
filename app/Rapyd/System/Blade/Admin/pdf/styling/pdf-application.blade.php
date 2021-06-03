<style>
  @page { margin: 0;}
  body {
    padding: .2in;
  }

  body * {
    font-size: 10pt;
    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  }

  #section_top h1 {
    text-align: center;
    font-size: 14pt;
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

  #section_business_summary,
  #section_policy_quotes,
  #section_policy_payment {
    border: 1px solid #000;
    padding: 13px 5px;
  }

  #section_policy_payment {
    padding: 0;
    padding-top: 20px;
    margin-top: -10px;
  }

  #section_policy_payment p {
    margin-bottom: 0;
  }

  #section_policy_payment > div {
    display: inline-block;
    width: 46%;
    padding-left: 2%;
  }

  #section_policy_quotes {
    margin-top: -10px;
    padding-top: 10px;
  }

  .quote_title {
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
  }

  #section_business_summary > div {
    display: inline-block;
    width: 49%;
  }

  #section_policy_quotes .quote_row {
    display: block;
  }

  #section_policy_quotes .quote_row_1 {
    margin-top: 10px;
  }

  #section_policy_quotes .quote_headers:before,
  #section_policy_quotes .quote_headers:after {
    clear: both;
  }

  #section_policy_quotes .quote_row > div,
  #section_policy_quotes .quote_headers > div {
    display: inline-block;
  }

  #section_policy_quotes .quote_headers > div {
    font-weight: 900;
  }

  #section_policy_quotes .quote_headers .quote_term {
    width: 18%;
    padding-left: 2%;
    float: left;
  }

  #section_policy_quotes .quote_headers .quote_pay_in_full {
    width: 25%;
    float: left;
  }

  #section_policy_quotes .quote_headers .quote_installment {
    width: 54%;
    float: left;
  }

  #section_policy_quotes .quote_row .quote_term {
    width: 18%;
    padding-left: 2%;
  }

  #section_policy_quotes .quote_row .quote_pay_in_full {
    width: 20.75%;
    position: relative;
  }

  #section_policy_quotes .quote_row .quote_installment {
    width: 54%;
    margin-top: -3px;
    position: relative;
  }

  #section_policy_quotes .quote_row .quote_pay_in_full:before,
  #section_policy_quotes .quote_row .quote_installment:before {
    width: 12px;
    height: 12px;
    border: 1px solid #000;
    margin-right: 10px;
    margin-top: 3px;
    margin-left: 0;
    float: left;
  }
  #section_policy_quotes .quote_row .quote_installment.not_available:before {
    background: #000;
  }

  #section_policy_quotes .quote_row .quote_pay_in_full.checked:after,
  #section_policy_quotes .quote_row .quote_installment.check:after {
    position: absolute;
    content: 'X';
    top: 2px;
    left: -21px;
  }

  #section_business_summary .principals {
    display: block;
    margin-top: 15px;
  }

  #section_indemnity p {
    font-size: 7pt;
    margin-top: 5px;
  }

  #section_signature .signature_fields {
    width: 100%;
    padding: 0;
    list-style: none;
    margin-top: 10px;
  }

  #section_signature .signature_fields .input_line,
  #section_signature .signature_fields .input_line_2 {
    display: inline-block;
    position: relative;
    border-bottom: 1px solid #000;
    width: 70%;
  }

  #section_signature .signature_fields .input_line_2 {
    width: 29%;
  }

  #section_signature .signature_fields .input_under_defs {
    margin-top: -5px;
  }

  #section_signature .signature_fields .input_under_defs .input_under_esig {
    color: #999;
    float: right;
    margin-right: 30%;
  }

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
