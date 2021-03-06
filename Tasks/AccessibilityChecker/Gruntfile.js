module.exports = function (grunt) {
  'use strict';

  var GruntConfiguration = require('./lib/gruntConfiguration.js');
  var gruntConf = new GruntConfiguration(grunt);

  var config = gruntConf.getConfig();

  grunt.initConfig({
    "axe-webdriver": {
      PhantomJS: {
        options: config.options,
        urls: config.urls,
        dest: "TEST-accessibility-output.json",
        junitDest: config.testResultPath ? config.testResultPath + "/TEST-accessibility-output.xml" : "TEST-accessibility-output.xml",
        loginurl: config.loginurl,
        baseUrl: config.baseUrl,
        userControlName: config.userControlName,
        passControlName: config.passControlName,
        user: config.user,
        pass: config.pass,
        titleToWait: config.titleToWait,
        loginButtonName: config.loginButtonName
      }
    },
  });

  grunt.loadNpmTasks('grunt-axe-webdriver-customscripts');
  grunt.registerTask('default', ['axe-webdriver']);
};