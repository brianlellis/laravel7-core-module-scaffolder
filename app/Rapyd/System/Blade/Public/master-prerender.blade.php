@section('master-body')
  @include('rapyd_master::master-messages')
  <body id="page_{{$blade_data['page_id']}}">
    {{-- SESSION SHARING IF LOGGED IN --}}
    @if(auth()->user() && \SettingsSite::get('system_use_sso') == 'on')
      <script>
        (() => {
          var client_id = localStorage.setItem('lizzle_pizzle',"{{$client_id}}"),
              fetch_url = '/api/sessionchecker/'+client_id;

          fetch(fetch_url)
          .then(response => response.text())
          .then(data => {
            console.log(data);
          });
        })();
      </script>
    @endif

    @if(View::exists('theme_layout::public-header'))
      @include('rapyd_admin::fallback', [
        'blade_lookup' => 'public-header',
        'data' => [
          'use_public_master' => true,
          'blade_data'        => $blade_data
        ]
      ])
    @else
      <div style="background: red; color: black; text-align: center; padding: 10px 0;">
        Missing "public-header.blade.php" in $app_root/resources/views <br />
        Turn off header in Admin->Site->Global Settings or add blade file
      </div>
    @endif


    {{-- LOAD CONTENT BODY OF PAGE --}}
    @if($via_pageslug)
      @php
        $content_clean      = preg_replace('/\<\!\-\- wp:html \-\-\>|\<\!\-\- \/wp:html -->/','',$pageslug_data->content_body);
        $compiled_view_data = \RapydCore::blade_from_string($content_clean);
      @endphp
      
      {{-- META INFO --}}
      @if($pageslug_data->meta_desc)
        @section('page_desc')
          {{ $pageslug_data->meta_desc }}
        @endsection
      @endif

      {{-- CONTENT OF PAGE RENDERING --}}
      @if($pageslug_data->content_wrapper_path || ($via_pageslug_type === 'blog' && $default_blog_wrap))
          @include('theme_wrapper::'.$pageslug_data->content_wrapper_path ?? $default_blog_wrap, [
            'inner_content' => $compiled_view_data
          ])
      @else
        {!! $compiled_view_data !!}
      @endif
    @else
      @include('rapyd_admin::fallback', [
          'blade_lookup' => str_replace('theme::', '', $view_lookup),
          'data' => [
            "fallback"              => $fallback ?? false,
            "account_summaries"     => $account_summaries ?? false,
            "agent_selected_id"     => $agent_selected_id ?? false,
            "bond_select_id"        => $bond_select_id ?? false,
            "invoice"               => $invoice ?? false,
            "policy"                => $policy ?? false,
            "policy_action_date"    => $policy_action_date ?? false,
            "policy_agency"         => $policy_agency ?? false,
            "policy_agent"          => $policy_agent ?? false,
            "policy_business"       => $policy_business ?? false,
            "policy_last_action"    => $policy_last_action ?? false,
            "policy_quotes_auto"    => $policy_quotes_auto ?? false,
            "policy_quotes_manual"  => $policy_quotes_manual ?? false,
            "search_data"           => $search_data ?? false,
            "search_term"           => $search_term ?? false,
            "selected_agent"        => $selected_agent ?? false,
            "selected_bond"         => $selected_bond ?? false,
            "states"                => $states ?? false,
            "blade_data"            => $blade_data ?? false,
            "view_lookup"           => $view_lookup ?? false,
            "use_public_master"     => true,
            "via_pageslug"          => $via_pageslug ?? false,
            "via_pageslug_type"     => $via_pageslug_type ?? false,
            "pageslug_data"         => $pageslug_data ?? false,
            "default_blog_wrap"     => $default_blog_wrap ?? false
          ]
        ]) 
    @endif

    @if(View::exists('theme_layout::public-footer'))
      @include('theme_layout::public-footer')
    @else
      <div style="background: red; color: black; text-align: center; padding: 10px 0;">
        Missing "public-footer.blade.php" in $app_root/resources/views <br />
        Turn off footer in Admin->Site->Global Settings or add blade file
      </div>
    @endif

    @include('rapyd_master::master-scripts')
  </body>
@endsection

@section('master-head')
  @include('rapyd_admin::fallback', [
    'blade_lookup' => 'master-head',
    'data' => [
      'blade_data'        => $blade_data,
      'via_pageslug'      => $via_pageslug,
      'pageslug_data'     => $pageslug_data,
      'use_public_master' => true
    ]
  ])
@endsection
