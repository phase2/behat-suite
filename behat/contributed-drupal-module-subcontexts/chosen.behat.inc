<?php
/**
 * @file
 * Provide Behat step-definitions for Chosen.
 */

use Drupal\DrupalExtension\Context\DrupalSubContextBase;
use Drupal\DrupalExtension\Context\DrupalSubContextInterface;

class ChosenSubContext extends DrupalSubContextBase implements DrupalSubContextInterface {
  public static function getAlias() {
    return 'chosen';
  }
}
