<?php

use Rapyd\Model\Redirectors;

/*
 * !!! NEVER TOUCH THIS FILE !!!
 */
/**
 * PLACED AT THE TOP TO ALLOW OVERRIDES
 * FIRST COME FIRST SERVE ON ROUTE EVALUATION
 **/
// REQUIRE ALL ROUTES FROM SYSTEM ROUTES DIR
$route_files = array_map(function ($dir) {
    return basename($dir);
}, glob($app_root . '/app/Rapyd/System/Routes/*.{php}', GLOB_BRACE));

foreach ($route_files as $route_file) {
    require_once $app_root . '/app/Rapyd/System/Routes/'.$route_file;
}

//REQUIRE ALL ROUTES FILES IN MODULES ALSO
$folders = array_map(function ($dir) {
    return basename($dir);
}, glob('../app/Rapyd/Modules/*', GLOB_ONLYDIR));

foreach ($folders as $folder) {
  if (file_exists('../app/Rapyd/Modules/'.$folder.'/web.php')) {
      require_once  $app_root.'/app/Rapyd/Modules/'.$folder.'/web.php';
  }
}

//REQUIRE ALL ROUTES FILES IN THEME ALSO
$theme_admin_route_files = array_map(function ($dir) {
    return basename($dir);
}, glob($app_root . '/resources/Admin/routes/*.{php}', GLOB_BRACE));

foreach ($theme_admin_route_files as $route_file) {
    require_once $app_root . '/resources/Admin/routes/'.$route_file;
}

$theme_route_files = array_map(function ($dir) {
    return basename($dir);
}, glob($app_root . '/resources/Public/routes/*.{php}', GLOB_BRACE));

foreach ($theme_route_files as $route_file) {
    require_once $app_root . '/resources/Public/routes/'.$route_file;
}

//---------------  ADMIN
Route::group(['prefix' => 'admin'], function () {
    $cur_uri  = explode('/', url()->current());

    Route::get('{route}', function () {
        \Session::put('rapyd_blade_data',AdminScaffold::getBladeData());
        return view('rapyd_admin::master');
    })->middleware(['auth','verified']);

    // 2 Level Nested Route
    // EX: /admin/route/route_2
    if (array_key_exists(4, $cur_uri)) {
        Route::group(['prefix' => $cur_uri[4]], function () use ($cur_uri) {
            Route::get('{route}', function () {
                \Session::put('rapyd_blade_data',AdminScaffold::getBladeData());
                return view('rapyd_admin::master');
            })->middleware(['auth','verified']);

            // 3 Level Nested Route
            // EX: /admin/route/route_2/route_3
            if (array_key_exists(5, $cur_uri)) {
                Route::group(['prefix' => $cur_uri[5]], function () {
                    Route::get('{route}', function () {
                        \Session::put('rapyd_blade_data',AdminScaffold::getBladeData());
                        return view('rapyd_admin::master');
                    })->middleware(['auth','verified']);
                });
            }
        });
    }
});

//---------------  NON-ADMIN
Route::get('{route}', function () {
    // GET BLADE INFORMATION
    // IMPORTANT WE DO IT HERE TO CONTROL THE HEADER RESPONSE
    // EXAMPLE 404 header response can only be sent server side
    $via_pageslug  = $pageslug_data = $default_blog_wrap = $view_lookup = $via_pageslug_type =false;
    $blade_data    = PublicScaffold::getBladeData();

    // FOR BASE ADMIN NO FORWARD SLASH PATH
    if (strtolower($blade_data['url_path']) === 'admin') {
      if (Auth::user()) {
        return redirect(request()->getSchemeAndHttpHost().'/admin/dashboard');
      } else {
        return redirect(request()->getSchemeAndHttpHost().'/login');
      }
    }

    // CHECK FOR REDIRECTS
    $existing_redirect = RapydRedirector::check_existing_routes($blade_data['url_path']);

    // FORCE REDIRECT IF PRESENT
    if ($existing_redirect) {
      $view_header   = intval($existing_redirect->action);
      return Redirect::to($existing_redirect->target_route, $view_header);
    } else {
      $view_header   = 200;
    }

    // Remove Slug To Check Public Pages
    $without_slug = explode(".",$blade_data['blade_val']);
    array_pop($without_slug);
    $without_slug = implode('.', $without_slug);
    $cms_slug = str_replace(".", "/", $blade_data['blade_val']);

    // LOAD CONTENT BODY OF PAGE
    if(View::exists('rapyd_module_public::'.$blade_data['blade_val'])) {
      $view_lookup = 'theme::'.$blade_data['blade_val'];
    } elseif(View::exists('theme::'.$blade_data['blade_val'])) {
      $view_lookup = 'theme::'.$blade_data['blade_val'];
    } elseif(View::exists('theme::'.$without_slug) && !\m_CmsPage::where('url_slug', $cms_slug)->first()) {
      $view_lookup = 'theme::'.$without_slug;
    } else {
      // Make sure blog post prefix isn't enabled in settings
      $url_prefix = \SettingsSite::get('cms_blog_post_prefix');
      if ($url_prefix && stripos($blade_data['url_path'], $url_prefix) !== false) {
        $url_check = str_replace($url_prefix."/", "", $blade_data['url_path']);

        // Check as a last option if the page is via url_slug in the CMS tables
        // NOTE: 1 - BlogPost, 2 - CMS Page via Laraberg
        $pageslug_data = \Rapyd\Model\CmsBlogPost::where('url_slug', $url_check)->first();
        if ($pageslug_data) {
          // Check for default blog wrap value
          $blog_wrap_check = \DB::table('settings_site')->where('id', 'cms_blog_post_default_wrap')->first();
          if ($blog_wrap_check && $blog_wrap_check->value) {
            $via_pageslug_type = 'blog';
            $default_blog_wrap = \DB::table('cms_content_wrappers')->where('blade_path',$blog_wrap_check->value)->first()->blade_path;
          }
        }
      } elseif ($url_prefix && stripos($blade_data['url_path'], $url_prefix) !== false) {
        $pageslug_data = false;
      } else {
        // Check as a last option if the page is via url_slug in the CMS tables
        // NOTE: 1 - BlogPost, 2 - CMS Page via Laraberg
        $pageslug_data = \Rapyd\Model\CmsBlogPost::where('url_slug', $url_check)->first();
        if ($pageslug_data) {
          // Check for default blog wrap value
          $blog_wrap_check = \DB::table('settings_site')->where('id', 'cms_blog_post_default_wrap')->first();
          if ($blog_wrap_check && $blog_wrap_check->value) {
            $via_pageslug_type = 'blog';
            $default_blog_wrap = \DB::table('cms_content_wrappers')->where('blade_path',$blog_wrap_check->value)->first()->blade_path;
          }
        }
      }

      if (!$pageslug_data) {
        $url_check = $blade_data['url_path'];
        $pageslug_data = \Rapyd\Model\CmsPage::where('url_slug', $url_check)->first();

        // Check for response header override
        if ($pageslug_data && $pageslug_data->header_response_override) {
          $via_pageslug_type = 'page';
          $view_header = $pageslug_data->header_response_override;
        }
      }

      if (
        ($pageslug_data && $pageslug_data->is_published) || 
        ($pageslug_data && Auth::user() && Auth::user()->hasRole('Admin|Developer')) ||
        ($pageslug_data && Auth::user() && $pageslug_data->user_id == Auth::user()->id)
      ) {
        $via_pageslug = true;
      } else {
        // CHECK TO MAKE SURE THERE ISN'T A CMS 404 PAGE CREATED
        $pageslug_data = \Rapyd\Model\CmsPage::where('url_slug', '404')->first();
        if ($pageslug_data) {
          $via_pageslug = true;
        } else {

          if(View::exists('theme::404')) {
            $view_lookup = 'theme::404';
          }
        }

        $view_header = 404;
        $blade_data['page_id'] = '404';
      }
    }

    return response()
            ->view('rapyd_admin::fallback', [
              'blade_lookup'      => 'master', // THIS IS REQUIRED FOR FALLBACK LOOKUP DIFF THAN VIEW_LOOKUP
              'data' => [
                'use_public_master' => true, // BYPASS ADMIN TEMPLATE LOOKUPS
                'blade_data'    => $blade_data, // IF $via_pageslug TRUE May NOT WORK. This is compiled assets, and labeling via backend, also allows for looking up of the view blade files programmatically
                'view_lookup'       => $view_lookup, // Used if $via_pageslug is false
                'via_pageslug'      => $via_pageslug,
                'via_pageslug_type' => $via_pageslug_type,
                'pageslug_data'     => $pageslug_data,
                'default_blog_wrap' => $default_blog_wrap
              ]
            ], $view_header);

})->where('route', '^((?!admin\/).)*$');
