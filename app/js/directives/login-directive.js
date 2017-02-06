
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