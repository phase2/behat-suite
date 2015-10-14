/**
 * Hypercare Visual Regression Testing - Search interactive test example.
 */

casper.thenOpen(phantom.rootUrl + 'search/site')
  .then(function() {
    this.evaluate(function() {
      // Override web fonts
      jQuery('*').css('font-family', 'arial, sans-serif');
      // Outline search results, hide their contents, and set fixed height.
      jQuery('.search-result').css('background', 'gray').css('border', '1px solid black').css('overflow', 'hidden').css('height', '10px');
      jQuery('#footer-legal-wrapper a').css('background', 'gray').css('border', '1px solid black').css('height', '20px').css('overflow', 'hidden');
      jQuery('#footer-legal-wrapper a span').css('opacity', '0');
      jQuery('.search-result *').css('opacity', '0');
      // Open 'Filter by type' facet.
      jQuery('#block-facetapi-gi88xvjatwe8mxkhwyib2s2zjyaj1ida h4.block-title').click();
    });
    phantomcss.screenshot('#page-wrapper', 'search');
  });
