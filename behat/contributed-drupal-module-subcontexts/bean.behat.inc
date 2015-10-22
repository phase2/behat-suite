<?php

use Drupal\DrupalExtension\Context\DrupalSubContextBase;
use Drupal\DrupalExtension\Context\DrupalSubContextInterface;


class BeanSubContext extends DrupalSubContextBase implements DrupalSubContextInterface {
  /**
   * If on a bean, go to edit page.
   *
   * @Given /^edit the current bean$/
   */
  public function editTheCurrentBean() {
    $this->assertSession()->addressMatches("/^\/block\/([a-zA-Z0-9\-]*)\/view/");
    $base_url = $this->getSession()->getCurrentUrl();
    $edit_url = str_replace("/view", "/edit", $base_url);
    $this->getSession()->visit($edit_url);
  }

}