@section('master-body')
  <body id="page_{{Session::get('rapyd_blade_data')['page_id']}}" class="app sidebar-mini">
    {{-- GLOBAL-LOADER --}}
		<div id="global-loader">
			<img src="/admin_pub/images/loader.svg" class="loader-img" alt="Loader">
		</div>

    {{-- LOAD PAGE --}}
    <div class="page">
			<div class="page-main">
        @include('rapyd_admin::fallback', ['blade_lookup' => 'master-sidebar'])
        @include('rapyd_admin::fallback', ['blade_lookup' => 'master-mobilenav'])

        {{-- CONTENT AREA --}}
        <div 
          class="app-content" 
          @if (!auth()->user()->hasanyrole('Underwriter|Developer')) style="margin-left: 0;" @endif
        >
          <div class="side-app">
            {{-- SITEWIDE MESSAGES --}}
            <div class="row" style="margin-top: 10px">
              <div class="col-sm-12">
                @include('rapyd_admin::master-messages')
              </div>
            </div>

            {{-- PAGE HEADER NAV --}}
            @include('rapyd_admin::master-navbar', ['page_title' => Session::get('rapyd_blade_data')['page_title']])

            {{-- PRIORITY OF LOAD: 1-Theme, 2-Module, 3-Core System --}}
            @include('rapyd_admin::fallback', ['blade_lookup' => Session::get('rapyd_blade_data')['blade_val']])
          </div>
        </div>
      </div>

      @include('rapyd_admin::fallback', ['blade_lookup' => 'master-footer'])
    </div>

    @include('rapyd_admin::fallback', ['blade_lookup' => 'master-scripts'])

    @yield('page_bottom_scripts')
  </body>
@endsection

@section('master-head')
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{Session::get('rapyd_blade_data')['page_title']}}</title>
    @include('rapyd_admin::fallback', ['blade_lookup' => 'master-head'])
  </head>
@endsection
