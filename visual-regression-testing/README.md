# Visual Regression Test Suite - README #

## Setup ##
1. Confirm nodeJS and ruby are installed
2. npm install -g grunt-cli
3. npm install
4. Create Gruntconfig.json file to define rootUrls, with the following structure:
  {
    "rootUrls": {
      "local": "http://<name>.energy.p2devcloud.gov/",
      "dev": "http://dev.cms.doe.gov/",
      "stage": "http://stage.cms.doe.gov/",
      "prod": "http://energy.gov/"
    }
  }
5. Configure Gruntfile phantomcss subtasks. By default they are set to categorize tests by 4 viewports.

## Commands ##
* grunt - Run all tests for all breakpoints against prod
* grunt phantom:stage - Run all tests for all breakpoints against stage
* grunt phantom:dev:fullwidth - Run all fullwidth tests against dev
