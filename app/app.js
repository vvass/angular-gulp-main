(function () {

  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: './partials/login/login-page.html'
      });
  }

  require('./js/directives/login-directive.js');

}());