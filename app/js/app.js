'use strict';

angular
  .module('app', ['ngRoute']);

angular
  .module('app')
  .config(Configuration);

Configuration.$inject = ['$routeProvider'];

function Configuration($routeProvider) {

  $routeProvider
    .when('/login', {
      templateUrl: './login/login-page.html'
      // template: '<p>Hello</p>'

    })
    .otherwise({redirectTo: '/error'});;
}

