# Rapyd

# INSTALLATION SETUP
    $ composer install
    $ php artisan rapyd:theme:install
    $ php artisan rapyd:module

Composer packages have been installed for which the system is dependent upon prior to upgrading.  

## Resources directory is ignored in this repo as the resources is considered a theme directory of the application in contrast to containing code which the system is dependent upon to operate.

# MODIFIED CORE LARAVEL FILES FOR MODULARIZATION
 * app/Exceptions/Handler.php
 * app/Http/Kernel.php
 * app/Console/Kernel.php
 * app/Providers/RouteServiceProvider.php
 * config/app.php
 * config/database.php
 * routes/web.php

# MODIFIED CORE LARAVEL FILES FOR FE DEPENDENCIES
 * webpack.mix.js

# FILES WHICH MAY BE MOVED IN FUTURE DATE
 * app/User.php __May be placed in Module/Users__

# ADDED DIRECTORIES TO CORE LARAVEL
 * app/Rapyd
 * app/Rapyd/Modules
 * app/Rapyd/System

System and Modules directories have different intents. Whereas the views in the modules automatically route to a view the System Blade directories (Admin/Public) are meant high-order blade functions to facilitate the routing. The Resources directory will eventually be migrated into modules.

# PERFORMANCE TESTING
## DO NOT COMMIT PERFORMANCE DEPENDENCIES TO CODE!!!!
https://github.com/jkocik/laravel-profiler
https://superuser.com/questions/383580/how-to-install-autoconf-automake-and-related-tools-on-mac-os-x-from-source

# HTML BASE FOR ADMIN SCAFFOLDING
## Vlogh 
### https://themeforest.net/item/volgh-admin-dashboard-html-template/24716170


# RESERVED BLADE KEYWORDS IN ADMIN
## These should only be declared on the parent/page blade and not the partial templates within the parent. Pass the declarations to the first blade include method and all other partials will be able to use the variables
by magic sharing the fallback blade builder.

    $policy               = passed from fallback blade builder  
    $policy_agent         = passed from fallback blade builder  
    $policy_agency        = passed from fallback blade builder  
    $policy_business      = passed from fallback blade builder  
    $policies             = passed from fallback blade builder  
    $policy_quotes_auto   = passed from fallback blade builder  
    $policy_quotes_manual = passed from fallback blade builder  
    $invoice              = passed from fallback blade builder  
    $states               = passed from fallback blade builder  
    $search_term          = passed from fallback blade builder  
    $search_data          = passed from fallback blade builder  
    $selected_bond        = passed from fallback blade builder  

    $inner_content        = cms info passed to page  

    $fallback = simple string path normalizer for the fallback method of blades
    Example: @include($fallback, ['blade_lookup' => '{$path}.tab_pricing'])

# TROUBLESHOOTING
## Make sure to always place blade partials into a partial directory. Otherwise if the partial is not found the page id will be changed to 'page_404'


# RESERVED JS OBJECT (PUBLIC PAGES)
    Rapyd.props.loggedIn = boolean;  
      
    Rapyd.props.user = {  
      authorized: obj || false,  
      role:       obj || false,  
      name_first: obj || false,  
      name_last:  obj || false,  
      phone:      obj || false,  
      email:      obj || false,  
      address:    obj || false,  
      city:       obj || false,  
      state:      obj || false,  
      zip:        obj || false  
    };  
      
    Rapyd.props.bond_policy             = obj || false  
    Rapyd.props.bond_policy_quotes      = obj || false  
    Rapyd.props.bond_policy_principals  = obj || false  
    Rapyd.props.policy_stepper_history  = obj || false  
      
    Rapyd.props.state_info = obj || false 
