@php
  $history = \m_PolicyHistory::all_pinned();
@endphp

<div class="page-header {{ auth()->user()->hasrole('Agent') ? 'agent-page-header' : null }}">
  <div class="d-flex align-items-center justify-content-between {{ auth()->user()->hasrole('Agent') ? 'w-100' : 'w-90' }}">
    <h1 class="page-title">{{$page_title}}</h1>

    @if(!auth()->user()->hasanyrole('Underwriter|Developer|Normal User') && auth()->user()->agency())
      <div class="mt-2">
        <a href="@url('bondquote')" class="ml-2 btn btn-success"><i class="mdi mdi-message-draw"></i> New Quote</a>
        @if(auth()->user()->usergroup())
          <a
            href="@url('admin/usergroups/profile?group='){{auth()->user()->usergroup()->id}}&tab=Policies"
            class="ml-2 btn btn-primary"
          >
            <i class="mr-1 mdi mdi-clock"></i>
            Quote / Bond History
          </a>
        @endif
      </div>
    @endif
  </div>
  <div id="navbar_right_dropdown" class="ml-auto d-flex header-right-icons header-search-icon">
    {{-- NOTIFICATIONS --}}
    {{-- FIX GREP (ASSIGN PROPER USER ROLES/PERMISSIONS) --}}
    @if(auth()->user()->hasanyrole('Developer') || auth()->user()->agency())
      <div class="dropdown d-sm-flex notifications">
        <a class="nav-link icon" data-toggle="dropdown">
          <i class="fe fe-bell"></i>
          @if($history->count())
            <span class="nav-unread badge badge-success badge-pill">{{$history->count()}}</span>
          @endif
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
          <div class="notifications-menu">
            @foreach($history as $note)
              <a
                class="pb-3 dropdown-item d-flex"
                target="_blank"
                href="@url('admin/bond/policies/edit?policy_id='){{$note->policy_id}}"
              >
                <div>
                  <strong>Issue w/ Bond #:{{$note->policy_id}}</strong>
                </div>
              </a>
            @endforeach
          </div>
        </div>
      </div>
    @endif

    {{-- USER PROFILE --}}
    <div class="dropdown d-md-flex profile-1">
      <a href="#" data-toggle="dropdown" class="pr-2 leading-none nav-link d-flex">
        <span>
            @useravatar
        </span>
      </a>
      <div id="dropdown_menu_wrapper" class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
        <div class="drop-heading">
          <div class="text-center">
            <h5 class="mb-0 text-dark">{{auth()->user()->full_name()}}</h5>
            <small class="text-muted">{{auth()->user()->roles->pluck('name')->first()}}</small>
          </div>
        </div>
        <div class="m-0 dropdown-divider"></div>
        <a class="dropdown-item" href="@url('admin/user/profile')">
          <i class="dropdown-icon mdi mdi-account-outline"></i> Profile
        </a>
        @if(auth()->user()->usergroup())
          <div class="m-0 dropdown-divider"></div>
          <a class="dropdown-item" href="@url('admin/usergroups/profile?group='){{auth()->user()->usergroup()->id}}">
            <i class="dropdown-icon mdi mdi-human-male-female"></i> My Agency
          </a>
        @endif
        <div class="m-0 dropdown-divider"></div>
        <a class="dropdown-item" href="@url('admin/dashboard')">
          <i class="dropdown-icon mdi mdi-view-dashboard"></i> Dashboard
        </a>
        <div class="m-0 dropdown-divider"></div>
        <a class="dropdown-item" href="/">
          <i class="dropdown-icon mdi mdi-home-outline"></i> Public Homepage
        </a>
        <div class="mt-0 dropdown-divider"></div>
        <div class="dropdown-item" style="cursor: pointer;" onclick="(function(){guideChimp.start();})();">
          <i class="dropdown-icon mdi mdi-help"></i> See Page Guide
        </div>
        <div class="mt-0 dropdown-divider"></div>
        <a class="dropdown-item" href="{{route('rapyd.user.logout')}}">
          <i class="dropdown-icon mdi mdi-logout-variant"></i> Sign out
        </a>
      </div>
    </div>
  </div>
</div>
