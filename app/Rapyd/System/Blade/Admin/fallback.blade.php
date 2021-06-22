{{-- REQUEST DATA FIRST THEN PASSED BLADE DATA --}}
@php
  if (!Session::get('request_blade_data')) {
    // Policy
    $policy_id  = Request::get('policy_id');
    $policy_key = Request::get('key');
    if ($policy_key) {
      $policy = \m_BondPolicies::where('access_key',$policy_key)->first();
    } elseif ($policy_id) {
      $policy = \m_BondPolicies::find($policy_id);
    } else {
      $policy  = null;
    }

    // Search Info
    if($search_term = Request::get('search')) {
      $search      = new \Swis\Laravel\Fulltext\Search();
      $search_data = $search->runForClass($search_term, \Rapyd\Model\BondLibraries::class);
    } elseif($search_term = Request::get('searchobligee')) {
      $search      = new \Swis\Laravel\Fulltext\Search();
      $search_data = $search->runForClass($search_term, \Rapyd\Model\BondLibraryObligee::class);
    } else {
      $search_data = null;
    }

    // Select Agent
    if ($agent_selected_id = Request::get('agent_selected')) {
      $selected_agent = App\User::find($agent_selected_id);
    } else {
      $selected_agent = $policy->agent ?? null;
      if($selected_agent) {
        $agent_selected_id = $selected_agent->id;
      }
    }

    // Select Bond
    if ($bond_select_id = Request::get('bond_selected')) {
      $selected_bond = \m_BondLibraries::find($bond_select_id);
    } else {
      $selected_bond = $policy->bond ?? null;
      if ($selected_bond) {
        $bond_select_id = $selected_bond->id;
      }
    }

    if ($policy) {
      $policy_action_date = Request::get('policy_action_date');

      if ($policy_action_date) {
        $policy_action_date = \Carbon\Carbon::parse($policy_action_date);
      }

      // POLICY BUSINESS
      $policy_business = \RapydUsergroups::show($policy->business_id);

      // POLICY AGENT AND AGENCY
      if (!$policy_agent = $policy->agent) {
        $policy_agent_id    = \SettingsSite::get('system_policy_default_agent');
        $policy_agent       = \App\User::find($policy_agent_id);
        $default_agency_id  = \SettingsSite::get('system_policy_default_usergroup');
        $policy_agency      = $policy_agent->agency($default_agency_id);
      } elseif (!$policy_agency = $policy_agent->agency()) {
        $default_agency_id  = \SettingsSite::get('system_policy_default_usergroup');
        $policy_agency      = $policy_agent->agency($default_agency_id);
      }

      // POLICY QUOTES
      if ($policy->quotes) {
        $policy_quotes_manual = $policy->quotes->where('is_manual_override',1);
        $policy_quotes_auto   = $policy->quotes->where('is_manual_override',0);
      } else {
        $policy_quotes_manual = null;
        $policy_quotes_auto   = null;
      }

      $request_data = [
        'fallback'              => 'rapyd_admin::fallback',
        'account_summaries'     => ($policy && $policy->invoice) ?
                                    \PolicyAccountBalances::eval_summary_bal($policy, $policy_action_date) :
                                    null,
        'agent_selected_id'     => $agent_selected_id,
        'bond_select_id'        => $bond_select_id ?? null,
        'invoice'               => $policy ? $policy->invoice : null,
        'policy'                => $policy, // RECONSIDER MAKING THIS A COLLECTION
        'policy_action_date'    => $policy_action_date,
        'policy_agency'         => $policy_agency ?? null,
        'policy_agent'          => $policy_agent ?? null,
        'policy_business'       => $policy_business ?? null,
        'policy_last_action'    => $policy ? $policy->latest_policy_action() : null,
        'policy_quotes_auto'    => $policy_quotes_auto,
        'policy_quotes_manual'  => $policy_quotes_manual,
        'search_data'           => $search_data ?? null,
        'search_term'           => $search_term,
        'selected_agent'        => $selected_agent,
        'selected_bond'         => $selected_bond,
        'states'                => \m_BondLibraryState::orderBy('full')->get(),
      ];

      Session::flash('request_blade_data', $request_data);
    } else {
      // Select Bond
      if ($bond_select_id = Request::get('bond_selected')) {
        $selected_bond = \m_BondLibraries::find($bond_select_id);
      }

      $request_data = [
        'fallback'              => 'rapyd_admin::fallback',
        'account_summaries'     => null,
        'agent_selected_id'     => $agent_selected_id,
        'bond_select_id'        => $bond_select_id ?? null,
        'invoice'               => null,
        'policy'                => null,
        'policy_action_date'    => null,
        'policy_agency'         => null,
        'policy_agent'          => null,
        'policy_business'       => null,
        'policy_last_action'    => null,
        'policy_quotes_auto'    => null,
        'policy_quotes_manual'  => null,
        'search_data'           => $search_data ?? null,
        'search_term'           => $search_term,
        'selected_agent'        => $selected_agent,
        'selected_bond'         => $selected_bond ?? null,
        'states'                => \m_BondLibraryState::orderBy('full')->get(),
      ];
    }
  } else {
    $request_data = Session::get('request_blade_data');
  }

  // CMS NEEDS AND PUBLIC TEMPLATE NEEDS
  if ($data ?? false) {
    foreach ($data as $key => $value) {
      $request_data[$key] = $value ?? false;
    }
  }

  if ($inner_content = Session::get('request_inner_content')) {
    $data['inner_content'] = $inner_content;
  }
@endphp

{{-- PRIORITY OF LOAD: 1-Theme, 2-Module, 3-Core System --}}
@php
  $use_public_master = ($data['use_public_master'] ?? false) ? true : false;
@endphp

@if(View::exists('theme_admin::'.$blade_lookup) && !$use_public_master)
  @yield('content', View::make('theme_admin::'.$blade_lookup, $request_data))
@elseif(View::exists('rapyd_module_admin::'.$blade_lookup) && !$use_public_master)
  @yield('content', View::make('rapyd_module_admin::'.$blade_lookup, $request_data))
@elseif(View::exists('rapyd_admin::pages.'.$blade_lookup) && !$use_public_master)
  @yield('content', View::make('rapyd_admin::pages.'.$blade_lookup, $request_data))
@elseif(View::exists('rapyd_admin::'.$blade_lookup) && !$use_public_master)
  @yield('content', View::make('rapyd_admin::'.$blade_lookup, $request_data))
{{-- PUBLIC FACING PAGES --}}
@elseif(View::exists('theme_wrapper::'.$blade_lookup))
  @yield('content', View::make('theme_wrapper::'.$blade_lookup, $request_data))
@elseif(View::exists('theme_layout::'.$blade_lookup))
  @yield('content', View::make('theme_layout::'.$blade_lookup, $request_data))
@elseif(View::exists('theme::'.$blade_lookup))
  @yield('content', View::make('theme::'.$blade_lookup, $request_data))
@elseif(View::exists('rapyd_module_public::'.$blade_lookup))
  @yield('content', View::make('rapyd_module_public::'.$blade_lookup, $request_data))
@elseif(View::exists('rapyd_master::'.$blade_lookup))
  @yield('content', View::make('rapyd_master::'.$blade_lookup, $request_data))
@else
  {{-- DONT CHANGE PAGE ID IF PARTIAL FAILED --}}
  @if (strpos($blade_lookup, '.partials') == false)
    <script>document.body.id = 'page_404';</script>
  @endif
  @yield('content', View::make('rapyd_admin::pages.404'))
@endif
