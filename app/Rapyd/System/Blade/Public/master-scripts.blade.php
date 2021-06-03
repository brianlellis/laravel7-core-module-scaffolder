{{-- PAGE SPECIFIC JS DEPENDENCIES --}}
@yield('page_bottom_scripts')

{{-- IF IN PRODUCTION THEN INLINE ASSETS INSTEAD OF GRABBING RESOURCES --}}
@php
  $blade_asset = str_replace("_","/",$blade_data['page_id']);
@endphp
@if (strpos('.com',url()->current()) !== false)
  @if($blade_data['js_asset'])
      <script src='{{ mix("{$blade_asset}.js")}}'></script>
  @endif
@else
  {!! PublicScaffold::renderCompileJs("page/", $blade_asset.'.js') !!}
@endif

<script src='{{ mix("/resources/public/js/core/lightbox.js")}}'></script>

{{-- SITEWIDE JAVASCRIPT --}}
@php
  $setting = \SettingsSite::get('sitewide_javascript');
@endphp

@if(str_replace(" ", "", $setting))
  {!! $setting !!}
@endif

{{-- PAGE SPECIFIC FROM DB VALUE --}}
@if($via_pageslug)
  {{-- META INFO --}}
  @if($pageslug_data->page_script)
    <script>
      {!! $pageslug_data->page_script !!}
    </script>
  @endif
@endif
