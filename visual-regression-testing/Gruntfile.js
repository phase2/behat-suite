module.exports = function(grunt) {
  // Initialize global configuration variables.
  var config = grunt.file.readJSON('Gruntconfig.json');

  grunt.initConfig({
    phantomcss: {
      options: {
        mismatchTolerance: 0.05,
        screenshots: 'prod/screenshots',
        results: 'prod/results',
        rootUrl: config.rootUrls.prod,
      },

      fullwidth: {
        options: {
          viewportSize: [1280, 800],
        },
        src: ['./tests/fullwidth/*.js']
      },

      midwidth: {
        options: {
          viewportSize: [768, 1024],
        },
        src: ['./tests/midwidth/*.js']
      },

      narrow: {
        options: {
          viewportSize: [600, 960],
        },
        src: ['./tests/narrow/*.js']
      },

      tiny: {
        options: {
          viewportSize: [375, 667],
        },
        src: ['./tests/tiny/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-phantomcss');
  grunt.loadNpmTasks('grunt-continue');

  grunt.registerTask('phantom', function(env, breakpoint) {
    env = typeof env !== 'undefined' ? env : 'prod';

    // Specify environment and directories
    grunt.config.set('phantomcss.options.rootUrl', config.rootUrls[env]);
    grunt.config.set('phantomcss.options.screenshots', env + '/screenshots');
    grunt.config.set('phantomcss.options.results', env + '/results');
    // Specify breakpoint else test all
    if (typeof breakpoint !== 'undefined') {
      grunt.task.run('phantomcss:' + breakpoint);
    } else {
      // Using grunt-continue to run all sub-tasks regardless of errors
      // We want the grunt job to fail in the end if any tests failed.
      // Since grunt-continue turns errors into warnings we will fail if any warnings are thrown.
      grunt.task.run('continue:on');
      grunt.task.run('phantomcss');
      grunt.task.run('continue:off');
      grunt.task.run('continue:fail-on-warning');
    }
  });
  grunt.registerTask('default', ['phantom:prod']);
};
