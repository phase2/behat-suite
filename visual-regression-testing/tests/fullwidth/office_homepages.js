/**
 * Hypercare Visual Regression Testing - Multi-page test example.
 */

var offices = [
  'office_one',
  'office_two',
  'office_three'
];

offices.forEach(function(office) {
  var officeName = office.replace(/\//g, '-');

  casper.thenOpen(phantom.rootUrl + office)
    .then(function() {
      this.evaluate(function() {
        // Override web fonts
        jQuery('*').css('font-family', 'arial, sans-serif');
        // Outline containers.
        jQuery('#page-wrapper .block').css('background', 'gray').css('border', '1px solid black');
        jQuery('#footer-nav-wrapper .menu a span').css('background', 'gray').css('border', '1px solid black').css('color', 'transparent').css('width', '75px').css('min-width', '75px').css('display', 'inline-block').css('height', '15px').css('overflow', 'hidden');
        jQuery('#footer-legal-wrapper a').css('background', 'gray').css('border', '1px solid black').css('height', '20px').css('overflow', 'hidden');

        // Hide content.
        jQuery('.block-bean > *').css('opacity', '0');
        jQuery('.block-bean').css('height', '200px').css('overflow', 'hidden');
      });
    })
    .then(function() {
      phantomcss.screenshot('#content-wrapper', 'office_homepage_' + officeName);
    });
});
