<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\User;
use Rapyd\Model\BondLibraries;

class BondQuoteTest extends DuskTestCase
{
  protected static $quote_path;
  protected static $logged_in;
  protected static $bond_info;
  protected static $js_prop   = 'Rapyd.Page.Bondquote.props';
  protected static $fill_info = [
    'delivery_standard' => 'no',
    'state_select'      => 'NC',
    'agent_id'          => 108, // David Gonsalves
    'business'          => [
      'name'    => 'TextBusiness',
      'years'   => 5,
      'phone'   => 1231231234,
      'entity'  => 'soleprop',
      'address' => [
        'street'  => '10389 Paper Birch Dr',
        'city'    => 'Charlotte',
        'state'   => 'NC',
        'zip'     => 28215
      ]
    ],
    'principal' => [
      'email'           => 'test@test.com',
      'mail_addy_same'  => true,
      'name_first'      => 'Dora',
      'name_last'       => 'Carol',
      'ssn'             => 666455262
    ],
    'vehicle'     => [
      //TestVIN: JN1BY1AR4BM372590 vehicleType: Passenger, vehicleBody: Sedan
      //TestVIN: 1HTSDAAN0WH566508 vehicleType: Truck
      //TestVIN: KNDJT2A60D7758380 vehicleType: MPV
      //TestVIN: 1FUYSDYB4VP782935 vehicleType: Truck - Tractor
      'vin'     => '5XYKT4A27BG158596'
    ],
    'credit_card' => [
      'number'  => '4111111111111111',
      'month'   => 3,
      'year'    => 2023
    ]
  ];

  /**
   * Passing path variable
   * QUOTE_PATH=value php artisan dusk;
  **/
  public function testStart()
  {
    if(!isset($_SERVER['QUOTE_PATH'])) {
      \RapydCommand::output(
        "Test requires quote path. Ex. $ QUOTE_PATH=value php artisan dusk;",
        "white",
        "red"
      );
      \RapydCommand::output("Can modify with colon separators. Modifiers are","red");
      \RapydCommand::output(
        ":auth\n:noinfo\n:reqinfo\n:reqcredit\n:state-{state initial}\n:vehicle\n:erisa\n:dishonesty\n:job",
        "red"
      );
      \RapydCommand::output("\nExample: QUOTE_PATH=state-NC:auth:vehicle","red");
      //\RapydCommand::output("Options:\npath-local\npath-state\npath-fed\n\n","red");

      die();
    } else {
      self::$quote_path = $_SERVER['QUOTE_PATH'];

      // Check for state path
      foreach (explode(':',self::$quote_path) as $value) {
        if (strpos($value, 'state-') !== false) {
          self::$fill_info['state_select'] = explode('-', $value)[1];
        }
      }
    }


    $this->browse(function (Browser $browser) {
      self::login_check($browser);

      $browser->visit('/bondquote');

      if ($browser->element('#page-00-common-bond.active')) {
        $browser->click('#page-00-common-bond.active button.no');
      }
      $browser->assertPresent('#page-01-welcome.active');

      if (
        strpos(self::$quote_path, 'path-local') !== false ||
        strpos(self::$quote_path, 'path-state') !== false ||
        strpos(self::$quote_path, 'path-fed') !== false
      ) {
        if(strpos(self::$quote_path, 'nogov') !== false) {
          $browser
            ->click('#page-01-welcome button.no')
            ->waitFor('#page-02a-government.active');

          self::government_no($browser);
        } elseif(strpos(self::$quote_path, 'gov') !== false) {
          $browser
            ->click('#page-01-welcome button.no')
            ->waitFor('#page-02a-government.active');

          self::government_yes($browser);
        } 
      }  else {
        $browser
            ->click('#page-01-welcome button.yes');

        self::state_selector($browser);
        self::autocomplete_eval($browser);
        self::determine_bond_limit_custom($browser);        
      }     
    });
  }


  protected function login_check(Browser $browser)
  {
    if(strrpos(self::$quote_path, 'auth') !== false) {
      $user       = User::find(999999999);
      $role_name  = $user->roles->first()->name;

      $browser
        ->loginAs(User::find(999999999))
        ->assertAuthenticatedAs(User::find(999999999));

      \RapydCommand::output("LOGGED IN AS ROLE: {$role_name}","green");
      self::$logged_in = true;
    } else {
      \RapydCommand::output(
        "NOT LOGGED IN. TO LOG IN PASS AUTH. Example: QUOTE_PATH={path...}:auth",
        "white",
        "red"
      );
      self::$logged_in = false;
    }
  }

  protected function autocomplete_eval(Browser $browser)
  {
    if (strpos(self::$quote_path,'reqcredit') !== false) {
      $search      = 'Motor Vehicle Dealer';
      $bypass_term = true;
    } elseif (strpos(self::$quote_path,'vehicle') !== false) {
      $term = BondLibraries::where('require_vehicle',1)
                ->whereHas('get_state', function($q) {
                  $q->where('initial',self::$fill_info['state_select']);
                })->first()->description;
    } elseif (strpos(self::$quote_path,'erisa') !== false) {
      $term = BondLibraries::where('require_erisa',1)
                ->whereHas('get_state', function($q) {
                  $q->where('initial',self::$fill_info['state_select']);
                })->first()->description;
    } elseif (strpos(self::$quote_path,'dishonesty') !== false) {
      $term = BondLibraries::where('require_dishonesty',1)
                ->whereHas('get_state', function($q) {
                  $q->where('initial',self::$fill_info['state_select']);
                })->first()->description;
    } elseif (strpos(self::$quote_path,'job') !== false) {
      $term = BondLibraries::where('require_location',1)
                ->whereHas('get_state', function($q) {
                  $q->where('initial',self::$fill_info['state_select']);
                })->first()->description;
    } elseif (strpos(self::$quote_path, 'generic') !== false) {
      $term = BondLibraries::where('is_generic',1)
                ->whereHas('get_state', function($q) {
                  $q->where('initial',self::$fill_info['state_select']);
                })->first()->description;
    }

    // Clean Term
    if (!isset($bypass_term)) {
      $term   = preg_replace("/[^a-zA-Z\s]/", "", $term);
      $search = '';
      foreach (explode(' ', $term) as $idx => $value) {
        if ($idx < 2) {
          $search .= "{$value} ";
        } else {
          break;
        }
      }
    }

    $browser
      ->waitFor('#page-04a-bondlist.active')
      ->type('#bondlist-autocomplete',$search);

    sleep(1);
    $browser
      ->waitFor('.tt-menu.tt-open')
      ->script('$(".tt-dataset.tt-dataset-bonds div:first-child").click();');

    $browser->waitUntil('Rapyd.Page.Bondquote.props.bond_info.db_info');
    $bond_id          = $browser->script('return '.self::$js_prop.'.bond_info.db_info.id;')[0];
    self::$bond_info  = BondLibraries::find($bond_id);
  }

  protected function state_selector(Browser $browser)
  {
    $browser
      ->waitFor('#page-03a-stateselect.active')
      ->waitUntil(self::$js_prop.'.user_selection.state_selected')
      ->click('#page-03a-stateselect.active button.no')
      ->waitFor('#page-03b-stateselect.active')
      ->click('#page-03b-stateselect.active .selectStyle-value')
      ->assertVisible('#page-03b-stateselect.active .openSelect .select_inner')
      ->script('$("#page-03b-stateselect.active #'.self::$fill_info['state_select'].'").click();');
  }

  protected function government_yes(Browser $browser)
  {
    $browser
      ->click('#page-02a-government button.yes')
      ->waitFor('#page-02b-government.active');

    if(strpos(self::$quote_path, 'local') !== false) {
      self::government_yes_local($browser);
    } elseif(strpos(self::$quote_path, 'state') !== false) {
      self::government_yes_state($browser);
    } elseif(strpos(self::$quote_path, 'fed') !== false) {
      self::government_yes_federal($browser);
    }
  }

  protected function government_yes_local(Browser $browser)
  {
    $browser
      ->click('#page-02b-government button[data-prop="user_selection.is_government.local=true;user_selection.is_government.state=false;user_selection.is_government.fed=false"]')
      ->waitFor('#page-03a-stateselect.active');
  }

  protected function government_yes_state(Browser $browser)
  {
    $browser
      ->click('#page-02b-government button[data-prop="user_selection.is_government.state=true;user_selection.is_government.local=false;user_selection.is_government.fed=false"]')
      ->waitFor('#page-03a-stateselect.active');
  } 

  protected function government_yes_federal(Browser $browser)
  {
    $browser
      ->click('#page-02b-government button[data-prop="user_selection.is_government.fed=true;user_selection.is_government.local=false;user_selection.is_government.local=false"]')
      ->waitFor('#page-04b-bondlist.active');
  }

  protected function government_no(Browser $browser)
  {
    $browser
      ->click('#page-02a-government button.no');

    self::state_selector($browser);

    // LOGIN CHECK
    if (self::$logged_in) {

    } else {
      self::autocomplete_eval($browser);
    }
    self::determine_bond_limit_custom($browser);
  }

  protected function determine_bond_limit_custom(Browser $browser)
  {
    if (self::$bond_info->limits_custom) {
      $browser
        ->waitFor('#page-05a-bondinfo.active')
        ->type('#bond_custom_limit_input',20000)
        ->click('#page-05a-bondinfo.active .continue-button');
    }

    if ($browser->waitFor('#page-06a-bondselect.active')) {
      $browser->click('#page-06a-bondselect.active button.yes');
    }
    
    if (self::$logged_in) {
      $browser
        ->waitFor('#page-08a-principalcheck.active')
        ->click('#page-08a-principalcheck.active button.no');
    }

    self::fill_business_info($browser);
  }

  protected function fill_business_info(Browser $browser)
  {
    $browser
      ->waitFor('#page-09a-basicinfo.active')
      ->type('#biznameinput',self::$fill_info['business']['name'])
      ->click('#page-09a-basicinfo.active .continue-button');

    // Business Formation and Years in Business
    if (!self::$bond_info->require_vehicle) {
      $entity = self::$fill_info['business']['entity'];
      $browser
        ->waitFor('#page-09c-basicinfo.active')
        ->click('button[data-prop="bond_info.business_formation='.$entity.'"]')
        ->waitFor('#page-12a-jobinfo.active')
        ->click('button[data-prop="bond_info.business_years='.self::$fill_info['business']['years'].'"');
    }

    // Business Phone Number
    $browser
      ->waitFor('#page-09d-basicinfo.active')
      ->type('#custphone-input', self::$fill_info['business']['phone'])
      ->click('#page-09d-basicinfo.active .continue-button');


    if (!self::$logged_in) {
      $browser
        ->waitFor('#page-09h-email.active')
        ->type('#non_auth_email', self::$fill_info['principal']['email'])
        ->click('#page-09h-email.active .continue-button');
    }

    $browser
      ->waitFor('#page-09e-basicinfo.active')
      ->type('#cust_biz_street', self::$fill_info['business']['address']['street'])
      ->type('#cust_biz_city', self::$fill_info['business']['address']['city'])
      ->select('#cust_biz_state', self::$fill_info['business']['address']['state'])
      ->type('#cust_biz_zip', self::$fill_info['business']['address']['zip'])
      ->click('#page-09e-basicinfo.active .continue-button')
      ->waitFor('#page-09f-basicinfo.active');

    if (self::$fill_info['principal']['mail_addy_same']) {
      $browser->click('#page-09f-basicinfo.active button.yes');
    } else {
      $browser->click('#page-09f-basicinfo.active button.no');
    }

    // Vehicle Info
    if (self::$bond_info->require_vehicle) {
      $browser
        ->waitFor('#page-11a-vehicle.active')
        ->type('#vehicle_vin_input', self::$fill_info['vehicle']['vin'])
        ->click('#vehicle_vin_submit')
        ->waitFor('#page-11b-vehicle.active')
        ->click('#page-11b-vehicle.active .continue-button')
        ->waitFor('#page-11c-vehicle.active')
        ->click('#page-11c-vehicle.active button.yes')
        ->waitFor('#page-11d-vehicle.active')
        ->click('#page-11d-vehicle button.yes');
    }

    // ERISA
    if (self::$bond_info->require_erisa) {
    }

    // Dishonesty
    if (self::$bond_info->require_dishonesty) {
    }

    // Job Location
    if (self::$bond_info->require_location) {
    }    

    // Require principal?
    if (self::$bond_info->require_info) {
      self::fill_principal_info($browser);
    }

    self::quote_policy($browser);
  }

  protected function fill_principal_info(Browser $browser)
  {
    $browser
      ->waitFor('#page-13a-principal.active')
      ->type('#principal_name_first', self::$fill_info['principal']['name_first'])
      ->type('#principal_name_last', self::$fill_info['principal']['name_last'])
      ->click('#page-13a-principal.active .continue-button');

    // Require ssn?
    if(self::$bond_info->require_credit) {
      $browser
        ->waitFor('#page-13b-principal.active')
        ->type('#principal_ssn_input',self::$fill_info['principal']['ssn'])
        ->click('#page-13b-principal.active .continue-button')
        ->waitFor('#page-13e-principal.active')
        ->click('#page-13e-principal.active button.yes');

      if (self::$fill_info['business']['entity'] != 'soleprop') {
        $browser
          ->waitFor('#page-13d-principal.active')
          ->click('#page-13d-principal.active button.no');
      }
    }
  }

  protected function quote_policy(Browser $browser)
  {
    // Assign agent id
    $browser->script(self::$js_prop.'.agent_id='.self::$fill_info['agent_id'].';');

    $browser
      ->waitFor('#page-14a-summary.active')
      ->click('#page-14a-summary.active .is-today button')
      ->assertPresent('#get_quote_submit')
      ->click('#get_quote_submit');
    
    sleep(5); // Allow enough time for policy to quote

    // Determine if quote was successful
    $quotes = $browser->script('return '.self::$js_prop.'.bond_quotes;')[0];
    if (count($quotes)) {
      $browser
        ->waitFor('#page-15-quote.active')
        ->assertPresent('#page-15-quote.active .continue-button')
        ->script('$("#page-15-quote.active .continue-button").click();');

      // LOGIN CHECK
      if (self::$logged_in) {
        $browser
          ->waitFor('#page-16-additionalfee.active')
          ->click('#page-16-additionalfee.active button.no')
          ->waitFor('#page-18-purchaser.active')
          ->click('#page-18-purchaser.active button.no')
          ->waitFor('#page-21-signupload.active');

        // Skip uploading application
        $browser
          ->script("Rapyd.Core.SpaSystem.spaHistory(document.getElementById('policy_application_file'),'23-delivery-type-select');");

        self::delivery_options($browser);
      } else {
        self::principal_electronic_agreement($browser);
      }
    } else {
      $browser->waitFor('#page-14c-summary.active'); // Policy couldn't quote
    }
  }

  protected function principal_electronic_agreement(Browser $browser)
  {
    $browser
      ->waitFor('#page-21-signupload.active')
      ->click('#page-21-signupload.active .continue-button')
      ->waitFor('#page-29-user-agreement.active')
      ->click('#page-29-user-agreement.active .continue-button');

    self::delivery_options($browser);
  }

  protected function delivery_options(Browser $browser)
  {
    $browser
      ->waitFor('#page-23-delivery-type-select.active')
      ->click('#page-23-delivery-type-select.active button.'.self::$fill_info['delivery_standard'])
      ->waitFor('#page-24-delivery-address-select.active')
      ->click('button[data-prop="user_selection.delivery.address_used=mailing"');

    self::finalize_quote_purchase($browser);
  }

  protected function finalize_quote_purchase(Browser $browser)
  {
    // Still need to look at click method if installments available on quote
    $browser
      ->waitFor('#page-22-bondquoteselect.active')
      ->script('$("#page-22-bondquoteselect.active .quote_options:first-child  > .quote_selector_ele").eq(0).click();');

    // LOGIN CHECK
    if (self::$logged_in) {
      $browser
        ->waitFor('#page-26-payment-type.active')
        ->click('#page-26-payment-type.active button.no')
        ->waitFor('#page-27-payment-agency-bill.active');

        // Purchase Successful
        $browser
          ->assertVisible('.active .continue-button.issue-policy')
          ->click('.active .continue-button.issue-policy')
          ->waitFor('#page-28-bond-issued-confirmation.active');
    } else {
      $browser
        ->waitFor('#page-27-payment-credit-card.active')
        ->type('#card-number', self::$fill_info['credit_card']['number'])
        ->click('#page-27-payment-credit-card.active');

      // Select Exp Month
      $browser
        ->script('$("#card-expiration-month").prev().click();');
      $browser
        ->script('$("#card-expiration-month").next().children("#'.self::$fill_info['credit_card']['month'].'").click();');

      // Select Exp Year
      $browser
        ->script('$("#card-expiration-year").prev().click();');
      $browser
        ->script('$("#card-expiration-year").next().children("#'.self::$fill_info['credit_card']['year'].'").click();');

      // Purchase Successful
      $browser
        ->assertVisible('.active .continue-button.issue-policy')
        ->click('.active .continue-button.issue-policy');

      sleep(5); // Allow Auth.net to return purchase

      $browser
        ->waitFor('#page-28-bond-issued-confirmation.active');
    }

    \RapydCommand::output("Bond Successfully made it to purchase!","black","green");
  }
}
