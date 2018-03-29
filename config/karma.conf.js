//jshint strict: false
module.exports = function(config) {
  config.set({
    basePath: './app',
    files: [
      'libs/angular/angular.js',
      'libs/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'tests/**/*.js',
      'app/**/*.html'
    ],
    preprocessors: {
      'app/**/*.html': 'ng-html2js'
    },
    reporters: [ 'progress' ],
    colors: true,
    autoWatch: false,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};


