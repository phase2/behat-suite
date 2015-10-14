window.onload = function () {
  // Global vars so JS won't have to load more than once.
  IMAGE = document.getElementById('image_diff');
  RESULTS = document.getElementsByClassName('result');
  HEADERS = document.getElementsByTagName('h4');
  FILTERS = document.getElementsByClassName("env");
  RESULTSLEN = RESULTS.length;

  loadImage();

  var resultClick = function() {  
    document.location = this.dataset.href;
  };

  // Filter by env.
  var filter = function() {
    for (var i=0; i<RESULTSLEN; i++) {
      if (this.id === 'all' || RESULTS[i].dataset.href.toLowerCase().indexOf('/' + this.id + '/') > -1) {
        RESULTS[i].style.display = 'table-row';
      } else {
        RESULTS[i].style.display = 'none';
      }
    }

    // Hide headers if no items within associated list by checking list's height.
    env = this.id.charAt(0).toUpperCase() + this.id.slice(1);
    for (var i=0; i<HEADERS.length; i++) {
      HEADERS[i].firstChild.innerHTML = env;
    }

    // Highlight filter.
    for (var i=0; i<FILTERS.length; i++) {
      FILTERS[i].className = "env";
    }
    this.className = "env active";
  };

  // Add listener to results.
  for (var i=0; i<RESULTSLEN; i++) {
    RESULTS[i].addEventListener('click', resultClick, false); 
  }

  // Add listener to env filters.
  for (var i=0; i<FILTERS.length; i++){
      FILTERS[i].addEventListener('click', filter, false);
  }
};
window.onhashchange = function () {
  loadImage();
};

function loadImage() {
  var src = "./tests" + window.location.hash.substring(1) + ".png";
  IMAGE.src = src;
}

