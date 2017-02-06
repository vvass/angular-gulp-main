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



/**
 * @namespace loginDirective
 * @desc      This is a login directive for the login page.
 * @memberOf  loginPageDirectives
 */

angular
  .module('app')
  .directive("loginDirective", loginDirectives );

function loginDirectives(){
  return {
    restrict : "AEC",
    template : "./login/login-page.html"
  }
};
/**
 * @namespace StorePasswordController
 * @desc      This is how we store users to the couchbase server under 'Users'
 * @memberOf  loginPageControllers
 */


angular
  .module('app')
  .controller('StorePasswordController', StorePasswordController);

function StorePasswordController() {
  var vm = this;

  /*
   *  @namespace setUser
   *  @desc      Main function to store users.
   *  @memberOf  StorePasswordController
   */
  function setUser() {
    console.log("Storing user!!")
  }



}