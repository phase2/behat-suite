# Behat Test Suite - README #

## Setup. ##
 1. copy the behat folder to your project folder hopefully above your sites docroot
 2. cd /path/to/project/folder/behat
 3. ./build.sh

 At this point you will have the following folders within your
 /path/to/project/folder/behat/:
bin/
composer.lock
features/
features/bootstrap
vendor/

4. copy the example/behat/default.feature to your features/ folder
5. create a behat.yml (see example/behat/behat.yml)
6. test by running: bin/behat
