/**
 * Created by vvass on 2/2/17.
 */
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
