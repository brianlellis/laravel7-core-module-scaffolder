<?php

namespace App\Providers;

use Carbon\Carbon;
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
        Carbon::setTestNow(Carbon::parse($system_test_time));
      }
    }
}
