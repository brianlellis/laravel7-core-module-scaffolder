@php
  $favicon = SettingsSite::get('sitewide_favicon');
@endphp

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  {{-- NOINDEX ON ID PORTIONS OF DETAIL PAGES --}}
  @if (strpos(url()->current(), ".com/admin") !== false)
    <meta name="robots" content="disallow" />
  @endif

  @if($favicon)
       <link rel="icon" href="{{asset($favicon)}}"/>
  @endif

  @if (!empty($__env->yieldContent('page_desc')))
    <meta name="description" content="@yield('page_desc')">
  @else
    <meta name="description" content="">
  @endif

  @if (!empty($__env->yieldContent('page_author')))
    <meta name="author" content="@yield('page_author')">
  @else
    <meta name="author" content="">
  @endif

  @if (!empty($__env->yieldContent('page_title')))
     <title>@yield('page_title')</title>
  @else
      <title>{{$blade_data['page_title']}}</title>
  @endif

  {{-- DEPENDENCY REQUIRED FOR SAVING TO PDF --}}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
  <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

  {{-- IF IN PRODUCTION THEN INLINE ASSETS INSTEAD OF GRABBING RESOURCES --}}
  <link rel="stylesheet" href="{{mix("/resources/public/css/style.css")}}">
  @if (strpos('.com',url()->current()) !== false)
    @if($blade_data['css_asset'])
        <link rel="stylesheet" href="{{mix("/resources/public/css/{$blade_data['css_asset']}")}}">
    @endif
  @else
    {!! PublicScaffold::renderCompileCss($blade_data['css_asset'], $blade_data['page_id']) !!}
  @endif

  <script>
    window.Rapyd =  {
      props: {
        passed_vars: {},
        user: {},
        use_stepper_state: false
      },
      Form:{
        Login:{}
      },
      Page:{
      }
    };
    @guest
      Rapyd.props.loggedIn = false;
    @endguest
    @auth
      Rapyd.props.loggedIn = true;
    @endauth

    //--------- AGENT/USER INFO
    if(localStorage.getItem('selected_agent')) {
        Rapyd.props.user = JSON.parse(localStorage.getItem('selected_agent'));
        Rapyd.props.state_info = {};
        @foreach ($states as $state)
            Rapyd.props.state_info["{{$state->initial}}"] = {
              full:         "{{$state->full}}",
              city:         "{{$state->city}}",
              bond_term:    "{{ $state->bond_term_1 }}",
              bond_term_2:  "{{ $state->bond_term_2 }}"
            };
        @endforeach
    } else {
      @php
        $user_address = \RapydUser::address_by_ip();
      @endphp
      @if(auth()->user())
        Rapyd.props.user = {
          authorized: true,
          role:       "{{auth()->user()->getRoleNames()[0]}}",
          name_first: "{{auth()->user()->name_first ?? ''}}",
          name_last:  "{{auth()->user()->name_last ?? ''}}",
          phone:      "{{auth()->user()->phone_main ?? ''}}",
          email:      "{{auth()->user()->email ?? ''}}",
          address:    "{{auth()->user()->address_street}}",
          city:       "{{auth()->user()->address_city}}",
          state: {
            full:     "{{auth()->user()->state->full ?? ''}}",
            initial:  "{{auth()->user()->state->initial ?? ''}}"
          },
          zip:        "{{auth()->user()->address_zip ?? ''}}"
        };

        @if (!auth()->user()->state)
          $user_address = \RapydUser::address_by_ip();
          @if(isset($user_address['lat']))
            Rapyd.props.user.state.full     = "{{$user_address['regionName'] ?? ''}}";
            Rapyd.props.user.state.initial  = "{{$user_address['region'] ?? ''}}";
            Rapyd.props.user.city           = "{{$user_address['city'] ?? ''}}";
            Rapyd.props.user.zip            = "{{$user_address['zip'] ?? ''}}";
          @endif
        @endif
      @else
        $user_address = \RapydUser::address_by_ip();
        @if(isset($user_address['lat']))
          Rapyd.props.user = {
            authorized: false,
            role:       false,
            name_first: false,
            name_last:  false,
            phone:      false,
            email:      false,
            address:    false,
            city:       "{{$user_address['city'] ?? ''}}",
            state: {
              full:    "{{$user_address['regionName'] ?? ''}}",
              initial: "{{$user_address['region'] ?? ''}}"
            },
            zip:   "{{$user_address['zip'] ?? ''}}"
          };
        @else
          Rapyd.props.user = {
            authorized: false,
            role:       false,
            name_first: false,
            name_last:  false,
            phone:      false,
            email:      false,
            address:    false,
            city:       false,
            state:      false,
            zip:        false
          };
        @endif
      @endif

      // Override if stepper_state param present
      @if(request()->get('stepper_state'))
        $passed_state   = ucwords(str_replace('-',' ',request()->get('stepper_state')));
        $stepper_state  = \m_BondLibraryState::where('full',$passed_state)->first();
        @if($stepper_state)
          Rapyd.props.use_stepper_state = true;
          Rapyd.props.user.state.full     = "{{$stepper_state->full}}";
          Rapyd.props.user.state.initial  = "{{$stepper_state->initial}}";
        @endif
      @endif

      //--------- POLICY INFO
      @if($policy)
        Rapyd.props.bond_policy = @json($policy);
        @if (count($policy->quotes) !== 0)
          Rapyd.props.bond_policy_quotes = @json($policy->quotes);
        @else
          Rapyd.props.bond_policy_quotes = false;
        @endif
        @if(count($policy->principals) !== 0)
          Rapyd.props.bond_policy_principals = @json($policy->principals);
        @else
          Rapyd.props.bond_policy_principals = false;
        @endif
        @if($policy->js_spa_history)
          @php
            $history_arr = explode(',', $policy->js_spa_history);
          @endphp
          Rapyd.props.policy_stepper_history  = @json($history_arr); // Original DB value not necessarily to be SPA History
        @else
          Rapyd.props.policy_stepper_history  = false; // Original DB value not necessarily to be SPA History
        @endif
      @else
        Rapyd.props.bond_policy             = false;
        Rapyd.props.bond_policy_quotes      = false;
        Rapyd.props.bond_policy_principals  = false;
        Rapyd.props.policy_stepper_history  = false; // Original DB value not necessarily to be SPA History
      @endif

      //--------- BOND LIBRARY INFO
      Rapyd.props.state_info = {};
      @foreach ($states as $state)
        Rapyd.props.state_info["{{$state->initial}}"] = {
          full:         "{{$state->full}}",
          city:         "{{$state->city}}",
          bond_term:    "{{ $state->bond_term_1 }}",
          bond_term_2:  "{{ $state->bond_term_2 }}"
        };
      @endforeach

      //--------- SELECTED BOND ID
      @if($bond_ref_id = request()->get('bond_ref_id'))
        Rapyd.props.bond_ref_id = {{$bond_ref_id}};
      @else
        Rapyd.props.bond_ref_id = false;
      @endif
    }
  </script>

  {{-- SITEWIDE CSS --}}
  @php
    $setting       = \SettingsSite::get('sitewide_css');
  @endphp

  @if(str_replace(" ", "", $setting))
    <style>
      {!! $setting !!}
    </style>
  @endif

  {{-- PAGE SPECIFIC FROM DB VALUE --}}
  @if($via_pageslug)
    <link rel="stylesheet" href="{{asset('/admin_pub/vendor/laraberg/css/laraberg.css')}}">

    {{-- PAGE SPECIFIC CSS --}}
    @if($pageslug_data->page_css)
      <style>
        {!! $pageslug_data->page_css !!}
      </style>
    @endif
  @endif
</head>
