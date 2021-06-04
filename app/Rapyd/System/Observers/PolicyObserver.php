<?php

namespace Rapyd\Observers;

use Rapyd\Model\BondPolicies;

class PolicyObserver
{
  public $afterCommit = true;

  public function model_used()
  {
    return '\Rapyd\Model\BondPolicies';
  }

  public function created(BondPolicies $policy)
  {
      //
  }

  public function updated(BondPolicies $policy)
  {
      //
  }

  public function deleted(BondPolicies $policy)
  {
    \m_PolicyHistory::where('policy_id',$policy->id)->delete();
    \m_PolicyAccountingDisbursements::where('policy_id',$policy->id)->delete();
    \m_PolicyAccountingInvoices::where('policy_id',$policy->id)->delete();
    \m_PolicyAccountingMatchPayments::where('policy_id',$policy->id)->delete();
    \m_PolicyAddresses::where('policy_id',$policy->id)->delete();
    \m_PolicyAdjustments::where('policy_id',$policy->id)->delete();
    \m_PolicyAttachedAuthMethods::where('policy_id',$policy->id)->delete();
    \m_PolicyCancellations::where('policy_id',$policy->id)->delete();
    \m_PolicyDishonesty::where('policy_id',$policy->id)->delete();
    \m_PolicyErisa::where('policy_id',$policy->id)->delete();
    \m_PolicyFees::where('policy_id',$policy->id)->delete();
    \m_PolicyForms::where('policy_id',$policy->id)->delete();
    \m_PolicyGenericObligees::where('policy_id',$policy->id)->delete();
    \m_PolicyHistory::where('policy_id',$policy->id)->delete();
    \m_PolicyJoblocations::where('policy_id',$policy->id)->delete();
    \m_PolicyPrincipals::where('policy_id',$policy->id)->delete();
    \m_PolicyQuotes::where('id',$policy->id)->delete();
    \m_PolicyReinstatements::where('policy_id',$policy->id)->delete();
    \m_PolicyVehicles::where('policy_id',$policy->id)->delete();

    // Files
    // TODO: Find the files on server and remove to not have orphaned assets
    \m_PolicyFiles::where('policy_id',$policy->id)->delete();

    // Payments
    // TODO: Reverse charge on Authorize.net also if applicable
    \m_PolicyAccountingPayments::where('policy_id',$policy->id)->delete();

    //------- IF RENEWAL
    if ($policy->policy_parent_id ?? false) {
      \m_BondPolicies::where('id',$policy->policy_parent_id)->update([
        'auto_renewal_attempt'  => 0
      ]);
    }
  }
}