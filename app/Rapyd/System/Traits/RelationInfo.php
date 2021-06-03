<?php 

namespace Rapyd;

use ErrorException;
use Illuminate\Database\Eloquent\Relations\Relation;
use ReflectionClass;
use ReflectionMethod;

trait RelationshipsInfo
{
  public function relationship_info() {
    $model          = new static;
    $relationships  = [];

    foreach(
      (new ReflectionClass($model))->getMethods(ReflectionMethod::IS_PUBLIC) as 
      $idx => $method
    ) { 
      if (
        strpos($method->getName(), 'getIndex') !== false        || // Swisl Bypass 
        strpos($method->getName(), 'indexRecord') !== false     || // Swisl Bypass 
        strpos($method->getName(), 'indexedRecord')  !== false  || // Swisl Bypass 
        $method->class != get_class($model) ||
        !empty($method->getParameters())    ||
        $method->getName() == __FUNCTION__
      ) {
        continue;
      }

      try {
        $return = $method->invoke($model);

        if ($return instanceof Relation) {
          $relationships[$method->getName()] = [
            'type' => (new ReflectionClass($return))->getShortName(),
            'model' => (new ReflectionClass($return->getRelated()))->getName()
          ];
        }
      } catch(ErrorException $e) {}
    }
    
    return $relationships;
  }
}