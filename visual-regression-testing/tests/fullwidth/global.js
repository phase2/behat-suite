/**
 * Hypercare Visual Regression Testing - Global tests example.
 */

casper.thenOpen(phantom.rootUrl)
  .then(function() {
    this.evaluate(function() {
      // Override web fonts
      jQuery('*').css('font-family', 'arial, sans-serif');
    });
  })
  .then(function() {
    phantomcss.screenshot('#header-wrapper', 'site_wide_header');
    phantomcss.screenshot('#footer-nav-wrapper', 'site_wide_footer_nav');
    phantomcss.screenshot('#footer-legal-wrapper', 'site_wide_footer_legal');
  });
