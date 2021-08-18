<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      if (config('app.env') != 'production' && ($system_test_time = config('app.system_test_time'))) {
        $real_time = \Carbon\Carbon::now();
        $test_time = \Carbon\Carbon::parse($system_test_time);

        Carbon::setTestNow($test_time);

        // extend session lifetime so that the current session doesn't expire until the fake current time
        $diff_min = $real_time->diffInMinutes($test_time);
        if ($diff_min > 0) {
            $org_lifetime = Config::get('session.lifetime');
            Config::set('session.lifetime', $diff_min + $org_lifetime);
        }
      }
    }
}
