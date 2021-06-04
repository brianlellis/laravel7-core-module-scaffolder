<?php

namespace Rapyd\Observers;

use Rapyd\Model\BondLibraries;

class BondLibraryObserver
{
  public static function model_used()
  {
    return '\Rapyd\Model\BondLibraries';
  }

  public function created(BondLibraries $bond)
  {
      //
  }

  public function updated(BondLibraries $bond)
  {
      //
  }

  public function deleted(BondLibraries $bond)
  {
    $bond->get_limit->delete();
  }

  public function forceDeleted(BondLibraries $bond)
  {
      //
  }
}