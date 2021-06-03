<style>
  @page {
    margin: 0;
  }

  body {
    padding: .5in;
  }

  .invoice-box {
    font-size: 16px;
    line-height: 24px;
    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    color: #444;
    margin-top: .3in;
  }

  #section_top {
    margin-bottom: 2in;
  }
  #section_top > div {
    display: inline-block;
    width: 49%;
  }

  #section_top > div.one h2 {
    position: absolute;
    top: -113px;
  }

  #section_top > div.one h2 span {
    font-weight: 400;
    font-size: 14pt;
    line-height: 1.5;
  }

  #section_top > div.two {
    text-align: right;
  }

  .invoice-box table {
    width: 100%;
    line-height: inherit;
    text-align: left;
  }

  .invoice-box table td {
    padding: 5px;
    vertical-align: top;
  }

  .invoice-box table tr td:nth-child(2) {
    text-align: right;
  }

  .invoice-box table tr.top table td {
    padding-bottom: 20px;
  }

  .invoice-box table tr.information table td {
    padding-bottom: 40px;
  }

  .invoice-box table tr.heading td {
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
  }

  .invoice-box table tr.details td {
    padding-bottom: 20px;
  }

  .invoice-box table tr.item td {
    border-bottom: 1px solid #eee;
  }

  .invoice-box table tr.item.last td {
    border-bottom: none;
  }

  .invoice-box table tr.total td:nth-child(2) {
    border-top: 2px solid #eee;
    font-weight: bold;
  }

  /* COMMON LAYOUT */
  #section_footer {
    background: #CCC;
    color: #666;
    text-align: center;
    position: fixed;
    bottom: 0.5in;
    width: 100%;
    padding: 10px 0;
    font-size: 11pt;
  }
</style>
