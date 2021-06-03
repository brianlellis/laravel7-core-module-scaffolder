@php
$small_logo = SettingsSite::get('sitewide_logo_small');
@endphp
<div class="mobile-header">
    <div class="container-fluid">
        <div class="d-flex">
            @if (!auth()->user()->hasrole('Agent'))
                <a aria-label="Hide Sidebar" class="app-sidebar__toggle" data-toggle="sidebar" href="#"></a>
                <!-- sidebar-toggle-->
                <a class="header-brand" href="/admin/dashboard">
                    <img src="{{ asset($small_logo) }}" width="100" class="mt-3" alt="logo">
                </a>
            @endif
            <div class="ml-auto d-flex order-lg-2 header-right-icons">
                <div class="dropdown profile-1">
                    <a href="#" data-toggle="dropdown" class="pr-2 leading-none nav-link d-flex">
                        <span>
                            @php
                                $avatar_path = auth()->user()->avatar ?? \SettingsSite::get('default_user_avatar');
                            @endphp
                            <img src="{{ asset($avatar_path) }}" class="avatar profile-user brround cover-image" style="object-fit: cover;">
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <div class="drop-heading">
                            <div class="text-center">
                                <h5 class="mb-0 text-dark">{{ auth()->user()->full_name() }}</h5>
                                <small class="text-muted">{{ auth()->user()->roles->pluck('name')->first() }}</small>
                            </div>
                        </div>
                        <div class="m-0 dropdown-divider"></div>
                        <a class="dropdown-item" href="/admin/user/profile">
                            <i class="dropdown-icon mdi mdi-account-outline"></i> Profile
                        </a>
                        @if(auth()->user()->usergroup()->first())
                          <div class="m-0 dropdown-divider"></div>
                          <a class="dropdown-item" href="/admin/usergroups/profile?group={{auth()->user()->usergroup()->first()->id}}">
                            <i class="dropdown-icon mdi mdi-human-male-female"></i> My Agency
                          </a>
                          <div class="m-0 dropdown-divider"></div>
                        @endif
                        <a class="dropdown-item" href="/admin/dashboard">
                            <i class="dropdown-icon mdi mdi-view-dashboard"></i> Dashboard
                        </a>
                        <div class="m-0 dropdown-divider"></div>
                        <a class="dropdown-item" href="/">
                            <i class="dropdown-icon mdi mdi-home-outline"></i> Public Homepage
                        </a>
                        <div class="mt-0 dropdown-divider"></div>
                        <a class="dropdown-item" href="{{ route('rapyd.user.logout') }}">
                            <i class="dropdown-icon mdi mdi-logout-variant"></i> Sign out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
