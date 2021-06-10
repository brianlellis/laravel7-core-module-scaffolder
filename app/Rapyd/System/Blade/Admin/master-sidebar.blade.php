@php
  $small_logo = SettingsSite::get('sitewide_logo_small');
@endphp
@if (auth()->user()->hasanyrole('Underwriter|Developer'))
  <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
  <aside class="app-sidebar">
    {{-- SIDEBAR HEADER --}}
    <div class="side-header">
      <a class="header-brand1" href="@url('admin/dashboard')">
        <img src="@if($small_logo) {{asset($small_logo)}} @else /admin_pub/images/brand/logo.png @endif" class="header-brand-img light-logo1" alt="logo">
      </a>
      <a aria-label="Hide Sidebar" class="app-sidebar__toggle ml-auto" data-toggle="sidebar" href="#"></a>
    </div>
    {!! \RapydCore::admin_menu_build() !!}
  </aside>
@endif
