<ul id="usergroup-completion">
    <div id="spa-arrow-prev"></div>
    <li class="spa-page active" id="page-01-welcome">
        @include($fallback, ['blade_lookup' => 'dashboard_assets.components.usergroup.step_1'])
    </li>
    <li class="spa-page" id="page-step-2">
        @include($fallback, [ 'blade_lookup' => 'dashboard_assets.components.usergroup.step_2'])
    </li>
    <li class="spa-page" id="page-step-3">
        @include($fallback, [ 'blade_lookup' => 'dashboard_assets.components.usergroup.step_3'])
    </li>
</ul>

<script src="/admin_resources/admin/js/usergroup-completion.js"></script>
