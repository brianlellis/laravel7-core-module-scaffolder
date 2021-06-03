# Rapyd

# INSTALLATION SETUP
__$ composer install__  
__$ php artisan rapyd:theme:install__  
__$ php artisan rapyd:module__  


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
