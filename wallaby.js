var wallabyWebpack = require('wallaby-webpack');
var webpackTestConfig = {};
var path = require('path');

module.exports = function(wallaby) {

  webpackTestConfig.entryPatterns = [
    'test/spec-bundle-wallaby.js',
    'src/**/*.spec.js',
  ]

  return {
    files: [
      {pattern: 'node_modules/jquery/dist/jquery.min.js', instrument: false},
      {pattern: 'node_modules/angular/angular.min.js', instrument: false},
      {pattern: 'node_modules/angular-material-icons/angular-material-icons.min.js', instrument: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', instrument: false},
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      {pattern: 'node_modules/chai-as-promised/lib/chai-as-promised.js', instrument: false},
      {pattern: 'node_modules/chai-jquery/chai-jquery.js', instrument: false},
      {pattern: 'node_modules/sinon/pkg/sinon-1.17.5.js', instrument: false},
      {pattern: 'node_modules/sinon-chai/lib/sinon-chai.js', instrument: false},
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*.*s', load: false},
      {pattern: 'src/**/*.spec.ts', ignore: true},
      {pattern: 'src/**/*.spec.js', ignore: true},
      {pattern: 'test/test-helpers/*.ts', instrument: false, load: false},
      {pattern: 'test/spec-bundle-wallaby.ts', instrument: false, load: false}
    ],
    tests: [
      {pattern: 'src/**/*.spec.js', load: false},
      {pattern: 'src/**/*.spec.ts', load: false}
    ],

    testFramework: 'mocha',

    debug: true,

    postprocessor: wallabyWebpack(webpackTestConfig),
    bootstrap: function() {
      window.chai = chai;
      window.expect = chai.expect;
      window.assert = chai.assert;
      window.should = undefined;
      window.should = chai.should();
      window.__moduleBundler.loadTests();
    }
  };
};