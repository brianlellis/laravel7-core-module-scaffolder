@include('rapyd_admin::fallback', [
  'blade_lookup' => 'master-prerender',
  'data' => [
    'blade_data'        => $blade_data ?? false,
    'view_lookup'       => $view_lookup ?? false,
    'use_public_master' => true,
    "via_pageslug"      => $via_pageslug ?? false,
    "via_pageslug_type" => $via_pageslug_type ?? false,
    "pageslug_data"     => $pageslug_data ?? false,
    "default_blog_wrap" => $default_blog_wrap ?? false
  ]
])

<!DOCTYPE html>
<html lang="en">
  @yield('master-head')
  @yield('master-body')
</html>
