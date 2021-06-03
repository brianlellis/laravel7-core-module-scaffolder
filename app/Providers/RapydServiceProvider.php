<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

// Models and Observers 
use Rapyd\Observers\BondLibraryObserver;
use Rapyd\Observers\PolicyObserver;

class RapydServiceProvider extends ServiceProvider
{
  /**
   * Register services.
   *
   * @return void
   */
  public function register()
  {
    //
  }

  /**
   * Bootstrap services.
   *
   * @return void
   */
  public function boot()
  {
    // API PASSPORT AUTH
    Passport::routes();

    $app_root = base_path();
    $this->loadViewsFrom($app_root . '/app/Rapyd/System/Blade/Public', 'rapyd_master');
    $this->loadViewsFrom($app_root . '/app/Rapyd/System/Blade/Admin', 'rapyd_admin');

    $this->loadViewsFrom($app_root . '/resources/Public/views/content-wrapper', 'theme_wrapper');
    $this->loadViewsFrom($app_root . '/resources/Public/views/page', 'theme');
    $this->loadViewsFrom($app_root . '/resources/Public/views/layout', 'theme_layout');
    $this->loadViewsFrom($app_root . '/resources/Public/views/components', 'theme_com');
    $this->loadViewsFrom($app_root . '/resources/Admin/views/page', 'theme_admin');

    $this->loadViewsFrom(glob($app_root.'/app/Rapyd/Modules/**/Views/Admin'), 'rapyd_module_admin');
    $this->loadViewsFrom(glob($app_root.'/app/Rapyd/Modules/**/Views/Public'), 'rapyd_module_public');

    $this->loadViewsFrom($app_root . '/app/Rapyd/System/Blade/Mailer', 'rapyd_mailer');
    $this->loadViewsFrom(glob($app_root.'/resources/Mailer'), 'theme_mailer');

    /**
     * CUSTOM BLADE DIRECTIVES
    **/
    include($app_root . '/app/Rapyd/blade_directives.php');

    /**
     * LOAD CONTROLLERS AND HELPERS
    **/
    self::getSystemClasses($app_root);
    self::getSystemMiddleware($app_root);
    self::getModuleClasses($app_root);
    self::getModuleMiddleware($app_root);

    /**
     * LOAD MODELS DEFINED
    **/
    self::getSystemTraits($app_root);
    self::getSystemModels($app_root);
    self::getSystemObservers($app_root);
    self::getModuleTraits($app_root);
    self::getModuleModels($app_root);
    self::getModuleObservers($app_root);

    /** 
     * OBSERVER DECLARATIONS
    **/
    // \Rapyd\Model\BondLibraries::observe(BondLibraryObserver::class);
    // \Rapyd\Model\BondPolicies::observe(PolicyObserver::class);
  }


  /*
   * GET CONTROLLER AND HELPER CLASSES FROM SYSTEM AND MODULES
   */
  protected function getModuleClasses($app_root)
  {
    //REQUIRE ALL DIRECTIVE FILES IN MODULES ALSO
    $module_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/Modules/*', GLOB_ONLYDIR));

    foreach ($module_folders as $folder) {
      $filepath = $app_root. '/app/Rapyd/Modules/'.$folder.'/blade_directives.php';
      if (file_exists($filepath)) {
        include($filepath);
      }

      // load helpers
      $helper_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/Modules/'.$folder.'/Controllers/*.{php}', GLOB_BRACE));

      foreach ($helper_files as $helper_file) {
        require_once $app_root . '/app/Rapyd/Modules/'.$folder.'/Controllers/'.$helper_file;
      }
    }
  }

  protected function getSystemClasses($app_root)
  {
    // REQUIRE ALL RAPYD SYSTEM CONTROLLERS
    $sys_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Controllers/*', GLOB_ONLYDIR));

    foreach ($sys_folders as $folder) {
      // load helpers
      $helper_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/System/Controllers/'.$folder.'/*.{php}', GLOB_BRACE));

      foreach ($helper_files as $helper_file) {
        require_once $app_root . '/app/Rapyd/System/Controllers/'.$folder.'/'.$helper_file;
      }
    }
  }

  protected function getModuleMiddleware($app_root)
  {
    //REQUIRE ALL DIRECTIVE FILES IN MODULES ALSO
    $module_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/Modules/*', GLOB_ONLYDIR));

    foreach ($module_folders as $folder) {
      // load helpers
      $helper_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/Modules/'.$folder.'/Middleware/*.{php}', GLOB_BRACE));

      foreach ($helper_files as $helper_file) {
        require_once $app_root . '/app/Rapyd/Modules/'.$folder.'/Middleware/'.$helper_file;
      }
    }
  }

  protected function getSystemMiddleware($app_root)
  {
    // REQUIRE ALL RAPYD SYSTEM MIDDLEWARE
    $model_files = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Middleware/*.{php}', GLOB_BRACE));

    foreach ($model_files as $model_file) {
      require_once $app_root . '/app/Rapyd/System/Middleware/'.$model_file;
    }

    // FOR NEST FOLDER MIDDLEWARE
    $sys_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Middleware/*', GLOB_ONLYDIR));

    foreach ($sys_folders as $folder) {
      // load helpers
      $nested_model_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/System/Middleware/'.$folder.'/*.{php}', GLOB_BRACE));

      foreach ($nested_model_files as $model_file) {
        require_once $app_root . '/app/Rapyd/System/Middleware/'.$folder.'/'.$model_file;
      }
    }
  }

  /*
   * GET RAPYD DEFINED MODELS FROM SYSTEM AND MODULES
   */
  protected function getModuleTraits($app_root)
  {
    //REQUIRE ALL DIRECTIVE FILES IN MODULES ALSO
    $module_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/Modules/*', GLOB_ONLYDIR));

    foreach ($module_folders as $folder) {
      // load helpers
      $helper_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/Modules/'.$folder.'/Traits/*.{php}', GLOB_BRACE));

      foreach ($helper_files as $helper_file) {
        require_once $app_root . '/app/Rapyd/Modules/'.$folder.'/Traits/'.$helper_file;
      }
    }
  }

  protected function getSystemTraits($app_root)
  {
    // REQUIRE ALL RAPYD SYSTEM MODELS
    $model_files = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Traits/*.{php}', GLOB_BRACE));

    foreach ($model_files as $model_file) {
      require_once $app_root . '/app/Rapyd/System/Traits/'.$model_file;
    }

    // FOR NEST FOLDER MODELS
    $sys_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Traits/*', GLOB_ONLYDIR));

    foreach ($sys_folders as $folder) {
      // load helpers
      $nested_model_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/System/Traits/'.$folder.'/*.{php}', GLOB_BRACE));

      foreach ($nested_model_files as $model_file) {
        require_once $app_root . '/app/Rapyd/System/Traits/'.$folder.'/'.$model_file;
      }
    }
  }

  protected function getModuleObservers($app_root)
  {
    //REQUIRE ALL DIRECTIVE FILES IN MODULES ALSO
    $module_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/Modules/*', GLOB_ONLYDIR));

    foreach ($module_folders as $folder) {
      // load helpers
      $helper_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/Modules/'.$folder.'/Observers/*.{php}', GLOB_BRACE));

      foreach ($helper_files as $helper_file) {
        require_once $app_root . '/app/Rapyd/Modules/'.$folder.'/Observers/'.$helper_file;
      }
    }
  }
  protected function getSystemObservers($app_root)
  {
    // REQUIRE ALL RAPYD SYSTEM MODELS
    $model_files = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Observers/*.{php}', GLOB_BRACE));

    foreach ($model_files as $model_file) {
      require_once $app_root . '/app/Rapyd/System/Observers/'.$model_file;
    }

    // FOR NEST FOLDER MODELS
    $sys_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Observers/*', GLOB_ONLYDIR));

    foreach ($sys_folders as $folder) {
      // load helpers
      $nested_model_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/System/Observers/'.$folder.'/*.{php}', GLOB_BRACE));

      foreach ($nested_model_files as $model_file) {
        require_once $app_root . '/app/Rapyd/System/Observers/'.$folder.'/'.$model_file;
      }
    }
  }

  protected function getModuleModels($app_root)
  {
    //REQUIRE ALL DIRECTIVE FILES IN MODULES ALSO
    $module_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/Modules/*', GLOB_ONLYDIR));

    foreach ($module_folders as $folder) {
      // load helpers
      $helper_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/Modules/'.$folder.'/Models/*.{php}', GLOB_BRACE));

      foreach ($helper_files as $helper_file) {
        require_once $app_root . '/app/Rapyd/Modules/'.$folder.'/Models/'.$helper_file;
      }
    }
  }

  protected function getSystemModels($app_root)
  {
    // REQUIRE ALL RAPYD SYSTEM MODELS
    $model_files = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Models/*.{php}', GLOB_BRACE));

    foreach ($model_files as $model_file) {
      require_once $app_root . '/app/Rapyd/System/Models/'.$model_file;
    }

    // FOR NEST FOLDER MODELS
    $sys_folders = array_map(function ($dir) {
      return basename($dir);
    }, glob($app_root . '/app/Rapyd/System/Models/*', GLOB_ONLYDIR));

    foreach ($sys_folders as $folder) {
      // load helpers
      $nested_model_files = array_map(function ($dir) {
        return basename($dir);
      }, glob($app_root . '/app/Rapyd/System/Models/'.$folder.'/*.{php}', GLOB_BRACE));

      foreach ($nested_model_files as $model_file) {
        require_once $app_root . '/app/Rapyd/System/Models/'.$folder.'/'.$model_file;
      }
    }
  }
}
