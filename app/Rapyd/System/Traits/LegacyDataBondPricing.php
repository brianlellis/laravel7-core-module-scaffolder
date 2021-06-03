<?php

namespace Rapyd;

trait LegacyDataBondPricing
{
  // TERM EVALUATIONS
  public function subgroups()
  {
    $data_arr = [];
    foreach (self::subgroup_fetch() as $idx => $subgroup) {
      $subgroup_arr = [
        'id'                => ($idx+1),
        'group_id'          => $subgroup->PriceGroup,
        'trustees'          => $subgroup->NumberOfTrustees ? '> '. intval($subgroup->NumberOfTrustees) : null,
        'bond_limit'        => $subgroup->BondLimit ? '> '. intval($subgroup->BondLimit) : null,
        'employees'         => $subgroup->NumberOfEmployees ? '> ' . intval($subgroup->NumberOfEmployees) : null,
        'bankruptcy_open'   => $subgroup->BankruptcyOpen,
        'bankruptcy_date'   => $subgroup->BankruptcyDate,
        'bankruptcy_months' => $subgroup->BankruptcyMonths ? '<= ' . $subgroup->BankruptcyMonths : null,
        'non_qual_assets'   => $subgroup->NonQualAssets,
        'labor_union'       => $subgroup->LaborUnion,
        'referral_code'     => $subgroup->ReferralCode,
        'employer_issued_securities' => $subgroup->EmployerIssuedSecurities,
      ];

      // String Literal to be Used Later in PHP eval() method for pricing quotes
      foreach ([
        'lien'                  => $subgroup->Lien,
        'judgment'              => $subgroup->Judgment,
        'credit_score'          => $subgroup->CreditScore,
        'past_due'              => $subgroup->AmountPastDue,
        'accounts_satisfactory' => $subgroup->NumberOfSatisfactoryAccounts,
        'accounts_delinquent'   => $subgroup->NumberOfDelinquentAccounts,
        'business_years'        => $subgroup->YearsInBusinessApp,
        'judgments_liens'       => $subgroup->AmountPastDueJudgmentsLiens,
      ] as $key => $val) {
        $val = str_replace('|||', '', $val);
        $val = str_replace('|OR|', ' || ', $val);
        $val = str_replace('<|', '< ', $val);
        $val = str_replace('>|', '> ', $val);

        $subgroup_arr[$key] = $val;
      }

      // Child Support
      foreach ([
        'child_support'       => $subgroup->AmountChildSupport,
        'past_due_ex_medical' => $subgroup->AmountPastDueExMedical,
        'past_due_medical'    => $subgroup->AmountPastDueMedical,
        'public_records'      => $subgroup->PublicRecords,
      ] as $key => $val) {
        $val = $val > -1 ? intval($val) : null;
        $subgroup_arr[$key] = $val !== null ? '> ' . $val : $val;
      }

      // ------ YEARLY PRICING DONE HERE TO MATCH SUBGROUP ID
      $subgroup_arr['yearly_groups'] = [];
      foreach ([
        $subgroup->Year1Min,
        $subgroup->Year2Min,
        $subgroup->Year3Min,
        $subgroup->Year4Min,
        $subgroup->Year5Min,
        $subgroup->Year6Min,
        $subgroup->Year7Min,
        $subgroup->Year8Min,
        $subgroup->Year9Min,
        $subgroup->Year10Min
      ] as $year_idx => $val) {
        if ($val) {
          switch ($year_idx+1) {
            case 1: $price_val  = $subgroup->Year1Price;  $surety_val = $subgroup->Year1Surety; break;
            case 2: $price_val  = $subgroup->Year2Price;  $surety_val = $subgroup->Year2Surety; break;
            case 3: $price_val  = $subgroup->Year3Price;  $surety_val = $subgroup->Year3Surety; break;
            case 4: $price_val  = $subgroup->Year4Price;  $surety_val = $subgroup->Year4Surety; break;
            case 5: $price_val  = $subgroup->Year5Price;  $surety_val = $subgroup->Year5Surety; break;
            case 6: $price_val  = $subgroup->Year6Price;  $surety_val = $subgroup->Year6Surety; break;
            case 7: $price_val  = $subgroup->Year7Price;  $surety_val = $subgroup->Year7Surety; break;
            case 8: $price_val  = $subgroup->Year8Price;  $surety_val = $subgroup->Year8Surety; break;
            case 9: $price_val  = $subgroup->Year9Price;  $surety_val = $subgroup->Year9Surety; break;
            case 10: $price_val = $subgroup->Year10Price; $surety_val = $subgroup->Year10Surety; break;
          }

          $subgroup_yearly_arr = array(
            'year'          => ($year_idx+1),
            'group_id'      => ($idx+1), // ACTUALLY SUBGROUP ID
            'min_amount'    => intval($val),
            'price_rate'    => $price_val,
            'surety_code'   => $surety_val
          );

          $subgroup_arr['yearly_groups'][] = $subgroup_yearly_arr;
        }
      }

      $data_arr[] = $subgroup_arr;
    }

    return $data_arr;
  }
  public function subgroup_fetch()
  {
    return $this->hasMany(static::class, 'PriceGroup', 'PriceGroup')->get();
  }
}