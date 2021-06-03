@php
  $favicon = SettingsSite::get('sitewide_favicon');
@endphp

@if($favicon)
     <link rel="icon" href="{{asset($favicon)}}"/>
@endif

@admin_pagestyle('
dashboard/plugins/bootstrap/css/bootstrap.min,
dashboard/plugins/bootstrap-daterangepicker/daterangepicker,
dashboard/css/style,
dashboard/css/skin-modes,
dashboard/plugins/sidemenu/sidemenu,
dashboard/plugins/scroll-bar/jquery.mCustomScrollbar,
dashboard/iconfonts/font-awesome/css/font-awesome.min,
dashboard/iconfonts/glyphicons/glyphicon,
dashboard/iconfonts/ionicons/ionicons,
dashboard/iconfonts/linearicons/Linearicons,
dashboard/iconfonts/materialdesignicons/materialdesignicons,
dashboard/iconfonts/pe-icon-7-stroke/Pe-icon-7,
dashboard/iconfonts/simple-line-icons/simple-line-icons,
dashboard/iconfonts/themify/themify,
dashboard/iconfonts/typicons/typicons,
dashboard/iconfonts/weathericons/weathericons,
dashboard/iconfonts/feather/feather,
dashboard/plugins/tabs/tabs,
css/admin-style
')

@admin_pagescript(
  'dashboard/js/jquery-3.4.1.min,
  dashboard/plugins/bootstrap/js/bootstrap.bundle.min,
  dashboard/plugins/bootstrap-daterangepicker/moment.min,
  dashboard/plugins/bootstrap-daterangepicker/daterangepicker,
  dashboard/plugins/bootstrap/js/popper.min,
  dashboard/js/circle-progress.min,
  dashboard/plugins/rating/jquery.rating-stars,
  dashboard/plugins/scroll-bar/jquery.mCustomScrollbar.concat.min,
  dashboard/plugins/tabs/jquery.multipurpose_tabcontent,
  dashboard/plugins/tabs/tab-content,
  dashboard/js/sortable,
  dashboard/js/googlemap-autocomplete
')

<style>
  .form-control,
  select.form-control:not([size]):not([multiple]) {
    height: calc(1.5em + .5rem + 2px);
    padding: .25rem .5rem;
    font-size: .825rem;
    line-height: 1.4;
    border-radius: .2rem;
  }
  a.btn,
  button.btn,
  input.btn {
    padding: 3px 15px;
  }
  a.btn-sm,
  button.btn-sm,
  input.btn-sm {
    padding: 5px 15px;
  }
  .card-header {
    padding: .6rem 1.5rem;
    font-size: 1rem;
  }
  h4, .h4 {
    font-size: 1rem;
  }
</style>
{{-- GOOGLE MAP API --}}
{{--
  TODO: NEED TO MOVE GOOGLE MAP API KEY TO ADMIN SETTING.
  NOTE: THIS IS HERE AS IT IS INVOKED IN NEW OBJECTS SO IS NOT DOM DEPENDENT
  NOTE: https://github.com/dericgw/google-address-autocomplete for auto completing admin forms
--}}
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCk9zj0mhrTEGH7vDQxIm_sbKBt_hLpXz0&libraries=places"></script>
@admin_pagescript('dashboard/js/googlemap-autocomplete')

{{-- Chart JS --}}
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>

{{-- DEPENDENCY REQUIRED FOR SAVING TO PDF --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

{{-- RAPYD SYSTEM DEPS --}}
<script>
 var Rapyd = Rapyd || {};
</script>

<script src="/resources/public/js/core/url.js"></script>
<script src="/resources/public/js/core/formatters.js"></script>
<script src="/resources/public/js/core/window.js"></script>
<script src="/resources/public/js/core/google_maps.js"></script>
<script src="/resources/public/js/core/spa-system.js"></script>
<script src="/resources/public/js/core/ajax.js"></script>
<script src="/admin_resources/admin/js/modal.js"></script>

{{-- JAVASCRIPT SITE TOUR DEPENDENCIES --}}
<script src="https://cdn.jsdelivr.net/npm/guidechimp@2/dist/guidechimp.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/guidechimp@2/dist/plugins/placeholders.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/guidechimp@2/dist/guidechimp.min.css">

{{-- IF IN PRODUCTION THEN INLINE ASSETS INSTEAD OF GRABBING RESOURCES --}}
<link rel="stylesheet" href="{{mix("/admin_resources/admin/css/style.css")}}">
@if (strpos('.com',url()->current()) !== false)
  @if(isset($data) && $data['css_asset'])
      <link rel="stylesheet" href="{{mix("/admin_resources/admin/css/{$data['css_asset']}")}}">
  @endif
@elseif(isset($data) && $data['css_asset'])
  {!! PublicScaffold::renderCompileCss($data['css_asset'], $data['page_id']) !!}
@endif
@if (strpos('.com',url()->current()) !== false)
  @if(isset($data) && $data['css_asset'])
      <link rel="stylesheet" href="{{mix("/admin_resources/admin/css/{$data['css_asset']}")}}">
  @endif
@elseif(isset($data) && $data['css_asset'])
  {!! PublicScaffold::renderCompileCss($data['css_asset'], $data['page_id']) !!}
@endif
