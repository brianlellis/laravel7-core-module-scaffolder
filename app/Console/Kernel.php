<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Console\Application as Artisan;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;

class Kernel extends ConsoleKernel
{
  /**
   * The Artisan commands provided by your application.
   * @var array
   */
  protected $commands = [];

  /**
   * Define the application's command schedule.
   * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
   * @return void
   */
  protected function schedule(Schedule $schedule)
  {
    // $schedule->command('inspire')->hourly();
  }

  /**
   * Register the commands for the application.
   * @return void
   */
  protected function commands()
  {
    $this->load(__DIR__.'/Commands');

    $path = base_path() . '/app/Rapyd/Modules/';
    $module_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($path.'*', GLOB_ONLYDIR));

    foreach($module_folders as $folder) {
      if (\File::isDirectory($path.$folder.'/Commands')) {
        $this->custom_load($path.$folder.'/Commands', $folder);
      }
    }

    require base_path('routes/console.php');
  }

  protected function custom_load($paths,$module)
  {
    $paths = array_unique(Arr::wrap($paths));
    $paths = array_filter($paths, function ($path) { return is_dir($path); });
    if (empty($paths)) { return; }

    $namespace = $this->app->getNamespace();

    foreach ((new Finder)->in($paths)->files() as $command) {
      $command = $namespace.str_replace(
        ['/', '.php'],
        ['\\', ''],
        Str::after($command->getPathname(), realpath(app_path()).DIRECTORY_SEPARATOR)
      );

      if (
        $is_subclass = is_subclass_of($command, \Illuminate\Console\Command::class) &&
        ! (new \ReflectionClass($command))->isAbstract()
      ) {
        Artisan::starting(function ($artisan) use ($command) {
            $artisan->resolve($command);
        });
      }
    }
  }
}
