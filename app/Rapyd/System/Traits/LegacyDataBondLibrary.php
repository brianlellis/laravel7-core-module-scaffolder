<?php

namespace Rapyd;

trait LegacyDataBondlibrary
{
  // TERM EVALUATIONS
  public function term_day()
  {
    return (
      $this->CommonExpirationDay != '30' &&
      $this->CommonExpirationDay != '31' &&
      ($this->CommonExpirationDay == '28' && $this->CommonExpirationMonth != '2')
    ) ? $this->CommonExpirationDay : null;
  }

  public function term_day_last()
  {
    return (
      ($this->CommonExpirationDay == '28' && $this->CommonExpirationMonth == '2') ||
      ($this->CommonExpirationDay == '30' || $this->CommonExpirationDay == '31')
    ) ? 1 : 0;
  }

  public function term_month()
  {
    return $this->CommonExpirationMonth ?? null;
  }

  public function term_year_even()
  {
    return $this->CommonExpirationTerm == '100' ? 1 : 0;
  }

  public function term_year_odd()
  {
    return $this->CommonExpirationTerm == '101' ? 1 : 0;
  }

  public function term_year()
  {
    return (
      $this->CommonExpirationTerm != '100' && 
      $this->CommonExpirationTerm != '101'
    ) ? $this->CommonExpirationTerm : null;
  }

  public function term_birth_day()
  {
    return strrpos($this->CommonExpiration, 'irthday') !== false ? 1 : 0;
  }

  public function term_birth_month()
  {
    return (strrpos($this->CommonExpiration, 'irth') !== false) ? 1 : 0;
  }

  public function term_license_date()
  {
    return strrpos($this->CommonExpiration, 'icense') !== false ? 1 : 0;
  }

  // BOND LIBRARY EVAL
  public function renewal_code()
  {
    return strrpos(strtolower($this->RenewalCode), "not") === false ? strtoupper($this->RenewalCode) : 'NO';
  }

  public function require_location()
  {
    return strrpos($this->TypeOfApp, "ocation") !== false ? 1 : 0;
  }

  public function is_generic()
  {
    return $this->ObligeeID === 10000 ? 1 : 0;
  }

  public function is_bound_principal()
  {
    return $this->ObligeeID === 20000 ? 1 : 0;
  }

  public function is_government()
  {
    return $this->ObligeeType === 4 ? 0 : 1;
  }


  // BOND LIMIT EVALUATOR
  public function eval_limits()
  {
    // GET ALL LIMITS FOR SINGULAR BOND
    $limits = self::$all_legacy_bonds->filter(function ($item) use ($bond) {
      return (
        strtolower($item->BondFormDescription) == strtolower($bond->BondFormDescription) &&
        $item->ObligeeID == $bond->ObligeeID &&
        $item->BondForm == $bond->BondForm
      );
    });

    foreach ($limits as $val) {
      // Determine Key Based on $bond->RefID
      $key_id = ceil(intval($bond->RefID) / 1000);
      if (!isset(self::$legacy_bond_limits[$key_id])) {
        self::$legacy_bond_limits[$key_id] = [];
      }

      self::$legacy_bond_limits[$key_id][] = array(
        'id'         => self::$persisted_limit_id, // This needs to be defined so I can ref later
        'bond_library_id' => $bond->RefID,
        'is_custom'  => $val->Limit == 'Custom' ? 1 : 0,
        'custom_min' => $val->Limit == 'Custom' ? intval($val->MinRange) : null,
        'custom_max' => $val->Limit == 'Custom' ? intval($val->MaxRange) : null,
        'amount'     => $val->Limit == 'Custom' ? null : intval(preg_replace('/[\$\,]/', '', $val->Limit))
      );
      self::$persisted_limit_id++;
    }
  }
}