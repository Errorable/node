'use strict';
module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/web-errors.min.js': ['dist/web-errors.js']
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/web-errors.js': ['index.js'],
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: ['Gruntfile.js']
      },
      js: {
        src: ['*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
      all: [
        '!dist/**/*.js'
      ]
    },
    mochacli: {
      options: {
        reporter: 'nyan',
        bail: true
      },
      all: ['test/*.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: '<%= jshint.js.src %>',
        tasks: ['jshint:js', 'mochacli']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochacli']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'mochacli', 'browserify', 'uglify']);
};
