(function () {

  'use strict';

  angular
    .module('app')
    .config(Configuration);

  Configuration.$inject = ['$routeProvider'];

  function Configuration($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '<p>Hello</p>'
      })
      .otherwise({redirectTo: '/error'});;
  }

}());