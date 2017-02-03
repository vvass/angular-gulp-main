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
      // templateUrl: '<p>Hello</p>'
      template: '<p>Hello</p>'

    })
    .otherwise({redirectTo: '/error'});;
}



/**
 * @namespace loginDirective
 * @desc      This is a test directive
 * @memberOf  loginPageDirectives
 * @returns   {JSON}
 */

angular
  .module('app')
  .directive("loginDirective", loginDirectives );

function loginDirectives(){
  return {
    restrict : "A",
    template : "../partials/login/login-page.html"
  }
};