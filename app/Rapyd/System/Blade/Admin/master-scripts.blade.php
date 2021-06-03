{{-- BASE DASHBOARD DEPENDENCIES --}}
@admin_pagescript('dashboard/js/custom, js/admin, dashboard/plugins/sidemenu/sidemenu')

{{-- IF IN PRODUCTION THEN INLINE ASSETS INSTEAD OF GRABBING RESOURCES --}}
@if (strpos('.com',url()->current()) !== false)
  @if(Session::get('rapyd_blade_data')['js_asset'])
      <script src='{{ mix("/js/page/{Session::get('rapyd_blade_data')['page_id']}.js")}}'></script>
  @endif
@else
  {!! PublicScaffold::renderCompileJs(Session::get('rapyd_blade_data')['js_asset'], Session::get('rapyd_blade_data')['page_id']) !!}
@endif


<script>
  document.querySelectorAll('.phone').forEach(function(ele) {
    Rapyd.Core.Formatters.restrictPhone(ele);
  });
</script>
