<?php

namespace App;

use Laravolt\Avatar\Avatar;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Http;
use Spatie\Permission\Traits\HasRoles;
use QCod\Gamify\Gamify;
use Laravel\Passport\HasApiTokens;

use Rapyd\Model\BondPolicies;
use Rapyd\Model\CreditReport;
use Rapyd\Model\CreditReportLegacy;
use Rapyd\Model\CmsBlogPost;
use Rapyd\Model\BondLibraryState;
use Rapyd\Model\BondLibraries;
use Rapyd\Model\Usergroups;

class User extends Authenticatable implements MustVerifyEmail
{
  use HasApiTokens;
	use Notifiable;
	use HasRoles;
	use Gamify;

	use \Swis\Laravel\Fulltext\Indexable;

  protected $connection           = 'service_users';
  protected $indexContentColumns  = [];

	protected $indexTitleColumns = [
		'email',
		'name_first',
		'name_last',
		'address_street',
		'address_city',
		'state.full',
		'address_zip',
	];

	protected $guarded = [];

	// TEMP: Turned off for export/import usage
	// Will Consider turning back on at a later date
	// protected $hidden = [
	//     'password', 'remember_token',
	// ];

	protected $casts = [
		'email_verified_at' => 'datetime',
	];

	// THIS IS REFERENCING A JOIN TABLE
	public function policies()
	{
		return $this->belongsToMany(BondPolicies::class,'bond_policy_principals','policy_id','user_id');
	}

	public function usergroup()
	{
		return $this->belongsToMany(Usergroups::class, 'usergroup_users', 'user_id', 'usergroup_id');
	}

  public function agency($agency_id=null)
  {
    return $this->usergroup->where('usergroup_type_id',$agency_id ?? 2)->first();

  }

	public function created_policies()
	{
		return $this->hasMany(BondPolicies::class, 'agent_id', 'id');
  }

  public function most_common_bond()
  {
    $policies = $this->created_policies->groupBy('bond_library_id');
    $count    = 0;
    $bond     = null;

    foreach($policies as $bond_id => $policy) {
      if($policy->count() > $count) {
        $count = $policy->count();
        $bond = BondLibraries::find($bond_id);
      }
    }

    return $bond;
  }

	public function cms_posts()
	{
		return $this->hasMany(CmsBlogPost::class, 'user_id', 'id');
	}

  public function published_posts()
  {
    return $this->hasMany(CmsBlogPost::class, 'user_id', 'id')
            ->where('is_published',1); 
  }

  public static function all_cms_post_count($limit = 10)
  {
    $posts = \m_CmsBlogPost::select('user_id', \DB::raw('count(*) as total'))
                ->groupBy('user_id')
                ->orderBy('total')
                ->limit($limit)->get();

    return  self::whereIn('id',$posts->pluck('user_id'))->get();
  }

  public function legacy_credit_report()
  {
    return $this->hasOne(CreditReportLegacy::class, 'user_id', 'id');
  }

  public function last_credit_report()
  {
    return $this->hasOne(CreditReport::class, 'user_id', 'id')->latest();
  }

	public function credit_reports()
	{
		return $this->hasMany(CreditReport::class, 'user_id', 'id');
	}
  // Report needs to have been created within 90 days to be valid
  public function valid_credit_report()
  {
    return $this->hasOne(CreditReport::class, 'user_id', 'id')
                ->where('created_at','>=',\Carbon\Carbon::today()->subDays(90))->latest();
  }

	public function full_name()
	{
		return $this->name_first . ' ' . $this->name_last;
	}

	public function phone_number()
	{
		if ($this->phone_main) {
			return "(" . substr($this->phone_main, 0, 3) . ") " . substr($this->phone_main, 3, 3) . "-" . substr($this->phone_main, 6);
		}

		return '';
	}

	public function address()
	{
		// Check for street 2 append if exists
		$street = $this->address_2 ? $this->address_street . ' ' . $this->address_2 : $this->address_street;
		if ($street) {
			return $street . ', ' .
				$this->address_city  . ', ' .
				$this->address_state . ' ' .
				$this->address_zip;
		} else {
			return '';
		}
	}

	// This relationship is for Indexable & full text search
	public function state()
	{
		return $this->hasOne(BondLibraryState::class, 'initial', 'address_state');
	}

	public function get_coordinates()
	{
		if (!$this->address()) {
			return ['latitude' => '', 'longitude' => ''];
		}

		$address = urlencode($this->address());
		$url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' . $address . '&key=' . config('google.key');
		$resp = Http::get($url)->json();
		// response status will be 'OK', if able to geocode given address
		if ($resp['status'] == 'OK') {
			// get the important data
			$lati = isset($resp['results'][0]['geometry']['location']['lat']) ? $resp['results'][0]['geometry']['location']['lat'] : "";
			$longi = isset($resp['results'][0]['geometry']['location']['lng']) ? $resp['results'][0]['geometry']['location']['lng'] : "";

			// verify if data is complete
			if ($lati && $longi) {
				$this->update(['address_latitude' => $lati, 'address_longitude' => $longi]);
				return ['latitude' => (float)$this->address_latitude, 'longitude' => (float)$this->address_longitude];
			}
		}
  }
}
